(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1022],{

/***/ 68597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": function() { return /* binding */ Support; }
/* harmony export */ });
/* unused harmony export SupportDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Support = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"
  }));
});
Support.displayName = 'Support';
var SupportDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 46422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ Redo; }
/* harmony export */ });
/* unused harmony export RedoDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Redo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
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
    d: "M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2l-17.6-17.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8 229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3 163.8-62.5 226.3 0l17.2 17.2z"
  }));
});
Redo.displayName = 'Redo';
var RedoDimensions = {
  height: 512,
  width: 512
};

/***/ }),

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

/***/ 54812:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(44012);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53169);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86702);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84842);
/* harmony import */ var _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41448);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85893);







var _excluded = ["LoggedInUser", "loadingLoggedInUser"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










/**
 * A wrapper around `Page` that will display a spinner while user is loading.
 * If authentication fails, users will be prompted with a form to login that will
 * redirect them to the correct page once they do.
 *
 * Unless a `noRobots={true}` is provided, pages wrapped with this helper will not be indexed
 * by default.
 *
 * ## Usage
 *
 * ```jsx
 * <AuthenticatedPage>
 *   {(LoggedInUser) => (
 *     <div>
 *       Hello {LoggedInUser.collective.name}!
 *     </div>
 *   )}
 * </AuthenticatedPage>
 * ```
 */




var AuthenticatedPage = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4___default()(AuthenticatedPage, _React$Component);

  var _super = _createSuper(AuthenticatedPage);

  function AuthenticatedPage() {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, AuthenticatedPage);

    return _super.apply(this, arguments);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(AuthenticatedPage, [{
    key: "renderContent",
    value: function renderContent(loadingLoggedInUser, LoggedInUser) {
      if (!LoggedInUser) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          display: "flex",
          justifyContent: "center",
          py: [5, null, 6],
          px: 2,
          children: loadingLoggedInUser ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Loading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
            flexDirection: "column",
            alignItems: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              type: "warning",
              mb: 4,
              maxWidth: 400,
              withIcon: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                id: "authorization.loginRequired",
                defaultMessage: [{
                  "type": 0,
                  "value": "You need to be logged in to continue."
                }]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
              defaultForm: "signin",
              disableSignup: this.props.disableSignup
            })]
          })
        });
      } else if (this.props.rootOnly && !LoggedInUser.isRoot) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          flexDirection: "column",
          alignItems: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            type: "warning",
            my: [5, 6, 7],
            maxWidth: 400,
            withIcon: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              id: "AuthenticatedPage.RootOnly",
              defaultMessage: [{
                "type": 0,
                "value": "This page is limited to site administrators"
              }]
            })
          })
        });
      } else if (typeof this.props.children === 'function') {
        return this.props.children(LoggedInUser);
      } else {
        return this.props.children;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          LoggedInUser = _this$props.LoggedInUser,
          loadingLoggedInUser = _this$props.loadingLoggedInUser,
          pageProps = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, _excluded);

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Page__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        noRobots: true
      }, pageProps), {}, {
        children: this.renderContent(loadingLoggedInUser, LoggedInUser)
      }));
    }
  }]);

  return AuthenticatedPage;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

AuthenticatedPage.__docgenInfo = {
  "description": "A wrapper around `Page` that will display a spinner while user is loading.\nIf authentication fails, users will be prompted with a form to login that will\nredirect them to the correct page once they do.\n\nUnless a `noRobots={true}` is provided, pages wrapped with this helper will not be indexed\nby default.\n\n## Usage\n\n```jsx\n<AuthenticatedPage>\n  {(LoggedInUser) => (\n    <div>\n      Hello {LoggedInUser.collective.name}!\n    </div>\n  )}\n</AuthenticatedPage>\n```",
  "methods": [{
    "name": "renderContent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "loadingLoggedInUser",
      "type": null
    }, {
      "name": "LoggedInUser",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "AuthenticatedPage",
  "props": {
    "children": {
      "description": "A child renderer to call when user is properly authenticated",
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "node"
        }]
      },
      "required": false
    },
    "disableSignup": {
      "description": "Whether user can signup on this page",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "rootOnly": {
      "description": "Whether this page is limited to root users",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "loadingLoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_14__/* .withUser */ .ns)(AuthenticatedPage));

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

/***/ 10878:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ hasRoleDescription; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86896);
/* harmony import */ var _lib_constants_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98216);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88705);


var _defineMessages;





var ROLES_DETAILS = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _lib_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ADMIN */ .Z.ADMIN, {
  id: "+Qi39W",
  defaultMessage: [{
    "type": 8,
    "value": "strong",
    "children": [{
      "type": 0,
      "value": "Admins"
    }]
  }, {
    "type": 0,
    "value": " can edit settings, approve expenses, and receive activity notifications (such as when a new expense is submitted). They are the active managers of a Collective."
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _lib_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MEMBER */ .Z.MEMBER, {
  id: "O8duLC",
  defaultMessage: [{
    "type": 8,
    "value": "strong",
    "children": [{
      "type": 0,
      "value": "Core Contributors"
    }]
  }, {
    "type": 0,
    "value": " are shown as part of the team on your page but do not have admin access or get notifications. They do not play an active role on the platform."
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _lib_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT, {
  id: "OdjT4O",
  defaultMessage: [{
    "type": 8,
    "value": "strong",
    "children": [{
      "type": 0,
      "value": "Accountants"
    }]
  }, {
    "type": 0,
    "value": " have read-only access to non-public data, uploaded files, and reports for record-keeping purposes. They cannot make changes and are not shown on your page."
  }]
}), _defineMessages));
var hasRoleDescription = function hasRoleDescription(role) {
  return Boolean(ROLES_DETAILS[role]);
};

var MemberRoleDescription = function MemberRoleDescription(_ref) {
  var role = _ref.role;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  return hasRoleDescription(role) ? intl.formatMessage(ROLES_DETAILS[role], _I18nFormatters__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP) : null;
};

MemberRoleDescription.propTypes = {
  role: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(Object.values(_lib_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z))
};
/* harmony default export */ __webpack_exports__["Z"] = (MemberRoleDescription);

/***/ }),

/***/ 66465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59448);
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98216);


var _defineMessages;



var RolesTranslations = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].HOST */ .Z.HOST, {
  id: "Member.Role.HOST",
  defaultMessage: [{
    "type": 0,
    "value": "Host"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ADMIN */ .Z.ADMIN, {
  id: "Member.Role.ADMIN",
  defaultMessage: [{
    "type": 0,
    "value": "Admin"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MEMBER */ .Z.MEMBER, {
  id: "Member.Role.MEMBER",
  defaultMessage: [{
    "type": 0,
    "value": "Core Contributor"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONTRIBUTOR */ .Z.CONTRIBUTOR, {
  id: "Member.Role.CONTRIBUTOR",
  defaultMessage: [{
    "type": 0,
    "value": "Contributor"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].BACKER */ .Z.BACKER, {
  id: "Member.Role.BACKER",
  defaultMessage: [{
    "type": 0,
    "value": "Financial Contributor"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ATTENDEE */ .Z.ATTENDEE, {
  id: "Member.Role.ATTENDEE",
  defaultMessage: [{
    "type": 0,
    "value": "Attendee"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].FOLLOWER */ .Z.FOLLOWER, {
  id: "Member.Role.FOLLOWER",
  defaultMessage: [{
    "type": 0,
    "value": "Follower"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT, {
  id: "Member.Role.ACCOUNTANT",
  defaultMessage: [{
    "type": 0,
    "value": "Accountant"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_COLLECTIVE */ .Z.CONNECTED_COLLECTIVE, {
  id: "Member.Role.ConnectedAccount",
  defaultMessage: [{
    "type": 0,
    "value": "Connected"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_ACCOUNT */ .Z.CONNECTED_ACCOUNT, {
  id: "Member.Role.ConnectedAccount",
  defaultMessage: [{
    "type": 0,
    "value": "Connected"
  }]
}), _defineMessages));
/**
 * Translate a member role
 *
 * @param {func} `formatMessage` - see `injectIntl` or `useIntl`
 * @param {string} `role` - see `roles`
 */

var formatMemberRole = function formatMemberRole(intl, role) {
  var i18nMsg = RolesTranslations[role];
  return i18nMsg ? intl.formatMessage(i18nMsg) : role;
};

/* harmony default export */ __webpack_exports__["Z"] = (formatMemberRole);

/***/ }),

/***/ 5893:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ member_invitations; }
});

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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/components/Query.js
var Query = __webpack_require__(75412);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/AuthenticatedPage.js
var AuthenticatedPage = __webpack_require__(54812);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./lib/constants/roles.js
var roles = __webpack_require__(98216);
// EXTERNAL MODULE: ./lib/i18n/member-role.js
var member_role = __webpack_require__(66465);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/MemberRoleDescription.js
var MemberRoleDescription = __webpack_require__(10878);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/StyledTag.js
var StyledTag = __webpack_require__(36422);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/ReplyToMemberInvitationCard.js




var _templateObject;

























var messages = (0,react_intl_lib.defineMessages)({
  emailDetails: {
    id: "MemberInvitation.detailsEmail",
    defaultMessage: [{
      "type": 0,
      "value": "If you accept, your email address will be visible to other admins."
    }]
  },
  decline: {
    id: "Decline",
    defaultMessage: [{
      "type": 0,
      "value": "Decline"
    }]
  },
  accept: {
    id: "Accept",
    defaultMessage: [{
      "type": 0,
      "value": "Accept"
    }]
  },
  accepted: {
    id: "Invitation.Accepted",
    defaultMessage: [{
      "type": 0,
      "value": "Accepted"
    }]
  },
  declined: {
    id: "Invitation.Declined",
    defaultMessage: [{
      "type": 0,
      "value": "Declined"
    }]
  }
});
var replyToMemberInvitationMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation ReplyToMemberInvitation($invitation: MemberInvitationReferenceInput!, $accept: Boolean!) {\n    replyToMemberInvitation(invitation: $invitation, accept: $accept)\n  }\n"])));
/**
 * A card with actions for users to accept or decline an invitation to join the members
 * of a collective.
 */

var ReplyToMemberInvitationCard = function ReplyToMemberInvitationCard(_ref) {
  var _invitation$account$h;

  var invitation = _ref.invitation,
      isSelected = _ref.isSelected,
      refetchLoggedInUser = _ref.refetchLoggedInUser,
      redirectOnAccept = _ref.redirectOnAccept;
  var intl = (0,useIntl/* default */.Z)();
  var formatMessage = intl.formatMessage;
  var router = (0,next_router.useRouter)();
  var hostTermsUrl = (_invitation$account$h = invitation.account.host) === null || _invitation$account$h === void 0 ? void 0 : _invitation$account$h.termsUrl;

  var _React$useState = react.useState(!hostTermsUrl),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      acceptedTOS = _React$useState2[0],
      setAcceptedTOS = _React$useState2[1]; // Automatically accepts the TOS if there is no TOS URL


  var _React$useState3 = react.useState(),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      accepted = _React$useState4[0],
      setAccepted = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      isSubmitting = _React$useState6[0],
      setSubmitting = _React$useState6[1];

  var _useMutation = (0,client.useMutation)(replyToMemberInvitationMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      sendReplyToInvitation = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      error = _useMutation2$.error,
      data = _useMutation2$.data;

  var isDisabled = isSubmitting;
  var hasReplied = data && typeof data.replyToMemberInvitation !== 'undefined';

  var buildReplyToInvitation = function buildReplyToInvitation(accept) {
    return /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSubmitting(true);
              setAccepted(accept);
              _context.next = 4;
              return sendReplyToInvitation({
                variables: {
                  invitation: {
                    id: invitation.id
                  },
                  accept: accept
                }
              });

            case 4:
              _context.next = 6;
              return refetchLoggedInUser();

            case 6:
              if (!(accept && redirectOnAccept)) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return router.push("/".concat(invitation.account.slug));

            case 9:
              setSubmitting(false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard/* default */.Z, {
    id: "invitation-".concat(invitation.id),
    p: 3,
    width: "100%",
    maxWidth: 400,
    borderColor: isSelected ? 'primary.300' : undefined,
    "data-cy": "member-invitation-card",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
      collective: invitation.account,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexDirection: "column",
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
          collective: invitation.account
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
          textAlign: "center",
          children: invitation.account.name
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        textAlign: "center",
        children: invitation.inviter ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "MemberInvitation.detailsInviter",
          defaultMessage: [{
            "type": 0,
            "value": "Invited by "
          }, {
            "type": 1,
            "value": "inviter"
          }, {
            "type": 0,
            "value": " on "
          }, {
            "type": 1,
            "value": "date"
          }],
          values: {
            inviter: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
              collective: invitation.inviter
            }),
            date: (0,utils/* formatDate */.p6)(invitation.createdAt, {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })
          }
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "MemberInvitation.detailsDate",
          defaultMessage: [{
            "type": 0,
            "value": "Invited on "
          }, {
            "type": 1,
            "value": "date"
          }],
          values: {
            date: (0,utils/* formatDate */.p6)(invitation.createdAt, {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })
          }
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, {
      textTransform: "uppercase",
      children: (0,member_role/* default */.Z)(intl, invitation.role)
    }), (0,MemberRoleDescription/* hasRoleDescription */.T)(invitation.role) && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      my: 3,
      px: 2,
      color: "black.600",
      lineHeight: "18px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(MemberRoleDescription/* default */.Z, {
        role: invitation.role
      })
    }), hasReplied && !isSubmitting ? /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      mt: 4,
      color: accepted ? 'green.500' : 'red.500',
      textAlign: "center",
      mb: 2,
      fontWeight: "bold",
      children: accepted ? "\u2714\uFE0F ".concat(formatMessage(messages.accepted)) : "\u274C\uFE0F ".concat(formatMessage(messages.declined))
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
        my: 3,
        type: "info",
        withIcon: true,
        children: formatMessage(messages.emailDetails)
      }), Boolean(hostTermsUrl) && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mb: 3,
        mt: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
          onChange: function onChange(_ref3) {
            var checked = _ref3.checked;
            return setAcceptedTOS(checked);
          },
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.tosCheckBoxLabel",
            defaultMessage: [{
              "type": 0,
              "value": "I agree with the "
            }, {
              "type": 8,
              "value": "TOSLink",
              "children": [{
                "type": 0,
                "value": "terms of fiscal sponsorship"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              TOSLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: invitation.account.host.termsUrl,
                openInNewTabNoFollow: true,
                onClick: function onClick(e) {
                  return e.stopPropagation();
                } // don't check the checkbox when clicking on the link

              })
            }
          })
        })
      }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
        type: "error",
        withIcon: true,
        my: 3,
        children: (0,errors/* i18nGraphqlException */.t2)(intl, error)
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        mt: 4,
        justifyContent: "space-evenly",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          mx: 2,
          minWidth: 150,
          disabled: isDisabled,
          loading: isSubmitting && accepted === false,
          onClick: buildReplyToInvitation(false),
          "data-cy": "member-invitation-decline-btn",
          children: formatMessage(messages.decline)
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          mx: 2,
          minWidth: 150,
          buttonStyle: "primary",
          disabled: isDisabled || !acceptedTOS,
          loading: isSubmitting && accepted === true,
          onClick: buildReplyToInvitation(true),
          "data-cy": "member-invitation-accept-btn",
          children: formatMessage(messages.accept)
        })]
      })]
    })]
  });
};

ReplyToMemberInvitationCard.__docgenInfo = {
  "description": "A card with actions for users to accept or decline an invitation to join the members\nof a collective.",
  "methods": [],
  "displayName": "ReplyToMemberInvitationCard",
  "props": {
    "isSelected": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "invitation": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "role": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(roles)",
            "required": false
          },
          "account": {
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
              "host": {
                "name": "shape",
                "value": {
                  "name": {
                    "name": "string",
                    "required": false
                  },
                  "termsUrl": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "inviter": {
            "name": "shape",
            "value": {
              "name": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "createdAt": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "refetchLoggedInUser": {
      "description": "@ignore form withUser",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "redirectOnAccept": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_ReplyToMemberInvitationCard = ((0,UserProvider/* withUser */.ns)(ReplyToMemberInvitationCard));
;// CONCATENATED MODULE: ./components/MemberInvitationsList.js





/**
 * Displays a `ReplyToMemberInvitationCard` list, scrolling to the given selected
 * element on mount.
 */



var MemberInvitationsList = function MemberInvitationsList(_ref) {
  var invitations = _ref.invitations,
      selectedInvitationId = _ref.selectedInvitationId;
  react.useEffect(function () {
    if (selectedInvitationId) {
      var elem = document.getElementById("invitation-".concat(selectedInvitationId));

      if (elem) {
        var elemTop = elem.getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: elemTop - 100,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  if (invitations.length === 0) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
      type: "info",
      withIcon: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "MemberInvitations.none",
        defaultMessage: [{
          "type": 0,
          "value": "No pending invitations"
        }]
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
    flexDirection: "column",
    alignItems: "center",
    children: invitations.map(function (invitation) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mb: 5,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_ReplyToMemberInvitationCard, {
          invitation: invitation,
          isSelected: invitation.id === selectedInvitationId,
          redirectOnAccept: invitations.length === 1
        })
      }, invitation.id);
    })
  });
};

MemberInvitationsList.__docgenInfo = {
  "description": "Displays a `ReplyToMemberInvitationCard` list, scrolling to the given selected\nelement on mount.",
  "methods": [],
  "displayName": "MemberInvitationsList",
  "props": {
    "invitations": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "selectedInvitationId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_MemberInvitationsList = (MemberInvitationsList);
;// CONCATENATED MODULE: ./pages/member-invitations.js







var member_invitations_templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }















var memberInvitationsPageQuery = (0,lib/* default */.ZP)(member_invitations_templateObject || (member_invitations_templateObject = taggedTemplateLiteral_default()(["\n  query MemberInvitationsPage($memberAccount: AccountReferenceInput!) {\n    memberInvitations(memberAccount: $memberAccount) {\n      id\n      inviter {\n        id\n        slug\n        name\n        type\n      }\n      createdAt\n      role\n      description\n      account {\n        id\n        slug\n        name\n        type\n        imageUrl\n        isHost\n        ... on AccountWithHost {\n          host {\n            id\n            name\n            termsUrl\n          }\n        }\n      }\n    }\n  }\n"])));
/**
 * The main page to display collectives. Wrap route parameters and GraphQL query
 * to render `components/collective-page` with everything needed.
 */

var MemberInvitationsPage = /*#__PURE__*/function (_React$Component) {
  inherits_default()(MemberInvitationsPage, _React$Component);

  var _super = _createSuper(MemberInvitationsPage);

  function MemberInvitationsPage() {
    classCallCheck_default()(this, MemberInvitationsPage);

    return _super.apply(this, arguments);
  }

  createClass_default()(MemberInvitationsPage, [{
    key: "getSelectedInvitationIdFromRoute",
    value: function getSelectedInvitationIdFromRoute() {
      try {
        var hash = window.location.hash;
        var regex = /invitation-(\d+)/;
        var idStr = regex.exec(hash)[1];
        var idInt = parseInt(idStr);
        return idInt || null;
      } catch (_unused) {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/(0,jsx_runtime.jsx)(AuthenticatedPage/* default */.Z, {
        title: "Pending invitations",
        disableSignup: true,
        children: function children(LoggedInUser) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Query/* Query */.A, {
            query: memberInvitationsPageQuery,
            variables: {
              memberAccount: {
                slug: LoggedInUser.collective.slug
              }
            },
            fetchPolicy: "network-only",
            context: helpers/* API_V2_CONTEXT */.T,
            children: function children(_ref) {
              var data = _ref.data,
                  error = _ref.error,
                  loading = _ref.loading;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                background: "linear-gradient(180deg, #EBF4FF, #FFFFFF)",
                py: [4, 5, 6],
                px: [2, 3, 4],
                children: loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
                    mb: 5,
                    textAlign: "center",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "MemberInvitations.title",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Pending invitations"
                      }]
                    })
                  }), !data || !data.memberInvitations || error ? /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
                    type: "error",
                    withIcon: true,
                    children: (0,errors/* getErrorFromGraphqlException */.H1)(error).message
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_MemberInvitationsList, {
                    invitations: data.memberInvitations,
                    selectedInvitationId: _this.getSelectedInvitationIdFromRoute()
                  })]
                })
              });
            }
          });
        }
      });
    }
  }]);

  return MemberInvitationsPage;
}(react.Component);

MemberInvitationsPage.__docgenInfo = {
  "description": "The main page to display collectives. Wrap route parameters and GraphQL query\nto render `components/collective-page` with everything needed.",
  "methods": [{
    "name": "getSelectedInvitationIdFromRoute",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "MemberInvitationsPage"
};
/* harmony default export */ var member_invitations = (MemberInvitationsPage);

/***/ }),

/***/ 58518:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/member-invitations",
      function () {
        return __webpack_require__(5893);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,8966,8027,146,5813,4842,4154,1448,9774,2888,179], function() { return __webpack_exec__(58518); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=member-invitations-c313ba6e46ba6e4e.js.map