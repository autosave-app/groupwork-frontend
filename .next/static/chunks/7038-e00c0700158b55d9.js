"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7038],{

/***/ 97038:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_InputField; }
});

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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__(14293);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/icons/PrivateInfoIcon.js
var PrivateInfoIcon = __webpack_require__(40777);
// EXTERNAL MODULE: ./components/CollectiveTagsInput.tsx
var CollectiveTagsInput = __webpack_require__(52903);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/InputSwitch.js
var InputSwitch = __webpack_require__(96124);
// EXTERNAL MODULE: ./components/InputTypeCountry.js + 1 modules
var InputTypeCountry = __webpack_require__(32143);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/Clear/Clear.esm.js
var Clear_esm = __webpack_require__(46039);
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./node_modules/react-geosuggest/module/Geosuggest.esm.js
var Geosuggest_esm = __webpack_require__(83509);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(48966);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Location.js + 1 modules
var Location = __webpack_require__(87819);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/InputTypeLocation.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
















var ClearIcon = (0,styled_components_browser_esm/* default */.ZP)(Clear_esm/* Clear */.U).withConfig({
  displayName: "InputTypeLocation__ClearIcon",
  componentId: "sc-1l6nkqj-0"
})(["height:20px;width:20px;cursor:pointer;"]);
var GeoSuggestItem = (0,styled_components_browser_esm/* default */.ZP)(Geosuggest_esm/* default */.Z).withConfig({
  displayName: "InputTypeLocation__GeoSuggestItem",
  componentId: "sc-1l6nkqj-1"
})([".geosuggest{font-size:18px;font-size:1rem;position:relative;text-align:left;}.geosuggest__input{min-height:36px;border:1px solid #dcdee0;border-color:#dcdee0;border-radius:4px;color:#313233;overflow:scroll;max-height:100%;min-width:0;width:100%;flex:1 1 auto;font-size:14px;line-height:1.5;overflow:scroll;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:8px;box-sizing:border-box;outline:none;background-color:#ffffff;border-color:", ";box-sizing:border-box;&:disabled{background-color:", ";cursor:not-allowed;}&:hover:not(:disabled){border-color:", ";}&:focus:not(:disabled){border-color:", ";}&::placeholder{color:", ";}}.geosuggest__suggests{top:100%;left:0;right:0;max-height:25em;padding:0;margin-top:-2px;background:#fff;border:1px solid #cccccc;border-radius:4px;border-top-width:0;overflow-x:hidden;overflow-y:auto;list-style:none;margin-top:1px;z-index:5;-webkit-transition:max-height 0.2s,border 0.2s;transition:max-height 0.2s,border 0.2s;}.geosuggest__suggests--hidden{max-height:0;overflow:hidden;border-width:0;}.geosuggest__item{font-size:12px;padding:1em 0.65em;cursor:pointer;margin:0;}.geosuggest__item:hover,.geosuggest__item:focus{background:", ";}"], (0,index_esm/* themeGet */.R)('colors.black.300'), (0,index_esm/* themeGet */.R)('colors.black.50'), (0,index_esm/* themeGet */.R)('colors.primary.300'), (0,index_esm/* themeGet */.R)('colors.primary.500'), (0,index_esm/* themeGet */.R)('colors.black.400'), (0,index_esm/* themeGet */.R)('colors.primary.100'));

var InputTypeLocation = /*#__PURE__*/function (_React$Component) {
  inherits_default()(InputTypeLocation, _React$Component);

  var _super = _createSuper(InputTypeLocation);

  function InputTypeLocation(props) {
    var _this;

    classCallCheck_default()(this, InputTypeLocation);

    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(assertThisInitialized_default()(_this));
    _this.state = {
      value: props.value || {},
      eventUrlError: false
    };
    _this.messages = (0,lib.defineMessages)({
      online: {
        id: "Location.online",
        defaultMessage: [{
          "type": 0,
          "value": "Online"
        }]
      }
    });
    _this.geoSuggestRef = /*#__PURE__*/(0,react.createRef)();
    return _this;
  }

  createClass_default()(InputTypeLocation, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value !== prevProps.value) {
        this.setState({
          value: this.props.value
        });
      }
    }
  }, {
    key: "removeCountryFromAddress",
    value: function removeCountryFromAddress(address) {
      return address.split(', ').slice(0, -1).join(', ');
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      if (!value) {
        this.setState({
          value: null
        });
        return this.props.onChange(null);
      } else if (value.isOnline) {
        var _location = {
          name: 'Online',
          address: value.address
        };
        this.setState({
          value: _location
        });
        return this.props.onChange(_location);
      }

      var countryComponent = value.gmaps['address_components'].find(function (c) {
        return c.types.includes('country');
      });
      var location = {
        // Remove country from address
        address: this.removeCountryFromAddress(value.gmaps.formatted_address),
        // Keep only the first part for location name
        name: value.label && value.label.replace(/,.+/, ''),
        // Normally returned addresses always have a country, this is just defensive
        country: countryComponent ? countryComponent['short_name'] : null,
        lat: value.location.lat,
        "long": value.location.lng
      };
      this.setState({
        value: location
      });
      return this.props.onChange(location);
    }
  }, {
    key: "isAutocompleteServiceAvailable",
    value: function isAutocompleteServiceAvailable() {
      return window && Boolean(get_default()(window, 'google.maps.places.AutocompleteService'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _this$props$value,
          _this$state$value;

      var options = this.props.options || {};
      var autoCompleteNotAvailable = !this.isAutocompleteServiceAvailable();
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: autoCompleteNotAvailable ? /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
          withIcon: true,
          type: "warning",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "location.googleAutocompleteService.unavailable",
            values: {
              service: 'Google Autocomplete Service',
              domain: 'maps.googleapis.com',
              lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
            },
            defaultMessage: [{
              "type": 0,
              "value": "Location field requires \""
            }, {
              "type": 1,
              "value": "service"
            }, {
              "type": 0,
              "value": "\" to function."
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 0,
              "value": " Make sure \""
            }, {
              "type": 1,
              "value": "domain"
            }, {
              "type": 0,
              "value": "\" is not blocked."
            }]
          })
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
            position: "relative",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GeoSuggestItem, _objectSpread({
              ref: this.geoSuggestRef,
              onSuggestSelect: function onSuggestSelect(event) {
                return _this2.handleChange(event);
              },
              placeholder: this.props.placeholder,
              initialValue: (_this$props$value = this.props.value) === null || _this$props$value === void 0 ? void 0 : _this$props$value.name,
              fixtures: [{
                label: this.props.intl.formatMessage(this.messages.online),
                location: {
                  lat: 0,
                  lng: 0
                },
                isOnline: true
              }]
            }, options)), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
              position: "absolute",
              top: "0.5em",
              right: "1em",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ClearIcon, {
                onClick: function onClick() {
                  _this2.geoSuggestRef.current.clear();

                  _this2.handleChange(null);
                }
              })
            })]
          }), ((_this$state$value = this.state.value) === null || _this$state$value === void 0 ? void 0 : _this$state$value.name) === 'Online' ? /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            mt: 3,
            labelProps: {
              fontWeight: '700',
              fontSize: '16px'
            },
            labelColor: "#333333",
            label: "URL (public)",
            error: this.state.eventUrlError,
            children: function children(field) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread(_objectSpread({}, field), {}, {
                  width: "100%",
                  placeholder: "https://meet.jit.si/opencollective",
                  defaultValue: _this2.state.value.address,
                  onBlur: function onBlur(e) {
                    if (e.target.value && !(0,validator.isURL)(e.target.value)) {
                      _this2.setState({
                        eventUrlError: true
                      });
                    }
                  },
                  onChange: function onChange(_ref) {
                    var value = _ref.target.value;

                    _this2.setState({
                      eventUrlError: !(0,validator.isURL)(value)
                    });

                    _this2.handleChange({
                      isOnline: true,
                      address: value
                    });
                  }
                })), _this2.state.eventUrlError && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                  display: "block",
                  color: "red.500",
                  fontSize: "12px",
                  mt: 1,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "InvalidURL",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Invalid URL. It must start with http:// or https://."
                    }]
                  })
                })]
              });
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Location/* default */.Z, {
            location: this.state.value,
            showTitle: false
          })]
        })
      });
    }
  }]);

  return InputTypeLocation;
}(react.Component);

InputTypeLocation.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "removeCountryFromAddress",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "address",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "value",
      "type": null
    }],
    "returns": null
  }, {
    "name": "isAutocompleteServiceAvailable",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "InputTypeLocation",
  "props": {
    "value": {
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
    "className": {
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
      "required": true
    },
    "options": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "placeholder": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_InputTypeLocation = ((0,injectIntl/* default */.ZP)(InputTypeLocation));
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/StyledInputGroup.js
var StyledInputGroup = __webpack_require__(32631);
// EXTERNAL MODULE: ./components/StyledInputTags.js
var StyledInputTags = __webpack_require__(10732);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/StyledTextarea.js
var StyledTextarea = __webpack_require__(93150);
// EXTERNAL MODULE: ./components/TimezonePicker.js + 1 modules
var TimezonePicker = __webpack_require__(20634);
;// CONCATENATED MODULE: ./components/InputField.js










var _excluded = ["label", "help", "pre", "post", "after", "button", "className", "isPrivate"];

function InputField_createSuper(Derived) { var hasNativeReflectConstruct = InputField_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function InputField_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function InputField_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function InputField_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? InputField_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : InputField_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var Label = function Label(_ref) {
  var label = _ref.label,
      isPrivate = _ref.isPrivate;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
    children: [label, "\xA0", isPrivate && /*#__PURE__*/(0,jsx_runtime.jsx)(PrivateInfoIcon/* default */.Z, {
      tooltipProps: {
        containerVerticalAlign: 'text-bottom'
      }
    })]
  });
};

function FieldGroup(_ref2) {
  var label = _ref2.label,
      help = _ref2.help,
      pre = _ref2.pre,
      post = _ref2.post,
      after = _ref2.after,
      button = _ref2.button,
      className = _ref2.className,
      isPrivate = _ref2.isPrivate,
      props = objectWithoutProperties_default()(_ref2, _excluded);

  var validationState = props.validationState === 'error' ? 'error' : null;
  delete props.validationState;
  props.key = props.key || props.name;

  var inputProps = InputField_objectSpread({}, props);

  delete inputProps.children;

  if (className && className.match(/horizontal/)) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexWrap: "wrap",
      p: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: [1, 2 / 12],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Label, {
          label: label,
          isPrivate: isPrivate
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: [1, 10 / 12],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, InputField_objectSpread({
          prepend: pre,
          append: post,
          success: validationState,
          onWheel: function onWheel(e) {
            e.preventDefault();
            e.target.blur();
          }
        }, inputProps)), after && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "after",
          children: after
        }), button && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          children: button
        }), help && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
          children: help
        })]
      })]
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexWrap: "wrap",
      p: 1,
      children: [label && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: 1,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Label, {
          label: label,
          isPrivate: isPrivate
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: 1,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, InputField_objectSpread({
          prepend: pre,
          append: post,
          success: validationState,
          onWheel: function onWheel(e) {
            e.preventDefault();
            e.target.blur();
          }
        }, inputProps)), button && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          children: button
        })]
      }), help && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
        children: help
      })]
    });
  }
}

var InputFieldContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "InputField__InputFieldContainer",
  componentId: "sc-1lqr2e5-0"
})(["label{margin-top:5px;margin-bottom:5px;}.horizontal label{padding-right:15px;padding-left:15px;}"]);
var HelpBlock = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "InputField__HelpBlock",
  componentId: "sc-1lqr2e5-1"
})(["color:#737373;font-size:1.2rem;"]);
/**
 * @deprecated InputField is deprecated and should be avoided for new developments.
 * Please use the `Styled*` equivalents: `StyledInput`, `StyledInputAmount`, etc.
 */

var InputField = /*#__PURE__*/function (_React$Component) {
  inherits_default()(InputField, _React$Component);

  var _super = InputField_createSuper(InputField);

  function InputField(props) {
    var _this;

    classCallCheck_default()(this, InputField);

    _this = _super.call(this, props);
    _this.state = {
      value: props.value,
      validationState: null
    };
    _this.handleChange = _this.handleChange.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(InputField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value !== prevProps.value) {
        this.setState({
          value: this.props.value
        });
      }
    }
  }, {
    key: "validate",
    value: function validate(value) {
      if (!value) {
        return !this.props.required;
      }

      var type = this.props.type || 'text';

      if (this.props.validate && !type.match(/^date/)) {
        return this.props.validate(value);
      }

      switch (this.props.type) {
        case 'email':
          return value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      }

      return true;
    }
  }, {
    key: "roundCurrencyValue",
    value: function roundCurrencyValue(value) {
      if (value === null) {
        return null;
      } else if (get_default()(this.props.options, 'step') === 1) {
        // Value must be an increment of 1, truncate the two last digits
        return Math.trunc(value / 100) * 100;
      }

      return value;
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      var _this$props = this.props,
          type = _this$props.type,
          step = _this$props.step;

      if (type === 'number') {
        var parsed = step && parseFloat(step) !== 1 ? parseFloat(value) : parseInt(value);
        value = isNaN(parsed) ? null : parsed;
      } else if (type === 'currency') {
        value = this.roundCurrencyValue(value);
      }

      if (this.validate(value)) {
        this.setState({
          validationState: null
        });
      } else {
        this.setState({
          validationState: 'error'
        });
      }

      this.setState({
        value: value
      });
      this.props.onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var field = this.props;
      var value = this.state.value;
      var horizontal = field.className && field.className.match(/horizontal/);

      switch (this.props.type) {
        case 'textarea':
          {
            value = value || this.props.defaultValue || '';
            var after;

            if (field.charCount) {
              if (field.maxLength) {
                after = "".concat(field.maxLength - value.length, " characters left");
              } else {
                after = "".concat(value.length, " characters");
              }
            }

            this.input = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexWrap: "wrap",
                p: 1,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  width: [1, 2 / 12],
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                    children: (0,utils/* capitalize */.kC)(field.label)
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                  width: [1, 10 / 12],
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, {
                    width: "100%",
                    className: field.className,
                    onChange: function onChange(event) {
                      return _this2.handleChange(event.target.value);
                    },
                    placeholder: this.props.placeholder,
                    value: this.state.value || this.props.defaultValue || '',
                    maxLength: field.maxLength
                  }), after && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: "after",
                    children: after
                  }), field.description && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                    children: field.description
                  })]
                })]
              }), !horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexWrap: "wrap",
                p: 1,
                children: [field.label && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  width: 1,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                    children: "".concat((0,utils/* capitalize */.kC)(field.label))
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                  width: 1,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, {
                    width: "100%",
                    className: field.className,
                    onChange: function onChange(event) {
                      return _this2.handleChange(event.target.value);
                    },
                    placeholder: this.props.placeholder,
                    value: this.state.value || this.props.defaultValue || '',
                    maxLength: field.maxLength
                  }), after && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: "after",
                    children: after
                  }), field.description && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                    children: field.description
                  })]
                })]
              })]
            });
            break;
          }

        case 'tags':
          this.input = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              p: 1,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: [1, 2 / 12],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  children: (0,utils/* capitalize */.kC)(field.label)
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: [1, 2 / 12],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputTags/* default */.Z, InputField_objectSpread(InputField_objectSpread({}, field), {}, {
                  onChange: function onChange(entries) {
                    return field.onChange(entries.map(function (e) {
                      return e.value;
                    }));
                  }
                }))
              })]
            }), !horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              p: 1,
              children: [field.label && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  children: "".concat((0,utils/* capitalize */.kC)(field.label))
                })
              }), field.description && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                p: 1,
                children: field.description
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputTags/* default */.Z, InputField_objectSpread(InputField_objectSpread({}, field), {}, {
                  onChange: function onChange(entries) {
                    return field.onChange(entries.map(function (e) {
                      return e.value;
                    }));
                  }
                }))
              })]
            })]
          });
          break;

        case 'collective-tags':
          this.input = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              p: 1,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: [1, 2 / 12],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  children: (0,utils/* capitalize */.kC)(field.label)
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: [1, 2 / 12],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveTagsInput/* default */.Z, InputField_objectSpread(InputField_objectSpread({}, field), {}, {
                  onChange: function onChange(entries) {
                    return field.onChange(entries.map(function (e) {
                      return e.value;
                    }));
                  }
                }))
              })]
            }), !horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              p: 1,
              children: [field.label && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  children: "".concat((0,utils/* capitalize */.kC)(field.label))
                })
              }), field.description && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                p: 1,
                children: field.description
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveTagsInput/* default */.Z, InputField_objectSpread(InputField_objectSpread({}, field), {}, {
                  onChange: function onChange(entries) {
                    return field.onChange(entries.map(function (e) {
                      return e.value;
                    }));
                  }
                }))
              })]
            })]
          });
          break;

        case 'component':
          this.input = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              p: 1,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: [1, 2 / 12],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  children: (0,utils/* capitalize */.kC)(field.label)
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: [1, 10 / 12],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(field.component, InputField_objectSpread(InputField_objectSpread({
                  onChange: this.handleChange
                }, field), field.options))
              })]
            }), !horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              p: 1,
              children: [field.label && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  children: "".concat((0,utils/* capitalize */.kC)(field.label))
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                width: 1,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(field.component, InputField_objectSpread(InputField_objectSpread({
                  onChange: this.handleChange
                }, field), field.options)), field.description && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                  children: field.description
                })]
              })]
            })]
          });
          break;

        case 'location':
          this.input = /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            flexWrap: "wrap",
            p: 1,
            children: [field.label && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              width: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                children: "".concat((0,utils/* capitalize */.kC)(field.label))
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              width: 1,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_InputTypeLocation, {
                value: this.state.value || field.defaultValue,
                onChange: function onChange(event) {
                  return _this2.handleChange(event);
                },
                placeholder: field.placeholder,
                options: field.options
              }), field.description && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                children: field.description
              })]
            })]
          });
          break;

        case 'country':
          this.input = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              p: 1,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: [1, 2 / 12],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  children: (0,utils/* capitalize */.kC)(field.label)
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: [1, 10 / 12],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputTypeCountry/* default */.Z, {
                  name: field.name,
                  inputId: field.name,
                  value: field.value,
                  defaultValue: field.defaultValue,
                  onChange: this.handleChange
                })
              })]
            }), !horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              p: 1,
              children: [field.label && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  children: "".concat((0,utils/* capitalize */.kC)(field.label))
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                width: 1,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputTypeCountry/* default */.Z, {
                  name: field.name,
                  inputId: field.name,
                  value: field.value,
                  defaultValue: field.defaultValue,
                  onChange: this.handleChange
                }), field.description && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                  children: field.description
                })]
              })]
            })]
          });
          break;

        case 'currency':
          value = value || field.defaultValue;
          value = typeof value === 'number' ? value / 100 : '';
          this.input = /*#__PURE__*/(0,jsx_runtime.jsx)(FieldGroup, {
            onChange: function onChange(event) {
              return _this2.handleChange(event.target.value.length === 0 ? null : Math.round(event.target.value * 100));
            },
            type: "number",
            pre: field.pre,
            post: field.post,
            name: field.name,
            disabled: field.disabled,
            step: get_default()(field, 'options.step') || '0.01',
            min: (field.min || 0) / 100,
            label: typeof field.label === 'string' ? "".concat((0,utils/* capitalize */.kC)(field.label)) : field.label,
            help: field.description,
            placeholder: field.placeholder,
            className: "currency ".concat(field.className),
            onFocus: function onFocus(event) {
              return event.target.select();
            },
            value: value
          });
          break;

        case 'TimezonePicker':
          this.input = /*#__PURE__*/(0,jsx_runtime.jsx)(TimezonePicker/* default */.Z, {
            label: "Timezone",
            selectedTimezone: field.defaultValue,
            onChange: function onChange(timezone) {
              return _this2.handleChange(timezone.value);
            }
          });
          break;

        case 'select':
          {
            var _field$options;

            if (!field.options || field.options.length === 0) {
              // eslint-disable-next-line no-console
              console.warn('>>> InputField: options.length needs to be >= 1', field.options);
              return null;
            }

            var firstOptionValue = field.options[0].value !== undefined ? field.options[0].value : Object.keys(field.options[0])[0];
            var defaultValue;

            if (field.defaultValue) {
              var defaultOption;

              if (field.options[0].value !== undefined) {
                defaultOption = field.options.find(function (option) {
                  return option.value === field.defaultValue;
                });
                defaultValue = defaultOption;
              } else {
                defaultOption = field.options.find(function (option) {
                  return Object.keys(option)[0] === field.defaultValue;
                });
                defaultValue = {
                  key: Object.keys(defaultOption)[0],
                  value: Object.keys(defaultOption)[0],
                  label: Object.values(defaultOption)[0]
                };
              }
            } else {
              if (field.options[0].value !== undefined) {
                defaultValue = {
                  key: field.options[0].value,
                  value: field.options[0].value,
                  label: field.options[0].label
                };
              } else {
                defaultValue = {
                  key: Object.keys(field.options[0])[0],
                  value: Object.keys(field.options[0])[0],
                  label: Object.values(field.options[0])[0]
                };
              }
            }

            var StyledSelectComponent = /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, {
              inputId: "input-field-".concat(field.name),
              name: field.name,
              "data-cy": field.name,
              type: "select",
              // make sure we instantiate a new component if first value changes
              placeholder: field.placeholder,
              className: field.className,
              defaultValue: defaultValue,
              disabled: field.disabled,
              isSearchable: ((_field$options = field.options) === null || _field$options === void 0 ? void 0 : _field$options.length) > 15,
              options: field.options && field.options.map(function (option) {
                var value = option.value !== undefined ? option.value : Object.keys(option)[0];
                var label = option.label || option[value];
                return {
                  key: value,
                  value: value,
                  label: label
                };
              }),
              onChange: function onChange(option) {
                _this2.handleChange(option.value);
              }
            }, "".concat(field.name, "-").concat(firstOptionValue));

            this.input = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                  flexWrap: "wrap",
                  p: 1,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    width: [1, 2 / 12],
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                      children: (0,utils/* capitalize */.kC)(field.label)
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    width: [1, 10 / 12],
                    children: StyledSelectComponent
                  })]
                }), field.description && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                  flexWrap: "wrap",
                  p: 1,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    width: [1, 2 / 12]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    width: [1, 10 / 12],
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                      children: field.description
                    })
                  })]
                })]
              }), !horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexWrap: "wrap",
                p: 1,
                children: [field.label && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  width: 1,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                    children: "".concat((0,utils/* capitalize */.kC)(field.label))
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                  width: 1,
                  children: [StyledSelectComponent, field.description && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                    children: field.description
                  })]
                })]
              })]
            });
            break;
          }

        case 'checkbox':
          this.input = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexWrap: "wrap",
                p: 1,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  width: [1, 2 / 12],
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                    children: (0,utils/* capitalize */.kC)(field.label)
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  width: [1, 10 / 12],
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
                    name: "input-checkbox",
                    defaultChecked: field.defaultValue,
                    onChange: function onChange(event) {
                      return _this2.handleChange(event.target.checked);
                    },
                    label: field.description
                  })
                })]
              }), field.help && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexWrap: "wrap",
                p: 1,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  width: [1, 2 / 12]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  width: [1, 10 / 12],
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                    children: field.help
                  })
                })]
              })]
            }), !horizontal && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              p: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                width: 1,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
                  name: "input-checkbox",
                  defaultChecked: field.defaultValue,
                  onChange: function onChange(event) {
                    return _this2.handleChange(event.target.checked);
                  },
                  label: field.description
                }), field.help && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                  children: field.help
                })]
              })
            })]
          });
          break;

        case 'switch':
          this.input = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              p: 1,
              children: [field.label && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: [1, 2 / 12],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  children: (0,utils/* capitalize */.kC)(field.label)
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                width: [1, 10 / 12],
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputSwitch/* default */.Z, {
                  name: field.name,
                  defaultChecked: field.defaultValue,
                  onChange: function onChange(event) {
                    return _this2.handleChange(event.target.checked);
                  }
                }), field.description && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                  children: field.description
                })]
              })]
            }), !horizontal && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
              children: [field.label && /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                children: (0,utils/* capitalize */.kC)(field.label)
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "switch",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputSwitch/* default */.Z, {
                  name: field.name,
                  defaultChecked: field.defaultValue,
                  onChange: function onChange(event) {
                    return _this2.handleChange(event.target.checked);
                  }
                }), field.description && /*#__PURE__*/(0,jsx_runtime.jsx)(HelpBlock, {
                  children: field.description
                })]
              })]
            })]
          });
          break;

        default:
          {
            this.input = /*#__PURE__*/(0,jsx_runtime.jsx)(FieldGroup, {
              onChange: function onChange(event) {
                return _this2.handleChange(event.target.value);
              },
              onKeyDown: field.onKeyDown,
              type: field.type,
              pre: field.pre,
              post: field.post,
              button: field.button,
              name: field.name,
              maxLength: field.maxLength,
              disabled: field.disabled,
              label: field.label && "".concat((0,utils/* capitalize */.kC)(field.label)),
              help: field.description,
              autoFocus: field.focus,
              placeholder: field.placeholder,
              className: field.className,
              value: field.value,
              defaultValue: !isNil_default()(field.defaultValue) ? field.defaultValue : '',
              validationState: this.state.validationState,
              step: field.step,
              min: field.min,
              max: field.max,
              required: field.required,
              isPrivate: field.isPrivate,
              overflow: field.overflow,
              error: field.error
            });
            break;
          }
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(InputFieldContainer, {
        className: "inputField ".concat(this.props.className, " ").concat(this.props.name),
        children: this.input
      }, "input-".concat(this.props.name));
    }
  }]);

  return InputField;
}(react.Component);

InputField.__docgenInfo = {
  "description": "@deprecated InputField is deprecated and should be avoided for new developments.\nPlease use the `Styled*` equivalents: `StyledInput`, `StyledInputAmount`, etc.",
  "methods": [{
    "name": "validate",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "value",
      "type": null
    }],
    "returns": null
  }, {
    "name": "roundCurrencyValue",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "value",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "value",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "InputField",
  "props": {
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "label": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "object"
        }]
      },
      "required": false
    },
    "description": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "isPrivate": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "object"
        }, {
          "name": "array"
        }]
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
          "name": "object"
        }, {
          "name": "bool"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "validate": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "options": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "arrayOf",
          "value": {
            "name": "object"
          }
        }, {
          "name": "object"
        }]
      },
      "required": false
    },
    "context": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "placeholder": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "pre": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "post": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "button": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "className": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "type": {
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
      "required": true
    },
    "onKeyDown": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "overflow": {
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
    "style": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "multiple": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "closeOnSelect": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "charCount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "maxLength": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "step": {
      "description": "",
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
    "disabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "min": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "max": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "focus": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "help": {
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
    }
  }
};
/* harmony default export */ var components_InputField = (InputField);

/***/ }),

/***/ 96124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52750);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5104);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/* harmony default export */ __webpack_exports__["Z"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
  switchBase: {
    '&$checked': {
      color: '#3385ff'
    },
    '&$checked + $track': {
      backgroundColor: '#3385ff'
    }
  },
  checked: {},
  track: {}
})(function (props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread({
    color: "default"
  }, props));
}));

/***/ }),

/***/ 20634:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_TimezonePicker; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./lib/constants/timezones.js
var timezones = ['Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers', 'Africa/Asmara', 'Africa/Asmera', 'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul', 'Africa/Bissau', 'Africa/Blantyre', 'Africa/Brazzaville', 'Africa/Bujumbura', 'Africa/Cairo', 'Africa/Casablanca', 'Africa/Ceuta', 'Africa/Conakry', 'Africa/Dakar', 'Africa/Dar_es_Salaam', 'Africa/Djibouti', 'Africa/Douala', 'Africa/El_Aaiun', 'Africa/Freetown', 'Africa/Gaborone', 'Africa/Harare', 'Africa/Johannesburg', 'Africa/Juba', 'Africa/Kampala', 'Africa/Khartoum', 'Africa/Kigali', 'Africa/Kinshasa', 'Africa/Lagos', 'Africa/Libreville', 'Africa/Lome', 'Africa/Luanda', 'Africa/Lubumbashi', 'Africa/Lusaka', 'Africa/Malabo', 'Africa/Maputo', 'Africa/Maseru', 'Africa/Mbabane', 'Africa/Mogadishu', 'Africa/Monrovia', 'Africa/Nairobi', 'Africa/Ndjamena', 'Africa/Niamey', 'Africa/Nouakchott', 'Africa/Ouagadougou', 'Africa/Porto-Novo', 'Africa/Sao_Tome', 'Africa/Timbuktu', 'Africa/Tripoli', 'Africa/Tunis', 'Africa/Windhoek', 'America/Adak', 'America/Anchorage', 'America/Anguilla', 'America/Antigua', 'America/Araguaina', 'America/Argentina/Buenos_Aires', 'America/Argentina/Catamarca', 'America/Argentina/ComodRivadavia', 'America/Argentina/Cordoba', 'America/Argentina/Jujuy', 'America/Argentina/La_Rioja', 'America/Argentina/Mendoza', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta', 'America/Argentina/San_Juan', 'America/Argentina/San_Luis', 'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Aruba', 'America/Asuncion', 'America/Atikokan', 'America/Atka', 'America/Bahia', 'America/Bahia_Banderas', 'America/Barbados', 'America/Belem', 'America/Belize', 'America/Blanc-Sablon', 'America/Boa_Vista', 'America/Bogota', 'America/Boise', 'America/Buenos_Aires', 'America/Cambridge_Bay', 'America/Campo_Grande', 'America/Cancun', 'America/Caracas', 'America/Catamarca', 'America/Cayenne', 'America/Cayman', 'America/Chicago', 'America/Chihuahua', 'America/Coral_Harbour', 'America/Cordoba', 'America/Costa_Rica', 'America/Creston', 'America/Cuiaba', 'America/Curacao', 'America/Danmarkshavn', 'America/Dawson', 'America/Dawson_Creek', 'America/Denver', 'America/Detroit', 'America/Dominica', 'America/Edmonton', 'America/Eirunepe', 'America/El_Salvador', 'America/Ensenada', 'America/Fort_Nelson', 'America/Fort_Wayne', 'America/Fortaleza', 'America/Glace_Bay', 'America/Godthab', 'America/Goose_Bay', 'America/Grand_Turk', 'America/Grenada', 'America/Guadeloupe', 'America/Guatemala', 'America/Guayaquil', 'America/Guyana', 'America/Halifax', 'America/Havana', 'America/Hermosillo', 'America/Indiana/Indianapolis', 'America/Indiana/Knox', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Tell_City', 'America/Indiana/Vevay', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Indianapolis', 'America/Inuvik', 'America/Iqaluit', 'America/Jamaica', 'America/Jujuy', 'America/Juneau', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello', 'America/Knox_IN', 'America/Kralendijk', 'America/La_Paz', 'America/Lima', 'America/Los_Angeles', 'America/Louisville', 'America/Lower_Princes', 'America/Maceio', 'America/Managua', 'America/Manaus', 'America/Marigot', 'America/Martinique', 'America/Matamoros', 'America/Mazatlan', 'America/Mendoza', 'America/Menominee', 'America/Merida', 'America/Metlakatla', 'America/Mexico_City', 'America/Miquelon', 'America/Moncton', 'America/Monterrey', 'America/Montevideo', 'America/Montreal', 'America/Montserrat', 'America/Nassau', 'America/New_York', 'America/Nipigon', 'America/Nome', 'America/Noronha', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/Ojinaga', 'America/Panama', 'America/Pangnirtung', 'America/Paramaribo', 'America/Phoenix', 'America/Port-au-Prince', 'America/Port_of_Spain', 'America/Porto_Acre', 'America/Porto_Velho', 'America/Puerto_Rico', 'America/Punta_Arenas', 'America/Rainy_River', 'America/Rankin_Inlet', 'America/Recife', 'America/Regina', 'America/Resolute', 'America/Rio_Branco', 'America/Rosario', 'America/Santa_Isabel', 'America/Santarem', 'America/Santiago', 'America/Santo_Domingo', 'America/Sao_Paulo', 'America/Scoresbysund', 'America/Shiprock', 'America/Sitka', 'America/St_Barthelemy', 'America/St_Johns', 'America/St_Kitts', 'America/St_Lucia', 'America/St_Thomas', 'America/St_Vincent', 'America/Swift_Current', 'America/Tegucigalpa', 'America/Thule', 'America/Thunder_Bay', 'America/Tijuana', 'America/Toronto', 'America/Tortola', 'America/Vancouver', 'America/Virgin', 'America/Whitehorse', 'America/Winnipeg', 'America/Yakutat', 'America/Yellowknife', 'Antarctica/Casey', 'Antarctica/Davis', 'Antarctica/DumontDUrville', 'Antarctica/Macquarie', 'Antarctica/Mawson', 'Antarctica/McMurdo', 'Antarctica/Palmer', 'Antarctica/Rothera', 'Antarctica/South_Pole', 'Antarctica/Syowa', 'Antarctica/Troll', 'Antarctica/Vostok', 'Arctic/Longyearbyen', 'Asia/Aden', 'Asia/Almaty', 'Asia/Amman', 'Asia/Anadyr', 'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat', 'Asia/Ashkhabad', 'Asia/Atyrau', 'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Barnaul', 'Asia/Beirut', 'Asia/Bishkek', 'Asia/Brunei', 'Asia/Calcutta', 'Asia/Chita', 'Asia/Choibalsan', 'Asia/Chongqing', 'Asia/Chungking', 'Asia/Colombo', 'Asia/Dacca', 'Asia/Damascus', 'Asia/Dhaka', 'Asia/Dili', 'Asia/Dubai', 'Asia/Dushanbe', 'Asia/Famagusta', 'Asia/Gaza', 'Asia/Harbin', 'Asia/Hebron', 'Asia/Ho_Chi_Minh', 'Asia/Hong_Kong', 'Asia/Hovd', 'Asia/Irkutsk', 'Asia/Istanbul', 'Asia/Jakarta', 'Asia/Jayapura', 'Asia/Jerusalem', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Kashgar', 'Asia/Kathmandu', 'Asia/Katmandu', 'Asia/Khandyga', 'Asia/Kolkata', 'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuching', 'Asia/Kuwait', 'Asia/Macao', 'Asia/Macau', 'Asia/Magadan', 'Asia/Makassar', 'Asia/Manila', 'Asia/Muscat', 'Asia/Nicosia', 'Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk', 'Asia/Oral', 'Asia/Phnom_Penh', 'Asia/Pontianak', 'Asia/Pyongyang', 'Asia/Qatar', 'Asia/Qyzylorda', 'Asia/Rangoon', 'Asia/Riyadh', 'Asia/Saigon', 'Asia/Sakhalin', 'Asia/Samarkand', 'Asia/Seoul', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Srednekolymsk', 'Asia/Taipei', 'Asia/Tashkent', 'Asia/Tbilisi', 'Asia/Tehran', 'Asia/Tel_Aviv', 'Asia/Thimbu', 'Asia/Thimphu', 'Asia/Tokyo', 'Asia/Tomsk', 'Asia/Ujung_Pandang', 'Asia/Ulaanbaatar', 'Asia/Ulan_Bator', 'Asia/Urumqi', 'Asia/Ust-Nera', 'Asia/Vientiane', 'Asia/Vladivostok', 'Asia/Yakutsk', 'Asia/Yangon', 'Asia/Yekaterinburg', 'Asia/Yerevan', 'Atlantic/Azores', 'Atlantic/Bermuda', 'Atlantic/Canary', 'Atlantic/Cape_Verde', 'Atlantic/Faeroe', 'Atlantic/Faroe', 'Atlantic/Jan_Mayen', 'Atlantic/Madeira', 'Atlantic/Reykjavik', 'Atlantic/South_Georgia', 'Atlantic/St_Helena', 'Atlantic/Stanley', 'Australia/ACT', 'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Canberra', 'Australia/Currie', 'Australia/Darwin', 'Australia/Eucla', 'Australia/Hobart', 'Australia/LHI', 'Australia/Lindeman', 'Australia/Lord_Howe', 'Australia/Melbourne', 'Australia/NSW', 'Australia/North', 'Australia/Perth', 'Australia/Queensland', 'Australia/South', 'Australia/Sydney', 'Australia/Tasmania', 'Australia/Victoria', 'Australia/West', 'Australia/Yancowinna', 'Brazil/Acre', 'Brazil/DeNoronha', 'Brazil/East', 'Brazil/West', 'CET', 'CST6CDT', 'Canada/Atlantic', 'Canada/Central', 'Canada/Eastern', 'Canada/Mountain', 'Canada/Newfoundland', 'Canada/Pacific', 'Canada/Saskatchewan', 'Canada/Yukon', 'Chile/Continental', 'Chile/EasterIsland', 'Cuba', 'EET', 'EST', 'EST5EDT', 'Egypt', 'Eire', 'Etc/GMT', 'Etc/GMT+0', 'Etc/GMT+1', 'Etc/GMT+10', 'Etc/GMT+11', 'Etc/GMT+12', 'Etc/GMT+2', 'Etc/GMT+3', 'Etc/GMT+4', 'Etc/GMT+5', 'Etc/GMT+6', 'Etc/GMT+7', 'Etc/GMT+8', 'Etc/GMT+9', 'Etc/GMT-0', 'Etc/GMT-1', 'Etc/GMT-10', 'Etc/GMT-11', 'Etc/GMT-12', 'Etc/GMT-13', 'Etc/GMT-14', 'Etc/GMT-2', 'Etc/GMT-3', 'Etc/GMT-4', 'Etc/GMT-5', 'Etc/GMT-6', 'Etc/GMT-7', 'Etc/GMT-8', 'Etc/GMT-9', 'Etc/GMT0', 'Etc/Greenwich', 'Etc/UCT', 'Etc/UTC', 'Etc/Universal', 'Etc/Zulu', 'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Astrakhan', 'Europe/Athens', 'Europe/Belfast', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels', 'Europe/Bucharest', 'Europe/Budapest', 'Europe/Busingen', 'Europe/Chisinau', 'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar', 'Europe/Guernsey', 'Europe/Helsinki', 'Europe/Isle_of_Man', 'Europe/Istanbul', 'Europe/Jersey', 'Europe/Kaliningrad', 'Europe/Kiev', 'Europe/Kirov', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/London', 'Europe/Luxembourg', 'Europe/Madrid', 'Europe/Malta', 'Europe/Mariehamn', 'Europe/Minsk', 'Europe/Monaco', 'Europe/Moscow', 'Europe/Nicosia', 'Europe/Oslo', 'Europe/Paris', 'Europe/Podgorica', 'Europe/Prague', 'Europe/Riga', 'Europe/Rome', 'Europe/Samara', 'Europe/San_Marino', 'Europe/Sarajevo', 'Europe/Saratov', 'Europe/Simferopol', 'Europe/Skopje', 'Europe/Sofia', 'Europe/Stockholm', 'Europe/Tallinn', 'Europe/Tirane', 'Europe/Tiraspol', 'Europe/Ulyanovsk', 'Europe/Uzhgorod', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Volgograd', 'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Zaporozhye', 'Europe/Zurich', 'GB', 'GB-Eire', 'GMT', 'GMT+0', 'GMT-0', 'GMT0', 'Greenwich', 'HST', 'Hongkong', 'Iceland', 'Indian/Antananarivo', 'Indian/Chagos', 'Indian/Christmas', 'Indian/Cocos', 'Indian/Comoro', 'Indian/Kerguelen', 'Indian/Mahe', 'Indian/Maldives', 'Indian/Mauritius', 'Indian/Mayotte', 'Indian/Reunion', 'Iran', 'Israel', 'Jamaica', 'Japan', 'Kwajalein', 'Libya', 'MET', 'MST', 'MST7MDT', 'Mexico/BajaNorte', 'Mexico/BajaSur', 'Mexico/General', 'NZ', 'NZ-CHAT', 'Navajo', 'PRC', 'PST8PDT', 'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Bougainville', 'Pacific/Chatham', 'Pacific/Chuuk', 'Pacific/Easter', 'Pacific/Efate', 'Pacific/Enderbury', 'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Funafuti', 'Pacific/Galapagos', 'Pacific/Gambier', 'Pacific/Guadalcanal', 'Pacific/Guam', 'Pacific/Honolulu', 'Pacific/Johnston', 'Pacific/Kiritimati', 'Pacific/Kosrae', 'Pacific/Kwajalein', 'Pacific/Majuro', 'Pacific/Marquesas', 'Pacific/Midway', 'Pacific/Nauru', 'Pacific/Niue', 'Pacific/Norfolk', 'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Palau', 'Pacific/Pitcairn', 'Pacific/Pohnpei', 'Pacific/Ponape', 'Pacific/Port_Moresby', 'Pacific/Rarotonga', 'Pacific/Saipan', 'Pacific/Samoa', 'Pacific/Tahiti', 'Pacific/Tarawa', 'Pacific/Tongatapu', 'Pacific/Truk', 'Pacific/Wake', 'Pacific/Wallis', 'Pacific/Yap', 'Poland', 'Portugal', 'ROC', 'ROK', 'Singapore', 'Turkey', 'UCT', 'US/Alaska', 'US/Aleutian', 'US/Arizona', 'US/Central', 'US/East-Indiana', 'US/Eastern', 'US/Hawaii', 'US/Indiana-Starke', 'US/Michigan', 'US/Mountain', 'US/Pacific', 'US/Pacific-New', 'US/Samoa', 'UTC', 'Universal', 'W-SU', 'WET', 'Zulu'];
/* harmony default export */ var constants_timezones = (timezones);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/TimezonePicker.js








var _excluded = ["selectedTimezone", "label"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var TimezonePicker = /*#__PURE__*/function (_React$Component) {
  inherits_default()(TimezonePicker, _React$Component);

  var _super = _createSuper(TimezonePicker);

  function TimezonePicker(props) {
    var _this;

    classCallCheck_default()(this, TimezonePicker);

    _this = _super.call(this, props);
    _this.handleTimezoneChange = _this.handleTimezoneChange.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(TimezonePicker, [{
    key: "handleTimezoneChange",
    value: function handleTimezoneChange(selected) {
      this.props.onChange(selected);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          selectedTimezone = _this$props.selectedTimezone,
          label = _this$props.label,
          props = objectWithoutProperties_default()(_this$props, _excluded);

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, _objectSpread(_objectSpread({}, props), {}, {
        children: [label && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          as: "label",
          display: "block",
          color: "black.900",
          mb: 1,
          children: label
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, _objectSpread({
          inputId: "timezone-select",
          options: constants_timezones.map(function (tz) {
            return {
              label: tz,
              value: tz
            };
          }),
          defaultValue: {
            label: selectedTimezone,
            value: selectedTimezone
          },
          onChange: function onChange(selected) {
            return _this2.handleTimezoneChange(selected);
          }
        }, props))]
      }));
    }
  }]);

  return TimezonePicker;
}(react.Component);

TimezonePicker.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleTimezoneChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "selected",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "TimezonePicker",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "label": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "selectedTimezone": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_TimezonePicker = (TimezonePicker);

/***/ })

}]);
//# sourceMappingURL=7038-e00c0700158b55d9.js.map