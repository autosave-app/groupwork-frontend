"use strict";
exports.id = 6718;
exports.ids = [6718];
exports.modules = {

/***/ 36718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports getKeyExtractor, getItems */
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22133);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76918);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);


const _excluded = ["children", "id", "name", "onChange", "options", "keyGetter", "disabled", "containerProps", "labelProps", "radioSize", "data-cy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * Returns a function that will return a unique key from iteratee. As we rely on
 * <input/> only a string key is valid.
 *
 * @param {array|object} options: an options iterable
 * @param {string|function} keyGetter: a key to get value from, or an extract func
 */



const getKeyExtractor = (options, keyGetter) => {
  if (typeof keyGetter === 'function') {
    return item => keyGetter(item).toString();
  } else if (typeof keyGetter === 'string') {
    return item => item[keyGetter].toString();
  } else if (Array.isArray(options)) {
    return item => item.toString();
  } else {
    return (_item, key) => key.toString();
  }
};
const RadioInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default().input.withConfig({
  displayName: "StyledRadioList__RadioInput",
  componentId: "sc-vf87vx-0"
})(["", " &[type='radio']{margin:0;cursor:pointer;&:focus{outline:none;filter:drop-shadow(0px 0px 4px ", ");}}"], styled_system__WEBPACK_IMPORTED_MODULE_4__.size, props => props.theme.colors.primary[500]);
/**
 * Convert a list of items to an object like {key, value} to be used in selects
 * and other lists.
 *
 * @param {object[] | string[]} options a list of items to transform to be used in list
 * @param {string | func} key a string to get the unique key from objects, or
 *  a function that get passed the object and returns a key. If not passed, the
 *  JSON representation of the item will be used. This can have very bad performances
 *  impact, so we should avoid using it.
 */

const getItems = (options, keyGetter) => {
  const keyExtractor = getKeyExtractor(options, keyGetter);
  return Object.keys(options).reduce((items, key) => items.concat({
    key: keyExtractor(options[key], key),
    value: options[key]
  }), []);
};
const RadioListContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "StyledRadioList__RadioListContainer",
  componentId: "sc-vf87vx-1"
})(["& > *:first-child > *{border-radius:15px 15px 0 0;}& > *:last-child > *{border-radius:0 0 15px 15px;}"]);
/**
 * Component for controlling a list of radio inputs
 */

const StyledRadioList = _ref => {
  let {
    children,
    id,
    name,
    onChange,
    options,
    keyGetter,
    disabled,
    containerProps,
    labelProps,
    radioSize,
    'data-cy': dataCy
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: localStateSelected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.defaultValue);
  const keyExtractor = getKeyExtractor(options, keyGetter);
  const items = getItems(options, keyExtractor);
  const defaultValueStr = props.defaultValue !== undefined && props.defaultValue.toString();
  const checkedItem = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(props.value) ? props.value : localStateSelected;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(RadioListContainer, _objectSpread(_objectSpread({
    id: id,
    as: "fieldset",
    border: "none",
    m: 0,
    p: 0,
    "data-cy": dataCy
  }, containerProps), {}, {
    children: items.map(({
      value,
      key
    }, index) => {
      const isDisabled = disabled || value && value.disabled; // disable a specific option or entire options

      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        as: "label",
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        htmlFor: id && key + id,
        width: 1,
        m: 0,
        disabled: isDisabled
      }, labelProps), {}, {
        children: children({
          checked: key === checkedItem,
          index,
          key,
          value,
          radio: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(RadioInput, {
            type: "radio",
            name: name,
            id: id && key + id,
            value: key,
            size: radioSize,
            defaultChecked: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(props.defaultValue) ? undefined : defaultValueStr === key,
            checked: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(props.value) ? undefined : props.value === key,
            disabled: isDisabled // disable a specific option or entire options
            ,
            "data-cy": "radio-select",
            onChange: event => {
              event.stopPropagation();
              const target = event.target;

              const selectedItem = lodash_find__WEBPACK_IMPORTED_MODULE_1___default()(items, item => item.key === target.value);

              onChange({
                type: 'fieldset',
                name,
                key: selectedItem.key,
                value: selectedItem.value
              });
              setSelected(target.value);
            }
          })
        })
      }), key);
    })
  }));
};

const defaultChild = ({
  value,
  radio
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
  mb: 2,
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
    as: "span",
    mr: 2,
    children: radio
  }), value]
});

StyledRadioList.defaultProps = {
  children: defaultChild,
  onChange: () => {} // noop

};
StyledRadioList.displayName = 'StyledRadioList';
StyledRadioList.__docgenInfo = {
  "description": "Component for controlling a list of radio inputs",
  "methods": [],
  "displayName": "StyledRadioList",
  "props": {
    "children": {
      "defaultValue": {
        "value": "({ value, radio }) => (\n  <Box mb={2}>\n    <Box as=\"span\" mr={2}>\n      {radio}\n    </Box>\n    {value}\n  </Box>\n)",
        "computed": false
      },
      "description": "render function used to display an option\n@param {Object} props - Properties use for rendering each radio input\n@param {*} props.key - unqiue key for the option derived from `options`\n@param {*} props.value - value for the option derived from `options`\n@param {boolean} props.checked - true if the radio item is selected\n@param {number} props.index - order index of the option\n@param {Component} props.radio - radio input component",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onChange": {
      "defaultValue": {
        "value": "() => {}",
        "computed": false
      },
      "description": "event handler for when a selection is made",
      "type": {
        "name": "func"
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
          "name": "shape",
          "value": "PropTypes.shape()",
          "computed": true
        }]
      },
      "required": false
    },
    "id": {
      "description": "element id for forms",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "name": {
      "description": "element name for radio inputs",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "value": {
      "description": "for controlled components",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "object"
        }]
      },
      "required": false
    },
    "options": {
      "description": "list or map of options to display",
      "type": {
        "name": "union",
        "value": [{
          "name": "arrayOf",
          "value": {
            "name": "union",
            "value": [{
              "name": "string"
            }, {
              "name": "number"
            }, {
              "name": "shape",
              "value": "PropTypes.shape()",
              "computed": true
            }]
          }
        }, {
          "name": "objectOf",
          "value": {
            "name": "union",
            "value": [{
              "name": "string"
            }, {
              "name": "number"
            }, {
              "name": "shape",
              "value": "PropTypes.shape()",
              "computed": true
            }]
          }
        }]
      },
      "required": true
    },
    "keyGetter": {
      "description": "A key name of a getter function to extract the unique key from option",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "func"
        }]
      },
      "required": false
    },
    "containerProps": {
      "description": "To pass to the fieldset container",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "labelProps": {
      "description": "To pass to the label container",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "disabled": {
      "description": "If true, user won't be able to interact with the element",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "radioSize": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "data-cy": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledRadioList);

/***/ })

};
;