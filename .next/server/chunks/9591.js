"use strict";
exports.id = 9591;
exports.ids = [9591];
exports.modules = {

/***/ 99591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97079);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40777);
/* harmony import */ var _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52903);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _InputSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96124);
/* harmony import */ var _InputTypeCountry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32143);
/* harmony import */ var _InputTypeLocation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52926);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41433);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32631);
/* harmony import */ var _StyledInputTags__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10732);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(66943);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(93150);
/* harmony import */ var _TimezonePicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20634);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__, _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_6__, _InputTypeLocation__WEBPACK_IMPORTED_MODULE_10__]);
([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__, _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_6__, _InputTypeLocation__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const _excluded = ["label", "help", "pre", "post", "after", "button", "className", "isPrivate"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















const Label = ({
  label,
  isPrivate
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("label", {
  children: [label, "\xA0", isPrivate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    tooltipProps: {
      containerVerticalAlign: 'text-bottom'
    }
  })]
});

function FieldGroup(_ref) {
  let {
    label,
    help,
    pre,
    post,
    after,
    button,
    className,
    isPrivate
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const validationState = props.validationState === 'error' ? 'error' : null;
  delete props.validationState;
  props.key = props.key || props.name;

  const inputProps = _objectSpread({}, props);

  delete inputProps.children;

  if (className && className.match(/horizontal/)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      flexWrap: "wrap",
      p: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        width: [1, 2 / 12],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Label, {
          label: label,
          isPrivate: isPrivate
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        width: [1, 10 / 12],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, _objectSpread({
          prepend: pre,
          append: post,
          success: validationState,
          onWheel: e => {
            e.preventDefault();
            e.target.blur();
          }
        }, inputProps)), after && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
          className: "after",
          children: after
        }), button && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          children: button
        }), help && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
          children: help
        })]
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      flexWrap: "wrap",
      p: 1,
      children: [label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        width: 1,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Label, {
          label: label,
          isPrivate: isPrivate
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        width: 1,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, _objectSpread({
          prepend: pre,
          append: post,
          success: validationState,
          onWheel: e => {
            e.preventDefault();
            e.target.blur();
          }
        }, inputProps)), button && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          children: button
        })]
      }), help && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
        children: help
      })]
    });
  }
}

const InputFieldContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "InputField__InputFieldContainer",
  componentId: "sc-1lqr2e5-0"
})(["label{margin-top:5px;margin-bottom:5px;}.horizontal label{padding-right:15px;padding-left:15px;}"]);
const HelpBlock = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "InputField__HelpBlock",
  componentId: "sc-1lqr2e5-1"
})(["color:#737373;font-size:1.2rem;"]);
/**
 * @deprecated InputField is deprecated and should be avoided for new developments.
 * Please use the `Styled*` equivalents: `StyledInput`, `StyledInputAmount`, etc.
 */

class InputField extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      validationState: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        value: this.props.value
      });
    }
  }

  validate(value) {
    if (!value) {
      return !this.props.required;
    }

    const type = this.props.type || 'text';

    if (this.props.validate && !type.match(/^date/)) {
      return this.props.validate(value);
    }

    switch (this.props.type) {
      case 'email':
        return value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    return true;
  }

  roundCurrencyValue(value) {
    if (value === null) {
      return null;
    } else if (lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(this.props.options, 'step') === 1) {
      // Value must be an increment of 1, truncate the two last digits
      return Math.trunc(value / 100) * 100;
    }

    return value;
  }

  handleChange(value) {
    const {
      type,
      step
    } = this.props;

    if (type === 'number') {
      const parsed = step && parseFloat(step) !== 1 ? parseFloat(value) : parseInt(value);
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
      value
    });
    this.props.onChange(value);
  }

  render() {
    const field = this.props;
    let value = this.state.value;
    const horizontal = field.className && field.className.match(/horizontal/);

    switch (this.props.type) {
      case 'textarea':
        {
          value = value || this.props.defaultValue || '';
          let after;

          if (field.charCount) {
            if (field.maxLength) {
              after = `${field.maxLength - value.length} characters left`;
            } else {
              after = `${value.length} characters`;
            }
          }

          this.input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
            children: [horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
              flexWrap: "wrap",
              p: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: [1, 2 / 12],
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                  children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: [1, 10 / 12],
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                  width: "100%",
                  className: field.className,
                  onChange: event => this.handleChange(event.target.value),
                  placeholder: this.props.placeholder,
                  value: this.state.value || this.props.defaultValue || '',
                  maxLength: field.maxLength
                }), after && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                  className: "after",
                  children: after
                }), field.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
                  children: field.description
                })]
              })]
            }), !horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
              flexWrap: "wrap",
              p: 1,
              children: [field.label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: 1,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                  children: `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)}`
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: 1,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                  width: "100%",
                  className: field.className,
                  onChange: event => this.handleChange(event.target.value),
                  placeholder: this.props.placeholder,
                  value: this.state.value || this.props.defaultValue || '',
                  maxLength: field.maxLength
                }), after && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
                  className: "after",
                  children: after
                }), field.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
                  children: field.description
                })]
              })]
            })]
          });
          break;
        }

      case 'tags':
        this.input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          children: [horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexWrap: "wrap",
            p: 1,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: [1, 2 / 12],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: [1, 2 / 12],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledInputTags__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                onChange: entries => field.onChange(entries.map(e => e.value))
              }))
            })]
          }), !horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexWrap: "wrap",
            p: 1,
            children: [field.label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)}`
              })
            }), field.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
              p: 1,
              children: field.description
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledInputTags__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                onChange: entries => field.onChange(entries.map(e => e.value))
              }))
            })]
          })]
        });
        break;

      case 'collective-tags':
        this.input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          children: [horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexWrap: "wrap",
            p: 1,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: [1, 2 / 12],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: [1, 2 / 12],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                onChange: entries => field.onChange(entries.map(e => e.value))
              }))
            })]
          }), !horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexWrap: "wrap",
            p: 1,
            children: [field.label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)}`
              })
            }), field.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
              p: 1,
              children: field.description
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                onChange: entries => field.onChange(entries.map(e => e.value))
              }))
            })]
          })]
        });
        break;

      case 'component':
        this.input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          children: [horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexWrap: "wrap",
            p: 1,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: [1, 2 / 12],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: [1, 10 / 12],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(field.component, _objectSpread(_objectSpread({
                onChange: this.handleChange
              }, field), field.options))
            })]
          }), !horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexWrap: "wrap",
            p: 1,
            children: [field.label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)}`
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(field.component, _objectSpread(_objectSpread({
                onChange: this.handleChange
              }, field), field.options)), field.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
                children: field.description
              })]
            })]
          })]
        });
        break;

      case 'location':
        this.input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          flexWrap: "wrap",
          p: 1,
          children: [field.label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            width: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
              children: `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)}`
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            width: 1,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_InputTypeLocation__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              value: this.state.value || field.defaultValue,
              onChange: event => this.handleChange(event),
              placeholder: field.placeholder,
              options: field.options
            }), field.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
              children: field.description
            })]
          })]
        });
        break;

      case 'country':
        this.input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          children: [horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexWrap: "wrap",
            p: 1,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: [1, 2 / 12],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: [1, 10 / 12],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_InputTypeCountry__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                name: field.name,
                inputId: field.name,
                value: field.value,
                defaultValue: field.defaultValue,
                onChange: this.handleChange
              })
            })]
          }), !horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexWrap: "wrap",
            p: 1,
            children: [field.label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)}`
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_InputTypeCountry__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                name: field.name,
                inputId: field.name,
                value: field.value,
                defaultValue: field.defaultValue,
                onChange: this.handleChange
              }), field.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
                children: field.description
              })]
            })]
          })]
        });
        break;

      case 'currency':
        value = value || field.defaultValue;
        value = typeof value === 'number' ? value / 100 : '';
        this.input = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(FieldGroup, {
          onChange: event => {
            return this.handleChange(event.target.value.length === 0 ? null : Math.round(event.target.value * 100));
          },
          type: "number",
          pre: field.pre,
          post: field.post,
          name: field.name,
          disabled: field.disabled,
          step: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(field, 'options.step') || '0.01',
          min: (field.min || 0) / 100,
          label: typeof field.label === 'string' ? `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)}` : field.label,
          help: field.description,
          placeholder: field.placeholder,
          className: `currency ${field.className}`,
          onFocus: event => event.target.select(),
          value: value
        });
        break;

      case 'TimezonePicker':
        this.input = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_TimezonePicker__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          label: "Timezone",
          selectedTimezone: field.defaultValue,
          onChange: timezone => this.handleChange(timezone.value)
        });
        break;

      case 'select':
        {
          if (!field.options || field.options.length === 0) {
            // eslint-disable-next-line no-console
            console.warn('>>> InputField: options.length needs to be >= 1', field.options);
            return null;
          }

          const firstOptionValue = field.options[0].value !== undefined ? field.options[0].value : Object.keys(field.options[0])[0];
          let defaultValue;

          if (field.defaultValue) {
            let defaultOption;

            if (field.options[0].value !== undefined) {
              defaultOption = field.options.find(option => option.value === field.defaultValue);
              defaultValue = defaultOption;
            } else {
              defaultOption = field.options.find(option => Object.keys(option)[0] === field.defaultValue);
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

          const StyledSelectComponent = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, {
            inputId: `input-field-${field.name}`,
            name: field.name,
            "data-cy": field.name,
            type: "select",
            // make sure we instantiate a new component if first value changes
            placeholder: field.placeholder,
            className: field.className,
            defaultValue: defaultValue,
            disabled: field.disabled,
            isSearchable: field.options?.length > 15,
            options: field.options && field.options.map(option => {
              const value = option.value !== undefined ? option.value : Object.keys(option)[0];
              const label = option.label || option[value];
              return {
                key: value,
                value: value,
                label: label
              };
            }),
            onChange: option => {
              this.handleChange(option.value);
            }
          }, `${field.name}-${firstOptionValue}`);

          this.input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
            children: [horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
                flexWrap: "wrap",
                p: 1,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                  width: [1, 2 / 12],
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                    children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                  width: [1, 10 / 12],
                  children: StyledSelectComponent
                })]
              }), field.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
                flexWrap: "wrap",
                p: 1,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                  width: [1, 2 / 12]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                  width: [1, 10 / 12],
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
                    children: field.description
                  })
                })]
              })]
            }), !horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
              flexWrap: "wrap",
              p: 1,
              children: [field.label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: 1,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                  children: `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)}`
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: 1,
                children: [StyledSelectComponent, field.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
                  children: field.description
                })]
              })]
            })]
          });
          break;
        }

      case 'checkbox':
        this.input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          children: [horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
              flexWrap: "wrap",
              p: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: [1, 2 / 12],
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                  children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: [1, 10 / 12],
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  name: "input-checkbox",
                  defaultChecked: field.defaultValue,
                  onChange: event => this.handleChange(event.target.checked),
                  label: field.description
                })
              })]
            }), field.help && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
              flexWrap: "wrap",
              p: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: [1, 2 / 12]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: [1, 10 / 12],
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
                  children: field.help
                })
              })]
            })]
          }), !horizontal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexWrap: "wrap",
            p: 1,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                name: "input-checkbox",
                defaultChecked: field.defaultValue,
                onChange: event => this.handleChange(event.target.checked),
                label: field.description
              }), field.help && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
                children: field.help
              })]
            })
          })]
        });
        break;

      case 'switch':
        this.input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
          children: [horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexWrap: "wrap",
            p: 1,
            children: [field.label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: [1, 2 / 12],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: [1, 10 / 12],
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_InputSwitch__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                name: field.name,
                defaultChecked: field.defaultValue,
                onChange: event => this.handleChange(event.target.checked)
              }), field.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
                children: field.description
              })]
            })]
          }), !horizontal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
            children: [field.label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("label", {
              children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
              className: "switch",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_InputSwitch__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                name: field.name,
                defaultChecked: field.defaultValue,
                onChange: event => this.handleChange(event.target.checked)
              }), field.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(HelpBlock, {
                children: field.description
              })]
            })]
          })]
        });
        break;

      default:
        {
          this.input = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(FieldGroup, {
            onChange: event => this.handleChange(event.target.value),
            onKeyDown: field.onKeyDown,
            type: field.type,
            pre: field.pre,
            post: field.post,
            button: field.button,
            name: field.name,
            maxLength: field.maxLength,
            disabled: field.disabled,
            label: field.label && `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(field.label)}`,
            help: field.description,
            autoFocus: field.focus,
            placeholder: field.placeholder,
            className: field.className,
            value: field.value,
            defaultValue: !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(field.defaultValue) ? field.defaultValue : '',
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

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(InputFieldContainer, {
      className: `inputField ${this.props.className} ${this.props.name}`,
      children: this.input
    }, `input-${this.props.name}`);
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputField);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27943);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)({
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
})(props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread({
    color: "default"
  }, props));
}));

/***/ }),

/***/ 52926:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_material_Clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93974);
/* harmony import */ var _styled_icons_material_Clear__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Clear__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_geosuggest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48580);
/* harmony import */ var react_geosuggest__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_geosuggest__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87819);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37278);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87262);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_12__]);
_StyledInputField__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const ClearIcon = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_styled_icons_material_Clear__WEBPACK_IMPORTED_MODULE_2__.Clear).withConfig({
  displayName: "InputTypeLocation__ClearIcon",
  componentId: "sc-1l6nkqj-0"
})(["height:20px;width:20px;cursor:pointer;"]);
const GeoSuggestItem = styled_components__WEBPACK_IMPORTED_MODULE_6___default()((react_geosuggest__WEBPACK_IMPORTED_MODULE_4___default())).withConfig({
  displayName: "InputTypeLocation__GeoSuggestItem",
  componentId: "sc-1l6nkqj-1"
})([".geosuggest{font-size:18px;font-size:1rem;position:relative;text-align:left;}.geosuggest__input{min-height:36px;border:1px solid #dcdee0;border-color:#dcdee0;border-radius:4px;color:#313233;overflow:scroll;max-height:100%;min-width:0;width:100%;flex:1 1 auto;font-size:14px;line-height:1.5;overflow:scroll;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:8px;box-sizing:border-box;outline:none;background-color:#ffffff;border-color:", ";box-sizing:border-box;&:disabled{background-color:", ";cursor:not-allowed;}&:hover:not(:disabled){border-color:", ";}&:focus:not(:disabled){border-color:", ";}&::placeholder{color:", ";}}.geosuggest__suggests{top:100%;left:0;right:0;max-height:25em;padding:0;margin-top:-2px;background:#fff;border:1px solid #cccccc;border-radius:4px;border-top-width:0;overflow-x:hidden;overflow-y:auto;list-style:none;margin-top:1px;z-index:5;-webkit-transition:max-height 0.2s,border 0.2s;transition:max-height 0.2s,border 0.2s;}.geosuggest__suggests--hidden{max-height:0;overflow:hidden;border-width:0;}.geosuggest__item{font-size:12px;padding:1em 0.65em;cursor:pointer;margin:0;}.geosuggest__item:hover,.geosuggest__item:focus{background:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.300'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.50'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.300'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.400'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.100'));

class InputTypeLocation extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: props.value || {},
      eventUrlError: false
    };
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
      online: {
        id: "Location.online",
        defaultMessage: [{
          "type": 0,
          "value": "Online"
        }]
      }
    });
    this.geoSuggestRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        value: this.props.value
      });
    }
  }

  removeCountryFromAddress(address) {
    return address.split(', ').slice(0, -1).join(', ');
  }

  handleChange(value) {
    if (!value) {
      this.setState({
        value: null
      });
      return this.props.onChange(null);
    } else if (value.isOnline) {
      const location = {
        name: 'Online',
        address: value.address
      };
      this.setState({
        value: location
      });
      return this.props.onChange(location);
    }

    const countryComponent = value.gmaps['address_components'].find(c => c.types.includes('country'));
    const location = {
      // Remove country from address
      address: this.removeCountryFromAddress(value.gmaps.formatted_address),
      // Keep only the first part for location name
      name: value.label && value.label.replace(/,.+/, ''),
      // Normally returned addresses always have a country, this is just defensive
      country: countryComponent ? countryComponent['short_name'] : null,
      lat: value.location.lat,
      long: value.location.lng
    };
    this.setState({
      value: location
    });
    return this.props.onChange(location);
  }

  isAutocompleteServiceAvailable() {
    return window && Boolean(lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(window, 'google.maps.places.AutocompleteService'));
  }

  render() {
    const options = this.props.options || {};
    const autoCompleteNotAvailable = !this.isAutocompleteServiceAvailable();
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {
      children: autoCompleteNotAvailable ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        withIcon: true,
        type: "warning",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "location.googleAutocompleteService.unavailable",
          values: {
            service: 'Google Autocomplete Service',
            domain: 'maps.googleapis.com',
            lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("br", {})
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
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          position: "relative",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(GeoSuggestItem, _objectSpread({
            ref: this.geoSuggestRef,
            onSuggestSelect: event => this.handleChange(event),
            placeholder: this.props.placeholder,
            initialValue: this.props.value?.name,
            fixtures: [{
              label: this.props.intl.formatMessage(this.messages.online),
              location: {
                lat: 0,
                lng: 0
              },
              isOnline: true
            }]
          }, options)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            position: "absolute",
            top: "0.5em",
            right: "1em",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(ClearIcon, {
              onClick: () => {
                this.geoSuggestRef.current.clear();
                this.handleChange(null);
              }
            })
          })]
        }), this.state.value?.name === 'Online' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          mt: 3,
          labelProps: {
            fontWeight: '700',
            fontSize: '16px'
          },
          labelColor: "#333333",
          label: "URL (public)",
          error: this.state.eventUrlError,
          children: field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
              width: "100%",
              placeholder: "https://meet.jit.si/opencollective",
              defaultValue: this.state.value.address,
              onBlur: e => {
                if (e.target.value && !(0,validator__WEBPACK_IMPORTED_MODULE_7__.isURL)(e.target.value)) {
                  this.setState({
                    eventUrlError: true
                  });
                }
              },
              onChange: ({
                target: {
                  value
                }
              }) => {
                this.setState({
                  eventUrlError: !(0,validator__WEBPACK_IMPORTED_MODULE_7__.isURL)(value)
                });
                this.handleChange({
                  isOnline: true,
                  address: value
                });
              }
            })), this.state.eventUrlError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
              display: "block",
              color: "red.500",
              fontSize: "12px",
              mt: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                id: "InvalidURL",
                defaultMessage: [{
                  "type": 0,
                  "value": "Invalid URL. It must start with http:// or https://."
                }]
              })
            })]
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Location__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          location: this.state.value,
          showTitle: false
        })]
      })
    });
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_5__.injectIntl)(InputTypeLocation));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_TimezonePicker)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./lib/constants/timezones.js
const timezones = ['Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers', 'Africa/Asmara', 'Africa/Asmera', 'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul', 'Africa/Bissau', 'Africa/Blantyre', 'Africa/Brazzaville', 'Africa/Bujumbura', 'Africa/Cairo', 'Africa/Casablanca', 'Africa/Ceuta', 'Africa/Conakry', 'Africa/Dakar', 'Africa/Dar_es_Salaam', 'Africa/Djibouti', 'Africa/Douala', 'Africa/El_Aaiun', 'Africa/Freetown', 'Africa/Gaborone', 'Africa/Harare', 'Africa/Johannesburg', 'Africa/Juba', 'Africa/Kampala', 'Africa/Khartoum', 'Africa/Kigali', 'Africa/Kinshasa', 'Africa/Lagos', 'Africa/Libreville', 'Africa/Lome', 'Africa/Luanda', 'Africa/Lubumbashi', 'Africa/Lusaka', 'Africa/Malabo', 'Africa/Maputo', 'Africa/Maseru', 'Africa/Mbabane', 'Africa/Mogadishu', 'Africa/Monrovia', 'Africa/Nairobi', 'Africa/Ndjamena', 'Africa/Niamey', 'Africa/Nouakchott', 'Africa/Ouagadougou', 'Africa/Porto-Novo', 'Africa/Sao_Tome', 'Africa/Timbuktu', 'Africa/Tripoli', 'Africa/Tunis', 'Africa/Windhoek', 'America/Adak', 'America/Anchorage', 'America/Anguilla', 'America/Antigua', 'America/Araguaina', 'America/Argentina/Buenos_Aires', 'America/Argentina/Catamarca', 'America/Argentina/ComodRivadavia', 'America/Argentina/Cordoba', 'America/Argentina/Jujuy', 'America/Argentina/La_Rioja', 'America/Argentina/Mendoza', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta', 'America/Argentina/San_Juan', 'America/Argentina/San_Luis', 'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Aruba', 'America/Asuncion', 'America/Atikokan', 'America/Atka', 'America/Bahia', 'America/Bahia_Banderas', 'America/Barbados', 'America/Belem', 'America/Belize', 'America/Blanc-Sablon', 'America/Boa_Vista', 'America/Bogota', 'America/Boise', 'America/Buenos_Aires', 'America/Cambridge_Bay', 'America/Campo_Grande', 'America/Cancun', 'America/Caracas', 'America/Catamarca', 'America/Cayenne', 'America/Cayman', 'America/Chicago', 'America/Chihuahua', 'America/Coral_Harbour', 'America/Cordoba', 'America/Costa_Rica', 'America/Creston', 'America/Cuiaba', 'America/Curacao', 'America/Danmarkshavn', 'America/Dawson', 'America/Dawson_Creek', 'America/Denver', 'America/Detroit', 'America/Dominica', 'America/Edmonton', 'America/Eirunepe', 'America/El_Salvador', 'America/Ensenada', 'America/Fort_Nelson', 'America/Fort_Wayne', 'America/Fortaleza', 'America/Glace_Bay', 'America/Godthab', 'America/Goose_Bay', 'America/Grand_Turk', 'America/Grenada', 'America/Guadeloupe', 'America/Guatemala', 'America/Guayaquil', 'America/Guyana', 'America/Halifax', 'America/Havana', 'America/Hermosillo', 'America/Indiana/Indianapolis', 'America/Indiana/Knox', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Tell_City', 'America/Indiana/Vevay', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Indianapolis', 'America/Inuvik', 'America/Iqaluit', 'America/Jamaica', 'America/Jujuy', 'America/Juneau', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello', 'America/Knox_IN', 'America/Kralendijk', 'America/La_Paz', 'America/Lima', 'America/Los_Angeles', 'America/Louisville', 'America/Lower_Princes', 'America/Maceio', 'America/Managua', 'America/Manaus', 'America/Marigot', 'America/Martinique', 'America/Matamoros', 'America/Mazatlan', 'America/Mendoza', 'America/Menominee', 'America/Merida', 'America/Metlakatla', 'America/Mexico_City', 'America/Miquelon', 'America/Moncton', 'America/Monterrey', 'America/Montevideo', 'America/Montreal', 'America/Montserrat', 'America/Nassau', 'America/New_York', 'America/Nipigon', 'America/Nome', 'America/Noronha', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/Ojinaga', 'America/Panama', 'America/Pangnirtung', 'America/Paramaribo', 'America/Phoenix', 'America/Port-au-Prince', 'America/Port_of_Spain', 'America/Porto_Acre', 'America/Porto_Velho', 'America/Puerto_Rico', 'America/Punta_Arenas', 'America/Rainy_River', 'America/Rankin_Inlet', 'America/Recife', 'America/Regina', 'America/Resolute', 'America/Rio_Branco', 'America/Rosario', 'America/Santa_Isabel', 'America/Santarem', 'America/Santiago', 'America/Santo_Domingo', 'America/Sao_Paulo', 'America/Scoresbysund', 'America/Shiprock', 'America/Sitka', 'America/St_Barthelemy', 'America/St_Johns', 'America/St_Kitts', 'America/St_Lucia', 'America/St_Thomas', 'America/St_Vincent', 'America/Swift_Current', 'America/Tegucigalpa', 'America/Thule', 'America/Thunder_Bay', 'America/Tijuana', 'America/Toronto', 'America/Tortola', 'America/Vancouver', 'America/Virgin', 'America/Whitehorse', 'America/Winnipeg', 'America/Yakutat', 'America/Yellowknife', 'Antarctica/Casey', 'Antarctica/Davis', 'Antarctica/DumontDUrville', 'Antarctica/Macquarie', 'Antarctica/Mawson', 'Antarctica/McMurdo', 'Antarctica/Palmer', 'Antarctica/Rothera', 'Antarctica/South_Pole', 'Antarctica/Syowa', 'Antarctica/Troll', 'Antarctica/Vostok', 'Arctic/Longyearbyen', 'Asia/Aden', 'Asia/Almaty', 'Asia/Amman', 'Asia/Anadyr', 'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat', 'Asia/Ashkhabad', 'Asia/Atyrau', 'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Barnaul', 'Asia/Beirut', 'Asia/Bishkek', 'Asia/Brunei', 'Asia/Calcutta', 'Asia/Chita', 'Asia/Choibalsan', 'Asia/Chongqing', 'Asia/Chungking', 'Asia/Colombo', 'Asia/Dacca', 'Asia/Damascus', 'Asia/Dhaka', 'Asia/Dili', 'Asia/Dubai', 'Asia/Dushanbe', 'Asia/Famagusta', 'Asia/Gaza', 'Asia/Harbin', 'Asia/Hebron', 'Asia/Ho_Chi_Minh', 'Asia/Hong_Kong', 'Asia/Hovd', 'Asia/Irkutsk', 'Asia/Istanbul', 'Asia/Jakarta', 'Asia/Jayapura', 'Asia/Jerusalem', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Kashgar', 'Asia/Kathmandu', 'Asia/Katmandu', 'Asia/Khandyga', 'Asia/Kolkata', 'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuching', 'Asia/Kuwait', 'Asia/Macao', 'Asia/Macau', 'Asia/Magadan', 'Asia/Makassar', 'Asia/Manila', 'Asia/Muscat', 'Asia/Nicosia', 'Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk', 'Asia/Oral', 'Asia/Phnom_Penh', 'Asia/Pontianak', 'Asia/Pyongyang', 'Asia/Qatar', 'Asia/Qyzylorda', 'Asia/Rangoon', 'Asia/Riyadh', 'Asia/Saigon', 'Asia/Sakhalin', 'Asia/Samarkand', 'Asia/Seoul', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Srednekolymsk', 'Asia/Taipei', 'Asia/Tashkent', 'Asia/Tbilisi', 'Asia/Tehran', 'Asia/Tel_Aviv', 'Asia/Thimbu', 'Asia/Thimphu', 'Asia/Tokyo', 'Asia/Tomsk', 'Asia/Ujung_Pandang', 'Asia/Ulaanbaatar', 'Asia/Ulan_Bator', 'Asia/Urumqi', 'Asia/Ust-Nera', 'Asia/Vientiane', 'Asia/Vladivostok', 'Asia/Yakutsk', 'Asia/Yangon', 'Asia/Yekaterinburg', 'Asia/Yerevan', 'Atlantic/Azores', 'Atlantic/Bermuda', 'Atlantic/Canary', 'Atlantic/Cape_Verde', 'Atlantic/Faeroe', 'Atlantic/Faroe', 'Atlantic/Jan_Mayen', 'Atlantic/Madeira', 'Atlantic/Reykjavik', 'Atlantic/South_Georgia', 'Atlantic/St_Helena', 'Atlantic/Stanley', 'Australia/ACT', 'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Canberra', 'Australia/Currie', 'Australia/Darwin', 'Australia/Eucla', 'Australia/Hobart', 'Australia/LHI', 'Australia/Lindeman', 'Australia/Lord_Howe', 'Australia/Melbourne', 'Australia/NSW', 'Australia/North', 'Australia/Perth', 'Australia/Queensland', 'Australia/South', 'Australia/Sydney', 'Australia/Tasmania', 'Australia/Victoria', 'Australia/West', 'Australia/Yancowinna', 'Brazil/Acre', 'Brazil/DeNoronha', 'Brazil/East', 'Brazil/West', 'CET', 'CST6CDT', 'Canada/Atlantic', 'Canada/Central', 'Canada/Eastern', 'Canada/Mountain', 'Canada/Newfoundland', 'Canada/Pacific', 'Canada/Saskatchewan', 'Canada/Yukon', 'Chile/Continental', 'Chile/EasterIsland', 'Cuba', 'EET', 'EST', 'EST5EDT', 'Egypt', 'Eire', 'Etc/GMT', 'Etc/GMT+0', 'Etc/GMT+1', 'Etc/GMT+10', 'Etc/GMT+11', 'Etc/GMT+12', 'Etc/GMT+2', 'Etc/GMT+3', 'Etc/GMT+4', 'Etc/GMT+5', 'Etc/GMT+6', 'Etc/GMT+7', 'Etc/GMT+8', 'Etc/GMT+9', 'Etc/GMT-0', 'Etc/GMT-1', 'Etc/GMT-10', 'Etc/GMT-11', 'Etc/GMT-12', 'Etc/GMT-13', 'Etc/GMT-14', 'Etc/GMT-2', 'Etc/GMT-3', 'Etc/GMT-4', 'Etc/GMT-5', 'Etc/GMT-6', 'Etc/GMT-7', 'Etc/GMT-8', 'Etc/GMT-9', 'Etc/GMT0', 'Etc/Greenwich', 'Etc/UCT', 'Etc/UTC', 'Etc/Universal', 'Etc/Zulu', 'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Astrakhan', 'Europe/Athens', 'Europe/Belfast', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels', 'Europe/Bucharest', 'Europe/Budapest', 'Europe/Busingen', 'Europe/Chisinau', 'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar', 'Europe/Guernsey', 'Europe/Helsinki', 'Europe/Isle_of_Man', 'Europe/Istanbul', 'Europe/Jersey', 'Europe/Kaliningrad', 'Europe/Kiev', 'Europe/Kirov', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/London', 'Europe/Luxembourg', 'Europe/Madrid', 'Europe/Malta', 'Europe/Mariehamn', 'Europe/Minsk', 'Europe/Monaco', 'Europe/Moscow', 'Europe/Nicosia', 'Europe/Oslo', 'Europe/Paris', 'Europe/Podgorica', 'Europe/Prague', 'Europe/Riga', 'Europe/Rome', 'Europe/Samara', 'Europe/San_Marino', 'Europe/Sarajevo', 'Europe/Saratov', 'Europe/Simferopol', 'Europe/Skopje', 'Europe/Sofia', 'Europe/Stockholm', 'Europe/Tallinn', 'Europe/Tirane', 'Europe/Tiraspol', 'Europe/Ulyanovsk', 'Europe/Uzhgorod', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Volgograd', 'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Zaporozhye', 'Europe/Zurich', 'GB', 'GB-Eire', 'GMT', 'GMT+0', 'GMT-0', 'GMT0', 'Greenwich', 'HST', 'Hongkong', 'Iceland', 'Indian/Antananarivo', 'Indian/Chagos', 'Indian/Christmas', 'Indian/Cocos', 'Indian/Comoro', 'Indian/Kerguelen', 'Indian/Mahe', 'Indian/Maldives', 'Indian/Mauritius', 'Indian/Mayotte', 'Indian/Reunion', 'Iran', 'Israel', 'Jamaica', 'Japan', 'Kwajalein', 'Libya', 'MET', 'MST', 'MST7MDT', 'Mexico/BajaNorte', 'Mexico/BajaSur', 'Mexico/General', 'NZ', 'NZ-CHAT', 'Navajo', 'PRC', 'PST8PDT', 'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Bougainville', 'Pacific/Chatham', 'Pacific/Chuuk', 'Pacific/Easter', 'Pacific/Efate', 'Pacific/Enderbury', 'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Funafuti', 'Pacific/Galapagos', 'Pacific/Gambier', 'Pacific/Guadalcanal', 'Pacific/Guam', 'Pacific/Honolulu', 'Pacific/Johnston', 'Pacific/Kiritimati', 'Pacific/Kosrae', 'Pacific/Kwajalein', 'Pacific/Majuro', 'Pacific/Marquesas', 'Pacific/Midway', 'Pacific/Nauru', 'Pacific/Niue', 'Pacific/Norfolk', 'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Palau', 'Pacific/Pitcairn', 'Pacific/Pohnpei', 'Pacific/Ponape', 'Pacific/Port_Moresby', 'Pacific/Rarotonga', 'Pacific/Saipan', 'Pacific/Samoa', 'Pacific/Tahiti', 'Pacific/Tarawa', 'Pacific/Tongatapu', 'Pacific/Truk', 'Pacific/Wake', 'Pacific/Wallis', 'Pacific/Yap', 'Poland', 'Portugal', 'ROC', 'ROK', 'Singapore', 'Turkey', 'UCT', 'US/Alaska', 'US/Aleutian', 'US/Arizona', 'US/Central', 'US/East-Indiana', 'US/Eastern', 'US/Hawaii', 'US/Indiana-Starke', 'US/Michigan', 'US/Mountain', 'US/Pacific', 'US/Pacific-New', 'US/Samoa', 'UTC', 'Universal', 'W-SU', 'WET', 'Zulu'];
/* harmony default export */ const constants_timezones = (timezones);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/TimezonePicker.js
const _excluded = ["selectedTimezone", "label"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









class TimezonePicker extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.handleTimezoneChange = this.handleTimezoneChange.bind(this);
  }

  handleTimezoneChange(selected) {
    this.props.onChange(selected);
  }

  render() {
    const _this$props = this.props,
          {
      selectedTimezone,
      label
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, _objectSpread(_objectSpread({}, props), {}, {
      children: [label && /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
        as: "label",
        display: "block",
        color: "black.900",
        mb: 1,
        children: label
      }), /*#__PURE__*/jsx_runtime_.jsx(StyledSelect/* default */.ZP, _objectSpread({
        inputId: "timezone-select",
        options: constants_timezones.map(tz => ({
          label: tz,
          value: tz
        })),
        defaultValue: {
          label: selectedTimezone,
          value: selectedTimezone
        },
        onChange: selected => this.handleTimezoneChange(selected)
      }, props))]
    }));
  }

}

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
/* harmony default export */ const components_TimezonePicker = (TimezonePicker);

/***/ })

};
;