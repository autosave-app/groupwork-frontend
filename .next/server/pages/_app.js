(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 26725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_GlobalNewsAndUpdates)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(29114);
// EXTERNAL MODULE: external "@apollo/client/react/components"
var components_ = __webpack_require__(72743);
// EXTERNAL MODULE: external "@styled-icons/fa-brands/Twitter"
var Twitter_ = __webpack_require__(14638);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/HTMLContent.js
var HTMLContent = __webpack_require__(74770);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(56562);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 1 modules
var MessageBox = __webpack_require__(37278);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCarousel.js
var StyledCarousel = __webpack_require__(38104);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/NewsAndUpdatesModal.js
const _excluded = ["onClose"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






















const ModalHeaderWrapper = external_styled_components_default()(StyledModal/* ModalHeader */.xB).withConfig({
  displayName: "NewsAndUpdatesModal__ModalHeaderWrapper",
  componentId: "sc-cv3pij-0"
})(["height:58px;"]);
const ModalWrapper = external_styled_components_default()(StyledModal/* default */.ZP).withConfig({
  displayName: "NewsAndUpdatesModal__ModalWrapper",
  componentId: "sc-cv3pij-1"
})(["padding-top:8px;padding-bottom:0px;"]);
const ModalFooterWrapper = external_styled_components_default()(StyledModal/* ModalFooter */.mz).withConfig({
  displayName: "NewsAndUpdatesModal__ModalFooterWrapper",
  componentId: "sc-cv3pij-2"
})(["height:65px;"]);
const newsAndUpdatesQuery = client_.gql`
  query ChangelogUpdates($limit: Int) {
    account(slug: "opencollective") {
      id
      updates(
        orderBy: { field: PUBLISHED_AT, direction: DESC }
        onlyChangelogUpdates: true
        onlyPublishedUpdates: true
        limit: $limit
      ) {
        nodes {
          id
          slug
          publishedAt
          title
          html
          summary
        }
      }
    }
  }
`;

const renderStyledCarousel = (data, loading, error, onClose) => {
  if (loading === false && data) {
    return /*#__PURE__*/jsx_runtime_.jsx(StyledCarousel/* default */.Z, {
      contentPosition: "left",
      children: data.account.updates.nodes.map(update => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
          fontSize: "13px",
          lineHeight: "20px",
          color: "black.700",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedDate, {
            value: update.publishedAt,
            day: "numeric",
            month: "long",
            year: "numeric"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
            paddingTop: "10px",
            children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              width: 12,
              height: 12,
              src: "/static/images/news-and-updates-ellipse.svg",
              alt: "News and Updates Ellipse"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
            fontSize: "20px",
            margin: "0px 12px",
            fontWeight: "500",
            lineHeight: "36px",
            color: "black.900",
            children: update.title
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
          pt: 2,
          pb: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
            onClick: onClose,
            as: Link/* default */.Z,
            href: `/opencollective/updates/${update.slug}`,
            color: "blue.700",
            fontSize: "14px",
            display: "flex",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "NewsAndUpdates.link.giveFeedback",
              defaultMessage: [{
                "type": 0,
                "value": "Read more & give Feedback"
              }]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
          pb: 1,
          children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            width: "100%",
            children: /*#__PURE__*/jsx_runtime_.jsx(HTMLContent/* default */.Z, {
              collapsable: true,
              maxHeight: 430,
              maxCollapsedHeight: 430,
              color: "black.800",
              mt: 1,
              fontSize: "16px",
              content: update.html,
              hideViewMoreLink: true
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
          pt: 1,
          pb: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
            onClick: onClose,
            as: Link/* default */.Z,
            href: `/opencollective/updates/${update.slug}`,
            fontSize: "14px",
            display: "flex",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "ContributeCard.ReadMore",
              defaultMessage: [{
                "type": 0,
                "value": "Read more"
              }]
            })
          })
        })]
      }, update.id))
    });
  } else if (error) {
    return /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "center",
      px: 2,
      py: 6,
      children: /*#__PURE__*/jsx_runtime_.jsx(MessageBox/* default */.Z, {
        type: "error",
        withIcon: true,
        mb: 5,
        children: error.message
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {});
  }
};

const NewsAndUpdatesModal = _ref => {
  let {
    onClose
  } = _ref,
      modalProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ModalWrapper, _objectSpread(_objectSpread({
    onClose: onClose,
    width: "576px"
  }, modalProps), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeaderWrapper, {
      onClose: onClose,
      children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
        width: "100%",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
              width: 72,
              height: 72,
              src: "/static/images/updates-and-news-modal-icon.svg",
              alt: "Updates and News Icon"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
            fontSize: ['25px', '28px'],
            fontWeight: "500",
            lineHeight: "36px",
            color: "black.900",
            ml: 16,
            mt: "18px",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "NewsAndUpdates.link.whatsNew",
              defaultMessage: [{
                "type": 0,
                "value": "What's new"
              }]
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx(StyledModal/* ModalBody */.fe, {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_.Query, {
        query: newsAndUpdatesQuery,
        variables: {
          limit: 5
        },
        context: helpers/* API_V2_CONTEXT */.T,
        children: ({
          data,
          loading,
          error
        }) => renderStyledCarousel(data, loading, error, onClose)
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ModalFooterWrapper, {
      isFullWidth: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        display: "flex",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
          width: 1 / 2,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLink/* default */.Z, {
            href: "https://twitter.com/opencollect",
            openInNewTab: true,
            color: "black.500",
            display: "flex",
            mt: 1,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
              pr: 2,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "NewsAndUpdates.link.twitterFollow",
                defaultMessage: [{
                  "type": 0,
                  "value": "Follow us"
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
              children: /*#__PURE__*/jsx_runtime_.jsx(Twitter_.Twitter, {
                size: 17,
                color: "#1153D6"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
          width: 1 / 2,
          justifyContent: "right",
          mb: "16px",
          children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            onClick: onClose,
            href: "/opencollective/updates",
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
              buttonSize: "tiny",
              children: /*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
                fontSize: ['11px', '14px'],
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                  id: "NewsAndUpdates.button.seeAllUpdates",
                  defaultMessage: [{
                    "type": 0,
                    "value": "See all new updates"
                  }]
                })
              })
            })
          })
        })]
      })
    })]
  }));
};

NewsAndUpdatesModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NewsAndUpdatesModal",
  "props": {
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
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
/* harmony default export */ const components_NewsAndUpdatesModal = (NewsAndUpdatesModal);
// EXTERNAL MODULE: ./components/NewsAndUpdatesProvider.js
var NewsAndUpdatesProvider = __webpack_require__(77777);
;// CONCATENATED MODULE: ./components/GlobalNewsAndUpdates.js





const GlobalNewsAndUpdates = () => {
  const {
    showNewsAndUpdates,
    setShowNewsAndUpdates
  } = (0,NewsAndUpdatesProvider/* useNewsAndUpdates */.JR)();
  return showNewsAndUpdates ? /*#__PURE__*/jsx_runtime_.jsx(components_NewsAndUpdatesModal, {
    onClose: () => setShowNewsAndUpdates(false)
  }) : null;
};

GlobalNewsAndUpdates.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "GlobalNewsAndUpdates",
  "props": {
    "showNewsAndUpdates": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "setShowNewsAndUpdates": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_GlobalNewsAndUpdates = (GlobalNewsAndUpdates);

/***/ }),

/***/ 7044:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export DEFAULT_TOAST_DURATION */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95050);
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_flip_move__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10066);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43359);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Toast__WEBPACK_IMPORTED_MODULE_5__, _ToastProvider__WEBPACK_IMPORTED_MODULE_6__]);
([_Toast__WEBPACK_IMPORTED_MODULE_5__, _ToastProvider__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const UPDATE_INTERVAL = 500; // milliseconds

const DEFAULT_TOAST_DURATION = 15000; // milliseconds

/**
 * A singleton component intended to display the toasts from ToastProvider.
 */

class GlobalToasts extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateToasts", () => {
      if (this.state.isPaused || !this.props.toasts?.length) {
        return;
      } else {
        this.forceUpdate(); // Force update to animate properly (though timeLeft)

        this.props.removeToasts(toast => this.getTimeLeft(toast) <= 0);
      }
    });

    _defineProperty(this, "getTimeLeft", toast => {
      const expiresAt = toast.createdAt + (toast.duration || DEFAULT_TOAST_DURATION);
      return expiresAt - Date.now();
    });

    _defineProperty(this, "pause", () => {
      if (this.startTimeout) {
        clearTimeout(this.startTimeout);
        this.startTimeout = null;
      }

      this.setState({
        isPaused: true
      });
    });

    _defineProperty(this, "startAfterDelay", () => {
      if (this.state.isPaused && !this.startTimeout) {
        this.startTimeout = setTimeout(() => {
          this.startTimeout = null;
          this.setState({
            isPaused: false
          });
        }, 2000);
      }
    });

    this.updateInterval = null;
    this.startTimeout = null;
    this.state = {
      isPaused: false
    };
  }

  componentDidMount() {
    if (this.props.toasts?.length) {
      this.setUpdateInterval();
    }
  }

  componentDidUpdate(oldProps) {
    if (!this.props.toasts?.length) {
      this.clearUpdateInterval();
    } else {
      if (this.state.isPaused && !oldProps.toasts?.length) {
        this.setState({
          isPaused: false
        });
      }

      this.setUpdateInterval();
    }
  }

  setUpdateInterval() {
    if (this.updateInterval === null) {
      this.updateInterval = setInterval(this.updateToasts, UPDATE_INTERVAL);
    }
  }

  clearUpdateInterval() {
    if (this.updateInterval !== null) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  render() {
    if (!this.props.toasts?.length) {
      return null;
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      position: "fixed",
      bottom: [15, 40],
      right: [15, 40],
      maxWidth: 318,
      width: "100%",
      onMouseEnter: this.pause,
      onMouseLeave: this.startAfterDelay,
      zIndex: 100000,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_flip_move__WEBPACK_IMPORTED_MODULE_1___default()), {
        disableAllAnimations: _lib_animations__WEBPACK_IMPORTED_MODULE_2__/* .DISABLE_ANIMATIONS */ .t,
        children: this.props.toasts.map(toast => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          mt: 24,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Toast__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            variant: toast.variant,
            toast: toast,
            timeLeft: this.getTimeLeft(toast),
            onClose: () => this.props.removeToasts(t => t.id === toast.id)
          })
        }, toast.id))
      })
    });
  }

}

GlobalToasts.__docgenInfo = {
  "description": "A singleton component intended to display the toasts from ToastProvider.",
  "methods": [{
    "name": "setUpdateInterval",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "clearUpdateInterval",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "updateToasts",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getTimeLeft",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "toast",
      "type": null
    }],
    "returns": null
  }, {
    "name": "pause",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "startAfterDelay",
    "docblock": "Start after a delay to make sure toasts don't disappear right after mouse leaves",
    "modifiers": [],
    "params": [],
    "returns": null,
    "description": "Start after a delay to make sure toasts don't disappear right after mouse leaves"
  }],
  "displayName": "GlobalToasts",
  "props": {
    "removeToasts": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "toasts": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": true
            },
            "type": {
              "name": "enum",
              "computed": true,
              "value": "Object.values(TOAST_TYPE)",
              "required": true
            },
            "title": {
              "name": "node",
              "required": false
            },
            "message": {
              "name": "node",
              "required": false
            },
            "createdAt": {
              "name": "number",
              "required": false
            },
            "duration": {
              "name": "number",
              "required": false
            },
            "variant": {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ToastProvider__WEBPACK_IMPORTED_MODULE_6__/* .withToasts */ .CP)(GlobalToasts));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ isEmptyValue),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41032);
/* harmony import */ var _styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2331);
/* harmony import */ var _styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["content", "collapsable", "maxHeight", "maxCollapsedHeight", "collapsePadding", "hideViewMoreLink"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/**
 * React-Quill usually saves something like `<p><br/></p` when saving with an empty
 * editor. This function tries to detect this and returns true if there's no real
 * text, image or iframe contents.
 */



const isEmptyValue = value => {
  if (!value) {
    return true;
  } else if (value.length > 50) {
    // Running the regex on long strings can be costly, and there's very few chances
    // to have a blank content with tons of empty markup.
    return false;
  } else if (/(<img)|(<iframe)|(<video)/.test(value)) {
    // If the content has no text but has an image or an iframe (video) then it's not blank
    return false;
  } else {
    // Strip all tags and check if there's something left
    const cleanStr = value.replace(/(<([^>]+)>)/gi, '');
    return cleanStr.length === 0;
  }
};
const ReadFullLink = styled_components__WEBPACK_IMPORTED_MODULE_5___default().a.withConfig({
  displayName: "HTMLContent__ReadFullLink",
  componentId: "sc-5326of-0"
})(["cursor:pointer;font-size:12px;> svg{vertical-align:baseline;}"]);
const InlineDisplayBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "HTMLContent__InlineDisplayBox",
  componentId: "sc-5326of-1"
})(["overflow-y:hidden;", ""], props => props.maxHeight && `max-height: ${props.maxHeight + 20}px;`);
const CollapsedDisplayBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "HTMLContent__CollapsedDisplayBox",
  componentId: "sc-5326of-2"
})(["overflow-y:hidden;", " -webkit-mask-image:linear-gradient(to bottom,black 50%,transparent 100%);mask-image:linear-gradient(to bottom,black 50%,transparent 100%);"], props => props.maxHeight && `max-height: ${props.maxCollapsedHeight + 20}px;`);
/**
 * `RichTextEditor`'s associate, this component will display raw HTML with some CSS
 * resets to ensure we don't mess with the styles. Content can be omitted if you're
 * just willing to take the styles, for example to match the content displayed in the
 * editor with how it's rendered on the page.
 *
 * ⚠️ Be careful! This component will pass content to `dangerouslySetInnerHTML` so
 * always ensure `content` is properly sanitized!
 */

const HTMLContent = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_ref => {
  let {
    content,
    collapsable = false,
    maxHeight,
    maxCollapsedHeight = 20,
    collapsePadding = 1,
    hideViewMoreLink = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [isCollapsed, setIsCollapsed] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const DisplayBox = !isCollapsed || isOpen ? InlineDisplayBox : CollapsedDisplayBox;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (collapsable && contentRef?.current?.clientHeight > maxCollapsedHeight + collapsePadding) {
      setIsCollapsed(true);
    }
  }, [content]);

  if (!content) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", _objectSpread({}, props));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(DisplayBox, _objectSpread({
      ref: contentRef,
      maxHeight: maxHeight,
      maxCollapsedHeight: maxCollapsedHeight,
      dangerouslySetInnerHTML: {
        __html: content
      }
    }, props)), !isOpen && isCollapsed && !hideViewMoreLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ReadFullLink, _objectSpread(_objectSpread({
      onClick: () => setOpen(true)
    }, props), {}, {
      role: "button",
      tabIndex: 0,
      onKeyDown: event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          setOpen(true);
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "ExpandDescription",
        defaultMessage: [{
          "type": 0,
          "value": "Read full description"
        }]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__.CaretDown, {
        size: "10px"
      })]
    })), isOpen && isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ReadFullLink, _objectSpread(_objectSpread({
      onClick: () => setOpen(false)
    }, props), {}, {
      role: "button",
      tabIndex: 0,
      onKeyDown: event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          setOpen(false);
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "W/V6+Y",
        defaultMessage: [{
          "type": 0,
          "value": "Collapse"
        }]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__.CaretUp, {
        size: "10px"
      })]
    }))]
  });
}).withConfig({
  displayName: "HTMLContent",
  componentId: "sc-5326of-3"
})(["width:100%;line-height:1.75em;overflow-wrap:break-word;h1,h2,h3{margin:0;font-weight:normal;text-align:left;}h3{font-size:1.25em;margin-bottom:0.25em;}figure{margin:0;&[data-trix-content-type='--embed-iframe-video']{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;iframe{position:absolute;top:0;left:0;width:100%;height:100%;}}&[data-trix-content-type='--embed-iframe-anchorFm']{iframe{min-height:300px;}}}img{max-width:100%;}.ql-align-center{text-align:center;}.ql-align-right{text-align:right;}.ql-align-left{text-align:left;}blockquote{font-size:1em;border-left:5px solid #e9e9e9;background:white;color:#757677;margin:0;padding:16px;}pre{font-size:0.85em;background:#f6f8fa;color:#333;border:none;padding:16px;font-family:monospace;overflow-x:auto;}", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_6__.typography, styled_system__WEBPACK_IMPORTED_MODULE_6__.space, props => {
  let primaryColor = props.theme.colors.primary[500];
  let secondaryColor = props.theme.colors.primary[400];
  const luminance = (0,polished__WEBPACK_IMPORTED_MODULE_3__.getLuminance)(primaryColor);

  if (luminance < 0 || luminance > 0.9) {
    return null;
  } else if (luminance < 0.06) {
    primaryColor = props.theme.colors.primary[400];
    secondaryColor = props.theme.colors.primary[200];
  } else if (luminance > 0.6) {
    primaryColor = props.theme.colors.primary[900];
    secondaryColor = props.theme.colors.primary[700];
  }

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["a{color:", ";&:hover{color:", ";}}"], primaryColor, secondaryColor);
});
HTMLContent.defaultProps = {
  fontSize: '14px'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLContent);

/***/ }),

/***/ 43359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97881);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20384);
/* harmony import */ var _styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_9__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).attrs({
  'data-cy': 'dismiss-toast-btn',
  buttonSize: 'tiny',
  isBorderless: true,
  p: 0
}).withConfig({
  displayName: "Toast__CloseButton",
  componentId: "sc-19goiu5-0"
})([""]);
const ToastTitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default().span.withConfig({
  displayName: "Toast__ToastTitle",
  componentId: "sc-19goiu5-1"
})(["font-size:12px;line-height:16px;font-weight:500;text-transform:uppercase;letter-spacing:0.06em;"]);
const ToastMessage = styled_components__WEBPACK_IMPORTED_MODULE_5___default().span.withConfig({
  displayName: "Toast__ToastMessage",
  componentId: "sc-19goiu5-2"
})(["font-size:13px;line-height:20px;font-weight:500;letter-spacing:0;margin-top:8px;word-break:break-word;"]);
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "Toast__IconContainer",
  componentId: "sc-19goiu5-3"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;min-width:28px;width:28px;height:28px;color:#ffffff;"]);
const Separator = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "Toast__Separator",
  componentId: "sc-19goiu5-4"
})(["width:4px;height:100%;min-height:40px;margin:0 12px;"]);
const variantType = (0,styled_system__WEBPACK_IMPORTED_MODULE_6__.variant)({
  variants: {
    light: {
      bg: '#ffffff',
      borderColor: '#FFFFFF',
      [ToastTitle]: {
        color: 'black.800'
      },
      [ToastMessage]: {
        color: 'black.600'
      },
      [CloseButton]: {
        color: 'black.500'
      },
      '&[data-type="INFO"]': {
        [IconContainer]: {
          bg: 'blue.600'
        },
        [Separator]: {
          bg: 'blue.600'
        }
      },
      '&[data-type="ERROR"]': {
        [IconContainer]: {
          bg: '#E03F6A'
        },
        [Separator]: {
          bg: '#E03F6A'
        }
      },
      '&[data-type="SUCCESS"]': {
        [IconContainer]: {
          bg: '#29CC75'
        },
        [Separator]: {
          bg: '#29CC75'
        }
      }
    },
    dark: {
      bg: 'rgba(50, 51, 52, 0.8)',
      borderColor: 'black.900',
      [ToastTitle]: {
        color: '#FFFFFF'
      },
      [ToastMessage]: {
        color: 'black.100'
      },
      [CloseButton]: {
        color: 'black.200',
        '&:hover': {
          color: 'black.800',
          boxShadow: '4px 4px 4px #505050'
        }
      },
      '&[data-type="INFO"]': {
        [IconContainer]: {
          bg: 'blue.500'
        },
        [Separator]: {
          bg: 'blue.500'
        }
      },
      '&[data-type="ERROR"]': {
        [IconContainer]: {
          bg: 'red.400'
        },
        [Separator]: {
          bg: 'red.400'
        }
      },
      '&[data-type="SUCCESS"]': {
        [IconContainer]: {
          bg: '#29CC75'
        },
        [Separator]: {
          bg: '#29CC75'
        }
      },
      a: {
        color: 'white.full',
        textDecoration: 'underline'
      }
    }
  }
});
const StyledToast = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "Toast__StyledToast",
  componentId: "sc-19goiu5-5"
})(["position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:stretch;padding:24px;padding-right:18px;border-radius:8px;border:1px solid #efefef;opacity:1;z-index:1000000;", " &:not(:hover){", "}", ""], props => !props.isClosing && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["box-shadow:0px 3px 7px -3px #bfbfbfa8;transition:box-shadow 0.2s;&:hover{box-shadow:0px 3px 7px 0px #bfbfbfa8;}"]), props => {
  if (props.timeLeft <= 1000) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["opacity:0.25;transition:opacity 2s;"]);
  } else if (props.timeLeft <= 2500) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["opacity:0.8;transition:opacity 2s;"]);
  }
}, variantType);
const DEFAULT_TITLES = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  [_ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS]: {
    id: "Success",
    defaultMessage: [{
      "type": 0,
      "value": "Success"
    }]
  },
  [_ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .TOAST_TYPE.ERROR */ ["do"].ERROR]: {
    id: "Error",
    defaultMessage: [{
      "type": 0,
      "value": "Error"
    }]
  }
});

const getDefaultTitle = (intl, toastType) => {
  return DEFAULT_TITLES[toastType] ? intl.formatMessage(DEFAULT_TITLES[toastType]) : null;
};

const getIcon = toast => {
  if (toast.icon) {
    return toast.icon;
  }

  switch (toast.type) {
    case _ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .TOAST_TYPE.ERROR */ ["do"].ERROR:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_2__.Times, {
        size: 12
      });

    default:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1__.Check, {
        size: 12
      });
  }
};

const Toast = ({
  toast,
  timeLeft,
  onClose,
  variant
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const [isClosing, setClosing] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StyledToast, {
    timeLeft: timeLeft,
    isClosing: isClosing,
    "data-type": toast.type,
    variant: variant,
    "data-cy": "toast-notification",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(IconContainer, {
        children: getIcon(toast)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Separator, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        flexDirection: "column",
        justifyContent: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ToastTitle, {
          children: toast.title || getDefaultTitle(intl, toast.type)
        }), toast.message && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ToastMessage, {
          children: toast.message
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      alignItems: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(CloseButton, {
        size: 36,
        onClick: () => {
          setClosing(true);
          onClose();
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__.Close, {
          size: 14
        })
      })
    })]
  });
};

Toast.defaultProps = {
  timeLeft: 6000,
  variant: 'dark'
};
Toast.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Toast",
  "props": {
    "timeLeft": {
      "defaultValue": {
        "value": "6000",
        "computed": false
      },
      "description": "The time left before the toast disappears",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "variant": {
      "defaultValue": {
        "value": "'dark'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'light'",
          "computed": false
        }, {
          "value": "'dark'",
          "computed": false
        }]
      },
      "required": false
    },
    "toast": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(TOAST_TYPE)",
            "required": true
          },
          "title": {
            "name": "node",
            "required": false
          },
          "icon": {
            "name": "node",
            "required": false
          },
          "message": {
            "name": "node",
            "required": false
          },
          "createdAt": {
            "name": "number",
            "required": false
          }
        }
      },
      "required": true
    },
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toast);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TwoFactorAuthenticationModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62131);
/* harmony import */ var _lib_two_factor_authentication_TwoFactorAuthenticationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70137);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25896);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97274);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71792);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
















function TwoFactorAuthenticationModal() {
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const [twoFactorCode, setTwoFactorCode] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
  const [confirming, setConfirming] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const prompt = (0,_lib_two_factor_authentication_TwoFactorAuthenticationContext__WEBPACK_IMPORTED_MODULE_5__/* .useTwoFactorAuthenticationPrompt */ .AB)();
  const cancel = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
    setTwoFactorCode('');
    setConfirming(false);
    prompt.rejectAuth((0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .ERROR.TWO_FACTOR_AUTH_CANCELED */ .pn.TWO_FACTOR_AUTH_CANCELED));
  }, []);
  const confirm = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
    const code = twoFactorCode;
    setConfirming(true);
    setTwoFactorCode('');
    prompt.resolveAuth({
      type: 'totp',
      code
    });
    setConfirming(false);
  }, [twoFactorCode]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const handleRouteChange = () => {
      cancel();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [cancel]);

  if (prompt?.isOpen) {
    const has2FAConfigured = prompt.supportedMethods.length > 0;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
      onClose: cancel,
      trapFocus: true,
      maxWidth: 495,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_12__/* .ModalHeader */ .xB, {
        hideCloseIcon: true,
        children: has2FAConfigured ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "OFuY3u",
          defaultMessage: [{
            "type": 0,
            "value": "Verify using the 2FA code"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "CMlTK9",
          defaultMessage: [{
            "type": 0,
            "value": "You must configure 2FA to access this feature"
          }]
        })
      }), has2FAConfigured ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        mt: 2,
        flexDirection: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Label */ .__, {
          htmlFor: "2fa-code-input",
          fontWeight: "normal",
          as: "label",
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "TwoFactorAuth.Setup.Form.InputLabel",
            defaultMessage: [{
              "type": 0,
              "value": "Please enter your 6-digit code without any dashes."
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
          id: "2fa-code-input",
          name: "2fa-code-input",
          type: "text",
          minHeight: 50,
          fontSize: "20px",
          placeholder: "123456",
          pattern: "[0-9]{6}",
          inputMode: "numeric",
          value: twoFactorCode,
          onChange: e => setTwoFactorCode(e.target.value),
          disabled: confirming,
          onKeyDown: event => {
            if (event.key === 'Enter' && twoFactorCode?.length === 6) {
              event.preventDefault();
              confirm();
            }
          },
          autoFocus: true
        })]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        mt: 2,
        flexDirection: "column",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
          fontWeight: "normal",
          as: "label",
          mb: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "j8E0VG",
            defaultMessage: [{
              "type": 0,
              "value": "To enable Two-Factor Authentication (2FA), follow the steps "
            }, {
              "type": 8,
              "value": "link",
              "children": [{
                "type": 0,
                "value": "here"
              }]
            }],
            values: {
              link: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* .getI18nLink */ .fw)({
                href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getSettingsRoute */ .aT)(LoggedInUser.collective, 'user-security'),
                as: _Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
              })
            }
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_12__/* .ModalFooter */ .mz, {
        isFullWidth: true,
        dividerMargin: "1rem 0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          justifyContent: "right",
          flexWrap: "wrap",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            disabled: confirming,
            mr: 2,
            minWidth: 120,
            onClick: cancel,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "actions.cancel",
              defaultMessage: [{
                "type": 0,
                "value": "Cancel"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            ml: 2,
            minWidth: 120,
            buttonStyle: "primary",
            loading: confirming,
            disabled: !has2FAConfigured || twoFactorCode?.length !== 6,
            onClick: confirm,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "actions.verify",
              defaultMessage: [{
                "type": 0,
                "value": "Verify"
              }]
            })
          })]
        })
      })]
    });
  }

  return null;
}
TwoFactorAuthenticationModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TwoFactorAuthenticationModal"
};

/***/ }),

/***/ 10066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ DISABLE_ANIMATIONS)
/* harmony export */ });
const DISABLE_ANIMATIONS = ['e2e', 'ci'].includes("ci");

/***/ }),

/***/ 82114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53291);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36619);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);


 // In-order to use certain functionality of dayjs, we need to import certain plugins and extend them to the dayjs object.
// adding utc plugin

dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default())); // adding timezone plugin

dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((dayjs__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ 45858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getGoogleMapsScriptUrl),
/* harmony export */   "_": () => (/* binding */ loadGoogleMaps)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9269);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97079);




const getGoogleMapsScriptUrl = () => {
  const apiKey = (0,_env_utils__WEBPACK_IMPORTED_MODULE_1__/* .getEnvVar */ .p)('GOOGLE_MAPS_API_KEY');
  return `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
};

const loadGoogleMapsAsync = () => new Promise((resolve, reject) => {
  const callbackName = '_googleMapsInitializeCallback';

  window[callbackName] = () => {
    resolve();
  };

  (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .loadScriptAsync */ .SH)(`${getGoogleMapsScriptUrl()}&callback=${callbackName}`).catch(err => {
    reject(err);
  });
});

const loadGoogleMaps = async () => {
  if (true) {
    return;
  }

  if (lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(window, 'google.maps.places.AutocompleteService')) {
    return;
  }

  const googleMapsApiKey = (0,_env_utils__WEBPACK_IMPORTED_MODULE_1__/* .getEnvVar */ .p)('GOOGLE_MAPS_API_KEY');

  if (!googleMapsApiKey) {
    throw new Error("'GOOGLE_MAPS_API_KEY' is undefined.");
  } else {
    await loadGoogleMapsAsync(googleMapsApiKey);
  }
};



/***/ }),

/***/ 70382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7544);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82114);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50529);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1009);
/* harmony import */ var _components_StripeProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41499);
/* harmony import */ var _components_two_factor_authentication_TwoFactorAuthenticationModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32058);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51927);
/* harmony import */ var _lib_google_maps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45858);
/* harmony import */ var _server_sentry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(68464);
/* harmony import */ var _server_sentry__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_server_sentry__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_GlobalNewsAndUpdates__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26725);
/* harmony import */ var _components_GlobalToasts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7044);
/* harmony import */ var _components_NewsAndUpdatesProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77777);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_GlobalToasts__WEBPACK_IMPORTED_MODULE_17__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_19__]);
([_components_GlobalToasts__WEBPACK_IMPORTED_MODULE_17__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Import first to make sure plugins are initialized










(next_router__WEBPACK_IMPORTED_MODULE_4___default().onRouteChangeStart) = (url, {
  shallow
}) => {
  if (!shallow) {
    nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();
  }
};

(next_router__WEBPACK_IMPORTED_MODULE_4___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();

(next_router__WEBPACK_IMPORTED_MODULE_4___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();






 // Use JSDOM on server-side so that react-intl can render rich messages
// See https://github.com/formatjs/react-intl/blob/c736c2e6c6096b1d5ad1fb6be85fa374891d0a6c/docs/Getting-Started.md#domparser




if (true) {
  global.DOMParser = new ((__webpack_require__(98860).JSDOM))().window.DOMParser;
} // This is optional but highly recommended
// since it prevents memory leak


const cache = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.createIntlCache)();

class OpenCollectiveFrontendApp extends next_app__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: false,
      errorEventId: undefined
    };
  }

  static async getInitialProps({
    Component,
    ctx,
    client
  }) {
    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const {
      locale,
      messages
    } = ctx?.req || window.__NEXT_DATA__.props;
    const props = {
      pageProps: {},
      scripts: {},
      locale,
      messages
    };

    try {
      if (Component.getInitialProps) {
        props.pageProps = await Component.getInitialProps(_objectSpread(_objectSpread({}, ctx), {}, {
          client
        }));
      }

      if (props.pageProps.scripts) {
        if (props.pageProps.scripts.googleMaps) {
          if (ctx.req) {
            props.scripts['google-maps'] = (0,_lib_google_maps__WEBPACK_IMPORTED_MODULE_14__/* .getGoogleMapsScriptUrl */ .W)();
          } else {
            try {
              await (0,_lib_google_maps__WEBPACK_IMPORTED_MODULE_14__/* .loadGoogleMaps */ ._)();
            } catch (e) {
              // eslint-disable-next-line no-console
              console.error(e);
            }
          }
        }
      }
    } catch (error) {
      return _objectSpread(_objectSpread({}, props), {}, {
        hasError: true,
        errorEventId: _server_sentry__WEBPACK_IMPORTED_MODULE_15___default().captureException(error, ctx)
      });
    }

    return props;
  }

  static getDerivedStateFromProps(props, state) {
    // If there was an error generated within getInitialProps, and we haven't
    // yet seen an error, we add it to this.state here
    return {
      hasError: props.hasError || state.hasError || false,
      errorEventId: props.errorEventId || state.errorEventId || undefined
    };
  }

  componentDidCatch(error, errorInfo) {
    const errorEventId = _server_sentry__WEBPACK_IMPORTED_MODULE_15___default().captureException(error, {
      errorInfo
    });
    this.setState({
      hasError: true,
      errorEventId
    });
    super.componentDidCatch(error, errorInfo);
  }

  componentDidMount() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on('routeChangeComplete', url => {
      if (window && window._paq) {
        if (url.match(/\/signin\/sent/)) {
          window._paq.push(['setCustomUrl', '/signin/sent']);
        } else {
          window._paq.push(['setCustomUrl', url]);
        }

        window._paq.push(['trackPageView']);
      }
    });
  }

  render() {
    const {
      client,
      Component,
      pageProps,
      scripts,
      locale,
      messages
    } = this.props;
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.createIntl)({
      locale: locale || 'en',
      defaultLocale: 'en',
      messages
    }, cache);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {
        client: client,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {
          theme: _lib_theme__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_StripeProvider__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.RawIntlProvider, {
              value: intl,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_UserProvider__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_NewsAndUpdatesProvider__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_components_ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_GlobalToasts__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_GlobalNewsAndUpdates__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_components_two_factor_authentication_TwoFactorAuthenticationModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})]
                  })
                })
              })
            })
          })
        })
      }), Object.keys(scripts).map(key => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("script", {
        type: "text/javascript",
        src: scripts[key]
      }, key))]
    });
  }

}

_defineProperty(OpenCollectiveFrontendApp, "propTypes", {
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  scripts: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  locale: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  messages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
});

OpenCollectiveFrontendApp.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static", "async"],
    "params": [{
      "name": "{ Component, ctx, client }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "OpenCollectiveFrontendApp",
  "props": {
    "pageProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "scripts": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "locale": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "messages": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(OpenCollectiveFrontendApp));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68464:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// NOTE: This require will be replaced with `@sentry/browser`
// client side thanks to the webpack config in next.config.js
const Sentry = __webpack_require__(9856);
/**
 * Returns the Sentry environment based on env and current server.
 */


const getSentryEnvironment = () => {
  return "ci";
};
/**
 * Initialize Sentry and export it.
 */


Sentry.init({
  dsn: null,
  environment: getSentryEnvironment(),
  attachStacktrace: true,
  release: "0evNWSYoa-MoNKS_50xG6",
  enabled: true,
  ignoreErrors: [/\[Please ignore this error\]/, // See `IgnorableError`
  'Non-Error promise rejection captured with value: Object Not Found Matching Id', // See https://forum.sentry.io/t/unhandledrejection-non-error-promise-rejection-captured-with-value/14062/17
  'Non-Error promise rejection captured with value: null', // See https://forum.sentry.io/t/unhandledrejection-non-error-promise-rejection-captured-with-value/14062/17
  /instantSearchSDKJSBridgeClearHighlight/, // Bug on Edge for IOS, see https://stackoverflow.com/questions/69261499/what-is-instantsearchsdkjsbridgeclearhighlight
  /^No collective found with slug/, // We throw exceptions for these, but they're not really errors
  /Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this/, // Creates a lot of noise in Sentry but it does not seem to have a real impact
  /Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive/],
  denyUrls: [// Chrome extensions
  /extensions\//i, /^chrome:\/\//i, /^chrome-extension:\/\//i]
}); // Default scope

Sentry.configureScope(scope => {
  scope.setTag('nodejs', process.version);
  scope.setTag('runtimeEngine',  false ? 0 : 'server');
});
/**
 * Helper to extract Sentry tags from an error
 */

const captureException = (err, ctx) => {
  Sentry.configureScope(scope => {
    if (err.message) {
      // De-duplication currently doesn't work correctly for SSR / browser errors
      // so we force deduplication by error message if it is present
      scope.setFingerprint([err.message]);
    }

    if (err.statusCode) {
      scope.setExtra('statusCode', err.statusCode);
    }

    if (ctx) {
      const {
        req,
        res,
        errorInfo,
        query,
        pathname
      } = ctx;

      if (res && res.statusCode) {
        scope.setExtra('statusCode', res.statusCode);
      }

      if (false) {} else {
        scope.setTag('ssr', true);
        scope.setExtra('url', req.url);
        scope.setExtra('method', req.method);
        scope.setExtra('headers', req.headers);
        scope.setExtra('params', req.params);
        scope.setExtra('query', req.query);
      }

      if (errorInfo) {
        Object.keys(errorInfo).forEach(key => scope.setExtra(key, errorInfo[key]));
      }
    }
  });
  return Sentry.captureException(err);
};

module.exports = {
  Sentry,
  captureException
};

/***/ }),

/***/ 29114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 97812:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 79114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 72743:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/react/components");

/***/ }),

/***/ 95159:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/react/hoc");

/***/ }),

/***/ 91836:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/react/ssr");

/***/ }),

/***/ 3115:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/browser");

/***/ }),

/***/ 9856:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/node");

/***/ }),

/***/ 64515:
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 99812:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 14638:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 41032:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/CaretDown");

/***/ }),

/***/ 2331:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/CaretUp");

/***/ }),

/***/ 9443:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Check");

/***/ }),

/***/ 62876:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 83514:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/ExclamationCircle");

/***/ }),

/***/ 25730:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/ExclamationTriangle");

/***/ }),

/***/ 86954:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/InfoCircle");

/***/ }),

/***/ 97881:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 20384:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Close");

/***/ }),

/***/ 45284:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 69031:
/***/ ((module) => {

"use strict";
module.exports = require("cross-fetch");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 53291:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 92869:
/***/ ((module) => {

"use strict";
module.exports = require("focus-trap-react");

/***/ }),

/***/ 98860:
/***/ ((module) => {

"use strict";
module.exports = require("jsdom");

/***/ }),

/***/ 99344:
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

"use strict";
module.exports = require("load-script");

/***/ }),

/***/ 1712:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ 98210:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/has");

/***/ }),

/***/ 52626:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/invert");

/***/ }),

/***/ 89699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ 77876:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isError");

/***/ }),

/***/ 75795:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject");

/***/ }),

/***/ 63901:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omit");

/***/ }),

/***/ 84159:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/pick");

/***/ }),

/***/ 20808:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/pickBy");

/***/ }),

/***/ 69309:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 74809:
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ 30808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 42863:
/***/ ((module) => {

"use strict";
module.exports = require("payment");

/***/ }),

/***/ 42042:
/***/ ((module) => {

"use strict";
module.exports = require("polished");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 95050:
/***/ ((module) => {

"use strict";
module.exports = require("react-flip-move");

/***/ }),

/***/ 13126:
/***/ ((module) => {

"use strict";
module.exports = require("react-intl");

/***/ }),

/***/ 35073:
/***/ ((module) => {

"use strict";
module.exports = require("react-scrollchor");

/***/ }),

/***/ 3789:
/***/ ((module) => {

"use strict";
module.exports = require("react-swipeable");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

"use strict";
module.exports = require("sanitize-html");

/***/ }),

/***/ 57518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

"use strict";
module.exports = require("styled-system");

/***/ }),

/***/ 46555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7544,7079,2328,5656,8101,7278,3169,4515,1009,9936,1499], () => (__webpack_exec__(70382)));
module.exports = __webpack_exports__;

})();