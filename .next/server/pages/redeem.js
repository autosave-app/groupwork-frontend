"use strict";
(() => {
var exports = {};
exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 87819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Location)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "validator"
var external_validator_ = __webpack_require__(71564);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/Map.js






const tile2Long = (tile, zoom) => {
  // see https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#ECMAScript_.28JavaScript.2FActionScript.2C_etc..29
  return tile / Math.pow(2, zoom) * 360 - 180;
};

const tile2Lat = (tile, zoom) => {
  const n = Math.PI - 2 * Math.PI * tile / Math.pow(2, zoom);
  return 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
};

const long2tile = (long, zoom) => {
  return Math.floor((long + 180) / 360 * Math.pow(2, zoom));
};

const lat2tile = (lat, zoom) => {
  return Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
};

const makeBbox = ({
  x,
  y,
  zoom
}) => {
  // https://wiki.openstreetmap.org/wiki/Slippy_Map
  const south = tile2Lat(y + 1, zoom);
  const north = tile2Lat(y, zoom);
  const west = tile2Long(x, zoom);
  const east = tile2Long(x + 1, zoom);
  return `${west}%2C${south}%2C${east}%2C${north}`;
};

const Map = ({
  lat,
  long
}) => {
  const {
    0: src,
    1: prepareMap
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    const zoom = 16;
    const x = long2tile(long, zoom);
    const y = lat2tile(lat, zoom);
    const bbox = makeBbox({
      x,
      y,
      zoom
    }); // Set iframe url after component has mounted to prevent https://github.com/opencollective/opencollective/issues/2845

    const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&marker=${lat}%2C${long}&layers=ND`;
    prepareMap(src);
  }, [lat, long]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("iframe", {
      title: "Open Street Map",
      width: "100%",
      height: "100%",
      frameBorder: "0",
      scrolling: "no",
      src: src
    }), /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
      openInNewTab: true,
      href: `https://www.openstreetmap.org/?mlat=${lat}&amp;mlon=${long}#map=16/${lat}/${long}`,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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
/* harmony default export */ const components_Map = (Map);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./components/Location.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const LocationSection = external_styled_components_default().section.withConfig({
  displayName: "Location__LocationSection",
  componentId: "sc-f2g6cd-0"
})(["text-align:center;"]);

class Location extends (external_react_default()).Component {
  render() {
    if (!this.props.location) {
      return null;
    }

    const {
      name,
      address,
      lat,
      long,
      country
    } = this.props.location;

    if (name === 'Online') {
      if (address && (0,external_validator_.isURL)(address)) {
        return /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
          flexDirection: "Column",
          alignItems: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
            textAlign: "center",
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
              openInNewTabNoFollow: true,
              href: address,
              children: address
            })
          })
        });
      } else {
        return /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          textAlign: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "Location.online",
            defaultMessage: [{
              "type": 0,
              "value": "Online"
            }]
          })
        });
      }
    } else if (!name && !address && !lat && !long && !country) {
      return null;
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(LocationSection, {
      id: "location",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        margin: "30px 10px",
        children: [this.props.showTitle && /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Location"
        }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
          "font-size": "1.7rem",
          margin: "5px 0px",
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
          className: "address",
          color: "black.600",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLink/* default */.Z, {
            href: `https://www.openstreetmap.org/?mlat=${lat}&amp;mlon=${long}#map=16/${lat}/${long}`,
            openInNewTab: true,
            children: [address, country ? `, ${country}` : '']
          })
        })]
      }), lat && long && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "map",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Map, {
          lat: lat,
          long: long
        })
      })]
    });
  }

}

_defineProperty(Location, "defaultProps", {
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
/* harmony default export */ const components_Location = (Location);

/***/ }),

/***/ 39317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99591);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InputField__WEBPACK_IMPORTED_MODULE_4__]);
_InputField__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Text__WEBPACK_IMPORTED_MODULE_6__.P).withConfig({
  displayName: "RedeemForm__Description",
  componentId: "sc-1ptc7zr-0"
})(["color:#4e5052;font-size:1.3rem;line-height:1.5;margin:12px 0;"]);

class RedeemForm extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static getDerivedStateFromProps(nextProps, nextState) {
    const {
      LoggedInUser
    } = nextProps;
    const code = nextState.form.code || nextProps.code;

    if (LoggedInUser) {
      return {
        form: {
          code,
          email: LoggedInUser.email,
          name: LoggedInUser.collective.name
        }
      };
    } else {
      return {
        form: {
          code,
          email: nextState.form.email || nextProps.email,
          name: nextState.form.name || nextProps.name
        }
      };
    }
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
      email: {
        id: "Email",
        defaultMessage: [{
          "type": 0,
          "value": "Email"
        }]
      },
      name: {
        id: "Fields.name",
        defaultMessage: [{
          "type": 0,
          "value": "Name"
        }]
      },
      code: {
        id: "redeem.form.code.label",
        defaultMessage: [{
          "type": 0,
          "value": "Gift Card code"
        }]
      }
    });
    this.state = {
      form: {}
    };
  }

  handleChange(fieldname, value) {
    const {
      form
    } = this.state;
    form[fieldname] = value;
    this.setState({
      form
    });
    this.props.onChange(form);
  }

  render() {
    const {
      intl,
      LoggedInUser,
      loadingLoggedInUser
    } = this.props;
    const {
      code,
      email,
      name
    } = this.state.form;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Description, {
        children: [!LoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "redeem.card.info",
          defaultMessage: [{
            "type": 0,
            "value": "It's easy! Just enter your name, email address, and gift card code. We will create an account for you if you don't already have one. Then you'll be able to select the gift card balance as the payment method when making a contribution."
          }]
        }), LoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "redeem.card.authenticated",
          defaultMessage: [{
            "type": 0,
            "value": "You are currently logged in. Sign out if you want to redeem with a different account."
          }]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        flexDirection: "column",
        children: [loadingLoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          height: 156,
          mb: 2
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            label: intl.formatMessage(this.messages['name']),
            name: "name",
            type: "name",
            defaultValue: name,
            disabled: LoggedInUser,
            onChange: value => this.handleChange('name', value)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            label: intl.formatMessage(this.messages['email']),
            name: "email",
            type: "email",
            defaultValue: email,
            disabled: LoggedInUser,
            onChange: value => this.handleChange('email', value)
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          label: intl.formatMessage(this.messages['code']),
          name: "code",
          type: "text",
          defaultValue: code,
          onChange: value => this.handleChange('code', value)
        })]
      })]
    });
  }

}

RedeemForm.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "fieldname",
      "type": null
    }, {
      "name": "value",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "RedeemForm",
  "props": {
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "code": {
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
    "name": {
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(RedeemForm));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_5__.H5).withConfig({
  displayName: "RedeemSuccess__Title",
  componentId: "sc-ob1bdp-0"
})([""]);
const Instructions = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_5__.P).withConfig({
  displayName: "RedeemSuccess__Instructions",
  componentId: "sc-ob1bdp-1"
})(["font-size:1.2rem;color:#9d9fa3;"]);
const CheckCircleIcon = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1__.Check).withConfig({
  displayName: "RedeemSuccess__CheckCircleIcon",
  componentId: "sc-ob1bdp-2"
})(["color:#00b65c;border:1.3px solid #73e3ac;border-radius:20px;padding:10px;"]);

class RedeemSuccess extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      email
    } = this.props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        flexDirection: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
          justifyContent: "center",
          my: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CheckCircleIcon, {
            size: "40px"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          my: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Title, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "redeem.card.success.title",
              defaultMessage: [{
                "type": 0,
                "value": "You are one step away from supporting Collectives!"
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          my: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Instructions, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "redeem.card.success.instructions",
              defaultMessage: [{
                "type": 0,
                "value": "We’ve sent an email to "
              }, {
                "type": 1,
                "value": "email"
              }, {
                "type": 0,
                "value": " with instructions to verify your new Open Collective account and credit it with the amount of your gift card."
              }],
              values: {
                email: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("strong", {
                  children: email
                })
              }
            })
          })
        })]
      })
    });
  }

}

RedeemSuccess.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RedeemSuccess",
  "props": {
    "email": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedeemSuccess);

/***/ }),

/***/ 10732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ EditTag),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77192);
/* harmony import */ var _styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97881);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_icomoon_PriceTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21522);
/* harmony import */ var _styled_icons_icomoon_PriceTags__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_PriceTags__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55348);
/* harmony import */ var _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34487);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19156);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);

const _excluded = ["suggestedTags", "value", "onChange", "renderUpdatedTags", "defaultValue", "disabled"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const TagIcon = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_styled_icons_icomoon_PriceTags__WEBPACK_IMPORTED_MODULE_4__.PriceTags).withConfig({
  displayName: "StyledInputTags__TagIcon",
  componentId: "sc-3xnaz6-0"
})(["margin-right:4px;"]);
const EditTag = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).attrs({
  variant: 'rounded-right',
  tabIndex: 0
}).withConfig({
  displayName: "StyledInputTags__EditTag",
  componentId: "sc-3xnaz6-1"
})(["border:1px dashed;cursor:pointer;position:relative;padding:2px 10px 2px 6px;background-color:", ";border-color:", ";color:", ";margin-right:4px;margin-bottom:4px;&:not([disabled]){&:hover,&:focus{background-color:", ";border-color:", ";svg{color:", ";}}}&:focus{outline:0;}&[disabled]{cursor:not-allowed;background:#f0f1f2;}", ""], props => props.theme.colors.white.full, props => props.theme.colors.black[200], props => props.theme.colors.black[700], props => props.theme.colors.white.full, props => props.theme.colors.blue[500], props => props.theme.colors.blue[500], props => props.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["background-color:", ";border-color:", ";svg{color:", ";}color:", ";"], props => props.theme.colors.blue[50], props => props.theme.colors.blue[600], props => props.theme.colors.blue[600], props => props.theme.colors.black[900]));
const Input = styled_components__WEBPACK_IMPORTED_MODULE_7___default().input.withConfig({
  displayName: "StyledInputTags__Input",
  componentId: "sc-3xnaz6-2"
})(["font-size:12px;line-height:18px;border:0;margin-left:10px;outline:none;width:auto;::placeholder{color:", ";}"], props => props.theme.colors.black[400]);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu).withConfig({
  displayName: "StyledInputTags__InputWrapper",
  componentId: "sc-3xnaz6-3"
})(["position:sticky;top:0;padding:12px 16px;background-color:inherit;:not(:only-child){border-bottom:1px solid ", ";}"], props => props.theme.colors.black[300]);
const TagWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC).withConfig({
  displayName: "StyledInputTags__TagWrapper",
  componentId: "sc-3xnaz6-4"
})(["align-items:center;justify-content:space-between;:not(:first-child){border-top:1px solid ", ";}"], props => props.theme.colors.black[300]);
const TagActionButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default().button.withConfig({
  displayName: "StyledInputTags__TagActionButton",
  componentId: "sc-3xnaz6-5"
})(["cursor:pointer;text-align:center;background-color:transparent;border:none;padding:5px;line-height:inherit;&:disabled{cursor:not-allowed;}"]);
const AddTagButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(TagActionButton).withConfig({
  displayName: "StyledInputTags__AddTagButton",
  componentId: "sc-3xnaz6-6"
})(["&:not([disabled]){color:", ";&:hover,&:focus{color:", ";}}"], props => props.theme.colors.blue[400], props => props.theme.colors.blue[600]);
const DeleteTagButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(TagActionButton).withConfig({
  displayName: "StyledInputTags__DeleteTagButton",
  componentId: "sc-3xnaz6-7"
})(["color:", ";&:hover{color:", ";}"], props => props.theme.colors.black[400], props => props.theme.colors.black[600]);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  placeholder: {
    id: "StyledInputTags.Placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Create New Tag"
    }]
  },
  editLabel: {
    id: "StyledInputTags.EditLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Edit Tags"
    }]
  },
  addLabel: {
    id: "StyledInputTags.AddLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Add Tags"
    }]
  }
});

const getOptions = tags => {
  if (!tags || !tags.length) {
    return [];
  } else {
    return tags.map(tag => ({
      label: tag,
      value: tag
    }));
  }
};

const StyledInputTags = _ref => {
  let {
    suggestedTags,
    value,
    onChange,
    renderUpdatedTags,
    defaultValue,
    disabled
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const inputRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();
  const wrapperRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();
  const scrollerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [tags, setTags] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(getOptions(value || defaultValue));
  const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const availableSuggestedTags = suggestedTags?.filter(st => !tags.some(t => t.value === st));
  const handleClose = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => {
    if (isOpen) {
      setOpen(false);
    }
  }, [isOpen]);

  const addTag = tag => {
    const newTags = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()([...tags, {
      label: tag.toLowerCase(),
      value: tag.toLowerCase()
    }], 'value');

    setTags(newTags);
    onChange(newTags);
  };

  const handleToggleInput = () => {
    if (isOpen) {
      handleClose();
    } else {
      setOpen(true);
      setTimeout(() => inputRef?.current?.focus(), 50);
    }
  };

  const removeTag = (tag, update) => {
    const updatedTags = tags.filter(v => v.value !== tag);
    setTags(updatedTags);

    if (update) {
      onChange(updatedTags);
    }
  }; // Close when clicking outside


  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(wrapperRef, outside => {
    if (outside) {
      handleClose();
    }
  }); // Closes the modal upon the `ESC` key press.

  (0,_lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)({
    callback: handleClose,
    keyMatch: _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_9__/* .ESCAPE_KEY */ .O_
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_6__.Manager, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
      ref: wrapperRef,
      flexWrap: "wrap",
      children: [(renderUpdatedTags ? tags : getOptions(value))?.map(tag => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        variant: "rounded-right",
        mr: "4px",
        mb: "4px",
        color: disabled ? 'black.500' : 'black.700',
        closeButtonProps: {
          onClick: () => removeTag(tag.value, true),
          disabled
        },
        children: tag.label
      }, tag.value)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_6__.Reference, {
        children: ({
          ref
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
          ref: ref,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(EditTag, {
            "data-cy": "styled-input-tags-open",
            active: isOpen,
            onClick: handleToggleInput,
            disabled: disabled,
            onKeyDown: e => {
              if (e.key === ' ') {
                e.preventDefault();
                handleToggleInput();
              }
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(TagIcon, {
              size: "14px"
            }), ' ', tags?.length > 0 ? formatMessage(messages.editLabel) : formatMessage(messages.addLabel)]
          })
        })
      }), isOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_6__.Popper, {
        placement: "bottom",
        children: ({
          placement,
          ref,
          style
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
          "data-placement": placement,
          ref: ref,
          style: _objectSpread(_objectSpread({}, style), {}, {
            zIndex: 9999
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, _objectSpread(_objectSpread({
            m: 1,
            overflow: "auto",
            overflowY: "auto"
          }, props), {}, {
            ref: scrollerRef,
            boxShadow: "0px 4px 10px #C4C7CC",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(InputWrapper, {
              color: "black.400",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(TagIcon, {
                size: "16px"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(Input, {
                "data-cy": "styled-input-tags-input",
                disabled: disabled,
                placeholder: formatMessage(messages.placeholder),
                ref: inputRef,
                value: inputValue,
                onChange: e => setInputValue(e.target.value),
                onBlur: () => {
                  if (!availableSuggestedTags?.length) {
                    handleClose();
                  }
                },
                onKeyPress: e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const newTag = e.target.value.trim();

                    if (!newTag) {
                      return;
                    }

                    addTag(newTag);
                    setInputValue('');

                    if (!renderUpdatedTags) {
                      // Wait until new tag renders, otherwise we'll scroll to the second-last tag
                      requestAnimationFrame(() => scrollerRef.current?.scrollTo(0, Number.MAX_SAFE_INTEGER), 30);
                    }
                  }
                }
              })]
            }), (suggestedTags?.length || tags?.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
              flexGrow: "1",
              children: [!availableSuggestedTags?.length ? null : availableSuggestedTags.map(st => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(TagWrapper, {
                px: "16px",
                py: "8px",
                backgroundColor: "blue.50",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  type: "info",
                  variant: "rounded-right",
                  children: st
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(AddTagButton, {
                  "data-cy": `styled-input-tags-add-suggestion-${st}`,
                  disabled: disabled,
                  onClick: () => {
                    addTag(st); // When adding the last suggested tag, focus the input

                    setTimeout(() => inputRef?.current?.focus(), 50);
                  },
                  onBlur: () => {
                    if (st === suggestedTags[suggestedTags.length - 1]) {
                      handleToggleInput();
                    }
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_2__.Plus, {
                    size: "10px"
                  })
                })]
              }, st)), !renderUpdatedTags && tags.map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(TagWrapper, {
                px: "16px",
                py: "8px",
                autoFocus: true,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  variant: "rounded-right",
                  children: tag.label
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(DeleteTagButton, {
                  "data-cy": `styled-input-tags-remove-${tag.value}`,
                  disabled: disabled,
                  onClick: () => {
                    removeTag(tag.value);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3__.Times, {
                    size: "10px"
                  })
                })]
              }, tag.value))]
            })]
          }))
        })
      })]
    })
  });
};

StyledInputTags.defaultProps = {
  maxHeight: ['50vh', null, '30vh'],
  minWidth: '240px',
  renderUpdatedTags: true
};
StyledInputTags.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StyledInputTags",
  "props": {
    "maxHeight": {
      "defaultValue": {
        "value": "['50vh', null, '30vh']",
        "computed": false
      },
      "required": false
    },
    "minWidth": {
      "defaultValue": {
        "value": "'240px'",
        "computed": false
      },
      "required": false
    },
    "renderUpdatedTags": {
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
    "suggestedTags": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  },
  "composes": ["./StyledCard"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(StyledInputTags));

/***/ }),

/***/ 73540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97079);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1259);
/* harmony import */ var _components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(325);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69078);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11333);
/* harmony import */ var _components_gift_cards_CollectiveCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67645);
/* harmony import */ var _components_gift_cards_HappyBackground__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26886);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42352);
/* harmony import */ var _components_LinkCollective__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97619);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(29242);
/* harmony import */ var _components_RedeemForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39317);
/* harmony import */ var _components_RedeemSuccess__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(55626);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87268);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_13__, _components_Header__WEBPACK_IMPORTED_MODULE_17__, _components_RedeemForm__WEBPACK_IMPORTED_MODULE_20__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_13__, _components_Header__WEBPACK_IMPORTED_MODULE_17__, _components_RedeemForm__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const ShadowBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_components_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu).withConfig({
  displayName: "redeem__ShadowBox",
  componentId: "sc-1f7ihnr-0"
})(["box-shadow:0px 8px 16px rgba(20,20,20,0.12);"]);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_components_Text__WEBPACK_IMPORTED_MODULE_23__.H5).withConfig({
  displayName: "redeem__Subtitle",
  componentId: "sc-1f7ihnr-1"
})(["color:white;text-align:center;margin:0 auto;", ";", ";"], styled_system__WEBPACK_IMPORTED_MODULE_6__.fontSize, styled_system__WEBPACK_IMPORTED_MODULE_6__.maxWidth);

class RedeemPage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  static getInitialProps({
    query: {
      code,
      email,
      name,
      collectiveSlug
    }
  }) {
    return {
      collectiveSlug,
      code: code?.trim(),
      email: email?.trim(),
      name: name?.trim()
    };
  }

  constructor(props) {
    super(props);
    const {
      code,
      email,
      name
    } = props;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      loading: false,
      view: 'form',
      // form or success
      form: {
        code,
        email,
        name
      },
      LoggedInUser: undefined
    };
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
      'error.email.invalid': {
        id: "error.email.invalid",
        defaultMessage: [{
          "type": 0,
          "value": "Invalid email address"
        }]
      },
      'error.code.invalid': {
        id: "error.code.invalid",
        defaultMessage: [{
          "type": 0,
          "value": "Invalid Gift Card code"
        }]
      }
    });
  }

  async claimPaymentMethod() {
    this.setState({
      loading: true
    });
    const {
      code,
      email,
      name
    } = this.state.form;

    try {
      if (this.props.LoggedInUser) {
        await this.props.redeemPaymentMethod({
          variables: {
            code
          }
        });
        await this.props.refetchLoggedInUser();

        if (this.props.collectiveSlug === 'strapijs') {
          this.props.router.push('https://strapi.io/open-collective-gift-card-redeemed');
        } else {
          this.props.router.push({
            pathname: `/${this.props.collectiveSlug}/redeemed/${code}`
          });
        }

        return;
      } else {
        await this.props.redeemPaymentMethod({
          variables: {
            code,
            user: {
              email,
              name
            }
          }
        });
      } // TODO: need to know from API if an account was created or not
      // TODO: or refuse to create an account automatically and ask to sign in


      this.setState({
        loading: false,
        view: 'success'
      });
    } catch (e) {
      const error = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .getErrorFromGraphqlException */ .H1)(e).message;
      this.setState({
        loading: false,
        error
      });
    }
  }

  handleChange(form) {
    this.setState({
      form,
      error: null
    });
  }

  handleSubmit() {
    const {
      intl
    } = this.props;

    if (!this.props.LoggedInUser && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .isValidEmail */ .vV)(this.state.form.email)) {
      return this.setState({
        error: intl.formatMessage(this.messages['error.email.invalid'])
      });
    }

    if (lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.state, 'form.code', '').length !== 8) {
      return this.setState({
        error: intl.formatMessage(this.messages['error.code.invalid'])
      });
    }

    this.claimPaymentMethod();
  }

  renderHeroContent() {
    const {
      data
    } = this.props;

    if (!data || !data.loading && !data.Collective) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
          mt: 5,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_23__.H1, {
            color: "white.full",
            textAlign: "center",
            fontSize: ['3rem', null, '4rem'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "redeem.title",
              defaultMessage: [{
                "type": 0,
                "value": "Redeem Gift Card"
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
          mt: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(Subtitle, {
            fontSize: ['1.5rem', null, '2rem'],
            maxWidth: ['90%', '640px'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "redeem.subtitle.line1",
                defaultMessage: [{
                  "type": 0,
                  "value": "Open Collective helps communities - like open source projects, meetups and social movements - raise funds spend them transparently."
                }]
              })
            })
          })
        })]
      });
    } else if (data.loading) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        height: 400
      });
    } else {
      const collective = data.Collective;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_gift_cards_CollectiveCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        collective: collective,
        mt: 5,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_LinkCollective__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          collective: collective,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_23__.H1, {
            color: "black.900",
            fontSize: "3rem",
            lineHeight: "1em",
            wordBreak: "break-word",
            my: 2,
            textAlign: "center",
            children: collective.name
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_23__.P, {
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "redeem.fromCollective",
            defaultMessage: [{
              "type": 0,
              "value": "You're about to redeem a gift card, courtesy of "
            }, {
              "type": 1,
              "value": "collective"
            }],
            values: {
              collective: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("strong", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_LinkCollective__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                  collective: data.Collective
                })
              })
            }
          })
        })]
      });
    }
  }

  render() {
    const {
      code,
      email,
      name,
      LoggedInUser,
      loadingLoggedInUser,
      data
    } = this.props;
    const {
      form
    } = this.state;
    const collective = data && data.Collective;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
      className: "RedeemedPage",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        title: "Redeem Gift Card",
        description: "Use your gift card to support open source projects that you are contributing to.",
        LoggedInUser: LoggedInUser
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Body__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          collective: collective,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
            alignItems: "center",
            flexDirection: "column",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_gift_cards_HappyBackground__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              collective: collective,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
                children: this.renderHeroContent()
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
              alignItems: "center",
              flexDirection: "column",
              mt: -175,
              mb: 4,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                mt: 54,
                zIndex: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    background: "white",
                    borderRadius: "16px",
                    maxWidth: "400px",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(ShadowBox, {
                      py: "24px",
                      px: "32px",
                      children: [this.state.view === 'form' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_RedeemForm__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        code: code,
                        name: name,
                        email: email,
                        LoggedInUser: LoggedInUser,
                        loadingLoggedInUser: loadingLoggedInUser,
                        onChange: this.handleChange
                      }), this.state.view === 'success' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_RedeemSuccess__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        email: email
                      })]
                    })
                  }), this.state.view === 'form' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                    my: 4,
                    px: 2,
                    flexDirection: "column",
                    alignItems: "center",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                      buttonStyle: "primary",
                      buttonSize: "large",
                      onClick: this.handleSubmit,
                      loading: this.state.loading,
                      disabled: !form.code || this.props.loadingLoggedInUser,
                      mb: 2,
                      maxWidth: 335,
                      width: 1,
                      textTransform: "capitalize",
                      children: this.state.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                        id: "form.processing",
                        defaultMessage: [{
                          "type": 0,
                          "value": "processing"
                        }]
                      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                        id: "redeem.form.redeem.btn",
                        defaultMessage: [{
                          "type": 0,
                          "value": "redeem"
                        }]
                      })
                    }), this.state.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_23__.P, {
                      color: "red.500",
                      children: this.state.error
                    })]
                  })]
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})]
    });
  }

}

const redeemPageQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .gqlV1 */ .N
/* GraphQL */
`
  query RedeemPage($collectiveSlug: String!) {
    Collective(slug: $collectiveSlug) {
      id
      name
      type
      slug
      imageUrl
      backgroundImageUrl
      description
      settings
    }
  }
`;
const addRedeemPageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(redeemPageQuery, {
  skip: props => !props.collectiveSlug
});
const redeemPaymentMethodMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation RedeemPaymentMethod($code: String!, $user: UserInputType) {
    claimPaymentMethod(code: $code, user: $user) {
      id
      description
    }
  }
`;
const addRedeemPaymentMethodMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(redeemPaymentMethodMutation, {
  name: 'redeemPaymentMethod'
});
const addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .compose */ .qC)(addRedeemPageData, addRedeemPaymentMethodMutation);
RedeemPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { code, email, name, collectiveSlug } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "claimPaymentMethod",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "form",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleSubmit",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderHeroContent",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "RedeemPage",
  "props": {
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
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
    "redeemPaymentMethod": {
      "description": "",
      "type": {
        "name": "func"
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
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "code": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "collectiveSlug": {
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
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "loading": {
            "name": "bool",
            "required": false
          },
          "Collective": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": false
              },
              "backgroundImageUrl": {
                "name": "string",
                "required": false
              },
              "imageUrl": {
                "name": "string",
                "required": false
              },
              "name": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          }
        }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_24__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(addGraphql(RedeemPage)))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 72743:
/***/ ((module) => {

module.exports = require("@apollo/client/react/components");

/***/ }),

/***/ 95159:
/***/ ((module) => {

module.exports = require("@apollo/client/react/hoc");

/***/ }),

/***/ 13831:
/***/ ((module) => {

module.exports = require("@dnd-kit/core");

/***/ }),

/***/ 99565:
/***/ ((module) => {

module.exports = require("@dnd-kit/sortable");

/***/ }),

/***/ 92813:
/***/ ((module) => {

module.exports = require("@dnd-kit/utilities");

/***/ }),

/***/ 27943:
/***/ ((module) => {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ 48308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 18022:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronDown");

/***/ }),

/***/ 28054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronRight");

/***/ }),

/***/ 52160:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronUp");

/***/ }),

/***/ 51104:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Exit");

/***/ }),

/***/ 10054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/InfoCircle");

/***/ }),

/***/ 99812:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 9443:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Check");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 83514:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationCircle");

/***/ }),

/***/ 25730:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationTriangle");

/***/ }),

/***/ 86954:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/InfoCircle");

/***/ }),

/***/ 77192:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Plus");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 21522:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/PriceTags");

/***/ }),

/***/ 93974:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Clear");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 28992:
/***/ ((module) => {

module.exports = require("country-currency-emoji-flags");

/***/ }),

/***/ 69031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 12154:
/***/ ((module) => {

module.exports = require("lodash/clamp");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 98210:
/***/ ((module) => {

module.exports = require("lodash/has");

/***/ }),

/***/ 52626:
/***/ ((module) => {

module.exports = require("lodash/invert");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 77876:
/***/ ((module) => {

module.exports = require("lodash/isError");

/***/ }),

/***/ 86069:
/***/ ((module) => {

module.exports = require("lodash/isNil");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 63901:
/***/ ((module) => {

module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 32027:
/***/ ((module) => {

module.exports = require("lodash/partition");

/***/ }),

/***/ 84159:
/***/ ((module) => {

module.exports = require("lodash/pick");

/***/ }),

/***/ 20808:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 17809:
/***/ ((module) => {

module.exports = require("memoize-one");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 42042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 48580:
/***/ ((module) => {

module.exports = require("react-geosuggest");

/***/ }),

/***/ 13126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 35073:
/***/ ((module) => {

module.exports = require("react-scrollchor");

/***/ }),

/***/ 61929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 31325:
/***/ ((module) => {

module.exports = require("react-select/creatable");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 71564:
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ 85598:
/***/ ((module) => {

module.exports = import("react-animate-height");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,9156,7262,1433,2631,7619,2143,2903,9591,6886,672], () => (__webpack_exec__(73540)));
module.exports = __webpack_exports__;

})();