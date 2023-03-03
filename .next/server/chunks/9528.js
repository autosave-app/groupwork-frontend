"use strict";
exports.id = 9528;
exports.ids = [9528];
exports.modules = {

/***/ 27132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "SectionTitle",
  componentId: "sc-5q044q-0"
})(["word-break:break-word;", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__.color, styled_system__WEBPACK_IMPORTED_MODULE_1__.display, styled_system__WEBPACK_IMPORTED_MODULE_1__.space, styled_system__WEBPACK_IMPORTED_MODULE_1__.typography);
SectionTitle.defaultProps = {
  fontSize: '32px',
  lineHeight: '36px',
  fontWeight: 'normal',
  color: 'black.900',
  mb: 3
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);

/***/ }),

/***/ 10108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24317);
/* harmony import */ var _lib_payment_method_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51515);
/* harmony import */ var _lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91337);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87268);
/* harmony import */ var _StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41216);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36422);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90998);
/* harmony import */ var _RecurringContributionsPopUp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47772);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_14__, _RecurringContributionsPopUp__WEBPACK_IMPORTED_MODULE_16__]);
([_StyledTooltip__WEBPACK_IMPORTED_MODULE_14__, _RecurringContributionsPopUp__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const _excluded = ["collective", "status", "contribution", "account", "isEditing", "canEdit", "isAdmin", "onCloseEdit", "onEdit", "showPaymentMethod"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
  manage: {
    id: "Edit",
    defaultMessage: [{
      "type": 0,
      "value": "Edit"
    }]
  },
  tag: {
    id: "Subscriptions.Status",
    defaultMessage: [{
      "type": 5,
      "value": "status",
      "options": {
        "ACTIVE": {
          "value": [{
            "type": 0,
            "value": "Active contribution"
          }]
        },
        "CANCELLED": {
          "value": [{
            "type": 0,
            "value": "Cancelled contribution"
          }]
        },
        "ERROR": {
          "value": [{
            "type": 0,
            "value": "Error"
          }]
        },
        "REJECTED": {
          "value": [{
            "type": 0,
            "value": "Rejected contribution"
          }]
        },
        "other": {
          "value": []
        }
      }
    }]
  }
});

const RecurringContributionsCard = _ref => {
  let {
    collective,
    status,
    contribution,
    account,
    isEditing,
    canEdit,
    isAdmin,
    onCloseEdit,
    onEdit,
    showPaymentMethod
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const isError = status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_4__/* .ORDER_STATUS.ERROR */ .D.ERROR;
  const isRejected = status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_4__/* .ORDER_STATUS.REJECTED */ .D.REJECTED;
  const isActive = status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_4__/* .ORDER_STATUS.ACTIVE */ .D.ACTIVE || isError;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
    collective: collective,
    bodyHeight: "350px",
    tag: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      display: "inline-block",
      textTransform: "uppercase",
      my: 2,
      type: isError || isRejected ? 'error' : undefined,
      children: formatMessage(messages.tag, {
        status
      })
    }),
    children: [Boolean(contribution.fromAccount?.isIncognito) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      position: "absolute",
      right: "12px",
      top: "12px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "RecurringContribution.Incognito",
          defaultMessage: [{
            "type": 0,
            "value": "This is an incognito recurring contribution, only you can see it."
          }]
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledContainer, {
          borderRadius: "100%",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            collective: contribution.fromAccount,
            radius: 36
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      p: 3,
      pt: 0,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
        mb: 3,
        children: [showPaymentMethod && contribution.paymentMethod && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
          mb: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
            mb: 2,
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: "Payment method"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
            alignItems: "center",
            height: "28px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
              mr: 2,
              children: (0,_lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPaymentMethodIcon */ .AM)(contribution.paymentMethod, account)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledFlex, {
              flexDirection: "column",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
                fontSize: "11px",
                lineHeight: "14px",
                fontWeight: "bold",
                truncateOverflow: true,
                title: (0,_lib_payment_method_label__WEBPACK_IMPORTED_MODULE_5__/* .getPaymentMethodName */ .d0)(contribution.paymentMethod),
                children: (0,_lib_payment_method_label__WEBPACK_IMPORTED_MODULE_5__/* .getPaymentMethodName */ .d0)(contribution.paymentMethod)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
                fontSize: "11px",
                color: "black.700",
                truncateOverflow: true,
                children: (0,_lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPaymentMethodMetadata */ .Og)(contribution.paymentMethod)
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "membership.totalDonations.title",
              defaultMessage: [{
                "type": 0,
                "value": "Amount contributed"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "bold",
            "data-cy": "recurring-contribution-amount-contributed",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              amount: contribution.totalAmount.valueInCents,
              interval: contribution.frequency.toLowerCase().slice(0, -2),
              currency: contribution.totalAmount.currency
            })
          }), !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(contribution.platformTipAmount?.valueInCents) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "Subscriptions.FeesOnTopTooltip",
              defaultMessage: [{
                "type": 0,
                "value": "Contribution plus Platform Tip"
              }]
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
              fontSize: "12px",
              lineHeight: "20px",
              color: "black.700",
              children: ["(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                amount: contribution.amount.valueInCents,
                currency: contribution.amount.currency,
                showCurrencyCode: false,
                precision: "auto",
                amountStyles: {
                  fontWeight: 'normal',
                  color: 'black.700'
                }
              }), ' + ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                amount: contribution.platformTipAmount.valueInCents,
                currency: contribution.amount.currency,
                showCurrencyCode: false,
                precision: "auto",
                amountStyles: {
                  fontWeight: 'normal',
                  color: 'black.700'
                }
              }), ")"]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
        mb: 3,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Subscriptions.ContributedToDate",
            defaultMessage: [{
              "type": 0,
              "value": "Contributed to date"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
          fontSize: "14px",
          lineHeight: "20px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            amount: contribution.totalDonations.valueInCents,
            currency: contribution.totalDonations.currency
          })
        })]
      }), isAdmin && isActive && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        buttonSize: "tiny",
        onClick: onEdit,
        disabled: !canEdit,
        "data-cy": "recurring-contribution-edit-activate-button",
        width: "100%",
        children: formatMessage(messages.manage)
      })]
    }), isEditing && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_RecurringContributionsPopUp__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      contribution: contribution,
      status: status,
      onCloseEdit: onCloseEdit,
      account: account
    })]
  }));
};

RecurringContributionsCard.defaultProps = {
  showPaymentMethod: true
};
RecurringContributionsCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RecurringContributionsCard",
  "props": {
    "showPaymentMethod": {
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
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "isEditing": {
      "description": "",
      "type": {
        "name": "bool"
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
    "canEdit": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onCloseEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "contribution": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "amount": {
            "name": "object",
            "required": true
          },
          "totalAmount": {
            "name": "object",
            "required": true
          },
          "platformTipAmount": {
            "name": "object",
            "required": false
          },
          "frequency": {
            "name": "string",
            "required": true
          },
          "totalDonations": {
            "name": "object",
            "required": true
          },
          "paymentMethod": {
            "name": "object",
            "required": false
          },
          "fromAccount": {
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
        "name": "string"
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
    "account": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecurringContributionsCard);

var _StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
  displayName: "RecurringContributionsCard___StyledContainer",
  componentId: "sc-1weisk8-0"
})({
  filter: 'drop-shadow(-1px 1px 2px #dcdcdc)'
});

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC).withConfig({
  displayName: "RecurringContributionsCard___StyledFlex",
  componentId: "sc-1weisk8-1"
})({
  position: 'relative',
  minWidth: 0
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports FILTERS, I18nFilters */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24317);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56562);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29242);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29925);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52847);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51927);
/* harmony import */ var _RecurringContributionsCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10108);
/* harmony import */ var _collective_page_images_EmptyCollectivesSectionImage_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13386);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RecurringContributionsCard__WEBPACK_IMPORTED_MODULE_12__]);
_RecurringContributionsCard__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["recurringContributions", "account", "LoggedInUser", "isLoading", "displayFilters"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const FILTERS = {
  ACTIVE: 'ACTIVE',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY',
  CANCELLED: 'CANCELLED'
};
const I18nFilters = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
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
const CollectiveCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "RecurringContributionsContainer__CollectiveCardContainer",
  componentId: "sc-1511ja7-0"
})(["animation:", " 0.2s;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_8__/* .fadeIn */ .Ji);

const filterContributions = (contributions, filterName) => {
  const isActive = ({
    status
  }) => status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.ACTIVE */ .D.ACTIVE || status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.ERROR */ .D.ERROR;

  const isInactive = ({
    status
  }) => status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.CANCELLED */ .D.CANCELLED || status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.REJECTED */ .D.REJECTED;

  switch (filterName) {
    case FILTERS.ACTIVE:
      return contributions.filter(isActive);

    case FILTERS.MONTHLY:
      return contributions.filter(contrib => isActive(contrib) && contrib.frequency === 'MONTHLY');

    case FILTERS.YEARLY:
      return contributions.filter(contrib => isActive(contrib) && contrib.frequency === 'YEARLY');

    case FILTERS.CANCELLED:
      return contributions.filter(isInactive);

    default:
      return [];
  }
};

const RecurringContributionsContainer = _ref => {
  let {
    recurringContributions,
    account,
    LoggedInUser,
    isLoading,
    displayFilters
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isAdmin = Boolean(LoggedInUser?.isAdminOfCollective(account));
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const [editingContributionId, setEditingContributionId] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [filter, setFilter] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(FILTERS.ACTIVE);
  const displayedRecurringContributions = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    const filteredContributions = filterContributions(recurringContributions?.nodes || [], filter);
    return isAdmin ? filteredContributions : filteredContributions.filter(contrib => contrib.status !== _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.ERROR */ .D.ERROR);
  }, [recurringContributions, filter, isAdmin]); // Reset edit when changing filters and contribution is not in the list anymore

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (!displayedRecurringContributions.some(c => c.id === editingContributionId)) {
      setEditingContributionId(null);
    }
  }, [displayedRecurringContributions]);
  const filterOptions = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => [{
    value: FILTERS.ACTIVE,
    label: intl.formatMessage(I18nFilters[FILTERS.ACTIVE])
  }, {
    value: FILTERS.MONTHLY,
    label: intl.formatMessage(I18nFilters[FILTERS.MONTHLY])
  }, {
    value: FILTERS.YEARLY,
    label: intl.formatMessage(I18nFilters[FILTERS.YEARLY])
  }, {
    value: FILTERS.CANCELLED,
    label: intl.formatMessage(I18nFilters[FILTERS.CANCELLED])
  }]);

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      maxHeight: "400px",
      mt: 3
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
    children: [displayFilters && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      mb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_9__/* .StyledSelectFilter */ .V, {
        inputId: "recurring-contribution-interval",
        onChange: ({
          value
        }) => setFilter(value),
        value: {
          value: filter,
          label: intl.formatMessage(I18nFilters[filter])
        },
        options: filterOptions,
        maxWidth: "180px",
        disabled: isLoading,
        "data-cy": "recurring-contributions-interval"
      })
    }), displayedRecurringContributions.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .rj, {
      gridGap: 24,
      gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))",
      my: 2,
      children: displayedRecurringContributions.map(contribution => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(CollectiveCardContainer, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_RecurringContributionsCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          collective: contribution.toAccount,
          status: contribution.status,
          contribution: contribution,
          position: "relative",
          account: account,
          isAdmin: isAdmin,
          isEditing: contribution.id === editingContributionId,
          canEdit: isAdmin && !editingContributionId,
          onEdit: () => setEditingContributionId(contribution.id),
          onCloseEdit: () => setEditingContributionId(null),
          showPaymentMethod: isAdmin,
          "data-cy": "recurring-contribution-card"
        })
      }, contribution.id))
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      py: 4,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        src: _collective_page_images_EmptyCollectivesSectionImage_svg__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
        alt: "",
        width: 309,
        height: 200
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
        color: "black.600",
        fontSize: "16px",
        mt: 5,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "RecurringContributions.none",
          defaultMessage: [{
            "type": 0,
            "value": "No recurring contributions to see here! 👀"
          }]
        })
      })]
    })]
  }));
};

RecurringContributionsContainer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RecurringContributionsContainer",
  "props": {
    "recurringContributions": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "account": {
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
    },
    "displayFilters": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_11__/* .withUser */ .ns)(RecurringContributionsContainer));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_CreditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77603);
/* harmony import */ var _styled_icons_boxicons_regular_CreditCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_CreditCard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_boxicons_regular_Dollar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95255);
/* harmony import */ var _styled_icons_boxicons_regular_Dollar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Dollar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_boxicons_regular_XCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9126);
/* harmony import */ var _styled_icons_boxicons_regular_XCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_XCircle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88705);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(173);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29925);
/* harmony import */ var _StyledRadioList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36718);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(31330);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(51927);
/* harmony import */ var _UpdateOrderPopUp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(22554);
/* harmony import */ var _UpdatePaymentMethodPopUp__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(43072);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_19__, _UpdateOrderPopUp__WEBPACK_IMPORTED_MODULE_21__, _UpdatePaymentMethodPopUp__WEBPACK_IMPORTED_MODULE_22__]);
([_ToastProvider__WEBPACK_IMPORTED_MODULE_19__, _UpdateOrderPopUp__WEBPACK_IMPORTED_MODULE_21__, _UpdatePaymentMethodPopUp__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















 //  Styled components



const RedXCircle = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_styled_icons_boxicons_regular_XCircle__WEBPACK_IMPORTED_MODULE_4__.XCircle).withConfig({
  displayName: "RecurringContributionsPopUp__RedXCircle",
  componentId: "sc-crmtoj-0"
})(["color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__.themeGet)('colors.red.500'));
const GrayXCircle = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_styled_icons_boxicons_regular_XCircle__WEBPACK_IMPORTED_MODULE_4__.XCircle).withConfig({
  displayName: "RecurringContributionsPopUp__GrayXCircle",
  componentId: "sc-crmtoj-1"
})(["color:", ";cursor:pointer;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_5__.themeGet)('colors.black.500'));
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC).attrs({
  px: 3
}).withConfig({
  displayName: "RecurringContributionsPopUp__MenuItem",
  componentId: "sc-crmtoj-2"
})(["cursor:pointer;"]);
const PopUpMenu = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC).withConfig({
  displayName: "RecurringContributionsPopUp__PopUpMenu",
  componentId: "sc-crmtoj-3"
})(["position:absolute;bottom:0;z-index:998;background:white;border-radius:8px;box-shadow:0px 2px 7px rgba(0,0,0,0.5);min-height:180px;max-height:360px;width:100%;overflow-y:auto;padding:4px 0;animation:", " 0.2s;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_15__/* .slideInUp */ .MP);
const MenuSection = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC).attrs({
  flexDirection: 'column',
  width: 1
}).withConfig({
  displayName: "RecurringContributionsPopUp__MenuSection",
  componentId: "sc-crmtoj-4"
})([""]);
const i18nReasons = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  NO_LONGER_WANT_TO_SUPPORT: {
    id: "subscription.cancel.reason1",
    defaultMessage: [{
      "type": 0,
      "value": "No longer want to back the collective"
    }]
  },
  UPDATING_ORDER: {
    id: "subscription.cancel.reason2",
    defaultMessage: [{
      "type": 0,
      "value": "Changing payment method or amount"
    }]
  },
  OTHER: {
    id: "subscription.cancel.other",
    defaultMessage: [{
      "type": 0,
      "value": "Other"
    }]
  }
}); // GraphQL

const cancelRecurringContributionMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation CancelRecurringContribution($order: OrderReferenceInput!, $reason: String!, $reasonCode: String!) {
    cancelOrder(order: $order, reason: $reason, reasonCode: $reasonCode) {
      id
      status
    }
  }
`;

const RecurringContributionsPopUp = ({
  contribution,
  status,
  onCloseEdit,
  account
}) => {
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .useToasts */ .e1)();
  const {
    0: menuState,
    1: setMenuState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('mainMenu');
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const {
    0: cancelReason,
    1: setCancelReason
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('NO_LONGER_WANT_TO_SUPPORT');
  const {
    0: cancelReasonMessage,
    1: setCancelReasonMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [submitCancellation, {
    loading: loadingCancellation
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(cancelRecurringContributionMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T
  });
  const mainMenu = menuState === 'mainMenu' && (status === 'ACTIVE' || status === 'ERROR');
  const cancelMenu = menuState === 'cancelMenu';
  const updateOrderMenu = menuState === 'updateOrderMenu';
  const paymentMethodMenu = menuState === 'paymentMethodMenu';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(PopUpMenu, {
    "data-cy": "recurring-contribution-menu",
    children: [mainMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(MenuSection, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
          my: 2,
          fontSize: "12px",
          textTransform: "uppercase",
          color: "black.700",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "header.options",
            defaultMessage: [{
              "type": 0,
              "value": "Options"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          flexGrow: 1,
          alignItems: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            width: "100%",
            mx: 2
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(GrayXCircle, {
          size: 26,
          onClick: onCloseEdit
        })]
      }), account.type !== 'COLLECTIVE' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(MenuItem, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "space-around",
        onClick: () => {
          setMenuState('paymentMethodMenu');
        },
        "data-cy": "recurring-contribution-menu-payment-option",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          width: 1 / 6,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_styled_icons_boxicons_regular_CreditCard__WEBPACK_IMPORTED_MODULE_2__.CreditCard, {
            size: 20
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          flexGrow: 1,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
            fontSize: "14px",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "subscription.menu.editPaymentMethod",
              defaultMessage: [{
                "type": 0,
                "value": "Update payment method"
              }]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(MenuItem, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "space-between",
        onClick: () => {
          setMenuState('updateOrderMenu');
        },
        "data-cy": "recurring-contribution-menu-tier-option",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          width: 1 / 6,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_styled_icons_boxicons_regular_Dollar__WEBPACK_IMPORTED_MODULE_3__.Dollar, {
            size: 20
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          flexGrow: 1,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
            fontSize: "14px",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "subscription.menu.updateAmount",
              defaultMessage: [{
                "type": 0,
                "value": "Update amount"
              }]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(MenuItem, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        onClick: () => {
          setMenuState('cancelMenu');
        },
        "data-cy": "recurring-contribution-menu-cancel-option",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          width: 1 / 6,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(RedXCircle, {
            size: 20
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          flexGrow: 1,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
            fontSize: "14px",
            fontWeight: "400",
            color: "red.500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "subscription.menu.cancelContribution",
              defaultMessage: [{
                "type": 0,
                "value": "Cancel contribution"
              }]
            })
          })
        })]
      })]
    }), cancelMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(MenuSection, {
      "data-cy": "recurring-contribution-cancel-menu",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
          my: 2,
          fontSize: "12px",
          textTransform: "uppercase",
          color: "black.700",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "subscription.menu.cancelContribution",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel contribution"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          flexGrow: 1,
          alignItems: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            width: "100%",
            mx: 2
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(GrayXCircle, {
          size: 26,
          onClick: onCloseEdit
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          p: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
            fontSize: "15px",
            fontWeight: "bold",
            mb: "10",
            lineHeight: "20px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "subscription.cancel.question",
              defaultMessage: [{
                "type": 0,
                "value": "Why are you cancelling your subscription today? 🥺"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            my: 2,
            borderColor: "black.200"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledRadioList__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
            id: "cancel-reason-radio-list",
            defaultValue: "NO_LONGER_WANT_TO_SUPPORT",
            onChange: e => setCancelReason(e.key),
            name: "cancellation-reason",
            options: ['NO_LONGER_WANT_TO_SUPPORT', 'UPDATING_ORDER', 'OTHER'],
            children: ({
              value,
              radio
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              display: "flex",
              alignItems: "center",
              my: 2,
              "data-cy": value,
              fontWeight: "normal",
              fontSize: "12px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__/* .Span */ .Dr, {
                mx: 2,
                children: radio
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx("span", {
                children: intl.formatMessage(i18nReasons[value])
              })]
            })
          }), cancelReason === 'OTHER' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            "data-cy": "cancellation-text-area",
            onChange: e => setCancelReasonMessage(e.target.value),
            value: cancelReasonMessage,
            fontSize: "12px",
            placeholder: intl.formatMessage({
              id: "41Cgcs",
              defaultMessage: [{
                "type": 0,
                "value": "Provide more details (optional)"
              }]
            }),
            height: 70,
            width: "100%",
            resize: "none"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        my: 1,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          flexGrow: 1,
          alignItems: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            width: "100%"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
        flexGrow: 1 / 4,
        width: 1,
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          buttonSize: "tiny",
          buttonStyle: "secondary",
          minWidth: 75,
          loading: loadingCancellation,
          "data-cy": "recurring-contribution-cancel-yes",
          onClick: async () => {
            try {
              await submitCancellation({
                variables: {
                  order: {
                    id: contribution.id
                  },
                  reason: cancelReason === 'OTHER' ? cancelReasonMessage : '',
                  reasonCode: cancelReason
                }
              });
              onCloseEdit();
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .TOAST_TYPE.INFO */ ["do"].INFO,
                message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "subscription.createSuccessCancel",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Your recurring contribution has been "
                  }, {
                    "type": 8,
                    "value": "strong",
                    "children": [{
                      "type": 0,
                      "value": "cancelled"
                    }]
                  }, {
                    "type": 0,
                    "value": "."
                  }],
                  values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP
                })
              });
            } catch (error) {
              const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_8__/* .getErrorFromGraphqlException */ .H1)(error).message;
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: errorMsg
              });
            }
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "submit",
            defaultMessage: [{
              "type": 0,
              "value": "Submit"
            }]
          })
        })
      })]
    }), paymentMethodMenu && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(MenuSection, {
      "data-cy": "recurring-contribution-payment-menu",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_UpdatePaymentMethodPopUp__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, {
        setMenuState: setMenuState,
        contribution: contribution,
        onCloseEdit: onCloseEdit,
        account: contribution.fromAccount || account
      })
    }), updateOrderMenu && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(MenuSection, {
      "data-cy": "recurring-contribution-order-menu",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_UpdateOrderPopUp__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
        setMenuState: setMenuState,
        contribution: contribution,
        onCloseEdit: onCloseEdit
      })
    })]
  });
};

RecurringContributionsPopUp.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RecurringContributionsPopUp",
  "props": {
    "contribution": {
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
    "status": {
      "description": "",
      "type": {
        "name": "string"
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
    "account": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_20__/* .withUser */ .ns)(RecurringContributionsPopUp));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83824);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22265);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80642);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1808);
/* harmony import */ var _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12568);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17632);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15078);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32651);
/* harmony import */ var _lib_tier_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36648);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88705);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29242);
/* harmony import */ var _PayWithPaypalButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49160);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(173);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(54029);
/* harmony import */ var _StyledRadioList__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(36718);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(31330);
/* harmony import */ var _AddPaymentMethod__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(50559);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_28__, _AddPaymentMethod__WEBPACK_IMPORTED_MODULE_29__]);
([_ToastProvider__WEBPACK_IMPORTED_MODULE_28__, _AddPaymentMethod__WEBPACK_IMPORTED_MODULE_29__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
































const TierBox = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC).withConfig({
  displayName: "UpdateOrderPopUp__TierBox",
  componentId: "sc-1lnx91y-0"
})(["border-top:1px solid ", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6__.themeGet)('colors.black.300'));
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  customTier: {
    id: "ContributionType.Custom",
    defaultMessage: [{
      "type": 0,
      "value": "Custom contribution"
    }]
  }
});
const updateOrderMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  mutation UpdateOrder(
    $order: OrderReferenceInput!
    $amount: AmountInput
    $tier: TierReferenceInput
    $paypalSubscriptionId: String
  ) {
    updateOrder(order: $order, amount: $amount, tier: $tier, paypalSubscriptionId: $paypalSubscriptionId) {
      id
      status
      frequency
      amount {
        value
        currency
      }
      tier {
        id
        name
      }
    }
  }
`;
const tiersQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query UpdateOrderPopUpTiers($slug: String!) {
    account(slug: $slug) {
      id
      slug
      name
      type
      currency
      settings
      ... on AccountWithContributions {
        tiers {
          nodes {
            id
            name
            interval
            amount {
              value
              valueInCents
              currency
            }
            minimumAmount {
              value
              valueInCents
              currency
            }
            amountType
            presets
          }
        }
      }
    }
  }
`; // TODO: internationalize me

const OTHER_LABEL = 'Other';

const useUpdateOrder = ({
  contribution,
  onSuccess
}) => {
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_28__/* .useToasts */ .e1)();
  const [submitUpdateOrder, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(updateOrderMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_15__/* .API_V2_CONTEXT */ .T
  });
  return {
    isSubmittingOrder: loading,
    updateOrder: async (selectedTier, selectedAmountOption, inputAmountValue, paypalSubscriptionId = null) => {
      try {
        await submitUpdateOrder({
          variables: {
            order: {
              id: contribution.id
            },
            paypalSubscriptionId,
            amount: {
              valueInCents: selectedAmountOption.label === OTHER_LABEL ? inputAmountValue : selectedAmountOption.value
            },
            tier: {
              id: selectedTier?.id || null
            }
          }
        });
        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_28__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
          message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
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
        onSuccess();
      } catch (error) {
        const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_14__/* .getErrorFromGraphqlException */ .H1)(error).message;
        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_28__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: errorMsg
        });
        return false;
      }
    }
  };
};

const getTierAmountOptions = (selectedTier, contribution, locale) => {
  const currency = contribution.amount.currency;

  const buildOptionFromAmount = amount => ({
    label: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_12__/* .formatCurrency */ .xG)(amount, currency, {
      locale
    }),
    value: amount
  });

  if (selectedTier && !selectedTier?.flexible) {
    return [buildOptionFromAmount(selectedTier.amount)];
  } else {
    // TODO: use getTierPresets from tier-utils
    const presets = selectedTier?.presets || _lib_tier_utils__WEBPACK_IMPORTED_MODULE_16__/* .DEFAULT_PRESETS */ .pP;
    const otherValue = null; // The way it's currently implemented, it doesn't need a value

    return [...presets.map(buildOptionFromAmount), {
      label: OTHER_LABEL,
      value: otherValue
    }];
  }
};

const getContributeOptions = (intl, contribution, tiers, disableCustomContributions) => {
  const tierOptions = (tiers || []).filter(tier => tier.interval !== null).map(tier => ({
    key: `${contribution.id}-tier-${tier.id}`,
    title: tier.name,
    flexible: tier.amountType === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__/* .AmountTypes.FLEXIBLE */ .lX.FLEXIBLE,
    amount: tier.amountType === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__/* .AmountTypes.FLEXIBLE */ .lX.FLEXIBLE ? tier.minimumAmount.valueInCents : tier.amount.valueInCents,
    id: tier.id,
    currency: tier.amount.currency,
    interval: tier.interval,
    presets: tier.presets,
    minimumAmount: tier.amountType === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_11__/* .AmountTypes.FLEXIBLE */ .lX.FLEXIBLE ? tier.minimumAmount.valueInCents : _lib_tier_utils__WEBPACK_IMPORTED_MODULE_16__/* .DEFAULT_MINIMUM_AMOUNT */ .hs
  }));

  if (!disableCustomContributions) {
    tierOptions.unshift({
      key: `${contribution.id}-custom-tier`,
      title: intl.formatMessage(messages.customTier),
      flexible: true,
      amount: _lib_tier_utils__WEBPACK_IMPORTED_MODULE_16__/* .DEFAULT_MINIMUM_AMOUNT */ .hs,
      id: null,
      currency: contribution.amount.currency,
      interval: contribution.frequency.toLowerCase().slice(0, -2),
      presets: _lib_tier_utils__WEBPACK_IMPORTED_MODULE_16__/* .DEFAULT_PRESETS */ .pP,
      minimumAmount: _lib_tier_utils__WEBPACK_IMPORTED_MODULE_16__/* .DEFAULT_MINIMUM_AMOUNT */ .hs,
      isCustom: true
    });
  }

  return tierOptions;
};

const geSelectedContributeOption = (contribution, tiersOptions) => {
  const defaultContribution = tiersOptions.find(option => option.isCustom) || tiersOptions.find(option => option.interval);

  if (!contribution.tier) {
    return defaultContribution;
  } else {
    // for some collectives if a tier has been deleted it won't have moved the contribution
    // to the custom 'null' tier so we have to check for that
    const matchedTierOption = tiersOptions.find(option => option.id === contribution.tier.id);
    return !matchedTierOption ? defaultContribution : matchedTierOption;
  }
};

const useContributeOptions = (order, tiers, tiersLoading, disableCustomContributions) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const {
    0: selectedContributeOption,
    1: setSelectedContributeOption
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const {
    0: amountOptions,
    1: setAmountOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const {
    0: selectedAmountOption,
    1: setSelectedAmountOption
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const {
    0: inputAmountValue,
    1: setInputAmountValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const contributeOptions = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(() => {
    return getContributeOptions(intl, order, tiers, disableCustomContributions);
  }, [intl, order, tiers, disableCustomContributions]);

  if (!contributeOptions.length === 0) {
    throw new Error('Could not compute at least one contribution option.');
  }

  if (contributeOptions && !selectedContributeOption && !tiersLoading) {
    const selectedContribution = geSelectedContributeOption(order, contributeOptions);

    if (!selectedContribution) {
      throw new Error('Could not compute a selected contribution option.');
    }

    setSelectedContributeOption(selectedContribution);
    setLoading(false);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (selectedContributeOption !== null) {
      const options = getTierAmountOptions(selectedContributeOption, order, intl.locale);
      setAmountOptions(options);
      let option;

      if ((selectedContributeOption.id || null) !== (order.tier?.id || null)) {
        // Just pick first if tier is different than current one
        option = lodash_first__WEBPACK_IMPORTED_MODULE_3___default()(options);
      } else {
        // Find one of the presets, or default to the last one which is supposed to be "Other" by convention
        option = options.find(option => option.value === order.amount.valueInCents) || lodash_last__WEBPACK_IMPORTED_MODULE_1___default()(options);
      }

      setSelectedAmountOption(option);
      setInputAmountValue(option.value || order.amount.valueInCents);
    }
  }, [selectedContributeOption]);
  return {
    loading,
    contributeOptions,
    amountOptions,
    selectedContributeOption,
    selectedAmountOption,
    inputAmountValue,
    setSelectedContributeOption,
    setSelectedAmountOption,
    setInputAmountValue
  };
};

const ContributionInterval = ({
  tier,
  contribution
}) => {
  const isActiveTier = contribution.tier?.id && contribution.tier.id === tier.id;
  let interval = null;

  if (isActiveTier) {
    interval = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_13__/* .getIntervalFromContributionFrequency */ .Pw)(contribution.frequency);
  } else if (tier?.interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_9__["default"].flexible) {
    // TODO: We should ideally have a select for that
    interval = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_13__/* .getIntervalFromContributionFrequency */ .Pw)(contribution.frequency) || _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_9__["default"].month;
  } else if (tier?.interval && tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_9__["default"].flexible) {
    interval = tier.interval;
  } // Show message only if there's an active interval


  if (interval) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Text__WEBPACK_IMPORTED_MODULE_27__.P, {
      fontSize: "12px",
      fontWeight: "500",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
        id: "tier.interval",
        defaultMessage: [{
          "type": 0,
          "value": "per "
        }, {
          "type": 5,
          "value": "interval",
          "options": {
            "month": {
              "value": [{
                "type": 0,
                "value": "month"
              }]
            },
            "year": {
              "value": [{
                "type": 0,
                "value": "year"
              }]
            },
            "other": {
              "value": []
            }
          }
        }],
        values: {
          interval
        }
      })
    });
  } else {
    return null;
  }
};

const UpdateOrderPopUp = ({
  contribution,
  onCloseEdit
}) => {
  // GraphQL mutations and queries
  const queryVariables = {
    slug: contribution.toAccount.slug
  };
  const {
    data,
    loading: tiersLoading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(tiersQuery, {
    variables: queryVariables,
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_15__/* .API_V2_CONTEXT */ .T
  }); // state management

  const {
    locale
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_28__/* .useToasts */ .e1)();
  const {
    isSubmittingOrder,
    updateOrder
  } = useUpdateOrder({
    contribution,
    onSuccess: onCloseEdit
  });

  const tiers = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(data, 'account.tiers.nodes', null);

  const disableCustomContributions = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(data, 'account.settings.disableCustomContributions', false);

  const contributeOptionsState = useContributeOptions(contribution, tiers, tiersLoading, disableCustomContributions);
  const {
    amountOptions,
    inputAmountValue,
    contributeOptions,
    selectedContributeOption,
    selectedAmountOption,
    setInputAmountValue,
    setSelectedContributeOption
  } = contributeOptionsState;
  const selectedTier = selectedContributeOption?.isCustom ? null : selectedContributeOption;
  const isPaypal = contribution.paymentMethod.service === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_10__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL;
  const tipAmount = contribution.platformTipAmount?.valueInCents || 0;
  const newAmount = selectedAmountOption?.label === OTHER_LABEL ? inputAmountValue : selectedAmountOption?.value;
  const newTotalAmount = newAmount + tipAmount; // For now tip can't be updated, we're just carrying it over
  // When we change the amount option (One of the presets or Other)

  const setSelectedAmountOption = ({
    label,
    value
  }) => {
    // Always set "Other" input value to the last one selected
    // "Other" itself doesn't have a pre-defined value
    if (label !== OTHER_LABEL) {
      setInputAmountValue(value);
    }

    contributeOptionsState.setSelectedAmountOption({
      label,
      value
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 50,
      px: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Text__WEBPACK_IMPORTED_MODULE_27__.P, {
        my: 2,
        fontSize: "12px",
        textTransform: "uppercase",
        color: "black.700",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "subscription.menu.updateTier",
          defaultMessage: [{
            "type": 0,
            "value": "Update tier"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
        flexGrow: 1,
        alignItems: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          width: "100%",
          mx: 2
        })
      })]
    }), tiersLoading || contributeOptionsState.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
      height: 100
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledRadioList__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP, {
      id: "ContributionTier",
      name: `${contribution.id}-ContributionTier`,
      keyGetter: "key",
      options: contributeOptions,
      onChange: ({
        value
      }) => setSelectedContributeOption(value),
      value: selectedContributeOption?.key,
      children: ({
        radio,
        checked,
        value: {
          id,
          title,
          subtitle,
          amount,
          flexible,
          currency,
          interval,
          minimumAmount
        }
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(TierBox, {
        minHeight: 50,
        py: 2,
        px: 3,
        bg: "white.full",
        "data-cy": "recurring-contribution-tier-box",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
            as: "span",
            mr: 3,
            flexWrap: "wrap",
            children: radio
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
            flexDirection: "column",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Text__WEBPACK_IMPORTED_MODULE_27__.P, {
              fontWeight: subtitle ? 600 : 400,
              color: "black.900",
              children: lodash_startCase__WEBPACK_IMPORTED_MODULE_0___default()(title)
            }), checked && flexible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx("div", {
                onClick: e => e.preventDefault(),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP, {
                  inputId: `tier-amount-select-${contribution.id}`,
                  "data-cy": "tier-amount-select",
                  onChange: setSelectedAmountOption,
                  value: selectedAmountOption,
                  options: amountOptions,
                  my: 2,
                  minWidth: 150,
                  isSearchable: false
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(ContributionInterval, {
                contribution: contribution,
                tier: {
                  id,
                  interval
                }
              }), selectedAmountOption?.label === OTHER_LABEL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
                flexDirection: "column",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Text__WEBPACK_IMPORTED_MODULE_27__.P, {
                  fontSize: "12px",
                  fontWeight: "600",
                  my: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                    id: "RecurringContributions.customAmount",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Custom amount"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    type: "number",
                    "data-cy": "recurring-contribution-custom-amount-input",
                    currency: currency,
                    value: inputAmountValue,
                    onChange: setInputAmountValue,
                    min: _lib_tier_utils__WEBPACK_IMPORTED_MODULE_16__/* .DEFAULT_MINIMUM_AMOUNT */ .hs,
                    precision: 2,
                    px: "2px"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Text__WEBPACK_IMPORTED_MODULE_27__.P, {
                  fontSize: "12px",
                  fontWeight: "600",
                  my: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                    defaultMessage: [{
                      "type": 0,
                      "value": "Min. amount: "
                    }, {
                      "type": 1,
                      "value": "minAmount"
                    }],
                    id: "RecurringContributions.minAmount",
                    values: {
                      minAmount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_12__/* .formatCurrency */ .xG)(minimumAmount, currency, {
                        locale
                      })
                    }
                  })
                })]
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: [flexible && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Text__WEBPACK_IMPORTED_MODULE_27__.P, {
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "18px",
                color: "black.500",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "ContributeTier.StartsAt",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Starts at"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Text__WEBPACK_IMPORTED_MODULE_27__.P, {
                fontWeight: 400,
                color: "black.900",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  amount: amount,
                  interval: interval.toLowerCase(),
                  currency: currency
                })
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      flexGrow: 1 / 4,
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
        flexGrow: 1,
        alignItems: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          width: "100%"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      flexGrow: 1 / 4,
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 50,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
        buttonSize: "tiny",
        minWidth: 75,
        onClick: onCloseEdit,
        height: 25,
        mr: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "actions.cancel",
          defaultMessage: [{
            "type": 0,
            "value": "Cancel"
          }]
        })
      }), isPaypal && selectedAmountOption ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_PayWithPaypalButton__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
        isLoading: !selectedAmountOption,
        isSubmitting: isSubmittingOrder,
        totalAmount: newTotalAmount,
        currency: contribution.amount.currency,
        interval: selectedContributeOption?.interval || (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_13__/* .getIntervalFromContributionFrequency */ .Pw)(contribution.frequency),
        host: contribution.toAccount.host,
        collective: contribution.toAccount,
        tier: selectedTier,
        style: {
          height: 25,
          size: 'small'
        },
        subscriptionStartDate: (0,_AddPaymentMethod__WEBPACK_IMPORTED_MODULE_29__/* .getSubscriptionStartDate */ .n)(contribution),
        onError: e => addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_28__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          title: e.message
        }),
        onSuccess: ({
          subscriptionId
        }) => updateOrder(selectedTier, selectedAmountOption, inputAmountValue, subscriptionId)
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
        height: 25,
        minWidth: 75,
        buttonSize: "tiny",
        buttonStyle: "secondary",
        loading: isSubmittingOrder,
        "data-cy": "recurring-contribution-update-order-button",
        onClick: () => updateOrder(selectedTier, selectedAmountOption, inputAmountValue),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "actions.update",
          defaultMessage: [{
            "type": 0,
            "value": "Update"
          }]
        })
      })]
    })]
  });
};

UpdateOrderPopUp.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdateOrderPopUp",
  "props": {
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateOrderPopUp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ manageContributionsQuery)
/* harmony export */ });
/* unused harmony export managedOrderFragment */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5824);


const managedOrderFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ManagedOrderFields on Order {
    id
    legacyId
    nextChargeDate
    paymentMethod {
      id
      service
      name
      type
      expiryDate
      data
      balance {
        value
        valueInCents
        currency
      }
    }
    amount {
      value
      valueInCents
      currency
    }
    totalAmount {
      value
      valueInCents
      currency
    }
    status
    description
    createdAt
    frequency
    tier {
      id
      name
    }
    totalDonations {
      value
      valueInCents
      currency
    }
    fromAccount {
      id
      name
      slug
      isIncognito
      type
    }
    toAccount {
      id
      slug
      name
      type
      description
      tags
      imageUrl
      settings
      ... on AccountWithHost {
        host {
          id
          slug
          paypalClientId
          supportedPaymentMethods
        }
      }
      ... on Organization {
        host {
          id
          slug
          paypalClientId
          supportedPaymentMethods
        }
      }
    }
    platformTipAmount {
      value
      valueInCents
    }
  }
`;
const manageContributionsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query RecurringContributions($slug: String!) {
    account(slug: $slug) {
      id
      legacyId
      slug
      name
      type
      settings
      imageUrl
      features {
        id
        ...NavbarFields
      }
      ... on AccountWithParent {
        parent {
          id
          slug
        }
      }
      orders(filter: OUTGOING, onlySubscriptions: true, includeIncognito: true) {
        totalCount
        nodes {
          id
          ...ManagedOrderFields
        }
      }
    }
  }
  ${_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_1__/* .collectiveNavbarFieldsFragment */ .AS}
  ${managedOrderFragment}
`;

/***/ }),

/***/ 13386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA5IiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwOSAyMDAiIGZpbGw9Im5vbmUiIAogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgb3BhY2l0eT0iMC42NCI+CiAgICA8cGF0aCBvcGFjaXR5PSIwLjY0IiBkPSJNMjMyLjg5MiAxOTkuNTI3QzI1OC41MzQgMTk5LjUyNyAyNzkuMzIgMTc4Ljc4MyAyNzkuMzIgMTUzLjE5NUMyNzkuMzIgMTI3LjYwNiAyNTguNTM0IDEwNi44NjMgMjMyLjg5MiAxMDYuODYzQzIwNy4yNSAxMDYuODYzIDE4Ni40NjMgMTI3LjYwNiAxODYuNDYzIDE1My4xOTVDMTg2LjQ2MyAxNzguNzgzIDIwNy4yNSAxOTkuNTI3IDIzMi44OTIgMTk5LjUyN1oiIGZpbGw9IiNFN0VFRkEiLz4KICAgIDxwYXRoIG9wYWNpdHk9IjAuNjQiIGQ9Ik0yOS4yMDUxIDE3NC4xMTlDNDUuMzM0NiAxNzQuMTE5IDU4LjQxMDEgMTYxLjA3MSA1OC40MTAxIDE0NC45NzVDNTguNDEwMSAxMjguODc5IDQ1LjMzNDYgMTE1LjgzIDI5LjIwNTEgMTE1LjgzQzEzLjA3NTYgMTE1LjgzIDAgMTI4Ljg3OSAwIDE0NC45NzVDMCAxNjEuMDcxIDEzLjA3NTYgMTc0LjExOSAyOS4yMDUxIDE3NC4xMTlaIiBmaWxsPSIjRTdFRUZBIi8+CiAgICA8cGF0aCBvcGFjaXR5PSIwLjY0IiBkPSJNMjM3LjAxIDUwLjgxNTlDMjQ2LjMxNiA1MC44MTU5IDI1My44NiA0My4yODggMjUzLjg2IDM0LjAwMThDMjUzLjg2IDI0LjcxNTcgMjQ2LjMxNiAxNy4xODc3IDIzNy4wMSAxNy4xODc3QzIyNy43MDUgMTcuMTg3NyAyMjAuMTYxIDI0LjcxNTcgMjIwLjE2MSAzNC4wMDE4QzIyMC4xNjEgNDMuMjg4IDIyNy43MDUgNTAuODE1OSAyMzcuMDEgNTAuODE1OVoiIGZpbGw9IiNFN0VFRkEiLz4KICAgIDxwYXRoIG9wYWNpdHk9IjAuNjQiIGQ9Ik0xOTUuMDc1IDE3LjE4NzdDMTk5LjgzMSAxNy4xODc3IDIwMy42ODcgMTMuMzQwMSAyMDMuNjg3IDguNTkzODZDMjAzLjY4NyAzLjg0NzYgMTk5LjgzMSAwIDE5NS4wNzUgMEMxOTAuMzE5IDAgMTg2LjQ2MyAzLjg0NzYgMTg2LjQ2MyA4LjU5Mzg2QzE4Ni40NjMgMTMuMzQwMSAxOTAuMzE5IDE3LjE4NzcgMTk1LjA3NSAxNy4xODc3WiIgZmlsbD0iI0U3RUVGQSIvPgogICAgPHBhdGggb3BhY2l0eT0iMC42NCIgZD0iTTMwMy43NTggMTk5QzMwNi42NTMgMTk5IDMwOSAxOTYuNjU4IDMwOSAxOTMuNzY5QzMwOSAxOTAuODggMzA2LjY1MyAxODguNTM4IDMwMy43NTggMTg4LjUzOEMzMDAuODYzIDE4OC41MzggMjk4LjUxNiAxOTAuODggMjk4LjUxNiAxOTMuNzY5QzI5OC41MTYgMTk2LjY1OCAzMDAuODYzIDE5OSAzMDMuNzU4IDE5OVoiIGZpbGw9IiNFN0VERjYiLz4KICAgIDxwYXRoIG9wYWNpdHk9IjAuNjQiIGQ9Ik0xNC4yMjgxIDU5Ljc4MzRDMTcuMTIzMiA1OS43ODM0IDE5LjQ3MDEgNTcuNDQxNCAxOS40NzAxIDU0LjU1MjNDMTkuNDcwMSA1MS42NjMzIDE3LjEyMzIgNDkuMzIxMyAxNC4yMjgxIDQ5LjMyMTNDMTEuMzMzMSA0OS4zMjEzIDguOTg2MjEgNTEuNjYzMyA4Ljk4NjIxIDU0LjU1MjNDOC45ODYyMSA1Ny40NDE0IDExLjMzMzEgNTkuNzgzNCAxNC4yMjgxIDU5Ljc4MzRaIiBmaWxsPSIjRTdFRUZBIi8+CiAgICA8cGF0aCBvcGFjaXR5PSIwLjY0IiBkPSJNNTUgMTk2Ljk2N0M1OS40MTgzIDE5Ni45NjcgNjMgMTkzLjM5MiA2MyAxODguOTgzQzYzIDE4NC41NzQgNTkuNDE4MyAxODEgNTUgMTgxQzUwLjU4MTcgMTgxIDQ3IDE4NC41NzQgNDcgMTg4Ljk4M0M0NyAxOTMuMzkyIDUwLjU4MTcgMTk2Ljk2NyA1NSAxOTYuOTY3WiIgZmlsbD0iI0RFRTZGNCIvPgogICAgPHBhdGggb3BhY2l0eT0iMC42NCIgZD0iTTg2LjkzMDkgMTIxLjY3NUMxMTEuNzQ2IDEyMS42NzUgMTMxLjg2MiAxMDEuNjAxIDEzMS44NjIgNzYuODM3NUMxMzEuODYyIDUyLjA3NDUgMTExLjc0NiAzMiA4Ni45MzA5IDMyQzYyLjExNjIgMzIgNDIgNTIuMDc0NSA0MiA3Ni44Mzc1QzQyIDEwMS42MDEgNjIuMTE2MiAxMjEuNjc1IDg2LjkzMDkgMTIxLjY3NVoiIGZpbGw9IiNFN0VFRkEiLz4KICAgIDxwYXRoIG9wYWNpdHk9IjAuNjQiIGQ9Ik0xNDEuNTMyIDE5Ni41MzhDMTg0Ljk1OCAxOTYuNTM4IDIyMC4xNjEgMTYxLjQwOCAyMjAuMTYxIDExOC4wNzJDMjIwLjE2MSA3NC43MzY3IDE4NC45NTggMzkuNjA2NCAxNDEuNTMyIDM5LjYwNjRDOTguMTA2NyAzOS42MDY0IDYyLjkwMzMgNzQuNzM2NyA2Mi45MDMzIDExOC4wNzJDNjIuOTAzMyAxNjEuNDA4IDk4LjEwNjcgMTk2LjUzOCAxNDEuNTMyIDE5Ni41MzhaIiBmaWxsPSIjREJFN0Y5Ii8+CiAgPC9nPgogIDxwYXRoIGQ9Ik0yNjcuMjggODQuNzAyMUwyMDQuNjc5IDcxLjM5NTdDMjAwLjM1NyA3MC40NzcxIDE5Ni4xMDkgNzMuMjM1OSAxOTUuMTkgNzcuNTU3NkwxNzguNTU4IDE1NS44MDlDMTc3LjYzOSAxNjAuMTMxIDE4MC4zOTggMTY0LjM3OSAxODQuNzE5IDE2NS4yOThMMjQ3LjMyMSAxNzguNjA0QzI1MS42NDMgMTc5LjUyMyAyNTUuODkxIDE3Ni43NjQgMjU2LjgwOSAxNzIuNDQyTDI3My40NDIgOTQuMTkwNUMyNzQuMzYxIDg5Ljg2ODggMjcxLjYwMiA4NS42MjA3IDI2Ny4yOCA4NC43MDIxWiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0Q1REFFMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtZGFzaGFycmF5PSIyIDIiLz4KICA8cGF0aCBkPSJNMTIxLjMyMSA3MS4zOTU4TDU4LjcxOTUgODQuNzAyMkM1NC4zOTc3IDg1LjYyMDggNTEuNjM5IDg5Ljg2ODkgNTIuNTU3NiA5NC4xOTA3TDY5LjE5MDUgMTcyLjQ0MkM3MC4xMDkxIDE3Ni43NjQgNzQuMzU3MyAxNzkuNTIzIDc4LjY3OSAxNzguNjA0TDE0MS4yOCAxNjUuMjk4QzE0NS42MDIgMTY0LjM3OSAxNDguMzYxIDE2MC4xMzEgMTQ3LjQ0MiAxNTUuODFMMTMwLjgwOSA3Ny41NTc3QzEyOS44OTEgNzMuMjM2IDEyNS42NDMgNzAuNDc3MiAxMjEuMzIxIDcxLjM5NThaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjRDVEQUUwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1kYXNoYXJyYXk9IjIgMiIvPgogIDxwYXRoIGQ9Ik0xOTUgNTZIMTMxQzEyNi41ODIgNTYgMTIzIDU5LjU4MTcgMTIzIDY0VjE0NEMxMjMgMTQ4LjQxOCAxMjYuNTgyIDE1MiAxMzEgMTUySDE5NUMxOTkuNDE4IDE1MiAyMDMgMTQ4LjQxOCAyMDMgMTQ0VjY0QzIwMyA1OS41ODE3IDE5OS40MTggNTYgMTk1IDU2WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0Q1REFFMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtZGFzaGFycmF5PSIyIDIiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjQ1NTMzMyIgZD0iTTE2MyAxMjlDMTc2LjI1NSAxMjkgMTg3IDExOC4yNTUgMTg3IDEwNUMxODcgOTEuNzQ1MiAxNzYuMjU1IDgxIDE2MyA4MUMxNDkuNzQ1IDgxIDEzOSA5MS43NDUyIDEzOSAxMDVDMTM5IDExOC4yNTUgMTQ5Ljc0NSAxMjkgMTYzIDEyOVoiIGZpbGw9IiNENURBRTAiLz4KICA8cGF0aCBkPSJNMTYzIDEyMC42QzE2NC4zMjYgMTIwLjYgMTY1LjQgMTE5LjUyNiAxNjUuNCAxMTguMkMxNjUuNCAxMTYuODc1IDE2NC4zMjYgMTE1LjggMTYzIDExNS44QzE2MS42NzUgMTE1LjggMTYwLjYgMTE2Ljg3NSAxNjAuNiAxMTguMkMxNjAuNiAxMTkuNTI2IDE2MS42NzUgMTIwLjYgMTYzIDEyMC42WiIgZmlsbD0iI0MyQzZDQyIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwLjM2MiAxMTFDMTUyLjY2MSAxMTEgMTU0LjYgMTA5LjU2MSAxNTQuNiAxMDcuMzA2QzE1NC42IDEwNS44ODEgMTUyLjIxNSAxMDYuMDU2IDE1Mi4yMTUgMTA3LjA5QzE1Mi4yMTUgMTA5LjEwNyAxNDguNjM1IDEwOS4xMjggMTQ4LjYzNSAxMDcuMDlDMTQ4LjY1MiAxMDUuOTQyIDE0Ni4yIDEwNS43OTMgMTQ2LjIgMTA3LjMwNkMxNDYuMiAxMDkuNTYxIDE0OC4wNjMgMTExIDE1MC4zNjIgMTExWiIgZmlsbD0iI0MyQzZDQyIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTc1LjU2MiAxMTFDMTc3Ljg2MSAxMTEgMTc5LjggMTA5LjU2MSAxNzkuOCAxMDcuMzA2QzE3OS44IDEwNS44ODEgMTc3LjQxNSAxMDYuMDU2IDE3Ny40MTUgMTA3LjA5QzE3Ny40MTUgMTA5LjEwNyAxNzMuODM0IDEwOS4xMjggMTczLjgzNCAxMDcuMDlDMTczLjg1MiAxMDUuOTQyIDE3MS40IDEwNS43OTMgMTcxLjQgMTA3LjMwNkMxNzEuNCAxMDkuNTYxIDE3My4yNjMgMTExIDE3NS41NjIgMTExWiIgZmlsbD0iI0MyQzZDQyIvPgo8L3N2Zz4K");

/***/ })

};
;