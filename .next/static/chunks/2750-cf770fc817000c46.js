(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2750],{

/***/ 64191:
/***/ (function(module) {

module.exports = "/_next/static/images/grant-animation-80f44cc9e0c84be4ac8cede79778bacb.gif";

/***/ }),

/***/ 89646:
/***/ (function(module) {

module.exports = "/_next/static/images/grant-88724b5d7fb1ef87ec017bd1561f0049.gif";

/***/ }),

/***/ 80011:
/***/ (function(module) {

module.exports = "/_next/static/images/invoice-animation-static-7d2e364d862b68365ce16d5ec80c28a5.jpg";

/***/ }),

/***/ 78293:
/***/ (function(module) {

module.exports = "/_next/static/images/invoice-animation-55433eff19a59893abf3966cd185dae7.gif";

/***/ }),

/***/ 86142:
/***/ (function(module) {

module.exports = "/_next/static/images/receipt-animation-static-2e1a1ab8c1ddff1f1f893a06bc0f10b7.jpg";

/***/ }),

/***/ 24396:
/***/ (function(module) {

module.exports = "/_next/static/images/receipt-animation-66f14349930a4b1d5eae7d019b0cacf7.gif";

/***/ }),

/***/ 85662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FH": function() { return /* binding */ serializeAddress; },
/* harmony export */   "H5": function() { return /* binding */ SimpleLocationFieldRenderer; }
/* harmony export */ });
/* unused harmony export FormikLocationFieldRenderer */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39138);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36968);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75472);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41609);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50361);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67294);
/* harmony import */ var _shopify_address__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(73930);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82580);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(86896);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29242);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87262);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(66943);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(85893);












var _excluded = ["info", "required", "value", "name", "label", "onChange", "id", "error"];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









/** Constants */

/** Countries present in InputTypeCountry dropdown but not Shopify's API.
 * All except Antarctica (AQ) are U.S. territories and use that address format.
 * The Shopify default address format is also U.S. format therefore for all
 * of these we use the U.S. default.
 * All language codes in locales.js are supported by the Shopify API 👍
 */


var missingCountries = ['AS', 'AQ', 'GU', 'MH', 'FM', 'MP', 'PW', 'PR', 'VI'];
var addressFormatter = new _shopify_address__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z('EN');

var wrangleAddressData = function wrangleAddressData(addressInfo) {
  if (typeof addressInfo !== 'object') {
    return addressInfo;
  }

  var formLayout = addressInfo.formatting.edit;
  var necessaryFields = ['address1', 'address2', 'city', 'zip', 'province']; // Get form fields in correct order for the chosen country

  var matches = formLayout.match(/([A-Za-z])\w+/g).filter(function (match) {
    return necessaryFields.includes(match);
  }); // Change field names to match https://github.com/Shopify/quilt/blob/master/packages/address/src/utilities.ts

  var mappedMatches = matches.map(function (match) {
    if (match === 'zip') {
      return 'postalCode';
    } else if (match === 'province') {
      return 'zone';
    } else {
      return match;
    }
  });
  var addressFormFields = Object.entries(addressInfo.labels).filter(function (entry) {
    return mappedMatches.includes(entry[0]);
  }).sort(function (a, b) {
    return mappedMatches.indexOf(a[0]) - mappedMatches.indexOf(b[0]);
  }); // Check if we need to render drop-down list of "zones" (i.e. provinces, states, etc.)

  var zones = lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(addressInfo, 'zones', []);

  if (mappedMatches.includes('zone') && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(zones)) {
    var zoneIndex = addressFormFields.find(function (idx) {
      return idx[0] === 'zone';
    });
    zoneIndex.push(addressInfo.zones);
  }

  return addressFormFields;
};

var serializeAddress = function serializeAddress(address) {
  return Object.keys(address).sort().map(function (k) {
    return address[k];
  }).join('\n');
};
/** Upon changing selectedCountry, if previous address fields are no longer needed,
 * it clears them i.e. changing from Canada to Germany in the Expense form we no
 * longer need 'zone' in our payeeLocation.address object.
 */

var getAddressFieldDifferences = function getAddressFieldDifferences(formAddressValues, addressFields) {
  var addressFieldsArray = addressFields.map(function (field) {
    return field[0];
  });
  var differenceInAddressFields = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(Object.keys(formAddressValues).filter(function (key) {
    return !addressFieldsArray.includes(key);
  }));

  if (differenceInAddressFields) {
    return lodash_pick__WEBPACK_IMPORTED_MODULE_6___default()(formAddressValues, addressFieldsArray);
  } else {
    return formAddressValues;
  }
};

var buildZoneOption = function buildZoneOption(zone) {
  return {
    value: zone.name,
    label: "".concat(lodash_truncate__WEBPACK_IMPORTED_MODULE_4___default()(zone.name, {
      length: 30
    }), " - ").concat(zone.code)
  };
};

var ZoneSelect = function ZoneSelect(_ref) {
  var info = _ref.info,
      required = _ref.required,
      value = _ref.value,
      name = _ref.name,
      label = _ref.label,
      _onChange = _ref.onChange,
      id = _ref.id,
      error = _ref.error,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3___default()(_ref, _excluded);

  var zones = info || [];
  var zoneOptions = react__WEBPACK_IMPORTED_MODULE_13__.useMemo(function () {
    return lodash_orderBy__WEBPACK_IMPORTED_MODULE_7___default()(zones.map(buildZoneOption), 'label');
  }, [zones]); // Reset zone if not supported

  react__WEBPACK_IMPORTED_MODULE_13__.useEffect(function () {
    if (zoneOptions) {
      var formValueZone = value;

      if (formValueZone && !zoneOptions.find(function (option) {
        return option.value === formValueZone;
      })) {
        _onChange({
          target: {
            name: name,
            value: null
          }
        });
      }
    }
  }, [zoneOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, _objectSpread({
    name: name,
    required: required
  }, props)), {}, {
    inputId: id,
    minWidth: 150,
    options: zoneOptions,
    error: error,
    placeholder: "Please select your ".concat(label) // TODO i18n
    ,
    "data-cy": "address-".concat(name) // TODO: Should not be locked on payee-address
    ,
    value: zoneOptions.find(function (option) {
      return (option === null || option === void 0 ? void 0 : option.value) === value;
    }) || null,
    onChange: function onChange(v) {
      _onChange({
        target: {
          name: name,
          value: v.value
        }
      });
    }
  }));
};

var FormikLocationFieldRenderer = function FormikLocationFieldRenderer(_ref2) {
  var name = _ref2.name,
      label = _ref2.label,
      required = _ref2.required,
      prefix = _ref2.prefix,
      info = _ref2.info;
  var validate = required ? function (value) {
    return value ? undefined : "".concat(label, " is required");
  } : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(formik__WEBPACK_IMPORTED_MODULE_14__/* .Field */ .gN, {
    name: "".concat(prefix, ".").concat(name),
    validate: validate,
    children: function children(_ref3) {
      var field = _ref3.field,
          meta = _ref3.meta;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        name: field.name,
        label: label,
        labelFontSize: "13px",
        mt: 3,
        error: meta.error,
        children: function children(inputProps) {
          switch (name) {
            case 'zone':
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(ZoneSelect, _objectSpread({
                id: inputProps.id,
                name: inputProps.name,
                required: required,
                label: label,
                info: info
              }, field));

            default:
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
                error: meta.error,
                "data-cy": "address-".concat(name)
              }));
          }
        }
      });
    }
  }, name);
};
var SimpleLocationFieldRenderer = function SimpleLocationFieldRenderer(_ref4) {
  var name = _ref4.name,
      label = _ref4.label,
      required = _ref4.required,
      prefix = _ref4.prefix,
      value = _ref4.value,
      info = _ref4.info,
      onChange = _ref4.onChange,
      fieldProps = _ref4.fieldProps;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_13__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      isTouched = _React$useState2[0],
      setIsTouched = _React$useState2[1];

  var error = required && isTouched && lodash_isNil__WEBPACK_IMPORTED_MODULE_8___default()(value) ? "".concat(label, " is required") : undefined;
  var inputName = prefix ? "".concat(prefix, ".").concat(name) : name;

  var dispatchOnChange = function dispatchOnChange(e) {
    onChange(e);

    if (!isTouched) {
      setIsTouched(true);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    name: inputName,
    label: label,
    labelFontSize: "13px",
    mt: 3,
    error: error,
    required: required
  }, fieldProps), {}, {
    children: function children(inputProps) {
      switch (name) {
        case 'zone':
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(ZoneSelect, {
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
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
            value: value,
            error: error,
            onChange: dispatchOnChange,
            "data-cy": "address-".concat(name)
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
var I18nAddressFields = function I18nAddressFields(_ref5) {
  var selectedCountry = _ref5.selectedCountry,
      value = _ref5.value,
      onCountryChange = _ref5.onCountryChange,
      required = _ref5.required,
      prefix = _ref5.prefix,
      onLoadError = _ref5.onLoadError,
      Component = _ref5.Component,
      fieldProps = _ref5.fieldProps;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)();
  /** If country chosen from InputTypeCountry is one of missingCountries, use 'US' instead */

  var country = missingCountries.includes(selectedCountry) ? 'US' : selectedCountry;
  /** Prepare the address form data */

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_13__.useState(null),
      _React$useState4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState3, 2),
      data = _React$useState4[0],
      setData = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_13__.useState(null),
      _React$useState6 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState5, 2),
      fields = _React$useState6[0],
      setFields = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_13__.useState(true),
      _React$useState8 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState7, 2),
      loading = _React$useState8[0],
      setLoading = _React$useState8[1];
  /** Pass user's chosen locale to AddressFormatter if present. */


  react__WEBPACK_IMPORTED_MODULE_13__.useEffect(function () {
    if (intl.locale) {
      addressFormatter.updateLocale(intl.locale);
    }
  }, [intl.locale]);
  react__WEBPACK_IMPORTED_MODULE_13__.useEffect(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref6 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_12___default().mark(function _callee() {
        var response, countryInfo, addressFields;
        return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_12___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                setLoading(true);
                _context.next = 4;
                return addressFormatter.getCountry(country);

              case 4:
                response = _context.sent;
                setData(lodash_pick__WEBPACK_IMPORTED_MODULE_6___default()(response, ['formatting', 'labels', 'optionalLabels', 'zones']));
                countryInfo = lodash_pick__WEBPACK_IMPORTED_MODULE_6___default()(response, ['formatting', 'labels', 'optionalLabels', 'zones']);
                addressFields = wrangleAddressData(countryInfo);
                setFields(addressFields);
                onCountryChange(getAddressFieldDifferences(value, addressFields));
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                onLoadError === null || onLoadError === void 0 ? void 0 : onLoadError(); // eslint-disable-next-line no-console

                console.warn('Call to Shopify API failed. Falling back to plain address form. Error: ', _context.t0.message);

              case 16:
                _context.prev = 16;
                setLoading(false);
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12, 16, 19]]);
      }));

      return function fetchData() {
        return _ref6.apply(this, arguments);
      };
    }();

    fetchData();
  }, [selectedCountry]);

  if (!selectedCountry) {
    return null;
  }

  if (loading || !fields) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      width: "100%",
      height: 163,
      mt: 3
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: fields.map(function (_ref7) {
      var _ref8 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 3),
          fieldName = _ref8[0],
          fieldLabel = _ref8[1],
          fieldInfo = _ref8[2];

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(Component, {
        prefix: prefix,
        name: fieldName,
        label: fieldLabel,
        info: fieldInfo,
        value: value === null || value === void 0 ? void 0 : value[fieldName],
        required: required === false ? false : !Object.keys(data === null || data === void 0 ? void 0 : data.optionalLabels).includes(fieldName),
        fieldProps: fieldProps,
        onChange: function onChange(_ref9) {
          var _ref9$target = _ref9.target,
              name = _ref9$target.name,
              fieldValue = _ref9$target.value;
          return onCountryChange(lodash_set__WEBPACK_IMPORTED_MODULE_5___default()(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_11___default()(value || {}), name, fieldValue));
        }
      }, fieldName);
    })
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
/* harmony default export */ __webpack_exports__["ZP"] = (I18nAddressFields);
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

/***/ }),

/***/ 41627:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44012);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);




/**
 * Displays a location object
 */




var LocationAddress = function LocationAddress(_ref) {
  var location = _ref.location,
      isLoading = _ref.isLoading,
      showMessageIfEmpty = _ref.showMessageIfEmpty;

  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        height: "1em",
        mb: "0.5em"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        height: "1em",
        mb: "0.5em"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        height: "1em"
      })]
    });
  } else if (!location || !location.address && !location.country) {
    return !showMessageIfEmpty ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__/* .Span */ .Dr, {
      fontStyle: "italic",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        id: "LocationAddress.empty",
        defaultMessage: [{
          "type": 0,
          "value": "No address configured yet"
        }]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [location.address, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), location.country]
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
/* harmony default export */ __webpack_exports__["Z"] = (LocationAddress);

/***/ }),

/***/ 37070:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gw": function() { return /* binding */ DROPZONE_ACCEPT_IMAGES; },
/* harmony export */   "bQ": function() { return /* binding */ DROPZONE_ACCEPT_ALL; }
/* harmony export */ });
/* unused harmony export DROPZONE_ACCEPT_PDF */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57557);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(28687);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71387);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55162);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52015);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(57632);
/* harmony import */ var _lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82055);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88705);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(771);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89669);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85893);




var _excluded = ["onSuccess", "onReject", "children", "isLoading", "loadingProgress", "minHeight", "size", "fontSize", "mockImageGenerator", "accept", "minSize", "maxSize", "name", "error", "value", "isMulti", "kind"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var DROPZONE_ACCEPT_IMAGES = {
  'image/*': ['.jpeg', '.png']
};
var DROPZONE_ACCEPT_PDF = {
  'application/pdf': ['.pdf']
};
var DROPZONE_ACCEPT_ALL = _objectSpread(_objectSpread({}, DROPZONE_ACCEPT_IMAGES), DROPZONE_ACCEPT_PDF);
var Dropzone = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "StyledDropzone__Dropzone",
  componentId: "sc-979d5c-0"
})(["border:1px dashed #c4c7cc;border-radius:10px;text-align:center;background:white;display:flex;justify-content:center;align-items:center;overflow:hidden;", " ", " img{max-height:100%;max-width:100%;}"], function (props) {
  return props.onClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_13__/* .css */ .iv)(["cursor:pointer;&:hover:not(:disabled){background:#f9f9f9;border-color:", ";}&:focus{outline:0;border-color:", ";}"], function (props) {
    return props.theme.colors.primary[300];
  }, function (props) {
    return props.theme.colors.primary[500];
  });
}, function (props) {
  return props.error && (0,styled_components__WEBPACK_IMPORTED_MODULE_13__/* .css */ .iv)(["border:1px solid ", ";"], props.theme.colors.red[500]);
});
var ReplaceContainer = styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "StyledDropzone__ReplaceContainer",
  componentId: "sc-979d5c-1"
})(["box-sizing:border-box;background:rgba(49,50,51,0.5);color:#ffffff;cursor:pointer;position:absolute;display:flex;align-items:center;justify-content:center;width:100%;height:24px;padding:8px;margin-top:-24px;font-size:12px;line-height:1em;&:hover{background:rgba(49,50,51,0.6);}"]);
/**
 * A dropzone to upload one or multiple files
 */

var StyledDropzone = function StyledDropzone(_ref) {
  var onSuccess = _ref.onSuccess,
      onReject = _ref.onReject,
      children = _ref.children,
      isLoading = _ref.isLoading,
      loadingProgress = _ref.loadingProgress,
      minHeight = _ref.minHeight,
      size = _ref.size,
      fontSize = _ref.fontSize,
      mockImageGenerator = _ref.mockImageGenerator,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      name = _ref.name,
      error = _ref.error,
      value = _ref.value,
      isMulti = _ref.isMulti,
      kind = _ref.kind,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _excluded);

  var imgUploaderParams = {
    isMulti: isMulti,
    mockImageGenerator: mockImageGenerator,
    onSuccess: onSuccess,
    onReject: onReject,
    kind: kind
  };

  var _useImageUploader = (0,_lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_5__/* .useImageUploader */ .w)(imgUploaderParams),
      uploadFiles = _useImageUploader.uploadFiles,
      isUploading = _useImageUploader.isUploading,
      uploadProgress = _useImageUploader.uploadProgress;

  var dropzoneParams = {
    accept: accept,
    minSize: minSize,
    maxSize: maxSize,
    multiple: isMulti,
    onDrop: uploadFiles
  };

  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_14__.useDropzone)(dropzoneParams),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;

  minHeight = size || minHeight;
  var innerMinHeight = minHeight - 2; // -2 To account for the borders

  var dropProps = getRootProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(Dropzone, _objectSpread(_objectSpread(_objectSpread({}, props), value ? lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(dropProps, ['onClick']) : dropProps), {}, {
    minHeight: size || minHeight,
    size: size,
    error: error,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", _objectSpread({
      name: name
    }, getInputProps())), isLoading || isUploading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      size: "100%",
      minHeight: innerMinHeight,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        size: innerMinHeight,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledSpinner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          size: "70%"
        })
      }), isUploading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        fontSize: "9px",
        children: [uploadProgress, "%"]
      }), isLoading && !lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(loadingProgress) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [loadingProgress, "%"]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      position: "relative",
      children: isDragActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        color: "primary.500",
        fontSize: "12px",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          mb: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_15__/* .Download */ .U, {
            size: 20
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
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
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [!value ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          color: error ? 'red.500' : 'black.500',
          px: 2,
          fontSize: fontSize,
          children: error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_17__/* .ExclamationCircle */ .b, {
              color: "#E03F6A",
              size: 16
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
              fontWeight: 600,
              ml: 1,
              children: error
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("br", {})]
          }) : isMulti ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
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
              'i18n-link': (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* .getI18nLink */ .fw)()
            }
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
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
              'i18n-link': (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* .getI18nLink */ .fw)()
            },
            tagName: "span"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            size: size,
            url: value,
            border: "none"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ReplaceContainer, {
            onClick: dropProps.onClick,
            role: "button",
            tabIndex: 0,
            onKeyDown: function onKeyDown(event) {
              if (event.key === 'Enter') {
                event.preventDefault();
                dropProps.onClick();
              }
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
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
  mockImageGenerator: function mockImageGenerator() {
    return "https://loremflickr.com/120/120?lock=".concat((0,uuid__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)());
  },
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
/* harmony default export */ __webpack_exports__["ZP"] = (StyledDropzone);

/***/ }),

/***/ 90307:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40986);
/* harmony import */ var _I18nAddressFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85662);
/* harmony import */ var _InputTypeCountry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32143);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87262);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93150);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85893);




var _excluded = ["id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var DEFAULT_LOCATION = {
  country: null,
  address: null,
  structured: null
};
/**
 * A component to input a location. It tries to use the structured address if available,
 * and fallbacks on the raw address if not.
 */

var StyledInputLocation = function StyledInputLocation(_ref) {
  var name = _ref.name,
      location = _ref.location,
      autoDetectCountry = _ref.autoDetectCountry,
      labelFontSize = _ref.labelFontSize,
      labelFontWeight = _ref.labelFontWeight,
      _onChange = _ref.onChange,
      errors = _ref.errors,
      prefix = _ref.prefix,
      required = _ref.required;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState, 2),
      useFallback = _React$useState2[0],
      setUseFallback = _React$useState2[1];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
  var forceLegacyFormat = Boolean(!(location !== null && location !== void 0 && location.structured) && (location === null || location === void 0 ? void 0 : location.address));
  var hasCountry = Boolean(location === null || location === void 0 ? void 0 : location.country);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      name: "".concat(prefix, "country"),
      htmlFor: "".concat(prefix, "country"),
      label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        id: "ExpenseForm.ChooseCountry",
        defaultMessage: [{
          "type": 0,
          "value": "Choose country"
        }]
      }),
      labelFontSize: labelFontSize,
      labelFontWeight: labelFontWeight,
      error: (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_5__/* .formatFormErrorMessage */ .$m)(intl, errors === null || errors === void 0 ? void 0 : errors.country),
      required: required,
      children: function children(_ref2) {
        var id = _ref2.id,
            inputProps = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, _excluded);

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_InputTypeCountry__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
          inputId: id,
          value: location === null || location === void 0 ? void 0 : location.country,
          autoDetect: autoDetectCountry,
          onChange: function onChange(country) {
            _onChange(_objectSpread(_objectSpread({}, location || DEFAULT_LOCATION), {}, {
              country: country
            }));

            if (setUseFallback) {
              setUseFallback(false);
            }
          }
        }));
      }
    }), hasCountry && !useFallback && !forceLegacyFormat ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_I18nAddressFields__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
      selectedCountry: location.country,
      value: location.structured || {},
      onLoadError: function onLoadError() {
        return setUseFallback(true);
      } // TODO convert from structured to raw
      ,
      Component: _I18nAddressFields__WEBPACK_IMPORTED_MODULE_6__/* .SimpleLocationFieldRenderer */ .H5,
      fieldProps: {
        labelFontSize: labelFontSize,
        labelFontWeight: labelFontWeight
      },
      required: required,
      onCountryChange: function onCountryChange(structured) {
        return _onChange(lodash_pick__WEBPACK_IMPORTED_MODULE_3___default()(_objectSpread(_objectSpread({}, location || DEFAULT_LOCATION), {}, {
          structured: structured
        }), ['name', 'address', 'country', 'structured']));
      }
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      name: "".concat(prefix).concat(name),
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
      children: function children(inputProps) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StyledTextarea__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
          disabled: !hasCountry,
          "data-cy": "".concat(prefix, "address"),
          minHeight: 100,
          placeholder: "P. Sherman 42\nWallaby Way\nSydney",
          defaultValue: (location === null || location === void 0 ? void 0 : location.address) || '',
          onChange: function onChange(e) {
            return _onChange(_objectSpread(_objectSpread({}, location || DEFAULT_LOCATION), {}, {
              address: e.target.value
            }));
          }
        }));
      }
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
/* harmony default export */ __webpack_exports__["Z"] = (StyledInputLocation);

/***/ }),

/***/ 46115:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59854);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52015);
/* harmony import */ var _lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22642);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51561);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);













var AmountLine = styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"].p.withConfig */ .ZP.p.withConfig({
  displayName: "ExpenseAmountBreakdown__AmountLine",
  componentId: "sc-1c1kak0-0"
})(["font-size:14px;line-height:20px;color:", ";white-space:nowrap;margin:0;margin-bottom:4px;padding-left:12px;"], function (props) {
  return props.theme.colors.black[900];
});
var TotalAmountLine = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(AmountLine).withConfig({
  displayName: "ExpenseAmountBreakdown__TotalAmountLine",
  componentId: "sc-1c1kak0-1"
})(["font-size:16px;line-height:24px;font-weight:bold;"]);
/**
 * Displays the total amount for all the expense items.
 */

var ExpenseAmountBreakdown = function ExpenseAmountBreakdown(_ref) {
  var items = _ref.items,
      currency = _ref.currency,
      taxes = _ref.taxes,
      expenseTotalAmount = _ref.expenseTotalAmount;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();

  var _computeExpenseAmount = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__/* .computeExpenseAmounts */ .Fo)(items, taxes),
      hasTaxes = _computeExpenseAmount.hasTaxes,
      totalInvoiced = _computeExpenseAmount.totalInvoiced,
      totalAmount = _computeExpenseAmount.totalAmount;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    textAlign: "right",
    children: [hasTaxes && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "flex-end",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(AmountLine, {
        "data-cy": "expense-invoiced-amount",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
          textTransform: "capitalize",
          mr: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            id: "L8seEc",
            defaultMessage: [{
              "type": 0,
              "value": "Subtotal"
            }]
          }), currency && " (".concat(currency, ")")]
        }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          amount: totalInvoiced,
          precision: 2,
          currency: currency,
          showCurrencyCode: false,
          amountStyles: null
        })]
      }), taxes.map(function (tax) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(AmountLine, {
          "data-cy": "tax-".concat(tax.type, "-expense-amount-line"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
            textTransform: "capitalize",
            mr: 3,
            children: [(0,_lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_2__/* .i18nTaxType */ .m)(intl, tax.type, 'short'), (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__/* .isTaxRateValid */ .Ou)(tax.rate) && " (".concat(lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(tax.rate * 100, 2), "%)")]
          }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            amount: !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__/* .isTaxRateValid */ .Ou)(tax.rate) ? null : (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__/* .getTaxAmount */ .L0)(totalInvoiced, tax),
            precision: 2,
            currency: currency,
            showCurrencyCode: false,
            amountStyles: null
          })]
        }, tax.type);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        width: "100%",
        my: "12px",
        borderColor: "black.500",
        borderStyle: "dotted"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(TotalAmountLine, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
        textTransform: "capitalize",
        mr: 3,
        children: intl.formatMessage({
          id: "TotalAmount",
          defaultMessage: [{
            "type": 0,
            "value": "Total amount"
          }]
        })
      }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
        color: "black.500",
        fontSize: "16px",
        letterSpacing: 0,
        "data-cy": "expense-items-total-amount",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          amount: expenseTotalAmount !== null && expenseTotalAmount !== void 0 ? expenseTotalAmount : totalAmount,
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
/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(ExpenseAmountBreakdown));

/***/ }),

/***/ 99754:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44012);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19878);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67001);
/* harmony import */ var _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89669);
/* harmony import */ var _ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41016);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);










var getFileName = function getFileName(intl, idx, totalNbFiles) {
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

var ExpenseAttachedFiles = function ExpenseAttachedFiles(_ref) {
  var files = _ref.files,
      onRemove = _ref.onRemove,
      showInvoice = _ref.showInvoice,
      collective = _ref.collective,
      expense = _ref.expense;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
    flexWrap: "wrap",
    children: [showInvoice && [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_1__/* ["default"].INVOICE */ .Z.INVOICE, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_1__/* ["default"].SETTLEMENT */ .Z.SETTLEMENT].includes(expense.type) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
      mr: 3,
      mb: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        expense: expense,
        collective: collective,
        children: function children(_ref2) {
          var isLoading = _ref2.isLoading,
              downloadInvoice = _ref2.downloadInvoice;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
          });
        }
      })
    }), files.map(function (file, idx) {
      var _file$info;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
        mr: 3,
        mb: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          size: 88,
          url: file.url,
          fileName: file.name || getFileName(intl, idx, files.length),
          fileSize: (_file$info = file.info) === null || _file$info === void 0 ? void 0 : _file$info.size,
          showFileName: true
        }), onRemove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
          ml: "4px",
          mt: "2px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            variant: "danger",
            fontSize: "12px",
            onClick: function onClick() {
              return onRemove(idx);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              id: "Remove",
              defaultMessage: [{
                "type": 0,
                "value": "Remove"
              }]
            })
          })
        })]
      }, file.id || file.url);
    })]
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
/* harmony default export */ __webpack_exports__["Z"] = (ExpenseAttachedFiles);

/***/ }),

/***/ 26004:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o0": function() { return /* binding */ EXPENSE_FORM_STEPS; },
  "ZP": function() { return /* binding */ expenses_ExpenseForm; },
  "dm": function() { return /* binding */ prepareExpenseForSubmit; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/first.js
var first = __webpack_require__(8804);
var first_default = /*#__PURE__*/__webpack_require__.n(first);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Undo/Undo.esm.js
var Undo_esm = __webpack_require__(79400);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/constants/expense-status.ts
var expense_status = __webpack_require__(38083);
// EXTERNAL MODULE: ./lib/constants/expenseTypes.ts
var expenseTypes = __webpack_require__(19878);
// EXTERNAL MODULE: ./lib/constants/payout-method.js
var payout_method = __webpack_require__(56508);
// EXTERNAL MODULE: ./lib/expenses.js
var expenses = __webpack_require__(45624);
// EXTERNAL MODULE: ./lib/form-utils.js
var form_utils = __webpack_require__(40986);
// EXTERNAL MODULE: ./lib/hooks/usePrevious.js
var usePrevious = __webpack_require__(19123);
// EXTERNAL MODULE: ./lib/prop-types.js
var prop_types = __webpack_require__(51048);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/expenses/lib/utils.js
var lib_utils = __webpack_require__(51561);
// EXTERNAL MODULE: ./components/ConfirmationModal.js
var ConfirmationModal = __webpack_require__(47988);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/I18nAddressFields.js
var I18nAddressFields = __webpack_require__(85662);
// EXTERNAL MODULE: ./components/icons/PrivateInfoIcon.js
var PrivateInfoIcon = __webpack_require__(40777);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputTags.js
var StyledInputTags = __webpack_require__(10732);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__(45578);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy);
// EXTERNAL MODULE: ./components/StyledDropzone.js
var StyledDropzone = __webpack_require__(37070);
;// CONCATENATED MODULE: ./components/expenses/lib/attachments.js


var attachmentDropzoneParams = {
  accept: StyledDropzone/* DROPZONE_ACCEPT_ALL */.bQ,
  minSize: 1024,
  // in bytes, =1ko
  maxSize: 10000 * 1024 // in bytes, =10mo

};
/**
 * Returns true if the attachment require adding a file
 */

var attachmentRequiresFile = function attachmentRequiresFile(expenseType) {
  return expenseType === expenseTypes/* default.RECEIPT */.Z.RECEIPT || expenseType === expenseTypes/* default.CHARGE */.Z.CHARGE;
};
// EXTERNAL MODULE: ./node_modules/react-dropzone/dist/es/index.js + 5 modules
var es = __webpack_require__(55162);
// EXTERNAL MODULE: ./lib/hooks/useImageUploader.js
var useImageUploader = __webpack_require__(82055);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/expenses/AddNewAttachedFilesButton.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var AddNewAttachedFilesButton = function AddNewAttachedFilesButton(_ref) {
  var disabled = _ref.disabled,
      mockImageGenerator = _ref.mockImageGenerator,
      onSuccess = _ref.onSuccess;

  var _useImageUploader = (0,useImageUploader/* useImageUploader */.w)({
    isMulti: true,
    mockImageGenerator: mockImageGenerator,
    onSuccess: onSuccess,
    kind: 'EXPENSE_ATTACHED_FILE'
  }),
      isUploading = _useImageUploader.isUploading,
      uploadFiles = _useImageUploader.uploadFiles;

  return /*#__PURE__*/(0,jsx_runtime.jsx)(es["default"], _objectSpread(_objectSpread({}, attachmentDropzoneParams), {}, {
    name: "addAttachedFile",
    disabled: disabled,
    multiple: true,
    onDrop: uploadFiles,
    children: function children(_ref2) {
      var getRootProps = _ref2.getRootProps,
          getInputProps = _ref2.getInputProps;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", _objectSpread({}, getInputProps())), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          buttonSize: "tiny",
          type: "button",
          minWidth: 135,
          "data-cy": "expense-add-item-btn",
          disabled: disabled,
          loading: isUploading,
          children: ["+\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "ExpenseForm.AddAttachedFile",
            defaultMessage: [{
              "type": 0,
              "value": "Add new document"
            }]
          })]
        })]
      }));
    }
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
/* harmony default export */ var expenses_AddNewAttachedFilesButton = (AddNewAttachedFilesButton);
// EXTERNAL MODULE: ./components/expenses/ExpenseAttachedFiles.js
var ExpenseAttachedFiles = __webpack_require__(99754);
;// CONCATENATED MODULE: ./components/expenses/ExpenseAttachedFilesForm.js





function ExpenseAttachedFilesForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpenseAttachedFilesForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpenseAttachedFilesForm_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpenseAttachedFilesForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }














var ExpenseAttachedFilesForm = function ExpenseAttachedFilesForm(_ref) {
  var onChange = _ref.onChange,
      disabled = _ref.disabled,
      defaultValue = _ref.defaultValue,
      title = _ref.title,
      description = _ref.description;

  var _React$useState = react.useState(uniqBy_default()(defaultValue, 'url')),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      files = _React$useState2[0],
      setFiles = _React$useState2[1];

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      alignItems: "center",
      my: 16,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
        color: "black.600",
        fontSize: "16px",
        lineHeight: "21px",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "OptionalFieldLabel",
          defaultMessage: [{
            "type": 1,
            "value": "field"
          }, {
            "type": 0,
            "value": " (optional)"
          }],
          values: {
            field: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              color: "black.900",
              fontSize: "16px",
              fontWeight: "bold",
              children: title
            })
          }
        }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(PrivateInfoIcon/* default */.Z, {
          color: "#969BA3",
          size: 12
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        flex: "1",
        borderColor: "black.300",
        mx: 2
      }), (files === null || files === void 0 ? void 0 : files.length) > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_AddNewAttachedFilesButton, {
        disabled: disabled,
        onSuccess: function onSuccess(newFiles) {
          var uploadedFiles = [].concat(toConsumableArray_default()(files), toConsumableArray_default()(newFiles));
          setFiles(uploadedFiles);
          onChange(uploadedFiles);
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      fontSize: "13px",
      color: "black.600",
      mb: 16,
      children: description
    }), (files === null || files === void 0 ? void 0 : files.length) > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseAttachedFiles/* default */.Z, {
      files: files,
      onRemove: function onRemove(idx) {
        var updatedFiles = toConsumableArray_default()(files);

        updatedFiles.splice(idx, 1);
        setFiles(updatedFiles);
        onChange(updatedFiles);
      }
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(StyledDropzone/* default */.ZP, ExpenseAttachedFilesForm_objectSpread(ExpenseAttachedFilesForm_objectSpread({}, attachmentDropzoneParams), {}, {
      name: "attachedFiles",
      kind: "EXPENSE_ATTACHED_FILE",
      disabled: disabled,
      minHeight: 72,
      onSuccess: function onSuccess(uploadedFiles) {
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
/* harmony default export */ var expenses_ExpenseAttachedFilesForm = (ExpenseAttachedFilesForm);
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
// EXTERNAL MODULE: ./node_modules/@opencollective/taxes/dist/index.js
var dist = __webpack_require__(41429);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(57632);
// EXTERNAL MODULE: ./lib/date-utils.js
var date_utils = __webpack_require__(15078);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var lib_errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/i18n/taxes.js
var taxes = __webpack_require__(22642);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/expenses/ExpenseAmountBreakdown.js
var ExpenseAmountBreakdown = __webpack_require__(46115);
// EXTERNAL MODULE: ./components/expenses/ExpenseGSTFormikFields.js
var ExpenseGSTFormikFields = __webpack_require__(48652);
// EXTERNAL MODULE: ./node_modules/lodash/unescape.js
var lodash_unescape = __webpack_require__(27955);
var unescape_default = /*#__PURE__*/__webpack_require__.n(lodash_unescape);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/escape.js
var lodash_escape = __webpack_require__(7187);
var escape_default = /*#__PURE__*/__webpack_require__.n(lodash_escape);
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(48966);
// EXTERNAL MODULE: ./components/RichTextEditor.js
var RichTextEditor = __webpack_require__(59139);
// EXTERNAL MODULE: ./components/StyledInputAmount.js
var StyledInputAmount = __webpack_require__(54029);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
;// CONCATENATED MODULE: ./components/expenses/ExpenseItemForm.js






function ExpenseItemForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpenseItemForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpenseItemForm_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpenseItemForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















var msg = (0,lib.defineMessages)({
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

var validateExpenseItem = function validateExpenseItem(expense, item) {
  var requiredFields = ['description', 'amount'];

  if (expense.type !== expenseTypes/* default.GRANT */.Z.GRANT) {
    requiredFields.push('incurredAt');
  }

  var errors = (0,form_utils/* requireFields */.ay)(item, requiredFields);

  if (isNaN(item.amount)) {
    errors.amount = (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_PATTERN */.pn.FORM_FIELD_PATTERN);
  }

  if (!isEmpty_default()(errors)) {
    return errors;
  } // Attachment URL


  if (attachmentRequiresFile(expense.type)) {
    if (!item.url) {
      errors.url = (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED);
    } else if (!(0,validator.isURL)(item.url)) {
      errors.url = (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_PATTERN */.pn.FORM_FIELD_PATTERN);
    }
  } // Show the expense currency errors on the amount field, since it's displayed next to it


  if (!expense.currency) {
    errors.amount = (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED);
  }

  return errors;
};

var AttachmentLabel = function AttachmentLabel() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
    fontSize: "13px",
    whiteSpace: "nowrap",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "Expense.Attachment",
      defaultMessage: [{
        "type": 0,
        "value": "Attachment"
      }]
    }), "\xA0\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(PrivateInfoIcon/* default */.Z, {
      color: "#969BA3"
    })]
  });
};
/**
 * Form for a single attachment. Must be used with Formik.
 */


var ExpenseItemForm = function ExpenseItemForm(_ref) {
  var attachment = _ref.attachment,
      errors = _ref.errors,
      onRemove = _ref.onRemove,
      onUploadError = _ref.onUploadError,
      currency = _ref.currency,
      requireFile = _ref.requireFile,
      requireDate = _ref.requireDate,
      isRichText = _ref.isRichText,
      name = _ref.name,
      isOptional = _ref.isOptional,
      editOnlyDescriptiveInfo = _ref.editOnlyDescriptiveInfo,
      hasMultiCurrency = _ref.hasMultiCurrency,
      availableCurrencies = _ref.availableCurrencies,
      onCurrencyChange = _ref.onCurrencyChange,
      isLastItem = _ref.isLastItem;
  var intl = (0,useIntl/* default */.Z)();
  var formatMessage = intl.formatMessage;
  var attachmentKey = "attachment-".concat(attachment.id || attachment.url);

  var getFieldName = function getFieldName(field) {
    return "".concat(name, ".").concat(field);
  };

  var getError = function getError(field) {
    return (0,form_utils/* formatFormErrorMessage */.$m)(intl, get_default()(errors, getFieldName(field)));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
    mb: 18,
    "data-cy": "expense-attachment-form",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexWrap: "wrap",
      children: [requireFile && /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* FastField */.Rt, {
        name: getFieldName('url'),
        children: function children(_ref2) {
          var _meta$error, _meta$error2;

          var field = _ref2.field,
              form = _ref2.form,
              meta = _ref2.meta;
          var hasValidUrl = field.value && (0,validator.isURL)(field.value);
          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            mr: [1, 4],
            mt: 2,
            htmlFor: attachmentKey,
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(AttachmentLabel, {}),
            "data-cy": "attachment-url-field",
            required: !isOptional,
            error: ((_meta$error = meta.error) === null || _meta$error === void 0 ? void 0 : _meta$error.type) !== lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED && (0,form_utils/* formatFormErrorMessage */.$m)(intl, meta.error),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledDropzone/* default */.ZP, ExpenseItemForm_objectSpread(ExpenseItemForm_objectSpread({}, attachmentDropzoneParams), {}, {
              kind: "EXPENSE_ITEM",
              "data-cy": "".concat(field.name, "-dropzone"),
              name: field.name,
              isMulti: false,
              error: ((_meta$error2 = meta.error) === null || _meta$error2 === void 0 ? void 0 : _meta$error2.type) === lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED ? formatMessage(msg.receiptRequired) : meta.error,
              onSuccess: function onSuccess(_ref3) {
                var url = _ref3.url;
                return form.setFieldValue(field.name, url);
              },
              mockImageGenerator: function mockImageGenerator() {
                return "https://loremflickr.com/120/120/invoice?lock=".concat(attachmentKey);
              },
              fontSize: "13px",
              size: [84, 112],
              value: hasValidUrl && field.value,
              onReject: onUploadError
            }))
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        flex: "1 1",
        minWidth: 170,
        mt: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          name: getFieldName('description'),
          error: getError('description'),
          htmlFor: "".concat(attachmentKey, "-description"),
          label: formatMessage(msg.descriptionLabel),
          labelFontSize: "13px",
          required: !isOptional,
          children: function children(inputProps) {
            return isRichText ? /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, ExpenseItemForm_objectSpread(ExpenseItemForm_objectSpread({
              as: RichTextEditor["default"]
            }, inputProps), {}, {
              inputName: inputProps.name,
              withBorders: true,
              version: "simplified"
            })) : /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
              name: inputProps.name,
              children: function children(_ref4) {
                var field = _ref4.field,
                    setFieldValue = _ref4.form.setFieldValue;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseItemForm_objectSpread(ExpenseItemForm_objectSpread({}, inputProps), {}, {
                  value: unescape_default()(field.value),
                  onChange: function onChange(e) {
                    return setFieldValue(inputProps.name, escape_default()(e.target.value));
                  }
                }));
              }
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "flex-end",
          flexDirection: ['column', 'row'],
          children: [requireDate && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            name: getFieldName('incurredAt'),
            error: getError('incurredAt'),
            htmlFor: "".concat(attachmentKey, "-incurredAt"),
            inputType: "date",
            required: !isOptional,
            label: formatMessage(msg.dateLabel),
            labelFontSize: "13px",
            flex: requireFile ? '1 1 44%' : '1 1 50%',
            mt: 3,
            mr: [0, '8px'],
            disabled: editOnlyDescriptiveInfo,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, ExpenseItemForm_objectSpread(ExpenseItemForm_objectSpread({
                maxHeight: 39
              }, inputProps), {}, {
                children: function children(_ref5) {
                  var field = _ref5.field;
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseItemForm_objectSpread(ExpenseItemForm_objectSpread(ExpenseItemForm_objectSpread({}, inputProps), field), {}, {
                    value: typeof field.value === 'string' ? field.value.split('T')[0] : field.value
                  }));
                }
              }));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            name: getFieldName('amount'),
            error: getError('amount'),
            htmlFor: "".concat(attachmentKey, "-amount"),
            label: formatMessage(msg.amountLabel),
            required: !isOptional,
            labelFontSize: "13px",
            inputType: "number",
            flex: "1 1 30%",
            minWidth: 150,
            maxWidth: ['100%', '40%'],
            mt: 3,
            disabled: editOnlyDescriptiveInfo,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
                name: inputProps.name,
                children: function children(_ref6) {
                  var field = _ref6.field,
                      setFieldValue = _ref6.form.setFieldValue;
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, ExpenseItemForm_objectSpread(ExpenseItemForm_objectSpread(ExpenseItemForm_objectSpread({}, field), inputProps), {}, {
                    currency: currency,
                    currencyDisplay: "CODE",
                    min: isOptional ? undefined : 1,
                    maxWidth: "100%",
                    placeholder: "0.00",
                    onChange: function onChange(value, e) {
                      return setFieldValue(e.target.name, value);
                    },
                    onCurrencyChange: onCurrencyChange,
                    hasCurrencyPicker: hasMultiCurrency || !currency // Makes sure user can re-select currency after a reset
                    ,
                    availableCurrencies: availableCurrencies
                  }));
                }
              });
            }
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      alignItems: "center",
      mt: 3,
      children: [onRemove && !editOnlyDescriptiveInfo && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        type: "button",
        buttonStyle: "dangerSecondary",
        buttonSize: "tiny",
        isBorderless: true,
        ml: -10,
        onClick: function onClick() {
          return onRemove(attachment);
        },
        children: formatMessage(requireFile ? msg.removeReceipt : msg.removeItem)
      }), !isLastItem && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
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
/* harmony default export */ var expenses_ExpenseItemForm = (/*#__PURE__*/react.memo(ExpenseItemForm));
// EXTERNAL MODULE: ./components/expenses/ExpenseVATFormikFields.js
var ExpenseVATFormikFields = __webpack_require__(1868);
;// CONCATENATED MODULE: ./components/expenses/ExpenseFormItems.js












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ExpenseFormItems_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpenseFormItems_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpenseFormItems_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpenseFormItems_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















/** Init a new expense item with default attributes */




var newExpenseItem = function newExpenseItem(attrs) {
  return ExpenseFormItems_objectSpread({
    id: (0,v4/* default */.Z)(),
    // we generate it here to properly key lists, but it won't be submitted to API
    incurredAt: (0,date_utils/* toIsoDateStr */.fM)(new Date()),
    description: '',
    amount: null,
    url: '',
    __isNew: true
  }, attrs);
};
/** Converts a list of filenames to expense item objects */


var filesListToItems = function filesListToItems(files) {
  return files.map(function (_ref) {
    var url = _ref.url;
    return newExpenseItem({
      url: url
    });
  });
};
/** Helper to add a new item to the form */


var addNewExpenseItem = function addNewExpenseItem(formik, defaultValues) {
  formik.setFieldValue('items', [].concat(toConsumableArray_default()(formik.values.items || []), [newExpenseItem(defaultValues)]));
};

var ExpenseFormItems = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(ExpenseFormItems, _React$PureComponent);

  var _super = _createSuper(ExpenseFormItems);

  function ExpenseFormItems() {
    var _this;

    classCallCheck_default()(this, ExpenseFormItems);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      uploadErrors: null
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "remove", function (item) {
      var idx = _this.props.form.values.items.findIndex(function (a) {
        return a.id === item.id;
      });

      if (idx !== -1) {
        _this.props.remove(idx);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onCurrencyChange", /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(newCurrency) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.props.form.setFieldValue('currency', newCurrency);

              case 2:
                _this.props.form.setFieldTouched('currency', true);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  createClass_default()(ExpenseFormItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var values = this.props.form.values;

      if ([expenseTypes/* default.INVOICE */.Z.INVOICE, expenseTypes/* default.GRANT */.Z.GRANT].includes(values.type)) {
        this.addDefaultItem();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var _this$props$form = this.props.form,
          values = _this$props$form.values,
          touched = _this$props$form.touched;

      if (oldProps.form.values.type !== values.type) {
        var _values$items;

        if ([expenseTypes/* default.INVOICE */.Z.INVOICE, expenseTypes/* default.GRANT */.Z.GRANT].includes(values.type)) {
          this.addDefaultItem();
        } else if (!touched.items && ((_values$items = values.items) === null || _values$items === void 0 ? void 0 : _values$items.length) === 1) {
          var firstItem = values.items[0];

          if (!firstItem.url && !firstItem.description && !firstItem.amount) {
            this.props.remove(0);
          }
        }
      }
    }
  }, {
    key: "addDefaultItem",
    value: function addDefaultItem() {
      var values = this.props.form.values;

      if (isEmpty_default()(values.items)) {
        this.props.push(newExpenseItem());
      }
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var uploadErrors = this.state.uploadErrors;

      if (!(uploadErrors !== null && uploadErrors !== void 0 && uploadErrors.length)) {
        return null;
      } else {
        var _uploadErrors$;

        return /*#__PURE__*/(0,jsx_runtime.jsxs)(MessageBox/* default */.Z, {
          type: "error",
          withIcon: true,
          mb: 2,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            mt: 1,
            pl: 22,
            children: (0,lib_errors/* formatErrorMessage */.jN)(this.props.intl, (_uploadErrors$ = uploadErrors[0]) === null || _uploadErrors$ === void 0 ? void 0 : _uploadErrors$.message)
          })]
        });
      }
    }
  }, {
    key: "getApplicableTaxType",
    value: function getApplicableTaxType() {
      var _this$props = this.props,
          collective = _this$props.collective,
          form = _this$props.form;

      if (form.values.type === expenseTypes/* default.INVOICE */.Z.INVOICE) {
        if ((0,dist.accountHasVAT)(collective, collective.host)) {
          return dist.TaxType.VAT;
        } else if ((0,dist.accountHasGST)(collective.host || collective)) {
          return dist.TaxType.GST;
        }
      }
    }
  }, {
    key: "renderTaxFormFields",
    value: function renderTaxFormFields(taxType, isOptional) {
      switch (taxType) {
        case dist.TaxType.VAT:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseVATFormikFields/* default */.Z, {
            formik: this.props.form,
            isOptional: isOptional
          });

        case dist.TaxType.GST:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseGSTFormikFields/* default */.Z, {
            formik: this.props.form,
            isOptional: isOptional
          });

        default:
          return "Tax not supported: ".concat(taxType);
      }
    }
  }, {
    key: "hasTaxFields",
    value: function hasTaxFields(taxType) {
      if (!taxType) {
        return false;
      }

      var values = this.props.form.values;

      if (!values.taxes) {
        // If tax is not initialized (create expense) we render the fields by default
        return true;
      } else {
        // If tax is initialized (edit expense) we render the fields only if there are values
        return values.taxes[0] && !values.taxes[0].isDisabled;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _values$payee2;

      var availableCurrencies = this.props.availableCurrencies;
      var _this$props$form2 = this.props.form,
          values = _this$props$form2.values,
          errors = _this$props$form2.errors,
          setFieldValue = _this$props$form2.setFieldValue;
      var requireFile = attachmentRequiresFile(values.type);
      var isGrant = values.type === expenseTypes/* default.GRANT */.Z.GRANT;
      var isCreditCardCharge = values.type === expenseTypes/* default.CHARGE */.Z.CHARGE;
      var items = values.items || [];
      var hasItems = items.length > 0;

      if (!hasItems && requireFile) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [this.renderErrors(), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledDropzone/* default */.ZP, ExpenseFormItems_objectSpread(ExpenseFormItems_objectSpread({}, attachmentDropzoneParams), {}, {
            kind: "EXPENSE_ITEM",
            "data-cy": "expense-multi-attachments-dropzone",
            onSuccess: function onSuccess(files) {
              return filesListToItems(files).map(_this2.props.push);
            },
            onReject: function onReject(uploadErrors) {
              return _this2.setState({
                uploadErrors: uploadErrors
              });
            },
            mockImageGenerator: function mockImageGenerator(index) {
              return "https://loremflickr.com/120/120/invoice?lock=".concat(index);
            },
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              color: "black.700",
              mt: 1,
              px: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
                  'i18n-bold': I18nFormatters/* I18nBold */.Gl
                }
              })
            })
          }))]
        });
      }

      var onRemove = requireFile || items.length > 1 ? this.remove : null;
      var taxType = this.getApplicableTaxType();
      var hasTaxFields = this.hasTaxFields(taxType);
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        children: [this.renderErrors(), items.map(function (attachment, index) {
          var _values$payee;

          return /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseItemForm, {
            attachment: attachment,
            currency: values.currency,
            name: "items[".concat(index, "]"),
            errors: errors,
            onRemove: onRemove,
            requireFile: requireFile,
            requireDate: !isGrant,
            isRichText: isGrant,
            onUploadError: function onUploadError(e) {
              return _this2.setState({
                uploadErrors: [e]
              });
            },
            isOptional: (_values$payee = values.payee) === null || _values$payee === void 0 ? void 0 : _values$payee.isInvite,
            editOnlyDescriptiveInfo: isCreditCardCharge,
            hasMultiCurrency: !index && (availableCurrencies === null || availableCurrencies === void 0 ? void 0 : availableCurrencies.length) > 1 // Only display currency picker for the first item
            ,
            availableCurrencies: availableCurrencies,
            onCurrencyChange: /*#__PURE__*/function () {
              var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2(value) {
                return regenerator_default().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _this2.onCurrencyChange(value);

                      case 2:
                        return _context2.abrupt("return", _context2.sent);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }(),
            isLastItem: index === items.length - 1
          }, "item-".concat(attachment.id));
        }), taxType && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            mt: 24,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              color: "black.900",
              fontSize: "16px",
              lineHeight: "21px",
              fontWeight: "bold",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "9WIrrf",
                defaultMessage: [{
                  "type": 0,
                  "value": "Tax and Total"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
              flex: "1",
              borderColor: "black.300",
              mx: 2
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mt: "8px",
            display: "inline-block",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
              name: "tax-".concat(taxType),
              checked: hasTaxFields,
              onChange: function onChange(_ref4) {
                var checked = _ref4.checked;

                // Using "isDisabled" flag rather than removing to preserve data when enabled/disabled
                if (checked) {
                  var _values$taxes;

                  var tax = ExpenseFormItems_objectSpread(ExpenseFormItems_objectSpread({}, (_values$taxes = values.taxes) === null || _values$taxes === void 0 ? void 0 : _values$taxes[0]), {}, {
                    type: taxType,
                    isDisabled: false
                  });

                  setFieldValue('taxes', [tax]);
                } else {
                  setFieldValue('taxes.0.isDisabled', true);
                }
              },
              label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "0JzeTD",
                defaultMessage: [{
                  "type": 0,
                  "value": "Apply "
                }, {
                  "type": 1,
                  "value": "taxName"
                }],
                values: {
                  taxName: (0,taxes/* i18nTaxType */.m)(this.props.intl, taxType)
                }
              })
            })
          })]
        }), taxType && !hasTaxFields && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          borderColor: "black.300",
          borderStyle: "dotted",
          mb: 24,
          mt: 24
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          mt: 24,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            flexBasis: ['100%', null, null, '50%'],
            mb: 3,
            children: hasTaxFields && this.renderTaxFormFields(taxType, Boolean((_values$payee2 = values.payee) === null || _values$payee2 === void 0 ? void 0 : _values$payee2.isInvite))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mb: 3,
            ml: [0, null, null, 4],
            flexBasis: ['100%', null, null, 'auto'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseAmountBreakdown/* default */.Z, {
              currency: values.currency,
              items: items,
              taxes: values.taxes
            })
          })]
        })]
      });
    }
  }]);

  return ExpenseFormItems;
}(react.PureComponent);

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
/* harmony default export */ var expenses_ExpenseFormItems = ((0,injectIntl/* default */.ZP)(ExpenseFormItems));
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./lib/collective.lib.js
var collective_lib = __webpack_require__(5700);
// EXTERNAL MODULE: ./lib/constants/utils.js
var constants_utils = __webpack_require__(3350);
// EXTERNAL MODULE: ./components/StyledInputFormikField.js
var StyledInputFormikField = __webpack_require__(75667);
// EXTERNAL MODULE: ./components/StyledInputGroup.js
var StyledInputGroup = __webpack_require__(32631);
// EXTERNAL MODULE: ./components/StyledInputLocation.js
var StyledInputLocation = __webpack_require__(90307);
// EXTERNAL MODULE: ./components/StyledLinkButton.js
var StyledLinkButton = __webpack_require__(67001);
// EXTERNAL MODULE: ./components/StyledTextarea.js
var StyledTextarea = __webpack_require__(93150);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./components/expenses/PayoutBankInformationForm.js
var PayoutBankInformationForm = __webpack_require__(38884);
;// CONCATENATED MODULE: ./components/expenses/PayoutMethodForm.js




function PayoutMethodForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PayoutMethodForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PayoutMethodForm_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PayoutMethodForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















var PayoutMethodForm_msg = (0,lib.defineMessages)({
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

var validatePayoutMethod = function validatePayoutMethod(payoutMethod) {
  var errors = {};

  if (!payoutMethod || !payoutMethod.type) {
    set_default()(errors, 'type', (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED));
  } else if (payoutMethod.type === payout_method/* PayoutMethodType.PAYPAL */.Nk.PAYPAL) {
    var email = get_default()(payoutMethod, 'data.email');

    if (!email) {
      set_default()(errors, 'data.email', (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED));
    } else if (!(0,validator.isEmail)(email)) {
      set_default()(errors, 'data.email', (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_PATTERN */.pn.FORM_FIELD_PATTERN));
    }
  } else if (payoutMethod.type === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT) {
    if (!payoutMethod.data.currency) {
      set_default()(errors, 'data.currency', (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED));
    }

    if (!payoutMethod.data.accountHolderName) {
      set_default()(errors, 'data.accountHolderName', (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED));
    }
  } else if (payoutMethod.type === payout_method/* PayoutMethodType.OTHER */.Nk.OTHER) {
    var content = get_default()(payoutMethod, 'data.content');

    if (!content) {
      set_default()(errors, 'data.content', (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_MIN_LENGTH */.pn.FORM_FIELD_MIN_LENGTH));
    }
  }

  return errors;
};
/**
 * A form to fill infos for a new payout method or to edit an existing one.
 * This component is **fully controlled**, you need to call `validatePayoutMethod`
 * to proceed with the validation and pass the result with the `errors` prop.
 */

var PayoutMethodForm = function PayoutMethodForm(_ref) {
  var payoutMethod = _ref.payoutMethod,
      fieldsPrefix = _ref.fieldsPrefix,
      host = _ref.host,
      required = _ref.required;
  var intl = (0,useIntl/* default */.Z)();
  var formatMessage = intl.formatMessage;
  var isNew = !payoutMethod.id;
  var fixedPrefix = fieldsPrefix ? "".concat(fieldsPrefix, ".") : '';

  var getFieldName = function getFieldName(field) {
    return "".concat(fixedPrefix).concat(field);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
    children: [payoutMethod.type === payout_method/* PayoutMethodType.PAYPAL */.Nk.PAYPAL && /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
      name: getFieldName('data.email'),
      children: function children(_ref2) {
        var field = _ref2.field,
            meta = _ref2.meta;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          name: field.name,
          type: "email",
          error: (0,form_utils/* formatFormErrorMessage */.$m)(intl, meta.error),
          label: formatMessage(PayoutMethodForm_msg.paypalEmail),
          labelFontSize: "13px",
          disabled: !isNew,
          required: required !== false,
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, PayoutMethodForm_objectSpread(PayoutMethodForm_objectSpread({
              placeholder: "e.g., yourname@yourhost.com"
            }, inputProps), field));
          }
        });
      }
    }), payoutMethod.type === payout_method/* PayoutMethodType.OTHER */.Nk.OTHER && /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
      name: getFieldName('data.content'),
      children: function children(_ref3) {
        var field = _ref3.field,
            meta = _ref3.meta;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          name: field.name,
          error: (0,form_utils/* formatFormErrorMessage */.$m)(intl, meta.error),
          label: formatMessage(PayoutMethodForm_msg.content),
          labelFontSize: "13px",
          disabled: !isNew,
          "data-cy": "payout-other-info",
          required: required !== false,
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, PayoutMethodForm_objectSpread(PayoutMethodForm_objectSpread({
              minHeight: 100
            }, inputProps), field));
          }
        });
      }
    }), payoutMethod.type === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT && /*#__PURE__*/(0,jsx_runtime.jsx)(PayoutBankInformationForm/* default */.Z, {
      isNew: isNew,
      getFieldName: getFieldName,
      host: host,
      optional: required === false
    }), isNew && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mt: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
        name: getFieldName('isSaved'),
        children: function children(_ref4) {
          var field = _ref4.field;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, PayoutMethodForm_objectSpread({
            label: formatMessage(PayoutMethodForm_msg.savePayout),
            fontSize: "13px",
            checked: field.value
          }, field));
        }
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
/* harmony default export */ var expenses_PayoutMethodForm = (/*#__PURE__*/react.memo(PayoutMethodForm));
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/lodash/truncate.js
var truncate = __webpack_require__(39138);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(7739);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var graphql_tag_lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Times/Times.esm.js
var Times_esm = __webpack_require__(74684);
// EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__(30845);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/i18n/payout-method-type.js
var payout_method_type = __webpack_require__(17133);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/expenses/PayoutMethodData.js
var PayoutMethodData = __webpack_require__(27824);
// EXTERNAL MODULE: ./components/expenses/PayoutMethodTypeWithIcon.js
var PayoutMethodTypeWithIcon = __webpack_require__(9215);
;// CONCATENATED MODULE: ./components/expenses/PayoutMethodSelect.js















var _excluded = ["payoutMethods", "defaultPayoutMethod", "payoutMethod", "payee", "collective"];

var _defineMessages, _templateObject;

function PayoutMethodSelect_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PayoutMethodSelect_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PayoutMethodSelect_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PayoutMethodSelect_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function PayoutMethodSelect_createSuper(Derived) { var hasNativeReflectConstruct = PayoutMethodSelect_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function PayoutMethodSelect_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






















var newPayoutMethodMsg = (0,lib.defineMessages)((_defineMessages = {}, defineProperty_default()(_defineMessages, payout_method/* PayoutMethodType.PAYPAL */.Nk.PAYPAL, {
  id: "PayoutMethod.New.PayPal",
  defaultMessage: [{
    "type": 0,
    "value": "New PayPal account"
  }]
}), defineProperty_default()(_defineMessages, payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT, {
  id: "PayoutMethod.New.BankAccount",
  defaultMessage: [{
    "type": 0,
    "value": "New bank account"
  }]
}), defineProperty_default()(_defineMessages, payout_method/* PayoutMethodType.OTHER */.Nk.OTHER, {
  id: "PayoutMethod.New.Other",
  defaultMessage: [{
    "type": 0,
    "value": "New custom payout method"
  }]
}), defineProperty_default()(_defineMessages, "_default", {
  id: "PayoutMethod.New.default",
  defaultMessage: [{
    "type": 0,
    "value": "New "
  }, {
    "type": 1,
    "value": "pmType"
  }]
}), _defineMessages));
var MAX_PAYOUT_OPTION_DATA_LENGTH = 20;
var payoutMethodLabels = (0,lib.defineMessages)({
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

var PayoutMethodSelect = /*#__PURE__*/function (_React$Component) {
  inherits_default()(PayoutMethodSelect, _React$Component);

  var _super = PayoutMethodSelect_createSuper(PayoutMethodSelect);

  function PayoutMethodSelect() {
    var _this;

    classCallCheck_default()(this, PayoutMethodSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      removingPayoutMethod: null
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getPayoutMethodLabel", function (payoutMethod) {
      if (payoutMethod.id) {
        if (payoutMethod.name) {
          return payoutMethod.name;
        } else if (payoutMethod.type === payout_method/* PayoutMethodType.ACCOUNT_BALANCE */.Nk.ACCOUNT_BALANCE) {
          return _this.props.intl.formatMessage(payoutMethodLabels.accountBalance);
        } else if (payoutMethod.type === payout_method/* PayoutMethodType.PAYPAL */.Nk.PAYPAL) {
          return "PayPal - ".concat(get_default()(payoutMethod.data, 'email'));
        } else if (payoutMethod.type === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT) {
          var _payoutMethod$data$de, _payoutMethod$data$de2, _payoutMethod$data$de3, _payoutMethod$data$de4;

          if ((_payoutMethod$data$de = payoutMethod.data.details) !== null && _payoutMethod$data$de !== void 0 && _payoutMethod$data$de.IBAN) {
            return "IBAN ".concat(payoutMethod.data.details.IBAN);
          } else if ((_payoutMethod$data$de2 = payoutMethod.data.details) !== null && _payoutMethod$data$de2 !== void 0 && _payoutMethod$data$de2.accountNumber) {
            return "A/N ".concat(payoutMethod.data.details.accountNumber);
          } else if ((_payoutMethod$data$de3 = payoutMethod.data.details) !== null && _payoutMethod$data$de3 !== void 0 && _payoutMethod$data$de3.clabe) {
            return "Clabe ".concat(payoutMethod.data.details.clabe);
          } else if ((_payoutMethod$data$de4 = payoutMethod.data.details) !== null && _payoutMethod$data$de4 !== void 0 && _payoutMethod$data$de4.bankgiroNumber) {
            return "BankGiro ".concat(payoutMethod.data.details.bankgiroNumber);
          } else {
            return "".concat(payoutMethod.data.accountHolderName, " (").concat(payoutMethod.data.currency, ")");
          }
        } else if (payoutMethod.type === payout_method/* PayoutMethodType.OTHER */.Nk.OTHER) {
          var _payoutMethod$data, _payoutMethod$data$co;

          var content = (_payoutMethod$data = payoutMethod.data) === null || _payoutMethod$data === void 0 ? void 0 : (_payoutMethod$data$co = _payoutMethod$data.content) === null || _payoutMethod$data$co === void 0 ? void 0 : _payoutMethod$data$co.replace(/\n|\t/g, ' ');
          var i18nType = (0,payout_method_type/* default */.Z)(_this.props.intl, payoutMethod.type);
          return content ? "".concat(i18nType, " - ").concat(truncate_default()(content, {
            length: MAX_PAYOUT_OPTION_DATA_LENGTH
          })) : i18nType;
        } else {
          return (0,payout_method_type/* default */.Z)(_this.props.intl, payoutMethod.type);
        }
      } else {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontWeight: "bold",
            color: "green.600",
            mr: 1,
            children: "+"
          }), "\xA0", newPayoutMethodMsg[payoutMethod.type] ? _this.props.intl.formatMessage(newPayoutMethodMsg[payoutMethod.type]) : _this.props.intl.formatMessage(newPayoutMethodMsg._default, {
            type: payoutMethod.type
          })]
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getPayoutMethodTitle", function (pm) {
      var _pm$data, _pm$data$content;

      if (pm.type === payout_method/* PayoutMethodType.OTHER */.Nk.OTHER && ((_pm$data = pm.data) === null || _pm$data === void 0 ? void 0 : (_pm$data$content = _pm$data.content) === null || _pm$data$content === void 0 ? void 0 : _pm$data$content.length) > MAX_PAYOUT_OPTION_DATA_LENGTH) {
        return pm.data.content;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "formatOptionLabel", function (_ref, _ref2) {
      var value = _ref.value;
      var context = _ref2.context;
      var isMenu = context === 'menu';
      var isDeletable = value.isDeletable === undefined ? value.type !== payout_method/* PayoutMethodType.ACCOUNT_BALANCE */.Nk.ACCOUNT_BALANCE : value.isDeletable;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          fontSize: isMenu ? '13px' : '14px',
          children: _this.getPayoutMethodLabel(value)
        }), isMenu && value.id && isDeletable && _this.props.onRemove && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
          size: 20,
          ml: 2,
          type: "button",
          flex: "0 0 20px",
          buttonStyle: "dangerSecondary",
          isBorderless: true,
          onClick: function onClick(e) {
            e.stopPropagation();

            _this.setState({
              removingPayoutMethod: value
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Times_esm/* Times */.u, {
            size: 10
          })
        })]
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getOptionFromPayoutMethod", function (pm) {
      return {
        value: pm,
        title: _this.getPayoutMethodTitle(pm)
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getOptions", (0,memoize_one_esm/* default */.Z)(function (host, payoutMethods, payee) {
      var _payee$host, _payee$host2;

      var payerHostSupportedPayoutMethods;

      if (host) {
        payerHostSupportedPayoutMethods = host.supportedPayoutMethods || constants_utils/* EMPTY_ARRAY */.L;
      } else {
        // For collectives without a host, we allow expenses to be submitted with the "Other"/"Custom" payout method
        // This is mostly for people trying out the platform
        payerHostSupportedPayoutMethods = [payout_method/* PayoutMethodType.OTHER */.Nk.OTHER, payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT];
      }

      var payeeIsSelfHosted = payee && payee.id === ((_payee$host = payee.host) === null || _payee$host === void 0 ? void 0 : _payee$host.id);
      var payeeIsCollectiveFamilyType = payee && collectives/* AccountTypesWithHost.includes */.Zs.includes(payee.type);
      var payeeIsSameHost = payee && host && ((_payee$host2 = payee.host) === null || _payee$host2 === void 0 ? void 0 : _payee$host2.id) === host.id;
      var pmTypes;

      if (payeeIsSameHost) {
        pmTypes = [payout_method/* PayoutMethodType.ACCOUNT_BALANCE */.Nk.ACCOUNT_BALANCE];
      } else {
        pmTypes = payerHostSupportedPayoutMethods // Credit Card (Virtual Card) is generally not a Payout Method acceptable on the Frontend
        .filter(function (type) {
          return type !== payout_method/* PayoutMethodType.CREDIT_CARD */.Nk.CREDIT_CARD;
        }) // Account Balance is not possible on different Hosts
        .filter(function (type) {
          return type !== payout_method/* PayoutMethodType.ACCOUNT_BALANCE */.Nk.ACCOUNT_BALANCE;
        }); // Other not available for regular Collectives, Funds, Projects, Events

        if (payeeIsCollectiveFamilyType && !payeeIsSelfHosted) {
          pmTypes = pmTypes.filter(function (type) {
            return type !== payout_method/* PayoutMethodType.OTHER */.Nk.OTHER;
          });
        }
      } // No "New" Payout Methods for Collectives unless Self Hosted
      // TODO: maybe we should not filter when the loggedInAccount is an admin of the payee's host


      var creatablePmTypes = payeeIsCollectiveFamilyType && !payeeIsSelfHosted ? [] : pmTypes.filter(function (pmType) {
        return pmType !== payout_method/* PayoutMethodType.ACCOUNT_BALANCE */.Nk.ACCOUNT_BALANCE;
      });

      var groupedPms = groupBy_default()(payoutMethods, 'type');

      return pmTypes.map(function (pmType) {
        return {
          label: (0,payout_method_type/* default */.Z)(_this.props.intl, pmType),
          options: [].concat(toConsumableArray_default()(get_default()(groupedPms, pmType, []).map(_this.getOptionFromPayoutMethod)), [// Add "+ Create new ..." for this payment type
          creatablePmTypes.includes(pmType) ? _this.getOptionFromPayoutMethod({
            type: pmType,
            isSaved: true,
            data: _this.getDefaultData(pmType)
          }) : null]).filter(function (option) {
            return option !== null;
          })
        };
      });
    }));

    return _this;
  }

  createClass_default()(PayoutMethodSelect, [{
    key: "getDefaultData",
    value: function getDefaultData(payoutMethodType) {
      switch (payoutMethodType) {
        case payout_method/* PayoutMethodType.PAYPAL */.Nk.PAYPAL:
          return {
            email: ''
          };

        case payout_method/* PayoutMethodType.OTHER */.Nk.OTHER:
          return {
            content: ''
          };

        default:
          return {};
      }
    }
  }, {
    key: "removePayoutMethod",
    value: function () {
      var _removePayoutMethod = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(payoutMethod) {
        var _this$props$payoutMet;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.removePayoutMethod({
                  variables: {
                    id: payoutMethod.id
                  }
                });

              case 2:
                this.setState({
                  removingPayoutMethod: null
                });
                this.props.onRemove(payoutMethod);

                if (((_this$props$payoutMet = this.props.payoutMethod) === null || _this$props$payoutMet === void 0 ? void 0 : _this$props$payoutMet.id) === payoutMethod.id) {
                  this.props.onChange({
                    value: null
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function removePayoutMethod(_x) {
        return _removePayoutMethod.apply(this, arguments);
      }

      return removePayoutMethod;
    }()
  }, {
    key: "render",
    value: function render() {
      var _payee$host3,
          _collective$host,
          _this2 = this;

      var _this$props = this.props,
          payoutMethods = _this$props.payoutMethods,
          defaultPayoutMethod = _this$props.defaultPayoutMethod,
          payoutMethod = _this$props.payoutMethod,
          payee = _this$props.payee,
          collective = _this$props.collective,
          props = objectWithoutProperties_default()(_this$props, _excluded);

      var removingPayoutMethod = this.state.removingPayoutMethod;
      var value = !isEmpty_default()(payoutMethod) && this.getOptionFromPayoutMethod(payoutMethod);
      var payeeIsCollectiveFamilyType = payee && collectives/* AccountTypesWithHost.includes */.Zs.includes(payee.type);
      var payeeIsSameHost = payee && ((_payee$host3 = payee.host) === null || _payee$host3 === void 0 ? void 0 : _payee$host3.id) === ((_collective$host = collective.host) === null || _collective$host === void 0 ? void 0 : _collective$host.id);
      var styledSelectOptions = this.getOptions(collective.host, payoutMethods, payee);
      var hasSuitablePayoutMethodOption = styledSelectOptions.find(function (_ref3) {
        var options = _ref3.options;
        return options.length > 0;
      }) ? true : false;

      if (payeeIsCollectiveFamilyType && !payeeIsSameHost) {
        var _collective$host2;

        if (!(collective !== null && collective !== void 0 && (_collective$host2 = collective.host) !== null && _collective$host2 !== void 0 && _collective$host2.isTrustedHost)) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(MessageBox/* default */.Z, {
            type: "error",
            mt: 2,
            mb: 3,
            fontSize: "12px",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "GiJCGt",
              defaultMessage: [{
                "type": 0,
                "value": "This Expense is between different Hosts but the Payer Host is not allowed for this yet."
              }]
            }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ZbcLMU",
              defaultMessage: [{
                "type": 0,
                "value": "If it's an issue, contact the Host or Open Collective support."
              }]
            })]
          });
        }

        if (!hasSuitablePayoutMethodOption) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(MessageBox/* default */.Z, {
            type: "error",
            mt: 2,
            mb: 3,
            fontSize: "12px",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
                payoutMethodTypes: Object.values(styledSelectOptions).map(function (option) {
                  return option.label;
                }).join(', ')
              }
            }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ZbcLMU",
              defaultMessage: [{
                "type": 0,
                "value": "If it's an issue, contact the Host or Open Collective support."
              }]
            })]
          });
        }
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [payeeIsCollectiveFamilyType && !payeeIsSameHost && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
          type: "warning",
          mt: 2,
          mb: 3,
          fontSize: "12px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "EgEmmA",
            defaultMessage: [{
              "type": 0,
              "value": "This Expense is between different Hosts. Pick a Payout Method from the recipient Host."
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, PayoutMethodSelect_objectSpread(PayoutMethodSelect_objectSpread({
          inputId: "payout-method-select",
          "data-cy": "payout-method-select"
        }, props), {}, {
          options: styledSelectOptions,
          defaultValue: defaultPayoutMethod ? this.getOptionFromPayoutMethod(defaultPayoutMethod) : undefined,
          value: typeof value === 'undefined' ? undefined : value,
          formatOptionLabel: this.formatOptionLabel,
          isSearchable: false
        })), removingPayoutMethod && /*#__PURE__*/(0,jsx_runtime.jsxs)(ConfirmationModal/* default */.Z, {
          isDanger: true,
          type: "remove",
          onClose: function onClose() {
            return _this2.setState({
              removingPayoutMethod: null
            });
          },
          continueHandler: function continueHandler() {
            return _this2.removePayoutMethod(removingPayoutMethod);
          },
          header: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "PayoutMethod.RemoveWarning",
            defaultMessage: [{
              "type": 0,
              "value": "Remove this payout method?"
            }]
          }),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mb: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(PayoutMethodTypeWithIcon/* default */.Z, {
              type: removingPayoutMethod.type
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(PayoutMethodData/* default */.Z, {
            payoutMethod: removingPayoutMethod
          })]
        })]
      });
    }
  }]);

  return PayoutMethodSelect;
}(react.Component);

var removePayoutMethodMutation = (0,graphql_tag_lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation RemovePayoutMethod($id: String!) {\n    removePayoutMethod(payoutMethodId: $id) {\n      id\n      isSaved\n    }\n  }\n"])));
var addRemovePayoutMethodMutation = (0,graphql/* graphql */.B)(removePayoutMethodMutation, {
  name: 'removePayoutMethod',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
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
/* harmony default export */ var expenses_PayoutMethodSelect = (/*#__PURE__*/react.memo((0,injectIntl/* default */.ZP)(addRemovePayoutMethodMutation(PayoutMethodSelect))));
;// CONCATENATED MODULE: ./components/expenses/ExpenseFormPayeeInviteNewStep.js






function ExpenseFormPayeeInviteNewStep_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpenseFormPayeeInviteNewStep_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpenseFormPayeeInviteNewStep_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpenseFormPayeeInviteNewStep_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




























var ExpenseFormPayeeInviteNewStep_msg = (0,lib.defineMessages)({
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
var PAYEE_TYPE = {
  USER: 'USER',
  ORG: 'ORG'
};
var Fieldset = styled_components_browser_esm/* default.fieldset.withConfig */.ZP.fieldset.withConfig({
  displayName: "ExpenseFormPayeeInviteNewStep__Fieldset",
  componentId: "sc-1vjey42-0"
})(["border:none;padding:0;margin:0;"]);
var RadioOptionContainer = styled_components_browser_esm/* default.label.withConfig */.ZP.label.withConfig({
  displayName: "ExpenseFormPayeeInviteNewStep__RadioOptionContainer",
  componentId: "sc-1vjey42-1"
})(["align-items:center;display:flex;flex:1 1 50%;font-size:14px;font-weight:normal;line-height:20px;margin:0px;padding:6px 16px;cursor:pointer;:not(:last-child){@media (max-width:", "){border-bottom:1px solid #dcdee0;}@media (min-width:", "){border-right:1px solid #dcdee0;}}"], (0,index_esm/* themeGet */.R)('breakpoints.0'), (0,index_esm/* themeGet */.R)('breakpoints.0'));
var validateExpenseFormPayeeInviteNewStep = function validateExpenseFormPayeeInviteNewStep(values) {
  var errors = (0,form_utils/* requireFields */.ay)(values, ['payee.name', 'payee.email']);

  if (!get_default()(errors, 'payee.email')) {
    (0,form_utils/* verifyEmailPattern */.Sn)(errors, values, 'payee.email');
  }

  return errors;
};

var ExpenseFormPayeeInviteNewStep = function ExpenseFormPayeeInviteNewStep(_ref) {
  var _values$payee2, _values$payee2$organi;

  var formik = _ref.formik,
      collective = _ref.collective,
      onBack = _ref.onBack,
      onNext = _ref.onNext;
  var intl = (0,useIntl/* default */.Z)();
  var formatMessage = intl.formatMessage;
  var values = formik.values,
      touched = formik.touched,
      errors = formik.errors;
  var setPayoutMethod = react.useCallback(function (_ref2) {
    var value = _ref2.value;
    return formik.setFieldValue('payoutMethod', value);
  }, []);

  var _React$useState = react.useState(PAYEE_TYPE.USER),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      payeeType = _React$useState2[0],
      setPayeeType = _React$useState2[1];

  var _React$useState3 = react.useState(!isEmpty_default()(values.payeeLocation) || !isEmpty_default()(values.payoutMethod)),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      showAdditionalInfo = _React$useState4[0],
      setAdditionalInfo = _React$useState4[1];

  react.useEffect(function () {
    var _values$payee, _values$payee$organiz, _touched$payee, _touched$payee$organi;

    if ((_values$payee = values.payee) !== null && _values$payee !== void 0 && (_values$payee$organiz = _values$payee.organization) !== null && _values$payee$organiz !== void 0 && _values$payee$organiz.name && !((_touched$payee = touched.payee) !== null && _touched$payee !== void 0 && (_touched$payee$organi = _touched$payee.organization) !== null && _touched$payee$organi !== void 0 && _touched$payee$organi.slug)) {
      var slug = (0,collective_lib/* suggestSlug */.e4)(values.payee.organization.name);

      if (values.payee.organization.slug !== slug) {
        formik.setFieldValue('payee.organization.slug', (0,collective_lib/* suggestSlug */.e4)(values.payee.organization.name));
      }
    }
  }, [(_values$payee2 = values.payee) === null || _values$payee2 === void 0 ? void 0 : (_values$payee2$organi = _values$payee2.organization) === null || _values$payee2$organi === void 0 ? void 0 : _values$payee2$organi.name]);
  react.useEffect(function () {
    if (payeeType === PAYEE_TYPE.USER) {
      formik.setFieldValue('payee', omit_default()(values.payee, ['organization']));
    }
  }, [payeeType]);

  var changePayeeType = function changePayeeType(e) {
    e.stopPropagation();
    setPayeeType(e.target.value);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
      label: formatMessage(ExpenseFormPayeeInviteNewStep_msg.accountType),
      labelFontSize: "13px",
      mt: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Fieldset, {
          onChange: changePayeeType,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            flexDirection: ['column', 'row'],
            overflow: "hidden",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(RadioOptionContainer, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                alignSelf: ['center', 'baseline', null, 'center'],
                mr: "16px",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
                  type: "radio",
                  name: "payeeType",
                  checked: payeeType === PAYEE_TYPE.USER,
                  value: PAYEE_TYPE.USER,
                  onChange: changePayeeType,
                  "data-cy": "payee-type-user"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                children: "Personal Account"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(RadioOptionContainer, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                alignSelf: ['center', 'baseline', null, 'center'],
                mr: "16px",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
                  type: "radio",
                  name: "payeeType",
                  checked: payeeType === PAYEE_TYPE.ORG,
                  value: PAYEE_TYPE.ORG,
                  onChange: changePayeeType,
                  "data-cy": "payee-type-org"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                children: "Organization Account"
              })]
            })]
          })
        })
      })
    }), payeeType === PAYEE_TYPE.ORG && /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
        gridTemplateColumns: ['100%', 'calc(50% - 8px) calc(50% - 8px)'],
        gridColumnGap: [null, 2, null, 3],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee.organization.name",
          children: function children(_ref3) {
            var field = _ref3.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              label: formatMessage(ExpenseFormPayeeInviteNewStep_msg.orgNameLabel),
              labelFontSize: "13px",
              mt: 3,
              required: true,
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread({}, inputProps), field), {}, {
                  placeholder: "e.g., Airbnb, Salesforce"
                }));
              }
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee.organization.slug",
          children: function children(_ref4) {
            var _errors$payee, _errors$payee$organiz;

            var field = _ref4.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              mt: 3,
              labelFontSize: "13px",
              error: (_errors$payee = errors.payee) === null || _errors$payee === void 0 ? void 0 : (_errors$payee$organiz = _errors$payee.organization) === null || _errors$payee$organiz === void 0 ? void 0 : _errors$payee$organiz.slug,
              name: field.name,
              label: formatMessage(ExpenseFormPayeeInviteNewStep_msg.orgSlugLabel),
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread({}, inputProps), field), {}, {
                  prepend: "opencollective.com/"
                }));
              }
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee.organization.website",
          children: function children(_ref5) {
            var field = _ref5.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              label: formatMessage(ExpenseFormPayeeInviteNewStep_msg.orgWebsiteLabel),
              labelFontSize: "13px",
              required: false,
              mt: 3,
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread({}, inputProps), field), {}, {
                  prepend: "https://"
                }));
              }
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee.organization.description",
          children: function children(_ref6) {
            var field = _ref6.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              label: formatMessage(ExpenseFormPayeeInviteNewStep_msg.orgDescriptionLabel),
              labelFontSize: "13px",
              required: false,
              mt: 3,
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread({}, inputProps), field), {}, {
                  placeholder: ""
                }));
              }
            });
          }
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
      gridTemplateColumns: ['100%', 'calc(50% - 8px) calc(50% - 8px)'],
      gridColumnGap: [null, 2, null, 3],
      gridAutoFlow: "dense",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
          name: "payee.name",
          htmlFor: "payee.name",
          required: true,
          label: formatMessage(ExpenseFormPayeeInviteNewStep_msg.nameLabel),
          labelFontSize: "13px",
          mt: 3,
          children: function children(_ref7) {
            var field = _ref7.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseFormPayeeInviteNewStep_objectSpread({}, field));
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
          name: "payee.email",
          htmlFor: "payee.email",
          label: formatMessage(ExpenseFormPayeeInviteNewStep_msg.emailTitle),
          required: true,
          labelFontSize: "13px",
          mt: 3,
          children: function children(_ref8) {
            var field = _ref8.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread({}, field), {}, {
              type: "email"
            }));
          }
        })
      }), !showAdditionalInfo ? /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        gridColumn: [null, '1 / span 2'],
        mt: 3,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(MessageBox/* default */.Z, {
          type: "info",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "12px",
            children: formatMessage(ExpenseFormPayeeInviteNewStep_msg.additionalInfo)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "12px",
            mt: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLinkButton/* default */.Z, {
              onClick: function onClick() {
                return setAdditionalInfo(true);
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "ExpenseForm.inviteAdditionalInfoBtn",
                defaultMessage: [{
                  "type": 0,
                  "value": "Add payout details"
                }]
              })
            })
          })]
        })
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mt: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputLocation/* default */.Z, {
            onChange: function onChange(values) {
              formik.setFieldValue('payeeLocation', values);
            },
            location: values.payeeLocation,
            errors: errors.payeeLocation,
            required: false
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
            name: "payoutMethod",
            children: function children(_ref9) {
              var field = _ref9.field;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                name: field.name,
                htmlFor: "payout-method",
                flex: "1",
                mt: 3,
                required: false,
                label: formatMessage(ExpenseFormPayeeInviteNewStep_msg.payoutOptionLabel),
                labelFontSize: "13px",
                error: (0,lib_errors/* isErrorType */.kY)(errors.payoutMethod, lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED) ? (0,form_utils/* formatFormErrorMessage */.$m)(intl, errors.payoutMethod) : null,
                children: function children(_ref10) {
                  var id = _ref10.id,
                      error = _ref10.error;
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_PayoutMethodSelect, {
                    inputId: id,
                    error: error,
                    onChange: setPayoutMethod,
                    payoutMethod: values.payoutMethod,
                    payoutMethods: constants_utils/* EMPTY_ARRAY */.L,
                    payee: values.payee,
                    disabled: !values.payee,
                    collective: collective
                  });
                }
              });
            }
          }), values.payoutMethod && /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
            name: "payoutMethod",
            children: function children(_ref11) {
              var field = _ref11.field,
                  meta = _ref11.meta;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                mt: 3,
                flex: "1",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_PayoutMethodForm, {
                  fieldsPrefix: "payoutMethod",
                  payoutMethod: field.value,
                  host: collective.host,
                  errors: meta.error,
                  required: false
                })
              });
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* FastField */.Rt, {
          name: "invoiceInfo",
          children: function children(_ref12) {
            var field = _ref12.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              label: formatMessage(ExpenseFormPayeeInviteNewStep_msg.invoiceInfo),
              labelFontSize: "13px",
              required: false,
              mt: 3,
              gridColumn: 1,
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread({
                  as: StyledTextarea/* default */.Z
                }, inputProps), field), {}, {
                  minHeight: 80,
                  placeholder: formatMessage(ExpenseFormPayeeInviteNewStep_msg.invoiceInfoPlaceholder)
                }));
              }
            });
          }
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
        name: "recipientNote",
        children: function children(_ref13) {
          var field = _ref13.field;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            name: field.name,
            label: formatMessage(ExpenseFormPayeeInviteNewStep_msg.recipientNoteLabel),
            labelFontSize: "13px",
            required: false,
            mt: 3,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread(ExpenseFormPayeeInviteNewStep_objectSpread({
                as: StyledTextarea/* default */.Z
              }, inputProps), field), {}, {
                minHeight: 80
              }));
            }
          });
        }
      })
    }), values.payee && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        flex: "1",
        mt: 4,
        borderColor: "black.300"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        mt: 3,
        flexWrap: "wrap",
        children: [onBack && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-cancel",
          onClick: function onClick() {
            onBack === null || onBack === void 0 ? void 0 : onBack();
          },
          children: ["\u2190\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Back",
            defaultMessage: [{
              "type": 0,
              "value": "Back"
            }]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-next",
          buttonStyle: "primary",
          onClick: function onClick(e) {
            var isFormValid = (0,utils/* reportValidityHTML5 */.CR)(e.target.form);
            var errors = validateExpenseFormPayeeInviteNewStep(values);

            if (!isEmpty_default()(errors)) {
              formik.setErrors(errors);
            } else if (isFormValid) {
              onNext();
            }
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
/* harmony default export */ var expenses_ExpenseFormPayeeInviteNewStep = (ExpenseFormPayeeInviteNewStep);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./components/LoginBtn.js
var LoginBtn = __webpack_require__(22777);
;// CONCATENATED MODULE: ./components/expenses/ExpenseFormPayeeSignUpStep.js









var ExpenseFormPayeeSignUpStep_templateObject;



function ExpenseFormPayeeSignUpStep_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpenseFormPayeeSignUpStep_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpenseFormPayeeSignUpStep_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpenseFormPayeeSignUpStep_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





























var validateSlugQuery = (0,graphql_tag_lib/* default */.ZP)(ExpenseFormPayeeSignUpStep_templateObject || (ExpenseFormPayeeSignUpStep_templateObject = taggedTemplateLiteral_default()(["\n  query ValidateSlugQuery($slug: String) {\n    account(slug: $slug, throwIfMissing: false) {\n      id\n      slug\n    }\n  }\n"])));
var ExpenseFormPayeeSignUpStep_msg = (0,lib.defineMessages)({
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
var ExpenseFormPayeeSignUpStep_PAYEE_TYPE = {
  USER: 'USER',
  ORG: 'ORG'
};
var ExpenseFormPayeeSignUpStep_Fieldset = styled_components_browser_esm/* default.fieldset.withConfig */.ZP.fieldset.withConfig({
  displayName: "ExpenseFormPayeeSignUpStep__Fieldset",
  componentId: "sc-110c70w-0"
})(["border:none;padding:0;margin:0;"]);
var ExpenseFormPayeeSignUpStep_RadioOptionContainer = styled_components_browser_esm/* default.label.withConfig */.ZP.label.withConfig({
  displayName: "ExpenseFormPayeeSignUpStep__RadioOptionContainer",
  componentId: "sc-110c70w-1"
})(["align-items:center;display:flex;flex:1 1 50%;font-size:14px;font-weight:normal;line-height:20px;margin:0px;padding:6px 16px;cursor:pointer;:not(:last-child){@media (max-width:", "){border-bottom:1px solid #dcdee0;}@media (min-width:", "){border-right:1px solid #dcdee0;}}"], (0,index_esm/* themeGet */.R)('breakpoints.0'), (0,index_esm/* themeGet */.R)('breakpoints.0'));

var throttledSearch = debounce_default()(function (searchFunc, variables) {
  return searchFunc({
    variables: variables
  });
}, 750);

var ExpenseFormPayeeSignUpStep = function ExpenseFormPayeeSignUpStep(_ref) {
  var _values$payeeLocation, _values$payeeLocation2, _values$payee, _values$payee3, _values$payee3$organi, _values$payee5, _values$payee5$organi;

  var formik = _ref.formik,
      collective = _ref.collective,
      onCancel = _ref.onCancel,
      onNext = _ref.onNext;
  var intl = (0,useIntl/* default */.Z)();
  var formatMessage = intl.formatMessage;
  var values = formik.values,
      touched = formik.touched,
      errors = formik.errors;
  var stepOneCompleted = isEmpty_default()((0,utils/* flattenObjectDeep */.Mc)(validatePayoutMethod(values.payoutMethod))) && (values.type === expenseTypes/* default.RECEIPT */.Z.RECEIPT || values.payoutMethod && ((_values$payeeLocation = values.payeeLocation) === null || _values$payeeLocation === void 0 ? void 0 : _values$payeeLocation.country) && ((_values$payeeLocation2 = values.payeeLocation) === null || _values$payeeLocation2 === void 0 ? void 0 : _values$payeeLocation2.address));
  var setPayoutMethod = react.useCallback(function (_ref2) {
    var value = _ref2.value;
    return formik.setFieldValue('payoutMethod', value);
  }, []);

  var _React$useState = react.useState((_values$payee = values.payee) !== null && _values$payee !== void 0 && _values$payee.organization ? ExpenseFormPayeeSignUpStep_PAYEE_TYPE.ORG : ExpenseFormPayeeSignUpStep_PAYEE_TYPE.USER),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      payeeType = _React$useState2[0],
      setPayeeType = _React$useState2[1];

  var _useLazyQuery = (0,client.useLazyQuery)(validateSlugQuery, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useLazyQuery2 = slicedToArray_default()(_useLazyQuery, 2),
      validateSlug = _useLazyQuery2[0],
      existingSlugAccount = _useLazyQuery2[1].data;

  var changePayeeType = function changePayeeType(e) {
    e.stopPropagation();
    setPayeeType(e.target.value);
  };

  react.useEffect(function () {
    var _values$payee2, _values$payee2$organi, _touched$payee, _touched$payee$organi;

    if ((_values$payee2 = values.payee) !== null && _values$payee2 !== void 0 && (_values$payee2$organi = _values$payee2.organization) !== null && _values$payee2$organi !== void 0 && _values$payee2$organi.name && !((_touched$payee = touched.payee) !== null && _touched$payee !== void 0 && (_touched$payee$organi = _touched$payee.organization) !== null && _touched$payee$organi !== void 0 && _touched$payee$organi.slug)) {
      var slug = (0,collective_lib/* suggestSlug */.e4)(values.payee.organization.name);

      if (values.payee.organization.slug !== slug) {
        formik.setFieldValue('payee.organization.slug', (0,collective_lib/* suggestSlug */.e4)(values.payee.organization.name));
      }
    }
  }, [(_values$payee3 = values.payee) === null || _values$payee3 === void 0 ? void 0 : (_values$payee3$organi = _values$payee3.organization) === null || _values$payee3$organi === void 0 ? void 0 : _values$payee3$organi.name]);
  react.useEffect(function () {
    var _values$draft, _values$draft$payee;

    if (payeeType === ExpenseFormPayeeSignUpStep_PAYEE_TYPE.USER) {
      formik.setFieldValue('payee', omit_default()(values.payee, ['organization']));
    } else if (payeeType === ExpenseFormPayeeSignUpStep_PAYEE_TYPE.ORG && (_values$draft = values.draft) !== null && _values$draft !== void 0 && (_values$draft$payee = _values$draft.payee) !== null && _values$draft$payee !== void 0 && _values$draft$payee.organization) {
      formik.setFieldValue('payee', ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread({}, values.payee), {}, {
        organization: values.draft.payee.organization
      }));
    }
  }, [payeeType]); // Slug Validation

  react.useEffect(function () {
    var _values$payee4, _values$payee4$organi;

    if ((_values$payee4 = values.payee) !== null && _values$payee4 !== void 0 && (_values$payee4$organi = _values$payee4.organization) !== null && _values$payee4$organi !== void 0 && _values$payee4$organi.slug) {
      throttledSearch(validateSlug, {
        slug: values.payee.organization.slug
      });
    }
  }, [(_values$payee5 = values.payee) === null || _values$payee5 === void 0 ? void 0 : (_values$payee5$organi = _values$payee5.organization) === null || _values$payee5$organi === void 0 ? void 0 : _values$payee5$organi.slug]);

  var handleSlugValidation = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(value) {
      var _existingSlugAccount$;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(value === (existingSlugAccount === null || existingSlugAccount === void 0 ? void 0 : (_existingSlugAccount$ = existingSlugAccount.account) === null || _existingSlugAccount$ === void 0 ? void 0 : _existingSlugAccount$.slug))) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", formatMessage(ExpenseFormPayeeSignUpStep_msg.orgSlugErrorTaken));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSlugValidation(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
      label: "How you will receive the money of this expense?",
      labelFontSize: "13px",
      mt: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseFormPayeeSignUpStep_Fieldset, {
          onChange: changePayeeType,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            flexDirection: ['column', 'row'],
            overflow: "hidden",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ExpenseFormPayeeSignUpStep_RadioOptionContainer, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                alignSelf: ['center', 'baseline', null, 'center'],
                mr: "16px",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
                  type: "radio",
                  name: "payeeType",
                  checked: payeeType === ExpenseFormPayeeSignUpStep_PAYEE_TYPE.USER,
                  value: ExpenseFormPayeeSignUpStep_PAYEE_TYPE.USER,
                  onChange: changePayeeType
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                children: "Personal Account"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ExpenseFormPayeeSignUpStep_RadioOptionContainer, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                alignSelf: ['center', 'baseline', null, 'center'],
                mr: "16px",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
                  type: "radio",
                  name: "payeeType",
                  checked: payeeType === ExpenseFormPayeeSignUpStep_PAYEE_TYPE.ORG,
                  value: ExpenseFormPayeeSignUpStep_PAYEE_TYPE.ORG,
                  onChange: changePayeeType
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                children: "Organization Account"
              })]
            })]
          })
        })
      })
    }), payeeType === ExpenseFormPayeeSignUpStep_PAYEE_TYPE.ORG && /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
        gridTemplateColumns: ['100%', 'calc(50% - 8px) calc(50% - 8px)'],
        gridColumnGap: [null, 2, null, 3],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee.organization.name",
          children: function children(_ref4) {
            var field = _ref4.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              label: formatMessage(ExpenseFormPayeeSignUpStep_msg.orgNameLabel),
              labelFontSize: "13px",
              mt: 3,
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread({}, inputProps), field), {}, {
                  placeholder: "e.g., Airbnb, Salesforce"
                }));
              }
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee.organization.slug",
          validate: handleSlugValidation,
          children: function children(_ref5) {
            var _errors$payee, _errors$payee$organiz;

            var field = _ref5.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              mt: 3,
              labelFontSize: "13px",
              error: (_errors$payee = errors.payee) === null || _errors$payee === void 0 ? void 0 : (_errors$payee$organiz = _errors$payee.organization) === null || _errors$payee$organiz === void 0 ? void 0 : _errors$payee$organiz.slug,
              name: field.name,
              label: formatMessage(ExpenseFormPayeeSignUpStep_msg.orgSlugLabel),
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread({}, inputProps), field), {}, {
                  prepend: "opencollective.com/"
                }));
              }
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee.organization.website",
          children: function children(_ref6) {
            var field = _ref6.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              label: formatMessage(ExpenseFormPayeeSignUpStep_msg.orgWebsiteLabel),
              labelFontSize: "13px",
              mt: 3,
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread({}, inputProps), field), {}, {
                  prepend: "http://"
                }));
              }
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee.organization.description",
          children: function children(_ref7) {
            var field = _ref7.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              label: formatMessage(ExpenseFormPayeeSignUpStep_msg.orgDescriptionLabel),
              labelFontSize: "13px",
              mt: 3,
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread({}, inputProps), field), {}, {
                  placeholder: ""
                }));
              }
            });
          }
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
      gridTemplateColumns: ['100%', 'calc(50% - 8px) calc(50% - 8px)'],
      gridColumnGap: [null, 2, null, 3],
      gridAutoFlow: "dense",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee.name",
          children: function children(_ref8) {
            var field = _ref8.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              label: formatMessage(ExpenseFormPayeeSignUpStep_msg.nameLabel),
              labelFontSize: "13px",
              mt: 3,
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread({}, inputProps), field));
              }
            });
          }
        }), payeeType === ExpenseFormPayeeSignUpStep_PAYEE_TYPE.ORG && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          fontSize: "11px",
          lineHeight: "16px",
          color: "black.600",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "ExpenseForm.SignUp.OrgAdminNote",
            defaultMessage: [{
              "type": 0,
              "value": "You need to be an admin of the Organization to submit expenses."
            }]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee.email",
          required: true,
          children: function children(_ref9) {
            var _errors$payee2;

            var field = _ref9.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              label: formatMessage(ExpenseFormPayeeSignUpStep_msg.emailLabel),
              labelFontSize: "13px",
              error: (_errors$payee2 = errors.payee) === null || _errors$payee2 === void 0 ? void 0 : _errors$payee2.email,
              mt: 3,
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread({}, inputProps), field), {}, {
                  type: "email"
                }));
              }
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          fontSize: "11px",
          lineHeight: "16px",
          color: "black.600",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
              loginLink: /*#__PURE__*/(0,jsx_runtime.jsx)(LoginBtn/* default */.Z, {
                asLink: true
              })
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
            name: payeeType === ExpenseFormPayeeSignUpStep_PAYEE_TYPE.ORG ? 'payee.organization.legalName' : 'payee.legalName',
            children: function children(_ref10) {
              var field = _ref10.field;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                name: field.name,
                isPrivate: true,
                required: false,
                label: formatMessage(ExpenseFormPayeeSignUpStep_msg.legalName),
                labelFontSize: "13px",
                mt: 3,
                children: function children(inputProps) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread({}, inputProps), field));
                }
              });
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            fontSize: "11px",
            lineHeight: "16px",
            color: "black.600",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "editCollective.legalName.description",
              defaultMessage: [{
                "type": 0,
                "value": "Legal names are private and used in receipts, tax forms, payment details on expenses, and other non-public contexts. Legal names are only visible to admins."
              }]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mt: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputLocation/* default */.Z, {
            onChange: function onChange(values) {
              formik.setFieldValue('payeeLocation', values);
            },
            location: values.payeeLocation,
            errors: errors.payeeLocation,
            required: true
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payoutMethod",
          children: function children(_ref11) {
            var field = _ref11.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              htmlFor: "payout-method",
              flex: "1",
              mt: 3,
              label: formatMessage(ExpenseFormPayeeSignUpStep_msg.payoutOptionLabel),
              labelFontSize: "13px",
              error: (0,lib_errors/* isErrorType */.kY)(errors.payoutMethod, lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED) ? (0,form_utils/* formatFormErrorMessage */.$m)(intl, errors.payoutMethod) : null,
              children: function children(_ref12) {
                var id = _ref12.id,
                    error = _ref12.error;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_PayoutMethodSelect, {
                  inputId: id,
                  error: error,
                  onChange: setPayoutMethod,
                  payoutMethod: values.payoutMethod,
                  payoutMethods: constants_utils/* EMPTY_ARRAY */.L,
                  payee: values.payee,
                  disabled: !values.payee,
                  collective: collective
                });
              }
            });
          }
        }), values.payoutMethod && /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payoutMethod",
          children: function children(_ref13) {
            var field = _ref13.field,
                meta = _ref13.meta;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mt: 3,
              flex: "1",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_PayoutMethodForm, {
                fieldsPrefix: "payoutMethod",
                payoutMethod: field.value,
                host: collective.host,
                errors: meta.error
              })
            });
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* FastField */.Rt, {
        name: "invoiceInfo",
        children: function children(_ref14) {
          var field = _ref14.field;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            name: field.name,
            label: formatMessage(ExpenseFormPayeeSignUpStep_msg.invoiceInfo),
            labelFontSize: "13px",
            required: false,
            mt: 3,
            gridColumn: 1,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread(ExpenseFormPayeeSignUpStep_objectSpread({
                as: StyledTextarea/* default */.Z
              }, inputProps), field), {}, {
                minHeight: 80,
                placeholder: formatMessage(ExpenseFormPayeeSignUpStep_msg.invoiceInfoPlaceholder)
              }));
            }
          });
        }
      })]
    }), values.payee && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        flex: "1",
        mt: 4,
        borderColor: "black.300"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        mt: 3,
        flexWrap: "wrap",
        children: [onCancel && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-cancel",
          disabled: !stepOneCompleted,
          onClick: function onClick() {
            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-next",
          buttonStyle: "primary",
          disabled: !stepOneCompleted,
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2() {
            var allErrors, errors;
            return regenerator_default().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return formik.validateForm();

                  case 2:
                    allErrors = _context2.sent;
                    errors = omit_default()(pick_default()(allErrors, ['payee', 'payoutMethod', 'payeeLocation']), ['payoutMethod.data.currency']);

                    if (isEmpty_default()((0,utils/* flattenObjectDeep */.Mc)(errors))) {
                      onNext === null || onNext === void 0 ? void 0 : onNext();
                    } else {
                      // We use set touched here to display errors on fields that are not dirty.
                      formik.setTouched(errors);
                      formik.setErrors(errors);
                    }

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
/* harmony default export */ var expenses_ExpenseFormPayeeSignUpStep = (ExpenseFormPayeeSignUpStep);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/InfoCircle/InfoCircle.esm.js
var InfoCircle_esm = __webpack_require__(95612);
// EXTERNAL MODULE: ./lib/policies.ts
var policies = __webpack_require__(43176);
// EXTERNAL MODULE: ./components/CollectivePicker.js + 2 modules
var CollectivePicker = __webpack_require__(41861);
// EXTERNAL MODULE: ./components/CollectivePickerAsync.js
var CollectivePickerAsync = __webpack_require__(5993);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./components/TwoFactorAuthRequiredMessage.tsx
var TwoFactorAuthRequiredMessage = __webpack_require__(37066);
;// CONCATENATED MODULE: ./components/expenses/ExpenseFormPayeeStep.js












function ExpenseFormPayeeStep_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpenseFormPayeeStep_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpenseFormPayeeStep_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpenseFormPayeeStep_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


































var INDIVIDUAL = collectives/* CollectiveType.INDIVIDUAL */.eV.INDIVIDUAL,
    ORGANIZATION = collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION,
    COLLECTIVE = collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE,
    FUND = collectives/* CollectiveType.FUND */.eV.FUND,
    EVENT = collectives/* CollectiveType.EVENT */.eV.EVENT,
    PROJECT = collectives/* CollectiveType.PROJECT */.eV.PROJECT;
var ExpenseFormPayeeStep_msg = (0,lib.defineMessages)({
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

var setLocationFromPayee = function setLocationFromPayee(formik, payee) {
  var _payee$location, _payee$location2, _payee$location3;

  formik.setFieldValue('payeeLocation.country', (payee === null || payee === void 0 ? void 0 : (_payee$location = payee.location) === null || _payee$location === void 0 ? void 0 : _payee$location.country) || null);
  formik.setFieldValue('payeeLocation.address', (payee === null || payee === void 0 ? void 0 : (_payee$location2 = payee.location) === null || _payee$location2 === void 0 ? void 0 : _payee$location2.address) || '');
  formik.setFieldValue('payeeLocation.structured', payee === null || payee === void 0 ? void 0 : (_payee$location3 = payee.location) === null || _payee$location3 === void 0 ? void 0 : _payee$location3.structured);
};

var getPayoutMethodsFromPayee = function getPayoutMethodsFromPayee(payee) {
  var _payee$host;

  var payoutMethods = (get_default()(payee, 'payoutMethods') || constants_utils/* EMPTY_ARRAY */.L).filter(function (_ref) {
    var isSaved = _ref.isSaved;
    return isSaved;
  }); // If the Payee is active (can manage a budget and has a balance). This is usually:
  // - a "Collective" family (Collective, Fund, Event, Project) with an host or Self Hosted
  // - an "Host" Organization with budget activated (new default)

  if (payee !== null && payee !== void 0 && payee.isActive) {
    if (!payoutMethods.find(function (pm) {
      return pm.type === payout_method/* PayoutMethodType.ACCOUNT_BALANCE */.Nk.ACCOUNT_BALANCE;
    })) {
      payoutMethods.push({
        id: 'new',
        data: {},
        type: payout_method/* PayoutMethodType.ACCOUNT_BALANCE */.Nk.ACCOUNT_BALANCE,
        isSaved: true
      });
    }
  } // If the Payee is in the "Collective" family (Collective, Fund, Event, Project)
  // But not the Host itself (Self Hosted)
  // Then we should add BANK_ACCOUNT and PAYPAL of the Host as an option


  if (payee && collectives/* AccountTypesWithHost.includes */.Zs.includes(payee.type) && payee.id !== ((_payee$host = payee.host) === null || _payee$host === void 0 ? void 0 : _payee$host.id)) {
    var hostPayoutMethods = get_default()(payee, 'host.payoutMethods') || constants_utils/* EMPTY_ARRAY */.L;
    var hostSuitablePayoutMethods = hostPayoutMethods.filter(function (payoutMethod) {
      return payoutMethod.type === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT;
    }).filter(function (payoutMethod) {
      return !payoutMethod.name || payoutMethod.name.includes('Collectives account') || payoutMethod.name.includes('Main account');
    });

    if (hostSuitablePayoutMethods.length === 0) {
      hostSuitablePayoutMethods = hostPayoutMethods.filter(function (payoutMethod) {
        return payoutMethod.type === payout_method/* PayoutMethodType.PAYPAL */.Nk.PAYPAL;
      });
    }

    payoutMethods.push.apply(payoutMethods, toConsumableArray_default()(hostSuitablePayoutMethods.map(function (payoutMethod) {
      return ExpenseFormPayeeStep_objectSpread(ExpenseFormPayeeStep_objectSpread({}, payoutMethod), {}, {
        isDeletable: false
      });
    })));
  }

  return payoutMethods.length > 0 ? payoutMethods : constants_utils/* EMPTY_ARRAY */.L;
};

var refreshPayoutProfile = function refreshPayoutProfile(formik, payoutProfiles) {
  var payee = formik.values.payee ? payoutProfiles.find(function (profile) {
    return profile.id === formik.values.payee.id;
  }) : first_default()(payoutProfiles);
  formik.setValues(ExpenseFormPayeeStep_objectSpread(ExpenseFormPayeeStep_objectSpread({}, formik.values), {}, {
    draft: omit_default()(formik.values.draft, ['payee']),
    payee: payee
  }));
};

var getPayeeOptions = function getPayeeOptions(intl, payoutProfiles) {
  var _myOrganizations$push, _profilesByType$COLLE, _profilesByType$FUND, _profilesByType$PROJE, _profilesByType$EVENT;

  var profileOptions = payoutProfiles.map(function (value) {
    return defineProperty_default()({
      value: value,
      label: value.name
    }, CollectivePicker/* FLAG_COLLECTIVE_PICKER_COLLECTIVE */.rA, true);
  });

  var profilesByType = groupBy_default()(profileOptions, function (p) {
    return p.value.type;
  });

  var myself = profilesByType[INDIVIDUAL] || [];
  var myOrganizations = profilesByType[ORGANIZATION] || [];
  myOrganizations.push((_myOrganizations$push = {
    label: null,
    value: null,
    isDisabled: true
  }, defineProperty_default()(_myOrganizations$push, CollectivePicker/* FLAG_NEW_COLLECTIVE */.yZ, true), defineProperty_default()(_myOrganizations$push, "types", [collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION]), defineProperty_default()(_myOrganizations$push, "__background__", 'white'), _myOrganizations$push));
  var payeeOptions = [{
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

  if ((_profilesByType$COLLE = profilesByType[COLLECTIVE]) !== null && _profilesByType$COLLE !== void 0 && _profilesByType$COLLE.length) {
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

  if ((_profilesByType$FUND = profilesByType[FUND]) !== null && _profilesByType$FUND !== void 0 && _profilesByType$FUND.length) {
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

  if ((_profilesByType$PROJE = profilesByType[PROJECT]) !== null && _profilesByType$PROJE !== void 0 && _profilesByType$PROJE.length) {
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

  if ((_profilesByType$EVENT = profilesByType[EVENT]) !== null && _profilesByType$EVENT !== void 0 && _profilesByType$EVENT.length) {
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

var checkStepOneCompleted = function checkStepOneCompleted(values, isOnBehalf, isMissing2FA) {
  if (isMissing2FA) {
    return false;
  } else if (isOnBehalf) {
    return Boolean(values.payee);
  } else if (!isEmpty_default()((0,utils/* flattenObjectDeep */.Mc)(validatePayoutMethod(values.payoutMethod)))) {
    return false; // There are some errors in the form
  } else if ((0,lib_utils/* checkRequiresAddress */.vr)(values)) {
    var _values$payeeLocation, _values$payeeLocation2;

    // Require an address for non-receipt expenses
    return Boolean(values.payoutMethod && ((_values$payeeLocation = values.payeeLocation) === null || _values$payeeLocation === void 0 ? void 0 : _values$payeeLocation.country) && ((_values$payeeLocation2 = values.payeeLocation) === null || _values$payeeLocation2 === void 0 ? void 0 : _values$payeeLocation2.address));
  } else {
    return true;
  }
};

var ExpenseFormPayeeStep = function ExpenseFormPayeeStep(_ref3) {
  var _values$payee;

  var formik = _ref3.formik,
      payoutProfiles = _ref3.payoutProfiles,
      collective = _ref3.collective,
      onCancel = _ref3.onCancel,
      onNext = _ref3.onNext,
      onInvite = _ref3.onInvite,
      _onChange = _ref3.onChange,
      isOnBehalf = _ref3.isOnBehalf,
      loggedInAccount = _ref3.loggedInAccount,
      editingExpense = _ref3.editingExpense,
      resetDefaultStep = _ref3.resetDefaultStep,
      formPersister = _ref3.formPersister,
      getDefaultExpense = _ref3.getDefaultExpense;
  var intl = (0,useIntl/* default */.Z)();
  var formatMessage = intl.formatMessage;
  var values = formik.values,
      errors = formik.errors;
  var isMissing2FA = (0,policies/* require2FAForAdmins */.u)(values.payee) && !(loggedInAccount !== null && loggedInAccount !== void 0 && loggedInAccount.hasTwoFactorAuth);
  var stepOneCompleted = checkStepOneCompleted(values, isOnBehalf, isMissing2FA);
  var allPayoutMethods = react.useMemo(function () {
    return getPayoutMethodsFromPayee(values.payee);
  }, [values.payee, loggedInAccount]);

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      showResetModal = _React$useState2[0],
      setShowResetModal = _React$useState2[1];

  var onPayoutMethodRemove = react.useCallback(function () {
    return refreshPayoutProfile(formik, payoutProfiles);
  }, [payoutProfiles]);
  var setPayoutMethod = react.useCallback(function (_ref4) {
    var value = _ref4.value;
    return formik.setFieldValue('payoutMethod', value);
  }, []);
  var payeeOptions = react.useMemo(function () {
    return getPayeeOptions(intl, payoutProfiles);
  }, [payoutProfiles]);
  var requiresAddress = (0,lib_utils/* checkRequiresAddress */.vr)(values);
  var canInvite = !(values !== null && values !== void 0 && values.status);
  var collectivePick = canInvite ? function (_ref5) {
    var id = _ref5.id;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(CollectivePickerAsync/* default */.Z, {
      inputId: id,
      "data-cy": "select-expense-payee",
      isSearchable: true,
      collective: values.payee,
      onChange: function onChange(_ref6) {
        var value = _ref6.value;

        if (value) {
          var _value$members;

          var existingProfile = payoutProfiles.find(function (p) {
            return p.slug === value.slug;
          });
          var isNewlyCreatedProfile = (_value$members = value.members) === null || _value$members === void 0 ? void 0 : _value$members.some(function (m) {
            return m.role === 'ADMIN' && m.member.slug === loggedInAccount.slug;
          });

          var payee = existingProfile || ExpenseFormPayeeStep_objectSpread(ExpenseFormPayeeStep_objectSpread({}, pick_default()(value, ['id', 'name', 'slug', 'email', 'type'])), {}, {
            isInvite: !isNewlyCreatedProfile
          });

          if (isNewlyCreatedProfile) {
            payee.payoutMethods = [];
          }

          formik.setFieldValue('payee', payee);
          formik.setFieldValue('payoutMethod', null);
          setLocationFromPayee(formik, payee);

          _onChange(payee);
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
      customOptionsPosition: CollectivePicker/* CUSTOM_OPTIONS_POSITION.BOTTOM */.W1.BOTTOM,
      getDefaultOptions: function getDefaultOptions(build) {
        return values.payee && build(values.payee);
      },
      invitable: true,
      onInvite: onInvite,
      LoggedInUser: loggedInAccount,
      addLoggedInUserAsAdmin: true,
      excludeAdminFields: true
    });
  } : function (_ref7) {
    var id = _ref7.id;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(CollectivePicker/* default */.ZP, {
      inputId: id,
      customOptions: payeeOptions,
      getDefaultOptions: function getDefaultOptions(build) {
        return values.payee && build(values.payee);
      },
      "data-cy": "select-expense-payee",
      isSearchable: true,
      collective: values.payee,
      onChange: function onChange(_ref8) {
        var value = _ref8.value;
        formik.setFieldValue('payee', value);
        formik.setFieldValue('payoutMethod', null);
        setLocationFromPayee(formik, value);

        _onChange(value);
      }
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        mr: [null, 2, null, 4],
        flexGrow: "1",
        flexBasis: "50%",
        maxWidth: [null, null, '60%'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payee",
          children: function children(_ref9) {
            var field = _ref9.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              label: formatMessage(ExpenseFormPayeeStep_msg.payeeLabel),
              labelFontSize: "13px",
              flex: "1",
              mt: 3,
              children: collectivePick
            });
          }
        }), !isMissing2FA && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [((_values$payee = values.payee) === null || _values$payee === void 0 ? void 0 : _values$payee.legalName) && /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
            name: "legalName",
            children: function children(_ref10) {
              var _values$payoutMethod, _values$payoutMethod$;

              var field = _ref10.field;
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledInputField/* default */.Z, {
                name: field.name,
                label: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "LegalName",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Legal Name"
                    }]
                  }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
                    content: function content() {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "ExpenseForm.legalName.tooltip",
                        defaultMessage: [{
                          "type": 0,
                          "value": "The legal name of the payee. This can be changed in your profile settings."
                        }]
                      });
                    },
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(InfoCircle_esm/* InfoCircle */.Z, {
                      size: 16
                    })
                  })]
                }),
                labelFontSize: "13px",
                flex: "1",
                mt: 3,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, {
                  value: values.payee.legalName,
                  disabled: true
                }), ((_values$payoutMethod = values.payoutMethod) === null || _values$payoutMethod === void 0 ? void 0 : (_values$payoutMethod$ = _values$payoutMethod.data) === null || _values$payoutMethod$ === void 0 ? void 0 : _values$payoutMethod$.accountHolderName) && values.payee.legalName && !(0,collective_lib/* compareNames */.dj)(values.payoutMethod.data.accountHolderName, values.payee.legalName) && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
                  mt: 2,
                  fontSize: "12px",
                  type: "warning",
                  withIcon: true,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Warning.LegalNameNotMatchBankAccountName",
                    defaultMessage: [{
                      "type": 0,
                      "value": "The legal name should match the bank account holder name in most cases. Otherwise payments may be delayed. If the payment is to an organization, please select or create that organization's profile instead of your individual profile as the payee."
                    }]
                  })
                })]
              });
            }
          }), requiresAddress && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mt: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputLocation/* default */.Z, {
              onChange: function onChange(values) {
                formik.setFieldValue('payeeLocation', values);
              },
              location: values.payeeLocation,
              errors: errors.payeeLocation
            })
          }), values.type === expenseTypes/* default.INVOICE */.Z.INVOICE && /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* FastField */.Rt, {
            name: "invoiceInfo",
            children: function children(_ref11) {
              var field = _ref11.field;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                name: field.name,
                label: formatMessage(ExpenseFormPayeeStep_msg.invoiceInfo),
                labelFontSize: "13px",
                required: false,
                mt: 3,
                children: function children(inputProps) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, ExpenseFormPayeeStep_objectSpread(ExpenseFormPayeeStep_objectSpread(ExpenseFormPayeeStep_objectSpread({
                    as: StyledTextarea/* default */.Z
                  }, inputProps), field), {}, {
                    minHeight: 80,
                    placeholder: formatMessage(ExpenseFormPayeeStep_msg.invoiceInfoPlaceholder)
                  }));
                }
              });
            }
          })]
        })]
      }), !isOnBehalf && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        flexGrow: "1",
        flexBasis: "50%",
        display: values.payee ? 'block' : 'none',
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payoutMethod",
          children: function children(_ref12) {
            var field = _ref12.field;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              name: field.name,
              htmlFor: "payout-method",
              flex: "1",
              mt: 3,
              label: formatMessage(ExpenseFormPayeeStep_msg.payoutOptionLabel),
              labelFontSize: "13px",
              error: (0,lib_errors/* isErrorType */.kY)(errors.payoutMethod, lib_errors/* ERROR.FORM_FIELD_REQUIRED */.pn.FORM_FIELD_REQUIRED) ? (0,form_utils/* formatFormErrorMessage */.$m)(intl, errors.payoutMethod) : null,
              children: function children(_ref13) {
                var id = _ref13.id,
                    error = _ref13.error;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_PayoutMethodSelect, {
                  inputId: id,
                  error: error,
                  onChange: setPayoutMethod,
                  onRemove: onPayoutMethodRemove,
                  payoutMethod: values.payoutMethod,
                  payoutMethods: allPayoutMethods,
                  payee: values.payee,
                  disabled: !values.payee || isMissing2FA,
                  collective: collective
                });
              }
            });
          }
        }), values.payoutMethod && /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          name: "payoutMethod",
          children: function children(_ref14) {
            var field = _ref14.field,
                meta = _ref14.meta;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mt: 3,
              flex: "1",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_PayoutMethodForm, {
                fieldsPrefix: "payoutMethod",
                payoutMethod: field.value,
                host: collective.host,
                errors: meta.error
              })
            });
          }
        })]
      })]
    }), isMissing2FA && /*#__PURE__*/(0,jsx_runtime.jsx)(TwoFactorAuthRequiredMessage/* TwoFactorAuthRequiredMessage */.l, {
      mt: 4
    }), values.payee && !isMissing2FA && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        flex: "1",
        mt: 4,
        borderColor: "black.300"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        mt: 3,
        flexWrap: "wrap",
        children: [onCancel && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-cancel",
          onClick: function onClick() {
            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-next",
          buttonStyle: "primary",
          disabled: !stepOneCompleted,
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
            var allErrors, errors;
            return regenerator_default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return formik.validateForm();

                  case 2:
                    allErrors = _context.sent;
                    // Get the relevant errors for the payee step, ignores data.currency in the because it is related to expense amount.
                    errors = omit_default()(pick_default()(allErrors, ['payee', 'payoutMethod', 'payeeLocation']), ['payoutMethod.data.currency']);

                    if (isEmpty_default()((0,utils/* flattenObjectDeep */.Mc)(errors))) {
                      onNext === null || onNext === void 0 ? void 0 : onNext();
                    } else {
                      // We use set touched here to display errors on fields that are not dirty.
                      // eslint-disable-next-line no-console
                      console.log('ExpenseFormPayeeStep > Validation failed', errors);
                      formik.setTouched(errors);
                      formik.setErrors(errors);
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Pagination.Next",
            defaultMessage: [{
              "type": 0,
              "value": "Next"
            }]
          }), "\xA0\u2192"]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          flex: "1",
          borderColor: "white.full",
          mx: 2
        }), showResetModal ? /*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.Z, ExpenseFormPayeeStep_objectSpread({
          onClose: function onClose() {
            return setShowResetModal(false);
          },
          header: editingExpense ? formatMessage(ExpenseFormPayeeStep_msg.cancelEditExpense) : formatMessage(ExpenseFormPayeeStep_msg.clearExpenseForm),
          body: editingExpense ? formatMessage(ExpenseFormPayeeStep_msg.confirmCancelEditExpense) : formatMessage(ExpenseFormPayeeStep_msg.confirmClearExpenseForm),
          continueHandler: function continueHandler() {
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
        })) : /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          "float": "right",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
            type: "button",
            buttonStyle: "borderless",
            width: ['100%', 'auto'],
            color: "red.500",
            mt: 1,
            mx: [2, 0],
            mr: [null, 3],
            whiteSpace: "nowrap",
            onClick: function onClick() {
              return setShowResetModal(true);
            },
            "float": "right",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Undo_esm/* Undo */.W, {
              size: 11
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              mx: 1,
              children: formatMessage(editingExpense ? ExpenseFormPayeeStep_msg.cancelEditExpense : ExpenseFormPayeeStep_msg.clearExpenseForm)
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
/* harmony default export */ var expenses_ExpenseFormPayeeStep = (ExpenseFormPayeeStep);
// EXTERNAL MODULE: ./components/expenses/ExpensePayeeDetails.js
var ExpensePayeeDetails = __webpack_require__(59390);
// EXTERNAL MODULE: ./components/expenses/ExpenseRecurringBanner.js
var ExpenseRecurringBanner = __webpack_require__(7852);
// EXTERNAL MODULE: ./public/static/images/grant.gif
var grant = __webpack_require__(89646);
var grant_default = /*#__PURE__*/__webpack_require__.n(grant);
// EXTERNAL MODULE: ./public/static/images/grant-animation.gif
var grant_animation = __webpack_require__(64191);
var grant_animation_default = /*#__PURE__*/__webpack_require__.n(grant_animation);
// EXTERNAL MODULE: ./public/static/images/invoice-animation.gif
var invoice_animation = __webpack_require__(78293);
var invoice_animation_default = /*#__PURE__*/__webpack_require__.n(invoice_animation);
// EXTERNAL MODULE: ./public/static/images/invoice-animation-static.jpg
var invoice_animation_static = __webpack_require__(80011);
var invoice_animation_static_default = /*#__PURE__*/__webpack_require__.n(invoice_animation_static);
// EXTERNAL MODULE: ./public/static/images/receipt-animation.gif
var receipt_animation = __webpack_require__(24396);
var receipt_animation_default = /*#__PURE__*/__webpack_require__.n(receipt_animation);
// EXTERNAL MODULE: ./public/static/images/receipt-animation-static.jpg
var receipt_animation_static = __webpack_require__(86142);
var receipt_animation_static_default = /*#__PURE__*/__webpack_require__.n(receipt_animation_static);
;// CONCATENATED MODULE: ./components/expenses/ExpenseTypeRadioSelect.tsx


var ExpenseTypeRadioSelect_defineMessages, _defineMessages2, _illustrations, _staticIllustrations;
















var ExpenseTypeLabels = (0,lib.defineMessages)((ExpenseTypeRadioSelect_defineMessages = {}, defineProperty_default()(ExpenseTypeRadioSelect_defineMessages, expenseTypes/* default.INVOICE */.Z.INVOICE, {
  id: "Expense.Type.Invoice",
  defaultMessage: [{
    "type": 0,
    "value": "Invoice"
  }]
}), defineProperty_default()(ExpenseTypeRadioSelect_defineMessages, expenseTypes/* default.RECEIPT */.Z.RECEIPT, {
  id: "ExpenseForm.ReceiptLabel",
  defaultMessage: [{
    "type": 0,
    "value": "Reimbursement"
  }]
}), defineProperty_default()(ExpenseTypeRadioSelect_defineMessages, expenseTypes/* default.GRANT */.Z.GRANT, {
  id: "ExpenseForm.Type.Request",
  defaultMessage: [{
    "type": 0,
    "value": "Request Grant"
  }]
}), ExpenseTypeRadioSelect_defineMessages));
var ExpenseTypeDescription = (0,lib.defineMessages)((_defineMessages2 = {}, defineProperty_default()(_defineMessages2, expenseTypes/* default.RECEIPT */.Z.RECEIPT, {
  id: "ExpenseForm.ReceiptDescription",
  defaultMessage: [{
    "type": 0,
    "value": "Get reimbursed for a purchase already made."
  }]
}), defineProperty_default()(_defineMessages2, expenseTypes/* default.INVOICE */.Z.INVOICE, {
  id: "ExpenseForm.InvoiceDescription",
  defaultMessage: [{
    "type": 0,
    "value": "Bill for your time or a service."
  }]
}), defineProperty_default()(_defineMessages2, expenseTypes/* default.GRANT */.Z.GRANT, {
  id: "ExpenseForm.FundingRequestDescription",
  defaultMessage: [{
    "type": 0,
    "value": "Request a grant for your project or initiative."
  }]
}), _defineMessages2));
var TypeIllustration = styled_components_browser_esm/* default.img.attrs */.ZP.img.attrs({
  alt: ''
}).withConfig({
  displayName: "ExpenseTypeRadioSelect__TypeIllustration",
  componentId: "sc-2dfms8-0"
})(["width:48px;height:48px;"]);
var StaticTypeIllustration = (0,styled_components_browser_esm/* default */.ZP)(TypeIllustration).withConfig({
  displayName: "ExpenseTypeRadioSelect__StaticTypeIllustration",
  componentId: "sc-2dfms8-1"
})(["position:absolute;background:white;"]);
var ExpenseTypeOptionContainer = styled_components_browser_esm/* default.label.withConfig */.ZP.label.withConfig({
  displayName: "ExpenseTypeRadioSelect__ExpenseTypeOptionContainer",
  componentId: "sc-2dfms8-2"
})(["display:flex;align-items:baseline;padding:15px 16px;margin-bottom:0;cursor:pointer;background:white;justify-content:flex-start;flex:1;border-top:1px solid #dcdee0;border-left:1px solid #dcdee0;margin-top:-1px;margin-left:-1px;input[type='radio']{margin-right:4px;}&:hover{", "{opacity:0;}}"], StaticTypeIllustration);
var illustrations = (_illustrations = {}, defineProperty_default()(_illustrations, expenseTypes/* default.INVOICE */.Z.INVOICE, (invoice_animation_default())), defineProperty_default()(_illustrations, expenseTypes/* default.RECEIPT */.Z.RECEIPT, (receipt_animation_default())), defineProperty_default()(_illustrations, expenseTypes/* default.GRANT */.Z.GRANT, (grant_animation_default())), _illustrations);
var staticIllustrations = (_staticIllustrations = {}, defineProperty_default()(_staticIllustrations, expenseTypes/* default.INVOICE */.Z.INVOICE, (invoice_animation_static_default())), defineProperty_default()(_staticIllustrations, expenseTypes/* default.RECEIPT */.Z.RECEIPT, (receipt_animation_static_default())), defineProperty_default()(_staticIllustrations, expenseTypes/* default.GRANT */.Z.GRANT, (grant_default())), _staticIllustrations);

var ExpenseTypeOption = function ExpenseTypeOption(_ref) {
  var name = _ref.name,
      type = _ref.type,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange;

  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  var illustrationSrc = illustrations[type] || (receipt_animation_default());
  var staticIllustrationSrc = staticIllustrations[type] || (receipt_animation_static_default());
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ExpenseTypeOptionContainer, {
    "data-cy": "radio-expense-type-".concat(type),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      alignSelf: ['center', 'baseline', null, 'center'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        type: "radio",
        name: name,
        value: type,
        checked: isChecked,
        onChange: onChange
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      mx: 2,
      size: 48,
      alignSelf: "center",
      display: ['block', 'none', null, 'block'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StaticTypeIllustration, {
        src: staticIllustrationSrc
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(TypeIllustration, {
        src: illustrationSrc
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "16px",
        fontWeight: "bold",
        mb: 2,
        children: formatMessage(ExpenseTypeLabels[type])
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mr: 1,
          size: 48,
          alignSelf: "center",
          display: ['none', 'block', null, 'none'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StaticTypeIllustration, {
            src: staticIllustrationSrc
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(TypeIllustration, {
            src: illustrationSrc
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "12px",
          color: "black.600",
          fontWeight: "normal",
          children: formatMessage(ExpenseTypeDescription[type])
        })]
      })]
    })]
  });
};

var ExpenseTypeRadioSelect_Fieldset = styled_components_browser_esm/* default.fieldset.withConfig */.ZP.fieldset.withConfig({
  displayName: "ExpenseTypeRadioSelect__Fieldset",
  componentId: "sc-2dfms8-3"
})(["border:none;padding:0;margin:0;"]);
var BASE_EXPENSE_TYPES = [expenseTypes/* default.INVOICE */.Z.INVOICE, expenseTypes/* default.RECEIPT */.Z.RECEIPT, expenseTypes/* default.GRANT */.Z.GRANT];
/**
 * To select expense's type.
 *
 * Using `StyledRadioList` should have been the default choice, but unfortunately
 * IE & Chrome don't support using `flex` on fieldset yet, so we have to create a custom
 * layout. See https://github.com/w3c/csswg-drafts/issues/321
 */

var ExpenseTypeRadioSelect = function ExpenseTypeRadioSelect(_ref2) {
  var name = _ref2.name,
      onChange = _ref2.onChange,
      value = _ref2.value,
      supportedExpenseTypes = _ref2.supportedExpenseTypes;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseTypeRadioSelect_Fieldset, {
      onChange: onChange,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        flexDirection: ['column', 'row'],
        overflow: "hidden",
        children: BASE_EXPENSE_TYPES.filter(function (type) {
          return supportedExpenseTypes.includes(type);
        }).map(function (type) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseTypeOption, {
            name: name,
            type: type,
            isChecked: value === type,
            onChange: onChange
          }, type);
        })
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
/* harmony default export */ var expenses_ExpenseTypeRadioSelect = (/*#__PURE__*/react.memo(ExpenseTypeRadioSelect));
// EXTERNAL MODULE: ./components/expenses/ExpenseTypeTag.js
var ExpenseTypeTag = __webpack_require__(88243);
;// CONCATENATED MODULE: ./components/expenses/ExpenseForm.js










function ExpenseForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpenseForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpenseForm_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpenseForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







































var ExpenseForm_msg = (0,lib.defineMessages)({
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

var getDefaultExpense = function getDefaultExpense(collective) {
  return {
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
  };
};
/**
 * Take the expense's data as generated by `ExpenseForm` and strips out all optional data
 * like URLs for items when the expense is an invoice.
 */


var prepareExpenseForSubmit = function prepareExpenseForSubmit(expenseData) {
  var _expenseData$payee, _expenseData$payee2, _expenseData$payee3, _expenseData$attached, _expenseData$taxes;

  // The collective picker still uses API V1 for when creating a new profile on the fly
  var payeeIdField = typeof ((_expenseData$payee = expenseData.payee) === null || _expenseData$payee === void 0 ? void 0 : _expenseData$payee.id) === 'string' ? 'id' : 'legacyId';
  var isInvoice = expenseData.type === expenseTypes/* default.INVOICE */.Z.INVOICE;
  var isGrant = expenseData.type === expenseTypes/* default.GRANT */.Z.GRANT;
  var payee = (_expenseData$payee2 = expenseData.payee) !== null && _expenseData$payee2 !== void 0 && _expenseData$payee2.isNewUser || (_expenseData$payee3 = expenseData.payee) !== null && _expenseData$payee3 !== void 0 && _expenseData$payee3.isInvite ? pick_default()(expenseData.payee, ['name', 'email', 'legalName', 'organization', 'newsletterOptIn']) : defineProperty_default()({}, payeeIdField, expenseData.payee.id);
  var payeeLocation = (0,lib_utils/* checkRequiresAddress */.vr)(expenseData) ? pick_default()(expenseData.payeeLocation, ['address', 'country', 'structured']) : null;

  var payoutMethod = pick_default()(expenseData.payoutMethod, ['id', 'name', 'data', 'isSaved', 'type']);

  if (payoutMethod.id === 'new') {
    payoutMethod.id = null;
  }

  return ExpenseForm_objectSpread(ExpenseForm_objectSpread({}, pick_default()(expenseData, ['id', 'description', 'longDescription', 'type', 'privateMessage', 'invoiceInfo', 'tags', 'currency'])), {}, {
    payee: payee,
    payeeLocation: payeeLocation,
    payoutMethod: payoutMethod,
    attachedFiles: isInvoice ? (_expenseData$attached = expenseData.attachedFiles) === null || _expenseData$attached === void 0 ? void 0 : _expenseData$attached.map(function (file) {
      return pick_default()(file, ['id', 'url', 'name']);
    }) : [],
    tax: (_expenseData$taxes = expenseData.taxes) === null || _expenseData$taxes === void 0 ? void 0 : _expenseData$taxes.filter(function (tax) {
      return !tax.isDisabled;
    }).map(function (tax) {
      return pick_default()(tax, ['type', 'rate', 'idNumber']);
    }),
    items: expenseData.items.map(function (item) {
      return pick_default()(item, [].concat(toConsumableArray_default()(item.__isNew ? [] : ['id']), toConsumableArray_default()(isInvoice || isGrant ? [] : ['url']), [// never submit URLs for invoices or requests
      'description', 'incurredAt', 'amount']));
    })
  });
};
/**
 * Validate the expense
 */

var validateExpense = function validateExpense(intl, expense) {
  var _expense$payee, _expense$taxes;

  var isCardCharge = expense.type === expenseTypes/* default.CHARGE */.Z.CHARGE;

  if ((_expense$payee = expense.payee) !== null && _expense$payee !== void 0 && _expense$payee.isInvite) {
    return expense.payee.id ? (0,form_utils/* requireFields */.ay)(expense, ['description', 'payee', 'payee.id']) : (0,form_utils/* requireFields */.ay)(expense, ['description', 'payee', 'payee.name', 'payee.email']);
  }

  var errors = isCardCharge ? {} : (0,form_utils/* requireFields */.ay)(expense, ['description', 'payee', 'payoutMethod', 'currency']);

  if (expense.items.length > 0) {
    var itemsErrors = expense.items.map(function (item) {
      return validateExpenseItem(expense, item);
    });
    var hasErrors = itemsErrors.some(function (errors) {
      return !isEmpty_default()(errors);
    });

    if (hasErrors) {
      errors.items = itemsErrors;
    }
  }

  if ((_expense$taxes = expense.taxes) !== null && _expense$taxes !== void 0 && _expense$taxes.length) {
    var taxesErrors = (0,lib_utils/* validateExpenseTaxes */._D)(intl, expense.taxes);

    if (taxesErrors) {
      errors['taxes'] = taxesErrors;
    }
  }

  if (expense.payoutMethod && // CHARGE expenses have VirtualCard and do not have PayoutMethod
  isCardCharge) {
    var payoutMethodErrors = validatePayoutMethod(expense.payoutMethod);

    if (!isEmpty_default()(payoutMethodErrors)) {
      errors.payoutMethod = payoutMethodErrors;
    }
  }

  if ((0,lib_utils/* checkRequiresAddress */.vr)(expense)) {
    Object.assign(errors, (0,form_utils/* requireFields */.ay)(expense, ['payeeLocation.country', 'payeeLocation.address']));
  }

  return errors;
};

var ExpenseForm_setLocationFromPayee = function setLocationFromPayee(formik, payee) {
  formik.setFieldValue('payeeLocation.country', payee.location.country || null);
  formik.setFieldValue('payeeLocation.address', payee.location.address || '');
  formik.setFieldValue('payeeLocation.structured', payee.location.structured);
};

var HiddenFragment = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ExpenseForm__HiddenFragment",
  componentId: "sc-1nv6sft-0"
})(["display:", ";"], function (_ref2) {
  var show = _ref2.show;
  return show ? 'block' : 'none';
});
var EXPENSE_FORM_STEPS = {
  PAYEE: 'PAYEE',
  EXPENSE: 'EXPENSE'
};

var checkAddressValuesAreCompleted = function checkAddressValuesAreCompleted(values) {
  if ((0,lib_utils/* checkRequiresAddress */.vr)(values)) {
    var _values$payeeLocation, _values$payeeLocation2;

    return ((_values$payeeLocation = values.payeeLocation) === null || _values$payeeLocation === void 0 ? void 0 : _values$payeeLocation.country) && ((_values$payeeLocation2 = values.payeeLocation) === null || _values$payeeLocation2 === void 0 ? void 0 : _values$payeeLocation2.address);
  }

  return true;
};

var getDefaultStep = function getDefaultStep(defaultStep, stepOneCompleted, isCreditCardCharge) {
  // Card Charges take priority here because they are technically incomplete.
  if (isCreditCardCharge) {
    return EXPENSE_FORM_STEPS.EXPENSE;
  } else if (!stepOneCompleted) {
    return EXPENSE_FORM_STEPS.PAYEE;
  } else {
    return defaultStep || EXPENSE_FORM_STEPS.PAYEE;
  }
};

var ExpenseFormBody = function ExpenseFormBody(_ref3) {
  var _values$payee, _values$payee2, _errors$payoutMethod, _errors$payoutMethod$, _touched$items, _touched$items$some;

  var formik = _ref3.formik,
      payoutProfiles = _ref3.payoutProfiles,
      collective = _ref3.collective,
      expense = _ref3.expense,
      autoFocusTitle = _ref3.autoFocusTitle,
      onCancel = _ref3.onCancel,
      formPersister = _ref3.formPersister,
      loggedInAccount = _ref3.loggedInAccount,
      loading = _ref3.loading,
      expensesTags = _ref3.expensesTags,
      shouldLoadValuesFromPersister = _ref3.shouldLoadValuesFromPersister,
      isDraft = _ref3.isDraft,
      defaultStep = _ref3.defaultStep;
  var intl = (0,useIntl/* default */.Z)();
  var formatMessage = intl.formatMessage;
  var formRef = react.useRef();
  var values = formik.values,
      handleChange = formik.handleChange,
      errors = formik.errors,
      setValues = formik.setValues,
      dirty = formik.dirty,
      touched = formik.touched,
      resetForm = formik.resetForm,
      setErrors = formik.setErrors;
  var hasBaseFormFieldsCompleted = values.type && values.description;
  var isInvite = (_values$payee = values.payee) === null || _values$payee === void 0 ? void 0 : _values$payee.isInvite;
  var isNewUser = !((_values$payee2 = values.payee) !== null && _values$payee2 !== void 0 && _values$payee2.id);
  var isReceipt = values.type === expenseTypes/* default.RECEIPT */.Z.RECEIPT;
  var isGrant = values.type === expenseTypes/* default.GRANT */.Z.GRANT;
  var isCreditCardCharge = values.type === expenseTypes/* default.CHARGE */.Z.CHARGE;
  var supportedExpenseTypes = react.useMemo(function () {
    return (0,expenses/* getSupportedExpenseTypes */.ip)(collective);
  }, [collective]);
  var isRecurring = expense && expense.recurringExpense !== null;
  var stepOneCompleted = values.payoutMethod && isEmpty_default()((0,utils/* flattenObjectDeep */.Mc)(omit_default()(errors, 'payoutMethod.data.currency'))) && checkAddressValuesAreCompleted(values);
  var stepTwoCompleted = isInvite ? true : (stepOneCompleted || isCreditCardCharge) && hasBaseFormFieldsCompleted && values.items.length > 0;
  var availableCurrencies = (0,lib_utils/* getSupportedCurrencies */._Y)(collective, values.payoutMethod);

  var _React$useState = react.useState(function () {
    return getDefaultStep(defaultStep, stepOneCompleted, isCreditCardCharge);
  }),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1]; // Only true when logged in and drafting the expense


  var _React$useState3 = react.useState(false),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      isOnBehalf = _React$useState4[0],
      setOnBehalf = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      showResetModal = _React$useState6[0],
      setShowResetModal = _React$useState6[1];

  var editingExpense = expense !== undefined; // Scroll to top when step changes

  react.useEffect(function () {
    var _formRef$current;

    var boundingRect = (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.getBoundingClientRect();

    if (boundingRect) {
      var elemTop = boundingRect.top + window.scrollY;
      window.scroll({
        top: elemTop - 75
      });
    }
  }, [step]); // When user logs in we set its account as the default payout profile if not yet defined

  react.useEffect(function () {
    var _values$draft;

    if (values !== null && values !== void 0 && (_values$draft = values.draft) !== null && _values$draft !== void 0 && _values$draft.payee && !loggedInAccount && !isRecurring) {
      formik.setFieldValue('payee', ExpenseForm_objectSpread(ExpenseForm_objectSpread({}, values.draft.payee), {}, {
        isInvite: false,
        isNewUser: true
      }));
    } // If creating a new expense or completing an expense submitted on your behalf, automatically select your default profile.
    else if (!isOnBehalf && (isDraft || !values.payee) && loggedInAccount && !isEmpty_default()(payoutProfiles)) {
      var defaultProfile = values.payee && payoutProfiles.find(function (p) {
        return p.slug === values.payee.slug;
      }) || first_default()(payoutProfiles);

      formik.setFieldValue('payee', defaultProfile);
    } // Update the form state with private fields that were refeched after the user was authenticated


    if (isDraft && loggedInAccount) {
      var privateFields = ['payoutMethod', 'invoiceInfo'];

      for (var _i = 0, _privateFields = privateFields; _i < _privateFields.length; _i++) {
        var field = _privateFields[_i];

        if (!values[field] && expense[field]) {
          formik.setFieldValue(field, expense[field]);
        }
      }
    }
  }, [payoutProfiles, loggedInAccount]); // Pre-fill address based on the payout profile

  react.useEffect(function () {
    var _values$payeeLocation3, _values$payee3;

    if (!((_values$payeeLocation3 = values.payeeLocation) !== null && _values$payeeLocation3 !== void 0 && _values$payeeLocation3.address) && (_values$payee3 = values.payee) !== null && _values$payee3 !== void 0 && _values$payee3.location) {
      ExpenseForm_setLocationFromPayee(formik, values.payee);
    }
  }, [values.payee]); // Return to Payee step if type is changed and reset some values

  var previousType = (0,usePrevious/* usePrevious */.D)(values.type);
  react.useEffect(function () {
    if (!isCreditCardCharge && previousType && values.type !== previousType) {
      var _values$payee4, _values$taxes;

      setStep(EXPENSE_FORM_STEPS.PAYEE);
      setOnBehalf(false);

      if (!isDraft && (_values$payee4 = values.payee) !== null && _values$payee4 !== void 0 && _values$payee4.isInvite) {
        formik.setFieldValue('payee', null);
      } // Only invoices can have taxes


      if ((_values$taxes = values.taxes) !== null && _values$taxes !== void 0 && _values$taxes.length && !values.taxes[0].isDisabled && values.type !== expenseTypes/* default.INVOICE */.Z.INVOICE) {
        formik.setFieldValue('taxes', [ExpenseForm_objectSpread(ExpenseForm_objectSpread({}, values.taxes[0]), {}, {
          isDisabled: true
        })]);
      }
    }
  }, [values.type]);
  react.useEffect(function () {
    var _values$payeeLocation4;

    if ((_values$payeeLocation4 = values.payeeLocation) !== null && _values$payeeLocation4 !== void 0 && _values$payeeLocation4.structured) {
      formik.setFieldValue('payeeLocation.address', (0,I18nAddressFields/* serializeAddress */.FH)(values.payeeLocation.structured));
    }
  }, [values.payeeLocation]);
  react.useEffect(function () {
    // If the currency is not supported anymore, we need to do something
    if (!loading && (!values.currency || !availableCurrencies.includes(values.currency))) {
      var hasItemsWithAmounts = values.items.some(function (item) {
        return Boolean(item.amount);
      });

      if (!hasItemsWithAmounts) {
        // If no items have amounts yet, we can safely set the default currency
        formik.setFieldValue('currency', availableCurrencies[0]);
      } else if (values.currency) {
        // If there are items with amounts, we need to reset the currency
        formik.setFieldValue('currency', null);
      }
    }
  }, [loading, values.payoutMethod]); // Load values from localstorage

  react.useEffect(function () {
    if (shouldLoadValuesFromPersister && formPersister && !dirty && !isDraft) {
      var formValues = formPersister.loadValues();

      if (formValues) {
        var _formValues$payoutMet, _collective$host;

        // Reset payoutMethod if host is no longer connected to TransferWise
        if (((_formValues$payoutMet = formValues.payoutMethod) === null || _formValues$payoutMet === void 0 ? void 0 : _formValues$payoutMet.type) === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT && !((_collective$host = collective.host) !== null && _collective$host !== void 0 && _collective$host.transferwise)) {
          formValues.payoutMethod = undefined;
        }

        setValues(omit_default()(formValues, // Omit deprecated fields, otherwise it will prevent expense submission
        ['location', 'privateInfo']));
      }
    }
  }, [formPersister, dirty]); // Save values in localstorage

  react.useEffect(function () {
    if (dirty && formPersister) {
      formPersister.saveValues(values);
    }
  }, [formPersister, dirty, values]);
  var payeeForm;

  if (loading) {
    payeeForm = /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
      height: 32
    });
  } else if (isDraft && !loggedInAccount) {
    payeeForm = /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseFormPayeeSignUpStep, {
      collective: collective,
      formik: formik,
      onCancel: onCancel,
      onNext: function onNext() {
        return setStep(EXPENSE_FORM_STEPS.EXPENSE);
      }
    });
  } else if (isOnBehalf === true && isNewUser) {
    payeeForm = /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseFormPayeeInviteNewStep, {
      collective: collective,
      formik: formik,
      onBack: function onBack() {
        setStep(EXPENSE_FORM_STEPS.PAYEE);
        setOnBehalf(false);
        formik.setFieldValue('payee', null);
        formik.setFieldValue('payoutMethod', null);
        formik.setFieldValue('payeeLocation', null);
      },
      onNext: function onNext() {
        formik.setFieldValue('payee', ExpenseForm_objectSpread(ExpenseForm_objectSpread({}, values.payee), {}, {
          isInvite: true
        }));
        var errors = validateExpenseFormPayeeInviteNewStep(formik.values);

        if (!isEmpty_default()(errors)) {
          formik.setErrors(errors);
        } else {
          setStep(EXPENSE_FORM_STEPS.EXPENSE);
        }
      },
      payoutProfiles: payoutProfiles
    });
  } else {
    payeeForm = /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseFormPayeeStep, {
      collective: collective,
      formik: formik,
      isOnBehalf: isOnBehalf,
      onCancel: onCancel,
      handleClearPayeeStep: function handleClearPayeeStep() {
        return setShowResetModal(true);
      },
      payoutProfiles: payoutProfiles,
      loggedInAccount: loggedInAccount,
      onChange: function onChange(payee) {
        setOnBehalf(payee.isInvite);
      },
      onNext: function onNext() {
        var shouldSkipValidation = isOnBehalf && isEmpty_default()(values.payoutMethod);

        var validation = !shouldSkipValidation && validatePayoutMethod(values.payoutMethod);

        if (isEmpty_default()(validation)) {
          setStep(EXPENSE_FORM_STEPS.EXPENSE);
        } else {
          setErrors({
            payoutMethod: validation
          });
        }
      },
      editingExpense: editingExpense,
      resetDefaultStep: function resetDefaultStep() {
        return setStep(EXPENSE_FORM_STEPS.PAYEE);
      },
      formPersister: formPersister,
      getDefaultExpense: getDefaultExpense,
      onInvite: function onInvite(isInvite) {
        setOnBehalf(isInvite);
        formik.setFieldValue('payeeLocation', {});
        formik.setFieldValue('payee', {});
        formik.setFieldValue('payoutMethod', {});
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Form */.l0, {
    ref: formRef,
    children: [!isCreditCardCharge && /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseTypeRadioSelect, {
      name: "type",
      onChange: handleChange,
      value: values.type,
      supportedExpenseTypes: supportedExpenseTypes
    }), isRecurring && /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseRecurringBanner/* default */.Z, {
      expense: expense
    }), values.type && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
      mt: 4,
      p: [16, 16, 32],
      overflow: "initial",
      children: step === EXPENSE_FORM_STEPS.PAYEE ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          alignItems: "center",
          mb: 16,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            color: "black.900",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: "bold",
            children: formatMessage(ExpenseForm_msg.stepPayee)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            ml: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(PrivateInfoIcon/* default */.Z, {
              size: 12,
              color: "#969BA3",
              tooltipProps: {
                display: 'flex'
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            flex: "1",
            borderColor: "black.300",
            mx: 2
          })]
        }), payeeForm]
      }) : step === EXPENSE_FORM_STEPS.EXPENSE ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          alignItems: "center",
          mb: 10,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            as: "label",
            htmlFor: "expense-description",
            color: "black.900",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: "bold",
            children: values.type === expenseTypes/* default.GRANT */.Z.GRANT ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
                small: function small(msg) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                    fontSize: "14px",
                    fontWeight: "normal",
                    color: "black.600",
                    fontStyle: "italic",
                    children: msg
                  });
                }
              }
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
                small: function small(msg) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                    fontSize: "14px",
                    fontWeight: "normal",
                    color: "black.600",
                    fontStyle: "italic",
                    children: msg
                  });
                }
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            flex: "1",
            borderColor: "black.300",
            ml: 2
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "12px",
          color: "black.600",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Expense.PrivacyWarning",
            defaultMessage: [{
              "type": 0,
              "value": "This information is public. Do not put any private details in this field."
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, {
          as: StyledInput/* default */.ZP,
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
          placeholder: values.type === expenseTypes/* default.GRANT */.Z.GRANT ? formatMessage(ExpenseForm_msg.grantSubjectPlaceholder) : formatMessage(ExpenseForm_msg.descriptionPlaceholder)
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(HiddenFragment, {
          show: hasBaseFormFieldsCompleted || isInvite,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "flex-start",
            mt: 3,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseTypeTag/* default */.Z, {
              type: values.type,
              mr: "4px"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputTags/* default */.Z, {
              suggestedTags: expensesTags,
              onChange: function onChange(tags) {
                formik.setFieldValue('tags', tags.map(function (t) {
                  return t.value.toLowerCase();
                }));
              },
              value: values.tags
            })]
          }), values.type === expenseTypes/* default.INVOICE */.Z.INVOICE && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            my: 40,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseAttachedFilesForm, {
              title: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "UploadInvoice",
                defaultMessage: [{
                  "type": 0,
                  "value": "Upload invoice"
                }]
              }),
              description: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "UploadInvoiceDescription",
                defaultMessage: [{
                  "type": 0,
                  "value": "If you already have an invoice document, you can upload it here."
                }]
              }),
              onChange: function onChange(files) {
                return formik.setFieldValue('attachedFiles', files);
              },
              defaultValue: values.attachedFiles
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            my: 24,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              color: "black.900",
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: "bold",
              children: formatMessage(isReceipt ? ExpenseForm_msg.stepReceipt : isGrant ? ExpenseForm_msg.stepFundingRequest : ExpenseForm_msg.stepInvoice)
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
              flex: "1",
              borderColor: "black.300",
              mx: 2
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              buttonSize: "tiny",
              type: "button",
              onClick: function onClick() {
                return addNewExpenseItem(formik);
              },
              minWidth: 135,
              "data-cy": "expense-add-item-btn",
              disabled: isCreditCardCharge,
              children: ["+\xA0", formatMessage(isReceipt ? ExpenseForm_msg.addNewReceipt : isGrant ? ExpenseForm_msg.addNewGrantItem : ExpenseForm_msg.addNewItem)]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* FieldArray */.F2, {
              name: "items",
              children: function children(fieldsArrayProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseFormItems, ExpenseForm_objectSpread(ExpenseForm_objectSpread({}, fieldsArrayProps), {}, {
                  collective: collective,
                  availableCurrencies: availableCurrencies
                }));
              }
            })
          }), values.type === expenseTypes/* default.GRANT */.Z.GRANT && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            my: 40,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseAttachedFilesForm, {
              title: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "UploadDocumentation",
                defaultMessage: [{
                  "type": 0,
                  "value": "Upload documentation"
                }]
              }),
              description: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "UploadDocumentationDescription",
                defaultMessage: [{
                  "type": 0,
                  "value": "If you want to include any documentation, you can upload it here."
                }]
              }),
              onChange: function onChange(files) {
                return formik.setFieldValue('attachedFiles', files);
              },
              defaultValue: values.attachedFiles
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            flex: "1",
            mt: 4,
            borderColor: "black.300"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            mt: 3,
            flexWrap: "wrap",
            alignItems: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              type: "button",
              width: ['100%', 'auto'],
              mx: [2, 0],
              mr: [null, 3],
              mt: 2,
              whiteSpace: "nowrap",
              "data-cy": "expense-back",
              onClick: function onClick() {
                if (isCreditCardCharge) {
                  onCancel();
                } else {
                  setStep(EXPENSE_FORM_STEPS.PAYEE);
                }
              },
              children: ["\u2190\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Back",
                defaultMessage: [{
                  "type": 0,
                  "value": "Back"
                }]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
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
              children: [isInvite && !isDraft ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Expense.SendInvite",
                defaultMessage: [{
                  "type": 0,
                  "value": "Send Invite"
                }]
              }) : isCreditCardCharge ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Expense.SaveReceipt",
                defaultMessage: [{
                  "type": 0,
                  "value": "Save Receipt"
                }]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Pagination.Next",
                defaultMessage: [{
                  "type": 0,
                  "value": "Next"
                }]
              }), "\xA0\u2192"]
            }), ((_errors$payoutMethod = errors.payoutMethod) === null || _errors$payoutMethod === void 0 ? void 0 : (_errors$payoutMethod$ = _errors$payoutMethod.data) === null || _errors$payoutMethod$ === void 0 ? void 0 : _errors$payoutMethod$.currency) && ((_touched$items = touched.items) === null || _touched$items === void 0 ? void 0 : (_touched$items$some = _touched$items.some) === null || _touched$items$some === void 0 ? void 0 : _touched$items$some.call(_touched$items, function (i) {
              return i.amount;
            })) && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mx: [2, 0],
              mt: 2,
              color: "red.500",
              fontSize: "12px",
              letterSpacing: 0,
              children: errors.payoutMethod.data.currency.toString()
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
              flex: "1",
              borderColor: "white.full",
              mx: 2
            }), showResetModal ? /*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.Z, ExpenseForm_objectSpread({
              onClose: function onClose() {
                return setShowResetModal(false);
              },
              header: editingExpense ? formatMessage(ExpenseForm_msg.cancelEditExpense) : formatMessage(ExpenseForm_msg.clearExpenseForm),
              body: editingExpense ? formatMessage(ExpenseForm_msg.confirmCancelEditExpense) : formatMessage(ExpenseForm_msg.confirmClearExpenseForm),
              continueHandler: function continueHandler() {
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
            })) : /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              type: "button",
              buttonStyle: "borderless",
              width: ['100%', 'auto'],
              color: "red.500",
              mt: 1,
              mx: [2, 0],
              mr: [null, 3],
              whiteSpace: "nowrap",
              onClick: function onClick() {
                return setShowResetModal(true);
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Undo_esm/* Undo */.W, {
                size: 11
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                mx: 1,
                children: formatMessage(editingExpense ? ExpenseForm_msg.cancelEditExpense : ExpenseForm_msg.clearExpenseForm)
              })]
            })]
          })]
        })]
      }) : null
    }), step === EXPENSE_FORM_STEPS.EXPENSE && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
      mt: 4,
      p: [16, 24, 32],
      overflow: "initial",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExpensePayeeDetails/* default */.Z, {
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
var ExpenseForm = function ExpenseForm(_ref4) {
  var onSubmit = _ref4.onSubmit,
      collective = _ref4.collective,
      expense = _ref4.expense,
      originalExpense = _ref4.originalExpense,
      payoutProfiles = _ref4.payoutProfiles,
      autoFocusTitle = _ref4.autoFocusTitle,
      onCancel = _ref4.onCancel,
      validateOnChange = _ref4.validateOnChange,
      formPersister = _ref4.formPersister,
      loggedInAccount = _ref4.loggedInAccount,
      loading = _ref4.loading,
      expensesTags = _ref4.expensesTags,
      shouldLoadValuesFromPersister = _ref4.shouldLoadValuesFromPersister,
      defaultStep = _ref4.defaultStep;
  var isDraft = (expense === null || expense === void 0 ? void 0 : expense.status) === expense_status/* default.DRAFT */.Z.DRAFT;

  var _React$useState7 = react.useState(validateOnChange && !isDraft),
      _React$useState8 = slicedToArray_default()(_React$useState7, 2),
      hasValidate = _React$useState8[0],
      setValidate = _React$useState8[1];

  var intl = (0,useIntl/* default */.Z)();

  var initialValues = ExpenseForm_objectSpread(ExpenseForm_objectSpread({}, getDefaultExpense(collective)), expense);

  var validate = function validate(expenseData) {
    return validateExpense(intl, expenseData);
  };

  if (isDraft) {
    initialValues.items = expense.draft.items;
    initialValues.taxes = expense.draft.taxes;
    initialValues.attachedFiles = expense.draft.attachedFiles;
    initialValues.payoutMethod = expense.draft.payoutMethod;
    initialValues.payeeLocation = expense.draft.payeeLocation;
    initialValues.payee = expense.recurringExpense ? expense.payee : expense.draft.payee;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.J9, {
    initialValues: initialValues,
    validate: hasValidate && validate,
    onSubmit: /*#__PURE__*/function () {
      var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(values, formik) {
        var errors;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // We initially let the browser do the validation. Then once users try to submit the
                // form at least once, we validate on each change to make sure they fix all the errors.
                errors = validate(values);

                if (isEmpty_default()(errors)) {
                  _context.next = 6;
                  break;
                }

                setValidate(true);
                formik.setErrors(errors);
                _context.next = 7;
                break;

              case 6:
                return _context.abrupt("return", onSubmit(values));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref5.apply(this, arguments);
      };
    }(),
    children: function children(formik) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseFormBody, {
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
      });
    }
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
/* harmony default export */ var expenses_ExpenseForm = (/*#__PURE__*/react.memo(ExpenseForm));

/***/ }),

/***/ 24018:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ expenses_ExpenseInfoSidebar; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/constants/currency-precision.js
var currency_precision = __webpack_require__(19377);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/faqs/FAQ.js
var FAQ = __webpack_require__(99849);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/faqs/CreateExpenseFAQ.js


var _excluded = ["defaultOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var CreateExpenseFAQ = function CreateExpenseFAQ(_ref) {
  var defaultOpen = _ref.defaultOpen,
      props = objectWithoutProperties_default()(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* default */.ZP, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "CreateExpenseFAQ.getPaid",
          defaultMessage: [{
            "type": 0,
            "value": "How do I get paid from a Collective?"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Content */.VY, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "CreateExpenseFAQ.getPaidDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Submit an expense and provide your payment information."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "CreateExpenseFAQ.howAreApproved",
          defaultMessage: [{
            "type": 0,
            "value": "How are expenses approved?"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Content */.VY, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "CreateExpenseFAQ.howAreApprovedDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Collective admins are notified when an expense is submitted, and they can approve or reject it."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "CreateExpenseFAQ.isItPublic",
          defaultMessage: [{
            "type": 0,
            "value": "Is my private data made public?"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Content */.VY, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "CreateExpenseFAQ.isItPublicDetails",
          defaultMessage: [{
            "type": 0,
            "value": "No. Only the expense amount and description are public. Attachments, payment info, emails and addresses are only visible to you and the admins."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "CreateExpenseFAQ.whenPaid",
          defaultMessage: [{
            "type": 0,
            "value": "When will I get paid?"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Content */.VY, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "CreateExpenseFAQ.whenPaidDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Payments are processed by the Collective's Fiscal Host, the organization that hold funds on their behalf. Many Fiscal Hosts pay expenses weekly, but each one is different."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "FpmEYP",
          defaultMessage: [{
            "type": 0,
            "value": "Why do you need my legal name?"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Content */.VY, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "ntqqkx",
          defaultMessage: [{
            "type": 0,
            "value": "The display name is public and the legal name is private, appearing on receipts, invoices, and other official documentation used for tax and accounting purposes."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mt: 2,
      pl: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledLink/* default */.Z, {
        as: StyledLink/* default */.Z,
        href: "https://docs.opencollective.com/help/expenses-and-getting-paid/submitting-expenses",
        openInNewTab: true,
        fontSize: "12px",
        color: "black.700",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
/* harmony default export */ var faqs_CreateExpenseFAQ = (CreateExpenseFAQ);
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


var ExpandableExpensePolicies_excluded = ["host", "collective"];

function ExpandableExpensePolicies_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpandableExpensePolicies_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpandableExpensePolicies_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpandableExpensePolicies_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











var ExpandableExpensePolicies = function ExpandableExpensePolicies(_ref) {
  var _collective$parent;

  var host = _ref.host,
      collective = _ref.collective,
      props = objectWithoutProperties_default()(_ref, ExpandableExpensePolicies_excluded);

  var hostPolicy = host === null || host === void 0 ? void 0 : host.expensePolicy;
  var parentPolicy = collective === null || collective === void 0 ? void 0 : (_collective$parent = collective.parent) === null || _collective$parent === void 0 ? void 0 : _collective$parent.expensePolicy;
  var accountPolicy = collective === null || collective === void 0 ? void 0 : collective.expensePolicy;

  if (!accountPolicy && !parentPolicy && !hostPolicy) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, ExpandableExpensePolicies_objectSpread(ExpandableExpensePolicies_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Collapse/* default */.Z, {
      defaultIsOpen: true,
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H5, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "ExpensePolicies",
          defaultMessage: [{
            "type": 0,
            "value": "Expense policies"
          }]
        })
      }),
      children: [hostPolicy && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        mb: 2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HTMLContent/* default */.Z, {
          fontSize: "12px",
          color: "black.800",
          lineHeight: "20px",
          content: hostPolicy
        })
      }), parentPolicy && collective.parent.id !== (host === null || host === void 0 ? void 0 : host.id) && parentPolicy !== accountPolicy && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        mb: 2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HTMLContent/* default */.Z, {
          "data-cy": "expense-policy-html",
          fontSize: "12px",
          color: "black.800",
          lineHeight: "20px",
          content: parentPolicy
        })
      }), accountPolicy && collective.id !== (host === null || host === void 0 ? void 0 : host.id) && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        mb: 2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HTMLContent/* default */.Z, {
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
/* harmony default export */ var expenses_ExpandableExpensePolicies = (ExpandableExpensePolicies);
;// CONCATENATED MODULE: ./components/expenses/ExpenseInfoSidebar.js











/**
 * Provide some info (ie. collective balance, tags, policies, etc.) for the expense pages
 * in a sidebar.
 */




var ExpenseInfoSidebar = function ExpenseInfoSidebar(_ref) {
  var isLoading = _ref.isLoading,
      host = _ref.host,
      collective = _ref.collective,
      children = _ref.children;
  var balanceWithBlockedFunds = collective === null || collective === void 0 ? void 0 : collective.stats.balanceWithBlockedFunds;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
    width: "100%",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      display: ['none', 'block'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H5, {
        mb: 3,
        textTransform: "capitalize",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
            type: (collective === null || collective === void 0 ? void 0 : collective.type) || '' // collective can be null when it's loading

          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        borderLeft: "1px solid",
        borderColor: "black.300",
        pl: 3,
        fontSize: "20px",
        color: "black.500",
        "data-cy": "collective-balance",
        children: isLoading && !balanceWithBlockedFunds ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
          height: 28,
          width: 75
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
            currency: balanceWithBlockedFunds.currency,
            amount: balanceWithBlockedFunds.valueInCents,
            amountStyles: {
              color: 'black.800'
            },
            precision: currency_precision/* CurrencyPrecision.DEFAULT */.E.DEFAULT
          }), host && /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
            fontSize: "11px",
            color: "black.600",
            mt: 2,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              fontSize: "9px",
              fontWeight: "600",
              textTransform: "uppercase",
              color: "black.500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Fiscalhost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Fiscal Host"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
              collective: host,
              children: collective !== null && collective !== void 0 && collective.isActive ? host.name : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
    }), children && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      my: 50,
      children: children
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpandableExpensePolicies, {
      host: host,
      collective: collective,
      mt: 50
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mt: [0, 50],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(faqs_CreateExpenseFAQ, {
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
/* harmony default export */ var expenses_ExpenseInfoSidebar = (/*#__PURE__*/react.memo(ExpenseInfoSidebar));

/***/ }),

/***/ 12426:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86896);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16159);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40777);
/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59139);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87262);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);









var msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  notesPlaceholder: {
    id: "ExpenseSummary.addNotesLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Add notes"
    }]
  }
});

var PrivateNoteLabel = function PrivateNoteLabel() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
    color: "black.700",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      id: "ExpenseSummary.addNotesLabel",
      defaultMessage: [{
        "type": 0,
        "value": "Add notes"
      }]
    }), "\xA0\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      color: "#969BA3"
    })]
  });
};

var ExpenseNotesForm = function ExpenseNotesForm(_ref) {
  var onChange = _ref.onChange,
      disabled = _ref.disabled,
      defaultValue = _ref.defaultValue,
      hideLabel = _ref.hideLabel;

  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    htmlFor: "expense-privateMessage-input",
    name: "privateMessage",
    required: false,
    label: hideLabel ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PrivateNoteLabel, {}),
    labelProps: {
      fontWeight: '500',
      fontSize: '13px'
    },
    children: function children(inputProps) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .xu, {
        mt: 2,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RichTextEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      });
    }
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
/* harmony default export */ __webpack_exports__["Z"] = (ExpenseNotesForm);

/***/ }),

/***/ 59390:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(95612);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50056);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(52015);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38083);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56508);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40777);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29242);
/* harmony import */ var _LocationAddress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41627);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51082);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90998);
/* harmony import */ var _PayoutMethodData__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27824);
/* harmony import */ var _PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9215);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(85893);



























var CreatedByUserLink = function CreatedByUserLink(_ref) {
  var account = _ref.account;
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

var PrivateInfoColumn = (0,styled_components__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu).attrs({
  mx: [0, '8px'],
  flexBasis: [0, '200px']
}).withConfig({
  displayName: "ExpensePayeeDetails__PrivateInfoColumn",
  componentId: "sc-1vg1wbt-0"
})(["margin-top:42px;padding-top:16px;border-top:1px solid ", ";", " flex:1 1;min-width:200px;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__/* .themeGet */ .R)('colors.black.300'), function (_ref2) {
  var borderless = _ref2.borderless;
  return borderless ? 'border-top: none; padding-top: 0; margin-top: 0;' : '';
});
var PrivateInfoColumnHeader = (0,styled_components__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_17__.H4).attrs({
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

var PayeeTotalPayoutSumTooltip = function PayeeTotalPayoutSumTooltip(_ref3) {
  var stats = _ref3.stats;
  var currentYear = new Date().getFullYear().toString();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
    content: function content() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
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
          totalPaidInvoices: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            amount: stats.totalPaidInvoices.valueInCents,
            currency: stats.totalPaidInvoices.currency,
            precision: 2,
            amountStyles: null
          }),
          totalPaidReceipts: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            amount: stats.totalPaidReceipts.valueInCents,
            currency: stats.totalPaidReceipts.currency,
            precision: 2,
            amountStyles: null
          }),
          totalPaidGrants: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            amount: stats.totalPaidGrants.valueInCents,
            currency: stats.totalPaidGrants.currency,
            precision: 2,
            amountStyles: null
          }),
          currentYear: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            children: currentYear
          })
        }
      });
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_23__/* .InfoCircle */ .Z, {
      size: 16
    })
  });
};

var ExpensePayeeDetails = function ExpensePayeeDetails(_ref4) {
  var _expense$draft, _expense$draft2, _expense$host, _payee$organization, _payee$organization2, _payee$organization3, _payee$organization4, _payee$organization5, _expense$payoutMethod, _expense$draft3, _expense$draft3$payou, _expense$payoutMethod2, _expense$virtualCard, _expense$draft$payout, _expense$draft4;

  var expense = _ref4.expense,
      host = _ref4.host,
      isLoading = _ref4.isLoading,
      borderless = _ref4.borderless,
      isLoadingLoggedInUser = _ref4.isLoadingLoggedInUser,
      isDraft = _ref4.isDraft,
      collective = _ref4.collective;
  var payeeLocation = (expense === null || expense === void 0 ? void 0 : expense.payeeLocation) || (expense === null || expense === void 0 ? void 0 : (_expense$draft = expense.draft) === null || _expense$draft === void 0 ? void 0 : _expense$draft.payeeLocation);
  var payee = isDraft ? expense === null || expense === void 0 ? void 0 : (_expense$draft2 = expense.draft) === null || _expense$draft2 === void 0 ? void 0 : _expense$draft2.payee : expense === null || expense === void 0 ? void 0 : expense.payee;
  var payeeStats = payee && !isDraft ? payee.stats : null; // stats not available for drafts

  var isInvoice = (expense === null || expense === void 0 ? void 0 : expense.type) === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].INVOICE */ .Z.INVOICE;
  var isCharge = (expense === null || expense === void 0 ? void 0 : expense.type) === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].CHARGE */ .Z.CHARGE;
  var isPaid = (expense === null || expense === void 0 ? void 0 : expense.status) === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_4__/* ["default"].PAID */ .Z.PAID;
  var displayedHost = (_expense$host = expense === null || expense === void 0 ? void 0 : expense.host) !== null && _expense$host !== void 0 ? _expense$host : host;
  return isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    height: 150,
    mt: 3
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
    flexDirection: ['column', 'row'],
    alignItems: ['stretch', 'flex-start'],
    flexWrap: ['nowrap', 'wrap', null, 'nowrap'],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(PrivateInfoColumn, {
      "data-cy": "expense-summary-payee",
      borderless: borderless,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(PrivateInfoColumnHeader, {
        children: isPaid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          id: "Expense.PaidTo",
          defaultMessage: [{
            "type": 0,
            "value": "Paid to"
          }]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          id: "Expense.PayTo",
          defaultMessage: [{
            "type": 0,
            "value": "Pay to"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        collective: payee,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
          alignItems: "center",
          fontSize: "12px",
          children: [!payee.slug ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            name: ((_payee$organization = payee.organization) === null || _payee$organization === void 0 ? void 0 : _payee$organization.name) || payee.name,
            radius: 24,
            backgroundColor: "blue.100",
            color: "blue.400"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            collective: payee,
            radius: 24
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledFlex, {
            flexDirection: "column",
            ml: 2,
            mr: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
              color: "black.900",
              fontWeight: "bold",
              truncateOverflow: true,
              children: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_2__/* .formatAccountName */ .XN)(((_payee$organization2 = payee.organization) === null || _payee$organization2 === void 0 ? void 0 : _payee$organization2.name) || payee.name, ((_payee$organization3 = payee.organization) === null || _payee$organization3 === void 0 ? void 0 : _payee$organization3.legalName) || payee.legalName)
            }), payee.type !== _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.VENDOR */ .eV.VENDOR && (((_payee$organization4 = payee.organization) === null || _payee$organization4 === void 0 ? void 0 : _payee$organization4.slug) || payee.slug) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
              color: "black.900",
              fontSize: "11px",
              truncateOverflow: true,
              children: ["@", ((_payee$organization5 = payee.organization) === null || _payee$organization5 === void 0 ? void 0 : _payee$organization5.slug) || payee.slug]
            })]
          }), payeeStats && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(PayeeTotalPayoutSumTooltip, {
            stats: payeeStats
          })]
        })
      }), payeeLocation && isInvoice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        whiteSpace: "pre-wrap",
        fontSize: "11px",
        lineHeight: "16px",
        mt: 2,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_LocationAddress__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          location: payeeLocation,
          isLoading: isLoadingLoggedInUser
        })
      }), payee.website && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_17__.P, {
        mt: 2,
        fontSize: "11px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_StyledLink__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          href: payee.website,
          openInNewTab: true,
          children: payee.website
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(PrivateInfoColumn, {
      mr: 0,
      borderless: borderless,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(PrivateInfoColumnHeader, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          id: "expense.payoutMethod",
          defaultMessage: [{
            "type": 0,
            "value": "payout method"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        fontSize: "12px",
        color: "black.600",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
          mb: 3,
          "data-cy": "expense-summary-payout-method-type",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            type: !((_expense$payoutMethod = expense.payoutMethod) !== null && _expense$payoutMethod !== void 0 && _expense$payoutMethod.type) && (expense.draft || expense.payee.isInvite) ? ((_expense$draft3 = expense.draft) === null || _expense$draft3 === void 0 ? void 0 : (_expense$draft3$payou = _expense$draft3.payoutMethod) === null || _expense$draft3$payou === void 0 ? void 0 : _expense$draft3$payou.type) || _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .INVITE */ .FZ : isCharge ? _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .VIRTUAL_CARD */ .vi : (_expense$payoutMethod2 = expense.payoutMethod) === null || _expense$payoutMethod2 === void 0 ? void 0 : _expense$payoutMethod2.type,
            name: (expense === null || expense === void 0 ? void 0 : (_expense$virtualCard = expense.virtualCard) === null || _expense$virtualCard === void 0 ? void 0 : _expense$virtualCard.name) && "".concat(expense.virtualCard.name, " Card (").concat(expense.virtualCard.last4, ")")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
          "data-cy": "expense-summary-payout-method-data",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_PayoutMethodData__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            payoutMethod: (_expense$draft$payout = (_expense$draft4 = expense.draft) === null || _expense$draft4 === void 0 ? void 0 : _expense$draft4.payoutMethod) !== null && _expense$draft$payout !== void 0 ? _expense$draft$payout : expense.payoutMethod,
            isLoading: isLoadingLoggedInUser
          })
        }), expense.invoiceInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
          mt: 3,
          "data-cy": "expense-summary-invoice-info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            fontSize: "11px",
            fontWeight: "500",
            mb: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
              id: "ExpenseForm.InvoiceInfo",
              defaultMessage: [{
                "type": 0,
                "value": "Additional invoice information"
              }]
            }), "\xA0\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "#969BA3"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_17__.P, {
            fontSize: "11px",
            lineHeight: "16px",
            whiteSpace: "pre-wrap",
            children: expense.invoiceInfo
          })]
        })]
      })]
    }), displayedHost && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(PrivateInfoColumn, {
      "data-cy": "expense-summary-host",
      borderless: borderless,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(PrivateInfoColumnHeader, {
        children: isPaid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          id: "expense.PaidFromFiscalhost",
          defaultMessage: [{
            "type": 0,
            "value": "Paid from Fiscal Host"
          }]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          id: "expense.PayFromFiscalhost",
          defaultMessage: [{
            "type": 0,
            "value": "Pay from Fiscal Host"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        collective: displayedHost,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            collective: displayedHost,
            radius: 24
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            ml: 2,
            color: "black.900",
            fontSize: "12px",
            fontWeight: "bold",
            truncateOverflow: true,
            children: collective !== null && collective !== void 0 && collective.isActive ? (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_2__/* .formatAccountName */ .XN)(displayedHost.name, displayedHost.legalName) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
              id: "Fiscalhost.pending",
              defaultMessage: [{
                "type": 1,
                "value": "host"
              }, {
                "type": 0,
                "value": " (pending)"
              }],
              values: {
                host: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_2__/* .formatAccountName */ .XN)(displayedHost.name, displayedHost.legalName)
              }
            })
          })]
        })
      }), displayedHost.location && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_17__.P, {
        whiteSpace: "pre-wrap",
        fontSize: "11px",
        mt: 2,
        children: displayedHost.location.address
      }), displayedHost.website && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_17__.P, {
        mt: 2,
        fontSize: "11px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_StyledLink__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
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
/* harmony default export */ __webpack_exports__["Z"] = (ExpensePayeeDetails);

var _StyledFlex = (0,styled_components__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC).withConfig({
  displayName: "ExpensePayeeDetails___StyledFlex",
  componentId: "sc-1vg1wbt-2"
})({
  overflow: 'hidden'
});

/***/ }),

/***/ 7852:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(46829);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(44012);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15078);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8480);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25896);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86702);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97274);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51082);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71792);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(85893);





var _templateObject;























var deleteExpenseMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  mutation DeleteExpense($expense: ExpenseReferenceInput!) {\n    deleteExpense(expense: $expense) {\n      id\n    }\n  }\n"])));

var ExpenseRecurringEditModal = function ExpenseRecurringEditModal(_ref) {
  var onClose = _ref.onClose,
      expense = _ref.expense;
  var recurringExpense = expense.recurringExpense;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_24__.useMutation)(deleteExpenseMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T
  }),
      _useMutation2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useMutation, 2),
      deleteExpense = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var _useToasts = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_21__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  var handleDeletion = /*#__PURE__*/function () {
    var _ref2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
      return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return deleteExpense({
                variables: {
                  expense: lodash_pick__WEBPACK_IMPORTED_MODULE_3___default()(expense, ['id'])
                }
              });

            case 3:
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_21__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
                message: intl.formatMessage({
                  id: "KYXMJ6",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Expense deleted"
                  }]
                })
              });
              router.push((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getCollectivePageRoute */ .x0)(expense.account));
              onClose();
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_21__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_8__/* .i18nGraphqlException */ .t2)(intl, _context.t0)
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function handleDeletion() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, {
    role: "alertdialog",
    width: "432px",
    onClose: onClose,
    padding: "auto",
    px: 4,
    py: "20px",
    trapFocus: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_18__/* .ModalHeader */ .xB, {
      onClose: onClose,
      children: "Recurring Expense Setting"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_18__/* .ModalBody */ .fe, {
      pt: 2,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        flexDirection: 'column',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
          color: "black.700",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          mt: 0,
          mb: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "Expense.Recurring.Edit.Description",
            defaultMessage: [{
              "type": 0,
              "value": "Once the frequency and end date are set, you can't edit them. You can always cancel the recurring expense and submit a new one."
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
            color: "black.700",
            fontWeight: "600",
            fontSize: "13px",
            lineHeight: "16px",
            mt: 2,
            mb: 1,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
              id: "Frequency",
              defaultMessage: [{
                "type": 0,
                "value": "Frequency"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
            inputId: "recurring-frequency",
            menuPlacement: "auto",
            isSearchable: false,
            value: _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_10__/* .RecurringIntervalOptions.find */ .wx.find(function (option) {
              return option.value === recurringExpense.interval;
            }),
            options: _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_10__/* .RecurringIntervalOptions */ .wx,
            disabled: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
            color: "black.700",
            fontWeight: "600",
            fontSize: "13px",
            lineHeight: "16px",
            mt: 2,
            mb: 1,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
              id: "EndDate",
              defaultMessage: [{
                "type": 0,
                "value": "End Date"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
            type: "date",
            inputId: "recurring-end-date",
            menuPlacement: "auto",
            isSearchable: false,
            height: "38px",
            width: "100%",
            value: recurringExpense.endsAt && (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_7__/* .toIsoDateStr */ .fM)((0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_7__/* .getDateFromValue */ .j9)(recurringExpense.endsAt)),
            disabled: true
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_18__/* .ModalFooter */ .mz, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        display: "flex",
        justifyContent: ['center'],
        flexWrap: "Wrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          mx: 20,
          my: 1,
          autoFocus: true,
          minWidth: 140,
          buttonStyle: "dangerSecondary",
          buttonSize: "small",
          onClick: handleDeletion,
          disabled: loading,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
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

var ExpenseRecurringBanner = function ExpenseRecurringBanner(_ref3) {
  var expense = _ref3.expense;
  var recurringExpense = expense.recurringExpense;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      isEditModalOpen = _React$useState2[0],
      setEditModal = _React$useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      mt: 4,
      type: "warning",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
        color: "black.800",
        fontWeight: "700",
        fontSize: "13px",
        lineHeight: "20px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          id: "Expense.Recurring.EditWarning.Title",
          defaultMessage: [{
            "type": 0,
            "value": "This is a recurring expense."
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
        color: "black.800",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "20px",
        mt: 1,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          id: "Expense.Recurring.EditWarning.Description",
          defaultMessage: [{
            "type": 0,
            "value": "Any changes you make to this expense will apply to future recurrences."
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
        color: "black.800",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
        mt: 1,
        children: ["(", _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_10__/* .RecurringExpenseIntervals */ .Bh[recurringExpense.interval], recurringExpense.endsAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [",\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
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
              endsAt: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_7__/* .getDateFromValue */ .j9)(recurringExpense.endsAt)
            }
          })]
        }), ") \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_StyledLink__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          color: "black.800",
          onClick: function onClick() {
            return setEditModal(true);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            id: "Expense.Recurring.Edit",
            defaultMessage: [{
              "type": 0,
              "value": "Edit details"
            }]
          })
        })]
      })]
    }), isEditModalOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(ExpenseRecurringEditModal, {
      onClose: function onClose() {
        return setEditModal(false);
      },
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
/* harmony default export */ __webpack_exports__["Z"] = (ExpenseRecurringBanner);

/***/ }),

/***/ 2781:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": function() { return /* binding */ SummaryHeader; },
  "Z": function() { return /* binding */ expenses_ExpenseSummary; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/lodash/includes.js
var includes = __webpack_require__(64721);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/constants/expense-status.ts
var expense_status = __webpack_require__(38083);
// EXTERNAL MODULE: ./lib/constants/expenseTypes.ts
var expenseTypes = __webpack_require__(19878);
// EXTERNAL MODULE: ./lib/constants/payout-method.js
var payout_method = __webpack_require__(56508);
// EXTERNAL MODULE: ./lib/prop-types.js
var prop_types = __webpack_require__(51048);
// EXTERNAL MODULE: ./components/AmountWithExchangeRateInfo.js
var AmountWithExchangeRateInfo = __webpack_require__(66337);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/HTMLContent.js
var HTMLContent = __webpack_require__(74770);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/Tags.js
var Tags = __webpack_require__(14540);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/UploadedFilePreview.js
var UploadedFilePreview = __webpack_require__(89669);
// EXTERNAL MODULE: ./components/expenses/ExpenseAmountBreakdown.js
var ExpenseAmountBreakdown = __webpack_require__(46115);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Check/Check.esm.js
var Check_esm = __webpack_require__(60257);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/ChevronDown/ChevronDown.js
var ChevronDown = __webpack_require__(22733);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Download/Download.esm.js
var Download_esm = __webpack_require__(71387);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Edit/Edit.esm.js
var Edit_esm = __webpack_require__(40932);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Flag/Flag.esm.js
var Flag_esm = __webpack_require__(76899);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Link/Link.esm.js
var Link_esm = __webpack_require__(96002);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var dist_index_esm = __webpack_require__(16678);
// EXTERNAL MODULE: ./lib/hooks/useClipboard.js
var useClipboard = __webpack_require__(60225);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./components/PopupMenu.js
var PopupMenu = __webpack_require__(66152);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/expenses/ExpenseInvoiceDownloadHelper.js
var ExpenseInvoiceDownloadHelper = __webpack_require__(41016);
// EXTERNAL MODULE: ./components/expenses/MarkExpenseAsIncompleteModal.js
var MarkExpenseAsIncompleteModal = __webpack_require__(77959);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/expenses/ExpenseMoreActionsButton.js



var _excluded = ["expense", "collective", "onError", "onEdit", "isDisabled", "linkAction"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






















var Action = styled_components_browser_esm/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "ExpenseMoreActionsButton__Action",
  componentId: "sc-17zb0qa-0"
})(["", " padding:16px;cursor:pointer;line-height:16px;font-size:14px;font-weight:500;border:none;background:transparent;outline:none;text-align:inherit;text-transform:capitalize;color:", ";:hover{color:", ";}:focus{color:", ";text-decoration:underline;}&[disabled]{color:", ";}> svg{margin-right:14px;}"], dist_index_esm/* margin */.e6, function (props) {
  return props.theme.colors.black[900];
}, function (props) {
  return props.theme.colors.black[700];
}, function (props) {
  return props.theme.colors.black[700];
}, function (props) {
  return props.theme.colors.black[600];
});
/**
 * Admin buttons for the expense, displayed in a React fragment to let parent
 * in control of the layout.
 */

var ExpenseMoreActionsButton = function ExpenseMoreActionsButton(_ref) {
  var expense = _ref.expense,
      collective = _ref.collective,
      onError = _ref.onError,
      onEdit = _ref.onEdit,
      isDisabled = _ref.isDisabled,
      linkAction = _ref.linkAction,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      showMarkAsIncompleteModal = _React$useState2[0],
      setMarkAsIncompleteModal = _React$useState2[1];

  var _useClipboard = (0,useClipboard/* default */.Z)(),
      isCopied = _useClipboard.isCopied,
      copy = _useClipboard.copy;

  var router = (0,next_router.useRouter)();
  var permissions = expense === null || expense === void 0 ? void 0 : expense.permissions;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PopupMenu/* default */.Z, {
      placement: "bottom-start",
      Button: function Button(_ref2) {
        var onClick = _ref2.onClick;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, _objectSpread(_objectSpread({
          "data-cy": "more-actions",
          onClick: onClick,
          buttonSize: "small",
          minWidth: 140,
          flexGrow: 1
        }, props), {}, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "S8/4ZI",
            defaultMessage: [{
              "type": 0,
              "value": "More actions"
            }]
          }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown/* ChevronDown */._M, {
            size: "20px"
          })]
        }));
      },
      children: function children(_ref3) {
        var setOpen = _ref3.setOpen;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          children: [(permissions === null || permissions === void 0 ? void 0 : permissions.canMarkAsIncomplete) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Action, {
            onClick: function onClick() {
              setMarkAsIncompleteModal(true);
              setOpen(false);
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Flag_esm/* Flag */.W, {
              size: 14
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "actions.markAsIncomplete",
              defaultMessage: [{
                "type": 0,
                "value": "Mark as Incomplete"
              }]
            })]
          }), (permissions === null || permissions === void 0 ? void 0 : permissions.canEdit) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Action, {
            "data-cy": "edit-expense-btn",
            onClick: onEdit,
            disabled: isDisabled,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Edit_esm/* Edit */.I, {
              size: "16px"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Edit",
              defaultMessage: [{
                "type": 0,
                "value": "Edit"
              }]
            })]
          }), (permissions === null || permissions === void 0 ? void 0 : permissions.canSeeInvoiceInfo) && (expense === null || expense === void 0 ? void 0 : expense.type) === expenseTypes/* default.INVOICE */.Z.INVOICE && /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseInvoiceDownloadHelper/* default */.ZP, {
            expense: expense,
            collective: collective,
            onError: onError,
            children: function children(_ref4) {
              var isLoading = _ref4.isLoading,
                  downloadInvoice = _ref4.downloadInvoice;
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(Action, {
                loading: isLoading,
                onClick: downloadInvoice,
                disabled: isDisabled,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Download_esm/* Download */.U, {
                  size: "16px"
                }), isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "loading",
                  defaultMessage: [{
                    "type": 0,
                    "value": "loading"
                  }]
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "Download",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Download"
                  }]
                })]
              });
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Action, {
            onClick: function onClick() {
              return linkAction === 'link' ? router.push("".concat((0,url_helpers/* getCollectivePageRoute */.x0)(collective), "/expenses/").concat(expense.legacyId)) : copy(window.location.href);
            },
            disabled: isDisabled,
            children: [isCopied ? /*#__PURE__*/(0,jsx_runtime.jsx)(Check_esm/* Check */.J, {
              size: "16px"
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Link_esm/* Link */.r, {
              size: "16px"
            }), isCopied ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Clipboard.Copied",
              defaultMessage: [{
                "type": 0,
                "value": "Copied!"
              }]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CopyLink",
              defaultMessage: [{
                "type": 0,
                "value": "Copy link"
              }]
            })]
          })]
        });
      }
    }), showMarkAsIncompleteModal && /*#__PURE__*/(0,jsx_runtime.jsx)(MarkExpenseAsIncompleteModal/* default */.Z, {
      expense: expense,
      onClose: function onClose() {
        return setMarkAsIncompleteModal(false);
      }
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
/* harmony default export */ var expenses_ExpenseMoreActionsButton = (ExpenseMoreActionsButton);
// EXTERNAL MODULE: ./components/expenses/ExpensePayeeDetails.js
var ExpensePayeeDetails = __webpack_require__(59390);
// EXTERNAL MODULE: ./components/expenses/ExpenseStatusTag.js
var ExpenseStatusTag = __webpack_require__(66300);
// EXTERNAL MODULE: ./components/expenses/ProcessExpenseButtons.js + 6 modules
var ProcessExpenseButtons = __webpack_require__(17931);
;// CONCATENATED MODULE: ./components/expenses/ExpenseSummary.js



var ExpenseSummary_excluded = ["expense", "collective", "host", "isLoading", "isLoadingLoggedInUser", "isEditing", "borderless", "canEditTags", "suggestedTags", "showProcessButtons", "onClose", "onDelete", "onEdit"];

function ExpenseSummary_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpenseSummary_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpenseSummary_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpenseSummary_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





























var SummaryHeader = (0,styled_components_browser_esm/* default */.ZP)(Text.H1).withConfig({
  displayName: "ExpenseSummary__SummaryHeader",
  componentId: "sc-1kqwm8i-0"
})(["> a{color:inherit;text-decoration:underline;:hover{color:", ";}}"], (0,index_esm/* themeGet */.R)('colors.black.600'));

var CreatedByUserLink = function CreatedByUserLink(_ref) {
  var account = _ref.account;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
    collective: account,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
      color: "black.800",
      fontWeight: 500,
      textDecoration: "none",
      children: account ? account.name : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
var ExpenseSummary = function ExpenseSummary(_ref2) {
  var _expense$draft, _expense$taxes, _expense$draft2;

  var expense = _ref2.expense,
      collective = _ref2.collective,
      host = _ref2.host,
      isLoading = _ref2.isLoading,
      isLoadingLoggedInUser = _ref2.isLoadingLoggedInUser,
      isEditing = _ref2.isEditing,
      borderless = _ref2.borderless,
      canEditTags = _ref2.canEditTags,
      suggestedTags = _ref2.suggestedTags,
      showProcessButtons = _ref2.showProcessButtons,
      onClose = _ref2.onClose,
      _onDelete = _ref2.onDelete,
      onEdit = _ref2.onEdit,
      props = objectWithoutProperties_default()(_ref2, ExpenseSummary_excluded);

  var isReceipt = (expense === null || expense === void 0 ? void 0 : expense.type) === expenseTypes/* default.RECEIPT */.Z.RECEIPT;
  var isCreditCardCharge = (expense === null || expense === void 0 ? void 0 : expense.type) === expenseTypes/* default.CHARGE */.Z.CHARGE;
  var isGrant = (expense === null || expense === void 0 ? void 0 : expense.type) === expenseTypes/* default.GRANT */.Z.GRANT;
  var existsInAPI = expense && (expense.id || expense.legacyId);
  var createdByAccount = (expense === null || expense === void 0 ? void 0 : expense.requestedByAccount) || (expense === null || expense === void 0 ? void 0 : expense.createdByAccount) || {};
  var expenseItems = (expense === null || expense === void 0 ? void 0 : expense.items.length) > 0 ? expense.items : (expense === null || expense === void 0 ? void 0 : (_expense$draft = expense.draft) === null || _expense$draft === void 0 ? void 0 : _expense$draft.items) || [];
  var expenseTaxes = (expense === null || expense === void 0 ? void 0 : (_expense$taxes = expense.taxes) === null || _expense$taxes === void 0 ? void 0 : _expense$taxes.length) > 0 ? expense.taxes : (expense === null || expense === void 0 ? void 0 : (_expense$draft2 = expense.draft) === null || _expense$draft2 === void 0 ? void 0 : _expense$draft2.taxes) || [];
  var isMultiCurrency = (expense === null || expense === void 0 ? void 0 : expense.amountInAccountCurrency) && expense.amountInAccountCurrency.currency !== expense.currency;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard/* default */.Z, ExpenseSummary_objectSpread(ExpenseSummary_objectSpread({
    p: borderless ? 0 : [16, 24, 32],
    mb: borderless ? [4, 0] : 0,
    borderStyle: borderless ? 'none' : 'solid'
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column-reverse', 'row'],
      alignItems: ['stretch', 'center'],
      justifyContent: "space-between",
      "data-cy": "expense-title",
      mb: 3,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        mr: [0, 2],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
          fontWeight: "500",
          "data-cy": "expense-description",
          children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
            height: 32,
            minWidth: 250
          }) : expense.description
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        mb: [3, 0],
        justifyContent: ['space-between', 'flex-end'],
        alignItems: "center",
        children: (expense === null || expense === void 0 ? void 0 : expense.status) && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseStatusTag/* default */.Z, {
            display: "block",
            status: expense.status,
            letterSpacing: "0.8px",
            fontWeight: "600",
            fontSize: "10px",
            showTaxFormTag: includes_default()(expense.requiredLegalDocuments, 'US_TAX_FORM'),
            showTaxFormMsg: expense.payee.isAdmin
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Tags/* default */.Z, {
      expense: expense,
      isLoading: isLoading,
      canEdit: canEditTags,
      suggestedTags: suggestedTags
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      alignItems: "center",
      mt: 3,
      children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
        height: 24,
        width: 200
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
          collective: createdByAccount,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
            collective: createdByAccount,
            size: 24
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          ml: 2,
          fontSize: "12px",
          color: "black.600",
          "data-cy": "expense-author",
          children: expense.requestedByAccount ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
              name: /*#__PURE__*/(0,jsx_runtime.jsx)(CreatedByUserLink, {
                account: createdByAccount
              }),
              date: new Date(expense.createdAt)
            }
          }) : expense.createdAt ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
              name: /*#__PURE__*/(0,jsx_runtime.jsx)(CreatedByUserLink, {
                account: createdByAccount
              }),
              date: new Date(expense.createdAt)
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Expense.SubmittedBy",
            defaultMessage: [{
              "type": 0,
              "value": "Submitted by "
            }, {
              "type": 1,
              "value": "name"
            }],
            values: {
              name: /*#__PURE__*/(0,jsx_runtime.jsx)(CreatedByUserLink, {
                account: createdByAccount
              })
            }
          })
        })]
      })
    }), isGrant && expense.longDescription && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        alignItems: "center",
        mt: 4,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          fontWeight: "bold",
          fontSize: "16px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Expense.RequestDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Request Description"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          flex: "1 1",
          borderColor: "black.300",
          ml: 2
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        mt: 4,
        children: expense.longDescription
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      my: 4,
      alignItems: "center",
      children: [isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
        height: 20,
        maxWidth: 150
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
        fontWeight: "bold",
        fontSize: "16px",
        children: isReceipt || isCreditCardCharge ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Expense.AttachedReceipts",
          defaultMessage: [{
            "type": 0,
            "value": "Attached receipts"
          }]
        }) : isGrant ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Expense.RequestDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Request Details"
          }]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Expense.InvoiceItems",
          defaultMessage: [{
            "type": 0,
            "value": "Invoice items"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        flex: "1 1",
        borderColor: "black.300",
        ml: 2
      })]
    }), isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
      height: 68,
      mb: 3
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "data-cy": "expense-summary-items",
      children: expenseItems.map(function (attachment) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            my: 24,
            flexWrap: "wrap",
            children: [(isReceipt || attachment.url) && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mr: 3,
              mb: 3,
              width: ['100%', 'auto'],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadedFilePreview/* default */.Z, {
                url: attachment.url,
                isLoading: isLoading || isLoadingLoggedInUser,
                isPrivate: !attachment.url && !isLoading,
                size: [640, 48],
                maxHeight: 48
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              justifyContent: "space-between",
              alignItems: "baseline",
              flex: "1",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexDirection: "column",
                justifyContent: "center",
                flexGrow: "1",
                children: [attachment.description ? /*#__PURE__*/(0,jsx_runtime.jsx)(HTMLContent/* default */.Z, {
                  content: attachment.description,
                  fontSize: "12px",
                  color: "black.900",
                  collapsable: true,
                  fontWeight: "500",
                  maxCollapsedHeight: 100,
                  collapsePadding: 22
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                  color: "black.500",
                  fontStyle: "italic",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "NoDescription",
                    defaultMessage: [{
                      "type": 0,
                      "value": "No description provided"
                    }]
                  })
                }), !isGrant && /*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
                  mt: 1,
                  fontSize: "12px",
                  color: "black.500",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "withColon",
                    defaultMessage: [{
                      "type": 1,
                      "value": "item"
                    }, {
                      "type": 0,
                      "value": ":"
                    }],
                    values: {
                      item: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "expense.incurredAt",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Date"
                        }]
                      })
                    }
                  }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(lib.FormattedDate, {
                    value: attachment.incurredAt,
                    dateStyle: "long",
                    timeZone: "UTC"
                  }), ' ']
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: 15,
                color: "black.600",
                mt: 2,
                textAlign: "right",
                ml: 3,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
                  amount: attachment.amount,
                  currency: expense.currency,
                  amountStyles: ExpenseSummary_objectSpread(ExpenseSummary_objectSpread({}, FormattedMoneyAmount/* DEFAULT_AMOUNT_STYLES */.a), {}, {
                    fontWeight: '500'
                  }),
                  precision: 2
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            borderStyle: "dotted"
          })]
        }, attachment.id);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "flex-end",
      mt: 4,
      mb: 2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        alignItems: "center",
        children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
          height: 18,
          width: 150
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseAmountBreakdown/* default */.Z, {
          currency: expense.currency,
          items: expenseItems,
          taxes: expenseTaxes,
          expenseTotalAmount: isEditing ? null : expense.amount
        })
      }), isMultiCurrency && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        alignItems: "center",
        mt: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          fontSize: "12px",
          fontWeight: "500",
          mr: 3,
          whiteSpace: "nowrap",
          color: "black.600",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          color: "black.600",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AmountWithExchangeRateInfo/* default */.Z, {
            amount: expense.amountInAccountCurrency
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExpensePayeeDetails/* default */.Z, {
      isLoading: isLoading,
      host: host,
      expense: expense,
      collective: collective,
      isDraft: !isEditing && (expense === null || expense === void 0 ? void 0 : expense.status) === expense_status/* default.DRAFT */.Z.DRAFT
    }), !isEditing && /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      width: 1,
      justifyContent: "space-between",
      flexDirection: ['column-reverse', null, 'row'],
      alignItems: "flex-end",
      borderTop: "1px solid #DCDEE0",
      mt: 4,
      pt: 12,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseMoreActionsButton, {
        onEdit: onEdit,
        expense: expense,
        mt: ['16px', null, '8px']
      }), Boolean(showProcessButtons && existsInAPI && collective && (0,ProcessExpenseButtons/* hasProcessButtons */.HF)(expense === null || expense === void 0 ? void 0 : expense.permissions)) && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        flexWrap: "wrap",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ProcessExpenseButtons/* default */.ZP, {
          expense: expense,
          permissions: expense === null || expense === void 0 ? void 0 : expense.permissions,
          collective: collective,
          host: host,
          onDelete: function onDelete() {
            _onDelete === null || _onDelete === void 0 ? void 0 : _onDelete(expense);
            onClose === null || onClose === void 0 ? void 0 : onClose();
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
/* harmony default export */ var expenses_ExpenseSummary = (ExpenseSummary);

/***/ }),

/***/ 74448:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44012);
/* harmony import */ var _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19377);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85893);









/**
 * Displays info about the collective (balance and host on mobile) for the create
 * expense page.
 */




var MobileCollectiveInfoStickyBar = function MobileCollectiveInfoStickyBar(_ref) {
  var isLoading = _ref.isLoading,
      collective = _ref.collective,
      host = _ref.host;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      justifyContent: "space-between",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        minWidth: 135,
        flex: "1 1 45%",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontSize: "12px",
          fontWeight: "bold",
          color: "black.900",
          mb: 1,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
              type: (collective === null || collective === void 0 ? void 0 : collective.type) || '' // collective can be null when it's loading

            }
          })
        }), isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          height: 16,
          width: 75
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, {
          color: "black.500",
          fontSize: "16px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            currency: collective.stats.balanceWithBlockedFunds.currency,
            amount: collective.stats.balanceWithBlockedFunds.valueInCents,
            precision: _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_1__/* .CurrencyPrecision.DEFAULT */ .E.DEFAULT
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        flex: "0 0 5%"
      }), host && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        flex: "1 1 45%",
        maxWidth: "45%",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          color: "black.600",
          fontSize: "11px",
          lineHeight: "17px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            id: "withColon",
            defaultMessage: [{
              "type": 1,
              "value": "item"
            }, {
              "type": 0,
              "value": ":"
            }],
            values: {
              item: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                id: "Fiscalhost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Fiscal Host"
                }]
              })
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          collective: host,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
            color: "black.600",
            fontSize: "11px",
            fontWeight: "bold",
            truncateOverflow: true,
            maxWidth: 135,
            children: collective !== null && collective !== void 0 && collective.isActive ? host.name : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(MobileCollectiveInfoStickyBar));

/***/ }),

/***/ 38884:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export msg */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36968);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43174);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21804);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(46829);
/* harmony import */ var _styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(85236);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82580);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(86896);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17632);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32651);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88705);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86702);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87262);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(66943);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(771);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85893);








var _excluded = ["field"];

var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var formatStringOptions = function formatStringOptions(strings) {
  return strings.map(function (s) {
    return {
      label: s,
      value: s
    };
  });
};

var formatTransferWiseSelectOptions = function formatTransferWiseSelectOptions(values) {
  return values.map(function (_ref) {
    var key = _ref.key,
        name = _ref.name;
    return {
      label: name,
      value: key
    };
  });
};

var TW_API_COLLECTIVE_SLUG = "opencollective-host";
var msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__.defineMessages)({
  currency: {
    id: "Currency",
    defaultMessage: [{
      "type": 0,
      "value": "Currency"
    }]
  }
});
var requiredFieldsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3___default()(["\n  query PayoutBankInformationRequiredFields($slug: String, $currency: String!, $accountDetails: JSON) {\n    host(slug: $slug) {\n      id\n      transferwise {\n        id\n        requiredFields(currency: $currency, accountDetails: $accountDetails) {\n          type\n          title\n          fields {\n            name\n            group {\n              key\n              name\n              type\n              required\n              example\n              validationRegexp\n              refreshRequirementsOnChange\n              valuesAllowed {\n                key\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var CUSTOM_METHOD_LABEL_BY_CURRENCY = {
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

var Input = function Input(_ref2) {
  var input = _ref2.input,
      getFieldName = _ref2.getFieldName,
      disabled = _ref2.disabled,
      currency = _ref2.currency,
      loading = _ref2.loading,
      refetch = _ref2.refetch,
      formik = _ref2.formik,
      host = _ref2.host;
  var isAccountHolderName = input.key === 'accountHolderName';
  var fieldName = isAccountHolderName ? getFieldName("data.".concat(input.key)) : getFieldName("data.details.".concat(input.key));
  var required = disabled ? false : input.required;
  var validate = required ? function (value) {
    return value ? undefined : "".concat(input.name, " is required");
  } : undefined;

  if (input.type === 'text') {
    if (input.validationRegexp) {
      validate = function validate(value) {
        var matches = new RegExp(input.validationRegexp).test(value); // TODO(intl): This should be internationalized, ideally with `formatFormErrorMessage`

        if (!value && required) {
          return "".concat(input.name, " is required");
        } else if (!matches && value) {
          return input.validationError || "Invalid ".concat(input.name);
        }
      };
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
      mt: 2,
      flex: "1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(formik__WEBPACK_IMPORTED_MODULE_9__/* .Field */ .gN, {
        name: fieldName,
        validate: validate,
        children: function children(_ref3) {
          var field = _ref3.field,
              meta = _ref3.meta;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            label: input.name,
            labelFontSize: "13px",
            required: required,
            hideOptionalLabel: disabled,
            error: (meta.touched || disabled) && meta.error,
            hint: input.hint,
            children: function children() {
              var inputValue = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(formik.values, field.name);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
                  placeholder: input.example,
                  error: (meta.touched || disabled) && meta.error,
                  disabled: disabled,
                  width: "100%",
                  value: inputValue || ''
                })), isAccountHolderName && inputValue && inputValue.match(/^[^\s]{1}\b/) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                  mt: 2,
                  fontSize: "12px",
                  type: "warning",
                  withIcon: true,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    id: "Warning.AccountHolderNameNotValid",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Full names for personal recipients. They must include more than one name, and both first and last name must have more than one character."
                    }]
                  })
                })]
              });
            }
          });
        }
      })
    }, input.key);
  } else if (input.type === 'date') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
      mt: 2,
      flex: "1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(formik__WEBPACK_IMPORTED_MODULE_9__/* .Field */ .gN, {
        name: fieldName,
        validate: validate,
        children: function children(_ref4) {
          var field = _ref4.field,
              meta = _ref4.meta;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            label: input.name,
            labelFontSize: "13px",
            required: required,
            hideOptionalLabel: disabled,
            error: (meta.touched || disabled) && meta.error,
            hint: input.hint,
            children: function children() {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
                type: "date",
                error: (meta.touched || disabled) && meta.error,
                disabled: disabled,
                width: "100%",
                value: lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(formik.values, field.name) || ''
              }));
            }
          });
        }
      })
    }, input.key);
  } else if (input.type === 'radio' || input.type === 'select') {
    var options = formatTransferWiseSelectOptions(input.valuesAllowed || []);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
      mt: 2,
      flex: "1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(formik__WEBPACK_IMPORTED_MODULE_9__/* .Field */ .gN, {
        name: fieldName,
        validate: validate,
        children: function children(_ref5) {
          var field = _ref5.field,
              meta = _ref5.meta;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            label: input.name,
            labelFontSize: "13px",
            required: required,
            hideOptionalLabel: disabled,
            error: (meta.touched || disabled) && meta.error,
            children: function children() {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
                inputId: field.name,
                disabled: disabled,
                error: (meta.touched || disabled) && meta.error,
                isLoading: loading && !options.length,
                name: field.name,
                options: options,
                value: options.find(function (c) {
                  return c.value === lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(formik.values, field.name);
                }) || null,
                onChange: function onChange(_ref6) {
                  var value = _ref6.value;
                  formik.setFieldValue(field.name, value);

                  if (input.refreshRequirementsOnChange) {
                    refetch({
                      slug: host ? host.slug : TW_API_COLLECTIVE_SLUG,
                      currency: currency,
                      accountDetails: lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(_objectSpread({}, formik.values), field.name, value), getFieldName('data'))
                    });
                  }
                }
              });
            }
          });
        }
      })
    });
  } else {
    return null;
  }
};

var FieldGroup = function FieldGroup(_ref7) {
  var field = _ref7.field,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
    flex: "1",
    children: field.group.map(function (input) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Input, _objectSpread({
        input: input
      }, props), input.key);
    })
  });
};

var DetailsForm = function DetailsForm(_ref8) {
  var _data$host, _data$host$transferwi;

  var disabled = _ref8.disabled,
      getFieldName = _ref8.getFieldName,
      formik = _ref8.formik,
      host = _ref8.host,
      currency = _ref8.currency;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_25__.useQuery)(requiredFieldsQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .API_V2_CONTEXT */ .T,
    // A) If `fixedCurrency` was passed in PayoutBankInformationForm (2) (3)
    //    then `host` is not set and we'll use the Platform Wise account
    // B) If `host` is set, we expect to be in 2 cases:
    //      * The Collective Host has Wise configured and we should be able to fetch `requiredFields` from it
    //      * The Collective Host doesn't have Wise configured and `host` is already switched to the Platform account
    variables: {
      slug: host ? host.slug : TW_API_COLLECTIVE_SLUG,
      currency: currency
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      refetch = _useQuery.refetch; // Make sure we load the form data on initial load. Otherwise certain form fields such
  // as the state field in the "Recipient's Address" section might not be visible on first load
  // and only be visible after the user reselect the country.


  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    refetch({
      accountDetails: lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(formik.values, getFieldName('data'))
    });
  }, []);

  if (loading && !data) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledSpinner__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {});
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      fontSize: "12px",
      type: "error",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        id: "PayoutBankInformationForm.Error.RequiredFields",
        defaultMessage: [{
          "type": 0,
          "value": "There was an error fetching the required fields"
        }]
      }), error.message && ": ".concat(error.message)]
    });
  } // If at this point we don't have `requiredFields` available,
  // we can display an error message, Wise is likely not configured on the platform


  if (!(data !== null && data !== void 0 && (_data$host = data.host) !== null && _data$host !== void 0 && (_data$host$transferwi = _data$host.transferwise) !== null && _data$host$transferwi !== void 0 && _data$host$transferwi.requiredFields)) {
    if (false) {} else {
      // eslint-disable-next-line no-console
      console.warn('Could not fetch requiredFields through Wise.');
      return;
    }
  }

  var transactionTypeValues = data.host.transferwise.requiredFields.map(function (rf) {
    var _CUSTOM_METHOD_LABEL_, _CUSTOM_METHOD_LABEL_2, _CUSTOM_METHOD_LABEL_3;

    return {
      label: (CUSTOM_METHOD_LABEL_BY_CURRENCY === null || CUSTOM_METHOD_LABEL_BY_CURRENCY === void 0 ? void 0 : (_CUSTOM_METHOD_LABEL_ = CUSTOM_METHOD_LABEL_BY_CURRENCY[currency]) === null || _CUSTOM_METHOD_LABEL_ === void 0 ? void 0 : (_CUSTOM_METHOD_LABEL_2 = _CUSTOM_METHOD_LABEL_.requiredFields) === null || _CUSTOM_METHOD_LABEL_2 === void 0 ? void 0 : (_CUSTOM_METHOD_LABEL_3 = _CUSTOM_METHOD_LABEL_2.options) === null || _CUSTOM_METHOD_LABEL_3 === void 0 ? void 0 : _CUSTOM_METHOD_LABEL_3[rf.type]) || rf.title,
      value: rf.type
    };
  }); // Some currencies offer different methods for the transaction
  // e.g., USD allows ABA and SWIFT transactions.

  var availableMethods = data.host.transferwise.requiredFields.find(function (method) {
    return method.type === lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(formik.values, getFieldName("data.type"));
  });

  var _partition2 = lodash_partition__WEBPACK_IMPORTED_MODULE_5___default()(availableMethods === null || availableMethods === void 0 ? void 0 : availableMethods.fields, function (field) {
    return field.group.every(function (g) {
      return g.key.includes('address.');
    });
  }),
      _partition3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_partition2, 2),
      addressFields = _partition3[0],
      otherFields = _partition3[1];

  var transactionMethodFieldName = getFieldName('data.type');

  var transactionMethod = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(formik.values, transactionMethodFieldName);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
    flexDirection: "column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(formik__WEBPACK_IMPORTED_MODULE_9__/* .Field */ .gN, {
      name: getFieldName('data.type'),
      children: function children(_ref9) {
        var _CUSTOM_METHOD_LABEL_4, _CUSTOM_METHOD_LABEL_5;

        var field = _ref9.field;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          name: field.name,
          label: (CUSTOM_METHOD_LABEL_BY_CURRENCY === null || CUSTOM_METHOD_LABEL_BY_CURRENCY === void 0 ? void 0 : (_CUSTOM_METHOD_LABEL_4 = CUSTOM_METHOD_LABEL_BY_CURRENCY[currency]) === null || _CUSTOM_METHOD_LABEL_4 === void 0 ? void 0 : (_CUSTOM_METHOD_LABEL_5 = _CUSTOM_METHOD_LABEL_4.requiredFields) === null || _CUSTOM_METHOD_LABEL_5 === void 0 ? void 0 : _CUSTOM_METHOD_LABEL_5.label) || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "PayoutBankInformationForm.TransactionMethod",
            defaultMessage: [{
              "type": 0,
              "value": "Transaction Method"
            }]
          }),
          labelFontSize: "13px",
          mt: 3,
          mb: 2,
          children: function children(_ref10) {
            var id = _ref10.id;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
              inputId: id,
              name: field.name,
              onChange: function onChange(_ref11) {
                var value = _ref11.value;

                var _get2 = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(formik.values, getFieldName("data")),
                    type = _get2.type,
                    currency = _get2.currency;

                formik.setFieldValue(getFieldName('data'), {
                  type: type,
                  currency: currency
                });
                formik.setFieldValue(field.name, value);
              },
              options: transactionTypeValues,
              value: transactionTypeValues.find(function (method) {
                return method.value === (availableMethods === null || availableMethods === void 0 ? void 0 : availableMethods.type);
              }) || null,
              disabled: disabled
            });
          }
        });
      }
    }), transactionMethod && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
        mt: 3,
        flex: "1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
          fontSize: "14px",
          fontWeight: "bold",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "PayoutBankInformationForm.AccountInfo",
            defaultMessage: [{
              "type": 0,
              "value": "Account Information"
            }]
          })
        })
      }), otherFields.map(function (field) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(FieldGroup, {
          currency: currency,
          disabled: disabled,
          field: field,
          formik: formik,
          getFieldName: getFieldName,
          host: host,
          loading: loading,
          refetch: refetch
        }, lodash_kebabCase__WEBPACK_IMPORTED_MODULE_6___default()(field.name));
      })]
    }), Boolean(addressFields.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
        mt: 3,
        flex: "1",
        fontSize: "14px",
        fontWeight: "bold",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
          mr: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "PayoutBankInformationForm.RecipientAddress",
            defaultMessage: [{
              "type": 0,
              "value": "Recipient's Address"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: "PayoutBankInformationForm.HolderAddress",
            defaultMessage: [{
              "type": 0,
              "value": "Bank account holder address (not the bank address)"
            }]
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_26__/* .Info */ .k, {
            size: 16
          })
        })]
      }), addressFields.map(function (field) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(FieldGroup, {
          currency: currency,
          disabled: disabled,
          field: field,
          formik: formik,
          getFieldName: getFieldName,
          host: host,
          loading: loading,
          refetch: refetch
        }, lodash_kebabCase__WEBPACK_IMPORTED_MODULE_6___default()(field.name));
      })]
    })]
  });
};

var availableCurrenciesQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3___default()(["\n  query PayoutBankInformationAvailableCurrencies($slug: String, $ignoreBlockedCurrencies: Boolean) {\n    host(slug: $slug) {\n      id\n      slug\n      currency\n      transferwise {\n        id\n        availableCurrencies(ignoreBlockedCurrencies: $ignoreBlockedCurrencies)\n      }\n    }\n  }\n"])));
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

var PayoutBankInformationForm = function PayoutBankInformationForm(_ref12) {
  var _host$transferwise, _wiseHost$transferwis, _currencies;

  var isNew = _ref12.isNew,
      getFieldName = _ref12.getFieldName,
      host = _ref12.host,
      fixedCurrency = _ref12.fixedCurrency,
      ignoreBlockedCurrencies = _ref12.ignoreBlockedCurrencies,
      optional = _ref12.optional;

  var _useQuery2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_25__.useQuery)(availableCurrenciesQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: TW_API_COLLECTIVE_SLUG,
      ignoreBlockedCurrencies: ignoreBlockedCurrencies
    },
    // Skip fetching/loading if the currency is fixed (2) (3)
    // Or if availableCurrencies is already available. Expense Flow + Host with Wise configured (1)
    skip: Boolean(fixedCurrency || (host === null || host === void 0 ? void 0 : (_host$transferwise = host.transferwise) === null || _host$transferwise === void 0 ? void 0 : _host$transferwise.availableCurrencies))
  }),
      data = _useQuery2.data,
      loading = _useQuery2.loading;

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_9__/* .useFormikContext */ .u6)();

  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(),
      formatMessage = _useIntl.formatMessage; // Display spinner if loading


  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledSpinner__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {});
  } // Fiscal Host with Wise configured (1) OR Platform account as fallback (1) or default (2) (3)
  // NOTE: If `fixedCurrency is set`, `wiseHost` will be null (at least today)


  var wiseHost = (data === null || data === void 0 ? void 0 : data.host) || host;
  var availableCurrencies = wiseHost === null || wiseHost === void 0 ? void 0 : (_wiseHost$transferwis = wiseHost.transferwise) === null || _wiseHost$transferwis === void 0 ? void 0 : _wiseHost$transferwis.availableCurrencies;
  var currencies;

  if (fixedCurrency) {
    currencies = formatStringOptions([fixedCurrency]);
  } else if (availableCurrencies) {
    currencies = formatStringOptions(availableCurrencies.map(function (c) {
      return c.code;
    }));
  } else {
    // If at this point we don't have `fixedCurrency` or `availableCurrencies`,
    // we can display an error message, Wise is likely not configured on the platform
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      fontSize: "12px",
      type: "warning",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
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
          I18nSupportLink: _I18nFormatters__WEBPACK_IMPORTED_MODULE_13__/* .I18nSupportLink */ .wl
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

  var currencyFieldName = getFieldName('data.currency');

  var selectedCurrency = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(formik.values, currencyFieldName);

  var validateCurrencyMinimumAmount = function validateCurrencyMinimumAmount() {
    var _formik$values, _formik$values$items;

    // Skip if currency is fixed (2) (3)
    // or if `availableCurrencies` is not set (but we're not supposed to be there anyway)
    if (fixedCurrency || !availableCurrencies) {
      return;
    } // Only validate minimum amount if the form has items


    if ((formik === null || formik === void 0 ? void 0 : (_formik$values = formik.values) === null || _formik$values === void 0 ? void 0 : (_formik$values$items = _formik$values.items) === null || _formik$values$items === void 0 ? void 0 : _formik$values$items.length) > 0) {
      var _availableCurrencies$;

      var invoiceTotalAmount = formik.values.items.reduce(function (amount, attachment) {
        return amount + (attachment.amount || 0);
      }, 0);
      var minAmountForSelectedCurrency = ((_availableCurrencies$ = availableCurrencies.find(function (c) {
        return c.code === selectedCurrency;
      })) === null || _availableCurrencies$ === void 0 ? void 0 : _availableCurrencies$.minInvoiceAmount) * 100;

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
          selectedCurrency: selectedCurrency,
          minAmountForSelectedCurrency: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_10__/* .formatCurrency */ .xG)(minAmountForSelectedCurrency, wiseHost.currency)
        });
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(formik__WEBPACK_IMPORTED_MODULE_9__/* .Field */ .gN, {
      name: currencyFieldName,
      validate: validateCurrencyMinimumAmount,
      children: function children(_ref13) {
        var field = _ref13.field;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          name: field.name,
          label: formatMessage(msg.currency),
          labelFontSize: "13px",
          mt: 3,
          mb: 2,
          children: function children(_ref14) {
            var id = _ref14.id;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
              inputId: id,
              name: field.name,
              onChange: function onChange(_ref15) {
                var value = _ref15.value;
                formik.setFieldValue(getFieldName('data'), {});
                formik.setFieldValue(field.name, value);
              },
              options: currencies,
              value: currencies.find(function (c) {
                return c.label === selectedCurrency;
              }) || null,
              disabled: Boolean(fixedCurrency && !optional) || !isNew
            });
          }
        });
      }
    }), selectedCurrency && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(DetailsForm, {
      currency: selectedCurrency,
      disabled: !isNew,
      formik: formik,
      getFieldName: getFieldName,
      host: wiseHost
    }), !selectedCurrency && !((_currencies = currencies) !== null && _currencies !== void 0 && _currencies.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      fontSize: "12px",
      type: "error",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
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
/* harmony default export */ __webpack_exports__["Z"] = (PayoutBankInformationForm);

/***/ }),

/***/ 99849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": function() { return /* binding */ Title; },
/* harmony export */   "VY": function() { return /* binding */ Content; },
/* harmony export */   "Z0": function() { return /* binding */ Separator; },
/* harmony export */   "ZP": function() { return /* binding */ FAQ; },
/* harmony export */   "kS": function() { return /* binding */ Entry; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22733);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54590);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50056);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16678);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85893);







var _excluded = ["children"],
    _excluded2 = ["title", "children", "withBorderLeft", "withNewButtons", "titleProps"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











/** Main entry container */



var Entry = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].details.withConfig */ .ZP.details.withConfig({
  displayName: "FAQ__Entry",
  componentId: "sc-1qzv7kx-0"
})(["&[open]{border-color:", ";summary::after{content:'\u2212';}}summary{padding-top:", "px;padding-bottom:", "px;font-size:13px;font-weight:500;color:", ";list-style:none;&:hover{color:", ";}button{display:none;}}summary:focus{outline:1px dashed ", ";outline-offset:", "px;}summary::after{content:'+';display:inline-block;padding-left:", "px;color:", ";font-weight:bold;}summary::-webkit-details-marker{display:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.700'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.200'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.1'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.600'));
var CollapseBtn = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "FAQ__CollapseBtn",
  componentId: "sc-1qzv7kx-1"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid #dcdee0;svg{stroke-width:1.5;}[data-item='chevron-up']{margin-top:-5%;}[data-item='chevron-down']{margin-top:5%;}", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_9__/* .size */ .dp, styled_system__WEBPACK_IMPORTED_MODULE_9__/* .space */ .Dh);
/** Entry title */

var Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)(function (_ref) {
  var children = _ref.children,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("summary", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(CollapseBtn, {
      size: 18,
      ml: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_15__/* .ChevronUp */ .Kh, {
        size: "1em",
        "data-item": "chevron-up",
        style: {
          marginTop: -1
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_16__/* .ChevronDown */ ._M, {
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

var Content = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu).withConfig({
  displayName: "FAQ__Content",
  componentId: "sc-1qzv7kx-3"
})([""]);
Content.defaultProps = {
  py: 2,
  fontSize: '13px',
  color: 'black.600'
};
var Separator = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].hr.withConfig */ .ZP.hr.withConfig({
  displayName: "FAQ__Separator",
  componentId: "sc-1qzv7kx-4"
})(["background:", ";width:100%;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.400'));
/** A simple wrapper to group entries */

var EntryContainer = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "FAQ__EntryContainer",
  componentId: "sc-1qzv7kx-5"
})(["", "{", " ", "}"], Entry, function (props) {
  return props.withNewButtons ? (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* .css */ .iv)(["[data-item='chevron-up']{display:none;}&[open]{[data-item='chevron-up']{display:inline-block;}[data-item='chevron-down']{display:none;}}summary::after{display:none;}button{display:block;}"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* .css */ .iv)(["", "{display:none;}"], CollapseBtn);
}, function (props) {
  return props.withBorderLeft && (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* .css */ .iv)(["border-left:1px solid #dcdee0;padding-left:8px;&:focus-within,&:hover{border-color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.primary.500'));
});
/**
 * A small FAQ with expendable contents.
 */

var FAQ = /*#__PURE__*/function (_Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default()(FAQ, _Component);

  var _super = _createSuper(FAQ);

  function FAQ() {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, FAQ);

    return _super.apply(this, arguments);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(FAQ, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          withBorderLeft = _this$props.withBorderLeft,
          withNewButtons = _this$props.withNewButtons,
          titleProps = _this$props.titleProps,
          props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6___default()(_this$props, _excluded2);

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
        children: [title !== null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__.P, _objectSpread(_objectSpread({
          fontWeight: "bold",
          mb: 1,
          color: "black.900"
        }, titleProps), {}, {
          children: title || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            id: "FAQ",
            defaultMessage: [{
              "type": 0,
              "value": "FAQ"
            }]
          })
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(EntryContainer, {
          withBorderLeft: withBorderLeft,
          withNewButtons: withNewButtons,
          children: children
        })]
      }));
    }
  }]);

  return FAQ;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);


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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ useImageUploader; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86896);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88705);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31330);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65985);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessages)({
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

var getUploadProgress = function getUploadProgress(uploadProgressList) {
  if (!uploadProgressList || uploadProgressList.length === 0) {
    return 0;
  } else {
    var totalUploadProgress = uploadProgressList.reduce(function (total, current) {
      return total + current;
    }, 0);
    return Math.trunc(totalUploadProgress / uploadProgressList.length);
  }
};

var useImageUploader = function useImageUploader(_ref) {
  var isMulti = _ref.isMulti,
      mockImageGenerator = _ref.mockImageGenerator,
      onSuccess = _ref.onSuccess,
      onReject = _ref.onReject,
      kind = _ref.kind;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState, 2),
      isUploading = _React$useState2[0],
      setUploading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7__.useState([]),
      _React$useState4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState3, 2),
      uploadProgressList = _React$useState4[0],
      setUploadProgressList = _React$useState4[1];

  var _useToasts = (0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
  return {
    isUploading: isUploading,
    uploadProgress: getUploadProgress(uploadProgressList),
    uploadFiles: react__WEBPACK_IMPORTED_MODULE_7__.useCallback( /*#__PURE__*/function () {
      var _ref2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(acceptedFiles, rejectedFiles) {
        var filesToUpload, results, successes, failures, baseMsg, errorMsg;
        return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setUploading(true);
                filesToUpload = isMulti ? acceptedFiles : [acceptedFiles[0]];
                _context.next = 4;
                return (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .allSettled */ .Lu)(filesToUpload.map(function (file, index) {
                  return (0,_api__WEBPACK_IMPORTED_MODULE_10__/* .uploadImageWithXHR */ .Z4)(file, kind, {
                    mockImage: mockImageGenerator && mockImageGenerator(index),
                    onProgress: function onProgress(progress) {
                      var newProgressList = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(uploadProgressList);

                      newProgressList.splice(index, 0, progress);
                      setUploadProgressList(newProgressList);
                    }
                  });
                }));

              case 4:
                results = _context.sent;
                setUploading(false);
                successes = [];
                failures = [];
                results.forEach(function (result, index) {
                  var fileInfo = lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(filesToUpload[index], ['name', 'size', 'type']);

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

                if (!(onSuccess && successes.length > 0)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 12;
                return onSuccess(isMulti ? successes : successes[0]);

              case 12:
                if (onReject && failures.length > 0) {
                  onReject(isMulti ? failures : failures[0]);
                }

                if (rejectedFiles !== null && rejectedFiles !== void 0 && rejectedFiles.length) {
                  baseMsg = intl.formatMessage(msg.invalidFiles, _objectSpread(_objectSpread({}, _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP), {}, {
                    count: rejectedFiles.length,
                    files: rejectedFiles.map(function (_ref3) {
                      var file = _ref3.file;
                      return file.name;
                    }).join(', ')
                  }));
                  errorMsg = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(rejectedFiles[0], 'errors.0.message') || '';
                  addToast({
                    type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                    message: "".concat(baseMsg, ". ").concat(errorMsg)
                  });
                }

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(), [isMulti, onSuccess, onReject, mockImageGenerator, uploadProgressList])
  };
};

/***/ }),

/***/ 19123:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ usePrevious; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * Holds the previous value. Useful to reproduce a `componentDidUpdate(prevProps)` behavior
 * in a hook component.
 */

var usePrevious = function usePrevious(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
};

/***/ })

}]);
//# sourceMappingURL=2750-cf770fc817000c46.js.map