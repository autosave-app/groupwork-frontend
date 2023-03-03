(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3858,9139],{

/***/ 3798:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);



var _excluded = ["backgroundType", "backgroundOpacity"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/**
 * A specialization of `Container` that displays itself above the content, in position
 * absolute, with a dark background and content centered.
 *
 * Accepts all the props from `Container`.
 */



var ContainerOverlay = function ContainerOverlay(_ref) {
  var backgroundType = _ref.backgroundType,
      backgroundOpacity = _ref.backgroundOpacity,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var isDark = backgroundType === 'dark';
  var defaultOpacity = isDark ? 0.5 : 0.75;
  var opacity = !lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default()(backgroundOpacity) ? backgroundOpacity : defaultOpacity;
  var lightness = isDark ? '30' : '255';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(".concat(lightness, ", ").concat(lightness, ", ").concat(lightness, ", ").concat(opacity, ")"),
    width: "100%",
    height: "100%",
    zIndex: 9999
  }, props));
};

ContainerOverlay.defaultProps = {
  backgroundType: 'white'
};
ContainerOverlay.__docgenInfo = {
  "description": "A specialization of `Container` that displays itself above the content, in position\nabsolute, with a dark background and content centered.\n\nAccepts all the props from `Container`.",
  "methods": [],
  "displayName": "ContainerOverlay",
  "props": {
    "backgroundType": {
      "defaultValue": {
        "value": "'white'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'dark'",
          "computed": false
        }, {
          "value": "'white'",
          "computed": false
        }]
      },
      "required": false
    },
    "backgroundOpacity": {
      "description": "If omitted, will use 0.5 for dark and 0.75 for black",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (ContainerOverlay);

/***/ }),

/***/ 43825:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44012);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88705);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84842);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);


var _excluded = ["showContactSupportLink"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







/**
 * A page to show when the feature is not supported by the collective.
 * Ensures the page is not referenced by robots.
 */




var PageFeatureNotSupported = function PageFeatureNotSupported(_ref) {
  var showContactSupportLink = _ref.showContactSupportLink,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(),
      formatMessage = _useIntl.formatMessage;

  var title = formatMessage({
    id: "FeatureNotSupported.title",
    defaultMessage: [{
      "type": 0,
      "value": "Page inaccessible"
    }]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Page__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    noRobots: true,
    title: title
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 2,
      py: [5, 6],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.H1, {
        fontSize: "38px",
        mb: 3,
        textAlign: "center",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
        fontSize: "64px",
        mt: 3,
        mb: 5,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          role: "img",
          "aria-label": "Monkey Face",
          children: "\uD83D\uDE48\uFE0F"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          id: "FeatureNotSupported.description",
          defaultMessage: [{
            "type": 0,
            "value": "This page has not been activated for this Collective or you don't have permission to see it."
          }]
        }), showContactSupportLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            id: "ContactSupportForDetails",
            defaultMessage: [{
              "type": 0,
              "value": "Please contact "
            }, {
              "type": 8,
              "value": "SupportLink",
              "children": [{
                "type": 0,
                "value": "support"
              }]
            }, {
              "type": 0,
              "value": " for more details."
            }],
            values: {
              SupportLink: _I18nFormatters__WEBPACK_IMPORTED_MODULE_4__/* .I18nSupportLink */ .wl
            }
          })]
        })]
      })]
    })
  }));
};

PageFeatureNotSupported.defaultProps = {
  showContactSupportLink: true
};
PageFeatureNotSupported.__docgenInfo = {
  "description": "A page to show when the feature is not supported by the collective.\nEnsures the page is not referenced by robots.",
  "methods": [],
  "displayName": "PageFeatureNotSupported",
  "props": {
    "showContactSupportLink": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (PageFeatureNotSupported);

/***/ }),

/***/ 59139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RichTextEditor; }
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
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67294);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(37947);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(52015);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(57632);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48966);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65985);
/* harmony import */ var _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72004);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69078);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74770);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86702);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85893);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
















var TrixEditorContainer = styled_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "RichTextEditor__TrixEditorContainer",
  componentId: "sc-2bze4a-0"
})(["", " trix-editor{border:none;padding:0;margin-top:8px;padding-top:8px;outline-offset:0.5em;", " &::-webkit-scrollbar{width:8px;}", " ", " &:empty:not(:focus)::before{color:", ";}figcaption{display:none;}", "}trix-toolbar{min-height:40px;background:", ";", " z-index:2;margin-bottom:8px;", " .trix-button-group{border-radius:6px;border-color:#c4c7cc;margin-bottom:0;background:white;}.trix-button{border-bottom:none;display:inline-block;height:auto;&:hover{background:", ";}&.trix-active{background:", ";}&::before,&.trix-active::before{margin:4px;}}", " @media (max-width:500px){.trix-button--icon-strike,.trix-button--icon-number-list,.trix-button--icon-decrease-nesting-level,.trix-button--icon-increase-nesting-level{display:none;}}", " .trix-button--icon-attach::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21 15 16 10 5 21'/%3E%3C/svg%3E\");}.trix-button--video-attach::before{top:8%;bottom:4%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-video'%3E%3Cpolygon points='23 7 16 12 23 17 23 7'%3E%3C/polygon%3E%3Crect x='1' y='5' width='15' height='14' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E\");}}", ""], function (props) {
  return props.withBorders && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    border: '1px solid',
    borderColor: !props.error ? 'black.300' : 'red.300',
    borderRadius: 10,
    padding: 3
  });
}, _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_10__/* .CustomScrollbarCSS */ .T, function (props) {
  return Boolean(props.editorMaxHeight) && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    overflowY: 'scroll'
  });
}, function (props) {
  return !props.withBorders && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    outline: !props.error ? 'none' : "1px dashed ".concat(props.theme.colors.red[300]),
    '&:focus': {
      outline: "1px dashed ".concat(props.theme.colors.black[200])
    }
  });
}, function (props) {
  return props.theme.colors.black[400];
}, function (props) {
  return (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    minHeight: props.editorMinHeight,
    maxHeight: props.editorMaxHeight
  });
}, function (props) {
  return props.toolbarBackgroundColor;
}, function (props) {
  return !props.withBorders && "box-shadow: 0px 5px 3px -3px rgba(0, 0, 0, 0.1);";
}, function (props) {
  return props.withBorders && "min-height: 0px; margin-bottom: 0;";
}, function (props) {
  return props.theme.colors.blue[100];
}, function (props) {
  return props.theme.colors.blue[200];
}, function (props) {
  return props.version === 'simplified' && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    '.trix-button-group--file-tools': {
      display: 'none'
    },
    '.trix-button-group--block-tools .trix-button:not(.trix-button--icon-number-list):not(.trix-button--icon-bullet-list)': {
      display: 'none'
    },
    '.trix-button--icon-bullet-list': {
      borderLeft: 'none'
    }
  });
}, function (props) {
  return props.withStickyToolbar && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    position: 'sticky',
    top: props.toolbarTop || 0,
    marginTop: props.toolbarOffsetY,
    p: '10px'
  });
}, function (props) {
  return props.isDisabled && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    pointerEvents: 'none',
    cursor: 'not-allowed',
    background: '#f3f3f3',
    'trix-toolbar,.trix-button-group': {
      background: '#f3f3f3 !important'
    }
  });
});
var SUPPORTED_SERVICE_URLS = {
  youTube: 'https://www.youtube-nocookie.com/embed/',
  anchorFm: 'https://anchor.fm/'
};
/**
 * A React wrapper around the Trix library to edit rich text.
 * Produces HTML and clear text.
 */

var RichTextEditor = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(RichTextEditor, _React$Component);

  var _super = _createSuper(RichTextEditor);

  function RichTextEditor(props) {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, RichTextEditor);

    _this = _super.call(this, props);

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "initialize", function () {
      if (_this.Trix && _this.editorRef.current) {
        // Listen for changes
        _this.editorRef.current.addEventListener('trix-change', _this.handleChange, false);

        _this.editorRef.current.addEventListener('trix-attachment-add', _this.handleUpload);

        _this.editorRef.current.addEventListener('trix-file-accept', _this.handleFileAccept);

        _this.editorRef.current.addEventListener('trix-action-invoke', _this.trixActionInvoke);

        _this.editorRef.current.addEventListener('trix-initialize', function (event) {
          if (_this.props.videoEmbedEnabled) {
            _this.replaceEmbeddedIFrames(_this.props.value || _this.props.defaultValue);

            _this.trixEmbed(event);
          } // Some special handling for links


          if (_this.mainContainerRef.current) {
            // We must listen when the user presses the 'Enter' key and when the user clicks the 'Link' button as well
            var linkInput = _this.mainContainerRef.current.querySelector("[data-trix-input][name='href']");

            linkInput === null || linkInput === void 0 ? void 0 : linkInput.addEventListener('keydown', function (e) {
              if (e.key === 'Enter') {
                _this.handleLink();
              }
            });

            var addLinkBtn = _this.mainContainerRef.current.querySelector("[data-trix-method='setAttribute']");

            addLinkBtn === null || addLinkBtn === void 0 ? void 0 : addLinkBtn.addEventListener('click', _this.handleLink);
          }
        }); // Component ready!


        _this.isReady = true;
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "replaceEmbeddedIFrames", function (value) {
      var iframeRegex = new RegExp("<iframe.+?iframe>", 'ig');
      var match;
      var lastIndex = 0;

      while (match = iframeRegex.exec(value)) {
        if (lastIndex === 0) {
          _this.getEditor().loadHTML('');
        }

        var iframe = match[0];
        var position = match.index;
        var preText = value.substring(lastIndex, position);

        _this.getEditor().setSelectedRange([lastIndex, position]);

        _this.getEditor().insertHTML(preText);

        var attachment = new _this.Trix.Attachment({
          content: iframe
        });

        _this.getEditor().insertAttachment(attachment);

        lastIndex = match.index + iframe.length;
        var postText = value.substring(lastIndex, value.length);

        _this.getEditor().insertHTML(postText);
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "trixEmbed", function (e) {
      var videoEmbedButton = "<button type=\"button\" tabindex=\"-1\" data-trix-action=\"x-video-dialog-open\" title=\"Attach Video\" class=\"trix-button trix-button--icon trix-button--video-attach\">Attach Video</button>";
      var videoEmbedDialog = "\n            <div class=\"trix-dialog\" data-trix-dialog=\"video-url\" data-trix-dialog-attribute=\"video\">\n              <div class=\"trix-dialog__link-fields\">\n                <input type=\"url\" name=\"video-url\" class=\"trix-input trix-input--dialog trix-input--dialog-embed\" placeholder=\"Enter Video URL\u2026\" aria-label=\"Video URL\" data-trix-input=\"\">\n                <div class=\"trix-button-group\">\n                  <input type=\"button\" class=\"trix-button trix-button--dialog\" value=\"Add Video\" data-trix-action=\"x-add-embed\">\n                </div>\n              </div>\n              <strong>Note: Only YouTube and Anchor.fm links are supported.</strong>\n            </div>";
      var toolbarElement = e.target.toolbarElement;
      var attachFilesButton = toolbarElement.querySelector('[data-trix-action=attachFiles]');
      attachFilesButton.insertAdjacentHTML('afterend', videoEmbedButton);
      var trixDialog = toolbarElement.querySelector('.trix-dialog--link');
      trixDialog.insertAdjacentHTML('afterend', videoEmbedDialog);
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "trixActionInvoke", function (e) {
      var toolbarElement = e.target.toolbarElement;

      if (e.actionName === 'x-video-dialog-open') {
        var attachVideoDialog = toolbarElement.querySelector('[data-trix-dialog=video-url]');
        var attachVideoDialogInput = toolbarElement.querySelector('.trix-input--dialog-embed');

        if (attachVideoDialog.getAttribute('data-trix-active') === '') {
          attachVideoDialog.removeAttribute('data-trix-active');
        } else {
          attachVideoDialog.setAttribute('data-trix-active', '');
          attachVideoDialogInput.removeAttribute('disabled');
        }
      } else if (e.actionName === 'x-add-embed') {
        var _toolbarElement$query;

        var embedLink = (_toolbarElement$query = toolbarElement.querySelector('.trix-input--dialog-embed').value) === null || _toolbarElement$query === void 0 ? void 0 : _toolbarElement$query.trim();

        if (embedLink) {
          _this.embedIframe(embedLink);
        }
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "constructVideoEmbedURL", function (service, id) {
      if (service === 'youtube') {
        return "".concat(SUPPORTED_SERVICE_URLS.youTube).concat(id);
      }
      /* else if (service === 'vimeo') {
      return `https://player.vimeo.com/video/${id}`;
      } */
      else if (service === 'anchorFm') {
        return "".concat(SUPPORTED_SERVICE_URLS.anchorFm).concat(id);
      } else {
        return null;
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "parseServiceLink", function (videoLink) {
      var regexps = {
        youtube: new RegExp('(?:https?://)?(?:www\\.)?youtu(?:\\.be/|be\\.com/\\S*(?:watch|embed)(?:(?:(?=/[^&\\s?]+(?!\\S))/)|(?:\\S*v=|v/)))([^&\\s?]+)', 'i'),
        vimeo: new RegExp('(http|https)?://(www\\.)?vimeo\\.com/(?:channels/(?:\\w+/)?|groups/([^/]*)/videos/|)(\\d+)(?:|/?)'),
        anchorFm: /^(http|https)?:\/\/(www\.)?anchor\.fm\/([^/]+)(\/embed)?(\/episodes\/)?([^/]+)?\/?$/
      };

      for (var service in regexps) {
        var matches = regexps[service].exec(videoLink);

        if (matches) {
          if (service === 'anchorFm') {
            var podcastName = matches[3];
            var episodeId = matches[6];
            var podcastUrl = "".concat(podcastName, "/embed");
            return {
              service: service,
              id: episodeId ? "".concat(podcastUrl, "/episodes/").concat(episodeId) : podcastUrl
            };
          } else {
            return {
              service: service,
              id: matches[matches.length - 1]
            };
          }
        }
      }

      return {};
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "embedIframe", function (videoLink) {
      var _this$parseServiceLin = _this.parseServiceLink(videoLink),
          id = _this$parseServiceLin.id,
          service = _this$parseServiceLin.service;

      var embedLink = _this.constructVideoEmbedURL(service, id);

      if (embedLink) {
        var sanitizedLink = embedLink.replace(/["\\]/g, ''); // Small security enhancement, prevents going out of `src`

        var videoServices = ['youtube', 'vimeo'];
        var attachmentData;

        if (videoServices.includes(service)) {
          attachmentData = {
            contentType: '--embed-iframe-video',
            content: "<iframe src=\"".concat(sanitizedLink, "/?showinfo=0\" width=\"100%\" height=\"394\" frameborder=\"0\" allowfullscreen/>")
          };
        } else {
          attachmentData = {
            contentType: "--embed-iframe-".concat(service),
            content: "<iframe src=\"".concat(sanitizedLink, "\" width=\"100%\" frameborder=\"0\"/>")
          };
        }

        _this.getEditor().insertAttachment(new _this.Trix.Attachment(attachmentData));
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleChange", function (e) {
      // Trigger content formatters
      _this.autolink(); // Notify parent function


      if (_this.props.onChange) {
        _this.props.onChange(e);
      } // Reset errors


      if (_this.state.error) {
        _this.setState({
          error: null
        });
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleFileAccept", function (e) {
      if (!/^image\//.test(e.file.type)) {
        alert('You can only upload images.');
        e.preventDefault();
      } else if (e.file.size > 4000000) {
        // Prevent attaching files > 4MB
        alert('This file is too big (max: 4mb).');
        e.preventDefault();
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleUpload", function (e) {
      var _this$props$setUpload, _this$props;

      var attachment = e.attachment;

      var attachmentContent = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(attachment, 'attachment.attributes.values.content');

      var isVideoAttachment = (attachmentContent === null || attachmentContent === void 0 ? void 0 : attachmentContent.includes("<iframe src=\"".concat(SUPPORTED_SERVICE_URLS.youTube))) || (attachmentContent === null || attachmentContent === void 0 ? void 0 : attachmentContent.includes("<iframe src=\"".concat(SUPPORTED_SERVICE_URLS.anchorFm)));

      if (isVideoAttachment) {
        return;
      } else if (!attachment.file) {
        attachment.remove(); // Remove unknown stuff, for example when copy-pasting HTML

        return;
      }

      (_this$props$setUpload = (_this$props = _this.props).setUploading) === null || _this$props$setUpload === void 0 ? void 0 : _this$props$setUpload.call(_this$props, true);

      var onProgress = function onProgress(progress) {
        return attachment.setUploadProgress(progress);
      };

      var onSuccess = function onSuccess(fileURL) {
        var _this$props$setUpload2, _this$props2;

        (_this$props$setUpload2 = (_this$props2 = _this.props).setUploading) === null || _this$props$setUpload2 === void 0 ? void 0 : _this$props$setUpload2.call(_this$props2, false);
        attachment.setAttributes({
          url: fileURL,
          href: fileURL
        });
      };

      var onFailure = function onFailure() {
        var _this$props$setUpload3, _this$props3;

        (_this$props$setUpload3 = (_this$props3 = _this.props).setUploading) === null || _this$props$setUpload3 === void 0 ? void 0 : _this$props$setUpload3.call(_this$props3, false);

        _this.setState({
          error: 'File upload failed'
        });

        attachment.remove();
      };

      (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .uploadImageWithXHR */ .Z4)(attachment.file, _this.props.kind, {
        onProgress: onProgress,
        onSuccess: onSuccess,
        onFailure: onFailure
      });
      return e;
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleLink", function () {
      var _this$mainContainerRe, _urlInput$value;

      var urlInput = (_this$mainContainerRe = _this.mainContainerRef.current) === null || _this$mainContainerRe === void 0 ? void 0 : _this$mainContainerRe.querySelector("[data-trix-input][name='href']");
      var urlInputValue = urlInput === null || urlInput === void 0 ? void 0 : (_urlInput$value = urlInput.value) === null || _urlInput$value === void 0 ? void 0 : _urlInput$value.trim(); // Ignore missing input or empty values

      if (!urlInputValue) {
        return;
      } // Automatically add 'https://' to the url
      // eslint-disable-next-line camelcase


      if ((0,validator__WEBPACK_IMPORTED_MODULE_20__.isURL)(urlInputValue, {
        require_protocol: false
      }) && !(0,validator__WEBPACK_IMPORTED_MODULE_20__.isURL)(urlInputValue, {
        require_protocol: true
      })) {
        urlInput.value = "https://".concat(urlInputValue);
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "autolinkDelimiter", function (url) {
      var lastCharacterPosition = url.length;

      while (lastCharacterPosition > 0) {
        var lastCharacterIndex = lastCharacterPosition - 1;
        var closingPair = url[lastCharacterIndex];
        var openingPair = void 0;

        if (closingPair === ')') {
          openingPair = '(';
        } else if (closingPair === ']') {
          openingPair = '[';
        } else if (closingPair === '}') {
          openingPair = '{';
        } else if (closingPair === '"') {
          openingPair = '"';
        } else if (closingPair === "'") {
          openingPair = "'";
        } // Ensure single punctuations marks at the end of the URL are not included as part of link


        if ('?!.,:;*_~'.includes(url[lastCharacterIndex])) {
          lastCharacterPosition--;
        } else if (openingPair) {
          var opening = 0,
              closing = 0;
          /** Check to ensure that when a URL is enclosed within pair punctuations,
           * we do not include the closing punctuation as part of the link.
           * We only want to accept a closing punctuation at the end of the link,
           * if there is a corresponding opening punctuation within the URL.
           */

          for (var i = 0; i < lastCharacterPosition; i++) {
            if (url[i] === openingPair) {
              opening++;
            } else if (url[i] === closingPair) {
              closing++;
            }
          }

          if (opening >= closing) {
            break;
          }

          lastCharacterPosition--;
        } else {
          break;
        }
      }

      return lastCharacterPosition;
    });

    _this.editorRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createRef();
    _this.mainContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createRef();
    _this.state = {
      id: props.id,
      error: null
    };
    _this.isReady = false;

    if (true) {
      _this.Trix = __webpack_require__(36250);
      _this.Trix.config.blockAttributes.heading1 = {
        tagName: 'h3'
      };
      _this.Trix.config.attachments.preview.caption = {
        name: false,
        size: false
      };
    }

    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(RichTextEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.id) {
        this.setState({
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)()
        });
      } else if (!this.isReady) {
        this.initialize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (!this.isReady) {
        this.initialize();
      } else if (oldProps.reset !== this.props.reset) {
        this.editorRef.current.editor.loadHTML('');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isReady) {
        this.editorRef.current.removeEventListener('trix-change', this.handleChange);
        this.editorRef.current.removeEventListener('trix-attachment-add', this.handleUpload);
        this.editorRef.current.removeEventListener('trix-attachment-add', this.handleFileAccept);
        this.editorRef.current.removeEventListener('trix-action-invoke', this.trixActionInvoke);
      }
    }
  }, {
    key: "getEditor",
    value: function getEditor() {
      return this.editorRef.current.editor;
    }
  }, {
    key: "autolink",
    value:
    /** Automatically create anchors with hrefs for links */
    function autolink() {
      var _this2 = this;

      var linkRegex = new RegExp("(https?://\\S+\\.\\S+)\\s", 'ig');
      var editor = this.getEditor();
      var content = editor.getDocument().toString();
      var match;

      while (match = linkRegex.exec(content)) {
        var url = match[1];

        if ((0,validator__WEBPACK_IMPORTED_MODULE_20__.isURL)(url)) {
          (function () {
            var position = match.index;

            var urlLength = _this2.autolinkDelimiter(url);

            var range = [position, position + urlLength];
            var hrefAtRange = editor.getDocument().getCommonAttributesAtRange(range).href;
            var newURL = url.slice(0, urlLength);

            if (hrefAtRange !== newURL) {
              _this2.updateInRange(editor, range, 0, function () {
                if (editor.canActivateAttribute('href')) {
                  editor.activateAttribute('href', newURL);
                }
              });
            }
          })();
        }
      }
    }
    /** A helper used by autolink to find where the url actually ends
     * Credits:
     * https://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37
     * https://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58
     */

  }, {
    key: "updateInRange",
    value:
    /** A trix helper that will apply func in range then restore base range when it's done */
    function updateInRange(editor, range) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var updateFunc = arguments.length > 3 ? arguments[3] : undefined;
      var baseRange = editor.getSelectedRange();
      editor.setSelectedRange(range);
      updateFunc();
      editor.setSelectedRange([baseRange[0] + offset, baseRange[1] + offset]);
    }
    /** ---- Render ---- */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          defaultValue = _this$props4.defaultValue,
          withStickyToolbar = _this$props4.withStickyToolbar,
          toolbarTop = _this$props4.toolbarTop,
          toolbarOffsetY = _this$props4.toolbarOffsetY,
          toolbarBackgroundColor = _this$props4.toolbarBackgroundColor,
          autoFocus = _this$props4.autoFocus,
          placeholder = _this$props4.placeholder,
          editorMinHeight = _this$props4.editorMinHeight,
          withBorders = _this$props4.withBorders,
          inputName = _this$props4.inputName,
          disabled = _this$props4.disabled,
          error = _this$props4.error,
          fontSize = _this$props4.fontSize,
          value = _this$props4.value,
          version = _this$props4.version,
          showCount = _this$props4.showCount,
          maxLength = _this$props4.maxLength,
          editorMaxHeight = _this$props4.editorMaxHeight;
      return !this.state.id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        maxHeight: editorMaxHeight ? editorMaxHeight + 56 : undefined,
        height: editorMinHeight ? editorMinHeight + 56 : 200
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(TrixEditorContainer, {
        withStickyToolbar: withStickyToolbar,
        toolbarTop: toolbarTop,
        toolbarOffsetY: toolbarOffsetY,
        toolbarBackgroundColor: toolbarBackgroundColor,
        editorMinHeight: editorMinHeight,
        editorMaxHeight: editorMaxHeight,
        withBorders: withBorders,
        version: version,
        isDisabled: disabled,
        error: error,
        "data-cy": this.props['data-cy'],
        ref: this.mainContainerRef,
        children: [this.state.error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          type: "error",
          mb: "36px",
          withIcon: true,
          children: this.state.error.toString()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
          id: this.state.id,
          value: value || defaultValue,
          type: "hidden",
          name: inputName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_HTMLContent__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          fontSize: fontSize,
          children: !showCount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("trix-editor", {
            ref: this.editorRef,
            input: this.state.id,
            autofocus: autoFocus ? true : undefined,
            placeholder: placeholder
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            position: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("trix-editor", {
              ref: this.editorRef,
              input: this.state.id,
              autofocus: autoFocus ? true : undefined,
              placeholder: placeholder
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              position: "absolute",
              bottom: "1em",
              right: "1em",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                textTransform: "uppercase",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .stripHTML */ .Cb)(value || defaultValue).length
                }), maxLength && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                  children: [" / ", maxLength]
                })]
              })
            })]
          })
        })]
      });
    }
  }]);

  return RichTextEditor;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(RichTextEditor, "defaultProps", {
  withStickyToolbar: false,
  toolbarTop: 0,
  toolbarOffsetY: -62,
  // Default Trix toolbar height
  inputName: 'content',
  toolbarBackgroundColor: 'white',
  version: 'default',
  'data-cy': 'RichTextEditor',
  videoEmbedEnabled: false
});


RichTextEditor.__docgenInfo = {
  "description": "A React wrapper around the Trix library to edit rich text.\nProduces HTML and clear text.",
  "methods": [{
    "name": "getEditor",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "initialize",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "replaceEmbeddedIFrames",
    "docblock": "---- Trix handlers ----",
    "modifiers": [],
    "params": [{
      "name": "value"
    }],
    "returns": null,
    "description": "---- Trix handlers ----"
  }, {
    "name": "trixEmbed",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "trixActionInvoke",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "constructVideoEmbedURL",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "service",
      "type": null
    }, {
      "name": "id",
      "type": null
    }],
    "returns": null
  }, {
    "name": "parseServiceLink",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "videoLink",
      "type": null
    }],
    "returns": null
  }, {
    "name": "embedIframe",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "videoLink",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleFileAccept",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleUpload",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleLink",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "autolink",
    "docblock": "Automatically create anchors with hrefs for links",
    "modifiers": [],
    "params": [],
    "returns": null,
    "description": "Automatically create anchors with hrefs for links"
  }, {
    "name": "autolinkDelimiter",
    "docblock": "A helper used by autolink to find where the url actually ends\nCredits:\nhttps://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37\nhttps://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58",
    "modifiers": [],
    "params": [{
      "name": "url"
    }],
    "returns": null,
    "description": "A helper used by autolink to find where the url actually ends\nCredits:\nhttps://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37\nhttps://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58"
  }, {
    "name": "updateInRange",
    "docblock": "A trix helper that will apply func in range then restore base range when it's done",
    "modifiers": [],
    "params": [{
      "name": "editor"
    }, {
      "name": "range"
    }, {
      "name": "offset"
    }, {
      "name": "updateFunc"
    }],
    "returns": null,
    "description": "A trix helper that will apply func in range then restore base range when it's done"
  }],
  "displayName": "RichTextEditor",
  "props": {
    "withStickyToolbar": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Whether the toolbar should stick to the top",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "toolbarTop": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "description": "If position is sticky, this prop defines the `top` property. Support responsive arrays",
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
    "toolbarOffsetY": {
      "defaultValue": {
        "value": "-62",
        "computed": false
      },
      "description": "Useful to compensate the height of the toolbar when editing inline",
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
    "inputName": {
      "defaultValue": {
        "value": "'content'",
        "computed": false
      },
      "description": "A name for the input",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "toolbarBackgroundColor": {
      "defaultValue": {
        "value": "'white'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "version": {
      "defaultValue": {
        "value": "'default'",
        "computed": false
      },
      "description": "This component is borderless by default. Set this to `true` to change that.",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'default'",
          "computed": false
        }, {
          "value": "'simplified'",
          "computed": false
        }]
      },
      "required": false
    },
    "data-cy": {
      "defaultValue": {
        "value": "'RichTextEditor'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "videoEmbedEnabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "id": {
      "description": "If not provided, an id will be automatically generated which will require a component update",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "placeholder": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "kind": {
      "description": "A unique identified for the category of uploaded files. Required if version is not \"simplified\"",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "fontSize": {
      "description": "Font size for the text",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "autoFocus": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onChange": {
      "description": "Called when text is changed with html content as first param and text content as second param",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "reset": {
      "description": "Change this prop to reset the value",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "showCount": {
      "description": "If true, max text length will be displayed at the bottom right",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "maxLength": {
      "description": "max length which is allowed",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "withBorders": {
      "description": "This component is borderless by default. Set this to `true` to change that.",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disabled": {
      "description": "Whether the field should be disabled",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "editorMinHeight": {
      "description": "Min height for the full component",
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
    "editorMaxHeight": {
      "description": "",
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
    "error": {
      "description": "If truthy, will display a red outline",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "setUploading": {
      "description": "Called when an image is being uploaded to set a boolean",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 59115:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FormPersister; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23493);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35427);





var FormPersister = /*#__PURE__*/function () {
  function FormPersister() {
    var formId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var throttlePeriod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, FormPersister);

    this.formId = formId;
    this.saveValues = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(this.saveValues, throttlePeriod);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(FormPersister, [{
    key: "setFormId",
    value: function setFormId(formId) {
      this.formId = "formState-".concat(formId);
    }
  }, {
    key: "saveValues",
    value: function saveValues(values) {
      if (this.formId) {
        (0,_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .setLocalStorage */ .qQ)(this.formId, JSON.stringify(values));
      }
    }
  }, {
    key: "loadValues",
    value: function loadValues() {
      if (this.formId) {
        var itemFromStorage = (0,_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .getFromLocalStorage */ .fp)(this.formId);

        if (itemFromStorage) {
          return JSON.parse(itemFromStorage);
        }
      }

      return null;
    }
  }, {
    key: "clearValues",
    value: function clearValues() {
      if (this.formId) {
        (0,_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .removeFromLocalStorage */ .bZ)(this.formId);
      }
    }
  }]);

  return FormPersister;
}();



/***/ }),

/***/ 60225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20640);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);



/**
 * A custom react hook to copy values to the clipboard
 *
 * @param timeout: time before the isCopied flag is reset
 */

var useClipboard = function useClipboard() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 3000 : _ref$timeout;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      isCopied = _React$useState2[0],
      setCopied = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState(),
      _React$useState4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),
      updateCopyBtnTimeout = _React$useState4[0],
      setUpdateCopyBtnTimeout = _React$useState4[1];

  return {
    isCopied: isCopied,
    copy: function copy(value) {
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(value);

      setCopied(true);

      if (updateCopyBtnTimeout) {
        clearTimeout(updateCopyBtnTimeout);
      }

      var timeoutFn = setTimeout(function () {
        setCopied(false);
      }, timeout);
      setUpdateCopyBtnTimeout(timeoutFn);
    }
  };
};

/* harmony default export */ __webpack_exports__["Z"] = (useClipboard);

/***/ }),

/***/ 72004:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ CustomScrollbarCSS; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52015);

/**
 * A custom scrollbar for Chrome, more prettier than the system one.
 */

var CustomScrollbarCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)(["@media (pointer:fine){&::-webkit-scrollbar{height:8px;margin:0 16px;}&::-webkit-scrollbar-thumb{background:#d1d1d3;border-radius:16px;&:hover{background:#aaa;}}&::-webkit-scrollbar-track{background:#f2f3f4;border-radius:20px;}&::-webkit-scrollbar-button{color:white;}}"]);

/***/ }),

/***/ 95342:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ create_expense; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
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
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/fp/compose.js
var compose = __webpack_require__(36102);
var compose_default = /*#__PURE__*/__webpack_require__.n(compose);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./lib/allowed-features.js
var allowed_features = __webpack_require__(99708);
// EXTERNAL MODULE: ./lib/collective.lib.js
var collective_lib = __webpack_require__(5700);
// EXTERNAL MODULE: ./lib/constants/expenseTypes.ts
var expenseTypes = __webpack_require__(19878);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/expenses.js
var expenses = __webpack_require__(45624);
// EXTERNAL MODULE: ./lib/form-persister.js
var form_persister = __webpack_require__(59115);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/collective-navbar/index.js + 8 modules
var collective_navbar = __webpack_require__(99656);
// EXTERNAL MODULE: ./components/collective-page/_constants.js
var _constants = __webpack_require__(24839);
// EXTERNAL MODULE: ./components/collective-page/graphql/fragments.js
var fragments = __webpack_require__(5824);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/ContainerOverlay.js
var ContainerOverlay = __webpack_require__(3798);
// EXTERNAL MODULE: ./components/ErrorPage.js
var ErrorPage = __webpack_require__(73908);
// EXTERNAL MODULE: ./lib/constants/dismissable-help-message.js
var dismissable_help_message = __webpack_require__(31801);
// EXTERNAL MODULE: ./components/DismissibleMessage.js
var DismissibleMessage = __webpack_require__(94858);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/expenses/CreateExpenseDismissibleIntro.js










var CreateExpenseDismissibleIntro = function CreateExpenseDismissibleIntro(_ref) {
  var collectiveName = _ref.collectiveName;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DismissibleMessage/* default */.Z, {
    messageId: dismissable_help_message/* HELP_MESSAGE.EXPENSE_CREATE_INFO */.Zh.EXPENSE_CREATE_INFO,
    children: function children(_ref2) {
      var dismiss = _ref2.dismiss;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(MessageBox/* default */.Z, {
        type: "info",
        mb: 4,
        px: 0,
        py: 3,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "12px",
          lineHeight: "20px",
          color: "black.800",
          px: 24,
          "data-cy": "expense-create-help",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "CreateExpense.HelpCreateInfo",
            defaultMessage: [{
              "type": 0,
              "value": "Request payment from "
            }, {
              "type": 1,
              "value": "collective"
            }, {
              "type": 0,
              "value": ". Expenses will be processed once approved by a Collective admin. The amount, description, and your profile name are public, but attachments, payment details, and other personal info is kept private."
            }],
            values: {
              collective: /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                children: collectiveName
              })
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          asLink: true,
          onClick: dismiss,
          fontSize: "12px",
          "data-cy": "dismiss-expense-create-help",
          color: "blue.600",
          buttonSize: "tiny",
          ml: 10,
          mt: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "DismissableHelp.DontShowAgain",
            defaultMessage: [{
              "type": 0,
              "value": "Ok, don’t show me again"
            }]
          })
        })]
      });
    }
  });
};

CreateExpenseDismissibleIntro.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateExpenseDismissibleIntro",
  "props": {
    "collectiveName": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    }
  }
};
/* harmony default export */ var expenses_CreateExpenseDismissibleIntro = (CreateExpenseDismissibleIntro);
// EXTERNAL MODULE: ./components/expenses/ExpenseForm.js + 11 modules
var ExpenseForm = __webpack_require__(26004);
// EXTERNAL MODULE: ./components/expenses/ExpenseInfoSidebar.js + 2 modules
var ExpenseInfoSidebar = __webpack_require__(24018);
// EXTERNAL MODULE: ./components/expenses/ExpenseNotesForm.js
var ExpenseNotesForm = __webpack_require__(12426);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./lib/date-utils.js
var date_utils = __webpack_require__(15078);
// EXTERNAL MODULE: ./lib/i18n/expense.js
var expense = __webpack_require__(8480);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
;// CONCATENATED MODULE: ./components/expenses/ExpenseRecurringForm.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var ExpenseRecurringForm = function ExpenseRecurringForm(_ref) {
  var recurring = _ref.recurring,
      _onChange = _ref.onChange;

  var _React$useState = react.useState(!!recurring),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isRecurring = _React$useState2[0],
      setRecurring = _React$useState2[1];

  var handleSetRecurring = function handleSetRecurring(isRecurring) {
    if (!isRecurring) {
      _onChange(null);
    }

    setRecurring(isRecurring);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
    mt: "50px",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
      flex: "1 1",
      borderColor: "black.300",
      mb: 4
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      color: "black.800",
      fontWeight: "700",
      fontSize: "13px",
      lineHeight: "20px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "Expense.Summary.Recurring.CheckboxTitle",
        defaultMessage: [{
          "type": 0,
          "value": "Is this a recurring expense?"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      mt: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
        name: "tos",
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          color: "black.800",
          fontWeight: "500",
          lineHeight: "16px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Expense.Summary.Recurring.CheckboxDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Choose this option to automatically submit a copy of this invoice on a periodic basis."
            }]
          })
        }),
        size: "13px",
        fontSize: "13px",
        checked: isRecurring,
        onChange: function onChange(_ref2) {
          var checked = _ref2.checked;
          return handleSetRecurring(checked);
        }
      })
    }), isRecurring && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      mt: 2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mr: [0, 3],
        mb: [2, 0],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          name: "frequency",
          htmlFor: "frequency",
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Frequency",
            defaultMessage: [{
              "type": 0,
              "value": "Frequency"
            }]
          }),
          labelFontSize: "13px",
          labelFontWeight: 600,
          required: true,
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
              options: expense/* RecurringIntervalOptions */.wx,
              onChange: function onChange(_ref3) {
                var interval = _ref3.value;
                return _onChange(_objectSpread(_objectSpread({}, recurring), {}, {
                  interval: interval
                }));
              },
              menuPlacement: "auto",
              value: expense/* RecurringIntervalOptions.find */.wx.find(function (i) {
                return i.value === (recurring === null || recurring === void 0 ? void 0 : recurring.interval);
              }),
              isSearchable: false
            }));
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          name: "endsAt",
          htmlFor: "endsAt",
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "EndDate",
            defaultMessage: [{
              "type": 0,
              "value": "End Date"
            }]
          }),
          labelFontSize: "13px",
          labelFontWeight: 600,
          required: false,
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
              type: "date",
              onChange: function onChange(event) {
                return _onChange(_objectSpread(_objectSpread({}, recurring), {}, {
                  endsAt: (0,date_utils/* getDateFromValue */.j9)(event.target.value)
                }));
              },
              menuPlacement: "auto",
              height: "38px",
              width: "100%",
              value: (recurring === null || recurring === void 0 ? void 0 : recurring.endsAt) && (0,date_utils/* toIsoDateStr */.fM)(recurring.endsAt),
              min: (0,date_utils/* toIsoDateStr */.fM)(new Date())
            }));
          }
        })
      })]
    })]
  });
};

ExpenseRecurringForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseRecurringForm",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "recurring": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "interval": {
            "name": "string",
            "required": false
          },
          "endsAt": {
            "name": "custom",
            "raw": "PropTypes.Date",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var expenses_ExpenseRecurringForm = (ExpenseRecurringForm);
// EXTERNAL MODULE: ./components/expenses/ExpenseSummary.js + 1 modules
var ExpenseSummary = __webpack_require__(2781);
// EXTERNAL MODULE: ./components/expenses/graphql/fragments.ts
var graphql_fragments = __webpack_require__(17738);
// EXTERNAL MODULE: ./components/expenses/MobileCollectiveInfoStickyBar.js
var MobileCollectiveInfoStickyBar = __webpack_require__(74448);
// EXTERNAL MODULE: ./components/LinkCollective.js
var components_LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
// EXTERNAL MODULE: ./components/PageFeatureNotSupported.js
var PageFeatureNotSupported = __webpack_require__(43825);
// EXTERNAL MODULE: ./components/SignInOrJoinFree.js + 2 modules
var SignInOrJoinFree = __webpack_require__(41448);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
;// CONCATENATED MODULE: ./pages/create-expense.js













var _templateObject, _templateObject2, _templateObject3, _templateObject4;



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_expense_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function create_expense_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? create_expense_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : create_expense_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











































var STEPS = create_expense_objectSpread(create_expense_objectSpread({}, ExpenseForm/* EXPENSE_FORM_STEPS */.o0), {}, {
  SUMMARY: 'summary'
});

var CreateExpensePage = /*#__PURE__*/function (_React$Component) {
  inherits_default()(CreateExpensePage, _React$Component);

  var _super = _createSuper(CreateExpensePage);

  function CreateExpensePage(props) {
    var _this;

    classCallCheck_default()(this, CreateExpensePage);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "onFormSubmit", /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(expense) {
        var expenseDraft, result, legacyExpenseId, _this$props, collectiveSlug, parentCollectiveSlug, data, parentCollectiveSlugRoute, collectiveType, collectiveTypeRoute;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!expense.payee.isInvite) {
                  _context.next = 17;
                  break;
                }

                expenseDraft = pick_default()(expense, ['description', 'longDescription', 'tags', 'type', 'privateMessage', 'invoiceInfo', 'recipientNote', 'items', 'attachedFiles', 'payeeLocation', 'payoutMethod']);
                expenseDraft['payee'] = pick_default()(expense.payee, ['id', 'slug', 'name', 'email', 'isInvite', 'organization']);
                _context.next = 6;
                return _this.props.draftExpenseAndInviteUser({
                  variables: {
                    account: {
                      id: _this.props.data.account.id
                    },
                    expense: expenseDraft
                  }
                });

              case 6:
                result = _context.sent;

                if (_this.state.formPersister) {
                  _this.state.formPersister.clearValues();
                } // Redirect to the expense page


                legacyExpenseId = result.data.draftExpenseAndInviteUser.legacyId;
                _this$props = _this.props, collectiveSlug = _this$props.collectiveSlug, parentCollectiveSlug = _this$props.parentCollectiveSlug, data = _this$props.data;
                parentCollectiveSlugRoute = parentCollectiveSlug ? "".concat(parentCollectiveSlug, "/") : '';
                collectiveType = parentCollectiveSlug ? (0,collective_lib/* getCollectiveTypeForUrl */.rf)(data === null || data === void 0 ? void 0 : data.account) : undefined;
                collectiveTypeRoute = collectiveType ? "".concat(collectiveType, "/") : '';
                _context.next = 15;
                return _this.props.router.push("".concat(parentCollectiveSlugRoute).concat(collectiveTypeRoute).concat(collectiveSlug, "/expenses/").concat(legacyExpenseId));

              case 15:
                _context.next = 18;
                break;

              case 17:
                _this.setState({
                  expense: expense,
                  step: STEPS.SUMMARY,
                  isInitialForm: false
                });

              case 18:
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](0);

                _this.props.addToast({
                  type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                  message: (0,errors/* i18nGraphqlException */.t2)(_this.props.intl, _context.t0)
                });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 20]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "onSummarySubmit", /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var _this$state, expense, recurring, result, legacyExpenseId, _this$props2, collectiveSlug, parentCollectiveSlug, data, parentCollectiveSlugRoute, collectiveType, collectiveTypeRoute;

      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              _this.setState({
                isSubmitting: true,
                error: null
              });

              _this$state = _this.state, expense = _this$state.expense, recurring = _this$state.recurring;
              _context2.next = 5;
              return _this.props.createExpense({
                variables: {
                  account: {
                    id: _this.props.data.account.id
                  },
                  expense: (0,ExpenseForm/* prepareExpenseForSubmit */.dm)(expense),
                  recurring: recurring
                }
              });

            case 5:
              result = _context2.sent;

              // Clear local storage backup if expense submitted successfully
              if (_this.state.formPersister) {
                _this.state.formPersister.clearValues();
              } // Redirect to the expense page


              legacyExpenseId = result.data.createExpense.legacyId;
              _this$props2 = _this.props, collectiveSlug = _this$props2.collectiveSlug, parentCollectiveSlug = _this$props2.parentCollectiveSlug, data = _this$props2.data;
              parentCollectiveSlugRoute = parentCollectiveSlug ? "".concat(parentCollectiveSlug, "/") : '';
              collectiveType = parentCollectiveSlug ? (0,collective_lib/* getCollectiveTypeForUrl */.rf)(data === null || data === void 0 ? void 0 : data.account) : undefined;
              collectiveTypeRoute = collectiveType ? "".concat(collectiveType, "/") : '';
              _context2.next = 14;
              return _this.props.router.push("".concat(parentCollectiveSlugRoute).concat(collectiveTypeRoute).concat(collectiveSlug, "/expenses/").concat(legacyExpenseId));

            case 14:
              _this.props.addToast({
                type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
                title: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "Expense.Submitted",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Expense submitted"
                  }]
                }),
                message: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "Expense.SuccessPage",
                  defaultMessage: [{
                    "type": 0,
                    "value": "You can edit or review updates on this page."
                  }]
                })
              });

              window.scrollTo(0, 0);
              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);

              _this.props.addToast({
                type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                message: (0,errors/* i18nGraphqlException */.t2)(_this.props.intl, _context2.t0)
              });

              _this.setState({
                isSubmitting: false
              });

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 18]]);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "onNotesChanges", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState(function (state) {
        return {
          expense: create_expense_objectSpread(create_expense_objectSpread({}, state.expense), {}, defineProperty_default()({}, name, value))
        };
      });
    });

    _this.formTopRef = /*#__PURE__*/react.createRef();
    _this.state = {
      step: STEPS.PAYEE,
      expense: null,
      isSubmitting: false,
      formPersister: null,
      isInitialForm: true,
      recurring: null
    };
    return _this;
  }

  createClass_default()(CreateExpensePage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee3() {
        var _this$props3, router, data, account;

        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.handleResetForm()) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                // Re-fetch data if user is logged in
                if (this.props.LoggedInUser) {
                  this.props.data.refetch();
                  this.initFormPersister();
                }

                _this$props3 = this.props, router = _this$props3.router, data = _this$props3.data;
                account = data === null || data === void 0 ? void 0 : data.account;
                (0,url_helpers/* addParentToURLIfMissing */.Bc)(router, account, '/expenses/new');

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee4(oldProps, oldState) {
        var _oldProps$data, _oldProps$data$accoun, _this$props$data, _this$props$data$acco;

        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.handleResetForm()) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                // Re-fetch data if user is logged in
                if (!oldProps.LoggedInUser && this.props.LoggedInUser) {
                  this.props.data.refetch();
                } // Reset form persister when data loads or when account changes


                if (!this.state.formPersister || ((_oldProps$data = oldProps.data) === null || _oldProps$data === void 0 ? void 0 : (_oldProps$data$accoun = _oldProps$data.account) === null || _oldProps$data$accoun === void 0 ? void 0 : _oldProps$data$accoun.id) !== ((_this$props$data = this.props.data) === null || _this$props$data === void 0 ? void 0 : (_this$props$data$acco = _this$props$data.account) === null || _this$props$data$acco === void 0 ? void 0 : _this$props$data$acco.id)) {
                  this.initFormPersister();
                } // Scroll to top when switching steps


                if (oldState.step !== this.state.step && this.formTopRef.current) {
                  this.formTopRef.current.scrollIntoView({
                    behavior: 'smooth'
                  });
                }

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidUpdate(_x2, _x3) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "getPageMetaData",
    value: function getPageMetaData(collective) {
      var baseMetadata = (0,collective_lib/* getCollectivePageMetadata */.Xq)(collective);
      var canonicalURL = "".concat((0,url_helpers/* getCollectivePageCanonicalURL */.Bu)(collective), "/expenses/new");

      if (collective) {
        return create_expense_objectSpread(create_expense_objectSpread({}, baseMetadata), {}, {
          title: "".concat(collective.name, " - New expense"),
          canonicalURL: canonicalURL
        });
      } else {
        return create_expense_objectSpread(create_expense_objectSpread({}, baseMetadata), {}, {
          title: "New expense",
          canonicalURL: canonicalURL
        });
      }
    }
  }, {
    key: "buildFormPersister",
    value: function buildFormPersister() {
      var _this$props4 = this.props,
          LoggedInUser = _this$props4.LoggedInUser,
          data = _this$props4.data;

      if (data.account && LoggedInUser) {
        return new form_persister/* default */.Z("expense-".concat(data.account.id, "=").concat(LoggedInUser.id));
      }
    }
  }, {
    key: "handleResetForm",
    value: function handleResetForm() {
      var router = this.props.router;

      if ((0,utils/* parseToBoolean */.DD)(router.query.resetForm)) {
        var formPersister = this.buildFormPersister();

        if (formPersister) {
          formPersister.clearValues();

          var query = omit_default()(router.query, ['resetForm']);

          var routeAs = router.asPath.split('?')[0];
          return router.push({
            pathname: '/create-expense',
            query: query
          }, routeAs, {
            shallow: true
          });
        }
      }
    }
  }, {
    key: "initFormPersister",
    value: function initFormPersister() {
      var formPersister = this.buildFormPersister();

      if (formPersister) {
        this.setState({
          formPersister: formPersister
        });
      }
    }
  }, {
    key: "getSuggestedTags",
    value: function getSuggestedTags(collective) {
      var tagsStats = collective && collective.expensesTags || null;
      return tagsStats && tagsStats.map(function (_ref3) {
        var tag = _ref3.tag;
        return tag;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$expense,
          _this2 = this,
          _this$state$expense2;

      var _this$props5 = this.props,
          collectiveSlug = _this$props5.collectiveSlug,
          data = _this$props5.data,
          LoggedInUser = _this$props5.LoggedInUser,
          loadingLoggedInUser = _this$props5.loadingLoggedInUser,
          router = _this$props5.router;
      var step = this.state.step;

      if (!data.loading) {
        if (!data || data.error) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
            data: data
          });
        } else if (!data.account) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
            error: (0,errors/* generateNotFoundError */.mN)(collectiveSlug),
            log: false
          });
        } else if (!(0,allowed_features/* default */.ZP)(data.account, allowed_features/* FEATURES.RECEIVE_EXPENSES */.h6.RECEIVE_EXPENSES) || data.account.supportedExpenseTypes.length === 0) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(PageFeatureNotSupported/* default */.Z, {});
        } else if (data.account.isArchived) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(PageFeatureNotSupported/* default */.Z, {
            showContactSupportLink: false
          });
        }
      }

      var collective = data && data.account;
      var host = collective && collective.host;
      var loggedInAccount = data && data.loggedInAccount;
      var payoutProfiles = (0,expenses/* getPayoutProfiles */.rX)(loggedInAccount);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, create_expense_objectSpread(create_expense_objectSpread({
        collective: collective
      }, this.getPageMetaData(collective)), {}, {
        children: !(0,collective_lib/* expenseSubmissionAllowed */.cm)(collective, LoggedInUser) ? /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          justifyContent: "center",
          p: 5,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
            type: "error",
            withIcon: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "mustBeMemberOfCollective",
              defaultMessage: [{
                "type": 0,
                "value": "You must be a member of the collective to see this page"
              }]
            })
          })
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(collective_navbar/* default */.Z, {
            collective: collective,
            isLoading: !collective,
            callsToAction: {
              hasSubmitExpense: false,
              hasRequestGrant: false
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
            position: "relative",
            minHeight: [null, 800],
            ref: this.formTopRef,
            children: [!loadingLoggedInUser && !LoggedInUser && /*#__PURE__*/(0,jsx_runtime.jsx)(ContainerOverlay/* default */.Z, {
              py: [2, null, 6],
              top: "0",
              position: ['fixed', null, 'absolute'],
              justifyContent: ['center', null, 'flex-start'],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SignInOrJoinFree/* SignInOverlayBackground */.g8, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(SignInOrJoinFree/* default */.ZP, {
                  showOCLogo: false,
                  showSubHeading: false,
                  hideFooter: true,
                  routes: {
                    join: "/create-account?next=".concat(encodeURIComponent(router.asPath))
                  }
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
              m: "0 auto",
              px: [2, 3, 4],
              py: [4, 5],
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                justifyContent: "space-between",
                flexDirection: ['column', 'row'],
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                  minWidth: 300,
                  maxWidth: ['100%', null, null, 728],
                  mr: [0, 3, 5],
                  mb: 5,
                  flexGrow: "1",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseSummary/* SummaryHeader */.w, {
                    fontSize: "24px",
                    lineHeight: "32px",
                    mb: 24,
                    py: 2,
                    children: step !== STEPS.SUMMARY ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "ExpenseForm.Submit",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Submit expense"
                      }]
                    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "ExpenseSummaryTitle",
                      defaultMessage: [{
                        "type": 5,
                        "value": "type",
                        "options": {
                          "CHARGE": {
                            "value": [{
                              "type": 0,
                              "value": "Charge"
                            }]
                          },
                          "INVOICE": {
                            "value": [{
                              "type": 0,
                              "value": "Invoice"
                            }]
                          },
                          "RECEIPT": {
                            "value": [{
                              "type": 0,
                              "value": "Receipt"
                            }]
                          },
                          "GRANT": {
                            "value": [{
                              "type": 0,
                              "value": "Grant"
                            }]
                          },
                          "SETTLEMENT": {
                            "value": [{
                              "type": 0,
                              "value": "Settlement"
                            }]
                          },
                          "other": {
                            "value": [{
                              "type": 0,
                              "value": "Expense"
                            }]
                          }
                        }
                      }, {
                        "type": 0,
                        "value": " Summary to "
                      }, {
                        "type": 8,
                        "value": "LinkCollective",
                        "children": [{
                          "type": 1,
                          "value": "collectiveName"
                        }]
                      }],
                      values: {
                        type: (_this$state$expense = this.state.expense) === null || _this$state$expense === void 0 ? void 0 : _this$state$expense.type,
                        collectiveName: collective === null || collective === void 0 ? void 0 : collective.name,
                        LinkCollective: function LinkCollective(text) {
                          return /*#__PURE__*/(0,jsx_runtime.jsx)(components_LinkCollective/* default */.Z, {
                            collective: collective,
                            children: text
                          });
                        }
                      }
                    })
                  }), data.loading || loadingLoggedInUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
                    width: "100%",
                    height: 400
                  }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(expenses_CreateExpenseDismissibleIntro, {
                      collectiveName: collective.name
                    }), step !== STEPS.SUMMARY ? /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseForm/* default */.ZP, {
                      collective: collective,
                      loading: loadingLoggedInUser,
                      loggedInAccount: loggedInAccount,
                      onSubmit: this.onFormSubmit,
                      expense: this.state.expense,
                      expensesTags: this.getSuggestedTags(collective),
                      payoutProfiles: payoutProfiles,
                      formPersister: this.state.formPersister,
                      shouldLoadValuesFromPersister: this.state.isInitialForm,
                      defaultStep: step,
                      autoFocusTitle: true
                    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard/* default */.Z, {
                        p: [16, 24, 32],
                        mb: 0,
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseSummary/* default */.Z, {
                          host: collective.host,
                          expense: create_expense_objectSpread(create_expense_objectSpread({}, this.state.expense), {}, {
                            createdByAccount: this.props.data.loggedInAccount
                          }),
                          collective: collective,
                          borderless: true,
                          isEditing: true
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseRecurringForm, {
                          recurring: this.state.recurring,
                          onChange: function onChange(recurring) {
                            return _this2.setState({
                              recurring: recurring
                            });
                          }
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                        mt: 24,
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseNotesForm/* default */.Z, {
                          onChange: this.onNotesChanges,
                          defaultValue: this.state.expense.privateMessage
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                          flexWrap: "wrap",
                          mt: 4,
                          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
                            mt: 2,
                            minWidth: 175,
                            width: ['100%', 'auto'],
                            mx: [2, 0],
                            mr: [null, 3],
                            whiteSpace: "nowrap",
                            "data-cy": "edit-expense-btn",
                            onClick: function onClick() {
                              return _this2.setState({
                                step: STEPS.EXPENSE
                              });
                            },
                            disabled: this.state.isSubmitting,
                            children: ["\u2190 ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "Expense.edit",
                              defaultMessage: [{
                                "type": 0,
                                "value": "Edit expense"
                              }]
                            })]
                          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                            buttonStyle: "primary",
                            mt: 2,
                            width: ['100%', 'auto'],
                            mx: [2, 0],
                            whiteSpace: "nowrap",
                            "data-cy": "submit-expense-btn",
                            onClick: this.onSummarySubmit,
                            loading: this.state.isSubmitting,
                            minWidth: 175,
                            children: ((_this$state$expense2 = this.state.expense) === null || _this$state$expense2 === void 0 ? void 0 : _this$state$expense2.type) === expenseTypes/* default.GRANT */.Z.GRANT ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "ExpenseForm.SubmitRequest",
                              defaultMessage: [{
                                "type": 0,
                                "value": "Submit request"
                              }]
                            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "ExpenseForm.Submit",
                              defaultMessage: [{
                                "type": 0,
                                "value": "Submit expense"
                              }]
                            })
                          })]
                        })]
                      })]
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  maxWidth: ['100%', 210, null, 275],
                  mt: 70,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseInfoSidebar/* default */.Z, {
                    isLoading: data.loading,
                    collective: collective,
                    host: host
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(MobileCollectiveInfoStickyBar/* default */.Z, {
              isLoading: data.loading,
              collective: collective,
              host: host
            })]
          })]
        })
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref4) {
      var _ref4$query = _ref4.query,
          collectiveSlug = _ref4$query.collectiveSlug,
          parentCollectiveSlug = _ref4$query.parentCollectiveSlug;
      return {
        collectiveSlug: collectiveSlug,
        parentCollectiveSlug: parentCollectiveSlug
      };
    }
  }]);

  return CreateExpensePage;
}(react.Component);

var hostFieldsFragment = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  fragment CreateExpenseHostFields on Host {\n    id\n    name\n    legalName\n    slug\n    type\n    expensePolicy\n    settings\n    currency\n    features {\n      id\n      MULTI_CURRENCY_EXPENSES\n    }\n    location {\n      id\n      address\n      country\n    }\n    transferwise {\n      id\n      availableCurrencies\n    }\n    supportedPayoutMethods\n    isTrustedHost\n  }\n"])));
var createExpensePageQuery = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query CreateExpensePage($collectiveSlug: String!) {\n    account(slug: $collectiveSlug, throwIfMissing: false) {\n      id\n      legacyId\n      slug\n      name\n      type\n      description\n      settings\n      twitterHandle\n      imageUrl\n      backgroundImageUrl\n      currency\n      isArchived\n      isActive\n      expensePolicy\n      supportedExpenseTypes\n      features {\n        id\n        ...NavbarFields\n        MULTI_CURRENCY_EXPENSES\n      }\n      expensesTags {\n        id\n        tag\n      }\n\n      stats {\n        id\n        balanceWithBlockedFunds {\n          valueInCents\n          currency\n        }\n      }\n\n      ... on AccountWithHost {\n        isApproved\n        host {\n          id\n          ...CreateExpenseHostFields\n        }\n      }\n\n      # For Hosts with Budget capabilities\n\n      ... on Organization {\n        isHost\n        isActive\n        # NOTE: This will be the account itself in this case\n        host {\n          id\n          ...CreateExpenseHostFields\n        }\n      }\n\n      ... on AccountWithParent {\n        parent {\n          id\n          slug\n          expensePolicy\n          imageUrl\n          backgroundImageUrl\n          twitterHandle\n        }\n      }\n    }\n    loggedInAccount {\n      id\n      ...LoggedInAccountExpensePayoutFields\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n"])), graphql_fragments/* loggedInAccountExpensePayoutFieldsFragment */.sU, hostFieldsFragment, fragments/* collectiveNavbarFieldsFragment */.AS);
var addCreateExpensePageData = (0,graphql/* graphql */.B)(createExpensePageQuery, {
  options: {
    context: helpers/* API_V2_CONTEXT */.T,
    fetchPolicy: 'cache-and-network'
  }
});
var createExpenseMutation = (0,lib/* default */.ZP)(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  mutation CreateExpense(\n    $expense: ExpenseCreateInput!\n    $account: AccountReferenceInput!\n    $recurring: RecurringExpenseInput\n  ) {\n    createExpense(expense: $expense, account: $account, recurring: $recurring) {\n      id\n      ...ExpensePageExpenseFields\n    }\n  }\n  ", "\n"])), graphql_fragments/* expensePageExpenseFieldsFragment */.Wg);
var addCreateExpenseMutation = (0,graphql/* graphql */.B)(createExpenseMutation, {
  name: 'createExpense',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
  }
});
var draftExpenseAndInviteUserMutation = (0,lib/* default */.ZP)(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n  mutation DraftExpenseAndInviteUser($expense: ExpenseInviteDraftInput!, $account: AccountReferenceInput!) {\n    draftExpenseAndInviteUser(expense: $expense, account: $account) {\n      id\n      ...ExpensePageExpenseFields\n    }\n  }\n  ", "\n"])), graphql_fragments/* expensePageExpenseFieldsFragment */.Wg);
var addDraftExpenseAndInviteUserMutation = (0,graphql/* graphql */.B)(draftExpenseAndInviteUserMutation, {
  name: 'draftExpenseAndInviteUser',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
  }
});

var addHoc = compose_default()(UserProvider/* withUser */.ns, router.withRouter, addCreateExpensePageData, addCreateExpenseMutation, addDraftExpenseAndInviteUserMutation, ToastProvider/* withToasts */.CP, injectIntl/* default */.ZP);

CreateExpensePage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, parentCollectiveSlug } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getPageMetaData",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "collective",
      "type": null
    }],
    "returns": null
  }, {
    "name": "buildFormPersister",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "handleResetForm",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "initFormPersister",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onFormSubmit",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "expense",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onSummarySubmit",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "onNotesChanges",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getSuggestedTags",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "collective",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateExpensePage",
  "props": {
    "collectiveSlug": {
      "description": "from getInitialProps",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "parentCollectiveSlug": {
      "description": "from getInitialProps",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loadingLoggedInUser": {
      "description": "from withUser",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "router": {
      "description": "from withRouter",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "intl": {
      "description": "from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "createExpense": {
      "description": "from apollo",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "draftExpenseAndInviteUser": {
      "description": "from apollo",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "addToast": {
      "description": "from withToast",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "data": {
      "description": "from apollo",
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
          "refetch": {
            "name": "func",
            "required": false
          },
          "account": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
              "parent": {
                "name": "object",
                "required": false
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
              "type": {
                "name": "string",
                "required": true
              },
              "twitterHandle": {
                "name": "string",
                "required": false
              },
              "imageUrl": {
                "name": "string",
                "required": false
              },
              "isArchived": {
                "name": "bool",
                "required": false
              },
              "supportedExpenseTypes": {
                "name": "array",
                "required": false
              },
              "expensesTags": {
                "name": "arrayOf",
                "value": {
                  "name": "shape",
                  "value": {
                    "id": {
                      "name": "string",
                      "required": true
                    },
                    "tag": {
                      "name": "string",
                      "required": true
                    }
                  }
                },
                "required": false
              },
              "host": {
                "name": "shape",
                "value": {
                  "id": {
                    "name": "string",
                    "required": true
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "loggedInAccount": {
            "name": "shape",
            "value": {
              "adminMemberships": {
                "name": "shape",
                "value": {
                  "nodes": {
                    "name": "arrayOf",
                    "value": {
                      "name": "shape",
                      "value": {
                        "id": {
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
                            "slug": {
                              "name": "string",
                              "required": true
                            },
                            "name": {
                              "name": "string",
                              "required": false
                            },
                            "imageUrl": {
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
            },
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ var create_expense = (addHoc(CreateExpensePage));

/***/ }),

/***/ 51253:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/create-expense",
      function () {
        return __webpack_require__(95342);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [3662,5328,6567,1512,8966,8027,5126,5490,2092,9158,468,4843,7961,146,5813,4842,4154,1012,1861,7965,4691,7653,6467,1448,4944,9656,2750,9774,2888,179], function() { return __webpack_exec__(51253); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=create-expense-50242996172c494a.js.map