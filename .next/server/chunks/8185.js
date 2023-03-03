"use strict";
exports.id = 8185;
exports.ids = [8185];
exports.modules = {

/***/ 68185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12136);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37278);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["error"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * A `MessageBox` specialized to display GraphQL errors.
 * Accepts all props from `MessageBox`.
 */



const MessageBoxGraphqlError = _ref => {
  let {
    error
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    type: "error",
    withIcon: true
  }, props), {}, {
    children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_2__/* .formatErrorMessage */ .jN)(intl, (0,_lib_errors__WEBPACK_IMPORTED_MODULE_2__/* .getErrorFromGraphqlException */ .H1)(error))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageBoxGraphqlError);

/***/ })

};
;