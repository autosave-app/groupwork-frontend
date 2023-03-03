"use strict";
exports.id = 2328;
exports.ids = [2328];
exports.modules = {

/***/ 11194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BD": () => (/* binding */ ContributorAvatar),
/* harmony export */   "DA": () => (/* binding */ GuestAvatar),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "u5": () => (/* binding */ IncognitoAvatar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82525);
/* harmony import */ var _lib_image_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89314);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["collective", "src", "type", "radius", "name"],
      _excluded2 = ["contributor", "radius"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const getInitials = name => name.split(' ').reduce((result, value) => result += value.slice(0, 1).toUpperCase(), '');

const StyledAvatar = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC).attrs(props => ({
  style: {
    backgroundImage: props.src ? `url(${props.src})` : null,
    backgroundSize: props.backgroundSize || 'cover',
    backgroundColor: props.backgroundColor
  }
})).withConfig({
  displayName: "Avatar__StyledAvatar",
  componentId: "sc-1bquuri-0"
})(["align-items:center;background-color:", ";color:", ";background-position:center center;background-repeat:no-repeat;border-radius:", ";", " font-weight:600;justify-content:center;overflow:hidden;width:64px;height:64px;flex-shrink:0;", " ", " ", ""], ({
  theme,
  type
}) => type === 'USER' || type === 'INDIVIDUAL' ? (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.100')({
  theme
}) : 'none', (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.400'), ({
  type
}) => (0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_5__/* .getAvatarBorderRadius */ .Qt)(type), styled_system__WEBPACK_IMPORTED_MODULE_3__.border, styled_system__WEBPACK_IMPORTED_MODULE_3__.color, styled_system__WEBPACK_IMPORTED_MODULE_3__.space, styled_system__WEBPACK_IMPORTED_MODULE_3__.layout);

const Avatar = _ref => {
  let {
    collective = null,
    src = undefined,
    type = 'USER',
    radius = 42,
    name = undefined
  } = _ref,
      styleProps = _objectWithoutProperties(_ref, _excluded);

  // Use collective object instead of props
  if (collective) {
    type = collective.type;
    name = collective.name;

    if (collective.isIncognito) {
      src = _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .defaultImage.ANONYMOUS */ .FM.ANONYMOUS;
    } else if (collective.isGuest && shouldUseDefaultGuestAvatar(collective.name)) {
      src = _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .defaultImage.GUEST */ .FM.GUEST;
    } else if (type === 'VENDOR') {
      src = _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .defaultImage.ORGANIZATION */ .FM.ORGANIZATION;
    } else {
      src = (0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_5__/* .getCollectiveImage */ .$T)(collective);
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(StyledAvatar, _objectSpread(_objectSpread({
    size: radius,
    type: type,
    src: src,
    title: name
  }, styleProps), {}, {
    children: !src && (type === 'USER' || type === 'INDIVIDUAL') && name && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
      children: getInitials(name)
    })
  }));
};

const shouldUseDefaultGuestAvatar = name => {
  return !name || name === 'Guest';
};
/**
 * Similar to `Avatar`, but builds from a Contributor instead of a collective
 */


const ContributorAvatar = _ref2 => {
  let {
    contributor,
    radius
  } = _ref2,
      styleProps = _objectWithoutProperties(_ref2, _excluded2);

  let image = null;

  if (contributor.isIncognito) {
    image = _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .defaultImage.ANONYMOUS */ .FM.ANONYMOUS;
  } else if (contributor.isGuest && shouldUseDefaultGuestAvatar(contributor.name)) {
    image = _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .defaultImage.GUEST */ .FM.GUEST;
  } else {
    image = (0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_5__/* .getCollectiveImage */ .$T)({
      slug: contributor.collectiveSlug,
      imageUrl: contributor.image
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(StyledAvatar, _objectSpread({
    size: radius,
    type: contributor.type,
    src: image,
    title: contributor.name
  }, styleProps));
};

/** A simple avatar for incognito users */
const IncognitoAvatar = avatarProps => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(StyledAvatar, _objectSpread(_objectSpread({}, avatarProps), {}, {
    type: _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.USER */ .eV.USER,
    src: _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .defaultImage.ANONYMOUS */ .FM.ANONYMOUS
  }));
};
/** A simple avatar for guest users */

const GuestAvatar = avatarProps => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(StyledAvatar, _objectSpread(_objectSpread({}, avatarProps), {}, {
    type: _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.USER */ .eV.USER,
    src: _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .defaultImage.GUEST */ .FM.GUEST
  }));
};
/** @component */

Avatar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Avatar",
  "props": {
    "collective": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "description": "Collective object",
      "type": {
        "name": "shape",
        "value": {
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
          },
          "image": {
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
      "required": false
    },
    "src": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Collective image url",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "type": {
      "defaultValue": {
        "value": "'USER'",
        "computed": false
      },
      "description": "Collective type",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.keys(CollectiveType)"
      },
      "required": false
    },
    "radius": {
      "defaultValue": {
        "value": "42",
        "computed": false
      },
      "description": "Avatar size",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "name": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Collective name",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "animationDuration": {
      "description": "Duration to transition size. Disabled if 0, null or undefined",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "backgroundSize": {
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
    "backgroundColor": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);
ContributorAvatar.__docgenInfo = {
  "description": "Similar to `Avatar`, but builds from a Contributor instead of a collective",
  "methods": [],
  "displayName": "ContributorAvatar",
  "props": {
    "contributor": {
      "description": "Collective object",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          },
          "image": {
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
          "isGuest": {
            "name": "bool",
            "required": false
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.keys(CollectiveType)",
            "required": false
          }
        }
      },
      "required": true
    },
    "radius": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "array"
        }]
      },
      "required": false
    }
  }
};
IncognitoAvatar.__docgenInfo = {
  "description": "A simple avatar for incognito users",
  "methods": [],
  "displayName": "IncognitoAvatar"
};
GuestAvatar.__docgenInfo = {
  "description": "A simple avatar for guest users",
  "methods": [],
  "displayName": "GuestAvatar"
};

/***/ }),

/***/ 69078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16010);



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Container",
  componentId: "sc-54vy6z-0"
})(["box-sizing:border-box;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__.flexbox, styled_system__WEBPACK_IMPORTED_MODULE_1__.background, styled_system__WEBPACK_IMPORTED_MODULE_1__.border, styled_system__WEBPACK_IMPORTED_MODULE_1__.shadow, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .clear */ .ZH, styled_system__WEBPACK_IMPORTED_MODULE_1__.color, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .cursor */ .oc, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .float */ .fz, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .overflow */ .tx, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .pointerEvents */ .kk, styled_system__WEBPACK_IMPORTED_MODULE_1__.position, styled_system__WEBPACK_IMPORTED_MODULE_1__.layout, styled_system__WEBPACK_IMPORTED_MODULE_1__.space, styled_system__WEBPACK_IMPORTED_MODULE_1__.typography, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .whiteSpace */ .d8, props => props.clearfix && `
      ::after {
        content: "";
        display: table;
        clear: both;
      }
    `);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ 16159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kC": () => (/* binding */ Flex),
/* harmony export */   "q": () => (/* binding */ boxProps),
/* harmony export */   "rj": () => (/* binding */ Grid),
/* harmony export */   "xu": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45284);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This file is a copy-paste from https://github.com/rebassjs/grid/blob/master/src/index.js.
 * See https://github.com/opencollective/opencollective/issues/2929 for more info.
 */



const boxProps = (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.compose)(styled_system__WEBPACK_IMPORTED_MODULE_2__.space, styled_system__WEBPACK_IMPORTED_MODULE_2__.color, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.typography, styled_system__WEBPACK_IMPORTED_MODULE_2__.flexbox, styled_system__WEBPACK_IMPORTED_MODULE_2__.grid);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Grid__Box",
  componentId: "sc-1b416rc-0"
})({
  boxSizing: 'border-box'
}, boxProps);
Box.displayName = 'Box';
Box.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().space)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().color)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().layout)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().typography)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().flexbox));
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Box).withConfig({
  displayName: "Grid__Flex",
  componentId: "sc-1b416rc-1"
})(props => ({
  display: 'flex',
  gap: props.gap
}), (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.compose)(styled_system__WEBPACK_IMPORTED_MODULE_2__.space, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.flexbox));
Flex.displayName = 'Flex';
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Grid",
  componentId: "sc-1b416rc-2"
})({
  boxSizing: 'border-box',
  display: 'grid',
  '> div': {
    'min-width': 0
  }
}, (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.compose)(styled_system__WEBPACK_IMPORTED_MODULE_2__.space, styled_system__WEBPACK_IMPORTED_MODULE_2__.grid, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.flexbox));

/***/ }),

/***/ 92129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35073);
/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollchor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // eslint-disable-line no-restricted-imports




class Link extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      isIframe: false
    };
    this.isHash = props.href && this.constructRoutePath(props.href).substr(0, 1) === '#';
  }

  componentDidMount() {
    this.setState({
      isIframe: window.self !== window.top
    });
  }

  constructRoutePath(href) {
    if (typeof href === 'string') {
      return href;
    } else if (href) {
      return href.pathname;
    } else {
      return '';
    }
  }

  render() {
    const {
      href,
      children,
      className,
      title,
      onClick,
      openInNewTab
    } = this.props;

    if (this.isHash) {
      const route = this.constructRoutePath(href);

      const afterAnimate = () => {
        if (window.history) {
          history.pushState(_objectSpread(_objectSpread({}, history.state), {}, {
            as: location.pathname + route
          }), undefined, route);
        }
      };

      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_3__.Scrollchor, {
        animate: this.props.animate,
        to: route.substr(1),
        className: className,
        disableHistory: true,
        afterAnimate: afterAnimate,
        children: children
      });
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(this.props, ['href', 'scroll'])), {}, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", _objectSpread(_objectSpread({
          className: className,
          title: title,
          onClick: onClick,
          "data-cy": this.props['data-cy']
        }, openInNewTab || this.state.isIframe ? {
          target: '_blank',
          rel: 'noopener noreferrer'
        } : null), {}, {
          children: children
        }))
      }));
    }
  }

}

Link.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "constructRoutePath",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "href",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "Link",
  "props": {
    "href": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "object"
        }]
      },
      "required": false
    },
    "target": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "animate": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "className": {
      "description": "",
      "type": {
        "name": "string"
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
    "onClick": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "openInNewTab": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "data-cy": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ }),

/***/ 87268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45284);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16010);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50529);
/* harmony import */ var _lib_theme_variants_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72991);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40486);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["loading", "as"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












/**
 * styled-component button using styled-system
 *
 * @see See [styled-system docs](https://github.com/jxnblk/styled-system/blob/master/docs/api.md) for usage of those props
 */
const StyledButtonContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "StyledButton__StyledButtonContent",
  componentId: "sc-dmson2-0"
})(["appearance:none;border:none;cursor:pointer;outline:0;border:1px solid;border-radius:100px;letter-spacing:-0.4px;font-weight:500;&:disabled{cursor:not-allowed;}&:focus{box-shadow:0px 0px 0px 2px #050505;}svg{vertical-align:middle;}", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], _lib_theme_variants_button__WEBPACK_IMPORTED_MODULE_7__/* .buttonStyle */ .jn, _lib_theme_variants_button__WEBPACK_IMPORTED_MODULE_7__/* .buttonSize */ .L8, styled_system__WEBPACK_IMPORTED_MODULE_4__.border, styled_system__WEBPACK_IMPORTED_MODULE_4__.color, styled_system__WEBPACK_IMPORTED_MODULE_4__.background, styled_system__WEBPACK_IMPORTED_MODULE_4__.flexbox, styled_system__WEBPACK_IMPORTED_MODULE_4__.space, styled_system__WEBPACK_IMPORTED_MODULE_4__.layout, styled_system__WEBPACK_IMPORTED_MODULE_4__.typography, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_5__/* .textTransform */ .Qx, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_5__/* .whiteSpace */ .d8, props => {
  if (props.asLink || props.isBorderless) {
    const baseActiveStyles = props.theme.buttons[props.buttonStyle]?.['&:active'] || {};
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["background:transparent;background-color:transparent;border:1px solid transparent !important;&:hover:not(:disabled):not(:active){background:", ";background-color:", ";}&:active{color:", ";background:", ";background-color:", ";}"], props.theme.colors.black[50], props.theme.colors.black[50], baseActiveStyles.color, baseActiveStyles.background, baseActiveStyles.backgroundColor);
  }
});
const StyledButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((_ref, ref) => {
  let {
    loading,
    as
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return (// TODO(Typescript): We have to hack the `as` prop because styled-components somehow types it as "never"
    !loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(StyledButtonContent, _objectSpread(_objectSpread({}, props), {}, {
      as: as,
      ref: ref
    })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(StyledButtonContent, _objectSpread(_objectSpread({}, props), {}, {
      as: as,
      onClick: undefined,
      ref: ref,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        size: "0.9em"
      })
    }))
  );
});
StyledButton.displayName = 'StyledButton';
StyledButton.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2___default().background)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2___default().border)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2___default().color)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2___default().flexbox)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2___default().layout)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2___default().space)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_2___default().typography)), {}, {
  /**
   * Based on the design system theme
   */
  buttonSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.keys(_lib_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].buttonSizes */ .Z.buttonSizes)), prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.keys(_lib_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].buttonSizes */ .Z.buttonSizes)))]),

  /**
   * Based on the design system theme
   */
  buttonStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.keys(_lib_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].buttons */ .Z.buttons)), prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.keys(_lib_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"].buttons */ .Z.buttons)))]),

  /**
   * Show a loading spinner on button
   */
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * @deprecated Please use `isBorderless`
   * If true, will display a link instead of a button
   */
  asLink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * If true, will display a link instead of a button
   */
  isBorderless: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
});
StyledButton.defaultProps = {
  buttonSize: 'medium',
  buttonStyle: 'standard',
  loading: false
};
/** @component */

StyledButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StyledButton",
  "props": {
    "buttonSize": {
      "defaultValue": {
        "value": "'medium'",
        "computed": false
      },
      "description": "Based on the design system theme",
      "type": {
        "name": "union",
        "value": [{
          "name": "enum",
          "computed": true,
          "value": "Object.keys(theme.buttonSizes)"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "enum",
            "computed": true,
            "value": "Object.keys(theme.buttonSizes)"
          }
        }]
      },
      "required": false
    },
    "buttonStyle": {
      "defaultValue": {
        "value": "'standard'",
        "computed": false
      },
      "description": "Based on the design system theme",
      "type": {
        "name": "union",
        "value": [{
          "name": "enum",
          "computed": true,
          "value": "Object.keys(theme.buttons)"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "enum",
            "computed": true,
            "value": "Object.keys(theme.buttons)"
          }
        }]
      },
      "required": false
    },
    "loading": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Show a loading spinner on button",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "asLink": {
      "description": "@deprecated Please use `isBorderless`\nIf true, will display a link instead of a button",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isBorderless": {
      "description": "If true, will display a link instead of a button",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  },
  "composes": ["@styled-system/prop-types"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledButton);

/***/ }),

/***/ 29925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ji": () => (/* binding */ fadeIn),
/* harmony export */   "MP": () => (/* binding */ slideInUp),
/* harmony export */   "Uh": () => (/* binding */ flicker),
/* harmony export */   "d7": () => (/* binding */ fadeInDown),
/* harmony export */   "nK": () => (/* binding */ rotating)
/* harmony export */ });
/* unused harmony export fadeInUp */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/**
 * A set of styled-components keyframes animations
 */

const rotating = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{opacity:0;}to{opacity:1;}"]);
const slideInUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{transform:translate3d(0,40px,0);}to{transform:translate3d(0,0,0);}"]);
const fadeInUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{opacity:0;transform:translate3d(0,40px,0);}to{opacity:1;transform:translate3d(0,0,0);}"]);
const fadeInDown = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{opacity:0;transform:translate3d(0,-40px,0);}to{opacity:1;transform:translate3d(0,0,0);}"]);
const flicker = ({
  minOpacity = 0
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["0%{opacity:1;}50%{opacity:", ";}100%{opacity:1;}"], minOpacity);

/***/ }),

/***/ 40486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_LoaderAlt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99812);
/* harmony import */ var _styled_icons_boxicons_regular_LoaderAlt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_LoaderAlt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29925);





/** A loading spinner using SVG + css animation. */

const StyledSpinner = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_styled_icons_boxicons_regular_LoaderAlt__WEBPACK_IMPORTED_MODULE_1__.LoaderAlt).withConfig({
  displayName: "StyledSpinner",
  componentId: "sc-12szhku-0"
})(["animation:", " 1s linear infinite;", ""], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_4__/* .rotating */ .nK, styled_system__WEBPACK_IMPORTED_MODULE_3__.space);
StyledSpinner.defaultProps = {
  title: 'Loading',
  size: '1em'
};
StyledSpinner.propTypes = {
  /** From styled-icons, this is a convenience for setting both width and height to the same value */
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)]),

  /** A title for accessibility */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledSpinner);

/***/ }),

/***/ 90998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dr": () => (/* binding */ Span),
/* harmony export */   "H1": () => (/* binding */ H1),
/* harmony export */   "H2": () => (/* binding */ H2),
/* harmony export */   "H3": () => (/* binding */ H3),
/* harmony export */   "H4": () => (/* binding */ H4),
/* harmony export */   "H5": () => (/* binding */ H5),
/* harmony export */   "P": () => (/* binding */ P),
/* harmony export */   "__": () => (/* binding */ Label),
/* harmony export */   "cK": () => (/* binding */ Strong)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16010);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const P = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.attrs(props => ({
  // Overrides default margin Y to avoid global styles
  mb: props.mb || props.my || props.m || 0,
  mt: props.mt || props.my || props.m || 0
})).withConfig({
  displayName: "Text__P",
  componentId: "sc-1gblpeb-0"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__.color, styled_system__WEBPACK_IMPORTED_MODULE_1__.display, styled_system__WEBPACK_IMPORTED_MODULE_1__.space, styled_system__WEBPACK_IMPORTED_MODULE_1__.typography, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .textTransform */ .Qx, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .whiteSpace */ .d8, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .overflowWrap */ .LI, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .wordBreak */ .lM, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .cursor */ .oc, props => props.truncateOverflow && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"]));
P.defaultProps = {
  fontSize: '14px',
  letterSpacing: '-0.4px',
  lineHeight: '1.15em'
};
const Span = P.withComponent('span');
Span.defaultProps = _objectSpread(_objectSpread({}, P.defaultProps), {}, {
  fontSize: 'inherit',
  lineHeight: 'inherit'
});
const Label = P.withComponent('label');
Label.defaultProps = {
  fontWeight: 'normal'
};
const Strong = P.withComponent('strong');
Strong.defaultProps = {
  fontWeight: 'bold'
};
const H1 = P.withComponent('h1');
H1.defaultProps = _objectSpread(_objectSpread({}, P.defaultProps), {}, {
  fontSize: '52px',
  fontWeight: 'bold',
  letterSpacing: '-1.2px',
  lineHeight: '56px',
  textAlign: 'left'
});
const H2 = P.withComponent('h2');
H2.defaultProps = _objectSpread(_objectSpread({}, P.defaultProps), {}, {
  fontSize: '40px',
  fontWeight: 'bold',
  letterSpacing: '-0.4px',
  lineHeight: '44px'
});
const H3 = P.withComponent('h3');
H3.defaultProps = _objectSpread(_objectSpread({}, P.defaultProps), {}, {
  fontSize: '32px',
  fontWeight: 'bold',
  letterSpacing: '-0.4px',
  lineHeight: '36px'
});
const H4 = P.withComponent('h4');
H4.defaultProps = _objectSpread(_objectSpread({}, P.defaultProps), {}, {
  fontSize: '24px',
  fontWeight: 'bold',
  letterSpacing: '-0.4px',
  lineHeight: '32px'
});
const H5 = P.withComponent('h5');
H5.defaultProps = _objectSpread(_objectSpread({}, P.defaultProps), {}, {
  fontSize: '20px',
  letterSpacing: '-0.4px',
  lineHeight: '24px',
  fontWeight: 500,
  color: 'black.900'
});

/***/ }),

/***/ 82525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B3": () => (/* binding */ CollectiveCategory),
/* harmony export */   "Dm": () => (/* binding */ AVATAR_WIDTH_RANGE),
/* harmony export */   "FM": () => (/* binding */ defaultImage),
/* harmony export */   "SQ": () => (/* binding */ OPENCOLLECTIVE_FOUNDATION_ID),
/* harmony export */   "Zs": () => (/* binding */ AccountTypesWithHost),
/* harmony export */   "am": () => (/* binding */ defaultBackgroundImage),
/* harmony export */   "bR": () => (/* binding */ IGNORED_TAGS),
/* harmony export */   "eV": () => (/* binding */ CollectiveType),
/* harmony export */   "kp": () => (/* binding */ OPENSOURCE_COLLECTIVE_ID),
/* harmony export */   "ng": () => (/* binding */ CollectiveTagsCategories),
/* harmony export */   "u4": () => (/* binding */ AVATAR_HEIGHT_RANGE)
/* harmony export */ });
/* harmony import */ var lodash_invert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52626);
/* harmony import */ var lodash_invert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_invert__WEBPACK_IMPORTED_MODULE_0__);

const CollectiveType = {
  COLLECTIVE: 'COLLECTIVE',
  EVENT: 'EVENT',
  USER: 'USER',
  // GraphQL v1
  INDIVIDUAL: 'INDIVIDUAL',
  // GraphQL v2
  ORGANIZATION: 'ORGANIZATION',
  BOT: 'BOT',
  PROJECT: 'PROJECT',
  FUND: 'FUND',
  VENDOR: 'VENDOR'
};
const AccountTypesWithHost = [CollectiveType.COLLECTIVE, CollectiveType.EVENT, CollectiveType.FUND, CollectiveType.PROJECT];
const defaultBackgroundImage = {
  COLLECTIVE: '/static/images/defaultBackgroundImageCollective.jpg',
  EVENT: '/static/images/defaultBackgroundImage.png',
  ORGANIZATION: '/static/images/defaultBackgroundImage.png',
  USER: '/static/images/defaultBackgroundImage.png'
};
const defaultImage = {
  ORGANIZATION: '/static/images/default-organization-logo.svg',
  COLLECTIVE: '/static/images/default-collective-logo.svg',
  CHAPTER: '/static/images/default-chapter-logo.svg',
  ANONYMOUS: '/static/images/default-anonymous-logo.svg',
  GUEST: '/static/images/default-guest-logo.svg',
  PLEDGED: '/static/images/default-pledged-logo.svg'
};
/** The ID of the open source collective */

const OPENSOURCE_COLLECTIVE_ID = ['staging', 'production'].includes("ci") ? 11004 : 9805;
/** The ID of the open collective foundation */

const OPENCOLLECTIVE_FOUNDATION_ID = ['staging', 'production'].includes("ci") ? 11049 : undefined;
/**
 * Map categories to their main tag.
 * Tags are translated in `components/I18nCollectiveTags.js`.
 */

const CollectiveCategory = {
  ASSOCIATION: 'association',
  COLLECTIVE: 'collective',
  CONFERENCE: 'conference',
  COOPERATIVE: 'coop',
  OPEN_SOURCE: 'open source',
  MEDIA: 'media',
  MEETUP: 'Meetup',
  MOVEMENT: 'movement',
  POLITICS: 'politics',
  TECH_MEETUP: 'Tech meetups',
  US_NONPROFIT: '501c3',
  EVENT: 'event',
  USER: 'user',
  ORGANIZATION: 'organization',
  FUND: 'FUND',
  PROJECT: 'project'
};
/** Map additional tags to categories */

const CollectiveTagsCategories = lodash_invert__WEBPACK_IMPORTED_MODULE_0___default()(CollectiveCategory);
const AVATAR_WIDTH_RANGE = [200, 3000];
const AVATAR_HEIGHT_RANGE = [200, 3000];
const IGNORED_TAGS = ['community', 'user'];

/***/ }),

/***/ 9269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ getEnvVar)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);


/** Retrieve variables set in the environment */
const getEnvVar = v =>  false ? 0 : lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(process, ['env', v]);

/***/ }),

/***/ 32651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ gqlV1),
/* harmony export */   "T": () => (/* binding */ API_V2_CONTEXT)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/** A wrapper arround `gql` to ensure linter applies API v1 schema */

const gqlV1 = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql;
/** To pass as a context to your query/mutation to use API v2 */

const API_V2_CONTEXT = {
  apiVersion: '2'
};

/***/ }),

/***/ 89314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$T": () => (/* binding */ getCollectiveImage),
/* harmony export */   "Qt": () => (/* binding */ getAvatarBorderRadius),
/* harmony export */   "Z_": () => (/* binding */ imagePreview)
/* harmony export */ });
/* unused harmony exports getBaseImagesUrl, resizeImage, isValidImageUrl */
/* harmony import */ var _env_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9269);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const getBaseImagesUrl = () => (0,_env_utils__WEBPACK_IMPORTED_MODULE_0__/* .getEnvVar */ .p)('IMAGES_URL');
function resizeImage(imageUrl, {
  width,
  height,
  query,
  baseUrl
}) {
  if (!imageUrl) {
    return null;
  }

  if (imageUrl.substr(0, 1) === '/') {
    return imageUrl;
  } // if image is a local image, we don't resize it with the proxy.


  if (imageUrl.substr(0, 4).toLowerCase() !== 'http') {
    return null;
  } // Invalid imageUrl;


  if (!query && imageUrl.match(/\.svg$/)) {
    return imageUrl;
  } // if we don't need to transform the image, no need to proxy it.


  let queryurl = '';

  if (query) {
    queryurl = encodeURIComponent(query);
  } else {
    if (width) {
      queryurl += `&width=${width}`;
    }

    if (height) {
      queryurl += `&height=${height}`;
    }
  }

  return `${getBaseImagesUrl() || baseUrl || ''}/proxy/images?src=${encodeURIComponent(imageUrl)}${queryurl}`;
}
function isValidImageUrl(src) {
  return src && (src.substr(0, 1) === '/' || src.substr(0, 4).toLowerCase() === 'http');
}
function imagePreview(src, defaultImage, options = {
  width: 640
}) {
  if (typeof options.width === 'string') {
    options.width = Number(options.width.replace(/rem/, '')) * 10;
  }

  if (typeof options.height === 'string') {
    options.height = Number(options.height.replace(/rem/, '')) * 10;
  }

  if (src) {
    return resizeImage(src, options);
  }

  if (isValidImageUrl(defaultImage)) {
    return defaultImage;
  }

  return null;
}
function getAvatarBorderRadius(collectiveType) {
  return collectiveType === 'USER' || collectiveType === 'INDIVIDUAL' ? '50%' : '25%';
}

function createCollectiveImageUrl(collective, params = {}) {
  const sections = [getBaseImagesUrl(), collective.slug];
  sections.push(params.name || 'avatar');

  for (const key of ['style', 'height', 'width']) {
    if (params[key]) {
      sections.push(params[key]);
    }
  }

  return `${sections.join('/')}.${params.format || 'png'}`;
}

function getCollectiveImage(collective, params = {}) {
  // If available use the imageUrl provided by the API
  if (collective.imageUrl) {
    return collective.imageUrl;
  }

  return createCollectiveImageUrl(collective, _objectSpread({}, params));
}

/***/ }),

/***/ 16010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LI": () => (/* binding */ overflowWrap),
/* harmony export */   "QX": () => (/* binding */ textDecoration),
/* harmony export */   "Qx": () => (/* binding */ textTransform),
/* harmony export */   "SI": () => (/* binding */ resize),
/* harmony export */   "VX": () => (/* binding */ listStyle),
/* harmony export */   "ZH": () => (/* binding */ clear),
/* harmony export */   "d8": () => (/* binding */ whiteSpace),
/* harmony export */   "fz": () => (/* binding */ float),
/* harmony export */   "kk": () => (/* binding */ pointerEvents),
/* harmony export */   "lM": () => (/* binding */ wordBreak),
/* harmony export */   "oc": () => (/* binding */ cursor),
/* harmony export */   "tx": () => (/* binding */ overflow)
/* harmony export */ });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file bundle custom `styled-system` css properties adapters that are not
 * included in the library. If a property in this file is made available in the
 * library, it should be removed from here.
 */

const textDecoration = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'textDecoration'
});
const textTransform = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'textTransform'
});
const whiteSpace = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'whiteSpace'
});
const wordBreak = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'wordBreak'
});
const overflowWrap = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'overflowWrap'
});
const cursor = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'cursor'
});
const overflow = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'overflow'
});
const resize = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'resize'
});
const pointerEvents = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'pointerEvents'
});
const float = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'float'
});
const clear = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'clear'
});
const listStyle = (0,styled_system__WEBPACK_IMPORTED_MODULE_0__.style)({
  prop: 'listStyle'
});

/***/ }),

/***/ 74200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const breakpoints = ['40em', //  640px - xsmall
'52em', //  832px - small
'64em', // 1024px - medium
'88em' // 1408px - large
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (breakpoints);

/***/ }),

/***/ 18490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Implement the colors from https://www.figma.com/file/1jyGC3MjtqI7uUsGf1447P/DS-03-%2F-Colors?node-id=1146%3A643
 */
const ocBrandColors = {
  900: '#0C2D66',
  800: '#1041A3',
  700: '#1153D6',
  600: '#1869F5',
  500: '#297EFF',
  400: '#5CA3FF',
  300: '#8FC7FF',
  200: '#C2E2FF',
  100: '#E5F3FF',
  50: '#F5FAFF'
};
const defaultColors = {
  /** White */
  white: {
    full: '#FFFFFF',
    transparent: {
      72: 'rgba(255, 255, 255, 0.72)',
      48: 'rgba(255, 255, 255, 0.48)'
    }
  },

  /** Black, neutral */
  black: {
    900: '#141414',
    800: '#313233',
    700: '#4E5052',
    600: '#757677',
    500: '#9D9FA3',
    400: '#C4C7CC',
    300: '#DCDEE0',
    200: '#E8E9EB',
    100: '#F0F1F2',
    50: '#F7F8FA',
    transparent: {
      90: 'rgba(19, 20, 20, 0.90)',
      80: 'rgba(19, 20, 20, 0.80)',
      40: 'rgba(19, 20, 20, 0.4)',
      20: 'rgba(19, 20, 20, 0.2)',
      8: 'rgba(19, 20, 20, 0.08)'
    }
  },

  /** Primary */
  primary: ocBrandColors,

  /** Info - right now the colors are the same as primary */
  blue: ocBrandColors,

  /** Success, Approve */
  green: {
    900: '#04391D',
    800: '#07582D',
    700: '#256643',
    600: '#128145',
    500: '#0EA755',
    400: '#51E094',
    300: '#90F0BD',
    200: '#BEFADA',
    100: '#E6FAEF',
    50: '#F2FFF8'
  },

  /** Warning, Alert */
  yellow: {
    900: '#5C5C0B',
    800: '#858510',
    700: '#ADAD23',
    600: '#CCCC18',
    500: '#E0E01B',
    400: '#EBEB2F',
    300: '#F5F576',
    200: '#FAFAAA',
    100: '#FFFFC2',
    50: '#FFFFEB'
  },

  /** Danger, Error */
  red: {
    900: '#521022',
    800: '#7A0F2B',
    700: '#A32143',
    600: '#CC2955',
    500: '#DC416A',
    400: '#F55882',
    300: '#FA82A2',
    200: '#FFC2D2',
    100: '#FFEBF0',
    50: '#FFF7F9'
  },
  purple: {
    900: '#180C66',
    800: '#3220A3',
    700: '#4B3BB8',
    600: '#5C48E0',
    500: '#6F5AFA',
    400: '#8C7AFF',
    300: '#B8ADFF',
    200: '#D7D1FF',
    100: '#EDEBFF',
    50: '#F6F5FF'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultColors);

/***/ }),

/***/ 13875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TK": () => (/* binding */ getTopToBottomGradient),
/* harmony export */   "aR": () => (/* binding */ toPx),
/* harmony export */   "x8": () => (/* binding */ emToPx)
/* harmony export */ });
/** Convert a number value to PX string */
function toPx(value) {
  return `${value}px`;
}
/**
 * Convert a value in `em` to pixels
 */

function emToPx(value) {
  return parseFloat(value) * 16;
}
function getTopToBottomGradient(startColor, endColor) {
  return `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%);`;
}

/***/ }),

/***/ 50529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_theme),
  "I": () => (/* binding */ generateTheme)
});

// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(42042);
// EXTERNAL MODULE: ./lib/theme/variants/button.ts
var variants_button = __webpack_require__(72991);
// EXTERNAL MODULE: ./lib/theme/breakpoints.ts
var breakpoints = __webpack_require__(74200);
// EXTERNAL MODULE: ./lib/theme/colors.ts
var theme_colors = __webpack_require__(18490);
;// CONCATENATED MODULE: ./lib/theme/spaces.ts
// using default space values from styled-system
// --------------------0--1--2--3---4---5---6----7----8---
const defaultSpaces = [0, 4, 8, 16, 32, 64, 128, 256, 512];
/* harmony default export */ const spaces = (defaultSpaces);
;// CONCATENATED MODULE: ./lib/theme/index.ts

 // Import defaults




const generateTheme = ({
  colors = theme_colors/* default */.Z,
  space = spaces
} = {}) => ({
  colors,
  space,
  breakpoints: breakpoints/* default */.Z,
  buttons: (0,variants_button/* getButtonStyles */.fW)({
    colors
  }),
  buttonSizes: (0,variants_button/* getButtonSizes */.EU)(),
  messageTypes: {
    white: {
      backgroundColor: colors.white.full,
      borderColor: colors.black[200]
    },
    dark: {
      backgroundColor: (0,external_polished_.transparentize)(0.2, colors.black[900]),
      borderColor: colors.black[900],
      color: colors.white.full
    },
    info: {
      backgroundColor: colors.blue[50],
      borderColor: colors.blue[400],
      color: colors.black[800]
    },
    success: {
      backgroundColor: colors.green[50],
      borderColor: colors.green[500],
      color: colors.black[800]
    },
    warning: {
      backgroundColor: colors.yellow[50],
      borderColor: colors.yellow[500],
      color: colors.black[800]
    },
    error: {
      backgroundColor: colors.red[50],
      borderColor: colors.red[500],
      color: colors.black[800]
    }
  },
  sizes: {
    navbarHeight: 68
  }
}); // Generate and export main theme

const theme = generateTheme();
/* harmony default export */ const lib_theme = (theme);

/***/ }),

/***/ 72991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EU": () => (/* binding */ getButtonSizes),
/* harmony export */   "L8": () => (/* binding */ buttonSize),
/* harmony export */   "fW": () => (/* binding */ getButtonStyles),
/* harmony export */   "jn": () => (/* binding */ buttonStyle)
/* harmony export */ });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13875);


 // Types

// Button size
const buttonSize = (0,styled_system__WEBPACK_IMPORTED_MODULE_1__.variant)({
  key: 'buttonSizes',
  prop: 'buttonSize'
});
const getButtonSizes = () => {
  return {
    xLarge: {
      fontSize: 17,
      lineHeight: '18px',
      paddingBottom: 22,
      paddingLeft: 48,
      paddingRight: 48,
      paddingTop: 22
    },
    large: {
      fontSize: '16px',
      lineHeight: '17px',
      paddingBottom: 18,
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 18
    },
    medium: {
      fontSize: '14px',
      lineHeight: '17px',
      paddingBottom: 14,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 14
    },
    small: {
      fontSize: '13px',
      lineHeight: '21px',
      paddingBottom: 11,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 11
    },
    tiny: {
      fontSize: '12px',
      lineHeight: '12px',
      letterSpacing: 0,
      paddingBottom: 5,
      paddingLeft: 14,
      paddingRight: 14,
      paddingTop: 5
    }
  };
}; // Button style

const buttonStyle = (0,styled_system__WEBPACK_IMPORTED_MODULE_1__.variant)({
  key: 'buttons',
  prop: 'buttonStyle'
});
/**
 * Generates a variant for a `buttonStyle`
 */

const generateButtonVariant = ({
  baseColor,
  baseGradientColor = baseColor,
  baseTextColor = '#FFFFFF',
  hoverColor,
  hoverGradientColor = hoverColor,
  activeColor,
  focusBorderColor = undefined,
  disabledColor,
  disabledTextColor = baseTextColor
}) => {
  const variantStyles = {
    background: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getTopToBottomGradient */ .TK)(baseColor, baseGradientColor),
    backgroundColor: baseColor,
    // Not all browsers support gradients, this is a fallback for them
    borderColor: baseColor,
    color: baseTextColor,
    '&:hover': {
      background: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getTopToBottomGradient */ .TK)(hoverColor, hoverGradientColor),
      backgroundColor: hoverColor,
      borderColor: hoverColor,
      color: baseTextColor
    },
    '&:focus': {
      borderColor: focusBorderColor
    },
    '&:active': {
      background: activeColor,
      backgroundColor: activeColor,
      borderColor: activeColor
    },
    '&:disabled': {
      background: disabledColor,
      backgroundColor: disabledColor,
      borderColor: disabledColor,
      color: disabledTextColor || baseTextColor
    }
  };

  if (focusBorderColor) {
    variantStyles['&:focus'] = {
      borderColor: focusBorderColor
    };
  }

  return variantStyles;
};
/**
 * Similar to generateButtonVariant, but to generate secondary buttons
 */


const generateSecondaryButtonVariant = ({
  baseColor,
  baseTextColor,
  activeTextColor = '#FFFFFF',
  hoverColor,
  activeColor,
  activeBackgroundColor = activeColor,
  focusColor = '#FFFFFF',
  disabledColor,
  disabledBorderColor = disabledColor
}) => {
  return {
    background: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    // Not all browsers support gradients, this is a fallback for them
    borderColor: baseColor,
    color: baseTextColor,
    '&:hover:not(:disabled):not(:active)': {
      background: hoverColor
    },
    '&:focus': {
      background: focusColor
    },
    '&:active': {
      background: activeBackgroundColor || activeColor,
      backgroundColor: activeBackgroundColor || activeColor,
      borderColor: activeColor,
      color: activeTextColor
    },
    '&:disabled': {
      borderColor: disabledBorderColor,
      color: disabledColor
    }
  };
};
/**
 * Generate buttons styles based on the colors defined in https://www.figma.com/file/1jyGC3MjtqI7uUsGf1447P/%5BDS%5D-01-Colors?node-id=1354%3A2
 */


const getButtonStyles = ({
  colors
}) => {
  return {
    // Base
    standard: {
      backgroundColor: 'white',
      borderColor: colors.black[300],
      color: colors.black[800],
      '&:hover,&:focus': {
        backgroundColor: colors.black[50],
        borderColor: colors.black[50]
      },
      '&:active': {
        background: colors.black[900],
        backgroundColor: colors.black[900],
        borderColor: colors.black[900],
        color: 'white'
      },
      '&:disabled': {
        backgroundColor: 'white',
        borderColor: colors.black[200],
        color: colors.black[300]
      }
    },
    primary: generateButtonVariant({
      baseColor: colors.primary[600],
      baseGradientColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.lighten)(0.025, colors.primary[700]),
      hoverColor: colors.primary[500],
      hoverGradientColor: colors.primary[600],
      activeColor: colors.primary[800],
      disabledColor: colors.primary[100]
    }),
    secondary: generateSecondaryButtonVariant({
      baseColor: colors.primary[500],
      baseTextColor: colors.primary[600],
      hoverColor: colors.primary[50],
      activeColor: colors.primary[700],
      disabledColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.desaturate)(0.4, colors.primary[200])
    }),
    // Warning (yellow)
    warning: generateButtonVariant({
      baseTextColor: colors.black[800],
      disabledTextColor: colors.black[400],
      baseColor: colors.yellow[500],
      baseGradientColor: colors.yellow[400],
      hoverColor: colors.yellow[400],
      hoverGradientColor: colors.yellow[300],
      activeColor: colors.yellow[600],
      disabledColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.desaturate)(0.2, colors.yellow[200])
    }),
    warningSecondary: generateSecondaryButtonVariant({
      baseColor: colors.yellow[600],
      baseTextColor: colors.black[800],
      activeTextColor: colors.black[800],
      hoverColor: colors.yellow[50],
      focusColor: colors.yellow[50],
      activeColor: colors.yellow[500],
      disabledColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.desaturate)(0.4, colors.yellow[200])
    }),
    // Danger (red)
    danger: generateButtonVariant({
      baseColor: colors.red[500],
      baseGradientColor: colors.red[600],
      hoverColor: colors.red[400],
      hoverGradientColor: colors.red[500],
      activeColor: colors.red[700],
      disabledColor: colors.red[100]
    }),
    dangerSecondary: generateSecondaryButtonVariant({
      baseColor: colors.red[400],
      baseTextColor: colors.red[600],
      hoverColor: colors.red[50],
      focusColor: colors.red[50],
      activeColor: colors.red[600],
      disabledColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.desaturate)(0.4, colors.red[200])
    }),
    // Success (green)
    success: generateButtonVariant({
      baseColor: colors.green[500],
      baseGradientColor: colors.green[600],
      hoverColor: colors.green[400],
      hoverGradientColor: colors.green[500],
      activeColor: colors.green[700],
      disabledColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.desaturate)(0.1, colors.green[200])
    }),
    successSecondary: generateSecondaryButtonVariant({
      baseColor: colors.green[400],
      baseTextColor: colors.green[700],
      hoverColor: colors.green[50],
      focusColor: colors.green[50],
      activeColor: colors.green[600],
      disabledColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.desaturate)(0.4, colors.green[200])
    }),
    // Dark
    dark: generateButtonVariant({
      baseColor: colors.black[800],
      baseGradientColor: colors.black[900],
      hoverColor: colors.black[700],
      hoverGradientColor: colors.black[800],
      activeColor: colors.black[900],
      focusBorderColor: '#FFFFFF',
      disabledColor: colors.black[100]
    }),
    // Purple
    purple: generateButtonVariant({
      baseColor: colors.purple[600],
      baseGradientColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.lighten)(0.025, colors.purple[700]),
      hoverColor: colors.purple[500],
      hoverGradientColor: colors.purple[600],
      activeColor: colors.purple[800],
      disabledColor: colors.purple[100]
    }),
    purpleSecondary: generateSecondaryButtonVariant({
      baseColor: colors.purple[500],
      baseTextColor: colors.purple[600],
      hoverColor: colors.purple[50],
      activeColor: colors.purple[700],
      disabledColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.desaturate)(0.4, colors.purple[200])
    }),
    // Borderless (link)
    borderless: generateSecondaryButtonVariant({
      baseColor: 'transparent',
      baseTextColor: colors.black[700],
      hoverColor: colors.black[50],
      activeColor: colors.black[900],
      disabledColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.desaturate)(0.4, colors.black[200]),
      disabledBorderColor: 'transparent'
    }),
    // Marketing
    marketing: generateButtonVariant({
      baseColor: colors.primary[900],
      baseTextColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.opacify)(0.9, colors.white.full),
      hoverColor: colors.primary[800],
      activeColor: colors.primary[900],
      disabledColor: colors.primary[100]
    }),
    marketingSecondary: generateSecondaryButtonVariant({
      baseColor: '#C3C6CB',
      baseTextColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.opacify)(0.9, colors.black[900]),
      hoverColor: '#F9FAFB',
      activeColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.opacify)(0.9, colors.black[900]),
      activeBackgroundColor: '#FFFFFF',
      activeTextColor: (0,polished__WEBPACK_IMPORTED_MODULE_0__.opacify)(0.9, colors.black[900]),
      disabledColor: '#4D4F51'
    })
  };
};

/***/ })

};
;