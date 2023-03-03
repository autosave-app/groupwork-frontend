"use strict";
exports.id = 3169;
exports.ids = [3169];
exports.modules = {

/***/ 53169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LoadingGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19306);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Loading = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "Loading",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, _objectSpread(_objectSpread({
      justifyContent: ['center', 'center', 'flex-start'],
      flexWrap: "wrap"
    }, props), {}, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
        py: 3,
        width: 1,
        justifyContent: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_LoadingGrid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
      })
    }))
  });
};

Loading.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Loading"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ 19306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const LoadingGrid = ({
  color,
  size
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: size,
  height: size,
  viewBox: "0 0 105 105",
  xmlns: "http://www.w3.org/2000/svg",
  fill: color,
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "12.5",
    cy: "12.5",
    r: "12.5",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "12.5",
    cy: "52.5",
    r: "12.5",
    fillOpacity: ".5",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("animate", {
      attributeName: "fill-opacity",
      begin: "100ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "52.5",
    cy: "12.5",
    r: "12.5",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("animate", {
      attributeName: "fill-opacity",
      begin: "300ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "52.5",
    cy: "52.5",
    r: "12.5",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("animate", {
      attributeName: "fill-opacity",
      begin: "600ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "92.5",
    cy: "12.5",
    r: "12.5",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("animate", {
      attributeName: "fill-opacity",
      begin: "800ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "92.5",
    cy: "52.5",
    r: "12.5",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("animate", {
      attributeName: "fill-opacity",
      begin: "400ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "12.5",
    cy: "92.5",
    r: "12.5",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("animate", {
      attributeName: "fill-opacity",
      begin: "700ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "52.5",
    cy: "92.5",
    r: "12.5",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("animate", {
      attributeName: "fill-opacity",
      begin: "500ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "92.5",
    cy: "92.5",
    r: "12.5",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("animate", {
      attributeName: "fill-opacity",
      begin: "200ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  })]
});

LoadingGrid.defaultProps = {
  color: '#3385FF',
  size: 100
};
LoadingGrid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LoadingGrid",
  "props": {
    "color": {
      "defaultValue": {
        "value": "'#3385FF'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "size": {
      "defaultValue": {
        "value": "100",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingGrid);

/***/ })

};
;