"use strict";
(() => {
var exports = {};
exports.id = 8493;
exports.ids = [8493];
exports.modules = {

/***/ 20167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51082);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const CollapsableText = ({
  text,
  maxLength
}) => {
  const [isCollapsed, setCollapsed] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);

  if (!text) {
    return null;
  } else if (text.length <= maxLength) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
      children: text
    });
  } else if (isCollapsed) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      children: [lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(text, {
        length: maxLength
      }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: "#",
        onClick: e => {
          e.preventDefault();
          e.stopPropagation();
          setCollapsed(false);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "ContributeCard.ReadMore",
          defaultMessage: [{
            "type": 0,
            "value": "Read more"
          }]
        })
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      children: [text, ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: "#",
        onClick: e => {
          e.preventDefault();
          e.stopPropagation();
          setCollapsed(true);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapsableText);

/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CollectiveThemeProvider)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12154);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50529);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * A special `ThemeProvider` that plugs the custom collective theme, defined by the color
 * from `collective.settings.collectivePage.primaryColor`.
 */


class CollectiveThemeProvider extends (react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      newPrimaryColor: null
    });

    _defineProperty(this, "adjustColorContrast", color => {
      const contrast = (0,polished__WEBPACK_IMPORTED_MODULE_5__.getContrast)(color, '#fff');

      if (contrast >= 7) {
        return color;
      } else {
        const contrastDiff = (7 - contrast) / 21;
        return (0,polished__WEBPACK_IMPORTED_MODULE_5__.darken)(contrastDiff, color);
      }
    });

    _defineProperty(this, "getTheme", memoize_one__WEBPACK_IMPORTED_MODULE_4___default()(primaryColor => {
      if (!primaryColor) {
        return _lib_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z;
      } else if (!(0,validator__WEBPACK_IMPORTED_MODULE_7__.isHexColor)(primaryColor)) {
        // eslint-disable-next-line no-console
        console.warn(`Invalid custom color: ${primaryColor}`);
        return _lib_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z;
      } else {
        const adjustedPrimary = this.adjustColorContrast(primaryColor);
        const luminance = (0,polished__WEBPACK_IMPORTED_MODULE_5__.getLuminance)(adjustedPrimary); // Allow a deviation to up to 20% of the default luminance. Don't apply this to really
        // dark colors (luminance < 0.05)

        const luminanceAdjustment = luminance < 0.05 ? -0.1 : luminance / 5;

        const adjustLuminance = value => (0,polished__WEBPACK_IMPORTED_MODULE_5__.setLightness)(lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(value + luminanceAdjustment, 0, 0.97), adjustedPrimary);

        return (0,_lib_theme__WEBPACK_IMPORTED_MODULE_8__/* .generateTheme */ .I)({
          colors: _objectSpread(_objectSpread({}, _lib_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"].colors */ .Z.colors), {}, {
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

    _defineProperty(this, "onPrimaryColorChange", lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(newPrimaryColor => {
      this.setState({
        newPrimaryColor
      });
    }, 2000));
  }

  render() {
    const {
      collective,
      children
    } = this.props;

    const primaryColor = this.state.newPrimaryColor || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, 'settings.collectivePage.primaryColor');

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
      theme: this.getTheme(primaryColor),
      children: typeof children === 'function' ? children({
        onPrimaryColorChange: this.onPrimaryColorChange
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: children
      })
    });
  }

}
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

/***/ 6121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12154);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const BackgroundBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledProgressBar__BackgroundBar",
  componentId: "sc-cpgzll-0"
})(["position:relative;", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_3__.layout, styled_system__WEBPACK_IMPORTED_MODULE_3__.color, styled_system__WEBPACK_IMPORTED_MODULE_3__.border);
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledProgressBar__ProgressBar",
  componentId: "sc-cpgzll-1"
})(["position:absolute;", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_3__.layout, styled_system__WEBPACK_IMPORTED_MODULE_3__.color, styled_system__WEBPACK_IMPORTED_MODULE_3__.border);
/**
 * A progress bar that displays the current advancement.
 */

const StyledProgressBar = ({
  percentage,
  color,
  backgroundColor,
  height,
  borderRadius
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(BackgroundBar, {
    bg: backgroundColor,
    height: height,
    borderRadius: borderRadius,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ProgressBar, {
      width: `${lodash_clamp__WEBPACK_IMPORTED_MODULE_0___default()(percentage, 0, 1) * 100}%`,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledProgressBar);

/***/ }),

/***/ 56127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(450);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(173);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19146);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
const _excluded = ["intl", "title", "type", "route", "buttonText", "children", "contributors", "stats", "hideContributors", "image", "disableCTA", "hideCTA", "onClickEdit", "tier", "isPreview"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














/** The main container */



const StyledContributeCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Contribute__StyledContributeCard",
  componentId: "sc-wvawme-0"
})(["display:flex;flex-direction:column;width:", "px;flex:0 0 ", "px;height:100%;border-radius:", "px;border:1px solid #dcdee0;background:white;transition:border-color 0.2s,box-shadow 0.2s,opacity 0.2s;&:hover{border:1px solid ", ";box-shadow:0px 8px 12px rgba(20,20,20,0.16);}"], _constants__WEBPACK_IMPORTED_MODULE_13__/* .CONTRIBUTE_CARD_WIDTH */ .TJ, _constants__WEBPACK_IMPORTED_MODULE_13__/* .CONTRIBUTE_CARD_WIDTH */ .TJ, _constants__WEBPACK_IMPORTED_MODULE_13__/* .CONTRIBUTE_CARD_BORDER_RADIUS */ .zx, props => props.theme.colors.primary[600]);
/** Tier card banner */

const CoverImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Contribute__CoverImage",
  componentId: "sc-wvawme-1"
})(["height:104px;background-repeat:no-repeat;background-size:cover;padding:16px;position:relative;border-radius:16px 16px 0 0;", ";"], props => {
  const primary = props.theme.colors.primary;
  const radial = `radial-gradient(circle, ${primary[300]} 0%, ${primary[800]} 100%), `;
  const image = props.image ? `url(${props.image}), ` : '';

  const applyGrayscale = (isDisabled, contributionType) => {
    if (isDisabled) {
      return 'filter: grayscale(0.75);';
    } else if (contributionType === _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED) {
      return 'filter: grayscale(0.50);';
    }
  };

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background:", " ", " ", ";", ""], image, radial, primary[500], applyGrayscale(props.isDisabled, props.contributionType));
});
/** Tier's description */

const Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Contribute__Description",
  componentId: "sc-wvawme-2"
})(["overflow-wrap:break-word;margin:8px 0;font-size:14px;letter-spacing:-0.2px;line-height:20px;height:100%;flex:1 1;color:#4e5052;"]);
/** Translations */

const I18nContributionType = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_CUSTOM */ .S.FINANCIAL_CUSTOM]: {
    id: "ContributionType.Custom",
    defaultMessage: [{
      "type": 0,
      "value": "Custom contribution"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_CRYPTO */ .S.FINANCIAL_CRYPTO]: {
    id: "ContributionType.Crypto",
    defaultMessage: [{
      "type": 0,
      "value": "Crypto contribution"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_ONE_TIME */ .S.FINANCIAL_ONE_TIME]: {
    id: "ContributionType.OneTime",
    defaultMessage: [{
      "type": 0,
      "value": "One-time contribution"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_RECURRING */ .S.FINANCIAL_RECURRING]: {
    id: "ContributionType.Recurring",
    defaultMessage: [{
      "type": 0,
      "value": "Recurring contribution"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_GOAL */ .S.FINANCIAL_GOAL]: {
    id: "ContributionType.Goal",
    defaultMessage: [{
      "type": 0,
      "value": "Goal"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE]: {
    id: "ContributionType.Event",
    defaultMessage: [{
      "type": 0,
      "value": "Event"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED]: {
    id: "ContributionType.EventPassed",
    defaultMessage: [{
      "type": 0,
      "value": "Past event"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TIER_PASSED */ .S.TIER_PASSED]: {
    id: "ContributionType.TierPassed",
    defaultMessage: [{
      "type": 0,
      "value": "Past tier"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PRODUCT */ .S.PRODUCT]: {
    id: "ContributionType.Product",
    defaultMessage: [{
      "type": 0,
      "value": "Product"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET]: {
    id: "ContributionType.Ticket",
    defaultMessage: [{
      "type": 0,
      "value": "Ticket"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.MEMBERSHIP */ .S.MEMBERSHIP]: {
    id: "ContributionType.Membership",
    defaultMessage: [{
      "type": 0,
      "value": "Membership"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.CHILD_COLLECTIVE */ .S.CHILD_COLLECTIVE]: {
    id: "ContributionType.ChildCollective",
    defaultMessage: [{
      "type": 0,
      "value": "Connected Collective"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PROJECT */ .S.PROJECT]: {
    id: "ContributionType.Project",
    defaultMessage: [{
      "type": 0,
      "value": "Project"
    }]
  },
  [_lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.ARCHIVED_PROJECT */ .S.ARCHIVED_PROJECT]: {
    id: "ContributionType.ArchivedProject",
    defaultMessage: [{
      "type": 0,
      "value": "Archived Project"
    }]
  }
});

const getContributeCTA = type => {
  switch (type) {
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.BtnEvent",
        defaultMessage: [{
          "type": 0,
          "value": "RSVP"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE:
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.BtnViewEvent",
        defaultMessage: [{
          "type": 0,
          "value": "View Event"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.CHILD_COLLECTIVE */ .S.CHILD_COLLECTIVE:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.SeeCollective",
        defaultMessage: [{
          "type": 0,
          "value": "View Collective"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PROJECT */ .S.PROJECT:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.SeeMore",
        defaultMessage: [{
          "type": 0,
          "value": "See More"
        }]
      });

    default:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "Contribute",
        defaultMessage: [{
          "type": 0,
          "value": "Contribute"
        }]
      });
  }
};

const getFooterHeading = type => {
  switch (type) {
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET:
    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.footer.ticket",
        defaultMessage: [{
          "type": 0,
          "value": "Attending"
        }]
      });

    case _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.footer.pastEvent",
        defaultMessage: [{
          "type": 0,
          "value": "Attended by"
        }]
      });

    default:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributeCard.latestActivity",
        defaultMessage: [{
          "type": 0,
          "value": "Latest activity by"
        }]
      });
  }
};

const getCTAButtonStyle = type => {
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


const ContributeCard = _ref => {
  let {
    intl,
    title,
    type,
    route,
    buttonText,
    children,
    contributors,
    stats,
    hideContributors,
    image,
    disableCTA,
    hideCTA,
    onClickEdit,
    tier,
    isPreview
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const totalContributors = stats && stats.all || contributors && contributors.length || 0;

  if (isPreview) {
    route = '#';
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(StyledContributeCard, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(CoverImage, {
      image: image,
      isDisabled: disableCTA,
      contributionType: type,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
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
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          fontSize: "20px",
          mt: 1,
          mb: 2,
          fontWeight: "bold",
          "data-cy": "contribute-title",
          color: "black.900",
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Description, {
          "data-cy": "contribute-description",
          children: children
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        children: [!disableCTA && !hideCTA && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          href: route,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            buttonStyle: getCTAButtonStyle(type),
            width: 1,
            mb: 2,
            mt: 3,
            "data-cy": "contribute-btn",
            children: buttonText || getContributeCTA(type)
          })
        }), !hideContributors && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mt: 3,
          height: 60,
          children: contributors && contributors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
              alignItems: "center",
              mt: 3,
              mb: 2,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
                color: "black.700",
                fontSize: "12px",
                lineHeight: "16px",
                fontWeight: "500",
                letterSpacing: "0.06em",
                pr: 2,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                children: getFooterHeading(type)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                flex: "1",
                borderStyle: "solid",
                borderColor: "#DCDEE0"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
              children: [contributors.slice(0, _constants__WEBPACK_IMPORTED_MODULE_13__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc).map(contributor => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
                mx: 1,
                children: contributor.collectiveSlug ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                  href: `/${contributor.collectiveSlug}`,
                  title: contributor.name,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* .ContributorAvatar */ .BD, {
                    contributor: contributor,
                    radius: 32
                  })
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* .ContributorAvatar */ .BD, {
                  contributor: contributor,
                  radius: 32,
                  title: contributor.name
                })
              }, contributor.id)), totalContributors > _constants__WEBPACK_IMPORTED_MODULE_13__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ml: 2,
                pt: "0.7em",
                fontSize: "11px",
                fontWeight: "bold",
                color: "black.600",
                children: ["+ ", totalContributors - _constants__WEBPACK_IMPORTED_MODULE_13__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc]
              })]
            })]
          })
        }), onClickEdit && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            buttonStyle: "secondary",
            width: 1,
            mb: 2,
            mt: 3,
            "data-cy": "edit-btn",
            onClick: onClickEdit,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ContributeCard));

/***/ }),

/***/ 12461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(450);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25896);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);

const _excluded = ["collective"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * A contribute card specialized to display a collective. Useful to display child collectives.
 */



const ContributeCollective = _ref => {
  let {
    collective
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const description = lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(collective.description, {
    length: 100
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Contribute__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getCollectivePageRoute */ .x0)(collective),
    type: _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__/* .ContributionTypes.CHILD_COLLECTIVE */ .S.CHILD_COLLECTIVE,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributeCollective);

/***/ }),

/***/ 9881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(450);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25896);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["intl", "collective", "contributors", "stats"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
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

const ContributeCrypto = _ref => {
  let {
    intl,
    collective,
    contributors,
    stats
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Contribute__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getCollectivePageRoute */ .x0)(collective)}/donate/crypto`,
    type: _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__/* .ContributionTypes.FINANCIAL_CRYPTO */ .S.FINANCIAL_CRYPTO,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ContributeCrypto));

/***/ }),

/***/ 35744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(450);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25896);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["intl", "collective", "contributors", "stats"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
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

const ContributeCustom = _ref => {
  let {
    intl,
    collective,
    contributors,
    stats
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Contribute__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getCollectivePageRoute */ .x0)(collective)}/donate`,
    type: _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__/* .ContributionTypes.FINANCIAL_CUSTOM */ .S.FINANCIAL_CUSTOM,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ContributeCustom));

/***/ }),

/***/ 77771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61975);
/* harmony import */ var _styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94997);
/* harmony import */ var _styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(450);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82114);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47162);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25896);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);

const _excluded = ["collective", "event"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


















const ContributeEvent = _ref => {
  let {
    collective,
    event
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    startsAt,
    endsAt
  } = event;

  const description = lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(event.description, {
    length: 100
  });

  const isTruncated = description && description.length < event.description.length;
  const isPassed = (0,_lib_events__WEBPACK_IMPORTED_MODULE_7__/* .isPastEvent */ .Up)(event);
  const takesMultipleDays = startsAt && endsAt && !(0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(startsAt).isSame(endsAt, 'day');
  const showYearOnStartDate = !endsAt || !takesMultipleDays ? 'numeric' : undefined; // only if there's no end date

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Contribute__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/events/${event.slug}`,
    type: isPassed ? _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_5__/* .ContributionTypes.EVENT_PASSED */ .S.EVENT_PASSED : _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_5__/* .ContributionTypes.EVENT_PARTICIPATE */ .S.EVENT_PARTICIPATE,
    contributors: event.contributors,
    stats: event.stats.backers,
    image: event.backgroundImageUrl,
    title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      as: _Link__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
      color: "black.800",
      href: `/${collective.slug}/events/${event.slug}`,
      children: event.name
    })
  }, props), {}, {
    children: [(startsAt || endsAt) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
      mb: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        fontSize: "12px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_2__.Calendar, {
          size: "1.3em",
          color: "#4E5052"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
          ml: 2,
          color: "black.700",
          children: [startsAt && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("time", {
            dateTime: startsAt,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedDate, {
              value: startsAt,
              month: "short",
              day: "numeric",
              year: showYearOnStartDate
            })
          }), takesMultipleDays && ' → ', (takesMultipleDays || !startsAt && endsAt) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("time", {
            dateTime: endsAt,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedDate, {
              value: endsAt,
              month: "short",
              day: "numeric",
              year: "numeric"
            })
          })]
        })]
      }), startsAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        fontSize: "12px",
        mt: 1,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_3__.Clock, {
          size: "1.3em",
          color: "#4E5052"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
          ml: 2,
          color: "black.700",
          children: !takesMultipleDays ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedDate, {
              value: startsAt,
              hour: "2-digit",
              minute: "2-digit"
            }), endsAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
              children: [`-`, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedDate, {
                value: endsAt,
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short"
              })]
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedDate, {
            value: startsAt,
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short"
          })
        })]
      })]
    }), description, isTruncated && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Link__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      href: `/${collective.slug}/events/${event.slug}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
        textTransform: "capitalize",
        whiteSpace: "nowrap",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributeEvent);

/***/ }),

/***/ 55350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(450);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25896);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51082);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

const _excluded = ["collective", "project"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * A contribute card specialized to display a Project.
 */



const ContributeProject = _ref => {
  let {
    collective,
    project
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const description = lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(project.description, {
    length: 100
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Contribute__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getCollectivePageRoute */ .x0)(collective)}/projects/${project.slug}`,
    type: project.isArchived ? _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__/* .ContributionTypes.ARCHIVED_PROJECT */ .S.ARCHIVED_PROJECT : _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_2__/* .ContributionTypes.PROJECT */ .S.PROJECT,
    contributors: project.contributors,
    stats: project.stats.backers,
    image: project.backgroundImageUrl,
    title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      as: _Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
      color: "black.800",
      href: `/${collective.slug}/projects/${project.slug}`,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributeProject);

/***/ }),

/***/ 78826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(450);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80642);
/* harmony import */ var _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12568);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17632);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47162);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62131);
/* harmony import */ var _lib_tier_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36648);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);
/* harmony import */ var _CollapsableText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20167);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51082);
/* harmony import */ var _StyledProgressBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6121);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var _Contribute__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(56127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_18__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_18__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const _excluded = ["intl", "collective", "tier", "isPreview"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }























const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
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

const getContributionTypeFromTier = (tier, isPassed) => {
  if (isPassed) {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TIER_PASSED */ .S.TIER_PASSED;
  } else if ((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(tier.goal) > 0) {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_GOAL */ .S.FINANCIAL_GOAL;
  } else if (tier.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_5__/* .TierTypes.PRODUCT */ .x$.PRODUCT) {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.PRODUCT */ .S.PRODUCT;
  } else if (tier.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_5__/* .TierTypes.TICKET */ .x$.TICKET) {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.TICKET */ .S.TICKET;
  } else if (tier.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_5__/* .TierTypes.MEMBERSHIP */ .x$.MEMBERSHIP) {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.MEMBERSHIP */ .S.MEMBERSHIP;
  } else if (tier.interval) {
    if (tier.interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible) {
      return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_CUSTOM */ .S.FINANCIAL_CUSTOM;
    } else {
      return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_RECURRING */ .S.FINANCIAL_RECURRING;
    }
  } else {
    return _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_ONE_TIME */ .S.FINANCIAL_ONE_TIME;
  }
};

const TierTitle = ({
  collective,
  tier
}) => {
  const name = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .capitalize */ .kC)(tier.name);

  if (!tier.useStandalonePage) {
    return name;
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "ContributeTier.GoToPage",
        defaultMessage: [{
          "type": 0,
          "value": "Go to full details page"
        }]
      }),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        as: _Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tier.legacyId || tier.id}`,
        color: "black.900",
        hoverColor: "black.900",
        underlineOnHover: true,
        children: name
      })
    });
  }
};

const canContribute = (collective, LoggedInUser) => {
  if (!collective.isActive) {
    return false;
  } else if (collective.type === 'EVENT') {
    return !(0,_lib_events__WEBPACK_IMPORTED_MODULE_7__/* .isPastEvent */ .Up)(collective) || Boolean(LoggedInUser.isAdminOfCollectiveOrHost(collective));
  } else {
    return true;
  }
};

const ContributeTier = _ref => {
  let {
    intl,
    collective,
    tier,
    isPreview
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
  const {
    stats
  } = tier;
  const currency = tier.currency || collective.currency;
  const isFlexibleAmount = tier.amountType === 'FLEXIBLE';
  const isFlexibleInterval = tier.interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible;
  const minAmount = isFlexibleAmount ? tier.minimumAmount : tier.amount;
  const amountRaised = stats?.[tier.interval && !isFlexibleInterval ? 'totalRecurringDonations' : 'totalDonated'] || 0;
  const tierIsExpired = (0,_lib_tier_utils__WEBPACK_IMPORTED_MODULE_9__/* .isTierExpired */ .l_)(tier);
  const tierType = getContributionTypeFromTier(tier, tierIsExpired);
  const hasNoneLeft = stats?.availableQuantity === 0;
  const canContributeToCollective = canContribute(collective, LoggedInUser);
  const isDisabled = !canContributeToCollective || tierIsExpired || hasNoneLeft;
  const tierLegacyId = tier.legacyId || tier.id;
  let description = tier.description;

  if (!tier.description) {
    description = intl.formatMessage(messages.fallbackDescription, {
      minAmount: minAmount || 0,
      tierName: tier.name,
      minAmountWithCurrency: minAmount && (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatCurrency */ .xG)(minAmount, currency, {
        locale: intl.locale
      }),
      interval: tier.interval ?? ''
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Contribute__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    route: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tierLegacyId}/checkout`,
    title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(TierTitle, {
      collective: collective,
      tier: tier
    }),
    type: tierType,
    buttonText: tier.button,
    contributors: tier.contributors,
    stats: stats?.contributors,
    "data-cy": "contribute-card-tier",
    isPreview: isPreview,
    disableCTA: !isPreview && isDisabled,
    tier: tier,
    collective: collective
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        children: [tier.maxQuantity > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
          fontSize: "1.1rem",
          color: "#e69900",
          textTransform: "uppercase",
          fontWeight: "500",
          letterSpacing: "1px",
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "tier.limited",
            values: {
              maxQuantity: tier.maxQuantity,
              availableQuantity: (stats?.availableQuantity ?? tier.availableQuantity) || 0
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
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
          mb: 2,
          lineHeight: "22px",
          children: tier.useStandalonePage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: [lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(description, {
              length: 150
            }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              as: _Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
              whiteSpace: "nowrap",
              href: isPreview ? '#' : `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tierLegacyId}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "ContributeCard.ReadMore",
                defaultMessage: [{
                  "type": 0,
                  "value": "Read more"
                }]
              })
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_CollapsableText__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            text: description,
            maxLength: 150
          })
        }), tierType === _lib_constants_contribution_types__WEBPACK_IMPORTED_MODULE_3__/* .ContributionTypes.FINANCIAL_GOAL */ .S.FINANCIAL_GOAL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          mb: 1,
          mt: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "12px",
            color: "black.600",
            fontWeight: "400",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
                amount: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                  amountStyles: {
                    fontWeight: '700',
                    color: 'black.700'
                  },
                  amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(amountRaised),
                  currency: currency,
                  precision: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPrecisionFromAmount */ .vx)((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(amountRaised))
                }),
                goalWithInterval: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                  amountStyles: {
                    fontWeight: '700',
                    color: 'black.700'
                  },
                  amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(tier.goal),
                  currency: currency,
                  interval: tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible ? tier.interval : null,
                  precision: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPrecisionFromAmount */ .vx)((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(tier.goal))
                })
              }
            }), ` (${Math.round(amountRaised / (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(tier.goal) * 100)}%)`]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
            mt: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledProgressBar__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              percentage: amountRaised / (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(tier.goal)
            })
          })]
        })]
      }), !isDisabled && (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(minAmount) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
        mt: 3,
        color: "black.700",
        children: [isFlexibleAmount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
          display: "block",
          fontSize: "10px",
          textTransform: "uppercase",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "ContributeTier.StartsAt",
            defaultMessage: [{
              "type": 0,
              "value": "Starts at"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
          display: "block",
          "data-cy": "amount",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(minAmount),
            interval: tier.interval && tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible ? tier.interval : null,
            currency: currency,
            amountStyles: {
              fontSize: '24px',
              lineHeight: '32px',
              fontWeight: 'bold',
              color: 'black.900'
            },
            precision: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPrecisionFromAmount */ .vx)((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .graphqlAmountValueInCents */ .kJ)(minAmount))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(ContributeTier));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M7": () => (/* binding */ PAYMENT_FLOW),
/* harmony export */   "Ss": () => (/* binding */ STEPS),
/* harmony export */   "eY": () => (/* binding */ CRYPTO_CURRENCIES)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56562);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const STEPS = {
  PROFILE: 'profile',
  DETAILS: 'details',
  PAYMENT: 'payment',
  SUMMARY: 'summary',
  SUCCESS: 'success',
  CHECKOUT: 'checkout'
};
const PAYMENT_FLOW = {
  CRYPTO: 'crypto'
};
const CRYPTO_CURRENCIES = [{
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BTC (Bitcoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BTC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BTC (Bitcoin)"
    })]
  }),
  labelWithoutImage: 'BTC (Bitcoin)',
  value: 'BTC',
  minDonation: 0.00001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ETH (Ethereum)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ETH.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ETH (Ethereum)"
    })]
  }),
  labelWithoutImage: 'ETH (Ethereum)',
  value: 'ETH',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BCH (Bitcoin Cash)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BCH.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BCH (Bitcoin Cash)"
    })]
  }),
  labelWithoutImage: 'BCH (Bitcoin Cash)',
  value: 'BCH',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LTC (Litecoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LTC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LTC (Litecoin)"
    })]
  }),
  labelWithoutImage: 'LTC (Litecoin)',
  value: 'LTC',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ZEC (Zcash)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ZEC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ZEC (Zcash)"
    })]
  }),
  labelWithoutImage: 'ZEC (Zcash)',
  value: 'ZEC',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LINK (Chainlink)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LINK.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LINK (Chainlink)"
    })]
  }),
  labelWithoutImage: 'LINK (Chainlink)',
  value: 'LINK',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BAT (Basic Attention Token)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BAT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BAT (Basic Attention Token)"
    })]
  }),
  labelWithoutImage: 'BAT (Basic Attention Token)',
  value: 'BAT',
  minDonation: 1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "DAI (Dai)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/DAI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "DAI (Dai)"
    })]
  }),
  labelWithoutImage: 'DAI (Dai)',
  value: 'DAI',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "OXT (Orchid)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/OXT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "OXT (Orchid)"
    })]
  }),
  labelWithoutImage: 'OXT (Orchid)',
  value: 'OXT',
  minDonation: 1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "STORJ (Storj)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/STORJ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "STORJ (Storj)"
    })]
  }),
  labelWithoutImage: 'STORJ (Storj)',
  value: 'STORJ',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "AMP (Amp)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/AMP.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "AMP (Amp)"
    })]
  }),
  labelWithoutImage: 'AMP (Amp)',
  value: 'AMP',
  minDonation: 10
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ZRX (Ox)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ZRX.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ZRX (Ox)"
    })]
  }),
  labelWithoutImage: 'ZRX (Ox)',
  value: 'ZRX',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "DOGE (Dogecoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/DOGE.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "DOGE (Dogecoin)"
    })]
  }),
  labelWithoutImage: 'DOGE (Dogecoin)',
  value: 'DOGE',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "COMP (Compound)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/COMP.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "COMP (Compound)"
    })]
  }),
  labelWithoutImage: 'COMP (Compound)',
  value: 'COMP',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SNX (Synthetix)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SNX.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SNX (Synthetix)"
    })]
  }),
  labelWithoutImage: 'SNX (Synthetix)',
  value: 'SNX',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "AAVE (Aave)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/AAVE.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "AAVE (Aave)"
    })]
  }),
  labelWithoutImage: 'AAVE (Aave)',
  value: 'AAVE',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "GRT (The Graph)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/GRT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "GRT (The Graph)"
    })]
  }),
  labelWithoutImage: 'GRT (The Graph)',
  value: 'GRT',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BNT (Bancor)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BNT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BNT (Bancor)"
    })]
  }),
  labelWithoutImage: 'BNT (Bancor)',
  value: 'BNT',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SUSHI (SushiSwap)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SUSHI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SUSHI (SushiSwap)"
    })]
  }),
  labelWithoutImage: 'SUSHI (SushiSwap)',
  value: 'SUSHI',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "UNI (Uniswap)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/UNI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "UNI (Uniswap)"
    })]
  }),
  labelWithoutImage: 'UNI (Uniswap)',
  value: 'UNI',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MATIC (Polygon)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MATIC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MATIC (Polygon)"
    })]
  }),
  labelWithoutImage: 'MATIC (Polygon)',
  value: 'MATIC',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "GUSD (Gemini Dollar)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/GUSD.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "GUSD (Gemini Dollar)"
    })]
  }),
  labelWithoutImage: 'GUSD (Gemini Dollar)',
  value: 'GUSD',
  minDonation: 0.000001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "CRV (Curve DAO Token)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/CRV.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "CRV (Curve DAO Token)"
    })]
  }),
  labelWithoutImage: 'CRV (Curve DAO Token)',
  value: 'CRV',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "1INCH (1inch)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/1INCH.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "1INCH (1inch)"
    })]
  }),
  labelWithoutImage: '1INCH (1inch)',
  value: '1INCH',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BAL (Balancer)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BAL.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BAL (Balancer)"
    })]
  }),
  labelWithoutImage: 'BAL (Balancer)',
  value: 'BAL',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "UMA (UMA)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/UMA.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "UMA (UMA)"
    })]
  }),
  labelWithoutImage: 'UMA (UMA)',
  value: 'UMA',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "YFI (Yearn Finance)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/YFI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "YFI (Yearn Finance)"
    })]
  }),
  labelWithoutImage: 'YFI (Yearn Finance)',
  value: 'YFI',
  minDonation: 0.00001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ALCX (Alchemix)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ALCX.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ALCX (Alchemix)"
    })]
  }),
  labelWithoutImage: 'ALCX (Alchemix)',
  value: 'ALCX',
  minDonation: 0.00001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SAND (Sandbox)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SAND.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SAND (Sandbox)"
    })]
  }),
  labelWithoutImage: 'SAND (Sandbox)',
  value: 'SAND',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "INJ (Injective Protocol)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/INJ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "INJ (Injective Protocol)"
    })]
  }),
  labelWithoutImage: 'INJ (Injective Protocol)',
  value: 'INJ',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "PAXG (PAX Gold)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/PAXG.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "PAXG (PAX Gold)"
    })]
  }),
  labelWithoutImage: 'PAXG (PAX Gold)',
  value: 'PAXG',
  minDonation: 0.0001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ENJ (Enjin Coin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ENJ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ENJ (Enjin Coin)"
    })]
  }),
  labelWithoutImage: 'ENJ (Enjin Coin)',
  value: 'ENJ',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "FIL (Filecoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/FIL.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "FIL (Filecoin)"
    })]
  }),
  labelWithoutImage: 'FIL (Filecoin)',
  value: 'FIL',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ANKR (Ankr)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ANKR.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ANKR (Ankr)"
    })]
  }),
  labelWithoutImage: 'ANKR (Ankr)',
  value: 'ANKR',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "XTZ (Tezos)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/XTZ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "XTZ (Tezos)"
    })]
  }),
  labelWithoutImage: 'XTZ (Tezos)',
  value: 'XTZ',
  minDonation: 0.02
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MKR (Maker)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MKR.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MKR (Maker)"
    })]
  }),
  labelWithoutImage: 'MKR (Maker)',
  value: 'MKR',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LRC (Loopring)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LRC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LRC (Loopring)"
    })]
  }),
  labelWithoutImage: 'LRC (Loopring)',
  value: 'LRC',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BOND (BarnBridge)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BOND.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BOND (BarnBridge)"
    })]
  }),
  labelWithoutImage: 'BOND (BarnBridge)',
  value: 'BOND',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SKL (Skale)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SKL.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SKL (Skale)"
    })]
  }),
  labelWithoutImage: 'SKL (Skale)',
  value: 'SKL',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MIR (Mirror Protocol)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MIR.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MIR (Mirror Protocol)"
    })]
  }),
  labelWithoutImage: 'MIR (Mirror Protocol)',
  value: 'MIR',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LPT (Livepeer)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LPT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LPT (Livepeer)"
    })]
  }),
  labelWithoutImage: 'LPT (Livepeer)',
  value: 'LPT',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MANA (Mana)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MANA.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MANA (Mana)"
    })]
  }),
  labelWithoutImage: 'MANA (Mana)',
  value: 'MANA',
  minDonation: 1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "FTM (Fantom)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/FTM.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "FTM (Fantom)"
    })]
  }),
  labelWithoutImage: 'FTM (Fantom)',
  value: 'FTM',
  minDonation: 0.03
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "KNC (Kyber)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/KNC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "KNC (Kyber)"
    })]
  }),
  labelWithoutImage: 'KNC (Kyber)',
  value: 'KNC',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "CUBE (Cube)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/CUBE.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "CUBE (Cube)"
    })]
  }),
  labelWithoutImage: 'CUBE (Cube)',
  value: 'CUBE',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "REN (Ren)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/REN.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "REN (Ren)"
    })]
  }),
  labelWithoutImage: 'REN (Ren)',
  value: 'REN',
  minDonation: 0.1
}];

/***/ }),

/***/ 450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ContributionTypes)
/* harmony export */ });
/** Defines contributions types */
const ContributionTypes = {
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

/***/ 12568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lX": () => (/* binding */ AmountTypes),
/* harmony export */   "x$": () => (/* binding */ TierTypes)
/* harmony export */ });
const TierTypes = {
  TICKET: 'TICKET',
  TIER: 'TIER',
  MEMBERSHIP: 'MEMBERSHIP',
  PRODUCT: 'PRODUCT',
  SERVICE: 'SERVICE',
  DONATION: 'DONATION'
};
const AmountTypes = {
  FIXED: 'FIXED',
  FLEXIBLE: 'FLEXIBLE'
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Object.values(TierTypes));

/***/ }),

/***/ 36648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CE": () => (/* binding */ isFixedContribution),
/* harmony export */   "Rx": () => (/* binding */ getDefaultInterval),
/* harmony export */   "SM": () => (/* binding */ sortTiersForCollective),
/* harmony export */   "Vq": () => (/* binding */ getTierPresets),
/* harmony export */   "Zq": () => (/* binding */ TIERS_ORDER_KEY),
/* harmony export */   "hs": () => (/* binding */ DEFAULT_MINIMUM_AMOUNT),
/* harmony export */   "l_": () => (/* binding */ isTierExpired),
/* harmony export */   "pP": () => (/* binding */ DEFAULT_PRESETS),
/* harmony export */   "qt": () => (/* binding */ getTierMinAmount),
/* harmony export */   "rm": () => (/* binding */ getCollectiveContributionCardsOrder),
/* harmony export */   "x6": () => (/* binding */ getDefaultTierAmount)
/* harmony export */ });
/* unused harmony exports DEFAULT_FUNDS_PRESETS, sortTiers */
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18459);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(604);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1433);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82525);
/* harmony import */ var _constants_intervals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80642);
/* harmony import */ var _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12568);









const TIERS_ORDER_KEY = 'collectivePage.tiersOrder';
const DEFAULT_PRESETS = [500, 1000, 2000, 5000];
const DEFAULT_FUNDS_PRESETS = [100000, 200000, 500000, 1000000];
const DEFAULT_MINIMUM_AMOUNT = 100;
/**
 * Generated from the following query, using rounded number to make sure we don't suggest odd amounts.
 *
 * ```sql
 * WITH uniq_currencies AS (
 *     SELECT DISTINCT "to"
 *     FROM "CurrencyExchangeRates"
 *     WHERE "from" = 'USD'
 * ) SELECT uc."to", (
 *     -- Keep only first digit from number (e.g. 4 -> 4, 89 -> 80, 1337 -> 1000)
 *     SELECT LEFT(rate::TEXT, 1)::integer * POW(10, LENGTH(CAST(ROUND(rate) AS TEXT)) - 1)
 *     FROM "CurrencyExchangeRates" e WHERE e.from = 'USD' AND e.to = uc.to ORDER BY e."createdAt" DESC LIMIT 1
 *   ) AS rate
 * FROM uniq_currencies uc
 * ORDER BY rate DESC
 * ```
 */

const CURRENCY_ADJUSTMENT_RATES = {
  STD: 20000,
  VND: 20000,
  LAK: 10000,
  IDR: 10000,
  SLL: 10000,
  UZS: 10000,
  GNF: 8000,
  PYG: 6000,
  KHR: 4000,
  MGA: 4000,
  UGX: 3000,
  COP: 3000,
  MNT: 3000,
  TZS: 2000,
  CDF: 2000,
  BIF: 2000,
  MWK: 1000,
  KRW: 1000,
  LBP: 1000,
  MMK: 1000,
  RWF: 1000,
  CLP: 800,
  XAF: 600,
  XOF: 600,
  CRC: 600,
  SOS: 500,
  KZT: 400,
  KMF: 400,
  AMD: 400,
  NGN: 400,
  AOA: 400,
  HUF: 300,
  LKR: 300,
  MRO: 300,
  GYD: 200,
  PKR: 200,
  YER: 200,
  DJF: 100,
  JPY: 100,
  RSD: 100,
  KES: 100,
  XPF: 100,
  NPR: 100,
  ALL: 100,
  HTG: 100,
  VUV: 100,
  ISK: 100,
  JMD: 100,
  LRD: 100,
  CVE: 100,
  DZD: 100,
  ARS: 100,
  BDT: 90,
  SEK: 90,
  MAD: 90,
  AFN: 80,
  KGS: 70,
  INR: 70,
  RUB: 60,
  MZN: 60,
  PHP: 50,
  GMD: 50,
  DOP: 50,
  MKD: 50,
  ETB: 50,
  UYU: 40,
  MUR: 40,
  NIO: 30,
  THB: 30,
  HNL: 20,
  TWD: 20,
  CZK: 20,
  UAH: 20,
  SRD: 20,
  LSL: 10,
  ZAR: 10,
  SZL: 10,
  MVR: 10,
  ZMW: 10,
  NAD: 10,
  EGP: 10,
  MDL: 10,
  TJS: 10,
  MXN: 10,
  SCR: 10,
  TRY: 10,
  BWP: 10,
  NOK: 9,
  MOP: 8,
  SBD: 8,
  HKD: 7,
  HRK: 7,
  GTQ: 7,
  TTD: 6,
  CNY: 6,
  BOB: 6,
  DKK: 6,
  RON: 4,
  BRL: 4,
  MYR: 4,
  PLN: 4,
  PEN: 3,
  PGK: 3,
  SAR: 3,
  BYN: 3,
  AED: 3,
  ILS: 3,
  QAR: 3,
  BBD: 2,
  TOP: 2,
  FJD: 2,
  GEL: 2,
  BZD: 2,
  XCD: 2,
  WST: 2
};
/**
 * Get the min authorized amount for order, in cents.
 * ⚠️ Only work with data from GQLV2.
 */

const getTierMinAmount = (tier, currency) => {
  const rate = CURRENCY_ADJUSTMENT_RATES[currency] || 1;

  if (!tier) {
    // When making a donation, min amount is $1
    return DEFAULT_MINIMUM_AMOUNT * rate;
  } else if (tier.amountType === _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .AmountTypes.FIXED */ .lX.FIXED) {
    return tier.amount?.valueInCents || 0;
  } else if (tier.minimumAmount.valueInCents !== null) {
    return tier.minimumAmount.valueInCents;
  } else if (tier.presets?.length && lodash_min__WEBPACK_IMPORTED_MODULE_2___default()(tier.presets) === 0) {
    return 0;
  } else {
    return DEFAULT_MINIMUM_AMOUNT * rate;
  }
};

const adaptPresetsForCurrency = (presets, currency) => {
  const rate = CURRENCY_ADJUSTMENT_RATES[currency];
  return !rate ? presets : presets.map(amount => Math.round(amount * rate));
};
/**
 * Get the presets for a given tier, or the default presets
 * ⚠️ Only work with data from GQLV2.
 */


const getTierPresets = (tier, collectiveType, currency) => {
  if (tier?.presets?.length > 0) {
    return tier.presets;
  } else if (collectiveType === _constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.FUND */ .eV.FUND) {
    return adaptPresetsForCurrency(DEFAULT_FUNDS_PRESETS, currency);
  } else if (!tier) {
    return adaptPresetsForCurrency(DEFAULT_PRESETS, currency);
  }

  const minAmount = getTierMinAmount(tier, currency);

  if (minAmount === 0) {
    return [0, 500, 1500, 5000];
  } else if (minAmount < 1000) {
    return [minAmount, 1000, 2500, 5000];
  } else {
    const roundAmount = amount => {
      const amountSize = amount.toString().length;
      const roundingFactor = Math.pow(10, amountSize - 1);
      return Math.round(Math.round(amount / roundingFactor) * roundingFactor);
    };

    return lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()([minAmount, roundAmount(minAmount * 2), roundAmount(minAmount * 3), roundAmount(minAmount * 5)]);
  }
};
/**
 * Returns the default selected amount from a tier.
 * ⚠️ Only work with data from GQLV2.
 */

const getDefaultTierAmount = (tier, collective, currency) => {
  if (tier && !lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(tier.amount?.valueInCents)) {
    return tier.amount.valueInCents;
  } else if (getTierMinAmount(tier, currency) === 0) {
    // Free tiers are free per default, even when user can make a donation
    return 0;
  } else {
    const presets = getTierPresets(tier, collective.type, currency);
    return presets[Math.floor(presets.length / 2)];
  }
};
/** Returns true if the price and interval of the current contribution cannot be changed */

const isFixedContribution = tier => {
  const forceInterval = Boolean(tier);
  const forceAmount = tier && tier.amountType === _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .AmountTypes.FIXED */ .lX.FIXED;
  const isFlexible = tier && tier.amountType === _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .AmountTypes.FLEXIBLE */ .lX.FLEXIBLE;
  return !isFlexible && forceInterval && forceAmount;
};
const isTierExpired = tier => {
  return tier?.endsAt && new Date(tier.endsAt) < new Date();
};
const getCollectiveContributionCardsOrder = collective => {
  return lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(collective.settings, TIERS_ORDER_KEY, []);
};
const sortTiers = (baseTiers, orderKeys, hasCustomContribution, hasCryptoContribution) => {
  const tiers = baseTiers.filter(tier => tier.type !== _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .TierTypes.TICKET */ .x$.TICKET);

  if (hasCustomContribution) {
    tiers.push('custom');
  }

  if (hasCryptoContribution) {
    tiers.push('crypto');
  }

  return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(tiers, tier => {
    const itemKey = tier === 'custom' || tier === _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_5__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO ? tier : tier.id;
    const index = orderKeys.findIndex(key => key === itemKey);
    return index === -1 ? Infinity : index; // put unsorted tiers at the end
  });
};
const sortTiersForCollective = (collective, baseTiers) => {
  const orderKeys = getCollectiveContributionCardsOrder(collective);
  const hasCustomContribution = !lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(collective, 'settings.disableCustomContributions', false);
  const hasCryptoContribution = !lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(collective, 'settings.disableCryptoContributions', true);
  return sortTiers(baseTiers, orderKeys, hasCustomContribution, hasCryptoContribution);
};
const getDefaultInterval = tier => {
  if (!tier?.interval) {
    return _constants_intervals__WEBPACK_IMPORTED_MODULE_7__["default"].oneTime;
  } else if (tier.interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_7__["default"].flexible) {
    return _constants_intervals__WEBPACK_IMPORTED_MODULE_7__["default"].month;
  } else {
    return tier.interval;
  }
};

/***/ }),

/***/ 34614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12568);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47162);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32651);
/* harmony import */ var _lib_tier_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36648);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1259);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5824);
/* harmony import */ var _components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(325);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69078);
/* harmony import */ var _components_contribute_cards_constants__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(19146);
/* harmony import */ var _components_contribute_cards_ContributeCollective__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12461);
/* harmony import */ var _components_contribute_cards_ContributeCrypto__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9881);
/* harmony import */ var _components_contribute_cards_ContributeCustom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35744);
/* harmony import */ var _components_contribute_cards_ContributeEvent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(77771);
/* harmony import */ var _components_contribute_cards_ContributeProject__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(55350);
/* harmony import */ var _components_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(78826);
/* harmony import */ var _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1433);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(73908);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(11333);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(42352);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(92129);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(53169);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(37278);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(87268);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_13__, _components_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_23__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_25__, _components_Footer__WEBPACK_IMPORTED_MODULE_26__, _components_Header__WEBPACK_IMPORTED_MODULE_28__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_13__, _components_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_23__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_25__, _components_Footer__WEBPACK_IMPORTED_MODULE_26__, _components_Header__WEBPACK_IMPORTED_MODULE_28__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







































const CardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_components_Grid__WEBPACK_IMPORTED_MODULE_27__/* .Grid */ .rj).attrs({
  gridGap: '30px',
  justifyContent: ['center', 'space-between'],
  gridTemplateColumns: ['minmax(280px, 400px)', 'repeat(2, minmax(280px, 350px))', 'repeat(3, minmax(240px, 350px))', 'repeat(3, minmax(280px, 350px))', 'repeat(4, 280px)']
}).withConfig({
  displayName: "contribute__CardsContainer",
  componentId: "sc-12t3w73-0"
})(["& > *{width:100%;}"]);

class TiersPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getFinancialContributorsWithoutTier", memoize_one__WEBPACK_IMPORTED_MODULE_2___default()(contributors => {
      return contributors.filter(c => c.isBacker && (c.tiersIds.length === 0 || c.tiersIds[0] === null));
    }));

    _defineProperty(this, "hasContributors", memoize_one__WEBPACK_IMPORTED_MODULE_2___default()((contributors, events) => {
      const hasFinancial = contributors.find(c => c.isBacker);
      return hasFinancial || events.find(event => event.contributors.length > 0);
    }));

    _defineProperty(this, "getWaysToContribute", memoize_one__WEBPACK_IMPORTED_MODULE_2___default()((collective, verb) => {
      if (!collective) {
        return [];
      }

      const waysToContribute = [];
      const canContribute = collective.isActive && collective.host;
      const hasContributors = this.hasContributors(collective.contributors, collective.events);
      const showAll = verb === 'contribute'; // Financial contributions

      if ((showAll || verb === 'tiers') && canContribute) {
        // Tiers + custom contribution
        const sortedTiers = (0,_lib_tier_utils__WEBPACK_IMPORTED_MODULE_9__/* .sortTiersForCollective */ .SM)(collective, collective.tiers);
        sortedTiers.forEach(tier => {
          if (tier === 'custom') {
            waysToContribute.push({
              ContributeCardComponent: _components_contribute_cards_ContributeCustom__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
              key: 'contribute-tier-custom',
              props: {
                hideContributors: !hasContributors,
                collective: collective,
                contributors: this.getFinancialContributorsWithoutTier(collective.contributors),
                stats: collective.stats.backers
              }
            });
          } else if (tier === _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_24__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO) {
            waysToContribute.push({
              ContributeCardComponent: _components_contribute_cards_ContributeCrypto__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
              key: 'contribute-tier-crypto',
              props: {
                hideContributors: true,
                collective: collective
              }
            });
          } else {
            waysToContribute.push({
              ContributeCardComponent: _components_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
              key: `tier-${tier.id}`,
              props: {
                collective: collective,
                tier: tier,
                hideContributors: !hasContributors,
                'data-cy': 'contribute-tier'
              }
            });
          }
        }); // Tickets

        const tickets = collective.tiers?.filter(t => t.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_6__/* .TierTypes.TICKET */ .x$.TICKET);
        tickets?.forEach(ticket => {
          waysToContribute.push({
            ContributeCardComponent: _components_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
            key: `ticket-${ticket.id}`,
            props: {
              collective: collective,
              tier: ticket,
              hideContributors: !hasContributors,
              'data-cy': 'contribute-ticket'
            }
          });
        });
      } // Projects


      if (showAll || verb === 'projects') {
        collective.projects?.forEach(project => {
          waysToContribute.push({
            ContributeCardComponent: _components_contribute_cards_ContributeProject__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
            key: `project-${project.id}`,
            props: {
              collective: collective,
              project: project,
              disableCTA: !project.isActive,
              hideContributors: !hasContributors
            }
          });
        });
      } // Events


      if (showAll || verb === 'events') {
        (0,_lib_events__WEBPACK_IMPORTED_MODULE_7__/* .sortEvents */ .qP)(collective.events).forEach(event => {
          waysToContribute.push({
            ContributeCardComponent: _components_contribute_cards_ContributeEvent__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
            key: `event-${event.id}`,
            props: {
              collective: collective,
              event: event,
              hideContributors: !hasContributors
            }
          });
        });
      } // Connected collectives


      if (showAll || verb === 'connected-collectives') {
        collective.connectedCollectives?.forEach(connectedCollectiveMember => {
          waysToContribute.push({
            ContributeCardComponent: _components_contribute_cards_ContributeCollective__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
            key: `connected-collective-${connectedCollectiveMember.id}`,
            props: {
              collective: connectedCollectiveMember.collective
            }
          });
        });
      }

      return waysToContribute;
    }));
  }

  static getInitialProps({
    query: {
      collectiveSlug,
      verb
    }
  }) {
    return {
      slug: collectiveSlug,
      verb
    };
  }

  getPageMetadata(collective) {
    const baseMetadata = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__/* .getCollectivePageMetadata */ .Xq)(collective);

    if (!collective) {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: 'Contribute',
        description: 'All the ways to contribute',
        noRobots: false
      });
    } else {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: `Contribute to ${collective.name}`,
        description: 'These are all the ways you can help make our community sustainable. ',
        canonicalURL: `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .getWebsiteUrl */ .ls)()}/${collective.slug}/contribute`,
        noRobots: false
      });
    }
  }

  getTitle(verb, collectiveName) {
    switch (verb) {
      case 'events':
        return {
          title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "CollectiveEvents",
            defaultMessage: [{
              "type": 1,
              "value": "collectiveName"
            }, {
              "type": 0,
              "value": "'s events"
            }],
            values: {
              collectiveName
            }
          })
        };

      case 'projects':
        return {
          title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "CollectiveProjects",
            defaultMessage: [{
              "type": 1,
              "value": "collectiveName"
            }, {
              "type": 0,
              "value": "'s projects"
            }],
            values: {
              collectiveName
            }
          })
        };

      case 'connected-collectives':
        return {
          title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "CollectiveConnectedCollectives",
            defaultMessage: [{
              "type": 1,
              "value": "collectiveName"
            }, {
              "type": 0,
              "value": "'s connected collectives"
            }],
            values: {
              collectiveName
            }
          })
        };

      default:
        return {
          title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "CP.Contribute.Title",
            defaultMessage: [{
              "type": 0,
              "value": "Become a contributor"
            }]
          }),
          subtitle: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "ContributePage.Description",
            defaultMessage: [{
              "type": 0,
              "value": "These are all the ways you can help make our community sustainable."
            }]
          })
        };
    }
  }

  render() {
    const {
      LoggedInUser,
      data = {},
      verb,
      slug
    } = this.props;

    if (!data || !data.Collective) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        data: data
      });
    }

    const collective = data.Collective;
    const collectiveName = collective?.name || slug;
    const waysToContribute = this.getWaysToContribute(collective, verb);
    const {
      title,
      subtitle
    } = this.getTitle(verb, collectiveName);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, _objectSpread({
        LoggedInUser: LoggedInUser
      }, this.getPageMetadata(collective))), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Body__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        children: data.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          collective: data.Collective,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            pb: 3,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              collective: collective,
              selectedCategory: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_14__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              maxWidth: 1260,
              my: 5,
              px: [15, 30],
              mx: "auto",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_27__/* .Box */ .xu, {
                my: 5,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_27__/* .Flex */ .kC, {
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.H2, {
                    fontWeight: "normal",
                    mb: 2,
                    children: title
                  }), LoggedInUser?.isAdminOfCollective(collective) && verb === 'events' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                    href: `/${collective.slug}/events/new`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                      buttonStyle: "primary",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                        id: "event.create.btn",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Create Event"
                        }]
                      })
                    })
                  }), LoggedInUser?.isAdminOfCollective(collective) && verb === 'projects' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                    href: `/${collective.slug}/projects/new`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                      buttonStyle: "primary",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                        id: "SectionProjects.CreateProject",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Create Project"
                        }]
                      })
                    })
                  })]
                }), subtitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                  color: "black.700",
                  mt: 3,
                  children: subtitle
                }), waysToContribute.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                  href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_StyledButton__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                    buttonSize: "small",
                    mt: 3,
                    children: ["\u2190\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                      id: "goBackToCollectivePage",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Go back to "
                      }, {
                        "type": 1,
                        "value": "name"
                      }, {
                        "type": 0,
                        "value": "'s page"
                      }],
                      values: {
                        name: collectiveName
                      }
                    })]
                  })
                })]
              }), waysToContribute.length > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(CardsContainer, {
                children: waysToContribute.map(({
                  ContributeCardComponent,
                  key,
                  props
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(ContributeCardComponent, _objectSpread({}, props), key))
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_MessageBox__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                type: "info",
                withIcon: true,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "contribute.empty",
                  defaultMessage: [{
                    "type": 0,
                    "value": "There's nothing to display here at the moment."
                  }]
                }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                  href: `/${slug}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                    id: "goBackToCollectivePage",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Go back to "
                    }, {
                      "type": 1,
                      "value": "name"
                    }, {
                      "type": 0,
                      "value": "'s page"
                    }],
                    values: {
                      name: collectiveName
                    }
                  })
                })]
              })]
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {})]
    });
  }

}

const contributePageQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .gqlV1 */ .N
/* GraphQL */
`
  query ContributePage($slug: String!, $nbContributorsPerContributeCard: Int) {
    Collective(slug: $slug) {
      id
      slug
      path
      name
      type
      currency
      settings
      isActive
      isHost
      backgroundImageUrl
      imageUrl
      parentCollective {
        id
        name
        slug
        backgroundImageUrl
        imageUrl
      }
      features {
        id
        ...NavbarFields
      }
      host {
        id
        name
        slug
        type
      }
      stats {
        id
        backers {
          id
          all
          users
          organizations
        }
      }
      contributors {
        id
        name
        roles
        isAdmin
        isCore
        isBacker
        since
        description
        collectiveSlug
        totalAmountDonated
        type
        publicMessage
        isIncognito
        tiersIds
      }
      tiers {
        id
        ...ContributeCardTierFields
      }
      events(includePastEvents: true, includeInactive: true) {
        id
        ...ContributeCardEventFields
      }
      projects {
        id
        ...ContributeCardProjectFields
      }
      connectedCollectives: members(role: "CONNECTED_COLLECTIVE") {
        id
        collective: member {
          id
          slug
          name
          type
          description
          backgroundImageUrl(height: 208)
          stats {
            id
            backers {
              id
              all
              users
              organizations
            }
          }
          contributors(limit: $nbContributorsPerContributeCard) {
            id
            ...ContributeCardContributorFields
          }
        }
      }
    }
  }
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_15__/* .collectiveNavbarFieldsFragment */ .AS}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_15__/* .contributeCardTierFieldsFragment */ .d8}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_15__/* .contributeCardEventFieldsFragment */ .bt}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_15__/* .contributeCardProjectFieldsFragment */ .Sm}
`;
/* eslint-enable graphql/template-strings */

const addContributePageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__.graphql)(contributePageQuery, {
  options: props => ({
    variables: {
      slug: props.slug,
      nbContributorsPerContributeCard: _components_contribute_cards_constants__WEBPACK_IMPORTED_MODULE_36__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc
    }
  })
});
TiersPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, verb } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getPageMetadata",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "collective",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getTitle",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "verb",
      "type": null
    }, {
      "name": "collectiveName",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "TiersPage",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "verb": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "query": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "data": {
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
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_34__/* .withUser */ .ns)(addContributePageData(TiersPage)));
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

/***/ 42558:
/***/ ((module) => {

module.exports = require("@opencollective/taxes");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 33244:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillCheck");

/***/ }),

/***/ 7257:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillExclamation");

/***/ }),

/***/ 58847:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Check");

/***/ }),

/***/ 60080:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/CheckCircle");

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

/***/ 93842:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/DotsVerticalRounded");

/***/ }),

/***/ 95019:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Envelope");

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

/***/ 24594:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/MinusCircle");

/***/ }),

/***/ 46529:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Planet");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 43891:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Receipt");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 99232:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Undo");

/***/ }),

/***/ 60270:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Alipay");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 54427:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Paypal");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 81594:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Ban");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 41032:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretDown");

/***/ }),

/***/ 2331:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretUp");

/***/ }),

/***/ 9443:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Check");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 55457:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CreditCard");

/***/ }),

/***/ 63387:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExchangeAlt");

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

/***/ 87584:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/MoneyCheckAlt");

/***/ }),

/***/ 77192:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Plus");

/***/ }),

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/University");

/***/ }),

/***/ 56758:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/AlertTriangle");

/***/ }),

/***/ 62941:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowLeft");

/***/ }),

/***/ 22198:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowRight");

/***/ }),

/***/ 61975:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Calendar");

/***/ }),

/***/ 89711:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 76841:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 94997:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Clock");

/***/ }),

/***/ 57847:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 40710:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 57153:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Info");

/***/ }),

/***/ 67520:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Maximize2");

/***/ }),

/***/ 75827:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/MessageSquare");

/***/ }),

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 72142:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Trash2");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 21522:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/PriceTags");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("@styled-icons/ionicons-solid/Expand");

/***/ }),

/***/ 80950:
/***/ ((module) => {

module.exports = require("@styled-icons/material/AttachMoney");

/***/ }),

/***/ 20384:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Close");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 33651:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Settings");

/***/ }),

/***/ 95830:
/***/ ((module) => {

module.exports = require("@styled-icons/material/ShowChart");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 38164:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Stack");

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

/***/ 71934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 53291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 28109:
/***/ ((module) => {

module.exports = require("file-saver");

/***/ }),

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 99226:
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ 12154:
/***/ ((module) => {

module.exports = require("lodash/clamp");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 39131:
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 90857:
/***/ ((module) => {

module.exports = require("lodash/endsWith");

/***/ }),

/***/ 76918:
/***/ ((module) => {

module.exports = require("lodash/find");

/***/ }),

/***/ 25359:
/***/ ((module) => {

module.exports = require("lodash/findLastIndex");

/***/ }),

/***/ 22265:
/***/ ((module) => {

module.exports = require("lodash/first");

/***/ }),

/***/ 58579:
/***/ ((module) => {

module.exports = require("lodash/flatten");

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

/***/ 41238:
/***/ ((module) => {

module.exports = require("lodash/includes");

/***/ }),

/***/ 53493:
/***/ ((module) => {

module.exports = require("lodash/intersection");

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

/***/ 48524:
/***/ ((module) => {

module.exports = require("lodash/isNull");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 83824:
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ 53707:
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ 36625:
/***/ ((module) => {

module.exports = require("lodash/max");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ 604:
/***/ ((module) => {

module.exports = require("lodash/min");

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

/***/ 96839:
/***/ ((module) => {

module.exports = require("lodash/padStart");

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

/***/ 47869:
/***/ ((module) => {

module.exports = require("lodash/round");

/***/ }),

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 71156:
/***/ ((module) => {

module.exports = require("lodash/size");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ 35007:
/***/ ((module) => {

module.exports = require("lodash/startCase");

/***/ }),

/***/ 79800:
/***/ ((module) => {

module.exports = require("lodash/sumBy");

/***/ }),

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

/***/ }),

/***/ 75142:
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 73022:
/***/ ((module) => {

module.exports = require("lodash/upperCase");

/***/ }),

/***/ 22217:
/***/ ((module) => {

module.exports = require("lodash/without");

/***/ }),

/***/ 86646:
/***/ ((module) => {

module.exports = require("lodash/zipObject");

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

/***/ 37597:
/***/ ((module) => {

module.exports = require("react-text-mask");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208], () => (__webpack_exec__(34614)));
module.exports = __webpack_exports__;

})();