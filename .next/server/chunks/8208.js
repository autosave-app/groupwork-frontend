"use strict";
exports.id = 8208;
exports.ids = [8208];
exports.modules = {

/***/ 66120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87268);




/**
 * An action button, as defined in https://www.figma.com/file/N4Xbl652BhzOutXmzhcrLGch/%5BDS%5D-02-Atoms?node-id=3842%3A222.
 * Based on `StyledButton`.
 */

const ActionButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).attrs({
  buttonSize: 'tiny',
  padding: '7px 16px',
  borderRadius: '8px'
}).withConfig({
  displayName: "ActionButton",
  componentId: "sc-tqwhqc-0"
})(["font-weight:500;font-size:14px;line-height:16px;white-space:nowrap;text-transform:uppercase;border:none;color:", ";&,span{letter-spacing:0.01em;}span{vertical-align:middle;}", ""], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.800'), props => props.isSecondary ? (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["&:focus{background:", ";}&:hover:not(:active){background:", ";box-shadow:0 0 0 2px ", ";}&:active{background:", ";color:", ";box-shadow:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.100'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.100'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.200'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.800')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background:", ";&:focus{background:", ";}&:hover:not(:active){background:", ";color:", ";}&:active{background:", ";color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.100'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.100'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.white.full'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.200'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.800')));
ActionButton.propTypes = {
  borderRadius: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  isSecondary: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionButton);

/***/ }),

/***/ 77271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _host_dashboard_AddFundsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29301);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_host_dashboard_AddFundsModal__WEBPACK_IMPORTED_MODULE_2__]);
_host_dashboard_AddFundsModal__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const AddFundsBtn = ({
  children,
  collective
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [children({
      onClick: () => setShowModal(true)
    }), showModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_host_dashboard_AddFundsModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      collective: collective,
      onClose: () => setShowModal(null)
    })]
  });
};

const DefaultAddFundsButton = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
    id: "menu.addFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Add Funds"
    }]
  })
}));

AddFundsBtn.defaultProps = {
  children: DefaultAddFundsButton
};
AddFundsBtn.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AddFundsBtn",
  "props": {
    "children": {
      "defaultValue": {
        "value": "props => (\n  <StyledButton {...props}>\n    <FormattedMessage id=\"menu.addFunds\" defaultMessage=\"Add Funds\" />\n  </StyledButton>\n)",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddFundsBtn);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_CheckCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60080);
/* harmony import */ var _styled_icons_boxicons_regular_CheckCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_CheckCircle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ApplyToHostModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77596);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplyToHostModal__WEBPACK_IMPORTED_MODULE_4__]);
_ApplyToHostModal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class ApplyToHostBtn extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    const {
      router
    } = this.props;

    if (router.query.action === 'apply') {
      this.setState({
        showModal: true
      });
    }
  }

  componentDidUpdate(prevProps) {
    const {
      router
    } = this.props;

    if (router.query.action !== 'apply' && prevProps.router.query.action === 'apply') {
      this.setState({
        showModal: false
      });
    }

    if (router.query.action === 'apply' && prevProps.router.query.action !== 'apply') {
      this.setState({
        showModal: true
      });
    }
  }

  renderButton() {
    const {
      buttonRenderer,
      withoutIcon,
      buttonProps,
      minWidth,
      hostSlug,
      router
    } = this.props;

    if (buttonRenderer) {
      return buttonRenderer(_objectSpread(_objectSpread({
        onClick: () => router.push(`${hostSlug}/apply`),
        'data-cy': 'host-apply-btn'
      }, buttonProps), {}, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [!withoutIcon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_boxicons_regular_CheckCircle__WEBPACK_IMPORTED_MODULE_1__.CheckCircle, {
            size: "1em"
          }), !withoutIcon && ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "Apply",
              defaultMessage: [{
                "type": 0,
                "value": "Apply"
              }]
            })
          })]
        })
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      buttonStyle: "secondary",
      buttonSize: "small",
      onClick: () => router.push(`${hostSlug}/apply`),
      minWidth: minWidth,
      "data-cy": "host-apply-btn"
    }, buttonProps), {}, {
      children: [!withoutIcon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_boxicons_regular_CheckCircle__WEBPACK_IMPORTED_MODULE_1__.CheckCircle, {
        size: "20px",
        color: "#304CDC"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "Apply",
        defaultMessage: [{
          "type": 0,
          "value": "Apply"
        }]
      })]
    }));
  }

  render() {
    const {
      hostSlug,
      router,
      isHidden
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [this.renderButton(), this.state.showModal && !isHidden && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ApplyToHostModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        hostSlug: hostSlug,
        onClose: () => router.push(hostSlug)
      })]
    });
  }

}

ApplyToHostBtn.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "renderButton",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "ApplyToHostBtn",
  "props": {
    "hostSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "minWidth": {
      "description": "",
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
    "withoutIcon": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "buttonProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "buttonRenderer": {
      "description": "",
      "type": {
        "name": "func"
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
    "isHidden": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(ApplyToHostBtn));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77596:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53707);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62556);
/* harmony import */ var _styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82525);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32651);
/* harmony import */ var _ocf_host_application_ApplicationDescription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78936);
/* harmony import */ var _ocf_host_application_OCFPrimaryButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(58689);
/* harmony import */ var _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14574);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11194);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(40242);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5993);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(74770);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(92129);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(37278);
/* harmony import */ var _StepsProgress__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(65598);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(41433);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(173);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(75667);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(71792);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_16__, _CollectivePicker__WEBPACK_IMPORTED_MODULE_18__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_19__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_30__, _ToastProvider__WEBPACK_IMPORTED_MODULE_34__]);
([_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_16__, _CollectivePicker__WEBPACK_IMPORTED_MODULE_18__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_19__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_30__, _ToastProvider__WEBPACK_IMPORTED_MODULE_34__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const _excluded = ["hostSlug", "collective", "onClose", "onSuccess", "router"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


































const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  SUCCESS: {
    id: "SubmitApplication.SUCCESS",
    defaultMessage: [{
      "type": 1,
      "value": "collectiveName"
    }, {
      "type": 0,
      "value": "'s application to "
    }, {
      "type": 1,
      "value": "hostName"
    }, {
      "type": 0,
      "value": " has been "
    }, {
      "type": 5,
      "value": "type",
      "options": {
        "APPROVED": {
          "value": [{
            "type": 0,
            "value": "approved"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "submitted"
          }]
        }
      }
    }]
  }
});
const hostFields = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  fragment ApplyToHostFields on Host {
    id
    legacyId
    type
    slug
    name
    createdAt
    currency
    isOpenToApplications
    termsUrl
    longDescription
    hostFeePercent
    settings
    policies {
      COLLECTIVE_MINIMUM_ADMINS {
        numberOfAdmins
      }
    }
  }
`;
const accountFields = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  fragment ApplyToHostAccountFields on Account {
    id
    slug
    name
    type
    imageUrl
    memberInvitations(role: [ADMIN]) {
      id
      role
      memberAccount {
        id
        type
        slug
        name
        imageUrl
      }
    }
    admins: members(role: ADMIN) {
      nodes {
        id
        role
        account {
          id
          type
          slug
          name
          imageUrl
        }
      }
    }
  }
`;
const applyToHostQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query ApplyToHost($hostSlug: String!, $collectiveSlug: String!) {
    host(slug: $hostSlug) {
      id
      ...ApplyToHostFields
    }
    account(slug: $collectiveSlug) {
      id
      ...ApplyToHostAccountFields
    }
  }
  ${hostFields}
  ${accountFields}
`;
/**
 * A query similar to `applyToHostQuery`, except we also fetch user's administrated collectives for the picker
 */

const applyToHostWithAccountsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query ApplyToHostWithAccounts($hostSlug: String!) {
    host(slug: $hostSlug) {
      id
      ...ApplyToHostFields
    }
    loggedInAccount {
      id
      memberOf(role: ADMIN, accountType: [COLLECTIVE, FUND], isApproved: false, isArchived: false) {
        nodes {
          id
          account {
            id
            ...ApplyToHostAccountFields
            ... on AccountWithHost {
              host {
                id
                legacyId
              }
            }
          }
        }
      }
    }
  }
  ${hostFields}
  ${accountFields}
`;
const applyToHostMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  mutation ApplyToHost(
    $collective: AccountReferenceInput!
    $host: AccountReferenceInput!
    $message: String
    $inviteMembers: [InviteMemberInput]
  ) {
    applyToHost(collective: $collective, host: $host, message: $message, inviteMembers: $inviteMembers) {
      id
      slug
      ... on AccountWithHost {
        isActive
        isApproved
        host {
          id
          ...ApplyToHostFields
        }
      }
    }
  }
  ${hostFields}
`;
const GQL_CONTEXT = {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
};
const INITIAL_FORM_VALUES = {
  message: '',
  areTosChecked: false,
  collective: null,
  inviteMembers: []
};
const STEPS = {
  INFORMATION: {
    name: 'Information',
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "E80WrK",
      defaultMessage: [{
        "type": 0,
        "value": "Information"
      }]
    })
  },
  APPLY: {
    name: 'Apply',
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
      id: "Apply",
      defaultMessage: [{
        "type": 0,
        "value": "Apply"
      }]
    })
  }
};

const getAccountInput = collective => {
  return typeof collective.id === 'number' ? {
    legacyId: collective.id
  } : {
    id: collective.id
  };
};

const ConfirmButtons = ({
  onClose,
  onBack,
  onSubmit,
  isSubmitting,
  canSubmit,
  isOCFHost,
  isOSCHost
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
    justifyContent: "flex-end",
    width: "100%",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      buttonType: "button",
      onClick: onBack || onClose,
      disabled: isSubmitting,
      buttonStyle: "standard",
      mt: [2, 3],
      mb: 2,
      px: 3,
      children: onBack ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
        id: "Back",
        defaultMessage: [{
          "type": 0,
          "value": "Back"
        }]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
        id: "actions.cancel",
        defaultMessage: [{
          "type": 0,
          "value": "Cancel"
        }]
      })
    }), isOCFHost ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_ocf_host_application_OCFPrimaryButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      type: "submit",
      disabled: !canSubmit,
      loading: isSubmitting,
      onClick: onSubmit,
      mt: [2, 3],
      mb: 2,
      ml: 3,
      px: 3,
      minWidth: 153,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
        id: "actions.continue",
        defaultMessage: [{
          "type": 0,
          "value": "Continue"
        }]
      })
    }) : isOSCHost ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      type: "submit",
      disabled: !canSubmit,
      loading: isSubmitting,
      buttonStyle: "primary",
      onClick: onSubmit,
      mt: [2, 3],
      mb: 2,
      ml: 3,
      px: 3,
      minWidth: 153,
      "data-cy": "afc-host-submit-button",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
        id: "actions.continue",
        defaultMessage: [{
          "type": 0,
          "value": "Continue"
        }]
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      type: "submit",
      disabled: !canSubmit,
      loading: isSubmitting,
      buttonStyle: "primary",
      onClick: onSubmit,
      mt: [2, 3],
      mb: 2,
      ml: 3,
      px: 3,
      minWidth: 153,
      "data-cy": "afc-host-submit-button",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
        id: "actions.submitApplication",
        defaultMessage: [{
          "type": 0,
          "value": "Submit application"
        }]
      })
    })]
  });
};

/**
 * A modal to apply to a given host
 * This modal triggers a query when mounted
 */
const ApplyToHostModal = _ref => {
  let {
    hostSlug,
    collective,
    onClose,
    onSuccess,
    router
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const query = collective ? applyToHostQuery : applyToHostWithAccountsQuery;
  const {
    data,
    loading,
    error
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(query, _objectSpread(_objectSpread({}, GQL_CONTEXT), {}, {
    variables: {
      hostSlug,
      collectiveSlug: collective?.slug
    },
    fetchPolicy: 'network-only'
  }));
  const [applyToHost, {
    loading: submitting
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(applyToHostMutation, GQL_CONTEXT);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_34__/* .useToasts */ .e1)();
  const [step, setStep] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(STEPS.INFORMATION);
  const contentRef = react__WEBPACK_IMPORTED_MODULE_4___default().useRef();
  const canApply = Boolean(data?.host?.isOpenToApplications);

  const collectives = lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(data, 'loggedInAccount.memberOf.nodes'), 'account');

  const selectedCollective = collective ? _objectSpread(_objectSpread({}, collective), lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(data?.account, ['admins', 'memberInvitations'])) : collectives.length === 1 ? collectives[0] : undefined;
  const host = data?.host;
  const isOCFHost = host?.legacyId === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .OPENCOLLECTIVE_FOUNDATION_ID */ .SQ;
  const isOSCHost = host?.legacyId === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .OPENSOURCE_COLLECTIVE_ID */ .kp;
  const useTwoSteps = !lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default()(data?.host?.longDescription);
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    if (host && !useTwoSteps) {
      setStep(STEPS.APPLY);
    }
  }, [useTwoSteps]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    onClose: onClose,
    width: "570px"
  }, props), {}, {
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* .ModalHeader */ .xB, {
        hideCloseIcon: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          width: "100%",
          height: 163
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* .ModalBody */ .fe, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
          my: 32,
          borderColor: "black.300"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          width: "100%",
          height: 225
        })]
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Formik, {
      validateOnBlur: false,
      initialValues: _objectSpread(_objectSpread({}, INITIAL_FORM_VALUES), {}, {
        collective: selectedCollective
      }),
      validate: values => {
        if (!values.collective && contentRef.current) {
          contentRef.current.scrollIntoView({
            behavior: 'smooth'
          });
        } // Since the OSC flow is using a standalone form, without any TOS checkbox in this modal, skip validation here


        if (isOSCHost) {
          return {};
        }

        return (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_12__/* .requireFields */ .ay)(values, host.termsUrl ? ['areTosChecked', 'collective'] : ['collective']);
      },
      onSubmit: async values => {
        if (isOCFHost) {
          await router.push(`/foundation/apply/intro?collectiveSlug=${values.collective.slug}`);
          window.scrollTo(0, 0);
          return;
        } else if (isOSCHost) {
          await router.push(`/opensource/apply/intro?collectiveSlug=${values.collective.slug}`);
          window.scrollTo(0, 0);
          return;
        }

        try {
          const result = await applyToHost({
            variables: {
              host: getAccountInput(host),
              collective: getAccountInput(values.collective),
              message: values.message,
              inviteMembers: values.inviteMembers.map(invite => _objectSpread(_objectSpread({}, invite), {}, {
                memberAccount: {
                  legacyId: invite.memberAccount.id
                }
              }))
            }
          });

          if (onSuccess) {
            await onSuccess(result);
          } else {
            addToast({
              type: _ToastProvider__WEBPACK_IMPORTED_MODULE_34__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
              message: intl.formatMessage(messages.SUCCESS, {
                hostName: host.name,
                collectiveName: values.collective.name,
                type: result.data.applyToHost.isApproved ? 'APPROVED' : 'SENT'
              })
            });
            onClose();
          }
        } catch (e) {
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_34__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_11__/* .i18nGraphqlException */ .t2)(intl, e)
          });
        }
      },
      children: ({
        handleSubmit,
        values,
        setFieldValue
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* .ModalHeader */ .xB, {
          hideCloseIcon: true,
          children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            width: "100%",
            height: 163
          }) : host ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
              collective: host,
              type: host.type,
              radius: 64
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__.H1, {
              fontSize: "20px",
              lineHeight: "28px",
              color: "black.900",
              mt: 3,
              mb: 3,
              children: host.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
              justifyContent: "center",
              width: "100%",
              gap: "32px",
              flexWrap: "wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
                flexDirection: "column",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "black.600",
                  mb: 1,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                    id: "HostSince",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Host since"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedDate, {
                    value: host.createdAt,
                    month: "short",
                    year: "numeric"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
                flexDirection: "column",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "black.600",
                  mb: 1,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                    id: "Currency",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Currency"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                  children: host.currency
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
                flexDirection: "column",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "black.600",
                  mb: 1,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                    id: "HostFee",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Host fee"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                  children: [host.hostFeePercent, "%"]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
              my: 3,
              children: useTwoSteps && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StepsProgress__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                steps: Object.values(STEPS),
                focus: step,
                onStepSelect: setStep,
                children: ({
                  step
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                  fontWeight: "500",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  children: step.label
                })
              })
            })]
          }) : null
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* .ModalBody */ .fe, {
          children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            width: "100%",
            height: 250
          }) : !host ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            type: "warning",
            withIcon: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
              id: "notFound",
              defaultMessage: [{
                "type": 0,
                "value": "Not found"
              }]
            })
          }) : !canApply ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            type: "warning",
            withIcon: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
              id: "collectives.create.error.HostNotOpenToApplications",
              defaultMessage: [{
                "type": 0,
                "value": "This Fiscal Host is not open to applications"
              }]
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_7__.Form, {
            ref: contentRef,
            children: [step === STEPS.INFORMATION && host.longDescription && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
              content: host.longDescription
            }), step === STEPS.APPLY && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                  name: "collective",
                  children: ({
                    form,
                    field
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("div", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                      fontSize: "13px",
                      lineHeight: "16px",
                      fontWeight: "600",
                      color: "black.700",
                      mb: 2,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                        id: "ApplyToHost.PickCollective",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Which account is applying to "
                        }, {
                          "type": 1,
                          "value": "hostName"
                        }, {
                          "type": 0,
                          "value": "?"
                        }],
                        values: {
                          hostName: host.name
                        }
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_CollectivePicker__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, {
                      inputId: "host-apply-collective-picker",
                      "data-cy": "host-apply-collective-picker",
                      collective: field.value,
                      collectives: collectives,
                      isDisabled: Boolean(collective),
                      error: field.error,
                      onBlur: () => form.setFieldTouched(field.name, true),
                      onChange: ({
                        value
                      }) => form.setFieldValue(field.name, value),
                      isSearchable: collectives.length > 8,
                      types: ['COLLECTIVE'],
                      creatable: true,
                      renderNewCollectiveOption: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        href: isOCFHost ? `/foundation/apply/intro` : isOSCHost ? '/opensource/apply/intro' : `/${host.slug}/create`,
                        "data-cy": "host-apply-new-collective-link",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                          borderRadius: "14px",
                          width: "100%",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
                            alignItems: "center",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_styled_icons_feather_PlusCircle__WEBPACK_IMPORTED_MODULE_6__.PlusCircle, {
                              size: 24
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
                              ml: "16px",
                              fontSize: "11px",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                                id: "Collective.CreateNew",
                                defaultMessage: [{
                                  "type": 0,
                                  "value": "Create new Collective"
                                }]
                              })
                            })]
                          })
                        })
                      })
                    })]
                  })
                })
              }), !isOSCHost && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                  my: "18px",
                  width: "100%",
                  borderColor: "black.300"
                }), host?.policies?.COLLECTIVE_MINIMUM_ADMINS?.numberOfAdmins > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                      fontSize: "13px",
                      lineHeight: "16px",
                      fontWeight: "600",
                      color: "black.700",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                        id: "ceGKEG",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Minimum Administrators Required"
                        }]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
                      mt: 1,
                      width: "100%",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                        my: 2,
                        fontSize: "9px",
                        textTransform: "uppercase",
                        color: "black.700",
                        letterSpacing: "0.06em",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                          id: "administrators",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Administrators"
                          }]
                        }), values.collective && ` (${values.collective?.admins?.nodes.length + values.collective?.memberInvitations?.length + values.inviteMembers.length}/${host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins})`]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
                        flexGrow: 1,
                        alignItems: "center",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                          width: "100%",
                          ml: 2,
                          borderColor: "black.300"
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
                      width: "100%",
                      flexWrap: "wrap",
                      "data-cy": "profile-card",
                      children: [values.collective?.admins?.nodes.map(admin => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        collective: admin.account
                      }, admin.account.id)), values.collective?.memberInvitations?.map(invitations => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        collective: invitations.memberAccount,
                        isPending: true
                      }, invitations.memberAccount.id)), values.inviteMembers?.map(invite => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        collective: invite.memberAccount,
                        removeAdmin: () => setFieldValue('inviteMembers', values.inviteMembers.filter(i => i.memberAccount.id !== invite.memberAccount.id))
                      }, invite.memberAccount.id))]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
                      mt: 1,
                      width: "100%",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                        my: 2,
                        fontSize: "9px",
                        textTransform: "uppercase",
                        color: "black.700",
                        letterSpacing: "0.06em",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                          id: "InviteAdministrators",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Invite Administrators"
                          }]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
                        flexGrow: 1,
                        alignItems: "center",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                          width: "100%",
                          ml: 2,
                          borderColor: "black.300"
                        })
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        inputId: "onboarding-admin-picker",
                        creatable: true,
                        collective: null,
                        types: ['USER'],
                        "data-cy": "admin-picker",
                        filterResults: collectives => collectives.filter(collective => !values.inviteMembers.some(invite => invite.memberAccount.id === collective.id)),
                        onChange: option => {
                          setFieldValue('inviteMembers', [...values.inviteMembers, {
                            role: 'ADMIN',
                            memberAccount: option.value
                          }]);
                        }
                      })
                    }), host?.policies?.COLLECTIVE_MINIMUM_ADMINS && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                      type: "info",
                      mt: 3,
                      fontSize: "13px",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                        id: "GTK0Wf",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Your selected Fiscal Host requires you to add a minimum of "
                        }, {
                          "type": 6,
                          "value": "numberOfAdmins",
                          "options": {
                            "one": {
                              "value": [{
                                "type": 7
                              }, {
                                "type": 0,
                                "value": " admin"
                              }]
                            },
                            "other": {
                              "value": [{
                                "type": 7
                              }, {
                                "type": 0,
                                "value": " admins"
                              }]
                            }
                          },
                          "offset": 0,
                          "pluralType": "cardinal"
                        }, {
                          "type": 0,
                          "value": ". You can manage your admins from the Collective Settings."
                        }],
                        values: host.policies.COLLECTIVE_MINIMUM_ADMINS
                      })
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                    my: "18px",
                    width: "100%",
                    borderColor: "black.300"
                  })]
                }), isOCFHost ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_ocf_host_application_ApplicationDescription__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                    name: "message",
                    htmlFor: "apply-host-modal-message",
                    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Text__WEBPACK_IMPORTED_MODULE_33__/* .Span */ .Dr, {
                      fontSize: "13px",
                      lineHeight: "16px",
                      fontWeight: "600",
                      color: "black.700",
                      children: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(host, 'settings.applyMessage') || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                        id: "ApplyToHost.WriteMessage",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Message to the Fiscal Host"
                        }]
                      })
                    }),
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                      width: "100%",
                      minHeight: 76,
                      maxLength: 3000,
                      showCount: true
                    }))
                  })
                }), host.termsUrl && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                  name: "areTosChecked",
                  children: ({
                    form,
                    field
                  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
                    flexDirection: "column",
                    mx: 1,
                    mt: 18,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                      name: "tos",
                      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                        id: "Host.TOSCheckbox",
                        defaultMessage: [{
                          "type": 0,
                          "value": "I agree with the "
                        }, {
                          "type": 8,
                          "value": "TOSLink",
                          "children": [{
                            "type": 0,
                            "value": "terms of service"
                          }]
                        }, {
                          "type": 0,
                          "value": " of "
                        }, {
                          "type": 1,
                          "value": "hostName"
                        }],
                        values: {
                          hostName: host.name,
                          TOSLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_22__/* .getI18nLink */ .fw)(_objectSpread(_objectSpread({
                            href: host.termsUrl,
                            openInNewTabNoFollow: true
                          }, isOCFHost && {
                            color: '#396C6F'
                          }), {}, {
                            onClick: e => e.stopPropagation() // don't check the checkbox when clicking on the link

                          }))
                        }
                      }),
                      required: true,
                      checked: field.value,
                      onChange: ({
                        checked
                      }) => form.setFieldValue('areTosChecked', checked),
                      error: field.error
                    })
                  })
                })]
              }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                type: "error",
                withIcon: true,
                my: [1, 3],
                children: error
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* .ModalFooter */ .mz, {
          isFullWidth: true,
          children: [step === STEPS.INFORMATION && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
            justifyContent: "flex-end",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
              "data-cy": "host-apply-modal-next",
              buttonStyle: "primary",
              onClick: () => setStep(STEPS.APPLY),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                id: "Pagination.Next",
                defaultMessage: [{
                  "type": 0,
                  "value": "Next"
                }]
              })
            })
          }), step === STEPS.APPLY && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(ConfirmButtons, {
            onBack: () => setStep(STEPS.INFORMATION),
            onSubmit: handleSubmit,
            isSubmitting: submitting,
            canSubmit: canApply,
            isOCFHost: isOCFHost,
            isOSCHost: isOSCHost
          })]
        })]
      })
    })
  }));
};

ApplyToHostModal.__docgenInfo = {
  "description": "A modal to apply to a given host\nThis modal triggers a query when mounted",
  "methods": [],
  "displayName": "ApplyToHostModal",
  "props": {
    "hostSlug": {
      "description": "",
      "type": {
        "name": "string"
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
    "onSuccess": {
      "description": "If not provided, the default is to ad a success toast and to call onClose",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "collective": {
      "description": "Use this to force the value for `collective`. If not specified, user's administrated collectives will be displayed instead",
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_8__.withRouter)(ApplyToHostModal));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69715:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_collective_AssignVirtualCardModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90365);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_edit_collective_AssignVirtualCardModal__WEBPACK_IMPORTED_MODULE_2__, _ToastProvider__WEBPACK_IMPORTED_MODULE_4__]);
([_edit_collective_AssignVirtualCardModal__WEBPACK_IMPORTED_MODULE_2__, _ToastProvider__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const AssignVirtualCardBtn = ({
  children,
  collective,
  host
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_4__/* .useToasts */ .e1)();

  const handleAssignCardSuccess = () => {
    addToast({
      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_4__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
      message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "Host.VirtualCards.AssignCard.Success",
        defaultMessage: [{
          "type": 0,
          "value": "Card successfully assigned"
        }]
      })
    });
    setShowModal(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [children({
      onClick: () => setShowModal(true)
    }), showModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_edit_collective_AssignVirtualCardModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      host: host,
      collective: collective,
      onClose: () => setShowModal(false),
      onSuccess: handleAssignCardSuccess
    })]
  });
};

const DefaultAddFundsButton = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
    id: "menu.assignCard",
    defaultMessage: [{
      "type": 0,
      "value": "Assign a Card"
    }]
  })
}));

AssignVirtualCardBtn.defaultProps = {
  children: DefaultAddFundsButton
};
AssignVirtualCardBtn.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AssignVirtualCardBtn",
  "props": {
    "children": {
      "defaultValue": {
        "value": "props => (\n  <StyledButton {...props}>\n    <FormattedMessage id=\"menu.assignCard\" defaultMessage=\"Assign a Card\" />\n  </StyledButton>\n)",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
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
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssignVirtualCardBtn);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92235:
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
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37278);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68185);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87262);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_11__, _ToastProvider__WEBPACK_IMPORTED_MODULE_14__]);
([_StyledInputField__WEBPACK_IMPORTED_MODULE_11__, _ToastProvider__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const sendMessageMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation SendMessage($account: AccountReferenceInput!, $message: NonEmptyString!, $subject: String) {
    sendMessage(account: $account, message: $message, subject: $subject) {
      success
    }
  }
`;

const CollectiveContactForm = ({
  collective,
  isModal = false,
  onClose,
  onChange
}) => {
  const [subject, setSubject] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
  const [submit, {
    data,
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(sendMessageMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  });
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .useToasts */ .e1)(); // Dispatch changes to onChange if set

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (onChange) {
      onChange({
        subject,
        message
      });
    }
  }, [subject, message]);

  if (lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'sendMessage.success') && !isModal) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      type: "success",
      withIcon: true,
      maxWidth: 400,
      m: "32px auto",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "MessageSent",
        defaultMessage: [{
          "type": 0,
          "value": "Message sent"
        }]
      })
    });
  }

  const messageLabel = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
    fontWeight: 700,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "Contact.Message",
      defaultMessage: [{
        "type": 0,
        "value": "Message"
      }]
    })
  });

  const subjectLabel = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
    id: "OptionalFieldLabel",
    defaultMessage: [{
      "type": 1,
      "value": "field"
    }, {
      "type": 0,
      "value": " (optional)"
    }],
    values: {
      field: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
        fontWeight: 700,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Contact.Subject",
          defaultMessage: [{
            "type": 0,
            "value": "Subject"
          }]
        })
      })
    }
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
    flexDirection: "column",
    alignItems: ['center', 'flex-start'],
    maxWidth: 1160,
    m: "0 auto",
    children: [!isModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.H2, {
      mb: 2,
      fontSize: '40px',
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "ContactCollective",
        defaultMessage: [{
          "type": 0,
          "value": "Contact "
        }, {
          "type": 1,
          "value": "collective"
        }],
        values: {
          collective: collective.name
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
      mb: 4,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "CollectiveContactForm.Disclaimer",
        defaultMessage: [{
          "type": 0,
          "value": "Your email address will be shared with the admins who will receive this message."
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      label: subjectLabel,
      htmlFor: "subject",
      mb: 4,
      width: "100%",
      children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
        width: "100%",
        maxWidth: 500,
        maxLength: 60,
        onChange: e => setSubject(e.target.value),
        "data-cy": "subject"
      }))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      label: messageLabel,
      htmlFor: "message",
      width: "100%",
      maxWidth: 800,
      children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
        width: "100%",
        minHeight: 200,
        onChange: e => setMessage(e.target.value),
        minLength: 10,
        maxLength: 4000,
        value: message,
        showCount: true,
        "data-cy": "message"
      }))
    }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      error: error,
      mt: 3
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      mt: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "322m9e",
        defaultMessage: [{
          "type": 0,
          "value": "Message needs to be at least 10 characters long"
        }]
      })
    }), isModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("hr", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      textAlign: isModal ? 'right' : '',
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        mt: isModal ? 0 : 4,
        minWidth: 200,
        buttonStyle: "primary",
        disabled: message.length < 10,
        loading: loading,
        "data-cy": "submit",
        onClick: async () => {
          try {
            setError(null);
            await submit({
              variables: {
                account: {
                  slug: collective.slug
                },
                subject,
                message
              }
            });

            if (isModal) {
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
                message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "MessageSent",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Message sent"
                  }]
                })
              });
              onClose();
            }
          } catch (e) {
            setError(e);
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "FAYdqn",
          defaultMessage: [{
            "type": 0,
            "value": "Contact Collective"
          }]
        })
      })
    })]
  });
};

CollectiveContactForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollectiveContactForm",
  "props": {
    "isModal": {
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
    "collective": {
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
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "onClose": {
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
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectiveContactForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContactCollectiveModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73835);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactCollectiveModal__WEBPACK_IMPORTED_MODULE_3__]);
_ContactCollectiveModal__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const ContactCollectiveBtn = ({
  children,
  collective,
  LoggedInUser
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const isOpenCollective = collective.slug === 'opencollective';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [children({
      onClick: () => isOpenCollective ? router.push('/help') : LoggedInUser ? setShowModal(true) : router.push(`/${collective.slug}/contact`)
    }), showModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ContactCollectiveModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      collective: collective,
      onClose: () => setShowModal(null)
    })]
  });
};

const DefaultContactCollectiveButton = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
    id: "Contact",
    defaultMessage: [{
      "type": 0,
      "value": "Contact"
    }]
  })
}));

ContactCollectiveBtn.defaultProps = {
  children: DefaultContactCollectiveButton
};
ContactCollectiveBtn.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContactCollectiveBtn",
  "props": {
    "children": {
      "defaultValue": {
        "value": "props => (\n  <StyledButton {...props}>\n    <FormattedMessage id=\"Contact\" defaultMessage=\"Contact\" />\n  </StyledButton>\n)",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "collective": {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactCollectiveBtn);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CollectiveContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92235);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71792);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectiveContactForm__WEBPACK_IMPORTED_MODULE_2__]);
_CollectiveContactForm__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ContactCollectiveModal = ({
  collective,
  onClose
}) => {
  const [hasData, setHasData] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
    role: "alertdialog",
    width: "578px",
    onClose: onClose,
    trapFocus: true,
    hasUnsavedChanges: hasData,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_3__/* .ModalHeader */ .xB, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__.H2, {
        mb: 2,
        fontSize: '28px',
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContactCollective",
          defaultMessage: [{
            "type": 0,
            "value": "Contact "
          }, {
            "type": 1,
            "value": "collective"
          }],
          values: {
            collective: collective.name
          }
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_CollectiveContactForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      collective: collective,
      isModal: true,
      onClose: onClose,
      onChange: values => setHasData(Object.values(values).some(Boolean))
    })]
  });
};

ContactCollectiveModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContactCollectiveModal",
  "props": {
    "collective": {
      "description": "the collective that is contacted",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onClose": {
      "description": "handles how the modal is closed",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactCollectiveModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_collective_EditVirtualCardModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21408);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_edit_collective_EditVirtualCardModal__WEBPACK_IMPORTED_MODULE_2__, _ToastProvider__WEBPACK_IMPORTED_MODULE_4__]);
([_edit_collective_EditVirtualCardModal__WEBPACK_IMPORTED_MODULE_2__, _ToastProvider__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const CreateVirtualCardBtn = ({
  children,
  host,
  collective
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_4__/* .useToasts */ .e1)();

  const handleCreateCardSuccess = () => {
    addToast({
      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_4__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
      message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "YdC/Ok",
        defaultMessage: [{
          "type": 0,
          "value": "Card successfully created"
        }]
      })
    });
    setShowModal(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [children({
      onClick: () => setShowModal(true)
    }), showModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_edit_collective_EditVirtualCardModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      host: host,
      collective: collective,
      onClose: () => setShowModal(false),
      onSuccess: handleCreateCardSuccess
    })]
  });
};

const DefaultButton = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
    id: "xLybrm",
    defaultMessage: [{
      "type": 0,
      "value": "Create a Card"
    }]
  })
}));

CreateVirtualCardBtn.defaultProps = {
  children: DefaultButton
};
CreateVirtualCardBtn.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateVirtualCardBtn",
  "props": {
    "children": {
      "defaultValue": {
        "value": "props => (\n  <StyledButton {...props}>\n    <FormattedMessage defaultMessage=\"Create a Card\" />\n  </StyledButton>\n)",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateVirtualCardBtn);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74387);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40486);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Circle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "StepsProgress__Circle",
  componentId: "sc-1xgfvkb-0"
})(["circle{fill:", ";stroke:#c4c7cc;stroke-width:1px;", " ", " ", "}text{font-size:14px;", "}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.white.full'), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["stroke:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600')), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["cursor:pointer;stroke-width:2px;&:hover{fill:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.100')), props => props.checked && (props.disabled ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["fill:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.500')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["fill:", ";&:hover{fill:", ";})"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.400'))), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["fill:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600')));
const Bubble = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__Bubble",
  componentId: "sc-1xgfvkb-1"
})(["justify-content:center;align-items:center;flex:0 0 34px;height:34px;width:34px;border-radius:16px;cursor:default;color:#c4c7cc;background:", ";transition:box-shadow 0.3s,background 0.3s;z-index:2;", " ", " ", " ", ""], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.white.full'), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600')), props => !props.disabled && props.onClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["cursor:pointer;&:hover{background:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.100')), props => props.checked && (props.disabled ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.500')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:", ";&:hover{background:", ";})"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.400'))), props => props.focus && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["box-shadow:0 0 0 4px ", ";"], props => props.theme.colors.primary[100]));
/**
 * Border generated with https://gigacore.github.io/demos/svg-stroke-dasharray-generator/
 * to have a consistent result across browsers.
 */

const SeparatorLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, _objectSpread(_objectSpread({
  alignItems: "center"
}, props), {}, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("svg", {
    width: "100%",
    height: "2",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("line", {
      strokeDasharray: "5%",
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "0"
    })
  })
}))).withConfig({
  displayName: "StepsProgress__SeparatorLine",
  componentId: "sc-1xgfvkb-2"
})(["height:100%;z-index:1;flex-grow:1;flex-shrink:1;line{stroke-width:1;stroke:#c4c7cc;transition:stroke 0.3s;}", " ", ""], props => props.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["line{stroke:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.400')), props => props.transparent && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["visibility:hidden;"]));
const StepMobile = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepMobile",
  componentId: "sc-1xgfvkb-3"
})(["width:100%;align-items:center;"]);
const StepsOuter = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepsOuter",
  componentId: "sc-1xgfvkb-4"
})(["padding:12px 16px;@media (max-width:640px){background:#f5f7fa;}"]);
const StepsMobileLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__StepsMobileLeft",
  componentId: "sc-1xgfvkb-5"
})(["flex-grow:2;flex-direction:column;"]);
const StepsMobileRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepsMobileRight",
  componentId: "sc-1xgfvkb-6"
})(["margin-left:auto;width:56px;height:56px;align-items:center;justify-content:center;flex-shrink:0;position:relative;"]);
const PieProgressWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "StepsProgress__PieProgressWrapper",
  componentId: "sc-1xgfvkb-7"
})(["left:0;position:absolute;top:0;width:100%;height:100%;z-index:0;"]);
const PieProgress = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieProgress",
  componentId: "sc-1xgfvkb-8"
})(["left:0;position:absolute;top:0;width:100%;height:100%;border-radius:50%;overflow:hidden;", " ", ""], props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["clip:rect(0,", "px,", "px,", "px);"], props.pieSize, props.pieSize, props.pieSize / 2), props => props.progress && props.progress > 50 && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["clip:rect(auto,auto,auto,auto);"]));
const PieShadow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieShadow",
  componentId: "sc-1xgfvkb-9"
})(["width:100%;height:100%;", " border-radius:50%;"], props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border:", "px solid ", ";"], props.pieSize / 10, props.bgColor));
const PieHalfCircle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieHalfCircle",
  componentId: "sc-1xgfvkb-10"
})(["width:100%;height:100%;position:absolute;left:0;top:0;", " border-radius:50%;", ""], props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border:", "px solid #3498db;clip:rect(0,", "px,", "px,0);"], props.pieSize / 10, props.pieSize / 2, props.pieSize), props => props.progress && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.500')));
const PieHalfCircleLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PieHalfCircle).withConfig({
  displayName: "StepsProgress__PieHalfCircleLeft",
  componentId: "sc-1xgfvkb-11"
})(["", ""], props => props.progress && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["transform:rotate(", "deg);"], props.progress * 3.6));
const PieHalfCircleRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PieHalfCircle).withConfig({
  displayName: "StepsProgress__PieHalfCircleRight",
  componentId: "sc-1xgfvkb-12"
})(["", ""], props => props.progress && props.progress > 50 ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["transform:rotate(180deg);"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:none;"]));

const getBubbleContent = (idx, checked, disabled, focused, loading) => {
  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      color: checked ? '#FFFFFF' : 'primary.700',
      size: 14
    });
  } else if (checked) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__.Check, {
      color: "white",
      size: 14
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Circle, {
    disabled: disabled,
    checked: checked,
    focus: focused,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("circle", {
      cx: "50%",
      cy: "50%",
      r: "16px"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("text", {
      x: "50%",
      y: "51%",
      dominantBaseline: "middle",
      textAnchor: "middle",
      children: idx + 1
    })]
  });
};
/**
 * Shows numerated steps circles that can be clicked.
 */


const StepsProgress = ({
  steps,
  disabledStepNames,
  children,
  focus,
  loadingStep,
  onStepSelect,
  allCompleted,
  stepWidth,
  viewport
}) => {
  const focusIdx = focus ? steps.findIndex(step => step.name === focus.name) : -1;
  const mobileStepIdx = allCompleted ? steps.length - 1 : focusIdx > -1 ? focusIdx : 0;
  const mobileNextStepName = mobileStepIdx < steps.length - 1 ? steps[mobileStepIdx + 1].name : null;
  const mobileNextStepIdx = mobileNextStepName ? steps.findIndex(step => step.name === mobileNextStepName) : -1;
  const mobileNextStep = mobileNextStepIdx !== -1 && steps[mobileNextStepIdx];
  const progress = allCompleted ? 100 : 100 / steps.length * (mobileStepIdx + 1);
  const bgColor = '#D9DBDD';
  const pieSize = '56';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepsOuter, {
    "data-cy": "steps-progress",
    children: [(viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL || viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      display: ['block', null, 'none'],
      width: "100%",
      "data-cy": "progress-destkop",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepMobile, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepsMobileLeft, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            color: "black.900",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "26px",
            mb: 1,
            children: steps[mobileStepIdx].label || steps[mobileStepIdx].name
          }), mobileNextStep && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            color: "black.700",
            fontSize: "12px",
            lineHeight: "18px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "StepsProgress.mobile.next",
              defaultMessage: [{
                "type": 0,
                "value": "Next: "
              }, {
                "type": 1,
                "value": "stepName"
              }],
              values: {
                stepName: mobileNextStep.label || mobileNextStep.name
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepsMobileRight, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PieProgressWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PieProgress, {
              progress: progress,
              pieSize: pieSize,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PieHalfCircleLeft, {
                progress: progress,
                pieSize: pieSize
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PieHalfCircleRight, {
                progress: progress,
                pieSize: pieSize
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PieShadow, {
              pieSize: pieSize,
              bgColor: bgColor
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            color: "black.700",
            fontSize: "12px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "StepsProgress.mobile.status",
              defaultMessage: [{
                "type": 1,
                "value": "from"
              }, {
                "type": 0,
                "value": " of "
              }, {
                "type": 1,
                "value": "to"
              }],
              values: {
                from: mobileStepIdx + 1,
                to: steps.length
              }
            })
          })]
        })]
      })
    }), (viewport !== _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL || viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      display: ['none', null, 'flex'],
      "data-cy": "progress-destkop",
      children: steps.map((step, idx) => {
        const stepName = step.name;
        const checked = idx < focusIdx || allCompleted;
        const focused = idx === focusIdx;
        const disabled = disabledStepNames.includes(stepName);
        const loading = loadingStep && stepName === loadingStep.name;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledFlex, {
          "data-cy": `progress-step-${stepName}`,
          flexDirection: "column",
          alignItems: "center",
          "data-disabled": disabled,
          $_css: stepWidth,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledFlex2, {
            alignItems: "center",
            mb: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SeparatorLine, {
              active: checked || focused,
              transparent: idx === 0
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Bubble, {
              disabled: disabled,
              onClick: disabled ? undefined : onStepSelect && (() => onStepSelect(step)),
              checked: checked,
              focus: focused,
              children: getBubbleContent(idx, checked, disabled, focused, loading)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SeparatorLine, {
              active: checked,
              transparent: idx === steps.length - 1
            })]
          }), children && children({
            step,
            checked,
            focused
          })]
        }, stepName);
      })
    })]
  });
};

StepsProgress.defaultProps = {
  focused: null,
  loadingStep: null,
  disabledStepNames: [],
  stepWidth: '100%'
};
StepsProgress.__docgenInfo = {
  "description": "Shows numerated steps circles that can be clicked.",
  "methods": [],
  "displayName": "StepsProgress",
  "props": {
    "focused": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "required": false
    },
    "loadingStep": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "description": "Step will show a loading spinner",
      "type": {
        "name": "custom",
        "raw": "stepType"
      },
      "required": false
    },
    "disabledStepNames": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "description": "A list of steps that will be disabled (unclickable). Steps must exist in `steps`",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "stepWidth": {
      "defaultValue": {
        "value": "'100%'",
        "computed": false
      },
      "description": "Base step width",
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
    "steps": {
      "description": "The list of steps. Each step **must** be unique",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "stepType"
        }
      },
      "required": true
    },
    "children": {
      "description": "A renderer func. Gets passed an object like `{step, checked, focused}`",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "focus": {
      "description": "The currently focused step, or null if none focused yet",
      "type": {
        "name": "custom",
        "raw": "stepType"
      },
      "required": false
    },
    "onStepSelect": {
      "description": "Called when a step is clicked",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "allCompleted": {
      "description": "If true, all steps will be marked as completed",
      "type": {
        "name": "bool"
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(StepsProgress));

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress___StyledFlex",
  componentId: "sc-1xgfvkb-13"
})(p => ({
  flexGrow: 1,
  flexBasis: p.$_css
}));

var _StyledFlex2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress___StyledFlex2",
  componentId: "sc-1xgfvkb-14"
})({
  width: '100%'
});

/***/ }),

/***/ 48054:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20808);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_Envelope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95019);
/* harmony import */ var _styled_icons_boxicons_regular_Envelope__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Envelope__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_boxicons_regular_Planet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46529);
/* harmony import */ var _styled_icons_boxicons_regular_Planet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Planet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_boxicons_regular_Receipt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43891);
/* harmony import */ var _styled_icons_boxicons_regular_Receipt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Receipt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55457);
/* harmony import */ var _styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_fa_solid_MoneyCheckAlt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87584);
/* harmony import */ var _styled_icons_fa_solid_MoneyCheckAlt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_MoneyCheckAlt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87208);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80950);
/* harmony import */ var _styled_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33651);
/* harmony import */ var _styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_icons_remix_line_Stack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38164);
/* harmony import */ var _styled_icons_remix_line_Stack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_remix_line_Stack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5700);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25896);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(66120);
/* harmony import */ var _AddFundsBtn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(77271);
/* harmony import */ var _ApplyToHostBtn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(470);
/* harmony import */ var _AssignVirtualCardBtn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69715);
/* harmony import */ var _ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(58933);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(69078);
/* harmony import */ var _CreateVirtualCardBtn__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(86983);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(92129);
/* harmony import */ var _RequestVirtualCardBtn__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(96177);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(87268);
/* harmony import */ var _StyledDropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(206);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(173);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(90998);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(50423);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddFundsBtn__WEBPACK_IMPORTED_MODULE_16__, _ApplyToHostBtn__WEBPACK_IMPORTED_MODULE_17__, _AssignVirtualCardBtn__WEBPACK_IMPORTED_MODULE_18__, _ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_19__, _CreateVirtualCardBtn__WEBPACK_IMPORTED_MODULE_21__, _RequestVirtualCardBtn__WEBPACK_IMPORTED_MODULE_24__]);
([_AddFundsBtn__WEBPACK_IMPORTED_MODULE_16__, _ApplyToHostBtn__WEBPACK_IMPORTED_MODULE_17__, _AssignVirtualCardBtn__WEBPACK_IMPORTED_MODULE_18__, _ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_19__, _CreateVirtualCardBtn__WEBPACK_IMPORTED_MODULE_21__, _RequestVirtualCardBtn__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






























 //  Styled components



const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_12___default()('li').withConfig({
  displayName: "ActionsMenu__MenuItem",
  componentId: "sc-1bycej1-0"
})(["display:flex;align-items:center;&,a,button{width:100%;text-align:left;font-style:normal;font-weight:500;font-size:13px;line-height:16px;letter-spacing:-0.4px;outline:none;@media (max-width:40em){font-size:14px;}&:not(:hover){color:#313233;}&:hover:not(:disabled){background:white;color:", ";&:not(:active){background:white;text-decoration:underline;}}&:focus{box-shadow:none;outline:none;background:white;text-shadow:0px 0px 1px black;}&:disabled{color:#8c8c8c;}}a,button{&:not(:active){margin-right:24px;}&:active{outline:1px solid #e8e9eb;margin-left:12px;margin-right:12px;background:white;}}svg{margin-right:8px;fill:", ";color:", ";}", ""], props => props.theme.colors.black[800], props => props.theme.colors.primary[600], props => props.theme.colors.primary[600], props => props.isHiddenOnMobile && (0,styled_components__WEBPACK_IMPORTED_MODULE_12__.css)(["@media screen and (min-width:40em){display:none;}"]));
const ActionsDropdown = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_StyledDropdown__WEBPACK_IMPORTED_MODULE_26__/* .Dropdown */ .Lt).withConfig({
  displayName: "ActionsMenu__ActionsDropdown",
  componentId: "sc-1bycej1-1"
})(["", "{padding:8px 0;}@media screen and (min-width:40em) and (max-width:88em){", "{right:50px;}}@media (max-width:40em){", "{display:none !important;}", "{display:block;position:relative;box-shadow:none;border:none;padding-top:0;text-transform:uppercase;button{text-transform:uppercase;}svg{margin-right:16px;}}}", ""], _StyledDropdown__WEBPACK_IMPORTED_MODULE_26__/* .DropdownContent */ .Nv, _StyledDropdown__WEBPACK_IMPORTED_MODULE_26__/* .DropdownContent */ .Nv, _StyledDropdown__WEBPACK_IMPORTED_MODULE_26__/* .DropdownArrow */ .Wi, _StyledDropdown__WEBPACK_IMPORTED_MODULE_26__/* .DropdownContent */ .Nv, props => props.$isHiddenOnNonMobile && (0,styled_components__WEBPACK_IMPORTED_MODULE_12__.css)(["@media screen and (min-width:40em){display:none;}"]));
const StyledActionButton = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_ActionButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).attrs({
  isSecondary: true
}).withConfig({
  displayName: "ActionsMenu__StyledActionButton",
  componentId: "sc-1bycej1-2"
})(["svg{stroke-width:2;}span{vertical-align:middle;margin-right:4px;}@media (max-width:40em){cursor:none;pointer-events:none;}"]);
const StyledChevronDown = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_7__.ChevronDown).withConfig({
  displayName: "ActionsMenu__StyledChevronDown",
  componentId: "sc-1bycej1-3"
})(["@media (max-width:40em){display:none;}"]);
const ITEM_PADDING = '11px 14px';

const CollectiveNavbarActionsMenu = ({
  collective,
  callsToAction,
  hiddenActionForNonMobile,
  LoggedInUser
}) => {
  const enabledCTAs = Object.keys(lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default()(callsToAction, Boolean));
  const isEmpty = enabledCTAs.length < 1;
  const hasOnlyOneHiddenCTA = enabledCTAs.length === 1 && hiddenActionForNonMobile === enabledCTAs[0]; // Do not render the menu if there are no available CTAs

  if (isEmpty) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
    display: hasOnlyOneHiddenCTA ? ['flex', 'none'] : 'flex',
    alignItems: "center",
    order: [-1, 0],
    borderTop: ['1px solid #e1e1e1', 'none'],
    ml: 1,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
      px: 1,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(ActionsDropdown, {
        trigger: "click",
        $isHiddenOnNonMobile: enabledCTAs.length <= 2,
        children: ({
          triggerProps,
          dropdownProps
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
            alignItems: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
              display: ['block', 'none'],
              width: '32px',
              ml: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                borderStyle: "solid",
                borderColor: "primary.600"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(StyledActionButton, _objectSpread(_objectSpread({
              "data-cy": "collective-navbar-actions-btn",
              my: 2
            }, triggerProps), {}, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                  id: "CollectivePage.NavBar.ActionMenu.Actions",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Actions"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(StyledChevronDown, {
                size: "14px"
              })]
            }))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", _objectSpread(_objectSpread({}, dropdownProps), {}, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledDropdown__WEBPACK_IMPORTED_MODULE_26__/* .DropdownArrow */ .Wi, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledDropdown__WEBPACK_IMPORTED_MODULE_26__/* .DropdownContent */ .Nv, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Box */ .xu, {
                as: "ul",
                p: 0,
                m: 0,
                minWidth: 184,
                children: [callsToAction.hasSettings && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                  py: 1,
                  isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.SETTINGS */ .k.SETTINGS,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                    as: _Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                    href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_14__/* .getSettingsRoute */ .aT)(collective),
                    p: ITEM_PADDING,
                    "data-cy": "edit-collective-btn",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_9__.Settings, {
                      size: 20
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                      id: "Settings",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Settings"
                      }]
                    })]
                  })
                }), callsToAction.hasSubmitExpense && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                  isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.SUBMIT_EXPENSE */ .k.SUBMIT_EXPENSE,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                    "data-cy": "submit-expense-dropdown",
                    as: _Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                    href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_14__/* .getCollectivePageRoute */ .x0)(collective)}/expenses/new`,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                      p: ITEM_PADDING,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_boxicons_regular_Receipt__WEBPACK_IMPORTED_MODULE_4__.Receipt, {
                        size: "20px"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                        id: "ExpenseForm.Submit",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Submit expense"
                        }]
                      })]
                    })
                  })
                }), callsToAction.hasRequestGrant && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                  py: 1,
                  isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.REQUEST_GRANT */ .k.REQUEST_GRANT,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                    as: _Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                    href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_14__/* .getCollectivePageRoute */ .x0)(collective)}/expenses/new`,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                      p: ITEM_PADDING,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_fa_solid_MoneyCheckAlt__WEBPACK_IMPORTED_MODULE_6__.MoneyCheckAlt, {
                        size: "20px"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                        id: "ExpenseForm.Type.Request",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Request Grant"
                        }]
                      })]
                    })
                  })
                }), callsToAction.hasManageSubscriptions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                  isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.MANAGE_SUBSCRIPTIONS */ .k.MANAGE_SUBSCRIPTIONS,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                    as: _Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                    href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_14__/* .getCollectivePageRoute */ .x0)(collective)}/manage-contributions`,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                      p: ITEM_PADDING,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_remix_line_Stack__WEBPACK_IMPORTED_MODULE_10__.Stack, {
                        size: "20px"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx("span", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                          id: "menu.subscriptions",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Manage Contributions"
                          }]
                        })
                      })]
                    })
                  })
                }), callsToAction.hasContribute && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                  py: 1,
                  isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.CONTRIBUTE */ .k.CONTRIBUTE,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                    as: _Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                    href: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_13__/* .getContributeRoute */ .oe)(collective),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                      p: ITEM_PADDING,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_boxicons_regular_Planet__WEBPACK_IMPORTED_MODULE_3__.Planet, {
                        size: "20px"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                        id: "menu.contributeMoney",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Contribute Money"
                        }]
                      })]
                    })
                  })
                }), callsToAction.addFunds && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_AddFundsBtn__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                  collective: collective,
                  children: btnProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                    py: 1,
                    isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.ADD_FUNDS */ .k.ADD_FUNDS,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                      borderRadius: 0,
                      p: ITEM_PADDING,
                      isBorderless: true
                    }, btnProps), {}, {
                      "data-cy": "add-funds-btn",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_8__.AttachMoney, {
                        size: "20px"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                          id: "menu.addFunds",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Add Funds"
                          }]
                        })
                      })]
                    }))
                  })
                }), callsToAction.hasContact && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                  py: 1,
                  isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.CONTACT */ .k.CONTACT,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    collective: collective,
                    LoggedInUser: LoggedInUser,
                    children: btnProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, btnProps), {}, {
                      borderRadius: 0,
                      p: ITEM_PADDING,
                      isBorderless: true,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_boxicons_regular_Envelope__WEBPACK_IMPORTED_MODULE_2__.Envelope, {
                        size: "20px"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                        id: "Contact",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Contact"
                        }]
                      })]
                    }))
                  })
                }), callsToAction.hasApply && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                  py: 1,
                  isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.APPLY */ .k.APPLY,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_ApplyToHostBtn__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    hostSlug: collective.slug,
                    isHidden: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.APPLY */ .k.APPLY,
                    buttonProps: {
                      isBorderless: true,
                      p: ITEM_PADDING
                    }
                  })
                }), callsToAction.createVirtualCard && collective.isApproved && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_CreateVirtualCardBtn__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                  collective: collective,
                  host: collective.host,
                  children: btnProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                    py: 1,
                    isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.CREATE_CARD */ .k.CREATE_CARD,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                      borderRadius: 0,
                      p: ITEM_PADDING,
                      isBorderless: true
                    }, btnProps), {}, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_5__.CreditCard, {
                        size: "20px"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                          id: "xLybrm",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Create a Card"
                          }]
                        })
                      })]
                    }))
                  })
                }), callsToAction.assignVirtualCard && collective.isApproved && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_AssignVirtualCardBtn__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                  collective: collective,
                  host: collective.host,
                  children: btnProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                    py: 1,
                    isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.ASSIGN_CARD */ .k.ASSIGN_CARD,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                      borderRadius: 0,
                      p: ITEM_PADDING,
                      isBorderless: true
                    }, btnProps), {}, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_5__.CreditCard, {
                        size: "20px"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                          id: "menu.assignCard",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Assign a Card"
                          }]
                        })
                      })]
                    }))
                  })
                }), callsToAction.requestVirtualCard && collective.isApproved && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_RequestVirtualCardBtn__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  collective: collective,
                  host: collective.host,
                  children: btnProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(MenuItem, {
                    py: 1,
                    isHiddenOnMobile: hiddenActionForNonMobile === _menu__WEBPACK_IMPORTED_MODULE_30__/* .NAVBAR_ACTION_TYPE.ASSIGN_CARD */ .k.ASSIGN_CARD,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                      borderRadius: 0,
                      p: ITEM_PADDING,
                      isBorderless: true
                    }, btnProps), {}, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_5__.CreditCard, {
                        size: "20px"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                          id: "Collective.VirtualCards.RequestCard",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Request a Card"
                          }]
                        })
                      })]
                    }))
                  })
                })]
              })
            })]
          }))]
        })
      })
    })
  });
};

CollectiveNavbarActionsMenu.defaultProps = {
  callsToAction: {},
  buttonsMinWidth: 100
};
CollectiveNavbarActionsMenu.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollectiveNavbarActionsMenu",
  "props": {
    "callsToAction": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "hasContact": {
            "name": "bool",
            "description": "Button to contact the collective",
            "required": false
          },
          "hasSubmitExpense": {
            "name": "bool",
            "description": "Submit new expense button",
            "required": false
          },
          "hasApply": {
            "name": "bool",
            "description": "Host's \"Apply\" button",
            "required": false
          },
          "hasDashboard": {
            "name": "bool",
            "description": "Host's dashboard",
            "required": false
          },
          "hasManageSubscriptions": {
            "name": "bool",
            "description": "Manage recurring contributions",
            "required": false
          },
          "hasRequestGrant": {
            "name": "bool",
            "description": "Request a grant from a fund",
            "required": false
          },
          "hasContribute": {
            "name": "bool",
            "description": "Contribute financially to a collective",
            "required": false
          },
          "addFunds": {
            "name": "bool",
            "description": "Add funds to a collective",
            "required": false
          },
          "createVirtualCard": {
            "name": "bool",
            "description": "Create new card for Collective",
            "required": false
          },
          "assignVirtualCard": {
            "name": "bool",
            "description": "Assign card to Collective",
            "required": false
          },
          "requestVirtualCard": {
            "name": "bool",
            "description": "Request card to Collective",
            "required": false
          },
          "hasSettings": {
            "name": "bool",
            "description": "Button to Edit the Collective",
            "required": false
          }
        }
      },
      "required": false
    },
    "buttonsMinWidth": {
      "defaultValue": {
        "value": "100",
        "computed": false
      },
      "required": false
    },
    "collective": {
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
            "required": true
          },
          "legacyId": {
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
          },
          "type": {
            "name": "string",
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "tiers": {
            "name": "array",
            "required": false
          },
          "isApproved": {
            "name": "bool",
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "hostFees": {
                "name": "bool",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "hiddenActionForNonMobile": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(NAVBAR_ACTION_TYPE)"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectiveNavbarActionsMenu);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h": () => (/* binding */ NavBarCategory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35073);
/* harmony import */ var react_scrollchor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollchor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_collective_sections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64453);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _StyledDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(206);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97585);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const IconIllustration = styled_components__WEBPACK_IMPORTED_MODULE_4___default().img.attrs({
  alt: ''
}).withConfig({
  displayName: "NavBarCategoryDropdown__IconIllustration",
  componentId: "sc-6bxcs7-0"
})(["width:32px;height:32px;"]);
const CategoryContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).attrs({
  px: [1, 3, 0]
}).withConfig({
  displayName: "NavBarCategoryDropdown__CategoryContainer",
  componentId: "sc-6bxcs7-1"
})(["display:block;width:100%;span{font-size:14px;line-height:16px;text-decoration:none;white-space:nowrap;color:", ";letter-spacing:0.06em;text-transform:uppercase;font-weight:500;&::after{display:block;content:attr(aria-label);font-weight:700;height:1px;color:transparent;overflow:hidden;visibility:hidden;}}&:focus,&:hover,&:focus span,&:hover span{text-decoration:none;font-weight:700;outline:0;color:", ";}&::after{content:'';display:block;width:0%;height:3px;background:", ";transition:width 0.3s;float:center;opacity:0;}", " @media (max-width:64em){border-top:1px solid #e1e1e1;&::after{display:none;}}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.500'), props => props.isSelected && (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)(["@media (min-width:64em){&::after{width:100%;margin:0 auto;opacity:1;}}"]));
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('li').withConfig({
  displayName: "NavBarCategoryDropdown__MenuItem",
  componentId: "sc-6bxcs7-2"
})(["display:flex;align-items:center;& > a{padding:12px;@media (max-width:40em){padding-top:4px;}}&,& > a{width:100%;text-align:left;font-style:normal;font-size:13px;font-weight:500;line-height:16px;letter-spacing:-0.4px;outline:none;&:hover,&:focus{text-decoration:underline;}&:not(:hover){color:#313233;}}"]);
const CategoryDropdown = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_StyledDropdown__WEBPACK_IMPORTED_MODULE_9__/* .Dropdown */ .Lt).withConfig({
  displayName: "NavBarCategoryDropdown__CategoryDropdown",
  componentId: "sc-6bxcs7-3"
})(["@media (max-width:64em){", "{display:none !important;}", "{display:block;position:relative;box-shadow:none;border:none;padding-left:48px;}}"], _StyledDropdown__WEBPACK_IMPORTED_MODULE_9__/* .DropdownArrow */ .Wi, _StyledDropdown__WEBPACK_IMPORTED_MODULE_9__/* .DropdownContent */ .Nv);

const getLinkProps = (useAnchor, collective, category) => {
  const anchor = `#category-${category}`;

  if (useAnchor) {
    return {
      href: anchor
    };
  } else {
    return {
      as: _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
      href: `/${collective.slug}${anchor}`
    };
  }
};

const NavBarCategory = ({
  category,
  collective
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const categoryDetails = (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_5__/* .getSectionsCategoryDetails */ .iJ)(intl, collective, category);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      alignItems: "center",
      mr: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(IconIllustration, {
        src: categoryDetails.img || _lib_collective_sections__WEBPACK_IMPORTED_MODULE_5__/* .SECTIONS_CATEGORY_ICON.CONTRIBUTE */ .yz.CONTRIBUTE
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      alignItems: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
        textTransform: "uppercase",
        fontSize: "14px",
        fontWeight: "500",
        color: "black.800",
        letterSpacing: "0.02em",
        "aria-label": categoryDetails.title,
        children: categoryDetails.title
      })
    })]
  });
};

const NavBarScrollContainer = ({
  useAnchor,
  category,
  children
}) => useAnchor ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_scrollchor__WEBPACK_IMPORTED_MODULE_3__.Scrollchor, {
  to: `#category-${category}`,
  children: children
}) : children;

const NavBarCategoryDropdown = ({
  useAnchor,
  collective,
  category,
  isSelected,
  links
}) => {
  const displayedLinks = links.filter(link => !link.hide);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(CategoryDropdown, {
    trigger: "hover",
    tabIndex: "-1",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(NavBarScrollContainer, {
      category: category,
      useAnchor: useAnchor,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(CategoryContainer, _objectSpread(_objectSpread({
        mr: [0, null, 3],
        isSelected: isSelected
      }, getLinkProps(useAnchor, collective, category)), {}, {
        onClick: e => {
          // Remove focus to make sure dropdown gets closed
          if (document.activeElement?.contains(e.target)) {
            document.activeElement.blur();
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          pt: "15px",
          pb: "14px",
          px: [3, 1, 3, 1],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(NavBarCategory, {
            category: category,
            collective: collective
          })
        })
      }))
    }), displayedLinks.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledDropdown__WEBPACK_IMPORTED_MODULE_9__/* .DropdownArrow */ .Wi, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledDropdown__WEBPACK_IMPORTED_MODULE_9__/* .DropdownContent */ .Nv, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          as: "ul",
          p: 0,
          m: 0,
          minWidth: 184,
          children: displayedLinks.map(({
            route,
            title
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(MenuItem, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              as: _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
              href: route,
              children: title
            })
          }, route))
        })
      })]
    })]
  });
};

NavBarCategoryDropdown.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NavBarCategoryDropdown",
  "props": {
    "category": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(NAVBAR_CATEGORIES)"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "isSelected": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "useAnchor": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "links": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "route": {
              "name": "string",
              "required": false
            },
            "title": {
              "name": "node",
              "required": false
            },
            "hide": {
              "name": "bool",
              "required": false
            }
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBarCategoryDropdown);
NavBarCategory.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NavBarCategory",
  "props": {
    "category": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(NAVBAR_CATEGORIES)"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};

/***/ }),

/***/ 38208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "i": () => (/* binding */ NAVBAR_HEIGHT)
/* harmony export */ });
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22217);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20808);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_boxicons_regular_DotsVerticalRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93842);
/* harmony import */ var _styled_icons_boxicons_regular_DotsVerticalRounded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_DotsVerticalRounded__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_boxicons_regular_Envelope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95019);
/* harmony import */ var _styled_icons_boxicons_regular_Envelope__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Envelope__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_boxicons_regular_Planet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46529);
/* harmony import */ var _styled_icons_boxicons_regular_Planet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Planet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_icons_boxicons_regular_Receipt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43891);
/* harmony import */ var _styled_icons_boxicons_regular_Receipt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Receipt__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled_icons_fa_solid_MoneyCheckAlt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87584);
/* harmony import */ var _styled_icons_fa_solid_MoneyCheckAlt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_MoneyCheckAlt__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80950);
/* harmony import */ var _styled_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20384);
/* harmony import */ var _styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33651);
/* harmony import */ var _styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styled_icons_remix_line_Stack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38164);
/* harmony import */ var _styled_icons_remix_line_Stack__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_remix_line_Stack__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5700);
/* harmony import */ var _lib_collective_sections__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64453);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_roles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(98216);
/* harmony import */ var _lib_expenses__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(45624);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(32651);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(55348);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(62131);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(25896);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(66120);
/* harmony import */ var _AddFundsBtn__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(77271);
/* harmony import */ var _ApplyToHostBtn__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(470);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(11194);
/* harmony import */ var _collective_page_constants__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(24839);
/* harmony import */ var _ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(58933);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(29242);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(87268);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(29925);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(90998);
/* harmony import */ var _ActionsMenu__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(48054);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(97585);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(50423);
/* harmony import */ var _NavBarCategoryDropdown__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(77092);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddFundsBtn__WEBPACK_IMPORTED_MODULE_29__, _ApplyToHostBtn__WEBPACK_IMPORTED_MODULE_30__, _ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_33__, _ActionsMenu__WEBPACK_IMPORTED_MODULE_42__]);
([_AddFundsBtn__WEBPACK_IMPORTED_MODULE_29__, _ApplyToHostBtn__WEBPACK_IMPORTED_MODULE_30__, _ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_33__, _ActionsMenu__WEBPACK_IMPORTED_MODULE_42__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














































const DisableGlobalScrollOnMobile = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__.createGlobalStyle)(["@media (max-width:64em){body{overflow:hidden;}#footer{display:none;}}"]);
const NavBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_16___default().div.withConfig({
  displayName: "collective-navbar__NavBarContainer",
  componentId: "sc-6vapjf-0"
})(["position:sticky;top:0;z-index:999;background:white;box-shadow:0px 6px 10px -5px rgba(214,214,214,0.5);"]); // CSS hack to target only Safari
// Hotfix for https://github.com/opencollective/opencollective/issues/4403
// https://stackoverflow.com/questions/16348489/is-there-a-way-to-apply-styles-to-safari-only

const NavBarContainerGlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_16__.createGlobalStyle)(["_::-webkit-full-page-media,_:future,:root ", "{position:relative;}"], NavBarContainer);
const NavbarContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_16___default()(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z).withConfig({
  displayName: "collective-navbar__NavbarContentContainer",
  componentId: "sc-6vapjf-1"
})(["background:white;display:flex;justify-content:flex-start;"]);
const AvatarBox = styled_components__WEBPACK_IMPORTED_MODULE_16___default()(_Grid__WEBPACK_IMPORTED_MODULE_35__/* .Box */ .xu).withConfig({
  displayName: "collective-navbar__AvatarBox",
  componentId: "sc-6vapjf-2"
})(["position:relative;&::before{content:'';height:24px;position:absolute;right:0;top:0;bottom:0;margin-top:auto;margin-bottom:auto;border-right:2px solid rgba(214,214,214,1);}"]);
const BackButtonAndAvatar = styled_components__WEBPACK_IMPORTED_MODULE_16___default().div.withConfig({
  displayName: "collective-navbar__BackButtonAndAvatar",
  componentId: "sc-6vapjf-3"
})(["display:flex;@media (min-width:64em){&[data-hide-on-desktop='false']{width:48px;opacity:1;visibility:visible;margin-right:8px;transition:opacity 0.1s ease-out,visibility 0.2s ease-out,margin 0.075s,width 0.075s ease-in-out;}&[data-hide-on-desktop='true']{width:0px;margin-right:0px;visibility:hidden;opacity:0;transition:opacity 0.1s ease-out,visibility 0.2s ease-out,margin 0.075s,width 0.075s ease-in-out;}}"]);
const InfosContainer = styled_components__WEBPACK_IMPORTED_MODULE_16___default()(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z).withConfig({
  displayName: "collective-navbar__InfosContainer",
  componentId: "sc-6vapjf-4"
})(["display:flex;align-items:center;justify-content:space-between;min-width:0;"]);
const CollectiveName = styled_components__WEBPACK_IMPORTED_MODULE_16___default()(_LinkCollective__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z).attrs({
  fontSize: ['16px', '18px'],
  color: 'black.800'
}).withConfig({
  displayName: "collective-navbar__CollectiveName",
  componentId: "sc-6vapjf-5"
})(["", " letter-spacing:-0.8px;margin:8px;min-width:0;text-decoration:none;text-align:center;font-weight:500;line-height:24px;&,a{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}&:not(:hover){color:#313233;}"], styled_system__WEBPACK_IMPORTED_MODULE_17__.display);
const CategoriesContainer = styled_components__WEBPACK_IMPORTED_MODULE_16___default()(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z).withConfig({
  displayName: "collective-navbar__CategoriesContainer",
  componentId: "sc-6vapjf-6"
})(["background-color:#ffffff;max-height:calc(100vh - 70px);flex-shrink:2;flex-grow:1;overflow:auto;@media screen and (max-width:40em){max-height:none;flex-shrink:0;}@media screen and (min-width:40em) and (max-width:64em){border:1px solid rgba(214,214,214,0.3);border-radius:0px 0px 0px 8px;box-shadow:0px 6px 10px -5px rgba(214,214,214,0.5);position:absolute;right:0;top:64px;width:0;visibility:hidden;opacity:0;transition:opacity 0.4s ease-out,visibility 0.4s ease-out,width 0.2s ease-out;", "}"], props => props.isExpanded && (0,styled_components__WEBPACK_IMPORTED_MODULE_16__.css)(["width:400px;visibility:visible;opacity:1;"]));
const accountPermissionsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query AccountPermissions($slug: String!) {
    account(slug: $slug) {
      id
      permissions {
        id
        addFunds {
          allowed
          reason
        }
      }
    }
  }
`;
const MobileCategoryContainer = styled_components__WEBPACK_IMPORTED_MODULE_16___default()(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z).attrs({
  display: ['block', null, null, 'none']
}).withConfig({
  displayName: "collective-navbar__MobileCategoryContainer",
  componentId: "sc-6vapjf-7"
})(["animation:", " 0.2s;margin-left:8px;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_40__/* .fadeIn */ .Ji);
/** Displayed on mobile & tablet to toggle the menu */

const ExpandMenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_16___default()(_styled_icons_boxicons_regular_DotsVerticalRounded__WEBPACK_IMPORTED_MODULE_5__.DotsVerticalRounded).attrs({
  size: 28
}).withConfig({
  displayName: "collective-navbar__ExpandMenuIcon",
  componentId: "sc-6vapjf-8"
})(["cursor:pointer;margin-right:4px;flex:0 0 28px;color:", ";&:hover{background:radial-gradient(transparent 14px,white 3px),linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)),linear-gradient(", ",", ");}&:active{background:radial-gradient(", " 14px,white 3px);color:", ";}@media (min-width:64em){display:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__.themeGet)('colors.white.full'));
const CloseMenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_16___default()(_styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__.Close).attrs({
  size: 28
}).withConfig({
  displayName: "collective-navbar__CloseMenuIcon",
  componentId: "sc-6vapjf-9"
})(["cursor:pointer;margin-right:4px;flex:0 0 28px;color:", ";&:hover{background:radial-gradient(transparent 14px,white 3px),linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)),linear-gradient(", ",", ");}&:active{background:radial-gradient(", " 14px,white 3px);color:", ";}@media (min-width:64em){display:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_14__.themeGet)('colors.white.full'));

const isFeatureAvailable = (collective, feature) => {
  const status = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(collective.features, feature);

  return status === 'ACTIVE' || status === 'AVAILABLE';
};

const getHasContribute = (collective, sections, isAdmin) => {
  return [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_20__/* .CollectiveType.FUND */ .eV.FUND, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_20__/* .CollectiveType.PROJECT */ .eV.PROJECT].includes(collective.type) && collective.isActive && (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_18__/* .getContributeRoute */ .oe)(collective) && (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_19__/* .isSectionEnabled */ .sy)(sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_32__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE, isAdmin);
};

const getDefaultCallsToActions = (collective, sections, isAdmin, isAccountant, isHostAdmin, LoggedInUser, isAllowedAddFunds) => {
  if (!collective) {
    return {};
  }

  const {
    features,
    host
  } = collective;
  return {
    hasContribute: getHasContribute(collective, sections, isAdmin),
    hasContact: isFeatureAvailable(collective, 'CONTACT_FORM'),
    hasApply: isFeatureAvailable(collective, 'RECEIVE_HOST_APPLICATIONS'),
    hasSubmitExpense: isFeatureAvailable(collective, 'RECEIVE_EXPENSES') && (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_18__/* .expenseSubmissionAllowed */ .cm)(collective, LoggedInUser),
    hasManageSubscriptions: isAdmin && lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(features, 'RECURRING_CONTRIBUTIONS') === 'ACTIVE',
    hasDashboard: isAdmin && isFeatureAvailable(collective, 'HOST_DASHBOARD'),
    hasRequestGrant: (0,_lib_expenses__WEBPACK_IMPORTED_MODULE_23__/* .isSupportedExpenseType */ .wx)(collective, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_21__/* ["default"].GRANT */ .Z.GRANT) && (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_18__/* .expenseSubmissionAllowed */ .cm)(collective, LoggedInUser),
    addFunds: isAllowedAddFunds,
    createVirtualCard: isHostAdmin && isFeatureAvailable(host, 'VIRTUAL_CARDS'),
    assignVirtualCard: isHostAdmin && isFeatureAvailable(host, 'VIRTUAL_CARDS'),
    requestVirtualCard: isAdmin && isFeatureAvailable(collective, 'REQUEST_VIRTUAL_CARDS'),
    hasSettings: isAdmin || isAccountant
  };
};
/**
 * Returns the main CTA that should be displayed as a button outside of the action menu in this component.
 */


const getMainAction = (collective, callsToAction, LoggedInUser) => {
  if (!collective || !callsToAction) {
    return null;
  } // Order of the condition defines main call to action: first match gets displayed


  if (callsToAction.includes(_menu__WEBPACK_IMPORTED_MODULE_44__/* .NAVBAR_ACTION_TYPE.SETTINGS */ .k.SETTINGS)) {
    return {
      type: _menu__WEBPACK_IMPORTED_MODULE_44__/* .NAVBAR_ACTION_TYPE.SETTINGS */ .k.SETTINGS,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Link__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
        href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_27__/* .getSettingsRoute */ .aT)(collective),
        "data-cy": "edit-collective-btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_ActionButton__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
          tabIndex: "-1",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_styled_icons_material_Settings__WEBPACK_IMPORTED_MODULE_12__.Settings, {
            size: "1em"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Text__WEBPACK_IMPORTED_MODULE_41__/* .Span */ .Dr, {
            ml: 2,
            children: collective.isHost ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.FormattedMessage, {
              id: "AdminPanel.button",
              defaultMessage: [{
                "type": 0,
                "value": "Admin"
              }]
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.FormattedMessage, {
              id: "Settings",
              defaultMessage: [{
                "type": 0,
                "value": "Settings"
              }]
            })
          })]
        })
      })
    };
  } else if (callsToAction.includes('hasContribute')) {
    return {
      type: _menu__WEBPACK_IMPORTED_MODULE_44__/* .NAVBAR_ACTION_TYPE.CONTRIBUTE */ .k.CONTRIBUTE,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Link__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
        href: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_18__/* .getContributeRoute */ .oe)(collective),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_ActionButton__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
          tabIndex: "-1",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_styled_icons_boxicons_regular_Planet__WEBPACK_IMPORTED_MODULE_7__.Planet, {
            size: "1em"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Text__WEBPACK_IMPORTED_MODULE_41__/* .Span */ .Dr, {
            ml: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.FormattedMessage, {
              id: "menu.contributeMoney",
              defaultMessage: [{
                "type": 0,
                "value": "Contribute Money"
              }]
            })
          })]
        })
      })
    };
  } else if (callsToAction.includes('hasApply')) {
    return {
      type: _menu__WEBPACK_IMPORTED_MODULE_44__/* .NAVBAR_ACTION_TYPE.APPLY */ .k.APPLY,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_ApplyToHostBtn__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
        hostSlug: collective.slug,
        buttonRenderer: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, _objectSpread({}, props))
      })
    };
  } else if (callsToAction.includes('hasRequestGrant')) {
    return {
      type: _menu__WEBPACK_IMPORTED_MODULE_44__/* .NAVBAR_ACTION_TYPE.REQUEST_GRANT */ .k.REQUEST_GRANT,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Link__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_27__/* .getCollectivePageRoute */ .x0)(collective)}/expenses/new`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_ActionButton__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
          tabIndex: "-1",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_styled_icons_fa_solid_MoneyCheckAlt__WEBPACK_IMPORTED_MODULE_9__.MoneyCheckAlt, {
            size: "1em"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Text__WEBPACK_IMPORTED_MODULE_41__/* .Span */ .Dr, {
            ml: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.FormattedMessage, {
              id: "ExpenseForm.Type.Request",
              defaultMessage: [{
                "type": 0,
                "value": "Request Grant"
              }]
            })
          })]
        })
      })
    };
  } else if (callsToAction.includes('hasSubmitExpense')) {
    return {
      type: _menu__WEBPACK_IMPORTED_MODULE_44__/* .NAVBAR_ACTION_TYPE.SUBMIT_EXPENSE */ .k.SUBMIT_EXPENSE,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Link__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_27__/* .getCollectivePageRoute */ .x0)(collective)}/expenses/new`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_ActionButton__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
          tabIndex: "-1",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_styled_icons_boxicons_regular_Receipt__WEBPACK_IMPORTED_MODULE_8__.Receipt, {
            size: "1em"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Text__WEBPACK_IMPORTED_MODULE_41__/* .Span */ .Dr, {
            ml: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.FormattedMessage, {
              id: "menu.submitExpense",
              defaultMessage: [{
                "type": 0,
                "value": "Submit Expense"
              }]
            })
          })]
        })
      })
    };
  } else if (callsToAction.includes('hasManageSubscriptions')) {
    return {
      type: _menu__WEBPACK_IMPORTED_MODULE_44__/* .NAVBAR_ACTION_TYPE.MANAGE_SUBSCRIPTIONS */ .k.MANAGE_SUBSCRIPTIONS,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Link__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_27__/* .getCollectivePageRoute */ .x0)(collective)}/manage-contributions`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_ActionButton__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
          tabIndex: "-1",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_styled_icons_remix_line_Stack__WEBPACK_IMPORTED_MODULE_13__.Stack, {
            size: "1em"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Text__WEBPACK_IMPORTED_MODULE_41__/* .Span */ .Dr, {
            ml: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.FormattedMessage, {
              id: "menu.subscriptions",
              defaultMessage: [{
                "type": 0,
                "value": "Manage Contributions"
              }]
            })
          })]
        })
      })
    };
  } else if (callsToAction.includes('hasContact')) {
    return {
      type: _menu__WEBPACK_IMPORTED_MODULE_44__/* .NAVBAR_ACTION_TYPE.CONTACT */ .k.CONTACT,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_ContactCollectiveBtn__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
        collective: collective,
        LoggedInUser: LoggedInUser,
        children: btnProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_ActionButton__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, btnProps), {}, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_styled_icons_boxicons_regular_Envelope__WEBPACK_IMPORTED_MODULE_6__.Envelope, {
            size: "1em"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Text__WEBPACK_IMPORTED_MODULE_41__/* .Span */ .Dr, {
            ml: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.FormattedMessage, {
              id: "Contact",
              defaultMessage: [{
                "type": 0,
                "value": "Contact"
              }]
            })
          })]
        }))
      })
    };
  } else if (callsToAction.includes(_menu__WEBPACK_IMPORTED_MODULE_44__/* .NAVBAR_ACTION_TYPE.ADD_FUNDS */ .k.ADD_FUNDS) && collective.host) {
    return {
      type: _menu__WEBPACK_IMPORTED_MODULE_44__/* .NAVBAR_ACTION_TYPE.ADD_FUNDS */ .k.ADD_FUNDS,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_AddFundsBtn__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
        collective: collective,
        children: btnProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_ActionButton__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, btnProps), {}, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_styled_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_10__.AttachMoney, {
            size: "1em"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Text__WEBPACK_IMPORTED_MODULE_41__/* .Span */ .Dr, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.FormattedMessage, {
              id: "menu.addFunds",
              defaultMessage: [{
                "type": 0,
                "value": "Add Funds"
              }]
            })
          })]
        }))
      })
    };
  } else {
    return null;
  }
};

const NAVBAR_HEIGHT = [56, 64];
/**
 * The NavBar that displays all the individual sections.
 */

const CollectiveNavbar = ({
  collective,
  isAdmin,
  isLoading,
  sections: sectionsFromParent,
  selectedCategory,
  callsToAction,
  onCollectiveClick,
  isInHero,
  onlyInfos,
  showBackButton,
  useAnchorsForCategories,
  showSelectedCategoryOnMobile
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__.useIntl)();
  const [isExpanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z)();
  const isAccountant = LoggedInUser?.hasRole(_lib_constants_roles__WEBPACK_IMPORTED_MODULE_22__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT, collective);
  isAdmin = isAdmin || LoggedInUser?.isAdminOfCollective(collective);
  const isHostAdmin = LoggedInUser?.isHostAdmin(collective);
  const {
    data,
    dataLoading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(accountPermissionsQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_24__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: collective?.slug
    },
    skip: !collective?.slug
  });
  const loading = isLoading || dataLoading;
  const isAllowedAddFunds = data?.account?.permissions?.addFunds?.allowed;
  const sections = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => {
    return sectionsFromParent || (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_19__/* .getFilteredSectionsForCollective */ .vY)(collective, isAdmin, isHostAdmin);
  }, [sectionsFromParent, collective, isAdmin, isHostAdmin]);
  callsToAction = _objectSpread(_objectSpread({}, getDefaultCallsToActions(collective, sections, isAdmin, isAccountant, isHostAdmin, LoggedInUser, isAllowedAddFunds)), callsToAction);
  const actionsArray = Object.keys(lodash_pickBy__WEBPACK_IMPORTED_MODULE_1___default()(callsToAction, Boolean));
  const mainAction = getMainAction(collective, actionsArray, LoggedInUser);
  const secondAction = actionsArray.length === 2 && getMainAction(collective, lodash_without__WEBPACK_IMPORTED_MODULE_0___default()(actionsArray, mainAction?.type), LoggedInUser);
  const navbarRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const mainContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  /** This is to close the navbar dropdown menus (desktop)/slide-out menu (tablet)/non-collapsible menu (mobile)
   * when we click a category header to scroll down to (i.e. Connect) or sub-section page to open (i.e. Updates) */

  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(navbarRef, outside => {
    if (!outside && isExpanded) {
      setTimeout(() => {
        setExpanded(false);
      }, 500);
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(NavBarContainerGlobalStyle, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(NavBarContainer, {
      ref: mainContainerRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(NavbarContentContainer, {
        flexDirection: ['column', 'row'],
        px: [0, 3, null, _collective_page_constants__WEBPACK_IMPORTED_MODULE_32__/* .Dimensions.PADDING_X[1] */ .Db.PADDING_X[1]],
        mx: "auto",
        maxWidth: _collective_page_constants__WEBPACK_IMPORTED_MODULE_32__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
        maxHeight: "100vh",
        minHeight: NAVBAR_HEIGHT,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(InfosContainer, {
          px: [3, 0],
          py: [2, 1],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_35__/* .Flex */ .kC, {
            alignItems: "center",
            maxWidth: ['90%', '100%'],
            flex: "1 1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(BackButtonAndAvatar, {
              "data-hide-on-desktop": isInHero,
              children: [showBackButton && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                display: ['none', null, null, null, 'block'],
                position: "absolute",
                left: -30,
                children: collective && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Link__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                  href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_27__/* .getCollectivePageRoute */ .x0)(collective),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                    px: 1,
                    isBorderless: true,
                    children: "\u2190"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(AvatarBox, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                  collective: collective,
                  onClick: onCollectiveClick,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    borderRadius: "25%",
                    mr: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .ZP, {
                      collective: collective,
                      radius: 40
                    })
                  })
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              display: onlyInfos ? 'flex' : ['flex', null, null, 'none'],
              minWidth: 0,
              children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                height: 14,
                minWidth: 100
              }) : isInHero ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(CollectiveName, {
                  collective: collective,
                  display: ['block', 'none'],
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.FormattedMessage, {
                    id: "NavBar.ThisIsCollective",
                    defaultMessage: [{
                      "type": 0,
                      "value": "This is "
                    }, {
                      "type": 1,
                      "value": "collectiveName"
                    }, {
                      "type": 0,
                      "value": "'s page"
                    }],
                    values: {
                      collectiveName: collective.name
                    }
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(CollectiveName, {
                  collective: collective,
                  display: ['none', 'block']
                })]
              }) : selectedCategory && showSelectedCategoryOnMobile ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(MobileCategoryContainer, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_NavBarCategoryDropdown__WEBPACK_IMPORTED_MODULE_45__/* .NavBarCategory */ .h, {
                  collective: collective,
                  category: selectedCategory
                })
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(CollectiveName, {
                collective: collective,
                onClick: onCollectiveClick
              })
            })]
          }), !onlyInfos && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_35__/* .Box */ .xu, {
            display: ['block', 'none'],
            flex: "0 0 32px",
            children: isExpanded ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(CloseMenuIcon, {
              onClick: () => setExpanded(!isExpanded)
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(ExpandMenuIcon, {
              onClick: () => {
                mainContainerRef.current?.scrollIntoView(true);
                setExpanded(true);
              }
            })
          })]
        }), !onlyInfos && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
          overflowY: "auto",
          display: ['block', 'flex'],
          width: "100%",
          justifyContent: "space-between",
          flexDirection: ['column', 'row'],
          children: [isExpanded && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(DisableGlobalScrollOnMobile, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(CategoriesContainer, {
            ref: navbarRef,
            display: isExpanded ? 'flex' : ['none', 'flex'],
            flexDirection: ['column', null, null, 'row'],
            justifyContent: ['space-between', null, 'flex-start'],
            order: [0, 3, 0],
            isExpanded: isExpanded,
            children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
              height: 34,
              minWidth: 100,
              maxWidth: 200,
              my: 15
            }) : (0,_menu__WEBPACK_IMPORTED_MODULE_44__/* .getNavBarMenu */ .b)(intl, collective, sections).map(({
              category,
              links
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_NavBarCategoryDropdown__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z, {
              collective: collective,
              category: category,
              links: links,
              isSelected: selectedCategory === category,
              useAnchor: useAnchorsForCategories
            }, category))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
            display: isExpanded ? 'flex' : ['none', 'flex'],
            flexDirection: ['column', 'row'],
            flexBasis: "fit-content",
            marginLeft: [0, 'auto'],
            backgroundColor: "#fff",
            zIndex: 1,
            children: [mainAction && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              display: ['none', 'flex'],
              alignItems: "center",
              children: [mainAction.component, secondAction?.component ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                ml: 2,
                children: secondAction?.component
              }) : null]
            }), !loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_ActionsMenu__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z, {
              collective: collective,
              callsToAction: callsToAction,
              hiddenActionForNonMobile: mainAction?.type,
              LoggedInUser: LoggedInUser
            }), !onlyInfos && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(_Container__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              display: ['none', 'flex', null, null, 'none'],
              alignItems: "center",
              children: isExpanded ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(CloseMenuIcon, {
                onClick: () => setExpanded(!isExpanded)
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_46__.jsx(ExpandMenuIcon, {
                onClick: () => {
                  mainContainerRef.current?.scrollIntoView(true);
                  setExpanded(!isExpanded);
                }
              })
            })]
          })]
        })]
      })
    })]
  });
};

CollectiveNavbar.defaultProps = {
  isInHero: false,
  onlyInfos: false,
  callsToAction: {},
  showBackButton: true
};
CollectiveNavbar.__docgenInfo = {
  "description": "The NavBar that displays all the individual sections.",
  "methods": [],
  "displayName": "CollectiveNavbar",
  "props": {
    "isInHero": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "The behavior of the navbar is slightly different when integrated in a hero (in the collective page)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onlyInfos": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "If true, the Navbar items and buttons will be skipped",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "callsToAction": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "description": "Defines the calls to action displayed next to the NavBar items. Match PropTypes of `CollectiveCallsToAction`",
      "type": {
        "name": "shape",
        "value": {
          "hasContact": {
            "name": "bool",
            "required": false
          },
          "hasSubmitExpense": {
            "name": "bool",
            "required": false
          },
          "hasApply": {
            "name": "bool",
            "required": false
          },
          "hasDashboard": {
            "name": "bool",
            "required": false
          },
          "hasManageSubscriptions": {
            "name": "bool",
            "required": false
          },
          "hasSettings": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false
    },
    "showBackButton": {
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
    "collective": {
      "description": "Collective to show info about",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
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
          "path": {
            "name": "string",
            "required": false
          },
          "isArchived": {
            "name": "bool",
            "required": false
          },
          "canContact": {
            "name": "bool",
            "required": false
          },
          "canApply": {
            "name": "bool",
            "required": false
          },
          "host": {
            "name": "object",
            "required": false
          },
          "plan": {
            "name": "object",
            "required": false
          },
          "parentCollective": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "isAdmin": {
      "description": "Used to check what sections can be used",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isLoading": {
      "description": "Will show loading state",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "sections": {
      "description": "The list of sections to be displayed by the NavBar. If not provided, will show all the sections available to this collective type.",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "type": {
              "name": "enum",
              "value": [{
                "value": "'CATEGORY'",
                "computed": false
              }, {
                "value": "'SECTION'",
                "computed": false
              }],
              "required": false
            },
            "name": {
              "name": "string",
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "onCollectiveClick": {
      "description": "Called when users click the collective logo or name",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "selectedCategory": {
      "description": "Currently selected category",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(NAVBAR_CATEGORIES)"
      },
      "required": false
    },
    "hideButtonsOnMobile": {
      "description": "If true, the CTAs will be hidden on mobile",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isSmall": {
      "description": "Set this to true to make the component smaller in height",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showSelectedCategoryOnMobile": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "useAnchorsForCategories": {
      "description": "To use on the collective page. Sets links to anchors rather than full URLs for faster navigation",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(CollectiveNavbar));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getNavBarMenu),
/* harmony export */   "k": () => (/* binding */ NAVBAR_ACTION_TYPE)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99708);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5700);
/* harmony import */ var _lib_collective_sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64453);
/* harmony import */ var _lib_i18n_collective_page_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42994);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25896);
/* harmony import */ var _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24839);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97585);








const NAVBAR_ACTION_TYPE = {
  SUBMIT_EXPENSE: 'hasSubmitExpense',
  DASHBOARD: 'hasDashboard',
  APPLY: 'hasApply',
  CONTACT: 'hasContact',
  ADD_FUNDS: 'addFunds',
  ASSIGN_CARD: 'assignCard',
  REQUEST_CARD: 'requestCard',
  CONTRIBUTE: 'hasContribute',
  MANAGE_SUBSCRIPTIONS: 'hasManageSubscriptions',
  REQUEST_GRANT: 'hasRequestGrant',
  SETTINGS: 'hasSettings'
};
const titles = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  CONTRIBUTE: {
    id: "SectionContribute.All",
    defaultMessage: [{
      "type": 0,
      "value": "All ways to contribute"
    }]
  },
  TRANSACTIONS: {
    id: "menu.transactions",
    defaultMessage: [{
      "type": 0,
      "value": "Transactions"
    }]
  },
  EXPENSES: {
    id: "Expenses",
    defaultMessage: [{
      "type": 0,
      "value": "Expenses"
    }]
  },
  SUBMITTED_EXPENSES: {
    id: "NpGb+x",
    defaultMessage: [{
      "type": 0,
      "value": "Submitted Expenses"
    }]
  },
  UPDATES: {
    id: "updates",
    defaultMessage: [{
      "type": 0,
      "value": "Updates"
    }]
  },
  EVENTS: {
    id: "Events",
    defaultMessage: [{
      "type": 0,
      "value": "Events"
    }]
  },
  PROJECTS: {
    id: "Projects",
    defaultMessage: [{
      "type": 0,
      "value": "Projects"
    }]
  },
  CONNECTED_COLLECTIVES: {
    id: "ConnectedCollectives",
    defaultMessage: [{
      "type": 0,
      "value": "Connected Collectives"
    }]
  },
  CONVERSATIONS: {
    id: "conversations",
    defaultMessage: [{
      "type": 0,
      "value": "Conversations"
    }]
  }
});

const addSectionLink = (intl, links, collective, sections, section) => {
  if ((0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_3__/* .hasSection */ .Qg)(sections, section)) {
    links.push({
      route: `/${collective.slug}#section-${section}`,
      title: (0,_lib_i18n_collective_page_section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(intl, section),
      hide: true // Section links are not displayed yet

    });
  }
};
/**
 * Builds all menu entries, based on categories & enabled features
 */


const getCategoryMenuLinks = (intl, collective, sections, category) => {
  const links = [];
  const collectivePageRoute = (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getCollectivePageRoute */ .x0)(collective);

  if (category === _constants__WEBPACK_IMPORTED_MODULE_7__/* .NAVBAR_CATEGORIES.ABOUT */ .t.ABOUT) {
    // About
    addSectionLink(intl, links, collective, sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.ABOUT */ .bx.ABOUT);
    addSectionLink(intl, links, collective, sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM);
    addSectionLink(intl, links, collective, sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.GOALS */ .bx.GOALS);
  } else if (category === _constants__WEBPACK_IMPORTED_MODULE_7__/* .NAVBAR_CATEGORIES.CONTRIBUTE */ .t.CONTRIBUTE) {
    // Contribute
    if ((0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(collective, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* .FEATURES.RECEIVE_FINANCIAL_CONTRIBUTIONS */ .h6.RECEIVE_FINANCIAL_CONTRIBUTIONS) && (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_3__/* .hasSection */ .Qg)(sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE)) {
      links.push({
        route: `${collectivePageRoute}/contribute`,
        title: intl.formatMessage(titles.CONTRIBUTE)
      });
    }

    if ((0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(collective, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* .FEATURES.EVENTS */ .h6.EVENTS) && (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_3__/* .hasSection */ .Qg)(sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.EVENTS */ .bx.EVENTS)) {
      links.push({
        route: `${collectivePageRoute}/events`,
        title: intl.formatMessage(titles.EVENTS)
      });
    }

    if ((0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(collective, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* .FEATURES.PROJECTS */ .h6.PROJECTS) && (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_3__/* .hasSection */ .Qg)(sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.PROJECTS */ .bx.PROJECTS)) {
      links.push({
        route: `${collectivePageRoute}/projects`,
        title: intl.formatMessage(titles.PROJECTS)
      });
    }

    if ((0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(collective, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* .FEATURES.CONNECTED_ACCOUNTS */ .h6.CONNECTED_ACCOUNTS) && (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_3__/* .hasSection */ .Qg)(sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES)) {
      links.push({
        route: `${collectivePageRoute}/connected-collectives`,
        title: intl.formatMessage(titles.CONNECTED_COLLECTIVES)
      });
    }

    if ((0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_3__/* .hasSection */ .Qg)(sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS)) {
      addSectionLink(intl, links, collective, sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS);
    }
  } else if (category === _constants__WEBPACK_IMPORTED_MODULE_7__/* .NAVBAR_CATEGORIES.CONTRIBUTIONS */ .t.CONTRIBUTIONS) {
    addSectionLink(intl, links, collective, sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS);
  } else if (category === _constants__WEBPACK_IMPORTED_MODULE_7__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET) {
    // Budget
    links.push({
      route: `${collectivePageRoute}/transactions`,
      title: intl.formatMessage(titles.TRANSACTIONS)
    });

    if ((0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_2__/* .isIndividualAccount */ .Sh)(collective) && !collective.isHost) {
      links.push({
        route: `${collectivePageRoute}/submitted-expenses`,
        title: intl.formatMessage(titles.SUBMITTED_EXPENSES)
      });
    } else {
      links.push({
        route: `${collectivePageRoute}/expenses`,
        title: intl.formatMessage(titles.EXPENSES)
      });
    }
  } else if (category === _constants__WEBPACK_IMPORTED_MODULE_7__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT) {
    // Connect
    if ((0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(collective, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* .FEATURES.UPDATES */ .h6.UPDATES) && (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_3__/* .hasSection */ .Qg)(sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.UPDATES */ .bx.UPDATES)) {
      links.push({
        route: `${collectivePageRoute}/updates`,
        title: intl.formatMessage(titles.UPDATES)
      });
    }

    if ((0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(collective, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_1__/* .FEATURES.CONVERSATIONS */ .h6.CONVERSATIONS) && (0,_lib_collective_sections__WEBPACK_IMPORTED_MODULE_3__/* .hasSection */ .Qg)(sections, _collective_page_constants__WEBPACK_IMPORTED_MODULE_6__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS)) {
      links.push({
        route: `${collectivePageRoute}/conversations`,
        title: intl.formatMessage(titles.CONVERSATIONS)
      });
    }
  }

  return links;
};

const getNavBarMenu = (intl, collective, sections) => {
  const menu = [];
  sections.forEach(({
    type,
    name
  }) => {
    if (type === 'CATEGORY') {
      const links = getCategoryMenuLinks(intl, collective, sections, name);

      if (links.length) {
        menu.push({
          category: name,
          links
        });
      }
    }
  });
  return menu;
};

/***/ }),

/***/ 78936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88705);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const ApplicationDescription = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.P, {
    fontSize: "13px",
    lineHeight: "20px",
    color: "#090A0A",
    mb: 3,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "OCFHostApplication.importance",
      defaultMessage: [{
        "type": 0,
        "value": "It can take years for a group to get 501(c)(3) non-profit status. Fiscal hosts are especially helpful to newly formed nonprofit groups, large and small. We act as a legal entity for your group, organizing the back-end of your fundraising efforts. It’s fast and easy to apply. Once your group is approved, you can begin collecting funds immediately."
      }]
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.H5, {
    fontSize: "13px",
    lineHeight: "20px",
    color: "#090A0A",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "OCFHostApplication.howItWorks",
      defaultMessage: [{
        "type": 0,
        "value": "How it works:"
      }]
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.P, {
    fontSize: "13px",
    lineHeight: "20px",
    color: "#090A0A",
    mb: 3,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "OCFHostApplication.howItWorks.list",
      values: {
        lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {})
      },
      defaultMessage: [{
        "type": 0,
        "value": "• Donations are made to our 501(c)(3) (tax-exempt status applies)"
      }, {
        "type": 1,
        "value": "lineBreak"
      }, {
        "type": 0,
        "value": " • We make a “grant” to your group/project"
      }, {
        "type": 1,
        "value": "lineBreak"
      }, {
        "type": 0,
        "value": " • We send donors their receipts, disburse funds/reimburse expenses after your approval, send out the tax forms to independent contractors as applicable"
      }, {
        "type": 1,
        "value": "lineBreak"
      }, {
        "type": 0,
        "value": " • You have complete access to collect, spend, manage your money on our platform."
      }]
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.P, {
    fontSize: "13px",
    lineHeight: "20px",
    color: "#090A0A",
    mb: 3,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "OCFHostApplication.readInfoGuideAndTOS",
      values: {
        InfoGuideLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_2__/* .getI18nLink */ .fw)({
          color: '#396C6F',
          textDecoration: 'underline',
          openInNewTab: true,
          href: 'https://docs.opencollective.foundation'
        }),
        TOSLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_2__/* .getI18nLink */ .fw)({
          color: '#396C6F',
          textDecoration: 'underline',
          openInNewTab: true,
          href: 'https://docs.google.com/document/u/2/d/e/2PACX-1vQ_fs7IOojAHaMBKYtaJetlTXJZLnJ7flIWkwxUSQtTkWUMtwFYC2ssb-ooBnT-Ldl6wbVhNQiCkSms/pub'
        })
      },
      defaultMessage: [{
        "type": 0,
        "value": "Please take a moment to read our "
      }, {
        "type": 8,
        "value": "InfoGuideLink",
        "children": [{
          "type": 0,
          "value": "documentation"
        }]
      }, {
        "type": 0,
        "value": " and "
      }, {
        "type": 8,
        "value": "TOSLink",
        "children": [{
          "type": 0,
          "value": "Terms and Conditions"
        }]
      }, {
        "type": 0,
        "value": " before applying. We want to make this process as easy for you as possible; you will need to know a few things to have a smooth experience."
      }]
    })
  })]
});

ApplicationDescription.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationDescription"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationDescription);

/***/ }),

/***/ 74387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pm": () => (/* binding */ VIEWPORTS),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports BREAKPOINTS_NAMES, BREAKPOINTS_WIDTHS, BREAKPOINTS, viewportIsAbove, isDesktopOrAbove, getViewportFromWidth */
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86646);
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25359);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74200);
/* harmony import */ var _theme_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13875);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Defines all the breakpoints names as passed by `withViewport`
 */


const VIEWPORTS = {
  XSMALL: 'XSMALL',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  UNKNOWN: 'UNKNOWN'
}; // Please keep the same length for these two arrays

const BREAKPOINTS_NAMES = [VIEWPORTS.XSMALL, VIEWPORTS.SMALL, VIEWPORTS.MEDIUM, VIEWPORTS.LARGE];
const BREAKPOINTS_WIDTHS = BREAKPOINTS_NAMES.map((_, idx) => (0,_theme_helpers__WEBPACK_IMPORTED_MODULE_6__/* .emToPx */ .x8)(_theme_breakpoints__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[idx]));
const BREAKPOINTS = lodash_zipObject__WEBPACK_IMPORTED_MODULE_0___default()(BREAKPOINTS_NAMES, BREAKPOINTS_WIDTHS);
/**
 * Helper to check if a viewport is superior or equal to another one.
 * Always returns false for `UNKNOWN`
 *
 * @param {VIEWPORTS} viewport
 * @param {VIEWPORTS} breakpointName
 */

const viewportIsAbove = (viewport, breakpointName) => {
  return BREAKPOINTS_NAMES.indexOf(viewport) >= BREAKPOINTS_NAMES.indexOf(breakpointName);
};
/**
 * Returns true if viewport is not `UNKNOWN` and is >= desktop.
 *
 * @param {VIEWPORTS} viewport
 */

const isDesktopOrAbove = viewport => {
  return BREAKPOINTS_NAMES.indexOf(viewport) >= BREAKPOINTS_NAMES.indexOf(VIEWPORTS.MEDIUM);
};
/** Returns the name of the viewport (see `BREAKPOINTS_NAMES`) */

const getViewportFromWidth = width => {
  const breakpointIdx = lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2___default()(BREAKPOINTS_WIDTHS, b => width >= b);

  return breakpointIdx === -1 ? BREAKPOINTS_NAMES[0] : BREAKPOINTS_NAMES[breakpointIdx];
};
/** Function to build component's state */

const getStateBuilder = (withWidth, withHeight) => {
  if (withWidth && withHeight) {
    return (width, height, viewport) => ({
      width,
      height,
      viewport
    });
  } else if (withWidth) {
    return (width, height, viewport) => ({
      width,
      viewport
    });
  } else if (withHeight) {
    return (width, height, viewport) => ({
      height,
      viewport
    });
  } else {
    return (width, height, viewport) => ({
      viewport
    });
  }
};
/**
 * Watch window resize and provide info about the screen size. Has default to
 * properly render on SSR (customizable with `defaultViewport`).
 *
 * @param {ReactNode} ChildComponent
 * @param {object} options
 *  - `withWidth` (default: false) - pass the width of the window
 *  - `withHeight` (default: false) - pass the height of the window
 *  - `defaultViewport` (default: UNKNOWN) - if detection fails, fallback on this screen size
 */


const withViewport = (ChildComponent, options) => {
  const {
    withWidth,
    withHeight,
    defaultViewport = VIEWPORTS.UNKNOWN
  } = options || {};
  const buildState = getStateBuilder(withWidth || false, withHeight || false);
  return class Viewport extends (react__WEBPACK_IMPORTED_MODULE_4___default().Component) {
    // Default height usually doesn't matters much, so we use the width as default
    constructor(props) {
      super(props); // Always initialize without `window`, to make sure SSR and client render are the same
      // Could trigger "DOM not matching" errors otherwise

      _defineProperty(this, "doResize", () => {
        const viewport = getViewportFromWidth(window.innerWidth);
        const state = buildState(window.innerWidth, window.innerHeight, viewport);

        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(this.state, state)) {
          this.setState(state);
        }
      });

      this.state = buildState(BREAKPOINTS[defaultViewport] || BREAKPOINTS_WIDTHS[0], BREAKPOINTS[defaultViewport] || BREAKPOINTS_WIDTHS[0], defaultViewport);
    }

    componentDidMount() {
      this.doResize();
      this.onResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.doResize, 500, {
        maxWait: 300
      });
      window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }

    render() {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ChildComponent, _objectSpread(_objectSpread({}, this.state), this.props));
    }

  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withViewport);

/***/ })

};
;