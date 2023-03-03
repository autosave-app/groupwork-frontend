(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9589],{

/***/ 85173:
/***/ (function(module) {

module.exports = "/_next/static/images/EmptyCollectivePageIllustration-d18b0162a4f6b3182b299a03d0456351.png";

/***/ }),

/***/ 14338:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_HorizontalScroller; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/ArrowBack/ArrowBack.esm.js
var ArrowBack_esm = __webpack_require__(7742);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/ArrowForward/ArrowForward.esm.js
var ArrowForward_esm = __webpack_require__(7883);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// CONCATENATED MODULE: ./lib/ui-utils.js


/**
 * A debouncer for scroll functions. It is configured to trigger on trailing and
 * leading calls with a max wait of 100 to ensure everything stays responsive.
 */
var debounceScroll = function debounceScroll(func) {
  return debounce_default()(func, 100, {
    maxWait: 100,
    leading: true,
    trailing: true
  });
};
// EXTERNAL MODULE: ./lib/withViewport.js
var withViewport = __webpack_require__(74387);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/HorizontalScroller.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }












var RefContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HorizontalScroller__RefContainer",
  componentId: "sc-1mtsz4p-0"
})(["display:flex;overflow-x:auto;scroll-behavior:smooth;max-width:100%;", ""], function (props) {
  return props.hideScrollbar && (0,styled_components_browser_esm/* css */.iv)(["scrollbar-width:none;-ms-overflow-style:none;overflow:-moz-scrollbars-none;&::-webkit-scrollbar{display:none;}"]);
});
var ControlsContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "HorizontalScroller__ControlsContainer",
  componentId: "sc-1mtsz4p-1"
})(["z-index:10;position:absolute;top:", ";pointer-events:none;justify-content:space-between;width:100%;"], function (props) {
  return props.controlsTopPosition ? "".concat(props.controlsTopPosition, "%") : '50%';
});
var ArrowContainer = (0,styled_components_browser_esm/* default */.ZP)(StyledRoundButton/* default */.Z).withConfig({
  displayName: "HorizontalScroller__ArrowContainer",
  componentId: "sc-1mtsz4p-2"
})(["transition:opacity 0.25s ease-in,visibility 0.25s;visibility:", ";opacity:", ";pointer-events:auto;svg{height:40px;padding 7px;}"], function (props) {
  return props.isVisible ? 'visible' : 'hidden';
}, function (props) {
  return props.isVisible ? '1' : '0';
});
/**
 * Helper to display a list of horizontally scrollable items, with two little
 * carets to navigate easily.
 */

var HorizontalScroller = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(HorizontalScroller, _React$PureComponent);

  var _super = _createSuper(HorizontalScroller);

  function HorizontalScroller(props) {
    var _this;

    classCallCheck_default()(this, HorizontalScroller);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "updateScrollInfo", debounceScroll(function () {
      if (!_this.ref.current) {
        return;
      }

      var _this$ref$current = _this.ref.current,
          offsetWidth = _this$ref$current.offsetWidth,
          scrollLeft = _this$ref$current.scrollLeft,
          scrollWidth = _this$ref$current.scrollWidth;

      _this.setState({
        canGoPrev: scrollLeft > 0,
        canGoNext: scrollLeft + offsetWidth < scrollWidth
      });
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "onPrevClick", function () {
      if (_this.ref.current) {
        _this.ref.current.scrollLeft -= _this.getScrollDistance();
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onNextClick", function () {
      if (_this.ref.current) {
        _this.ref.current.scrollLeft += _this.getScrollDistance();
      }
    });

    _this.ref = /*#__PURE__*/react.createRef();
    _this.state = {
      canGoPrev: false,
      canGoNext: false
    };
    return _this;
  }

  createClass_default()(HorizontalScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ref.current) {
        this.ref.current.addEventListener('scroll', this.updateScrollInfo, {
          passive: true
        });
        this.updateScrollInfo();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateScrollInfo();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.ref.current) {
        this.ref.current.removeEventListener('scroll', this.updateScrollInfo);
      }
    }
  }, {
    key: "getScrollDistance",
    value: function getScrollDistance() {
      var offsetWidth = this.ref.current.offsetWidth;

      if (this.props.getScrollDistance) {
        return this.props.getScrollDistance(offsetWidth);
      } else {
        // Default behavior: scroll by 75% of the full width
        var scrollPercentage = 0.75;
        return scrollPercentage * offsetWidth;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          canGoPrev = _this$state.canGoPrev,
          canGoNext = _this$state.canGoNext;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        position: "relative",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ControlsContainer, {
          px: [2, null, 5],
          controlsTopPosition: this.props.controlsTopPosition,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowContainer, {
            isVisible: canGoPrev,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowBack_esm/* ArrowBack */.x, {
              onMouseDown: canGoPrev ? this.onPrevClick : undefined
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowContainer, {
            isVisible: canGoNext,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowForward_esm/* ArrowForward */.Z, {
              onMouseDown: canGoNext ? this.onNextClick : undefined
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RefContainer, _objectSpread(_objectSpread({}, this.props.containerProps), {}, {
          as: this.props.container,
          ref: this.ref,
          children: this.props.children
        }))]
      });
    }
  }]);

  return HorizontalScroller;
}(react.PureComponent); // We don't use the data from `withViewport`, but we use it to update the
// component when the window's width changes.


HorizontalScroller.__docgenInfo = {
  "description": "Helper to display a list of horizontally scrollable items, with two little\ncarets to navigate easily.",
  "methods": [{
    "name": "onPrevClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onNextClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getScrollDistance",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "HorizontalScroller",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "container": {
      "description": "Container component where the list (children) will be inserted",
      "type": {
        "name": "elementType"
      },
      "required": false
    },
    "containerProps": {
      "description": "Passed to `container`",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "getScrollDistance": {
      "description": "Callback to get the scrolled distance when we click on prev/next controllers",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "width": {
      "description": "@ignore from withViewport",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "controlsTopPosition": {
      "description": "Set the top position of the arrows. Defaults 50%",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_HorizontalScroller = ((0,withViewport/* default */.ZP)(HorizontalScroller, {
  withWidth: true
}));

/***/ }),

/***/ 37070:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gw": function() { return /* binding */ DROPZONE_ACCEPT_IMAGES; },
/* harmony export */   "bQ": function() { return /* binding */ DROPZONE_ACCEPT_ALL; }
/* harmony export */ });
/* unused harmony export DROPZONE_ACCEPT_PDF */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57557);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(28687);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71387);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55162);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52015);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(57632);
/* harmony import */ var _lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82055);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88705);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(771);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89669);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85893);




var _excluded = ["onSuccess", "onReject", "children", "isLoading", "loadingProgress", "minHeight", "size", "fontSize", "mockImageGenerator", "accept", "minSize", "maxSize", "name", "error", "value", "isMulti", "kind"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var DROPZONE_ACCEPT_IMAGES = {
  'image/*': ['.jpeg', '.png']
};
var DROPZONE_ACCEPT_PDF = {
  'application/pdf': ['.pdf']
};
var DROPZONE_ACCEPT_ALL = _objectSpread(_objectSpread({}, DROPZONE_ACCEPT_IMAGES), DROPZONE_ACCEPT_PDF);
var Dropzone = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "StyledDropzone__Dropzone",
  componentId: "sc-979d5c-0"
})(["border:1px dashed #c4c7cc;border-radius:10px;text-align:center;background:white;display:flex;justify-content:center;align-items:center;overflow:hidden;", " ", " img{max-height:100%;max-width:100%;}"], function (props) {
  return props.onClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_13__/* .css */ .iv)(["cursor:pointer;&:hover:not(:disabled){background:#f9f9f9;border-color:", ";}&:focus{outline:0;border-color:", ";}"], function (props) {
    return props.theme.colors.primary[300];
  }, function (props) {
    return props.theme.colors.primary[500];
  });
}, function (props) {
  return props.error && (0,styled_components__WEBPACK_IMPORTED_MODULE_13__/* .css */ .iv)(["border:1px solid ", ";"], props.theme.colors.red[500]);
});
var ReplaceContainer = styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "StyledDropzone__ReplaceContainer",
  componentId: "sc-979d5c-1"
})(["box-sizing:border-box;background:rgba(49,50,51,0.5);color:#ffffff;cursor:pointer;position:absolute;display:flex;align-items:center;justify-content:center;width:100%;height:24px;padding:8px;margin-top:-24px;font-size:12px;line-height:1em;&:hover{background:rgba(49,50,51,0.6);}"]);
/**
 * A dropzone to upload one or multiple files
 */

var StyledDropzone = function StyledDropzone(_ref) {
  var onSuccess = _ref.onSuccess,
      onReject = _ref.onReject,
      children = _ref.children,
      isLoading = _ref.isLoading,
      loadingProgress = _ref.loadingProgress,
      minHeight = _ref.minHeight,
      size = _ref.size,
      fontSize = _ref.fontSize,
      mockImageGenerator = _ref.mockImageGenerator,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      name = _ref.name,
      error = _ref.error,
      value = _ref.value,
      isMulti = _ref.isMulti,
      kind = _ref.kind,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _excluded);

  var imgUploaderParams = {
    isMulti: isMulti,
    mockImageGenerator: mockImageGenerator,
    onSuccess: onSuccess,
    onReject: onReject,
    kind: kind
  };

  var _useImageUploader = (0,_lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_5__/* .useImageUploader */ .w)(imgUploaderParams),
      uploadFiles = _useImageUploader.uploadFiles,
      isUploading = _useImageUploader.isUploading,
      uploadProgress = _useImageUploader.uploadProgress;

  var dropzoneParams = {
    accept: accept,
    minSize: minSize,
    maxSize: maxSize,
    multiple: isMulti,
    onDrop: uploadFiles
  };

  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_14__.useDropzone)(dropzoneParams),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;

  minHeight = size || minHeight;
  var innerMinHeight = minHeight - 2; // -2 To account for the borders

  var dropProps = getRootProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(Dropzone, _objectSpread(_objectSpread(_objectSpread({}, props), value ? lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(dropProps, ['onClick']) : dropProps), {}, {
    minHeight: size || minHeight,
    size: size,
    error: error,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", _objectSpread({
      name: name
    }, getInputProps())), isLoading || isUploading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      size: "100%",
      minHeight: innerMinHeight,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        size: innerMinHeight,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledSpinner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          size: "70%"
        })
      }), isUploading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        fontSize: "9px",
        children: [uploadProgress, "%"]
      }), isLoading && !lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(loadingProgress) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [loadingProgress, "%"]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      position: "relative",
      children: isDragActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        color: "primary.500",
        fontSize: "12px",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          mb: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_15__/* .Download */ .U, {
            size: 20
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          id: "StyledDropzone.DropMsg",
          defaultMessage: [{
            "type": 0,
            "value": "Drop "
          }, {
            "type": 6,
            "value": "count",
            "options": {
              "one": {
                "value": [{
                  "type": 0,
                  "value": "file"
                }]
              },
              "other": {
                "value": [{
                  "type": 0,
                  "value": "files"
                }]
              }
            },
            "offset": 0,
            "pluralType": "cardinal"
          }, {
            "type": 0,
            "value": " here"
          }],
          values: {
            count: isMulti ? 2 : 1
          }
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [!value ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          color: error ? 'red.500' : 'black.500',
          px: 2,
          fontSize: fontSize,
          children: error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_17__/* .ExclamationCircle */ .b, {
              color: "#E03F6A",
              size: 16
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
              fontWeight: 600,
              ml: 1,
              children: error
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("br", {})]
          }) : isMulti ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            id: "DropZone.UploadBox",
            defaultMessage: [{
              "type": 0,
              "value": "Drag and drop one or multiple files or "
            }, {
              "type": 8,
              "value": "i18n-link",
              "children": [{
                "type": 0,
                "value": "click here to select"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              'i18n-link': (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* .getI18nLink */ .fw)()
            }
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            id: "DragAndDropOrClickToUpload",
            defaultMessage: [{
              "type": 0,
              "value": "Drag & drop or "
            }, {
              "type": 8,
              "value": "i18n-link",
              "children": [{
                "type": 0,
                "value": "click to upload"
              }]
            }],
            values: {
              'i18n-link': (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* .getI18nLink */ .fw)()
            },
            tagName: "span"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            size: size,
            url: value,
            border: "none"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ReplaceContainer, {
            onClick: dropProps.onClick,
            role: "button",
            tabIndex: 0,
            onKeyDown: function onKeyDown(event) {
              if (event.key === 'Enter') {
                event.preventDefault();
                dropProps.onClick();
              }
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              id: "Image.Replace",
              defaultMessage: [{
                "type": 0,
                "value": "Replace"
              }]
            })
          })]
        }), children]
      })
    })]
  }));
};

StyledDropzone.defaultProps = {
  minHeight: 96,
  mockImageGenerator: function mockImageGenerator() {
    return "https://loremflickr.com/120/120?lock=".concat((0,uuid__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)());
  },
  isMulti: true,
  fontSize: '14px'
};
StyledDropzone.__docgenInfo = {
  "description": "A dropzone to upload one or multiple files",
  "methods": [],
  "displayName": "StyledDropzone",
  "props": {
    "minHeight": {
      "defaultValue": {
        "value": "96",
        "computed": false
      },
      "description": "Min height of the container",
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
    "mockImageGenerator": {
      "defaultValue": {
        "value": "() => `https://loremflickr.com/120/120?lock=${uuid()}`",
        "computed": false
      },
      "description": "A function to generate mock images",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isMulti": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Whether the dropzone should accept multiple files",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "fontSize": {
      "defaultValue": {
        "value": "'14px'",
        "computed": false
      },
      "description": "Font size used for the default messages",
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
    "onSuccess": {
      "description": "Called back with the uploaded files on success",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "name": {
      "description": "Name for the input",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onReject": {
      "description": "Called back with the rejectd files",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "children": {
      "description": "Content to show inside the dropzone. Defaults to message \"Drag and drop one or...\"",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "isLoading": {
      "description": "Force loading state to be displayed",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "loadingProgress": {
      "description": "Use this to override the loading progress indicator",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "size": {
      "description": "To have square container",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "accept": {
      "description": "Filetypes to accept",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "minSize": {
      "description": "Min file size",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "maxSize": {
      "description": "Max file size",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "error": {
      "description": "A truthy/falsy value defining if the field has an error (ie. if it's required)",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "required": {
      "description": "required field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "value": {
      "description": "if set, the image will be displayed and a \"replace\" banner will be added",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "kind": {
      "description": "A unique identified for the category of uploaded files",
      "type": {
        "name": "string"
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["ZP"] = (StyledDropzone);

/***/ }),

/***/ 92582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39138);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);




/**
 * A tooltip that truncates a value if it's longer than the
 * provided length.
 */



var TruncatedTextWithTooltip = function TruncatedTextWithTooltip(_ref) {
  var value = _ref.value,
      cursor = _ref.cursor,
      _ref$length = _ref.length,
      length = _ref$length === void 0 ? 30 : _ref$length;

  if ((value === null || value === void 0 ? void 0 : value.length) <= length) {
    return value;
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        containerCursor: cursor,
        content: function content() {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
            color: "black.100",
            children: value
          });
        },
        children: lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(value, {
          length: length
        })
      })
    });
  }
};

TruncatedTextWithTooltip.__docgenInfo = {
  "description": "A tooltip that truncates a value if it's longer than the\nprovided length.",
  "methods": [],
  "displayName": "TruncatedTextWithTooltip",
  "props": {
    "length": {
      "defaultValue": {
        "value": "30",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "cursor": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (TruncatedTextWithTooltip);

/***/ }),

/***/ 1948:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84238);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59448);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52015);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82525);
/* harmony import */ var _lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66465);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11194);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _LinkContributor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42388);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);













var ContributorsList = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC).withConfig({
  displayName: "TopContributors__ContributorsList",
  componentId: "sc-b7r4y1-0"
})(["flex-wrap:wrap;margin-bottom:16px;flex-direction:row;@media (max-width:64em){& > *:nth-child(1n + 6){display:none;}}@media (max-width:88em){& > *:nth-child(1n + 11){display:none;}}"]);
var ContributorItem = styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "TopContributors__ContributorItem",
  componentId: "sc-b7r4y1-1"
})(["display:flex;margin:0 24px 16px 0;width:200px;"]);
var AvatarWithRank = styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "TopContributors__AvatarWithRank",
  componentId: "sc-b7r4y1-2"
})(["width:63px;min-width:63px;height:32px;margin-right:8px;background:white;display:flex;justify-content:space-between;align-items:center;padding-left:14px;font-size:10px;border-radius:32px;"]);
var ContributorName = styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "TopContributors__ContributorName",
  componentId: "sc-b7r4y1-3"
})(["font-size:12px;line-height:18px;font-weight:700;color:", ";letter-spacing:-0.4px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:100%;"], function (props) {
  return props.theme.colors.black[800];
});
/**
 * Returns the flex-basis as a string in `px` based on the percentage of
 * contributors that belongs in this column.
 */

var getFlexBasisForCol = function getFlexBasisForCol(nbContributors, totalContributors) {
  var baseSpaceBetween = 0.1;
  var maxPercentage = 0.75;
  var percentageNbContributors = nbContributors / totalContributors;
  var width = Math.min(percentageNbContributors - baseSpaceBetween, maxPercentage); // If one of the two blocks has less contributors but still two columns, we
  // force the size two make sure both columns are displayed

  if (percentageNbContributors <= 0.45 && nbContributors > 5) {
    return '40%';
  }

  return "".concat(Math.trunc(width * 100), "%");
};
/**
 * Shows a list of contributors with the section title. Auto-size based on number
 * of contributors.
 */


var ContributorsBlock = function ContributorsBlock(_ref) {
  var title = _ref.title,
      contributors = _ref.contributors,
      totalNbContributors = _ref.totalNbContributors,
      currency = _ref.currency,
      showTitle = _ref.showTitle;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
  var isFillingFullscreen = contributors.length === totalNbContributors && contributors.length === 20;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
    flex: "50% 1 3",
    style: {
      flexBasis: getFlexBasisForCol(contributors.length, totalNbContributors)
    },
    children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "500",
      color: "black.700",
      mb: "20px",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ContributorsList, {
      justifyContent: isFillingFullscreen ? [null, null, null, null, 'space-between'] : 'flex-start',
      children: contributors.map(function (contributor, idx) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ContributorItem, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(AvatarWithRank, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: idx + 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LinkContributor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              contributor: contributor,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* .ContributorAvatar */ .BD, {
                contributor: contributor,
                radius: 32
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            flex: "1 1",
            maxWidth: "calc(100% - 63px)",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LinkContributor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              contributor: contributor,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ContributorName, {
                children: contributor.isIncognito ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  id: "profile.incognito",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Incognito"
                  }]
                }) : contributor.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
              color: "black.700",
              fontSize: "10px",
              lineHeight: "14px",
              children: contributor.totalAmountDonated ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                id: "TotalDonatedSince",
                defaultMessage: [{
                  "type": 1,
                  "value": "totalDonated"
                }, {
                  "type": 0,
                  "value": " since "
                }, {
                  "type": 1,
                  "value": "date"
                }],
                values: {
                  date: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedDate, {
                    value: contributor.since,
                    month: "short",
                    year: "numeric"
                  }),
                  totalDonated: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    amountStyles: null,
                    amount: contributor.totalAmountDonated,
                    currency: currency,
                    precision: 0,
                    formatWithSeparators: true
                  })
                }
              }) : contributor.isAdmin ? (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(intl, 'ADMIN') : contributor.isCore ? (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(intl, 'MEMBER') : (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(intl, contributor.roles[0])
            })]
          })]
        }, contributor.id);
      })
    })]
  });
};

/**
 * Shows two columns as leaderboards for organizations and individuals
 * financial contributions.
 */
var TopContributors = function TopContributors(_ref2) {
  var organizations = _ref2.organizations,
      individuals = _ref2.individuals,
      currency = _ref2.currency;

  var nbOrgs = lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(organizations);

  var nbIndividuals = lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(individuals);

  var totalNbContributors = nbOrgs + nbIndividuals;
  var hasBothTypes = Boolean(nbOrgs && nbIndividuals); // Nothing to render if there's no one to show

  if (!totalNbContributors) {
    return null;
  } // Build the individual blocks in variables so we can sort them later


  var BlockIndividuals = nbIndividuals > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ContributorsBlock, {
    currency: currency,
    contributors: individuals,
    totalNbContributors: totalNbContributors,
    title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      id: "TopContributors.Individuals",
      defaultMessage: [{
        "type": 0,
        "value": "Individuals"
      }]
    }),
    showTitle: hasBothTypes
  });

  var BlockOrgs = nbOrgs > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ContributorsBlock, {
    currency: currency,
    contributors: organizations,
    totalNbContributors: totalNbContributors,
    title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      id: "TopContributors.Organizations",
      defaultMessage: [{
        "type": 0,
        "value": "Organizations"
      }]
    }),
    showTitle: hasBothTypes
  }); // Put the blocks with the most contributors first. If equals, default is to show orgs first.


  var Blocks = nbIndividuals > nbOrgs ? [BlockIndividuals, BlockOrgs] : [BlockOrgs, BlockIndividuals];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    flexWrap: "wrap",
    "justify-content": "space-between",
    children: [Blocks[0], Blocks[1]]
  });
};

TopContributors.__docgenInfo = {
  "description": "Shows two columns as leaderboards for organizations and individuals\nfinancial contributions.",
  "methods": [],
  "displayName": "TopContributors",
  "props": {
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "organizations": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "individuals": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (TopContributors);

/***/ }),

/***/ 73049:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "on": function() { return /* binding */ BASE_HERO_HEIGHT; },
  "DA": function() { return /* binding */ BASE_HERO_WIDTH; },
  "in": function() { return /* binding */ DEFAULT_BACKGROUND_CROP; },
  "XH": function() { return /* binding */ StyledHeroBackground; },
  "ZP": function() { return /* binding */ hero_HeroBackground; },
  "bV": function() { return /* binding */ getAlignedRight; },
  "EH": function() { return /* binding */ getCrop; },
  "aB": function() { return /* binding */ getZoom; }
});

// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
;// CONCATENATED MODULE: ./components/collective-page/images/HeroBackgroundMask.svg
/* harmony default export */ var HeroBackgroundMask = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2OCIgaGVpZ2h0PSI0NzIiIHZpZXdCb3g9IjAgMCAxMzY4IDQ3MiIgZmlsbD0ibm9uZSIgCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik0zMS45ODU2IDAuMDAwNDM3MTU0QzIyMC40MDkgMjUzLjYwNiA4MjMuMjU2IDQyOC4yNzcgOTkwLjA4MiA0NTYuNzY0QzExMDMuMjcgNDc2LjA5MiAxMzExLjA2IDQ2OC4yMzIgMTM2OCA0NDYuMDY5QzEzNjggMzg0LjYyMSAxMzY4IDEuMTM4MTQgMTM2OCAxLjEzODE0Qzk4MC4yOCAwLjc2MTY4MiAzNzAuOTkxIDAuMDAwMjQ2MjMgMzEuOTg1NiAwLjAwMDQzNzE1NFoiIGZpbGw9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjA3NSIgZD0iTTkwLjUyMDkgLTQxLjYxNkMyMTcuNDUgLTQxLjYxNiAxMTQwLjgzIC00Mi44MDk4IDEzOTUuNzIgLTQyLjgwOThDMTM5NS43MiAyMS4zMTY1IDEzOTUuNzIgMTY3LjYxMyAxMzk1LjcyIDIwOC41NjZDMTM5NS43MiAyNjcuNTYyIDE2NDQuMiA1MzUuNjExIDEwMDUuMDQgNDY0LjAyNkM2ODguNzU3IDQyOC42MDMgNTExLjg3MyAyMzIuOTgyIDM0OC45MDIgMTk5LjU4OEMyMTkuMzMgMTczLjAzOCA2My4yNTExIDk0LjI1MDYgOTAuNTIwOSAtNDEuNjE2WiIgZmlsbD0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03NTMuODMxIDQzNC44NzJDNzU2LjM4NiA0MzUuMTU1IDc1OC42ODcgNDMzLjMxNCA3NTguOTcgNDMwLjc1OUM3NTkuMjUzIDQyOC4yMDQgNzU3LjQxMiA0MjUuOTAzIDc1NC44NTcgNDI1LjYyQzc1Mi4zMDIgNDI1LjMzNyA3NTAuMDAyIDQyNy4xNzggNzQ5LjcxOSA0MjkuNzMzQzc0OS40MzUgNDMyLjI4OCA3NTEuMjc3IDQzNC41ODkgNzUzLjgzMSA0MzQuODcyWiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY3NS45NDggNDI1LjA2QzY3Ny44NyA0MjUuMjczIDY3OS42IDQyMy44ODggNjc5LjgxMyA0MjEuOTY3QzY4MC4wMjYgNDIwLjA0NiA2NzguNjQxIDQxOC4zMTUgNjc2LjcyIDQxOC4xMDJDNjc0Ljc5OSA0MTcuODg5IDY3My4wNjkgNDE5LjI3NCA2NzIuODU2IDQyMS4xOTVDNjcyLjY0MiA0MjMuMTE3IDY3NC4wMjcgNDI0Ljg0NyA2NzUuOTQ4IDQyNS4wNloiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05NTkuMTk5IDQ0NS4zN0M5NjIuNjI4IDQ0NS43NTEgOTY1LjcxNSA0NDMuMjc5IDk2Ni4wOTYgNDM5Ljg1MUM5NjYuNDc2IDQzNi40MjIgOTY0LjAwNCA0MzMuMzM1IDk2MC41NzYgNDMyLjk1NUM5NTcuMTQ4IDQzMi41NzUgOTU0LjA2IDQzNS4wNDYgOTUzLjY4IDQzOC40NzRDOTUzLjMgNDQxLjkwMyA5NTUuNzcxIDQ0NC45OSA5NTkuMTk5IDQ0NS4zN1oiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01ODIuNDc0IDM3Mi40OTRDNTg2Ljg1NCAzNzIuOTc5IDU5MC43OTggMzY5LjgyMyA1OTEuMjgzIDM2NS40NDNDNTkxLjc2OSAzNjEuMDYzIDU4OC42MTIgMzU3LjExOSA1ODQuMjMzIDM1Ni42MzRDNTc5Ljg1MyAzNTYuMTQ4IDU3NS45MDkgMzU5LjMwNSA1NzUuNDIzIDM2My42ODRDNTc0LjkzOCAzNjguMDY0IDU3OC4wOTUgMzcyLjAwOCA1ODIuNDc0IDM3Mi40OTRaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODg2LjM4MSA0MjYuNjU5Qzg5MS45MiA0MjcuMjczIDg5Ni45MDggNDIzLjI4IDg5Ny41MjIgNDE3Ljc0MUM4OTguMTM2IDQxMi4yMDIgODk0LjE0NCA0MDcuMjE0IDg4OC42MDUgNDA2LjZDODgzLjA2NiA0MDUuOTg1IDg3OC4wNzcgNDA5Ljk3OCA4NzcuNDYzIDQxNS41MTdDODc2Ljg0OSA0MjEuMDU2IDg4MC44NDEgNDI2LjA0NCA4ODYuMzgxIDQyNi42NTlaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzA3LjExNyA0MTYuNDczQzcxMy45MDUgNDE3LjIyNiA3MjAuMDE4IDQxMi4zMzMgNzIwLjc3MSA0MDUuNTQ0QzcyMS41MjQgMzk4Ljc1NiA3MTYuNjMxIDM5Mi42NDMgNzA5Ljg0MiAzOTEuODlDNzAzLjA1NCAzOTEuMTM3IDY5Ni45NDEgMzk2LjAzIDY5Ni4xODggNDAyLjgxOUM2OTUuNDM1IDQwOS42MDcgNzAwLjMyOCA0MTUuNzIxIDcwNy4xMTcgNDE2LjQ3M1oiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05OTguNjMxIDQzMC4zNzJDMTAwNi41MSA0MzEuMjQ1IDEwMTMuNiA0MjUuNTY5IDEwMTQuNDcgNDE3LjY5M0MxMDE1LjM1IDQwOS44MTcgMTAwOS42NyA0MDIuNzI1IDEwMDEuNzkgNDAxLjg1MkM5OTMuOTE4IDQwMC45NzkgOTg2LjgyNSA0MDYuNjU1IDk4NS45NTIgNDE0LjUzMUM5ODUuMDc5IDQyMi40MDYgOTkwLjc1NSA0MjkuNDk5IDk5OC42MzEgNDMwLjM3MloiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03OTEuODk4IDQyMy4zNDZDODA1LjQ3NSA0MjQuODUxIDgxNy43MDIgNDE1LjA2NSA4MTkuMjA3IDQwMS40ODhDODIwLjcxMiAzODcuOTExIDgxMC45MjcgMzc1LjY4NSA3OTcuMzUgMzc0LjE3OUM3ODMuNzczIDM3Mi42NzQgNzcxLjU0NiAzODIuNDYgNzcwLjA0MSAzOTYuMDM3Qzc2OC41MzYgNDA5LjYxNCA3NzguMzIxIDQyMS44NCA3OTEuODk4IDQyMy4zNDZaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQzLjMxNCAzNzUuNTYyQzY1Ni44OTEgMzc3LjA2NyA2NjkuMTE4IDM2Ny4yODEgNjcwLjYyMyAzNTMuNzA0QzY3Mi4xMjggMzQwLjEyNyA2NjIuMzQzIDMyNy45MDEgNjQ4Ljc2NiAzMjYuMzk1QzYzNS4xODkgMzI0Ljg5IDYyMi45NjIgMzM0LjY3NiA2MjEuNDU3IDM0OC4yNTNDNjE5Ljk1MiAzNjEuODMgNjI5LjczNyAzNzQuMDU2IDY0My4zMTQgMzc1LjU2MloiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zODAuNDQ3IDI5Ny41NzhDMzgyLjc4NiAyOTguNjQ0IDM4NS41NDYgMjk3LjYxMSAzODYuNjExIDI5NS4yNzFDMzg3LjY3NiAyOTIuOTMyIDM4Ni42NDMgMjkwLjE3MiAzODQuMzA0IDI4OS4xMDdDMzgxLjk2NSAyODguMDQyIDM3OS4yMDUgMjg5LjA3NSAzNzguMTQgMjkxLjQxNEMzNzcuMDc0IDI5My43NTMgMzc4LjEwNyAyOTYuNTEzIDM4MC40NDcgMjk3LjU3OFoiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMjMuMzkzIDI2MS41MTlDMzI1LjE1MiAyNjIuMzIgMzI3LjIyOCAyNjEuNTQzIDMyOC4wMjkgMjU5Ljc4NEMzMjguODMgMjU4LjAyNSAzMjguMDUzIDI1NS45NDkgMzI2LjI5NCAyNTUuMTQ4QzMyNC41MzUgMjU0LjM0NyAzMjIuNDU5IDI1NS4xMjQgMzIxLjY1OCAyNTYuODgzQzMyMC44NTcgMjU4LjY0MyAzMjEuNjM0IDI2MC43MTggMzIzLjM5MyAyNjEuNTE5WiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4NS45NzMgMzE5LjMyOUM0ODkuOTgzIDMyMS4xNTUgNDk0LjcxNCAzMTkuMzg0IDQ5Ni41NCAzMTUuMzc0QzQ5OC4zNjYgMzExLjM2MyA0OTYuNTk2IDMwNi42MzIgNDkyLjU4NSAzMDQuODA2QzQ4OC41NzUgMzAyLjk4IDQ4My44NDQgMzA0Ljc1MSA0ODIuMDE4IDMwOC43NjFDNDgwLjE5MiAzMTIuNzcxIDQ4MS45NjIgMzE3LjUwMyA0ODUuOTczIDMxOS4zMjlaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzA3LjAzNyAyMzIuOTE4QzMxMS4wNDcgMjM0Ljc0NCAzMTUuNzc5IDIzMi45NzQgMzE3LjYwNSAyMjguOTYzQzMxOS40MzEgMjI0Ljk1MyAzMTcuNjYgMjIwLjIyMiAzMTMuNjUgMjE4LjM5NkMzMDkuNjQgMjE2LjU3IDMwNC45MDggMjE4LjM0IDMwMy4wODIgMjIyLjM1MUMzMDEuMjU2IDIyNi4zNjEgMzAzLjAyNyAyMzEuMDkyIDMwNy4wMzcgMjMyLjkxOFoiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MzAuMDE2IDMxMC42NTNDNDM2LjcgMzEzLjY5NiA0NDQuNTg2IDMxMC43NDUgNDQ3LjYyOSAzMDQuMDYxQzQ1MC42NzMgMjk3LjM3NyA0NDcuNzIxIDI4OS40OTIgNDQxLjAzOCAyODYuNDQ4QzQzNC4zNTQgMjgzLjQwNSA0MjYuNDY4IDI4Ni4zNTYgNDIzLjQyNSAyOTMuMDRDNDIwLjM4MSAyOTkuNzI0IDQyMy4zMzMgMzA3LjYwOSA0MzAuMDE2IDMxMC42NTNaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzU1LjY4NSAyNjMuMDcyQzM2MS45MDEgMjY1LjkwMiAzNjkuMjM0IDI2My4xNTggMzcyLjA2NSAyNTYuOTQyQzM3NC44OTUgMjUwLjcyNiAzNzIuMTUxIDI0My4zOTIgMzY1LjkzNSAyNDAuNTYyQzM1OS43MTkgMjM3LjczMSAzNTIuMzg1IDI0MC40NzYgMzQ5LjU1NSAyNDYuNjkyQzM0Ni43MjQgMjUyLjkwOCAzNDkuNDY5IDI2MC4yNDEgMzU1LjY4NSAyNjMuMDcyWiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUyOC42NzUgMzE1LjM5NUM1MzkuMDM1IDMyMC4xMTIgNTUxLjI1OCAzMTUuNTM4IDU1NS45NzUgMzA1LjE3OEM1NjAuNjkyIDI5NC44MTggNTU2LjExOCAyODIuNTk2IDU0NS43NTggMjc3Ljg3OEM1MzUuMzk4IDI3My4xNjEgNTIzLjE3NiAyNzcuNzM1IDUxOC40NTkgMjg4LjA5NUM1MTMuNzQxIDI5OC40NTUgNTE4LjMxNSAzMTAuNjc4IDUyOC42NzUgMzE1LjM5NVoiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MDUuNjQ2IDI3NC41NDJDNDE4LjA3OCAyODAuMjAzIDQzMi43NDUgMjc0LjcxNCA0MzguNDA2IDI2Mi4yODJDNDQ0LjA2NyAyNDkuODUgNDM4LjU3OCAyMzUuMTgzIDQyNi4xNDYgMjI5LjUyMkM0MTMuNzE0IDIyMy44NjEgMzk5LjA0NyAyMjkuMzUgMzkzLjM4NiAyNDEuNzgyQzM4Ny43MjUgMjU0LjIxNCAzOTMuMjE0IDI2OC44ODEgNDA1LjY0NiAyNzQuNTQyWiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwNy44MDcgMjA0LjMxN0MzMjAuMjM5IDIwOS45NzcgMzM0LjkwNiAyMDQuNDg4IDM0MC41NjcgMTkyLjA1NkMzNDYuMjI4IDE3OS42MjUgMzQwLjczOSAxNjQuOTU3IDMyOC4zMDcgMTU5LjI5N0MzMTUuODc1IDE1My42MzYgMzAxLjIwOCAxNTkuMTI1IDI5NS41NDcgMTcxLjU1N0MyODkuODg2IDE4My45ODkgMjk1LjM3NSAxOTguNjU2IDMwNy44MDcgMjA0LjMxN1oiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTguMjQ2NTggLTcyLjgyNzZDMjc3LjYxIDI0MC41OCA3MjguODI2IDQ0Ni4wNjkgMTI0MCA0NDYuMDY5QzE3NTAuNDUgNDQ2LjA2OSAyMjAxLjAyIDI0MC41OCAyNDcwIC03Mi44Mjc2SDguMjQ2NThaIiBmaWxsPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMSIgZD0iTTguMjQ2NTggLTcyLjgyNzZDMjc3LjYxIDI0MC41OCA3MjguODI2IDQ0Ni4wNjkgMTI0MCA0NDYuMDY5QzE3NTAuNDUgNDQ2LjA2OSAyMjAxLjAyIDI0MC41OCAyNDcwIC03Mi44Mjc2SDguMjQ2NThaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo=");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/collective-page/hero/HeroBackground.js






var BASE_HERO_WIDTH = 1368;
var BASE_HERO_HEIGHT = 325;

var generateBackground = function generateBackground(theme) {
  var color = theme.colors.primary[300];
  var gradient = "linear-gradient(10deg, ".concat(theme.colors.primary[800], ", ").concat(theme.colors.primary[300], ")");
  return "".concat(gradient, ", ").concat(color);
};

var BackgroundImage = styled_components_browser_esm/* default.img.attrs */.ZP.img.attrs({
  alt: ''
}).withConfig({
  displayName: "HeroBackground__BackgroundImage",
  componentId: "sc-rdqlca-0"
})([""]);
var StyledHeroBackground = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HeroBackground__StyledHeroBackground",
  componentId: "sc-rdqlca-1"
})(["position:absolute;right:0;top:0;height:100%;width:100%;max-width:", "px;z-index:", ";overflow:hidden;img{margin:0;user-select:none;}.reactEasyCrop_Image,", "{max-height:none;max-width:none;}", " @supports (mask-size:cover){background:", ";background-repeat:no-repeat;background-size:100%;mask:url(", ") no-repeat;mask-size:cover;mask-position-x:100%;mask-position-y:-150px;@media (max-width:900px){mask-position-x:20%;}}"], BASE_HERO_WIDTH, function (props) {
  return props.isEditing ? 0 : -1;
}, BackgroundImage, function (props) {
  return props.isAlignedRight && (0,styled_components_browser_esm/* css */.iv)([".reactEasyCrop_Image,", "{top:0;right:0;min-height:0;min-width:0;left:unset;bottom:unset;position:absolute;}"], BackgroundImage);
}, function (props) {
  return generateBackground(props.theme);
}, HeroBackgroundMask);
var DEFAULT_BACKGROUND_CROP = {
  x: 0,
  y: 0
};
var getCrop = function getCrop(collective) {
  return get_default()(collective.settings, 'collectivePage.background.crop') || DEFAULT_BACKGROUND_CROP;
};
var getZoom = function getZoom(collective) {
  return get_default()(collective.settings, 'collectivePage.background.zoom') || 1;
};
var getAlignedRight = function getAlignedRight(collective) {
  return get_default()(collective.settings, 'collectivePage.background.isAlignedRight');
};
/**
 * Wraps the logic to display the hero background. Fallsback on a white background if
 * css `mask` is not supported.
 */

var HeroBackground = function HeroBackground(_ref) {
  var collective = _ref.collective;
  var crop = getCrop(collective);
  var zoom = getZoom(collective);
  var isAlignedRight = getAlignedRight(collective);

  var hasBackgroundSettings = has_default()(collective.settings, 'collectivePage.background');

  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHeroBackground, {
    isAlignedRight: isAlignedRight,
    children: collective.backgroundImageUrl && /*#__PURE__*/(0,jsx_runtime.jsx)(BackgroundImage, {
      src: collective.backgroundImageUrl,
      style: hasBackgroundSettings ? {
        transform: "translate(".concat(crop.x, "px, ").concat(crop.y, "px) scale(").concat(zoom, ")")
      } : {
        minWidth: '100%'
      }
    })
  });
};

HeroBackground.__docgenInfo = {
  "description": "Wraps the logic to display the hero background. Fallsback on a white background if\ncss `mask` is not supported.",
  "methods": [],
  "displayName": "HeroBackground",
  "props": {
    "collective": {
      "description": "The collective to show the image for",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": false
          },
          "backgroundImage": {
            "name": "string",
            "description": "The background image",
            "required": false
          },
          "backgroundImageUrl": {
            "name": "string",
            "required": false
          },
          "settings": {
            "name": "shape",
            "value": {
              "collectivePage": {
                "name": "shape",
                "value": {
                  "background": {
                    "name": "shape",
                    "value": {
                      "offset": {
                        "name": "shape",
                        "value": {
                          "y": {
                            "name": "number",
                            "required": true
                          }
                        },
                        "description": "Used to display the background at the right position",
                        "required": false
                      },
                      "crop": {
                        "name": "shape",
                        "value": {
                          "y": {
                            "name": "number",
                            "required": true
                          }
                        },
                        "description": "Only used for the editor",
                        "required": false
                      }
                    },
                    "required": false
                  }
                },
                "required": false
              }
            },
            "description": "Collective settings",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};

/** @component */
/* harmony default export */ var hero_HeroBackground = (HeroBackground);

/***/ }),

/***/ 66419:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jp": function() { return /* binding */ updatesSectionQuery; },
/* harmony export */   "Rp": function() { return /* binding */ getUpdatesSectionQueryVariables; }
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
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41609);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(16608);
/* harmony import */ var _styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(30742);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(74806);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(52015);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74770);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97619);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86702);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(19156);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51082);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(36219);
/* harmony import */ var _graphql_fragments__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5824);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(27132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(85893);










var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
























/** Query to re-fetch updates */



var updatesSectionQuery = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default()(["\n  query UpdatesSection($slug: String!, $onlyPublishedUpdates: Boolean) {\n    Collective(slug: $slug) {\n      id\n      updates(limit: 3, onlyPublishedUpdates: $onlyPublishedUpdates) {\n        id\n        ...UpdatesFields\n      }\n    }\n  }\n\n  ", "\n"])), _graphql_fragments__WEBPACK_IMPORTED_MODULE_25__/* .updatesFieldsFragment */ .Ju);
var PrivateUpdateMesgBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP)(_MessageBox__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z).withConfig({
  displayName: "Updates__PrivateUpdateMesgBox",
  componentId: "sc-1tc073o-0"
})(["height:40px;background:#f0f8ff;border:1px solid #b8deff;box-sizing:border-box;border-radius:6px;margin:10px 0;padding:10px;font-size:12px;color:#71757a;display:flex;align-items:center;"]);
/**
 * Displays collective's updates.
 */

var SectionUpdates = /*#__PURE__*/function (_React$PureComponent) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default()(SectionUpdates, _React$PureComponent);

  var _super = _createSuper(SectionUpdates);

  function SectionUpdates() {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, SectionUpdates);

    return _super.apply(this, arguments);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(SectionUpdates, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      // If user log in/out we need to refresh data as it depends on the current user
      var refetch = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(this.props.data, 'refetch');

      if (oldProps.isLoggedIn !== this.props.isLoggedIn && refetch) {
        refetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          isAdmin = _this$props.isAdmin;

      var updates = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(this.props.data, 'Collective.updates', []); // Nothing to show if updates is empty and user can't add new ones


      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(updates) && !isAdmin) {
        return null;
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        pb: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_SectionTitle__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          fontSize: ['20px', '24px', '32px'],
          color: "black.700",
          mb: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
            id: "CollectivePage.SectionUpdates.Title",
            defaultMessage: [{
              "type": 0,
              "value": "News from "
            }, {
              "type": 1,
              "value": "collectiveName"
            }],
            values: {
              collectiveName: collective.name
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
          mb: 4,
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_StyledP, {
            color: "black.700",
            my: 2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              id: "section.updates.subtitle",
              defaultMessage: [{
                "type": 0,
                "value": "Updates on our activities and progress."
              }]
            })
          }), isAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/updates/new"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              "data-cy": "create-new-update-btn",
              buttonStyle: "primary",
              my: [2, 0],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_23__/* .Span */ .Dr, {
                fontSize: "16px",
                fontWeight: "bold",
                mr: 2,
                children: "+"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                id: "updates.new.title",
                defaultMessage: [{
                  "type": 0,
                  "value": "New update"
                }]
              })]
            })
          })]
        }), lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(updates) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            my: [3, 5],
            type: "info",
            withIcon: true,
            maxWidth: 700,
            fontStyle: "italic",
            fontSize: "14px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              id: "SectionUpdates.PostFirst",
              defaultMessage: [{
                "type": 0,
                "value": "Report your progress and keep your community up to date."
              }]
            })
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          mt: [3, 5],
          mb: [3, 4],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_StyledCard__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            "data-cy": "updatesList",
            children: updates.map(function (update, idx) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                p: 24,
                display: "flex",
                justifyContent: "space-between",
                borderBottom: idx === updates.length - 1 ? undefined : '1px solid #e6e8eb',
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                    mr: 3,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                      collective: update.fromCollective,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
                        collective: update.fromCollective,
                        radius: 40
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                      href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/updates/").concat(update.slug),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_23__.P, {
                        color: "black.900",
                        fontWeight: "600",
                        mb: 2,
                        children: update.title
                      })
                    }), update.userCanSeeUpdate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_HTMLContent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        style: {
                          display: 'inline'
                        },
                        content: update.summary
                      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_StyledLink__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        as: _Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                        fontSize: "12px",
                        href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/updates/").concat(update.slug),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                          id: "ContributeCard.ReadMore",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Read more"
                          }]
                        })
                      })]
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(PrivateUpdateMesgBox, {
                      type: "info",
                      "data-cy": "mesgBox",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                        id: "update.private.cannot_view_message",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Contribute to "
                        }, {
                          "type": 1,
                          "value": "collective"
                        }, {
                          "type": 0,
                          "value": " to see this Update"
                        }],
                        values: {
                          collective: collective.name
                        }
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                      color: "black.600",
                      mt: 2,
                      fontSize: "12px",
                      children: [update.isPrivate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        content: function content() {
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                            id: "update.private.lock_text",
                            defaultMessage: [{
                              "type": 0,
                              "value": "This update is for contributors only"
                            }]
                          });
                        },
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                          mr: 1,
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_30__/* .Lock */ .H, {
                            "data-tip": true,
                            "data-for": "privateLockText",
                            "data-cy": "privateIcon",
                            size: 12,
                            cursor: "pointer"
                          })
                        })
                      }), update.publishedAt ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                        id: "update.publishedAtBy",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Published on "
                        }, {
                          "type": 1,
                          "value": "date"
                        }, {
                          "type": 0,
                          "value": " by "
                        }, {
                          "type": 1,
                          "value": "author"
                        }],
                        values: {
                          date: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatDate */ .p6)(update.publishedAt, {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          }),
                          author: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            collective: update.fromCollective
                          })
                        }
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                        id: "update.createdAtBy",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Created on "
                        }, {
                          "type": 1,
                          "value": "date"
                        }, {
                          "type": 0,
                          "value": " (draft) by "
                        }, {
                          "type": 1,
                          "value": "author"
                        }],
                        values: {
                          date: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatDate */ .p6)(update.createdAt),
                          author: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            collective: update.fromCollective
                          })
                        }
                      })]
                    })]
                  })]
                })
              }, update.id);
            })
          }), updates.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/updates"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              "data-cy": "view-all-updates-btn",
              mt: 4,
              width: 1,
              buttonSize: "small",
              fontSize: "14px",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                id: "CollectivePage.SectionUpdates.ViewAll",
                defaultMessage: [{
                  "type": 0,
                  "value": "View all updates"
                }]
              }), " \u2192"]
            })
          })]
        })]
      });
    }
  }]);

  return SectionUpdates;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);

var addUpdatesSectionData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_31__/* .graphql */ .B)(updatesSectionQuery, {
  options: function options(props) {
    return {
      variables: getUpdatesSectionQueryVariables(props.collective.slug, props.isAdmin)
    };
  }
});
var getUpdatesSectionQueryVariables = function getUpdatesSectionQueryVariables(slug) {
  var isAdmin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    slug: slug,
    onlyPublishedUpdates: !isAdmin
  };
};
SectionUpdates.__docgenInfo = {
  "description": "Displays collective's updates.",
  "methods": [],
  "displayName": "SectionUpdates",
  "props": {
    "collective": {
      "description": "Collective",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": true
    },
    "isAdmin": {
      "description": "Does user can see drafts?",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "isLoggedIn": {
      "description": "Is user loggedIn?",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "data": {
      "description": "Transactions",
      "type": {
        "name": "shape",
        "value": {
          "refetch": {
            "name": "func",
            "required": false
          },
          "Collective": {
            "name": "shape",
            "value": {
              "updates": {
                "name": "arrayOf",
                "value": {
                  "name": "shape",
                  "value": {
                    "id": {
                      "name": "number",
                      "required": false
                    },
                    "slug": {
                      "name": "string",
                      "required": false
                    },
                    "title": {
                      "name": "string",
                      "required": false
                    },
                    "summary": {
                      "name": "string",
                      "required": false
                    },
                    "createdAt": {
                      "name": "string",
                      "required": false
                    },
                    "publishedAt": {
                      "name": "string",
                      "required": false
                    },
                    "isPrivate": {
                      "name": "bool",
                      "required": false
                    },
                    "userCanSeeUpdate": {
                      "name": "bool",
                      "required": false
                    },
                    "fromCollective": {
                      "name": "shape",
                      "value": {
                        "id": {
                          "name": "number",
                          "required": false
                        },
                        "type": {
                          "name": "string",
                          "required": false
                        },
                        "name": {
                          "name": "string",
                          "required": false
                        },
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
            },
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["ZP"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP)(addUpdatesSectionData(SectionUpdates)));

var _StyledP = (0,styled_components__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_23__.P).withConfig({
  displayName: "Updates___StyledP",
  componentId: "sc-1tc073o-1"
})({
  flex: '1 0 50%',
  maxWidth: 700
});

/***/ }),

/***/ 12461:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39138);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(450);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25896);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);



var _excluded = ["collective"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/**
 * A contribute card specialized to display a collective. Useful to display child collectives.
 */



var ContributeCollective = function ContributeCollective(_ref) {
  var collective = _ref.collective,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var description = lodash_truncate__WEBPACK_IMPORTED_MODULE_2___default()(collective.description, {
    length: 100
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Contribute__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getCollectivePageRoute */ .x0)(collective),
    type: _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_4__/* .ContributionTypes.CHILD_COLLECTIVE */ .S.CHILD_COLLECTIVE,
    title: collective.name,
    contributors: collective.contributors,
    stats: collective.stats.backers,
    image: collective.backgroundImageUrl
  }, props), {}, {
    children: description
  }));
};

ContributeCollective.__docgenInfo = {
  "description": "A contribute card specialized to display a collective. Useful to display child collectives.",
  "methods": [],
  "displayName": "ContributeCollective",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "description": {
            "name": "string",
            "required": false
          },
          "backgroundImageUrl": {
            "name": "string",
            "required": false
          },
          "contributors": {
            "name": "arrayOf",
            "value": {
              "name": "object"
            },
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "backers": {
                "name": "object",
                "required": false
              }
            },
            "required": true
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (ContributeCollective);

/***/ }),

/***/ 77771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39138);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87281);
/* harmony import */ var _styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(48143);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(44012);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(450);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82114);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47162);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25896);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85893);



var _excluded = ["collective", "event"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


















var ContributeEvent = function ContributeEvent(_ref) {
  var collective = _ref.collective,
      event = _ref.event,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var startsAt = event.startsAt,
      endsAt = event.endsAt;

  var description = lodash_truncate__WEBPACK_IMPORTED_MODULE_2___default()(event.description, {
    length: 100
  });

  var isTruncated = description && description.length < event.description.length;
  var isPassed = (0,_lib_events__WEBPACK_IMPORTED_MODULE_6__/* .isPastEvent */ .Up)(event);
  var takesMultipleDays = startsAt && endsAt && !(0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(startsAt).isSame(endsAt, 'day');
  var showYearOnStartDate = !endsAt || !takesMultipleDays ? 'numeric' : undefined; // only if there's no end date

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Contribute__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getCollectivePageRoute */ .x0)(collective), "/events/").concat(event.slug),
    type: isPassed ? _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_4__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED : _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_4__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE,
    contributors: event.contributors,
    stats: event.stats.backers,
    image: event.backgroundImageUrl,
    title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      as: _Link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
      color: "black.800",
      href: "/".concat(collective.slug, "/events/").concat(event.slug),
      children: event.name
    })
  }, props), {}, {
    children: [(startsAt || endsAt) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
      mb: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        fontSize: "12px",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_15__/* .Calendar */ .f, {
          size: "1.3em",
          color: "#4E5052"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
          ml: 2,
          color: "black.700",
          children: [startsAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("time", {
            dateTime: startsAt,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedDate, {
              value: startsAt,
              month: "short",
              day: "numeric",
              year: showYearOnStartDate
            })
          }), takesMultipleDays && ' → ', (takesMultipleDays || !startsAt && endsAt) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("time", {
            dateTime: endsAt,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedDate, {
              value: endsAt,
              month: "short",
              day: "numeric",
              year: "numeric"
            })
          })]
        })]
      }), startsAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        fontSize: "12px",
        mt: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_17__/* .Clock */ .S, {
          size: "1.3em",
          color: "#4E5052"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
          ml: 2,
          color: "black.700",
          children: !takesMultipleDays ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedDate, {
              value: startsAt,
              hour: "2-digit",
              minute: "2-digit"
            }), endsAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
              children: ["-", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedDate, {
                value: endsAt,
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short"
              })]
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedDate, {
            value: startsAt,
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short"
          })
        })]
      })]
    }), description, isTruncated && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      href: "/".concat(collective.slug, "/events/").concat(event.slug),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
        textTransform: "capitalize",
        whiteSpace: "nowrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          id: "ContributeCard.ReadMore",
          defaultMessage: [{
            "type": 0,
            "value": "Read more"
          }]
        })
      })
    })]
  }));
};

ContributeEvent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributeEvent",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": false
    },
    "event": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "backgroundImageUrl": {
            "name": "string",
            "required": false
          },
          "startsAt": {
            "name": "string",
            "required": false
          },
          "endsAt": {
            "name": "string",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "contributors": {
            "name": "arrayOf",
            "value": {
              "name": "object"
            },
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "backers": {
                "name": "object",
                "required": false
              }
            },
            "required": true
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (ContributeEvent);

/***/ }),

/***/ 55350:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39138);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(450);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25896);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51082);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);



var _excluded = ["collective", "project"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







/**
 * A contribute card specialized to display a Project.
 */



var ContributeProject = function ContributeProject(_ref) {
  var collective = _ref.collective,
      project = _ref.project,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var description = lodash_truncate__WEBPACK_IMPORTED_MODULE_2___default()(project.description, {
    length: 100
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Contribute__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getCollectivePageRoute */ .x0)(collective), "/projects/").concat(project.slug),
    type: project.isArchived ? _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_4__/* .ContributionTypes.ARCHIVED_PROJECT */ .S.ARCHIVED_PROJECT : _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_4__/* .ContributionTypes.PROJECT */ .S.PROJECT,
    contributors: project.contributors,
    stats: project.stats.backers,
    image: project.backgroundImageUrl,
    title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StyledLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      as: _Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
      color: "black.800",
      href: "/".concat(collective.slug, "/projects/").concat(project.slug),
      children: project.name
    })
  }, props), {}, {
    children: description
  }));
};

ContributeProject.__docgenInfo = {
  "description": "A contribute card specialized to display a Project.",
  "methods": [],
  "displayName": "ContributeProject",
  "props": {
    "project": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "description": {
            "name": "string",
            "required": false
          },
          "backgroundImageUrl": {
            "name": "string",
            "required": false
          },
          "contributors": {
            "name": "arrayOf",
            "value": {
              "name": "object"
            },
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "backers": {
                "name": "object",
                "required": false
              }
            },
            "required": true
          },
          "isArchived": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (ContributeProject);

/***/ }),

/***/ 69794:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84238);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44012);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _icons_CommentIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6845);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97619);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var _FollowersAvatars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57020);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85893);














var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessages)({
  commentsCount: {
    id: "comments.count",
    defaultMessage: [{
      "type": 6,
      "value": "n",
      "options": {
        "one": {
          "value": [{
            "type": 7
          }, {
            "type": 0,
            "value": " comment"
          }]
        },
        "other": {
          "value": [{
            "type": 7
          }, {
            "type": 0,
            "value": " comments"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }]
  }
});

var ConversationListItem = function ConversationListItem(_ref) {
  var conversation = _ref.conversation,
      collectiveSlug = _ref.collectiveSlug;

  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(),
      formatMessage = _useIntl.formatMessage;

  var id = conversation.id,
      slug = conversation.slug,
      title = conversation.title,
      summary = conversation.summary,
      createdAt = conversation.createdAt,
      fromAccount = conversation.fromAccount,
      followers = conversation.followers,
      stats = conversation.stats;
  var hasFollowers = followers && lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(followers.nodes) > 0;
  var hasComments = stats && stats.commentsCount > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mr: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        collective: fromAccount,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
          collective: fromAccount,
          radius: 40
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        href: "/".concat(collectiveSlug, "/conversations/").concat(slug, "-").concat(id),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_9__.H5, {
          wordBreak: "break-word",
          mb: 2,
          children: title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
        color: "black.500",
        fontSize: "12px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          id: "update.publishedAtBy",
          defaultMessage: [{
            "type": 0,
            "value": "Published on "
          }, {
            "type": 1,
            "value": "date"
          }, {
            "type": 0,
            "value": " by "
          }, {
            "type": 1,
            "value": "author"
          }],
          values: {
            date: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedDate, {
              value: createdAt,
              day: "numeric",
              month: "long",
              year: "numeric"
            }),
            author: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              collective: fromAccount
            })
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
        color: "black.700",
        mt: 2,
        fontSize: "13px",
        dangerouslySetInnerHTML: {
          __html: summary
        },
        "data-cy": "conversation-preview"
      }), (hasFollowers || hasComments) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        mt: 3,
        alignItems: "center",
        children: [hasFollowers && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          mr: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_FollowersAvatars__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            followers: followers.nodes,
            totalCount: followers.totalCount,
            maxNbDisplayed: 3,
            avatarRadius: 24
          })
        }), hasComments && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          display: "flex",
          alignItems: "center",
          color: "black.500",
          title: formatMessage(messages.commentsCount, {
            n: stats.commentsCount
          }),
          fontSize: "12px",
          "data-cy": "replies-count",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            size: "1em",
            color: "#9D9FA3"
          }), "\xA0", stats.commentsCount]
        })]
      })]
    })]
  });
};

/**
 * Displays a list of conversations
 */
var ConversationsList = function ConversationsList(_ref2) {
  var collectiveSlug = _ref2.collectiveSlug,
      conversations = _ref2.conversations;

  if (!conversations || conversations.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    children: conversations.map(function (conversation, idx) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        borderTop: !idx ? undefined : '1px solid',
        borderColor: "black.300",
        p: 3,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ConversationListItem, {
          collectiveSlug: collectiveSlug,
          conversation: conversation
        })
      }, conversation.id);
    })
  });
};

ConversationsList.__docgenInfo = {
  "description": "Displays a list of conversations",
  "methods": [],
  "displayName": "ConversationsList",
  "props": {
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "conversations": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (ConversationsList);

/***/ }),

/***/ 57020:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86896);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97619);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);










var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)({
  andXOthers: {
    id: "conversation.followers.rest",
    defaultMessage: [{
      "type": 1,
      "value": "usersList"
    }, {
      "type": 0,
      "value": " and "
    }, {
      "type": 6,
      "value": "count",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "one other"
          }]
        },
        "other": {
          "value": [{
            "type": 7
          }, {
            "type": 0,
            "value": " others"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }]
  }
});

var getFollwersNotDisplayedNames = function getFollwersNotDisplayedNames(followers, maxNbDisplayed) {
  if (followers.length <= maxNbDisplayed) {
    return null;
  } else {
    return followers.slice(maxNbDisplayed).map(function (c) {
      return c.name;
    }).join(', ');
  }
};
/**
 * A small list of avatars with a count next to it.
 */


var FollowersAvatars = function FollowersAvatars(_ref) {
  var followers = _ref.followers,
      totalCount = _ref.totalCount,
      avatarRadius = _ref.avatarRadius,
      maxNbDisplayed = _ref.maxNbDisplayed;

  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(),
      formatMessage = _useIntl.formatMessage;

  if (!followers || !followers.length) {
    return null;
  }

  var nbNotDisplayed = totalCount - maxNbDisplayed;
  var nbNotFetched = totalCount - followers.length;
  var usersNotDisplayedNames = getFollwersNotDisplayedNames(followers, maxNbDisplayed);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    children: [followers.slice(0, maxNbDisplayed).map(function (collective) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
        mr: [-2, 2],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          collective: collective,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            collective: collective,
            radius: avatarRadius
          })
        })
      }, collective.id);
    }), nbNotDisplayed > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
      color: "black.500",
      title: followers.length < totalCount ? formatMessage(messages.andXOthers, {
        count: nbNotFetched,
        usersList: usersNotDisplayedNames
      }) : usersNotDisplayedNames,
      children: ["+\xA0", nbNotDisplayed]
    })]
  });
};

FollowersAvatars.defaultProps = {
  maxNbDisplayed: 5,
  avatarRadius: 24
};
FollowersAvatars.__docgenInfo = {
  "description": "A small list of avatars with a count next to it.",
  "methods": [],
  "displayName": "FollowersAvatars",
  "props": {
    "maxNbDisplayed": {
      "defaultValue": {
        "value": "5",
        "computed": false
      },
      "description": "Max number of followers to display",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "avatarRadius": {
      "defaultValue": {
        "value": "24",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "totalCount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "followers": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": false
            }
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_6__/* .withUser */ .ns)(FollowersAvatars));

/***/ }),

/***/ 37436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hm": function() { return /* binding */ isUserFollowingConversationQuery; },
/* harmony export */   "Y6": function() { return /* binding */ commentFieldsFragment; },
/* harmony export */   "mM": function() { return /* binding */ conversationListFragment; }
/* harmony export */ });
/* unused harmony export updateListFragment */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15020);


var _templateObject, _templateObject2, _templateObject3, _templateObject4;


var commentFieldsFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment CommentFields on Comment {\n    id\n    createdAt\n    html\n    reactions\n    userReactions\n    fromAccount {\n      id\n      type\n      name\n      slug\n      imageUrl\n    }\n  }\n"])));
var conversationListFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment ConversationListFragment on ConversationCollection {\n    totalCount\n    offset\n    limit\n    nodes {\n      id\n      title\n      summary\n      slug\n      createdAt\n      tags\n      fromAccount {\n        id\n        name\n        type\n        slug\n        imageUrl\n      }\n      followers(limit: 5) {\n        totalCount\n        nodes {\n          id\n          slug\n          type\n          name\n          imageUrl(height: 64)\n        }\n      }\n      stats {\n        id\n        commentsCount\n      }\n    }\n  }\n"])));
var isUserFollowingConversationQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_templateObject3 || (_templateObject3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query IsUserFollowingConversation($id: String!) {\n    loggedInAccount {\n      id\n      slug\n      imageUrl\n      type\n      name\n      ... on Individual {\n        isFollowingConversation(id: $id)\n      }\n    }\n  }\n"])));
var updateListFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_templateObject4 || (_templateObject4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment UpdateListFragment on UpdateCollection {\n    totalCount\n    offset\n    limit\n    nodes {\n      id\n      slug\n      title\n      summary\n      createdAt\n      publishedAt\n      isPrivate\n      userCanSeeUpdate\n      fromAccount {\n        id\n        type\n        name\n        slug\n        imageUrl\n      }\n    }\n  }\n"])));

/***/ }),

/***/ 98929:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52015);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19156);
/* harmony import */ var _TransactionItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89434);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);





var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "TransactionsList__Container",
  componentId: "sc-nnbe2v-0"
})(["", ""], function (props) {
  return !props.isFirst && (0,styled_components__WEBPACK_IMPORTED_MODULE_4__/* .css */ .iv)(["border-top:1px solid #e6e8eb;"]);
});

var TransactionsList = function TransactionsList(_ref) {
  var transactions = _ref.transactions,
      collective = _ref.collective,
      displayActions = _ref.displayActions,
      onMutationSuccess = _ref.onMutationSuccess;

  if (!(transactions !== null && transactions !== void 0 && transactions.length)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StyledCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    children: transactions.map(function (transaction, idx) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Container, {
        isFirst: !idx,
        "data-cy": "single-transaction",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TransactionItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          transaction: transaction,
          collective: collective,
          displayActions: displayActions,
          onMutationSuccess: onMutationSuccess
        })
      }, (transaction === null || transaction === void 0 ? void 0 : transaction.id) || idx);
    })
  });
};

TransactionsList.defaultProps = {
  view: 'public'
};
TransactionsList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionsList",
  "props": {
    "view": {
      "defaultValue": {
        "value": "'public'",
        "computed": false
      },
      "required": false
    },
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "displayActions": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "parent": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": true
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "transactions": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": true
            }
          }
        }
      },
      "required": false
    },
    "onMutationSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (TransactionsList);

/***/ }),

/***/ 82055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ useImageUploader; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86896);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88705);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31330);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65985);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessages)({
  invalidFiles: {
    id: "StyledDropzone.InvalidFiles",
    defaultMessage: [{
      "type": 0,
      "value": "The following "
    }, {
      "type": 6,
      "value": "count",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "file is"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "files are"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }, {
      "type": 0,
      "value": " not valid: "
    }, {
      "type": 1,
      "value": "files"
    }]
  }
});
/** Fets the average progress from a list of upload progress */

var getUploadProgress = function getUploadProgress(uploadProgressList) {
  if (!uploadProgressList || uploadProgressList.length === 0) {
    return 0;
  } else {
    var totalUploadProgress = uploadProgressList.reduce(function (total, current) {
      return total + current;
    }, 0);
    return Math.trunc(totalUploadProgress / uploadProgressList.length);
  }
};

var useImageUploader = function useImageUploader(_ref) {
  var isMulti = _ref.isMulti,
      mockImageGenerator = _ref.mockImageGenerator,
      onSuccess = _ref.onSuccess,
      onReject = _ref.onReject,
      kind = _ref.kind;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState, 2),
      isUploading = _React$useState2[0],
      setUploading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7__.useState([]),
      _React$useState4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_React$useState3, 2),
      uploadProgressList = _React$useState4[0],
      setUploadProgressList = _React$useState4[1];

  var _useToasts = (0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
  return {
    isUploading: isUploading,
    uploadProgress: getUploadProgress(uploadProgressList),
    uploadFiles: react__WEBPACK_IMPORTED_MODULE_7__.useCallback( /*#__PURE__*/function () {
      var _ref2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(acceptedFiles, rejectedFiles) {
        var filesToUpload, results, successes, failures, baseMsg, errorMsg;
        return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setUploading(true);
                filesToUpload = isMulti ? acceptedFiles : [acceptedFiles[0]];
                _context.next = 4;
                return (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .allSettled */ .Lu)(filesToUpload.map(function (file, index) {
                  return (0,_api__WEBPACK_IMPORTED_MODULE_10__/* .uploadImageWithXHR */ .Z4)(file, kind, {
                    mockImage: mockImageGenerator && mockImageGenerator(index),
                    onProgress: function onProgress(progress) {
                      var newProgressList = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(uploadProgressList);

                      newProgressList.splice(index, 0, progress);
                      setUploadProgressList(newProgressList);
                    }
                  });
                }));

              case 4:
                results = _context.sent;
                setUploading(false);
                successes = [];
                failures = [];
                results.forEach(function (result, index) {
                  var fileInfo = lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(filesToUpload[index], ['name', 'size', 'type']);

                  if (result.status === 'fulfilled') {
                    successes.push(_objectSpread({
                      url: result.value
                    }, fileInfo));
                  } else {
                    failures.push(_objectSpread({
                      message: result.reason
                    }, fileInfo));
                  }
                });

                if (!(onSuccess && successes.length > 0)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 12;
                return onSuccess(isMulti ? successes : successes[0]);

              case 12:
                if (onReject && failures.length > 0) {
                  onReject(isMulti ? failures : failures[0]);
                }

                if (rejectedFiles !== null && rejectedFiles !== void 0 && rejectedFiles.length) {
                  baseMsg = intl.formatMessage(msg.invalidFiles, _objectSpread(_objectSpread({}, _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP), {}, {
                    count: rejectedFiles.length,
                    files: rejectedFiles.map(function (_ref3) {
                      var file = _ref3.file;
                      return file.name;
                    }).join(', ')
                  }));
                  errorMsg = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(rejectedFiles[0], 'errors.0.message') || '';
                  addToast({
                    type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                    message: "".concat(baseMsg, ". ").concat(errorMsg)
                  });
                }

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(), [isMulti, onSuccess, onReject, mockImageGenerator, uploadProgressList])
  };
};

/***/ }),

/***/ 19147:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Custom404; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44012);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1259);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3518);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80146);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);












function Custom404() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "ErrorPage",
    "data-cy": "error-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Body__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        borderTop: "1px solid #E8E9EB",
        py: [5, 6],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
          "data-cy": "not-found",
          flexDirection: "column",
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_8__.H1, {
            textAlign: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              id: "notFound",
              defaultMessage: [{
                "type": 0,
                "value": "Not found"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: "3.6rem",
            color: "primary.500",
            mt: 4,
            mb: 5,
            children: "\xAF\\_(\u30C4)_/\xAF"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
            flexWrap: "wrap",
            justifyContent: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              m: 2,
              onClick: function onClick() {
                return next_router__WEBPACK_IMPORTED_MODULE_1___default().back();
              },
              children: ["\u2190 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                id: "error.goBack",
                defaultMessage: [{
                  "type": 0,
                  "value": "Go back to the previous page"
                }]
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})]
  });
}
Custom404.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Custom404"
};

/***/ }),

/***/ 87318:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_collective_page; }
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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(28860);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/collective.lib.js
var collective_lib = __webpack_require__(5700);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(23493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/concat.js
var concat = __webpack_require__(57043);
var concat_default = /*#__PURE__*/__webpack_require__.n(concat);
// EXTERNAL MODULE: ./node_modules/lodash/compact.js
var compact = __webpack_require__(39693);
var compact_default = /*#__PURE__*/__webpack_require__.n(compact);
// EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__(30845);
// EXTERNAL MODULE: ./lib/collective-sections.js
var collective_sections = __webpack_require__(64453);
// EXTERNAL MODULE: ./components/collective-navbar/index.js + 8 modules
var collective_navbar = __webpack_require__(99656);
// EXTERNAL MODULE: ./components/Container.tsx
var components_Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var components_Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/lodash/first.js
var first = __webpack_require__(8804);
var first_default = /*#__PURE__*/__webpack_require__.n(first);
// EXTERNAL MODULE: ./node_modules/@styled-icons/bootstrap/Tags/Tags.esm.js
var Tags_esm = __webpack_require__(4493);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/Palette/Palette.esm.js
var Palette_esm = __webpack_require__(36456);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Camera/Camera.esm.js
var Camera_esm = __webpack_require__(17963);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Globe/Globe.esm.js
var Globe_esm = __webpack_require__(20336);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Mail/Mail.esm.js
var Mail_esm = __webpack_require__(9141);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Twitter/Twitter.esm.js
var Twitter_esm = __webpack_require__(44063);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/hooks/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(62131);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Code/Code.esm.js
var Code_esm = __webpack_require__(22055);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Github/Github.esm.js
var Github_esm = __webpack_require__(67254);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/CodeRepositoryIcon.js


var _excluded = ["repositoryUrl"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var CodeRepositoryIcon = function CodeRepositoryIcon(_ref) {
  var repositoryUrl = _ref.repositoryUrl,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var isGithubUrl = repositoryUrl === null || repositoryUrl === void 0 ? void 0 : repositoryUrl.match(/^(https?:\/\/)?github\.com\//);
  return isGithubUrl ? /*#__PURE__*/(0,jsx_runtime.jsx)(Github_esm/* Github */.E, _objectSpread({}, props)) : /*#__PURE__*/(0,jsx_runtime.jsx)(Code_esm/* Code */.E, _objectSpread({}, props));
};

CodeRepositoryIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CodeRepositoryIcon",
  "props": {
    "repositoryUrl": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_CodeRepositoryIcon = (CodeRepositoryIcon);
// EXTERNAL MODULE: ./components/ContactCollectiveBtn.js + 1 modules
var ContactCollectiveBtn = __webpack_require__(66277);
// EXTERNAL MODULE: ./components/DefinedTerm.js
var DefinedTerm = __webpack_require__(78317);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var graphql_tag_lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/CollectiveTagsInput.tsx
var CollectiveTagsInput = __webpack_require__(52903);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledInputFormikField.js
var StyledInputFormikField = __webpack_require__(75667);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
;// CONCATENATED MODULE: ./components/EditTagsModal.tsx





var _templateObject, _templateObject2;

function EditTagsModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EditTagsModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EditTagsModal_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EditTagsModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var editTagsMutation = (0,helpers/* gqlV1 */.N)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation editCollective(\n    $collective: CollectiveInputType!\n  ) {\n    editCollective(\n      collective: $collective\n    ) {\n      id\n      tags\n    }\n  }\n"])));
var tagStatsQuery = (0,graphql_tag_lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query tagStats($host: AccountReferenceInput) {\n    tagStats(host: $host, limit: 5) {\n      nodes {\n        id\n        tag\n      }\n    }\n  }\n"])));
function EditTagsModal(_ref) {
  var _collective$host;

  var collective = _ref.collective,
      onClose = _ref.onClose;

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var _useMutation = (0,client.useMutation)(editTagsMutation),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      editTags = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var _useQuery = (0,client.useQuery)(tagStatsQuery, {
    variables: EditTagsModal_objectSpread({}, (_collective$host = collective.host) !== null && _collective$host !== void 0 && _collective$host.slug ? {
      host: {
        slug: collective.host.slug
      }
    } : {}),
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useQuery$data = _useQuery.data;

  _useQuery$data = _useQuery$data === void 0 ? {
    tagStats: null
  } : _useQuery$data;
  var tagStats = _useQuery$data.tagStats;
  var initialValues = {
    tags: collective.tags
  };

  var submit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(values) {
      var tags, variables;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tags = values.tags;
              _context.prev = 1;
              variables = {
                collective: {
                  id: collective.id,
                  tags: tags
                }
              };
              _context.next = 5;
              return editTags({
                variables: variables
              });

            case 5:
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              addToast({
                type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                message: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "FAV3Ng",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Error submiting form: "
                  }, {
                    "type": 1,
                    "value": "error"
                  }],
                  values: {
                    error: _context.t0.message
                  }
                })
              });
              return _context.abrupt("return");

            case 11:
              addToast({
                type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
                message: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "8CJ2DZ",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Successfully updated tags"
                  }]
                })
              });
              handleClose();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function submit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleClose = function handleClose() {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* default */.ZP, {
    flexGrow: 1,
    maxWidth: "500px",
    onClose: handleClose,
    trapFocus: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.J9, {
      initialValues: initialValues,
      onSubmit: submit,
      children: function children(formik) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Form */.l0, {
          onSubmit: formik.handleSubmit,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            tabIndex: 0
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
            onClose: handleClose,
            hideCloseIcon: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ulp3g5",
              defaultMessage: [{
                "type": 0,
                "value": "Edit tags"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* ModalBody */.fe, {
            mb: 0,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputFormikField/* default */.Z, {
              name: "tags",
              htmlFor: "tags",
              labelProps: {
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '17px'
              },
              children: function children(_ref3) {
                var _tagStats$nodes;

                var field = _ref3.field;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveTagsInput/* default */.Z, EditTagsModal_objectSpread(EditTagsModal_objectSpread({}, field), {}, {
                  defaultValue: formik.values.tags,
                  onChange: function onChange(tags) {
                    formik.setFieldValue('tags', tags.map(function (t) {
                      return t.value.toLowerCase();
                    }));
                  },
                  suggestedTags: tagStats === null || tagStats === void 0 ? void 0 : (_tagStats$nodes = tagStats.nodes) === null || _tagStats$nodes === void 0 ? void 0 : _tagStats$nodes.map(function (node) {
                    return node.tag;
                  }).filter(function (tag) {
                    return !collectives/* IGNORED_TAGS.includes */.bR.includes(tag);
                  })
                }));
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
              type: "info",
              mt: 3,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "collective.tags.info",
                defaultMessage: [{
                  "type": 0,
                  "value": "Tags help you improve your group’s discoverability and connect with similar initiatives across the world."
                }]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
            isFullWidth: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
              justifyContent: "flex-start",
              flexWrap: "wrap",
              gap: "16px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                minWidth: 132,
                buttonStyle: "primary",
                loading: loading,
                disabled: !formik.dirty,
                type: "submit",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "save",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Save"
                  }]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                minWidth: 132,
                buttonStyle: "secondary",
                disabled: loading,
                type: "button",
                onClick: handleClose,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "actions.cancel",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Cancel"
                  }]
                })
              })]
            })
          })]
        });
      }
    })
  });
}
EditTagsModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EditTagsModal",
  "props": {
    "collective": {
      "required": true,
      "tsType": {
        "name": "Collective"
      },
      "description": ""
    },
    "onClose": {
      "required": true,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": {
          "arguments": [],
          "return": {
            "name": "void"
          }
        }
      },
      "description": ""
    }
  }
};
// EXTERNAL MODULE: ./components/I18nCollectiveTags.js
var I18nCollectiveTags = __webpack_require__(82497);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/StyledDropdown.js
var StyledDropdown = __webpack_require__(206);
// EXTERNAL MODULE: ./components/StyledInputTags.js
var StyledInputTags = __webpack_require__(10732);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
// EXTERNAL MODULE: ./components/StyledTag.js
var StyledTag = __webpack_require__(36422);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/TruncatedTextWithTooltip.js
var TruncatedTextWithTooltip = __webpack_require__(92582);
;// CONCATENATED MODULE: ./components/UserCompany.js


var UserCompany_excluded = ["company"];

function UserCompany_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function UserCompany_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? UserCompany_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : UserCompany_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var UserCompany = function UserCompany(_ref) {
  var company = _ref.company,
      props = objectWithoutProperties_default()(_ref, UserCompany_excluded);

  if (!company || company[0] !== '@') {
    return company;
  } // This could be used to generate malicious URLs.
  // By splitting on `/` we limit that risk.


  var companySlug = company.split('/')[0].slice(1);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.Z, UserCompany_objectSpread(UserCompany_objectSpread({
    href: "/".concat(companySlug)
  }, props), {}, {
    children: ["@", companySlug]
  }));
};

UserCompany.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UserCompany",
  "props": {
    "company": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_UserCompany = (UserCompany);
// EXTERNAL MODULE: ./components/collective-page/ContainerSectionContent.js
var ContainerSectionContent = __webpack_require__(36219);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/components/Mutation.js
var Mutation = __webpack_require__(32493);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Check/Check.esm.js
var Check_esm = __webpack_require__(46336);
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(48966);
// EXTERNAL MODULE: ./lib/theme/index.ts + 1 modules
var lib_theme = __webpack_require__(50529);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputGroup.js
var StyledInputGroup = __webpack_require__(32631);
// EXTERNAL MODULE: ./components/collective-page/graphql/mutations.js
var mutations = __webpack_require__(8914);
;// CONCATENATED MODULE: ./components/collective-page/hero/CollectiveColorPicker.js




















var colorPath = 'collectivePage.primaryColor';
var ColorPreset = styled_components_browser_esm/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "CollectiveColorPicker__ColorPreset",
  componentId: "sc-1hpmo67-0"
})(["cursor:pointer;width:30px;height:30px;margin-right:5px;margin-bottom:8px;border-radius:50%;border:none;transition:transform 0.1s;&:hover{transform:scale(1.25);}"]); // prettier-ignore

var PRESET_COLORS = ['#BE2721', '#F65316', '#D17C07', '#1E824C', '#1D8882', '#1F3993', '#663299', '#2E3131', '#E94531', '#ED7529', '#F89308', '#19B156', '#12ADA4', '#3062BC', '#9E28B4', '#6D7A89', '#FA533E', '#F6A050', '#FFA413', '#1AC780', '#55C9BC', '#3E8DCE', '#B13BC6', '#95A5A6'];
/** Ensure the color is formatted like #123456 */

var validateColor = function validateColor(value) {
  return (0,validator.isHexColor)(value) && value.length === 7;
};

var CollectiveColorPicker = function CollectiveColorPicker(_ref) {
  var collective = _ref.collective,
      _onChange = _ref.onChange,
      onClose = _ref.onClose,
      theme = _ref.theme;
  var color = theme.colors.primary.base || theme.colors.primary[500];

  var _React$useState = react.useState(color.replace('#', '')),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      textValue = _React$useState2[0],
      setTextValue = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      showError = _React$useState4[0],
      setShowError = _React$useState4[1];

  var hasError = !validateColor("#".concat(textValue));

  var dispatchValue = function dispatchValue(v) {
    setTextValue(v.replace('#', ''));

    _onChange(v);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Mutation/* Mutation */.m, {
    mutation: mutations/* editCollectiveSettingsMutation */.U0,
    children: function children(editSettings, _ref2) {
      var loading = _ref2.loading;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard/* default */.Z, {
        "data-cy": "collective-color-picker-card",
        flexDirection: "column",
        boxShadow: "4px 4px 10px #c7c5c5",
        maxWidth: 360,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
          px: 32,
          py: 24,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "20px",
            fontWeight: 600,
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CollectiveColorPicker.Title",
              defaultMessage: [{
                "type": 0,
                "value": "Select page color"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "16px",
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CollectiveColorPicker.Preset",
              defaultMessage: [{
                "type": 0,
                "value": "Preset colors"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Flex */.kC, {
            flexWrap: "wrap",
            justifyContent: "space-between",
            children: PRESET_COLORS.map(function (preset) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(ColorPreset, {
                "data-cy": "collective-color-picker-options-btn",
                style: {
                  background: preset
                },
                onClick: function onClick() {
                  return dispatchValue(preset);
                },
                children: color === preset && /*#__PURE__*/(0,jsx_runtime.jsx)(Check_esm/* Check */.J, {
                  size: 12,
                  color: "white"
                })
              }, preset);
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "16px",
            mt: 3,
            mb: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CollectiveColorPicker.Custom",
              defaultMessage: [{
                "type": 0,
                "value": "Use custom color"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, {
              size: 40,
              flex: "0 0 40px",
              px: 2,
              py: 2,
              background: "white",
              borderRadius: "50%",
              type: "color",
              value: color,
              disabled: loading,
              onChange: function onChange(e) {
                dispatchValue(e.target.value);
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, {
                prepend: "#",
                placeholder: "000000",
                px: 2,
                containerProps: {
                  ml: 2
                },
                value: textValue,
                maxLength: 7,
                disabled: loading,
                onBlur: function onBlur() {
                  return setShowError(true);
                },
                error: showError && hasError && /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "CollectiveColorPicker.Error",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Please use an hexadecimal value (eg. #3E8DCE)"
                  }]
                }),
                onChange: function onChange(e) {
                  var newValue = e.target.value.replace('#', '');
                  setTextValue(newValue);
                  setShowError(false); // Don't show errors while typing

                  var hexValue = "#".concat(newValue);

                  if (validateColor(hexValue)) {
                    _onChange(hexValue);
                  }
                }
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
          borderTop: "1px solid #D7DBE0",
          px: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
            justifyContent: "space-between",
            flexWrap: "wrap",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              m: 2,
              flex: "1 1",
              textTransform: "capitalize",
              onClick: function onClick() {
                dispatchValue(lib_theme/* default.colors.primary.500 */.Z.colors.primary[500]);
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Reset",
                defaultMessage: [{
                  "type": 0,
                  "value": "Reset"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
              flex: "1 1 50%",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                m: 2,
                flex: "1 1 50%",
                textTransform: "capitalize",
                onClick: function onClick() {
                  _onChange(null);

                  onClose();
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "form.cancel",
                  defaultMessage: [{
                    "type": 0,
                    "value": "cancel"
                  }]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                "data-cy": "collective-color-picker-save-btn",
                m: 2,
                buttonStyle: "primary",
                textTransform: "capitalize",
                flex: "1 1 50%",
                loading: loading,
                disabled: hasError,
                onClick: function onClick() {
                  var newSettings = cloneDeep_default()(collective.settings || {});

                  set_default()(newSettings, colorPath, color);

                  editSettings({
                    variables: {
                      id: collective.id,
                      settings: newSettings
                    }
                  }).then(function () {
                    _onChange(null);

                    onClose();
                  });
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "save",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Save"
                  }]
                })
              })]
            })]
          })
        })]
      });
    }
  });
};

CollectiveColorPicker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollectiveColorPicker",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": false
          },
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
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "theme": {
      "description": "@ignore from withTheme",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var hero_CollectiveColorPicker = ((0,styled_components_browser_esm/* withTheme */.Zz)(CollectiveColorPicker));
// EXTERNAL MODULE: ./node_modules/lodash/inRange.js
var inRange = __webpack_require__(94174);
var inRange_default = /*#__PURE__*/__webpack_require__.n(inRange);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(65985);
// EXTERNAL MODULE: ./lib/image-utils.js
var image_utils = __webpack_require__(89314);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/ConfirmationModal.js
var ConfirmationModal = __webpack_require__(47988);
// EXTERNAL MODULE: ./components/StyledDropzone.js
var StyledDropzone = __webpack_require__(37070);
;// CONCATENATED MODULE: ./components/collective-page/hero/HeroAvatar.js








function HeroAvatar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function HeroAvatar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? HeroAvatar_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : HeroAvatar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

























var AVATAR_SIZE = 128; // Dynamically import components for admins

var DropzoneLoadingPlaceholder = function DropzoneLoadingPlaceholder() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    color: "primary.500",
    borderRadius: "25%"
  });
};

var dynamicParams = {
  loading: DropzoneLoadingPlaceholder,
  ssr: false
};
var Dropzone = dynamic_default()(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 55162));
}, dynamicParams);
var EditOverlay = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HeroAvatar__EditOverlay",
  componentId: "sc-xvjpei-0"
})(["position:absolute;width:128px;height:128px;display:flex;flex-direction:column;justify-content:center;align-items:center;background:rgba(255,255,255,0.75);cursor:pointer;text-align:center;padding:1em;border-radius:", ";"], function (props) {
  return props.borderRadius;
});
var EditableAvatarContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HeroAvatar__EditableAvatarContainer",
  componentId: "sc-xvjpei-1"
})(["position:relative;width:128px;", ""], function (props) {
  return !props.isDragActive && (0,styled_components_browser_esm/* css */.iv)(["&:not(:hover) ", "{visibility:hidden;}"], EditOverlay);
});
var EditingAvatarContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HeroAvatar__EditingAvatarContainer",
  componentId: "sc-xvjpei-2"
})(["width:128px;height:128px;border:2px dashed lightgrey;border-radius:", ";clip-path:inset(0 0 0 0 round ", ");img{width:100%;height:100%;}"], function (props) {
  return props.borderRadius;
}, function (props) {
  return props.borderRadius;
});
var Triangle = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HeroAvatar__Triangle",
  componentId: "sc-xvjpei-3"
})(["position:absolute;font-size:42px;top:-45px;left:42px;color:white;text-shadow:-2px -3px 4px rgba(121,121,121,0.5);"]);

var HeroAvatar = function HeroAvatar(_ref) {
  var collective = _ref.collective,
      isAdmin = _ref.isAdmin,
      intl = _ref.intl;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      editing = _React$useState2[0],
      setEditing = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      showModal = _React$useState4[0],
      setshowModal = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      submitting = _React$useState6[0],
      setSubmitting = _React$useState6[1];

  var _React$useState7 = react.useState(null),
      _React$useState8 = slicedToArray_default()(_React$useState7, 2),
      uploadedImage = _React$useState8[0],
      setUploadedImage = _React$useState8[1];

  var borderRadius = (0,image_utils/* getAvatarBorderRadius */.Qt)(collective.type);

  var _useMutation = (0,client.useMutation)(mutations/* editCollectiveAvatarMutation */.zk),
      _useMutation2 = slicedToArray_default()(_useMutation, 1),
      editImage = _useMutation2[0];

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast,
      removeToasts = _useToasts.removeToasts;

  var onDropImage = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(_ref2) {
      var _ref4, image, isValid;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref4 = slicedToArray_default()(_ref2, 1), image = _ref4[0];

              if (!image) {
                _context.next = 7;
                break;
              }

              Object.assign(image, {
                preview: URL.createObjectURL(image)
              });
              _context.next = 5;
              return validateImage(image);

            case 5:
              isValid = _context.sent;

              if (isValid) {
                setUploadedImage(image);
                setEditing(true);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onDropImage(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var validateImage = function validateImage(image) {
    return new Promise(function (resolve) {
      var img = new Image();

      img.onload = function () {
        if (!inRange_default().apply(void 0, [img.width].concat(toConsumableArray_default()(collectives/* AVATAR_WIDTH_RANGE */.Dm))) || !inRange_default().apply(void 0, [img.height].concat(toConsumableArray_default()(collectives/* AVATAR_HEIGHT_RANGE */.u4))) || image.size >= 5000000) {
          addToast({
            type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
            __isAvatarUploadError: true,
            // Flag to allow for easy removal of toast when a valid image is uploaded
            message: intl.formatMessage({
              id: "uploadImage.sizeRejected",
              defaultMessage: [{
                "type": 0,
                "value": "Image resolution needs to be between "
              }, {
                "type": 1,
                "value": "minResolution"
              }, {
                "type": 0,
                "value": " and "
              }, {
                "type": 1,
                "value": "maxResolution"
              }, {
                "type": 0,
                "value": ". File size must be below "
              }, {
                "type": 1,
                "value": "maxFileSize"
              }, {
                "type": 0,
                "value": "."
              }]
            }, {
              minResolution: "".concat(collectives/* AVATAR_WIDTH_RANGE.0 */.Dm[0], "x").concat(collectives/* AVATAR_HEIGHT_RANGE.0 */.u4[0]),
              maxResolution: "".concat(collectives/* AVATAR_WIDTH_RANGE.1 */.Dm[1], "x").concat(collectives/* AVATAR_HEIGHT_RANGE.1 */.u4[1]),
              maxFileSize: '5MB'
            })
          });
          resolve(false);
        } else {
          resolve(true);
          removeToasts(function (toast) {
            return Boolean(toast.__isAvatarUploadError);
          });
        }
      };

      img.src = image.preview;
    });
  };

  if (!isAdmin) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
      collective: collective,
      radius: AVATAR_SIZE
    });
  } else if (!editing) {
    var imgType = (0,collective_lib/* isIndividualAccount */.Sh)(collective) ? 'AVATAR' : 'LOGO';
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Dropzone, {
        style: {},
        multiple: false,
        accept: StyledDropzone/* DROPZONE_ACCEPT_IMAGES */.Gw,
        disabled: submitting,
        inputProps: {
          style: {
            width: 1
          }
        },
        onDrop: onDropImage,
        children: function children(_ref5) {
          var isDragActive = _ref5.isDragActive,
              isDragAccept = _ref5.isDragAccept,
              getRootProps = _ref5.getRootProps,
              getInputProps = _ref5.getInputProps;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", HeroAvatar_objectSpread(HeroAvatar_objectSpread({}, getRootProps()), {}, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", HeroAvatar_objectSpread({
              "data-cy": "heroAvatarDropzone"
            }, getInputProps())), /*#__PURE__*/(0,jsx_runtime.jsxs)(EditableAvatarContainer, {
              isDragActive: isDragActive,
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(EditOverlay, {
                borderRadius: borderRadius,
                children: [!isDragActive && /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
                    buttonSize: "tiny",
                    minWidth: 120,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Camera_esm/* Camera */.V, {
                      size: 12
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledSpan, {
                      ml: 2,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "HeroAvatar.Edit",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Edit "
                        }, {
                          "type": 5,
                          "value": "imgType",
                          "options": {
                            "AVATAR": {
                              "value": [{
                                "type": 0,
                                "value": "avatar"
                              }]
                            },
                            "other": {
                              "value": [{
                                "type": 0,
                                "value": "logo"
                              }]
                            }
                          }
                        }],
                        values: {
                          imgType: imgType
                        }
                      })
                    })]
                  }), collective.image && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                    buttonSize: "tiny",
                    minWidth: 120,
                    mt: 2,
                    onClick: function onClick(event) {
                      event.stopPropagation();
                      setshowModal(true);
                    },
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledSpan2, {
                      ml: 2,
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "HeroAvatar.Remove",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Remove "
                        }, {
                          "type": 5,
                          "value": "imgType",
                          "options": {
                            "AVATAR": {
                              "value": [{
                                "type": 0,
                                "value": "avatar"
                              }]
                            },
                            "other": {
                              "value": [{
                                "type": 0,
                                "value": "logo"
                              }]
                            }
                          }
                        }],
                        values: {
                          imgType: imgType
                        }
                      })
                    })
                  })]
                }), isDragActive && (isDragAccept ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "uploadImage.isDragActive",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Drop it like it's hot 🔥"
                  }]
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "uploadImage.isDragReject",
                  defaultMessage: [{
                    "type": 0,
                    "value": "🚫 This file type is not accepted"
                  }]
                }))]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
                collective: collective,
                radius: AVATAR_SIZE
              })]
            })]
          }));
        }
      }), showModal && /*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.Z, {
        width: "100%",
        maxWidth: "570px",
        onClose: function onClose() {
          setshowModal(false);
        },
        header: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "HeroAvatar.Remove",
          defaultMessage: [{
            "type": 0,
            "value": "Remove "
          }, {
            "type": 5,
            "value": "imgType",
            "options": {
              "AVATAR": {
                "value": [{
                  "type": 0,
                  "value": "avatar"
                }]
              },
              "other": {
                "value": [{
                  "type": 0,
                  "value": "logo"
                }]
              }
            }
          }],
          values: {
            imgType: imgType
          }
        }),
        continueHandler: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2() {
          return regenerator_default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  setSubmitting(true); // Need this because `upload` is not a graphql function

                  _context2.prev = 1;
                  _context2.next = 4;
                  return editImage({
                    variables: {
                      id: collective.id,
                      image: null
                    }
                  });

                case 4:
                  setshowModal(false);

                case 5:
                  _context2.prev = 5;
                  setSubmitting(false);
                  return _context2.finish(5);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[1,, 5, 8]]);
        })),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "14px",
          lineHeight: "18px",
          mt: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "HeroAvatar.Confirm.Remove",
            defaultMessage: [{
              "type": 0,
              "value": "Do you really want to remove your profile picture?"
            }]
          })
        })
      })]
    });
  } else {
    return uploadedImage || collective.imageUrl ? /*#__PURE__*/(0,jsx_runtime.jsx)(Mutation/* Mutation */.m, {
      mutation: mutations/* editCollectiveAvatarMutation */.zk,
      children: function children(editAvatar) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditingAvatarContainer, {
            borderRadius: borderRadius,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              "data-cy": "collective-avatar-image-preview",
              src: uploadedImage ? uploadedImage.preview : collective.imageUrl,
              alt: ""
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
            position: "absolute",
            display: "flex",
            mt: 2,
            p: 2,
            zIndex: 2,
            background: "white",
            boxShadow: "0px 3px 5px -2px #777777",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Triangle, {
              children: "\u25B2"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              textTransform: "capitalize",
              minWidth: 150,
              disabled: submitting,
              onClick: function onClick() {
                setUploadedImage(null);
                setEditing(false);
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "form.cancel",
                defaultMessage: [{
                  "type": 0,
                  "value": "cancel"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              "data-cy": "heroAvatarDropzoneSave",
              textTransform: "capitalize",
              buttonStyle: "primary",
              ml: 3,
              minWidth: 150,
              loading: submitting,
              onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee3() {
                var imgURL;
                return regenerator_default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        setSubmitting(true); // Need this because `upload` is not a graphql function

                        _context3.prev = 1;
                        // Upload image if changed or remove it
                        imgURL = collective.image;

                        if (!uploadedImage) {
                          _context3.next = 7;
                          break;
                        }

                        _context3.next = 6;
                        return (0,api/* upload */.ws)(uploadedImage, 'ACCOUNT_AVATAR');

                      case 6:
                        imgURL = _context3.sent;

                      case 7:
                        _context3.next = 9;
                        return editAvatar({
                          variables: {
                            id: collective.id,
                            image: imgURL
                          }
                        });

                      case 9:
                        // Reset
                        setUploadedImage(null);
                        setEditing(false);

                      case 11:
                        _context3.prev = 11;
                        setSubmitting(false);
                        return _context3.finish(11);

                      case 14:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[1,, 11, 14]]);
              })),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "save",
                defaultMessage: [{
                  "type": 0,
                  "value": "Save"
                }]
              })
            })]
          })]
        });
      }
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
      collective: collective,
      radius: AVATAR_SIZE
    });
  }
};

HeroAvatar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HeroAvatar",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "image": {
            "name": "string",
            "required": false
          },
          "imageUrl": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "isAdmin": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var hero_HeroAvatar = ((0,injectIntl/* default */.ZP)(HeroAvatar));

var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "HeroAvatar___StyledSpan",
  componentId: "sc-xvjpei-4"
})({
  verticalAlign: 'center'
});

var _StyledSpan2 = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "HeroAvatar___StyledSpan2",
  componentId: "sc-xvjpei-5"
})({
  verticalAlign: 'center'
});
// EXTERNAL MODULE: ./components/collective-page/hero/HeroBackground.js + 1 modules
var HeroBackground = __webpack_require__(73049);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Discord/Discord.esm.js
var Discord_esm = __webpack_require__(88061);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Discourse/Discourse.esm.js
var Discourse_esm = __webpack_require__(94740);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Mastodon/Mastodon.esm.js
var Mastodon_esm = __webpack_require__(57849);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Meetup/Meetup.esm.js
var Meetup_esm = __webpack_require__(63334);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Tiktok/Tiktok.esm.js
var Tiktok_esm = __webpack_require__(39215);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Tumblr/Tumblr.esm.js
var Tumblr_esm = __webpack_require__(96064);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Facebook/Facebook.esm.js
var Facebook_esm = __webpack_require__(12745);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Gitlab/Gitlab.esm.js
var Gitlab_esm = __webpack_require__(95501);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Instagram/Instagram.esm.js
var Instagram_esm = __webpack_require__(30483);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Linkedin/Linkedin.esm.js
var Linkedin_esm = __webpack_require__(73026);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Slack/Slack.esm.js
var Slack_esm = __webpack_require__(11885);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Youtube/Youtube.esm.js
var Youtube_esm = __webpack_require__(22906);
// EXTERNAL MODULE: ./node_modules/@styled-icons/remix-line/Pixelfed/Pixelfed.esm.js
var Pixelfed_esm = __webpack_require__(26167);
// EXTERNAL MODULE: ./lib/graphql/types/v2/graphql.ts
var v2_graphql = __webpack_require__(97965);
;// CONCATENATED MODULE: ./components/collective-page/hero/HeroSocialLinks.tsx


var _SocialLinkIcon;






















var SocialLinkIcon = (_SocialLinkIcon = {}, defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.DISCORD */.Xu.DISCORD, Discord_esm/* Discord */.O), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.FACEBOOK */.Xu.FACEBOOK, Facebook_esm/* Facebook */.s), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.GITHUB */.Xu.GITHUB, Github_esm/* Github */.E), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.GITLAB */.Xu.GITLAB, Gitlab_esm/* Gitlab */.Y), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.INSTAGRAM */.Xu.INSTAGRAM, Instagram_esm/* Instagram */.m), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.MASTODON */.Xu.MASTODON, Mastodon_esm/* Mastodon */.v), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.MATTERMOST */.Xu.MATTERMOST, Globe_esm/* Globe */.T), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.TWITTER */.Xu.TWITTER, Twitter_esm/* Twitter */.t), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.YOUTUBE */.Xu.YOUTUBE, Youtube_esm/* Youtube */.h), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.TUMBLR */.Xu.TUMBLR, Tumblr_esm/* Tumblr */.M), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.MEETUP */.Xu.MEETUP, Meetup_esm/* Meetup */.T), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.SLACK */.Xu.SLACK, Slack_esm/* Slack */.j), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.LINKEDIN */.Xu.LINKEDIN, Linkedin_esm/* Linkedin */.n), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.GIT */.Xu.GIT, Globe_esm/* Globe */.T), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.WEBSITE */.Xu.WEBSITE, Globe_esm/* Globe */.T), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.DISCOURSE */.Xu.DISCOURSE, Discourse_esm/* Discourse */.o), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.PIXELFED */.Xu.PIXELFED, Pixelfed_esm/* Pixelfed */.$), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.GHOST */.Xu.GHOST, Globe_esm/* Globe */.T), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.PEERTUBE */.Xu.PEERTUBE, Globe_esm/* Globe */.T), defineProperty_default()(_SocialLinkIcon, v2_graphql/* SocialLinkType.TIKTOK */.Xu.TIKTOK, Tiktok_esm/* Tiktok */.y), _SocialLinkIcon);

function iconForSocialLinkType(type) {
  return SocialLinkIcon[type] || Globe_esm/* Globe */.T;
}

function HeroSocialLinks(_ref) {
  var socialLinks = _ref.socialLinks,
      relMe = _ref.relMe;
  return socialLinks.map(function (socialLink, index) {
    var Icon = iconForSocialLinkType(socialLink.type);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
      "data-cy": "social-link-".concat(index),
      href: socialLink.url,
      openInNewTabNoFollow: !relMe,
      openInNewTabNoFollowRelMe: !!relMe,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
        size: 32,
        mr: 3,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
          size: 12
        })
      })
    }, socialLink.type + socialLink.url);
  });
}
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
;// CONCATENATED MODULE: ./components/collective-page/hero/HeroTotalCollectiveContributionsWithData.js



var HeroTotalCollectiveContributionsWithData_templateObject;










var totalCollectiveContributionsQuery = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(HeroTotalCollectiveContributionsWithData_templateObject || (HeroTotalCollectiveContributionsWithData_templateObject = taggedTemplateLiteral_default()(["\n  query HeroTotalCollectiveContributions($slug: String!) {\n    Collective(slug: $slug) {\n      id\n      currency\n      stats {\n        id\n        totalAmountSpent\n      }\n    }\n  }\n"])));
var getTotalCollectiveContributionsQueryVariables = function getTotalCollectiveContributionsQueryVariables(slug) {
  return {
    slug: slug
  };
};
var amountStyles = {
  fontSize: '20px',
  fontWeight: 'bold'
};
/**
 * This component fetches its own data because we don't want to query these fields
 * for regular collective.
 */

var HeroTotalCollectiveContributionsWithData = function HeroTotalCollectiveContributionsWithData(_ref) {
  var collective = _ref.collective;

  var _useQuery = (0,client.useQuery)(totalCollectiveContributionsQuery, {
    variables: getTotalCollectiveContributionsQueryVariables(collective.slug)
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (error || loading || !get_default()(data, 'Collective.stats.totalAmountSpent')) {
    return null;
  }

  var _data$Collective = data.Collective,
      stats = _data$Collective.stats,
      currency = _data$Collective.currency;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
    my: 2,
    "data-cy": "hero-total-amount-contributed",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      fontSize: "10px",
      textTransform: "uppercase",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "membership.totalDonations",
        defaultMessage: [{
          "type": 0,
          "value": "Total amount contributed"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
      amount: stats.totalAmountSpent,
      currency: currency,
      amountStyles: amountStyles
    })]
  });
};

HeroTotalCollectiveContributionsWithData.__docgenInfo = {
  "description": "This component fetches its own data because we don't want to query these fields\nfor regular collective.",
  "methods": [],
  "displayName": "HeroTotalCollectiveContributionsWithData",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var hero_HeroTotalCollectiveContributionsWithData = (HeroTotalCollectiveContributionsWithData);
;// CONCATENATED MODULE: ./components/collective-page/hero/Hero.js







function Hero_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Hero_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Hero_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Hero_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







































 // Dynamic imports



var HeroEventDetails = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 2645).then(__webpack_require__.bind(__webpack_require__, 32645));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(32645)];
    }
  }
});
var HeroBackgroundCropperModal = dynamic_default()(function () {
  return Promise.all(/* import() */[__webpack_require__.e(4931), __webpack_require__.e(2021)]).then(__webpack_require__.bind(__webpack_require__, 62021));
}, {
  loading: function loading() {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* default */.ZP, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
        height: 300,
        minWidth: 280
      })
    });
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(62021)];
    }
  }
});
var Translations = (0,lib.defineMessages)({
  website: {
    id: "Fields.website",
    defaultMessage: [{
      "type": 0,
      "value": "Website"
    }]
  }
});
var StyledShortDescription = styled_components_browser_esm/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "Hero__StyledShortDescription",
  componentId: "sc-z31ttd-0"
})(["margin-top:8px;font-size:16px;line-height:24px;@media (min-width:40em){text-align:left;}@media (min-width:64em){max-width:600px;}@media (min-width:88em){max-width:750px;}"]);
var HiddenTagDropdownContainer = (0,styled_components_browser_esm/* default */.ZP)(components_Grid/* Box */.xu).withConfig({
  displayName: "Hero__HiddenTagDropdownContainer",
  componentId: "sc-z31ttd-1"
})(["text-align:center;width:132px;max-height:300px;overflow:auto;"]);
var HiddenTagItem = (0,styled_components_browser_esm/* default */.ZP)(StyledLink/* default */.Z).withConfig({
  displayName: "Hero__HiddenTagItem",
  componentId: "sc-z31ttd-2"
})(["color:#323334;font-weight:500;font-size:14px;@media (hover:hover){:hover{text-decoration:underline;}}"]);
/**
 * Collective's page Hero/Banner/Cover component.
 */

var Hero = function Hero(_ref) {
  var _collective$parentCol, _collective$company, _collective$tags, _collective$tags2, _collective$tags3, _collective$settings;

  var collective = _ref.collective,
      host = _ref.host,
      isAdmin = _ref.isAdmin,
      onPrimaryColorChange = _ref.onPrimaryColorChange;
  var intl = (0,useIntl/* default */.Z)();

  var _useLoggedInUser = (0,useLoggedInUser/* default */.Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      hasColorPicker = _React$useState2[0],
      showColorPicker = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      isEditingCover = _React$useState4[0],
      editCover = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      isEditingTags = _React$useState6[0],
      editTags = _React$useState6[1];

  var isEditing = hasColorPicker || isEditingCover;
  var isCollective = collective.type === collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE;
  var isEvent = collective.type === collectives/* CollectiveType.EVENT */.eV.EVENT;
  var isProject = collective.type === collectives/* CollectiveType.PROJECT */.eV.PROJECT;
  var isFund = collective.type === collectives/* CollectiveType.FUND */.eV.FUND;
  var parentIsHost = host && ((_collective$parentCol = collective.parentCollective) === null || _collective$parentCol === void 0 ? void 0 : _collective$parentCol.id) === host.id;

  var firstConnectedAccount = first_default()(collective.connectedTo);

  var connectedAccountIsHost = firstConnectedAccount && host && firstConnectedAccount.collective.id === host.id;
  var displayedConnectedAccount = connectedAccountIsHost ? null : firstConnectedAccount; // get only unique references

  var companies = toConsumableArray_default()(new Set((_collective$company = collective.company) === null || _collective$company === void 0 ? void 0 : _collective$company.trim().toLowerCase().split(' ')));

  var tagCount = (_collective$tags = collective.tags) === null || _collective$tags === void 0 ? void 0 : _collective$tags.length;
  var displayedTags = (_collective$tags2 = collective.tags) === null || _collective$tags2 === void 0 ? void 0 : _collective$tags2.slice(0, 3);
  var hiddenTags = (_collective$tags3 = collective.tags) === null || _collective$tags3 === void 0 ? void 0 : _collective$tags3.slice(3);
  var numberOfHiddenTags = hiddenTags === null || hiddenTags === void 0 ? void 0 : hiddenTags.length; // Cancel edit mode when user navigates out to another collective

  (0,react.useEffect)(function () {
    editCover(false);
    showColorPicker(false);
  }, [collective.id]);
  var hasSocialLinks = collective.socialLinks && collective.socialLinks.length > 0;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [isEditingCover && /*#__PURE__*/(0,jsx_runtime.jsx)(HeroBackgroundCropperModal, {
      collective: collective,
      onClose: function onClose() {
        return editCover(false);
      }
    }), isEditingTags && /*#__PURE__*/(0,jsx_runtime.jsx)(EditTagsModal, {
      collective: collective,
      onClose: function onClose() {
        return editTags(false);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
      position: "relative",
      minHeight: 325,
      zIndex: 1000,
      "data-cy": "collective-hero",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(HeroBackground/* default */.ZP, {
        collective: collective
      }), isAdmin && !isEditing && /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
        "data-cy": "edit-collective-display-features",
        position: "absolute",
        right: 25,
        top: 25,
        zIndex: 222,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          "data-cy": "edit-cover-btn",
          buttonSize: "tiny",
          onClick: function onClick() {
            return editCover(true);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Camera_esm/* Camera */.V, {
            size: "1.2em"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Hero_StyledSpan, {
            ml: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Hero.EditCover",
              defaultMessage: [{
                "type": 0,
                "value": "Edit cover"
              }]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          "data-cy": "edit-main-color-btn",
          buttonSize: "tiny",
          ml: 3,
          onClick: function onClick() {
            return showColorPicker(true);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Palette_esm/* Palette */.Y, {
            size: "1.2em"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Hero_StyledSpan2, {
            ml: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Hero.EditColor",
              defaultMessage: [{
                "type": 0,
                "value": "Edit main color"
              }]
            })
          })]
        })]
      }), hasColorPicker && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
        position: "fixed",
        right: 25,
        top: 72,
        zIndex: 99999,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(hero_CollectiveColorPicker, {
          collective: collective,
          onChange: onPrimaryColorChange,
          onClose: function onClose() {
            return showColorPicker(false);
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
        pt: 40,
        display: "flex",
        flexDirection: "column",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
          position: "relative",
          mb: 2,
          width: 128,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(hero_HeroAvatar, {
            collective: collective,
            isAdmin: isAdmin
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
          maxWidth: ['70%', '60%', null, '40%', '45%'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
            color: "black.800",
            fontSize: "32px",
            lineHeight: "36px",
            textAlign: "left",
            "data-cy": "collective-title",
            wordBreak: "normal",
            children: collective.name || collective.slug
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Flex */.kC, {
          children: companies.length > 0 && companies.map(function (company) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
              as: components_UserCompany,
              mr: 1,
              fontSize: "20px",
              fontWeight: 600,
              company: company
            }, company);
          })
        }), !isEvent && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [(isCollective || isFund || isProject) && /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
            my: "30px",
            mb: 2,
            flexWrap: "wrap",
            "data-cy": "collective-tags",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, {
              textTransform: "uppercase",
              variant: "rounded-left",
              backgroundColor: "black.200",
              mt: ['5px', 0],
              fontWeight: 500,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(I18nCollectiveTags/* default */.Z, {
                tags: collective.type
              })
            }), tagCount > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
                borderRight: "1px solid #C3C6CB",
                height: "22px",
                padding: "5px",
                mt: ['5px', 0]
              }), displayedTags.map(function (tag) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                  href: "/search?tag=".concat(tag),
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, {
                    variant: "rounded-right",
                    ml: "10px",
                    mt: ['5px', 0],
                    fontWeight: 500,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(I18nCollectiveTags/* default */.Z, {
                      tags: tag
                    })
                  })
                }, tag);
              }), tagCount > 3 && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledDropdown/* Dropdown */.Lt, {
                trigger: "click",
                children: function children(_ref2) {
                  var triggerProps = _ref2.triggerProps,
                      dropdownProps = _ref2.dropdownProps;
                  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, Hero_objectSpread(Hero_objectSpread({
                      as: StyledButton/* default */.Z,
                      border: "none",
                      variant: "rounded-right",
                      ml: "10px",
                      mt: ['5px', 0],
                      fontWeight: 500
                    }, triggerProps), {}, {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "expenses.countMore",
                        defaultMessage: [{
                          "type": 0,
                          "value": "+ "
                        }, {
                          "type": 1,
                          "value": "count"
                        }, {
                          "type": 0,
                          "value": " more"
                        }],
                        values: {
                          count: tagCount - 3
                        }
                      })
                    })), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledDropdown/* DropdownContent */.Nv, Hero_objectSpread(Hero_objectSpread({}, dropdownProps), {}, {
                      style: {
                        marginTop: '6px'
                      },
                      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(HiddenTagDropdownContainer, {
                        children: [hiddenTags.slice(0, numberOfHiddenTags - 1).map(function (tag) {
                          return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                              href: "/search?tag=".concat(tag),
                              children: /*#__PURE__*/(0,jsx_runtime.jsx)(HiddenTagItem, {
                                as: components_Container/* default */.Z,
                                mt: 16,
                                mb: 16,
                                children: /*#__PURE__*/(0,jsx_runtime.jsx)(I18nCollectiveTags/* default */.Z, {
                                  tags: tag
                                })
                              })
                            }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {})]
                          }, tag);
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                          href: "/search?tag=".concat(hiddenTags[numberOfHiddenTags - 1]),
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HiddenTagItem, {
                            as: components_Container/* default */.Z,
                            mt: 16,
                            mb: 16,
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(I18nCollectiveTags/* default */.Z, {
                              tags: hiddenTags[numberOfHiddenTags - 1]
                            })
                          })
                        })]
                      })
                    }))]
                  });
                }
              })]
            }), isAdmin && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledInputTags/* EditTag */.E, {
              ml: "10px",
              mt: ['5px', 0],
              active: isEditingTags,
              onClick: function onClick() {
                return editTags(true);
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Tags_esm/* Tags */.$, {
                size: "14px"
              }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                ml: "4px",
                letterSpacing: 0,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "StyledInputTags.EditLabel",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Edit Tags"
                  }]
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
            alignItems: "center",
            flexWrap: "wrap",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
              my: 2,
              children: [collective.canContact && /*#__PURE__*/(0,jsx_runtime.jsx)(ContactCollectiveBtn/* default */.Z, {
                collective: collective,
                LoggedInUser: LoggedInUser,
                children: function children(btnProps) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, Hero_objectSpread(Hero_objectSpread({}, btnProps), {}, {
                    size: 32,
                    mr: 3,
                    title: "Contact",
                    "aria-label": "Contact",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Mail_esm/* Mail */.M, {
                      size: 12
                    })
                  }));
                }
              }), hasSocialLinks && /*#__PURE__*/(0,jsx_runtime.jsx)(HeroSocialLinks, {
                socialLinks: collective.socialLinks,
                relMe: true
              }), !hasSocialLinks && collective.twitterHandle && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                "data-cy": "twitterProfileUrl",
                href: (0,url_helpers/* twitterProfileUrl */.Uc)(collective.twitterHandle),
                openInNewTabNoFollowRelMe: true,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
                  size: 32,
                  mr: 3,
                  title: "Twitter",
                  "aria-label": "Twitter link",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Twitter_esm/* Twitter */.t, {
                    size: 12
                  })
                })
              }), !hasSocialLinks && collective.website && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                "data-cy": "collectiveWebsite",
                href: collective.website,
                openInNewTabNoFollowRelMe: true,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
                  size: 32,
                  mr: 3,
                  title: intl.formatMessage(Translations.website),
                  "aria-label": "Website link",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Globe_esm/* Globe */.T, {
                    size: 14
                  })
                })
              }), !hasSocialLinks && collective.repositoryUrl && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                "data-cy": "repositoryUrl",
                href: collective.repositoryUrl,
                openInNewTabNoFollowRelMe: true,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
                  buttonSize: "tiny",
                  color: "black.700",
                  height: 32,
                  mr: 3,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_CodeRepositoryIcon, {
                    size: 12,
                    repositoryUrl: collective.repositoryUrl
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                    ml: 2,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "E2brjR",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Code repository"
                      }]
                    })
                  })]
                })
              })]
            }), Boolean(!parentIsHost && collective.parentCollective) && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
              mx: 1,
              color: "black.700",
              my: "12px",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Collective.Hero.ParentCollective",
                defaultMessage: [{
                  "type": 0,
                  "value": "Part of: "
                }, {
                  "type": 1,
                  "value": "parentName"
                }],
                values: {
                  parentName: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                    as: LinkCollective/* default */.Z,
                    collective: collective.parentCollective,
                    noTitle: true,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TruncatedTextWithTooltip/* default */.Z, {
                      value: collective.parentCollective.name,
                      cursor: "pointer"
                    })
                  })
                }
              })
            }), host && collective.isApproved && host.id !== collective.id && !collective.isHost && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
                mx: 1,
                color: "black.700",
                my: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "Collective.Hero.Host",
                  defaultMessage: [{
                    "type": 1,
                    "value": "FiscalHost"
                  }, {
                    "type": 0,
                    "value": ": "
                  }, {
                    "type": 1,
                    "value": "hostName"
                  }],
                  values: {
                    FiscalHost: /*#__PURE__*/(0,jsx_runtime.jsx)(DefinedTerm/* default */.Z, {
                      term: DefinedTerm/* Terms.FISCAL_HOST */.F.FISCAL_HOST,
                      color: "black.700"
                    }),
                    hostName: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                      as: LinkCollective/* default */.Z,
                      collective: host,
                      "data-cy": "fiscalHostName",
                      noTitle: true,
                      color: "black.700",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TruncatedTextWithTooltip/* default */.Z, {
                        value: host.name,
                        cursor: "pointer"
                      })
                    })
                  }
                })
              }), displayedConnectedAccount && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
                mx: 1,
                color: "black.700",
                my: "12px",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "Collective.Hero.ParentCollective",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Part of: "
                  }, {
                    "type": 1,
                    "value": "parentName"
                  }],
                  values: {
                    parentName: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                      as: LinkCollective/* default */.Z,
                      collective: displayedConnectedAccount.collective,
                      noTitle: true,
                      color: "black.700",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TruncatedTextWithTooltip/* default */.Z, {
                        value: displayedConnectedAccount.collective.name,
                        cursor: "pointer"
                      })
                    })
                  }
                })
              })]
            }), collective.isHost && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
              children: [collective.type !== collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: [((_collective$settings = collective.settings) === null || _collective$settings === void 0 ? void 0 : _collective$settings.tos) && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                  openInNewTab: true,
                  href: collective.settings.tos,
                  borderBottom: "2px dotted #969ba3",
                  color: "black.700",
                  textDecoration: "none",
                  fontSize: "12px",
                  mr: 2,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "host.tos",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Terms of fiscal hosting"
                    }]
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
                  ml: 2,
                  mr: 3,
                  color: "black.700",
                  fontSize: "12px",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Hero.HostFee",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Host fee: "
                    }, {
                      "type": 1,
                      "value": "fee"
                    }],
                    values: {
                      fee: /*#__PURE__*/(0,jsx_runtime.jsxs)(DefinedTerm/* default */.Z, {
                        term: DefinedTerm/* Terms.HOST_FEE */.F.HOST_FEE,
                        color: "black.700",
                        children: [collective.hostFeePercent || 0, "%"]
                      })
                    }
                  })
                })]
              }), collective.platformFeePercent > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
                ml: 2,
                mr: 3,
                color: "black.700",
                fontSize: "12px",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "Hero.PlatformFee",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Platform fee: "
                  }, {
                    "type": 1,
                    "value": "fee"
                  }],
                  values: {
                    fee: /*#__PURE__*/(0,jsx_runtime.jsxs)(DefinedTerm/* default */.Z, {
                      term: DefinedTerm/* Terms.PLATFORM_FEE */.F.PLATFORM_FEE,
                      color: "black.700",
                      children: [collective.platformFeePercent || 0, "%"]
                    })
                  }
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledShortDescription, {
          children: collective.description
        }), isEvent && /*#__PURE__*/(0,jsx_runtime.jsx)(HeroEventDetails, {
          collective: collective,
          host: host,
          displayedConnectedAccount: displayedConnectedAccount
        }), !collective.isHost && [collectives/* CollectiveType.USER */.eV.USER, collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION].includes(collective.type) && /*#__PURE__*/(0,jsx_runtime.jsx)(hero_HeroTotalCollectiveContributionsWithData, {
          collective: collective
        })]
      })]
    })]
  });
};

Hero.__docgenInfo = {
  "description": "Collective's page Hero/Banner/Cover component.",
  "methods": [],
  "displayName": "Hero",
  "props": {
    "collective": {
      "description": "The collective to display",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "type": {
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
          },
          "company": {
            "name": "string",
            "required": false
          },
          "isApproved": {
            "name": "bool",
            "required": false
          },
          "backgroundImage": {
            "name": "string",
            "required": false
          },
          "backgroundImageUrl": {
            "name": "string",
            "required": false
          },
          "canContact": {
            "name": "bool",
            "required": false
          },
          "twitterHandle": {
            "name": "string",
            "required": false
          },
          "repositoryUrl": {
            "name": "string",
            "required": false
          },
          "website": {
            "name": "string",
            "required": false
          },
          "socialLinks": {
            "name": "arrayOf",
            "value": {
              "name": "object"
            },
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "isHost": {
            "name": "bool",
            "required": false
          },
          "hostFeePercent": {
            "name": "number",
            "required": false
          },
          "platformFeePercent": {
            "name": "number",
            "required": false
          },
          "tags": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "settings": {
            "name": "shape",
            "value": {
              "tos": {
                "name": "string",
                "required": false
              }
            },
            "required": true
          },
          "connectedTo": {
            "name": "arrayOf",
            "value": {
              "name": "shape",
              "value": {
                "id": {
                  "name": "number",
                  "required": true
                },
                "collective": {
                  "name": "shape",
                  "value": {
                    "id": {
                      "name": "number",
                      "required": false
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
                  "required": false
                }
              }
            },
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "id": {
                "name": "number",
                "required": false
              },
              "name": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "host": {
      "description": "Collective's host",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
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
        }
      },
      "required": false
    },
    "onPrimaryColorChange": {
      "description": "Show the color picker input",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "isAdmin": {
      "description": "Define if we need to display special actions like the \"Edit collective\" button",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var hero_Hero = (/*#__PURE__*/react.memo(Hero));

var Hero_StyledSpan = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "Hero___StyledSpan",
  componentId: "sc-z31ttd-3"
})({
  verticalAlign: 'middle'
});

var Hero_StyledSpan2 = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "Hero___StyledSpan2",
  componentId: "sc-z31ttd-4"
})({
  verticalAlign: 'middle'
});
// EXTERNAL MODULE: ./components/HTMLContent.js
var HTMLContent = __webpack_require__(74770);
// EXTERNAL MODULE: ./components/InlineEditField.js
var InlineEditField = __webpack_require__(54746);
;// CONCATENATED MODULE: ./components/collective-page/sections/About.js













 // Dynamicly load RichTextEditor to download it only if user can edit the page




var RichTextEditorLoadingPlaceholder = function RichTextEditorLoadingPlaceholder() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
    height: 400
  });
};

var RichTextEditor = dynamic_default()(function () {
  return Promise.all(/* import() */[__webpack_require__.e(5328), __webpack_require__.e(9139)]).then(__webpack_require__.bind(__webpack_require__, 59139));
}, {
  loading: RichTextEditorLoadingPlaceholder,
  ssr: false // No need for SSR as user needs to be logged in
  ,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(59139)];
    }
  }
});
var messages = (0,lib.defineMessages)({
  placeholder: {
    id: "CollectivePage.AddLongDescription",
    defaultMessage: [{
      "type": 0,
      "value": "Add description"
    }]
  }
});
/**
 * About section category with editable description
 */

var SectionAbout = function SectionAbout(_ref) {
  var collective = _ref.collective,
      canEdit = _ref.canEdit,
      intl = _ref.intl;
  var isEmptyDescription = (0,HTMLContent/* isEmptyValue */.O)(collective.longDescription);
  var isCollective = collective.type === collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE;
  var isFund = collective.type === collectives/* CollectiveType.FUND */.eV.FUND;
  canEdit = collective.isArchived ? false : canEdit;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
    px: 2,
    pb: 5,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
      width: "100%",
      maxWidth: 700,
      margin: "0 auto",
      mt: 4,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(InlineEditField/* default */.Z, {
        mutation: mutations/* editCollectiveLongDescriptionMutation */.fN,
        values: collective,
        field: "longDescription",
        canEdit: canEdit,
        topEdit: -20,
        showEditIcon: !isEmptyDescription,
        formatBeforeSubmit: function formatBeforeSubmit(v) {
          return (0,HTMLContent/* isEmptyValue */.O)(v) ? null : v;
        },
        prepareVariables: function prepareVariables(collective, longDescription) {
          return {
            id: collective.id,
            longDescription: (0,HTMLContent/* isEmptyValue */.O)(longDescription) ? null : longDescription
          };
        },
        children: function children(_ref2) {
          var isEditing = _ref2.isEditing,
              value = _ref2.value,
              setValue = _ref2.setValue,
              enableEditor = _ref2.enableEditor,
              setUploading = _ref2.setUploading;

          if (isEditing) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(RichTextEditor, {
              kind: "ACCOUNT_LONG_DESCRIPTION",
              defaultValue: collective.longDescription,
              onChange: function onChange(e) {
                return setValue(e.target.value);
              },
              placeholder: intl.formatMessage(messages.placeholder),
              toolbarTop: [56, 64],
              toolbarBackgroundColor: "#F7F8FA",
              withStickyToolbar: true,
              videoEmbedEnabled: true,
              autoFocus: true,
              setUploading: setUploading
            });
          } else if (isEmptyDescription) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Flex */.kC, {
              justifyContent: "center",
              children: canEdit ? /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
                flexDirection: "column",
                alignItems: "center",
                children: [isCollective && !isFund && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
                  type: "info",
                  withIcon: true,
                  fontStyle: "italic",
                  fontSize: "14px",
                  mb: 4,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "SectionAbout.Why",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Tell your story and explain your purpose."
                    }]
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                  buttonSize: "large",
                  onClick: enableEditor,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "CollectivePage.AddLongDescription",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Add description"
                    }]
                  })
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                color: "black.500",
                fontStyle: "italic",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "SectionAbout.MissingDescription",
                  defaultMessage: [{
                    "type": 1,
                    "value": "collectiveName"
                  }, {
                    "type": 0,
                    "value": " hasn't provided this information yet."
                  }],
                  values: {
                    collectiveName: collective.name
                  }
                })
              })
            });
          } else {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(HTMLContent/* default */.Z, {
              content: value,
              "data-cy": "longDescription"
            });
          }
        }
      })
    })
  });
};

SectionAbout.__docgenInfo = {
  "description": "About section category with editable description",
  "methods": [],
  "displayName": "SectionAbout",
  "props": {
    "collective": {
      "description": "The collective to display description for",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "longDescription": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "isArchived": {
            "name": "bool",
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "canEdit": {
      "description": "Can user edit the description?",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "intl": {
      "description": "@ignore from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var About = (/*#__PURE__*/react.memo((0,injectIntl/* default */.ZP)(SectionAbout)));
// EXTERNAL MODULE: ./components/collective-page/sections/Budget.js
var Budget = __webpack_require__(54103);
// EXTERNAL MODULE: ./components/contribute-cards/constants.js
var constants = __webpack_require__(19146);
// EXTERNAL MODULE: ./components/contribute-cards/ContributeCardContainer.js
var ContributeCardContainer = __webpack_require__(98796);
// EXTERNAL MODULE: ./components/contribute-cards/ContributeCollective.js
var ContributeCollective = __webpack_require__(12461);
// EXTERNAL MODULE: ./components/HorizontalScroller.js + 1 modules
var HorizontalScroller = __webpack_require__(14338);
// EXTERNAL MODULE: ./components/collective-page/ContributeCardsContainer.js
var ContributeCardsContainer = __webpack_require__(38255);
;// CONCATENATED MODULE: ./components/collective-page/sections/ConnectedCollectives.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
















var ConnectedCollectives = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(ConnectedCollectives, _React$PureComponent);

  var _super = _createSuper(ConnectedCollectives);

  function ConnectedCollectives() {
    var _this;

    classCallCheck_default()(this, ConnectedCollectives);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "getContributeCardsScrollDistance", function (width) {
      var oneCardScrollDistance = constants/* CONTRIBUTE_CARD_WIDTH */.TJ + ContributeCardContainer/* CONTRIBUTE_CARD_PADDING_X.0 */.f[0] * 2;

      if (width <= oneCardScrollDistance * 2) {
        return oneCardScrollDistance;
      } else if (width <= oneCardScrollDistance * 4) {
        return oneCardScrollDistance * 2;
      } else {
        return oneCardScrollDistance * 3;
      }
    });

    return _this;
  }

  createClass_default()(ConnectedCollectives, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          connectedCollectives = _this$props.connectedCollectives;

      if (!(connectedCollectives !== null && connectedCollectives !== void 0 && connectedCollectives.length)) {
        return null;
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
        pb: 4,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
            fontSize: ['20px', '24px', '32px'],
            fontWeight: "normal",
            color: "black.700",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ConnectedCollectives",
              defaultMessage: [{
                "type": 0,
                "value": "Connected Collectives"
              }]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(HorizontalScroller/* default */.Z, {
          container: ContributeCardsContainer/* default */.Z,
          getScrollDistance: this.getContributeCardsScrollDistance,
          children: connectedCollectives.map(function (_ref) {
            var id = _ref.id,
                collective = _ref.collective;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
              px: ContributeCardContainer/* CONTRIBUTE_CARD_PADDING_X */.f,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeCollective/* default */.Z, {
                collective: collective
              })
            }, id);
          })
        }), Boolean(connectedCollectives.length > 6) && /*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/".concat(collective.slug, "/connected-collectives"),
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              mt: 4,
              width: 1,
              buttonSize: "small",
              fontSize: "14px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "ConnectedCollectives.ViewAll",
                defaultMessage: [{
                  "type": 0,
                  "value": "View all connected collectives"
                }]
              }), " \u2192"]
            })
          })
        })]
      });
    }
  }]);

  return ConnectedCollectives;
}(react.PureComponent);

ConnectedCollectives.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getContributeCardsScrollDistance",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "width",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "ConnectedCollectives",
  "props": {
    "collective": {
      "description": "Collective",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "isActive": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "connectedCollectives": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "number",
              "required": true
            },
            "contributors": {
              "name": "arrayOf",
              "value": {
                "name": "object"
              },
              "required": false
            }
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var sections_ConnectedCollectives = ((0,injectIntl/* default */.ZP)(ConnectedCollectives));
// EXTERNAL MODULE: ./node_modules/lodash/orderBy.js
var orderBy = __webpack_require__(75472);
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy);
// EXTERNAL MODULE: ./lib/constants/tiers-types.js
var tiers_types = __webpack_require__(12568);
// EXTERNAL MODULE: ./lib/events.js
var lib_events = __webpack_require__(47162);
// EXTERNAL MODULE: ./lib/tier-utils.js
var tier_utils = __webpack_require__(36648);
// EXTERNAL MODULE: ./components/ContainerOverlay.js
var ContainerOverlay = __webpack_require__(3798);
// EXTERNAL MODULE: ./components/contribute-cards/ContributeCrypto.js
var ContributeCrypto = __webpack_require__(9881);
// EXTERNAL MODULE: ./components/contribute-cards/ContributeCustom.js
var ContributeCustom = __webpack_require__(35744);
// EXTERNAL MODULE: ./components/contribute-cards/ContributeTier.js + 1 modules
var ContributeTier = __webpack_require__(62686);
// EXTERNAL MODULE: ./components/contribute-cards/CreateNew.js
var CreateNew = __webpack_require__(48451);
// EXTERNAL MODULE: ./components/StyledSpinner.tsx + 1 modules
var StyledSpinner = __webpack_require__(771);
// EXTERNAL MODULE: ./components/collective-page/graphql/queries.js
var graphql_queries = __webpack_require__(71611);
// EXTERNAL MODULE: ./components/collective-page/SectionTitle.js
var SectionTitle = __webpack_require__(27132);
;// CONCATENATED MODULE: ./components/collective-page/sections/Contribute.js















function Contribute_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Contribute_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Contribute_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Contribute_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function Contribute_createSuper(Derived) { var hasNativeReflectConstruct = Contribute_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Contribute_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }































 // Dynamic imports



var AdminContributeCardsContainer = dynamic_default()(function () {
  return Promise.all(/* import() */[__webpack_require__.e(3135), __webpack_require__.e(7038), __webpack_require__.e(2150), __webpack_require__.e(4984)]).then(__webpack_require__.bind(__webpack_require__, 82150));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(82150)];
    }
  }
});
/**
 * The contribute section, implemented as a pure component to avoid unnecessary
 * re-renders when scrolling.
 */

var SectionContribute = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(SectionContribute, _React$PureComponent);

  var _super = Contribute_createSuper(SectionContribute);

  function SectionContribute() {
    var _this;

    classCallCheck_default()(this, SectionContribute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      showTiersAdmin: false,
      isSaving: false,
      draggingId: null
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onTiersAdminReady", function () {
      _this.setState({
        showTiersAdmin: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getFinancialContributorsWithoutTier", (0,memoize_one_esm/* default */.Z)(function (contributors) {
      return contributors.filter(function (c) {
        return c.isBacker && (c.tiersIds.length === 0 || c.tiersIds[0] === null);
      });
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "hasContributors", (0,memoize_one_esm/* default */.Z)(function (contributors) {
      return contributors.find(function (c) {
        return c.isBacker;
      });
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "onContributeCardsReorder", /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(cards) {
        var _this$props, collective, editAccountSettings, cardKeys, mutationVariables;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, collective = _this$props.collective, editAccountSettings = _this$props.editAccountSettings;
                cardKeys = cards.map(function (c) {
                  return c.key;
                }); // Save the new positions

                _this.setState({
                  isSaving: true
                });

                _context.prev = 3;
                mutationVariables = {
                  collectiveId: collective.id,
                  key: tier_utils/* TIERS_ORDER_KEY */.Zq,
                  value: cardKeys
                };
                _context.next = 7;
                return editAccountSettings({
                  variables: mutationVariables,
                  update: function update(store, response) {
                    // We need to update the store manually because the response comes from API V2
                    var collectivePageQueryVariables = (0,graphql_queries/* getCollectivePageQueryVariables */.L)(collective.slug);
                    var data = store.readQuery({
                      query: graphql_queries/* collectivePageQuery */.J,
                      variables: collectivePageQueryVariables
                    });

                    var newData = set_default()(cloneDeep_default()(data), 'Collective.settings', response.data.editAccountSetting.settings);

                    store.writeQuery({
                      query: graphql_queries/* collectivePageQuery */.J,
                      variables: collectivePageQueryVariables,
                      data: newData
                    });
                  }
                });

              case 7:
                _this.setState({
                  isSaving: false
                });

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);

                _this.setState({
                  error: (0,errors/* getErrorFromGraphqlException */.H1)(_context.t0),
                  isSaving: false
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "sortContributeCards", (0,memoize_one_esm/* default */.Z)(function (cards, orderKeys) {
      return orderBy_default()(cards, function (card) {
        var index = orderKeys.findIndex(function (key) {
          return key === card.key;
        });
        return index === -1 ? Infinity : index; // put unsorted cards at the end
      });
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "getContributeCards", (0,memoize_one_esm/* default */.Z)(function (tiers) {
      var _this$props2 = _this.props,
          collective = _this$props2.collective,
          contributors = _this$props2.contributors,
          contributorsStats = _this$props2.contributorsStats,
          isAdmin = _this$props2.isAdmin;
      var hasNoContributor = !_this.hasContributors(contributors);
      var canContribute = collective.isActive && (!(0,lib_events/* isPastEvent */.Up)(collective) || isAdmin);
      var hasCustomContribution = !get_default()(collective, 'settings.disableCustomContributions', false);

      var hasCryptoContribution = !get_default()(collective, 'settings.disableCryptoContributions', true) && get_default()(collective, 'host.settings.cryptoEnabled', false); // Remove tickets


      var baseTiers = tiers.filter(function (tier) {
        return tier.type !== tiers_types/* TierTypes.TICKET */.x$.TICKET;
      });

      var contributeCards = toConsumableArray_default()(baseTiers.map(function (tier) {
        return {
          key: tier.id,
          Component: ContributeTier/* default */.Z,
          componentProps: {
            collective: collective,
            tier: tier,
            hideContributors: hasNoContributor
          }
        };
      }));

      if (hasCustomContribution) {
        contributeCards.push({
          key: 'custom',
          Component: ContributeCustom/* default */.Z,
          componentProps: {
            collective: collective,
            contributors: _this.getFinancialContributorsWithoutTier(contributors),
            stats: contributorsStats,
            hideContributors: hasNoContributor,
            disableCTA: !canContribute
          }
        });
      }

      if (hasCryptoContribution) {
        contributeCards.push({
          key: 'crypto',
          Component: ContributeCrypto/* default */.Z,
          componentProps: {
            collective: collective,
            hideContributors: true,
            // for the MVP we shall not display the financial contributors for crypto
            disableCTA: !canContribute
          }
        });
      }

      return contributeCards;
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "sortTicketTiers", (0,memoize_one_esm/* default */.Z)(function (tiers) {
      return orderBy_default()(toConsumableArray_default()(tiers), ['endsAt'], ['desc']);
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "filterTickets", (0,memoize_one_esm/* default */.Z)(function (tiers) {
      return tiers.filter(function (tier) {
        return tier.type === tiers_types/* TierTypes.TICKET */.x$.TICKET;
      });
    }));

    return _this;
  }

  createClass_default()(SectionContribute, [{
    key: "getContributeCardsScrollDistance",
    value: function getContributeCardsScrollDistance(width) {
      var oneCardScrollDistance = constants/* CONTRIBUTE_CARD_WIDTH */.TJ + ContributeCardContainer/* CONTRIBUTE_CARD_PADDING_X.0 */.f[0] * 2;

      if (width <= oneCardScrollDistance * 2) {
        return oneCardScrollDistance;
      } else if (width <= oneCardScrollDistance * 4) {
        return oneCardScrollDistance * 2;
      } else {
        return oneCardScrollDistance * 3;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _collective$parentCol,
          _this2 = this;

      var _this$props3 = this.props,
          collective = _this$props3.collective,
          tiers = _this$props3.tiers,
          events = _this$props3.events,
          connectedCollectives = _this$props3.connectedCollectives,
          contributors = _this$props3.contributors,
          isAdmin = _this$props3.isAdmin;
      var _this$state = this.state,
          isSaving = _this$state.isSaving,
          showTiersAdmin = _this$state.showTiersAdmin;
      var isEvent = collective.type === collectives/* CollectiveType.EVENT */.eV.EVENT;
      var isProject = collective.type === collectives/* CollectiveType.PROJECT */.eV.PROJECT;
      var isFund = collective.type === collectives/* CollectiveType.FUND */.eV.FUND;
      var hasOtherWaysToContribute = !isEvent && !isProject && !isFund && (isAdmin || events.length > 0 || connectedCollectives.length > 0);
      var isActive = collective.isActive;
      var hasHost = collective.host;
      var isHost = collective.isHost;
      var orderKeys = (0,tier_utils/* getCollectiveContributionCardsOrder */.rm)(collective);
      var contributeCards = this.getContributeCards(tiers);
      var sortedContributeCards = this.sortContributeCards(contributeCards, orderKeys);
      var hasContribute = Boolean(isAdmin || collective.isActive && contributeCards.length);
      var hasNoContributor = !this.hasContributors(contributors);
      var sortedTicketTiers = this.sortTicketTiers(this.filterTickets(tiers));
      var hasTickets = isEvent && Boolean(isAdmin || collective.isActive && sortedTicketTiers.length);
      var hideTicketsFromNonAdmins = (sortedTicketTiers.length === 0 || !collective.isActive) && !isAdmin;
      var cannotOrderTickets = !hasTickets && !isAdmin || (0,lib_events/* isPastEvent */.Up)(collective);
      /*
      cases
       1. admin + no host = Contribute Section and 'Start accepting financial contributions' ✅
      2a. admin + host = normal Contribute section ✅
      2b. not admin + Collective active = normal Contribute section ???
      3. not admin + Collective not active + no connectedcollectives/events = display nothing ✅
      */

      if (!hasContribute && !hasTickets && !hasOtherWaysToContribute) {
        return null;
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [isAdmin && !hasHost && !isHost && /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
          py: 4,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Flex */.kC, {
            mb: 4,
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledP, {
              color: "black.700",
              my: 2,
              mr: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "contributions.subtitle",
                defaultMessage: [{
                  "type": 0,
                  "value": "To accept financial contributions, you need to complete your setup and decide where your funds will be held."
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
            my: 5,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
              href: "/".concat(((_collective$parentCol = collective.parentCollective) === null || _collective$parentCol === void 0 ? void 0 : _collective$parentCol.slug) || collective.slug, "/accept-financial-contributions"),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                buttonStyle: "primary",
                buttonSize: "large",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "contributions.startAccepting",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Start accepting contributions"
                  }]
                })
              })
            })
          })]
        }), (isAdmin && hasHost || isAdmin && isHost || !isAdmin && isActive) && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [hasContribute && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "FinancialContributions",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Financial Contributions"
                  }]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
              pb: 4,
              "data-cy": "financial-contributions",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(HorizontalScroller/* default */.Z, {
                getScrollDistance: this.getContributeCardsScrollDistance,
                container: ContributeCardsContainer/* default */.Z,
                containerProps: {
                  disableScrollSnapping: !!this.state.draggingId
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                  children: [isSaving && /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerOverlay/* default */.Z, {
                    position: "fixed",
                    top: 0,
                    alignItems: "center",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledSpinner/* default */.Z, {
                      size: 64
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                      mt: 3,
                      fontSize: "15px",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "Saving",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Saving..."
                        }]
                      })
                    })]
                  }), !(isAdmin && showTiersAdmin) && sortedContributeCards.map(function (_ref2) {
                    var key = _ref2.key,
                        Component = _ref2.Component,
                        componentProps = _ref2.componentProps;
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeCardContainer/* default */.Z, {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, Contribute_objectSpread({}, componentProps))
                    }, key);
                  }), isAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
                    display: showTiersAdmin ? 'block' : 'none',
                    "data-cy": "admin-contribute-cards",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(AdminContributeCardsContainer, {
                      collective: collective,
                      cards: sortedContributeCards,
                      onReorder: this.onContributeCardsReorder,
                      isSaving: this.state.isSaving,
                      setDraggingId: function setDraggingId(draggingId) {
                        return _this2.setState({
                          draggingId: draggingId
                        });
                      },
                      draggingId: this.state.draggingId,
                      onMount: this.onTiersAdminReady
                    })
                  })]
                })
              })
            })]
          }), isEvent && !cannotOrderTickets && !hideTicketsFromNonAdmins && /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
            pb: 4,
            "data-cy": "Tickets",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Flex */.kC, {
                alignItems: "left",
                mb: 3,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "black.700",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "section.tickets.title",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Tickets"
                    }]
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(HorizontalScroller/* default */.Z, {
              container: ContributeCardsContainer/* default */.Z,
              getScrollDistance: this.getContributeCardsScrollDistance,
              children: [sortedTicketTiers.map(function (tier) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeCardContainer/* default */.Z, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeTier/* default */.Z, {
                    collective: collective,
                    tier: tier,
                    hideContributors: hasNoContributor,
                    disableCTA: !collective.isActive
                  })
                }, tier.id);
              }), isAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeCardContainer/* default */.Z, {
                minHeight: 150,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(CreateNew/* default */.Z, {
                  route: "/".concat(collective.parentCollective.slug, "/events/").concat(collective.slug, "/admin/tickets"),
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "SectionTickets.CreateTicket",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Create Ticket"
                    }]
                  })
                })
              })]
            })]
          }), (tiers.length > 6 || hasOtherWaysToContribute) && /*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
            pb: 4,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
              href: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(collective), "/contribute"),
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
                mt: 3,
                width: 1,
                buttonSize: "small",
                fontSize: "14px",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "SectionContribute.All",
                  defaultMessage: [{
                    "type": 0,
                    "value": "All ways to contribute"
                  }]
                }), " \u2192"]
              })
            })
          })]
        })]
      });
    }
  }]);

  return SectionContribute;
}(react.PureComponent);

var addEditAccountSettingMutation = (0,graphql/* graphql */.B)(mutations/* editAccountSettingMutation */.jt, {
  name: 'editAccountSettings',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
  }
});
SectionContribute.__docgenInfo = {
  "description": "The contribute section, implemented as a pure component to avoid unnecessary\nre-renders when scrolling.",
  "methods": [{
    "name": "onTiersAdminReady",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onContributeCardsReorder",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "cards",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getContributeCardsScrollDistance",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "width",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "SectionContribute",
  "props": {
    "tiers": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "events": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "number",
              "required": true
            },
            "contributors": {
              "name": "arrayOf",
              "value": {
                "name": "object"
              },
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "connectedCollectives": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "number",
              "required": true
            },
            "collective": {
              "name": "shape",
              "value": {
                "id": {
                  "name": "number",
                  "required": true
                }
              },
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "isActive": {
            "name": "bool",
            "required": false
          },
          "isHost": {
            "name": "bool",
            "required": false
          },
          "host": {
            "name": "object",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": true
              }
            },
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "contributorsStats": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "contributors": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "type": {
              "name": "enum",
              "computed": true,
              "value": "Object.values(CollectiveType)",
              "required": true
            },
            "isBacker": {
              "name": "bool",
              "required": false
            },
            "tiersIds": {
              "name": "arrayOf",
              "value": {
                "name": "number"
              },
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "isAdmin": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "editAccountSettings": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ var Contribute = (addEditAccountSettingMutation(SectionContribute));

var _StyledP = (0,styled_components_browser_esm/* default */.ZP)(Text.P).withConfig({
  displayName: "Contribute___StyledP",
  componentId: "sc-1ij7b9h-0"
})({
  flex: '1 0 50%',
  maxWidth: 780
});
// EXTERNAL MODULE: ./lib/constants/roles.js
var constants_roles = __webpack_require__(98216);
// EXTERNAL MODULE: ./components/StyledFilters.js
var StyledFilters = __webpack_require__(59049);
// EXTERNAL MODULE: ./components/StyledKeyframes.js
var StyledKeyframes = __webpack_require__(29925);
// EXTERNAL MODULE: ./lib/currency-utils.js
var currency_utils = __webpack_require__(17632);
// EXTERNAL MODULE: ./lib/i18n/member-role.js
var member_role = __webpack_require__(66465);
// EXTERNAL MODULE: ./components/StyledCollectiveCard.js
var StyledCollectiveCard = __webpack_require__(41216);
;// CONCATENATED MODULE: ./components/StyledMembershipCard.js


var StyledMembershipCard_excluded = ["membership", "intl"];

function StyledMembershipCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function StyledMembershipCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? StyledMembershipCard_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : StyledMembershipCard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










/**
 * A card to show a user's membership.
 */




var StyledMembershipCard = function StyledMembershipCard(_ref) {
  var _account$backers;

  var membership = _ref.membership,
      intl = _ref.intl,
      props = objectWithoutProperties_default()(_ref, StyledMembershipCard_excluded);

  var _useIntl = (0,useIntl/* default */.Z)(),
      locale = _useIntl.locale;

  var account = membership.account,
      since = membership.since,
      role = membership.role;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCollectiveCard/* default */.Z, StyledMembershipCard_objectSpread(StyledMembershipCard_objectSpread({
    collective: account
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
      p: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
        "data-cy": "caption",
        mb: 2,
        children: [role && /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          mb: 3,
          "data-cy": "contribution-date-since",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Membership.ContributorSince",
            defaultMessage: [{
              "type": 1,
              "value": "contributorType"
            }, {
              "type": 0,
              "value": " since"
            }],
            values: {
              contributorType: role === constants_roles/* default.HOST */.Z.HOST ? intl.formatMessage({
                id: "yVPYIH",
                defaultMessage: [{
                  "type": 0,
                  "value": "Hosted"
                }]
              }) : (0,member_role/* default */.Z)(intl, role)
            }
          }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            display: "block",
            fontSize: "16px",
            fontWeight: "bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(lib.FormattedDate, {
              value: since,
              month: "long",
              year: "numeric"
            })
          })]
        }), role === constants_roles/* default.BACKER */.Z.BACKER ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
          mt: 3,
          "data-cy": "amount-contributed",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
            fontSize: "12px",
            lineHeight: "18px",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "membership.totalDonations.title",
              defaultMessage: [{
                "type": 0,
                "value": "Amount contributed"
              }]
            }), ' ']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            display: "block",
            fontSize: "16px",
            fontWeight: "bold",
            children:
            /** Ideally we should breakdown amounts donated per currency, but for now
                the API only returns the total amount in collective's currency. */
            (0,currency_utils/* formatCurrency */.xG)(membership.totalDonations.valueInCents, membership.totalDonations.currency || 'USD', {
              precision: 0,
              locale: locale
            })
          })]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          mt: 3,
          fontSize: "12px",
          lineHeight: "18px",
          children: ((_account$backers = account.backers) === null || _account$backers === void 0 ? void 0 : _account$backers.totalCount) > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "StyledMembershipCard.backers.all",
            defaultMessage: [{
              "type": 6,
              "value": "count",
              "options": {
                "one": {
                  "value": [{
                    "type": 1,
                    "value": "prettyCount"
                  }, {
                    "type": 0,
                    "value": " contributor"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 1,
                    "value": "prettyCount"
                  }, {
                    "type": 0,
                    "value": " contributors"
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }],
            values: {
              count: account.backers.totalCount,
              prettyCount: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                fontWeight: "bold",
                fontSize: "16px",
                children: account.backers.totalCount
              })
            }
          })
        })]
      })
    })
  }));
};

StyledMembershipCard.__docgenInfo = {
  "description": "A card to show a user's membership.",
  "methods": [],
  "displayName": "StyledMembershipCard",
  "props": {
    "membership": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "account": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "imageUrl": {
                "name": "string",
                "required": false
              },
              "isAdmin": {
                "name": "bool",
                "required": false
              },
              "isHost": {
                "name": "bool",
                "required": false
              },
              "isIncognito": {
                "name": "bool",
                "required": false
              },
              "name": {
                "name": "string",
                "required": false
              },
              "backers": {
                "name": "shape",
                "value": {
                  "totalCount": {
                    "name": "number",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "id": {
            "name": "string",
            "required": false
          },
          "publicMessage": {
            "name": "string",
            "required": false
          },
          "role": {
            "name": "string",
            "required": false
          },
          "since": {
            "name": "string",
            "required": false
          },
          "totalDonations": {
            "name": "shape",
            "value": {
              "currency": {
                "name": "string",
                "required": false
              },
              "valueInCents": {
                "name": "number",
                "required": false
              }
            },
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
    }
  }
};
/* harmony default export */ var components_StyledMembershipCard = ((0,injectIntl/* default */.ZP)(StyledMembershipCard));
// EXTERNAL MODULE: ./components/collective-page/_constants.js
var _constants = __webpack_require__(24839);
;// CONCATENATED MODULE: ./components/collective-page/sections/Contributions.js






var _defineMessages, Contributions_templateObject, Contributions_templateObject2;



function Contributions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Contributions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Contributions_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Contributions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















var PAGE_SIZE = 15;
var FILTERS = {
  ALL: 'ALL',
  HOSTED_COLLECTIVES: 'HOST',
  HOSTED_FUNDS: 'FUNDS',
  HOSTED_EVENTS: 'EVENT',
  CORE: 'CORE',
  FINANCIAL: 'FINANCIAL',
  EVENTS: 'EVENTS'
};
var FILTER_PROPS = [{
  id: FILTERS.ALL,
  args: {
    role: [constants_roles/* default.HOST */.Z.HOST, constants_roles/* default.ADMIN */.Z.ADMIN, constants_roles/* default.CONTRIBUTOR */.Z.CONTRIBUTOR, constants_roles/* default.BACKER */.Z.BACKER, constants_roles/* default.MEMBER */.Z.MEMBER],
    accountType: null,
    orderBy: {
      field: 'MEMBER_COUNT',
      direction: 'DESC'
    }
  },
  isActive: function isActive() {
    return true;
  }
}, {
  id: FILTERS.HOSTED_COLLECTIVES,
  args: {
    role: [constants_roles/* default.HOST */.Z.HOST],
    accountType: [collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE],
    orderBy: {
      field: 'MEMBER_COUNT',
      direction: 'DESC'
    }
  },
  isActive: function isActive(roles) {
    return roles === null || roles === void 0 ? void 0 : roles.some(function (r) {
      return r.role === constants_roles/* default.HOST */.Z.HOST && r.type === collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE;
    });
  }
}, {
  id: FILTERS.HOSTED_FUNDS,
  args: {
    role: [constants_roles/* default.HOST */.Z.HOST],
    accountType: [collectives/* CollectiveType.FUND */.eV.FUND],
    orderBy: {
      field: 'MEMBER_COUNT',
      direction: 'DESC'
    }
  },
  isActive: function isActive(roles) {
    return roles === null || roles === void 0 ? void 0 : roles.some(function (r) {
      return r.role === constants_roles/* default.HOST */.Z.HOST && r.type === collectives/* CollectiveType.FUND */.eV.FUND;
    });
  }
}, {
  id: FILTERS.HOSTED_EVENTS,
  args: {
    role: [constants_roles/* default.HOST */.Z.HOST],
    accountType: [collectives/* CollectiveType.EVENT */.eV.EVENT],
    orderBy: {
      field: 'MEMBER_COUNT',
      direction: 'DESC'
    }
  },
  isActive: function isActive(roles, account) {
    return (account === null || account === void 0 ? void 0 : account.type) !== collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE && (roles === null || roles === void 0 ? void 0 : roles.some(function (r) {
      return r.role === constants_roles/* default.HOST */.Z.HOST && r.type === 'EVENT';
    }));
  }
}, {
  id: FILTERS.FINANCIAL,
  args: {
    role: [constants_roles/* default.BACKER */.Z.BACKER],
    accountType: null,
    orderBy: {
      field: 'TOTAL_CONTRIBUTED',
      direction: 'DESC'
    }
  },
  isActive: function isActive(roles) {
    return roles === null || roles === void 0 ? void 0 : roles.some(function (r) {
      return r.role === constants_roles/* default.BACKER */.Z.BACKER;
    });
  }
}, {
  id: FILTERS.CORE,
  args: {
    role: [constants_roles/* default.ADMIN */.Z.ADMIN, constants_roles/* default.MEMBER */.Z.MEMBER],
    accountType: null,
    orderBy: {
      field: 'MEMBER_COUNT',
      direction: 'DESC'
    }
  },
  isActive: function isActive(roles) {
    return roles === null || roles === void 0 ? void 0 : roles.some(function (r) {
      return r.role === constants_roles/* default.ADMIN */.Z.ADMIN || r.role === constants_roles/* default.MEMBER */.Z.MEMBER;
    });
  }
}, {
  id: FILTERS.EVENTS,
  args: {
    role: [constants_roles/* default.ATTENDEE */.Z.ATTENDEE],
    accountType: null,
    orderBy: {
      field: 'MEMBER_COUNT',
      direction: 'DESC'
    }
  },
  isActive: function isActive(roles) {
    return roles === null || roles === void 0 ? void 0 : roles.some(function (r) {
      return r.role === constants_roles/* default.ATTENDEE */.Z.ATTENDEE;
    });
  }
}];

var getAvailableFilters = function getAvailableFilters(roles) {
  return FILTER_PROPS.filter(function (f) {
    return f.isActive(roles);
  }).map(function (f) {
    return f.id;
  });
};

var I18nFilters = (0,lib.defineMessages)((_defineMessages = {}, defineProperty_default()(_defineMessages, FILTERS.ALL, {
  id: "SectionContributions.All",
  defaultMessage: [{
    "type": 0,
    "value": "All Contributions"
  }]
}), defineProperty_default()(_defineMessages, FILTERS.HOSTED_COLLECTIVES, {
  id: "HostedCollectives",
  defaultMessage: [{
    "type": 0,
    "value": "Hosted Collectives"
  }]
}), defineProperty_default()(_defineMessages, FILTERS.HOSTED_FUNDS, {
  id: "HostedFunds",
  defaultMessage: [{
    "type": 0,
    "value": "Hosted Funds"
  }]
}), defineProperty_default()(_defineMessages, FILTERS.HOSTED_EVENTS, {
  id: "HostedEvents",
  defaultMessage: [{
    "type": 0,
    "value": "Hosted Events"
  }]
}), defineProperty_default()(_defineMessages, FILTERS.FINANCIAL, {
  id: "Member.Role.BACKER",
  defaultMessage: [{
    "type": 0,
    "value": "Financial Contributor"
  }]
}), defineProperty_default()(_defineMessages, FILTERS.CORE, {
  id: "Member.Role.MEMBER",
  defaultMessage: [{
    "type": 0,
    "value": "Core Contributor"
  }]
}), defineProperty_default()(_defineMessages, FILTERS.EVENTS, {
  id: "Events",
  defaultMessage: [{
    "type": 0,
    "value": "Events"
  }]
}), _defineMessages));
var GRID_TEMPLATE_COLUMNS = 'repeat(auto-fill, minmax(220px, 1fr))';
/** A container for membership cards to ensure we have a smooth transition */

var MembershipCardContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Contributions__MembershipCardContainer",
  componentId: "sc-14wcqo7-0"
})(["animation:", " 0.2s;"], StyledKeyframes/* fadeIn */.Ji);
var contributionsSectionStaticQuery = (0,graphql_tag_lib/* default */.ZP)(Contributions_templateObject || (Contributions_templateObject = taggedTemplateLiteral_default()(["\n  query ContributionsSectionStatic($slug: String!) {\n    account(slug: $slug) {\n      id\n      settings\n      type\n      isHost\n      # limit: 1 as current best practice to avoid the API fetching entries it doesn't need\n      hostedAccounts: memberOf(\n        role: [HOST]\n        accountType: [COLLECTIVE, FUND]\n        isApproved: true\n        isArchived: false\n        limit: 1\n      ) {\n        totalCount\n      }\n      connectedAccounts: members(role: [CONNECTED_ACCOUNT]) {\n        totalCount\n        nodes {\n          id\n          role\n          tier {\n            id\n            name\n            description\n          }\n          publicMessage\n          description\n          account {\n            id\n            name\n            slug\n            type\n            isIncognito\n            isAdmin\n            isHost\n            imageUrl\n          }\n        }\n      }\n    }\n  }\n"])));
var contributionsSectionQuery = (0,graphql_tag_lib/* default */.ZP)(Contributions_templateObject2 || (Contributions_templateObject2 = taggedTemplateLiteral_default()(["\n  query ContributionsSection(\n    $slug: String!\n    $limit: Int!\n    $offset: Int\n    $role: [MemberRole]\n    $accountType: [AccountType]\n    $orderBy: OrderByInput\n  ) {\n    account(slug: $slug) {\n      id\n      settings\n      type\n      isHost\n      memberOf(\n        limit: $limit\n        offset: $offset\n        role: $role\n        accountType: $accountType\n        orderByRoles: true\n        isApproved: true\n        isArchived: false\n        orderBy: $orderBy\n      ) {\n        offset\n        limit\n        totalCount\n        roles {\n          role\n          type\n        }\n        nodes {\n          id\n          role\n          tier {\n            id\n            name\n            description\n          }\n          since\n          totalDonations {\n            currency\n            valueInCents\n          }\n          publicMessage\n          description\n          account {\n            id\n            name\n            slug\n            type\n            isIncognito\n            isAdmin\n            isHost\n            imageUrl(height: 128)\n            backgroundImageUrl(height: 200)\n            ... on Event {\n              parent {\n                id\n                backgroundImageUrl(height: 200)\n              }\n            }\n            ... on Project {\n              parent {\n                id\n                backgroundImageUrl(height: 200)\n              }\n            }\n            # limit: 1 as current best practice to avoid the API fetching entries it doesn't need\n            backers: members(role: [BACKER], limit: 1) {\n              totalCount\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

var SectionContributions = function SectionContributions(_ref) {
  var collective = _ref.collective;
  var intl = (0,useIntl/* default */.Z)();

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isLoadingMore = _React$useState2[0],
      setLoadingMore = _React$useState2[1];

  var _React$useState3 = react.useState(collective.isHost ? FILTERS.HOSTED_COLLECTIVES : FILTERS.ALL),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      filter = _React$useState4[0],
      setFilter = _React$useState4[1];

  var selectedFilter = FILTER_PROPS.find(function (f) {
    return f.id === filter;
  });

  var _useQuery = (0,client.useQuery)(contributionsSectionQuery, {
    variables: Contributions_objectSpread({
      slug: collective.slug,
      limit: PAGE_SIZE,
      offset: 0
    }, selectedFilter.args),
    context: helpers/* API_V2_CONTEXT */.T,
    notifyOnNetworkStatusChange: true
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      fetchMore = _useQuery.fetchMore;

  var _useQuery2 = (0,client.useQuery)(contributionsSectionStaticQuery, {
    variables: {
      slug: collective.slug
    },
    context: helpers/* API_V2_CONTEXT */.T
  }),
      staticData = _useQuery2.data;

  var handleLoadMore = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var offset, selectedFilter;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoadingMore(true);
              offset = memberOf.nodes.length;
              selectedFilter = FILTER_PROPS.find(function (f) {
                return f.id === filter;
              });
              _context.next = 5;
              return fetchMore({
                variables: Contributions_objectSpread({
                  offset: offset
                }, selectedFilter.args),
                updateQuery: function updateQuery(prev, _ref3) {
                  var fetchMoreResult = _ref3.fetchMoreResult;

                  if (!fetchMoreResult) {
                    return prev;
                  }

                  return Object.assign({}, prev, {
                    account: Contributions_objectSpread(Contributions_objectSpread({}, prev.account), {}, {
                      memberOf: Contributions_objectSpread(Contributions_objectSpread({}, fetchMoreResult.account.memberOf), {}, {
                        nodes: [].concat(toConsumableArray_default()(prev.account.memberOf.nodes), toConsumableArray_default()(fetchMoreResult.account.memberOf.nodes))
                      })
                    })
                  });
                }
              });

            case 5:
              setLoadingMore(false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLoadMore() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleFilterSelect = function handleFilterSelect(id) {
    setFilter(id);
    var selectedFilter = FILTER_PROPS.find(function (f) {
      return f.id === id;
    });
    fetchMore({
      variables: Contributions_objectSpread({
        offset: 0
      }, selectedFilter.args),
      updateQuery: function updateQuery(prev, _ref4) {
        var fetchMoreResult = _ref4.fetchMoreResult;
        return fetchMoreResult ? fetchMoreResult : prev;
      }
    });
  };

  var _ref5 = (data === null || data === void 0 ? void 0 : data.account) || {},
      account = _ref5.account,
      memberOf = _ref5.memberOf;

  var _ref6 = (staticData === null || staticData === void 0 ? void 0 : staticData.account) || {},
      hostedAccounts = _ref6.hostedAccounts,
      connectedAccounts = _ref6.connectedAccounts;

  var isOrganization = (account === null || account === void 0 ? void 0 : account.type) === collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION;
  var availableFilters = getAvailableFilters((memberOf === null || memberOf === void 0 ? void 0 : memberOf.roles) || [], account);
  var membersLeft = memberOf && memberOf.totalCount - memberOf.nodes.length;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
    pb: 4,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
        children: (hostedAccounts === null || hostedAccounts === void 0 ? void 0 : hostedAccounts.totalCount) > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
          fontSize: ['20px', '24px', '32px'],
          fontWeight: "normal",
          color: "black.700",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "organization.collective.memberOf.collective.host.title",
            values: {
              n: hostedAccounts.totalCount
            },
            defaultMessage: [{
              "type": 0,
              "value": "We are fiscally hosting "
            }, {
              "type": 6,
              "value": "n",
              "options": {
                "one": {
                  "value": [{
                    "type": 0,
                    "value": "this Collective"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 1,
                    "value": "n"
                  }, {
                    "type": 0,
                    "value": " Collectives"
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }]
          })
        })
      }), (availableFilters === null || availableFilters === void 0 ? void 0 : availableFilters.length) > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
        mt: 4,
        mx: "auto",
        maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledFilters/* default */.Z, {
          filters: availableFilters,
          getLabel: function getLabel(key) {
            return intl.formatMessage(I18nFilters[key]);
          },
          onChange: handleFilterSelect,
          selected: filter,
          justifyContent: "left",
          minButtonWidth: 175,
          px: _constants/* Dimensions.PADDING_X */.Db.PADDING_X,
          disabled: isLoadingMore
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
        "data-cy": "Contributions",
        maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
        px: _constants/* Dimensions.PADDING_X */.Db.PADDING_X,
        mt: 4,
        mx: "auto",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Grid */.rj, {
          gridGap: 24,
          gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
          children: [(!loading || isLoadingMore && loading) && (memberOf === null || memberOf === void 0 ? void 0 : memberOf.nodes.map(function (membership) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(MembershipCardContainer, {
              "data-cy": "collective-contribution",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_StyledMembershipCard, {
                membership: membership
              })
            }, membership.id);
          })), loading && toConsumableArray_default()(Array(membersLeft < PAGE_SIZE ? membersLeft : PAGE_SIZE).keys()).map(function (id) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
              height: 334
            }, id);
          })]
        })
      }), (memberOf === null || memberOf === void 0 ? void 0 : memberOf.nodes.length) < (memberOf === null || memberOf === void 0 ? void 0 : memberOf.totalCount) && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Flex */.kC, {
        mt: 3,
        justifyContent: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          "data-cy": "load-more",
          textTransform: "capitalize",
          minWidth: 170,
          onClick: handleLoadMore,
          loading: loading,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "loadMore",
            defaultMessage: [{
              "type": 0,
              "value": "load more"
            }]
          }), " \u2193"]
        })
      })]
    }), (connectedAccounts === null || connectedAccounts === void 0 ? void 0 : connectedAccounts.totalCount) > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
      mt: 5,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
          textAlign: "left",
          mb: 4,
          fontSize: ['20px', '24px', '32px'],
          color: "black.700",
          children: isOrganization ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "CP.Contributions.PartOfOrg",
            defaultMessage: [{
              "type": 6,
              "value": "n",
              "options": {
                "one": {
                  "value": [{
                    "type": 0,
                    "value": "This Collective is"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 0,
                    "value": "These Collectives are"
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 0,
              "value": " part of our Organization"
            }],
            values: {
              n: connectedAccounts.totalCount
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "CP.Contributions.ConnectedCollective",
            defaultMessage: [{
              "type": 6,
              "value": "n",
              "options": {
                "one": {
                  "value": [{
                    "type": 0,
                    "value": "This Collective is"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 0,
                    "value": "These Collectives are"
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 0,
              "value": " connected to us"
            }],
            values: {
              n: connectedAccounts.totalCount
            }
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
        maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
        pl: _constants/* Dimensions.PADDING_X */.Db.PADDING_X,
        m: "0 auto",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Grid */.rj, {
          gridGap: 24,
          gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
          children: connectedAccounts.nodes.map(function (membership) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(MembershipCardContainer, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_StyledMembershipCard, {
                membership: membership
              })
            }, membership.id);
          })
        })
      })]
    })]
  });
};

var ContributionsGrid = function ContributionsGrid(_ref7) {
  var entries = _ref7.entries,
      children = _ref7.children;
  return /*#__PURE__*/_jsx(Container, {
    "data-cy": "Contributions",
    maxWidth: Dimensions.MAX_SECTION_WIDTH,
    px: Dimensions.PADDING_X,
    mt: 4,
    mx: "auto",
    children: /*#__PURE__*/_jsx(Grid, {
      gridGap: 24,
      gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
      children: entries.map(function (entry) {
        return /*#__PURE__*/_jsx(MembershipCardContainer, {
          "data-cy": "collective-contribution",
          children: children(entry)
        }, entry.id);
      })
    })
  });
};

SectionContributions.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SectionContributions",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": false
          },
          "isHost": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var Contributions = (SectionContributions);
// EXTERNAL MODULE: ./components/ContributorsFilter.js
var ContributorsFilter = __webpack_require__(97866);
// EXTERNAL MODULE: ./components/ContributorsGrid.js
var ContributorsGrid = __webpack_require__(65320);
;// CONCATENATED MODULE: ./components/collective-page/images/ContributorsGridBackground.svg
/* harmony default export */ var ContributorsGridBackground = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTcxOCIgaGVpZ2h0PSIxNDUwIiB2aWV3Qm94PSIwIDAgMTcxOCAxNDUwIiBmaWxsPSJub25lIiAKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIG9wYWNpdHk9IjAuNjQiPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02NjUuMTI2IDY1Ni44MUM2NTkuOTY5IDY1Ni4wODggNjU2LjM3MyA2NTEuMzIxIDY1Ny4wOTYgNjQ2LjE2M0M2NTcuODE4IDY0MS4wMDUgNjYyLjU4NSA2MzcuNDEgNjY3Ljc0MyA2MzguMTMzQzY3Mi45MDEgNjM4Ljg1NSA2NzYuNDk2IDY0My42MjIgNjc1Ljc3NCA2NDguNzhDNjc1LjA1MSA2NTMuOTM4IDY3MC4yODQgNjU3LjUzMyA2NjUuMTI2IDY1Ni44MVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04MjIuOTUyIDY3Ni41MjhDODE5LjA3NCA2NzUuOTg1IDgxNi4zNyA2NzIuNCA4MTYuOTEzIDY2OC41MjFDODE3LjQ1NyA2NjQuNjQzIDgyMS4wNDIgNjYxLjkzOSA4MjQuOTIgNjYyLjQ4MkM4MjguNzk5IDY2My4wMjYgODMxLjUwMyA2NjYuNjExIDgzMC45NTkgNjcwLjQ4OUM4MzAuNDE2IDY3NC4zNjggODI2LjgzMSA2NzcuMDcyIDgyMi45NTIgNjc2LjUyOFoiIGZpbGw9IiNGMEYyRjUiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTYuNjYxIDU3NC42MzFDMjQ5LjczOSA1NzMuNjYxIDI0NC45MTQgNTY3LjI2NCAyNDUuODg0IDU2MC4zNDJDMjQ2Ljg1NCA1NTMuNDIxIDI1My4yNTEgNTQ4LjU5NiAyNjAuMTczIDU0OS41NjVDMjY3LjA5NCA1NTAuNTM1IDI3MS45MTkgNTU2LjkzMiAyNzAuOTUgNTYzLjg1NEMyNjkuOTggNTcwLjc3NiAyNjMuNTgzIDU3NS42MDEgMjU2LjY2MSA1NzQuNjMxWiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwMzIuNzkgNjIwLjEwOUMxMDIzLjk0IDYxOC44NyAxMDE3Ljc4IDYxMC42OTggMTAxOS4wMiA2MDEuODU2QzEwMjAuMjYgNTkzLjAxNCAxMDI4LjQzIDU4Ni44NTEgMTAzNy4yNyA1ODguMDlDMTA0Ni4xMSA1ODkuMzI4IDEwNTIuMjggNTk3LjUgMTA1MS4wNCA2MDYuMzQyQzEwNDkuOCA2MTUuMTg0IDEwNDEuNjMgNjIxLjM0OCAxMDMyLjc5IDYyMC4xMDlaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDA4Ljk5OCA1NzQuMzQxQzM5Ny44MTUgNTcyLjc3NCAzOTAuMDIgNTYyLjQzOCAzOTEuNTg2IDU1MS4yNTZDMzkzLjE1MyA1NDAuMDczIDQwMy40ODggNTMyLjI3OCA0MTQuNjcxIDUzMy44NDRDNDI1Ljg1NCA1MzUuNDExIDQzMy42NDkgNTQ1Ljc0NyA0MzIuMDgyIDU1Ni45MjlDNDMwLjUxNiA1NjguMTEyIDQyMC4xOCA1NzUuOTA3IDQwOC45OTggNTc0LjM0MVoiIGZpbGw9IiNGMEYyRjUiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03NjYuMDU1IDY0NC4wN0M3NTIuMzUxIDY0Mi4xNSA3NDIuNzk3IDYyOS40ODQgNzQ0LjcxNyA2MTUuNzc5Qzc0Ni42MzcgNjAyLjA3NCA3NTkuMzA0IDU5Mi41MiA3NzMuMDA4IDU5NC40NEM3ODYuNzEzIDU5Ni4zNiA3OTYuMjY3IDYwOS4wMjcgNzk0LjM0NyA2MjIuNzMyQzc5Mi40MjcgNjM2LjQzNyA3NzkuNzYgNjQ1Ljk5IDc2Ni4wNTUgNjQ0LjA3WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4Ni43NSA1MjUuNDQ3QzE3MC44NTEgNTIzLjIxOSAxNTkuNzY3IDUwOC41MjQgMTYxLjk5NSA0OTIuNjI0QzE2NC4yMjIgNDc2LjcyNSAxNzguOTE3IDQ2NS42NDEgMTk0LjgxNyA0NjcuODY5QzIxMC43MTcgNDcwLjA5NiAyMjEuOCA0ODQuNzkxIDIxOS41NzMgNTAwLjY5MUMyMTcuMzQ1IDUxNi41OTEgMjAyLjY1IDUyNy42NzQgMTg2Ljc1IDUyNS40NDdaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTk2LjE1OCA2MTUuMTI4QzU2OC43NDggNjExLjI4OCA1NDkuNjQxIDU4NS45NTUgNTUzLjQ4MSA1NTguNTQ2QzU1Ny4zMjEgNTMxLjEzNiA1ODIuNjU0IDUxMi4wMjkgNjEwLjA2NCA1MTUuODY5QzYzNy40NzMgNTE5LjcwOSA2NTYuNTggNTQ1LjA0MiA2NTIuNzQgNTcyLjQ1MkM2NDguOSA1OTkuODYxIDYyMy41NjcgNjE4Ljk2OCA1OTYuMTU4IDYxNS4xMjhaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTEwLjk1NSA2NDUuNTgyQzg4My41NDUgNjQxLjc0MiA4NjQuNDM4IDYxNi40MDkgODY4LjI3OCA1ODguOTk5Qzg3Mi4xMTggNTYxLjU4OSA4OTcuNDUxIDU0Mi40ODIgOTI0Ljg2MSA1NDYuMzIyQzk1Mi4yNzEgNTUwLjE2MiA5NzEuMzc4IDU3NS40OTUgOTY3LjUzOCA2MDIuOTA1Qzk2My42OTggNjMwLjMxNSA5MzguMzY1IDY0OS40MjIgOTEwLjk1NSA2NDUuNTgyWiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0NjYuOTQgNTc0LjE0NEMxNDYxLjgxIDU3NS4wNjUgMTQ1Ni45MSA1NzEuNjU1IDE0NTUuOTkgNTY2LjUyOUMxNDU1LjA3IDU2MS40MDMgMTQ1OC40OCA1NTYuNTAxIDE0NjMuNiA1NTUuNTgxQzE0NjguNzMgNTU0LjY2IDE0NzMuNjMgNTU4LjA3IDE0NzQuNTUgNTYzLjE5NkMxNDc1LjQ3IDU2OC4zMjIgMTQ3Mi4wNiA1NzMuMjI0IDE0NjYuOTQgNTc0LjE0NFoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNTk3IDUzMS45MDNDMTU5My4xNSA1MzIuNTk1IDE1ODkuNDYgNTMwLjAzMSAxNTg4Ljc3IDUyNi4xNzdDMTU4OC4wOCA1MjIuMzIyIDE1OTAuNjQgNTE4LjYzNSAxNTk0LjQ5IDUxNy45NDNDMTU5OC4zNSA1MTcuMjUxIDE2MDIuMDQgNTE5LjgxNSAxNjAyLjczIDUyMy42N0MxNjAzLjQyIDUyNy41MjUgMTYwMC44NiA1MzEuMjExIDE1OTcgNTMxLjkwM1oiIGZpbGw9IiNGMEYyRjUiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjQ4Ljg2IDU2NC4wMjlDMTI0MC4wOCA1NjUuNjA3IDEyMzEuNjcgNTU5Ljc2MiAxMjMwLjEgNTUwLjk3NUMxMjI4LjUyIDU0Mi4xODcgMTIzNC4zNiA1MzMuNzg0IDEyNDMuMTUgNTMyLjIwNkMxMjUxLjk0IDUzMC42MjggMTI2MC4zNCA1MzYuNDczIDEyNjEuOTIgNTQ1LjI2MUMxMjYzLjUgNTU0LjA0OCAxMjU3LjY1IDU2Mi40NTEgMTI0OC44NiA1NjQuMDI5WiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2ODkuNzEgNTk1LjU1N0MxNjgwLjkyIDU5Ny4xMzUgMTY3Mi41MiA1OTEuMjkgMTY3MC45NCA1ODIuNTAzQzE2NjkuMzcgNTczLjcxNSAxNjc1LjIxIDU2NS4zMTIgMTY4NCA1NjMuNzM0QzE2OTIuNzggNTYyLjE1NiAxNzAxLjE5IDU2OC4wMDEgMTcwMi43NyA1NzYuNzg4QzE3MDQuMzQgNTg1LjU3NiAxNjk4LjUgNTkzLjk3OSAxNjg5LjcxIDU5NS41NTdaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI4NC41MSA4MjIuNjA2QzEyNzAuODkgODI1LjA1MiAxMjU3Ljg2IDgxNS45OTIgMTI1NS40MiA4MDIuMzcyQzEyNTIuOTcgNzg4Ljc1MSAxMjYyLjAzIDc3NS43MjYgMTI3NS42NSA3NzMuMjhDMTI4OS4yNyA3NzAuODM0IDEzMDIuMyA3NzkuODkzIDEzMDQuNzQgNzkzLjUxNEMxMzA3LjE5IDgwNy4xMzUgMTI5OC4xMyA4MjAuMTYgMTI4NC41MSA4MjIuNjA2WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkxOS4wODQgODE0LjZDODk2LjM4MyA4MTguNjc2IDg3NC42NzUgODAzLjU3OCA4NzAuNTk5IDc4MC44NzZDODY2LjUyMiA3NTguMTc1IDg4MS42MjEgNzM2LjQ2NyA5MDQuMzIyIDczMi4zOTFDOTI3LjAyNCA3MjguMzE0IDk0OC43MzIgNzQzLjQxMyA5NTIuODA4IDc2Ni4xMTRDOTU2Ljg4NCA3ODguODE2IDk0MS43ODYgODEwLjUyNCA5MTkuMDg0IDgxNC42WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExMTcuODUgOTAzLjgxOUMxMTI5LjUzIDkwOC41NSAxMTQyLjg0IDkwMi45MTIgMTE0Ny41OCA4OTEuMjI2QzExNTIuMzEgODc5LjUzOSAxMTQ2LjY3IDg2Ni4yMjkgMTEzNC45OCA4NjEuNDk4QzExMjMuMyA4NTYuNzY2IDExMDkuOTkgODYyLjQwNCAxMTA1LjI1IDg3NC4wOTFDMTEwMC41MiA4ODUuNzc3IDExMDYuMTYgODk5LjA4NyAxMTE3Ljg1IDkwMy44MTlaIiBmaWxsPSIjRjBGMkY1IiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTM5LjMyNSA4MzAuMzVDNTY0Ljk4IDg0MC43MzcgNTk0LjE5NyA4MjguMzYgNjA0LjU4NCA4MDIuNzA2QzYxNC45NzEgNzc3LjA1MSA2MDIuNTk0IDc0Ny44MzQgNTc2LjkzOSA3MzcuNDQ3QzU1MS4yODUgNzI3LjA2IDUyMi4wNjggNzM5LjQzNyA1MTEuNjgxIDc2NS4wOTJDNTAxLjI5NCA3OTAuNzQ2IDUxMy42NzEgODE5Ljk2NCA1MzkuMzI1IDgzMC4zNVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTguNDI5IDg3Mi44MUMyNzIuMzg4IDg3OC40NjIgMjg4LjI4NiA4NzEuNzI3IDI5My45MzcgODU3Ljc2OEMyOTkuNTg5IDg0My44MDkgMjkyLjg1NCA4MjcuOTEyIDI3OC44OTYgODIyLjI2QzI2NC45MzcgODE2LjYwOSAyNDkuMDM5IDgyMy4zNDMgMjQzLjM4OCA4MzcuMzAyQzIzNy43MzYgODUxLjI2MSAyNDQuNDcgODY3LjE1OCAyNTguNDI5IDg3Mi44MVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNC41NDA2IDY5OC43NTRDMzguNTE4NyA3MDIuMTE1IDQ0LjQ2ODUgNzAxLjYxNSA0Ny44Mjk5IDY5Ny42MzdDNTEuMTkxMyA2OTMuNjU5IDUwLjY5MTQgNjg3LjcwOSA0Ni43MTMzIDY4NC4zNDhDNDIuNzM1MiA2ODAuOTg2IDM2Ljc4NTMgNjgxLjQ4NiAzMy40MjM5IDY4NS40NjRDMzAuMDYyNSA2ODkuNDQyIDMwLjU2MjQgNjk1LjM5MiAzNC41NDA2IDY5OC43NTRaIiBmaWxsPSIjRjVGN0ZBIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQxLjgwNiA3MTAuNzI0QzI0OC42MjYgNzE2LjQ4NiAyNTguODI2IDcxNS42MjkgMjY0LjU4OCA3MDguODA5QzI3MC4zNSA3MDEuOTkgMjY5LjQ5MyA2OTEuNzkgMjYyLjY3NCA2ODYuMDI3QzI1NS44NTQgNjgwLjI2NSAyNDUuNjU0IDY4MS4xMjIgMjM5Ljg5MiA2ODcuOTQyQzIzNC4xMyA2OTQuNzYxIDIzNC45ODcgNzA0Ljk2MSAyNDEuODA2IDcxMC43MjRaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTE3LjcyMzggNjk5LjI3NkMtNy4xNTMzMSA3MDguMjA4IDguNjU2MzggNzA2Ljg3OSAxNy41ODgxIDY5Ni4zMDlDMjYuNTE5OCA2ODUuNzM5IDI1LjE5MTMgNjY5LjkyOSAxNC42MjA4IDY2MC45OTdDNC4wNTAyOSA2NTIuMDY1IC0xMS43NTk0IDY1My4zOTQgLTIwLjY5MTEgNjYzLjk2NEMtMjkuNjIyOCA2NzQuNTM1IC0yOC4yOTQzIDY5MC4zNDQgLTE3LjcyMzggNjk5LjI3NloiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTE0Ljc1IDg3OC44MjFDMTEwMC4xMSA4ODEuNDUxIDEwODYuMSA4NzEuNzEgMTA4My40NyA4NTcuMDYzQzEwODAuODQgODQyLjQxNyAxMDkwLjU4IDgyOC40MTIgMTEwNS4yMyA4MjUuNzgyQzExMTkuODcgODIzLjE1MiAxMTMzLjg4IDgzMi44OTQgMTEzNi41MSA4NDcuNTRDMTEzOS4xNCA4NjIuMTg2IDExMjkuNCA4NzYuMTkxIDExMTQuNzUgODc4LjgyMVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMTguOTMzIDc1Ni4wNkMzMzYuNTUgNzcwLjk0NiAzNjIuOSA3NjguNzMyIDM3Ny43ODYgNzUxLjExNEMzOTIuNjcyIDczMy40OTcgMzkwLjQ1OCA3MDcuMTQ4IDM3Mi44NDEgNjkyLjI2MUMzNTUuMjIzIDY3Ny4zNzUgMzI4Ljg3NCA2NzkuNTg5IDMxMy45ODggNjk3LjIwN0MyOTkuMTAxIDcxNC44MjQgMzAxLjMxNSA3NDEuMTc0IDMxOC45MzMgNzU2LjA2WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTczLjg4MzcgNzQ3LjQzNkM5NS4wMjQ2IDc2NS4zIDEyNi42NDQgNzYyLjY0MyAxNDQuNTA3IDc0MS41MDJDMTYyLjM3MSA3MjAuMzYxIDE1OS43MTQgNjg4Ljc0MiAxMzguNTczIDY3MC44NzhDMTE3LjQzMiA2NTMuMDE1IDg1LjgxMjggNjU1LjY3MiA2Ny45NDkzIDY3Ni44MTNDNTAuMDg1OSA2OTcuOTU0IDUyLjc0MjggNzI5LjU3MyA3My44ODM3IDc0Ny40MzZaIiBmaWxsPSIjRjBGMkY1IiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTE4MC42NyA4MjAuMTJDMTE1My40MyA4MjUuMDEyIDExMjcuMzggODA2Ljg5NCAxMTIyLjQ5IDc3OS42NTJDMTExNy42IDc1Mi40MSAxMTM1LjcyIDcyNi4zNjEgMTE2Mi45NiA3MjEuNDY5QzExOTAuMiA3MTYuNTc3IDEyMTYuMjUgNzM0LjY5NiAxMjIxLjE0IDc2MS45MzdDMTIyNi4wNCA3ODkuMTc5IDEyMDcuOTIgODE1LjIyOCAxMTgwLjY3IDgyMC4xMloiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDEwLjcxIDc1MC4wODJDMTM4My40NyA3NTQuOTc0IDEzNTcuNDIgNzM2Ljg1NSAxMzUyLjUzIDcwOS42MTRDMTM0Ny42NCA2ODIuMzcyIDEzNjUuNzUgNjU2LjMyMyAxMzkzIDY1MS40MzFDMTQyMC4yNCA2NDYuNTM5IDE0NDYuMjkgNjY0LjY1OCAxNDUxLjE4IDY5MS44OTlDMTQ1Ni4wNyA3MTkuMTQxIDE0MzcuOTUgNzQ1LjE5IDE0MTAuNzEgNzUwLjA4MloiIGZpbGw9IiNGMEYyRjUiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01OTIuMTcyIDEwMDEuNjJDNTg2Ljk4NiAxMDAyLjExIDU4Mi4zODggOTk4LjI5NiA1ODEuOTAyIDk5My4xMTFDNTgxLjQxNiA5ODcuOTI1IDU4NS4yMjUgOTgzLjMyOCA1OTAuNDExIDk4Mi44NDFDNTk1LjU5NiA5ODIuMzU1IDYwMC4xOTQgOTg2LjE2NSA2MDAuNjggOTkxLjM1QzYwMS4xNjYgOTk2LjUzNSA1OTcuMzU3IDEwMDEuMTMgNTkyLjE3MiAxMDAxLjYyWiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc1MC4yOSA5ODQuNDEyQzc0Ni4zOTEgOTg0Ljc3OCA3NDIuOTM0IDk4MS45MTMgNzQyLjU2OCA5NzguMDE0Qzc0Mi4yMDIgOTc0LjExNCA3NDUuMDY3IDk3MC42NTcgNzQ4Ljk2NiA5NzAuMjkxQzc1Mi44NjYgOTY5LjkyNSA3NTYuMzIzIDk3Mi43OSA3NTYuNjg5IDk3Ni42ODlDNzU3LjA1NSA5ODAuNTg5IDc1NC4xOSA5ODQuMDQ2IDc1MC4yOSA5ODQuNDEyWiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3NS43NjMgMTAxNS44NUMxNjguODA1IDEwMTYuNSAxNjIuNjM1IDEwMTEuMzkgMTYxLjk4MiAxMDA0LjQzQzE2MS4zMyA5OTcuNDY5IDE2Ni40NDIgOTkxLjI5OCAxNzMuNCA5OTAuNjQ2QzE4MC4zNTkgOTg5Ljk5MyAxODYuNTI5IDk5NS4xMDYgMTg3LjE4MiAxMDAyLjA2QzE4Ny44MzQgMTAwOS4wMiAxODIuNzIyIDEwMTUuMTkgMTc1Ljc2MyAxMDE1Ljg1WiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTk0MS40NTkgODgxLjEyNUM5MzIuNTcgODgxLjk1OSA5MjQuNjg4IDg3NS40MjggOTIzLjg1NCA4NjYuNTM5QzkyMy4wMjEgODU3LjY1IDkyOS41NTEgODQ5Ljc2OCA5MzguNDQgODQ4LjkzNUM5NDcuMzI5IDg0OC4xMDEgOTU1LjIxMSA4NTQuNjMxIDk1Ni4wNDUgODYzLjUyMUM5NTYuODc4IDg3Mi40MSA5NTAuMzQ4IDg4MC4yOTIgOTQxLjQ1OSA4ODEuMTI1WiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyMy45MjcgOTgwLjQzNUMzMTIuNjg1IDk4MS40ODkgMzAyLjcxNiA5NzMuMjMgMzAxLjY2MiA5NjEuOTg3QzMwMC42MDggOTUwLjc0NSAzMDguODY3IDk0MC43NzYgMzIwLjEwOSA5MzkuNzIyQzMzMS4zNTIgOTM4LjY2OCAzNDEuMzIgOTQ2LjkyNyAzNDIuMzc1IDk1OC4xNjlDMzQzLjQyOSA5NjkuNDEyIDMzNS4xNyA5NzkuMzgxIDMyMy45MjcgOTgwLjQzNVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjkuOTg3IDY4OS41NDVDMTQxLjM1MyA2OTkuMTQ5IDE1OC4zNTMgNjk3LjcyIDE2Ny45NTcgNjg2LjM1NEMxNzcuNTYxIDY3NC45ODggMTc2LjEzMiA2NTcuOTg5IDE2NC43NjYgNjQ4LjM4NUMxNTMuNCA2MzguNzgxIDEzNi40MDEgNjQwLjIwOSAxMjYuNzk3IDY1MS41NzVDMTE3LjE5MyA2NjIuOTQxIDExOC42MjEgNjc5Ljk0MSAxMjkuOTg3IDY4OS41NDVaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjg3LjQ0MiA5NjUuOTQ3QzY3My42NjQgOTY3LjIzOSA2NjEuNDQ3IDk1Ny4xMTcgNjYwLjE1NSA5NDMuMzM5QzY1OC44NjMgOTI5LjU2MSA2NjguOTg1IDkxNy4zNDQgNjgyLjc2MyA5MTYuMDUyQzY5Ni41NDIgOTE0Ljc2IDcwOC43NTkgOTI0Ljg4MiA3MTAuMDUxIDkzOC42NkM3MTEuMzQzIDk1Mi40MzggNzAxLjIyMSA5NjQuNjU1IDY4Ny40NDIgOTY1Ljk0N1oiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ni4zOTU0IDk4NC4xMDlDODAuNDEwNCA5ODUuNjA4IDY2LjIzNyA5NzMuODY1IDY0LjczOCA5NTcuODhDNjMuMjM5IDk0MS44OTUgNzQuOTgyMiA5MjcuNzIxIDkwLjk2NzEgOTI2LjIyMkMxMDYuOTUyIDkyNC43MjMgMTIxLjEyNiA5MzYuNDY3IDEyMi42MjUgOTUyLjQ1MkMxMjQuMTIzIDk2OC40MzYgMTEyLjM4IDk4Mi42MSA5Ni4zOTU0IDk4NC4xMDlaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTE1LjQ0OSA5NzYuOTY0QzQ4Ny44OTMgOTc5LjU0OCA0NjMuNDU5IDk1OS4zMDQgNDYwLjg3NSA5MzEuNzQ3QzQ1OC4yOTEgOTA0LjE5IDQ3OC41MzUgODc5Ljc1NyA1MDYuMDkxIDg3Ny4xNzNDNTMzLjY0OCA4NzQuNTg4IDU1OC4wODIgODk0LjgzMyA1NjAuNjY2IDkyMi4zODlDNTYzLjI1IDk0OS45NDYgNTQzLjAwNiA5NzQuMzggNTE1LjQ0OSA5NzYuOTY0WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4MS4yNDIgODcxLjMwOEM3NTkuODkxIDg3My4zMSA3NDAuOTU5IDg1Ny42MjQgNzM4Ljk1NyA4MzYuMjc0QzczNi45NTUgODE0LjkyMyA3NTIuNjQgNzk1Ljk5MiA3NzMuOTkxIDc5My45ODlDNzk1LjM0MiA3OTEuOTg3IDgxNC4yNzMgODA3LjY3MyA4MTYuMjc1IDgyOS4wMjNDODE4LjI3NyA4NTAuMzc0IDgwMi41OTIgODY5LjMwNSA3ODEuMjQyIDg3MS4zMDhaIiBmaWxsPSIjRjBGMkY1IiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTM1My4zMSA3MzYuMjg0QzEzNDguNTMgNzM4LjM2MiAxMzQyLjk4IDczNi4xNzUgMTM0MC45IDczMS4zOTlDMTMzOC44MiA3MjYuNjIzIDEzNDEuMDEgNzIxLjA2NyAxMzQ1Ljc4IDcxOC45OUMxMzUwLjU2IDcxNi45MTIgMTM1Ni4xMiA3MTkuMDk5IDEzNTguMTkgNzIzLjg3NUMxMzYwLjI3IDcyOC42NSAxMzU4LjA4IDczNC4yMDYgMTM1My4zMSA3MzYuMjg0WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0NzAuMTMgNjY1LjE5QzE0NjYuNTQgNjY2Ljc1MiAxNDYyLjM2IDY2NS4xMDcgMTQ2MC44IDY2MS41MTZDMTQ1OS4yMyA2NTcuOTI1IDE0NjAuODggNjUzLjc0NyAxNDY0LjQ3IDY1Mi4xODRDMTQ2OC4wNiA2NTAuNjIyIDE0NzIuMjQgNjUyLjI2NiAxNDczLjggNjU1Ljg1OEMxNDc1LjM2IDY1OS40NDkgMTQ3My43MiA2NjMuNjI3IDE0NzAuMTMgNjY1LjE5WiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExMzguNzggNzc2LjczQzExMzAuNTkgNzgwLjI5MSAxMTIxLjA3IDc3Ni41NDIgMTExNy41MSA3NjguMzU1QzExMTMuOTUgNzYwLjE2OCAxMTE3LjcgNzUwLjY0NCAxMTI1Ljg4IDc0Ny4wODJDMTEzNC4wNyA3NDMuNTIgMTE0My41OSA3NDcuMjcgMTE0Ny4xNiA3NTUuNDU3QzExNTAuNzIgNzYzLjY0NCAxMTQ2Ljk3IDc3My4xNjggMTEzOC43OCA3NzYuNzNaIiBmaWxsPSIjRjBGMkY1IiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwNC4yNCA2MDcuODA5QzE0OTYuMDYgNjExLjM3MSAxNDg2LjUzIDYwNy42MjEgMTQ4Mi45NyA1OTkuNDM0QzE0NzkuNDEgNTkxLjI0NyAxNDgzLjE2IDU4MS43MjMgMTQ5MS4zNCA1NzguMTYxQzE0OTkuNTMgNTc0LjU5OSAxNTA5LjA2IDU3OC4zNDkgMTUxMi42MiA1ODYuNTM2QzE1MTYuMTggNTk0LjcyMyAxNTEyLjQzIDYwNC4yNDcgMTUwNC4yNCA2MDcuODA5WiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyNTIuNDQgNzYxLjA3MkMxMjM4Ljc5IDc2Ny4wMDggMTIyMi45MiA3NjAuNzYgMTIxNi45OCA3NDcuMTE1QzEyMTEuMDUgNzMzLjQ3IDEyMTcuMyA3MTcuNTk2IDEyMzAuOTQgNzExLjY1OUMxMjQ0LjU5IDcwNS43MjMgMTI2MC40NiA3MTEuOTcyIDEyNjYuNCA3MjUuNjE3QzEyNzIuMzMgNzM5LjI2MiAxMjY2LjA4IDc1NS4xMzYgMTI1Mi40NCA3NjEuMDcyWiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgyOS4xMjcgOTExLjg5MkM4NTQuNzgyIDkyMi4yNzkgODgzLjk5OSA5MDkuOTAyIDg5NC4zODYgODg0LjI0N0M5MDQuNzczIDg1OC41OTMgODkyLjM5NiA4MjkuMzc2IDg2Ni43NDIgODE4Ljk4OUM4NDEuMDg3IDgwOC42MDIgODExLjg3IDgyMC45NzkgODAxLjQ4MyA4NDYuNjMzQzc5MS4wOTYgODcyLjI4OCA4MDMuNDczIDkwMS41MDUgODI5LjEyNyA5MTEuODkyWiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0MDQuNjYgNjY3LjIyOEMxMzkxLjk3IDY3Mi43NDggMTM3Ny4yIDY2Ni45MzcgMTM3MS42OCA2NTQuMjQ3QzEzNjYuMTYgNjQxLjU1NyAxMzcxLjk3IDYyNi43OTUgMTM4NC42NiA2MjEuMjc0QzEzOTcuMzUgNjE1Ljc1MyAxNDEyLjExIDYyMS41NjQgMTQxNy42NCA2MzQuMjU0QzE0MjMuMTYgNjQ2Ljk0NCAxNDE3LjM0IDY2MS43MDcgMTQwNC42NiA2NjcuMjI4WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwNTIuNDEgNzY3LjI5NUMxMDMxLjI2IDc3Ni40OTcgMTAwNi42NSA3NjYuODExIDk5Ny40NSA3NDUuNjYxQzk4OC4yNDkgNzI0LjUxMSA5OTcuOTM1IDY5OS45MDcgMTAxOS4wOCA2OTAuNzA2QzEwNDAuMjMgNjgxLjUwNCAxMDY0Ljg0IDY5MS4xOSAxMDc0LjA0IDcxMi4zNEMxMDgzLjI0IDczMy40ODkgMTA3My41NiA3NTguMDk0IDEwNTIuNDEgNzY3LjI5NVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMzAzLjA1IDY4OC43NTJDMTI3Ny42NyA2OTkuNzk0IDEyNDguMTQgNjg4LjE3MSAxMjM3LjEgNjYyLjc5MUMxMjI2LjA2IDYzNy40MTEgMTIzNy42OCA2MDcuODg2IDEyNjMuMDYgNTk2Ljg0NEMxMjg4LjQ0IDU4NS44MDMgMTMxNy45NyA1OTcuNDI2IDEzMjkuMDEgNjIyLjgwNUMxMzQwLjA1IDY0OC4xODUgMTMyOC40MyA2NzcuNzEgMTMwMy4wNSA2ODguNzUyWiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1NDUuMzQgNjE4LjkyN0MxNTI5LjcyIDYyNS43MjEgMTUxMS41NiA2MTguNTY5IDE1MDQuNzYgNjAyLjk1NEMxNDk3Ljk3IDU4Ny4zMzggMTUwNS4xMiA1NjkuMTcxIDE1MjAuNzMgNTYyLjM3N0MxNTM2LjM1IDU1NS41ODMgMTU1NC41MiA1NjIuNzM1IDE1NjEuMzEgNTc4LjM1MUMxNTY4LjExIDU5My45NjcgMTU2MC45NSA2MTIuMTMzIDE1NDUuMzQgNjE4LjkyN1oiIHN0cm9rZT0iI0Q3REJFMCIvPgogIDwvZz4KPC9zdmc+Cg==");
;// CONCATENATED MODULE: ./components/collective-page/sections/Contributors.js









function Contributors_createSuper(Derived) { var hasNativeReflectConstruct = Contributors_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Contributors_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








 // Local imports





/** Main contributors container with the bubbles background */



var MainContainer = (0,styled_components_browser_esm/* default */.ZP)(components_Container/* default */.Z).withConfig({
  displayName: "Contributors__MainContainer",
  componentId: "sc-nwualt-0"
})(["background:linear-gradient( 0deg,rgba(255,255,255,1) 0,rgba(255,255,255,0) 75px,rgba(255,255,255,0) calc(100% - 125px),rgba(255,255,255,1) 100% ),center -900px repeat-y url(", ");"], ContributorsGridBackground);

/**
 * Section that displays all the contributors to the collective (financial, admins...etc)
 */
var SectionContributors = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(SectionContributors, _React$PureComponent);

  var _super = Contributors_createSuper(SectionContributors);

  function SectionContributors(props) {
    var _this;

    classCallCheck_default()(this, SectionContributors);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "setFilter", function (filter) {
      _this.setState({
        filter: filter
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getContributorsFilters", (0,memoize_one_esm/* default */.Z)(function (coreContributors, financialContributors) {
      if (financialContributors.length && coreContributors.length) {
        return ContributorsFilter/* FILTERS_LIST */.ah;
      } else {
        return [];
      }
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "filterContributors", (0,memoize_one_esm/* default */.Z)(function (coreContributors, financialContributors, filter) {
      // Return the proper list
      if (filter === ContributorsFilter/* CONTRIBUTOR_FILTERS.CORE */.Zx.CORE) {
        return coreContributors;
      } else if (filter === ContributorsFilter/* CONTRIBUTOR_FILTERS.FINANCIAL */.Zx.FINANCIAL) {
        return financialContributors;
      } else {
        var coreContributorsIds = new Set(coreContributors.map(function (c) {
          return c.id;
        }));
        return [].concat(toConsumableArray_default()(coreContributors), toConsumableArray_default()(financialContributors.filter(function (c) {
          return !coreContributorsIds.has(c.id);
        })));
      }
    }));

    _this.state = {
      filter: ContributorsFilter/* CONTRIBUTOR_FILTERS.ALL */.Zx.ALL
    };
    return _this;
  }

  createClass_default()(SectionContributors, [{
    key: "getTitleFontSize",
    value: function getTitleFontSize(collectiveName) {
      if (collectiveName.length < 15) {
        return 48;
      } else if (collectiveName.length < 20) {
        return 40;
      } else {
        return 32;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          financialContributors = _this$props.financialContributors,
          coreContributors = _this$props.coreContributors,
          stats = _this$props.stats;
      var filter = this.state.filter;
      var filters = this.getContributorsFilters(coreContributors, financialContributors);
      var contributors = this.filterContributors(coreContributors, financialContributors, filter);
      var hasFilters = filters.length > 1;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(MainContainer, {
        "data-cy": "Contributors",
        pb: 4,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
            fontWeight: "bold",
            fontSize: this.getTitleFontSize(collective.name),
            lineHeight: "1em",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CollectivePage.AllOfUs",
              defaultMessage: [{
                "type": 1,
                "value": "collectiveName"
              }, {
                "type": 0,
                "value": " is all of us"
              }],
              values: {
                collectiveName: collective.name
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
            mb: 3,
            fontWeight: "normal",
            color: "black.900",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CollectivePage.OurContributors",
              defaultMessage: [{
                "type": 0,
                "value": "Our contributors "
              }, {
                "type": 1,
                "value": "count"
              }],
              values: {
                count: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                  color: "black.600",
                  children: stats.backers.all + coreContributors.length
                })
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            color: "black.700",
            mb: 4,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CollectivePage.ContributorsDescription",
              defaultMessage: [{
                "type": 0,
                "value": "Thank you for supporting "
              }, {
                "type": 1,
                "value": "collectiveName"
              }, {
                "type": 0,
                "value": "."
              }],
              values: {
                collectiveName: collective.name
              }
            })
          })]
        }), hasFilters && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
          maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
          margin: "0 auto",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContributorsFilter/* default */.ZP, {
            selected: filter,
            onChange: this.setFilter,
            filters: filters,
            selectedButtonStyle: "primary",
            px: _constants/* Dimensions.PADDING_X */.Db.PADDING_X
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ContributorsGrid/* default */.Z, {
          contributors: contributors,
          collectiveId: collective.id,
          currency: collective.currency,
          maxWidthWhenNotFull: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH
        })]
      });
    }
  }]);

  return SectionContributors;
}(react.PureComponent);

defineProperty_default()(SectionContributors, "MIN_CONTRIBUTORS_TO_SHOW_FILTERS", 2);


SectionContributors.__docgenInfo = {
  "description": "Section that displays all the contributors to the collective (financial, admins...etc)",
  "methods": [{
    "name": "setFilter",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "filter",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getTitleFontSize",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "collectiveName",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "SectionContributors",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": false
    },
    "stats": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "backers": {
            "name": "shape",
            "value": {
              "all": {
                "name": "number",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "coreContributors": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "ExpectedContributorsPropTypes"
        }
      },
      "required": false
    },
    "financialContributors": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "ExpectedContributorsPropTypes"
        }
      },
      "required": false
    }
  }
};
// EXTERNAL MODULE: ./components/conversations/ConversationsList.js
var ConversationsList = __webpack_require__(69794);
// EXTERNAL MODULE: ./components/conversations/graphql.js
var conversations_graphql = __webpack_require__(37436);
;// CONCATENATED MODULE: ./components/collective-page/sections/Conversations.js










var Conversations_templateObject;

function Conversations_createSuper(Derived) { var hasNativeReflectConstruct = Conversations_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Conversations_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

















var conversationsSectionQuery = (0,graphql_tag_lib/* default */.ZP)(Conversations_templateObject || (Conversations_templateObject = taggedTemplateLiteral_default()(["\n  query ConversationsSection($collectiveSlug: String!) {\n    account(slug: $collectiveSlug, throwIfMissing: false) {\n      id\n      conversations(limit: 3) {\n        ...ConversationListFragment\n      }\n    }\n  }\n  ", "\n"])), conversations_graphql/* conversationListFragment */.mM);
/**
 * Conversations section.
 */

var SectionConversations = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(SectionConversations, _React$PureComponent);

  var _super = Conversations_createSuper(SectionConversations);

  function SectionConversations() {
    classCallCheck_default()(this, SectionConversations);

    return _super.apply(this, arguments);
  }

  createClass_default()(SectionConversations, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          data = _this$props.data;

      var conversations = get_default()(data, 'account.conversations', {});

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
        pb: 4,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
          fontSize: ['20px', '24px', '32px'],
          color: "black.700",
          mb: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "conversations",
            defaultMessage: [{
              "type": 0,
              "value": "Conversations"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
          mb: 4,
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Conversations_StyledP, {
            color: "black.700",
            my: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "conversations.subtitle",
              defaultMessage: [{
                "type": 0,
                "value": "Let’s get the discussion going! This is a space for the community to converse, ask questions, say thank you, and get things done together."
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/".concat(collective.slug, "/conversations/new"),
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              buttonStyle: "primary",
              my: [2, 0],
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                fontSize: "16px",
                fontWeight: "bold",
                mr: 2,
                children: "+"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "conversations.create",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create a Conversation"
                }]
              })]
            })
          })]
        }), isEmpty_default()(conversations.nodes) ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
            my: [3, 5],
            type: "info",
            withIcon: true,
            maxWidth: 700,
            fontStyle: "italic",
            fontSize: "14px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "SectionConversations.PostFirst",
              defaultMessage: [{
                "type": 0,
                "value": "Use this section to get the community involved in open discussions."
              }]
            })
          })
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
          mt: [3, 5],
          mb: [3, 4],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ConversationsList/* default */.Z, {
            collectiveSlug: collective.slug,
            conversations: conversations.nodes
          }), conversations.totalCount > 3 && /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/".concat(collective.slug, "/conversations"),
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              width: "100%",
              mt: 4,
              buttonSize: "small",
              fontSize: "14px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Conversations.ViewAll",
                defaultMessage: [{
                  "type": 0,
                  "value": "View all Conversations"
                }]
              }), " \u2192"]
            })
          })]
        })]
      });
    }
  }]);

  return SectionConversations;
}(react.PureComponent);

var addConversationsSectionData = (0,graphql/* graphql */.B)(conversationsSectionQuery, {
  options: function options(props) {
    return {
      variables: getConversationsSectionQueryVariables(props.collective.slug),
      context: helpers/* API_V2_CONTEXT */.T
    };
  }
});
var getConversationsSectionQueryVariables = function getConversationsSectionQueryVariables(slug) {
  return {
    collectiveSlug: slug
  };
};
SectionConversations.__docgenInfo = {
  "description": "Conversations section.",
  "methods": [],
  "displayName": "SectionConversations",
  "props": {
    "collective": {
      "description": "Collective",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": true
    },
    "data": {
      "description": "Conversations",
      "type": {
        "name": "shape",
        "value": {
          "account": {
            "name": "shape",
            "value": {
              "conversations": {
                "name": "shape",
                "value": {
                  "totalCount": {
                    "name": "number",
                    "required": false
                  },
                  "nodes": {
                    "name": "arrayOf",
                    "value": {
                      "name": "object"
                    },
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
/* harmony default export */ var Conversations = (addConversationsSectionData(SectionConversations));

var Conversations_StyledP = (0,styled_components_browser_esm/* default */.ZP)(Text.P).withConfig({
  displayName: "Conversations___StyledP",
  componentId: "sc-1frt7zd-0"
})({
  flex: '1 0 50%',
  maxWidth: 700
});
// EXTERNAL MODULE: ./public/static/images/collective-navigation/EmptyCollectivePageIllustration.png
var EmptyCollectivePageIllustration = __webpack_require__(85173);
var EmptyCollectivePageIllustration_default = /*#__PURE__*/__webpack_require__.n(EmptyCollectivePageIllustration);
;// CONCATENATED MODULE: ./components/collective-page/sections/Empty.js









var OutlineContainer = (0,styled_components_browser_esm/* default */.ZP)(components_Container/* default */.Z).withConfig({
  displayName: "Empty__OutlineContainer",
  componentId: "sc-2gb4in-0"
})(["background:#ffffff;border:1px solid #dcdee0;box-shadow:0px 1px 4px 1px rgba(49,50,51,0.1);border-radius:12px;"]);
var Illustration = styled_components_browser_esm/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "Empty__Illustration",
  componentId: "sc-2gb4in-1"
})(["width:248px;height:248px;"]);





var SectionEmpty = function SectionEmpty(props) {
  var collective = props.collective;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
    py: 5,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(OutlineContainer, {
        display: "flex",
        flexDirection: ['column', 'row'],
        maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
        py: 4,
        px: [3, 4, 6],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Flex */.kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Illustration, {
            src: (EmptyCollectivePageIllustration_default()),
            alt: "Empty jars illustration"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
          flexDirection: "column",
          ml: [0, 4, 5],
          mt: [2, 0],
          py: [0, 3],
          justifyContent: "space-around",
          alignItems: ['center', 'flex-start'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "20px",
            color: "black.600",
            lineHeight: "28px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "EmptyCollectivePage",
              defaultMessage: [{
                "type": 1,
                "value": "collective"
              }, {
                "type": 0,
                "value": " is still working on their public profile. In the meantime, check out some other Collectives!"
              }],
              values: {
                collective: collective.name
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/search",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              mt: [4, 3],
              buttonStyle: "primary",
              buttonSize: "medium",
              fontSize: "14px",
              lineHeight: "16px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "home.discoverCollectives",
                defaultMessage: [{
                  "type": 0,
                  "value": "Discover Collectives"
                }]
              }), " \u2192"]
            })
          })]
        })]
      })
    })
  });
};

SectionEmpty.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SectionEmpty",
  "props": {
    "collective": {
      "description": "Collective",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ var Empty = (SectionEmpty);
// EXTERNAL MODULE: ./components/contribute-cards/ContributeEvent.js
var ContributeEvent = __webpack_require__(77771);
;// CONCATENATED MODULE: ./components/collective-page/sections/Events.js








function Events_createSuper(Derived) { var hasNativeReflectConstruct = Events_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Events_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



















var SectionEvents = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(SectionEvents, _React$PureComponent);

  var _super = Events_createSuper(SectionEvents);

  function SectionEvents() {
    var _this;

    classCallCheck_default()(this, SectionEvents);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "sortEvents", (0,memoize_one_esm/* default */.Z)(lib_events/* sortEvents */.qP));

    defineProperty_default()(assertThisInitialized_default()(_this), "getContributeCardsScrollDistance", function (width) {
      var oneCardScrollDistance = constants/* CONTRIBUTE_CARD_WIDTH */.TJ + ContributeCardContainer/* CONTRIBUTE_CARD_PADDING_X.0 */.f[0] * 2;

      if (width <= oneCardScrollDistance * 2) {
        return oneCardScrollDistance;
      } else if (width <= oneCardScrollDistance * 4) {
        return oneCardScrollDistance * 2;
      } else {
        return oneCardScrollDistance * 3;
      }
    });

    return _this;
  }

  createClass_default()(SectionEvents, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          events = _this$props.events,
          isAdmin = _this$props.isAdmin;
      var hasNoContributorForEvents = !events.find(function (event) {
        return event.contributors.length > 0;
      });

      if (!(events !== null && events !== void 0 && events.length) && !isAdmin) {
        return null;
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
        pb: 4,
        mt: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
            fontSize: ['20px', '24px', '32px'],
            fontWeight: "normal",
            color: "black.700",
            mb: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Events",
              defaultMessage: [{
                "type": 0,
                "value": "Events"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            color: "black.700",
            mb: 4,
            children: isAdmin ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CollectivePage.SectionEvents.AdminDescription",
              defaultMessage: [{
                "type": 0,
                "value": "Set up events for your community and sell tickets that go straight to your budget."
              }]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CollectivePage.SectionEvents.Description",
              defaultMessage: [{
                "type": 1,
                "value": "collectiveName"
              }, {
                "type": 0,
                "value": " is hosting the following events."
              }],
              values: {
                collectiveName: collective.name
              }
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(HorizontalScroller/* default */.Z, {
          container: ContributeCardsContainer/* default */.Z,
          getScrollDistance: this.getContributeCardsScrollDistance,
          children: [this.sortEvents(events).map(function (event) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
              px: ContributeCardContainer/* CONTRIBUTE_CARD_PADDING_X */.f,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeEvent/* default */.Z, {
                collective: collective,
                event: event,
                hideContributors: hasNoContributorForEvents
              })
            }, event.id);
          }), isAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
            px: ContributeCardContainer/* CONTRIBUTE_CARD_PADDING_X */.f,
            minHeight: 150,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(CreateNew/* default */.Z, {
              route: "/".concat(collective.slug, "/events/create"),
              "data-cy": "create-event",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "event.create.btn",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create Event"
                }]
              })
            })
          })]
        }), Boolean((events === null || events === void 0 ? void 0 : events.length) > 6) && /*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/".concat(collective.slug, "/events"),
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              mt: 4,
              width: 1,
              buttonSize: "small",
              fontSize: "14px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "CollectivePage.SectionEvents.ViewAll",
                defaultMessage: [{
                  "type": 0,
                  "value": "View all events"
                }]
              }), " \u2192"]
            })
          })
        })]
      });
    }
  }]);

  return SectionEvents;
}(react.PureComponent);

SectionEvents.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getContributeCardsScrollDistance",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "width",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "SectionEvents",
  "props": {
    "collective": {
      "description": "Collective",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "isActive": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "events": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "number",
              "required": true
            },
            "contributors": {
              "name": "arrayOf",
              "value": {
                "name": "object"
              },
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "isAdmin": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": true
    }
  }
};
/* harmony default export */ var Events = ((0,injectIntl/* default */.ZP)(SectionEvents));
// EXTERNAL MODULE: ./components/PeriodFilterPresetsSelect.js
var PeriodFilterPresetsSelect = __webpack_require__(60732);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: ./components/collective-page/BudgetStats.js
var BudgetStats = __webpack_require__(91181);
// EXTERNAL MODULE: ./node_modules/lodash/sumBy.js
var sumBy = __webpack_require__(73303);
var sumBy_default = /*#__PURE__*/__webpack_require__.n(sumBy);
// EXTERNAL MODULE: ./node_modules/lodash/capitalize.js
var capitalize = __webpack_require__(48403);
var capitalize_default = /*#__PURE__*/__webpack_require__.n(capitalize);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/BarChart/BarChart.esm.js
var BarChart_esm = __webpack_require__(58185);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/FormatListBulleted/FormatListBulleted.esm.js
var FormatListBulleted_esm = __webpack_require__(55550);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/PieChart/PieChart.esm.js
var PieChart_esm = __webpack_require__(80345);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/Timeline/Timeline.esm.js
var Timeline_esm = __webpack_require__(7271);
// EXTERNAL MODULE: ./lib/charts.js
var charts = __webpack_require__(26043);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var index_esm = __webpack_require__(16678);
;// CONCATENATED MODULE: ./components/collective-page/sections/Budget/common.js


var common_excluded = ["headers", "rows", "truncate"];

function common_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function common_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? common_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : common_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var Table = styled_components_browser_esm/* default.table.withConfig */.ZP.table.withConfig({
  displayName: "common__Table",
  componentId: "sc-1hx1uus-0"
})(["", " thead th{font-weight:500;font-size:12px;line-height:16px;letter-spacing:0.06em;text-transform:uppercase;color:#4d4f51;}th,td{font-weight:500;font-size:16px;line-height:24px;color:#141415;:not(:first-child){border-left:1px solid #eaeaec;text-align:center;}}tbody td:first-child{text-transform:capitalize;}"], index_esm/* margin */.e6);
var makeBudgetTableRow = function makeBudgetTableRow(key, values) {
  values.key = key;
  return values;
};
var BudgetTable = function BudgetTable(_ref) {
  var _rows;

  var headers = _ref.headers,
      rows = _ref.rows,
      truncate = _ref.truncate,
      props = objectWithoutProperties_default()(_ref, common_excluded);

  if (truncate) {
    rows = rows.slice(0, truncate);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Table, common_objectSpread(common_objectSpread({
    mt: 4,
    cellSpacing: 0,
    cellPadding: "10px"
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
        children: headers.map(function (header) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: header
          }, header.key);
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
      children: (_rows = rows) === null || _rows === void 0 ? void 0 : _rows.map(function (row) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
          children: row.map(function (cell, i) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              children: cell
            }, (cell === null || cell === void 0 ? void 0 : cell.key) || "".concat(row.key, "-").concat(i));
          })
        }, row.key);
      })
    })]
  }));
};
var COLORS = ['#A3F89C', '#FFBF5F', '#8FC7FF', '#F89CE4', '#F89C9C'];
var TagMarker = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "common__TagMarker",
  componentId: "sc-1hx1uus-1"
})(["display:inline-block;margin-right:8px;height:24px;width:6px;border-radius:8px;vertical-align:bottom;background-color:", ";"], function (props) {
  return props.color;
});
var StatsCardContent = (0,styled_components_browser_esm/* default */.ZP)(components_Grid/* Flex */.kC).withConfig({
  displayName: "common__StatsCardContent",
  componentId: "sc-1hx1uus-2"
})(["div{margin:12px 0;padding:0px 36px;:not(:first-child){border-left:1px solid #d9d9d9;}}"]);
var GRAPH_TYPES = {
  LIST: 'LIST',
  TIME: 'TIME',
  BAR: 'BAR',
  PIE: 'PIE'
};
var GraphTypeButton = styled_components_browser_esm/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "common__GraphTypeButton",
  componentId: "sc-1hx1uus-3"
})(["border-radius:100%;height:32px;width:32px;color:#4d4f51;border:1px solid #f9fafb;background-color:#f9fafb;cursor:pointer;:hover{border-color:#c4c7cc;}", ""], function (props) {
  return props.active ? "\n    border-color: #1153d6;\n    background-color: rgba(20, 110, 255, 0.1);\n    " : '';
});
var makeApexOptions = function makeApexOptions(currency, timeUnit, intl) {
  return {
    legend: {
      show: true,
      horizontalAlign: 'left',
      fontSize: '16px',
      fontFamily: 'inherit',
      fontWeight: 500,
      markers: {
        width: 6,
        height: 24,
        radius: 8,
        offsetY: 6
      }
    },
    colors: COLORS,
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    stroke: {
      curve: 'straight',
      width: 1.5
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      labels: {
        formatter: function formatter(value) {
          // Show data aggregated yearly
          if (timeUnit === 'YEAR') {
            return dayjs_min_default()(value).utc().year(); // Show data aggregated monthly
          } else if (timeUnit === 'MONTH') {
            return dayjs_min_default()(value).utc().format('MMM-YYYY'); // Show data aggregated by week or day
          } else if (timeUnit === 'WEEK' || timeUnit === 'DAY') {
            return dayjs_min_default()(value).utc().format('DD-MMM-YYYY');
          }
        }
      }
    },
    yaxis: {
      labels: {
        formatter: function formatter(value) {
          return (0,charts/* formatAmountForLegend */.zz)(value, currency, intl.locale);
        }
      }
    }
  };
};
BudgetTable.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BudgetTable",
  "props": {
    "headers": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "node"
        }
      },
      "required": true
    },
    "rows": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "arrayOf",
          "value": {
            "name": "node"
          }
        }
      },
      "required": false
    },
    "truncate": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
;// CONCATENATED MODULE: ./components/collective-page/sections/Budget/ContributionsBudget.js






var ContributionsBudget_excluded = ["collective", "defaultTimeInterval"];

var ContributionsBudget_templateObject;

function ContributionsBudget_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ContributionsBudget_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ContributionsBudget_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ContributionsBudget_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



















var Chart = dynamic_default()(function () {
  return Promise.all(/* import() */[__webpack_require__.e(5279), __webpack_require__.e(7229)]).then(__webpack_require__.bind(__webpack_require__, 47229));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(47229)];
    }
  }
});



var budgetSectionContributionsQuery = (0,graphql_tag_lib/* default */.ZP)(ContributionsBudget_templateObject || (ContributionsBudget_templateObject = taggedTemplateLiteral_default()(["\n  query BudgetSectionContributionsQuery($slug: String!, $from: DateTime, $to: DateTime) {\n    account(slug: $slug) {\n      id\n      currency\n      stats {\n        id\n        contributionsAmount(dateFrom: $from, dateTo: $to, includeChildren: false) {\n          label\n          count\n          amount {\n            value\n            valueInCents\n            currency\n          }\n        }\n        contributionsAmountTimeSeries(dateFrom: $from, dateTo: $to, includeChildren: false) {\n          timeUnit\n          nodes {\n            date\n            amount {\n              value\n              currency\n            }\n            label\n          }\n        }\n      }\n    }\n  }\n"])));

var ContributionsBudget = function ContributionsBudget(_ref) {
  var _data$account, _data$account2, _data$account3, _data$account4, _data$account5, _data$account6, _data$account7;

  var collective = _ref.collective,
      defaultTimeInterval = _ref.defaultTimeInterval,
      props = objectWithoutProperties_default()(_ref, ContributionsBudget_excluded);

  var _React$useState = react.useState(defaultTimeInterval),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      tmpDateInterval = _React$useState2[0],
      setTmpDateInterval = _React$useState2[1];

  var _React$useState3 = react.useState(GRAPH_TYPES.LIST),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      graphType = _React$useState4[0],
      setGraphType = _React$useState4[1];

  var _useQuery = (0,client.useQuery)(budgetSectionContributionsQuery, {
    variables: ContributionsBudget_objectSpread({
      slug: collective.slug
    }, tmpDateInterval),
    context: helpers/* API_V2_CONTEXT */.T
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var intl = (0,useIntl/* default */.Z)();
  var timeUnit = data === null || data === void 0 ? void 0 : (_data$account = data.account) === null || _data$account === void 0 ? void 0 : _data$account.stats.contributionsAmountTimeSeries.timeUnit;

  var _extractSeriesFromTim = (0,charts/* extractSeriesFromTimeSeries */.Wi)(data === null || data === void 0 ? void 0 : (_data$account2 = data.account) === null || _data$account2 === void 0 ? void 0 : _data$account2.stats.contributionsAmountTimeSeries.nodes, {
    x: 'date',
    y: 'amount.value',
    group: 'label',
    groupNameTransformer: (capitalize_default())
  }),
      series = _extractSeriesFromTim.series;

  var defaultApexOptions = makeApexOptions(collective.currency, timeUnit, intl);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, ContributionsBudget_objectSpread(ContributionsBudget_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
      justifyContent: "space-between",
      alignItems: "center",
      flexGrow: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "20px",
        lineHeight: "20px",
        fontWeight: "500",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Contributions",
          defaultMessage: [{
            "type": 0,
            "value": "Contributions"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
        gap: "8px",
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PeriodFilterPresetsSelect/* default */.Z, {
          onChange: setTmpDateInterval,
          interval: tmpDateInterval,
          formatDateFn: function formatDateFn(v) {
            return v === null || v === void 0 ? void 0 : v.toISOString();
          },
          disabled: loading
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(GraphTypeButton, {
          active: graphType === GRAPH_TYPES.LIST,
          onClick: function onClick() {
            return setGraphType(GRAPH_TYPES.LIST);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormatListBulleted_esm/* FormatListBulleted */.C, {})
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(GraphTypeButton, {
          active: graphType === GRAPH_TYPES.TIME,
          onClick: function onClick() {
            return setGraphType(GRAPH_TYPES.TIME);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Timeline_esm/* Timeline */.e, {})
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(GraphTypeButton, {
          active: graphType === GRAPH_TYPES.BAR,
          onClick: function onClick() {
            return setGraphType(GRAPH_TYPES.BAR);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(BarChart_esm/* BarChart */.v, {})
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(GraphTypeButton, {
          active: graphType === GRAPH_TYPES.PIE,
          onClick: function onClick() {
            return setGraphType(GRAPH_TYPES.PIE);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(PieChart_esm/* PieChart */.u, {})
        })]
      })]
    }), loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
      mt: "30px",
      height: 100
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
      mt: "30px",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StatsCardContent, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
          width: "50%",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: "500",
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ContributionsReceived",
              defaultMessage: [{
                "type": 0,
                "value": "Contributions received"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            mt: "4px",
            children: sumBy_default()(data === null || data === void 0 ? void 0 : (_data$account3 = data.account) === null || _data$account3 === void 0 ? void 0 : _data$account3.stats.contributionsAmount, 'count')
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
          width: "50%",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: "500",
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Label.AmountCollected",
              defaultMessage: [{
                "type": 0,
                "value": "Amount collected"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            mt: "4px",
            children: (0,currency_utils/* formatCurrency */.xG)(sumBy_default()(data === null || data === void 0 ? void 0 : (_data$account4 = data.account) === null || _data$account4 === void 0 ? void 0 : _data$account4.stats.contributionsAmount, 'amount.valueInCents'), collective.currency)
          })]
        })]
      })
    }), loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
      mt: 4,
      height: 300
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [graphType === GRAPH_TYPES.LIST && /*#__PURE__*/(0,jsx_runtime.jsx)(BudgetTable, {
        mt: 4,
        cellPadding: "10px",
        headers: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Tiers",
          defaultMessage: [{
            "type": 0,
            "value": "Tiers"
          }]
        }, 1), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Label.NumberOfContributions",
          defaultMessage: [{
            "type": 0,
            "value": "# of Contributions"
          }]
        }, 2), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Label.AmountWithCurrency",
          defaultMessage: [{
            "type": 0,
            "value": "Amount ("
          }, {
            "type": 1,
            "value": "currency"
          }, {
            "type": 0,
            "value": ")"
          }],
          values: {
            currency: data === null || data === void 0 ? void 0 : data.account.currency
          }
        }, 3)],
        rows: data === null || data === void 0 ? void 0 : (_data$account5 = data.account) === null || _data$account5 === void 0 ? void 0 : _data$account5.stats.contributionsAmount.map(function (contribution, i) {
          return makeBudgetTableRow(contribution.label + contribution.count, [/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TagMarker, {
              color: COLORS[i % COLORS.length]
            }), contribution.label]
          }, contribution.label), contribution.count, (0,currency_utils/* formatCurrency */.xG)(contribution.amount.valueInCents, contribution.amount.currency)]);
        })
      }), graphType === GRAPH_TYPES.TIME && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
        mt: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Chart, {
          type: "area",
          width: "100%",
          height: "250px",
          options: ContributionsBudget_objectSpread(ContributionsBudget_objectSpread({}, defaultApexOptions), {}, {
            chart: {
              id: 'chart-budget-contributions-overview'
            }
          }),
          series: (0,charts/* alignSeries */.yc)(series)
        })
      }), graphType === GRAPH_TYPES.BAR && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
        mt: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Chart, {
          type: "bar",
          width: "100%",
          height: "250px",
          options: ContributionsBudget_objectSpread(ContributionsBudget_objectSpread({}, defaultApexOptions), {}, {
            chart: {
              id: 'chart-budget-expenses-stacked-bars',
              stacked: true
            }
          }),
          series: (0,charts/* alignSeries */.yc)(series)
        })
      }), graphType === GRAPH_TYPES.PIE && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
        mt: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Chart, {
          type: "pie",
          width: "100%",
          height: "300px",
          options: {
            labels: data === null || data === void 0 ? void 0 : (_data$account6 = data.account) === null || _data$account6 === void 0 ? void 0 : _data$account6.stats.contributionsAmount.map(function (contribution) {
              return capitalize_default()(contribution.label);
            }),
            colors: COLORS,
            chart: {
              id: 'chart-budget-expenses-pie'
            },
            legend: ContributionsBudget_objectSpread(ContributionsBudget_objectSpread({}, defaultApexOptions.legend), {}, {
              position: 'left'
            }),
            xaxis: defaultApexOptions.xaxis,
            yaxis: defaultApexOptions.yaxis
          },
          series: data === null || data === void 0 ? void 0 : (_data$account7 = data.account) === null || _data$account7 === void 0 ? void 0 : _data$account7.stats.contributionsAmount.map(function (contribution) {
            return contribution.amount.value;
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      mt: 3,
      textAlign: "right",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.Z, {
        href: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(collective), "/transactions?kind=ADDED_FUNDS%2CCONTRIBUTION"),
        "data-cy": "view-all-contributions-link",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "CollectivePage.SectionBudget.ViewAllContributions",
          defaultMessage: [{
            "type": 0,
            "value": "View all contributions"
          }]
        }), ' ', "\u2192"]
      })
    })]
  }));
};

ContributionsBudget.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributionsBudget",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": false
    },
    "defaultTimeInterval": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "from": {
            "name": "object",
            "required": false
          },
          "to": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var Budget_ContributionsBudget = (ContributionsBudget);
;// CONCATENATED MODULE: ./components/collective-page/sections/Budget/ExpenseBudget.js






var ExpenseBudget_excluded = ["collective", "defaultTimeInterval"];

var ExpenseBudget_templateObject;

function ExpenseBudget_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpenseBudget_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpenseBudget_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpenseBudget_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



















var ExpenseBudget_Chart = dynamic_default()(function () {
  return Promise.all(/* import() */[__webpack_require__.e(5279), __webpack_require__.e(7229)]).then(__webpack_require__.bind(__webpack_require__, 47229));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(47229)];
    }
  }
});



var budgetSectionExpenseQuery = (0,graphql_tag_lib/* default */.ZP)(ExpenseBudget_templateObject || (ExpenseBudget_templateObject = taggedTemplateLiteral_default()(["\n  query BudgetSectionExpenseQuery($slug: String!, $from: DateTime, $to: DateTime) {\n    account(slug: $slug) {\n      id\n      currency\n      stats {\n        id\n        expensesTags(dateFrom: $from, dateTo: $to, includeChildren: false) {\n          label\n          count\n          amount {\n            value\n            valueInCents\n            currency\n          }\n        }\n        expensesTagsTimeSeries(dateFrom: $from, dateTo: $to, includeChildren: false) {\n          timeUnit\n          nodes {\n            date\n            amount {\n              value\n              currency\n            }\n            label\n          }\n        }\n      }\n    }\n  }\n"])));

var ExpenseBudget = function ExpenseBudget(_ref) {
  var _data$account, _data$account2, _data$account3, _data$account4, _data$account5, _data$account6, _data$account7;

  var collective = _ref.collective,
      defaultTimeInterval = _ref.defaultTimeInterval,
      props = objectWithoutProperties_default()(_ref, ExpenseBudget_excluded);

  var _React$useState = react.useState(defaultTimeInterval),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      tmpDateInterval = _React$useState2[0],
      setTmpDateInterval = _React$useState2[1];

  var _React$useState3 = react.useState(GRAPH_TYPES.LIST),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      graphType = _React$useState4[0],
      setGraphType = _React$useState4[1];

  var _useQuery = (0,client.useQuery)(budgetSectionExpenseQuery, {
    variables: ExpenseBudget_objectSpread({
      slug: collective.slug
    }, tmpDateInterval),
    context: helpers/* API_V2_CONTEXT */.T
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var intl = (0,useIntl/* default */.Z)();
  var timeUnit = data === null || data === void 0 ? void 0 : (_data$account = data.account) === null || _data$account === void 0 ? void 0 : _data$account.stats.expensesTagsTimeSeries.timeUnit;

  var _extractSeriesFromTim = (0,charts/* extractSeriesFromTimeSeries */.Wi)(data === null || data === void 0 ? void 0 : (_data$account2 = data.account) === null || _data$account2 === void 0 ? void 0 : _data$account2.stats.expensesTagsTimeSeries.nodes, {
    x: 'date',
    y: 'amount.value',
    group: 'label',
    groupNameTransformer: (capitalize_default())
  }),
      series = _extractSeriesFromTim.series;

  var defaultApexOptions = makeApexOptions(collective.currency, timeUnit, intl);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, ExpenseBudget_objectSpread(ExpenseBudget_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
      justifyContent: "space-between",
      alignItems: "center",
      flexGrow: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "20px",
        lineHeight: "20px",
        fontWeight: "500",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Expenses",
          defaultMessage: [{
            "type": 0,
            "value": "Expenses"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
        gap: "8px",
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PeriodFilterPresetsSelect/* default */.Z, {
          onChange: setTmpDateInterval,
          interval: tmpDateInterval,
          formatDateFn: function formatDateFn(v) {
            return v === null || v === void 0 ? void 0 : v.toISOString();
          },
          disabled: loading
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(GraphTypeButton, {
          active: graphType === GRAPH_TYPES.LIST,
          onClick: function onClick() {
            return setGraphType(GRAPH_TYPES.LIST);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormatListBulleted_esm/* FormatListBulleted */.C, {})
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(GraphTypeButton, {
          active: graphType === GRAPH_TYPES.TIME,
          onClick: function onClick() {
            return setGraphType(GRAPH_TYPES.TIME);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Timeline_esm/* Timeline */.e, {})
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(GraphTypeButton, {
          active: graphType === GRAPH_TYPES.BAR,
          onClick: function onClick() {
            return setGraphType(GRAPH_TYPES.BAR);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(BarChart_esm/* BarChart */.v, {})
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(GraphTypeButton, {
          active: graphType === GRAPH_TYPES.PIE,
          onClick: function onClick() {
            return setGraphType(GRAPH_TYPES.PIE);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(PieChart_esm/* PieChart */.u, {})
        })]
      })]
    }), loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
      mt: "30px",
      height: 100
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
      mt: "30px",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StatsCardContent, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
          width: "50%",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: "500",
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ExpensesPaid",
              defaultMessage: [{
                "type": 0,
                "value": "Expenses paid"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            mt: "4px",
            children: sumBy_default()(data === null || data === void 0 ? void 0 : (_data$account3 = data.account) === null || _data$account3 === void 0 ? void 0 : _data$account3.stats.expensesTags, 'count')
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
          width: "50%",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: "500",
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "AmountDisbursed",
              defaultMessage: [{
                "type": 0,
                "value": "Amount disbursed"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            mt: "4px",
            children: (0,currency_utils/* formatCurrency */.xG)(sumBy_default()(data === null || data === void 0 ? void 0 : (_data$account4 = data.account) === null || _data$account4 === void 0 ? void 0 : _data$account4.stats.expensesTags, 'amount.valueInCents'), collective.currency)
          })]
        })]
      })
    }), loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
      mt: 4,
      height: 300
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [graphType === GRAPH_TYPES.LIST && /*#__PURE__*/(0,jsx_runtime.jsx)(BudgetTable, {
        mt: 4,
        cellPadding: "10px",
        headers: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Tags",
          defaultMessage: [{
            "type": 0,
            "value": "Tags"
          }]
        }, 1), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Label.NumberOfExpenses",
          defaultMessage: [{
            "type": 0,
            "value": "# of Expenses"
          }]
        }, 2), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Label.AmountWithCurrency",
          defaultMessage: [{
            "type": 0,
            "value": "Amount ("
          }, {
            "type": 1,
            "value": "currency"
          }, {
            "type": 0,
            "value": ")"
          }],
          values: {
            currency: data === null || data === void 0 ? void 0 : data.account.currency
          }
        }, 3)],
        rows: data === null || data === void 0 ? void 0 : (_data$account5 = data.account) === null || _data$account5 === void 0 ? void 0 : _data$account5.stats.expensesTags.map(function (expenseTag, i) {
          return makeBudgetTableRow(expenseTag.id + expenseTag.count, [/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TagMarker, {
              color: COLORS[i % COLORS.length]
            }), expenseTag.label]
          }, expenseTag.label), expenseTag.count, (0,currency_utils/* formatCurrency */.xG)(expenseTag.amount.valueInCents, expenseTag.amount.currency)]);
        })
      }), graphType === GRAPH_TYPES.TIME && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
        mt: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseBudget_Chart, {
          type: "area",
          width: "100%",
          height: "250px",
          options: ExpenseBudget_objectSpread(ExpenseBudget_objectSpread({}, defaultApexOptions), {}, {
            chart: {
              id: 'chart-budget-expenses-time-series'
            }
          }),
          series: (0,charts/* alignSeries */.yc)(series)
        })
      }), graphType === GRAPH_TYPES.BAR && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
        mt: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseBudget_Chart, {
          type: "bar",
          width: "100%",
          height: "250px",
          options: ExpenseBudget_objectSpread(ExpenseBudget_objectSpread({}, defaultApexOptions), {}, {
            chart: {
              id: 'chart-budget-expenses-stacked-bars',
              stacked: true
            }
          }),
          series: (0,charts/* alignSeries */.yc)(series)
        })
      }), graphType === GRAPH_TYPES.PIE && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
        mt: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseBudget_Chart, {
          type: "pie",
          width: "100%",
          height: "300px",
          options: {
            labels: data === null || data === void 0 ? void 0 : (_data$account6 = data.account) === null || _data$account6 === void 0 ? void 0 : _data$account6.stats.expensesTags.map(function (expenseTag) {
              return capitalize_default()(expenseTag.label);
            }),
            colors: COLORS,
            chart: {
              id: 'chart-budget-expenses-pie'
            },
            legend: ExpenseBudget_objectSpread(ExpenseBudget_objectSpread({}, defaultApexOptions.legend), {}, {
              position: 'left'
            }),
            xaxis: defaultApexOptions.xaxis,
            yaxis: defaultApexOptions.yaxis
          },
          series: data === null || data === void 0 ? void 0 : (_data$account7 = data.account) === null || _data$account7 === void 0 ? void 0 : _data$account7.stats.expensesTags.map(function (expenseTag) {
            return expenseTag.amount.value;
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      mt: 3,
      textAlign: "right",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.Z, {
        href: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(collective), "/expenses"),
        "data-cy": "view-all-expenses-link",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "CollectivePage.SectionBudget.ViewAllExpenses",
          defaultMessage: [{
            "type": 0,
            "value": "View all expenses"
          }]
        }), ' ', "\u2192"]
      })
    })]
  }));
};

ExpenseBudget.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseBudget",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": false
    },
    "defaultTimeInterval": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "from": {
            "name": "object",
            "required": false
          },
          "to": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var Budget_ExpenseBudget = (ExpenseBudget);
;// CONCATENATED MODULE: ./components/collective-page/sections/FinancialOverview.js


var FinancialOverview_templateObject;














var budgetSectionQuery = (0,graphql_tag_lib/* default */.ZP)(FinancialOverview_templateObject || (FinancialOverview_templateObject = taggedTemplateLiteral_default()(["\n  query BudgetSection($slug: String!) {\n    account(slug: $slug) {\n      id\n      stats {\n        id\n        balance {\n          valueInCents\n          currency\n        }\n        consolidatedBalance {\n          valueInCents\n          currency\n        }\n        yearlyBudget {\n          valueInCents\n          currency\n        }\n        activeRecurringContributions\n        totalAmountReceived(periodInMonths: 12) {\n          valueInCents\n          currency\n        }\n        totalAmountRaised: totalAmountReceived {\n          valueInCents\n          currency\n        }\n        totalNetAmountRaised: totalNetAmountReceived {\n          valueInCents\n          currency\n        }\n      }\n    }\n  }\n"])));
/**
 * The budget section. Shows the expenses, the latest transactions and some statistics
 * abut the global budget of the collective.
 */

var SectionFinancialOverview = function SectionFinancialOverview(_ref) {
  var _data$account;

  var collective = _ref.collective,
      LoggedInUser = _ref.LoggedInUser;
  var budgetQueryResult = (0,client.useQuery)(budgetSectionQuery, {
    variables: {
      slug: collective.slug
    },
    context: helpers/* API_V2_CONTEXT */.T
  });
  var data = budgetQueryResult.data,
      refetch = budgetQueryResult.refetch;
  var isLoading = budgetQueryResult.loading;
  var defaultTimeInterval = PeriodFilterPresetsSelect/* PERIOD_FILTER_PRESETS.allTime.getInterval */.p.allTime.getInterval(); // Refetch data when user logs in to refresh permissions

  react.useEffect(function () {
    if (LoggedInUser) {
      refetch();
    }
  }, [LoggedInUser]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
    pb: 4,
    children: [isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
      height: 300
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(BudgetStats/* default */.Z, {
      collective: collective,
      stats: data === null || data === void 0 ? void 0 : (_data$account = data.account) === null || _data$account === void 0 ? void 0 : _data$account.stats,
      horizontal: true
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
      flexDirection: ['column', null, 'row'],
      alignItems: "flex-start",
      gap: '48px',
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Budget_ExpenseBudget, {
        collective: collective,
        defaultTimeInterval: defaultTimeInterval,
        mt: 4,
        flexDirection: "column",
        flexGrow: 1,
        maxWidth: ['100%', null, '50%'],
        width: ['100%', null, 'auto']
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Budget_ContributionsBudget, {
        collective: collective,
        defaultTimeInterval: defaultTimeInterval,
        mt: 4,
        flexDirection: "column",
        flexGrow: 1,
        maxWidth: ['initial', null, '50%'],
        width: ['100%', null, 'auto']
      })]
    })]
  });
};

SectionFinancialOverview.__docgenInfo = {
  "description": "The budget section. Shows the expenses, the latest transactions and some statistics\nabut the global budget of the collective.",
  "methods": [],
  "displayName": "SectionFinancialOverview",
  "props": {
    "collective": {
      "description": "Collective",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "isArchived": {
            "name": "bool",
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "host": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var FinancialOverview = (/*#__PURE__*/react.memo((0,UserProvider/* withUser */.ns)(SectionFinancialOverview)));
;// CONCATENATED MODULE: ./components/collective-page/sections/Goals.js



 // Dynamicly load Goals cover to download it if enabled



var GoalsCoverLoadingPlaceholder = function GoalsCoverLoadingPlaceholder() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
    height: 400
  });
};

var GoalsCover = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 5593).then(__webpack_require__.bind(__webpack_require__, 75593));
}, {
  loading: GoalsCoverLoadingPlaceholder,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(75593)];
    }
  }
});
/**
 * Display the general goals for the collective
 */

var SectionGoals = function SectionGoals(_ref) {
  var collective = _ref.collective;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
    background: "rgb(245, 247, 250)",
    pt: 5,
    pb: 40,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
      maxWidth: "80%",
      m: "0 auto",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(GoalsCover, {
        collective: collective
      })
    })
  });
};

SectionGoals.__docgenInfo = {
  "description": "Display the general goals for the collective",
  "methods": [],
  "displayName": "SectionGoals",
  "props": {
    "collective": {
      "description": "The collective to display description for",
      "type": {
        "name": "shape",
        "value": {
          "settings": {
            "name": "object",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ var Goals = (/*#__PURE__*/react.memo(SectionGoals));
// EXTERNAL MODULE: ./components/Location.js + 1 modules
var components_Location = __webpack_require__(87819);
;// CONCATENATED MODULE: ./components/collective-page/sections/Location.js













var isEmptyOnlineLocation = function isEmptyOnlineLocation(event) {
  var _event$location;

  return ((_event$location = event.location) === null || _event$location === void 0 ? void 0 : _event$location.name) === 'Online' && !event.location.address && !event.privateInstructions;
};

var Location = function Location(_ref) {
  var event = _ref.collective,
      refetch = _ref.refetch;

  var _useLoggedInUser = (0,useLoggedInUser/* default */.Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var prevLoggedInUser = react.useRef(LoggedInUser);
  react.useEffect(function () {
    if (LoggedInUser && !prevLoggedInUser.current) {
      // To make sure user gets access to privateInstructions
      refetch();
      prevLoggedInUser.current = LoggedInUser;
    }
  }, [LoggedInUser]);

  if ((0,collective_lib/* isEmptyCollectiveLocation */.yE)(event) || isEmptyOnlineLocation(event)) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
    pb: 4,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
      pb: 4,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "SectionLocation.Title",
          defaultMessage: [{
            "type": 0,
            "value": "Location"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Location/* default */.Z, {
        location: event.location,
        privateInstructions: event.privateInstructions,
        showTitle: false
      }), event.privateInstructions && /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
        maxWidth: 700,
        mx: "auto",
        mt: 4,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontWeight: "bold",
          fontSize: "18px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "event.privateInstructions.label",
            defaultMessage: [{
              "type": 0,
              "value": "Private instructions"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          mt: 3,
          fontSize: "14px",
          whiteSpace: "pre-wrap",
          children: event.privateInstructions
        })]
      })]
    })
  });
};

Location.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Location",
  "props": {
    "refetch": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "location": {
            "name": "object",
            "required": false
          },
          "privateInstructions": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ var sections_Location = (Location);
// EXTERNAL MODULE: ./components/ContributorCard.js + 1 modules
var ContributorCard = __webpack_require__(45222);
;// CONCATENATED MODULE: ./components/collective-page/sections/OurTeam.js



function OurTeam_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function OurTeam_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? OurTeam_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : OurTeam_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var COLLECTIVE_CARD_WIDTH = 144;
/**
 * Our Team section for the About section category
 */

var SectionOurTeam = function SectionOurTeam(_ref) {
  var collective = _ref.collective,
      coreContributors = _ref.coreContributors,
      LoggedInUser = _ref.LoggedInUser;

  var loggedUserCollectiveId = get_default()(LoggedInUser, 'CollectiveId');

  return /*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
    py: [3, 4],
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
      width: "100%",
      maxWidth: 700,
      margin: "0 auto",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H2, {
        textAlign: "center",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "500",
        color: "black.700",
        mb: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "OurTeam",
          defaultMessage: [{
            "type": 0,
            "value": "Our team"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        py: 2,
        children: coreContributors.map(function (contributor) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ContributorCard/* default */.Z, {
            m: 2,
            width: COLLECTIVE_CARD_WIDTH,
            height: "auto",
            contributor: contributor,
            currency: collective.currency,
            collectiveId: collective.id,
            isLoggedUser: loggedUserCollectiveId === contributor.collectiveId,
            hideTotalAmountDonated: true
          }, contributor.id);
        })
      }), collective.canContact && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContactCollectiveBtn/* default */.Z, {
          collective: collective,
          LoggedInUser: LoggedInUser,
          children: function children(btnProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, OurTeam_objectSpread(OurTeam_objectSpread({}, btnProps), {}, {
              buttonStyle: "secondary",
              mt: [3, 4],
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                mr: "8px",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Mail_esm/* Mail */.M, {
                  size: 16
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "FAYdqn",
                defaultMessage: [{
                  "type": 0,
                  "value": "Contact Collective"
                }]
              })]
            }));
          }
        })
      })]
    })
  });
};

SectionOurTeam.__docgenInfo = {
  "description": "Our Team section for the About section category",
  "methods": [],
  "displayName": "SectionOurTeam",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "coreContributors": {
                "name": "array",
                "required": true
              }
            },
            "required": false
          },
          "canContact": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "coreContributors": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": true
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var OurTeam = (/*#__PURE__*/react.memo(SectionOurTeam));
// EXTERNAL MODULE: ./node_modules/@styled-system/css/dist/index.esm.js
var dist_index_esm = __webpack_require__(37947);
// EXTERNAL MODULE: ./components/contribute-cards/ContributeProject.js
var ContributeProject = __webpack_require__(55350);
;// CONCATENATED MODULE: ./components/collective-page/sections/Projects.js








function Projects_createSuper(Derived) { var hasNativeReflectConstruct = Projects_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Projects_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



















var CONTRIBUTE_CARD_PADDING_X = [15, 18];
var Projects_ContributeCardContainer = (0,styled_components_browser_esm/* default */.ZP)(components_Grid/* Box */.xu).attrs({
  px: CONTRIBUTE_CARD_PADDING_X
}).withConfig({
  displayName: "Projects__ContributeCardContainer",
  componentId: "sc-1ytknh-0"
})((0,dist_index_esm/* css */.iv)({
  scrollSnapAlign: ['center', null, 'start']
}));

var SectionProjects = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(SectionProjects, _React$PureComponent);

  var _super = Projects_createSuper(SectionProjects);

  function SectionProjects() {
    var _this;

    classCallCheck_default()(this, SectionProjects);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "filterProjects", (0,memoize_one_esm/* default */.Z)(function (projects, isAdmin) {
      if (isAdmin) {
        return projects;
      } else {
        return projects.filter(function (p) {
          return !p.isArchived;
        });
      }
    }));

    return _this;
  }

  createClass_default()(SectionProjects, [{
    key: "getContributeCardsScrollDistance",
    value: function getContributeCardsScrollDistance(width) {
      var oneCardScrollDistance = constants/* CONTRIBUTE_CARD_WIDTH */.TJ + CONTRIBUTE_CARD_PADDING_X[0] * 2;

      if (width <= oneCardScrollDistance * 2) {
        return oneCardScrollDistance;
      } else if (width <= oneCardScrollDistance * 4) {
        return oneCardScrollDistance * 2;
      } else {
        return oneCardScrollDistance * 3;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          isAdmin = _this$props.isAdmin;
      var projects = this.filterProjects(this.props.projects, isAdmin);

      if ((projects.length === 0 || !collective.isActive) && !isAdmin) {
        return null;
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
        pt: [4, 5],
        "data-cy": "Projects",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Projects",
              defaultMessage: [{
                "type": 0,
                "value": "Projects"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            color: "black.700",
            mb: 4,
            children: isAdmin ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CollectivePage.SectionProjects.AdminDescription",
              defaultMessage: [{
                "type": 0,
                "value": "Manage finances for a project or initiative separate from your collective budget."
              }]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "CollectivePage.SectionProjects.Description",
              defaultMessage: [{
                "type": 0,
                "value": "Support the following initiatives from "
              }, {
                "type": 1,
                "value": "collectiveName"
              }, {
                "type": 0,
                "value": "."
              }],
              values: {
                collectiveName: collective.name
              }
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
          mb: 4,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(HorizontalScroller/* default */.Z, {
            container: ContributeCardsContainer/* default */.Z,
            getScrollDistance: this.getContributeCardsScrollDistance,
            children: [projects.map(function (project) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
                px: CONTRIBUTE_CARD_PADDING_X,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeProject/* default */.Z, {
                  collective: collective,
                  project: project,
                  disableCTA: !project.isActive,
                  hideContributors: !projects.some(function (project) {
                    return project.contributors.length;
                  })
                })
              }, project.id);
            }), isAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)(Projects_ContributeCardContainer, {
              minHeight: 150,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(CreateNew/* default */.Z, {
                route: "/".concat(collective.slug, "/projects/create"),
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "SectionProjects.CreateProject",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create Project"
                  }]
                })
              })
            })]
          }), Boolean(projects === null || projects === void 0 ? void 0 : projects.length) && /*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
              href: "/".concat(collective.slug, "/projects"),
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
                mt: 4,
                width: 1,
                buttonSize: "small",
                fontSize: "14px",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "CollectivePage.SectionProjects.ViewAll",
                  defaultMessage: [{
                    "type": 0,
                    "value": "View all projects"
                  }]
                }), " \u2192"]
              })
            })
          })]
        })]
      });
    }
  }]);

  return SectionProjects;
}(react.PureComponent);

SectionProjects.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getContributeCardsScrollDistance",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "width",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "SectionProjects",
  "props": {
    "projects": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "isActive": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false
    },
    "isAdmin": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showTitle": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var Projects = (SectionProjects);
// EXTERNAL MODULE: ./components/recurring-contributions/graphql/queries.js
var recurring_contributions_graphql_queries = __webpack_require__(19471);
// EXTERNAL MODULE: ./components/recurring-contributions/RecurringContributionsContainer.js + 4 modules
var RecurringContributionsContainer = __webpack_require__(94605);
;// CONCATENATED MODULE: ./components/collective-page/sections/RecurringContributions.js







var RecurringContributions_defineMessages;

function RecurringContributions_createSuper(Derived) { var hasNativeReflectConstruct = RecurringContributions_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function RecurringContributions_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

















var RecurringContributions_FILTERS = {
  ACTIVE: 'ACTIVE',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY',
  CANCELLED: 'CANCELLED'
};
var RecurringContributions_I18nFilters = (0,lib.defineMessages)((RecurringContributions_defineMessages = {}, defineProperty_default()(RecurringContributions_defineMessages, RecurringContributions_FILTERS.ACTIVE, {
  id: "Subscriptions.Active",
  defaultMessage: [{
    "type": 0,
    "value": "Active"
  }]
}), defineProperty_default()(RecurringContributions_defineMessages, RecurringContributions_FILTERS.MONTHLY, {
  id: "Frequency.Monthly",
  defaultMessage: [{
    "type": 0,
    "value": "Monthly"
  }]
}), defineProperty_default()(RecurringContributions_defineMessages, RecurringContributions_FILTERS.YEARLY, {
  id: "Frequency.Yearly",
  defaultMessage: [{
    "type": 0,
    "value": "Yearly"
  }]
}), defineProperty_default()(RecurringContributions_defineMessages, RecurringContributions_FILTERS.CANCELLED, {
  id: "Subscriptions.Cancelled",
  defaultMessage: [{
    "type": 0,
    "value": "Cancelled"
  }]
}), RecurringContributions_defineMessages));

var SectionRecurringContributions = /*#__PURE__*/function (_React$Component) {
  inherits_default()(SectionRecurringContributions, _React$Component);

  var _super = RecurringContributions_createSuper(SectionRecurringContributions);

  function SectionRecurringContributions(props) {
    var _this;

    classCallCheck_default()(this, SectionRecurringContributions);

    _this = _super.call(this, props);
    _this.state = {
      filter: 'ACTIVE'
    };
    return _this;
  }

  createClass_default()(SectionRecurringContributions, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          intl = _this$props.intl;
      var filters = ['ACTIVE', 'MONTHLY', 'YEARLY', 'CANCELLED'];

      if (data.loading) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
          height: 600,
          borderRadius: 0
        });
      } else if (!data.account) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
          display: "flex",
          border: "1px dashed #d1d1d1",
          justifyContent: "center",
          py: [6, 7],
          background: "#f8f8f8",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
            type: "error",
            withIcon: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "NCP.SectionFetchError",
              defaultMessage: [{
                "type": 0,
                "value": "We encountered an error while retrieving the data for this section."
              }]
            })
          })
        });
      }

      var collective = data && data.account;
      var recurringContributions = collective && collective.orders;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
        pb: 4,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ContainerSectionContent/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
            textAlign: "left",
            mb: 4,
            fontSize: ['20px', '24px', '32px'],
            color: "black.700",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Contributions.Recurring",
              defaultMessage: [{
                "type": 0,
                "value": "Recurring Contributions"
              }]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
          mx: "auto",
          maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledFilters/* default */.Z, {
            filters: filters,
            getLabel: function getLabel(key) {
              return intl.formatMessage(RecurringContributions_I18nFilters[key]);
            },
            selected: this.state.filter,
            justifyContent: "left",
            minButtonWidth: 175,
            px: _constants/* Dimensions.PADDING_X */.Db.PADDING_X,
            onChange: function onChange(filter) {
              return _this2.setState({
                filter: filter
              });
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
          maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
          px: _constants/* Dimensions.PADDING_X */.Db.PADDING_X,
          mt: 4,
          mx: "auto",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(RecurringContributionsContainer/* default */.ZP, {
            recurringContributions: recurringContributions,
            account: collective,
            filter: this.state.filter,
            mt: 3
          })
        })]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var slug = _ref.query.slug;
      return {
        slug: slug
      };
    }
  }]);

  return SectionRecurringContributions;
}(react.Component);

var getData = (0,graphql/* graphql */.B)(recurring_contributions_graphql_queries/* manageContributionsQuery */.B, {
  options: function options(props) {
    return {
      context: helpers/* API_V2_CONTEXT */.T,
      variables: getRecurringContributionsSectionQueryVariables(props.slug)
    };
  }
});
var getRecurringContributionsSectionQueryVariables = function getRecurringContributionsSectionQueryVariables(slug) {
  return {
    slug: slug
  };
};
SectionRecurringContributions.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { slug } }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "SectionRecurringContributions",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
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
    }
  }
};
/* harmony default export */ var RecurringContributions = ((0,injectIntl/* default */.ZP)(getData(SectionRecurringContributions)));
// EXTERNAL MODULE: ./node_modules/lodash/mapValues.js
var mapValues = __webpack_require__(66604);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues);
// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(7739);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
// EXTERNAL MODULE: ./lib/export_file.js
var export_file = __webpack_require__(15985);
;// CONCATENATED MODULE: ./components/Response.js






function Response_createSuper(Derived) { var hasNativeReflectConstruct = Response_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Response_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var Response = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Response, _React$Component);

  var _super = Response_createSuper(Response);

  function Response(props) {
    var _this;

    classCallCheck_default()(this, Response);

    _this = _super.call(this, props);
    _this.messages = (0,lib.defineMessages)({
      YES: {
        id: "response.status.yes",
        defaultMessage: [{
          "type": 1,
          "value": "name"
        }, {
          "type": 0,
          "value": " is going"
        }]
      }
    });
    return _this;
  }

  createClass_default()(Response, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          intl = _this$props.intl,
          response = _this$props.response;
      var user = response.user,
          description = response.description,
          status = response.status,
          count = response.count;

      if (!user) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      var name = (user.name && user.name.match(/^null/) ? null : user.name) || user.email && user.email.substr(0, user.email.indexOf('@'));

      if (!name) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      var title = intl.formatMessage(this.messages[status], {
        name: name
      });
      return /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
        collective: user,
        title: title,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
          display: "flex",
          alignItems: "center",
          width: "100%",
          margin: "10px",
          maxWidth: "300px",
          "float": "left",
          position: "relative",
          height: "90px",
          overflow: "hidden",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
            collective: user,
            radius: 40
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
            padding: "0.25rem 1rem",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
              fontSize: "1.5rem",
              children: user.isIncognito ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "profile.incognito",
                defaultMessage: [{
                  "type": 0,
                  "value": "Incognito"
                }]
              }) : name
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
              fontSize: "1.2rem",
              color: "black.600",
              children: description || user.description
            }), count > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
              pt: 1,
              fontSize: "1.2rem",
              color: "black.600",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "1qa6YU",
                defaultMessage: [{
                  "type": 1,
                  "value": "count"
                }, {
                  "type": 0,
                  "value": " tickets"
                }],
                values: {
                  count: count
                }
              })
            })]
          })]
        })
      });
    }
  }]);

  return Response;
}(react.Component);

Response.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Response",
  "props": {
    "response": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ var components_Response = ((0,injectIntl/* default */.ZP)(Response));
;// CONCATENATED MODULE: ./components/Responses.js







function Responses_createSuper(Derived) { var hasNativeReflectConstruct = Responses_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Responses_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var Responses = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Responses, _React$Component);

  var _super = Responses_createSuper(Responses);

  function Responses() {
    classCallCheck_default()(this, Responses);

    return _super.apply(this, arguments);
  }

  createClass_default()(Responses, [{
    key: "render",
    value: function render() {
      var responses = this.props.responses;

      if (!responses || responses.length === 0) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
        width: "100%",
        display: "inline-block",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
          margin: "3rem auto",
          maxWidth: "960px",
          children: responses.map(function (response) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Response, {
              response: response
            }, "".concat(get_default()(response, 'user.id', 0), "-").concat(response.createdAt));
          })
        })
      });
    }
  }]);

  return Responses;
}(react.Component);

Responses.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Responses",
  "props": {
    "responses": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ var components_Responses = (Responses);
;// CONCATENATED MODULE: ./components/EventSponsorCard.js









var EventSponsorCardContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "EventSponsorCard__EventSponsorCardContainer",
  componentId: "sc-1mm7pbq-0"
})(["display:inline-block;cursor:pointer;width:12rem;border-radius:5px;box-shadow:0 1px 3px rgba(46,77,97,0.2);text-align:center;padding-top:2rem;margin:1rem;background:white;&:hover{box-shadow:0 1px 5px rgba(46,77,97,0.4);}"]);
var CollectiveImage = styled_components_browser_esm/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "EventSponsorCard__CollectiveImage",
  componentId: "sc-1mm7pbq-1"
})(["max-width:10rem;max-height:5rem;margin-bottom:0.5rem;"]);

var EventSponsorCard = function EventSponsorCard(_ref) {
  var sponsor = _ref.sponsor;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
    href: "/".concat(sponsor.slug),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(EventSponsorCardContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveImage, {
        alt: "",
        className: "logo",
        src: (0,image_utils/* getCollectiveImage */.$T)(sponsor, {
          name: 'logo'
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        color: "#7fadf2",
        fontSize: "1.2rem",
        m: 2,
        children: sponsor.name
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
        padding: "1rem 0.5rem",
        margin: "0",
        minHeight: "27px",
        borderTop: "1px solid #dde1e4",
        overflow: "hidden",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "1rem",
          fontWeight: "700",
          textTransform: "uppercase",
          color: "#75cc1f",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          letterSpacing: "1.47px",
          marginBottom: "0.3rem",
          children: get_default()(sponsor, 'tier.name')
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "1rem",
          letterSpacing: "0.05rem",
          opacity: "0.5",
          m: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "membership.since",
            defaultMessage: [{
              "type": 0,
              "value": "since "
            }, {
              "type": 1,
              "value": "date"
            }],
            values: {
              date: /*#__PURE__*/(0,jsx_runtime.jsx)(lib.FormattedDate, {
                value: sponsor.createdAt,
                month: "long",
                year: "numeric"
              })
            }
          })
        })]
      })]
    })
  });
};

EventSponsorCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EventSponsorCard",
  "props": {
    "sponsor": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_EventSponsorCard = (EventSponsorCard);
;// CONCATENATED MODULE: ./components/Sponsors.js






function Sponsors_createSuper(Derived) { var hasNativeReflectConstruct = Sponsors_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Sponsors_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var Sponsors = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Sponsors, _React$Component);

  var _super = Sponsors_createSuper(Sponsors);

  function Sponsors(props) {
    classCallCheck_default()(this, Sponsors);

    return _super.call(this, props);
  }

  createClass_default()(Sponsors, [{
    key: "render",
    value: function render() {
      var sponsors = this.props.sponsors;

      if (!sponsors || sponsors.length === 0) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
        maxWidth: "640px",
        margin: "3rem auto 3rem",
        textAlign: "center",
        overflow: "hidden",
        children: sponsors.map(function (sponsor) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(components_EventSponsorCard, {
            type: "sponsor",
            sponsor: sponsor
          }, sponsor.id);
        })
      });
    }
  }]);

  return Sponsors;
}(react.Component);

Sponsors.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Sponsors",
  "props": {
    "sponsors": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ var components_Sponsors = (Sponsors);
// EXTERNAL MODULE: ./components/StyledLinkButton.js
var StyledLinkButton = __webpack_require__(67001);
;// CONCATENATED MODULE: ./components/collective-page/sections/SponsorsAndParticipants.js



















var StyledAdminActions = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "SponsorsAndParticipants__StyledAdminActions",
  componentId: "sc-1x8unlp-0"
})(["text-align:center;text-transform:uppercase;font-size:1.3rem;font-weight:600;letter-spacing:0.05rem;ul{overflow:hidden;text-align:center;margin:0 auto;padding:0;display:flex;justify-content:center;flex-direction:row;list-style:none;li{margin:0 2rem;}}"]);

var Participants = function Participants(_ref) {
  var event = _ref.collective,
      LoggedInUser = _ref.LoggedInUser,
      refetch = _ref.refetch;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isRefetched = _React$useState2[0],
      setIsRefetched = _React$useState2[1]; // const ticketOrders = event.orders
  //   .filter(order => (order.tier && order.tier.type === TierTypes.TICKET))
  //   .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  // Logic from old Event component, (filter away tiers with 'sponsor in the name')
  // to handle orders where there is no tier to check for TICKET:


  var orders = toConsumableArray_default()(event.orders).sort(function (a, b) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  var guestOrders = [];
  var sponsorOrders = [];
  orders.forEach(function (order) {
    if (get_default()(order, 'tier.name', '').match(/sponsor/i)) {
      sponsorOrders.push(order);
    } else {
      guestOrders.push(order);
    }
  });
  var responses = Object.values(mapValues_default()(groupBy_default()(guestOrders, function (order) {
    return order.fromCollective && order.fromCollective.id;
  }), function (orders) {
    return {
      user: orders[0].fromCollective,
      createdAt: orders[0].createdAt,
      status: 'YES',
      count: orders.length
    };
  }));
  var sponsors = sponsorOrders.map(function (order) {
    var sponsorCollective = Object.assign({}, order.fromCollective);
    sponsorCollective.tier = order.tier;
    sponsorCollective.createdAt = new Date(order.createdAt);
    return sponsorCollective;
  });
  var canEditEvent = LoggedInUser && LoggedInUser.canEditEvent(event);
  react.useEffect(function () {
    var refreshData = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!canEditEvent) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return refetch();

              case 3:
                setIsRefetched(true);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function refreshData() {
        return _ref2.apply(this, arguments);
      };
    }();

    refreshData();
  }, [LoggedInUser]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
    pb: 4,
    children: [sponsors.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
      pt: [4, 5],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "event.sponsors.title",
          defaultMessage: [{
            "type": 0,
            "value": "Sponsors"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Sponsors, {
        sponsors: sponsors
      })]
    }), responses.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
      pt: [4, 5],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "event.responses.title.going",
          values: {
            n: guestOrders.length
          },
          defaultMessage: [{
            "type": 1,
            "value": "n"
          }, {
            "type": 0,
            "value": " "
          }, {
            "type": 6,
            "value": "n",
            "options": {
              "one": {
                "value": [{
                  "type": 0,
                  "value": "person going"
                }]
              },
              "other": {
                "value": [{
                  "type": 0,
                  "value": "people going"
                }]
              }
            },
            "offset": 0,
            "pluralType": "cardinal"
          }]
        })
      }), canEditEvent && isRefetched && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledAdminActions, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLinkButton/* default */.Z, {
              onClick: function onClick() {
                return (0,export_file/* exportRSVPs */.en)(event);
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Export.Format",
                defaultMessage: [{
                  "type": 0,
                  "value": "Export "
                }, {
                  "type": 1,
                  "value": "format"
                }],
                values: {
                  format: 'CSV'
                }
              })
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Responses, {
        responses: responses
      })]
    })]
  });
};

Participants.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Participants",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "orders": {
            "name": "array",
            "required": false
          }
        }
      },
      "required": true
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "refetch": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var SponsorsAndParticipants = (Participants);
// EXTERNAL MODULE: ./components/collective-page/TopContributors.js
var TopContributors = __webpack_require__(1948);
;// CONCATENATED MODULE: ./components/collective-page/sections/TopFinancialContributors.js








/**
 * Top financial contributors widget.
 */




var SectionTopFinancialContributors = function SectionTopFinancialContributors(_ref) {
  var collective = _ref.collective,
      financialContributors = _ref.financialContributors;
  var isEvent = collective.type === collectives/* CollectiveType.EVENT */.eV.EVENT;

  var _getTopContributors = (0,collective_lib/* getTopContributors */.Nq)(financialContributors),
      _getTopContributors2 = slicedToArray_default()(_getTopContributors, 2),
      topOrganizations = _getTopContributors2[0],
      topIndividuals = _getTopContributors2[1];

  if (isEvent || !(topOrganizations !== null && topOrganizations !== void 0 && topOrganizations.length) && !(topIndividuals !== null && topIndividuals !== void 0 && topIndividuals.length)) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
    pb: 4,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "SectionContribute.TopContributors",
        defaultMessage: [{
          "type": 0,
          "value": "Top financial contributors"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TopContributors/* default */.Z, {
      organizations: topOrganizations,
      individuals: topIndividuals,
      currency: collective.currency
    })]
  });
};

SectionTopFinancialContributors.__docgenInfo = {
  "description": "Top financial contributors widget.",
  "methods": [],
  "displayName": "SectionTopFinancialContributors",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "financialContributors": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "type": {
              "name": "enum",
              "computed": true,
              "value": "Object.values(CollectiveType)",
              "required": true
            },
            "isBacker": {
              "name": "bool",
              "required": false
            },
            "tiersIds": {
              "name": "arrayOf",
              "value": {
                "name": "number"
              },
              "required": false
            }
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var TopFinancialContributors = (/*#__PURE__*/react.memo(SectionTopFinancialContributors));
// EXTERNAL MODULE: ./components/transactions/filters/TransactionsKindFilter.js
var TransactionsKindFilter = __webpack_require__(65536);
// EXTERNAL MODULE: ./components/transactions/graphql/fragments.js
var fragments = __webpack_require__(83722);
// EXTERNAL MODULE: ./components/transactions/TransactionsList.js
var TransactionsList = __webpack_require__(98929);
;// CONCATENATED MODULE: ./components/collective-page/sections/Transactions.js




var Transactions_defineMessages, Transactions_templateObject;




















var NB_DISPLAYED = 10;
var Transactions_FILTERS = {
  ALL: 'ALL',
  EXPENSES: 'EXPENSES',
  CONTRIBUTIONS: 'CONTRIBUTIONS'
};
var FILTERS_LIST = Object.values(Transactions_FILTERS);
var Transactions_I18nFilters = (0,lib.defineMessages)((Transactions_defineMessages = {}, defineProperty_default()(Transactions_defineMessages, Transactions_FILTERS.ALL, {
  id: "SectionTransactions.All",
  defaultMessage: [{
    "type": 0,
    "value": "All"
  }]
}), defineProperty_default()(Transactions_defineMessages, Transactions_FILTERS.EXPENSES, {
  id: "Expenses",
  defaultMessage: [{
    "type": 0,
    "value": "Expenses"
  }]
}), defineProperty_default()(Transactions_defineMessages, Transactions_FILTERS.CONTRIBUTIONS, {
  id: "Contributions",
  defaultMessage: [{
    "type": 0,
    "value": "Contributions"
  }]
}), Transactions_defineMessages));
var transactionsSectionQuery = (0,graphql_tag_lib/* default */.ZP)(Transactions_templateObject || (Transactions_templateObject = taggedTemplateLiteral_default()(["\n  query TransactionsSection(\n    $slug: String!\n    $limit: Int!\n    $hasOrder: Boolean\n    $hasExpense: Boolean\n    $kind: [TransactionKind]\n  ) {\n    transactions(\n      account: { slug: $slug }\n      limit: $limit\n      hasOrder: $hasOrder\n      hasExpense: $hasExpense\n      kind: $kind\n      includeIncognitoTransactions: true\n      includeGiftCardTransactions: true\n      includeChildrenTransactions: true\n    ) {\n      ...TransactionsQueryCollectionFragment\n    }\n  }\n  ", "\n"])), fragments/* transactionsQueryCollectionFragment */.N);
var getTransactionsSectionQueryVariables = function getTransactionsSectionQueryVariables(slug) {
  return {
    slug: slug,
    limit: NB_DISPLAYED,
    kind: (0,TransactionsKindFilter/* getDefaultKinds */.ce)()
  };
};

var SectionTransactions = function SectionTransactions(props) {
  var _data$transactions, _data$transactions2;

  var transactionsQueryResult = (0,client.useQuery)(transactionsSectionQuery, {
    variables: getTransactionsSectionQueryVariables(props.collective.slug),
    context: helpers/* API_V2_CONTEXT */.T,
    // We keep notifyOnNetworkStatusChange to remove the flash of collectiveHasNoTransactions bug
    // See https://github.com/apollographql/apollo-client/blob/9c80adf65ccbbb88ea5b9313c002f85976c225e3/src/core/ObservableQuery.ts#L274-L304
    notifyOnNetworkStatusChange: true
  });
  var data = transactionsQueryResult.data,
      refetch = transactionsQueryResult.refetch,
      loading = transactionsQueryResult.loading;

  var _React$useState = react.useState(Transactions_FILTERS.ALL),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      filter = _React$useState2[0],
      setFilter = _React$useState2[1];

  react.useEffect(function () {
    refetch();
  }, [props.isAdmin, props.isRoot, refetch]);
  react.useEffect(function () {
    var hasExpense = filter === Transactions_FILTERS.EXPENSES || undefined;
    var hasOrder = filter === Transactions_FILTERS.CONTRIBUTIONS || undefined;
    refetch({
      slug: props.collective.slug,
      limit: NB_DISPLAYED,
      hasExpense: hasExpense,
      hasOrder: hasOrder
    });
  }, [filter, props.collective.slug, refetch]);
  var intl = props.intl,
      collective = props.collective;
  var collectiveHasNoTransactions = !loading && (data === null || data === void 0 ? void 0 : (_data$transactions = data.transactions) === null || _data$transactions === void 0 ? void 0 : _data$transactions.totalCount) === 0 && filter === Transactions_FILTERS.ALL;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Box */.xu, {
    pb: 4,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
        "data-cy": "section-transactions-title",
        mb: 4,
        textAlign: "left",
        fontSize: ['20px', '24px', '32px'],
        color: "black.700",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "menu.transactions",
          defaultMessage: [{
            "type": 0,
            "value": "Transactions"
          }]
        })
      }), collectiveHasNoTransactions && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
        type: "info",
        withIcon: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "SectionTransactions.Empty",
          defaultMessage: [{
            "type": 0,
            "value": "No transactions yet."
          }]
        })
      })]
    }), !collectiveHasNoTransactions && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
      mb: 3,
      maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
      mx: "auto",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledFilters/* default */.Z, {
        filters: FILTERS_LIST,
        selected: filter,
        onChange: setFilter,
        getLabel: function getLabel(filter) {
          return intl.formatMessage(Transactions_I18nFilters[filter]);
        },
        minButtonWidth: 180,
        px: _constants/* Dimensions.PADDING_X */.Db.PADDING_X
      })
    }), !collectiveHasNoTransactions && /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerSectionContent/* default */.Z, {
      pt: 3,
      children: [loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
        height: 600,
        borderRadius: 8
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(TransactionsList/* default */.Z, {
        collective: collective,
        transactions: data === null || data === void 0 ? void 0 : (_data$transactions2 = data.transactions) === null || _data$transactions2 === void 0 ? void 0 : _data$transactions2.nodes,
        displayActions: true,
        onMutationSuccess: function onMutationSuccess() {
          return refetch();
        }
      }), (data === null || data === void 0 ? void 0 : data.transactions.totalCount) === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
        type: "info",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "TransactionsList.Empty",
          defaultMessage: [{
            "type": 0,
            "value": "No transactions found. "
          }, {
            "type": 8,
            "value": "ResetLink",
            "children": [{
              "type": 0,
              "value": "Reset filters"
            }]
          }, {
            "type": 0,
            "value": " to see all transactions."
          }],
          values: {
            ResetLink: function ResetLink(text) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLinkButton/* default */.Z, {
                onClick: function onClick() {
                  return setFilter(Transactions_FILTERS.ALL);
                },
                children: text
              });
            }
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: "/".concat(collective.slug, "/transactions"),
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          mt: 3,
          width: "100%",
          buttonSize: "small",
          fontSize: "Paragraph",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "transactions.viewAll",
            defaultMessage: [{
              "type": 0,
              "value": "View All Transactions"
            }]
          }), " \u2192"]
        })
      })]
    })]
  });
};

SectionTransactions.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SectionTransactions",
  "props": {
    "collective": {
      "description": "Collective",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "platformFeePercent": {
            "name": "number",
            "required": false
          }
        }
      },
      "required": true
    },
    "isAdmin": {
      "description": "Whether user is admin of `collective`",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isRoot": {
      "description": "Whether user is root user",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "data": {
      "description": "@ignore from withData",
      "type": {
        "name": "shape",
        "value": {
          "loading": {
            "name": "bool",
            "required": false
          },
          "refetch": {
            "name": "func",
            "required": false
          },
          "transactions": {
            "name": "arrayOf",
            "value": {
              "name": "object"
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "intl": {
      "description": "@ignore from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var Transactions = (/*#__PURE__*/react.memo((0,injectIntl/* default */.ZP)(SectionTransactions)));
// EXTERNAL MODULE: ./components/collective-page/sections/Updates.js
var Updates = __webpack_require__(66419);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Info/Info.esm.js
var Info_esm = __webpack_require__(85236);
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var theme_get_dist_index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./components/collective-navbar/constants.js
var collective_navbar_constants = __webpack_require__(97585);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
;// CONCATENATED MODULE: ./components/collective-page/CategoryHeader.js



var CategoryHeader_excluded = ["collective", "category"];

function CategoryHeader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function CategoryHeader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? CategoryHeader_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : CategoryHeader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var ContainerWithMaxWidth = (0,styled_components_browser_esm/* default */.ZP)(components_Container/* default */.Z).attrs({
  maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
  p: _constants/* Dimensions.PADDING_X */.Db.PADDING_X,
  m: '0 auto'
}).withConfig({
  displayName: "CategoryHeader__ContainerWithMaxWidth",
  componentId: "sc-l1egbc-0"
})(["display:flex;flex-direction:column;padding-top:64px;"]);
var TypeIllustration = styled_components_browser_esm/* default.img.attrs */.ZP.img.attrs({
  alt: ''
}).withConfig({
  displayName: "CategoryHeader__TypeIllustration",
  componentId: "sc-l1egbc-1"
})(["position:absolute;width:48px;height:48px;"]);
var TypeIllustrationCircle = (0,styled_components_browser_esm/* default */.ZP)(components_Grid/* Flex */.kC).withConfig({
  displayName: "CategoryHeader__TypeIllustrationCircle",
  componentId: "sc-l1egbc-2"
})(["position:relative;width:48px;height:48px;&::before{content:'';background:", ";border-radius:50%;height:30px;width:30px;position:absolute;right:0;left:0;top:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;}"], (0,theme_get_dist_index_esm/* themeGet */.R)('colors.primary.100'));
var CategoryHeader = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var collective = _ref.collective,
      category = _ref.category,
      props = objectWithoutProperties_default()(_ref, CategoryHeader_excluded);

  var intl = (0,useIntl/* default */.Z)();
  var data = (0,collective_sections/* getSectionsCategoryDetails */.iJ)(intl, collective, category);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerWithMaxWidth, CategoryHeader_objectSpread(CategoryHeader_objectSpread({
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TypeIllustrationCircle, {
        alignItems: "center",
        mr: 2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TypeIllustration, {
          src: data.img
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Grid/* Flex */.kC, {
        alignItems: "center",
        mr: 3,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionTitle/* default */.Z, {
          mr: 2,
          my: 3,
          "data-cy": "category-".concat(category, "-title"),
          children: data.title
        }), data.info && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
          content: function content() {
            return data.info;
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Info_esm/* Info */.k, {
            size: 18,
            color: "#76777A"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        flex: "1",
        borderStyle: "solid",
        borderColor: "black.300",
        mt: 1
      })]
    }), data.subtitle && /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Flex */.kC, {
      mb: 2,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(CategoryHeader_StyledP, {
        color: "black.700",
        my: 2,
        mr: 2,
        children: data.subtitle
      })
    })]
  }));
});
CategoryHeader.displayName = 'CategoryHeader';
CategoryHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CategoryHeader",
  "props": {
    "category": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(NAVBAR_CATEGORIES)"
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
/* harmony default export */ var collective_page_CategoryHeader = (CategoryHeader);

var CategoryHeader_StyledP = (0,styled_components_browser_esm/* default */.ZP)(Text.P).withConfig({
  displayName: "CategoryHeader___StyledP",
  componentId: "sc-l1egbc-3"
})({
  flex: '1 0 50%',
  maxWidth: 780
});
;// CONCATENATED MODULE: ./components/collective-page/SectionContainer.js

var SectionContainer = styled_components_browser_esm/* default.section.withConfig */.ZP.section.withConfig({
  displayName: "SectionContainer",
  componentId: "sc-pgkh36-0"
})(["margin:0;", ""], function (props) {
  return props.withPaddingBottom && (0,styled_components_browser_esm/* css */.iv)(["padding-bottom:64px;"]);
});
/* harmony default export */ var collective_page_SectionContainer = (SectionContainer);
;// CONCATENATED MODULE: ./components/collective-page/SectionsWithoutPaddingBottom.js


var _sectionsWithoutPaddi;


/**
 * The following sections don't require a padding bottom when put at the end of the
 * page, usually because they end with a darker background.
 */

var sectionsWithoutPaddingBottom = (_sectionsWithoutPaddi = {}, defineProperty_default()(_sectionsWithoutPaddi, _constants/* Sections.ABOUT */.bx.ABOUT, true), defineProperty_default()(_sectionsWithoutPaddi, _constants/* Sections.CONTRIBUTE */.bx.CONTRIBUTE, true), defineProperty_default()(_sectionsWithoutPaddi, _constants/* Sections.GOALS */.bx.GOALS, true), _sectionsWithoutPaddi);
/* harmony default export */ var SectionsWithoutPaddingBottom = (sectionsWithoutPaddingBottom);
;// CONCATENATED MODULE: ./components/collective-page/index.js













function collective_page_createSuper(Derived) { var hasNativeReflectConstruct = collective_page_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function collective_page_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }































/**
 * This is the collective page main layout, holding different blocks together
 * and watching scroll to synchronise the view for children properly.
 *
 * See design: https://www.figma.com/file/e71tBo0Sr8J7R5n6iMkqI42d/09.-Collectives?node-id=2338%3A36062
 */




var CollectivePage = /*#__PURE__*/function (_Component) {
  inherits_default()(CollectivePage, _Component);

  var _super = collective_page_createSuper(CollectivePage);

  function CollectivePage(props) {
    var _this;

    classCallCheck_default()(this, CollectivePage);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "getSections", (0,memoize_one_esm/* default */.Z)(function (collective, isAdmin, isHostAdmin) {
      return (0,collective_sections/* getFilteredSectionsForCollective */.vY)(collective, isAdmin, isHostAdmin);
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "getSectionsCategories", (0,memoize_one_esm/* default */.Z)(function (collective, isAdmin, isHostAdmin) {
      var sections = _this.getSections(collective, isAdmin, isHostAdmin);

      return sections.filter(function (s) {
        return s.type === 'CATEGORY';
      });
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "onScroll", throttle_default()(function () {
      var _this$state = _this.state,
          isFixed = _this$state.isFixed,
          selectedCategory = _this$state.selectedCategory; // Fixes the Hero when a certain scroll threshold is reached

      if (_this.sectionsContainerRef.current) {
        if (_this.sectionsContainerRef.current.getBoundingClientRect().top <= 50) {
          isFixed = true;
        } else if (isFixed) {
          isFixed = false;
        }
      } // Get the currently category that is at the top of the screen.


      var distanceThreshold = 200;
      var breakpoint = window.scrollY + distanceThreshold;

      var categories = _this.getSectionsCategories(_this.props.collective, _this.props.isAdmin, _this.props.isHostAdmin);

      for (var i = categories.length - 1; i >= 0; i--) {
        var categoryName = categories[i].name;
        var categoryRef = _this.sectionCategoriesRefs[categoryName];

        if (categoryRef && breakpoint >= categoryRef.offsetTop) {
          selectedCategory = categoryName;
          break;
        }
      } // Update the state only if necessary


      if (_this.state.isFixed !== isFixed || _this.state.selectedCategory !== selectedCategory) {
        _this.setState({
          isFixed: isFixed,
          selectedCategory: selectedCategory
        });
      } else if (!selectedCategory && categories !== null && categories !== void 0 && categories.length) {
        // Select first category by default
        _this.setState({
          isFixed: isFixed,
          selectedCategory: categories[0].name
        });
      }
    }, 100));

    defineProperty_default()(assertThisInitialized_default()(_this), "onCollectiveClick", function () {
      window.scrollTo(0, 0);
    });

    _this.sectionCategoriesRefs = {}; // This will store a map of category => ref

    _this.sectionsContainerRef = /*#__PURE__*/react.createRef();
    _this.state = {
      isFixed: false,
      selectedCategory: null
    };
    return _this;
  }

  createClass_default()(CollectivePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll, {
        passive: true
      });
      this.onScroll(); // First tick in case scroll is restored when page loads
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: "renderSection",
    value: function renderSection(section, version) {
      var _this$props$collectiv;

      switch (section) {
        case _constants/* Sections.UPDATES */.bx.UPDATES:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Updates/* default */.ZP, {
            collective: this.props.collective,
            isAdmin: this.props.isAdmin,
            isLoggedIn: Boolean(this.props.LoggedInUser)
          });

        case _constants/* Sections.CONVERSATIONS */.bx.CONVERSATIONS:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Conversations, {
            collective: this.props.collective,
            conversations: this.props.conversations
          });

        case _constants/* Sections.RECURRING_CONTRIBUTIONS */.bx.RECURRING_CONTRIBUTIONS:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(RecurringContributions, {
            slug: this.props.collective.slug,
            LoggedInUser: this.props.LoggedInUser
          });

        case _constants/* Sections.LOCATION */.bx.LOCATION:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(sections_Location, {
            collective: this.props.collective,
            refetch: this.props.refetch
          });
        // all other sections

        case _constants/* Sections.CONTRIBUTE */.bx.CONTRIBUTE:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Contribute, {
            status: this.props.status,
            collective: this.props.collective,
            tiers: this.props.tiers,
            events: this.props.events,
            connectedCollectives: this.props.connectedCollectives,
            contributors: this.props.financialContributors,
            contributorsStats: this.props.stats.backers,
            isAdmin: this.props.isAdmin
          });

        case _constants/* Sections.CONTRIBUTIONS */.bx.CONTRIBUTIONS:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Contributions, {
            collective: this.props.collective,
            LoggedInUser: this.props.LoggedInUser
          });

        case _constants/* Sections.EVENTS */.bx.EVENTS:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Events, {
            collective: this.props.collective,
            events: this.props.events,
            isAdmin: this.props.isAdmin
          });

        case _constants/* Sections.PROJECTS */.bx.PROJECTS:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Projects, {
            collective: this.props.collective,
            projects: this.props.projects,
            isAdmin: this.props.isAdmin
          });

        case _constants/* Sections.BUDGET */.bx.BUDGET:
          return version === 2 ? /*#__PURE__*/(0,jsx_runtime.jsx)(FinancialOverview, {
            collective: this.props.collective
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Budget/* default */.ZP, {
            collective: this.props.collective,
            transactions: this.props.transactions,
            expenses: this.props.expenses
          });

        case _constants/* Sections.TRANSACTIONS */.bx.TRANSACTIONS:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Transactions, {
            collective: this.props.collective,
            isAdmin: this.props.isAdmin,
            isRoot: this.props.isRoot
          });

        case _constants/* Sections.CONTRIBUTORS */.bx.CONTRIBUTORS:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(SectionContributors, {
            collective: this.props.collective,
            financialContributors: this.props.financialContributors,
            coreContributors: this.props.coreContributors,
            stats: this.props.stats
          });

        case _constants/* Sections.PARTICIPANTS */.bx.PARTICIPANTS:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(SponsorsAndParticipants, {
            refetch: this.props.refetch,
            collective: this.props.collective,
            LoggedInUser: this.props.LoggedInUser
          });

        case _constants/* Sections.ABOUT */.bx.ABOUT:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(About, {
            collective: this.props.collective,
            canEdit: this.props.isAdmin
          });

        case _constants/* Sections.GOALS */.bx.GOALS:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Goals, {
            collective: this.props.collective
          });

        case _constants/* Sections.OUR_TEAM */.bx.OUR_TEAM:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(OurTeam, {
            collective: this.props.collective,
            coreContributors: compact_default()(concat_default()((_this$props$collectiv = this.props.collective.parentCollective) === null || _this$props$collectiv === void 0 ? void 0 : _this$props$collectiv.coreContributors, this.props.coreContributors)),
            LoggedInUser: this.props.LoggedInUser
          });

        case _constants/* Sections.CONNECTED_COLLECTIVES */.bx.CONNECTED_COLLECTIVES:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(sections_ConnectedCollectives, {
            collective: this.props.collective,
            connectedCollectives: this.props.connectedCollectives
          });

        case _constants/* Sections.TOP_FINANCIAL_CONTRIBUTORS */.bx.TOP_FINANCIAL_CONTRIBUTORS:
          return /*#__PURE__*/(0,jsx_runtime.jsx)(TopFinancialContributors, {
            collective: this.props.collective,
            financialContributors: this.props.financialContributors
          });

        default:
          return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          collective = _this$props.collective,
          host = _this$props.host,
          isAdmin = _this$props.isAdmin,
          isHostAdmin = _this$props.isHostAdmin,
          onPrimaryColorChange = _this$props.onPrimaryColorChange;
      var _this$state2 = this.state,
          isFixed = _this$state2.isFixed,
          selectedCategory = _this$state2.selectedCategory;
      var sections = this.getSections(collective, isAdmin, isHostAdmin);
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(_StyledContainer, {
        position: "relative",
        "data-cy": "collective-page-main",
        $_css: collective.isArchived ? 'filter: grayscale(100%);' : undefined,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Box */.xu, {
          mb: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(hero_Hero, {
            collective: collective,
            host: host,
            isAdmin: isAdmin,
            onPrimaryColorChange: onPrimaryColorChange
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(collective_navbar/* default */.Z, {
          collective: collective,
          sections: sections,
          isAdmin: isAdmin,
          selectedCategory: selectedCategory,
          onCollectiveClick: this.onCollectiveClick,
          showBackButton: false,
          isFullWidth: true,
          useAnchorsForCategories: true,
          isInHero: !isFixed,
          showSelectedCategoryOnMobile: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          ref: this.sectionsContainerRef,
          children: isEmpty_default()(sections) ? /*#__PURE__*/(0,jsx_runtime.jsx)(Empty, {
            collective: this.props.collective
          }) : sections.map(function (entry, entryIdx) {
            return entry.type === 'CATEGORY' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(collective_page_CategoryHeader, {
                id: "category-".concat(entry.name),
                ref: function ref(categoryRef) {
                  return _this2.sectionCategoriesRefs[entry.name] = categoryRef;
                },
                collective: collective,
                category: entry.name
              }), entry.sections.map(function (section, idx) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(collective_page_SectionContainer, {
                  id: "section-".concat(section.name),
                  "data-cy": "section-".concat(section.name),
                  withPaddingBottom: idx === entry.sections.length - 1 && entryIdx === sections.length - 1 && !SectionsWithoutPaddingBottom[section.name],
                  children: _this2.renderSection(section.name, section.version)
                }, section.name);
              })]
            }, "category-".concat(entry.name)) : entry.type === 'SECTION' ? /*#__PURE__*/(0,jsx_runtime.jsx)(collective_page_SectionContainer, {
              id: "section-".concat(entry.name),
              "data-cy": "section-".concat(entry.name),
              withPaddingBottom: entryIdx === sections.length - 1 && !SectionsWithoutPaddingBottom[entry.name],
              children: _this2.renderSection(entry.name)
            }, "section-".concat(entry.name)) : null;
          })
        })]
      });
    }
  }]);

  return CollectivePage;
}(react.Component);

CollectivePage.__docgenInfo = {
  "description": "This is the collective page main layout, holding different blocks together\nand watching scroll to synchronise the view for children properly.\n\nSee design: https://www.figma.com/file/e71tBo0Sr8J7R5n6iMkqI42d/09.-Collectives?node-id=2338%3A36062",
  "methods": [{
    "name": "onCollectiveClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderSection",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "section",
      "type": null
    }, {
      "name": "version",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CollectivePage",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "financialContributors": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "coreContributors": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "topOrganizations": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "topIndividuals": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "tiers": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "transactions": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "conversations": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "expenses": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "updates": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "events": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "projects": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "connectedCollectives": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
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
    "isAdmin": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "isHostAdmin": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "isRoot": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "onPrimaryColorChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "stats": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "balance": {
            "name": "number",
            "required": true
          },
          "yearlyBudget": {
            "name": "number",
            "required": true
          },
          "updates": {
            "name": "number",
            "required": true
          },
          "backers": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "status": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'collectiveCreated'",
          "computed": false
        }, {
          "value": "'collectiveArchived'",
          "computed": false
        }]
      },
      "required": false
    },
    "refetch": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var collective_page = (CollectivePage);

var _StyledContainer = (0,styled_components_browser_esm/* default */.ZP)(components_Container/* default */.Z).withConfig({
  displayName: "collective-page___StyledContainer",
  componentId: "sc-104jvdo-0"
})(["", ""], function (p) {
  return p.$_css;
});
// EXTERNAL MODULE: ./components/NotificationBar.js
var NotificationBar = __webpack_require__(25087);
// EXTERNAL MODULE: ./components/SendMoneyToCollectiveBtn.js
var SendMoneyToCollectiveBtn = __webpack_require__(75052);
// EXTERNAL MODULE: ./components/host-dashboard/AcceptRejectButtons.js + 1 modules
var AcceptRejectButtons = __webpack_require__(55505);
// EXTERNAL MODULE: ./components/host-dashboard/applications/PendingApplication.js + 3 modules
var PendingApplication = __webpack_require__(25706);
;// CONCATENATED MODULE: ./components/collective-page/PendingApplicationActions.tsx




function PendingApplicationActions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PendingApplicationActions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PendingApplicationActions_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PendingApplicationActions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













function PendingApplicationActions(_ref) {
  var collective = _ref.collective,
      refetch = _ref.refetch;
  var intl = (0,useIntl/* default */.Z)();

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var _useMutation = (0,client.useMutation)(PendingApplication/* processApplicationMutation */.PT, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      callProcessApplication = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var processApplication = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(action, message) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return callProcessApplication({
                variables: {
                  host: {
                    legacyId: collective.host.id
                  },
                  account: {
                    legacyId: collective.id
                  },
                  action: action,
                  message: message
                }
              });

            case 3:
              if (!refetch) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return refetch();

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              addToast({
                type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                message: (0,errors/* i18nGraphqlException */.t2)(intl, _context.t0)
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function processApplication(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Grid/* Flex */.kC, {
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(AcceptRejectButtons/* default */.Z, {
      collective: collective,
      isLoading: loading,
      onApprove: function onApprove() {
        return processApplication('APPROVE');
      },
      onReject: function onReject(message) {
        return processApplication('REJECT', message);
      },
      customButton: function customButton(props) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(NotificationBar/* NotificationBarButton */.z2, PendingApplicationActions_objectSpread({}, props));
      }
    })
  });
}
PendingApplicationActions.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PendingApplicationActions",
  "props": {
    "refetch": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "id": {
                "name": "number",
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
;// CONCATENATED MODULE: ./components/collective-page/CollectiveNotificationBar.js



function CollectiveNotificationBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function CollectiveNotificationBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? CollectiveNotificationBar_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : CollectiveNotificationBar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var CollectiveNotificationBar_messages = (0,lib.defineMessages)({
  // Collective Created
  collectiveCreated: {
    id: "collective.created",
    defaultMessage: [{
      "type": 0,
      "value": "Your Collective has been created."
    }]
  },
  collectiveCreatedDescription: {
    id: "collective.created.description",
    defaultMessage: [{
      "type": 0,
      "value": "While awaiting for approval from "
    }, {
      "type": 1,
      "value": "host"
    }, {
      "type": 0,
      "value": ", you can customize your page and start submitting expenses."
    }]
  },
  collectiveApprovedDescription: {
    id: "collective.githubflow.created.description",
    defaultMessage: [{
      "type": 0,
      "value": "You have been approved by "
    }, {
      "type": 1,
      "value": "host"
    }, {
      "type": 0,
      "value": " and can now receive financial contributions."
    }]
  },
  // Fund Created
  fundCreated: {
    id: "createFund.created",
    defaultMessage: [{
      "type": 0,
      "value": "Your Fund has been created."
    }]
  },
  fundCreatedDescription: {
    id: "createFund.created.description",
    defaultMessage: [{
      "type": 0,
      "value": "We will get in touch about approval soon."
    }]
  },
  fundCreatedApprovedDescription: {
    id: "createFund.createdApproved.description",
    defaultMessage: [{
      "type": 0,
      "value": "You have been approved by "
    }, {
      "type": 1,
      "value": "host"
    }, {
      "type": 0,
      "value": ", and can now make contributions and submit expenses."
    }]
  },
  // Event Created
  eventCreated: {
    id: "event.created",
    defaultMessage: [{
      "type": 0,
      "value": "Your Event has been created."
    }]
  },
  // Project Created
  projectCreated: {
    id: "project.created",
    defaultMessage: [{
      "type": 0,
      "value": "Your Project has been created."
    }]
  },
  // Organization Created
  organizationCreated: {
    id: "organization.created",
    defaultMessage: [{
      "type": 0,
      "value": "Your Organization has been created."
    }]
  },
  organizationCreateDescription: {
    id: "organization.created.description",
    defaultMessage: [{
      "type": 0,
      "value": "You can now make financial contributions as an Organization. You can also edit your profile, add team members, and associate a credit card with a monthly limit."
    }]
  },
  // Archived
  collectiveArchived: {
    id: "collective.isArchived",
    defaultMessage: [{
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " has been archived."
    }]
  },
  collectiveArchivedDescription: {
    id: "collective.isArchived.description",
    defaultMessage: [{
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " has been archived and is no longer active."
    }]
  },
  // Pending
  approvalPending: {
    id: "collective.pending",
    defaultMessage: [{
      "type": 0,
      "value": "Collective pending approval."
    }]
  },
  approvalPendingDescription: {
    id: "collective.pending.description",
    defaultMessage: [{
      "type": 0,
      "value": "Awaiting approval from "
    }, {
      "type": 1,
      "value": "host"
    }, {
      "type": 0,
      "value": "."
    }]
  },
  'event.over.sendMoneyToParent.title': {
    id: "event.over.sendMoneyToParent.title",
    defaultMessage: [{
      "type": 0,
      "value": "This event has a positive balance."
    }]
  },
  'event.over.sendMoneyToParent.description': {
    id: "event.over.sendMoneyToParent.description",
    defaultMessage: [{
      "type": 0,
      "value": "Spend it by submitting event expenses, or transfer the remaining balance to the main budget."
    }]
  },
  tooFewAdmins: {
    id: "collective.tooFewAdmins",
    defaultMessage: [{
      "type": 0,
      "value": "Your collective was approved but you need "
    }, {
      "type": 6,
      "value": "missingAdminsCount",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "one more admin"
          }]
        },
        "other": {
          "value": [{
            "type": 7
          }, {
            "type": 0,
            "value": " more admins"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }, {
      "type": 0,
      "value": " before you can accept financial contributions."
    }]
  },
  tooFewAdminsDescription: {
    id: "collective.tooFewAdmins.description",
    defaultMessage: [{
      "type": 0,
      "value": "You will automatically be able to accept contributions when "
    }, {
      "type": 6,
      "value": "missingAdminsCount",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "an invited administrator"
          }]
        },
        "other": {
          "value": [{
            "type": 7
          }, {
            "type": 0,
            "value": " invited administrators"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }, {
      "type": 0,
      "value": " has joined."
    }]
  }
});

var getNotification = function getNotification(intl, status, collective, host, LoggedInUser, refetch) {
  var _host$policies, _host$policies$COLLEC, _host$policies2, _host$policies2$COLLE, _collective$admins, _collective$features;

  if (status === 'collectiveCreated') {
    switch (collective.type) {
      case collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION:
        return {
          title: intl.formatMessage(CollectiveNotificationBar_messages.organizationCreated),
          description: intl.formatMessage(CollectiveNotificationBar_messages.organizationCreateDescription),
          type: 'success',
          inline: false
        };

      default:
        if (collective.isApproved) {
          return {
            title: intl.formatMessage(CollectiveNotificationBar_messages.collectiveCreated),
            description: intl.formatMessage(CollectiveNotificationBar_messages.collectiveApprovedDescription, {
              host: host.name
            }),
            type: 'success',
            inline: true
          };
        }

        return {
          title: intl.formatMessage(CollectiveNotificationBar_messages.collectiveCreated),
          description: host ? intl.formatMessage(CollectiveNotificationBar_messages.collectiveCreatedDescription, {
            host: host.name
          }) : '',
          type: 'info',
          inline: true
        };
    }
  } else if (status === 'fundCreated') {
    if (collective.isApproved) {
      return {
        title: intl.formatMessage(CollectiveNotificationBar_messages.fundCreated),
        description: intl.formatMessage(CollectiveNotificationBar_messages.fundCreatedApprovedDescription, {
          host: host.name
        }),
        type: 'success',
        inline: true
      };
    }

    return {
      title: intl.formatMessage(CollectiveNotificationBar_messages.fundCreated),
      description: host ? intl.formatMessage(CollectiveNotificationBar_messages.fundCreatedDescription, {
        host: host.name
      }) : '',
      type: 'info',
      inline: true
    };
  } else if (status === 'eventCreated') {
    return {
      title: intl.formatMessage(CollectiveNotificationBar_messages.eventCreated),
      type: 'success',
      inline: true
    };
  } else if (status === 'projectCreated') {
    return {
      title: intl.formatMessage(CollectiveNotificationBar_messages.projectCreated),
      type: 'success',
      inline: true
    };
  } else if (status === 'collectiveArchived' || collective.isArchived) {
    return {
      title: intl.formatMessage(CollectiveNotificationBar_messages.collectiveArchived, {
        name: collective.name
      }),
      description: intl.formatMessage(CollectiveNotificationBar_messages.collectiveArchivedDescription, {
        name: collective.name
      }),
      type: 'warning',
      inline: true
    };
  } else if (!collective.isApproved && collective.host && collective.type === collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE) {
    return {
      title: intl.formatMessage(CollectiveNotificationBar_messages.approvalPending),
      description: intl.formatMessage(CollectiveNotificationBar_messages.approvalPendingDescription, {
        host: collective.host.name
      }),
      type: 'warning',
      actions: (LoggedInUser === null || LoggedInUser === void 0 ? void 0 : LoggedInUser.isHostAdmin(collective)) && /*#__PURE__*/(0,jsx_runtime.jsx)(PendingApplicationActions, {
        collective: collective,
        refetch: refetch
      })
    };
  } else if (LoggedInUser !== null && LoggedInUser !== void 0 && LoggedInUser.isAdminOfCollectiveOrHost(collective) && collective.isApproved && host !== null && host !== void 0 && (_host$policies = host.policies) !== null && _host$policies !== void 0 && (_host$policies$COLLEC = _host$policies.COLLECTIVE_MINIMUM_ADMINS) !== null && _host$policies$COLLEC !== void 0 && _host$policies$COLLEC.freeze && (host === null || host === void 0 ? void 0 : (_host$policies2 = host.policies) === null || _host$policies2 === void 0 ? void 0 : (_host$policies2$COLLE = _host$policies2.COLLECTIVE_MINIMUM_ADMINS) === null || _host$policies2$COLLE === void 0 ? void 0 : _host$policies2$COLLE.numberOfAdmins) > (collective === null || collective === void 0 ? void 0 : (_collective$admins = collective.admins) === null || _collective$admins === void 0 ? void 0 : _collective$admins.length) && (collective === null || collective === void 0 ? void 0 : (_collective$features = collective.features) === null || _collective$features === void 0 ? void 0 : _collective$features.RECEIVE_FINANCIAL_CONTRIBUTIONS) === 'DISABLED') {
    return {
      title: intl.formatMessage(CollectiveNotificationBar_messages.tooFewAdmins, {
        missingAdminsCount: host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins - collective.admins.length
      }),
      description: intl.formatMessage(CollectiveNotificationBar_messages.tooFewAdminsDescription, {
        missingAdminsCount: host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins - collective.admins.length
      }),
      type: 'warning',
      actions: /*#__PURE__*/(0,jsx_runtime.jsx)(NotificationBar/* NotificationBarLink */.a_, {
        href: "/".concat(collective.slug, "/admin/team"),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "XVzYBE",
          defaultMessage: [{
            "type": 0,
            "value": "Manage members"
          }]
        })
      })
    };
  } else if (get_default()(collective, 'type') === collectives/* CollectiveType.EVENT */.eV.EVENT && (0,lib_events/* moneyCanMoveFromEvent */.dj)(collective)) {
    if (!LoggedInUser || !LoggedInUser.isAdminOfCollectiveOrHost(collective)) {
      return;
    }

    return {
      title: intl.formatMessage(CollectiveNotificationBar_messages['event.over.sendMoneyToParent.title']),
      description: intl.formatMessage(CollectiveNotificationBar_messages['event.over.sendMoneyToParent.description'], {
        collective: collective.parentCollective.name
      }),
      type: 'info',
      actions: /*#__PURE__*/(0,jsx_runtime.jsx)(SendMoneyToCollectiveBtn/* default */.Z, {
        fromCollective: collective,
        toCollective: collective.parentCollective,
        LoggedInUser: LoggedInUser,
        amount: collective.stats.balance,
        currency: collective.currency,
        customButton: function customButton(props) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(NotificationBar/* NotificationBarButton */.z2, CollectiveNotificationBar_objectSpread({}, props));
        }
      })
    };
  }
};
/**
 * Adds a notification bar for the collective.
 */


var CollectiveNotificationBar = function CollectiveNotificationBar(_ref) {
  var intl = _ref.intl,
      status = _ref.status,
      collective = _ref.collective,
      host = _ref.host,
      LoggedInUser = _ref.LoggedInUser,
      refetch = _ref.refetch;
  var notification = getNotification(intl, status, collective, host, LoggedInUser, refetch);
  return !notification ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(NotificationBar/* default */.ZP, CollectiveNotificationBar_objectSpread({}, notification));
};

CollectiveNotificationBar.__docgenInfo = {
  "description": "Adds a notification bar for the collective.",
  "methods": [],
  "displayName": "CollectiveNotificationBar",
  "props": {
    "collective": {
      "description": "Collective",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "isArchived": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false
    },
    "host": {
      "description": "Host",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "status": {
      "description": "A special status to show the notification bar (collective created, archived...etc)",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'collectiveCreated'",
          "computed": false
        }, {
          "value": "'collectiveArchived'",
          "computed": false
        }, {
          "value": "'fundCreated'",
          "computed": false
        }, {
          "value": "'projectCreated'",
          "computed": false
        }, {
          "value": "'eventCreated'",
          "computed": false
        }]
      },
      "required": false
    },
    "intl": {
      "description": "@ignore from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "refetch": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var collective_page_CollectiveNotificationBar = ((0,injectIntl/* default */.ZP)(CollectiveNotificationBar));
;// CONCATENATED MODULE: ./components/collective-page/graphql/preload.js














var preloadCollectivePageGraphqlQueries = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(slug, client) {
    var _result$data;

    var result, collective, sections, sectionsNames, queries, isIndividual, _collective$host, isCollective, isEvent;

    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.query({
              query: graphql_queries/* collectivePageQuery */.J,
              variables: (0,graphql_queries/* getCollectivePageQueryVariables */.L)(slug)
            });

          case 2:
            result = _context.sent;
            collective = result === null || result === void 0 ? void 0 : (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.Collective;

            if (!collective) {
              _context.next = 19;
              break;
            }

            sections = (0,collective_sections/* getFilteredSectionsForCollective */.vY)(collective);
            sectionsNames = (0,collective_sections/* getSectionsNames */.xE)(sections);
            queries = [];
            isIndividual = (0,collective_lib/* isIndividualAccount */.Sh)(collective) && !collective.isHost;

            if (sectionsNames.includes('budget')) {
              queries.push(client.query({
                query: (0,Budget/* getBudgetSectionQuery */.MR)(Boolean(collective.host), isIndividual),
                variables: (0,Budget/* getBudgetSectionQueryVariables */.kr)(slug, (_collective$host = collective.host) === null || _collective$host === void 0 ? void 0 : _collective$host.slug, isIndividual),
                context: helpers/* API_V2_CONTEXT */.T
              }));
            }

            if (sectionsNames.includes('transactions')) {
              queries.push(client.query({
                query: transactionsSectionQuery,
                variables: getTransactionsSectionQueryVariables(slug),
                context: helpers/* API_V2_CONTEXT */.T
              }));
            }

            if (sectionsNames.includes('recurring-contributions')) {
              queries.push(client.query({
                query: recurring_contributions_graphql_queries/* manageContributionsQuery */.B,
                variables: getRecurringContributionsSectionQueryVariables(slug),
                context: helpers/* API_V2_CONTEXT */.T
              }));
            }

            if (sectionsNames.includes('updates')) {
              queries.push(client.query({
                query: Updates/* updatesSectionQuery */.Jp,
                variables: (0,Updates/* getUpdatesSectionQueryVariables */.Rp)(slug)
              }));
            }

            if (sectionsNames.includes('conversations')) {
              queries.push(client.query({
                query: conversationsSectionQuery,
                variables: getConversationsSectionQueryVariables(slug),
                context: helpers/* API_V2_CONTEXT */.T
              }));
            }

            isCollective = collective.type === collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE;
            isEvent = collective.type === collectives/* CollectiveType.EVENT */.eV.EVENT;

            if (!isCollective && !isEvent && !collective.isHost) {
              queries.push(client.query({
                query: totalCollectiveContributionsQuery,
                variables: getTotalCollectiveContributionsQueryVariables(slug)
              }));
            }

            _context.next = 19;
            return Promise.all(queries);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function preloadCollectivePageGraphqlQueries(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
// EXTERNAL MODULE: ./components/CollectiveThemeProvider.js
var CollectiveThemeProvider = __webpack_require__(325);
// EXTERNAL MODULE: ./components/ErrorPage.js
var ErrorPage = __webpack_require__(73908);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
// EXTERNAL MODULE: ./pages/404.js
var _404 = __webpack_require__(19147);
;// CONCATENATED MODULE: ./pages/collective-page.js










function collective_page_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function collective_page_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? collective_page_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : collective_page_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function pages_collective_page_createSuper(Derived) { var hasNativeReflectConstruct = pages_collective_page_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function pages_collective_page_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




















/** A page rendered when collective is pledged and not active yet */



var PledgedCollectivePage = dynamic_default()(function () {
  return __webpack_require__.e(/* import() | PledgedCollectivePage */ 1950).then(__webpack_require__.bind(__webpack_require__, 17487));
}, {
  loading: Loading/* default */.Z,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(17487)];
    }
  }
});
/** A page rendered when collective is incognito */

var IncognitoUserCollective = dynamic_default()(function () {
  return __webpack_require__.e(/* import() | IncognitoUserCollective */ 4829).then(__webpack_require__.bind(__webpack_require__, 1549));
}, {
  loading: Loading/* default */.Z,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(1549)];
    }
  }
});
/** A page rendered when collective is guest */

var GuestUserProfile = dynamic_default()(function () {
  return __webpack_require__.e(/* import() | GuestUserProfile */ 6724).then(__webpack_require__.bind(__webpack_require__, 92873));
}, {
  loading: Loading/* default */.Z,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(92873)];
    }
  }
});
/** Load the onboarding modal dynamically since it's not used often */

var OnboardingModal = dynamic_default()(function () {
  return Promise.all(/* import() | OnboardingModal */[__webpack_require__.e(730), __webpack_require__.e(5489)]).then(__webpack_require__.bind(__webpack_require__, 70730));
}, {
  loading: Loading/* default */.Z,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(70730)];
    }
  }
});
var GlobalStyles = (0,styled_components_browser_esm/* createGlobalStyle */.vJ)(["section{margin:0;}"]);
/**
 * The main page to display collectives. Wrap route parameters and GraphQL query
 * to render `components/collective-page` with everything needed.
 */

var collective_page_CollectivePage = /*#__PURE__*/function (_React$Component) {
  inherits_default()(CollectivePage, _React$Component);

  var _super = pages_collective_page_createSuper(CollectivePage);

  function CollectivePage(props) {
    var _this;

    classCallCheck_default()(this, CollectivePage);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "setShowOnboardingModal", function (bool) {
      _this.setState({
        showOnboardingModal: bool
      });
    });

    _this.state = {
      smooth: false,
      showOnboardingModal: true
    };
    return _this;
  }

  createClass_default()(CollectivePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        smooth: true
      });
      var _this$props = this.props,
          router = _this$props.router,
          data = _this$props.data;
      var collective = data === null || data === void 0 ? void 0 : data.Collective;
      (0,url_helpers/* addParentToURLIfMissing */.Bc)(router, collective);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          slug = _this$props2.slug,
          data = _this$props2.data,
          LoggedInUser = _this$props2.LoggedInUser,
          status = _this$props2.status,
          step = _this$props2.step,
          mode = _this$props2.mode,
          action = _this$props2.action;
      var showOnboardingModal = this.state.showOnboardingModal;
      var loading = data.loading && !data.Collective;

      if (!loading) {
        if (!data || data.error) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
            data: data
          });
        } else if (!data.Collective) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
            error: (0,errors/* generateNotFoundError */.mN)(slug),
            log: false
          });
        } else if (data.Collective.isPledged && !data.Collective.isActive) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(PledgedCollectivePage, {
            collective: data.Collective
          });
        } else if (data.Collective.isIncognito) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(IncognitoUserCollective, {
            collective: data.Collective
          });
        } else if (data.Collective.isGuest) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(GuestUserProfile, {
            account: data.Collective
          });
        }
      }

      var collective = data && data.Collective; // Don't allow /collective/apply

      if (action === 'apply' && !(collective !== null && collective !== void 0 && collective.isHost)) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(_404["default"], {});
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, collective_page_objectSpread(collective_page_objectSpread({
        collective: collective,
        canonicalURL: (0,url_helpers/* getCollectivePageCanonicalURL */.Bu)(collective)
      }, (0,collective_lib/* getCollectivePageMetadata */.Xq)(collective)), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GlobalStyles, {}), loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(components_Container/* default */.Z, {
          py: [5, 6],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {})
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(collective_page_CollectiveNotificationBar, {
            collective: collective,
            host: collective.host,
            status: status,
            LoggedInUser: LoggedInUser,
            refetch: data.refetch
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveThemeProvider/* default */.Z, {
            collective: collective,
            children: function children(_ref) {
              var onPrimaryColorChange = _ref.onPrimaryColorChange;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(collective_page, {
                collective: collective,
                host: collective.host,
                coreContributors: collective.coreContributors,
                financialContributors: collective.financialContributors,
                tiers: collective.tiers,
                events: collective.events,
                projects: collective.projects,
                connectedCollectives: collective.connectedCollectives,
                transactions: collective.transactions,
                expenses: collective.expenses,
                stats: collective.stats,
                updates: collective.updates,
                conversations: collective.conversations,
                LoggedInUser: LoggedInUser,
                isAdmin: Boolean(LoggedInUser && LoggedInUser.isAdminOfCollective(collective)),
                isHostAdmin: Boolean(LoggedInUser && LoggedInUser.isHostAdmin(collective)),
                isRoot: Boolean(LoggedInUser && LoggedInUser.isRoot),
                onPrimaryColorChange: onPrimaryColorChange,
                step: step,
                mode: mode,
                refetch: data.refetch
              });
            }
          }), mode === 'onboarding' && (LoggedInUser === null || LoggedInUser === void 0 ? void 0 : LoggedInUser.isAdminOfCollective(collective)) && /*#__PURE__*/(0,jsx_runtime.jsx)(OnboardingModal, {
            showOnboardingModal: showOnboardingModal,
            setShowOnboardingModal: this.setShowOnboardingModal,
            step: step,
            mode: mode,
            collective: collective,
            LoggedInUser: LoggedInUser
          })]
        })]
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(_ref2) {
        var client, req, res, _ref2$query, slug, status, step, mode, action, skipDataFromTree;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = _ref2.client, req = _ref2.req, res = _ref2.res, _ref2$query = _ref2.query, slug = _ref2$query.slug, status = _ref2$query.status, step = _ref2$query.step, mode = _ref2$query.mode, action = _ref2$query.action;

                if (res && req && (req.language || req.locale === 'en')) {
                  res.set('Cache-Control', 'public, s-maxage=300');
                }

                skipDataFromTree = false; // If on server side

                if (!req) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return preloadCollectivePageGraphqlQueries(slug, client);

              case 6:
                skipDataFromTree = true;

              case 7:
                return _context.abrupt("return", {
                  slug: slug,
                  status: status,
                  step: step,
                  mode: mode,
                  skipDataFromTree: skipDataFromTree,
                  action: action
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CollectivePage;
}(react.Component);

var addCollectivePageData = (0,graphql/* graphql */.B)(graphql_queries/* collectivePageQuery */.J, {
  options: function options(props) {
    return {
      variables: (0,graphql_queries/* getCollectivePageQueryVariables */.L)(props.slug)
    };
  }
});
collective_page_CollectivePage.__docgenInfo = {
  "description": "The main page to display collectives. Wrap route parameters and GraphQL query\nto render `components/collective-page` with everything needed.",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static", "async"],
    "params": [{
      "name": "{ client, req, res, query: { slug, status, step, mode, action } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "setShowOnboardingModal",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "bool",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CollectivePage",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "status": {
      "description": "A special status to show the notification bar (collective created, archived...etc)",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'collectiveCreated'",
          "computed": false
        }, {
          "value": "'collectiveArchived'",
          "computed": false
        }, {
          "value": "'fundCreated'",
          "computed": false
        }, {
          "value": "'projectCreated'",
          "computed": false
        }, {
          "value": "'eventCreated'",
          "computed": false
        }]
      },
      "required": false
    },
    "step": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "mode": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "action": {
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
    "router": {
      "description": "",
      "type": {
        "name": "object"
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
          "Collective": {
            "name": "shape",
            "value": {
              "name": {
                "name": "string",
                "required": false
              },
              "type": {
                "name": "string",
                "required": true
              },
              "description": {
                "name": "string",
                "required": false
              },
              "twitterHandle": {
                "name": "string",
                "required": false
              },
              "image": {
                "name": "string",
                "required": false
              },
              "isApproved": {
                "name": "bool",
                "required": false
              },
              "isArchived": {
                "name": "bool",
                "required": false
              },
              "isHost": {
                "name": "bool",
                "required": false
              },
              "isActive": {
                "name": "bool",
                "required": false
              },
              "isPledged": {
                "name": "bool",
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
                  },
                  "image": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              },
              "host": {
                "name": "object",
                "required": false
              },
              "stats": {
                "name": "object",
                "required": false
              },
              "coreContributors": {
                "name": "arrayOf",
                "value": {
                  "name": "object"
                },
                "required": false
              },
              "financialContributors": {
                "name": "arrayOf",
                "value": {
                  "name": "object"
                },
                "required": false
              },
              "tiers": {
                "name": "arrayOf",
                "value": {
                  "name": "object"
                },
                "required": false
              },
              "events": {
                "name": "arrayOf",
                "value": {
                  "name": "object"
                },
                "required": false
              },
              "connectedCollectives": {
                "name": "arrayOf",
                "value": {
                  "name": "object"
                },
                "required": false
              },
              "transactions": {
                "name": "arrayOf",
                "value": {
                  "name": "object"
                },
                "required": false
              },
              "expenses": {
                "name": "arrayOf",
                "value": {
                  "name": "object"
                },
                "required": false
              },
              "updates": {
                "name": "arrayOf",
                "value": {
                  "name": "object"
                },
                "required": false
              }
            },
            "required": false
          },
          "refetch": {
            "name": "func",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ var pages_collective_page = ((0,router.withRouter)((0,UserProvider/* withUser */.ns)(addCollectivePageData(collective_page_CollectivePage))));

/***/ }),

/***/ 10855:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/collective-page",
      function () {
        return __webpack_require__(87318);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [3662,6567,1512,8966,8027,5126,5490,2092,9158,295,468,6277,9191,5388,146,5813,4842,4154,1012,1861,7965,4691,7653,6467,4944,9656,6008,3737,20,1503,2027,9774,2888,179], function() { return __webpack_exec__(10855); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=collective-page-3b2507d3e1948641.js.map