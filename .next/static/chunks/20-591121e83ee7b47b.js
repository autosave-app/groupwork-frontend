"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[20],{

/***/ 3798:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 42388:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44012);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);



/**
 * `Contributor` type is meant to surface all types of contributors, even the one that
 * may not be registered yet on Open Collective -- for example, Github contributors.
 * The component will automatically fallback on displaying a `span` if the contributor
 * cannot be linked to on Open Collective.
 *
 * In the future it may also link to external profiles like Github.
 */



var LinkContributor = function LinkContributor(_ref) {
  var contributor = _ref.contributor,
      children = _ref.children;

  if (contributor.isGuest) {
    return children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      id: "profile.guest",
      defaultMessage: [{
        "type": 0,
        "value": "Guest"
      }]
    });
  } else if (contributor.isIncognito) {
    return children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      id: "profile.incognito",
      defaultMessage: [{
        "type": 0,
        "value": "Incognito"
      }]
    });
  } else if (contributor.collectiveSlug) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      href: "/".concat(contributor.collectiveSlug),
      children: children || contributor.name
    });
  } else {
    return children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: contributor.name
    });
  }
};

LinkContributor.__docgenInfo = {
  "description": "`Contributor` type is meant to surface all types of contributors, even the one that\nmay not be registered yet on Open Collective -- for example, Github contributors.\nThe component will automatically fallback on displaying a `span` if the contributor\ncannot be linked to on Open Collective.\n\nIn the future it may also link to external profiles like Github.",
  "methods": [],
  "displayName": "LinkContributor",
  "props": {
    "contributor": {
      "description": "The contributor to link to",
      "type": {
        "name": "shape",
        "value": {
          "collectiveSlug": {
            "name": "string",
            "required": false
          },
          "name": {
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
          }
        }
      },
      "required": true
    },
    "children": {
      "description": "By default we show the name in the link. Use this prop to override this",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (LinkContributor);

/***/ }),

/***/ 87819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Location; }
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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(48966);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Map.js






var tile2Long = function tile2Long(tile, zoom) {
  // see https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#ECMAScript_.28JavaScript.2FActionScript.2C_etc..29
  return tile / Math.pow(2, zoom) * 360 - 180;
};

var tile2Lat = function tile2Lat(tile, zoom) {
  var n = Math.PI - 2 * Math.PI * tile / Math.pow(2, zoom);
  return 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
};

var long2tile = function long2tile(_long, zoom) {
  return Math.floor((_long + 180) / 360 * Math.pow(2, zoom));
};

var lat2tile = function lat2tile(lat, zoom) {
  return Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
};

var makeBbox = function makeBbox(_ref) {
  var x = _ref.x,
      y = _ref.y,
      zoom = _ref.zoom;
  // https://wiki.openstreetmap.org/wiki/Slippy_Map
  var south = tile2Lat(y + 1, zoom);
  var north = tile2Lat(y, zoom);
  var west = tile2Long(x, zoom);
  var east = tile2Long(x + 1, zoom);
  return "".concat(west, "%2C").concat(south, "%2C").concat(east, "%2C").concat(north);
};

var Map = function Map(_ref2) {
  var lat = _ref2.lat,
      _long2 = _ref2["long"];

  var _useState = (0,react.useState)(null),
      src = _useState[0],
      prepareMap = _useState[1];

  (0,react.useEffect)(function () {
    var zoom = 16;
    var x = long2tile(_long2, zoom);
    var y = lat2tile(lat, zoom);
    var bbox = makeBbox({
      x: x,
      y: y,
      zoom: zoom
    }); // Set iframe url after component has mounted to prevent https://github.com/opencollective/opencollective/issues/2845

    var src = "https://www.openstreetmap.org/export/embed.html?bbox=".concat(bbox, "&marker=").concat(lat, "%2C").concat(_long2, "&layers=ND");
    prepareMap(src);
  }, [lat, _long2]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
      title: "Open Street Map",
      width: "100%",
      height: "100%",
      frameBorder: "0",
      scrolling: "no",
      src: src
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
      openInNewTab: true,
      href: "https://www.openstreetmap.org/?mlat=".concat(lat, "&amp;mlon=").concat(_long2, "#map=16/").concat(lat, "/").concat(_long2),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "map.viewLarger",
        defaultMessage: [{
          "type": 0,
          "value": "View Larger Map"
        }]
      })
    })]
  });
};

Map.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Map",
  "props": {
    "lat": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "long": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "address": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_Map = (Map);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./components/Location.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }












var LocationSection = styled_components_browser_esm/* default.section.withConfig */.ZP.section.withConfig({
  displayName: "Location__LocationSection",
  componentId: "sc-f2g6cd-0"
})(["text-align:center;"]);

var Location = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Location, _React$Component);

  var _super = _createSuper(Location);

  function Location() {
    classCallCheck_default()(this, Location);

    return _super.apply(this, arguments);
  }

  createClass_default()(Location, [{
    key: "render",
    value: function render() {
      if (!this.props.location) {
        return null;
      }

      var _this$props$location = this.props.location,
          name = _this$props$location.name,
          address = _this$props$location.address,
          lat = _this$props$location.lat,
          _long = _this$props$location["long"],
          country = _this$props$location.country;

      if (name === 'Online') {
        if (address && (0,validator.isURL)(address)) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            flexDirection: "Column",
            alignItems: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              textAlign: "center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                openInNewTabNoFollow: true,
                href: address,
                children: address
              })
            })
          });
        } else {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            textAlign: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Location.online",
              defaultMessage: [{
                "type": 0,
                "value": "Online"
              }]
            })
          });
        }
      } else if (!name && !address && !lat && !_long && !country) {
        return null;
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(LocationSection, {
        id: "location",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          margin: "30px 10px",
          children: [this.props.showTitle && /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
            children: "Location"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            "font-size": "1.7rem",
            margin: "5px 0px",
            children: name
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            className: "address",
            color: "black.600",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledLink/* default */.Z, {
              href: "https://www.openstreetmap.org/?mlat=".concat(lat, "&amp;mlon=").concat(_long, "#map=16/").concat(lat, "/").concat(_long),
              openInNewTab: true,
              children: [address, country ? ", ".concat(country) : '']
            })
          })]
        }), lat && _long && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "map",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Map, {
            lat: lat,
            "long": _long
          })
        })]
      });
    }
  }]);

  return Location;
}(react.Component);

defineProperty_default()(Location, "defaultProps", {
  showTitle: true
});

Location.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Location",
  "props": {
    "showTitle": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "location": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_Location = (Location);

/***/ }),

/***/ 25087:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a_": function() { return /* binding */ NotificationBarLink; },
/* harmony export */   "z2": function() { return /* binding */ NotificationBarButton; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58410);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52015);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92129);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67001);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var NotificationBarLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "NotificationBar__NotificationBarLink",
  componentId: "sc-h69lzm-0"
})(["color:", ";font-weight:700;text-decoration-line:underline;text-decoration-thickness:2px;font-size:1.4rem;line-height:2rem;"], function (props) {
  return props.theme.colors.blue[900];
});
var NotificationBarButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "NotificationBar__NotificationBarButton",
  componentId: "sc-h69lzm-1"
})(["color:", ";font-weight:700;text-decoration-line:underline;text-decoration-thickness:2px;font-size:1.4rem;line-height:2rem;"], function (props) {
  return props.theme.colors.blue[900];
});
var CloseIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_10__/* .Close */ .x).withConfig({
  displayName: "NotificationBar__CloseIcon",
  componentId: "sc-h69lzm-2"
})(["font-size:12px;width:24px;height:24px;padding:4px;background:#fff;color:", ";border-radius:99999px;cursor:pointer;"], function (props) {
  return props.theme.colors.blue[900];
});
var NotificationBarContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
  displayName: "NotificationBar__NotificationBarContainer",
  componentId: "sc-h69lzm-3"
})(["background-color:", ";color:", ";position:relative;"], function (props) {
  return getBackgroundColor(props.type);
}, function (props) {
  return props.theme.colors.blue[900];
});

var getBackgroundColor = function getBackgroundColor(type) {
  switch (type) {
    case 'warning':
      return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.yellow.100');

    case 'error':
      return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.red.100');

    case 'success':
      return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.green.100');

    case 'info':
    default:
      return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.blue.200');
  }
};

var NotificationBar = function NotificationBar(_ref) {
  var title = _ref.title,
      description = _ref.description,
      type = _ref.type,
      actions = _ref.actions,
      inline = _ref.inline,
      dismiss = _ref.dismiss;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(NotificationBarContainer, {
    "data-cy": "notification-bar",
    type: type,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: "12px 25px",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      flex: "1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        maxWidth: inline ? '1200px' : '672px',
        children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.H1, _objectSpread(_objectSpread(_objectSpread({
          fontSize: "1.4rem",
          lineHeight: "2rem",
          mx: "4px",
          textAlign: "center",
          letterSpacing: "0px"
        }, description && {
          mb: '6px'
        }), inline && {
          display: 'inline'
        }), {}, {
          children: title
        })), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.P, _objectSpread(_objectSpread(_objectSpread({
          fontSize: "1.4rem",
          lineHeight: "2rem",
          textAlign: "center",
          letterSpacing: "0px",
          mx: "4px"
        }, inline && {
          display: 'inline'
        }), actions && {
          mb: '6px'
        }), {}, {
          children: description
        })), actions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          display: inline ? 'inline-flex' : 'block',
          mx: "4px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
            justifyContent: "center",
            gridGap: "8px",
            children: Array.isArray(actions) ? actions.map(function (action) {
              return action;
            }) : actions
          })
        })]
      })
    }), dismiss && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      onClick: dismiss,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(CloseIcon, {})
    })]
  });
};

NotificationBar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NotificationBar",
  "props": {
    "title": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "description": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "type": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'info'",
          "computed": false
        }, {
          "value": "'success'",
          "computed": false
        }, {
          "value": "'error'",
          "computed": false
        }, {
          "value": "'warning'",
          "computed": false
        }]
      },
      "required": false
    },
    "inline": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "actions": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "PropTypes.node",
          "computed": true
        }, {
          "value": "PropTypes.arrayOf(PropTypes.node)",
          "computed": true
        }]
      },
      "required": false
    },
    "dismiss": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["ZP"] = (NotificationBar);

/***/ }),

/***/ 60732:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ PERIOD_FILTER_PRESETS; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86896);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15078);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82114);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var getPastDateInterval = function getPastDateInterval(timeUnit) {
  var from = (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().subtract(1, timeUnit).startOf(timeUnit);
  return {
    from: from,
    to: from.endOf(timeUnit)
  };
};
/**
 * Some presets for time filters
 */


var PERIOD_FILTER_PRESETS = {
  allTime: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "s+lPP3",
      defaultMessage: [{
        "type": 0,
        "value": "All time"
      }]
    }),
    getInterval: function getInterval() {
      return {
        from: null,
        to: null
      };
    }
  },
  today: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "zWgbGg",
      defaultMessage: [{
        "type": 0,
        "value": "Today"
      }]
    }),
    getInterval: function getInterval() {
      return {
        from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('day'),
        to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
      };
    }
  },
  thisMonth: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "3PZa76",
      defaultMessage: [{
        "type": 0,
        "value": "This Month"
      }]
    }),
    getInterval: function getInterval() {
      return {
        from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('month'),
        to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
      };
    }
  },
  thisYear: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "OGk6DC",
      defaultMessage: [{
        "type": 0,
        "value": "This Year"
      }]
    }),
    getInterval: function getInterval() {
      return {
        from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('year'),
        to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
      };
    }
  },
  pastWeek: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "li7Ez6",
      defaultMessage: [{
        "type": 0,
        "value": "Past Week"
      }]
    }),
    getInterval: function getInterval() {
      return getPastDateInterval('week');
    }
  },
  pastMonth: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "+n7iNv",
      defaultMessage: [{
        "type": 0,
        "value": "Past Month"
      }]
    }),
    getInterval: function getInterval() {
      return getPastDateInterval('month');
    }
  },
  pastYear: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "B0DOrM",
      defaultMessage: [{
        "type": 0,
        "value": "Past Year"
      }]
    }),
    getInterval: function getInterval() {
      return getPastDateInterval('year');
    }
  }
};
var PERIOD_FILTER_SELECT_STYLES = {
  dropdownIndicator: {
    paddingTop: 0,
    paddingBottom: 0
  },
  option: {
    fontSize: '12px'
  }
};

var getSelectedPeriodOptionFromInterval = function getSelectedPeriodOptionFromInterval(_ref) {
  var from = _ref.from,
      to = _ref.to;

  var isSameDay = function isSameDay(dayjsDate, otherDate) {
    return !dayjsDate && !otherDate || (dayjsDate === null || dayjsDate === void 0 ? void 0 : dayjsDate.isSame(otherDate, 'day'));
  };

  var preset = Object.keys(PERIOD_FILTER_PRESETS).find(function (preset) {
    var presetDetails = PERIOD_FILTER_PRESETS[preset];
    var presetInterval = presetDetails.getInterval();
    return isSameDay(presetInterval.from, from) && isSameDay(presetInterval.to, to);
  });

  if (preset) {
    return {
      label: PERIOD_FILTER_PRESETS[preset].label,
      value: preset
    };
  } else {
    return {
      label: 'Custom',
      value: 'custom'
    };
  }
};

var periodSelectThemeBuilder = function periodSelectThemeBuilder(theme) {
  return _objectSpread(_objectSpread({}, theme), {}, {
    spacing: _objectSpread(_objectSpread({}, theme.spacing), {}, {
      controlHeight: 28
    })
  });
};

var PeriodFilterPresetsSelect = function PeriodFilterPresetsSelect(_ref2) {
  var _onChange = _ref2.onChange,
      interval = _ref2.interval,
      inputId = _ref2.inputId,
      formatDateFn = _ref2.formatDateFn;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  var selectedOption = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    return getSelectedPeriodOptionFromInterval(interval);
  }, [interval]);
  var options = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    return Object.keys(PERIOD_FILTER_PRESETS).map(function (presetKey) {
      return {
        value: presetKey,
        label: PERIOD_FILTER_PRESETS[presetKey].label
      };
    });
  }, [intl]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__/* .StyledSelectFilter */ .V, {
    inputId: inputId,
    value: selectedOption,
    options: options,
    selectTheme: periodSelectThemeBuilder,
    styles: PERIOD_FILTER_SELECT_STYLES,
    onChange: function onChange(_ref3) {
      var value = _ref3.value;

      if (value === 'custom') {
        return interval;
      } else {
        var newInterval = _objectSpread({}, PERIOD_FILTER_PRESETS[value].getInterval());

        _onChange(_objectSpread(_objectSpread({}, interval), {}, {
          from: formatDateFn(newInterval.from),
          to: formatDateFn(newInterval.to)
        }));
      }
    }
  });
};

PeriodFilterPresetsSelect.defaultProps = {
  formatDateFn: _lib_date_utils__WEBPACK_IMPORTED_MODULE_2__/* .stripTime */ .xR
};
PeriodFilterPresetsSelect.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PeriodFilterPresetsSelect",
  "props": {
    "formatDateFn": {
      "defaultValue": {
        "value": "stripTime",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "inputId": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "interval": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "from": {
            "name": "string",
            "required": false
          },
          "to": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (PeriodFilterPresetsSelect);

/***/ }),

/***/ 75052:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92191);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(16608);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(74806);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17632);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97079);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(85893);











var _templateObject, _templateObject2, _templateObject3;



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }














var SendMoneyToCollectiveBtn = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5___default()(SendMoneyToCollectiveBtn, _React$Component);

  var _super = _createSuper(SendMoneyToCollectiveBtn);

  function SendMoneyToCollectiveBtn(props) {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, SendMoneyToCollectiveBtn);

    _this = _super.call(this, props);
    _this.onClick = _this.onClick.bind(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.state = {};
    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(SendMoneyToCollectiveBtn, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isTransferApproved !== prevProps.isTransferApproved) {
        this.onClick();
      }
    }
  }, {
    key: "onClick",
    value: function () {
      var _onClick = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default().mark(function _callee() {
        var _this$props, currency, amount, fromCollective, toCollective, description, data, LoggedInUser, paymentMethods, order;

        return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, currency = _this$props.currency, amount = _this$props.amount, fromCollective = _this$props.fromCollective, toCollective = _this$props.toCollective, description = _this$props.description, data = _this$props.data, LoggedInUser = _this$props.LoggedInUser;

                if (!(!LoggedInUser || !LoggedInUser.isAdminOfCollectiveOrHost(fromCollective) || !lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(data, 'account'))) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                paymentMethods = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(data, 'account.paymentMethods');

                if (!(!paymentMethods || paymentMethods.length === 0)) {
                  _context.next = 7;
                  break;
                }

                this.props.addToast({
                  type: _ToastProvider__WEBPACK_IMPORTED_MODULE_17__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                  message: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    id: "+H8kCF",
                    defaultMessage: [{
                      "type": 0,
                      "value": "We couldn't find a payment method to make this transaction"
                    }]
                  })
                });
                return _context.abrupt("return");

              case 7:
                this.setState({
                  loading: true
                });
                order = {
                  amount: {
                    valueInCents: amount,
                    currency: currency
                  },
                  toAccount: lodash_pick__WEBPACK_IMPORTED_MODULE_8___default()(toCollective, ['slug']),
                  fromAccount: lodash_pick__WEBPACK_IMPORTED_MODULE_8___default()(fromCollective, ['slug']),
                  description: description,
                  paymentMethod: {
                    id: paymentMethods[0].id
                  },
                  frequency: 'ONETIME',
                  isBalanceTransfer: true
                };
                _context.prev = 9;
                _context.next = 12;
                return this.props.sendMoneyToCollective({
                  variables: {
                    order: order
                  },
                  // We need to update the store manually because the response comes from API V2
                  update: function update(store, _ref) {
                    var createOrder = _ref.data.createOrder;
                    var balance = createOrder.order.fromAccount.stats.balance.valueInCents;
                    store.writeFragment({
                      fragment: collectiveBalanceFragment,
                      id: "CollectiveStatsType:".concat(fromCollective.id),
                      data: {
                        id: fromCollective.id,
                        balance: balance
                      }
                    });
                  }
                });

              case 12:
                this.props.addToast({
                  type: _ToastProvider__WEBPACK_IMPORTED_MODULE_17__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
                  message: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    id: "TSybob",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Balance sent to "
                    }, {
                      "type": 1,
                      "value": "toCollectiveName"
                    }],
                    values: {
                      toCollectiveName: toCollective.name
                    }
                  })
                });
                this.setState({
                  loading: false
                });
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](9);
                this.setState({
                  loading: false
                });
                this.props.addToast({
                  type: _ToastProvider__WEBPACK_IMPORTED_MODULE_17__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                  message: _context.t0.message
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[9, 16]]);
      }));

      function onClick() {
        return _onClick.apply(this, arguments);
      }

      return onClick;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          amount = _this$props2.amount,
          currency = _this$props2.currency,
          toCollective = _this$props2.toCollective,
          intl = _this$props2.intl,
          customButton = _this$props2.customButton;
      var locale = intl.locale;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: "SendMoneyToCollectiveBtn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
          justifyContent: "center",
          mb: 1,
          children: customButton ? customButton({
            onClick: this.props.confirmTransfer || this.onClick,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
              children: [this.state.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                id: "form.processing",
                defaultMessage: [{
                  "type": 0,
                  "value": "processing"
                }]
              }), !this.state.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                id: "SendMoneyToCollective.btn",
                defaultMessage: [{
                  "type": 0,
                  "value": "Send "
                }, {
                  "type": 1,
                  "value": "amount"
                }, {
                  "type": 0,
                  "value": " to "
                }, {
                  "type": 1,
                  "value": "collective"
                }],
                values: {
                  amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_12__/* .formatCurrency */ .xG)(amount, currency, locale),
                  collective: toCollective.name
                }
              })]
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            onClick: this.props.confirmTransfer || this.onClick,
            children: [this.state.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              id: "form.processing",
              defaultMessage: [{
                "type": 0,
                "value": "processing"
              }]
            }), !this.state.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              id: "SendMoneyToCollective.btn",
              defaultMessage: [{
                "type": 0,
                "value": "Send "
              }, {
                "type": 1,
                "value": "amount"
              }, {
                "type": 0,
                "value": " to "
              }, {
                "type": 1,
                "value": "collective"
              }],
              values: {
                amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_12__/* .formatCurrency */ .xG)(amount, currency, locale),
                collective: toCollective.name
              }
            })]
          })
        })
      });
    }
  }]);

  return SendMoneyToCollectiveBtn;
}(react__WEBPACK_IMPORTED_MODULE_11__.Component);

var paymentMethodsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query SendMoneyToCollectivePaymentMethods($slug: String) {\n    account(slug: $slug) {\n      id\n      paymentMethods(service: OPENCOLLECTIVE, type: COLLECTIVE) {\n        id\n        service\n        name\n      }\n    }\n  }\n"])));
var addPaymentMethodsData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_21__/* .graphql */ .B)(paymentMethodsQuery, {
  options: function options(props) {
    return {
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T,
      variables: {
        slug: lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(props, 'fromCollective.slug')
      }
    };
  },
  skip: function skip(props) {
    return !props.LoggedInUser;
  }
});
var collectiveBalanceFragment = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment StatFieldsFragment on CollectiveStatsType {\n    id\n    balance\n  }\n"])));
var sendMoneyToCollectiveMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP)(_templateObject3 || (_templateObject3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation SendMoneyToCollective($order: OrderCreateInput!) {\n    createOrder(order: $order) {\n      order {\n        id\n        fromAccount {\n          id\n          stats {\n            id\n            balance {\n              valueInCents\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var addSendMoneyToCollectiveMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_21__/* .graphql */ .B)(sendMoneyToCollectiveMutation, {
  name: 'sendMoneyToCollective',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
  }
});
var addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_14__/* .compose */ .qC)(addPaymentMethodsData, addSendMoneyToCollectiveMutation);
SendMoneyToCollectiveBtn.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onClick",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }],
  "displayName": "SendMoneyToCollectiveBtn",
  "props": {
    "amount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "description": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "fromCollective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "toCollective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "LoggedInUser": {
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
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "sendMoneyToCollective": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "confirmTransfer": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isTransferApproved": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "customButton": {
      "description": "",
      "type": {
        "name": "custom",
        "raw": "PropTypes.function"
      },
      "required": false
    },
    "addToast": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (addGraphql((0,_ToastProvider__WEBPACK_IMPORTED_MODULE_17__/* .withToasts */ .CP)((0,react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP)(SendMoneyToCollectiveBtn))));

/***/ }),

/***/ 6121:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74691);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16678);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);





var BackgroundBar = styled_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "StyledProgressBar__BackgroundBar",
  componentId: "sc-cpgzll-0"
})(["position:relative;", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_2__/* .layout */ .bK, styled_system__WEBPACK_IMPORTED_MODULE_2__/* .color */ .$_, styled_system__WEBPACK_IMPORTED_MODULE_2__/* .border */ .Cg);
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "StyledProgressBar__ProgressBar",
  componentId: "sc-cpgzll-1"
})(["position:absolute;", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_2__/* .layout */ .bK, styled_system__WEBPACK_IMPORTED_MODULE_2__/* .color */ .$_, styled_system__WEBPACK_IMPORTED_MODULE_2__/* .border */ .Cg);
/**
 * A progress bar that displays the current advancement.
 */

var StyledProgressBar = function StyledProgressBar(_ref) {
  var percentage = _ref.percentage,
      color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      height = _ref.height,
      borderRadius = _ref.borderRadius;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BackgroundBar, {
    bg: backgroundColor,
    height: height,
    borderRadius: borderRadius,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ProgressBar, {
      width: "".concat(lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default()(percentage, 0, 1) * 100, "%"),
      bg: color,
      height: height,
      borderRadius: borderRadius
    })
  });
};

StyledProgressBar.defaultProps = {
  height: 4,
  backgroundColor: 'rgba(9, 10, 10, 0.04)',
  color: 'green.500',
  borderRadius: 16
};
StyledProgressBar.__docgenInfo = {
  "description": "A progress bar that displays the current advancement.",
  "methods": [],
  "displayName": "StyledProgressBar",
  "props": {
    "height": {
      "defaultValue": {
        "value": "4",
        "computed": false
      },
      "description": "Height",
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
    "backgroundColor": {
      "defaultValue": {
        "value": "'rgba(9, 10, 10, 0.04)'",
        "computed": false
      },
      "description": "Color of the unfilled bar",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "color": {
      "defaultValue": {
        "value": "'green.500'",
        "computed": false
      },
      "description": "Color of the filled bar",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "borderRadius": {
      "defaultValue": {
        "value": "16",
        "computed": false
      },
      "description": "Border-radius",
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
    "percentage": {
      "description": "Current progress, between 0 and 1",
      "type": {
        "name": "number"
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledProgressBar);

/***/ }),

/***/ 38255:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16678);
/* harmony import */ var _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72004);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24839);





/** An horizontally scrollable container to display contribute cards cards */

var ContributeCardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "ContributeCardsContainer",
  componentId: "sc-r47cn4-0"
})(["", " padding:16px 0;overflow-x:auto;position:relative;", " ", " ", " &:not(:hover){&::-webkit-scrollbar-thumb{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}}@supports (width:fit-content){@media (min-width:", "px){margin:0 auto;min-width:", "px;width:fit-content;max-width:100%;}}@supports not (width:fit-content){@media (min-width:", "px){padding-left:calc((100% - ", "px) / 2);}}"], styled_system__WEBPACK_IMPORTED_MODULE_0__/* .display */ .jf, function (props) {
  return props.disableScroll && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* .css */ .iv)(["overflow-x:hidden;"]);
}, function (props) {
  return !props.disableScrollSnapping && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* .css */ .iv)(["scroll-behavior:smooth;@media (hover:none){scroll-snap-type:x mandatory;}"]);
}, _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_1__/* .CustomScrollbarCSS */ .T, _constants__WEBPACK_IMPORTED_MODULE_2__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH + 10);
ContributeCardsContainer.defaultProps = {
  display: 'flex'
};
ContributeCardsContainer.propTypes = {
  disableScrollSnapping: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};
/** @component */

/* harmony default export */ __webpack_exports__["Z"] = (ContributeCardsContainer);

/***/ }),

/***/ 8914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J7": function() { return /* binding */ editCollectiveBackgroundMutation; },
/* harmony export */   "U0": function() { return /* binding */ editCollectiveSettingsMutation; },
/* harmony export */   "fN": function() { return /* binding */ editCollectiveLongDescriptionMutation; },
/* harmony export */   "jt": function() { return /* binding */ editAccountSettingMutation; },
/* harmony export */   "zk": function() { return /* binding */ editCollectiveAvatarMutation; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15020);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32651);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;



var editCollectiveSettingsMutation = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation EditCollectiveSettings($id: Int!, $settings: JSON) {\n    editCollective(collective: { id: $id, settings: $settings }) {\n      id\n      settings\n    }\n  }\n"])));
var editAccountSettingMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation EditAccountSetting($collectiveId: Int!, $key: AccountSettingsKey!, $value: JSON!) {\n    editAccountSetting(account: { legacyId: $collectiveId }, key: $key, value: $value) {\n      id\n      settings\n    }\n  }\n"])));
/** A mutation used by child components to update the collective */

var editCollectiveLongDescriptionMutation = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject3 || (_templateObject3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation EditCollectiveLongDescription($id: Int!, $longDescription: String) {\n    editCollective(collective: { id: $id, longDescription: $longDescription }) {\n      id\n      longDescription\n    }\n  }\n"])));
var editCollectiveAvatarMutation = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject4 || (_templateObject4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation EditCollectiveAvatar($id: Int!, $image: String) {\n    editCollective(collective: { id: $id, image: $image }) {\n      id\n      image\n      imageUrl(height: 256)\n    }\n  }\n"])));
var editCollectiveBackgroundMutation = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject5 || (_templateObject5 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation EditCollectiveBackground($id: Int!, $settings: JSON, $backgroundImage: String) {\n    editCollective(collective: { id: $id, settings: $settings, backgroundImage: $backgroundImage }) {\n      id\n      settings\n      backgroundImage\n      backgroundImageUrl\n    }\n  }\n"])));

/***/ }),

/***/ 56127:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(74806);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52015);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(450);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(173);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19146);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85893);


var _excluded = ["intl", "title", "type", "route", "buttonText", "children", "contributors", "stats", "hideContributors", "image", "disableCTA", "hideCTA", "onClickEdit", "tier", "isPreview"];

var _defineMessages;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }














/** The main container */



var StyledContributeCard = styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "Contribute__StyledContributeCard",
  componentId: "sc-wvawme-0"
})(["display:flex;flex-direction:column;width:", "px;flex:0 0 ", "px;height:100%;border-radius:", "px;border:1px solid #dcdee0;background:white;transition:border-color 0.2s,box-shadow 0.2s,opacity 0.2s;&:hover{border:1px solid ", ";box-shadow:0px 8px 12px rgba(20,20,20,0.16);}"], _constants__WEBPACK_IMPORTED_MODULE_14__/* .CONTRIBUTE_CARD_WIDTH */ .TJ, _constants__WEBPACK_IMPORTED_MODULE_14__/* .CONTRIBUTE_CARD_WIDTH */ .TJ, _constants__WEBPACK_IMPORTED_MODULE_14__/* .CONTRIBUTE_CARD_BORDER_RADIUS */ .zx, function (props) {
  return props.theme.colors.primary[600];
});
/** Tier card banner */

var CoverImage = styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "Contribute__CoverImage",
  componentId: "sc-wvawme-1"
})(["height:104px;background-repeat:no-repeat;background-size:cover;padding:16px;position:relative;border-radius:16px 16px 0 0;", ";"], function (props) {
  var primary = props.theme.colors.primary;
  var radial = "radial-gradient(circle, ".concat(primary[300], " 0%, ").concat(primary[800], " 100%), ");
  var image = props.image ? "url(".concat(props.image, "), ") : '';

  var applyGrayscale = function applyGrayscale(isDisabled, contributionType) {
    if (isDisabled) {
      return 'filter: grayscale(0.75);';
    } else if (contributionType === _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED) {
      return 'filter: grayscale(0.50);';
    }
  };

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_13__/* .css */ .iv)(["background:", " ", " ", ";", ""], image, radial, primary[500], applyGrayscale(props.isDisabled, props.contributionType));
});
/** Tier's description */

var Description = styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "Contribute__Description",
  componentId: "sc-wvawme-2"
})(["overflow-wrap:break-word;margin:8px 0;font-size:14px;letter-spacing:-0.2px;line-height:20px;height:100%;flex:1 1;color:#4e5052;"]);
/** Translations */

var I18nContributionType = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_CUSTOM */ .S.FINANCIAL_CUSTOM, {
  id: "ContributionType.Custom",
  defaultMessage: [{
    "type": 0,
    "value": "Custom contribution"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_CRYPTO */ .S.FINANCIAL_CRYPTO, {
  id: "ContributionType.Crypto",
  defaultMessage: [{
    "type": 0,
    "value": "Crypto contribution"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_ONE_TIME */ .S.FINANCIAL_ONE_TIME, {
  id: "ContributionType.OneTime",
  defaultMessage: [{
    "type": 0,
    "value": "One-time contribution"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_RECURRING */ .S.FINANCIAL_RECURRING, {
  id: "ContributionType.Recurring",
  defaultMessage: [{
    "type": 0,
    "value": "Recurring contribution"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_GOAL */ .S.FINANCIAL_GOAL, {
  id: "ContributionType.Goal",
  defaultMessage: [{
    "type": 0,
    "value": "Goal"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE, {
  id: "ContributionType.Event",
  defaultMessage: [{
    "type": 0,
    "value": "Event"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED, {
  id: "ContributionType.EventPassed",
  defaultMessage: [{
    "type": 0,
    "value": "Past event"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TIER_PASSED */ .S.TIER_PASSED, {
  id: "ContributionType.TierPassed",
  defaultMessage: [{
    "type": 0,
    "value": "Past tier"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PRODUCT */ .S.PRODUCT, {
  id: "ContributionType.Product",
  defaultMessage: [{
    "type": 0,
    "value": "Product"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET, {
  id: "ContributionType.Ticket",
  defaultMessage: [{
    "type": 0,
    "value": "Ticket"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.MEMBERSHIP */ .S.MEMBERSHIP, {
  id: "ContributionType.Membership",
  defaultMessage: [{
    "type": 0,
    "value": "Membership"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.CHILD_COLLECTIVE */ .S.CHILD_COLLECTIVE, {
  id: "ContributionType.ChildCollective",
  defaultMessage: [{
    "type": 0,
    "value": "Connected Collective"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PROJECT */ .S.PROJECT, {
  id: "ContributionType.Project",
  defaultMessage: [{
    "type": 0,
    "value": "Project"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.ARCHIVED_PROJECT */ .S.ARCHIVED_PROJECT, {
  id: "ContributionType.ArchivedProject",
  defaultMessage: [{
    "type": 0,
    "value": "Archived Project"
  }]
}), _defineMessages));

var getContributeCTA = function getContributeCTA(type) {
  switch (type) {
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        id: "ContributeCard.BtnEvent",
        defaultMessage: [{
          "type": 0,
          "value": "RSVP"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE:
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        id: "ContributeCard.BtnViewEvent",
        defaultMessage: [{
          "type": 0,
          "value": "View Event"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.CHILD_COLLECTIVE */ .S.CHILD_COLLECTIVE:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        id: "ContributeCard.SeeCollective",
        defaultMessage: [{
          "type": 0,
          "value": "View Collective"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PROJECT */ .S.PROJECT:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        id: "ContributeCard.SeeMore",
        defaultMessage: [{
          "type": 0,
          "value": "See More"
        }]
      });

    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        id: "Contribute",
        defaultMessage: [{
          "type": 0,
          "value": "Contribute"
        }]
      });
  }
};

var getFooterHeading = function getFooterHeading(type) {
  switch (type) {
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET:
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        id: "ContributeCard.footer.ticket",
        defaultMessage: [{
          "type": 0,
          "value": "Attending"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        id: "ContributeCard.footer.pastEvent",
        defaultMessage: [{
          "type": 0,
          "value": "Attended by"
        }]
      });

    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        id: "ContributeCard.latestActivity",
        defaultMessage: [{
          "type": 0,
          "value": "Latest activity by"
        }]
      });
  }
};

var getCTAButtonStyle = function getCTAButtonStyle(type) {
  if (type === _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET) {
    return 'secondary';
  } else if (type === _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED) {
    return 'standard';
  } else {
    return 'primary';
  }
};
/**
 * A contribute card with a "Contribute" call to action
 */


var ContributeCard = function ContributeCard(_ref) {
  var intl = _ref.intl,
      title = _ref.title,
      type = _ref.type,
      route = _ref.route,
      buttonText = _ref.buttonText,
      children = _ref.children,
      contributors = _ref.contributors,
      stats = _ref.stats,
      hideContributors = _ref.hideContributors,
      image = _ref.image,
      disableCTA = _ref.disableCTA,
      hideCTA = _ref.hideCTA,
      onClickEdit = _ref.onClickEdit,
      tier = _ref.tier,
      isPreview = _ref.isPreview,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _excluded);

  var totalContributors = stats && stats.all || contributors && contributors.length || 0;

  if (isPreview) {
    route = '#';
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(StyledContributeCard, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(CoverImage, {
      image: image,
      isDisabled: disableCTA,
      contributionType: type,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        position: "absolute",
        bottom: "8px",
        left: "16px",
        background: "white",
        color: "black.700",
        fontWeight: "700",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        fontSize: "12px",
        children: intl.formatMessage(I18nContributionType[type])
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      px: 3,
      py: 3,
      flexDirection: "column",
      justifyContent: "space-between",
      flex: "1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        flexDirection: "column",
        flex: "1 1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          fontSize: "20px",
          mt: 1,
          mb: 2,
          fontWeight: "bold",
          "data-cy": "contribute-title",
          color: "black.900",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Description, {
          "data-cy": "contribute-description",
          children: children
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        children: [!disableCTA && !hideCTA && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          href: route,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            buttonStyle: getCTAButtonStyle(type),
            width: 1,
            mb: 2,
            mt: 3,
            "data-cy": "contribute-btn",
            children: buttonText || getContributeCTA(type)
          })
        }), !hideContributors && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mt: 3,
          height: 60,
          children: contributors && contributors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
              alignItems: "center",
              mt: 3,
              mb: 2,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
                color: "black.700",
                fontSize: "12px",
                lineHeight: "16px",
                fontWeight: "500",
                letterSpacing: "0.06em",
                pr: 2,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                children: getFooterHeading(type)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                flex: "1",
                borderStyle: "solid",
                borderColor: "#DCDEE0"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
              children: [contributors.slice(0, _constants__WEBPACK_IMPORTED_MODULE_14__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc).map(function (contributor) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
                  mx: 1,
                  children: contributor.collectiveSlug ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    href: "/".concat(contributor.collectiveSlug),
                    title: contributor.name,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* .ContributorAvatar */ .BD, {
                      contributor: contributor,
                      radius: 32
                    })
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* .ContributorAvatar */ .BD, {
                    contributor: contributor,
                    radius: 32,
                    title: contributor.name
                  })
                }, contributor.id);
              }), totalContributors > _constants__WEBPACK_IMPORTED_MODULE_14__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ml: 2,
                pt: "0.7em",
                fontSize: "11px",
                fontWeight: "bold",
                color: "black.600",
                children: ["+ ", totalContributors - _constants__WEBPACK_IMPORTED_MODULE_14__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc]
              })]
            })]
          })
        }), onClickEdit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            buttonStyle: "secondary",
            width: 1,
            mb: 2,
            mt: 3,
            "data-cy": "edit-btn",
            onClick: onClickEdit,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              id: "/CCt2w",
              defaultMessage: [{
                "type": 0,
                "value": "Edit "
              }, {
                "type": 5,
                "value": "type",
                "options": {
                  "TICKET": {
                    "value": [{
                      "type": 0,
                      "value": "Ticket"
                    }]
                  },
                  "other": {
                    "value": [{
                      "type": 0,
                      "value": "Tier"
                    }]
                  }
                }
              }],
              values: {
                type: tier.type
              }
            })
          })
        })]
      })]
    })]
  }));
};

ContributeCard.__docgenInfo = {
  "description": "A contribute card with a \"Contribute\" call to action",
  "methods": [],
  "displayName": "ContributeCard",
  "props": {
    "title": {
      "description": "Contribution title",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "type": {
      "description": "Type of the contribution",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(ContributionTypes)"
      },
      "required": true
    },
    "route": {
      "description": "Route for the contribute button",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "buttonText": {
      "description": "A custom button text to override the default one",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "image": {
      "description": "An image to display on the card hero",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "children": {
      "description": "The card body",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "disableCTA": {
      "description": "If true, the call to action will not be displayed",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "hideCTA": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "contributors": {
      "description": "Contributors",
      "type": {
        "name": "arrayOf",
        "value": {
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
            "image": {
              "name": "string",
              "required": false
            },
            "collectiveSlug": {
              "name": "string",
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "stats": {
      "description": "Contributors stats",
      "type": {
        "name": "shape",
        "value": {
          "all": {
            "name": "number",
            "required": false
          },
          "users": {
            "name": "number",
            "required": false
          },
          "organizations": {
            "name": "number",
            "required": false
          }
        }
      },
      "required": false
    },
    "hideContributors": {
      "description": "If true, contributors will not be displayed",
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
      "required": true
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "tier": {
      "description": "",
      "type": {
        "name": "object"
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
    "isPreview": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onClickEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(ContributeCard));

/***/ }),

/***/ 98796:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ CONTRIBUTE_CARD_PADDING_X; }
/* harmony export */ });
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37947);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52015);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16159);



var CONTRIBUTE_CARD_PADDING_X = [15, 18];
var ContributeCardContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_0__/* .Box */ .xu).attrs({
  px: CONTRIBUTE_CARD_PADDING_X
}).withConfig({
  displayName: "ContributeCardContainer",
  componentId: "sc-1p8faz7-0"
})((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)({
  scrollSnapAlign: ['center', null, 'start']
}));
/* harmony default export */ __webpack_exports__["Z"] = (ContributeCardContainer);

/***/ }),

/***/ 9881:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74806);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(450);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25896);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);


var _excluded = ["intl", "collective", "contributors", "stats"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  title: {
    id: "CollectivePage.Contribute.Crypto.title",
    defaultMessage: [{
      "type": 0,
      "value": "Crypto Contribution"
    }]
  },
  description: {
    id: "CollectivePage.Contribute.Crypto.Description",
    defaultMessage: [{
      "type": 0,
      "value": "Make a crypto contribution."
    }]
  }
});

var ContributeCrypto = function ContributeCrypto(_ref) {
  var intl = _ref.intl,
      collective = _ref.collective,
      contributors = _ref.contributors,
      stats = _ref.stats,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Contribute__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getCollectivePageRoute */ .x0)(collective), "/donate/crypto"),
    type: _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_CRYPTO */ .S.FINANCIAL_CRYPTO,
    title: intl.formatMessage(messages.title),
    contributors: contributors,
    stats: stats
  }, props), {}, {
    children: intl.formatMessage(messages.description)
  }));
};

ContributeCrypto.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributeCrypto",
  "props": {
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stats": {
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
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)(ContributeCrypto));

/***/ }),

/***/ 35744:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74806);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(450);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25896);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);


var _excluded = ["intl", "collective", "contributors", "stats"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  title: {
    id: "Donation",
    defaultMessage: [{
      "type": 0,
      "value": "Donation"
    }]
  },
  description: {
    id: "CollectivePage.Contribute.Custom.Description",
    defaultMessage: [{
      "type": 0,
      "value": "Make a custom one-time or recurring contribution."
    }]
  }
});

var ContributeCustom = function ContributeCustom(_ref) {
  var intl = _ref.intl,
      collective = _ref.collective,
      contributors = _ref.contributors,
      stats = _ref.stats,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Contribute__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getCollectivePageRoute */ .x0)(collective), "/donate"),
    type: _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_CUSTOM */ .S.FINANCIAL_CUSTOM,
    title: intl.formatMessage(messages.title),
    contributors: contributors,
    stats: stats
  }, props), {}, {
    children: intl.formatMessage(messages.description)
  }));
};

ContributeCustom.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributeCustom",
  "props": {
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stats": {
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
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)(ContributeCustom));

/***/ }),

/***/ 62686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ contribute_cards_ContributeTier; }
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
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./lib/constants/contribution-types.js
var contribution_types = __webpack_require__(450);
// EXTERNAL MODULE: ./lib/constants/intervals.js
var intervals = __webpack_require__(80642);
// EXTERNAL MODULE: ./lib/constants/tiers-types.js
var tiers_types = __webpack_require__(12568);
// EXTERNAL MODULE: ./lib/currency-utils.js
var currency_utils = __webpack_require__(17632);
// EXTERNAL MODULE: ./lib/events.js
var events = __webpack_require__(47162);
// EXTERNAL MODULE: ./lib/hooks/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(62131);
// EXTERNAL MODULE: ./lib/tier-utils.js
var tier_utils = __webpack_require__(36648);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/CollapsableText.js








var CollapsableText = function CollapsableText(_ref) {
  var text = _ref.text,
      maxLength = _ref.maxLength;

  var _React$useState = react.useState(true),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isCollapsed = _React$useState2[0],
      setCollapsed = _React$useState2[1];

  if (!text) {
    return null;
  } else if (text.length <= maxLength) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: text
    });
  } else if (isCollapsed) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      children: [truncate_default()(text, {
        length: maxLength
      }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          setCollapsed(false);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "ContributeCard.ReadMore",
          defaultMessage: [{
            "type": 0,
            "value": "Read more"
          }]
        })
      })]
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      children: [text, ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          setCollapsed(true);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Hide",
          defaultMessage: [{
            "type": 0,
            "value": "Hide"
          }]
        })
      })]
    });
  }
};

CollapsableText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollapsableText",
  "props": {
    "maxLength": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "text": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_CollapsableText = (CollapsableText);
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/StyledProgressBar.js
var StyledProgressBar = __webpack_require__(6121);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/contribute-cards/Contribute.js
var Contribute = __webpack_require__(56127);
;// CONCATENATED MODULE: ./components/contribute-cards/ContributeTier.js



var _excluded = ["intl", "collective", "tier", "isPreview"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }























var messages = (0,lib.defineMessages)({
  fallbackDescription: {
    id: "TierCard.DefaultDescription",
    defaultMessage: [{
      "type": 5,
      "value": "tierName",
      "options": {
        "backer": {
          "value": [{
            "type": 0,
            "value": "Become a backer"
          }]
        },
        "sponsor": {
          "value": [{
            "type": 0,
            "value": "Become a sponsor"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "Join us"
          }]
        }
      }
    }, {
      "type": 5,
      "value": "minAmount",
      "options": {
        "0": {
          "value": []
        },
        "other": {
          "value": [{
            "type": 0,
            "value": " for "
          }, {
            "type": 1,
            "value": "minAmountWithCurrency"
          }, {
            "type": 0,
            "value": " "
          }, {
            "type": 5,
            "value": "interval",
            "options": {
              "month": {
                "value": [{
                  "type": 0,
                  "value": "per month"
                }]
              },
              "year": {
                "value": [{
                  "type": 0,
                  "value": "per year"
                }]
              },
              "other": {
                "value": []
              }
            }
          }]
        }
      }
    }, {
      "type": 0,
      "value": " and support us"
    }]
  }
});

var getContributionTypeFromTier = function getContributionTypeFromTier(tier, isPassed) {
  if (isPassed) {
    return contribution_types/* ContributionTypes.TIER_PASSED */.S.TIER_PASSED;
  } else if ((0,currency_utils/* graphqlAmountValueInCents */.kJ)(tier.goal) > 0) {
    return contribution_types/* ContributionTypes.FINANCIAL_GOAL */.S.FINANCIAL_GOAL;
  } else if (tier.type === tiers_types/* TierTypes.PRODUCT */.x$.PRODUCT) {
    return contribution_types/* ContributionTypes.PRODUCT */.S.PRODUCT;
  } else if (tier.type === tiers_types/* TierTypes.TICKET */.x$.TICKET) {
    return contribution_types/* ContributionTypes.TICKET */.S.TICKET;
  } else if (tier.type === tiers_types/* TierTypes.MEMBERSHIP */.x$.MEMBERSHIP) {
    return contribution_types/* ContributionTypes.MEMBERSHIP */.S.MEMBERSHIP;
  } else if (tier.interval) {
    if (tier.interval === intervals["default"].flexible) {
      return contribution_types/* ContributionTypes.FINANCIAL_CUSTOM */.S.FINANCIAL_CUSTOM;
    } else {
      return contribution_types/* ContributionTypes.FINANCIAL_RECURRING */.S.FINANCIAL_RECURRING;
    }
  } else {
    return contribution_types/* ContributionTypes.FINANCIAL_ONE_TIME */.S.FINANCIAL_ONE_TIME;
  }
};

var TierTitle = function TierTitle(_ref) {
  var collective = _ref.collective,
      tier = _ref.tier;
  var name = (0,utils/* capitalize */.kC)(tier.name);

  if (!tier.useStandalonePage) {
    return name;
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
      content: function content() {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "ContributeTier.GoToPage",
          defaultMessage: [{
            "type": 0,
            "value": "Go to full details page"
          }]
        });
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        as: Link/* default */.Z,
        href: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(collective), "/contribute/").concat(tier.slug, "-").concat(tier.legacyId || tier.id),
        color: "black.900",
        hoverColor: "black.900",
        underlineOnHover: true,
        children: name
      })
    });
  }
};

var canContribute = function canContribute(collective, LoggedInUser) {
  if (!collective.isActive) {
    return false;
  } else if (collective.type === 'EVENT') {
    return !(0,events/* isPastEvent */.Up)(collective) || Boolean(LoggedInUser.isAdminOfCollectiveOrHost(collective));
  } else {
    return true;
  }
};

var ContributeTier = function ContributeTier(_ref2) {
  var _stats$availableQuant;

  var intl = _ref2.intl,
      collective = _ref2.collective,
      tier = _ref2.tier,
      isPreview = _ref2.isPreview,
      props = objectWithoutProperties_default()(_ref2, _excluded);

  var _useLoggedInUser = (0,useLoggedInUser/* default */.Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var stats = tier.stats;
  var currency = tier.currency || collective.currency;
  var isFlexibleAmount = tier.amountType === 'FLEXIBLE';
  var isFlexibleInterval = tier.interval === intervals["default"].flexible;
  var minAmount = isFlexibleAmount ? tier.minimumAmount : tier.amount;
  var amountRaised = (stats === null || stats === void 0 ? void 0 : stats[tier.interval && !isFlexibleInterval ? 'totalRecurringDonations' : 'totalDonated']) || 0;
  var tierIsExpired = (0,tier_utils/* isTierExpired */.l_)(tier);
  var tierType = getContributionTypeFromTier(tier, tierIsExpired);
  var hasNoneLeft = (stats === null || stats === void 0 ? void 0 : stats.availableQuantity) === 0;
  var canContributeToCollective = canContribute(collective, LoggedInUser);
  var isDisabled = !canContributeToCollective || tierIsExpired || hasNoneLeft;
  var tierLegacyId = tier.legacyId || tier.id;
  var description = tier.description;

  if (!tier.description) {
    var _tier$interval;

    description = intl.formatMessage(messages.fallbackDescription, {
      minAmount: minAmount || 0,
      tierName: tier.name,
      minAmountWithCurrency: minAmount && (0,currency_utils/* formatCurrency */.xG)(minAmount, currency, {
        locale: intl.locale
      }),
      interval: (_tier$interval = tier.interval) !== null && _tier$interval !== void 0 ? _tier$interval : ''
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Contribute/* default */.Z, _objectSpread(_objectSpread({
    route: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(collective), "/contribute/").concat(tier.slug, "-").concat(tierLegacyId, "/checkout"),
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(TierTitle, {
      collective: collective,
      tier: tier
    }),
    type: tierType,
    buttonText: tier.button,
    contributors: tier.contributors,
    stats: stats === null || stats === void 0 ? void 0 : stats.contributors,
    "data-cy": "contribute-card-tier",
    isPreview: isPreview,
    disableCTA: !isPreview && isDisabled,
    tier: tier,
    collective: collective
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        children: [tier.maxQuantity > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "1.1rem",
          color: "#e69900",
          textTransform: "uppercase",
          fontWeight: "500",
          letterSpacing: "1px",
          mb: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "tier.limited",
            values: {
              maxQuantity: tier.maxQuantity,
              availableQuantity: ((_stats$availableQuant = stats === null || stats === void 0 ? void 0 : stats.availableQuantity) !== null && _stats$availableQuant !== void 0 ? _stats$availableQuant : tier.availableQuantity) || 0
            },
            defaultMessage: [{
              "type": 0,
              "value": "LIMITED: "
            }, {
              "type": 1,
              "value": "availableQuantity"
            }, {
              "type": 0,
              "value": " LEFT OUT OF "
            }, {
              "type": 1,
              "value": "maxQuantity"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          mb: 2,
          lineHeight: "22px",
          children: tier.useStandalonePage ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [truncate_default()(description, {
              length: 150
            }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
              as: Link/* default */.Z,
              whiteSpace: "nowrap",
              href: isPreview ? '#' : "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(collective), "/contribute/").concat(tier.slug, "-").concat(tierLegacyId),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "ContributeCard.ReadMore",
                defaultMessage: [{
                  "type": 0,
                  "value": "Read more"
                }]
              })
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_CollapsableText, {
            text: description,
            maxLength: 150
          })
        }), tierType === contribution_types/* ContributionTypes.FINANCIAL_GOAL */.S.FINANCIAL_GOAL && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mb: 1,
          mt: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
            fontSize: "12px",
            color: "black.600",
            fontWeight: "400",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Tier.AmountRaised",
              defaultMessage: [{
                "type": 1,
                "value": "amount"
              }, {
                "type": 0,
                "value": " of "
              }, {
                "type": 1,
                "value": "goalWithInterval"
              }, {
                "type": 0,
                "value": " raised"
              }],
              values: {
                amount: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
                  amountStyles: {
                    fontWeight: '700',
                    color: 'black.700'
                  },
                  amount: (0,currency_utils/* graphqlAmountValueInCents */.kJ)(amountRaised),
                  currency: currency,
                  precision: (0,currency_utils/* getPrecisionFromAmount */.vx)((0,currency_utils/* graphqlAmountValueInCents */.kJ)(amountRaised))
                }),
                goalWithInterval: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
                  amountStyles: {
                    fontWeight: '700',
                    color: 'black.700'
                  },
                  amount: (0,currency_utils/* graphqlAmountValueInCents */.kJ)(tier.goal),
                  currency: currency,
                  interval: tier.interval !== intervals["default"].flexible ? tier.interval : null,
                  precision: (0,currency_utils/* getPrecisionFromAmount */.vx)((0,currency_utils/* graphqlAmountValueInCents */.kJ)(tier.goal))
                })
              }
            }), " (".concat(Math.round(amountRaised / (0,currency_utils/* graphqlAmountValueInCents */.kJ)(tier.goal) * 100), "%)")]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mt: 1,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledProgressBar/* default */.Z, {
              percentage: amountRaised / (0,currency_utils/* graphqlAmountValueInCents */.kJ)(tier.goal)
            })
          })]
        })]
      }), !isDisabled && (0,currency_utils/* graphqlAmountValueInCents */.kJ)(minAmount) > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
        mt: 3,
        color: "black.700",
        children: [isFlexibleAmount && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          display: "block",
          fontSize: "10px",
          textTransform: "uppercase",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "ContributeTier.StartsAt",
            defaultMessage: [{
              "type": 0,
              "value": "Starts at"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          display: "block",
          "data-cy": "amount",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
            amount: (0,currency_utils/* graphqlAmountValueInCents */.kJ)(minAmount),
            interval: tier.interval && tier.interval !== intervals["default"].flexible ? tier.interval : null,
            currency: currency,
            amountStyles: {
              fontSize: '24px',
              lineHeight: '32px',
              fontWeight: 'bold',
              color: 'black.900'
            },
            precision: (0,currency_utils/* getPrecisionFromAmount */.vx)((0,currency_utils/* graphqlAmountValueInCents */.kJ)(minAmount))
          })
        })]
      })]
    })
  }));
};

ContributeTier.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributeTier",
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
          },
          "isActive": {
            "name": "bool",
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
          }
        }
      },
      "required": false
    },
    "tier": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "string"
            }],
            "required": false
          },
          "legacyId": {
            "name": "number",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "description": {
            "name": "string",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "useStandalonePage": {
            "name": "bool",
            "required": false
          },
          "interval": {
            "name": "string",
            "required": false
          },
          "amountType": {
            "name": "string",
            "required": false
          },
          "endsAt": {
            "name": "string",
            "required": false
          },
          "button": {
            "name": "string",
            "required": false
          },
          "goal": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "object"
            }],
            "required": false
          },
          "minimumAmount": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "object"
            }],
            "required": false
          },
          "amount": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "object"
            }],
            "required": false
          },
          "maxQuantity": {
            "name": "number",
            "required": false
          },
          "availableQuantity": {
            "name": "number",
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "totalRecurringDonations": {
                "name": "number",
                "required": false
              },
              "totalDonated": {
                "name": "number",
                "required": false
              },
              "contributors": {
                "name": "object",
                "required": false
              },
              "availableQuantity": {
                "name": "number",
                "required": false
              }
            },
            "required": false
          },
          "contributors": {
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
      "description": "@ignore",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "isPreview": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var contribute_cards_ContributeTier = ((0,injectIntl/* default */.ZP)(ContributeTier));

/***/ }),

/***/ 48451:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52015);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92129);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90012);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19146);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);


var _excluded = ["route", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var CreateNewCard = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)(_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
  displayName: "CreateNew__CreateNewCard",
  componentId: "sc-1lycy8r-0"
})(["display:block;background:white;height:100%;width:", "px;border-radius:", "px;border:1px dashed #c0c5cc;padding:32px;cursor:pointer;a{text-decoration:none;display:block;}&:hover{background:", ";}"], _constants__WEBPACK_IMPORTED_MODULE_9__/* .CONTRIBUTE_CARD_WIDTH */ .TJ, _constants__WEBPACK_IMPORTED_MODULE_9__/* .CONTRIBUTE_CARD_BORDER_RADIUS */ .zx, function (props) {
  return props.theme.colors.black[50];
});
/**
 * A special card dedicated to admins to show them a `Create new ...` card (ex: Create new tier).
 */

var CreateNew = function CreateNew(_ref) {
  var route = _ref.route,
      children = _ref.children,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(CreateNewCard, _objectSpread(_objectSpread({}, props), {}, {
    href: route,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          buttonStyle: "primary",
          fontSize: 25,
          children: "+"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
          mt: 3,
          color: "black.700",
          children: children
        })]
      })
    })
  }));
};

CreateNew.__docgenInfo = {
  "description": "A special card dedicated to admins to show them a `Create new ...` card (ex: Create new tier).",
  "methods": [],
  "displayName": "CreateNew",
  "props": {
    "route": {
      "description": "The link to redirect to when users click",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "children": {
      "description": "The label/description",
      "type": {
        "name": "node"
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (CreateNew);

/***/ }),

/***/ 55505:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ host_dashboard_AcceptRejectButtons; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/InfoCircle/InfoCircle.esm.js
var InfoCircle_esm = __webpack_require__(95612);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Ban/Ban.esm.js
var Ban_esm = __webpack_require__(80654);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Check/Check.esm.js
var Check_esm = __webpack_require__(46336);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Lock/Lock.esm.js
var Lock_esm = __webpack_require__(9785);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/LinkContributor.js
var LinkContributor = __webpack_require__(42388);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/StyledTextarea.js
var StyledTextarea = __webpack_require__(93150);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/host-dashboard/ApplicationRejectionReasonModal.js


var _excluded = ["collective", "onClose", "onConfirm"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















var messages = (0,lib.defineMessages)({
  placeholder: {
    id: "appRejectionReason.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Why is this application being rejected?"
    }]
  }
});

var ApplicationRejectionReasonModal = function ApplicationRejectionReasonModal(_ref) {
  var _collective$admins, _collective$admins2;

  var collective = _ref.collective,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm,
      modalProps = objectWithoutProperties_default()(_ref, _excluded);

  var _useState = (0,react.useState)(''),
      rejectionReason = _useState[0],
      setRejectionReason = _useState[1];

  var intl = (0,useIntl/* default */.Z)();
  var isLegacyAPI = !collective.admins;
  var admins = ((_collective$admins = collective.admins) === null || _collective$admins === void 0 ? void 0 : _collective$admins.nodes) || collective.coreContributors; // compatibility with GQLV1

  var totalAdminCount = ((_collective$admins2 = collective.admins) === null || _collective$admins2 === void 0 ? void 0 : _collective$admins2.totalCount) || admins.length;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* default */.ZP, _objectSpread(_objectSpread({
    onClose: onClose,
    width: "576px"
  }, modalProps), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
      hideCloseIcon: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        justifyContent: "space-between",
        flexDirection: ['column', 'row'],
        width: "100%",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
            collective: collective,
            radius: 40
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            ml: 3,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "bold",
              children: collective.name
            }), collective.website && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: "400",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                href: collective.website,
                color: "black.700",
                openInNewTabNoFollow: true,
                children: collective.website
              })
            })]
          })]
        }), totalAdminCount > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mt: [3, 0],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            alignItems: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              color: "black.500",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Admins",
                defaultMessage: [{
                  "type": 0,
                  "value": "Admins"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            mt: 2,
            alignItems: "center",
            children: [admins.slice(0, 6).map(function (admin) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                mr: 1,
                children: isLegacyAPI ? /*#__PURE__*/(0,jsx_runtime.jsx)(LinkContributor/* default */.Z, {
                  contributor: admin,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* ContributorAvatar */.BD, {
                    contributor: admin,
                    radius: "24px"
                  })
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
                  collective: admin.account,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
                    collective: admin.account,
                    radius: "24px"
                  })
                })
              }, admin.id);
            }), totalAdminCount > 6 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
              ml: 2,
              pt: "0.7em",
              fontSize: "12px",
              color: "black.600",
              children: ["+ ", totalAdminCount - 6]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* ModalBody */.fe, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        color: "red.900",
        fontSize: "16px",
        lineHeight: "24px",
        mb: 2,
        mt: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "OptionalFieldLabel",
          defaultMessage: [{
            "type": 1,
            "value": "field"
          }, {
            "type": 0,
            "value": " (optional)"
          }],
          values: {
            field: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ApplicationRejectionReasonModal.Help",
              defaultMessage: [{
                "type": 0,
                "value": "Help "
              }, {
                "type": 1,
                "value": "accountName"
              }, {
                "type": 0,
                "value": " understand why you rejected their application"
              }],
              values: {
                accountName: collective.name
              }
            })
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
        color: "black.700",
        lineHeight: "20px",
        mb: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "PrivateMessageToCollectiveAdmins",
          defaultMessage: [{
            "type": 0,
            "value": "The message will be sent as a private email to the admins."
          }]
        }), "\xA0\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(Lock_esm/* Lock */.H, {
          size: "1.1em"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, {
          width: "100%",
          resize: "none",
          autoSize: true,
          minHeight: 200,
          value: rejectionReason,
          onChange: function onChange(_ref2) {
            var target = _ref2.target;
            return setRejectionReason(target.value);
          },
          placeholder: intl.formatMessage(messages.placeholder)
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          mt: 1,
          fontSize: "11px",
          color: "black.600",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "forms.optional",
            defaultMessage: [{
              "type": 0,
              "value": "Optional"
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
      isFullWidth: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        justifyContent: "flex-end",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          buttonStyle: "dangerSecondary",
          mx: 20,
          minWidth: 95,
          onClick: onClose,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          buttonStyle: "danger",
          "data-cy": "action",
          minWidth: 95,
          onClick: function onClick() {
            return onConfirm(rejectionReason);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "actions.reject",
            defaultMessage: [{
              "type": 0,
              "value": "Reject"
            }]
          })
        })]
      })
    })]
  }));
};

ApplicationRejectionReasonModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationRejectionReasonModal",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onConfirm": {
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
    }
  }
};
/* harmony default export */ var host_dashboard_ApplicationRejectionReasonModal = (ApplicationRejectionReasonModal);
;// CONCATENATED MODULE: ./components/host-dashboard/AcceptRejectButtons.js













var AcceptRejectButtons = function AcceptRejectButtons(_ref) {
  var collective = _ref.collective,
      isLoading = _ref.isLoading,
      onApprove = _ref.onApprove,
      onReject = _ref.onReject,
      disabled = _ref.disabled,
      disabledMessage = _ref.disabledMessage,
      customButton = _ref.customButton;

  var _useState = (0,react.useState)(false),
      showRejectModal = _useState[0],
      setShowRejectModal = _useState[1];

  var _useState2 = (0,react.useState)(null),
      action = _useState2[0],
      setAction = _useState2[1];

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    alignItems: "baseline",
    gap: "10px",
    children: [disabledMessage && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
      content: disabledMessage,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
        color: "black.600",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(InfoCircle_esm/* InfoCircle */.Z, {
          size: 24
        })
      })
    }), customButton ? customButton({
      onClick: function onClick() {
        setAction('APPROVE');
        onApprove();
      },
      disabled: disabled || isLoading,
      loading: isLoading && action === 'APPROVE',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "actions.approve",
        defaultMessage: [{
          "type": 0,
          "value": "Approve"
        }]
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
      minWidth: 100,
      buttonSize: "tiny",
      buttonStyle: "successSecondary",
      height: 32,
      disabled: disabled || isLoading,
      loading: isLoading && action === 'APPROVE',
      "data-cy": "".concat(collective.slug, "-approve"),
      onClick: function onClick() {
        setAction('APPROVE');
        onApprove();
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Check_esm/* Check */.J, {
        size: 12
      }), "\xA0 ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "actions.approve",
        defaultMessage: [{
          "type": 0,
          "value": "Approve"
        }]
      })]
    }), customButton ? customButton({
      onClick: function onClick() {
        return setShowRejectModal(true);
      },
      disabled: isLoading,
      loading: isLoading && action === 'REJECT',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "actions.reject",
        defaultMessage: [{
          "type": 0,
          "value": "Reject"
        }]
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
      minWidth: 100,
      buttonSize: "tiny",
      buttonStyle: "dangerSecondary",
      height: 32,
      onClick: function onClick() {
        return setShowRejectModal(true);
      },
      disabled: isLoading,
      loading: isLoading && action === 'REJECT',
      "data-cy": "".concat(collective.slug, "-reject"),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Ban_esm/* Ban */.K, {
        size: 12
      }), "\xA0 ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "actions.reject",
        defaultMessage: [{
          "type": 0,
          "value": "Reject"
        }]
      })]
    }), showRejectModal && /*#__PURE__*/(0,jsx_runtime.jsx)(host_dashboard_ApplicationRejectionReasonModal, {
      collective: collective,
      onClose: function onClose() {
        return setShowRejectModal(false);
      },
      onConfirm: function onConfirm(message) {
        setAction('REJECT');
        setShowRejectModal(false);
        onReject(message);
      }
    })]
  });
};

AcceptRejectButtons.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AcceptRejectButtons",
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
          "slug": {
            "name": "string",
            "required": false
          }
        }
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
    "disabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disabledMessage": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onApprove": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onReject": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "customButton": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var host_dashboard_AcceptRejectButtons = (AcceptRejectButtons);

/***/ }),

/***/ 25706:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ applications_PendingApplication; },
  "qM": function() { return /* binding */ processApplicationAccountFields; },
  "PT": function() { return /* binding */ processApplicationMutation; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/AlertTriangle/AlertTriangle.esm.js
var AlertTriangle_esm = __webpack_require__(77552);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/ExternalLink/ExternalLink.esm.js
var ExternalLink_esm = __webpack_require__(31492);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Mail/Mail.esm.js
var Mail_esm = __webpack_require__(9141);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var index_esm = __webpack_require__(16678);
// EXTERNAL MODULE: ./lib/collective.lib.js
var collective_lib = __webpack_require__(5700);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/i18n/ocf-form.js
var ocf_form = __webpack_require__(13124);
// EXTERNAL MODULE: ./lib/styled-components-shared-styles.js
var styled_components_shared_styles = __webpack_require__(72004);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/I18nCollectiveTags.js
var I18nCollectiveTags = __webpack_require__(82497);
// EXTERNAL MODULE: ./components/icons/CommentIcon.js
var CommentIcon = __webpack_require__(6845);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/ocf-host-application/ApplicationForm.js + 1 modules
var ApplicationForm = __webpack_require__(93737);
// EXTERNAL MODULE: ./components/StyledCollectiveCard.js
var StyledCollectiveCard = __webpack_require__(41216);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
// EXTERNAL MODULE: ./components/StyledTag.js
var StyledTag = __webpack_require__(36422);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./components/host-dashboard/AcceptRejectButtons.js + 1 modules
var AcceptRejectButtons = __webpack_require__(55505);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Lock/Lock.esm.js
var Lock_esm = __webpack_require__(9785);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/StyledTextarea.js
var StyledTextarea = __webpack_require__(93150);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/host-dashboard/ApplicationMessageModal.js



var _excluded = ["collective", "onClose", "onConfirm"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var ApplicationMessageModal = function ApplicationMessageModal(_ref) {
  var collective = _ref.collective,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm,
      modalProps = objectWithoutProperties_default()(_ref, _excluded);

  var _useState = (0,react.useState)(''),
      message = _useState[0],
      setMessage = _useState[1];

  var _useState2 = (0,react.useState)(false),
      isPrivate = _useState2[0],
      setIsPrivate = _useState2[1];

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* default */.ZP, _objectSpread(_objectSpread({
    onClose: onClose,
    width: "576px"
  }, modalProps), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
      hideCloseIcon: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        justifyContent: "space-between",
        flexDirection: ['column', 'row'],
        width: "100%",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
            collective: collective,
            radius: 40
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            ml: 3,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "bold",
              children: collective.name
            }), collective.website && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: "400",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                href: collective.website,
                color: "black.700",
                openInNewTabNoFollow: true,
                children: collective.website
              })
            })]
          })]
        }), collective.admins.totalCount > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mt: [3, 0],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            alignItems: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              color: "black.500",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "Admins",
                defaultMessage: [{
                  "type": 0,
                  "value": "Admins"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            mt: 2,
            alignItems: "center",
            children: [collective.admins.nodes.slice(0, 6).map(function (admin) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                mr: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
                  collective: admin.account,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
                    collective: admin.account,
                    radius: "24px"
                  })
                })
              }, admin.id);
            }), collective.admins.totalCount > 6 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
              ml: 2,
              pt: "0.7em",
              fontSize: "12px",
              color: "black.600",
              children: ["+ ", collective.admins.totalCount - 6]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* ModalBody */.fe, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "16px",
        lineHeight: "24px",
        mb: 2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "SendMessageTo",
          defaultMessage: [{
            "type": 0,
            "value": "Send a message to "
          }, {
            "type": 1,
            "value": "accountName"
          }],
          values: {
            accountName: collective.name
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        color: "black.700",
        lineHeight: "20px",
        mb: 2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "HostApplicationMessageInfo",
          defaultMessage: [{
            "type": 0,
            "value": "The message will be public by default. If you want it to be private, tick the private checkbox."
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, {
          width: "100%",
          resize: "none",
          autoSize: true,
          minHeight: 200,
          value: message,
          onChange: function onChange(_ref2) {
            var target = _ref2.target;
            return setMessage(target.value);
          },
          showCount: true,
          minLength: 3,
          maxLength: 3000
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mt: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
            name: "private",
            checked: isPrivate,
            onChange: function onChange(_ref3) {
              var checked = _ref3.checked;
              return setIsPrivate(checked);
            },
            label: /*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Lock_esm/* Lock */.H, {
                size: "1em"
              }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledSpan, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                  id: "ApplicationMessageModal.Private",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Private (email to the Collective admins)"
                  }]
                })
              })]
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
      isFullWidth: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        justifyContent: "flex-end",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          buttonStyle: "secondary",
          mx: 20,
          minWidth: 95,
          onClick: onClose,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          buttonStyle: "primary",
          "data-cy": "action",
          minWidth: 95,
          onClick: function onClick() {
            return onConfirm(message, isPrivate, function () {
              return setMessage('');
            });
          },
          disabled: !message,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "SendMessage",
            defaultMessage: [{
              "type": 0,
              "value": "Send message"
            }]
          })
        })]
      })
    })]
  }));
};

ApplicationMessageModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationMessageModal",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onConfirm": {
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
    }
  }
};
/* harmony default export */ var host_dashboard_ApplicationMessageModal = (ApplicationMessageModal);

var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "ApplicationMessageModal___StyledSpan",
  componentId: "sc-1emfj6v-0"
})({
  verticalAlign: 'middle'
});
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/CheckShield/CheckShield.esm.js
var CheckShield_esm = __webpack_require__(83216);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Ban/Ban.esm.js
var Ban_esm = __webpack_require__(80654);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Check/Check.esm.js
var Check_esm = __webpack_require__(46336);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/relativeTime.js
var relativeTime = __webpack_require__(84110);
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime);
// EXTERNAL MODULE: ./node_modules/spdx-license-list/index.js
var spdx_license_list = __webpack_require__(865);
;// CONCATENATED MODULE: ./components/host-dashboard/applications/InfoSectionHeader.tsx






var InfoSectionHeader = function InfoSectionHeader(_ref) {
  var children = _ref.children,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    alignItems: "center",
    mb: 3,
    children: [icon && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mr: 2,
      children: icon
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
      fontSize: "11px",
      fontWeight: "500",
      color: "black.500",
      textTransform: "uppercase",
      mr: 2,
      children: children
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
      borderColor: "black.200",
      flex: "1 1"
    })]
  });
};
InfoSectionHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InfoSectionHeader",
  "props": {
    "icon": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "ReactReactNode",
        "raw": "React.ReactNode"
      },
      "description": ""
    },
    "children": {
      "required": true,
      "tsType": {
        "name": "ReactReactNode",
        "raw": "React.ReactNode"
      },
      "description": ""
    }
  }
};
;// CONCATENATED MODULE: ./components/host-dashboard/ValidatedRepositoryInfo.js















dayjs_min_default().extend((relativeTime_default()));

var FieldWithValidationBadge = function FieldWithValidationBadge(_ref) {
  var field = _ref.field,
      children = _ref.children;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    alignItems: "center",
    gridGap: "8px",
    children: [field.isValid ? /*#__PURE__*/(0,jsx_runtime.jsx)(Check_esm/* Check */.J, {
      size: "12",
      color: "#256643"
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Ban_esm/* Ban */.K, {
      size: "12",
      color: "#cc2955"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      children: children({
        field: field
      })
    })]
  });
};

var msg = (0,react_intl_lib.defineMessages)({
  license: {
    id: "PendingApplication.RepoInfo.License",
    defaultMessage: [{
      "type": 0,
      "value": "License: "
    }, {
      "type": 1,
      "value": "license"
    }]
  },
  licenseManually: {
    id: "PendingApplication.RepoInfo.LicenseManually",
    defaultMessage: [{
      "type": 0,
      "value": "(user specified \""
    }, {
      "type": 1,
      "value": "license"
    }, {
      "type": 0,
      "value": "\" manually)"
    }]
  },
  lastCommitTimeAgo: {
    id: "PendingApplication.RepoInfo.LastCommitTimeAgo",
    defaultMessage: [{
      "type": 0,
      "value": "Last commit "
    }, {
      "type": 1,
      "value": "timeAgo"
    }]
  },
  orgAccount: {
    id: "PendingApplication.RepoInfo.OrgAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Organization account"
    }]
  },
  personalAccount: {
    id: "PendingApplication.RepoInfo.PersonalAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Personal account"
    }]
  },
  isFork: {
    id: "PendingApplication.RepoInfo.IsFork",
    defaultMessage: [{
      "type": 0,
      "value": "This is a fork"
    }]
  },
  isNotFork: {
    id: "PendingApplication.RepoInfo.IsNotFork",
    defaultMessage: [{
      "type": 0,
      "value": "This is not a fork"
    }]
  },
  collaboratorsCount: {
    id: "PendingApplication.RepoInfo.CollaboratorsCount",
    defaultMessage: [{
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " collaborators"
    }]
  },
  starsCount: {
    id: "PendingApplication.RepoInfo.StarsCount",
    defaultMessage: [{
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " stars"
    }]
  },
  isRepoAdmin: {
    id: "PendingApplication.RepoInfo.IsRepoAdmin",
    defaultMessage: [{
      "type": 0,
      "value": "User is admin of the repository"
    }]
  },
  isNotRepoAdmin: {
    id: "PendingApplication.RepoInfo.IsNotRepoAdmin",
    defaultMessage: [{
      "type": 0,
      "value": "User is not admin of the repository"
    }]
  }
});

function ValidatedRepositoryInfo(_ref2) {
  var customData = _ref2.customData;
  var intl = (0,useIntl/* default */.Z)();
  var repositoryUrl = customData.repositoryUrl,
      licenseSpdxId = customData.licenseSpdxId,
      validatedRepositoryInfo = customData.validatedRepositoryInfo;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    mb: 3,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InfoSectionHeader, {
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CheckShield_esm/* CheckShield */.u, {
        size: 16,
        color: "#75777A"
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "PendingApplication.RepoInfo.Header",
        defaultMessage: [{
          "type": 0,
          "value": "Validated repository information"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      gridGap: '6px',
      mb: 4,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        mb: 1,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
          href: repositoryUrl,
          children: repositoryUrl.split('//')[1]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.licenseSpdxId,
        children: function children(_ref3) {
          var _spdxLicenses$field$v;

          var field = _ref3.field;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [intl.formatMessage(msg.license, {
              license: !(field !== null && field !== void 0 && field.value) || field.value === 'NOASSERTION' ? 'Not found' : "".concat(field.value, " (").concat(((_spdxLicenses$field$v = spdx_license_list[field.value]) === null || _spdxLicenses$field$v === void 0 ? void 0 : _spdxLicenses$field$v.name) || 'Unknown', ")")
            }), ' ', licenseSpdxId && licenseSpdxId !== (field === null || field === void 0 ? void 0 : field.value) && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              color: "black.600",
              children: intl.formatMessage(msg.licenseManually, {
                license: licenseSpdxId
              })
            })]
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.lastCommitDate,
        children: function children(_ref4) {
          var field = _ref4.field;
          return intl.formatMessage(msg.lastCommitTimeAgo, {
            timeAgo: field ? dayjs_min_default()(field.value).fromNow() : 'not found'
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.isOwnedByOrg,
        children: function children(_ref5) {
          var field = _ref5.field;
          return field.value ? intl.formatMessage(msg.orgAccount) : intl.formatMessage(msg.personalAccount);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.isFork,
        children: function children(_ref6) {
          var field = _ref6.field;
          return field.value ? intl.formatMessage(msg.isFork) : intl.formatMessage(msg.isNotFork);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.collaboratorsCount,
        children: function children(_ref7) {
          var field = _ref7.field;
          return intl.formatMessage(msg.collaboratorsCount, {
            count: field.value
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.starsCount,
        children: function children(_ref8) {
          var field = _ref8.field;
          return intl.formatMessage(msg.starsCount, {
            count: field.value
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FieldWithValidationBadge, {
        field: validatedRepositoryInfo.fields.isAdmin,
        children: function children(_ref9) {
          var field = _ref9.field;
          return field.value ? intl.formatMessage(msg.isRepoAdmin) : intl.formatMessage(msg.isNotRepoAdmin);
        }
      })]
    })]
  });
}

ValidatedRepositoryInfo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ValidatedRepositoryInfo",
  "props": {
    "customData": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "repositoryUrl": {
            "name": "string",
            "required": true
          },
          "licenseSpdxId": {
            "name": "string",
            "required": false
          },
          "validatedRepositoryInfo": {
            "name": "shape",
            "value": {
              "fields": {
                "name": "shape",
                "value": {
                  "licenseSpdxId": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "lastCommitDate": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "isOwnedByOrg": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "isFork": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "collaboratorsCount": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "starsCount": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  },
                  "isAdmin": {
                    "name": "custom",
                    "raw": "ValidatedFieldPropType",
                    "required": false
                  }
                },
                "required": true
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
/* harmony default export */ var host_dashboard_ValidatedRepositoryInfo = (ValidatedRepositoryInfo);
;// CONCATENATED MODULE: ./components/host-dashboard/applications/PendingApplication.js






var PendingApplication_excluded = ["host", "application"];

var _templateObject, _templateObject2;



function PendingApplication_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PendingApplication_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PendingApplication_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PendingApplication_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




































var ApplicationBody = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "PendingApplication__ApplicationBody",
  componentId: "sc-rzlnb-0"
})(["height:267px;overflow-y:auto;", " ", " @media (pointer:fine){&::-webkit-scrollbar{width:4px;border-radius:8px;}}"], index_esm/* padding */.o3, styled_components_shared_styles/* CustomScrollbarCSS */.T);
var CollectiveCardBody = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "PendingApplication__CollectiveCardBody",
  componentId: "sc-rzlnb-1"
})(["padding:8px 16px 16px 16px;overflow-y:auto;height:100%;", " @media (pointer:fine){&::-webkit-scrollbar{width:4px;border-radius:8px;}}"], styled_components_shared_styles/* CustomScrollbarCSS */.T);
var processApplicationAccountFields = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  fragment ProcessHostApplicationFields on AccountWithHost {\n    isActive\n    approvedAt\n    isApproved\n    host {\n      id\n    }\n  }\n"])));
var processApplicationMutation = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  mutation ProcessHostApplication(\n    $host: AccountReferenceInput!\n    $account: AccountReferenceInput!\n    $action: ProcessHostApplicationAction!\n    $message: String\n  ) {\n    processHostApplication(host: $host, account: $account, action: $action, message: $message) {\n      account {\n        id\n        ... on AccountWithHost {\n          ...ProcessHostApplicationFields\n        }\n      }\n      conversation {\n        id\n        slug\n      }\n    }\n  }\n  ", "\n"])), processApplicationAccountFields);
var PendingApplication_msg = (0,react_intl_lib.defineMessages)({
  approved: {
    id: "HostApplication.Approved",
    defaultMessage: [{
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " has been approved"
    }]
  },
  rejected: {
    id: "HostApplication.Rejected",
    defaultMessage: [{
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " has been rejected"
    }]
  }
});
var ACTIONS = {
  APPROVE: 'APPROVE',
  REJECT: 'REJECT',
  SEND_PRIVATE_MESSAGE: 'SEND_PRIVATE_MESSAGE',
  SEND_PUBLIC_MESSAGE: 'SEND_PUBLIC_MESSAGE'
};

var StatusTag = function StatusTag(_ref) {
  var status = _ref.status;
  var tagProps = {
    textTransform: 'uppercase',
    mr: 2
  };

  switch (status) {
    case 'PENDING':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, PendingApplication_objectSpread(PendingApplication_objectSpread({}, tagProps), {}, {
        type: "warning",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "Pending",
          defaultMessage: [{
            "type": 0,
            "value": "Pending"
          }]
        })
      }));

    case 'APPROVED':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, PendingApplication_objectSpread(PendingApplication_objectSpread({}, tagProps), {}, {
        type: "success",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "PendingApplication.Approved",
          defaultMessage: [{
            "type": 0,
            "value": "Approved"
          }]
        })
      }));

    case 'REJECTED':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, PendingApplication_objectSpread(PendingApplication_objectSpread({}, tagProps), {}, {
        type: "error",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "PendingApplication.Rejected",
          defaultMessage: [{
            "type": 0,
            "value": "Rejected"
          }]
        })
      }));

    default:
      return null;
  }
};

var getStatus = function getStatus(isDone, latestAction) {
  if (!isDone) {
    return 'PENDING';
  } else if (latestAction === ACTIONS.REJECT) {
    return 'REJECTED';
  } else if (latestAction === ACTIONS.APPROVE) {
    return 'APPROVED';
  }
};

var getSuccessToast = function getSuccessToast(intl, action, collective, result) {
  if (action === ACTIONS.SEND_PRIVATE_MESSAGE || action === ACTIONS.SEND_PUBLIC_MESSAGE) {
    var conversation = get_default()(result, 'data.processHostApplication.conversation');

    return {
      type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
      duration: 10000,
      title: conversation ? /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "Conversation.created",
        defaultMessage: [{
          "type": 0,
          "value": "Conversation created"
        }]
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "MessageSent",
        defaultMessage: [{
          "type": 0,
          "value": "Message sent"
        }]
      }),
      message: conversation && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledLink/* default */.Z, {
        as: Link/* default */.Z,
        openInNewTab: true,
        href: "/".concat(collective.slug, "/conversations/").concat(conversation.slug, "-").concat(conversation.id),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "Conversation.view",
          defaultMessage: [{
            "type": 0,
            "value": "View Conversation"
          }]
        }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLink_esm/* ExternalLink */.d, {
          size: "1em",
          style: {
            verticalAlign: 'middle'
          }
        })]
      })
    };
  } else if (action === ACTIONS.APPROVE) {
    return {
      type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
      message: intl.formatMessage(PendingApplication_msg.approved, {
        name: collective.name
      })
    };
  } else if (action === ACTIONS.REJECT) {
    return {
      type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
      message: intl.formatMessage(PendingApplication_msg.rejected, {
        name: collective.name
      })
    };
  } else {
    return {
      type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS
    };
  }
};

var UserInputContainer = (0,styled_components_browser_esm/* default */.ZP)(Text.P).attrs({
  fontSize: '14px',
  lineHeight: '24px',
  fontStyle: 'italic',
  color: 'black.800',
  fontWeight: '400'
}).withConfig({
  displayName: "PendingApplication__UserInputContainer",
  componentId: "sc-rzlnb-2"
})([""]);

var PendingApplication = function PendingApplication(_ref2) {
  var _host$policies, _host$policies$COLLEC, _application$customDa;

  var host = _ref2.host,
      application = _ref2.application,
      props = objectWithoutProperties_default()(_ref2, PendingApplication_excluded);

  var intl = (0,useIntl/* default */.Z)();

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isDone = _React$useState2[0],
      setIsDone = _React$useState2[1];

  var _React$useState3 = react.useState(null),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      latestAction = _React$useState4[0],
      setLatestAction = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      showContactModal = _React$useState6[0],
      setShowContactModal = _React$useState6[1];

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var collective = application.account;

  var _useMutation = (0,client.useMutation)(processApplicationMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      callProcessApplication = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var hasNothingToShow = !application.message && !application.customData;
  var requiresMinimumNumberOfAdmins = (host === null || host === void 0 ? void 0 : (_host$policies = host.policies) === null || _host$policies === void 0 ? void 0 : (_host$policies$COLLEC = _host$policies.COLLECTIVE_MINIMUM_ADMINS) === null || _host$policies$COLLEC === void 0 ? void 0 : _host$policies$COLLEC.numberOfAdmins) > 1;
  var hasEnoughAdmins = requiresMinimumNumberOfAdmins && application.account.admins.totalCount >= host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins;
  var hasEnoughInvitedAdmins = requiresMinimumNumberOfAdmins && application.account.admins.totalCount + application.account.memberInvitations.length >= host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins;

  var processApplication = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(action, message, onSuccess) {
      var variables, result;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsDone(false);
              setLatestAction(action);
              _context.prev = 2;
              variables = {
                host: {
                  id: host.id
                },
                account: {
                  id: collective.id
                },
                action: action,
                message: message
              };
              _context.next = 6;
              return callProcessApplication({
                variables: variables
              });

            case 6:
              result = _context.sent;
              addToast(getSuccessToast(intl, action, collective, result));

              if (action === ACTIONS.APPROVE || action === ACTIONS.REJECT) {
                setIsDone(true);
              }

              if (onSuccess) {
                onSuccess();
              }

              return _context.abrupt("return", result);

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              addToast({
                type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                message: (0,errors/* i18nGraphqlException */.t2)(intl, _context.t0)
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
    }));

    return function processApplication(_x, _x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    id: "application-".concat(collective.legacyId),
    display: "flex",
    flexDirection: ['column', 'row'],
    border: "1px solid #DCDEE0",
    borderRadius: "16px",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledCollectiveCard/* default */.Z, PendingApplication_objectSpread(PendingApplication_objectSpread({
      collective: collective,
      bodyHeight: 258,
      width: ['100%', 224],
      borderRadius: [16, '16px 0 0 16px'],
      borderWidth: "0",
      showWebsite: true,
      tag: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        mt: 12,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StatusTag, {
          status: getStatus(isDone, latestAction)
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, {
          variant: "rounded-right",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(I18nCollectiveTags/* default */.Z, {
            tags: (0,collective_lib/* getCollectiveMainTag */.CJ)(get_default()(collective, 'host.id'), collective.tags, collective.type)
          })
        })]
      })
    }, props), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(CollectiveCardBody, {
        children: [collective.admins.totalCount > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              color: "black.500",
              fontSize: "9px",
              textTransform: "uppercase",
              fontWeight: "500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "Admins",
                defaultMessage: [{
                  "type": 0,
                  "value": "Admins"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
              borderColor: "black.300",
              flex: "1 1",
              ml: 2
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            mt: 2,
            alignItems: "center",
            children: [collective.admins.nodes.slice(0, 6).map(function (admin) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                mr: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
                  collective: admin.account,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
                    collective: admin.account,
                    radius: "24px"
                  })
                })
              }, admin.id);
            }), collective.admins.totalCount > 6 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
              ml: 2,
              pt: "0.7em",
              fontSize: "12px",
              color: "black.600",
              children: ["+ ", collective.admins.totalCount - 6]
            })]
          })]
        }), collective.description && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mt: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              color: "black.500",
              fontSize: "9px",
              textTransform: "uppercase",
              fontWeight: "500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "OurPurpose",
                defaultMessage: [{
                  "type": 0,
                  "value": "Our purpose"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
              borderColor: "black.300",
              flex: "1 1",
              ml: 2
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            mt: 1,
            fontSize: "12px",
            lineHeight: "18px",
            color: "black.800",
            children: collective.description
          })]
        })]
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      background: "white",
      flex: "1 1",
      borderLeft: [null, '1px solid #DCDEE0'],
      borderRadius: [16, '0 16px 16px 0'],
      minWidth: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
      height: 332,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        px: "4px",
        position: "relative",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ApplicationBody, {
          p: [12, 22],
          children: [((_application$customDa = application.customData) === null || _application$customDa === void 0 ? void 0 : _application$customDa.validatedRepositoryInfo) && /*#__PURE__*/(0,jsx_runtime.jsx)(host_dashboard_ValidatedRepositoryInfo, {
            customData: application.customData
          }), (application.message || hasNothingToShow) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            mb: 3,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InfoSectionHeader, {
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CommentIcon/* default */.Z, {
                size: 16
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "PendingApplication.Message",
                defaultMessage: [{
                  "type": 0,
                  "value": "Message to Fiscal Host"
                }]
              })
            }), application.message ? /*#__PURE__*/(0,jsx_runtime.jsx)(UserInputContainer, {
              as: "q",
              children: application.message
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              color: "black.500",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "NoMessage",
                defaultMessage: [{
                  "type": 0,
                  "value": "No message provided"
                }]
              })
            })]
          }), application.customData && Object.keys(application.customData).map(function (key) {
            // Don't show repository info twice as it is displayed on top in a special component
            if (key === 'validatedRepositoryInfo' || key === 'repositoryUrl' && application.customData.validatedRepositoryInfo || key === 'licenseSpdxId' && application.customData.validatedRepositoryInfo) {
              return null;
            }

            return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
              mb: 3,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InfoSectionHeader, {
                children: (0,ocf_form/* i18nOCFApplicationFormLabel */.R)(intl, key)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(UserInputContainer, {
                children: ApplicationForm/* APPLICATION_DATA_AMOUNT_FIELDS.includes */.d.includes(key) && typeof application.customData[key] === 'number' ? "".concat(application.customData[key] / 100, "$") : application.customData[key]
              })]
            }, key);
          })]
        })
      }), !isDone && /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        p: 3,
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #DCDEE0",
        boxShadow: "0px -2px 4px 0px rgb(49 50 51 / 6%)",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          alignItems: "center",
          gap: "10px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
            size: 32,
            onClick: function onClick() {
              return setShowContactModal(true);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Mail_esm/* Mail */.M, {
              size: 15,
              color: "#4E5052"
            })
          }), requiresMinimumNumberOfAdmins && hasEnoughInvitedAdmins && !hasEnoughAdmins && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
            content: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "Lg6nmh",
              defaultMessage: [{
                "type": 0,
                "value": "This collective doesn’t satisfy the minimum admin requirements as admin invitations are still pending."
              }]
            }),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              color: "red.600",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(AlertTriangle_esm/* AlertTriangle */.u, {
                size: 24
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(AcceptRejectButtons/* default */.Z, {
          collective: collective,
          isLoading: loading,
          disabled: requiresMinimumNumberOfAdmins && !hasEnoughInvitedAdmins,
          disabledMessage: requiresMinimumNumberOfAdmins && !hasEnoughInvitedAdmins && /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "mqX77s",
            defaultMessage: [{
              "type": 0,
              "value": "You can not approve this collective as it doesn’t satisfy the minimum admin policy set by you."
            }]
          }),
          onApprove: function onApprove() {
            return processApplication(ACTIONS.APPROVE);
          },
          onReject: function onReject(message) {
            return processApplication(ACTIONS.REJECT, message);
          }
        })]
      })]
    }), showContactModal && /*#__PURE__*/(0,jsx_runtime.jsx)(host_dashboard_ApplicationMessageModal, {
      collective: collective,
      onClose: function onClose() {
        return setShowContactModal(false);
      },
      onConfirm: function onConfirm(message, isPrivate, resetMessage) {
        setShowContactModal(false);
        var action = isPrivate ? ACTIONS.SEND_PRIVATE_MESSAGE : ACTIONS.SEND_PUBLIC_MESSAGE;
        processApplication(action, message, resetMessage);
      }
    })]
  });
};

PendingApplication.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PendingApplication",
  "props": {
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "policies": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    },
    "application": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "message": {
            "name": "string",
            "required": false
          },
          "customData": {
            "name": "object",
            "required": false
          },
          "account": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
              "legacyId": {
                "name": "number",
                "required": false
              },
              "slug": {
                "name": "string",
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
              "isApproved": {
                "name": "bool",
                "required": false
              },
              "tags": {
                "name": "array",
                "required": false
              },
              "type": {
                "name": "string",
                "required": false
              },
              "host": {
                "name": "shape",
                "value": {
                  "id": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              },
              "memberInvitations": {
                "name": "array",
                "required": false
              },
              "admins": {
                "name": "shape",
                "value": {
                  "totalCount": {
                    "name": "number",
                    "required": false
                  },
                  "nodes": {
                    "name": "array",
                    "required": false
                  }
                },
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
/* harmony default export */ var applications_PendingApplication = (PendingApplication);

/***/ }),

/***/ 6845:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82818);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52015);


/* harmony default export */ __webpack_exports__["Z"] = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_1__/* .MessageSquare */ .t).withConfig({
  displayName: "CommentIcon",
  componentId: "sc-hzbk8p-0"
})(["transform:scaleX(-1);"]));

/***/ }),

/***/ 50559:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ getSubscriptionStartDate; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27484);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1808);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15078);
/* harmony import */ var _components_icons_CreditCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47483);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _NewCreditCardForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86501);
/* harmony import */ var _PayWithPaypalButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49160);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85893);












/** Return the next charge date, or `undefined` if subscription is past due */



var getSubscriptionStartDate = function getSubscriptionStartDate(order) {
  if (order.nextChargeDate && dayjs__WEBPACK_IMPORTED_MODULE_2___default()(order.nextChargeDate).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_2___default()())) {
    return order.nextChargeDate;
  }
};
var STRIPE = 'stripe';

var AddPaymentMethod = function AddPaymentMethod(_ref) {
  var onStripeReady = _ref.onStripeReady,
      onPaypalSuccess = _ref.onPaypalSuccess,
      setNewPaymentMethodInfo = _ref.setNewPaymentMethodInfo,
      order = _ref.order,
      isSubmitting = _ref.isSubmitting;
  var host = order.toAccount.host;
  var hasStripe = host.supportedPaymentMethods.includes(_lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.CREDIT_CARD */ .fY.CREDIT_CARD);
  var hasPaypal = host.supportedPaymentMethods.includes(_lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.PAYPAL */ .fY.PAYPAL);
  var defaultProvider = hasStripe && !hasPaypal ? STRIPE : null;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultProvider),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      selectedProvider = _React$useState2[0],
      setSelectedProvider = _React$useState2[1];

  var _useToasts = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  if (!selectedProvider) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: "column",
      children: [hasStripe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        buttonSize: "small",
        "data-cy": "add-pm-select-provider-credit-card-btn",
        onClick: function onClick() {
          return setSelectedProvider(STRIPE);
        },
        mb: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_icons_CreditCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          size: 24
        }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          id: "CreditCard",
          defaultMessage: [{
            "type": 0,
            "value": "Credit Card"
          }]
        })]
      }), host.paypalClientId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PayWithPaypalButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        totalAmount: order.totalAmount.valueInCents,
        currency: order.totalAmount.currency,
        interval: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .getIntervalFromContributionFrequency */ .Pw)(order.frequency),
        host: host,
        collective: order.toAccount,
        tier: order.tier,
        style: {
          height: 45,
          size: 'small'
        },
        subscriptionStartDate: getSubscriptionStartDate(order),
        isSubmitting: isSubmitting,
        onError: function onError(e) {
          return addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            title: e.message
          });
        },
        onSuccess: function onSuccess(_ref2) {
          var subscriptionId = _ref2.subscriptionId;
          onPaypalSuccess({
            service: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL,
            type: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .PAYMENT_METHOD_TYPE.SUBSCRIPTION */ .td.SUBSCRIPTION,
            paypalInfo: {
              subscriptionId: subscriptionId
            }
          });
        }
      })]
    });
  } else if (selectedProvider === STRIPE) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_NewCreditCardForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      name: "newCreditCardInfo",
      profileType: 'USER',
      onChange: setNewPaymentMethodInfo,
      onReady: onStripeReady,
      hasSaveCheckBox: false,
      isCompact: true
    });
  }
};

AddPaymentMethod.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AddPaymentMethod",
  "props": {
    "setNewPaymentMethodInfo": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onStripeReady": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onPaypalSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isSubmitting": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "order": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "totalAmount": {
            "name": "object",
            "required": false
          },
          "frequency": {
            "name": "string",
            "required": false
          },
          "toAccount": {
            "name": "object",
            "required": false
          },
          "tier": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (AddPaymentMethod);

/***/ }),

/***/ 43072:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$B": function() { return /* binding */ addCreditCardMutation; },
/* harmony export */   "SF": function() { return /* binding */ confirmCreditCardMutation; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45578);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82492);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8804);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(46829);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86664);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styled_icons_boxicons_regular_Lock__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(46957);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50056);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(86896);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(52015);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1808);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32651);
/* harmony import */ var _lib_payment_method_label__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51515);
/* harmony import */ var _lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(91337);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79936);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88705);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29242);
/* harmony import */ var _StripeProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(41499);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(173);
/* harmony import */ var _StyledRadioList__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(36718);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90012);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(31330);
/* harmony import */ var _AddPaymentMethod__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(50559);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(85893);










var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;




























var PaymentMethodBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC).withConfig({
  displayName: "UpdatePaymentMethodPopUp__PaymentMethodBox",
  componentId: "sc-1vnnhkx-0"
})(["border-top:1px solid ", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_11__/* .themeGet */ .R)('colors.black.300'));
var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_31__.defineMessages)({
  updatePaymentMethod: {
    id: "subscription.menu.editPaymentMethod",
    defaultMessage: [{
      "type": 0,
      "value": "Update payment method"
    }]
  },
  addPaymentMethod: {
    id: "subscription.menu.addPaymentMethod",
    defaultMessage: [{
      "type": 0,
      "value": "Add new payment method"
    }]
  }
});
var paymentMethodFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  fragment UpdatePaymentMethodFragment on PaymentMethod {\n    id\n    name\n    data\n    service\n    type\n    balance {\n      value\n      valueInCents\n      currency\n    }\n    account {\n      id\n    }\n  }\n"])));
var paymentMethodsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  query UpdatePaymentMethodPopUpPaymentMethod($accountId: String!, $orderId: String!) {\n    account(id: $accountId) {\n      id\n      paymentMethods(type: [CREDITCARD, GIFTCARD, PREPAID, COLLECTIVE]) {\n        id\n        ...UpdatePaymentMethodFragment\n      }\n    }\n    order(order: { id: $orderId }) {\n      id\n      paymentMethod {\n        id\n        ...UpdatePaymentMethodFragment\n      }\n    }\n  }\n  ", "\n"])), paymentMethodFragment);
var updatePaymentMethodMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP)(_templateObject3 || (_templateObject3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  mutation UpdatePaymentMethod(\n    $order: OrderReferenceInput!\n    $paymentMethod: PaymentMethodReferenceInput\n    $paypalSubscriptionId: String\n  ) {\n    updateOrder(order: $order, paymentMethod: $paymentMethod, paypalSubscriptionId: $paypalSubscriptionId) {\n      id\n      status\n      paymentMethod {\n        id\n        service\n        name\n        type\n        data\n        expiryDate\n        balance {\n          value\n          valueInCents\n          currency\n        }\n      }\n    }\n  }\n"])));
var paymentMethodResponseFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP)(_templateObject4 || (_templateObject4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  fragment paymentMethodResponseFragment on CreditCardWithStripeError {\n    paymentMethod {\n      id\n    }\n    stripeError {\n      message\n      response\n    }\n  }\n"])));
var addCreditCardMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP)(_templateObject5 || (_templateObject5 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  mutation AddCreditCardRecurringContributions(\n    $creditCardInfo: CreditCardCreateInput!\n    $name: String!\n    $account: AccountReferenceInput!\n  ) {\n    addCreditCard(creditCardInfo: $creditCardInfo, name: $name, account: $account) {\n      ...paymentMethodResponseFragment\n    }\n  }\n  ", "\n"])), paymentMethodResponseFragment);
var confirmCreditCardMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP)(_templateObject6 || (_templateObject6 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  mutation ConfirmCreditCardRecurringContributions($paymentMethod: PaymentMethodReferenceInput!) {\n    confirmCreditCard(paymentMethod: $paymentMethod) {\n      ...paymentMethodResponseFragment\n    }\n  }\n  ", "\n"])), paymentMethodResponseFragment);
var mutationOptions = {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__/* .API_V2_CONTEXT */ .T
};

var sortAndFilterPaymentMethods = function sortAndFilterPaymentMethods(paymentMethods, contribution, addedPaymentMethod, existingPaymentMethod) {
  if (!paymentMethods) {
    return null;
  }

  var minBalance = contribution.amount.valueInCents;

  var uniquePMs = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_3___default()(paymentMethods, 'id');

  var getIsDisabled = function getIsDisabled(pm) {
    return pm.balance.valueInCents < minBalance;
  }; // Make sure we always include the current payment method


  if (existingPaymentMethod && !uniquePMs.some(function (pm) {
    return pm.id === existingPaymentMethod.id;
  })) {
    uniquePMs.unshift(existingPaymentMethod);
  }

  uniquePMs.sort(function (pm1, pm2) {
    // Put disabled PMs at the end
    if (getIsDisabled(pm1) && !getIsDisabled(pm2)) {
      return 1;
    } else if (getIsDisabled(pm2) && !getIsDisabled(pm1)) {
      return -1;
    } // If we've just added a PM, put it at the top of the list


    if (addedPaymentMethod) {
      if (addedPaymentMethod.id === pm1.id) {
        return -1;
      } else if (addedPaymentMethod.id === pm2.id) {
        return 1;
      }
    } // Put the PM that matches this recurring contribution just after the newly added


    if (existingPaymentMethod) {
      if (existingPaymentMethod.id === pm1.id) {
        return -1;
      } else if (existingPaymentMethod.id === pm2.id) {
        return 1;
      }
    }

    return 0;
  });
  return uniquePMs.map(function (pm) {
    var _pm$account;

    return {
      key: "pm-".concat(pm.id),
      title: (0,_lib_payment_method_label__WEBPACK_IMPORTED_MODULE_15__/* .getPaymentMethodName */ .d0)(pm),
      subtitle: (0,_lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_16__/* .getPaymentMethodMetadata */ .Og)(pm),
      icon: (0,_lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_16__/* .getPaymentMethodIcon */ .AM)(pm),
      paymentMethod: pm,
      disabled: getIsDisabled(pm),
      id: pm.id,
      CollectiveId: (_pm$account = pm.account) === null || _pm$account === void 0 ? void 0 : _pm$account.id
    };
  });
};

var useUpdatePaymentMethod = function useUpdatePaymentMethod(contribution) {
  var _useToasts = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_33__.useMutation)(updatePaymentMethodMutation, mutationOptions),
      _useMutation2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useMutation, 2),
      submitUpdatePaymentMethod = _useMutation2[0],
      loading = _useMutation2[1].loading;

  return {
    isSubmitting: loading,
    updatePaymentMethod: function () {
      var _updatePaymentMethod = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee(paymentMethod) {
        var hasUpdate, variables, errorMsg;
        return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                hasUpdate = !contribution.paymentMethod || paymentMethod.id !== contribution.paymentMethod.id;
                _context.prev = 1;

                if (!hasUpdate) {
                  _context.next = 7;
                  break;
                }

                variables = {
                  order: {
                    id: contribution.id
                  }
                };

                if (paymentMethod.service === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_12__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL) {
                  variables.paypalSubscriptionId = paymentMethod.paypalInfo.subscriptionId;
                } else {
                  variables.paymentMethod = {
                    id: paymentMethod.value ? paymentMethod.value.id : paymentMethod.id
                  };
                }

                _context.next = 7;
                return submitUpdatePaymentMethod({
                  variables: variables
                });

              case 7:
                addToast({
                  type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
                  message: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    id: "subscription.createSuccessUpdated",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Your recurring contribution has been "
                    }, {
                      "type": 8,
                      "value": "strong",
                      "children": [{
                        "type": 0,
                        "value": "updated"
                      }]
                    }, {
                      "type": 0,
                      "value": "."
                    }],
                    values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP
                  })
                });
                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_13__/* .getErrorFromGraphqlException */ .H1)(_context.t0).message;
                addToast({
                  type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                  message: errorMsg
                });
                return _context.abrupt("return", false);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }));

      function updatePaymentMethod(_x) {
        return _updatePaymentMethod.apply(this, arguments);
      }

      return updatePaymentMethod;
    }()
  };
};

var UpdatePaymentMethodPopUp = function UpdatePaymentMethodPopUp(_ref) {
  var _newPaymentMethodInfo;

  var contribution = _ref.contribution,
      onCloseEdit = _ref.onCloseEdit,
      loadStripe = _ref.loadStripe,
      account = _ref.account;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z)();

  var _useToasts2 = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .useToasts */ .e1)(),
      addToast = _useToasts2.addToast; // state management


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      showAddPaymentMethod = _useState[0],
      setShowAddPaymentMethod = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null),
      selectedPaymentMethod = _useState2[0],
      setSelectedPaymentMethod = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(true),
      loadingSelectedPaymentMethod = _useState3[0],
      setLoadingSelectedPaymentMethod = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null),
      stripe = _useState4[0],
      setStripe = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null),
      stripeElements = _useState5[0],
      setStripeElements = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null),
      newPaymentMethodInfo = _useState6[0],
      setNewPaymentMethodInfo = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null),
      addedPaymentMethod = _useState7[0],
      setAddedPaymentMethod = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false),
      addingPaymentMethod = _useState8[0],
      setAddingPaymentMethod = _useState8[1];

  var _useUpdatePaymentMeth = useUpdatePaymentMethod(contribution),
      isSubmitting = _useUpdatePaymentMeth.isSubmitting,
      updatePaymentMethod = _useUpdatePaymentMeth.updatePaymentMethod; // GraphQL mutations and queries


  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_33__.useQuery)(paymentMethodsQuery, {
    variables: {
      accountId: account.id,
      orderId: contribution.id
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__/* .API_V2_CONTEXT */ .T,
    fetchPolicy: 'network-only'
  }),
      data = _useQuery.data,
      refetch = _useQuery.refetch;

  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_33__.useMutation)(addCreditCardMutation, mutationOptions),
      _useMutation4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useMutation3, 1),
      submitAddPaymentMethod = _useMutation4[0];

  var _useMutation5 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_33__.useMutation)(confirmCreditCardMutation, mutationOptions),
      _useMutation6 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useMutation5, 1),
      submitConfirmPaymentMethodMutation = _useMutation6[0];

  var handleAddPaymentMethodResponse = /*#__PURE__*/function () {
    var _ref2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee2(response) {
      var paymentMethod, stripeError;
      return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              paymentMethod = response.paymentMethod, stripeError = response.stripeError;

              if (!stripeError) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", handleStripeError(paymentMethod, stripeError));

            case 5:
              return _context2.abrupt("return", handleSuccess(paymentMethod));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleAddPaymentMethodResponse(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleStripeError = /*#__PURE__*/function () {
    var _ref3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee3(paymentMethod, stripeError) {
      var message, response, stripe, result, _response;

      return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              message = stripeError.message, response = stripeError.response;

              if (response) {
                _context3.next = 5;
                break;
              }

              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: message
              });
              setAddingPaymentMethod(false);
              return _context3.abrupt("return", false);

            case 5:
              _context3.next = 7;
              return (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_17__/* .getStripe */ .d2)();

            case 7:
              stripe = _context3.sent;
              _context3.next = 10;
              return stripe.handleCardSetup(response.setupIntent.client_secret);

            case 10:
              result = _context3.sent;

              if (!result.error) {
                _context3.next = 17;
                break;
              }

              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: result.error.message
              });
              setAddingPaymentMethod(false);
              return _context3.abrupt("return", false);

            case 17:
              _context3.prev = 17;
              _context3.next = 20;
              return submitConfirmPaymentMethodMutation({
                variables: {
                  paymentMethod: {
                    id: paymentMethod.id
                  }
                }
              });

            case 20:
              _response = _context3.sent;
              return _context3.abrupt("return", handleSuccess(_response.data.confirmCreditCard.paymentMethod));

            case 24:
              _context3.prev = 24;
              _context3.t0 = _context3["catch"](17);
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: _context3.t0.message
              });
              setAddingPaymentMethod(false);
              return _context3.abrupt("return", false);

            case 29:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[17, 24]]);
    }));

    return function handleStripeError(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleSuccess = function handleSuccess(paymentMethod) {
    setAddingPaymentMethod(false);
    refetch();
    setAddedPaymentMethod(paymentMethod);
    setShowAddPaymentMethod(false);
    setLoadingSelectedPaymentMethod(true);
  }; // load stripe on mount


  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    loadStripe();
  }, []); // data handling

  var paymentMethods = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(data, 'account.paymentMethods', null);

  var existingPaymentMethod = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(data, 'order.paymentMethod', null);

  var filterPaymentMethodsParams = [paymentMethods, contribution, addedPaymentMethod, existingPaymentMethod];
  var paymentOptions = react__WEBPACK_IMPORTED_MODULE_9__.useMemo(function () {
    return sortAndFilterPaymentMethods.apply(void 0, filterPaymentMethodsParams);
  }, filterPaymentMethodsParams);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function () {
    if (!paymentOptions) {
      return;
    }

    if (selectedPaymentMethod === null && contribution.paymentMethod) {
      setSelectedPaymentMethod(lodash_first__WEBPACK_IMPORTED_MODULE_7___default()(paymentOptions.filter(function (option) {
        return option.id === contribution.paymentMethod.id;
      })));
    } else if (addedPaymentMethod) {
      setSelectedPaymentMethod(paymentOptions.find(function (option) {
        return option.id === addedPaymentMethod.id;
      }));
    }

    setLoadingSelectedPaymentMethod(false);
  }, [paymentOptions, addedPaymentMethod]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 50,
      px: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
        my: 2,
        fontSize: "12px",
        textTransform: "uppercase",
        color: "black.700",
        children: showAddPaymentMethod ? intl.formatMessage(messages.addPaymentMethod) : intl.formatMessage(messages.updatePaymentMethod)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
        flexGrow: 1,
        alignItems: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          width: "100%",
          mx: 2
        })
      }), showAddPaymentMethod ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_styled_icons_boxicons_regular_Lock__WEBPACK_IMPORTED_MODULE_36__/* .Lock */ .H, {
        size: 20
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        size: 24,
        onClick: function onClick() {
          return setShowAddPaymentMethod(true);
        },
        "data-cy": "recurring-contribution-add-pm-button",
        children: "+"
      })]
    }), showAddPaymentMethod ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
      px: 1,
      pt: 2,
      pb: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_AddPaymentMethod__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
        order: contribution,
        isSubmitting: isSubmitting,
        setNewPaymentMethodInfo: setNewPaymentMethodInfo,
        onStripeReady: function onStripeReady(_ref4) {
          var stripe = _ref4.stripe,
              stripeElements = _ref4.stripeElements;
          setStripe(stripe);
          setStripeElements(stripeElements);
        },
        onPaypalSuccess: /*#__PURE__*/function () {
          var _ref5 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee4(paypalPaymentMethod) {
            return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return updatePaymentMethod(paypalPaymentMethod);

                  case 2:
                    onCloseEdit();

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x5) {
            return _ref5.apply(this, arguments);
          };
        }()
      })
    }) : loadingSelectedPaymentMethod ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
      height: 100
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_StyledRadioList__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
      id: "PaymentMethod",
      name: "".concat(contribution.id, "-PaymentMethod"),
      keyGetter: "key",
      options: paymentOptions,
      onChange: setSelectedPaymentMethod,
      value: selectedPaymentMethod === null || selectedPaymentMethod === void 0 ? void 0 : selectedPaymentMethod.key,
      children: function children(_ref6) {
        var radio = _ref6.radio,
            _ref6$value = _ref6.value,
            title = _ref6$value.title,
            subtitle = _ref6$value.subtitle,
            icon = _ref6$value.icon;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(PaymentMethodBox, {
          minHeight: 50,
          py: 2,
          bg: "white.full",
          "data-cy": "recurring-contribution-pm-box",
          px: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
            alignItems: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
              as: "span",
              mr: 3,
              flexWrap: "wrap",
              children: radio
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_StyledFlex, {
              mr: 2,
              children: icon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
              flexDirection: "column",
              width: "100%",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                fontSize: "12px",
                fontWeight: subtitle ? 600 : 400,
                color: "black.900",
                overflowWrap: "anywhere",
                children: title
              }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "18px",
                color: "black.500",
                overflowWrap: "anywhere",
                children: subtitle
              })]
            })]
          })
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      flexGrow: 1 / 4,
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
        flexGrow: 1,
        alignItems: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          width: "100%"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      flexGrow: 1 / 4,
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 50,
      children: showAddPaymentMethod ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          buttonSize: "tiny",
          minWidth: 75,
          onClick: function onClick() {
            setNewPaymentMethodInfo(null);
            onCloseEdit();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          ml: 2,
          minWidth: 75,
          buttonSize: "tiny",
          buttonStyle: "secondary",
          disabled: newPaymentMethodInfo ? !((_newPaymentMethodInfo = newPaymentMethodInfo.value) !== null && _newPaymentMethodInfo !== void 0 && _newPaymentMethodInfo.complete) : true,
          type: "submit",
          loading: addingPaymentMethod,
          "data-cy": "recurring-contribution-submit-pm-button",
          onClick: /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee5() {
            var cardElement, _yield$stripe$createT, token, error, newStripePaymentMethod, newCreditCardInfo, res, errorMsg;

            return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    setAddingPaymentMethod(true);

                    if (stripe) {
                      _context5.next = 5;
                      break;
                    }

                    addToast({
                      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                      message: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                        id: "Stripe.Initialization.Error",
                        defaultMessage: [{
                          "type": 0,
                          "value": "There was a problem initializing the payment form. Please reload the page and try again."
                        }]
                      })
                    });
                    setAddingPaymentMethod(false);
                    return _context5.abrupt("return", false);

                  case 5:
                    cardElement = stripeElements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_10__.CardElement);
                    _context5.next = 8;
                    return stripe.createToken(cardElement);

                  case 8:
                    _yield$stripe$createT = _context5.sent;
                    token = _yield$stripe$createT.token;
                    error = _yield$stripe$createT.error;

                    if (!error) {
                      _context5.next = 14;
                      break;
                    }

                    addToast({
                      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                      message: error.message
                    });
                    return _context5.abrupt("return", false);

                  case 14:
                    newStripePaymentMethod = (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_17__/* .stripeTokenToPaymentMethod */ .kJ)(token);
                    newCreditCardInfo = lodash_merge__WEBPACK_IMPORTED_MODULE_5___default()(newStripePaymentMethod.data, lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(newStripePaymentMethod, ['token']));
                    _context5.prev = 16;
                    _context5.next = 19;
                    return submitAddPaymentMethod({
                      variables: {
                        creditCardInfo: newCreditCardInfo,
                        name: lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(newStripePaymentMethod, 'name'),
                        account: {
                          id: account.id
                        }
                      }
                    });

                  case 19:
                    res = _context5.sent;
                    return _context5.abrupt("return", handleAddPaymentMethodResponse(res.data.addCreditCard));

                  case 23:
                    _context5.prev = 23;
                    _context5.t0 = _context5["catch"](16);
                    errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_13__/* .getErrorFromGraphqlException */ .H1)(_context5.t0).message;
                    addToast({
                      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                      message: errorMsg
                    });
                    setAddingPaymentMethod(false);
                    return _context5.abrupt("return", false);

                  case 29:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, null, [[16, 23]]);
          })),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
            id: "save",
            defaultMessage: [{
              "type": 0,
              "value": "Save"
            }]
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          buttonSize: "tiny",
          minWidth: 75,
          onClick: onCloseEdit,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          ml: 2,
          minWidth: 75,
          buttonSize: "tiny",
          buttonStyle: "secondary",
          loading: isSubmitting,
          "data-cy": "recurring-contribution-update-pm-button",
          onClick: function onClick() {
            return updatePaymentMethod(selectedPaymentMethod).then(onCloseEdit);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
            id: "actions.update",
            defaultMessage: [{
              "type": 0,
              "value": "Update"
            }]
          })
        })]
      })
    })]
  });
};

UpdatePaymentMethodPopUp.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdatePaymentMethodPopUp",
  "props": {
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "contribution": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onCloseEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "loadStripe": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "account": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["ZP"] = ((0,_StripeProvider__WEBPACK_IMPORTED_MODULE_21__/* .withStripeLoader */ .kc)(UpdatePaymentMethodPopUp));

var _StyledFlex = (0,styled_components__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC).withConfig({
  displayName: "UpdatePaymentMethodPopUp___StyledFlex",
  componentId: "sc-1vnnhkx-1"
})({
  flexBasis: '26px'
});

/***/ }),

/***/ 26043:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wi": function() { return /* binding */ extractSeriesFromTimeSeries; },
/* harmony export */   "yc": function() { return /* binding */ alignSeries; },
/* harmony export */   "zz": function() { return /* binding */ formatAmountForLegend; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44908);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6557);
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_identity__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7739);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85564);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91966);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_6__);








/**
 * If a date doesn't have any data attached, API returns nothing.
 * But we need to make sure all series show 0 in these cases rather than `NaN` which
 * is shown by default by Apex charts.
 */
var alignSeries = function alignSeries(series) {
  var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
    return new Date(a.x) - new Date(b.x);
  };
  var indexesBySeries = series.map(function (singleSeries) {
    return singleSeries.data.map(function (d) {
      return d.x;
    });
  });

  var uniqueIndexes = lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default()(lodash_flatten__WEBPACK_IMPORTED_MODULE_5___default()(indexesBySeries));

  indexesBySeries.forEach(function (_, idx) {
    var missingIndexes = lodash_difference__WEBPACK_IMPORTED_MODULE_6___default()(uniqueIndexes, indexesBySeries[idx]);

    if (missingIndexes.length) {
      var _series$idx$data;

      (_series$idx$data = series[idx].data).push.apply(_series$idx$data, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(missingIndexes.map(function (x) {
        return {
          x: x,
          y: 0
        };
      })));
    }

    series[idx].data.sort(sort);
  });
  return series;
};
var extractSeriesFromTimeSeries = function extractSeriesFromTimeSeries(timeSeries, _ref) {
  var x = _ref.x,
      y = _ref.y,
      group = _ref.group,
      _ref$groupNameTransfo = _ref.groupNameTransformer,
      groupNameTransformer = _ref$groupNameTransfo === void 0 ? (lodash_identity__WEBPACK_IMPORTED_MODULE_2___default()) : _ref$groupNameTransfo;

  var groups = lodash_groupBy__WEBPACK_IMPORTED_MODULE_3___default()(timeSeries, group);

  var categories = Object.keys(groups);
  var series = categories.map(function (name) {
    var data = groups[name].map(function (value) {
      return {
        x: lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(value, x),
        y: lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(value, y)
      };
    });
    return {
      name: groupNameTransformer(name),
      data: data
    };
  });
  return {
    series: series,
    categories: categories
  };
};
var formatAmountForLegend = function formatAmountForLegend(value, currency, locale) {
  var isCompactNotation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Intl.NumberFormat(locale, {
    currency: currency,
    style: 'currency',
    notation: isCompactNotation ? 'compact' : 'standard'
  }).format(value);
};

/***/ }),

/***/ 450:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ ContributionTypes; }
/* harmony export */ });
/** Defines contributions types */
var ContributionTypes = {
  FINANCIAL_CUSTOM: 'FINANCIAL_CUSTOM',
  FINANCIAL_CRYPTO: 'FINANCIAL_CRYPTO',
  FINANCIAL_ONE_TIME: 'FINANCIAL_ONE_TIME',
  FINANCIAL_RECURRING: 'FINANCIAL_RECURRING',
  FINANCIAL_GOAL: 'FINANCIAL_GOAL',
  PRODUCT: 'PRODUCT',
  TICKET: 'TICKET',
  MEMBERSHIP: 'MEMBERSHIP',
  EVENT_PARTICIPATE: 'EVENT_PARTICIPATE',
  EVENT_PASSED: 'EVENT_PASSED',
  TIER_PASSED: 'TIER_PASSED',
  CHILD_COLLECTIVE: 'CHILD_COLLECTIVE',
  PROJECT: 'PROJECT',
  ARCHIVED_PROJECT: 'ARCHIVED_PROJECT'
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ContributionTypes)));

/***/ }),

/***/ 66465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 72004:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ CustomScrollbarCSS; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52015);

/**
 * A custom scrollbar for Chrome, more prettier than the system one.
 */

var CustomScrollbarCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)(["@media (pointer:fine){&::-webkit-scrollbar{height:8px;margin:0 16px;}&::-webkit-scrollbar-thumb{background:#d1d1d3;border-radius:16px;&:hover{background:#aaa;}}&::-webkit-scrollbar-track{background:#f2f3f4;border-radius:20px;}&::-webkit-scrollbar-button{color:white;}}"]);

/***/ })

}]);
//# sourceMappingURL=20-591121e83ee7b47b.js.map