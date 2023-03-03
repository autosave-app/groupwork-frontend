(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[356],{

/***/ 29750:
/***/ (function(module) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),

/***/ 74691:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseClamp = __webpack_require__(29750),
    toNumber = __webpack_require__(14841);

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;


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

/***/ 325:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CollectiveThemeProvider; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92191);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23493);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74691);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67294);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30845);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43281);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52015);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(48966);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50529);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85893);











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







/**
 * A special `ThemeProvider` that plugs the custom collective theme, defined by the color
 * from `collective.settings.collectivePage.primaryColor`.
 */



var CollectiveThemeProvider = /*#__PURE__*/function (_React$PureComponent) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(CollectiveThemeProvider, _React$PureComponent);

  var _super = _createSuper(CollectiveThemeProvider);

  function CollectiveThemeProvider() {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, CollectiveThemeProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      newPrimaryColor: null
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "adjustColorContrast", function (color) {
      var contrast = (0,polished__WEBPACK_IMPORTED_MODULE_13__/* .getContrast */ .mj)(color, '#fff');

      if (contrast >= 7) {
        return color;
      } else {
        var contrastDiff = (7 - contrast) / 21;
        return (0,polished__WEBPACK_IMPORTED_MODULE_13__/* .darken */ ._j)(contrastDiff, color);
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getTheme", (0,memoize_one__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(function (primaryColor) {
      if (!primaryColor) {
        return _lib_theme__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z;
      } else if (!(0,validator__WEBPACK_IMPORTED_MODULE_15__.isHexColor)(primaryColor)) {
        // eslint-disable-next-line no-console
        console.warn("Invalid custom color: ".concat(primaryColor));
        return _lib_theme__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z;
      } else {
        var adjustedPrimary = _this.adjustColorContrast(primaryColor);

        var luminance = (0,polished__WEBPACK_IMPORTED_MODULE_13__/* .getLuminance */ .H3)(adjustedPrimary); // Allow a deviation to up to 20% of the default luminance. Don't apply this to really
        // dark colors (luminance < 0.05)

        var luminanceAdjustment = luminance < 0.05 ? -0.1 : luminance / 5;

        var adjustLuminance = function adjustLuminance(value) {
          return (0,polished__WEBPACK_IMPORTED_MODULE_13__/* .setLightness */ .ph)(lodash_clamp__WEBPACK_IMPORTED_MODULE_9___default()(value + luminanceAdjustment, 0, 0.97), adjustedPrimary);
        };

        return (0,_lib_theme__WEBPACK_IMPORTED_MODULE_11__/* .generateTheme */ .I)({
          colors: _objectSpread(_objectSpread({}, _lib_theme__WEBPACK_IMPORTED_MODULE_11__/* ["default"].colors */ .Z.colors), {}, {
            primary: {
              900: adjustLuminance(0.1),
              800: adjustLuminance(0.2),
              700: adjustLuminance(0.3),
              600: adjustLuminance(0.42),
              500: adjustLuminance(0.5),
              400: adjustLuminance(0.6),
              300: adjustLuminance(0.65),
              200: adjustLuminance(0.72),
              100: adjustLuminance(0.92),
              50: adjustLuminance(0.97),
              base: primaryColor
            }
          })
        });
      }
    }));

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onPrimaryColorChange", lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default()(function (newPrimaryColor) {
      _this.setState({
        newPrimaryColor: newPrimaryColor
      });
    }, 2000));

    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(CollectiveThemeProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          children = _this$props.children;

      var primaryColor = this.state.newPrimaryColor || lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(collective, 'settings.collectivePage.primaryColor');

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_16__/* .ThemeProvider */ .f6, {
        theme: this.getTheme(primaryColor),
        children: typeof children === 'function' ? children({
          onPrimaryColorChange: this.onPrimaryColorChange
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: children
        })
      });
    }
  }]);

  return CollectiveThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_10__.PureComponent);


CollectiveThemeProvider.__docgenInfo = {
  "description": "A special `ThemeProvider` that plugs the custom collective theme, defined by the color\nfrom `collective.settings.collectivePage.primaryColor`.",
  "methods": [{
    "name": "adjustColorContrast",
    "docblock": "Ensures that the contrast is at least 7/1, as recommended by the [W3c](https://webaim.org/articles/contrast)",
    "modifiers": [],
    "params": [{
      "name": "color"
    }],
    "returns": null,
    "description": "Ensures that the contrast is at least 7/1, as recommended by the [W3c](https://webaim.org/articles/contrast)"
  }],
  "displayName": "CollectiveThemeProvider",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "node"
        }, {
          "name": "func"
        }]
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "settings": {
            "name": "shape",
            "value": {
              "collectivePage": {
                "name": "shape",
                "value": {
                  "primaryColor": {
                    "name": "string",
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
    }
  }
};

/***/ }),

/***/ 35415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16678);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80146);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);







var GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__/* .createGlobalStyle */ .vJ)(["body > div:first-child{height:100%;}"]);
var Main = styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"].main.withConfig */ .ZP.main.withConfig({
  displayName: "EmbeddedPage__Main",
  componentId: "sc-3msj52-0"
})(["margin:0;padding:0;height:100%;", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__/* .color */ .$_);
/**
 * A special component to render embedded pages, that makes sure we add the "no-robot" meta
 * and that the footer/topbar will not be displayed, while preserving the normal DOM structure
 * and meta.
 */

var EmbeddedPage = function EmbeddedPage(_ref) {
  var children = _ref.children,
      description = _ref.description,
      title = _ref.title,
      canonicalURL = _ref.canonicalURL,
      collective = _ref.collective,
      backgroundColor = _ref.backgroundColor;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GlobalStyles, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      title: title,
      description: description,
      canonicalURL: canonicalURL,
      collective: collective,
      withTopBar: false,
      noRobots: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Main, {
      backgroundColor: backgroundColor,
      children: children
    })]
  });
};

EmbeddedPage.defaultProps = {
  background: 'white'
};
EmbeddedPage.__docgenInfo = {
  "description": "A special component to render embedded pages, that makes sure we add the \"no-robot\" meta\nand that the footer/topbar will not be displayed, while preserving the normal DOM structure\nand meta.",
  "methods": [],
  "displayName": "EmbeddedPage",
  "props": {
    "background": {
      "defaultValue": {
        "value": "'white'",
        "computed": false
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
    "description": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "backgroundColor": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "canonicalURL": {
      "description": "",
      "type": {
        "name": "string"
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
    "title": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_3__/* .withUser */ .ns)(EmbeddedPage));

/***/ }),

/***/ 26689:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(16608);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(74806);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1808);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97079);
/* harmony import */ var _components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(325);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69078);
/* harmony import */ var _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1433);
/* harmony import */ var _components_contribution_flow_ContributionBlocker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85839);
/* harmony import */ var _components_contribution_flow_graphql_queries__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19973);
/* harmony import */ var _components_contribution_flow_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(54968);
/* harmony import */ var _components_contribution_flow_query_parameters__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(49297);
/* harmony import */ var _components_contribution_flow_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(45614);
/* harmony import */ var _components_EmbeddedPage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35415);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(73908);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(16159);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(53169);
/* harmony import */ var _components_StripeProvider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(41499);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(85893);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


























var EmbedContributionFlowPage = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(EmbedContributionFlowPage, _React$Component);

  var _super = _createSuper(EmbedContributionFlowPage);

  function EmbedContributionFlowPage() {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, EmbedContributionFlowPage);

    return _super.apply(this, arguments);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(EmbedContributionFlowPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadExternalScripts();
      var _this$props = this.props,
          router = _this$props.router,
          data = _this$props.data;
      var account = data === null || data === void 0 ? void 0 : data.account;
      var path = router.asPath;
      var rawPath = path.replace(new RegExp("^/embed/".concat(account === null || account === void 0 ? void 0 : account.slug, "/")), '/');
      (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_12__/* .addParentToURLIfMissing */ .Bc)(router, account, rawPath, null, {
        prefix: '/embed'
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var hostPath = 'data.account.host';

      if (lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(this.props, hostPath) !== lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(prevProps, hostPath)) {
        this.loadExternalScripts();
      }
    }
  }, {
    key: "loadExternalScripts",
    value: function loadExternalScripts() {
      var supportedPaymentMethods = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(this.props.data, 'account.host.supportedPaymentMethods', []);

      if (supportedPaymentMethods.includes(_lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_9__/* .GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.CREDIT_CARD */ .fY.CREDIT_CARD)) {
        this.props.loadStripe();
      }
    }
  }, {
    key: "getPageMetadata",
    value: function getPageMetadata() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          data = _this$props2.data;
      return _objectSpread(_objectSpread({}, (0,_components_contribution_flow_utils__WEBPACK_IMPORTED_MODULE_21__/* .getContributionFlowMetadata */ .Kr)(intl, data === null || data === void 0 ? void 0 : data.account, data === null || data === void 0 ? void 0 : data.tier)), {}, {
        canonicalURL: null
      });
    }
  }, {
    key: "renderPageContent",
    value: function renderPageContent() {
      var _this$props3 = this.props,
          _this$props3$data = _this$props3.data,
          data = _this$props3$data === void 0 ? {} : _this$props3$data,
          paymentFlow = _this$props3.paymentFlow,
          LoggedInUser = _this$props3.LoggedInUser;
      var account = data.account,
          tier = data.tier;
      var isCrypto = paymentFlow === _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_16__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO;

      if (data.loading) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          py: [5, 6],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {})
        });
      }

      var contributionBlocker = (0,_components_contribution_flow_ContributionBlocker__WEBPACK_IMPORTED_MODULE_17__/* .getContributionBlocker */ .Vx)(LoggedInUser, account, tier, Boolean(this.props.tierId), isCrypto);

      if (contributionBlocker) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_contribution_flow_ContributionBlocker__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
          blocker: contributionBlocker,
          account: account
        });
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
          height: "100%",
          pt: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_contribution_flow_index__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            isEmbed: true,
            collective: account,
            host: account.host,
            tier: tier,
            error: this.props.error
          })
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          data = _this$props4.data,
          queryParams = _this$props4.queryParams;

      if (!data.loading && !data.account) {
        var error = data.error ? (0,_lib_errors__WEBPACK_IMPORTED_MODULE_10__/* .getErrorFromGraphqlException */ .H1)(data.error) : (0,_lib_errors__WEBPACK_IMPORTED_MODULE_10__/* .generateNotFoundError */ .mN)(this.props.collectiveSlug);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          error: error
        });
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          collective: queryParams.useTheme ? data.account : null,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_EmbeddedPage__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            backgroundColor: queryParams.backgroundColor,
            children: this.renderPageContent()
          })
        });
      }
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query,
          res = _ref.res;

      if (res) {
        res.removeHeader('X-Frame-Options');
      }

      return {
        // Route parameters
        collectiveSlug: query.eventSlug || query.collectiveSlug,
        tierId: parseInt(query.tierId) || null,
        // Query parameters
        error: query.error,
        queryParams: _components_contribution_flow_query_parameters__WEBPACK_IMPORTED_MODULE_20__/* .EmbedContributionFlowUrlQueryHelper.decode */ .s_.decode(query)
      };
    }
  }]);

  return EmbedContributionFlowPage;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

var addAccountData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_29__/* .graphql */ .B)(_components_contribution_flow_graphql_queries__WEBPACK_IMPORTED_MODULE_18__/* .contributionFlowAccountQuery */ .T, {
  skip: function skip(props) {
    return Boolean(props.tierId);
  },
  options: function options(props) {
    return {
      variables: {
        collectiveSlug: props.collectiveSlug
      },
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .API_V2_CONTEXT */ .T
    };
  }
});
var addAccountWithTierData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_29__/* .graphql */ .B)(_components_contribution_flow_graphql_queries__WEBPACK_IMPORTED_MODULE_18__/* .contributionFlowAccountWithTierQuery */ .p, {
  skip: function skip(props) {
    return !props.tierId;
  },
  options: function options(props) {
    return {
      variables: {
        collectiveSlug: props.collectiveSlug,
        tier: {
          legacyId: props.tierId
        }
      },
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .API_V2_CONTEXT */ .T
    };
  }
});
var addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .compose */ .qC)(addAccountData, addAccountWithTierData);
EmbedContributionFlowPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query, res }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "loadExternalScripts",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getPageMetadata",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderPageContent",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EmbedContributionFlowPage",
  "props": {
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "paymentFlow": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "tierId": {
      "description": "",
      "type": {
        "name": "number"
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
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "loading": {
            "name": "bool",
            "required": false
          },
          "error": {
            "name": "any",
            "required": false
          },
          "account": {
            "name": "object",
            "required": false
          },
          "tier": {
            "name": "object",
            "required": false
          }
        }
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
    "loadStripe": {
      "description": "",
      "type": {
        "name": "func"
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
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "queryParams": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "useTheme": {
            "name": "bool",
            "required": false
          },
          "backgroundColor": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (addGraphql((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_27__/* .withUser */ .ns)((0,react_intl__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .ZP)((0,_components_StripeProvider__WEBPACK_IMPORTED_MODULE_26__/* .withStripeLoader */ .kc)((0,next_router__WEBPACK_IMPORTED_MODULE_8__.withRouter)(EmbedContributionFlowPage))))));

/***/ }),

/***/ 2721:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/embed/contribution-flow",
      function () {
        return __webpack_require__(26689);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [3662,6567,1512,8966,8027,5126,5490,2092,182,280,146,5813,4842,4154,1012,1861,7965,7653,6467,1448,6008,8092,9774,2888,179], function() { return __webpack_exec__(2721); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=contribution-flow-7f31c87abc3d6429.js.map