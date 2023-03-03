(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9832],{

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

/***/ 72458:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52015);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62131);
/* harmony import */ var _components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54812);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56562);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _components_StyledCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19156);
/* harmony import */ var _components_StyledLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51082);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);













var WelcomeOptionContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(_components_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
  displayName: "welcome__WelcomeOptionContainer",
  componentId: "sc-1xxblud-0"
})(["&:hover{background-color:#f5faff;}"]);

var Welcome = function Welcome() {
  var _LoggedInUser$collect, _LoggedInUser$collect2;

  var _useLoggedInUser = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    title: intl.formatMessage({
      id: "fMZau6",
      defaultMessage: [{
        "type": 0,
        "value": "Welcome to Open Collective!"
      }]
    }),
    showFooter: false,
    showProfileAndChangelogMenu: false,
    showSearch: false,
    menuItemsV2: {
      solutions: false,
      product: false,
      company: false,
      docs: false
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      mb: "61px",
      mt: "112px",
      justifyContent: "center",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        textAlign: "center",
        flexDirection: "column",
        pr: [0, '48px'],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            src: "/static/images/oc-logo-watercolor-256.png",
            height: 96,
            width: 96
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          pt: "40px",
          pl: "16px",
          pr: ['16px', 0],
          width: ['100%', '404px'],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
            fontSize: "32px",
            fontWeight: "700",
            color: "black.900",
            lineHeight: "40px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              id: "fMZau6",
              defaultMessage: [{
                "type": 0,
                "value": "Welcome to Open Collective!"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
            fontSize: "18px",
            fontWeight: "400",
            color: "black.800",
            lineHeight: "26px",
            pt: "14px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              id: "9cMLO9",
              defaultMessage: [{
                "type": 0,
                "value": "Now that you have created your personal account, there are a couple of things you can do from here..."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_StyledCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        width: ['100%', '520px'],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        style: {
          overflow: 'visible'
        },
        mt: ['100px', 0],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          mt: "-64px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            src: "/static/images/sample-avatar.png",
            height: "128px",
            width: "128px"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
          fontSize: "24px",
          fontWeight: "700",
          color: "black.900",
          lineHeight: "32px",
          pt: "40px",
          pb: "40px",
          children: LoggedInUser === null || LoggedInUser === void 0 ? void 0 : (_LoggedInUser$collect = LoggedInUser.collective) === null || _LoggedInUser$collect === void 0 ? void 0 : _LoggedInUser$collect.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          href: "/create",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(WelcomeOptionContainer, {
            mt: "16px",
            width: ['300px', '472px'],
            borderRadius: "8px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              alignItems: "center",
              p: "13px",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                width: "386px",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "black.900",
                  lineHeight: "26px",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    id: "collective.create",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Create Collective"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black.700",
                  lineHeight: "22px",
                  pt: "14px",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    id: "5xC/JS",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Create a Collective to be able to accept donations, apply for grants, and manage your budget transparently."
                    }]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                pl: "39px",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                  src: "/static/images/right-arrow.png",
                  alt: "Right Arrow",
                  width: "22px",
                  height: "20px"
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          href: "/organizations/new",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(WelcomeOptionContainer, {
            mt: "16px",
            width: ['300px', '472px'],
            borderRadius: "8px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              alignItems: "center",
              p: "13px",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                width: "386px",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "black.900",
                  lineHeight: "26px",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    id: "organization.create",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Create Organization"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black.700",
                  lineHeight: "22px",
                  pt: "14px",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    id: "mntSey",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Create a profile for your business to appear as financial contributor, enable your employees to contribute on behalf of your company, and more."
                    }]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                pl: "39px",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                  src: "/static/images/right-arrow.png",
                  alt: "Right Arrow",
                  width: "22px",
                  height: "20px"
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          href: "/search",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(WelcomeOptionContainer, {
            mt: "16px",
            width: ['300px', '472px'],
            borderRadius: "8px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              alignItems: "center",
              p: "13px",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                width: "386px",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "black.900",
                  lineHeight: "26px",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    id: "oEensl",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Contribute and engage with more Collectives"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "black.700",
                  lineHeight: "22px",
                  pt: "14px",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    id: "JYgdfC",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Discover active Collectives in the platform, contribute and engage with the communities that represent you."
                    }]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                pl: "39px",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                  src: "/static/images/right-arrow.png",
                  alt: "Right Arrow",
                  width: "22px",
                  height: "20px"
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
          justifyContent: "space-between",
          width: ['100%', '472px'],
          pl: "13px",
          pr: "13px",
          pb: "32px",
          pt: "40px",
          children: [LoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_StyledLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            href: "".concat((_LoggedInUser$collect2 = LoggedInUser.collective) === null || _LoggedInUser$collect2 === void 0 ? void 0 : _LoggedInUser$collect2.slug, "/admin"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              id: "rqE6vX",
              defaultMessage: [{
                "type": 0,
                "value": "Go to settings"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_StyledLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            href: "/help",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              id: "IgOygF",
              defaultMessage: [{
                "type": 0,
                "value": "View documentation"
              }]
            })
          })]
        })]
      })]
    })
  });
};

Welcome.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Welcome"
};
/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

/***/ 33250:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/welcome",
      function () {
        return __webpack_require__(72458);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,8966,8027,146,5813,4842,4154,1448,9774,2888,179], function() { return __webpack_exec__(33250); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=welcome-3cc448bf3441045b.js.map