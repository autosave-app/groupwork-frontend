(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2176],{

/***/ 47415:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(29932);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ 39693:
/***/ (function(module) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),

/***/ 66604:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(89465),
    baseForOwn = __webpack_require__(47816),
    baseIteratee = __webpack_require__(67206);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


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

/***/ 52628:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseValues = __webpack_require__(47415),
    keys = __webpack_require__(3674);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ 1259:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Body; }
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52015);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Main = styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"].main.withConfig */ .ZP.main.withConfig({
  displayName: "Body__Main",
  componentId: "sc-1ucxino-0"
})(["border-top:1px solid rgb(232,233,235);"]);

var Body = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default()(Body, _React$Component);

  var _super = _createSuper(Body);

  function Body() {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, Body);

    return _super.apply(this, arguments);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(Body, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Main, {
        children: children
      });
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);


Body.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Body",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 18942:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ signin; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/lodash/mapValues.js
var mapValues = __webpack_require__(66604);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(48966);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(23493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
;// CONCATENATED MODULE: ./lib/robots-detector.js





/**
 * We don't have much information about the robots invalidating our sign in tokens yet,
 * except that they use older versions of Chrome.
 */
var isSuspiciousUserAgent = function isSuspiciousUserAgent(userAgent) {
  if (!userAgent) {
    return false;
  }

  var chromeVersionRegex = /Chrome\/(\d+)/;
  var regexResult = userAgent.match(chromeVersionRegex);

  if (!regexResult) {
    // Not Chrome
    return false;
  }

  var chromeVersion = parseInt(regexResult[1]);
  return chromeVersion <= 72;
};
/**
 * JS client-side robot detector
 */

var RobotsDetector = /*#__PURE__*/function () {
  function RobotsDetector() {
    var _this = this;

    classCallCheck_default()(this, RobotsDetector);

    defineProperty_default()(this, "watchEvent", throttle_default()(function () {
      var _this$callback;

      (_this$callback = _this.callback) === null || _this$callback === void 0 ? void 0 : _this$callback.call(_this);

      _this.stopListening();
    }, 1000, {
      trailing: false
    }));

    this.isListening = false;
    this.callback = null;
  }

  createClass_default()(RobotsDetector, [{
    key: "startListening",
    value: function startListening(callback) {
      var _this2 = this;

      this.callback = callback;

      if (!this.isListening) {
        this.isListening = true;
        RobotsDetector.WATCHED_EVENTS.forEach(function (event) {
          document.addEventListener(event, _this2.watchEvent);
        });
      }
    }
  }, {
    key: "stopListening",
    value: function stopListening() {
      var _this3 = this;

      if (this.isListening) {
        this.isListening = false;
        RobotsDetector.WATCHED_EVENTS.forEach(function (event) {
          document.removeEventListener(event, _this3.watchEvent);
        });
      }
    }
    /**
     * Watch for human activity. As soon as something is detected, stop listening & call `callback`
     */

  }]);

  return RobotsDetector;
}();

defineProperty_default()(RobotsDetector, "WATCHED_EVENTS", ['mousemove', 'keydown', 'touchstart']);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Body.js
var Body = __webpack_require__(1259);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Header.js + 9 modules
var Header = __webpack_require__(80146);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./components/LoadingGrid.js
var LoadingGrid = __webpack_require__(19306);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/SignInOrJoinFree.js + 2 modules
var SignInOrJoinFree = __webpack_require__(41448);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./pages/signin.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



















var SigninPage = /*#__PURE__*/function (_React$Component) {
  inherits_default()(SigninPage, _React$Component);

  var _super = _createSuper(SigninPage);

  function SigninPage(props) {
    var _this;

    classCallCheck_default()(this, SigninPage);

    _this = _super.call(this, props);
    _this.robotsDetector = new RobotsDetector();
    _this.state = {
      error: null,
      success: null,
      isRobot: props.isSuspiciousUserAgent,
      redirecting: false
    };
    return _this;
  }

  createClass_default()(SigninPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.isRobot) {
        this.robotsDetector.startListening(function () {
          return _this2.setState({
            isRobot: false
          });
        });
      } else {
        this.initialize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(oldProps, oldState) {
        var wasConnected, next, redirect, user;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wasConnected = !oldProps.LoggedInUser && this.props.LoggedInUser;

                if (!(oldState.isRobot && !this.state.isRobot)) {
                  _context.next = 5;
                  break;
                }

                this.initialize();
                _context.next = 19;
                break;

              case 5:
                if (!(wasConnected && !this.props.errorLoggedInUser && this.props.form !== 'create-account')) {
                  _context.next = 14;
                  break;
                }

                // --- User logged in ---
                this.setState({
                  success: true,
                  redirecting: true
                }); // Avoid redirect loop: replace '/signin' redirects by '/'

                next = this.props.next;
                redirect = next && (next.match(/^\/?signin[?/]?/) || next.match(/^\/?reset-password[?/]?/)) ? null : next;
                _context.next = 11;
                return this.props.router.replace(redirect || '/');

              case 11:
                window.scroll(0, 0);
                _context.next = 19;
                break;

              case 14:
                if (!(this.props.token && oldProps.token !== this.props.token)) {
                  _context.next = 19;
                  break;
                }

                _context.next = 17;
                return this.props.login(this.props.token);

              case 17:
                user = _context.sent;

                if (!user) {
                  this.setState({
                    error: 'Token rejected'
                  });
                }

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate(_x, _x2) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.robotsDetector.stopListening();
    }
  }, {
    key: "initialize",
    value: function () {
      var _initialize = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2() {
        var user;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.props.token) {
                  _context2.next = 17;
                  break;
                }

                _context2.prev = 1;
                _context2.next = 4;
                return this.props.login(this.props.token);

              case 4:
                user = _context2.sent;

                if (user) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 8;
                return this.props.login();

              case 8:
                user = _context2.sent;

              case 9:
                // If there's no user at this point, there's no chance we can login
                if (!user) {
                  this.setState({
                    error: 'Token rejected'
                  });
                }

                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](1);
                this.setState({
                  error: _context2.t0.message || _context2.t0
                });

              case 15:
                _context2.next = 18;
                break;

              case 17:
                this.props.login();

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 12]]);
      }));

      function initialize() {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }()
  }, {
    key: "getRoutes",
    value: function getRoutes() {
      var next = this.props.next;
      var routes = {
        signin: '/signin',
        join: '/create-account'
      };

      if (!next) {
        return routes;
      } else {
        var urlParams = "?next=".concat(encodeURIComponent(next));
        return mapValues_default()(routes, function (route) {
          return "".concat(route).concat(urlParams);
        });
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          loadingLoggedInUser = _this$props.loadingLoggedInUser,
          errorLoggedInUser = _this$props.errorLoggedInUser,
          token = _this$props.token,
          next = _this$props.next,
          form = _this$props.form,
          LoggedInUser = _this$props.LoggedInUser;

      if (this.state.isRobot && token) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          alignItems: "center",
          px: 3,
          pb: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "30px",
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              role: "img",
              "aria-label": "Robot Emoji",
              children: "\uD83E\uDD16"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            mb: 5,
            textAlign: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "checkingBrowser",
              defaultMessage: [{
                "type": 0,
                "value": "Your browser is being verified. If this message doesn't disappear, try to move your mouse or to touch your screen for mobile."
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {})]
        });
      } else if ((loadingLoggedInUser || this.state.success) && token) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {});
      } else if (!loadingLoggedInUser && LoggedInUser && form === 'create-account') {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
          type: "warning",
          withIcon: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "createAccount.alreadyLoggedIn",
            defaultMessage: [{
              "type": 0,
              "value": "It seems like you're already signed in as \""
            }, {
              "type": 1,
              "value": "email"
            }, {
              "type": 0,
              "value": "\". If you want to create a new account, please log out first."
            }],
            values: {
              email: LoggedInUser.email
            }
          })
        });
      }

      var error = errorLoggedInUser || this.state.error;

      if (loadingLoggedInUser || this.state.redirecting || token && !error) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingGrid/* default */.Z, {});
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [error && !error.includes('Two-factor authentication is enabled') && /*#__PURE__*/(0,jsx_runtime.jsxs)(MessageBox/* default */.Z, {
          type: "error",
          withIcon: true,
          mb: 4,
          "data-cy": "signin-message-box",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "login.failed",
              defaultMessage: [{
                "type": 0,
                "value": "Sign In failed: "
              }, {
                "type": 1,
                "value": "message"
              }, {
                "type": 0,
                "value": "."
              }],
              values: {
                message: error
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), !(error !== null && error !== void 0 && error.includes('Two-factor authentication')) && /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "login.askAnother",
            defaultMessage: [{
              "type": 0,
              "value": "You can ask for a new sign in link using the form below."
            }]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(SignInOrJoinFree/* default */.ZP, {
          email: this.props.email,
          redirect: next || '/',
          form: form,
          routes: this.getRoutes()
        })]
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "LoginPage",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header/* default */.Z, {
          title: this.props.form === 'signin' ? 'Sign In' : 'Create Account',
          description: "Create your profile on Open Collective and show the world the open collectives that you are contributing to.",
          menuItems: {
            solutions: false,
            product: false,
            company: false,
            docs: false
          },
          showSearch: false,
          showProfileAndChangelogMenu: false
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Body/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            flexDirection: "column",
            alignItems: "center",
            my: [4, 6],
            p: 2,
            children: this.renderContent()
          })
        })]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var _ref$query = _ref.query,
          token = _ref$query.token,
          next = _ref$query.next,
          form = _ref$query.form,
          email = _ref$query.email,
          req = _ref.req;

      // Decode next URL if URI encoded
      if (next && next.startsWith('%2F')) {
        next = decodeURIComponent(next);
      }

      next = next && (0,utils/* isValidRelativeUrl */.s5)(next) ? next : null;
      email = email && decodeURIComponent(email);
      return {
        token: token,
        next: next,
        form: form || 'signin',
        isSuspiciousUserAgent: isSuspiciousUserAgent(req === null || req === void 0 ? void 0 : req.get('User-Agent')),
        email: email && (0,validator.isEmail)(email) ? email : null
      };
    }
  }]);

  return SigninPage;
}(react.Component);

SigninPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { token, next, form, email }, req }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "initialize",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "getRoutes",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderContent",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "SigninPage",
  "props": {
    "form": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'signin'",
          "computed": false
        }, {
          "value": "'create-account'",
          "computed": false
        }]
      },
      "required": true
    },
    "token": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "email": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "next": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "login": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "errorLoggedInUser": {
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
    "isSuspiciousUserAgent": {
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
    }
  }
};
/* harmony default export */ var signin = ((0,UserProvider/* withUser */.ns)((0,router.withRouter)(SigninPage)));

/***/ }),

/***/ 87752:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/signin",
      function () {
        return __webpack_require__(18942);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,8966,8027,146,4154,1448,9774,2888,179], function() { return __webpack_exec__(87752); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=signin-754e4417d4a147aa.js.map