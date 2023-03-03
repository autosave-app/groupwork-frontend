"use strict";
(() => {
var exports = {};
exports.id = 9756;
exports.ids = [9756];
exports.modules = {

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

/***/ 43825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88705);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84842);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Page__WEBPACK_IMPORTED_MODULE_4__]);
_Page__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["showContactSupportLink"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * A page to show when the feature is not supported by the collective.
 * Ensures the page is not referenced by robots.
 */




const PageFeatureNotSupported = _ref => {
  let {
    showContactSupportLink
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const title = formatMessage({
    id: "FeatureNotSupported.title",
    defaultMessage: [{
      "type": 0,
      "value": "Page inaccessible"
    }]
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Page__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    noRobots: true,
    title: title
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 2,
      py: [5, 6],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.H1, {
        fontSize: "38px",
        mb: 3,
        textAlign: "center",
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
        fontSize: "64px",
        mt: 3,
        mb: 5,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          role: "img",
          "aria-label": "Monkey Face",
          children: "\uD83D\uDE48\uFE0F"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "FeatureNotSupported.description",
          defaultMessage: [{
            "type": 0,
            "value": "This page has not been activated for this Collective or you don't have permission to see it."
          }]
        }), showContactSupportLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
              SupportLink: _I18nFormatters__WEBPACK_IMPORTED_MODULE_3__/* .I18nSupportLink */ .wl
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageFeatureNotSupported);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82830:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_feather_Bell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94610);
/* harmony import */ var _styled_icons_feather_Bell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Bell__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_BellOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63801);
/* harmony import */ var _styled_icons_feather_BellOff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_BellOff__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32651);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51927);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37436);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_11__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const followConversationMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation FollowConversation($id: String!, $isActive: Boolean) {
    followConversation(id: $id, isActive: $isActive)
  }
`;
const ButtonLabel = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr).attrs({
  display: ['none', 'inline']
}).withConfig({
  displayName: "FollowConversationButton__ButtonLabel",
  componentId: "sc-cldnn0-0"
})(["margin:0 8px;"]);
/**
 * A button that checks if current user is subscribed to the conversation.
 * Because it fires a request, this button should **not** be used in lists.
 */

const FollowConversationButton = ({
  conversationId,
  onChange,
  isCompact,
  LoggedInUser,
  loadingLoggedInUser
}) => {
  const [followConversation, {
    loading: submitting
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(followConversationMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .API_V2_CONTEXT */ .T
  });
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql__WEBPACK_IMPORTED_MODULE_14__/* .isUserFollowingConversationQuery */ .Hm, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .API_V2_CONTEXT */ .T,
    variables: {
      id: conversationId
    },
    skip: !LoggedInUser
  }); // When user is logged out

  if (!loadingLoggedInUser && !LoggedInUser) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      display: "block",
      content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "mustBeLoggedInWithLink",
        defaultMessage: [{
          "type": 0,
          "value": "You must be "
        }, {
          "type": 8,
          "value": "login-link",
          "children": [{
            "type": 0,
            "value": "logged in"
          }]
        }],
        values: {
          // eslint-disable-next-line react/display-name
          'login-link': msg => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            href: {
              pathname: '/signin',
              query: {
                next: (next_router__WEBPACK_IMPORTED_MODULE_5___default().asPath)
              }
            },
            children: msg
          })
        }
      }),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        buttonStyle: "secondary",
        minWidth: 130,
        disabled: true,
        width: "100%",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "actions.follow",
          defaultMessage: [{
            "type": 0,
            "value": "Follow"
          }]
        })
      })
    });
  }

  const loggedInAccount = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'loggedInAccount');

  const isFollowing = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(loggedInAccount, 'isFollowingConversation');

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    width: "100%",
    minWidth: 130,
    buttonStyle: isFollowing ? 'standard' : 'secondary',
    disabled: !LoggedInUser || loadingLoggedInUser || loading || submitting,
    onClick: () => {
      return followConversation({
        variables: {
          id: conversationId,
          isActive: !isFollowing
        },
        update: (client, {
          data
        }) => {
          const isFollowing = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'followConversation');

          const queryParams = {
            query: _graphql__WEBPACK_IMPORTED_MODULE_14__/* .isUserFollowingConversationQuery */ .Hm,
            variables: {
              id: conversationId
            }
          };
          const cacheData = client.readQuery(queryParams);
          client.writeQuery({
            query: _graphql__WEBPACK_IMPORTED_MODULE_14__/* .isUserFollowingConversationQuery */ .Hm,
            variables: {
              id: conversationId
            },
            data: _objectSpread(_objectSpread({}, cacheData), {}, {
              loggedInAccount: _objectSpread(_objectSpread({}, cacheData.loggedInAccount), {}, {
                isFollowingConversation: isFollowing
              })
            })
          });
        }
      }).then(result => onChange && onChange(result.data.followConversation, loggedInAccount));
    },
    children: isFollowing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_styled_icons_feather_BellOff__WEBPACK_IMPORTED_MODULE_4__.BellOff, {
        size: "1.2em"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(ButtonLabel, {
        children: isCompact ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "actions.unfollow",
          defaultMessage: [{
            "type": 0,
            "value": "Unfollow"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "conversation.unfollow",
          defaultMessage: [{
            "type": 0,
            "value": "Unfollow this Conversation"
          }]
        })
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_styled_icons_feather_Bell__WEBPACK_IMPORTED_MODULE_3__.Bell, {
        size: "1.2em"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(ButtonLabel, {
        children: isCompact ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "actions.follow",
          defaultMessage: [{
            "type": 0,
            "value": "Follow"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "conversation.follow",
          defaultMessage: [{
            "type": 0,
            "value": "Follow this Conversation"
          }]
        })
      })]
    })
  });
};

FollowConversationButton.__docgenInfo = {
  "description": "A button that checks if current user is subscribed to the conversation.\nBecause it fires a request, this button should **not** be used in lists.",
  "methods": [],
  "displayName": "FollowConversationButton",
  "props": {
    "conversationId": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "isCompact": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loadingLoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_13__/* .withUser */ .ns)(FollowConversationButton));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97619);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
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

const getFollwersNotDisplayedNames = (followers, maxNbDisplayed) => {
  if (followers.length <= maxNbDisplayed) {
    return null;
  } else {
    return followers.slice(maxNbDisplayed).map(c => c.name).join(', ');
  }
};
/**
 * A small list of avatars with a count next to it.
 */


const FollowersAvatars = ({
  followers,
  totalCount,
  avatarRadius,
  maxNbDisplayed
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  if (!followers || !followers.length) {
    return null;
  }

  const nbNotDisplayed = totalCount - maxNbDisplayed;
  const nbNotFetched = totalCount - followers.length;
  const usersNotDisplayedNames = getFollwersNotDisplayedNames(followers, maxNbDisplayed);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    children: [followers.slice(0, maxNbDisplayed).map(collective => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mr: [-2, 2],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        collective: collective,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
          collective: collective,
          radius: avatarRadius
        })
      })
    }, collective.id)), nbNotDisplayed > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_7__/* .withUser */ .ns)(FollowersAvatars));

/***/ }),

/***/ 79582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75263);
/* harmony import */ var lodash_update__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_update__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99708);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5700);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97079);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24839);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5824);
/* harmony import */ var _components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(325);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(69078);
/* harmony import */ var _components_conversations_Comment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53327);
/* harmony import */ var _components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(14193);
/* harmony import */ var _components_conversations_FollowConversationButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(82830);
/* harmony import */ var _components_conversations_FollowersAvatars__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(57020);
/* harmony import */ var _components_conversations_graphql__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(37436);
/* harmony import */ var _components_conversations_Thread__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(4821);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(73908);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(16159);
/* harmony import */ var _components_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(6845);
/* harmony import */ var _components_InlineEditField__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(54746);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(92129);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(53169);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(37278);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(84842);
/* harmony import */ var _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(43825);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledInputTags__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(10732);
/* harmony import */ var _components_StyledLink__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(51082);
/* harmony import */ var _components_StyledTag__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(36422);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_15__, _components_conversations_Comment__WEBPACK_IMPORTED_MODULE_21__, _components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_22__, _components_conversations_FollowConversationButton__WEBPACK_IMPORTED_MODULE_23__, _components_conversations_Thread__WEBPACK_IMPORTED_MODULE_26__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__, _components_Page__WEBPACK_IMPORTED_MODULE_34__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_35__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_15__, _components_conversations_Comment__WEBPACK_IMPORTED_MODULE_21__, _components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_22__, _components_conversations_FollowConversationButton__WEBPACK_IMPORTED_MODULE_23__, _components_conversations_Thread__WEBPACK_IMPORTED_MODULE_26__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__, _components_Page__WEBPACK_IMPORTED_MODULE_34__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_35__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








































const conversationPageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql`
  query ConversationPage($collectiveSlug: String!, $id: String!, $offset: Int) {
    account(slug: $collectiveSlug, throwIfMissing: false) {
      id
      legacyId
      slug
      name
      type
      description
      settings
      imageUrl
      twitterHandle
      imageUrl
      backgroundImageUrl
      ... on AccountWithParent {
        parent {
          id
          imageUrl
          backgroundImageUrl
          twitterHandle
        }
      }
      features {
        id
        ...NavbarFields
      }
      conversationsTags {
        id
        tag
      }

      ... on Collective {
        isApproved
      }
    }
    conversation(id: $id) {
      id
      slug
      summary
      title
      createdAt
      tags
      body {
        id
        ...CommentFields
      }
      comments(limit: 100, offset: $offset) {
        totalCount
        nodes {
          id
          ...CommentFields
        }
      }
      followers(limit: 50) {
        totalCount
        nodes {
          id
          slug
          type
          name
          imageUrl(height: 64)
        }
      }
    }
  }
  ${_components_conversations_graphql__WEBPACK_IMPORTED_MODULE_25__/* .commentFieldsFragment */ .Y6}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_18__/* .collectiveNavbarFieldsFragment */ .AS}
`;
const editConversationMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql`
  mutation EditConversation($id: String!, $title: String!, $tags: [String]) {
    editConversation(id: $id, title: $title, tags: $tags) {
      id
      title
      tags
    }
  }
`;
/**
 * The main page to display collectives. Wrap route parameters and GraphQL query
 * to render `components/collective-page` with everything needed.
 */

class ConversationPage extends (react__WEBPACK_IMPORTED_MODULE_5___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onCommentAdded", comment => {
      // Add comment to cache if not already fetched
      const [data, query, variables] = this.clonePageQueryCacheData();

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'conversation.comments.nodes', comments => lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1___default()([...comments, comment], 'id'));

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'conversation.comments.totalCount', totalCount => totalCount + 1);

      this.props.client.writeQuery({
        query,
        variables,
        data
      }); // Commenting subscribes the user, update Follow button to reflect that

      this.updateLoggedInUserFollowing(true); // Add user to the conversation subscribers

      this.onFollowChange(true, comment.fromAccount);
    });

    _defineProperty(this, "updateLoggedInUserFollowing", isFollowing => {
      const query = _components_conversations_graphql__WEBPACK_IMPORTED_MODULE_25__/* .isUserFollowingConversationQuery */ .Hm;
      const variables = {
        id: this.props.id
      };

      const userFollowingData = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(this.props.client.readQuery({
        query,
        variables
      }));

      if (userFollowingData && userFollowingData.loggedInAccount) {
        userFollowingData.loggedInAccount.isFollowingConversation = isFollowing;
        this.props.client.writeQuery({
          query,
          variables,
          data: userFollowingData
        });
      }
    });

    _defineProperty(this, "onCommentDeleted", comment => {
      const [data, query, variables] = this.clonePageQueryCacheData();

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'conversation.comments.nodes', comments => comments.filter(c => c.id !== comment.id));

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'conversation.comments.totalCount', totalCount => totalCount - 1);

      this.props.client.writeQuery({
        query,
        variables,
        data
      });
    });

    _defineProperty(this, "onFollowChange", (isFollowing, account) => {
      const [data, query, variables] = this.clonePageQueryCacheData();
      const followersPath = 'conversation.followers.nodes';
      const followersCountPath = 'conversation.followers.totalCount';

      if (!isFollowing) {
        // Remove user
        lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, followersCountPath, count => count - 1);

        lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, followersPath, followers => followers.filter(c => c.id !== account.id));
      } else if (lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(data, followersPath, []).findIndex(c => c.id === account.id) === -1) {
        // Add user (if not already there)
        lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, followersCountPath, count => count + 1);

        lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, followersPath, followers => {
          followers.splice(ConversationPage.MAX_NB_FOLLOWERS_AVATARS - 1, 0, account);
          return followers;
        });
      } else {
        return;
      }

      this.props.client.writeQuery({
        query,
        variables,
        data
      });
    });

    _defineProperty(this, "onConversationDeleted", () => {
      return this.props.router.push(`/${this.props.collectiveSlug}/conversations`);
    });

    _defineProperty(this, "handleTagsChange", (options, setValue) => {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(options)) {
        setValue([]);
      } else {
        setValue(options.map(i => i.value));
      }
    });

    _defineProperty(this, "fetchMore", async () => {
      const {
        collectiveSlug,
        id,
        data
      } = this.props; // refetch before fetching more as comments added to the cache can change the offset

      await data.refetch();
      await data.fetchMore({
        variables: {
          collectiveSlug,
          id,
          offset: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(data, 'conversation.comments.nodes', []).length
        },
        updateQuery: (prev, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          const newValues = {};
          newValues.conversation = _objectSpread(_objectSpread({}, prev.conversation), {}, {
            comments: _objectSpread(_objectSpread({}, fetchMoreResult.conversation.comments), {}, {
              nodes: [...prev.conversation.comments.nodes, ...fetchMoreResult.conversation.comments.nodes]
            })
          });
          return Object.assign({}, prev, newValues);
        }
      });
    });
  }

  static getInitialProps({
    query: {
      collectiveSlug,
      id
    }
  }) {
    return {
      collectiveSlug,
      id
    };
  }

  getPageMetaData(collective, conversation) {
    const baseMetadata = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_11__/* .getCollectivePageMetadata */ .Xq)(collective);

    if (collective && conversation) {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: conversation.title,
        description: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_14__/* .stripHTML */ .Cb)(conversation.summary),
        metaTitle: `${conversation.title} - ${collective.name}`
      });
    } else {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: 'Conversations'
      });
    }
  }

  clonePageQueryCacheData() {
    const {
      client,
      id,
      collectiveSlug
    } = this.props;
    const query = conversationPageQuery;
    const variables = {
      collectiveSlug,
      id
    };

    const data = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(client.readQuery({
      query,
      variables
    }));

    return [data, query, variables];
  }

  getSuggestedTags(collective) {
    const tagsStats = collective && collective.conversationsTags || null;
    return tagsStats && tagsStats.map(({
      tag
    }) => tag);
  }

  render() {
    const {
      collectiveSlug,
      data,
      LoggedInUser
    } = this.props;

    if (!data.loading) {
      if (!data || data.error) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          data: data
        });
      } else if (!data.account) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .generateNotFoundError */ .mN)(collectiveSlug),
          log: false
        });
      } else if (!(0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(data.account, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_10__/* .FEATURES.CONVERSATIONS */ .h6.CONVERSATIONS)) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {});
      }
    }

    const collective = data && data.account;
    const conversation = data && data.conversation;
    const body = conversation && conversation.body;

    const conversationReactions = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(conversation, 'body.reactions', []);

    const comments = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(conversation, 'comments.nodes', []);

    const totalCommentsCount = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(conversation, 'comments.totalCount', 0);

    const followers = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(conversation, 'followers');

    const hasFollowers = followers && followers.nodes && followers.nodes.length > 0;
    const canEdit = LoggedInUser && body && LoggedInUser.canEditComment(body);
    const canDelete = canEdit || LoggedInUser && LoggedInUser.isAdminOfCollective(collective);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      collective: collective
    }, this.getPageMetaData(collective, conversation)), {}, {
      children: data.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {})
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        collective: collective,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          "data-cy": "conversation-page",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            collective: collective,
            selected: _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_17__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS,
            selectedCategory: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_16__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
            maxWidth: 1160,
            m: "0 auto",
            px: 2,
            py: [4, 5],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_StyledLink__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
              as: _components_Link__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
              color: "black.600",
              href: `/${collectiveSlug}/conversations`,
              children: ["\u2190 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                id: "Conversations.GoBack",
                defaultMessage: [{
                  "type": 0,
                  "value": "Back to conversations"
                }]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
              mt: 4,
              children: !conversation || !body ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                type: "error",
                withIcon: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                  id: "conversation.notFound",
                  defaultMessage: [{
                    "type": 0,
                    "value": "This conversation doesn't exist or has been removed."
                  }]
                })
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Flex */ .kC, {
                flexDirection: ['column', null, null, 'row'],
                justifyContent: "space-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                  flex: "1 1 50%",
                  maxWidth: 700,
                  mb: 5,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    borderBottom: "1px solid",
                    borderColor: "black.300",
                    pb: 3,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_40__.H2, {
                      fontSize: "24px",
                      lineHeight: "32px",
                      mb: 4,
                      wordBreak: "break-word",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_InlineEditField__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                        mutation: editConversationMutation,
                        mutationOptions: {
                          context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
                        },
                        canEdit: canEdit,
                        values: conversation,
                        field: "title",
                        maxLength: 255,
                        required: true,
                        placeholder: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                          id: "CreateConversation.Title.Placeholder",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Start with a title for your conversation here"
                          }]
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_conversations_Comment__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                      comment: body,
                      reactions: conversationReactions,
                      canEdit: canEdit,
                      canDelete: canDelete,
                      onDelete: this.onConversationDeleted,
                      canReply: Boolean(LoggedInUser),
                      isConversationRoot: true
                    })]
                  }), comments.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                    mb: 3,
                    pt: 3,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_conversations_Thread__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      collective: collective,
                      items: comments,
                      hasMore: totalCommentsCount > comments.length,
                      fetchMore: this.fetchMore,
                      onCommentDeleted: this.onCommentDeleted
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Flex */ .kC, {
                    mt: "40px",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                      display: ['none', null, 'block'],
                      flex: "0 0",
                      p: 3,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                        size: 24,
                        color: "lightgrey"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                      flex: "1 1",
                      maxWidth: [null, null, 'calc(100% - 56px)'],
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        id: "new-comment",
                        ConversationId: conversation.id,
                        onSuccess: this.onCommentAdded
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                  display: ['none', null, 'block'],
                  flex: "0 0 330px",
                  ml: [null, null, null, 4, 5],
                  mb: 4,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                    my: 2,
                    mx: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                      href: `/${collectiveSlug}/conversations/new`,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                        buttonStyle: "primary",
                        width: "100%",
                        minWidth: 170,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                          id: "conversations.create",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Create a Conversation"
                          }]
                        })
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                    mt: 4,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_40__.H4, {
                      px: 2,
                      mb: 3,
                      fontWeight: "normal",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                        id: "Conversation.Followers",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Conversation followers"
                        }]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Flex */ .kC, {
                      mb: 3,
                      alignItems: "center",
                      children: [hasFollowers && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                        mr: 3,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_conversations_FollowersAvatars__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                          followers: followers.nodes,
                          totalCount: followers.totalCount,
                          maxNbDisplayed: ConversationPage.MAX_NB_FOLLOWERS_AVATARS,
                          avatarRadius: 32
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                        flex: "1",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_conversations_FollowConversationButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                          conversationId: conversation.id,
                          onChange: this.onFollowChange,
                          isCompact: hasFollowers && followers.nodes.length > 2
                        })
                      })]
                    })]
                  }), !(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(conversation.tags) && !canEdit) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                    mt: 4,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_InlineEditField__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                      topEdit: 2,
                      field: "tags",
                      buttonsMinWidth: 145,
                      canEdit: canEdit,
                      values: conversation,
                      mutation: editConversationMutation,
                      mutationOptions: {
                        context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
                      },
                      prepareVariables: (value, draft) => _objectSpread(_objectSpread({}, value), {}, {
                        tags: draft
                      }),
                      children: ({
                        isEditing,
                        setValue
                      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_40__.H4, {
                          px: 2,
                          mb: 2,
                          fontWeight: "normal",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                            id: "Tags",
                            defaultMessage: [{
                              "type": 0,
                              "value": "Tags"
                            }]
                          })
                        }), !isEditing ? !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(conversation.tags) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Flex */ .kC, {
                          flexWrap: "wrap",
                          mx: 2,
                          children: conversation.tags.map(tag => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_StyledTag__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                            variant: "rounded-right",
                            mb: "4px",
                            mr: "4px",
                            children: tag
                          }, tag))
                        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_28__/* .Box */ .xu, {
                          mx: 2,
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx(_components_StyledInputTags__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                            suggestedTags: this.getSuggestedTags(collective),
                            defaultValue: conversation.tags,
                            onChange: options => this.handleTagsChange(options, setValue)
                          })
                        })]
                      })
                    })
                  })]
                })]
              })
            })]
          })]
        })
      })
    }));
  }

}

_defineProperty(ConversationPage, "MAX_NB_FOLLOWERS_AVATARS", 4);

const getData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_7__.graphql)(conversationPageQuery, {
  options: {
    pollInterval: 60000,
    // Will refresh the data every 60s to get new comments
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
  }
});
ConversationPage.__docgenInfo = {
  "description": "The main page to display collectives. Wrap route parameters and GraphQL query\nto render `components/collective-page` with everything needed.",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, id } }",
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
    }, {
      "name": "conversation",
      "type": null
    }],
    "returns": null
  }, {
    "name": "clonePageQueryCacheData",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onCommentAdded",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "comment",
      "type": null
    }],
    "returns": null
  }, {
    "name": "updateLoggedInUserFollowing",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "isFollowing",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onCommentDeleted",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "comment",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onFollowChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "isFollowing",
      "type": null
    }, {
      "name": "account",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onConversationDeleted",
    "docblock": null,
    "modifiers": [],
    "params": [],
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
  }, {
    "name": "handleTagsChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "options",
      "type": null
    }, {
      "name": "setValue",
      "type": null
    }],
    "returns": null
  }, {
    "name": "fetchMore",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }],
  "displayName": "ConversationPage",
  "props": {
    "collectiveSlug": {
      "description": "@ignore from getInitialProps",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "id": {
      "description": "@ignore from getInitialProps",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "client": {
      "description": "@ignore from withApollo",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "data": {
      "description": "@ignore from apollo",
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
          "fetchMore": {
            "name": "func",
            "required": false
          },
          "account": {
            "name": "shape",
            "value": {
              "name": {
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
              "conversationsTags": {
                "name": "arrayOf",
                "value": {
                  "name": "shape",
                  "value": {
                    "id": {
                      "name": "string",
                      "required": false
                    },
                    "tag": {
                      "name": "string",
                      "required": false
                    }
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "conversation": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
              "title": {
                "name": "string",
                "required": true
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "tags": {
                "name": "arrayOf",
                "value": {
                  "name": "string"
                },
                "required": false
              },
              "body": {
                "name": "shape",
                "value": {
                  "id": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              },
              "comments": {
                "name": "shape",
                "value": {
                  "nodes": {
                    "name": "arrayOf",
                    "value": {
                      "name": "shape",
                      "value": {
                        "id": {
                          "name": "string",
                          "required": false
                        }
                      }
                    },
                    "required": false
                  }
                },
                "required": false
              },
              "followers": {
                "name": "shape",
                "value": {
                  "totalCount": {
                    "name": "number",
                    "required": false
                  },
                  "nodes": {
                    "name": "arrayOf",
                    "value": {
                      "name": "shape",
                      "value": {
                        "id": {
                          "name": "string",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_41__/* .withUser */ .ns)(getData((0,next_router__WEBPACK_IMPORTED_MODULE_8__.withRouter)((0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_7__.withApollo)(ConversationPage)))));
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

/***/ 10276:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/DotsHorizontalRounded");

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

/***/ 98358:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Cogs");

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

/***/ 64934:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/PencilAlt");

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

/***/ 66035:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/AlertOctagon");

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

/***/ 94610:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Bell");

/***/ }),

/***/ 63801:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/BellOff");

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

/***/ 57847:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 91090:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Edit");

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

/***/ 86838:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Plus");

/***/ }),

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 41844:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Share2");

/***/ }),

/***/ 72142:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Trash2");

/***/ }),

/***/ 83565:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/UserCheck");

/***/ }),

/***/ 12402:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/UserMinus");

/***/ }),

/***/ 90809:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/X");

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

/***/ 10274:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Edit");

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

/***/ 9884:
/***/ ((module) => {

module.exports = require("@styled-icons/material/SyncAlt");

/***/ }),

/***/ 50194:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Update");

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

/***/ 42038:
/***/ ((module) => {

module.exports = require("@styled-system/css");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 68887:
/***/ ((module) => {

module.exports = require("copy-to-clipboard");

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

/***/ 75263:
/***/ ((module) => {

module.exports = require("lodash/update");

/***/ }),

/***/ 73022:
/***/ ((module) => {

module.exports = require("lodash/upperCase");

/***/ }),

/***/ 57260:
/***/ ((module) => {

module.exports = require("lodash/values");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,8720,7772,8208,3489], () => (__webpack_exec__(79582)));
module.exports = __webpack_exports__;

})();