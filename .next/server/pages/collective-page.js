(() => {
var exports = {};
exports.id = 9589;
exports.ids = [9589,2197];
exports.modules = {

/***/ 85173:
/***/ ((module) => {

module.exports = "/_next/static/images/EmptyCollectivePageIllustration-d18b0162a4f6b3182b299a03d0456351.png";

/***/ }),

/***/ 99025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_CodeRepositoryIcon)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: external "@styled-icons/fa-solid/Code"
const Code_namespaceObject = require("@styled-icons/fa-solid/Code");
// EXTERNAL MODULE: external "@styled-icons/feather/Github"
var Github_ = __webpack_require__(89988);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/CodeRepositoryIcon.js
const _excluded = ["repositoryUrl"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CodeRepositoryIcon = _ref => {
  let {
    repositoryUrl
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isGithubUrl = repositoryUrl?.match(/^(https?:\/\/)?github\.com\//);
  return isGithubUrl ? /*#__PURE__*/jsx_runtime_.jsx(Github_.Github, _objectSpread({}, props)) : /*#__PURE__*/jsx_runtime_.jsx(Code_namespaceObject.Code, _objectSpread({}, props));
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
/* harmony default export */ const components_CodeRepositoryIcon = (CodeRepositoryIcon);

/***/ }),

/***/ 88146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditTagsModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82525);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52903);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75667);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71792);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_6__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_10__, _ToastProvider__WEBPACK_IMPORTED_MODULE_12__]);
([_CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_6__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_10__, _ToastProvider__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const editTagsMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .gqlV1 */ .N`
  mutation editCollective(
    $collective: CollectiveInputType!
  ) {
    editCollective(
      collective: $collective
    ) {
      id
      tags
    }
  }
`;
const tagStatsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query tagStats($host: AccountReferenceInput) {
    tagStats(host: $host, limit: 5) {
      nodes {
        id
        tag
      }
    }
  }
`;
function EditTagsModal({
  collective,
  onClose
}) {
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .useToasts */ .e1)();
  const [editTags, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(editTagsMutation);
  const {
    data: {
      tagStats
    } = {
      tagStats: null
    }
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(tagStatsQuery, {
    variables: _objectSpread({}, collective.host?.slug ? {
      host: {
        slug: collective.host.slug
      }
    } : {}),
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  });
  const initialValues = {
    tags: collective.tags
  };

  const submit = async values => {
    const {
      tags
    } = values;

    try {
      const variables = {
        collective: {
          id: collective.id,
          tags: tags
        }
      };
      await editTags({
        variables
      });
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "FAV3Ng",
          defaultMessage: [{
            "type": 0,
            "value": "Error submiting form: "
          }, {
            "type": 1,
            "value": "error"
          }],
          values: {
            error: e.message
          }
        })
      });
      return;
    }

    addToast({
      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
      message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "8CJ2DZ",
        defaultMessage: [{
          "type": 0,
          "value": "Successfully updated tags"
        }]
      })
    });
    handleClose();
  };

  const handleClose = () => {
    onClose?.();
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
    flexGrow: 1,
    maxWidth: "500px",
    onClose: handleClose,
    trapFocus: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: initialValues,
      onSubmit: submit,
      children: formik => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onSubmit: formik.handleSubmit,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
          tabIndex: 0
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* .ModalHeader */ .xB, {
          onClose: handleClose,
          hideCloseIcon: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "ulp3g5",
            defaultMessage: [{
              "type": 0,
              "value": "Edit tags"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* .ModalBody */ .fe, {
          mb: 0,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            name: "tags",
            htmlFor: "tags",
            labelProps: {
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '17px'
            },
            children: ({
              field
            }) => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                defaultValue: formik.values.tags,
                onChange: tags => {
                  formik.setFieldValue('tags', tags.map(t => t.value.toLowerCase()));
                },
                suggestedTags: tagStats?.nodes?.map(node => node.tag).filter(tag => !_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .IGNORED_TAGS.includes */ .bR.includes(tag))
              }));
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            type: "info",
            mt: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "collective.tags.info",
              defaultMessage: [{
                "type": 0,
                "value": "Tags help you improve your group’s discoverability and connect with similar initiatives across the world."
              }]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* .ModalFooter */ .mz, {
          isFullWidth: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "16px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              minWidth: 132,
              buttonStyle: "primary",
              loading: loading,
              disabled: !formik.dirty,
              type: "submit",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "save",
                defaultMessage: [{
                  "type": 0,
                  "value": "Save"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              minWidth: 132,
              buttonStyle: "secondary",
              disabled: loading,
              type: "button",
              onClick: handleClose,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "actions.cancel",
                defaultMessage: [{
                  "type": 0,
                  "value": "Cancel"
                }]
              })
            })]
          })
        })]
      })
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
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_HorizontalScroller)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@styled-icons/material/ArrowBack"
var ArrowBack_ = __webpack_require__(38218);
;// CONCATENATED MODULE: external "@styled-icons/material/ArrowForward"
const ArrowForward_namespaceObject = require("@styled-icons/material/ArrowForward");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(93908);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);
;// CONCATENATED MODULE: ./lib/ui-utils.js


/**
 * A debouncer for scroll functions. It is configured to trigger on trailing and
 * leading calls with a max wait of 100 to ensure everything stays responsive.
 */
const debounceScroll = func => {
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
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/HorizontalScroller.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const RefContainer = external_styled_components_default().div.withConfig({
  displayName: "HorizontalScroller__RefContainer",
  componentId: "sc-1mtsz4p-0"
})(["display:flex;overflow-x:auto;scroll-behavior:smooth;max-width:100%;", ""], props => props.hideScrollbar && (0,external_styled_components_.css)(["scrollbar-width:none;-ms-overflow-style:none;overflow:-moz-scrollbars-none;&::-webkit-scrollbar{display:none;}"]));
const ControlsContainer = external_styled_components_default()(Grid/* Flex */.kC).withConfig({
  displayName: "HorizontalScroller__ControlsContainer",
  componentId: "sc-1mtsz4p-1"
})(["z-index:10;position:absolute;top:", ";pointer-events:none;justify-content:space-between;width:100%;"], props => props.controlsTopPosition ? `${props.controlsTopPosition}%` : '50%');
const ArrowContainer = external_styled_components_default()(StyledRoundButton/* default */.Z).withConfig({
  displayName: "HorizontalScroller__ArrowContainer",
  componentId: "sc-1mtsz4p-2"
})(["transition:opacity 0.25s ease-in,visibility 0.25s;visibility:", ";opacity:", ";pointer-events:auto;svg{height:40px;padding 7px;}"], props => props.isVisible ? 'visible' : 'hidden', props => props.isVisible ? '1' : '0');
/**
 * Helper to display a list of horizontally scrollable items, with two little
 * carets to navigate easily.
 */

class HorizontalScroller extends (external_react_default()).PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateScrollInfo", debounceScroll(() => {
      if (!this.ref.current) {
        return;
      }

      const {
        offsetWidth,
        scrollLeft,
        scrollWidth
      } = this.ref.current;
      this.setState({
        canGoPrev: scrollLeft > 0,
        canGoNext: scrollLeft + offsetWidth < scrollWidth
      });
    }));

    _defineProperty(this, "onPrevClick", () => {
      if (this.ref.current) {
        this.ref.current.scrollLeft -= this.getScrollDistance();
      }
    });

    _defineProperty(this, "onNextClick", () => {
      if (this.ref.current) {
        this.ref.current.scrollLeft += this.getScrollDistance();
      }
    });

    this.ref = /*#__PURE__*/external_react_default().createRef();
    this.state = {
      canGoPrev: false,
      canGoNext: false
    };
  }

  componentDidMount() {
    if (this.ref.current) {
      this.ref.current.addEventListener('scroll', this.updateScrollInfo, {
        passive: true
      });
      this.updateScrollInfo();
    }
  }

  componentDidUpdate() {
    this.updateScrollInfo();
  }

  componentWillUnmount() {
    if (this.ref.current) {
      this.ref.current.removeEventListener('scroll', this.updateScrollInfo);
    }
  }

  getScrollDistance() {
    const offsetWidth = this.ref.current.offsetWidth;

    if (this.props.getScrollDistance) {
      return this.props.getScrollDistance(offsetWidth);
    } else {
      // Default behavior: scroll by 75% of the full width
      const scrollPercentage = 0.75;
      return scrollPercentage * offsetWidth;
    }
  }

  render() {
    const {
      canGoPrev,
      canGoNext
    } = this.state;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      position: "relative",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ControlsContainer, {
        px: [2, null, 5],
        controlsTopPosition: this.props.controlsTopPosition,
        children: [/*#__PURE__*/jsx_runtime_.jsx(ArrowContainer, {
          isVisible: canGoPrev,
          children: /*#__PURE__*/jsx_runtime_.jsx(ArrowBack_.ArrowBack, {
            onMouseDown: canGoPrev ? this.onPrevClick : undefined
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ArrowContainer, {
          isVisible: canGoNext,
          children: /*#__PURE__*/jsx_runtime_.jsx(ArrowForward_namespaceObject.ArrowForward, {
            onMouseDown: canGoNext ? this.onNextClick : undefined
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(RefContainer, _objectSpread(_objectSpread({}, this.props.containerProps), {}, {
        as: this.props.container,
        ref: this.ref,
        children: this.props.children
      }))]
    });
  }

} // We don't use the data from `withViewport`, but we use it to update the
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
/* harmony default export */ const components_HorizontalScroller = ((0,withViewport/* default */.ZP)(HorizontalScroller, {
  withWidth: true
}));

/***/ }),

/***/ 60732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "p": () => (/* binding */ PERIOD_FILTER_PRESETS)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15078);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82114);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const getPastDateInterval = timeUnit => {
  const from = (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().subtract(1, timeUnit).startOf(timeUnit);
  return {
    from,
    to: from.endOf(timeUnit)
  };
};
/**
 * Some presets for time filters
 */


const PERIOD_FILTER_PRESETS = {
  allTime: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "s+lPP3",
      defaultMessage: [{
        "type": 0,
        "value": "All time"
      }]
    }),
    getInterval: () => ({
      from: null,
      to: null
    })
  },
  today: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "zWgbGg",
      defaultMessage: [{
        "type": 0,
        "value": "Today"
      }]
    }),
    getInterval: () => ({
      from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('day'),
      to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
    })
  },
  thisMonth: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "3PZa76",
      defaultMessage: [{
        "type": 0,
        "value": "This Month"
      }]
    }),
    getInterval: () => ({
      from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('month'),
      to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
    })
  },
  thisYear: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "OGk6DC",
      defaultMessage: [{
        "type": 0,
        "value": "This Year"
      }]
    }),
    getInterval: () => ({
      from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('year'),
      to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
    })
  },
  pastWeek: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "li7Ez6",
      defaultMessage: [{
        "type": 0,
        "value": "Past Week"
      }]
    }),
    getInterval: () => getPastDateInterval('week')
  },
  pastMonth: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "+n7iNv",
      defaultMessage: [{
        "type": 0,
        "value": "Past Month"
      }]
    }),
    getInterval: () => getPastDateInterval('month')
  },
  pastYear: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "B0DOrM",
      defaultMessage: [{
        "type": 0,
        "value": "Past Year"
      }]
    }),
    getInterval: () => getPastDateInterval('year')
  }
};
const PERIOD_FILTER_SELECT_STYLES = {
  dropdownIndicator: {
    paddingTop: 0,
    paddingBottom: 0
  },
  option: {
    fontSize: '12px'
  }
};

const getSelectedPeriodOptionFromInterval = ({
  from,
  to
}) => {
  const isSameDay = (dayjsDate, otherDate) => !dayjsDate && !otherDate || dayjsDate?.isSame(otherDate, 'day');

  const preset = Object.keys(PERIOD_FILTER_PRESETS).find(preset => {
    const presetDetails = PERIOD_FILTER_PRESETS[preset];
    const presetInterval = presetDetails.getInterval();
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

const periodSelectThemeBuilder = theme => _objectSpread(_objectSpread({}, theme), {}, {
  spacing: _objectSpread(_objectSpread({}, theme.spacing), {}, {
    controlHeight: 28
  })
});

const PeriodFilterPresetsSelect = ({
  onChange,
  interval,
  inputId,
  formatDateFn
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const selectedOption = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getSelectedPeriodOptionFromInterval(interval), [interval]);
  const options = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    return Object.keys(PERIOD_FILTER_PRESETS).map(presetKey => ({
      value: presetKey,
      label: PERIOD_FILTER_PRESETS[presetKey].label
    }));
  }, [intl]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__/* .StyledSelectFilter */ .V, {
    inputId: inputId,
    value: selectedOption,
    options: options,
    selectTheme: periodSelectThemeBuilder,
    styles: PERIOD_FILTER_SELECT_STYLES,
    onChange: ({
      value
    }) => {
      if (value === 'custom') {
        return interval;
      } else {
        const newInterval = _objectSpread({}, PERIOD_FILTER_PRESETS[value].getInterval());

        onChange(_objectSpread(_objectSpread({}, interval), {}, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeriodFilterPresetsSelect);

/***/ }),

/***/ 37070:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gw": () => (/* binding */ DROPZONE_ACCEPT_IMAGES),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bQ": () => (/* binding */ DROPZONE_ACCEPT_ALL)
/* harmony export */ });
/* unused harmony export DROPZONE_ACCEPT_PDF */
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83514);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57847);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46555);
/* harmony import */ var _lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82055);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88705);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40486);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90998);
/* harmony import */ var _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89669);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_8__, _lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_9__, _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_15__]);
([uuid__WEBPACK_IMPORTED_MODULE_8__, _lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_9__, _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const _excluded = ["onSuccess", "onReject", "children", "isLoading", "loadingProgress", "minHeight", "size", "fontSize", "mockImageGenerator", "accept", "minSize", "maxSize", "name", "error", "value", "isMulti", "kind"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const DROPZONE_ACCEPT_IMAGES = {
  'image/*': ['.jpeg', '.png']
};
const DROPZONE_ACCEPT_PDF = {
  'application/pdf': ['.pdf']
};
const DROPZONE_ACCEPT_ALL = _objectSpread(_objectSpread({}, DROPZONE_ACCEPT_IMAGES), DROPZONE_ACCEPT_PDF);
const Dropzone = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
  displayName: "StyledDropzone__Dropzone",
  componentId: "sc-979d5c-0"
})(["border:1px dashed #c4c7cc;border-radius:10px;text-align:center;background:white;display:flex;justify-content:center;align-items:center;overflow:hidden;", " ", " img{max-height:100%;max-width:100%;}"], props => props.onClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["cursor:pointer;&:hover:not(:disabled){background:#f9f9f9;border-color:", ";}&:focus{outline:0;border-color:", ";}"], props => props.theme.colors.primary[300], props => props.theme.colors.primary[500]), props => props.error && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["border:1px solid ", ";"], props.theme.colors.red[500]));
const ReplaceContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "StyledDropzone__ReplaceContainer",
  componentId: "sc-979d5c-1"
})(["box-sizing:border-box;background:rgba(49,50,51,0.5);color:#ffffff;cursor:pointer;position:absolute;display:flex;align-items:center;justify-content:center;width:100%;height:24px;padding:8px;margin-top:-24px;font-size:12px;line-height:1em;&:hover{background:rgba(49,50,51,0.6);}"]);
/**
 * A dropzone to upload one or multiple files
 */

const StyledDropzone = _ref => {
  let {
    onSuccess,
    onReject,
    children,
    isLoading,
    loadingProgress,
    minHeight,
    size,
    fontSize,
    mockImageGenerator,
    accept,
    minSize,
    maxSize,
    name,
    error,
    value,
    isMulti,
    kind
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const imgUploaderParams = {
    isMulti,
    mockImageGenerator,
    onSuccess,
    onReject,
    kind
  };
  const {
    uploadFiles,
    isUploading,
    uploadProgress
  } = (0,_lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_9__/* .useImageUploader */ .w)(imgUploaderParams);
  const dropzoneParams = {
    accept,
    minSize,
    maxSize,
    multiple: isMulti,
    onDrop: uploadFiles
  };
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_5__.useDropzone)(dropzoneParams);
  minHeight = size || minHeight;
  const innerMinHeight = minHeight - 2; // -2 To account for the borders

  const dropProps = getRootProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(Dropzone, _objectSpread(_objectSpread(_objectSpread({}, props), value ? lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(dropProps, ['onClick']) : dropProps), {}, {
    minHeight: size || minHeight,
    size: size,
    error: error,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("input", _objectSpread({
      name: name
    }, getInputProps())), isLoading || isUploading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      size: "100%",
      minHeight: innerMinHeight,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        size: innerMinHeight,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          size: "70%"
        })
      }), isUploading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        fontSize: "9px",
        children: [uploadProgress, "%"]
      }), isLoading && !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(loadingProgress) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        children: [loadingProgress, "%"]
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      position: "relative",
      children: isDragActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        color: "primary.500",
        fontSize: "12px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_4__.Download, {
            size: 20
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [!value ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
          color: error ? 'red.500' : 'black.500',
          px: 2,
          fontSize: fontSize,
          children: error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3__.ExclamationCircle, {
              color: "#E03F6A",
              size: 16
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_14__/* .Span */ .Dr, {
              fontWeight: 600,
              ml: 1,
              children: error
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("br", {})]
          }) : isMulti ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
              'i18n-link': (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_12__/* .getI18nLink */ .fw)()
            }
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
              'i18n-link': (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_12__/* .getI18nLink */ .fw)()
            },
            tagName: "span"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            size: size,
            url: value,
            border: "none"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(ReplaceContainer, {
            onClick: dropProps.onClick,
            role: "button",
            tabIndex: 0,
            onKeyDown: event => {
              if (event.key === 'Enter') {
                event.preventDefault();
                dropProps.onClick();
              }
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
  mockImageGenerator: () => `https://loremflickr.com/120/120?lock=${(0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)()}`,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledDropzone);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_2__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




/**
 * A tooltip that truncates a value if it's longer than the
 * provided length.
 */



const TruncatedTextWithTooltip = ({
  value,
  cursor,
  length = 30
}) => {
  if (value?.length <= length) {
    return value;
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        containerCursor: cursor,
        content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
          color: "black.100",
          children: value
        }),
        children: lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(value, {
          length
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TruncatedTextWithTooltip);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["company"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const UserCompany = _ref => {
  let {
    company
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if (!company || company[0] !== '@') {
    return company;
  } // This could be used to generate malicious URLs.
  // By splitting on `/` we limit that risk.


  const companySlug = company.split('/')[0].slice(1);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    href: `/${companySlug}`
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserCompany);

/***/ }),

/***/ 89881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57153);
/* harmony import */ var _styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_collective_sections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64453);
/* harmony import */ var _collective_navbar_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97585);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(173);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24839);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const _excluded = ["collective", "category"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const ContainerWithMaxWidth = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).attrs({
  maxWidth: _constants__WEBPACK_IMPORTED_MODULE_12__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
  p: _constants__WEBPACK_IMPORTED_MODULE_12__/* .Dimensions.PADDING_X */ .Db.PADDING_X,
  m: '0 auto'
}).withConfig({
  displayName: "CategoryHeader__ContainerWithMaxWidth",
  componentId: "sc-l1egbc-0"
})(["display:flex;flex-direction:column;padding-top:64px;"]);
const TypeIllustration = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.attrs({
  alt: ''
}).withConfig({
  displayName: "CategoryHeader__TypeIllustration",
  componentId: "sc-l1egbc-1"
})(["position:absolute;width:48px;height:48px;"]);
const TypeIllustrationCircle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC).withConfig({
  displayName: "CategoryHeader__TypeIllustrationCircle",
  componentId: "sc-l1egbc-2"
})(["position:relative;width:48px;height:48px;&::before{content:'';background:", ";border-radius:50%;height:30px;width:30px;position:absolute;right:0;left:0;top:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.100'));
const CategoryHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((_ref, ref) => {
  let {
    collective,
    category
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const data = (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_5__/* .getSectionsCategoryDetails */ .iJ)(intl, collective, category);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(ContainerWithMaxWidth, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(TypeIllustrationCircle, {
        alignItems: "center",
        mr: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(TypeIllustration, {
          src: data.img
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        alignItems: "center",
        mr: 3,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          mr: 2,
          my: 3,
          "data-cy": `category-${category}-title`,
          children: data.title
        }), data.info && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          content: () => data.info,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_2__.Info, {
            size: 18,
            color: "#76777A"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        flex: "1",
        borderStyle: "solid",
        borderColor: "black.300",
        mt: 1
      })]
    }), data.subtitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
      mb: 2,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledP, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryHeader);

var _StyledP = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_11__.P).withConfig({
  displayName: "CategoryHeader___StyledP",
  componentId: "sc-l1egbc-3"
})({
  flex: '1 0 50%',
  maxWidth: 780
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82525);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47162);
/* harmony import */ var _NotificationBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25087);
/* harmony import */ var _SendMoneyToCollectiveBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75052);
/* harmony import */ var _PendingApplicationActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11743);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SendMoneyToCollectiveBtn__WEBPACK_IMPORTED_MODULE_6__, _PendingApplicationActions__WEBPACK_IMPORTED_MODULE_7__]);
([_SendMoneyToCollectiveBtn__WEBPACK_IMPORTED_MODULE_6__, _PendingApplicationActions__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
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

const getNotification = (intl, status, collective, host, LoggedInUser, refetch) => {
  if (status === 'collectiveCreated') {
    switch (collective.type) {
      case _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION:
        return {
          title: intl.formatMessage(messages.organizationCreated),
          description: intl.formatMessage(messages.organizationCreateDescription),
          type: 'success',
          inline: false
        };

      default:
        if (collective.isApproved) {
          return {
            title: intl.formatMessage(messages.collectiveCreated),
            description: intl.formatMessage(messages.collectiveApprovedDescription, {
              host: host.name
            }),
            type: 'success',
            inline: true
          };
        }

        return {
          title: intl.formatMessage(messages.collectiveCreated),
          description: host ? intl.formatMessage(messages.collectiveCreatedDescription, {
            host: host.name
          }) : '',
          type: 'info',
          inline: true
        };
    }
  } else if (status === 'fundCreated') {
    if (collective.isApproved) {
      return {
        title: intl.formatMessage(messages.fundCreated),
        description: intl.formatMessage(messages.fundCreatedApprovedDescription, {
          host: host.name
        }),
        type: 'success',
        inline: true
      };
    }

    return {
      title: intl.formatMessage(messages.fundCreated),
      description: host ? intl.formatMessage(messages.fundCreatedDescription, {
        host: host.name
      }) : '',
      type: 'info',
      inline: true
    };
  } else if (status === 'eventCreated') {
    return {
      title: intl.formatMessage(messages.eventCreated),
      type: 'success',
      inline: true
    };
  } else if (status === 'projectCreated') {
    return {
      title: intl.formatMessage(messages.projectCreated),
      type: 'success',
      inline: true
    };
  } else if (status === 'collectiveArchived' || collective.isArchived) {
    return {
      title: intl.formatMessage(messages.collectiveArchived, {
        name: collective.name
      }),
      description: intl.formatMessage(messages.collectiveArchivedDescription, {
        name: collective.name
      }),
      type: 'warning',
      inline: true
    };
  } else if (!collective.isApproved && collective.host && collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE) {
    return {
      title: intl.formatMessage(messages.approvalPending),
      description: intl.formatMessage(messages.approvalPendingDescription, {
        host: collective.host.name
      }),
      type: 'warning',
      actions: LoggedInUser?.isHostAdmin(collective) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_PendingApplicationActions__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        collective: collective,
        refetch: refetch
      })
    };
  } else if (LoggedInUser?.isAdminOfCollectiveOrHost(collective) && collective.isApproved && host?.policies?.COLLECTIVE_MINIMUM_ADMINS?.freeze && host?.policies?.COLLECTIVE_MINIMUM_ADMINS?.numberOfAdmins > collective?.admins?.length && collective?.features?.RECEIVE_FINANCIAL_CONTRIBUTIONS === 'DISABLED') {
    return {
      title: intl.formatMessage(messages.tooFewAdmins, {
        missingAdminsCount: host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins - collective.admins.length
      }),
      description: intl.formatMessage(messages.tooFewAdminsDescription, {
        missingAdminsCount: host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins - collective.admins.length
      }),
      type: 'warning',
      actions: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_NotificationBar__WEBPACK_IMPORTED_MODULE_5__/* .NotificationBarLink */ .a_, {
        href: `/${collective.slug}/admin/team`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "XVzYBE",
          defaultMessage: [{
            "type": 0,
            "value": "Manage members"
          }]
        })
      })
    };
  } else if (lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'type') === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.EVENT */ .eV.EVENT && (0,_lib_events__WEBPACK_IMPORTED_MODULE_4__/* .moneyCanMoveFromEvent */ .dj)(collective)) {
    if (!LoggedInUser || !LoggedInUser.isAdminOfCollectiveOrHost(collective)) {
      return;
    }

    return {
      title: intl.formatMessage(messages['event.over.sendMoneyToParent.title']),
      description: intl.formatMessage(messages['event.over.sendMoneyToParent.description'], {
        collective: collective.parentCollective.name
      }),
      type: 'info',
      actions: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_SendMoneyToCollectiveBtn__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        fromCollective: collective,
        toCollective: collective.parentCollective,
        LoggedInUser: LoggedInUser,
        amount: collective.stats.balance,
        currency: collective.currency,
        customButton: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_NotificationBar__WEBPACK_IMPORTED_MODULE_5__/* .NotificationBarButton */ .z2, _objectSpread({}, props))
      })
    };
  }
};
/**
 * Adds a notification bar for the collective.
 */


const CollectiveNotificationBar = ({
  intl,
  status,
  collective,
  host,
  LoggedInUser,
  refetch
}) => {
  const notification = getNotification(intl, status, collective, host, LoggedInUser, refetch);
  return !notification ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_NotificationBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, _objectSpread({}, notification));
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(CollectiveNotificationBar));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11743:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PendingApplicationActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _host_dashboard_AcceptRejectButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94549);
/* harmony import */ var _host_dashboard_applications_PendingApplication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87659);
/* harmony import */ var _NotificationBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25087);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_host_dashboard_AcceptRejectButtons__WEBPACK_IMPORTED_MODULE_6__, _host_dashboard_applications_PendingApplication__WEBPACK_IMPORTED_MODULE_7__, _ToastProvider__WEBPACK_IMPORTED_MODULE_9__]);
([_host_dashboard_AcceptRejectButtons__WEBPACK_IMPORTED_MODULE_6__, _host_dashboard_applications_PendingApplication__WEBPACK_IMPORTED_MODULE_7__, _ToastProvider__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function PendingApplicationActions({
  collective,
  refetch
}) {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .useToasts */ .e1)();
  const [callProcessApplication, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_host_dashboard_applications_PendingApplication__WEBPACK_IMPORTED_MODULE_7__/* .processApplicationMutation */ .PT, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  });

  const processApplication = async (action, message) => {
    try {
      await callProcessApplication({
        variables: {
          host: {
            legacyId: collective.host.id
          },
          account: {
            legacyId: collective.id
          },
          action,
          message
        }
      });

      if (refetch) {
        await refetch();
      }
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .i18nGraphqlException */ .t2)(intl, e)
      });
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_host_dashboard_AcceptRejectButtons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      collective: collective,
      isLoading: loading,
      onApprove: () => processApplication('APPROVE'),
      onReject: message => processApplication('REJECT', message),
      customButton: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_NotificationBar__WEBPACK_IMPORTED_MODULE_8__/* .NotificationBarButton */ .z2, _objectSpread({}, props))
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
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "SectionContainer",
  componentId: "sc-pgkh36-0"
})(["margin:0;", ""], props => props.withPaddingBottom && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding-bottom:64px;"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionContainer);

/***/ }),

/***/ 11377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24839);

/**
 * The following sections don't require a padding bottom when put at the end of the
 * page, usually because they end with a darker background.
 */

const sectionsWithoutPaddingBottom = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__/* .Sections.ABOUT */ .bx.ABOUT]: true,
  [_constants__WEBPACK_IMPORTED_MODULE_0__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE]: true,
  [_constants__WEBPACK_IMPORTED_MODULE_0__/* .Sections.GOALS */ .bx.GOALS]: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sectionsWithoutPaddingBottom);

/***/ }),

/***/ 1948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71156);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82525);
/* harmony import */ var _lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66465);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11194);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _LinkContributor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42388);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













const ContributorsList = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC).withConfig({
  displayName: "TopContributors__ContributorsList",
  componentId: "sc-b7r4y1-0"
})(["flex-wrap:wrap;margin-bottom:16px;flex-direction:row;@media (max-width:64em){& > *:nth-child(1n + 6){display:none;}}@media (max-width:88em){& > *:nth-child(1n + 11){display:none;}}"]);
const ContributorItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "TopContributors__ContributorItem",
  componentId: "sc-b7r4y1-1"
})(["display:flex;margin:0 24px 16px 0;width:200px;"]);
const AvatarWithRank = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "TopContributors__AvatarWithRank",
  componentId: "sc-b7r4y1-2"
})(["width:63px;min-width:63px;height:32px;margin-right:8px;background:white;display:flex;justify-content:space-between;align-items:center;padding-left:14px;font-size:10px;border-radius:32px;"]);
const ContributorName = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "TopContributors__ContributorName",
  componentId: "sc-b7r4y1-3"
})(["font-size:12px;line-height:18px;font-weight:700;color:", ";letter-spacing:-0.4px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:100%;"], props => props.theme.colors.black[800]);
/**
 * Returns the flex-basis as a string in `px` based on the percentage of
 * contributors that belongs in this column.
 */

const getFlexBasisForCol = (nbContributors, totalContributors) => {
  const baseSpaceBetween = 0.1;
  const maxPercentage = 0.75;
  const percentageNbContributors = nbContributors / totalContributors;
  const width = Math.min(percentageNbContributors - baseSpaceBetween, maxPercentage); // If one of the two blocks has less contributors but still two columns, we
  // force the size two make sure both columns are displayed

  if (percentageNbContributors <= 0.45 && nbContributors > 5) {
    return '40%';
  }

  return `${Math.trunc(width * 100)}%`;
};
/**
 * Shows a list of contributors with the section title. Auto-size based on number
 * of contributors.
 */


const ContributorsBlock = ({
  title,
  contributors,
  totalNbContributors,
  currency,
  showTitle
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const isFillingFullscreen = contributors.length === totalNbContributors && contributors.length === 20;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
    flex: "50% 1 3",
    style: {
      flexBasis: getFlexBasisForCol(contributors.length, totalNbContributors)
    },
    children: [showTitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "500",
      color: "black.700",
      mb: "20px",
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ContributorsList, {
      justifyContent: isFillingFullscreen ? [null, null, null, null, 'space-between'] : 'flex-start',
      children: contributors.map((contributor, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ContributorItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(AvatarWithRank, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
            children: idx + 1
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_LinkContributor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            contributor: contributor,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_6__/* .ContributorAvatar */ .BD, {
              contributor: contributor,
              radius: 32
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
          flex: "1 1",
          maxWidth: "calc(100% - 63px)",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_LinkContributor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            contributor: contributor,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ContributorName, {
              children: contributor.isIncognito ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "profile.incognito",
                defaultMessage: [{
                  "type": 0,
                  "value": "Incognito"
                }]
              }) : contributor.name
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
            color: "black.700",
            fontSize: "10px",
            lineHeight: "14px",
            children: contributor.totalAmountDonated ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
                date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedDate, {
                  value: contributor.since,
                  month: "short",
                  year: "numeric"
                }),
                totalDonated: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                  amountStyles: null,
                  amount: contributor.totalAmountDonated,
                  currency: currency,
                  precision: 0,
                  formatWithSeparators: true
                })
              }
            }) : contributor.isAdmin ? (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(intl, 'ADMIN') : contributor.isCore ? (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(intl, 'MEMBER') : (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(intl, contributor.roles[0])
          })]
        })]
      }, contributor.id))
    })]
  });
};

/**
 * Shows two columns as leaderboards for organizations and individuals
 * financial contributions.
 */
const TopContributors = ({
  organizations,
  individuals,
  currency
}) => {
  const nbOrgs = lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(organizations);

  const nbIndividuals = lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(individuals);

  const totalNbContributors = nbOrgs + nbIndividuals;
  const hasBothTypes = Boolean(nbOrgs && nbIndividuals); // Nothing to render if there's no one to show

  if (!totalNbContributors) {
    return null;
  } // Build the individual blocks in variables so we can sort them later


  const BlockIndividuals = nbIndividuals > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ContributorsBlock, {
    currency: currency,
    contributors: individuals,
    totalNbContributors: totalNbContributors,
    title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "TopContributors.Individuals",
      defaultMessage: [{
        "type": 0,
        "value": "Individuals"
      }]
    }),
    showTitle: hasBothTypes
  });

  const BlockOrgs = nbOrgs > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ContributorsBlock, {
    currency: currency,
    contributors: organizations,
    totalNbContributors: totalNbContributors,
    title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "TopContributors.Organizations",
      defaultMessage: [{
        "type": 0,
        "value": "Organizations"
      }]
    }),
    showTitle: hasBothTypes
  }); // Put the blocks with the most contributors first. If equals, default is to show orgs first.


  const Blocks = nbIndividuals > nbOrgs ? [BlockIndividuals, BlockOrgs] : [BlockOrgs, BlockIndividuals];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopContributors);

/***/ }),

/***/ 56916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ preloadCollectivePageGraphqlQueries)
/* harmony export */ });
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5700);
/* harmony import */ var _lib_collective_sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64453);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82525);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32651);
/* harmony import */ var _recurring_contributions_graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19471);
/* harmony import */ var _hero_HeroTotalCollectiveContributionsWithData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82062);
/* harmony import */ var _sections_Budget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54103);
/* harmony import */ var _sections_Conversations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86991);
/* harmony import */ var _sections_RecurringContributions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31794);
/* harmony import */ var _sections_Transactions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32971);
/* harmony import */ var _sections_Updates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66419);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sections_Budget__WEBPACK_IMPORTED_MODULE_6__, _sections_RecurringContributions__WEBPACK_IMPORTED_MODULE_8__, _sections_Transactions__WEBPACK_IMPORTED_MODULE_9__, _sections_Updates__WEBPACK_IMPORTED_MODULE_10__]);
([_sections_Budget__WEBPACK_IMPORTED_MODULE_6__, _sections_RecurringContributions__WEBPACK_IMPORTED_MODULE_8__, _sections_Transactions__WEBPACK_IMPORTED_MODULE_9__, _sections_Updates__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const preloadCollectivePageGraphqlQueries = async (slug, client) => {
  const result = await client.query({
    query: _queries__WEBPACK_IMPORTED_MODULE_11__/* .collectivePageQuery */ .J,
    variables: (0,_queries__WEBPACK_IMPORTED_MODULE_11__/* .getCollectivePageQueryVariables */ .L)(slug)
  });
  const collective = result?.data?.Collective;

  if (collective) {
    const sections = (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_1__/* .getFilteredSectionsForCollective */ .vY)(collective);
    const sectionsNames = (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_1__/* .getSectionsNames */ .xE)(sections);
    const queries = [];
    const isIndividual = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_0__/* .isIndividualAccount */ .Sh)(collective) && !collective.isHost;

    if (sectionsNames.includes('budget')) {
      queries.push(client.query({
        query: (0,_sections_Budget__WEBPACK_IMPORTED_MODULE_6__/* .getBudgetSectionQuery */ .MR)(Boolean(collective.host), isIndividual),
        variables: (0,_sections_Budget__WEBPACK_IMPORTED_MODULE_6__/* .getBudgetSectionQueryVariables */ .kr)(slug, collective.host?.slug, isIndividual),
        context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__/* .API_V2_CONTEXT */ .T
      }));
    }

    if (sectionsNames.includes('transactions')) {
      queries.push(client.query({
        query: _sections_Transactions__WEBPACK_IMPORTED_MODULE_9__/* .transactionsSectionQuery */ .QG,
        variables: (0,_sections_Transactions__WEBPACK_IMPORTED_MODULE_9__/* .getTransactionsSectionQueryVariables */ .Kk)(slug),
        context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__/* .API_V2_CONTEXT */ .T
      }));
    }

    if (sectionsNames.includes('recurring-contributions')) {
      queries.push(client.query({
        query: _recurring_contributions_graphql_queries__WEBPACK_IMPORTED_MODULE_4__/* .manageContributionsQuery */ .B,
        variables: (0,_sections_RecurringContributions__WEBPACK_IMPORTED_MODULE_8__/* .getRecurringContributionsSectionQueryVariables */ .W)(slug),
        context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__/* .API_V2_CONTEXT */ .T
      }));
    }

    if (sectionsNames.includes('updates')) {
      queries.push(client.query({
        query: _sections_Updates__WEBPACK_IMPORTED_MODULE_10__/* .updatesSectionQuery */ .Jp,
        variables: (0,_sections_Updates__WEBPACK_IMPORTED_MODULE_10__/* .getUpdatesSectionQueryVariables */ .Rp)(slug)
      }));
    }

    if (sectionsNames.includes('conversations')) {
      queries.push(client.query({
        query: _sections_Conversations__WEBPACK_IMPORTED_MODULE_7__/* .conversationsSectionQuery */ .wY,
        variables: (0,_sections_Conversations__WEBPACK_IMPORTED_MODULE_7__/* .getConversationsSectionQueryVariables */ .nt)(slug),
        context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__/* .API_V2_CONTEXT */ .T
      }));
    }

    const isCollective = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE;
    const isEvent = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.EVENT */ .eV.EVENT;

    if (!isCollective && !isEvent && !collective.isHost) {
      queries.push(client.query({
        query: _hero_HeroTotalCollectiveContributionsWithData__WEBPACK_IMPORTED_MODULE_5__/* .totalCollectiveContributionsQuery */ ._3,
        variables: (0,_hero_HeroTotalCollectiveContributionsWithData__WEBPACK_IMPORTED_MODULE_5__/* .getTotalCollectiveContributionsQueryVariables */ ._R)(slug)
      }));
    }

    await Promise.all(queries);
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72743);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50529);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19156);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32631);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90998);
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8914);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);



















const colorPath = 'collectivePage.primaryColor';
const ColorPreset = styled_components__WEBPACK_IMPORTED_MODULE_6___default().button.withConfig({
  displayName: "CollectiveColorPicker__ColorPreset",
  componentId: "sc-1hpmo67-0"
})(["cursor:pointer;width:30px;height:30px;margin-right:5px;margin-bottom:8px;border-radius:50%;border:none;transition:transform 0.1s;&:hover{transform:scale(1.25);}"]); // prettier-ignore

const PRESET_COLORS = ['#BE2721', '#F65316', '#D17C07', '#1E824C', '#1D8882', '#1F3993', '#663299', '#2E3131', '#E94531', '#ED7529', '#F89308', '#19B156', '#12ADA4', '#3062BC', '#9E28B4', '#6D7A89', '#FA533E', '#F6A050', '#FFA413', '#1AC780', '#55C9BC', '#3E8DCE', '#B13BC6', '#95A5A6'];
/** Ensure the color is formatted like #123456 */

const validateColor = value => (0,validator__WEBPACK_IMPORTED_MODULE_7__.isHexColor)(value) && value.length === 7;

const CollectiveColorPicker = ({
  collective,
  onChange,
  onClose,
  theme
}) => {
  const color = theme.colors.primary.base || theme.colors.primary[500];
  const [textValue, setTextValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(color.replace('#', ''));
  const [showError, setShowError] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const hasError = !validateColor(`#${textValue}`);

  const dispatchValue = v => {
    setTextValue(v.replace('#', ''));
    onChange(v);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_3__.Mutation, {
    mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_16__/* .editCollectiveSettingsMutation */ .U0,
    children: (editSettings, {
      loading
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      "data-cy": "collective-color-picker-card",
      flexDirection: "column",
      boxShadow: "4px 4px 10px #c7c5c5",
      maxWidth: 360,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
        px: 32,
        py: 24,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
          fontSize: "20px",
          fontWeight: 600,
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "CollectiveColorPicker.Title",
            defaultMessage: [{
              "type": 0,
              "value": "Select page color"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
          fontSize: "16px",
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "CollectiveColorPicker.Preset",
            defaultMessage: [{
              "type": 0,
              "value": "Preset colors"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
          flexWrap: "wrap",
          justifyContent: "space-between",
          children: PRESET_COLORS.map(preset => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(ColorPreset, {
            "data-cy": "collective-color-picker-options-btn",
            style: {
              background: preset
            },
            onClick: () => dispatchValue(preset),
            children: color === preset && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_4__.Check, {
              size: 12,
              color: "white"
            })
          }, preset))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
          fontSize: "16px",
          mt: 3,
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "CollectiveColorPicker.Custom",
            defaultMessage: [{
              "type": 0,
              "value": "Use custom color"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
            size: 40,
            flex: "0 0 40px",
            px: 2,
            py: 2,
            background: "white",
            borderRadius: "50%",
            type: "color",
            value: color,
            disabled: loading,
            onChange: e => {
              dispatchValue(e.target.value);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              prepend: "#",
              placeholder: "000000",
              px: 2,
              containerProps: {
                ml: 2
              },
              value: textValue,
              maxLength: 7,
              disabled: loading,
              onBlur: () => setShowError(true),
              error: showError && hasError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                id: "CollectiveColorPicker.Error",
                defaultMessage: [{
                  "type": 0,
                  "value": "Please use an hexadecimal value (eg. #3E8DCE)"
                }]
              }),
              onChange: e => {
                const newValue = e.target.value.replace('#', '');
                setTextValue(newValue);
                setShowError(false); // Don't show errors while typing

                const hexValue = `#${newValue}`;

                if (validateColor(hexValue)) {
                  onChange(hexValue);
                }
              }
            })
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        borderTop: "1px solid #D7DBE0",
        px: 2,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
          justifyContent: "space-between",
          flexWrap: "wrap",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            m: 2,
            flex: "1 1",
            textTransform: "capitalize",
            onClick: () => {
              dispatchValue(_lib_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"].colors.primary[500] */ .Z.colors.primary[500]);
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "Reset",
              defaultMessage: [{
                "type": 0,
                "value": "Reset"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
            flex: "1 1 50%",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              m: 2,
              flex: "1 1 50%",
              textTransform: "capitalize",
              onClick: () => {
                onChange(null);
                onClose();
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                id: "form.cancel",
                defaultMessage: [{
                  "type": 0,
                  "value": "cancel"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              "data-cy": "collective-color-picker-save-btn",
              m: 2,
              buttonStyle: "primary",
              textTransform: "capitalize",
              flex: "1 1 50%",
              loading: loading,
              disabled: hasError,
              onClick: () => {
                const newSettings = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(collective.settings || {});

                lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(newSettings, colorPath, color);

                editSettings({
                  variables: {
                    id: collective.id,
                    settings: newSettings
                  }
                }).then(() => {
                  onChange(null);
                  onClose();
                });
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
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
    })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_6__.withTheme)(CollectiveColorPicker));

/***/ }),

/***/ 83248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22265);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_bootstrap_Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77186);
/* harmony import */ var _styled_icons_bootstrap_Tags__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_bootstrap_Tags__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_boxicons_regular_Palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12438);
/* harmony import */ var _styled_icons_boxicons_regular_Palette__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Palette__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_feather_Camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36603);
/* harmony import */ var _styled_icons_feather_Camera__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Camera__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_feather_Globe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79409);
/* harmony import */ var _styled_icons_feather_Globe__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Globe__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71362);
/* harmony import */ var _styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_icons_feather_Twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71593);
/* harmony import */ var _styled_icons_feather_Twitter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Twitter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82525);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62131);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25896);
/* harmony import */ var _CodeRepositoryIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99025);
/* harmony import */ var _ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(58933);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69078);
/* harmony import */ var _DefinedTerm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(78317);
/* harmony import */ var _EditTagsModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88146);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16159);
/* harmony import */ var _I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(82497);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(29242);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(87268);
/* harmony import */ var _StyledDropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(206);
/* harmony import */ var _StyledInputTags__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(10732);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(51082);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(71792);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(90012);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(90998);
/* harmony import */ var _TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(92582);
/* harmony import */ var _UserCompany__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(24935);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(36219);
/* harmony import */ var _CollectiveColorPicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(759);
/* harmony import */ var _HeroAvatar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(83677);
/* harmony import */ var _HeroBackground__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(90165);
/* harmony import */ var _HeroSocialLinks__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(717);
/* harmony import */ var _HeroTotalCollectiveContributionsWithData__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(82062);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_15__, _DefinedTerm__WEBPACK_IMPORTED_MODULE_17__, _EditTagsModal__WEBPACK_IMPORTED_MODULE_18__, _TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_32__, _HeroAvatar__WEBPACK_IMPORTED_MODULE_36__]);
([_ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_15__, _DefinedTerm__WEBPACK_IMPORTED_MODULE_17__, _EditTagsModal__WEBPACK_IMPORTED_MODULE_18__, _TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_32__, _HeroAvatar__WEBPACK_IMPORTED_MODULE_36__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







































 // Dynamic imports



const HeroEventDetails = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(() => __webpack_require__.e(/* import() */ 5217).then(__webpack_require__.bind(__webpack_require__, 5217)), {
  loadableGenerated: {
    modules: ["../components/collective-page/hero/Hero.js -> " + './HeroEventDetails']
  }
});
const HeroBackgroundCropperModal = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(() => __webpack_require__.e(/* import() */ 4128).then(__webpack_require__.bind(__webpack_require__, 44128)), {
  loading() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        height: 300,
        minWidth: 280
      })
    });
  },

  loadableGenerated: {
    modules: ["../components/collective-page/hero/Hero.js -> " + './HeroBackgroundCropperModal']
  }
});
const Translations = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({
  website: {
    id: "Fields.website",
    defaultMessage: [{
      "type": 0,
      "value": "Website"
    }]
  }
});
const StyledShortDescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h2.withConfig({
  displayName: "Hero__StyledShortDescription",
  componentId: "sc-z31ttd-0"
})(["margin-top:8px;font-size:16px;line-height:24px;@media (min-width:40em){text-align:left;}@media (min-width:64em){max-width:600px;}@media (min-width:88em){max-width:750px;}"]);
const HiddenTagDropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu).withConfig({
  displayName: "Hero__HiddenTagDropdownContainer",
  componentId: "sc-z31ttd-1"
})(["text-align:center;width:132px;max-height:300px;overflow:auto;"]);
const HiddenTagItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z).withConfig({
  displayName: "Hero__HiddenTagItem",
  componentId: "sc-z31ttd-2"
})(["color:#323334;font-weight:500;font-size:14px;@media (hover:hover){:hover{text-decoration:underline;}}"]);
/**
 * Collective's page Hero/Banner/Cover component.
 */

const Hero = ({
  collective,
  host,
  isAdmin,
  onPrimaryColorChange
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.useIntl)();
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
  const [hasColorPicker, showColorPicker] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [isEditingCover, editCover] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [isEditingTags, editTags] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const isEditing = hasColorPicker || isEditingCover;
  const isCollective = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_11__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE;
  const isEvent = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_11__/* .CollectiveType.EVENT */ .eV.EVENT;
  const isProject = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_11__/* .CollectiveType.PROJECT */ .eV.PROJECT;
  const isFund = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_11__/* .CollectiveType.FUND */ .eV.FUND;
  const parentIsHost = host && collective.parentCollective?.id === host.id;

  const firstConnectedAccount = lodash_first__WEBPACK_IMPORTED_MODULE_0___default()(collective.connectedTo);

  const connectedAccountIsHost = firstConnectedAccount && host && firstConnectedAccount.collective.id === host.id;
  const displayedConnectedAccount = connectedAccountIsHost ? null : firstConnectedAccount; // get only unique references

  const companies = [...new Set(collective.company?.trim().toLowerCase().split(' '))];
  const tagCount = collective.tags?.length;
  const displayedTags = collective.tags?.slice(0, 3);
  const hiddenTags = collective.tags?.slice(3);
  const numberOfHiddenTags = hiddenTags?.length; // Cancel edit mode when user navigates out to another collective

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    editCover(false);
    showColorPicker(false);
  }, [collective.id]);
  const hasSocialLinks = collective.socialLinks && collective.socialLinks.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [isEditingCover && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(HeroBackgroundCropperModal, {
      collective: collective,
      onClose: () => editCover(false)
    }), isEditingTags && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_EditTagsModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      collective: collective,
      onClose: () => editTags(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      position: "relative",
      minHeight: 325,
      zIndex: 1000,
      "data-cy": "collective-hero",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_HeroBackground__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .ZP, {
        collective: collective
      }), isAdmin && !isEditing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        "data-cy": "edit-collective-display-features",
        position: "absolute",
        right: 25,
        top: 25,
        zIndex: 222,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          "data-cy": "edit-cover-btn",
          buttonSize: "tiny",
          onClick: () => editCover(true),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_feather_Camera__WEBPACK_IMPORTED_MODULE_5__.Camera, {
            size: "1.2em"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledSpan, {
            ml: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
              id: "Hero.EditCover",
              defaultMessage: [{
                "type": 0,
                "value": "Edit cover"
              }]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          "data-cy": "edit-main-color-btn",
          buttonSize: "tiny",
          ml: 3,
          onClick: () => showColorPicker(true),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_boxicons_regular_Palette__WEBPACK_IMPORTED_MODULE_4__.Palette, {
            size: "1.2em"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledSpan2, {
            ml: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
              id: "Hero.EditColor",
              defaultMessage: [{
                "type": 0,
                "value": "Edit main color"
              }]
            })
          })]
        })]
      }), hasColorPicker && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        position: "fixed",
        right: 25,
        top: 72,
        zIndex: 99999,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_CollectiveColorPicker__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
          collective: collective,
          onChange: onPrimaryColorChange,
          onClose: () => showColorPicker(false)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
        pt: 40,
        display: "flex",
        flexDirection: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          position: "relative",
          mb: 2,
          width: 128,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_HeroAvatar__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
            collective: collective,
            isAdmin: isAdmin
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
          maxWidth: ['70%', '60%', null, '40%', '45%'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.H1, {
            color: "black.800",
            fontSize: "32px",
            lineHeight: "36px",
            textAlign: "left",
            "data-cy": "collective-title",
            wordBreak: "normal",
            children: collective.name || collective.slug
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
          children: companies.length > 0 && companies.map(company => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
            as: _UserCompany__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z,
            mr: 1,
            fontSize: "20px",
            fontWeight: 600,
            company: company
          }, company))
        }), !isEvent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [(isCollective || isFund || isProject) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
            my: "30px",
            mb: 2,
            flexWrap: "wrap",
            "data-cy": "collective-tags",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
              textTransform: "uppercase",
              variant: "rounded-left",
              backgroundColor: "black.200",
              mt: ['5px', 0],
              fontWeight: 500,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                tags: collective.type
              })
            }), tagCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                borderRight: "1px solid #C3C6CB",
                height: "22px",
                padding: "5px",
                mt: ['5px', 0]
              }), displayedTags.map(tag => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Link__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                href: `/search?tag=${tag}`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                  variant: "rounded-right",
                  ml: "10px",
                  mt: ['5px', 0],
                  fontWeight: 500,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    tags: tag
                  })
                })
              }, tag)), tagCount > 3 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledDropdown__WEBPACK_IMPORTED_MODULE_25__/* .Dropdown */ .Lt, {
                trigger: "click",
                children: ({
                  triggerProps,
                  dropdownProps
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                    as: _StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z,
                    border: "none",
                    variant: "rounded-right",
                    ml: "10px",
                    mt: ['5px', 0],
                    fontWeight: 500
                  }, triggerProps), {}, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
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
                  })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledDropdown__WEBPACK_IMPORTED_MODULE_25__/* .DropdownContent */ .Nv, _objectSpread(_objectSpread({}, dropdownProps), {}, {
                    style: {
                      marginTop: '6px'
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(HiddenTagDropdownContainer, {
                      children: [hiddenTags.slice(0, numberOfHiddenTags - 1).map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Link__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                          href: `/search?tag=${tag}`,
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(HiddenTagItem, {
                            as: _Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                            mt: 16,
                            mb: 16,
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                              tags: tag
                            })
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx("hr", {})]
                      }, tag)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Link__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        href: `/search?tag=${hiddenTags[numberOfHiddenTags - 1]}`,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(HiddenTagItem, {
                          as: _Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                          mt: 16,
                          mb: 16,
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            tags: hiddenTags[numberOfHiddenTags - 1]
                          })
                        })
                      })]
                    })
                  }))]
                })
              })]
            }), isAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledInputTags__WEBPACK_IMPORTED_MODULE_26__/* .EditTag */ .E, {
              ml: "10px",
              mt: ['5px', 0],
              active: isEditingTags,
              onClick: () => editTags(true),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_bootstrap_Tags__WEBPACK_IMPORTED_MODULE_3__.Tags, {
                size: "14px"
              }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__/* .Span */ .Dr, {
                ml: "4px",
                letterSpacing: 0,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                  id: "StyledInputTags.EditLabel",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Edit Tags"
                  }]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
            alignItems: "center",
            flexWrap: "wrap",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
              my: 2,
              children: [collective.canContact && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                collective: collective,
                LoggedInUser: LoggedInUser,
                children: btnProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, btnProps), {}, {
                  size: 32,
                  mr: 3,
                  title: "Contact",
                  "aria-label": "Contact",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_7__.Mail, {
                    size: 12
                  })
                }))
              }), hasSocialLinks && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_HeroSocialLinks__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                socialLinks: collective.socialLinks,
                relMe: true
              }), !hasSocialLinks && collective.twitterHandle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                "data-cy": "twitterProfileUrl",
                href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__/* .twitterProfileUrl */ .Uc)(collective.twitterHandle),
                openInNewTabNoFollowRelMe: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                  size: 32,
                  mr: 3,
                  title: "Twitter",
                  "aria-label": "Twitter link",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_feather_Twitter__WEBPACK_IMPORTED_MODULE_8__.Twitter, {
                    size: 12
                  })
                })
              }), !hasSocialLinks && collective.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                "data-cy": "collectiveWebsite",
                href: collective.website,
                openInNewTabNoFollowRelMe: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                  size: 32,
                  mr: 3,
                  title: intl.formatMessage(Translations.website),
                  "aria-label": "Website link",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_feather_Globe__WEBPACK_IMPORTED_MODULE_6__.Globe, {
                    size: 14
                  })
                })
              }), !hasSocialLinks && collective.repositoryUrl && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                "data-cy": "repositoryUrl",
                href: collective.repositoryUrl,
                openInNewTabNoFollowRelMe: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  buttonSize: "tiny",
                  color: "black.700",
                  height: 32,
                  mr: 3,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_CodeRepositoryIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    size: 12,
                    repositoryUrl: collective.repositoryUrl
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__/* .Span */ .Dr, {
                    ml: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "E2brjR",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Code repository"
                      }]
                    })
                  })]
                })
              })]
            }), Boolean(!parentIsHost && collective.parentCollective) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              mx: 1,
              color: "black.700",
              my: "12px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                id: "Collective.Hero.ParentCollective",
                defaultMessage: [{
                  "type": 0,
                  "value": "Part of: "
                }, {
                  "type": 1,
                  "value": "parentName"
                }],
                values: {
                  parentName: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                    as: _LinkCollective__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
                    collective: collective.parentCollective,
                    noTitle: true,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                      value: collective.parentCollective.name,
                      cursor: "pointer"
                    })
                  })
                }
              })
            }), host && collective.isApproved && host.id !== collective.id && !collective.isHost && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                mx: 1,
                color: "black.700",
                my: 2,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
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
                    FiscalHost: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_DefinedTerm__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                      term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_17__/* .Terms.FISCAL_HOST */ .F.FISCAL_HOST,
                      color: "black.700"
                    }),
                    hostName: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                      as: _LinkCollective__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
                      collective: host,
                      "data-cy": "fiscalHostName",
                      noTitle: true,
                      color: "black.700",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                        value: host.name,
                        cursor: "pointer"
                      })
                    })
                  }
                })
              }), displayedConnectedAccount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                mx: 1,
                color: "black.700",
                my: "12px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                  id: "Collective.Hero.ParentCollective",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Part of: "
                  }, {
                    "type": 1,
                    "value": "parentName"
                  }],
                  values: {
                    parentName: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                      as: _LinkCollective__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
                      collective: displayedConnectedAccount.collective,
                      noTitle: true,
                      color: "black.700",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_TruncatedTextWithTooltip__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                        value: displayedConnectedAccount.collective.name,
                        cursor: "pointer"
                      })
                    })
                  }
                })
              })]
            }), collective.isHost && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [collective.type !== _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_11__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [collective.settings?.tos && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                  openInNewTab: true,
                  href: collective.settings.tos,
                  borderBottom: "2px dotted #969ba3",
                  color: "black.700",
                  textDecoration: "none",
                  fontSize: "12px",
                  mr: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "host.tos",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Terms of fiscal hosting"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                  ml: 2,
                  mr: 3,
                  color: "black.700",
                  fontSize: "12px",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "Hero.HostFee",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Host fee: "
                    }, {
                      "type": 1,
                      "value": "fee"
                    }],
                    values: {
                      fee: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_DefinedTerm__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_17__/* .Terms.HOST_FEE */ .F.HOST_FEE,
                        color: "black.700",
                        children: [collective.hostFeePercent || 0, "%"]
                      })
                    }
                  })
                })]
              }), collective.platformFeePercent > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                ml: 2,
                mr: 3,
                color: "black.700",
                fontSize: "12px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                  id: "Hero.PlatformFee",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Platform fee: "
                  }, {
                    "type": 1,
                    "value": "fee"
                  }],
                  values: {
                    fee: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_DefinedTerm__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                      term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_17__/* .Terms.PLATFORM_FEE */ .F.PLATFORM_FEE,
                      color: "black.700",
                      children: [collective.platformFeePercent || 0, "%"]
                    })
                  }
                })
              })]
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(StyledShortDescription, {
          children: collective.description
        }), isEvent && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(HeroEventDetails, {
          collective: collective,
          host: host,
          displayedConnectedAccount: displayedConnectedAccount
        }), !collective.isHost && [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_11__/* .CollectiveType.USER */ .eV.USER, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_11__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION].includes(collective.type) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_HeroTotalCollectiveContributionsWithData__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .ZP, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(Hero));

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_31__/* .Span */ .Dr).withConfig({
  displayName: "Hero___StyledSpan",
  componentId: "sc-z31ttd-3"
})({
  verticalAlign: 'middle'
});

var _StyledSpan2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_31__/* .Span */ .Dr).withConfig({
  displayName: "Hero___StyledSpan2",
  componentId: "sc-z31ttd-4"
})({
  verticalAlign: 'middle'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_inRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78274);
/* harmony import */ var lodash_inRange__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_inRange__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72743);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_feather_Camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36603);
/* harmony import */ var _styled_icons_feather_Camera__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Camera__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65985);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82525);
/* harmony import */ var _lib_image_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89314);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11194);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47988);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29242);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _StyledDropzone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37070);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(31330);
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8914);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledDropzone__WEBPACK_IMPORTED_MODULE_18__, _ToastProvider__WEBPACK_IMPORTED_MODULE_20__]);
([_StyledDropzone__WEBPACK_IMPORTED_MODULE_18__, _ToastProvider__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const AVATAR_SIZE = 128; // Dynamically import components for admins

const DropzoneLoadingPlaceholder = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
  height: AVATAR_SIZE,
  width: AVATAR_SIZE,
  color: "primary.500",
  borderRadius: "25%"
});

const dynamicParams = {
  loading: DropzoneLoadingPlaceholder,
  ssr: false
};
const Dropzone = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 56358, 23)), dynamicParams);
const EditOverlay = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "HeroAvatar__EditOverlay",
  componentId: "sc-xvjpei-0"
})(["position:absolute;width:128px;height:128px;display:flex;flex-direction:column;justify-content:center;align-items:center;background:rgba(255,255,255,0.75);cursor:pointer;text-align:center;padding:1em;border-radius:", ";"], props => props.borderRadius);
const EditableAvatarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "HeroAvatar__EditableAvatarContainer",
  componentId: "sc-xvjpei-1"
})(["position:relative;width:128px;", ""], props => !props.isDragActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["&:not(:hover) ", "{visibility:hidden;}"], EditOverlay));
const EditingAvatarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "HeroAvatar__EditingAvatarContainer",
  componentId: "sc-xvjpei-2"
})(["width:128px;height:128px;border:2px dashed lightgrey;border-radius:", ";clip-path:inset(0 0 0 0 round ", ");img{width:100%;height:100%;}"], props => props.borderRadius, props => props.borderRadius);
const Triangle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "HeroAvatar__Triangle",
  componentId: "sc-xvjpei-3"
})(["position:absolute;font-size:42px;top:-45px;left:42px;color:white;text-shadow:-2px -3px 4px rgba(121,121,121,0.5);"]);

const HeroAvatar = ({
  collective,
  isAdmin,
  intl
}) => {
  const [editing, setEditing] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [showModal, setshowModal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [submitting, setSubmitting] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [uploadedImage, setUploadedImage] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);
  const borderRadius = (0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_11__/* .getAvatarBorderRadius */ .Qt)(collective.type);
  const [editImage] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_graphql_mutations__WEBPACK_IMPORTED_MODULE_21__/* .editCollectiveAvatarMutation */ .zk);
  const {
    addToast,
    removeToasts
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_20__/* .useToasts */ .e1)();

  const onDropImage = async ([image]) => {
    if (image) {
      Object.assign(image, {
        preview: URL.createObjectURL(image)
      });
      const isValid = await validateImage(image);

      if (isValid) {
        setUploadedImage(image);
        setEditing(true);
      }
    }
  };

  const validateImage = image => {
    return new Promise(resolve => {
      const img = new Image();

      img.onload = () => {
        if (!lodash_inRange__WEBPACK_IMPORTED_MODULE_0___default()(img.width, ..._lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .AVATAR_WIDTH_RANGE */ .Dm) || !lodash_inRange__WEBPACK_IMPORTED_MODULE_0___default()(img.height, ..._lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .AVATAR_HEIGHT_RANGE */ .u4) || image.size >= 5000000) {
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_20__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
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
              minResolution: `${_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .AVATAR_WIDTH_RANGE[0] */ .Dm[0]}x${_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .AVATAR_HEIGHT_RANGE[0] */ .u4[0]}`,
              maxResolution: `${_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .AVATAR_WIDTH_RANGE[1] */ .Dm[1]}x${_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .AVATAR_HEIGHT_RANGE[1] */ .u4[1]}`,
              maxFileSize: '5MB'
            })
          });
          resolve(false);
        } else {
          resolve(true);
          removeToasts(toast => Boolean(toast.__isAvatarUploadError));
        }
      };

      img.src = image.preview;
    });
  };

  if (!isAdmin) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
      collective: collective,
      radius: AVATAR_SIZE
    });
  } else if (!editing) {
    const imgType = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_9__/* .isIndividualAccount */ .Sh)(collective) ? 'AVATAR' : 'LOGO';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(Dropzone, {
        style: {},
        multiple: false,
        accept: _StyledDropzone__WEBPACK_IMPORTED_MODULE_18__/* .DROPZONE_ACCEPT_IMAGES */ .Gw,
        disabled: submitting,
        inputProps: {
          style: {
            width: 1
          }
        },
        onDrop: onDropImage,
        children: ({
          isDragActive,
          isDragAccept,
          getRootProps,
          getInputProps
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx("input", _objectSpread({
            "data-cy": "heroAvatarDropzone"
          }, getInputProps())), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(EditableAvatarContainer, {
            isDragActive: isDragActive,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(EditOverlay, {
              borderRadius: borderRadius,
              children: [!isDragActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  buttonSize: "tiny",
                  minWidth: 120,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_feather_Camera__WEBPACK_IMPORTED_MODULE_5__.Camera, {
                    size: 12
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledSpan, {
                    ml: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
                        imgType
                      }
                    })
                  })]
                }), collective.image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  buttonSize: "tiny",
                  minWidth: 120,
                  mt: 2,
                  onClick: event => {
                    event.stopPropagation();
                    setshowModal(true);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledSpan2, {
                    ml: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
                        imgType
                      }
                    })
                  })
                })]
              }), isDragActive && (isDragAccept ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "uploadImage.isDragActive",
                defaultMessage: [{
                  "type": 0,
                  "value": "Drop it like it's hot 🔥"
                }]
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "uploadImage.isDragReject",
                defaultMessage: [{
                  "type": 0,
                  "value": "🚫 This file type is not accepted"
                }]
              }))]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
              collective: collective,
              radius: AVATAR_SIZE
            })]
          })]
        }))
      }), showModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        width: "100%",
        maxWidth: "570px",
        onClose: () => {
          setshowModal(false);
        },
        header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
            imgType
          }
        }),
        continueHandler: async () => {
          setSubmitting(true); // Need this because `upload` is not a graphql function

          try {
            await editImage({
              variables: {
                id: collective.id,
                image: null
              }
            });
            setshowModal(false);
          } finally {
            setSubmitting(false);
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
          fontSize: "14px",
          lineHeight: "18px",
          mt: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
    return uploadedImage || collective.imageUrl ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_4__.Mutation, {
      mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_21__/* .editCollectiveAvatarMutation */ .zk,
      children: editAvatar => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(EditingAvatarContainer, {
          borderRadius: borderRadius,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx("img", {
            "data-cy": "collective-avatar-image-preview",
            src: uploadedImage ? uploadedImage.preview : collective.imageUrl,
            alt: ""
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          position: "absolute",
          display: "flex",
          mt: 2,
          p: 2,
          zIndex: 2,
          background: "white",
          boxShadow: "0px 3px 5px -2px #777777",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(Triangle, {
            children: "\u25B2"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            textTransform: "capitalize",
            minWidth: 150,
            disabled: submitting,
            onClick: () => {
              setUploadedImage(null);
              setEditing(false);
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "form.cancel",
              defaultMessage: [{
                "type": 0,
                "value": "cancel"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            "data-cy": "heroAvatarDropzoneSave",
            textTransform: "capitalize",
            buttonStyle: "primary",
            ml: 3,
            minWidth: 150,
            loading: submitting,
            onClick: async () => {
              setSubmitting(true); // Need this because `upload` is not a graphql function

              try {
                // Upload image if changed or remove it
                let imgURL = collective.image;

                if (uploadedImage) {
                  imgURL = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__/* .upload */ .ws)(uploadedImage, 'ACCOUNT_AVATAR');
                } // Update settings


                await editAvatar({
                  variables: {
                    id: collective.id,
                    image: imgURL
                  }
                }); // Reset

                setUploadedImage(null);
                setEditing(false);
              } finally {
                setSubmitting(false);
              }
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "save",
              defaultMessage: [{
                "type": 0,
                "value": "Save"
              }]
            })
          })]
        })]
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_7__.injectIntl)(HeroAvatar));

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr).withConfig({
  displayName: "HeroAvatar___StyledSpan",
  componentId: "sc-xvjpei-4"
})({
  verticalAlign: 'center'
});

var _StyledSpan2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr).withConfig({
  displayName: "HeroAvatar___StyledSpan2",
  componentId: "sc-xvjpei-5"
})({
  verticalAlign: 'center'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "on": () => (/* binding */ BASE_HERO_HEIGHT),
  "DA": () => (/* binding */ BASE_HERO_WIDTH),
  "in": () => (/* binding */ DEFAULT_BACKGROUND_CROP),
  "XH": () => (/* binding */ StyledHeroBackground),
  "ZP": () => (/* binding */ hero_HeroBackground),
  "bV": () => (/* binding */ getAlignedRight),
  "EH": () => (/* binding */ getCrop),
  "aB": () => (/* binding */ getZoom)
});

// EXTERNAL MODULE: external "lodash/has"
var has_ = __webpack_require__(98210);
var has_default = /*#__PURE__*/__webpack_require__.n(has_);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/collective-page/images/HeroBackgroundMask.svg
/* harmony default export */ const HeroBackgroundMask = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2OCIgaGVpZ2h0PSI0NzIiIHZpZXdCb3g9IjAgMCAxMzY4IDQ3MiIgZmlsbD0ibm9uZSIgCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik0zMS45ODU2IDAuMDAwNDM3MTU0QzIyMC40MDkgMjUzLjYwNiA4MjMuMjU2IDQyOC4yNzcgOTkwLjA4MiA0NTYuNzY0QzExMDMuMjcgNDc2LjA5MiAxMzExLjA2IDQ2OC4yMzIgMTM2OCA0NDYuMDY5QzEzNjggMzg0LjYyMSAxMzY4IDEuMTM4MTQgMTM2OCAxLjEzODE0Qzk4MC4yOCAwLjc2MTY4MiAzNzAuOTkxIDAuMDAwMjQ2MjMgMzEuOTg1NiAwLjAwMDQzNzE1NFoiIGZpbGw9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjA3NSIgZD0iTTkwLjUyMDkgLTQxLjYxNkMyMTcuNDUgLTQxLjYxNiAxMTQwLjgzIC00Mi44MDk4IDEzOTUuNzIgLTQyLjgwOThDMTM5NS43MiAyMS4zMTY1IDEzOTUuNzIgMTY3LjYxMyAxMzk1LjcyIDIwOC41NjZDMTM5NS43MiAyNjcuNTYyIDE2NDQuMiA1MzUuNjExIDEwMDUuMDQgNDY0LjAyNkM2ODguNzU3IDQyOC42MDMgNTExLjg3MyAyMzIuOTgyIDM0OC45MDIgMTk5LjU4OEMyMTkuMzMgMTczLjAzOCA2My4yNTExIDk0LjI1MDYgOTAuNTIwOSAtNDEuNjE2WiIgZmlsbD0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03NTMuODMxIDQzNC44NzJDNzU2LjM4NiA0MzUuMTU1IDc1OC42ODcgNDMzLjMxNCA3NTguOTcgNDMwLjc1OUM3NTkuMjUzIDQyOC4yMDQgNzU3LjQxMiA0MjUuOTAzIDc1NC44NTcgNDI1LjYyQzc1Mi4zMDIgNDI1LjMzNyA3NTAuMDAyIDQyNy4xNzggNzQ5LjcxOSA0MjkuNzMzQzc0OS40MzUgNDMyLjI4OCA3NTEuMjc3IDQzNC41ODkgNzUzLjgzMSA0MzQuODcyWiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY3NS45NDggNDI1LjA2QzY3Ny44NyA0MjUuMjczIDY3OS42IDQyMy44ODggNjc5LjgxMyA0MjEuOTY3QzY4MC4wMjYgNDIwLjA0NiA2NzguNjQxIDQxOC4zMTUgNjc2LjcyIDQxOC4xMDJDNjc0Ljc5OSA0MTcuODg5IDY3My4wNjkgNDE5LjI3NCA2NzIuODU2IDQyMS4xOTVDNjcyLjY0MiA0MjMuMTE3IDY3NC4wMjcgNDI0Ljg0NyA2NzUuOTQ4IDQyNS4wNloiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05NTkuMTk5IDQ0NS4zN0M5NjIuNjI4IDQ0NS43NTEgOTY1LjcxNSA0NDMuMjc5IDk2Ni4wOTYgNDM5Ljg1MUM5NjYuNDc2IDQzNi40MjIgOTY0LjAwNCA0MzMuMzM1IDk2MC41NzYgNDMyLjk1NUM5NTcuMTQ4IDQzMi41NzUgOTU0LjA2IDQzNS4wNDYgOTUzLjY4IDQzOC40NzRDOTUzLjMgNDQxLjkwMyA5NTUuNzcxIDQ0NC45OSA5NTkuMTk5IDQ0NS4zN1oiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01ODIuNDc0IDM3Mi40OTRDNTg2Ljg1NCAzNzIuOTc5IDU5MC43OTggMzY5LjgyMyA1OTEuMjgzIDM2NS40NDNDNTkxLjc2OSAzNjEuMDYzIDU4OC42MTIgMzU3LjExOSA1ODQuMjMzIDM1Ni42MzRDNTc5Ljg1MyAzNTYuMTQ4IDU3NS45MDkgMzU5LjMwNSA1NzUuNDIzIDM2My42ODRDNTc0LjkzOCAzNjguMDY0IDU3OC4wOTUgMzcyLjAwOCA1ODIuNDc0IDM3Mi40OTRaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODg2LjM4MSA0MjYuNjU5Qzg5MS45MiA0MjcuMjczIDg5Ni45MDggNDIzLjI4IDg5Ny41MjIgNDE3Ljc0MUM4OTguMTM2IDQxMi4yMDIgODk0LjE0NCA0MDcuMjE0IDg4OC42MDUgNDA2LjZDODgzLjA2NiA0MDUuOTg1IDg3OC4wNzcgNDA5Ljk3OCA4NzcuNDYzIDQxNS41MTdDODc2Ljg0OSA0MjEuMDU2IDg4MC44NDEgNDI2LjA0NCA4ODYuMzgxIDQyNi42NTlaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzA3LjExNyA0MTYuNDczQzcxMy45MDUgNDE3LjIyNiA3MjAuMDE4IDQxMi4zMzMgNzIwLjc3MSA0MDUuNTQ0QzcyMS41MjQgMzk4Ljc1NiA3MTYuNjMxIDM5Mi42NDMgNzA5Ljg0MiAzOTEuODlDNzAzLjA1NCAzOTEuMTM3IDY5Ni45NDEgMzk2LjAzIDY5Ni4xODggNDAyLjgxOUM2OTUuNDM1IDQwOS42MDcgNzAwLjMyOCA0MTUuNzIxIDcwNy4xMTcgNDE2LjQ3M1oiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05OTguNjMxIDQzMC4zNzJDMTAwNi41MSA0MzEuMjQ1IDEwMTMuNiA0MjUuNTY5IDEwMTQuNDcgNDE3LjY5M0MxMDE1LjM1IDQwOS44MTcgMTAwOS42NyA0MDIuNzI1IDEwMDEuNzkgNDAxLjg1MkM5OTMuOTE4IDQwMC45NzkgOTg2LjgyNSA0MDYuNjU1IDk4NS45NTIgNDE0LjUzMUM5ODUuMDc5IDQyMi40MDYgOTkwLjc1NSA0MjkuNDk5IDk5OC42MzEgNDMwLjM3MloiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03OTEuODk4IDQyMy4zNDZDODA1LjQ3NSA0MjQuODUxIDgxNy43MDIgNDE1LjA2NSA4MTkuMjA3IDQwMS40ODhDODIwLjcxMiAzODcuOTExIDgxMC45MjcgMzc1LjY4NSA3OTcuMzUgMzc0LjE3OUM3ODMuNzczIDM3Mi42NzQgNzcxLjU0NiAzODIuNDYgNzcwLjA0MSAzOTYuMDM3Qzc2OC41MzYgNDA5LjYxNCA3NzguMzIxIDQyMS44NCA3OTEuODk4IDQyMy4zNDZaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQzLjMxNCAzNzUuNTYyQzY1Ni44OTEgMzc3LjA2NyA2NjkuMTE4IDM2Ny4yODEgNjcwLjYyMyAzNTMuNzA0QzY3Mi4xMjggMzQwLjEyNyA2NjIuMzQzIDMyNy45MDEgNjQ4Ljc2NiAzMjYuMzk1QzYzNS4xODkgMzI0Ljg5IDYyMi45NjIgMzM0LjY3NiA2MjEuNDU3IDM0OC4yNTNDNjE5Ljk1MiAzNjEuODMgNjI5LjczNyAzNzQuMDU2IDY0My4zMTQgMzc1LjU2MloiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zODAuNDQ3IDI5Ny41NzhDMzgyLjc4NiAyOTguNjQ0IDM4NS41NDYgMjk3LjYxMSAzODYuNjExIDI5NS4yNzFDMzg3LjY3NiAyOTIuOTMyIDM4Ni42NDMgMjkwLjE3MiAzODQuMzA0IDI4OS4xMDdDMzgxLjk2NSAyODguMDQyIDM3OS4yMDUgMjg5LjA3NSAzNzguMTQgMjkxLjQxNEMzNzcuMDc0IDI5My43NTMgMzc4LjEwNyAyOTYuNTEzIDM4MC40NDcgMjk3LjU3OFoiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMjMuMzkzIDI2MS41MTlDMzI1LjE1MiAyNjIuMzIgMzI3LjIyOCAyNjEuNTQzIDMyOC4wMjkgMjU5Ljc4NEMzMjguODMgMjU4LjAyNSAzMjguMDUzIDI1NS45NDkgMzI2LjI5NCAyNTUuMTQ4QzMyNC41MzUgMjU0LjM0NyAzMjIuNDU5IDI1NS4xMjQgMzIxLjY1OCAyNTYuODgzQzMyMC44NTcgMjU4LjY0MyAzMjEuNjM0IDI2MC43MTggMzIzLjM5MyAyNjEuNTE5WiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4NS45NzMgMzE5LjMyOUM0ODkuOTgzIDMyMS4xNTUgNDk0LjcxNCAzMTkuMzg0IDQ5Ni41NCAzMTUuMzc0QzQ5OC4zNjYgMzExLjM2MyA0OTYuNTk2IDMwNi42MzIgNDkyLjU4NSAzMDQuODA2QzQ4OC41NzUgMzAyLjk4IDQ4My44NDQgMzA0Ljc1MSA0ODIuMDE4IDMwOC43NjFDNDgwLjE5MiAzMTIuNzcxIDQ4MS45NjIgMzE3LjUwMyA0ODUuOTczIDMxOS4zMjlaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzA3LjAzNyAyMzIuOTE4QzMxMS4wNDcgMjM0Ljc0NCAzMTUuNzc5IDIzMi45NzQgMzE3LjYwNSAyMjguOTYzQzMxOS40MzEgMjI0Ljk1MyAzMTcuNjYgMjIwLjIyMiAzMTMuNjUgMjE4LjM5NkMzMDkuNjQgMjE2LjU3IDMwNC45MDggMjE4LjM0IDMwMy4wODIgMjIyLjM1MUMzMDEuMjU2IDIyNi4zNjEgMzAzLjAyNyAyMzEuMDkyIDMwNy4wMzcgMjMyLjkxOFoiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MzAuMDE2IDMxMC42NTNDNDM2LjcgMzEzLjY5NiA0NDQuNTg2IDMxMC43NDUgNDQ3LjYyOSAzMDQuMDYxQzQ1MC42NzMgMjk3LjM3NyA0NDcuNzIxIDI4OS40OTIgNDQxLjAzOCAyODYuNDQ4QzQzNC4zNTQgMjgzLjQwNSA0MjYuNDY4IDI4Ni4zNTYgNDIzLjQyNSAyOTMuMDRDNDIwLjM4MSAyOTkuNzI0IDQyMy4zMzMgMzA3LjYwOSA0MzAuMDE2IDMxMC42NTNaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzU1LjY4NSAyNjMuMDcyQzM2MS45MDEgMjY1LjkwMiAzNjkuMjM0IDI2My4xNTggMzcyLjA2NSAyNTYuOTQyQzM3NC44OTUgMjUwLjcyNiAzNzIuMTUxIDI0My4zOTIgMzY1LjkzNSAyNDAuNTYyQzM1OS43MTkgMjM3LjczMSAzNTIuMzg1IDI0MC40NzYgMzQ5LjU1NSAyNDYuNjkyQzM0Ni43MjQgMjUyLjkwOCAzNDkuNDY5IDI2MC4yNDEgMzU1LjY4NSAyNjMuMDcyWiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUyOC42NzUgMzE1LjM5NUM1MzkuMDM1IDMyMC4xMTIgNTUxLjI1OCAzMTUuNTM4IDU1NS45NzUgMzA1LjE3OEM1NjAuNjkyIDI5NC44MTggNTU2LjExOCAyODIuNTk2IDU0NS43NTggMjc3Ljg3OEM1MzUuMzk4IDI3My4xNjEgNTIzLjE3NiAyNzcuNzM1IDUxOC40NTkgMjg4LjA5NUM1MTMuNzQxIDI5OC40NTUgNTE4LjMxNSAzMTAuNjc4IDUyOC42NzUgMzE1LjM5NVoiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MDUuNjQ2IDI3NC41NDJDNDE4LjA3OCAyODAuMjAzIDQzMi43NDUgMjc0LjcxNCA0MzguNDA2IDI2Mi4yODJDNDQ0LjA2NyAyNDkuODUgNDM4LjU3OCAyMzUuMTgzIDQyNi4xNDYgMjI5LjUyMkM0MTMuNzE0IDIyMy44NjEgMzk5LjA0NyAyMjkuMzUgMzkzLjM4NiAyNDEuNzgyQzM4Ny43MjUgMjU0LjIxNCAzOTMuMjE0IDI2OC44ODEgNDA1LjY0NiAyNzQuNTQyWiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwNy44MDcgMjA0LjMxN0MzMjAuMjM5IDIwOS45NzcgMzM0LjkwNiAyMDQuNDg4IDM0MC41NjcgMTkyLjA1NkMzNDYuMjI4IDE3OS42MjUgMzQwLjczOSAxNjQuOTU3IDMyOC4zMDcgMTU5LjI5N0MzMTUuODc1IDE1My42MzYgMzAxLjIwOCAxNTkuMTI1IDI5NS41NDcgMTcxLjU1N0MyODkuODg2IDE4My45ODkgMjk1LjM3NSAxOTguNjU2IDMwNy44MDcgMjA0LjMxN1oiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTguMjQ2NTggLTcyLjgyNzZDMjc3LjYxIDI0MC41OCA3MjguODI2IDQ0Ni4wNjkgMTI0MCA0NDYuMDY5QzE3NTAuNDUgNDQ2LjA2OSAyMjAxLjAyIDI0MC41OCAyNDcwIC03Mi44Mjc2SDguMjQ2NThaIiBmaWxsPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMSIgZD0iTTguMjQ2NTggLTcyLjgyNzZDMjc3LjYxIDI0MC41OCA3MjguODI2IDQ0Ni4wNjkgMTI0MCA0NDYuMDY5QzE3NTAuNDUgNDQ2LjA2OSAyMjAxLjAyIDI0MC41OCAyNDcwIC03Mi44Mjc2SDguMjQ2NThaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo=");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/collective-page/hero/HeroBackground.js






const BASE_HERO_WIDTH = 1368;
const BASE_HERO_HEIGHT = 325;

const generateBackground = theme => {
  const color = theme.colors.primary[300];
  const gradient = `linear-gradient(10deg, ${theme.colors.primary[800]}, ${theme.colors.primary[300]})`;
  return `${gradient}, ${color}`;
};

const BackgroundImage = external_styled_components_default().img.attrs({
  alt: ''
}).withConfig({
  displayName: "HeroBackground__BackgroundImage",
  componentId: "sc-rdqlca-0"
})([""]);
const StyledHeroBackground = external_styled_components_default().div.withConfig({
  displayName: "HeroBackground__StyledHeroBackground",
  componentId: "sc-rdqlca-1"
})(["position:absolute;right:0;top:0;height:100%;width:100%;max-width:", "px;z-index:", ";overflow:hidden;img{margin:0;user-select:none;}.reactEasyCrop_Image,", "{max-height:none;max-width:none;}", " @supports (mask-size:cover){background:", ";background-repeat:no-repeat;background-size:100%;mask:url(", ") no-repeat;mask-size:cover;mask-position-x:100%;mask-position-y:-150px;@media (max-width:900px){mask-position-x:20%;}}"], BASE_HERO_WIDTH, props => props.isEditing ? 0 : -1, BackgroundImage, props => props.isAlignedRight && (0,external_styled_components_.css)([".reactEasyCrop_Image,", "{top:0;right:0;min-height:0;min-width:0;left:unset;bottom:unset;position:absolute;}"], BackgroundImage), props => generateBackground(props.theme), HeroBackgroundMask);
const DEFAULT_BACKGROUND_CROP = {
  x: 0,
  y: 0
};
const getCrop = collective => {
  return get_default()(collective.settings, 'collectivePage.background.crop') || DEFAULT_BACKGROUND_CROP;
};
const getZoom = collective => {
  return get_default()(collective.settings, 'collectivePage.background.zoom') || 1;
};
const getAlignedRight = collective => {
  return get_default()(collective.settings, 'collectivePage.background.isAlignedRight');
};
/**
 * Wraps the logic to display the hero background. Fallsback on a white background if
 * css `mask` is not supported.
 */

const HeroBackground = ({
  collective
}) => {
  const crop = getCrop(collective);
  const zoom = getZoom(collective);
  const isAlignedRight = getAlignedRight(collective);

  const hasBackgroundSettings = has_default()(collective.settings, 'collectivePage.background');

  return /*#__PURE__*/jsx_runtime_.jsx(StyledHeroBackground, {
    isAlignedRight: isAlignedRight,
    children: collective.backgroundImageUrl && /*#__PURE__*/jsx_runtime_.jsx(BackgroundImage, {
      src: collective.backgroundImageUrl,
      style: hasBackgroundSettings ? {
        transform: `translate(${crop.x}px, ${crop.y}px) scale(${zoom})`
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
/* harmony default export */ const hero_HeroBackground = (HeroBackground);

/***/ }),

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HeroSocialLinks)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: external "@styled-icons/fa-brands/Discord"
const Discord_namespaceObject = require("@styled-icons/fa-brands/Discord");
;// CONCATENATED MODULE: external "@styled-icons/fa-brands/Discourse"
const Discourse_namespaceObject = require("@styled-icons/fa-brands/Discourse");
// EXTERNAL MODULE: external "@styled-icons/fa-brands/Mastodon"
var Mastodon_ = __webpack_require__(3592);
;// CONCATENATED MODULE: external "@styled-icons/fa-brands/Meetup"
const Meetup_namespaceObject = require("@styled-icons/fa-brands/Meetup");
;// CONCATENATED MODULE: external "@styled-icons/fa-brands/Tiktok"
const Tiktok_namespaceObject = require("@styled-icons/fa-brands/Tiktok");
;// CONCATENATED MODULE: external "@styled-icons/fa-brands/Tumblr"
const Tumblr_namespaceObject = require("@styled-icons/fa-brands/Tumblr");
// EXTERNAL MODULE: external "@styled-icons/feather/Facebook"
var Facebook_ = __webpack_require__(94526);
// EXTERNAL MODULE: external "@styled-icons/feather/Github"
var Github_ = __webpack_require__(89988);
;// CONCATENATED MODULE: external "@styled-icons/feather/Gitlab"
const Gitlab_namespaceObject = require("@styled-icons/feather/Gitlab");
// EXTERNAL MODULE: external "@styled-icons/feather/Globe"
var Globe_ = __webpack_require__(79409);
;// CONCATENATED MODULE: external "@styled-icons/feather/Instagram"
const Instagram_namespaceObject = require("@styled-icons/feather/Instagram");
// EXTERNAL MODULE: external "@styled-icons/feather/Linkedin"
var Linkedin_ = __webpack_require__(203);
;// CONCATENATED MODULE: external "@styled-icons/feather/Slack"
const Slack_namespaceObject = require("@styled-icons/feather/Slack");
// EXTERNAL MODULE: external "@styled-icons/feather/Twitter"
var Twitter_ = __webpack_require__(71593);
;// CONCATENATED MODULE: external "@styled-icons/feather/Youtube"
const Youtube_namespaceObject = require("@styled-icons/feather/Youtube");
;// CONCATENATED MODULE: external "@styled-icons/remix-line/Pixelfed"
const Pixelfed_namespaceObject = require("@styled-icons/remix-line/Pixelfed");
// EXTERNAL MODULE: ./lib/graphql/types/v2/graphql.ts
var graphql = __webpack_require__(97965);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/collective-page/hero/HeroSocialLinks.tsx





















const SocialLinkIcon = {
  [graphql/* SocialLinkType.DISCORD */.Xu.DISCORD]: Discord_namespaceObject.Discord,
  [graphql/* SocialLinkType.FACEBOOK */.Xu.FACEBOOK]: Facebook_.Facebook,
  [graphql/* SocialLinkType.GITHUB */.Xu.GITHUB]: Github_.Github,
  [graphql/* SocialLinkType.GITLAB */.Xu.GITLAB]: Gitlab_namespaceObject.Gitlab,
  [graphql/* SocialLinkType.INSTAGRAM */.Xu.INSTAGRAM]: Instagram_namespaceObject.Instagram,
  [graphql/* SocialLinkType.MASTODON */.Xu.MASTODON]: Mastodon_.Mastodon,
  [graphql/* SocialLinkType.MATTERMOST */.Xu.MATTERMOST]: Globe_.Globe,
  [graphql/* SocialLinkType.TWITTER */.Xu.TWITTER]: Twitter_.Twitter,
  [graphql/* SocialLinkType.YOUTUBE */.Xu.YOUTUBE]: Youtube_namespaceObject.Youtube,
  [graphql/* SocialLinkType.TUMBLR */.Xu.TUMBLR]: Tumblr_namespaceObject.Tumblr,
  [graphql/* SocialLinkType.MEETUP */.Xu.MEETUP]: Meetup_namespaceObject.Meetup,
  [graphql/* SocialLinkType.SLACK */.Xu.SLACK]: Slack_namespaceObject.Slack,
  [graphql/* SocialLinkType.LINKEDIN */.Xu.LINKEDIN]: Linkedin_.Linkedin,
  [graphql/* SocialLinkType.GIT */.Xu.GIT]: Globe_.Globe,
  [graphql/* SocialLinkType.WEBSITE */.Xu.WEBSITE]: Globe_.Globe,
  [graphql/* SocialLinkType.DISCOURSE */.Xu.DISCOURSE]: Discourse_namespaceObject.Discourse,
  [graphql/* SocialLinkType.PIXELFED */.Xu.PIXELFED]: Pixelfed_namespaceObject.Pixelfed,
  [graphql/* SocialLinkType.GHOST */.Xu.GHOST]: Globe_.Globe,
  [graphql/* SocialLinkType.PEERTUBE */.Xu.PEERTUBE]: Globe_.Globe,
  [graphql/* SocialLinkType.TIKTOK */.Xu.TIKTOK]: Tiktok_namespaceObject.Tiktok
};

function iconForSocialLinkType(type) {
  return SocialLinkIcon[type] || Globe_.Globe;
}

function HeroSocialLinks({
  socialLinks,
  relMe
}) {
  return socialLinks.map((socialLink, index) => {
    const Icon = iconForSocialLinkType(socialLink.type);
    return /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
      "data-cy": `social-link-${index}`,
      href: socialLink.url,
      openInNewTabNoFollow: !relMe,
      openInNewTabNoFollowRelMe: !!relMe,
      children: /*#__PURE__*/jsx_runtime_.jsx(StyledRoundButton/* default */.Z, {
        size: 32,
        mr: 3,
        children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
          size: 12
        })
      })
    }, socialLink.type + socialLink.url);
  });
}

/***/ }),

/***/ 82062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_3": () => (/* binding */ totalCollectiveContributionsQuery),
/* harmony export */   "_R": () => (/* binding */ getTotalCollectiveContributionsQueryVariables)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const totalCollectiveContributionsQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .gqlV1 */ .N
/* GraphQL */
`
  query HeroTotalCollectiveContributions($slug: String!) {
    Collective(slug: $slug) {
      id
      currency
      stats {
        id
        totalAmountSpent
      }
    }
  }
`;
const getTotalCollectiveContributionsQueryVariables = slug => {
  return {
    slug
  };
};
const amountStyles = {
  fontSize: '20px',
  fontWeight: 'bold'
};
/**
 * This component fetches its own data because we don't want to query these fields
 * for regular collective.
 */

const HeroTotalCollectiveContributionsWithData = ({
  collective
}) => {
  const {
    data,
    loading,
    error
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(totalCollectiveContributionsQuery, {
    variables: getTotalCollectiveContributionsQueryVariables(collective.slug)
  });

  if (error || loading || !lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'Collective.stats.totalAmountSpent')) {
    return null;
  }

  const {
    stats,
    currency
  } = data.Collective;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
    my: 2,
    "data-cy": "hero-total-amount-contributed",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
      fontSize: "10px",
      textTransform: "uppercase",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "membership.totalDonations",
        defaultMessage: [{
          "type": 0,
          "value": "Total amount contributed"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroTotalCollectiveContributionsWithData);

/***/ }),

/***/ 51016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22749);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39131);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_collective_sections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64453);
/* harmony import */ var _collective_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38208);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _hero_Hero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83248);
/* harmony import */ var _sections_About__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67338);
/* harmony import */ var _sections_Budget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54103);
/* harmony import */ var _sections_ConnectedCollectives__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2746);
/* harmony import */ var _sections_Contribute__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53938);
/* harmony import */ var _sections_Contributions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45723);
/* harmony import */ var _sections_Contributors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60434);
/* harmony import */ var _sections_Conversations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86991);
/* harmony import */ var _sections_Empty__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(58424);
/* harmony import */ var _sections_Events__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8200);
/* harmony import */ var _sections_FinancialOverview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(12710);
/* harmony import */ var _sections_Goals__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35833);
/* harmony import */ var _sections_Location__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88556);
/* harmony import */ var _sections_OurTeam__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(61652);
/* harmony import */ var _sections_Projects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(76829);
/* harmony import */ var _sections_RecurringContributions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(31794);
/* harmony import */ var _sections_SponsorsAndParticipants__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(36202);
/* harmony import */ var _sections_TopFinancialContributors__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(76403);
/* harmony import */ var _sections_Transactions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(32971);
/* harmony import */ var _sections_Updates__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(66419);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(24839);
/* harmony import */ var _CategoryHeader__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(89881);
/* harmony import */ var _SectionContainer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(78496);
/* harmony import */ var _SectionsWithoutPaddingBottom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(11377);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_collective_navbar__WEBPACK_IMPORTED_MODULE_8__, _hero_Hero__WEBPACK_IMPORTED_MODULE_11__, _sections_Budget__WEBPACK_IMPORTED_MODULE_13__, _sections_Contribute__WEBPACK_IMPORTED_MODULE_15__, _sections_FinancialOverview__WEBPACK_IMPORTED_MODULE_21__, _sections_OurTeam__WEBPACK_IMPORTED_MODULE_24__, _sections_RecurringContributions__WEBPACK_IMPORTED_MODULE_26__, _sections_Transactions__WEBPACK_IMPORTED_MODULE_29__, _sections_Updates__WEBPACK_IMPORTED_MODULE_30__, _CategoryHeader__WEBPACK_IMPORTED_MODULE_32__]);
([_collective_navbar__WEBPACK_IMPORTED_MODULE_8__, _hero_Hero__WEBPACK_IMPORTED_MODULE_11__, _sections_Budget__WEBPACK_IMPORTED_MODULE_13__, _sections_Contribute__WEBPACK_IMPORTED_MODULE_15__, _sections_FinancialOverview__WEBPACK_IMPORTED_MODULE_21__, _sections_OurTeam__WEBPACK_IMPORTED_MODULE_24__, _sections_RecurringContributions__WEBPACK_IMPORTED_MODULE_26__, _sections_Transactions__WEBPACK_IMPORTED_MODULE_29__, _sections_Updates__WEBPACK_IMPORTED_MODULE_30__, _CategoryHeader__WEBPACK_IMPORTED_MODULE_32__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































/**
 * This is the collective page main layout, holding different blocks together
 * and watching scroll to synchronise the view for children properly.
 *
 * See design: https://www.figma.com/file/e71tBo0Sr8J7R5n6iMkqI42d/09.-Collectives?node-id=2338%3A36062
 */




class CollectivePage extends react__WEBPACK_IMPORTED_MODULE_5__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getSections", memoize_one__WEBPACK_IMPORTED_MODULE_6___default()((collective, isAdmin, isHostAdmin) => {
      return (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_7__/* .getFilteredSectionsForCollective */ .vY)(collective, isAdmin, isHostAdmin);
    }));

    _defineProperty(this, "getSectionsCategories", memoize_one__WEBPACK_IMPORTED_MODULE_6___default()((collective, isAdmin, isHostAdmin) => {
      const sections = this.getSections(collective, isAdmin, isHostAdmin);
      return sections.filter(s => s.type === 'CATEGORY');
    }));

    _defineProperty(this, "onScroll", lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(() => {
      let {
        isFixed,
        selectedCategory
      } = this.state; // Fixes the Hero when a certain scroll threshold is reached

      if (this.sectionsContainerRef.current) {
        if (this.sectionsContainerRef.current.getBoundingClientRect().top <= 50) {
          isFixed = true;
        } else if (isFixed) {
          isFixed = false;
        }
      } // Get the currently category that is at the top of the screen.


      const distanceThreshold = 200;
      const breakpoint = window.scrollY + distanceThreshold;
      const categories = this.getSectionsCategories(this.props.collective, this.props.isAdmin, this.props.isHostAdmin);

      for (let i = categories.length - 1; i >= 0; i--) {
        const categoryName = categories[i].name;
        const categoryRef = this.sectionCategoriesRefs[categoryName];

        if (categoryRef && breakpoint >= categoryRef.offsetTop) {
          selectedCategory = categoryName;
          break;
        }
      } // Update the state only if necessary


      if (this.state.isFixed !== isFixed || this.state.selectedCategory !== selectedCategory) {
        this.setState({
          isFixed,
          selectedCategory
        });
      } else if (!selectedCategory && categories?.length) {
        // Select first category by default
        this.setState({
          isFixed,
          selectedCategory: categories[0].name
        });
      }
    }, 100));

    _defineProperty(this, "onCollectiveClick", () => {
      window.scrollTo(0, 0);
    });

    this.sectionCategoriesRefs = {}; // This will store a map of category => ref

    this.sectionsContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createRef();
    this.state = {
      isFixed: false,
      selectedCategory: null
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, {
      passive: true
    });
    this.onScroll(); // First tick in case scroll is restored when page loads
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  renderSection(section, version) {
    switch (section) {
      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.UPDATES */ .bx.UPDATES:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Updates__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .ZP, {
          collective: this.props.collective,
          isAdmin: this.props.isAdmin,
          isLoggedIn: Boolean(this.props.LoggedInUser)
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Conversations__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, {
          collective: this.props.collective,
          conversations: this.props.conversations
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_RecurringContributions__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          slug: this.props.collective.slug,
          LoggedInUser: this.props.LoggedInUser
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.LOCATION */ .bx.LOCATION:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Location__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          collective: this.props.collective,
          refetch: this.props.refetch
        });
      // all other sections

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Contribute__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          status: this.props.status,
          collective: this.props.collective,
          tiers: this.props.tiers,
          events: this.props.events,
          connectedCollectives: this.props.connectedCollectives,
          contributors: this.props.financialContributors,
          contributorsStats: this.props.stats.backers,
          isAdmin: this.props.isAdmin
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Contributions__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          collective: this.props.collective,
          LoggedInUser: this.props.LoggedInUser
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.EVENTS */ .bx.EVENTS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Events__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          collective: this.props.collective,
          events: this.props.events,
          isAdmin: this.props.isAdmin
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.PROJECTS */ .bx.PROJECTS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Projects__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
          collective: this.props.collective,
          projects: this.props.projects,
          isAdmin: this.props.isAdmin
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.BUDGET */ .bx.BUDGET:
        return version === 2 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_FinancialOverview__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
          collective: this.props.collective
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Budget__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
          collective: this.props.collective,
          transactions: this.props.transactions,
          expenses: this.props.expenses
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Transactions__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP, {
          collective: this.props.collective,
          isAdmin: this.props.isAdmin,
          isRoot: this.props.isRoot
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Contributors__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          collective: this.props.collective,
          financialContributors: this.props.financialContributors,
          coreContributors: this.props.coreContributors,
          stats: this.props.stats
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.PARTICIPANTS */ .bx.PARTICIPANTS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_SponsorsAndParticipants__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          refetch: this.props.refetch,
          collective: this.props.collective,
          LoggedInUser: this.props.LoggedInUser
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.ABOUT */ .bx.ABOUT:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_About__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          collective: this.props.collective,
          canEdit: this.props.isAdmin
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.GOALS */ .bx.GOALS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Goals__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          collective: this.props.collective
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_OurTeam__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          collective: this.props.collective,
          coreContributors: lodash_compact__WEBPACK_IMPORTED_MODULE_3___default()(lodash_concat__WEBPACK_IMPORTED_MODULE_2___default()(this.props.collective.parentCollective?.coreContributors, this.props.coreContributors)),
          LoggedInUser: this.props.LoggedInUser
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_ConnectedCollectives__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          collective: this.props.collective,
          connectedCollectives: this.props.connectedCollectives
        });

      case _constants__WEBPACK_IMPORTED_MODULE_31__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_TopFinancialContributors__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
          collective: this.props.collective,
          financialContributors: this.props.financialContributors
        });

      default:
        return null;
    }
  }

  render() {
    const {
      collective,
      host,
      isAdmin,
      isHostAdmin,
      onPrimaryColorChange
    } = this.props;
    const {
      isFixed,
      selectedCategory
    } = this.state;
    const sections = this.getSections(collective, isAdmin, isHostAdmin);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_StyledContainer, {
      position: "relative",
      "data-cy": "collective-page-main",
      $_css: collective.isArchived ? 'filter: grayscale(100%);' : undefined,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_hero_Hero__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          collective: collective,
          host: host,
          isAdmin: isAdmin,
          onPrimaryColorChange: onPrimaryColorChange
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_collective_navbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("div", {
        ref: this.sectionsContainerRef,
        children: lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(sections) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_sections_Empty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          collective: this.props.collective
        }) : sections.map((entry, entryIdx) => entry.type === 'CATEGORY' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_CategoryHeader__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
            id: `category-${entry.name}`,
            ref: categoryRef => this.sectionCategoriesRefs[entry.name] = categoryRef,
            collective: collective,
            category: entry.name
          }), entry.sections.map((section, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_SectionContainer__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
            id: `section-${section.name}`,
            "data-cy": `section-${section.name}`,
            withPaddingBottom: idx === entry.sections.length - 1 && entryIdx === sections.length - 1 && !_SectionsWithoutPaddingBottom__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z[section.name],
            children: this.renderSection(section.name, section.version)
          }, section.name))]
        }, `category-${entry.name}`) : entry.type === 'SECTION' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_SectionContainer__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
          id: `section-${entry.name}`,
          "data-cy": `section-${entry.name}`,
          withPaddingBottom: entryIdx === sections.length - 1 && !_SectionsWithoutPaddingBottom__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z[entry.name],
          children: this.renderSection(entry.name)
        }, `section-${entry.name}`) : null)
      })]
    });
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectivePage);

var _StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "collective-page___StyledContainer",
  componentId: "sc-104jvdo-0"
})(["", ""], p => p.$_css);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82525);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74770);
/* harmony import */ var _InlineEditField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54746);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36219);
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8914);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);













 // Dynamicly load RichTextEditor to download it only if user can edit the page




const RichTextEditorLoadingPlaceholder = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
  height: 400
});

const RichTextEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 9139).then(__webpack_require__.bind(__webpack_require__, 59139)), {
  loading: RichTextEditorLoadingPlaceholder,
  ssr: false // No need for SSR as user needs to be logged in
  ,
  loadableGenerated: {
    modules: ["../components/collective-page/sections/About.js -> " + '../../RichTextEditor']
  }
});
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
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

const SectionAbout = ({
  collective,
  canEdit,
  intl
}) => {
  const isEmptyDescription = (0,_HTMLContent__WEBPACK_IMPORTED_MODULE_6__/* .isEmptyValue */ .O)(collective.longDescription);
  const isCollective = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE;
  const isFund = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.FUND */ .eV.FUND;
  canEdit = collective.isArchived ? false : canEdit;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    px: 2,
    pb: 5,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      width: "100%",
      maxWidth: 700,
      margin: "0 auto",
      mt: 4,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_InlineEditField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_13__/* .editCollectiveLongDescriptionMutation */ .fN,
        values: collective,
        field: "longDescription",
        canEdit: canEdit,
        topEdit: -20,
        showEditIcon: !isEmptyDescription,
        formatBeforeSubmit: v => (0,_HTMLContent__WEBPACK_IMPORTED_MODULE_6__/* .isEmptyValue */ .O)(v) ? null : v,
        prepareVariables: (collective, longDescription) => ({
          id: collective.id,
          longDescription: (0,_HTMLContent__WEBPACK_IMPORTED_MODULE_6__/* .isEmptyValue */ .O)(longDescription) ? null : longDescription
        }),
        children: ({
          isEditing,
          value,
          setValue,
          enableEditor,
          setUploading
        }) => {
          if (isEditing) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(RichTextEditor, {
              kind: "ACCOUNT_LONG_DESCRIPTION",
              defaultValue: collective.longDescription,
              onChange: e => setValue(e.target.value),
              placeholder: intl.formatMessage(messages.placeholder),
              toolbarTop: [56, 64],
              toolbarBackgroundColor: "#F7F8FA",
              withStickyToolbar: true,
              videoEmbedEnabled: true,
              autoFocus: true,
              setUploading: setUploading
            });
          } else if (isEmptyDescription) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
              justifyContent: "center",
              children: canEdit ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
                flexDirection: "column",
                alignItems: "center",
                children: [isCollective && !isFund && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                  type: "info",
                  withIcon: true,
                  fontStyle: "italic",
                  fontSize: "14px",
                  mb: 4,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                    id: "SectionAbout.Why",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Tell your story and explain your purpose."
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                  buttonSize: "large",
                  onClick: enableEditor,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                    id: "CollectivePage.AddLongDescription",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Add description"
                    }]
                  })
                })]
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
                color: "black.500",
                fontStyle: "italic",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(SectionAbout)));

/***/ }),

/***/ 63370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79800);
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sumBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59969);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_material_BarChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87501);
/* harmony import */ var _styled_icons_material_BarChart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_BarChart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42551);
/* harmony import */ var _styled_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_material_PieChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52547);
/* harmony import */ var _styled_icons_material_PieChart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_PieChart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_material_Timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41200);
/* harmony import */ var _styled_icons_material_Timeline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Timeline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26043);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17632);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25896);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92129);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29242);
/* harmony import */ var _PeriodFilterPresetsSelect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60732);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);


const _excluded = ["collective", "defaultTimeInterval"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



















const Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 28403, 23)), {
  ssr: false,
  loadableGenerated: {
    modules: ["../components/collective-page/sections/Budget/ContributionsBudget.js -> " + 'react-apexcharts']
  }
});



const budgetSectionContributionsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query BudgetSectionContributionsQuery($slug: String!, $from: DateTime, $to: DateTime) {
    account(slug: $slug) {
      id
      currency
      stats {
        id
        contributionsAmount(dateFrom: $from, dateTo: $to, includeChildren: false) {
          label
          count
          amount {
            value
            valueInCents
            currency
          }
        }
        contributionsAmountTimeSeries(dateFrom: $from, dateTo: $to, includeChildren: false) {
          timeUnit
          nodes {
            date
            amount {
              value
              currency
            }
            label
          }
        }
      }
    }
  }
`;

const ContributionsBudget = _ref => {
  let {
    collective,
    defaultTimeInterval
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [tmpDateInterval, setTmpDateInterval] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(defaultTimeInterval);
  const [graphType, setGraphType] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(_common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.LIST */ .y1.LIST);
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(budgetSectionContributionsQuery, {
    variables: _objectSpread({
      slug: collective.slug
    }, tmpDateInterval),
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .API_V2_CONTEXT */ .T
  });
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.useIntl)();
  const timeUnit = data?.account?.stats.contributionsAmountTimeSeries.timeUnit;
  const {
    series
  } = (0,_lib_charts__WEBPACK_IMPORTED_MODULE_10__/* .extractSeriesFromTimeSeries */ .Wi)(data?.account?.stats.contributionsAmountTimeSeries.nodes, {
    x: 'date',
    y: 'amount.value',
    group: 'label',
    groupNameTransformer: (lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default())
  });
  const defaultApexOptions = (0,_common__WEBPACK_IMPORTED_MODULE_20__/* .makeApexOptions */ .Zf)(collective.currency, timeUnit, intl);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
      justifyContent: "space-between",
      alignItems: "center",
      flexGrow: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
        fontSize: "20px",
        lineHeight: "20px",
        fontWeight: "500",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
          id: "Contributions",
          defaultMessage: [{
            "type": 0,
            "value": "Contributions"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
        gap: "8px",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_PeriodFilterPresetsSelect__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          onChange: setTmpDateInterval,
          interval: tmpDateInterval,
          formatDateFn: v => v?.toISOString(),
          disabled: loading
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .GraphTypeButton */ .Tr, {
          active: graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.LIST */ .y1.LIST,
          onClick: () => setGraphType(_common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.LIST */ .y1.LIST),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_5__.FormatListBulleted, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .GraphTypeButton */ .Tr, {
          active: graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.TIME */ .y1.TIME,
          onClick: () => setGraphType(_common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.TIME */ .y1.TIME),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_material_Timeline__WEBPACK_IMPORTED_MODULE_7__.Timeline, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .GraphTypeButton */ .Tr, {
          active: graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.BAR */ .y1.BAR,
          onClick: () => setGraphType(_common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.BAR */ .y1.BAR),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_material_BarChart__WEBPACK_IMPORTED_MODULE_4__.BarChart, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .GraphTypeButton */ .Tr, {
          active: graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.PIE */ .y1.PIE,
          onClick: () => setGraphType(_common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.PIE */ .y1.PIE),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_material_PieChart__WEBPACK_IMPORTED_MODULE_6__.PieChart, {})
        })]
      })]
    }), loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      mt: "30px",
      height: 100
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      mt: "30px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_common__WEBPACK_IMPORTED_MODULE_20__/* .StatsCardContent */ .lq, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          width: "50%",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: "500",
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
              id: "ContributionsReceived",
              defaultMessage: [{
                "type": 0,
                "value": "Contributions received"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            mt: "4px",
            children: lodash_sumBy__WEBPACK_IMPORTED_MODULE_0___default()(data?.account?.stats.contributionsAmount, 'count')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          width: "50%",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: "500",
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
              id: "Label.AmountCollected",
              defaultMessage: [{
                "type": 0,
                "value": "Amount collected"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            mt: "4px",
            children: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatCurrency */ .xG)(lodash_sumBy__WEBPACK_IMPORTED_MODULE_0___default()(data?.account?.stats.contributionsAmount, 'amount.valueInCents'), collective.currency)
          })]
        })]
      })
    }), loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      mt: 4,
      height: 300
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.LIST */ .y1.LIST && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .BudgetTable */ .Wc, {
        mt: 4,
        cellPadding: "10px",
        headers: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
          id: "Tiers",
          defaultMessage: [{
            "type": 0,
            "value": "Tiers"
          }]
        }, 1), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
          id: "Label.NumberOfContributions",
          defaultMessage: [{
            "type": 0,
            "value": "# of Contributions"
          }]
        }, 2), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
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
            currency: data?.account.currency
          }
        }, 3)],
        rows: data?.account?.stats.contributionsAmount.map((contribution, i) => (0,_common__WEBPACK_IMPORTED_MODULE_20__/* .makeBudgetTableRow */ .Bo)(contribution.label + contribution.count, [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .TagMarker */ .oo, {
            color: _common__WEBPACK_IMPORTED_MODULE_20__/* .COLORS */ .DM[i % _common__WEBPACK_IMPORTED_MODULE_20__/* .COLORS.length */ .DM.length]
          }), contribution.label]
        }, contribution.label), contribution.count, (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatCurrency */ .xG)(contribution.amount.valueInCents, contribution.amount.currency)]))
      }), graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.TIME */ .y1.TIME && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        mt: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(Chart, {
          type: "area",
          width: "100%",
          height: "250px",
          options: _objectSpread(_objectSpread({}, defaultApexOptions), {}, {
            chart: {
              id: 'chart-budget-contributions-overview'
            }
          }),
          series: (0,_lib_charts__WEBPACK_IMPORTED_MODULE_10__/* .alignSeries */ .yc)(series)
        })
      }), graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.BAR */ .y1.BAR && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        mt: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(Chart, {
          type: "bar",
          width: "100%",
          height: "250px",
          options: _objectSpread(_objectSpread({}, defaultApexOptions), {}, {
            chart: {
              id: 'chart-budget-expenses-stacked-bars',
              stacked: true
            }
          }),
          series: (0,_lib_charts__WEBPACK_IMPORTED_MODULE_10__/* .alignSeries */ .yc)(series)
        })
      }), graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.PIE */ .y1.PIE && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        mt: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(Chart, {
          type: "pie",
          width: "100%",
          height: "300px",
          options: {
            labels: data?.account?.stats.contributionsAmount.map(contribution => lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default()(contribution.label)),
            colors: _common__WEBPACK_IMPORTED_MODULE_20__/* .COLORS */ .DM,
            chart: {
              id: 'chart-budget-expenses-pie'
            },
            legend: _objectSpread(_objectSpread({}, defaultApexOptions.legend), {}, {
              position: 'left'
            }),
            xaxis: defaultApexOptions.xaxis,
            yaxis: defaultApexOptions.yaxis
          },
          series: data?.account?.stats.contributionsAmount.map(contribution => contribution.amount.value)
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
      mt: 3,
      textAlign: "right",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__/* .getCollectivePageRoute */ .x0)(collective)}/transactions?kind=ADDED_FUNDS%2CCONTRIBUTION`,
        "data-cy": "view-all-contributions-link",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributionsBudget);

/***/ }),

/***/ 60132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79800);
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sumBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59969);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_material_BarChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87501);
/* harmony import */ var _styled_icons_material_BarChart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_BarChart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42551);
/* harmony import */ var _styled_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_material_PieChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52547);
/* harmony import */ var _styled_icons_material_PieChart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_PieChart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_material_Timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41200);
/* harmony import */ var _styled_icons_material_Timeline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Timeline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26043);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17632);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25896);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(92129);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29242);
/* harmony import */ var _PeriodFilterPresetsSelect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60732);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92265);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);


const _excluded = ["collective", "defaultTimeInterval"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



















const Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 28403, 23)), {
  ssr: false,
  loadableGenerated: {
    modules: ["../components/collective-page/sections/Budget/ExpenseBudget.js -> " + 'react-apexcharts']
  }
});



const budgetSectionExpenseQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query BudgetSectionExpenseQuery($slug: String!, $from: DateTime, $to: DateTime) {
    account(slug: $slug) {
      id
      currency
      stats {
        id
        expensesTags(dateFrom: $from, dateTo: $to, includeChildren: false) {
          label
          count
          amount {
            value
            valueInCents
            currency
          }
        }
        expensesTagsTimeSeries(dateFrom: $from, dateTo: $to, includeChildren: false) {
          timeUnit
          nodes {
            date
            amount {
              value
              currency
            }
            label
          }
        }
      }
    }
  }
`;

const ExpenseBudget = _ref => {
  let {
    collective,
    defaultTimeInterval
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [tmpDateInterval, setTmpDateInterval] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(defaultTimeInterval);
  const [graphType, setGraphType] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(_common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.LIST */ .y1.LIST);
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(budgetSectionExpenseQuery, {
    variables: _objectSpread({
      slug: collective.slug
    }, tmpDateInterval),
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .API_V2_CONTEXT */ .T
  });
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.useIntl)();
  const timeUnit = data?.account?.stats.expensesTagsTimeSeries.timeUnit;
  const {
    series
  } = (0,_lib_charts__WEBPACK_IMPORTED_MODULE_10__/* .extractSeriesFromTimeSeries */ .Wi)(data?.account?.stats.expensesTagsTimeSeries.nodes, {
    x: 'date',
    y: 'amount.value',
    group: 'label',
    groupNameTransformer: (lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default())
  });
  const defaultApexOptions = (0,_common__WEBPACK_IMPORTED_MODULE_20__/* .makeApexOptions */ .Zf)(collective.currency, timeUnit, intl);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
      justifyContent: "space-between",
      alignItems: "center",
      flexGrow: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
        fontSize: "20px",
        lineHeight: "20px",
        fontWeight: "500",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
          id: "Expenses",
          defaultMessage: [{
            "type": 0,
            "value": "Expenses"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
        gap: "8px",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_PeriodFilterPresetsSelect__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          onChange: setTmpDateInterval,
          interval: tmpDateInterval,
          formatDateFn: v => v?.toISOString(),
          disabled: loading
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .GraphTypeButton */ .Tr, {
          active: graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.LIST */ .y1.LIST,
          onClick: () => setGraphType(_common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.LIST */ .y1.LIST),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_5__.FormatListBulleted, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .GraphTypeButton */ .Tr, {
          active: graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.TIME */ .y1.TIME,
          onClick: () => setGraphType(_common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.TIME */ .y1.TIME),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_material_Timeline__WEBPACK_IMPORTED_MODULE_7__.Timeline, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .GraphTypeButton */ .Tr, {
          active: graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.BAR */ .y1.BAR,
          onClick: () => setGraphType(_common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.BAR */ .y1.BAR),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_material_BarChart__WEBPACK_IMPORTED_MODULE_4__.BarChart, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .GraphTypeButton */ .Tr, {
          active: graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.PIE */ .y1.PIE,
          onClick: () => setGraphType(_common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.PIE */ .y1.PIE),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_material_PieChart__WEBPACK_IMPORTED_MODULE_6__.PieChart, {})
        })]
      })]
    }), loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      mt: "30px",
      height: 100
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      mt: "30px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_common__WEBPACK_IMPORTED_MODULE_20__/* .StatsCardContent */ .lq, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          width: "50%",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: "500",
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
              id: "ExpensesPaid",
              defaultMessage: [{
                "type": 0,
                "value": "Expenses paid"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            mt: "4px",
            children: lodash_sumBy__WEBPACK_IMPORTED_MODULE_0___default()(data?.account?.stats.expensesTags, 'count')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          width: "50%",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: "500",
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
              id: "AmountDisbursed",
              defaultMessage: [{
                "type": 0,
                "value": "Amount disbursed"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            mt: "4px",
            children: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatCurrency */ .xG)(lodash_sumBy__WEBPACK_IMPORTED_MODULE_0___default()(data?.account?.stats.expensesTags, 'amount.valueInCents'), collective.currency)
          })]
        })]
      })
    }), loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      mt: 4,
      height: 300
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.LIST */ .y1.LIST && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .BudgetTable */ .Wc, {
        mt: 4,
        cellPadding: "10px",
        headers: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
          id: "Tags",
          defaultMessage: [{
            "type": 0,
            "value": "Tags"
          }]
        }, 1), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
          id: "Label.NumberOfExpenses",
          defaultMessage: [{
            "type": 0,
            "value": "# of Expenses"
          }]
        }, 2), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
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
            currency: data?.account.currency
          }
        }, 3)],
        rows: data?.account?.stats.expensesTags.map((expenseTag, i) => (0,_common__WEBPACK_IMPORTED_MODULE_20__/* .makeBudgetTableRow */ .Bo)(expenseTag.id + expenseTag.count, [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_common__WEBPACK_IMPORTED_MODULE_20__/* .TagMarker */ .oo, {
            color: _common__WEBPACK_IMPORTED_MODULE_20__/* .COLORS */ .DM[i % _common__WEBPACK_IMPORTED_MODULE_20__/* .COLORS.length */ .DM.length]
          }), expenseTag.label]
        }, expenseTag.label), expenseTag.count, (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatCurrency */ .xG)(expenseTag.amount.valueInCents, expenseTag.amount.currency)]))
      }), graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.TIME */ .y1.TIME && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        mt: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(Chart, {
          type: "area",
          width: "100%",
          height: "250px",
          options: _objectSpread(_objectSpread({}, defaultApexOptions), {}, {
            chart: {
              id: 'chart-budget-expenses-time-series'
            }
          }),
          series: (0,_lib_charts__WEBPACK_IMPORTED_MODULE_10__/* .alignSeries */ .yc)(series)
        })
      }), graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.BAR */ .y1.BAR && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        mt: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(Chart, {
          type: "bar",
          width: "100%",
          height: "250px",
          options: _objectSpread(_objectSpread({}, defaultApexOptions), {}, {
            chart: {
              id: 'chart-budget-expenses-stacked-bars',
              stacked: true
            }
          }),
          series: (0,_lib_charts__WEBPACK_IMPORTED_MODULE_10__/* .alignSeries */ .yc)(series)
        })
      }), graphType === _common__WEBPACK_IMPORTED_MODULE_20__/* .GRAPH_TYPES.PIE */ .y1.PIE && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        mt: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(Chart, {
          type: "pie",
          width: "100%",
          height: "300px",
          options: {
            labels: data?.account?.stats.expensesTags.map(expenseTag => lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default()(expenseTag.label)),
            colors: _common__WEBPACK_IMPORTED_MODULE_20__/* .COLORS */ .DM,
            chart: {
              id: 'chart-budget-expenses-pie'
            },
            legend: _objectSpread(_objectSpread({}, defaultApexOptions.legend), {}, {
              position: 'left'
            }),
            xaxis: defaultApexOptions.xaxis,
            yaxis: defaultApexOptions.yaxis
          },
          series: data?.account?.stats.expensesTags.map(expenseTag => expenseTag.amount.value)
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
      mt: 3,
      textAlign: "right",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__/* .getCollectivePageRoute */ .x0)(collective)}/expenses`,
        "data-cy": "view-all-expenses-link",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseBudget);

/***/ }),

/***/ 92265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bo": () => (/* binding */ makeBudgetTableRow),
/* harmony export */   "DM": () => (/* binding */ COLORS),
/* harmony export */   "Tr": () => (/* binding */ GraphTypeButton),
/* harmony export */   "Wc": () => (/* binding */ BudgetTable),
/* harmony export */   "Zf": () => (/* binding */ makeApexOptions),
/* harmony export */   "lq": () => (/* binding */ StatsCardContent),
/* harmony export */   "oo": () => (/* binding */ TagMarker),
/* harmony export */   "y1": () => (/* binding */ GRAPH_TYPES)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26043);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["headers", "rows", "truncate"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Table = styled_components__WEBPACK_IMPORTED_MODULE_2___default().table.withConfig({
  displayName: "common__Table",
  componentId: "sc-1hx1uus-0"
})(["", " thead th{font-weight:500;font-size:12px;line-height:16px;letter-spacing:0.06em;text-transform:uppercase;color:#4d4f51;}th,td{font-weight:500;font-size:16px;line-height:24px;color:#141415;:not(:first-child){border-left:1px solid #eaeaec;text-align:center;}}tbody td:first-child{text-transform:capitalize;}"], styled_system__WEBPACK_IMPORTED_MODULE_3__.margin);
const makeBudgetTableRow = (key, values) => {
  values.key = key;
  return values;
};
const BudgetTable = _ref => {
  let {
    headers,
    rows,
    truncate
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if (truncate) {
    rows = rows.slice(0, truncate);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Table, _objectSpread(_objectSpread({
    mt: 4,
    cellSpacing: 0,
    cellPadding: "10px"
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("thead", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("tr", {
        children: headers.map(header => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("th", {
          children: header
        }, header.key))
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("tbody", {
      children: rows?.map(row => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("tr", {
        children: row.map((cell, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("td", {
          children: cell
        }, cell?.key || `${row.key}-${i}`))
      }, row.key))
    })]
  }));
};
const COLORS = ['#A3F89C', '#FFBF5F', '#8FC7FF', '#F89CE4', '#F89C9C'];
const TagMarker = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "common__TagMarker",
  componentId: "sc-1hx1uus-1"
})(["display:inline-block;margin-right:8px;height:24px;width:6px;border-radius:8px;vertical-align:bottom;background-color:", ";"], props => props.color);
const StatsCardContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC).withConfig({
  displayName: "common__StatsCardContent",
  componentId: "sc-1hx1uus-2"
})(["div{margin:12px 0;padding:0px 36px;:not(:first-child){border-left:1px solid #d9d9d9;}}"]);
const GRAPH_TYPES = {
  LIST: 'LIST',
  TIME: 'TIME',
  BAR: 'BAR',
  PIE: 'PIE'
};
const GraphTypeButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "common__GraphTypeButton",
  componentId: "sc-1hx1uus-3"
})(["border-radius:100%;height:32px;width:32px;color:#4d4f51;border:1px solid #f9fafb;background-color:#f9fafb;cursor:pointer;:hover{border-color:#c4c7cc;}", ""], props => props.active ? `
    border-color: #1153d6;
    background-color: rgba(20, 110, 255, 0.1);
    ` : '');
const makeApexOptions = (currency, timeUnit, intl) => ({
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
      formatter: function (value) {
        // Show data aggregated yearly
        if (timeUnit === 'YEAR') {
          return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(value).utc().year(); // Show data aggregated monthly
        } else if (timeUnit === 'MONTH') {
          return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(value).utc().format('MMM-YYYY'); // Show data aggregated by week or day
        } else if (timeUnit === 'WEEK' || timeUnit === 'DAY') {
          return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(value).utc().format('DD-MMM-YYYY');
        }
      }
    }
  },
  yaxis: {
    labels: {
      formatter: value => (0,_lib_charts__WEBPACK_IMPORTED_MODULE_4__/* .formatAmountForLegend */ .zz)(value, currency, intl.locale)
    }
  }
});
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

/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19146);
/* harmony import */ var _contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98796);
/* harmony import */ var _contribute_cards_ContributeCollective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12461);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _HorizontalScroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97049);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36219);
/* harmony import */ var _ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38255);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















class ConnectedCollectives extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getContributeCardsScrollDistance", width => {
      const oneCardScrollDistance = _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_12__/* .CONTRIBUTE_CARD_WIDTH */ .TJ + _contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_2__/* .CONTRIBUTE_CARD_PADDING_X[0] */ .f[0] * 2;

      if (width <= oneCardScrollDistance * 2) {
        return oneCardScrollDistance;
      } else if (width <= oneCardScrollDistance * 4) {
        return oneCardScrollDistance * 2;
      } else {
        return oneCardScrollDistance * 3;
      }
    });
  }

  render() {
    const {
      collective,
      connectedCollectives
    } = this.props;

    if (!connectedCollectives?.length) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      pb: 4,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
          fontSize: ['20px', '24px', '32px'],
          fontWeight: "normal",
          color: "black.700",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "ConnectedCollectives",
            defaultMessage: [{
              "type": 0,
              "value": "Connected Collectives"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HorizontalScroller__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        container: _ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
        getScrollDistance: this.getContributeCardsScrollDistance,
        children: connectedCollectives.map(({
          id,
          collective
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          px: _contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_2__/* .CONTRIBUTE_CARD_PADDING_X */ .f,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_contribute_cards_ContributeCollective__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            collective: collective
          })
        }, id))
      }), Boolean(connectedCollectives.length > 6) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          href: `/${collective.slug}/connected-collectives`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            mt: 4,
            width: 1,
            buttonSize: "small",
            fontSize: "14px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ConnectedCollectives));

/***/ }),

/***/ 53938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12568);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12136);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47162);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32651);
/* harmony import */ var _lib_tier_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36648);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(25896);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69078);
/* harmony import */ var _ContainerOverlay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3798);
/* harmony import */ var _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(19146);
/* harmony import */ var _contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(98796);
/* harmony import */ var _contribute_cards_ContributeCrypto__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9881);
/* harmony import */ var _contribute_cards_ContributeCustom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(35744);
/* harmony import */ var _contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(78826);
/* harmony import */ var _contribute_cards_CreateNew__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(48451);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(16159);
/* harmony import */ var _HorizontalScroller__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(97049);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(87268);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(40486);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(36219);
/* harmony import */ var _ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(38255);
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(8914);
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(71611);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(27132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_22__]);
_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_22__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































 // Dynamic imports



const AdminContributeCardsContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(() => Promise.all(/* import() */[__webpack_require__.e(9591), __webpack_require__.e(8613)]).then(__webpack_require__.bind(__webpack_require__, 38613)), {
  ssr: false,
  loadableGenerated: {
    modules: ["../components/collective-page/sections/Contribute.js -> " + '../../contribute-cards/AdminContributeCardsContainer']
  }
});
/**
 * The contribute section, implemented as a pure component to avoid unnecessary
 * re-renders when scrolling.
 */

class SectionContribute extends (react__WEBPACK_IMPORTED_MODULE_5___default().PureComponent) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showTiersAdmin: false,
      isSaving: false,
      draggingId: null
    });

    _defineProperty(this, "onTiersAdminReady", () => {
      this.setState({
        showTiersAdmin: true
      });
    });

    _defineProperty(this, "getFinancialContributorsWithoutTier", memoize_one__WEBPACK_IMPORTED_MODULE_7___default()(contributors => {
      return contributors.filter(c => c.isBacker && (c.tiersIds.length === 0 || c.tiersIds[0] === null));
    }));

    _defineProperty(this, "hasContributors", memoize_one__WEBPACK_IMPORTED_MODULE_7___default()(contributors => {
      return contributors.find(c => c.isBacker);
    }));

    _defineProperty(this, "onContributeCardsReorder", async cards => {
      const {
        collective,
        editAccountSettings
      } = this.props;
      const cardKeys = cards.map(c => c.key); // Save the new positions

      this.setState({
        isSaving: true
      });

      try {
        const mutationVariables = {
          collectiveId: collective.id,
          key: _lib_tier_utils__WEBPACK_IMPORTED_MODULE_15__/* .TIERS_ORDER_KEY */ .Zq,
          value: cardKeys
        };
        await editAccountSettings({
          variables: mutationVariables,
          update: (store, response) => {
            // We need to update the store manually because the response comes from API V2
            const collectivePageQueryVariables = (0,_graphql_queries__WEBPACK_IMPORTED_MODULE_33__/* .getCollectivePageQueryVariables */ .L)(collective.slug);
            const data = store.readQuery({
              query: _graphql_queries__WEBPACK_IMPORTED_MODULE_33__/* .collectivePageQuery */ .J,
              variables: collectivePageQueryVariables
            });

            const newData = lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default()(data), 'Collective.settings', response.data.editAccountSetting.settings);

            store.writeQuery({
              query: _graphql_queries__WEBPACK_IMPORTED_MODULE_33__/* .collectivePageQuery */ .J,
              variables: collectivePageQueryVariables,
              data: newData
            });
          }
        });
        this.setState({
          isSaving: false
        });
      } catch (e) {
        this.setState({
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .getErrorFromGraphqlException */ .H1)(e),
          isSaving: false
        });
      }
    });

    _defineProperty(this, "sortContributeCards", memoize_one__WEBPACK_IMPORTED_MODULE_7___default()((cards, orderKeys) => {
      return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(cards, card => {
        const index = orderKeys.findIndex(key => key === card.key);
        return index === -1 ? Infinity : index; // put unsorted cards at the end
      });
    }));

    _defineProperty(this, "getContributeCards", memoize_one__WEBPACK_IMPORTED_MODULE_7___default()(tiers => {
      const {
        collective,
        contributors,
        contributorsStats,
        isAdmin
      } = this.props;
      const hasNoContributor = !this.hasContributors(contributors);
      const canContribute = collective.isActive && (!(0,_lib_events__WEBPACK_IMPORTED_MODULE_13__/* .isPastEvent */ .Up)(collective) || isAdmin);
      const hasCustomContribution = !lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(collective, 'settings.disableCustomContributions', false);

      const hasCryptoContribution = !lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(collective, 'settings.disableCryptoContributions', true) && lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(collective, 'host.settings.cryptoEnabled', false); // Remove tickets


      const baseTiers = tiers.filter(tier => tier.type !== _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__/* .TierTypes.TICKET */ .x$.TICKET);
      const contributeCards = [...baseTiers.map(tier => ({
        key: tier.id,
        Component: _contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
        componentProps: {
          collective,
          tier,
          hideContributors: hasNoContributor
        }
      }))];

      if (hasCustomContribution) {
        contributeCards.push({
          key: 'custom',
          Component: _contribute_cards_ContributeCustom__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
          componentProps: {
            collective,
            contributors: this.getFinancialContributorsWithoutTier(contributors),
            stats: contributorsStats,
            hideContributors: hasNoContributor,
            disableCTA: !canContribute
          }
        });
      }

      if (hasCryptoContribution) {
        contributeCards.push({
          key: 'crypto',
          Component: _contribute_cards_ContributeCrypto__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
          componentProps: {
            collective,
            hideContributors: true,
            // for the MVP we shall not display the financial contributors for crypto
            disableCTA: !canContribute
          }
        });
      }

      return contributeCards;
    }));

    _defineProperty(this, "sortTicketTiers", memoize_one__WEBPACK_IMPORTED_MODULE_7___default()(tiers => {
      return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()([...tiers], ['endsAt'], ['desc']);
    }));

    _defineProperty(this, "filterTickets", memoize_one__WEBPACK_IMPORTED_MODULE_7___default()(tiers => {
      return tiers.filter(tier => tier.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__/* .TierTypes.TICKET */ .x$.TICKET);
    }));
  }

  getContributeCardsScrollDistance(width) {
    const oneCardScrollDistance = _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_36__/* .CONTRIBUTE_CARD_WIDTH */ .TJ + _contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_19__/* .CONTRIBUTE_CARD_PADDING_X[0] */ .f[0] * 2;

    if (width <= oneCardScrollDistance * 2) {
      return oneCardScrollDistance;
    } else if (width <= oneCardScrollDistance * 4) {
      return oneCardScrollDistance * 2;
    } else {
      return oneCardScrollDistance * 3;
    }
  }

  render() {
    const {
      collective,
      tiers,
      events,
      connectedCollectives,
      contributors,
      isAdmin
    } = this.props;
    const {
      isSaving,
      showTiersAdmin
    } = this.state;
    const isEvent = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .CollectiveType.EVENT */ .eV.EVENT;
    const isProject = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .CollectiveType.PROJECT */ .eV.PROJECT;
    const isFund = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .CollectiveType.FUND */ .eV.FUND;
    const hasOtherWaysToContribute = !isEvent && !isProject && !isFund && (isAdmin || events.length > 0 || connectedCollectives.length > 0);
    const isActive = collective.isActive;
    const hasHost = collective.host;
    const isHost = collective.isHost;
    const orderKeys = (0,_lib_tier_utils__WEBPACK_IMPORTED_MODULE_15__/* .getCollectiveContributionCardsOrder */ .rm)(collective);
    const contributeCards = this.getContributeCards(tiers);
    const sortedContributeCards = this.sortContributeCards(contributeCards, orderKeys);
    const hasContribute = Boolean(isAdmin || collective.isActive && contributeCards.length);
    const hasNoContributor = !this.hasContributors(contributors);
    const sortedTicketTiers = this.sortTicketTiers(this.filterTickets(tiers));
    const hasTickets = isEvent && Boolean(isAdmin || collective.isActive && sortedTicketTiers.length);
    const hideTicketsFromNonAdmins = (sortedTicketTiers.length === 0 || !collective.isActive) && !isAdmin;
    const cannotOrderTickets = !hasTickets && !isAdmin || (0,_lib_events__WEBPACK_IMPORTED_MODULE_13__/* .isPastEvent */ .Up)(collective);
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

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [isAdmin && !hasHost && !isHost && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
        py: 4,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Flex */ .kC, {
          mb: 4,
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledP, {
            color: "black.700",
            my: 2,
            mr: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
              id: "contributions.subtitle",
              defaultMessage: [{
                "type": 0,
                "value": "To accept financial contributions, you need to complete your setup and decide where your funds will be held."
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
          my: 5,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Link__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            href: `/${collective.parentCollective?.slug || collective.slug}/accept-financial-contributions`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
              buttonStyle: "primary",
              buttonSize: "large",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                id: "contributions.startAccepting",
                defaultMessage: [{
                  "type": 0,
                  "value": "Start accepting contributions"
                }]
              })
            })
          })
        })]
      }), (isAdmin && hasHost || isAdmin && isHost || !isAdmin && isActive) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [hasContribute && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                id: "FinancialContributions",
                defaultMessage: [{
                  "type": 0,
                  "value": "Financial Contributions"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
            pb: 4,
            "data-cy": "financial-contributions",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_HorizontalScroller__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
              getScrollDistance: this.getContributeCardsScrollDistance,
              container: _ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
              containerProps: {
                disableScrollSnapping: !!this.state.draggingId
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {
                children: [isSaving && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_ContainerOverlay__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                  position: "fixed",
                  top: 0,
                  alignItems: "center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                    size: 64
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__.P, {
                    mt: 3,
                    fontSize: "15px",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                      id: "Saving",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Saving..."
                      }]
                    })
                  })]
                }), !(isAdmin && showTiersAdmin) && sortedContributeCards.map(({
                  key,
                  Component,
                  componentProps
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(Component, _objectSpread({}, componentProps))
                }, key)), isAdmin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  display: showTiersAdmin ? 'block' : 'none',
                  "data-cy": "admin-contribute-cards",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(AdminContributeCardsContainer, {
                    collective: collective,
                    cards: sortedContributeCards,
                    onReorder: this.onContributeCardsReorder,
                    isSaving: this.state.isSaving,
                    setDraggingId: draggingId => this.setState({
                      draggingId
                    }),
                    draggingId: this.state.draggingId,
                    onMount: this.onTiersAdminReady
                  })
                })]
              })
            })
          })]
        }), isEvent && !cannotOrderTickets && !hideTicketsFromNonAdmins && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
          pb: 4,
          "data-cy": "Tickets",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Flex */ .kC, {
              alignItems: "left",
              mb: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__.H3, {
                fontSize: "20px",
                fontWeight: "600",
                color: "black.700",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                  id: "section.tickets.title",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Tickets"
                  }]
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_HorizontalScroller__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            container: _ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
            getScrollDistance: this.getContributeCardsScrollDistance,
            children: [sortedTicketTiers.map(tier => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_contribute_cards_ContributeTier__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                collective: collective,
                tier: tier,
                hideContributors: hasNoContributor,
                disableCTA: !collective.isActive
              })
            }, tier.id)), isAdmin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              minHeight: 150,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_contribute_cards_CreateNew__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                route: `/${collective.parentCollective.slug}/events/${collective.slug}/admin/tickets`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                  id: "SectionTickets.CreateTicket",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create Ticket"
                  }]
                })
              })
            })]
          })]
        }), (tiers.length > 6 || hasOtherWaysToContribute) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
          pb: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Link__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_16__/* .getCollectivePageRoute */ .x0)(collective)}/contribute`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
              mt: 3,
              width: 1,
              buttonSize: "small",
              fontSize: "14px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
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

}

const addEditAccountSettingMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__.graphql)(_graphql_mutations__WEBPACK_IMPORTED_MODULE_32__/* .editAccountSettingMutation */ .jt, {
  name: 'editAccountSettings',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__/* .API_V2_CONTEXT */ .T
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEditAccountSettingMutation(SectionContribute));

var _StyledP = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Text__WEBPACK_IMPORTED_MODULE_29__.P).withConfig({
  displayName: "Contribute___StyledP",
  componentId: "sc-1ij7b9h-0"
})({
  flex: '1 0 50%',
  maxWidth: 780
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Contributions)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(29114);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/constants/roles.js
var constants_roles = __webpack_require__(98216);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Container.tsx
var components_Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var components_Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
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
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/StyledMembershipCard.js
const _excluded = ["membership", "intl"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










/**
 * A card to show a user's membership.
 */




const StyledMembershipCard = _ref => {
  let {
    membership,
    intl
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    locale
  } = (0,external_react_intl_.useIntl)();
  const {
    account,
    since,
    role
  } = membership;
  return /*#__PURE__*/jsx_runtime_.jsx(StyledCollectiveCard/* default */.Z, _objectSpread(_objectSpread({
    collective: account
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Container/* default */.Z, {
      p: 3,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Grid/* Box */.xu, {
        "data-cy": "caption",
        mb: 2,
        children: [role && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          mb: 3,
          "data-cy": "contribution-date-since",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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
          }), ' ', /*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
            display: "block",
            fontSize: "16px",
            fontWeight: "bold",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedDate, {
              value: since,
              month: "long",
              year: "numeric"
            })
          })]
        }), role === constants_roles/* default.BACKER */.Z.BACKER ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text.P, {
          mt: 3,
          "data-cy": "amount-contributed",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Text/* Span */.Dr, {
            fontSize: "12px",
            lineHeight: "18px",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "membership.totalDonations.title",
              defaultMessage: [{
                "type": 0,
                "value": "Amount contributed"
              }]
            }), ' ']
          }), /*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
            display: "block",
            fontSize: "16px",
            fontWeight: "bold",
            children:
            /** Ideally we should breakdown amounts donated per currency, but for now
                the API only returns the total amount in collective's currency. */
            (0,currency_utils/* formatCurrency */.xG)(membership.totalDonations.valueInCents, membership.totalDonations.currency || 'USD', {
              precision: 0,
              locale
            })
          })]
        }) : /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          mt: 3,
          fontSize: "12px",
          lineHeight: "18px",
          children: account.backers?.totalCount > 0 && /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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
              prettyCount: /*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
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
/* harmony default export */ const components_StyledMembershipCard = ((0,external_react_intl_.injectIntl)(StyledMembershipCard));
// EXTERNAL MODULE: ./components/collective-page/_constants.js
var _constants = __webpack_require__(24839);
// EXTERNAL MODULE: ./components/collective-page/ContainerSectionContent.js
var ContainerSectionContent = __webpack_require__(36219);
// EXTERNAL MODULE: ./components/collective-page/SectionTitle.js
var SectionTitle = __webpack_require__(27132);
;// CONCATENATED MODULE: ./components/collective-page/sections/Contributions.js
function Contributions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Contributions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Contributions_ownKeys(Object(source), !0).forEach(function (key) { Contributions_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Contributions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Contributions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const PAGE_SIZE = 15;
const FILTERS = {
  ALL: 'ALL',
  HOSTED_COLLECTIVES: 'HOST',
  HOSTED_FUNDS: 'FUNDS',
  HOSTED_EVENTS: 'EVENT',
  CORE: 'CORE',
  FINANCIAL: 'FINANCIAL',
  EVENTS: 'EVENTS'
};
const FILTER_PROPS = [{
  id: FILTERS.ALL,
  args: {
    role: [constants_roles/* default.HOST */.Z.HOST, constants_roles/* default.ADMIN */.Z.ADMIN, constants_roles/* default.CONTRIBUTOR */.Z.CONTRIBUTOR, constants_roles/* default.BACKER */.Z.BACKER, constants_roles/* default.MEMBER */.Z.MEMBER],
    accountType: null,
    orderBy: {
      field: 'MEMBER_COUNT',
      direction: 'DESC'
    }
  },
  isActive: () => true
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
  isActive: roles => roles?.some(r => r.role === constants_roles/* default.HOST */.Z.HOST && r.type === collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE)
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
  isActive: roles => roles?.some(r => r.role === constants_roles/* default.HOST */.Z.HOST && r.type === collectives/* CollectiveType.FUND */.eV.FUND)
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
  isActive: (roles, account) => account?.type !== collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE && roles?.some(r => r.role === constants_roles/* default.HOST */.Z.HOST && r.type === 'EVENT')
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
  isActive: roles => roles?.some(r => r.role === constants_roles/* default.BACKER */.Z.BACKER)
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
  isActive: roles => roles?.some(r => r.role === constants_roles/* default.ADMIN */.Z.ADMIN || r.role === constants_roles/* default.MEMBER */.Z.MEMBER)
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
  isActive: roles => roles?.some(r => r.role === constants_roles/* default.ATTENDEE */.Z.ATTENDEE)
}];

const getAvailableFilters = roles => {
  return FILTER_PROPS.filter(f => f.isActive(roles)).map(f => f.id);
};

const I18nFilters = (0,external_react_intl_.defineMessages)({
  [FILTERS.ALL]: {
    id: "SectionContributions.All",
    defaultMessage: [{
      "type": 0,
      "value": "All Contributions"
    }]
  },
  [FILTERS.HOSTED_COLLECTIVES]: {
    id: "HostedCollectives",
    defaultMessage: [{
      "type": 0,
      "value": "Hosted Collectives"
    }]
  },
  [FILTERS.HOSTED_FUNDS]: {
    id: "HostedFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Hosted Funds"
    }]
  },
  [FILTERS.HOSTED_EVENTS]: {
    id: "HostedEvents",
    defaultMessage: [{
      "type": 0,
      "value": "Hosted Events"
    }]
  },
  [FILTERS.FINANCIAL]: {
    id: "Member.Role.BACKER",
    defaultMessage: [{
      "type": 0,
      "value": "Financial Contributor"
    }]
  },
  [FILTERS.CORE]: {
    id: "Member.Role.MEMBER",
    defaultMessage: [{
      "type": 0,
      "value": "Core Contributor"
    }]
  },
  [FILTERS.EVENTS]: {
    id: "Events",
    defaultMessage: [{
      "type": 0,
      "value": "Events"
    }]
  }
});
const GRID_TEMPLATE_COLUMNS = 'repeat(auto-fill, minmax(220px, 1fr))';
/** A container for membership cards to ensure we have a smooth transition */

const MembershipCardContainer = external_styled_components_default().div.withConfig({
  displayName: "Contributions__MembershipCardContainer",
  componentId: "sc-14wcqo7-0"
})(["animation:", " 0.2s;"], StyledKeyframes/* fadeIn */.Ji);
const contributionsSectionStaticQuery = client_.gql`
  query ContributionsSectionStatic($slug: String!) {
    account(slug: $slug) {
      id
      settings
      type
      isHost
      # limit: 1 as current best practice to avoid the API fetching entries it doesn't need
      hostedAccounts: memberOf(
        role: [HOST]
        accountType: [COLLECTIVE, FUND]
        isApproved: true
        isArchived: false
        limit: 1
      ) {
        totalCount
      }
      connectedAccounts: members(role: [CONNECTED_ACCOUNT]) {
        totalCount
        nodes {
          id
          role
          tier {
            id
            name
            description
          }
          publicMessage
          description
          account {
            id
            name
            slug
            type
            isIncognito
            isAdmin
            isHost
            imageUrl
          }
        }
      }
    }
  }
`;
const contributionsSectionQuery = client_.gql`
  query ContributionsSection(
    $slug: String!
    $limit: Int!
    $offset: Int
    $role: [MemberRole]
    $accountType: [AccountType]
    $orderBy: OrderByInput
  ) {
    account(slug: $slug) {
      id
      settings
      type
      isHost
      memberOf(
        limit: $limit
        offset: $offset
        role: $role
        accountType: $accountType
        orderByRoles: true
        isApproved: true
        isArchived: false
        orderBy: $orderBy
      ) {
        offset
        limit
        totalCount
        roles {
          role
          type
        }
        nodes {
          id
          role
          tier {
            id
            name
            description
          }
          since
          totalDonations {
            currency
            valueInCents
          }
          publicMessage
          description
          account {
            id
            name
            slug
            type
            isIncognito
            isAdmin
            isHost
            imageUrl(height: 128)
            backgroundImageUrl(height: 200)
            ... on Event {
              parent {
                id
                backgroundImageUrl(height: 200)
              }
            }
            ... on Project {
              parent {
                id
                backgroundImageUrl(height: 200)
              }
            }
            # limit: 1 as current best practice to avoid the API fetching entries it doesn't need
            backers: members(role: [BACKER], limit: 1) {
              totalCount
            }
          }
        }
      }
    }
  }
`;

const SectionContributions = ({
  collective
}) => {
  const intl = (0,external_react_intl_.useIntl)();
  const [isLoadingMore, setLoadingMore] = external_react_default().useState(false);
  const [filter, setFilter] = external_react_default().useState(collective.isHost ? FILTERS.HOSTED_COLLECTIVES : FILTERS.ALL);
  const selectedFilter = FILTER_PROPS.find(f => f.id === filter);
  const {
    data,
    loading,
    fetchMore
  } = (0,client_.useQuery)(contributionsSectionQuery, {
    variables: Contributions_objectSpread({
      slug: collective.slug,
      limit: PAGE_SIZE,
      offset: 0
    }, selectedFilter.args),
    context: helpers/* API_V2_CONTEXT */.T,
    notifyOnNetworkStatusChange: true
  });
  const {
    data: staticData
  } = (0,client_.useQuery)(contributionsSectionStaticQuery, {
    variables: {
      slug: collective.slug
    },
    context: helpers/* API_V2_CONTEXT */.T
  });

  const handleLoadMore = async () => {
    setLoadingMore(true);
    const offset = memberOf.nodes.length;
    const selectedFilter = FILTER_PROPS.find(f => f.id === filter);
    await fetchMore({
      variables: Contributions_objectSpread({
        offset
      }, selectedFilter.args),
      updateQuery: (prev, {
        fetchMoreResult
      }) => {
        if (!fetchMoreResult) {
          return prev;
        }

        return Object.assign({}, prev, {
          account: Contributions_objectSpread(Contributions_objectSpread({}, prev.account), {}, {
            memberOf: Contributions_objectSpread(Contributions_objectSpread({}, fetchMoreResult.account.memberOf), {}, {
              nodes: [...prev.account.memberOf.nodes, ...fetchMoreResult.account.memberOf.nodes]
            })
          })
        });
      }
    });
    setLoadingMore(false);
  };

  const handleFilterSelect = id => {
    setFilter(id);
    const selectedFilter = FILTER_PROPS.find(f => f.id === id);
    fetchMore({
      variables: Contributions_objectSpread({
        offset: 0
      }, selectedFilter.args),
      updateQuery: (prev, {
        fetchMoreResult
      }) => {
        return fetchMoreResult ? fetchMoreResult : prev;
      }
    });
  };

  const {
    account,
    memberOf
  } = data?.account || {};
  const {
    hostedAccounts,
    connectedAccounts
  } = staticData?.account || {};
  const isOrganization = account?.type === collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION;
  const availableFilters = getAvailableFilters(memberOf?.roles || [], account);
  const membersLeft = memberOf && memberOf.totalCount - memberOf.nodes.length;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Grid/* Box */.xu, {
    pb: 4,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ContainerSectionContent/* default */.Z, {
        children: hostedAccounts?.totalCount > 0 && /*#__PURE__*/jsx_runtime_.jsx(Text.H3, {
          fontSize: ['20px', '24px', '32px'],
          fontWeight: "normal",
          color: "black.700",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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
      }), availableFilters?.length > 1 && /*#__PURE__*/jsx_runtime_.jsx(components_Grid/* Box */.xu, {
        mt: 4,
        mx: "auto",
        maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
        children: /*#__PURE__*/jsx_runtime_.jsx(StyledFilters/* default */.Z, {
          filters: availableFilters,
          getLabel: key => intl.formatMessage(I18nFilters[key]),
          onChange: handleFilterSelect,
          selected: filter,
          justifyContent: "left",
          minButtonWidth: 175,
          px: _constants/* Dimensions.PADDING_X */.Db.PADDING_X,
          disabled: isLoadingMore
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Container/* default */.Z, {
        "data-cy": "Contributions",
        maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
        px: _constants/* Dimensions.PADDING_X */.Db.PADDING_X,
        mt: 4,
        mx: "auto",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Grid/* Grid */.rj, {
          gridGap: 24,
          gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
          children: [(!loading || isLoadingMore && loading) && memberOf?.nodes.map(membership => /*#__PURE__*/jsx_runtime_.jsx(MembershipCardContainer, {
            "data-cy": "collective-contribution",
            children: /*#__PURE__*/jsx_runtime_.jsx(components_StyledMembershipCard, {
              membership: membership
            })
          }, membership.id)), loading && [...Array(membersLeft < PAGE_SIZE ? membersLeft : PAGE_SIZE).keys()].map(id => /*#__PURE__*/jsx_runtime_.jsx(LoadingPlaceholder/* default */.Z, {
            height: 334
          }, id))]
        })
      }), memberOf?.nodes.length < memberOf?.totalCount && /*#__PURE__*/jsx_runtime_.jsx(components_Grid/* Flex */.kC, {
        mt: 3,
        justifyContent: "center",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledButton/* default */.Z, {
          "data-cy": "load-more",
          textTransform: "capitalize",
          minWidth: 170,
          onClick: handleLoadMore,
          loading: loading,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "loadMore",
            defaultMessage: [{
              "type": 0,
              "value": "load more"
            }]
          }), " \u2193"]
        })
      })]
    }), connectedAccounts?.totalCount > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Grid/* Box */.xu, {
      mt: 5,
      children: [/*#__PURE__*/jsx_runtime_.jsx(ContainerSectionContent/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx(SectionTitle/* default */.Z, {
          textAlign: "left",
          mb: 4,
          fontSize: ['20px', '24px', '32px'],
          color: "black.700",
          children: isOrganization ? /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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
          }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Container/* default */.Z, {
        maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
        pl: _constants/* Dimensions.PADDING_X */.Db.PADDING_X,
        m: "0 auto",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Grid/* Grid */.rj, {
          gridGap: 24,
          gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
          children: connectedAccounts.nodes.map(membership => /*#__PURE__*/jsx_runtime_.jsx(MembershipCardContainer, {
            children: /*#__PURE__*/jsx_runtime_.jsx(components_StyledMembershipCard, {
              membership: membership
            })
          }, membership.id))
        })
      })]
    })]
  });
};

const ContributionsGrid = ({
  entries,
  children
}) => {
  return /*#__PURE__*/_jsx(Container, {
    "data-cy": "Contributions",
    maxWidth: Dimensions.MAX_SECTION_WIDTH,
    px: Dimensions.PADDING_X,
    mt: 4,
    mx: "auto",
    children: /*#__PURE__*/_jsx(Grid, {
      gridGap: 24,
      gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
      children: entries.map(entry => /*#__PURE__*/_jsx(MembershipCardContainer, {
        "data-cy": "collective-contribution",
        children: children(entry)
      }, entry.id))
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
/* harmony default export */ const Contributions = (SectionContributions);

/***/ }),

/***/ 60434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SectionContributors)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "memoize-one"
var external_memoize_one_ = __webpack_require__(17809);
var external_memoize_one_default = /*#__PURE__*/__webpack_require__.n(external_memoize_one_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/ContributorsFilter.js
var ContributorsFilter = __webpack_require__(97866);
// EXTERNAL MODULE: ./components/ContributorsGrid.js
var ContributorsGrid = __webpack_require__(65320);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/collective-page/_constants.js
var _constants = __webpack_require__(24839);
// EXTERNAL MODULE: ./components/collective-page/ContainerSectionContent.js
var ContainerSectionContent = __webpack_require__(36219);
// EXTERNAL MODULE: ./components/collective-page/SectionTitle.js
var SectionTitle = __webpack_require__(27132);
;// CONCATENATED MODULE: ./components/collective-page/images/ContributorsGridBackground.svg
/* harmony default export */ const ContributorsGridBackground = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTcxOCIgaGVpZ2h0PSIxNDUwIiB2aWV3Qm94PSIwIDAgMTcxOCAxNDUwIiBmaWxsPSJub25lIiAKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIG9wYWNpdHk9IjAuNjQiPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02NjUuMTI2IDY1Ni44MUM2NTkuOTY5IDY1Ni4wODggNjU2LjM3MyA2NTEuMzIxIDY1Ny4wOTYgNjQ2LjE2M0M2NTcuODE4IDY0MS4wMDUgNjYyLjU4NSA2MzcuNDEgNjY3Ljc0MyA2MzguMTMzQzY3Mi45MDEgNjM4Ljg1NSA2NzYuNDk2IDY0My42MjIgNjc1Ljc3NCA2NDguNzhDNjc1LjA1MSA2NTMuOTM4IDY3MC4yODQgNjU3LjUzMyA2NjUuMTI2IDY1Ni44MVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04MjIuOTUyIDY3Ni41MjhDODE5LjA3NCA2NzUuOTg1IDgxNi4zNyA2NzIuNCA4MTYuOTEzIDY2OC41MjFDODE3LjQ1NyA2NjQuNjQzIDgyMS4wNDIgNjYxLjkzOSA4MjQuOTIgNjYyLjQ4MkM4MjguNzk5IDY2My4wMjYgODMxLjUwMyA2NjYuNjExIDgzMC45NTkgNjcwLjQ4OUM4MzAuNDE2IDY3NC4zNjggODI2LjgzMSA2NzcuMDcyIDgyMi45NTIgNjc2LjUyOFoiIGZpbGw9IiNGMEYyRjUiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTYuNjYxIDU3NC42MzFDMjQ5LjczOSA1NzMuNjYxIDI0NC45MTQgNTY3LjI2NCAyNDUuODg0IDU2MC4zNDJDMjQ2Ljg1NCA1NTMuNDIxIDI1My4yNTEgNTQ4LjU5NiAyNjAuMTczIDU0OS41NjVDMjY3LjA5NCA1NTAuNTM1IDI3MS45MTkgNTU2LjkzMiAyNzAuOTUgNTYzLjg1NEMyNjkuOTggNTcwLjc3NiAyNjMuNTgzIDU3NS42MDEgMjU2LjY2MSA1NzQuNjMxWiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwMzIuNzkgNjIwLjEwOUMxMDIzLjk0IDYxOC44NyAxMDE3Ljc4IDYxMC42OTggMTAxOS4wMiA2MDEuODU2QzEwMjAuMjYgNTkzLjAxNCAxMDI4LjQzIDU4Ni44NTEgMTAzNy4yNyA1ODguMDlDMTA0Ni4xMSA1ODkuMzI4IDEwNTIuMjggNTk3LjUgMTA1MS4wNCA2MDYuMzQyQzEwNDkuOCA2MTUuMTg0IDEwNDEuNjMgNjIxLjM0OCAxMDMyLjc5IDYyMC4xMDlaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDA4Ljk5OCA1NzQuMzQxQzM5Ny44MTUgNTcyLjc3NCAzOTAuMDIgNTYyLjQzOCAzOTEuNTg2IDU1MS4yNTZDMzkzLjE1MyA1NDAuMDczIDQwMy40ODggNTMyLjI3OCA0MTQuNjcxIDUzMy44NDRDNDI1Ljg1NCA1MzUuNDExIDQzMy42NDkgNTQ1Ljc0NyA0MzIuMDgyIDU1Ni45MjlDNDMwLjUxNiA1NjguMTEyIDQyMC4xOCA1NzUuOTA3IDQwOC45OTggNTc0LjM0MVoiIGZpbGw9IiNGMEYyRjUiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03NjYuMDU1IDY0NC4wN0M3NTIuMzUxIDY0Mi4xNSA3NDIuNzk3IDYyOS40ODQgNzQ0LjcxNyA2MTUuNzc5Qzc0Ni42MzcgNjAyLjA3NCA3NTkuMzA0IDU5Mi41MiA3NzMuMDA4IDU5NC40NEM3ODYuNzEzIDU5Ni4zNiA3OTYuMjY3IDYwOS4wMjcgNzk0LjM0NyA2MjIuNzMyQzc5Mi40MjcgNjM2LjQzNyA3NzkuNzYgNjQ1Ljk5IDc2Ni4wNTUgNjQ0LjA3WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4Ni43NSA1MjUuNDQ3QzE3MC44NTEgNTIzLjIxOSAxNTkuNzY3IDUwOC41MjQgMTYxLjk5NSA0OTIuNjI0QzE2NC4yMjIgNDc2LjcyNSAxNzguOTE3IDQ2NS42NDEgMTk0LjgxNyA0NjcuODY5QzIxMC43MTcgNDcwLjA5NiAyMjEuOCA0ODQuNzkxIDIxOS41NzMgNTAwLjY5MUMyMTcuMzQ1IDUxNi41OTEgMjAyLjY1IDUyNy42NzQgMTg2Ljc1IDUyNS40NDdaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTk2LjE1OCA2MTUuMTI4QzU2OC43NDggNjExLjI4OCA1NDkuNjQxIDU4NS45NTUgNTUzLjQ4MSA1NTguNTQ2QzU1Ny4zMjEgNTMxLjEzNiA1ODIuNjU0IDUxMi4wMjkgNjEwLjA2NCA1MTUuODY5QzYzNy40NzMgNTE5LjcwOSA2NTYuNTggNTQ1LjA0MiA2NTIuNzQgNTcyLjQ1MkM2NDguOSA1OTkuODYxIDYyMy41NjcgNjE4Ljk2OCA1OTYuMTU4IDYxNS4xMjhaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTEwLjk1NSA2NDUuNTgyQzg4My41NDUgNjQxLjc0MiA4NjQuNDM4IDYxNi40MDkgODY4LjI3OCA1ODguOTk5Qzg3Mi4xMTggNTYxLjU4OSA4OTcuNDUxIDU0Mi40ODIgOTI0Ljg2MSA1NDYuMzIyQzk1Mi4yNzEgNTUwLjE2MiA5NzEuMzc4IDU3NS40OTUgOTY3LjUzOCA2MDIuOTA1Qzk2My42OTggNjMwLjMxNSA5MzguMzY1IDY0OS40MjIgOTEwLjk1NSA2NDUuNTgyWiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0NjYuOTQgNTc0LjE0NEMxNDYxLjgxIDU3NS4wNjUgMTQ1Ni45MSA1NzEuNjU1IDE0NTUuOTkgNTY2LjUyOUMxNDU1LjA3IDU2MS40MDMgMTQ1OC40OCA1NTYuNTAxIDE0NjMuNiA1NTUuNTgxQzE0NjguNzMgNTU0LjY2IDE0NzMuNjMgNTU4LjA3IDE0NzQuNTUgNTYzLjE5NkMxNDc1LjQ3IDU2OC4zMjIgMTQ3Mi4wNiA1NzMuMjI0IDE0NjYuOTQgNTc0LjE0NFoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNTk3IDUzMS45MDNDMTU5My4xNSA1MzIuNTk1IDE1ODkuNDYgNTMwLjAzMSAxNTg4Ljc3IDUyNi4xNzdDMTU4OC4wOCA1MjIuMzIyIDE1OTAuNjQgNTE4LjYzNSAxNTk0LjQ5IDUxNy45NDNDMTU5OC4zNSA1MTcuMjUxIDE2MDIuMDQgNTE5LjgxNSAxNjAyLjczIDUyMy42N0MxNjAzLjQyIDUyNy41MjUgMTYwMC44NiA1MzEuMjExIDE1OTcgNTMxLjkwM1oiIGZpbGw9IiNGMEYyRjUiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjQ4Ljg2IDU2NC4wMjlDMTI0MC4wOCA1NjUuNjA3IDEyMzEuNjcgNTU5Ljc2MiAxMjMwLjEgNTUwLjk3NUMxMjI4LjUyIDU0Mi4xODcgMTIzNC4zNiA1MzMuNzg0IDEyNDMuMTUgNTMyLjIwNkMxMjUxLjk0IDUzMC42MjggMTI2MC4zNCA1MzYuNDczIDEyNjEuOTIgNTQ1LjI2MUMxMjYzLjUgNTU0LjA0OCAxMjU3LjY1IDU2Mi40NTEgMTI0OC44NiA1NjQuMDI5WiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2ODkuNzEgNTk1LjU1N0MxNjgwLjkyIDU5Ny4xMzUgMTY3Mi41MiA1OTEuMjkgMTY3MC45NCA1ODIuNTAzQzE2NjkuMzcgNTczLjcxNSAxNjc1LjIxIDU2NS4zMTIgMTY4NCA1NjMuNzM0QzE2OTIuNzggNTYyLjE1NiAxNzAxLjE5IDU2OC4wMDEgMTcwMi43NyA1NzYuNzg4QzE3MDQuMzQgNTg1LjU3NiAxNjk4LjUgNTkzLjk3OSAxNjg5LjcxIDU5NS41NTdaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI4NC41MSA4MjIuNjA2QzEyNzAuODkgODI1LjA1MiAxMjU3Ljg2IDgxNS45OTIgMTI1NS40MiA4MDIuMzcyQzEyNTIuOTcgNzg4Ljc1MSAxMjYyLjAzIDc3NS43MjYgMTI3NS42NSA3NzMuMjhDMTI4OS4yNyA3NzAuODM0IDEzMDIuMyA3NzkuODkzIDEzMDQuNzQgNzkzLjUxNEMxMzA3LjE5IDgwNy4xMzUgMTI5OC4xMyA4MjAuMTYgMTI4NC41MSA4MjIuNjA2WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkxOS4wODQgODE0LjZDODk2LjM4MyA4MTguNjc2IDg3NC42NzUgODAzLjU3OCA4NzAuNTk5IDc4MC44NzZDODY2LjUyMiA3NTguMTc1IDg4MS42MjEgNzM2LjQ2NyA5MDQuMzIyIDczMi4zOTFDOTI3LjAyNCA3MjguMzE0IDk0OC43MzIgNzQzLjQxMyA5NTIuODA4IDc2Ni4xMTRDOTU2Ljg4NCA3ODguODE2IDk0MS43ODYgODEwLjUyNCA5MTkuMDg0IDgxNC42WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExMTcuODUgOTAzLjgxOUMxMTI5LjUzIDkwOC41NSAxMTQyLjg0IDkwMi45MTIgMTE0Ny41OCA4OTEuMjI2QzExNTIuMzEgODc5LjUzOSAxMTQ2LjY3IDg2Ni4yMjkgMTEzNC45OCA4NjEuNDk4QzExMjMuMyA4NTYuNzY2IDExMDkuOTkgODYyLjQwNCAxMTA1LjI1IDg3NC4wOTFDMTEwMC41MiA4ODUuNzc3IDExMDYuMTYgODk5LjA4NyAxMTE3Ljg1IDkwMy44MTlaIiBmaWxsPSIjRjBGMkY1IiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTM5LjMyNSA4MzAuMzVDNTY0Ljk4IDg0MC43MzcgNTk0LjE5NyA4MjguMzYgNjA0LjU4NCA4MDIuNzA2QzYxNC45NzEgNzc3LjA1MSA2MDIuNTk0IDc0Ny44MzQgNTc2LjkzOSA3MzcuNDQ3QzU1MS4yODUgNzI3LjA2IDUyMi4wNjggNzM5LjQzNyA1MTEuNjgxIDc2NS4wOTJDNTAxLjI5NCA3OTAuNzQ2IDUxMy42NzEgODE5Ljk2NCA1MzkuMzI1IDgzMC4zNVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTguNDI5IDg3Mi44MUMyNzIuMzg4IDg3OC40NjIgMjg4LjI4NiA4NzEuNzI3IDI5My45MzcgODU3Ljc2OEMyOTkuNTg5IDg0My44MDkgMjkyLjg1NCA4MjcuOTEyIDI3OC44OTYgODIyLjI2QzI2NC45MzcgODE2LjYwOSAyNDkuMDM5IDgyMy4zNDMgMjQzLjM4OCA4MzcuMzAyQzIzNy43MzYgODUxLjI2MSAyNDQuNDcgODY3LjE1OCAyNTguNDI5IDg3Mi44MVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNC41NDA2IDY5OC43NTRDMzguNTE4NyA3MDIuMTE1IDQ0LjQ2ODUgNzAxLjYxNSA0Ny44Mjk5IDY5Ny42MzdDNTEuMTkxMyA2OTMuNjU5IDUwLjY5MTQgNjg3LjcwOSA0Ni43MTMzIDY4NC4zNDhDNDIuNzM1MiA2ODAuOTg2IDM2Ljc4NTMgNjgxLjQ4NiAzMy40MjM5IDY4NS40NjRDMzAuMDYyNSA2ODkuNDQyIDMwLjU2MjQgNjk1LjM5MiAzNC41NDA2IDY5OC43NTRaIiBmaWxsPSIjRjVGN0ZBIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQxLjgwNiA3MTAuNzI0QzI0OC42MjYgNzE2LjQ4NiAyNTguODI2IDcxNS42MjkgMjY0LjU4OCA3MDguODA5QzI3MC4zNSA3MDEuOTkgMjY5LjQ5MyA2OTEuNzkgMjYyLjY3NCA2ODYuMDI3QzI1NS44NTQgNjgwLjI2NSAyNDUuNjU0IDY4MS4xMjIgMjM5Ljg5MiA2ODcuOTQyQzIzNC4xMyA2OTQuNzYxIDIzNC45ODcgNzA0Ljk2MSAyNDEuODA2IDcxMC43MjRaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTE3LjcyMzggNjk5LjI3NkMtNy4xNTMzMSA3MDguMjA4IDguNjU2MzggNzA2Ljg3OSAxNy41ODgxIDY5Ni4zMDlDMjYuNTE5OCA2ODUuNzM5IDI1LjE5MTMgNjY5LjkyOSAxNC42MjA4IDY2MC45OTdDNC4wNTAyOSA2NTIuMDY1IC0xMS43NTk0IDY1My4zOTQgLTIwLjY5MTEgNjYzLjk2NEMtMjkuNjIyOCA2NzQuNTM1IC0yOC4yOTQzIDY5MC4zNDQgLTE3LjcyMzggNjk5LjI3NloiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTE0Ljc1IDg3OC44MjFDMTEwMC4xMSA4ODEuNDUxIDEwODYuMSA4NzEuNzEgMTA4My40NyA4NTcuMDYzQzEwODAuODQgODQyLjQxNyAxMDkwLjU4IDgyOC40MTIgMTEwNS4yMyA4MjUuNzgyQzExMTkuODcgODIzLjE1MiAxMTMzLjg4IDgzMi44OTQgMTEzNi41MSA4NDcuNTRDMTEzOS4xNCA4NjIuMTg2IDExMjkuNCA4NzYuMTkxIDExMTQuNzUgODc4LjgyMVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMTguOTMzIDc1Ni4wNkMzMzYuNTUgNzcwLjk0NiAzNjIuOSA3NjguNzMyIDM3Ny43ODYgNzUxLjExNEMzOTIuNjcyIDczMy40OTcgMzkwLjQ1OCA3MDcuMTQ4IDM3Mi44NDEgNjkyLjI2MUMzNTUuMjIzIDY3Ny4zNzUgMzI4Ljg3NCA2NzkuNTg5IDMxMy45ODggNjk3LjIwN0MyOTkuMTAxIDcxNC44MjQgMzAxLjMxNSA3NDEuMTc0IDMxOC45MzMgNzU2LjA2WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTczLjg4MzcgNzQ3LjQzNkM5NS4wMjQ2IDc2NS4zIDEyNi42NDQgNzYyLjY0MyAxNDQuNTA3IDc0MS41MDJDMTYyLjM3MSA3MjAuMzYxIDE1OS43MTQgNjg4Ljc0MiAxMzguNTczIDY3MC44NzhDMTE3LjQzMiA2NTMuMDE1IDg1LjgxMjggNjU1LjY3MiA2Ny45NDkzIDY3Ni44MTNDNTAuMDg1OSA2OTcuOTU0IDUyLjc0MjggNzI5LjU3MyA3My44ODM3IDc0Ny40MzZaIiBmaWxsPSIjRjBGMkY1IiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTE4MC42NyA4MjAuMTJDMTE1My40MyA4MjUuMDEyIDExMjcuMzggODA2Ljg5NCAxMTIyLjQ5IDc3OS42NTJDMTExNy42IDc1Mi40MSAxMTM1LjcyIDcyNi4zNjEgMTE2Mi45NiA3MjEuNDY5QzExOTAuMiA3MTYuNTc3IDEyMTYuMjUgNzM0LjY5NiAxMjIxLjE0IDc2MS45MzdDMTIyNi4wNCA3ODkuMTc5IDEyMDcuOTIgODE1LjIyOCAxMTgwLjY3IDgyMC4xMloiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDEwLjcxIDc1MC4wODJDMTM4My40NyA3NTQuOTc0IDEzNTcuNDIgNzM2Ljg1NSAxMzUyLjUzIDcwOS42MTRDMTM0Ny42NCA2ODIuMzcyIDEzNjUuNzUgNjU2LjMyMyAxMzkzIDY1MS40MzFDMTQyMC4yNCA2NDYuNTM5IDE0NDYuMjkgNjY0LjY1OCAxNDUxLjE4IDY5MS44OTlDMTQ1Ni4wNyA3MTkuMTQxIDE0MzcuOTUgNzQ1LjE5IDE0MTAuNzEgNzUwLjA4MloiIGZpbGw9IiNGMEYyRjUiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01OTIuMTcyIDEwMDEuNjJDNTg2Ljk4NiAxMDAyLjExIDU4Mi4zODggOTk4LjI5NiA1ODEuOTAyIDk5My4xMTFDNTgxLjQxNiA5ODcuOTI1IDU4NS4yMjUgOTgzLjMyOCA1OTAuNDExIDk4Mi44NDFDNTk1LjU5NiA5ODIuMzU1IDYwMC4xOTQgOTg2LjE2NSA2MDAuNjggOTkxLjM1QzYwMS4xNjYgOTk2LjUzNSA1OTcuMzU3IDEwMDEuMTMgNTkyLjE3MiAxMDAxLjYyWiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc1MC4yOSA5ODQuNDEyQzc0Ni4zOTEgOTg0Ljc3OCA3NDIuOTM0IDk4MS45MTMgNzQyLjU2OCA5NzguMDE0Qzc0Mi4yMDIgOTc0LjExNCA3NDUuMDY3IDk3MC42NTcgNzQ4Ljk2NiA5NzAuMjkxQzc1Mi44NjYgOTY5LjkyNSA3NTYuMzIzIDk3Mi43OSA3NTYuNjg5IDk3Ni42ODlDNzU3LjA1NSA5ODAuNTg5IDc1NC4xOSA5ODQuMDQ2IDc1MC4yOSA5ODQuNDEyWiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3NS43NjMgMTAxNS44NUMxNjguODA1IDEwMTYuNSAxNjIuNjM1IDEwMTEuMzkgMTYxLjk4MiAxMDA0LjQzQzE2MS4zMyA5OTcuNDY5IDE2Ni40NDIgOTkxLjI5OCAxNzMuNCA5OTAuNjQ2QzE4MC4zNTkgOTg5Ljk5MyAxODYuNTI5IDk5NS4xMDYgMTg3LjE4MiAxMDAyLjA2QzE4Ny44MzQgMTAwOS4wMiAxODIuNzIyIDEwMTUuMTkgMTc1Ljc2MyAxMDE1Ljg1WiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTk0MS40NTkgODgxLjEyNUM5MzIuNTcgODgxLjk1OSA5MjQuNjg4IDg3NS40MjggOTIzLjg1NCA4NjYuNTM5QzkyMy4wMjEgODU3LjY1IDkyOS41NTEgODQ5Ljc2OCA5MzguNDQgODQ4LjkzNUM5NDcuMzI5IDg0OC4xMDEgOTU1LjIxMSA4NTQuNjMxIDk1Ni4wNDUgODYzLjUyMUM5NTYuODc4IDg3Mi40MSA5NTAuMzQ4IDg4MC4yOTIgOTQxLjQ1OSA4ODEuMTI1WiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyMy45MjcgOTgwLjQzNUMzMTIuNjg1IDk4MS40ODkgMzAyLjcxNiA5NzMuMjMgMzAxLjY2MiA5NjEuOTg3QzMwMC42MDggOTUwLjc0NSAzMDguODY3IDk0MC43NzYgMzIwLjEwOSA5MzkuNzIyQzMzMS4zNTIgOTM4LjY2OCAzNDEuMzIgOTQ2LjkyNyAzNDIuMzc1IDk1OC4xNjlDMzQzLjQyOSA5NjkuNDEyIDMzNS4xNyA5NzkuMzgxIDMyMy45MjcgOTgwLjQzNVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjkuOTg3IDY4OS41NDVDMTQxLjM1MyA2OTkuMTQ5IDE1OC4zNTMgNjk3LjcyIDE2Ny45NTcgNjg2LjM1NEMxNzcuNTYxIDY3NC45ODggMTc2LjEzMiA2NTcuOTg5IDE2NC43NjYgNjQ4LjM4NUMxNTMuNCA2MzguNzgxIDEzNi40MDEgNjQwLjIwOSAxMjYuNzk3IDY1MS41NzVDMTE3LjE5MyA2NjIuOTQxIDExOC42MjEgNjc5Ljk0MSAxMjkuOTg3IDY4OS41NDVaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjg3LjQ0MiA5NjUuOTQ3QzY3My42NjQgOTY3LjIzOSA2NjEuNDQ3IDk1Ny4xMTcgNjYwLjE1NSA5NDMuMzM5QzY1OC44NjMgOTI5LjU2MSA2NjguOTg1IDkxNy4zNDQgNjgyLjc2MyA5MTYuMDUyQzY5Ni41NDIgOTE0Ljc2IDcwOC43NTkgOTI0Ljg4MiA3MTAuMDUxIDkzOC42NkM3MTEuMzQzIDk1Mi40MzggNzAxLjIyMSA5NjQuNjU1IDY4Ny40NDIgOTY1Ljk0N1oiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ni4zOTU0IDk4NC4xMDlDODAuNDEwNCA5ODUuNjA4IDY2LjIzNyA5NzMuODY1IDY0LjczOCA5NTcuODhDNjMuMjM5IDk0MS44OTUgNzQuOTgyMiA5MjcuNzIxIDkwLjk2NzEgOTI2LjIyMkMxMDYuOTUyIDkyNC43MjMgMTIxLjEyNiA5MzYuNDY3IDEyMi42MjUgOTUyLjQ1MkMxMjQuMTIzIDk2OC40MzYgMTEyLjM4IDk4Mi42MSA5Ni4zOTU0IDk4NC4xMDlaIiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTE1LjQ0OSA5NzYuOTY0QzQ4Ny44OTMgOTc5LjU0OCA0NjMuNDU5IDk1OS4zMDQgNDYwLjg3NSA5MzEuNzQ3QzQ1OC4yOTEgOTA0LjE5IDQ3OC41MzUgODc5Ljc1NyA1MDYuMDkxIDg3Ny4xNzNDNTMzLjY0OCA4NzQuNTg4IDU1OC4wODIgODk0LjgzMyA1NjAuNjY2IDkyMi4zODlDNTYzLjI1IDk0OS45NDYgNTQzLjAwNiA5NzQuMzggNTE1LjQ0OSA5NzYuOTY0WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4MS4yNDIgODcxLjMwOEM3NTkuODkxIDg3My4zMSA3NDAuOTU5IDg1Ny42MjQgNzM4Ljk1NyA4MzYuMjc0QzczNi45NTUgODE0LjkyMyA3NTIuNjQgNzk1Ljk5MiA3NzMuOTkxIDc5My45ODlDNzk1LjM0MiA3OTEuOTg3IDgxNC4yNzMgODA3LjY3MyA4MTYuMjc1IDgyOS4wMjNDODE4LjI3NyA4NTAuMzc0IDgwMi41OTIgODY5LjMwNSA3ODEuMjQyIDg3MS4zMDhaIiBmaWxsPSIjRjBGMkY1IiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTM1My4zMSA3MzYuMjg0QzEzNDguNTMgNzM4LjM2MiAxMzQyLjk4IDczNi4xNzUgMTM0MC45IDczMS4zOTlDMTMzOC44MiA3MjYuNjIzIDEzNDEuMDEgNzIxLjA2NyAxMzQ1Ljc4IDcxOC45OUMxMzUwLjU2IDcxNi45MTIgMTM1Ni4xMiA3MTkuMDk5IDEzNTguMTkgNzIzLjg3NUMxMzYwLjI3IDcyOC42NSAxMzU4LjA4IDczNC4yMDYgMTM1My4zMSA3MzYuMjg0WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0NzAuMTMgNjY1LjE5QzE0NjYuNTQgNjY2Ljc1MiAxNDYyLjM2IDY2NS4xMDcgMTQ2MC44IDY2MS41MTZDMTQ1OS4yMyA2NTcuOTI1IDE0NjAuODggNjUzLjc0NyAxNDY0LjQ3IDY1Mi4xODRDMTQ2OC4wNiA2NTAuNjIyIDE0NzIuMjQgNjUyLjI2NiAxNDczLjggNjU1Ljg1OEMxNDc1LjM2IDY1OS40NDkgMTQ3My43MiA2NjMuNjI3IDE0NzAuMTMgNjY1LjE5WiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExMzguNzggNzc2LjczQzExMzAuNTkgNzgwLjI5MSAxMTIxLjA3IDc3Ni41NDIgMTExNy41MSA3NjguMzU1QzExMTMuOTUgNzYwLjE2OCAxMTE3LjcgNzUwLjY0NCAxMTI1Ljg4IDc0Ny4wODJDMTEzNC4wNyA3NDMuNTIgMTE0My41OSA3NDcuMjcgMTE0Ny4xNiA3NTUuNDU3QzExNTAuNzIgNzYzLjY0NCAxMTQ2Ljk3IDc3My4xNjggMTEzOC43OCA3NzYuNzNaIiBmaWxsPSIjRjBGMkY1IiBzdHJva2U9IiNEN0RCRTAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwNC4yNCA2MDcuODA5QzE0OTYuMDYgNjExLjM3MSAxNDg2LjUzIDYwNy42MjEgMTQ4Mi45NyA1OTkuNDM0QzE0NzkuNDEgNTkxLjI0NyAxNDgzLjE2IDU4MS43MjMgMTQ5MS4zNCA1NzguMTYxQzE0OTkuNTMgNTc0LjU5OSAxNTA5LjA2IDU3OC4zNDkgMTUxMi42MiA1ODYuNTM2QzE1MTYuMTggNTk0LjcyMyAxNTEyLjQzIDYwNC4yNDcgMTUwNC4yNCA2MDcuODA5WiIgZmlsbD0iI0YwRjJGNSIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyNTIuNDQgNzYxLjA3MkMxMjM4Ljc5IDc2Ny4wMDggMTIyMi45MiA3NjAuNzYgMTIxNi45OCA3NDcuMTE1QzEyMTEuMDUgNzMzLjQ3IDEyMTcuMyA3MTcuNTk2IDEyMzAuOTQgNzExLjY1OUMxMjQ0LjU5IDcwNS43MjMgMTI2MC40NiA3MTEuOTcyIDEyNjYuNCA3MjUuNjE3QzEyNzIuMzMgNzM5LjI2MiAxMjY2LjA4IDc1NS4xMzYgMTI1Mi40NCA3NjEuMDcyWiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgyOS4xMjcgOTExLjg5MkM4NTQuNzgyIDkyMi4yNzkgODgzLjk5OSA5MDkuOTAyIDg5NC4zODYgODg0LjI0N0M5MDQuNzczIDg1OC41OTMgODkyLjM5NiA4MjkuMzc2IDg2Ni43NDIgODE4Ljk4OUM4NDEuMDg3IDgwOC42MDIgODExLjg3IDgyMC45NzkgODAxLjQ4MyA4NDYuNjMzQzc5MS4wOTYgODcyLjI4OCA4MDMuNDczIDkwMS41MDUgODI5LjEyNyA5MTEuODkyWiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0MDQuNjYgNjY3LjIyOEMxMzkxLjk3IDY3Mi43NDggMTM3Ny4yIDY2Ni45MzcgMTM3MS42OCA2NTQuMjQ3QzEzNjYuMTYgNjQxLjU1NyAxMzcxLjk3IDYyNi43OTUgMTM4NC42NiA2MjEuMjc0QzEzOTcuMzUgNjE1Ljc1MyAxNDEyLjExIDYyMS41NjQgMTQxNy42NCA2MzQuMjU0QzE0MjMuMTYgNjQ2Ljk0NCAxNDE3LjM0IDY2MS43MDcgMTQwNC42NiA2NjcuMjI4WiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwNTIuNDEgNzY3LjI5NUMxMDMxLjI2IDc3Ni40OTcgMTAwNi42NSA3NjYuODExIDk5Ny40NSA3NDUuNjYxQzk4OC4yNDkgNzI0LjUxMSA5OTcuOTM1IDY5OS45MDcgMTAxOS4wOCA2OTAuNzA2QzEwNDAuMjMgNjgxLjUwNCAxMDY0Ljg0IDY5MS4xOSAxMDc0LjA0IDcxMi4zNEMxMDgzLjI0IDczMy40ODkgMTA3My41NiA3NTguMDk0IDEwNTIuNDEgNzY3LjI5NVoiIHN0cm9rZT0iI0Q3REJFMCIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMzAzLjA1IDY4OC43NTJDMTI3Ny42NyA2OTkuNzk0IDEyNDguMTQgNjg4LjE3MSAxMjM3LjEgNjYyLjc5MUMxMjI2LjA2IDYzNy40MTEgMTIzNy42OCA2MDcuODg2IDEyNjMuMDYgNTk2Ljg0NEMxMjg4LjQ0IDU4NS44MDMgMTMxNy45NyA1OTcuNDI2IDEzMjkuMDEgNjIyLjgwNUMxMzQwLjA1IDY0OC4xODUgMTMyOC40MyA2NzcuNzEgMTMwMy4wNSA2ODguNzUyWiIgc3Ryb2tlPSIjRDdEQkUwIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1NDUuMzQgNjE4LjkyN0MxNTI5LjcyIDYyNS43MjEgMTUxMS41NiA2MTguNTY5IDE1MDQuNzYgNjAyLjk1NEMxNDk3Ljk3IDU4Ny4zMzggMTUwNS4xMiA1NjkuMTcxIDE1MjAuNzMgNTYyLjM3N0MxNTM2LjM1IDU1NS41ODMgMTU1NC41MiA1NjIuNzM1IDE1NjEuMzEgNTc4LjM1MUMxNTY4LjExIDU5My45NjcgMTU2MC45NSA2MTIuMTMzIDE1NDUuMzQgNjE4LjkyN1oiIHN0cm9rZT0iI0Q3REJFMCIvPgogIDwvZz4KPC9zdmc+Cg==");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/collective-page/sections/Contributors.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // Local imports





/** Main contributors container with the bubbles background */



const MainContainer = external_styled_components_default()(Container/* default */.Z).withConfig({
  displayName: "Contributors__MainContainer",
  componentId: "sc-nwualt-0"
})(["background:linear-gradient( 0deg,rgba(255,255,255,1) 0,rgba(255,255,255,0) 75px,rgba(255,255,255,0) calc(100% - 125px),rgba(255,255,255,1) 100% ),center -900px repeat-y url(", ");"], ContributorsGridBackground);

/**
 * Section that displays all the contributors to the collective (financial, admins...etc)
 */
class SectionContributors extends (external_react_default()).PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "setFilter", filter => {
      this.setState({
        filter
      });
    });

    _defineProperty(this, "getContributorsFilters", external_memoize_one_default()((coreContributors, financialContributors) => {
      if (financialContributors.length && coreContributors.length) {
        return ContributorsFilter/* FILTERS_LIST */.ah;
      } else {
        return [];
      }
    }));

    _defineProperty(this, "filterContributors", external_memoize_one_default()((coreContributors, financialContributors, filter) => {
      // Return the proper list
      if (filter === ContributorsFilter/* CONTRIBUTOR_FILTERS.CORE */.Zx.CORE) {
        return coreContributors;
      } else if (filter === ContributorsFilter/* CONTRIBUTOR_FILTERS.FINANCIAL */.Zx.FINANCIAL) {
        return financialContributors;
      } else {
        const coreContributorsIds = new Set(coreContributors.map(c => c.id));
        return [...coreContributors, ...financialContributors.filter(c => !coreContributorsIds.has(c.id))];
      }
    }));

    this.state = {
      filter: ContributorsFilter/* CONTRIBUTOR_FILTERS.ALL */.Zx.ALL
    };
  }

  getTitleFontSize(collectiveName) {
    if (collectiveName.length < 15) {
      return 48;
    } else if (collectiveName.length < 20) {
      return 40;
    } else {
      return 32;
    }
  }

  render() {
    const {
      collective,
      financialContributors,
      coreContributors,
      stats
    } = this.props;
    const {
      filter
    } = this.state;
    const filters = this.getContributorsFilters(coreContributors, financialContributors);
    const contributors = this.filterContributors(coreContributors, financialContributors, filter);
    const hasFilters = filters.length > 1;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer, {
      "data-cy": "Contributors",
      pb: 4,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerSectionContent/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(SectionTitle/* default */.Z, {
          fontWeight: "bold",
          fontSize: this.getTitleFontSize(collective.name),
          lineHeight: "1em",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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
        }), /*#__PURE__*/jsx_runtime_.jsx(Text.H3, {
          mb: 3,
          fontWeight: "normal",
          color: "black.900",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "CollectivePage.OurContributors",
            defaultMessage: [{
              "type": 0,
              "value": "Our contributors "
            }, {
              "type": 1,
              "value": "count"
            }],
            values: {
              count: /*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
                color: "black.600",
                children: stats.backers.all + coreContributors.length
              })
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          color: "black.700",
          mb: 4,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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
      }), hasFilters && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        maxWidth: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH,
        margin: "0 auto",
        children: /*#__PURE__*/jsx_runtime_.jsx(ContributorsFilter/* default */.ZP, {
          selected: filter,
          onChange: this.setFilter,
          filters: filters,
          selectedButtonStyle: "primary",
          px: _constants/* Dimensions.PADDING_X */.Db.PADDING_X
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ContributorsGrid/* default */.Z, {
        contributors: contributors,
        collectiveId: collective.id,
        currency: collective.currency,
        maxWidthWhenNotFull: _constants/* Dimensions.MAX_SECTION_WIDTH */.Db.MAX_SECTION_WIDTH
      })]
    });
  }

}

_defineProperty(SectionContributors, "MIN_CONTRIBUTORS_TO_SHOW_FILTERS", 2);

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

/***/ }),

/***/ 86991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nt": () => (/* binding */ getConversationsSectionQueryVariables),
/* harmony export */   "wY": () => (/* binding */ conversationsSectionQuery)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _conversations_ConversationsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69794);
/* harmony import */ var _conversations_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37436);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92129);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36219);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);



















const conversationsSectionQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query ConversationsSection($collectiveSlug: String!) {
    account(slug: $collectiveSlug, throwIfMissing: false) {
      id
      conversations(limit: 3) {
        ...ConversationListFragment
      }
    }
  }
  ${_conversations_graphql__WEBPACK_IMPORTED_MODULE_9__/* .conversationListFragment */ .mM}
`;
/**
 * Conversations section.
 */

class SectionConversations extends (react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) {
  render() {
    const {
      collective,
      data
    } = this.props;

    const conversations = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, 'account.conversations', {});

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      pb: 4,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        fontSize: ['20px', '24px', '32px'],
        color: "black.700",
        mb: 24,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "conversations",
          defaultMessage: [{
            "type": 0,
            "value": "Conversations"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
        mb: 4,
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledP, {
          color: "black.700",
          my: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "conversations.subtitle",
            defaultMessage: [{
              "type": 0,
              "value": "Let’s get the discussion going! This is a space for the community to converse, ask questions, say thank you, and get things done together."
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          href: `/${collective.slug}/conversations/new`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            buttonStyle: "primary",
            my: [2, 0],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_14__/* .Span */ .Dr, {
              fontSize: "16px",
              fontWeight: "bold",
              mr: 2,
              children: "+"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "conversations.create",
              defaultMessage: [{
                "type": 0,
                "value": "Create a Conversation"
              }]
            })]
          })
        })]
      }), lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(conversations.nodes) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          my: [3, 5],
          type: "info",
          withIcon: true,
          maxWidth: 700,
          fontStyle: "italic",
          fontSize: "14px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "SectionConversations.PostFirst",
            defaultMessage: [{
              "type": 0,
              "value": "Use this section to get the community involved in open discussions."
            }]
          })
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
        mt: [3, 5],
        mb: [3, 4],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_conversations_ConversationsList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          collectiveSlug: collective.slug,
          conversations: conversations.nodes
        }), conversations.totalCount > 3 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          href: `/${collective.slug}/conversations`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            width: "100%",
            mt: 4,
            buttonSize: "small",
            fontSize: "14px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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

}

const addConversationsSectionData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__.graphql)(conversationsSectionQuery, {
  options: props => ({
    variables: getConversationsSectionQueryVariables(props.collective.slug),
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  })
});
const getConversationsSectionQueryVariables = slug => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addConversationsSectionData(SectionConversations));

var _StyledP = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Text__WEBPACK_IMPORTED_MODULE_14__.P).withConfig({
  displayName: "Conversations___StyledP",
  componentId: "sc-1frt7zd-0"
})({
  flex: '1 0 50%',
  maxWidth: 700
});

/***/ }),

/***/ 58424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24839);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36219);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92129);
/* harmony import */ var _public_static_images_collective_navigation_EmptyCollectivePageIllustration_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85173);
/* harmony import */ var _public_static_images_collective_navigation_EmptyCollectivePageIllustration_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_collective_navigation_EmptyCollectivePageIllustration_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);









const OutlineContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
  displayName: "Empty__OutlineContainer",
  componentId: "sc-2gb4in-0"
})(["background:#ffffff;border:1px solid #dcdee0;box-shadow:0px 1px 4px 1px rgba(49,50,51,0.1);border-radius:12px;"]);
const Illustration = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "Empty__Illustration",
  componentId: "sc-2gb4in-1"
})(["width:248px;height:248px;"]);





const SectionEmpty = props => {
  const {
    collective
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    py: 5,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(OutlineContainer, {
        display: "flex",
        flexDirection: ['column', 'row'],
        maxWidth: _constants__WEBPACK_IMPORTED_MODULE_7__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
        py: 4,
        px: [3, 4, 6],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Illustration, {
            src: (_public_static_images_collective_navigation_EmptyCollectivePageIllustration_png__WEBPACK_IMPORTED_MODULE_10___default()),
            alt: "Empty jars illustration"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
          flexDirection: "column",
          ml: [0, 4, 5],
          mt: [2, 0],
          py: [0, 3],
          justifyContent: "space-around",
          alignItems: ['center', 'flex-start'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
            fontSize: "20px",
            color: "black.600",
            lineHeight: "28px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            href: "/search",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              mt: [4, 3],
              buttonStyle: "primary",
              buttonSize: "medium",
              fontSize: "14px",
              lineHeight: "16px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionEmpty);

/***/ }),

/***/ 8200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47162);
/* harmony import */ var _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19146);
/* harmony import */ var _contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98796);
/* harmony import */ var _contribute_cards_ContributeEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77771);
/* harmony import */ var _contribute_cards_CreateNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48451);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _HorizontalScroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97049);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36219);
/* harmony import */ var _ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38255);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















class SectionEvents extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "sortEvents", memoize_one__WEBPACK_IMPORTED_MODULE_1___default()(_lib_events__WEBPACK_IMPORTED_MODULE_3__/* .sortEvents */ .qP));

    _defineProperty(this, "getContributeCardsScrollDistance", width => {
      const oneCardScrollDistance = _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_15__/* .CONTRIBUTE_CARD_WIDTH */ .TJ + _contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_4__/* .CONTRIBUTE_CARD_PADDING_X[0] */ .f[0] * 2;

      if (width <= oneCardScrollDistance * 2) {
        return oneCardScrollDistance;
      } else if (width <= oneCardScrollDistance * 4) {
        return oneCardScrollDistance * 2;
      } else {
        return oneCardScrollDistance * 3;
      }
    });
  }

  render() {
    const {
      collective,
      events,
      isAdmin
    } = this.props;
    const hasNoContributorForEvents = !events.find(event => event.contributors.length > 0);

    if (!events?.length && !isAdmin) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
      pb: 4,
      mt: 2,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.H3, {
          fontSize: ['20px', '24px', '32px'],
          fontWeight: "normal",
          color: "black.700",
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "Events",
            defaultMessage: [{
              "type": 0,
              "value": "Events"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          color: "black.700",
          mb: 4,
          children: isAdmin ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "CollectivePage.SectionEvents.AdminDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Set up events for your community and sell tickets that go straight to your budget."
            }]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_HorizontalScroller__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        container: _ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
        getScrollDistance: this.getContributeCardsScrollDistance,
        children: [this.sortEvents(events).map(event => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          px: _contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_4__/* .CONTRIBUTE_CARD_PADDING_X */ .f,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_contribute_cards_ContributeEvent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            collective: collective,
            event: event,
            hideContributors: hasNoContributorForEvents
          })
        }, event.id)), isAdmin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          px: _contribute_cards_ContributeCardContainer__WEBPACK_IMPORTED_MODULE_4__/* .CONTRIBUTE_CARD_PADDING_X */ .f,
          minHeight: 150,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_contribute_cards_CreateNew__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            route: `/${collective.slug}/events/create`,
            "data-cy": "create-event",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "event.create.btn",
              defaultMessage: [{
                "type": 0,
                "value": "Create Event"
              }]
            })
          })
        })]
      }), Boolean(events?.length > 6) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          href: `/${collective.slug}/events`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            mt: 4,
            width: 1,
            buttonSize: "small",
            fontSize: "14px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(SectionEvents));

/***/ }),

/***/ 12710:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export budgetSectionQuery */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32651);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29242);
/* harmony import */ var _PeriodFilterPresetsSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60732);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51927);
/* harmony import */ var _BudgetStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91181);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36219);
/* harmony import */ var _Budget_ContributionsBudget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63370);
/* harmony import */ var _Budget_ExpenseBudget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BudgetStats__WEBPACK_IMPORTED_MODULE_7__]);
_BudgetStats__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const budgetSectionQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query BudgetSection($slug: String!) {
    account(slug: $slug) {
      id
      stats {
        id
        balance {
          valueInCents
          currency
        }
        consolidatedBalance {
          valueInCents
          currency
        }
        yearlyBudget {
          valueInCents
          currency
        }
        activeRecurringContributions
        totalAmountReceived(periodInMonths: 12) {
          valueInCents
          currency
        }
        totalAmountRaised: totalAmountReceived {
          valueInCents
          currency
        }
        totalNetAmountRaised: totalNetAmountReceived {
          valueInCents
          currency
        }
      }
    }
  }
`;
/**
 * The budget section. Shows the expenses, the latest transactions and some statistics
 * abut the global budget of the collective.
 */

const SectionFinancialOverview = ({
  collective,
  LoggedInUser
}) => {
  const budgetQueryResult = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(budgetSectionQuery, {
    variables: {
      slug: collective.slug
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_2__/* .API_V2_CONTEXT */ .T
  });
  const {
    data,
    refetch
  } = budgetQueryResult;
  const isLoading = budgetQueryResult.loading;
  const defaultTimeInterval = _PeriodFilterPresetsSelect__WEBPACK_IMPORTED_MODULE_5__/* .PERIOD_FILTER_PRESETS.allTime.getInterval */ .p.allTime.getInterval(); // Refetch data when user logs in to refresh permissions

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (LoggedInUser) {
      refetch();
    }
  }, [LoggedInUser]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    pb: 4,
    children: [isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      height: 300
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_BudgetStats__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      collective: collective,
      stats: data?.account?.stats,
      horizontal: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      flexDirection: ['column', null, 'row'],
      alignItems: "flex-start",
      gap: '48px',
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Budget_ExpenseBudget__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        collective: collective,
        defaultTimeInterval: defaultTimeInterval,
        mt: 4,
        flexDirection: "column",
        flexGrow: 1,
        maxWidth: ['100%', null, '50%'],
        width: ['100%', null, 'auto']
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Budget_ContributionsBudget__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo((0,_UserProvider__WEBPACK_IMPORTED_MODULE_6__/* .withUser */ .ns)(SectionFinancialOverview)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29242);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);



 // Dynamicly load Goals cover to download it if enabled



const GoalsCoverLoadingPlaceholder = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
  height: 400
});

const GoalsCover = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 5593).then(__webpack_require__.bind(__webpack_require__, 75593)), {
  loading: GoalsCoverLoadingPlaceholder,
  loadableGenerated: {
    modules: ["../components/collective-page/sections/Goals.js -> " + '../../GoalsCover']
  }
});
/**
 * Display the general goals for the collective
 */

const SectionGoals = ({
  collective
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    background: "rgb(245, 247, 250)",
    pt: 5,
    pb: 40,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      maxWidth: "80%",
      m: "0 auto",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(GoalsCover, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SectionGoals));

/***/ }),

/***/ 88556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5700);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62131);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87819);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36219);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const isEmptyOnlineLocation = event => {
  return event.location?.name === 'Online' && !event.location.address && !event.privateInstructions;
};

const Location = ({
  collective: event,
  refetch
}) => {
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const prevLoggedInUser = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(LoggedInUser);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (LoggedInUser && !prevLoggedInUser.current) {
      // To make sure user gets access to privateInstructions
      refetch();
      prevLoggedInUser.current = LoggedInUser;
    }
  }, [LoggedInUser]);

  if ((0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_2__/* .isEmptyCollectiveLocation */ .yE)(event) || isEmptyOnlineLocation(event)) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
    pb: 4,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      pb: 4,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "SectionLocation.Title",
          defaultMessage: [{
            "type": 0,
            "value": "Location"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Location__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        location: event.location,
        privateInstructions: event.privateInstructions,
        showTitle: false
      }), event.privateInstructions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        maxWidth: 700,
        mx: "auto",
        mt: 4,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontWeight: "bold",
          fontSize: "18px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "event.privateInstructions.label",
            defaultMessage: [{
              "type": 0,
              "value": "Private instructions"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Location);

/***/ }),

/***/ 61652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71362);
/* harmony import */ var _styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58933);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _ContributorCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45222);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36219);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_4__]);
_ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const COLLECTIVE_CARD_WIDTH = 144;
/**
 * Our Team section for the About section category
 */

const SectionOurTeam = ({
  collective,
  coreContributors,
  LoggedInUser
}) => {
  const loggedUserCollectiveId = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(LoggedInUser, 'CollectiveId');

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    py: [3, 4],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      width: "100%",
      maxWidth: 700,
      margin: "0 auto",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H2, {
        textAlign: "center",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "500",
        color: "black.700",
        mb: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "OurTeam",
          defaultMessage: [{
            "type": 0,
            "value": "Our team"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        py: 2,
        children: coreContributors.map(contributor => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ContributorCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          m: 2,
          width: COLLECTIVE_CARD_WIDTH,
          height: "auto",
          contributor: contributor,
          currency: collective.currency,
          collectiveId: collective.id,
          isLoggedUser: loggedUserCollectiveId === contributor.collectiveId,
          hideTotalAmountDonated: true
        }, contributor.id))
      }), collective.canContact && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          collective: collective,
          LoggedInUser: LoggedInUser,
          children: btnProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, btnProps), {}, {
            buttonStyle: "secondary",
            mt: [3, 4],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              mr: "8px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_feather_Mail__WEBPACK_IMPORTED_MODULE_2__.Mail, {
                size: 16
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "FAYdqn",
              defaultMessage: [{
                "type": 0,
                "value": "Contact Collective"
              }]
            })]
          }))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(SectionOurTeam));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42038);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19146);
/* harmony import */ var _contribute_cards_ContributeProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55350);
/* harmony import */ var _contribute_cards_CreateNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48451);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _HorizontalScroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97049);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36219);
/* harmony import */ var _ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38255);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const CONTRIBUTE_CARD_PADDING_X = [15, 18];
const ContributeCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).attrs({
  px: CONTRIBUTE_CARD_PADDING_X
}).withConfig({
  displayName: "Projects__ContributeCardContainer",
  componentId: "sc-1ytknh-0"
})((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  scrollSnapAlign: ['center', null, 'start']
}));

class SectionProjects extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "filterProjects", memoize_one__WEBPACK_IMPORTED_MODULE_2___default()((projects, isAdmin) => {
      if (isAdmin) {
        return projects;
      } else {
        return projects.filter(p => !p.isArchived);
      }
    }));
  }

  getContributeCardsScrollDistance(width) {
    const oneCardScrollDistance = _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_16__/* .CONTRIBUTE_CARD_WIDTH */ .TJ + CONTRIBUTE_CARD_PADDING_X[0] * 2;

    if (width <= oneCardScrollDistance * 2) {
      return oneCardScrollDistance;
    } else if (width <= oneCardScrollDistance * 4) {
      return oneCardScrollDistance * 2;
    } else {
      return oneCardScrollDistance * 3;
    }
  }

  render() {
    const {
      collective,
      isAdmin
    } = this.props;
    const projects = this.filterProjects(this.props.projects, isAdmin);

    if ((projects.length === 0 || !collective.isActive) && !isAdmin) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
      pt: [4, 5],
      "data-cy": "Projects",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Projects",
            defaultMessage: [{
              "type": 0,
              "value": "Projects"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          color: "black.700",
          mb: 4,
          children: isAdmin ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "CollectivePage.SectionProjects.AdminDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Manage finances for a project or initiative separate from your collective budget."
            }]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        mb: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_HorizontalScroller__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          container: _ContributeCardsContainer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
          getScrollDistance: this.getContributeCardsScrollDistance,
          children: [projects.map(project => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            px: CONTRIBUTE_CARD_PADDING_X,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_contribute_cards_ContributeProject__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              collective: collective,
              project: project,
              disableCTA: !project.isActive,
              hideContributors: !projects.some(project => project.contributors.length)
            })
          }, project.id)), isAdmin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(ContributeCardContainer, {
            minHeight: 150,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_contribute_cards_CreateNew__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              route: `/${collective.slug}/projects/create`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "SectionProjects.CreateProject",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create Project"
                }]
              })
            })
          })]
        }), Boolean(projects?.length) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            href: `/${collective.slug}/projects`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              mt: 4,
              width: 1,
              buttonSize: "small",
              fontSize: "14px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionProjects);

/***/ }),

/***/ 31794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getRecurringContributionsSectionQueryVariables),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32651);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37278);
/* harmony import */ var _recurring_contributions_graphql_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19471);
/* harmony import */ var _recurring_contributions_RecurringContributionsContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91849);
/* harmony import */ var _StyledFilters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59049);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24839);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36219);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_recurring_contributions_RecurringContributionsContainer__WEBPACK_IMPORTED_MODULE_9__]);
_recurring_contributions_RecurringContributionsContainer__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const FILTERS = {
  ACTIVE: 'ACTIVE',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY',
  CANCELLED: 'CANCELLED'
};
const I18nFilters = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  [FILTERS.ACTIVE]: {
    id: "Subscriptions.Active",
    defaultMessage: [{
      "type": 0,
      "value": "Active"
    }]
  },
  [FILTERS.MONTHLY]: {
    id: "Frequency.Monthly",
    defaultMessage: [{
      "type": 0,
      "value": "Monthly"
    }]
  },
  [FILTERS.YEARLY]: {
    id: "Frequency.Yearly",
    defaultMessage: [{
      "type": 0,
      "value": "Yearly"
    }]
  },
  [FILTERS.CANCELLED]: {
    id: "Subscriptions.Cancelled",
    defaultMessage: [{
      "type": 0,
      "value": "Cancelled"
    }]
  }
});

class SectionRecurringContributions extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static getInitialProps({
    query: {
      slug
    }
  }) {
    return {
      slug
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      filter: 'ACTIVE'
    };
  }

  render() {
    const {
      data,
      intl
    } = this.props;
    const filters = ['ACTIVE', 'MONTHLY', 'YEARLY', 'CANCELLED'];

    if (data.loading) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        height: 600,
        borderRadius: 0
      });
    } else if (!data.account) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        display: "flex",
        border: "1px dashed #d1d1d1",
        justifyContent: "center",
        py: [6, 7],
        background: "#f8f8f8",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          type: "error",
          withIcon: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "NCP.SectionFetchError",
            defaultMessage: [{
              "type": 0,
              "value": "We encountered an error while retrieving the data for this section."
            }]
          })
        })
      });
    }

    const collective = data && data.account;
    const recurringContributions = collective && collective.orders;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      pb: 4,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          textAlign: "left",
          mb: 4,
          fontSize: ['20px', '24px', '32px'],
          color: "black.700",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "Contributions.Recurring",
            defaultMessage: [{
              "type": 0,
              "value": "Recurring Contributions"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        mx: "auto",
        maxWidth: _constants__WEBPACK_IMPORTED_MODULE_11__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledFilters__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          filters: filters,
          getLabel: key => intl.formatMessage(I18nFilters[key]),
          selected: this.state.filter,
          justifyContent: "left",
          minButtonWidth: 175,
          px: _constants__WEBPACK_IMPORTED_MODULE_11__/* .Dimensions.PADDING_X */ .Db.PADDING_X,
          onChange: filter => this.setState({
            filter: filter
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        maxWidth: _constants__WEBPACK_IMPORTED_MODULE_11__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
        px: _constants__WEBPACK_IMPORTED_MODULE_11__/* .Dimensions.PADDING_X */ .Db.PADDING_X,
        mt: 4,
        mx: "auto",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_recurring_contributions_RecurringContributionsContainer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
          recurringContributions: recurringContributions,
          account: collective,
          filter: this.state.filter,
          mt: 3
        })
      })]
    });
  }

}

const getData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__.graphql)(_recurring_contributions_graphql_queries__WEBPACK_IMPORTED_MODULE_8__/* .manageContributionsQuery */ .B, {
  options: props => ({
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__/* .API_V2_CONTEXT */ .T,
    variables: getRecurringContributionsSectionQueryVariables(props.slug)
  })
});
const getRecurringContributionsSectionQueryVariables = slug => {
  return {
    slug
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(getData(SectionRecurringContributions)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SponsorsAndParticipants)
});

// EXTERNAL MODULE: external "lodash/mapValues"
var mapValues_ = __webpack_require__(9941);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues_);
// EXTERNAL MODULE: external "lodash/groupBy"
var groupBy_ = __webpack_require__(98492);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy_);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/export_file.js
var export_file = __webpack_require__(15985);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/Response.js








class Response extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.messages = (0,external_react_intl_.defineMessages)({
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
  }

  render() {
    const {
      intl,
      response
    } = this.props;
    const {
      user,
      description,
      status,
      count
    } = response;

    if (!user) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    }

    const name = (user.name && user.name.match(/^null/) ? null : user.name) || user.email && user.email.substr(0, user.email.indexOf('@'));

    if (!name) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    }

    const title = intl.formatMessage(this.messages[status], {
      name
    });
    return /*#__PURE__*/jsx_runtime_.jsx(LinkCollective/* default */.Z, {
      collective: user,
      title: title,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        display: "flex",
        alignItems: "center",
        width: "100%",
        margin: "10px",
        maxWidth: "300px",
        float: "left",
        position: "relative",
        height: "90px",
        overflow: "hidden",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Avatar/* default */.ZP, {
          collective: user,
          radius: 40
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
          padding: "0.25rem 1rem",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            fontSize: "1.5rem",
            children: user.isIncognito ? /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "profile.incognito",
              defaultMessage: [{
                "type": 0,
                "value": "Incognito"
              }]
            }) : name
          }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            fontSize: "1.2rem",
            color: "black.600",
            children: description || user.description
          }), count > 1 && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            pt: 1,
            fontSize: "1.2rem",
            color: "black.600",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "1qa6YU",
              defaultMessage: [{
                "type": 1,
                "value": "count"
              }, {
                "type": 0,
                "value": " tickets"
              }],
              values: {
                count
              }
            })
          })]
        })]
      })
    });
  }

}

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
/* harmony default export */ const components_Response = ((0,external_react_intl_.injectIntl)(Response));
;// CONCATENATED MODULE: ./components/Responses.js






class Responses extends (external_react_default()).Component {
  render() {
    const {
      responses
    } = this.props;

    if (!responses || responses.length === 0) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    }

    return /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      width: "100%",
      display: "inline-block",
      children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        margin: "3rem auto",
        maxWidth: "960px",
        children: responses.map(response => /*#__PURE__*/jsx_runtime_.jsx(components_Response, {
          response: response
        }, `${get_default()(response, 'user.id', 0)}-${response.createdAt}`))
      })
    });
  }

}

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
/* harmony default export */ const components_Responses = (Responses);
// EXTERNAL MODULE: ./lib/image-utils.js
var image_utils = __webpack_require__(89314);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./components/EventSponsorCard.js









const EventSponsorCardContainer = external_styled_components_default().div.withConfig({
  displayName: "EventSponsorCard__EventSponsorCardContainer",
  componentId: "sc-1mm7pbq-0"
})(["display:inline-block;cursor:pointer;width:12rem;border-radius:5px;box-shadow:0 1px 3px rgba(46,77,97,0.2);text-align:center;padding-top:2rem;margin:1rem;background:white;&:hover{box-shadow:0 1px 5px rgba(46,77,97,0.4);}"]);
const CollectiveImage = external_styled_components_default().img.withConfig({
  displayName: "EventSponsorCard__CollectiveImage",
  componentId: "sc-1mm7pbq-1"
})(["max-width:10rem;max-height:5rem;margin-bottom:0.5rem;"]);

const EventSponsorCard = ({
  sponsor
}) => /*#__PURE__*/jsx_runtime_.jsx("a", {
  href: `/${sponsor.slug}`,
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(EventSponsorCardContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(CollectiveImage, {
      alt: "",
      className: "logo",
      src: (0,image_utils/* getCollectiveImage */.$T)(sponsor, {
        name: 'logo'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
      color: "#7fadf2",
      fontSize: "1.2rem",
      m: 2,
      children: sponsor.name
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      padding: "1rem 0.5rem",
      margin: "0",
      minHeight: "27px",
      borderTop: "1px solid #dde1e4",
      overflow: "hidden",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Text.P, {
        fontSize: "1rem",
        fontWeight: "700",
        textTransform: "uppercase",
        color: "#75cc1f",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        letterSpacing: "1.47px",
        marginBottom: "0.3rem",
        children: get_default()(sponsor, 'tier.name')
      }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
        fontSize: "1rem",
        letterSpacing: "0.05rem",
        opacity: "0.5",
        m: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "membership.since",
          defaultMessage: [{
            "type": 0,
            "value": "since "
          }, {
            "type": 1,
            "value": "date"
          }],
          values: {
            date: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedDate, {
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
/* harmony default export */ const components_EventSponsorCard = (EventSponsorCard);
;// CONCATENATED MODULE: ./components/Sponsors.js





class Sponsors extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      sponsors
    } = this.props;

    if (!sponsors || sponsors.length === 0) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    }

    return /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      maxWidth: "640px",
      margin: "3rem auto 3rem",
      textAlign: "center",
      overflow: "hidden",
      children: sponsors.map(sponsor => /*#__PURE__*/jsx_runtime_.jsx(components_EventSponsorCard, {
        type: "sponsor",
        sponsor: sponsor
      }, sponsor.id))
    });
  }

}

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
/* harmony default export */ const components_Sponsors = (Sponsors);
// EXTERNAL MODULE: ./components/StyledLinkButton.js
var StyledLinkButton = __webpack_require__(67001);
// EXTERNAL MODULE: ./components/collective-page/ContainerSectionContent.js
var ContainerSectionContent = __webpack_require__(36219);
// EXTERNAL MODULE: ./components/collective-page/SectionTitle.js
var SectionTitle = __webpack_require__(27132);
;// CONCATENATED MODULE: ./components/collective-page/sections/SponsorsAndParticipants.js















const StyledAdminActions = external_styled_components_default().div.withConfig({
  displayName: "SponsorsAndParticipants__StyledAdminActions",
  componentId: "sc-1x8unlp-0"
})(["text-align:center;text-transform:uppercase;font-size:1.3rem;font-weight:600;letter-spacing:0.05rem;ul{overflow:hidden;text-align:center;margin:0 auto;padding:0;display:flex;justify-content:center;flex-direction:row;list-style:none;li{margin:0 2rem;}}"]);

const Participants = ({
  collective: event,
  LoggedInUser,
  refetch
}) => {
  const [isRefetched, setIsRefetched] = external_react_default().useState(false); // const ticketOrders = event.orders
  //   .filter(order => (order.tier && order.tier.type === TierTypes.TICKET))
  //   .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  // Logic from old Event component, (filter away tiers with 'sponsor in the name')
  // to handle orders where there is no tier to check for TICKET:

  const orders = [...event.orders].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const guestOrders = [];
  const sponsorOrders = [];
  orders.forEach(order => {
    if (get_default()(order, 'tier.name', '').match(/sponsor/i)) {
      sponsorOrders.push(order);
    } else {
      guestOrders.push(order);
    }
  });
  const responses = Object.values(mapValues_default()(groupBy_default()(guestOrders, order => order.fromCollective && order.fromCollective.id), orders => ({
    user: orders[0].fromCollective,
    createdAt: orders[0].createdAt,
    status: 'YES',
    count: orders.length
  })));
  const sponsors = sponsorOrders.map(order => {
    const sponsorCollective = Object.assign({}, order.fromCollective);
    sponsorCollective.tier = order.tier;
    sponsorCollective.createdAt = new Date(order.createdAt);
    return sponsorCollective;
  });
  const canEditEvent = LoggedInUser && LoggedInUser.canEditEvent(event);
  external_react_default().useEffect(() => {
    const refreshData = async () => {
      if (canEditEvent) {
        await refetch();
        setIsRefetched(true);
      }
    };

    refreshData();
  }, [LoggedInUser]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
    pb: 4,
    children: [sponsors.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerSectionContent/* default */.Z, {
      pt: [4, 5],
      children: [/*#__PURE__*/jsx_runtime_.jsx(SectionTitle/* default */.Z, {
        textAlign: "center",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "event.sponsors.title",
          defaultMessage: [{
            "type": 0,
            "value": "Sponsors"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Sponsors, {
        sponsors: sponsors
      })]
    }), responses.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerSectionContent/* default */.Z, {
      pt: [4, 5],
      children: [/*#__PURE__*/jsx_runtime_.jsx(SectionTitle/* default */.Z, {
        textAlign: "center",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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
      }), canEditEvent && isRefetched && /*#__PURE__*/jsx_runtime_.jsx(StyledAdminActions, {
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledLinkButton/* default */.Z, {
              onClick: () => (0,export_file/* exportRSVPs */.en)(event),
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Responses, {
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
/* harmony default export */ const SponsorsAndParticipants = (Participants);

/***/ }),

/***/ 76403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82525);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36219);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27132);
/* harmony import */ var _TopContributors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1948);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);







/**
 * Top financial contributors widget.
 */




const SectionTopFinancialContributors = ({
  collective,
  financialContributors
}) => {
  const isEvent = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.EVENT */ .eV.EVENT;
  const [topOrganizations, topIndividuals] = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_2__/* .getTopContributors */ .Nq)(financialContributors);

  if (isEvent || !topOrganizations?.length && !topIndividuals?.length) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    pb: 4,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "SectionContribute.TopContributors",
        defaultMessage: [{
          "type": 0,
          "value": "Top financial contributors"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_TopContributors__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SectionTopFinancialContributors));

/***/ }),

/***/ 32971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kk": () => (/* binding */ getTransactionsSectionQueryVariables),
/* harmony export */   "QG": () => (/* binding */ transactionsSectionQuery),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32651);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92129);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledFilters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59049);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67001);
/* harmony import */ var _transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65536);
/* harmony import */ var _transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83722);
/* harmony import */ var _transactions_TransactionsList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98929);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24839);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36219);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_transactions_TransactionsList__WEBPACK_IMPORTED_MODULE_13__]);
_transactions_TransactionsList__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















const NB_DISPLAYED = 10;
const FILTERS = {
  ALL: 'ALL',
  EXPENSES: 'EXPENSES',
  CONTRIBUTIONS: 'CONTRIBUTIONS'
};
const FILTERS_LIST = Object.values(FILTERS);
const I18nFilters = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  [FILTERS.ALL]: {
    id: "SectionTransactions.All",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  },
  [FILTERS.EXPENSES]: {
    id: "Expenses",
    defaultMessage: [{
      "type": 0,
      "value": "Expenses"
    }]
  },
  [FILTERS.CONTRIBUTIONS]: {
    id: "Contributions",
    defaultMessage: [{
      "type": 0,
      "value": "Contributions"
    }]
  }
});
const transactionsSectionQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query TransactionsSection(
    $slug: String!
    $limit: Int!
    $hasOrder: Boolean
    $hasExpense: Boolean
    $kind: [TransactionKind]
  ) {
    transactions(
      account: { slug: $slug }
      limit: $limit
      hasOrder: $hasOrder
      hasExpense: $hasExpense
      kind: $kind
      includeIncognitoTransactions: true
      includeGiftCardTransactions: true
      includeChildrenTransactions: true
    ) {
      ...TransactionsQueryCollectionFragment
    }
  }
  ${_transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_12__/* .transactionsQueryCollectionFragment */ .N}
`;
const getTransactionsSectionQueryVariables = slug => {
  return {
    slug,
    limit: NB_DISPLAYED,
    kind: (0,_transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_11__/* .getDefaultKinds */ .ce)()
  };
};

const SectionTransactions = props => {
  const transactionsQueryResult = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(transactionsSectionQuery, {
    variables: getTransactionsSectionQueryVariables(props.collective.slug),
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__/* .API_V2_CONTEXT */ .T,
    // We keep notifyOnNetworkStatusChange to remove the flash of collectiveHasNoTransactions bug
    // See https://github.com/apollographql/apollo-client/blob/9c80adf65ccbbb88ea5b9313c002f85976c225e3/src/core/ObservableQuery.ts#L274-L304
    notifyOnNetworkStatusChange: true
  });
  const {
    data,
    refetch,
    loading
  } = transactionsQueryResult;
  const [filter, setFilter] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(FILTERS.ALL);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    refetch();
  }, [props.isAdmin, props.isRoot, refetch]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const hasExpense = filter === FILTERS.EXPENSES || undefined;
    const hasOrder = filter === FILTERS.CONTRIBUTIONS || undefined;
    refetch({
      slug: props.collective.slug,
      limit: NB_DISPLAYED,
      hasExpense,
      hasOrder
    });
  }, [filter, props.collective.slug, refetch]);
  const {
    intl,
    collective
  } = props;
  const collectiveHasNoTransactions = !loading && data?.transactions?.totalCount === 0 && filter === FILTERS.ALL;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    pb: 4,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        "data-cy": "section-transactions-title",
        mb: 4,
        textAlign: "left",
        fontSize: ['20px', '24px', '32px'],
        color: "black.700",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "menu.transactions",
          defaultMessage: [{
            "type": 0,
            "value": "Transactions"
          }]
        })
      }), collectiveHasNoTransactions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        type: "info",
        withIcon: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "SectionTransactions.Empty",
          defaultMessage: [{
            "type": 0,
            "value": "No transactions yet."
          }]
        })
      })]
    }), !collectiveHasNoTransactions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mb: 3,
      maxWidth: _constants__WEBPACK_IMPORTED_MODULE_14__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
      mx: "auto",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledFilters__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        filters: FILTERS_LIST,
        selected: filter,
        onChange: setFilter,
        getLabel: filter => intl.formatMessage(I18nFilters[filter]),
        minButtonWidth: 180,
        px: _constants__WEBPACK_IMPORTED_MODULE_14__/* .Dimensions.PADDING_X */ .Db.PADDING_X
      })
    }), !collectiveHasNoTransactions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      pt: 3,
      children: [loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        height: 600,
        borderRadius: 8
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_transactions_TransactionsList__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        collective: collective,
        transactions: data?.transactions?.nodes,
        displayActions: true,
        onMutationSuccess: () => refetch()
      }), data?.transactions.totalCount === 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        type: "info",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
            ResetLink(text) {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                onClick: () => setFilter(FILTERS.ALL),
                children: text
              });
            }

          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: `/${collective.slug}/transactions`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          mt: 3,
          width: "100%",
          buttonSize: "small",
          fontSize: "Paragraph",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(SectionTransactions)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66419:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jp": () => (/* binding */ updatesSectionQuery),
/* harmony export */   "Rp": () => (/* binding */ getUpdatesSectionQueryVariables),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89837);
/* harmony import */ var _styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97079);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74770);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97619);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19156);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51082);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(36219);
/* harmony import */ var _graphql_fragments__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5824);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(27132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_20__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_20__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


























/** Query to re-fetch updates */



const updatesSectionQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .gqlV1 */ .N
/* GraphQL */
`
  query UpdatesSection($slug: String!, $onlyPublishedUpdates: Boolean) {
    Collective(slug: $slug) {
      id
      updates(limit: 3, onlyPublishedUpdates: $onlyPublishedUpdates) {
        id
        ...UpdatesFields
      }
    }
  }

  ${_graphql_fragments__WEBPACK_IMPORTED_MODULE_23__/* .updatesFieldsFragment */ .Ju}
`;
const PrivateUpdateMesgBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_MessageBox__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).withConfig({
  displayName: "Updates__PrivateUpdateMesgBox",
  componentId: "sc-1tc073o-0"
})(["height:40px;background:#f0f8ff;border:1px solid #b8deff;box-sizing:border-box;border-radius:6px;margin:10px 0;padding:10px;font-size:12px;color:#71757a;display:flex;align-items:center;"]);
/**
 * Displays collective's updates.
 */

class SectionUpdates extends (react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) {
  componentDidUpdate(oldProps) {
    // If user log in/out we need to refresh data as it depends on the current user
    const refetch = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(this.props.data, 'refetch');

    if (oldProps.isLoggedIn !== this.props.isLoggedIn && refetch) {
      refetch();
    }
  }

  render() {
    const {
      collective,
      isAdmin
    } = this.props;

    const updates = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(this.props.data, 'Collective.updates', []); // Nothing to show if updates is empty and user can't add new ones


    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(updates) && !isAdmin) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      pb: 4,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        fontSize: ['20px', '24px', '32px'],
        color: "black.700",
        mb: 24,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
        mb: 4,
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledP, {
          color: "black.700",
          my: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "section.updates.subtitle",
            defaultMessage: [{
              "type": 0,
              "value": "Updates on our activities and progress."
            }]
          })
        }), isAdmin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/updates/new`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            "data-cy": "create-new-update-btn",
            buttonStyle: "primary",
            my: [2, 0],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__/* .Span */ .Dr, {
              fontSize: "16px",
              fontWeight: "bold",
              mr: 2,
              children: "+"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "updates.new.title",
              defaultMessage: [{
                "type": 0,
                "value": "New update"
              }]
            })]
          })
        })]
      }), lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(updates) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          my: [3, 5],
          type: "info",
          withIcon: true,
          maxWidth: 700,
          fontStyle: "italic",
          fontSize: "14px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "SectionUpdates.PostFirst",
            defaultMessage: [{
              "type": 0,
              "value": "Report your progress and keep your community up to date."
            }]
          })
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
        mt: [3, 5],
        mb: [3, 4],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          "data-cy": "updatesList",
          children: updates.map((update, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            p: 24,
            display: "flex",
            justifyContent: "space-between",
            borderBottom: idx === updates.length - 1 ? undefined : '1px solid #e6e8eb',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
                mr: 3,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                  collective: update.fromCollective,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
                    collective: update.fromCollective,
                    radius: 40
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
                flexDirection: "column",
                justifyContent: "space-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                  href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/updates/${update.slug}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
                    color: "black.900",
                    fontWeight: "600",
                    mb: 2,
                    children: update.title
                  })
                }), update.userCanSeeUpdate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    style: {
                      display: 'inline'
                    },
                    content: update.summary
                  }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    as: _Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
                    fontSize: "12px",
                    href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/updates/${update.slug}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "ContributeCard.ReadMore",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Read more"
                      }]
                    })
                  })]
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrivateUpdateMesgBox, {
                  type: "info",
                  "data-cy": "mesgBox",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  color: "black.600",
                  mt: 2,
                  fontSize: "12px",
                  children: [update.isPrivate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "update.private.lock_text",
                      defaultMessage: [{
                        "type": 0,
                        "value": "This update is for contributors only"
                      }]
                    }),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
                      mr: 1,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_5__.Lock, {
                        "data-tip": true,
                        "data-for": "privateLockText",
                        "data-cy": "privateIcon",
                        size: 12,
                        cursor: "pointer"
                      })
                    })
                  }), update.publishedAt ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
                      date: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatDate */ .p6)(update.publishedAt, {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      }),
                      author: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        collective: update.fromCollective
                      })
                    }
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
                      date: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatDate */ .p6)(update.createdAt),
                      author: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        collective: update.fromCollective
                      })
                    }
                  })]
                })]
              })]
            })
          }, update.id))
        }), updates.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .getCollectivePageRoute */ .x0)(collective)}/updates`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            "data-cy": "view-all-updates-btn",
            mt: 4,
            width: 1,
            buttonSize: "small",
            fontSize: "14px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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

}

const addUpdatesSectionData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(updatesSectionQuery, {
  options: props => ({
    variables: getUpdatesSectionQueryVariables(props.collective.slug, props.isAdmin)
  })
});
const getUpdatesSectionQueryVariables = (slug, isAdmin = false) => {
  return {
    slug,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_6__.injectIntl)(addUpdatesSectionData(SectionUpdates)));

var _StyledP = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Text__WEBPACK_IMPORTED_MODULE_21__.P).withConfig({
  displayName: "Updates___StyledP",
  componentId: "sc-1tc073o-1"
})({
  flex: '1 0 50%',
  maxWidth: 700
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 77771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 69794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 98929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19156);
/* harmony import */ var _TransactionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1223);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TransactionItem__WEBPACK_IMPORTED_MODULE_3__]);
_TransactionItem__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "TransactionsList__Container",
  componentId: "sc-nnbe2v-0"
})(["", ""], props => !props.isFirst && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["border-top:1px solid #e6e8eb;"]));

const TransactionsList = ({
  transactions,
  collective,
  displayActions,
  onMutationSuccess
}) => {
  if (!transactions?.length) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: transactions.map((transaction, idx) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Container, {
        isFirst: !idx,
        "data-cy": "single-transaction",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_TransactionItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          transaction: transaction,
          collective: collective,
          displayActions: displayActions,
          onMutationSuccess: onMutationSuccess
        })
      }, transaction?.id || idx);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionsList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useImageUploader)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88705);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31330);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65985);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97079);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__]);
_components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
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

const getUploadProgress = uploadProgressList => {
  if (!uploadProgressList || uploadProgressList.length === 0) {
    return 0;
  } else {
    const totalUploadProgress = uploadProgressList.reduce((total, current) => total + current, 0);
    return Math.trunc(totalUploadProgress / uploadProgressList.length);
  }
};

const useImageUploader = ({
  isMulti,
  mockImageGenerator,
  onSuccess,
  onReject,
  kind
}) => {
  const [isUploading, setUploading] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [uploadProgressList, setUploadProgressList] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
  const {
    addToast
  } = (0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  return {
    isUploading,
    uploadProgress: getUploadProgress(uploadProgressList),
    uploadFiles: react__WEBPACK_IMPORTED_MODULE_2___default().useCallback(async (acceptedFiles, rejectedFiles) => {
      setUploading(true);
      const filesToUpload = isMulti ? acceptedFiles : [acceptedFiles[0]];
      const results = await (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .allSettled */ .Lu)(filesToUpload.map((file, index) => (0,_api__WEBPACK_IMPORTED_MODULE_6__/* .uploadImageWithXHR */ .Z4)(file, kind, {
        mockImage: mockImageGenerator && mockImageGenerator(index),
        onProgress: progress => {
          const newProgressList = [...uploadProgressList];
          newProgressList.splice(index, 0, progress);
          setUploadProgressList(newProgressList);
        }
      })));
      setUploading(false);
      const successes = [];
      const failures = [];
      results.forEach((result, index) => {
        const fileInfo = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(filesToUpload[index], ['name', 'size', 'type']);

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

      if (onSuccess && successes.length > 0) {
        await onSuccess(isMulti ? successes : successes[0]);
      }

      if (onReject && failures.length > 0) {
        onReject(isMulti ? failures : failures[0]);
      }

      if (rejectedFiles?.length) {
        const baseMsg = intl.formatMessage(msg.invalidFiles, _objectSpread(_objectSpread({}, _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP), {}, {
          count: rejectedFiles.length,
          files: rejectedFiles.map(({
            file
          }) => file.name).join(', ')
        }));
        const errorMsg = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(rejectedFiles[0], 'errors.0.message') || '';
        addToast({
          type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: `${baseMsg}. ${errorMsg}`
        });
      }
    }, [isMulti, onSuccess, onReject, mockImageGenerator, uploadProgressList])
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Custom404)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1259);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11333);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42352);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_5__, _components_Header__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_5__, _components_Header__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Custom404() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "ErrorPage",
    "data-cy": "error-page",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Body__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        borderTop: "1px solid #E8E9EB",
        py: [5, 6],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          "data-cy": "not-found",
          flexDirection: "column",
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_9__.H1, {
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "notFound",
              defaultMessage: [{
                "type": 0,
                "value": "Not found"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            fontSize: "3.6rem",
            color: "primary.500",
            mt: 4,
            mb: 5,
            children: "\xAF\\_(\u30C4)_/\xAF"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
            flexWrap: "wrap",
            justifyContent: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              m: 2,
              onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().back(),
              children: ["\u2190 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})]
  });
}
Custom404.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Custom404"
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5700);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25896);
/* harmony import */ var _components_collective_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51016);
/* harmony import */ var _components_collective_page_CollectiveNotificationBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49754);
/* harmony import */ var _components_collective_page_graphql_preload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56916);
/* harmony import */ var _components_collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71611);
/* harmony import */ var _components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(325);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69078);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73908);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53169);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(84842);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51927);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19147);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_page__WEBPACK_IMPORTED_MODULE_8__, _components_collective_page_CollectiveNotificationBar__WEBPACK_IMPORTED_MODULE_9__, _components_collective_page_graphql_preload__WEBPACK_IMPORTED_MODULE_10__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_14__, _components_Page__WEBPACK_IMPORTED_MODULE_16__, _404__WEBPACK_IMPORTED_MODULE_18__]);
([_components_collective_page__WEBPACK_IMPORTED_MODULE_8__, _components_collective_page_CollectiveNotificationBar__WEBPACK_IMPORTED_MODULE_9__, _components_collective_page_graphql_preload__WEBPACK_IMPORTED_MODULE_10__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_14__, _components_Page__WEBPACK_IMPORTED_MODULE_16__, _404__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















/** A page rendered when collective is pledged and not active yet */



const PledgedCollectivePage = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() | PledgedCollectivePage */ 1950).then(__webpack_require__.bind(__webpack_require__, 10955)), {
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  loadableGenerated: {
    modules: ["collective-page.js -> " + '../components/PledgedCollectivePage']
  }
});
/** A page rendered when collective is incognito */

const IncognitoUserCollective = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() | IncognitoUserCollective */ 4829).then(__webpack_require__.bind(__webpack_require__, 1549)), {
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  loadableGenerated: {
    modules: ["collective-page.js -> " + '../components/IncognitoUserCollective']
  }
});
/** A page rendered when collective is guest */

const GuestUserProfile = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() | GuestUserProfile */ 6724).then(__webpack_require__.bind(__webpack_require__, 92873)), {
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  loadableGenerated: {
    modules: ["collective-page.js -> " + '../components/GuestUserProfile']
  }
});
/** Load the onboarding modal dynamically since it's not used often */

const OnboardingModal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() | OnboardingModal */ 5489).then(__webpack_require__.bind(__webpack_require__, 58021)), {
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  loadableGenerated: {
    modules: ["collective-page.js -> " + '../components/onboarding-modal/OnboardingModal']
  }
});
const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.createGlobalStyle)(["section{margin:0;}"]);
/**
 * The main page to display collectives. Wrap route parameters and GraphQL query
 * to render `components/collective-page` with everything needed.
 */

class CollectivePage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static async getInitialProps({
    client,
    req,
    res,
    query: {
      slug,
      status,
      step,
      mode,
      action
    }
  }) {
    if (res && req && (req.language || req.locale === 'en')) {
      res.set('Cache-Control', 'public, s-maxage=300');
    }

    let skipDataFromTree = false; // If on server side

    if (req) {
      await (0,_components_collective_page_graphql_preload__WEBPACK_IMPORTED_MODULE_10__/* .preloadCollectivePageGraphqlQueries */ .d)(slug, client);
      skipDataFromTree = true;
    }

    return {
      slug,
      status,
      step,
      mode,
      skipDataFromTree,
      action
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "setShowOnboardingModal", bool => {
      this.setState({
        showOnboardingModal: bool
      });
    });

    this.state = {
      smooth: false,
      showOnboardingModal: true
    };
  }

  componentDidMount() {
    this.setState({
      smooth: true
    });
    const {
      router,
      data
    } = this.props;
    const collective = data?.Collective;
    (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_7__/* .addParentToURLIfMissing */ .Bc)(router, collective);
  }

  render() {
    const {
      slug,
      data,
      LoggedInUser,
      status,
      step,
      mode,
      action
    } = this.props;
    const {
      showOnboardingModal
    } = this.state;
    const loading = data.loading && !data.Collective;

    if (!loading) {
      if (!data || data.error) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          data: data
        });
      } else if (!data.Collective) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .generateNotFoundError */ .mN)(slug),
          log: false
        });
      } else if (data.Collective.isPledged && !data.Collective.isActive) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(PledgedCollectivePage, {
          collective: data.Collective
        });
      } else if (data.Collective.isIncognito) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(IncognitoUserCollective, {
          collective: data.Collective
        });
      } else if (data.Collective.isGuest) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(GuestUserProfile, {
          account: data.Collective
        });
      }
    }

    const collective = data && data.Collective; // Don't allow /collective/apply

    if (action === 'apply' && !collective?.isHost) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_404__WEBPACK_IMPORTED_MODULE_18__["default"], {});
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      collective: collective,
      canonicalURL: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getCollectivePageCanonicalURL */ .Bu)(collective)
    }, (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__/* .getCollectivePageMetadata */ .Xq)(collective)), {}, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(GlobalStyles, {}), loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        py: [5, 6],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_collective_page_CollectiveNotificationBar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          collective: collective,
          host: collective.host,
          status: status,
          LoggedInUser: LoggedInUser,
          refetch: data.refetch
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          collective: collective,
          children: ({
            onPrimaryColorChange
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_collective_page__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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
          })
        }), mode === 'onboarding' && LoggedInUser?.isAdminOfCollective(collective) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(OnboardingModal, {
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

}

const addCollectivePageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__.graphql)(_components_collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_11__/* .collectivePageQuery */ .J, {
  options: props => ({
    variables: (0,_components_collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_11__/* .getCollectivePageQueryVariables */ .L)(props.slug)
  })
});
CollectivePage.__docgenInfo = {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_17__/* .withUser */ .ns)(addCollectivePageData(CollectivePage))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

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

/***/ 13831:
/***/ ((module) => {

"use strict";
module.exports = require("@dnd-kit/core");

/***/ }),

/***/ 99565:
/***/ ((module) => {

"use strict";
module.exports = require("@dnd-kit/sortable");

/***/ }),

/***/ 92813:
/***/ ((module) => {

"use strict";
module.exports = require("@dnd-kit/utilities");

/***/ }),

/***/ 27943:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ 48308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 42558:
/***/ ((module) => {

"use strict";
module.exports = require("@opencollective/taxes");

/***/ }),

/***/ 3115:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/browser");

/***/ }),

/***/ 64515:
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 33244:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/bootstrap/ShieldFillCheck");

/***/ }),

/***/ 7257:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/bootstrap/ShieldFillExclamation");

/***/ }),

/***/ 77186:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/bootstrap/Tags");

/***/ }),

/***/ 58847:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Check");

/***/ }),

/***/ 60080:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/CheckCircle");

/***/ }),

/***/ 47435:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/CheckShield");

/***/ }),

/***/ 18022:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/ChevronDown");

/***/ }),

/***/ 28054:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/ChevronRight");

/***/ }),

/***/ 52160:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/ChevronUp");

/***/ }),

/***/ 77603:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/CreditCard");

/***/ }),

/***/ 95255:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Dollar");

/***/ }),

/***/ 93842:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/DotsVerticalRounded");

/***/ }),

/***/ 95019:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Envelope");

/***/ }),

/***/ 51104:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Exit");

/***/ }),

/***/ 2882:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Image");

/***/ }),

/***/ 10054:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/InfoCircle");

/***/ }),

/***/ 99812:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 11515:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Lock");

/***/ }),

/***/ 24594:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/MinusCircle");

/***/ }),

/***/ 12438:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Palette");

/***/ }),

/***/ 46529:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Planet");

/***/ }),

/***/ 23263:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 43891:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Receipt");

/***/ }),

/***/ 60476:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 50359:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Trash");

/***/ }),

/***/ 99232:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Undo");

/***/ }),

/***/ 9126:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/XCircle");

/***/ }),

/***/ 39553:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-solid/Bank");

/***/ }),

/***/ 42126:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-solid/Lock");

/***/ }),

/***/ 60270:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Alipay");

/***/ }),

/***/ 97244:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/ApplePay");

/***/ }),

/***/ 45933:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 38254:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/GooglePay");

/***/ }),

/***/ 3592:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 54427:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Paypal");

/***/ }),

/***/ 64374:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 43049:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/AngleDoubleDown");

/***/ }),

/***/ 81594:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Ban");

/***/ }),

/***/ 19153:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Bars");

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

/***/ 55457:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/CreditCard");

/***/ }),

/***/ 63387:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/ExchangeAlt");

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

/***/ 32985:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/ExternalLinkAlt");

/***/ }),

/***/ 86954:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/InfoCircle");

/***/ }),

/***/ 89837:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Lock");

/***/ }),

/***/ 64965:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/MoneyCheck");

/***/ }),

/***/ 87584:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/MoneyCheckAlt");

/***/ }),

/***/ 64934:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/PencilAlt");

/***/ }),

/***/ 77192:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Plus");

/***/ }),

/***/ 26201:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 8866:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/University");

/***/ }),

/***/ 56758:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/AlertTriangle");

/***/ }),

/***/ 62941:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ArrowLeft");

/***/ }),

/***/ 22198:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ArrowRight");

/***/ }),

/***/ 61975:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Calendar");

/***/ }),

/***/ 36603:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Camera");

/***/ }),

/***/ 89711:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ChevronDown");

/***/ }),

/***/ 87208:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 76841:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ChevronUp");

/***/ }),

/***/ 29872:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 94997:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Clock");

/***/ }),

/***/ 57847:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 70441:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ExternalLink");

/***/ }),

/***/ 94526:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Facebook");

/***/ }),

/***/ 40710:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 89988:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Github");

/***/ }),

/***/ 79409:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Globe");

/***/ }),

/***/ 57153:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Info");

/***/ }),

/***/ 203:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Linkedin");

/***/ }),

/***/ 371:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Lock");

/***/ }),

/***/ 71362:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Mail");

/***/ }),

/***/ 4840:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/MapPin");

/***/ }),

/***/ 67520:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Maximize2");

/***/ }),

/***/ 75827:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/MessageSquare");

/***/ }),

/***/ 13371:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Move");

/***/ }),

/***/ 62556:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 72142:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Trash2");

/***/ }),

/***/ 71593:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Twitter");

/***/ }),

/***/ 50567:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/icomoon/ArrowLeft2");

/***/ }),

/***/ 89457:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/icomoon/ArrowRight2");

/***/ }),

/***/ 73949:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 21522:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/icomoon/PriceTags");

/***/ }),

/***/ 4965:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/ionicons-solid/Expand");

/***/ }),

/***/ 38218:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/ArrowBack");

/***/ }),

/***/ 80950:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/AttachMoney");

/***/ }),

/***/ 87501:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/BarChart");

/***/ }),

/***/ 93974:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Clear");

/***/ }),

/***/ 20384:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Close");

/***/ }),

/***/ 68765:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/DragIndicator");

/***/ }),

/***/ 42551:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/FormatListBulleted");

/***/ }),

/***/ 6534:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 52547:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/PieChart");

/***/ }),

/***/ 33651:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Settings");

/***/ }),

/***/ 95830:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/ShowChart");

/***/ }),

/***/ 41200:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Timeline");

/***/ }),

/***/ 80924:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 21825:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/octicons/Question");

/***/ }),

/***/ 83002:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 38164:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/remix-line/Stack");

/***/ }),

/***/ 42038:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-system/css");

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

/***/ 45245:
/***/ ((module) => {

"use strict";
module.exports = require("canvas-confetti");

/***/ }),

/***/ 59003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 28992:
/***/ ((module) => {

"use strict";
module.exports = require("country-currency-emoji-flags");

/***/ }),

/***/ 69031:
/***/ ((module) => {

"use strict";
module.exports = require("cross-fetch");

/***/ }),

/***/ 71934:
/***/ ((module) => {

"use strict";
module.exports = require("currency-symbol-map");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 14195:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/relativeTime");

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

/***/ 28109:
/***/ ((module) => {

"use strict";
module.exports = require("file-saver");

/***/ }),

/***/ 92869:
/***/ ((module) => {

"use strict";
module.exports = require("focus-trap-react");

/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

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

/***/ 99226:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/assign");

/***/ }),

/***/ 59969:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/capitalize");

/***/ }),

/***/ 12154:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/clamp");

/***/ }),

/***/ 59591:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 39131:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/compact");

/***/ }),

/***/ 22749:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/concat");

/***/ }),

/***/ 93908:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/debounce");

/***/ }),

/***/ 77047:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/difference");

/***/ }),

/***/ 90857:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/endsWith");

/***/ }),

/***/ 76918:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/find");

/***/ }),

/***/ 25359:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/findLastIndex");

/***/ }),

/***/ 22265:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/first");

/***/ }),

/***/ 58579:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/flatten");

/***/ }),

/***/ 1712:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/groupBy");

/***/ }),

/***/ 98210:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/has");

/***/ }),

/***/ 74292:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/identity");

/***/ }),

/***/ 78274:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/inRange");

/***/ }),

/***/ 41238:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/includes");

/***/ }),

/***/ 53493:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/intersection");

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

/***/ 86069:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNil");

/***/ }),

/***/ 48524:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNull");

/***/ }),

/***/ 75795:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 83824:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/last");

/***/ }),

/***/ 53707:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/map");

/***/ }),

/***/ 9941:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/mapValues");

/***/ }),

/***/ 36625:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/max");

/***/ }),

/***/ 11341:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/maxBy");

/***/ }),

/***/ 61831:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ 604:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/min");

/***/ }),

/***/ 63901:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/orderBy");

/***/ }),

/***/ 96839:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/padStart");

/***/ }),

/***/ 32027:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/partition");

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

/***/ 47869:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/round");

/***/ }),

/***/ 24298:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/set");

/***/ }),

/***/ 71156:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/size");

/***/ }),

/***/ 23672:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/sortBy");

/***/ }),

/***/ 35007:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/startCase");

/***/ }),

/***/ 79800:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/sumBy");

/***/ }),

/***/ 1381:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/throttle");

/***/ }),

/***/ 75142:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/truncate");

/***/ }),

/***/ 18459:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 73022:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/upperCase");

/***/ }),

/***/ 22217:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/without");

/***/ }),

/***/ 86646:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/zipObject");

/***/ }),

/***/ 17809:
/***/ ((module) => {

"use strict";
module.exports = require("memoize-one");

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

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 28403:
/***/ ((module) => {

"use strict";
module.exports = require("react-apexcharts");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 56358:
/***/ ((module) => {

"use strict";
module.exports = require("react-dropzone");

/***/ }),

/***/ 6335:
/***/ ((module) => {

"use strict";
module.exports = require("react-easy-crop");

/***/ }),

/***/ 48580:
/***/ ((module) => {

"use strict";
module.exports = require("react-geosuggest");

/***/ }),

/***/ 13126:
/***/ ((module) => {

"use strict";
module.exports = require("react-intl");

/***/ }),

/***/ 42932:
/***/ ((module) => {

"use strict";
module.exports = require("react-popper");

/***/ }),

/***/ 35073:
/***/ ((module) => {

"use strict";
module.exports = require("react-scrollchor");

/***/ }),

/***/ 61929:
/***/ ((module) => {

"use strict";
module.exports = require("react-select");

/***/ }),

/***/ 31325:
/***/ ((module) => {

"use strict";
module.exports = require("react-select/creatable");

/***/ }),

/***/ 37597:
/***/ ((module) => {

"use strict";
module.exports = require("react-text-mask");

/***/ }),

/***/ 80551:
/***/ ((module) => {

"use strict";
module.exports = require("react-window");

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

/***/ 73673:
/***/ ((module) => {

"use strict";
module.exports = require("slugify");

/***/ }),

/***/ 84103:
/***/ ((module) => {

"use strict";
module.exports = require("spdx-license-list");

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

/***/ 71564:
/***/ ((module) => {

"use strict";
module.exports = require("validator");

/***/ }),

/***/ 85598:
/***/ ((module) => {

"use strict";
module.exports = import("react-animate-height");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,5152,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208,414,8247,2221,9528,2027], () => (__webpack_exec__(77402)));
module.exports = __webpack_exports__;

})();