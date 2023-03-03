(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8452],{

/***/ 20731:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(88668),
    arrayIncludes = __webpack_require__(47443),
    arrayIncludesWith = __webpack_require__(1196),
    arrayMap = __webpack_require__(29932),
    baseUnary = __webpack_require__(7518),
    cacheHas = __webpack_require__(74757);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ 5976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var identity = __webpack_require__(6557),
    overRest = __webpack_require__(45357),
    setToString = __webpack_require__(30061);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


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

/***/ 91966:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseDifference = __webpack_require__(20731),
    baseFlatten = __webpack_require__(21078),
    baseRest = __webpack_require__(5976),
    isArrayLikeObject = __webpack_require__(29246);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ 29246:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArrayLike = __webpack_require__(98612),
    isObjectLike = __webpack_require__(37005);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


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

/***/ 68185:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86702);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);


var _excluded = ["error"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/**
 * A `MessageBox` specialized to display GraphQL errors.
 * Accepts all props from `MessageBox`.
 */



var MessageBoxGraphqlError = function MessageBoxGraphqlError(_ref) {
  var error = _ref.error,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    type: "error",
    withIcon: true
  }, props), {}, {
    children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .formatErrorMessage */ .jN)(intl, (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .getErrorFromGraphqlException */ .H1)(error))
  }));
};

MessageBoxGraphqlError.__docgenInfo = {
  "description": "A `MessageBox` specialized to display GraphQL errors.\nAccepts all props from `MessageBox`.",
  "methods": [],
  "displayName": "MessageBoxGraphqlError",
  "props": {
    "error": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (MessageBoxGraphqlError);

/***/ }),

/***/ 46233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ useAsyncCall; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31330);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);







var useAsyncCall = function useAsyncCall(fn) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$useErrorToast = _ref.useErrorToast,
      useErrorToast = _ref$useErrorToast === void 0 ? false : _ref$useErrorToast;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState(),
      _React$useState4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState3, 2),
      data = _React$useState4[0],
      setData = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3__.useState(),
      _React$useState6 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  var _useToasts = (0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_4__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();

  var callWith = function callWith() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var response;
      return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setError();
              setData();
              _context.prev = 3;
              _context.next = 6;
              return fn.apply(void 0, args);

            case 6:
              response = _context.sent;
              setData(response);
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              setError(_context.t0); // eslint-disable-next-line no-console

              console.error(_context.t0);

              if (useErrorToast) {
                addToast({
                  type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_4__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                  message: (0,_errors__WEBPACK_IMPORTED_MODULE_5__/* .formatErrorMessage */ .jN)(intl, _context.t0)
                });
              }

            case 15:
              _context.prev = 15;
              setLoading(false);
              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10, 15, 18]]);
    }));
  };

  var call = function call() {
    return callWith.apply(void 0, arguments)();
  };

  return {
    loading: loading,
    call: call,
    callWith: callWith,
    data: data,
    error: error
  };
};

/***/ }),

/***/ 98406:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ authorize; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/lodash/difference.js
var difference = __webpack_require__(91966);
var difference_default = /*#__PURE__*/__webpack_require__.n(difference);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/hooks/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(62131);
// EXTERNAL MODULE: ./components/EmbeddedPage.js
var EmbeddedPage = __webpack_require__(35415);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/MessageBoxGraphqlError.js
var MessageBoxGraphqlError = __webpack_require__(68185);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Check/Check.esm.js
var Check_esm = __webpack_require__(46336);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(65985);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/hooks/useAsyncCall.js
var useAsyncCall = __webpack_require__(46233);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(56562);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var index_esm = __webpack_require__(16678);
;// CONCATENATED MODULE: ./components/RadialIconContainer.js



var RadialIconContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "RadialIconContainer",
  componentId: "sc-ob2yke-0"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;", " ", " ", " ", ""], index_esm/* layout */.bK, index_esm/* flex */.fU, index_esm/* color */.$_, index_esm/* border */.Cg);
RadialIconContainer.propTypes = {
  color: (prop_types_default()).string,
  bg: (prop_types_default()).string,
  size: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};
RadialIconContainer.defaultProps = {
  color: '#ffffff'
};
/* harmony default export */ var components_RadialIconContainer = (RadialIconContainer);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/oauth/ApplicationApproveScreen.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }























var TopAvatarsContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ApplicationApproveScreen__TopAvatarsContainer",
  componentId: "sc-8fvz3d-0"
})(["display:flex;justify-content:center;align-items:center;position:absolute;top:-48px;left:0;width:100%;gap:28px;"]);
var SCOPES = {
  email: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "bU8NRa",
      defaultMessage: [{
        "type": 0,
        "value": "Access your email address."
      }]
    })
  },
  incognito: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "u1mbsP",
      defaultMessage: [{
        "type": 0,
        "value": "Access your incognito account."
      }]
    })
  },
  account: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "kIXYNi",
      defaultMessage: [{
        "type": 0,
        "value": "Manage your account, collectives and organizations."
      }]
    })
  },
  expenses: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "SQT1u9",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage expenses, payout methods."
      }]
    })
  },
  orders: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "Ny7kBI",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage contributions, payment methods."
      }]
    })
  },
  transactions: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "zu5ckP",
      defaultMessage: [{
        "type": 0,
        "value": "Refund and reject recorded transactions."
      }]
    })
  },
  virtualCards: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "n8EhFC",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage virtual cards."
      }]
    })
  },
  updates: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "USDg2A",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage updates."
      }]
    })
  },
  conversations: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "udDupO",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage conversations."
      }]
    })
  },
  webhooks: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "m2cP6g",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage webhooks."
      }]
    })
  },
  host: {
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "iHkkt+",
      defaultMessage: [{
        "type": 0,
        "value": "Administrate fiscal hosts."
      }]
    })
  }
  /* We disable those scopes for now */

  /*
  applications: {
    label: <FormattedMessage defaultMessage="Create and manage OAuth applications." />,
  },
  connectedAccounts: {
    label: <FormattedMessage defaultMessage="Create and manage connected accounts." />,
  },
  root: {
    label: <FormattedMessage defaultMessage="Perform critical administrative operations. " />,
  },
  */

};

var fetchAuthorize = function fetchAuthorize(application) {
  var redirectUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var authorizeParams = new URLSearchParams({
    /* eslint-disable camelcase */
    response_type: 'code',
    client_id: application.clientId,
    redirect_uri: redirectUri || application.redirectUri,
    state: state
    /* eslint-enable camelcase */

  });

  if (scope) {
    authorizeParams.set('scope', scope);
  }

  return fetch("/api/oauth/authorize?".concat(authorizeParams.toString()), {
    method: 'POST',
    redirect: 'manual',
    headers: _objectSpread(_objectSpread({}, (0,api/* addAuthTokenToHeader */.Pj)()), {}, {
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  });
};

var ApplicationApproveScreen = function ApplicationApproveScreen(_ref) {
  var application = _ref.application,
      redirectUri = _ref.redirectUri,
      autoApprove = _ref.autoApprove,
      state = _ref.state,
      scope = _ref.scope;

  var _useLoggedInUser = (0,useLoggedInUser/* default */.Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var intl = (0,useIntl/* default */.Z)();
  var router = (0,next_router.useRouter)();

  var _React$useState = react.useState(autoApprove),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isRedirecting = _React$useState2[0],
      setRedirecting = _React$useState2[1];

  var _useAsyncCall = (0,useAsyncCall/* useAsyncCall */.N)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var response, body;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = null;
            _context.prev = 1;
            _context.next = 4;
            return fetchAuthorize(application, redirectUri, state, scope);

          case 4:
            response = _context.sent;
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            setRedirecting(false); // To show errors with autoApprove

            throw (0,errors/* formatErrorType */.Wi)(intl, errors/* ERROR.NETWORK */.pn.NETWORK);

          case 11:
            _context.next = 13;
            return response.json();

          case 13:
            body = _context.sent;

            if (!response.ok) {
              _context.next = 23;
              break;
            }

            setRedirecting(true);

            if (!autoApprove) {
              _context.next = 20;
              break;
            }

            setTimeout(function () {
              return router.push(body['redirect_uri']);
            }, 1000);
            _context.next = 21;
            break;

          case 20:
            return _context.abrupt("return", router.push(body['redirect_uri']));

          case 21:
            _context.next = 25;
            break;

          case 23:
            setRedirecting(false); // To show errors with autoApprove

            throw new Error(body['error_description'] || body['error']);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }))),
      callAuthorize = _useAsyncCall.call,
      loading = _useAsyncCall.loading,
      error = _useAsyncCall.error;

  react.useEffect(function () {
    if (autoApprove) {
      callAuthorize();
    }
  }, []);
  var requestedScopes = scope === null || scope === void 0 ? void 0 : scope.split(',').filter(function (scope) {
    return SCOPES[scope];
  });
  var filteredScopes = Object.entries(SCOPES).filter(function (_ref3) {
    var _ref4 = slicedToArray_default()(_ref3, 1),
        scope = _ref4[0];

    return requestedScopes && requestedScopes.includes(scope);
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    position: "relative",
    mt: "48px",
    width: "100%",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard/* default */.Z, {
      maxWidth: "520px",
      width: "100%",
      px: 24,
      py: 32,
      m: "0 auto",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(TopAvatarsContainer, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          flex: "0 0 96px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
            collective: application.account,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
              size: 96,
              collective: application.account
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_RadialIconContainer, {
          flex: "0 0 40px",
          height: "40px",
          bg: "#29cc75",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Check_esm/* Check */.J, {
            width: "18px",
            height: "15px"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          flex: "0 0 96px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
            src: "/static/images/oc-oauth-connect-logo.png",
            height: 96,
            width: 96
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        pt: 56,
        children: isRedirecting ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pb: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "16px",
            fontWeight: "500",
            mb: 4,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ET/GW3",
              defaultMessage: [{
                "type": 0,
                "value": "Redirecting…"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {})]
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontWeight: "700",
            fontSize: "24px",
            textAlign: "center",
            color: "black.900",
            mb: 32,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "kP5Eb7",
              defaultMessage: [{
                "type": 1,
                "value": "applicationName"
              }, {
                "type": 0,
                "value": " wants permission to:"
              }],
              values: {
                applicationName: application.name
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
              collective: LoggedInUser.collective,
              size: 32
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
              fontSize: "16px",
              color: "black.700",
              ml: 3,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "+cR4M7",
                defaultMessage: [{
                  "type": 0,
                  "value": "Verify your identity on "
                }, {
                  "type": 1,
                  "value": "service"
                }],
                values: {
                  service: 'Open Collective'
                }
              }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("strong", {
                children: ["(", LoggedInUser.collective.name, ")"]
              })]
            })]
          }), filteredScopes.map(function (_ref5) {
            var _ref6 = slicedToArray_default()(_ref5, 2),
                scope = _ref6[0],
                label = _ref6[1].label;

            return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              alignItems: "center",
              mt: 26,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
                src: "/static/images/stars-exchange-rounded.png",
                width: 32,
                height: 32
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "16px",
                color: "black.700",
                ml: 3,
                children: label
              })]
            }, scope);
          }), filteredScopes.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
            type: "info",
            mt: 40,
            fontSize: "13px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "FmF1MA",
              defaultMessage: [{
                "type": 0,
                "value": "These permissions are granted to all the accounts you're administrating, including your personal profile."
              }]
            })
          }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
            type: "error",
            withIcon: true,
            mt: 3,
            children: error.toString()
          })]
        })
      })]
    }), !isRedirecting && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      mt: 24,
      justifyContent: "center",
      gap: "24px",
      flexWrap: "wrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        minWidth: 175,
        onClick: function onClick() {
          return window.history.back();
        },
        disabled: loading,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "actions.cancel",
          defaultMessage: [{
            "type": 0,
            "value": "Cancel"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        minWidth: 175,
        buttonStyle: "primary",
        loading: loading,
        onClick: callAuthorize,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "QwnGVY",
          defaultMessage: [{
            "type": 0,
            "value": "Authorize"
          }]
        })
      })]
    })]
  });
};
ApplicationApproveScreen.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationApproveScreen",
  "props": {
    "application": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          },
          "clientId": {
            "name": "string",
            "required": true
          },
          "redirectUri": {
            "name": "string",
            "required": true
          },
          "account": {
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
              }
            },
            "required": true
          }
        }
      },
      "required": true
    },
    "redirectUri": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "state": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "scope": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "autoApprove": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
// EXTERNAL MODULE: ./components/SignInOrJoinFree.js + 2 modules
var SignInOrJoinFree = __webpack_require__(41448);
;// CONCATENATED MODULE: ./pages/oauth/authorize.js



var _templateObject;















var applicationQuery = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  query OAuthAuthorization($clientId: String!) {\n    application(clientId: $clientId) {\n      id\n      name\n      clientId\n      redirectUri\n      account {\n        id\n        name\n        slug\n        type\n        imageUrl(height: 192)\n      }\n      oAuthAuthorization {\n        id\n        expiresAt\n        scope\n      }\n    }\n  }\n"]))); // See https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.1

var REQUIRED_URL_PARAMS = ['response_type', 'client_id'];

var isValidAuthorization = function isValidAuthorization(authorization, requestedScopes) {
  return authorization && new Date(authorization.expiresAt) > new Date() && difference_default()(requestedScopes, authorization.scope).length === 0;
};

var OAuthAuthorizePage = function OAuthAuthorizePage() {
  var _data$application;

  var _useRouter = (0,next_router.useRouter)(),
      query = _useRouter.query;

  var _useLoggedInUser = (0,useLoggedInUser/* default */.Z)(),
      loadingLoggedInUser = _useLoggedInUser.loadingLoggedInUser,
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var missingParams = REQUIRED_URL_PARAMS.filter(function (key) {
    return !query[key];
  });
  var skipQuery = missingParams.length;
  var queryVariables = {
    clientId: query['client_id']
  };
  var queryParams = {
    skip: skipQuery,
    variables: queryVariables,
    context: helpers/* API_V2_CONTEXT */.T
  };

  var _useQuery = (0,client.useQuery)(applicationQuery, queryParams),
      data = _useQuery.data,
      error = _useQuery.error,
      isLoadingAuthorization = _useQuery.loading;

  var isLoading = loadingLoggedInUser || isLoadingAuthorization;
  var requestedScopes = query.scope ? query.scope.split(',').map(function (s) {
    return s.trim();
  }) : [];
  var hasExistingAuthorization = isValidAuthorization(data === null || data === void 0 ? void 0 : (_data$application = data.application) === null || _data$application === void 0 ? void 0 : _data$application.oAuthAuthorization, requestedScopes);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(EmbeddedPage/* default */.Z, {
    title: "Authorize application",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      justifyContent: "center",
      alignItems: "center",
      py: [90, null, null, 180],
      px: 2,
      children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {}) : !LoggedInUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(SignInOrJoinFree/* default */.ZP, {
        isOAuth: true,
        oAuthApplication: data === null || data === void 0 ? void 0 : data.application
      }) : missingParams.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
        withIcon: true,
        type: "error",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "evYyQx",
          defaultMessage: [{
            "type": 0,
            "value": "Missing parameters: "
          }, {
            "type": 1,
            "value": "parameters"
          }],
          values: {
            parameters: missingParams.join(', ')
          }
        })
      }) : query['response_type'] !== 'code' ? /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
        withIcon: true,
        type: "error",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "mGSAXe",
          defaultMessage: [{
            "type": 1,
            "value": "field"
          }, {
            "type": 0,
            "value": " has invalid value \""
          }, {
            "type": 1,
            "value": "value"
          }, {
            "type": 0,
            "value": "\". Expected: \""
          }, {
            "type": 1,
            "value": "expected"
          }, {
            "type": 0,
            "value": "\""
          }],
          values: {
            field: 'response_type',
            value: query['response_type'],
            expected: 'code'
          }
        })
      }) : error ? /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBoxGraphqlError/* default */.Z, {
        error: error
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ApplicationApproveScreen, {
        application: data.application,
        redirectUri: query['redirect_uri'],
        autoApprove: hasExistingAuthorization,
        state: query['state'],
        scope: query['scope']
      })
    })
  });
};

OAuthAuthorizePage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OAuthAuthorizePage"
};
/* harmony default export */ var authorize = (OAuthAuthorizePage);

/***/ }),

/***/ 98509:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/oauth/authorize",
      function () {
        return __webpack_require__(98406);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,8966,8027,146,4154,1448,9774,2888,179], function() { return __webpack_exec__(98509); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=authorize-b0c7a3636704f7eb.js.map