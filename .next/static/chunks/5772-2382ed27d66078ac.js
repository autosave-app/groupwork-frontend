(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5772],{

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

/***/ 97619:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44012);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25896);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);


var _excluded = ["collective", "target", "title", "noTitle", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/**
 * Create a `Link` to the collective based on collective type.
 * It properly deals with type `EVENT` and `isIncognito`
 */



var LinkCollective = function LinkCollective(_ref) {
  var collective = _ref.collective,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? undefined : _ref$target,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? undefined : _ref$title,
      _ref$noTitle = _ref.noTitle,
      noTitle = _ref$noTitle === void 0 ? false : _ref$noTitle,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? undefined : _ref$children,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  if (!collective || collective.isIncognito) {
    return children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "profile.incognito",
      defaultMessage: [{
        "type": 0,
        "value": "Incognito"
      }]
    });
  } else if (collective.isGuest) {
    if (children) {
      return children;
    } else if (collective.name === 'Guest') {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        id: "profile.guest",
        defaultMessage: [{
          "type": 0,
          "value": "Guest"
        }]
      });
    } else {
      return collective.name;
    }
  } else if (!collective.slug || collective.type === 'VENDOR') {
    return children || collective.name;
  }

  var type = collective.type,
      slug = collective.slug,
      name = collective.name,
      isIncognito = collective.isIncognito;

  if (type === 'USER' && (!name || isIncognito || !slug)) {
    return children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "profile.incognito",
      defaultMessage: [{
        "type": 0,
        "value": "Incognito"
      }]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getCollectivePageRoute */ .x0)(collective),
    title: noTitle ? null : title || name,
    target: target
  }, props), {}, {
    children: children || name || slug
  }));
};

LinkCollective.__docgenInfo = {
  "description": "Create a `Link` to the collective based on collective type.\nIt properly deals with type `EVENT` and `isIncognito`",
  "methods": [],
  "displayName": "LinkCollective",
  "props": {
    "target": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "title": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "noTitle": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Set this to true to remove the `title` attribute from the link",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "If not given, will render the name of the collective",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "collective": {
      "description": "The collective to link to",
      "type": {
        "name": "shape",
        "value": {
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
          "isIncognito": {
            "name": "bool",
            "required": false
          },
          "isGuest": {
            "name": "bool",
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
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
/* harmony default export */ __webpack_exports__["Z"] = (LinkCollective);

/***/ }),

/***/ 29242:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16678);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29925);




var AnimateBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* .keyframes */ .F4)(["0%{background-position:-100% 0;}100%{background-position:100% 0;}"]);
/**
 * A loading container that will show an animated block instead of a blank space.
 */

var LoadingPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "LoadingPlaceholder",
  componentId: "sc-bny1ps-0"
})(["animation:", " 1s linear infinite,", " 1s linear infinite;background:linear-gradient(to right,#eee 2%,#ddd 18%,#eee 33%);background-size:200%;width:100%;", " ", " ", ""], AnimateBackground, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_1__/* .flicker */ .Uh)({
  minOpacity: 0.8
}), styled_system__WEBPACK_IMPORTED_MODULE_0__/* .border */ .Cg, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .layout */ .bK, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .space */ .Dh);
LoadingPlaceholder.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)])
};
LoadingPlaceholder.defaultProps = {
  height: '100%',
  borderRadius: '2%'
};
/** @component */

/* harmony default export */ __webpack_exports__["Z"] = (LoadingPlaceholder);

/***/ }),

/***/ 67645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18721);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97619);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85893);



var _excluded = ["collective", "children", "size", "avatarSize", "p"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var CollectiveCard = function CollectiveCard(_ref) {
  var collective = _ref.collective,
      children = _ref.children,
      size = _ref.size,
      avatarSize = _ref.avatarSize,
      p = _ref.p,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var hasCustomColor = lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(collective, 'settings.collectivePage.primaryColor');

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    width: size,
    height: size,
    m: "0 auto",
    p: p,
    textAlign: "center",
    background: "white",
    border: "3px solid",
    borderColor: hasCustomColor ? 'primary.200' : '#a974c7',
    borderRadius: "50%",
    boxShadow: "0 0 14px 3px rgba(0, 0, 0, 0.24) inset"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        collective: collective,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
          collective: collective,
          radius: avatarSize
        })
      }), children]
    })
  }));
};

CollectiveCard.defaultProps = {
  size: 300,
  avatarSize: 75,
  p: 3
};
CollectiveCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollectiveCard",
  "props": {
    "size": {
      "defaultValue": {
        "value": "300",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "avatarSize": {
      "defaultValue": {
        "value": "75",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "p": {
      "defaultValue": {
        "value": "3",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
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
    "fontSize": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (CollectiveCard);

/***/ }),

/***/ 26886:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18721);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52015);



/**
 * A background for the gift card redeem(ed) pages
 */

var HappyBackground = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "HappyBackground",
  componentId: "sc-f9mmp6-0"
})(["width:100%;background-position:center top;background-repeat:no-repeat;background-size:cover;clip-path:ellipse(125% 100% at 50% 0%);padding-bottom:165px;", ""], function (_ref) {
  var theme = _ref.theme,
      collective = _ref.collective;

  if (!collective || !lodash_has__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'settings.collectivePage.primaryColor')) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* .css */ .iv)(["background:url('/static/images/redeem-hero.svg'),radial-gradient(#8a00df,#2e0044);"]);
  } else {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* .css */ .iv)(["background:url('/static/images/redeem-hero.svg'),radial-gradient(", ",", ");"], theme.colors.primary[500], theme.colors.primary[900]);
  }
});
HappyBackground.propTypes = {
  /** On optional collective with settings to get the primary color */
  collective: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    settings: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  })
};
/** @component */

/* harmony default export */ __webpack_exports__["Z"] = (HappyBackground);

/***/ })

}]);
//# sourceMappingURL=5772-2382ed27d66078ac.js.map