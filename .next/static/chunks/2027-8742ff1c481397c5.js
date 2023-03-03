"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2027],{

/***/ 325:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 45222:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_ContributorCard; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/lodash/truncate.js
var truncate = __webpack_require__(39138);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/constants/roles.js
var roles = __webpack_require__(98216);
// EXTERNAL MODULE: ./lib/i18n/member-role.js
var member_role = __webpack_require__(66465);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/components/Mutation.js
var Mutation = __webpack_require__(32493);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Times/Times.esm.js
var Times_esm = __webpack_require__(74684);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Popper.js
var Popper = __webpack_require__(74688);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/withViewport.js
var withViewport = __webpack_require__(74387);
// EXTERNAL MODULE: ./components/collective-page/graphql/queries.js
var graphql_queries = __webpack_require__(71611);
// EXTERNAL MODULE: ./components/tier-page/graphql/queries.js
var tier_page_graphql_queries = __webpack_require__(44791);
// EXTERNAL MODULE: ./components/contribute-cards/constants.js
var constants = __webpack_require__(19146);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledKeyframes.js
var StyledKeyframes = __webpack_require__(29925);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/EditPublicMessagePopup.js





var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















/** Pop-up for editing the public message */



var EditPublicMessagePopupContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "EditPublicMessagePopup__EditPublicMessagePopupContainer",
  componentId: "sc-1s1l5yw-0"
})(["position:absolute;padding:8px;border:1px solid #f3f3f3;border-radius:8px;background:white;box-shadow:0px 4px 8px rgba(20,20,20,0.16);animation:", " 0.3s ease-in-out;z-index:1;width:275px;"], StyledKeyframes/* fadeIn */.Ji);
var Arrow = (0,styled_components_browser_esm/* default */.ZP)('div').withConfig({
  displayName: "EditPublicMessagePopup__Arrow",
  componentId: "sc-1s1l5yw-1"
})(["position:absolute;width:3em;height:3em;&[data-placement*='bottom']{top:0;left:0;margin-top:-0.9em;width:3em;height:1em;&::before{border-width:0 1.5em 1em 1.5em;border-color:transparent transparent #ffffff transparent;filter:drop-shadow(0px -3px 3px rgba(20,20,20,0.1));}}&[data-placement*='top']{bottom:0;left:0;margin-bottom:-0.9em;width:3em;height:1em;&::before{border-width:1em 1.5em 0 1.5em;border-color:#ffffff transparent transparent transparent;filter:drop-shadow(0px 3px 3px rgba(20,20,20,0.1));}}&[data-placement*='right']{left:0;margin-left:-0.9em;height:3em;width:1em;&::before{border-width:1.5em 1em 1.5em 0;border-color:transparent #ffffff transparent transparent;filter:drop-shadow(-4px 3px 3px rgba(20,20,20,0.1));}}&[data-placement*='left']{right:0;margin-right:-0.9em;height:3em;width:1em;&::before{border-width:1.5em 0 1.5em 1em;border-color:transparent transparent transparent #ffffff;filter:drop-shadow(4px 3px 3px rgba(20,20,20,0.1));}}&::before{content:'';margin:auto;display:block;width:0;height:0;border-style:solid;}"]);
var editPublicMessageMutation = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation EditPublicMessage($FromCollectiveId: Int!, $CollectiveId: Int!, $message: String) {\n    editPublicMessage(FromCollectiveId: $FromCollectiveId, CollectiveId: $CollectiveId, message: $message) {\n      id\n      publicMessage\n      tier {\n        id\n      }\n      collective {\n        id\n        slug\n      }\n    }\n  }\n"])));
var messages = (0,lib.defineMessages)({
  publicMessagePlaceholder: {
    id: "contribute.publicMessage.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Motivate others to contribute in 140 characters :) ..."
    }]
  }
});
var PUBLIC_MESSAGE_MAX_LENGTH = 140;
var REACT_POPPER_MODIFIERS = [{
  name: 'flip',
  options: {
    fallbackPlacements: ['right', 'bottom', 'top'],
    padding: {
      right: 100
    }
  }
}];

function EditPublicMessagePopup(_ref) {
  var width = _ref.width,
      fromCollectiveId = _ref.fromCollectiveId,
      collectiveId = _ref.collectiveId,
      cardRef = _ref.cardRef,
      onClose = _ref.onClose,
      message = _ref.message,
      intl = _ref.intl;

  var _useState = (0,react.useState)(message || ''),
      messageDraft = _useState[0],
      setMessageDraft = _useState[1]; // Can't be rendered SSR


  if ( false || !cardRef.current) {
    return null;
  }

  return /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/(0,jsx_runtime.jsx)(Mutation/* Mutation */.m, {
    mutation: editPublicMessageMutation,
    children: function children(submitMessage, _ref2) {
      var loading = _ref2.loading,
          error = _ref2.error;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Popper/* Popper */.r, {
        referenceElement: cardRef.current,
        placement: width < 780 ? 'bottom' : 'right',
        modifiers: REACT_POPPER_MODIFIERS,
        children: function children(_ref3) {
          var ref = _ref3.ref,
              style = _ref3.style,
              placement = _ref3.placement,
              arrowProps = _ref3.arrowProps;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(EditPublicMessagePopupContainer, {
            "data-cy": "EditPublicMessagePopup",
            ref: ref,
            style: style,
            "data-placement": placement,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              justifyContent: "flex-end",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Times_esm/* Times */.u, {
                size: "1em",
                color: "#a2a2a2",
                cursor: "pointer",
                onClick: onClose
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexDirection: "column",
              p: 2,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                fontSize: "14px",
                color: "black.600",
                mb: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                  id: "contribute.publicMessage",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Leave a public message (optional)"
                  }]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, {
                name: "publicMessage",
                as: "textarea",
                px: 10,
                py: 10,
                width: "100%",
                height: 112,
                fontSize: "14px",
                style: {
                  resize: 'none'
                },
                placeholder: intl.formatMessage(messages.publicMessagePlaceholder),
                value: messageDraft,
                maxLength: PUBLIC_MESSAGE_MAX_LENGTH,
                onChange: function onChange(e) {
                  return setMessageDraft(e.target.value);
                },
                disabled: loading
              }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                color: "red.500",
                fontSize: "12px",
                mt: 2,
                children: (0,errors/* formatErrorMessage */.jN)(intl, (0,errors/* getErrorFromGraphqlException */.H1)(error))
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                m: "0 auto",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                  "data-cy": "EditPublicMessagePopup_SubmitButton",
                  buttonSize: "small",
                  fontWeight: "bold",
                  px: 4,
                  mt: 3,
                  loading: loading,
                  onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
                    return regenerator_default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return submitMessage({
                              variables: {
                                FromCollectiveId: fromCollectiveId,
                                CollectiveId: collectiveId,
                                message: messageDraft ? messageDraft.trim() : null
                              },
                              // Update cache after mutation
                              refetchQueries: function refetchQueries(_ref5) {
                                var editPublicMessage = _ref5.data.editPublicMessage;

                                var _editPublicMessage = slicedToArray_default()(editPublicMessage, 1),
                                    member = _editPublicMessage[0];

                                var collectiveSlug = member.collective.slug;
                                var tier = member.tier;
                                var queries = [{
                                  query: graphql_queries/* collectivePageQuery */.J,
                                  variables: {
                                    slug: collectiveSlug,
                                    nbContributorsPerContributeCard: constants/* MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */.Dc
                                  }
                                }];

                                if (tier) {
                                  queries.push({
                                    query: tier_page_graphql_queries/* tierPageQuery */.T,
                                    variables: {
                                      tierId: tier.id
                                    }
                                  });
                                }

                                return queries;
                              }
                            });

                          case 2:
                            onClose();

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })),
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                    id: "submit",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Submit"
                    }]
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Arrow, _objectSpread(_objectSpread({}, arrowProps), {}, {
              "data-placement": placement
            }))]
          });
        }
      });
    }
  }), document.body);
}

EditPublicMessagePopup.defaultProps = {
  message: ''
};
/* harmony default export */ var components_EditPublicMessagePopup = ((0,withViewport/* default */.ZP)(EditPublicMessagePopup, {
  withWidth: true
}));
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/LinkContributor.js
var LinkContributor = __webpack_require__(42388);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledTag.js
var StyledTag = __webpack_require__(36422);
;// CONCATENATED MODULE: ./components/ContributorCard.js



var _excluded = ["intl", "width", "height", "contributor", "currency", "isLoggedUser", "collectiveId", "hideTotalAmountDonated"];

function ContributorCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ContributorCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ContributorCard_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ContributorCard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















/** Main card */



var MainContainer = (0,styled_components_browser_esm/* default */.ZP)(StyledCard/* default */.Z).withConfig({
  displayName: "ContributorCard__MainContainer",
  componentId: "sc-12htdks-0"
})(["a{display:block;text-decoration:none;&:hover{opacity:0.9;}}"]);
/** A container to center the logo above an horizontal bar */

var CollectiveLogoContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ContributorCard__CollectiveLogoContainer",
  componentId: "sc-12htdks-1"
})(["display:flex;justify-content:center;margin-top:44px;border-top:1px solid #e6e8eb;"]);
var publicMessageStyle = (0,styled_components_browser_esm/* css */.iv)(["margin:4px 0px;font-size:12px;line-height:16px;color:#4e5052;text-align:center;word-break:break-word;"]);
/** User-submitted public message */

var PublicMessage = styled_components_browser_esm/* default.q.withConfig */.ZP.q.withConfig({
  displayName: "ContributorCard__PublicMessage",
  componentId: "sc-12htdks-2"
})(["display:block;", ""], publicMessageStyle);
/** User-submitted public message edit button */

var PublicMessageEditButton = styled_components_browser_esm/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "ContributorCard__PublicMessageEditButton",
  componentId: "sc-12htdks-3"
})(["", " appearance:none;border:none;cursor:pointer;outline:0;background:transparent;"], publicMessageStyle);
/** Returns the main role for contributor */

var getMainContributorRole = function getMainContributorRole(contributor) {
  // Order of the if / else if makes the priority to decide which role we want to
  // show first. The priority order should be:
  // ADMIN > BACKER > *
  // Everything that comes after follower is considered same priority so we just
  // take the first role in the list.
  if (contributor.isAdmin) {
    return roles/* default.ADMIN */.Z.ADMIN;
  } else if (contributor.isCore) {
    return roles/* default.MEMBER */.Z.MEMBER;
  } else if (contributor.isBacker && contributor.totalAmountDonated < 1) {
    return roles/* default.CONTRIBUTOR */.Z.CONTRIBUTOR;
  } else if (contributor.isBacker) {
    return roles/* default.BACKER */.Z.BACKER;
  } else {
    return contributor.roles[0];
  }
};

var ContributorTag = (0,styled_components_browser_esm/* default */.ZP)(StyledTag/* default */.Z).withConfig({
  displayName: "ContributorCard__ContributorTag",
  componentId: "sc-12htdks-4"
})(["margin-bottom:8px;padding:5px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:12px;"]);
/**
 * A single contributor card, exported as a PureComponent to improve performances.
 * Accept all the props from [StyledCard](/#/Atoms?id=styledcard).
 */

var ContributorCard = function ContributorCard(_ref) {
  var intl = _ref.intl,
      width = _ref.width,
      height = _ref.height,
      contributor = _ref.contributor,
      currency = _ref.currency,
      isLoggedUser = _ref.isLoggedUser,
      collectiveId = _ref.collectiveId,
      hideTotalAmountDonated = _ref.hideTotalAmountDonated,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var fromCollectiveId = contributor.collectiveId,
      publicMessage = contributor.publicMessage,
      description = contributor.description;

  var truncatedPublicMessage = publicMessage && truncate_default()(publicMessage, {
    length: 50
  });

  var truncatedDescription = description && truncate_default()(description, {
    length: 30
  });

  var _useState = (0,react.useState)(false),
      showEditMessagePopup = _useState[0],
      setShowEditMessagePopup = _useState[1];

  var mainContainerRef = (0,react.useRef)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(MainContainer, ContributorCard_objectSpread(ContributorCard_objectSpread({
    ref: mainContainerRef,
    width: width,
    height: height
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveLogoContainer, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mt: -32,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkContributor/* default */.Z, {
          contributor: contributor,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* ContributorAvatar */.BD, {
            contributor: contributor,
            radius: 64
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "center",
      p: 2,
      pt: 2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(LinkContributor/* default */.Z, {
        contributor: contributor,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          color: "black.900",
          fontSize: "14px",
          fontWeight: "500",
          textAlign: "center",
          lineHeight: "18px",
          title: contributor.name,
          children: truncate_default()(contributor.name, {
            length: 16
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        mt: 2,
        children: [contributor.isAdmin || contributor.isCore ? /*#__PURE__*/(0,jsx_runtime.jsx)(ContributorTag, {
          children: (0,member_role/* default */.Z)(intl, getMainContributorRole(contributor))
        }) : truncatedDescription ? /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "12px",
          fontWeight: "700",
          title: description,
          mb: 1,
          textAlign: "center",
          children: truncatedDescription
        }) : null, contributor.totalAmountDonated > 0 && !hideTotalAmountDonated && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "12px",
          fontWeight: "700",
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
            amount: contributor.totalAmountDonated,
            currency: currency,
            precision: 0
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mt: 1,
        children: isLoggedUser && !showEditMessagePopup ? /*#__PURE__*/(0,jsx_runtime.jsx)(PublicMessageEditButton, {
          "data-cy": "ContributorCard_EditPublicMessageButton",
          onClick: function onClick() {
            setShowEditMessagePopup(true);
          },
          children: truncatedPublicMessage || /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "contribute.publicMessage",
            defaultMessage: [{
              "type": 0,
              "value": "Leave a public message (optional)"
            }]
          })
        }) : truncatedPublicMessage && /*#__PURE__*/(0,jsx_runtime.jsx)(PublicMessage, {
          title: publicMessage,
          children: truncatedPublicMessage
        })
      })]
    }), showEditMessagePopup && /*#__PURE__*/(0,jsx_runtime.jsx)(components_EditPublicMessagePopup, {
      cardRef: mainContainerRef,
      message: publicMessage,
      onClose: function onClose() {
        return setShowEditMessagePopup(false);
      },
      intl: intl,
      fromCollectiveId: fromCollectiveId,
      collectiveId: collectiveId
    })]
  }));
};

ContributorCard.defaultProps = {
  width: 144,
  height: 272,
  currency: 'USD',
  hideTotalAmountDonated: false
};
ContributorCard.__docgenInfo = {
  "description": "A single contributor card, exported as a PureComponent to improve performances.\nAccept all the props from [StyledCard](/#/Atoms?id=styledcard).",
  "methods": [],
  "displayName": "ContributorCard",
  "props": {
    "width": {
      "defaultValue": {
        "value": "144",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "height": {
      "defaultValue": {
        "value": "272",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "currency": {
      "defaultValue": {
        "value": "'USD'",
        "computed": false
      },
      "description": "The currency used to show the contributions",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "hideTotalAmountDonated": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "True if you want to hide the total amount donated",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "contributor": {
      "description": "The contributor to display",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "collectiveId": {
            "name": "number",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "collectiveSlug": {
            "name": "string",
            "required": false
          },
          "isIncognito": {
            "name": "bool",
            "required": false
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.keys(CollectiveType)",
            "required": false
          },
          "totalAmountDonated": {
            "name": "number",
            "required": false
          },
          "image": {
            "name": "string",
            "required": false
          },
          "publicMessage": {
            "name": "string",
            "required": false
          },
          "roles": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "isAdmin": {
            "name": "bool",
            "required": true
          },
          "isBacker": {
            "name": "bool",
            "required": true
          },
          "isCore": {
            "name": "bool",
            "required": true
          }
        }
      },
      "required": true
    },
    "intl": {
      "description": "@ignore",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "isLoggedUser": {
      "description": "It is the logged user",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "collectiveId": {
      "description": "Collective id",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_ContributorCard = (/*#__PURE__*/react.memo((0,injectIntl/* default */.ZP)(ContributorCard)));

/***/ }),

/***/ 97866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zx": function() { return /* binding */ CONTRIBUTOR_FILTERS; },
/* harmony export */   "_w": function() { return /* binding */ filterContributors; },
/* harmony export */   "ah": function() { return /* binding */ FILTERS_LIST; },
/* harmony export */   "pQ": function() { return /* binding */ getContributorsFilters; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74806);
/* harmony import */ var _StyledFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59049);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);


var _excluded = ["intl", "selected", "onChange", "filters"];

var _defineMessages;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var CONTRIBUTOR_FILTERS = {
  ALL: 'ALL',
  CORE: 'CORE',
  FINANCIAL: 'FINANCIAL'
};
var FILTERS_LIST = Object.values(CONTRIBUTOR_FILTERS);
var Translations = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, CONTRIBUTOR_FILTERS.ALL, {
  id: "ContributorsFilter.All",
  defaultMessage: [{
    "type": 0,
    "value": "All contributors"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, CONTRIBUTOR_FILTERS.CORE, {
  id: "ContributorsFilter.Core",
  defaultMessage: [{
    "type": 0,
    "value": "Team"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, CONTRIBUTOR_FILTERS.FINANCIAL, {
  id: "ContributorsFilter.Financial",
  defaultMessage: [{
    "type": 0,
    "value": "Financial contributors"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, CONTRIBUTOR_FILTERS.GITHUB, {
  id: "ContributorsFilter.Github",
  defaultMessage: [{
    "type": 0,
    "value": "Github contributors"
  }]
}), _defineMessages));
/**
 * For a given list of contributors, returns all the filters that can be applied
 * to the list.
 */

var getContributorsFilters = function getContributorsFilters(contributors) {
  var filters = new Set([CONTRIBUTOR_FILTERS.ALL]); // Helper to add a filter, returns true if the filters list is full because there's
  // no need to traverse the entire list if we already registered all the types

  var addFilter = function addFilter(filter) {
    filters.add(filter);
    return filters.length === FILTERS_LIST.length - 1;
  }; // Add filters to the set based on contributors roles


  var _iterator = _createForOfIteratorHelper(contributors),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var c = _step.value;

      if (c.isCore || c.isAdmin) {
        if (addFilter(CONTRIBUTOR_FILTERS.CORE)) {
          break;
        }
      } else if (c.isBacker) {
        if (addFilter(CONTRIBUTOR_FILTERS.FINANCIAL)) {
          break;
        }
      }
    } // Ensure we preserver filters order by sorting them according to the base list

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return Array.from(filters).sort(function (filter1, filter2) {
    return FILTERS_LIST.indexOf(filter1) > FILTERS_LIST.indexOf(filter2) ? 1 : -1;
  });
};
/**
 * A helper to filter a contributors list by contributor roles.
 *
 * Please ensure you memoize this one properly is the cost can be pretty depending
 * on the number of contributors.
 */

var filterContributors = function filterContributors(contributors, filter) {
  if (!contributors) {
    return [];
  }

  if (filter === CONTRIBUTOR_FILTERS.FINANCIAL) {
    return contributors.filter(function (c) {
      return c.isBacker || c.isFundraiser;
    });
  } else if (filter === CONTRIBUTOR_FILTERS.CORE) {
    return contributors.filter(function (c) {
      return c.isCore || c.isAdmin;
    });
  } else {
    // For filters not implemented yet and `ALL`, just return the contributors list
    return contributors;
  }
};
/**
 * A set of filters for contributors types. This file also exports helper functions
 * to deal with the filters, including:
 * - `getContributorsFilters`: For a given list of Contributors, returns all the filters that can be applied to the list.
 * - `filterContributors`: A helper to filter a Contributors list by contributor roles.
 */

var ContributorsFilter = function ContributorsFilter(_ref) {
  var intl = _ref.intl,
      selected = _ref.selected,
      onChange = _ref.onChange,
      filters = _ref.filters,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_StyledFilters__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread({
    filters: filters,
    getLabel: function getLabel(filter) {
      return intl.formatMessage(Translations[filter]);
    },
    onChange: onChange,
    selected: selected || CONTRIBUTOR_FILTERS.ALL
  }, props));
};

ContributorsFilter.defaultProps = {
  filters: FILTERS_LIST
};
ContributorsFilter.__docgenInfo = {
  "description": "A set of filters for contributors types. This file also exports helper functions\nto deal with the filters, including:\n- `getContributorsFilters`: For a given list of Contributors, returns all the filters that can be applied to the list.\n- `filterContributors`: A helper to filter a Contributors list by contributor roles.",
  "methods": [],
  "displayName": "ContributorsFilter",
  "props": {
    "filters": {
      "defaultValue": {
        "value": "Object.values(CONTRIBUTOR_FILTERS)",
        "computed": true
      },
      "description": "An optional list of active filters",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "enum",
          "value": [{
            "value": "\"ALL\"",
            "computed": false
          }, {
            "value": "\"CORE\"",
            "computed": false
          }, {
            "value": "\"FINANCIAL\"",
            "computed": false
          }]
        }
      },
      "required": false
    },
    "selected": {
      "description": "Selected filter. Defaults to `ALL`",
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"ALL\"",
          "computed": false
        }, {
          "value": "\"CORE\"",
          "computed": false
        }, {
          "value": "\"FINANCIAL\"",
          "computed": false
        }]
      },
      "required": false
    },
    "onChange": {
      "description": "Called when another filter is selected",
      "type": {
        "name": "func"
      },
      "required": true
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
/* harmony default export */ __webpack_exports__["ZP"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(ContributorsFilter));

/***/ }),

/***/ 65320:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export COLLECTIVE_CARD_MARGIN_X */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82171);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52015);
/* harmony import */ var _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72004);
/* harmony import */ var _lib_withViewport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74387);
/* harmony import */ var _ContributorCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45222);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29925);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85893);




var _maxNbRowsForViewport;

var _excluded = ["style"],
    _excluded2 = ["style"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









 // Define static dimensions


var COLLECTIVE_CARD_MARGIN_X = 32;
var COLLECTIVE_CARD_MARGIN_Y = 26;
var COLLECTIVE_CARD_WIDTH = 144;
var COLLECTIVE_CARD_HEIGHT = 220;
var COLLECTIVE_CARD_FULL_WIDTH = COLLECTIVE_CARD_WIDTH + COLLECTIVE_CARD_MARGIN_X;
/** Adds custom scrollbar for Chrome */

var StyledGridContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "ContributorsGrid__StyledGridContainer",
  componentId: "sc-9lyk9m-0"
})(["", " &:not(:hover){&::-webkit-scrollbar-thumb{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}}"], _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_5__/* .CustomScrollbarCSS */ .T);
/**
 * We have to define the outer container here because react-window doesn't
 * let you pass custom props to outer container.
 */

var getGridContainer = function getGridContainer(paddingLeft, hasScroll) {
  // eslint-disable-next-line react/prop-types
  var GridContainer = function GridContainer(_ref, ref) {
    var style = _ref.style,
        props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(StyledGridContainer, _objectSpread({
      "data-cy": "contributors-grid",
      ref: ref,
      style: _objectSpread(_objectSpread({}, style), {}, {
        width: '100%',
        paddingLeft: paddingLeft,
        overflowX: hasScroll ? 'auto' : 'hidden'
      })
    }, props));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(GridContainer);
};
/**
 * Add margin to the inner container width
 */


var GridInnerContainer = function GridInnerContainer(_ref2) {
  var style = _ref2.style,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", _objectSpread({
    style: _objectSpread(_objectSpread({}, style), {}, {
      position: 'relative',
      width: style.width + COLLECTIVE_CARD_MARGIN_X
    })
  }, props));
};

/** Cards to show individual contributors */
var ContributorCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "ContributorsGrid__ContributorCardContainer",
  componentId: "sc-9lyk9m-1"
})(["animation:", " 0.3s;position:absolute;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_8__/* .fadeIn */ .Ji);
/** Get an index in a single dimension array from a matrix coordinate */

var getContributorIdx = function getContributorIdx(colIndex, rowIndex, nbRows, nbCols, hasScroll) {
  return hasScroll ? rowIndex + nbRows * colIndex : rowIndex * nbCols + colIndex;
};
/** Get the items repartition, aka the number of columns and rows. */


var getItemsRepartition = function getItemsRepartition(nbItems, width, maxNbRows) {
  var maxVisibleNbCols = Math.trunc(width / COLLECTIVE_CARD_FULL_WIDTH);
  var maxVisibleItems = maxVisibleNbCols * maxNbRows;

  if (nbItems <= maxVisibleItems) {
    // If all items can fit in the view without scrolling, we arrange the view
    // to fit them all by showing fully filled lines
    var nbCols = Math.min(maxVisibleNbCols, nbItems);
    var nbRows = Math.ceil(nbItems / maxVisibleNbCols);
    return [nbCols, nbRows];
  } else {
    // Otherwise we just place the items equally amongs maxNbRows
    var _nbCols = Math.ceil(nbItems / maxNbRows);

    var _nbRows = maxNbRows;
    return [_nbCols, _nbRows];
  }
};
/**
 * Compute the proper padding left to center the content according to max width
 */


var computePaddingLeft = function computePaddingLeft(width, rowWidth, nbRows, maxWidthWhenNotFull) {
  if (width < maxWidthWhenNotFull) {
    // No need for padding on screens small enough so they don't have padding
    return 0;
  } else if (nbRows > 1) {
    if (rowWidth <= width) {
      // If multiline and possible center contributors cards
      var cardsLeftOffset = COLLECTIVE_CARD_MARGIN_X / 2;
      return (width - rowWidth) / 2 - cardsLeftOffset;
    } else {
      // Otherwise if multiline and the grid is full, just use the full screen
      return 0;
    }
  } else {
    // Otherwise add a normal section padding on the left
    var _cardsLeftOffset = COLLECTIVE_CARD_MARGIN_X / 2;

    return (width - Math.max(maxWidthWhenNotFull, rowWidth)) / 2 - _cardsLeftOffset;
  }
};
/**
 * A grid to show contributors, with horizontal scroll to search them.
 */


var ContributorsGrid = function ContributorsGrid(_ref3) {
  var contributors = _ref3.contributors,
      width = _ref3.width,
      maxNbRowsForViewports = _ref3.maxNbRowsForViewports,
      viewport = _ref3.viewport,
      maxWidthWhenNotFull = _ref3.maxWidthWhenNotFull,
      currency = _ref3.currency,
      LoggedInUser = _ref3.LoggedInUser,
      collectiveId = _ref3.collectiveId;
  var maxNbRows = maxNbRowsForViewports[viewport];

  var _getItemsRepartition = getItemsRepartition(contributors.length, width, maxNbRows),
      _getItemsRepartition2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_getItemsRepartition, 2),
      nbCols = _getItemsRepartition2[0],
      nbRows = _getItemsRepartition2[1]; // Preload more items when viewport width is unknown to avoid displaying blank spaces on SSR


  var viewWidth = viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_6__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN ? width * 3 : width;
  var rowWidth = nbCols * COLLECTIVE_CARD_FULL_WIDTH + COLLECTIVE_CARD_MARGIN_X;
  var paddingLeft = computePaddingLeft(width, rowWidth, nbRows, maxWidthWhenNotFull);
  var hasScroll = rowWidth + paddingLeft > width;
  var loggedUserCollectiveId = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(LoggedInUser, 'CollectiveId');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_12__/* .FixedSizeGrid */ .Ym, {
    columnCount: nbCols,
    columnWidth: COLLECTIVE_CARD_FULL_WIDTH,
    height: (COLLECTIVE_CARD_HEIGHT + COLLECTIVE_CARD_MARGIN_Y) * nbRows + COLLECTIVE_CARD_MARGIN_Y,
    rowCount: nbRows,
    rowHeight: COLLECTIVE_CARD_HEIGHT + COLLECTIVE_CARD_MARGIN_Y,
    width: viewWidth,
    outerElementType: getGridContainer(paddingLeft, hasScroll),
    innerElementType: GridInnerContainer,
    itemKey: function itemKey(_ref4) {
      var columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex;
      var idx = getContributorIdx(columnIndex, rowIndex, nbRows, nbCols, hasScroll);
      return idx < contributors.length ? contributors[idx].id : "empty-".concat(idx);
    },
    children: function children(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex,
          style = _ref5.style;
      var idx = getContributorIdx(columnIndex, rowIndex, nbRows, nbCols, hasScroll);
      var contributor = contributors[idx];
      return !contributor ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ContributorCardContainer, {
        style: {
          left: style.left + COLLECTIVE_CARD_MARGIN_X,
          top: style.top + COLLECTIVE_CARD_MARGIN_Y
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ContributorCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          "data-cy": "ContributorsGrid_ContributorCard",
          width: COLLECTIVE_CARD_WIDTH,
          height: COLLECTIVE_CARD_HEIGHT,
          contributor: contributor,
          currency: currency,
          collectiveId: collectiveId,
          isLoggedUser: contributor.collectiveId && loggedUserCollectiveId === contributor.collectiveId
        })
      }, contributor.id);
    }
  });
};

ContributorsGrid.defaultProps = {
  limit: 30,
  defaultNbRows: 1,
  maxNbRowsForViewports: (_maxNbRowsForViewport = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_maxNbRowsForViewport, _lib_withViewport__WEBPACK_IMPORTED_MODULE_6__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN, 1), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_maxNbRowsForViewport, _lib_withViewport__WEBPACK_IMPORTED_MODULE_6__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL, 1), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_maxNbRowsForViewport, _lib_withViewport__WEBPACK_IMPORTED_MODULE_6__/* .VIEWPORTS.SMALL */ .Pm.SMALL, 2), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_maxNbRowsForViewport, _lib_withViewport__WEBPACK_IMPORTED_MODULE_6__/* .VIEWPORTS.MEDIUM */ .Pm.MEDIUM, 3), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_maxNbRowsForViewport, _lib_withViewport__WEBPACK_IMPORTED_MODULE_6__/* .VIEWPORTS.LARGE */ .Pm.LARGE, 3), _maxNbRowsForViewport)
};
ContributorsGrid.__docgenInfo = {
  "description": "A grid to show contributors, with horizontal scroll to search them.",
  "methods": [],
  "displayName": "ContributorsGrid",
  "props": {
    "limit": {
      "defaultValue": {
        "value": "30",
        "computed": false
      },
      "required": false
    },
    "defaultNbRows": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "required": false
    },
    "maxNbRowsForViewports": {
      "defaultValue": {
        "value": "{\n  [VIEWPORTS.UNKNOWN]: 1,\n  [VIEWPORTS.XSMALL]: 1,\n  [VIEWPORTS.SMALL]: 2,\n  [VIEWPORTS.MEDIUM]: 3,\n  [VIEWPORTS.LARGE]: 3,\n}",
        "computed": false
      },
      "description": "Maximum number of rows for different viewports. Will fallback on `defaultNbRows` if not provided",
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": false
    },
    "contributors": {
      "description": "The contributors",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": true
            },
            "collectiveId": {
              "name": "number",
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "currency": {
      "description": "Currency used for contributions",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "viewport": {
      "description": "@ignore from withViewport",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(VIEWPORTS)"
      },
      "required": false
    },
    "width": {
      "description": "@ignore from withViewport",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "maxWidthWhenNotFull": {
      "description": "To center the content when the grid is not full",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "shape",
        "value": {
          "CollectiveId": {
            "name": "number",
            "required": false
          }
        }
      },
      "required": false
    },
    "collectiveId": {
      "description": "Collective id",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,_lib_withViewport__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)((0,_UserProvider__WEBPACK_IMPORTED_MODULE_9__/* .withUser */ .ns)(ContributorsGrid), {
  withWidth: true
}));

/***/ }),

/***/ 54746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(32493);
/* harmony import */ var _styled_icons_fa_solid_PencilAlt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(44783);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(74806);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(52015);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86702);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87268);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29925);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93150);
/* harmony import */ var _WarnIfUnsavedChanges__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(84906);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85893);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













/** Container used to show the description to users than can edit it */



var EditIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP)(_styled_icons_fa_solid_PencilAlt__WEBPACK_IMPORTED_MODULE_19__/* .PencilAlt */ .f).withConfig({
  displayName: "InlineEditField__EditIcon",
  componentId: "sc-1uragm9-0"
})(["cursor:pointer;background-color:white;border:1px solid #aaaeb3;border-radius:25%;padding:15%;color:#aaaeb3;&:hover{color:#8697ad;}"]);
/** Component used for cancel / submit buttons */

var FormButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP)(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z).withConfig({
  displayName: "InlineEditField__FormButton",
  componentId: "sc-1uragm9-1"
})(["width:35%;font-weight:normal;text-transform:capitalize;margin:4px 8px;animation:", " 0.3s;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_14__/* .fadeIn */ .Ji);
var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_20__.defineMessages)({
  warnDiscardChanges: {
    id: "warning.discardUnsavedChanges",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to discard your unsaved changes?"
    }]
  }
});
/**
 * A field that can be edited inline. Relies directly on GraphQL to handle errors and
 * loading states properly. By default this component will use `TextAreaAutosize`
 * but you can override this behaviour by passing a custom `children` prop.
 */

var InlineEditField = /*#__PURE__*/function (_Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(InlineEditField, _Component);

  var _super = _createSuper(InlineEditField);

  function InlineEditField() {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, InlineEditField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      isEditing: false,
      draft: '',
      uploading: false
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "enableEditor", function () {
      _this.setState({
        isEditing: true,
        draft: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(_this.props.values, _this.props.field)
      });
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "disableEditor", function (noWarning) {
      var _this$props = _this.props,
          warnIfUnsavedChanges = _this$props.warnIfUnsavedChanges,
          intl = _this$props.intl,
          values = _this$props.values,
          field = _this$props.field;

      if (!noWarning && warnIfUnsavedChanges) {
        var isDirty = lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(values, field) !== _this.state.draft;

        if (isDirty && !confirm(intl.formatMessage(messages.warnDiscardChanges))) {
          return;
        }
      }

      _this.setState({
        isEditing: false
      });

      if (_this.props.disableEditor) {
        _this.props.disableEditor();
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setDraft", function (draft) {
      _this.setState({
        draft: draft
      });
    });

    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(InlineEditField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.isEditing !== this.props.isEditing) {
        if (this.props.isEditing) {
          this.setState({
            isEditing: true,
            draft: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(this.props.values, this.props.field)
          });
        } else {
          this.setState({
            isEditing: false
          });
        }
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent(field, canEdit, value, placeholder, children) {
      if (children) {
        return children({
          value: value,
          isEditing: false,
          enableEditor: this.enableEditor,
          disableEditor: this.disableEditor,
          setValue: this.setDraft
        });
      } else if (!value) {
        return canEdit && placeholder ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          buttonSize: "large",
          onClick: this.enableEditor,
          "data-cy": "InlineEditField-Add-".concat(field),
          children: placeholder
        }) : null;
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
          children: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          field = _this$props2.field,
          values = _this$props2.values,
          mutation = _this$props2.mutation,
          canEdit = _this$props2.canEdit,
          prepareVariables = _this$props2.prepareVariables,
          showEditIcon = _this$props2.showEditIcon,
          placeholder = _this$props2.placeholder,
          _children = _this$props2.children,
          topEdit = _this$props2.topEdit,
          mutationOptions = _this$props2.mutationOptions,
          warnIfUnsavedChanges = _this$props2.warnIfUnsavedChanges;
      var _this$state = this.state,
          draft = _this$state.draft,
          isEditing = _this$state.isEditing;
      var buttonsMinWidth = this.props.buttonsMinWidth;

      var value = lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(values, field);

      var touched = draft !== value;
      var isValid = !this.props.required ? touched : touched && Boolean(draft);

      if (!isEditing) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          position: "relative",
          children: [canEdit && showEditIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            position: "absolute",
            top: topEdit,
            right: -5,
            zIndex: 2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(EditIcon, {
              size: 24,
              onClick: this.enableEditor,
              "data-cy": "InlineEditField-Trigger-".concat(field)
            })
          }), this.renderContent(field, canEdit, value, placeholder, _children)]
        });
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_WarnIfUnsavedChanges__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          hasUnsavedChanges: warnIfUnsavedChanges && isValid,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_21__/* .Mutation */ .m, _objectSpread(_objectSpread({
            mutation: mutation
          }, mutationOptions), {}, {
            children: function children(updateField, _ref) {
              var loading = _ref.loading,
                  error = _ref.error;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [_children ? _children({
                  isEditing: true,
                  value: draft,
                  maxLength: _this2.props.maxLength,
                  setValue: _this2.setDraft,
                  enableEditor: _this2.enableEditor,
                  disableEditor: _this2.disableEditor,
                  setUploading: function setUploading(uploading) {
                    return _this2.setState({
                      uploading: uploading
                    });
                  }
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_StyledTextarea__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                  autoSize: true,
                  autoFocus: true,
                  width: 1,
                  value: draft || '',
                  onChange: function onChange(e) {
                    return _this2.setDraft(e.target.value);
                  },
                  px: 0,
                  py: 0,
                  border: "0",
                  letterSpacing: "inherit",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  maxLength: _this2.props.maxLength,
                  "data-cy": "InlineEditField-Textarea-".concat(field),
                  withOutline: true
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
                  width: 1,
                  children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    type: "error",
                    my: 2,
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "normal",
                    withIcon: true,
                    children: error.message
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    mt: 3,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(FormButton, {
                      "data-cy": "InlineEditField-Btn-Cancel",
                      disabled: loading,
                      minWidth: buttonsMinWidth,
                      onClick: _this2.disableEditor,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        id: "form.cancel",
                        defaultMessage: [{
                          "type": 0,
                          "value": "cancel"
                        }]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(FormButton, {
                      buttonStyle: "primary",
                      loading: loading,
                      disabled: !isValid || _this2.state.uploading,
                      "data-cy": "InlineEditField-Btn-Save",
                      minWidth: buttonsMinWidth,
                      onClick: function onClick() {
                        var variables = null;

                        if (prepareVariables) {
                          variables = prepareVariables(values, draft);
                        } else {
                          variables = lodash_pick__WEBPACK_IMPORTED_MODULE_7___default()(values, ['id']);
                          variables[field] = draft;
                        }

                        updateField({
                          variables: variables
                        }).then(function () {
                          return _this2.disableEditor(true);
                        });
                      },
                      children: _this2.state.uploading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        id: "uploadImage.isUploading",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Uploading image..."
                        }]
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        id: "save",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Save"
                        }]
                      })
                    })]
                  })]
                })]
              });
            }
          }))
        });
      }
    }
  }]);

  return InlineEditField;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(InlineEditField, "defaultProps", {
  showEditIcon: true,
  buttonsMinWidth: 225,
  topEdit: -5
});

InlineEditField.__docgenInfo = {
  "description": "A field that can be edited inline. Relies directly on GraphQL to handle errors and\nloading states properly. By default this component will use `TextAreaAutosize`\nbut you can override this behaviour by passing a custom `children` prop.",
  "methods": [{
    "name": "enableEditor",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "disableEditor",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "noWarning",
      "type": null
    }],
    "returns": null
  }, {
    "name": "setDraft",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "draft",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderContent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "field",
      "type": null
    }, {
      "name": "canEdit",
      "type": null
    }, {
      "name": "value",
      "type": null
    }, {
      "name": "placeholder",
      "type": null
    }, {
      "name": "children",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "InlineEditField",
  "props": {
    "showEditIcon": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Set to false to disable edit icon even if user is allowed to edit",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "buttonsMinWidth": {
      "defaultValue": {
        "value": "225",
        "computed": false
      },
      "description": "To set the min width of Cancel/Save buttons",
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
    "topEdit": {
      "defaultValue": {
        "value": "-5",
        "computed": false
      },
      "description": "Editing the top value.",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "field": {
      "description": "Field name",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "values": {
      "description": "Object that holds the values",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "mutation": {
      "description": "The GraphQL mutation used to update this value",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "mutationOptions": {
      "description": "Passed to Apollo",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "canEdit": {
      "description": "Can user edit the description",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isEditing": {
      "description": "Use this to control the component state",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "warnIfUnsavedChanges": {
      "description": "Add a confirm if trying to leave the form with unsaved changes",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "required": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "maxLength": {
      "description": "Max field length",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "prepareVariables": {
      "description": "Gets passed the item, the new value and must return the mutation variables",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "disableEditor": {
      "description": "For cases when component is controlled",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "children": {
      "description": "If given, this function will be used to render the field",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "placeholder": {
      "description": "A text that will be rendered if user can edit and there's no value available.\nHighly recommended if field is nullable.",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "intl": {
      "description": "@ignore from injectIntl",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP)(InlineEditField));

/***/ }),

/***/ 44791:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ tierPageQuery; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32651);
/* harmony import */ var _collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5824);


var _templateObject;



var tierPageQuery = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query TierPage($tierId: Int!) {\n    Tier(id: $tierId) {\n      id\n      name\n      slug\n      description\n      longDescription\n      videoUrl\n      goal\n      currency\n      interval\n      endsAt\n      button\n\n      stats {\n        id\n        totalDonated\n        totalRecurringDonations\n        contributors {\n          id\n          all\n          collectives\n          organizations\n          users\n        }\n      }\n\n      collective {\n        id\n        slug\n        type\n        name\n        backgroundImage\n        backgroundImageUrl\n        imageUrl\n        isHost\n        settings\n        currency\n        isArchived\n        path\n        host {\n          id\n        }\n        stats {\n          id\n          updates\n          balance\n          transactions {\n            id\n            all\n          }\n        }\n        features {\n          id\n          ...NavbarFields\n        }\n        admins: members(role: \"ADMIN\") {\n          id\n          role\n          collective: member {\n            id\n            type\n            slug\n            name\n            image\n          }\n        }\n        parentCollective {\n          id\n          slug\n          twitterHandle\n          image\n          backgroundImageUrl\n          imageUrl\n        }\n      }\n\n      contributors {\n        id\n        name\n        roles\n        isAdmin\n        isCore\n        isBacker\n        since\n        description\n        publicMessage\n        collectiveSlug\n        totalAmountDonated\n        type\n        isIncognito\n        collectiveId\n      }\n    }\n  }\n  ", "\n"])), _collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_2__/* .collectiveNavbarFieldsFragment */ .AS);

/***/ })

}]);
//# sourceMappingURL=2027-8742ff1c481397c5.js.map