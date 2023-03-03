"use strict";
(() => {
var exports = {};
exports.id = 4960;
exports.ids = [4960];
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

/***/ 69794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71156);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _icons_CommentIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6845);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97619);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _FollowersAvatars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57020);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);














const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
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

const ConversationListItem = ({
  conversation,
  collectiveSlug
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const {
    id,
    slug,
    title,
    summary,
    createdAt,
    fromAccount,
    followers,
    stats
  } = conversation;
  const hasFollowers = followers && lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(followers.nodes) > 0;
  const hasComments = stats && stats.commentsCount > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      mr: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        collective: fromAccount,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
          collective: fromAccount,
          radius: 40
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        href: `/${collectiveSlug}/conversations/${slug}-${id}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H5, {
          wordBreak: "break-word",
          mb: 2,
          children: title
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
        color: "black.500",
        fontSize: "12px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
            date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedDate, {
              value: createdAt,
              day: "numeric",
              month: "long",
              year: "numeric"
            }),
            author: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              collective: fromAccount
            })
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
        color: "black.700",
        mt: 2,
        fontSize: "13px",
        dangerouslySetInnerHTML: {
          __html: summary
        },
        "data-cy": "conversation-preview"
      }), (hasFollowers || hasComments) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        mt: 3,
        alignItems: "center",
        children: [hasFollowers && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          mr: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_FollowersAvatars__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            followers: followers.nodes,
            totalCount: followers.totalCount,
            maxNbDisplayed: 3,
            avatarRadius: 24
          })
        }), hasComments && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          display: "flex",
          alignItems: "center",
          color: "black.500",
          title: formatMessage(messages.commentsCount, {
            n: stats.commentsCount
          }),
          fontSize: "12px",
          "data-cy": "replies-count",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
const ConversationsList = ({
  collectiveSlug,
  conversations
}) => {
  if (!conversations || conversations.length === 0) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    children: conversations.map((conversation, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      borderTop: !idx ? undefined : '1px solid',
      borderColor: "black.300",
      p: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ConversationListItem, {
        collectiveSlug: collectiveSlug,
        conversation: conversation
      })
    }, conversation.id))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationsList);

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

/***/ 37436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hm": () => (/* binding */ isUserFollowingConversationQuery),
/* harmony export */   "Y6": () => (/* binding */ commentFieldsFragment),
/* harmony export */   "mM": () => (/* binding */ conversationListFragment)
/* harmony export */ });
/* unused harmony export updateListFragment */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const commentFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment CommentFields on Comment {
    id
    createdAt
    html
    reactions
    userReactions
    fromAccount {
      id
      type
      name
      slug
      imageUrl
    }
  }
`;
const conversationListFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ConversationListFragment on ConversationCollection {
    totalCount
    offset
    limit
    nodes {
      id
      title
      summary
      slug
      createdAt
      tags
      fromAccount {
        id
        name
        type
        slug
        imageUrl
      }
      followers(limit: 5) {
        totalCount
        nodes {
          id
          slug
          type
          name
          imageUrl(height: 64)
        }
      }
      stats {
        id
        commentsCount
      }
    }
  }
`;
const isUserFollowingConversationQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query IsUserFollowingConversation($id: String!) {
    loggedInAccount {
      id
      slug
      imageUrl
      type
      name
      ... on Individual {
        isFollowingConversation(id: $id)
      }
    }
  }
`;
const updateListFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment UpdateListFragment on UpdateCollection {
    totalCount
    offset
    limit
    nodes {
      id
      slug
      title
      summary
      createdAt
      publishedAt
      isPrivate
      userCanSeeUpdate
      fromAccount {
        id
        type
        name
        slug
        imageUrl
      }
    }
  }
`;

/***/ }),

/***/ 6845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75827);
/* harmony import */ var _styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0__.MessageSquare).withConfig({
  displayName: "CommentIcon",
  componentId: "sc-hzbk8p-0"
})(["transform:scaleX(-1);"]));

/***/ }),

/***/ 78113:
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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99708);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5700);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5824);
/* harmony import */ var _components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(325);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69078);
/* harmony import */ var _components_conversations_ConversationsList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69794);
/* harmony import */ var _components_conversations_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37436);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(73908);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16159);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(92129);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(53169);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(37278);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(84842);
/* harmony import */ var _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(43825);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledTag__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(36422);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_10__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_17__, _components_Page__WEBPACK_IMPORTED_MODULE_22__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_23__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_10__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_17__, _components_Page__WEBPACK_IMPORTED_MODULE_22__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




























/**
 * The main page to display collectives. Wrap route parameters and GraphQL query
 * to render `components/collective-page` with everything needed.
 */




class ConversationsPage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "resetTag", () => {
      const {
        collectiveSlug
      } = this.props;
      this.props.router.push(`/${collectiveSlug}/conversations`);
    });
  }

  static getInitialProps({
    query: {
      collectiveSlug,
      tag
    }
  }) {
    return {
      collectiveSlug,
      tag
    };
  }

  getPageMetaData(collective) {
    const baseMetadata = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_7__/* .getCollectivePageMetadata */ .Xq)(collective);

    if (collective) {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: `${collective.name}'s conversations`
      });
    } else {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: 'Conversations'
      });
    }
  }

  /** Must only be called when dataIsReady */
  renderConversations(conversations) {
    const {
      collectiveSlug
    } = this.props;

    if (conversations.length > 0) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_conversations_ConversationsList__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        collectiveSlug: collectiveSlug,
        conversations: conversations
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
        children: [this.props.tag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
          mb: 4,
          type: "info",
          withIcon: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "conversations.noMatch",
            defaultMessage: [{
              "type": 0,
              "value": "No conversation matching the given criteria."
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          href: `/${collectiveSlug}/conversations/new`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            buttonStyle: "primary",
            buttonSize: "large",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "conversations.createFirst",
              defaultMessage: [{
                "type": 0,
                "value": "Start a new conversation"
              }]
            })
          })
        })]
      });
    }
  }

  render() {
    const {
      collectiveSlug,
      data
    } = this.props;

    const conversations = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'account.conversations.nodes', []);

    if (!data.loading) {
      if (!data || data.error) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          data: data
        });
      } else if (!data.account) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_8__/* .generateNotFoundError */ .mN)(collectiveSlug),
          log: false
        });
      }
    }

    const collective = data.account;
    const dataIsReady = collective && collective.conversations;

    if (collective && !(0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(collective, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_6__/* .FEATURES.CONVERSATIONS */ .h6.CONVERSATIONS)) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {});
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      collective: collective
    }, this.getPageMetaData(collective)), {}, {
      children: !dataIsReady && data.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {})
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        collective: collective,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          "data-cy": "page-conversations",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            collective: collective,
            selectedCategory: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_11__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            py: [4, 5],
            px: [2, 3, 4],
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              maxWidth: 1200,
              m: "0 auto",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_26__.H1, {
                fontSize: "40px",
                fontWeight: "normal",
                textAlign: "left",
                mb: 2,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "conversations",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Conversations"
                  }]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
                flexWrap: "wrap",
                alignItems: "center",
                mb: 4,
                pr: 2,
                justifyContent: "space-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                  color: "black.700",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "conversations.subtitle",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Let’s get the discussion going! This is a space for the community to converse, ask questions, say thank you, and get things done together."
                    }]
                  })
                }), conversations.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
                  flex: "0 0 300px",
                  flexWrap: "wrap",
                  mt: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    href: `/${collectiveSlug}/conversations/new`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                      buttonStyle: "primary",
                      m: 2,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                        id: "conversations.create",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Create a Conversation"
                        }]
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
                flexDirection: ['column-reverse', null, 'row'],
                justifyContent: "space-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
                  mr: [null, null, null, 5],
                  flex: "1 1 73%",
                  children: this.renderConversations(conversations)
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
                  mb: 3,
                  flex: "1 1 27%",
                  children: collective.conversationsTags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_26__.H4, {
                      px: 2,
                      mb: 3,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                        id: "Tags",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Tags"
                        }]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
                      flexWrap: "wrap",
                      mx: 2,
                      children: collective.conversationsTags.map(({
                        tag
                      }) => tag === this.props.tag ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_StyledTag__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                        type: "info",
                        variant: "rounded-right",
                        mb: "4px",
                        mr: "4px",
                        closeButtonProps: {
                          onClick: this.resetTag
                        },
                        children: tag
                      }, tag) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        href: {
                          pathname: `/${collectiveSlug}/conversations`,
                          query: {
                            tag
                          }
                        },
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_StyledTag__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                          variant: "rounded-right",
                          mb: "4px",
                          mr: "4px",
                          children: tag
                        })
                      }, tag))
                    })]
                  })
                })]
              })]
            })
          })]
        })
      })
    }));
  }

}

const conversationsPageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query ConversationsPage($collectiveSlug: String!, $tag: String) {
    account(slug: $collectiveSlug, throwIfMissing: false) {
      id
      legacyId
      slug
      name
      type
      description
      settings
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
      conversations(tag: $tag) {
        ...ConversationListFragment
      }
      conversationsTags {
        id
        tag
      }
      ... on Collective {
        isApproved
      }
      features {
        id
        ...NavbarFields
      }
    }
  }
  ${_components_conversations_graphql__WEBPACK_IMPORTED_MODULE_16__/* .conversationListFragment */ .mM}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_12__/* .collectiveNavbarFieldsFragment */ .AS}
`;
const addConversationsPageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__.graphql)(conversationsPageQuery, {
  options: {
    // Because this list is updated often, using this option ensures that the list gets
    // properly updated when doing things like redirecting after a conversation delete.
    fetchPolicy: 'cache-and-network',
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T
  }
});
ConversationsPage.__docgenInfo = {
  "description": "The main page to display collectives. Wrap route parameters and GraphQL query\nto render `components/collective-page` with everything needed.",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, tag } }",
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
    "name": "resetTag",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderConversations",
    "docblock": "Must only be called when dataIsReady",
    "modifiers": [],
    "params": [{
      "name": "conversations"
    }],
    "returns": null,
    "description": "Must only be called when dataIsReady"
  }],
  "displayName": "ConversationsPage",
  "props": {
    "collectiveSlug": {
      "description": "@ignore from getInitialProps",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "tag": {
      "description": "@ignore from getInitialProps",
      "type": {
        "name": "string"
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
              "canContact": {
                "name": "bool",
                "required": false
              },
              "conversations": {
                "name": "shape",
                "value": {
                  "nodes": {
                    "name": "arrayOf",
                    "value": {
                      "name": "object"
                    },
                    "required": false
                  }
                },
                "required": true
              },
              "conversationsTags": {
                "name": "arrayOf",
                "value": {
                  "name": "shape",
                  "value": {
                    "tag": {
                      "name": "string",
                      "required": true
                    }
                  }
                },
                "required": true
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_27__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(addConversationsPageData(ConversationsPage))));
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208], () => (__webpack_exec__(78113)));
module.exports = __webpack_exports__;

})();