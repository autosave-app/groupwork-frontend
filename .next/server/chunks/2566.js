"use strict";
exports.id = 2566;
exports.ids = [2566];
exports.modules = {

/***/ 13633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputPercentage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69931);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71792);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_16__, _ToastProvider__WEBPACK_IMPORTED_MODULE_18__]);
([_StyledTooltip__WEBPACK_IMPORTED_MODULE_16__, _ToastProvider__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const confirmContributionMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation ConfirmContribution($order: OrderUpdateInput!, $action: ProcessOrderAction!) {
    processPendingOrder(order: $order, action: $action) {
      id
      status
      permissions {
        id
        canMarkAsPaid
        canMarkAsExpired
      }
      amount {
        currency
        valueInCents
      }
      platformTipAmount {
        currency
        valueInCents
      }
    }
  }
`;

const ContributionConfirmationModal = ({
  order,
  onClose,
  onSuccess
}) => {
  const defaultHostFeePercent = order.hostFeePercent || order.toAccount.bankTransfersHostFeePercent;
  const platformTipAmount = order.platformTipAmount?.valueInCents || 0;
  const amountInitiated = order.amount.valueInCents + platformTipAmount;
  const currency = order.amount.currency;
  const {
    0: amountReceived,
    1: setAmountReceived
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(amountInitiated);
  const {
    0: platformTip,
    1: setPlatformTip
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(platformTipAmount);
  const {
    0: paymentProcessorFee,
    1: setPaymentProcessorFee
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: hostFeePercent,
    1: setHostFeePercent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultHostFeePercent);
  const {
    0: processedAt,
    1: setProcessedAt
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .getCurrentDateInUTC */ .qo)());
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_18__/* .useToasts */ .e1)();
  const [confirmOrder, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(confirmContributionMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  });
  const amount = amountReceived - platformTip;
  const hostFee = Math.round(amount * hostFeePercent) / 100;
  const netAmount = amount - paymentProcessorFee - hostFee;
  const canAddHostFee = !order.toAccount.isHost;

  const triggerAction = async () => {
    // Prevent submitting the action if another one is being submitted at the same time
    if (loading) {
      return;
    }

    const orderUpdate = {
      id: order.id
    };

    if (amount !== order.amount.valueInCents) {
      orderUpdate.amount = {
        valueInCents: amount,
        currency
      };
    }

    if (paymentProcessorFee !== 0) {
      orderUpdate.paymentProcessorFee = {
        valueInCents: paymentProcessorFee,
        currency
      };
    }

    if (platformTip !== order.platformTipAmount?.valueInCents) {
      orderUpdate.platformTip = {
        valueInCents: platformTip,
        currency
      };
    }

    if (defaultHostFeePercent !== hostFeePercent) {
      orderUpdate.hostFeePercent = hostFeePercent;
    }

    if (processedAt) {
      orderUpdate.processedAt = new Date(processedAt);
    }

    try {
      await confirmOrder({
        variables: {
          order: orderUpdate,
          action: 'MARK_AS_PAID'
        }
      });
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_18__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
        message: intl.formatMessage({
          id: "76o3Hn",
          defaultMessage: [{
            "type": 0,
            "value": "Order confirmed successfully"
          }]
        })
      });
      onSuccess?.();
      onClose();
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_18__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_4__/* .i18nGraphqlException */ .t2)(intl, e)
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, {
    width: "578px",
    onClose: onClose,
    trapFocus: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_15__/* .CollectiveModalHeader */ .I4, {
      collective: order.toAccount,
      customText: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "nvYvGO",
        defaultMessage: [{
          "type": 0,
          "value": "Confirm contribution to "
        }, {
          "type": 1,
          "value": "payee"
        }],
        values: {
          payee: order.toAccount.name
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_15__/* .ModalBody */ .fe, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__.P, {
        mt: 3,
        fontSize: "13px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "o9RoEi",
          defaultMessage: [{
            "type": 0,
            "value": "Confirm the amount of funds you have received in your host account."
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        mt: 4,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          justifyContent: "space-between",
          alignItems: ['left', 'center'],
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "aQgOGz",
              defaultMessage: [{
                "type": 0,
                "value": "Amount initiated by "
              }, {
                "type": 1,
                "value": "contributor"
              }],
              values: {
                contributor: order.fromAccount.name
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "700",
            mt: ['8px', 0],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              width: "142px",
              amount: amountInitiated,
              currency: currency,
              precision: 2,
              amountStyles: null
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        borderStyle: "solid",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          justifyContent: "space-between",
          alignItems: ['left', 'center'],
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "u6JRVj",
              defaultMessage: [{
                "type": 0,
                "value": "Amount received"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            name: "amountReceived",
            "data-cy": "amount-received",
            width: "142px",
            currency: currency,
            onChange: value => setAmountReceived(value),
            value: amountReceived
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        borderStyle: "dashed",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          justifyContent: "space-between",
          alignItems: ['left', 'center'],
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "contribution.paymentFee",
              defaultMessage: [{
                "type": 0,
                "value": "Payment processor fee"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            name: "paymentProcessorFee",
            "data-cy": "payment-processor-fee",
            width: "142px",
            currency: currency,
            onChange: value => setPaymentProcessorFee(value),
            value: paymentProcessorFee
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        borderStyle: "dashed",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          justifyContent: "space-between",
          alignItems: ['left', 'center'],
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "Ng5BqM",
              defaultMessage: [{
                "type": 0,
                "value": "Platform tip amount"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            name: "platformTip",
            "data-cy": "platform-tip",
            width: "142px",
            currency: currency,
            onChange: value => setPlatformTip(value),
            value: platformTip
          })]
        })
      }), canAddHostFee && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          borderStyle: "dashed",
          mt: "16px",
          mb: "16px"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
            justifyContent: "space-between",
            alignItems: ['left', 'center'],
            flexDirection: ['column', 'row'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "400",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "HostFee",
                defaultMessage: [{
                  "type": 0,
                  "value": "Host fee"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledInputPercentage__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              name: "hostFeePercent",
              "data-cy": "host-fee-percent",
              value: hostFeePercent,
              onChange: value => setHostFeePercent(value)
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        borderStyle: "dashed",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          justifyContent: "space-between",
          alignItems: ['left', 'center'],
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("span", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "expense.incurredAt",
                defaultMessage: [{
                  "type": 0,
                  "value": "Date"
                }]
              }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "mqg/wj",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Date the funds were received."
                  }]
                }),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__.InfoCircle, {
                  size: 16
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
            name: "processedAt",
            type: "date",
            "data-cy": "processedAt",
            defaultValue: processedAt,
            onChange: e => setProcessedAt(e.target.value)
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        borderStyle: "dashed",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          justifyContent: ['center', 'right'],
          alignItems: "center",
          flexWrap: ['wrap', 'nowrap'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "btq6d3",
              defaultMessage: [{
                "type": 0,
                "value": "Amount for "
              }, {
                "type": 1,
                "value": "collective"
              }, {
                "type": 0,
                "value": ":"
              }],
              values: {
                collective: order.toAccount.name
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "700",
            ml: "16px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              amount: amount,
              currency: currency,
              precision: 2,
              amountStyles: null
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        borderStyle: "dashed",
        mt: "16px",
        mb: "16px"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          justifyContent: ['center', 'right'],
          alignItems: "center",
          flexWrap: ['wrap', 'nowrap'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "ll2h1q",
              defaultMessage: [{
                "type": 0,
                "value": "Payment Processor Fee:"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "700",
            ml: "16px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              amount: paymentProcessorFee,
              currency: currency,
              precision: 2,
              amountStyles: null
            })
          })]
        }), canAddHostFee && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          justifyContent: ['center', 'right'],
          alignItems: "center",
          flexWrap: ['wrap', 'nowrap'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "X9OWwg",
              defaultMessage: [{
                "type": 0,
                "value": "Host Fee:"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "700",
            ml: "16px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              amount: hostFee,
              currency: currency,
              precision: 2,
              amountStyles: null
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          justifyContent: ['center', 'right'],
          alignItems: "center",
          flexWrap: ['wrap', 'nowrap'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "KItvFZ",
              defaultMessage: [{
                "type": 0,
                "value": "Net Amount for "
              }, {
                "type": 1,
                "value": "collective"
              }, {
                "type": 0,
                "value": ":"
              }],
              values: {
                collective: order.toAccount.name
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "700",
            ml: "16px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              amount: netAmount,
              currency: currency,
              precision: 2,
              amountStyles: null
            })
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_15__/* .ModalFooter */ .mz, {
      isFullWidth: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        display: "flex",
        justifyContent: ['center', 'flex-end'],
        flexWrap: "Wrap",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          buttonStyle: "secondary",
          onClick: onClose,
          mr: [0, '16px'],
          mb: ['16px', 0],
          minWidth: ['268px', 0],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          minWidth: 240,
          buttonStyle: "primary",
          type: "submit",
          onClick: () => triggerAction(),
          "data-cy": "order-confirmation-modal-submit",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "k/uy+b",
            defaultMessage: [{
              "type": 0,
              "value": "Confirm contribution"
            }]
          })
        })]
      })
    })]
  });
};

ContributionConfirmationModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributionConfirmationModal",
  "props": {
    "order": {
      "description": "the order that is being confirmed",
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
    },
    "onSuccess": {
      "description": "Called if the action request is successfull",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributionConfirmationModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32651);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62131);
/* harmony import */ var _lib_policies__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(43176);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97079);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40242);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5993);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(29242);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(68185);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputPercentage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(69931);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(71792);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(66943);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(93150);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(31330);
/* harmony import */ var _TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(37066);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePicker__WEBPACK_IMPORTED_MODULE_13__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_14__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_23__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_28__, _ToastProvider__WEBPACK_IMPORTED_MODULE_30__]);
([_CollectivePicker__WEBPACK_IMPORTED_MODULE_13__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_14__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_23__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_28__, _ToastProvider__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const _excluded = ["host", "edit"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


































const EDITABLE_FIELDS = ['amount', 'description', 'expectedAt', 'fromAccount', 'fromAccountInfo', 'hostFeePercent', 'tier', 'memo', 'ponumber', 'paymentMethod'];

const debouncedLazyQuery = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()((searchFunc, variables) => {
  return searchFunc({
    variables
  });
}, 750);

const CreatePendingContributionModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_StyledModal__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP).withConfig({
  displayName: "CreatePendingOrderModal__CreatePendingContributionModalContainer",
  componentId: "sc-19ax7sb-0"
})(["width:100%;max-width:576px;padding:24px 30px;"]);

const AmountDetailsLine = ({
  label,
  value,
  currency,
  isLargeAmount
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
  justifyContent: "space-between",
  alignItems: "center",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: "500",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
      id: "withColon",
      defaultMessage: [{
        "type": 1,
        "value": "item"
      }, {
        "type": 0,
        "value": ":"
      }],
      values: {
        item: label
      }
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
    fontSize: isLargeAmount ? '18px' : '12px',
    lineHeight: isLargeAmount ? '27px' : '18px',
    fontWeight: "500",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      amount: value,
      currency: currency
    })
  })]
});

const createPendingContributionModalQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query CreatePendingContributionModal($slug: String!) {
    host(slug: $slug) {
      id
      legacyId
      type
      isHost
      name
      slug
      currency
      settings

      plan {
        id
        hostFees
      }
      policies {
        REQUIRE_2FA_FOR_ADMINS
      }
      hostFeePercent
      isTrustedHost
    }
  }
`;
const createPendingContributionModalCollectiveQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query CreatePendingContributionCollective($slug: String!) {
    account(slug: $slug) {
      id
      type
      currency
      childrenAccounts {
        nodes {
          id
          type
          legacyId
          isHost
          name
          slug
          currency
          settings
          imageUrl
          currency
          ... on AccountWithContributions {
            tiers {
              nodes {
                id
                id
                slug
                legacyId
                name
              }
            }
          }
        }
      }
      ... on AccountWithContributions {
        tiers {
          nodes {
            id
            id
            slug
            legacyId
            name
          }
        }
      }
    }
  }
`;
const createPendingContributionMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation CreatePendingContribution($order: PendingOrderCreateInput!) {
    createPendingOrder(order: $order) {
      legacyId
      id
      status
    }
  }
`;
const editPendingContributionMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation EditPendingContribution($order: PendingOrderEditInput!) {
    editPendingOrder(order: $order) {
      legacyId
      id
      status
    }
  }
`;

const validate = values => {
  const errors = (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_9__/* .requireFields */ .ay)(values, ['amount.valueInCents', 'fromAccount', 'toAccount', 'expectedAt', 'fromAccountInfo.name', 'fromAccountInfo.email']);
  (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_9__/* .verifyEmailPattern */ .Sn)(errors, values, 'fromAccountInfo.email');
  return errors;
}; // Build an account reference. Compatible with accounts from V1 and V2.


const buildAccountReference = input => {
  return typeof input.id === 'string' ? {
    id: input.id
  } : {
    legacyId: input.id
  };
};

const getTiersOptions = (intl, tiers) => {
  if (!tiers) {
    return [];
  }

  return [{
    value: null,
    label: intl.formatMessage({
      id: "ozkv/Y",
      defaultMessage: [{
        "type": 0,
        "value": "No tier"
      }]
    })
  }, ...tiers.map(tier => ({
    value: tier,
    label: `#${tier.legacyId} - ${tier.name}`
  }))];
};

const Field = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z).attrs({
  labelFontSize: '16px',
  labelFontWeight: '700'
}).withConfig({
  displayName: "CreatePendingOrderModal__Field",
  componentId: "sc-19ax7sb-1"
})([""]);

const CreatePendingContributionForm = ({
  host,
  onClose,
  error,
  edit
}) => {
  const {
    values,
    isSubmitting,
    setFieldValue
  } = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormikContext)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  const [getCollectiveInfo, {
    data,
    loading: collectiveLoading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useLazyQuery)(createPendingContributionModalCollectiveQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: host.slug
    }
  });
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    if (values.toAccount?.slug) {
      debouncedLazyQuery(getCollectiveInfo, {
        slug: values.toAccount.slug
      });
    }
  }, [values.toAccount]);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    setFieldValue('amount.currency', data?.account?.currency || host.currency);
  }, [data?.account]);
  const collective = data?.account;
  const currency = collective?.currency || host.currency;
  const childrenOptions = collective?.childrenAccounts?.nodes || [];
  const childAccount = values.childAccount?.id && childrenOptions.find(option => option.id === values.childAccount?.id);
  const canAddHostFee = host?.plan?.hostFees;
  const hostFeePercent = host.hostFeePercent;
  const tiersOptions = childAccount ? getTiersOptions(intl, childAccount?.tiers?.nodes || []) : getTiersOptions(intl, collective?.tiers?.nodes || []);
  const receiptTemplates = host?.settings?.invoice?.templates;
  const receiptTemplateTitles = [];

  if (receiptTemplates?.default?.title?.length > 0) {
    receiptTemplateTitles.push({
      value: 'default',
      label: receiptTemplates?.default?.title
    });
  }

  if (receiptTemplates?.alternative?.title?.length > 0) {
    receiptTemplateTitles.push({
      value: 'alternative',
      label: receiptTemplates?.alternative?.title
    });
  }

  const defaultSources = [{
    value: host,
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_CollectivePicker__WEBPACK_IMPORTED_MODULE_13__/* .DefaultCollectiveLabel */ .Os, {
      value: host
    })
  }];
  const expectedAtOptions = [{
    value: dayjs__WEBPACK_IMPORTED_MODULE_5___default()().add(1, 'month'),
    label: intl.formatMessage({
      id: "xjMZQI",
      defaultMessage: [{
        "type": 0,
        "value": "Within "
      }, {
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
              "value": "month"
            }]
          },
          "other": {
            "value": [{
              "type": 0,
              "value": "months"
            }]
          }
        },
        "offset": 0,
        "pluralType": "cardinal"
      }]
    }, {
      n: 1
    })
  }, {
    value: dayjs__WEBPACK_IMPORTED_MODULE_5___default()().add(3, 'month'),
    label: intl.formatMessage({
      id: "xjMZQI",
      defaultMessage: [{
        "type": 0,
        "value": "Within "
      }, {
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
              "value": "month"
            }]
          },
          "other": {
            "value": [{
              "type": 0,
              "value": "months"
            }]
          }
        },
        "offset": 0,
        "pluralType": "cardinal"
      }]
    }, {
      n: 3
    })
  }, {
    value: dayjs__WEBPACK_IMPORTED_MODULE_5___default()().add(6, 'month'),
    label: intl.formatMessage({
      id: "xjMZQI",
      defaultMessage: [{
        "type": 0,
        "value": "Within "
      }, {
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
              "value": "month"
            }]
          },
          "other": {
            "value": [{
              "type": 0,
              "value": "months"
            }]
          }
        },
        "offset": 0,
        "pluralType": "cardinal"
      }]
    }, {
      n: 6
    })
  }, {
    value: dayjs__WEBPACK_IMPORTED_MODULE_5___default()().add(1, 'year'),
    label: intl.formatMessage({
      id: "bBxR0J",
      defaultMessage: [{
        "type": 0,
        "value": "Within "
      }, {
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
              "value": "year"
            }]
          },
          "other": {
            "value": [{
              "type": 0,
              "value": "years"
            }]
          }
        },
        "offset": 0,
        "pluralType": "cardinal"
      }]
    }, {
      n: 1
    })
  }];

  if (edit?.pendingContributionData?.expectedAt) {
    expectedAtOptions.push({
      value: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(edit.pendingContributionData.expectedAt),
      label: intl.formatMessage({
        defaultMessage: [{
          "type": 0,
          "value": "Around "
        }, {
          "type": 1,
          "value": "date"
        }],
        id: "Fields.expectedAt.date"
      }, {
        date: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(edit.pendingContributionData.expectedAt).format('MMMM D, YYYY')
      })
    });
  }

  const paymentMethodOptions = [{
    value: 'UNKNOWN',
    label: intl.formatMessage({
      id: "Unknown",
      defaultMessage: [{
        "type": 0,
        "value": "Unknown"
      }]
    })
  }, {
    value: 'BANK_TRANSFER',
    label: intl.formatMessage({
      id: "Aj4Xx4",
      defaultMessage: [{
        "type": 0,
        "value": "Bank Transfer"
      }]
    })
  }, {
    value: 'CHECK',
    label: intl.formatMessage({
      id: "Check",
      defaultMessage: [{
        "type": 0,
        "value": "Check"
      }]
    })
  }];
  const hostFee = values.amount?.valueInCents && Math.round(values.amount.valueInCents * (values.hostFeePercent / 100));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
    "data-cy": "create-pending-contribution-form",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_25__/* .ModalBody */ .fe, {
      mt: "24px",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "toAccount",
        htmlFor: "CreatePendingContribution-toAccount",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "Lv3vva",
          defaultMessage: [{
            "type": 0,
            "value": "Create pending order for:"
          }]
        }),
        labelFontSize: "16px",
        labelFontWeight: "700",
        children: ({
          form,
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          inputId: field.id,
          "data-cy": "create-pending-contribution-to",
          types: ['COLLECTIVE', 'ORGANIZATION', 'FUND'],
          error: field.error,
          hostCollectiveIds: [host.legacyId],
          onBlur: () => form.setFieldTouched(field.name, true),
          onChange: ({
            value
          }) => form.setFieldValue(field.name, value),
          collective: field.value,
          disabled: edit
        })
      }), !edit && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "childAccount",
        htmlFor: "CreatePendingContribution-childAccount",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "9IRZG8",
          defaultMessage: [{
            "type": 0,
            "value": "Select event or project:"
          }]
        }),
        labelFontSize: "16px",
        labelFontWeight: "700",
        mt: 3,
        required: false,
        children: ({
          form,
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_CollectivePicker__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
          inputId: field.id,
          "data-cy": "create-pending-contribution-child",
          error: field.error,
          onBlur: () => form.setFieldTouched(field.name, true),
          onChange: ({
            value
          }) => form.setFieldValue(field.name, value ? {
            id: value?.id
          } : null),
          isLoading: collectiveLoading,
          collectives: childrenOptions,
          customOptions: [{
            value: null,
            label: intl.formatMessage({
              id: "450Fty",
              defaultMessage: [{
                "type": 0,
                "value": "None"
              }]
            })
          }],
          isSearchable: childrenOptions.length > 10,
          collective: childAccount,
          disabled: !values.toAccount
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "tier",
        htmlFor: "CreatePendingContribution-tier",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "b07w+D",
          defaultMessage: [{
            "type": 0,
            "value": "Tier"
          }]
        }),
        mt: 3,
        required: false,
        children: ({
          form,
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP, {
          inputId: field.id,
          "data-cy": "create-pending-contribution-tier",
          error: field.error,
          onBlur: () => form.setFieldTouched(field.name, true),
          onChange: ({
            value
          }) => form.setFieldValue(field.name, value),
          isLoading: collectiveLoading,
          options: tiersOptions,
          disabled: !values.toAccount,
          isSearchable: tiersOptions.length > 10,
          value: tiersOptions.find(option => !values.tier ? option.value === null : option.value?.id === values.tier.id)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "fromAccount",
        htmlFor: "CreatePendingContribution-fromAccount",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "8XrwYZ",
          defaultMessage: [{
            "type": 0,
            "value": "Who is this contribution from?"
          }]
        }),
        mt: 3,
        required: true,
        children: ({
          form,
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          inputId: field.id,
          "data-cy": "create-pending-contribution-source",
          types: ['USER', 'ORGANIZATION'],
          creatable: true,
          error: field.error,
          createCollectiveOptionalFields: ['location.address', 'location.country'],
          onBlur: () => form.setFieldTouched(field.name, true),
          customOptions: defaultSources,
          onChange: ({
            value
          }) => form.setFieldValue(field.name, value),
          collective: field.value
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "fromAccountInfo.name",
        htmlFor: "CreatePendingContribution-fromAccountInfo-name",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "ContactName",
          defaultMessage: [{
            "type": 0,
            "value": "Contact name"
          }]
        }),
        mt: 3,
        required: true,
        children: ({
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, _objectSpread({
          "data-cy": "create-pending-contribution-contact-name"
        }, field))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "fromAccountInfo.email",
        htmlFor: "CreatePendingContribution-fromAccountInfo-email",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "Fields.fromAccountInfo.email",
          defaultMessage: [{
            "type": 0,
            "value": "Contact email"
          }]
        }),
        hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "Fields.fromAccountInfo.email.hint",
          defaultMessage: [{
            "type": 0,
            "value": "All communication email will be sent to this email address."
          }]
        }),
        mt: 3,
        required: true,
        children: ({
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, _objectSpread({
          type: "email",
          placeholder: "e.g., yourname@yourhost.com",
          "data-cy": "create-pending-contribution-fromAccountInfo-email"
        }, field))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "ponumber",
        htmlFor: "CreatePendingContribution-ponumber",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "Fields.PONumber",
          defaultMessage: [{
            "type": 0,
            "value": "PO Number"
          }]
        }),
        mt: 3,
        hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "3Il70r",
          defaultMessage: [{
            "type": 0,
            "value": "External reference code for this order. This is usually a reference number from the contributor accounting system."
          }]
        }),
        required: false,
        children: ({
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, _objectSpread({
          type: "text",
          "data-cy": "create-pending-contribution-ponumber"
        }, field))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "memo",
        htmlFor: "CreatePendingContribution-memo",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "Expense.PrivateNote",
          defaultMessage: [{
            "type": 0,
            "value": "Private note"
          }]
        }),
        mt: 3,
        required: false,
        children: ({
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, _objectSpread({
          "data-cy": "create-pending-contribution-memo"
        }, field))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
        mt: 3,
        flexWrap: "wrap",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
          name: "amount.valueInCents",
          htmlFor: "CreatePendingContribution-amount",
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "Fields.amount",
            defaultMessage: [{
              "type": 0,
              "value": "Amount"
            }]
          }),
          required: true,
          flex: "1 1",
          children: ({
            form,
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            id: field.id,
            "data-cy": "create-pending-contribution-amount",
            currency: currency,
            placeholder: "0.00",
            error: field.error,
            value: field.value,
            maxWidth: "100%",
            onChange: value => form.setFieldValue(field.name, value),
            onBlur: () => form.setFieldTouched(field.name, true),
            currencyDisplay: undefined,
            min: undefined,
            max: undefined,
            precision: undefined,
            defaultValue: undefined,
            isEmpty: undefined,
            hasCurrencyPicker: undefined,
            onCurrencyChange: undefined,
            availableCurrencies: undefined
          })
        }), ( true) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
          name: "hostFeePercent",
          htmlFor: "CreatePendingContribution-hostFeePercent",
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxs)("span", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "NJsELs",
              defaultMessage: [{
                "type": 0,
                "value": "Host Fee"
              }]
            }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
              content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "AddFundsModal.hostFee.tooltip",
                defaultMessage: [{
                  "type": 0,
                  "value": "The default host fee percentage is set up in your host settings. The host fee is charged by the fiscal host to the collectives for the financial services provided."
                }]
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_4__.InfoCircle, {
                size: 16
              })
            })]
          }),
          ml: 3,
          required: false,
          children: ({
            form,
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledInputPercentage__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            id: field.id,
            placeholder: hostFeePercent,
            value: field.value,
            error: field.error,
            onChange: value => form.setFieldValue(field.name, value),
            onBlur: () => form.setFieldTouched(field.name, true),
            maxWidth: "100%"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "expectedAt",
        htmlFor: "CreatePendingContribution-expectedAt",
        mt: 3,
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "Fields.expectedAt",
          defaultMessage: [{
            "type": 0,
            "value": "When are these funds expected to arrive?"
          }]
        }),
        hint: values.expectedAt && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "Fields.expectedAt.date",
          defaultMessage: [{
            "type": 0,
            "value": "Around "
          }, {
            "type": 1,
            "value": "date"
          }],
          values: {
            date: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(values.expectedAt).format('DD/MM/YYYY')
          }
        }),
        required: true,
        children: ({
          form,
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP, {
          inputId: field.id,
          "data-cy": "create-pending-contribution-expectedAt",
          error: field.error,
          onBlur: () => form.setFieldTouched(field.name, true),
          onChange: ({
            value
          }) => form.setFieldValue(field.name, value),
          options: expectedAtOptions,
          value: expectedAtOptions.find(option => dayjs__WEBPACK_IMPORTED_MODULE_5___default()(values.expectedAt).isSame(option.value))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "paymentMethod",
        htmlFor: "CreatePendingContribution-.paymentMethod",
        mt: 3,
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "Fields.paymentMethod",
          defaultMessage: [{
            "type": 0,
            "value": "Payment method"
          }]
        }),
        required: false,
        children: ({
          form,
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP, {
          inputId: field.id,
          "data-cy": "create-pending-contribution-.paymentMethod",
          error: field.error,
          onBlur: () => form.setFieldTouched(field.name, true),
          onChange: ({
            value
          }) => form.setFieldValue(field.name, value),
          options: paymentMethodOptions,
          value: paymentMethodOptions.find(option => option.value === values.paymentMethod)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(Field, {
        name: "description",
        htmlFor: "CreatePendingContribution-description",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "Fields.description",
          defaultMessage: [{
            "type": 0,
            "value": "Description"
          }]
        }),
        mt: 3,
        required: false,
        children: ({
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
          "data-cy": "create-pending-contribution-description"
        }, field), {}, {
          placeholder: values.toAccount && `Financial contribution to ${values.toAccount.name}`
        }))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__.P, {
        fontSize: "14px",
        lineHeight: "17px",
        fontWeight: "500",
        mt: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "Details",
          defaultMessage: [{
            "type": 0,
            "value": "Details"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        my: 2,
        borderColor: "black.300"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(AmountDetailsLine, {
        value: values.amount?.valueInCents || 0,
        currency: currency,
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "AddFundsModal.fundingAmount",
          defaultMessage: [{
            "type": 0,
            "value": "Funding amount"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(AmountDetailsLine, {
        value: hostFee || 0,
        currency: currency,
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "AddFundsModal.hostFees",
          defaultMessage: [{
            "type": 0,
            "value": "Host fee charged to collective ("
          }, {
            "type": 1,
            "value": "hostFees"
          }, {
            "type": 0,
            "value": ")"
          }],
          values: {
            hostFees: `${values.hostFeePercent}%`
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        my: 2,
        borderColor: "black.300"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(AmountDetailsLine, {
        value: values.amount?.valueInCents - hostFee || 0,
        currency: currency,
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "AddFundsModal.netAmount",
          defaultMessage: [{
            "type": 0,
            "value": "Net amount received by collective"
          }]
        }),
        isLargeAmount: true
      }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        error: error,
        mt: 3,
        fontSize: "13px"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_25__/* .ModalFooter */ .mz, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
        justifyContent: "space-between",
        flexWrap: "wrap",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          mx: 2,
          mb: 1,
          minWidth: 100,
          onClick: onClose,
          type: "button",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          type: "submit",
          "data-cy": "create-pending-contribution-submit-btn",
          buttonStyle: "primary",
          mx: 2,
          mb: 1,
          minWidth: 120,
          loading: isSubmitting,
          children: edit ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "dIbvMd",
            defaultMessage: [{
              "type": 0,
              "value": "Edit pending contribution"
            }]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "qISY+c",
            defaultMessage: [{
              "type": 0,
              "value": "Create pending contribution"
            }]
          })
        })]
      })
    })]
  });
};

const CreatePendingContributionModal = _ref => {
  let {
    host: _host,
    edit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_30__/* .useToasts */ .e1)();
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(createPendingContributionModalQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: _host.slug
    }
  });
  const host = data?.host;
  const [createPendingOrder, {
    error: createOrderError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(createPendingContributionMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T
  });
  const [editPendingOrder, {
    error: editOrderError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(editPendingContributionMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T
  }); // No modal if logged-out

  if (!LoggedInUser) {
    return null;
  }

  const handleClose = () => {
    props.onClose();
  };

  const initialValues = edit ? _objectSpread(_objectSpread({}, edit), {}, {
    fromAccountInfo: edit.pendingContributionData?.fromAccountInfo,
    expectedAt: edit.pendingContributionData?.expectedAt,
    ponumber: edit.pendingContributionData?.ponumber,
    memo: edit.pendingContributionData?.memo,
    paymentMethod: edit.pendingContributionData?.paymentMethod
  }) : {
    hostFeePercent: host?.hostFeePercent
  };
  const error = createOrderError || editOrderError;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxs)(CreatePendingContributionModalContainer, _objectSpread(_objectSpread({}, props), {}, {
    trapFocus: true,
    onClose: handleClose,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_25__/* .ModalHeader */ .xB, {
      children: edit ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
        id: "sMnp2d",
        defaultMessage: [{
          "type": 0,
          "value": "Edit Pending Contribution #"
        }, {
          "type": 1,
          "value": "id"
        }],
        values: {
          id: edit.legacyId
        }
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
        id: "1i8Ufu",
        defaultMessage: [{
          "type": 0,
          "value": "Create Pending Contribution"
        }]
      })
    }), loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      mt: 2,
      height: 200
    }) : (0,_lib_policies__WEBPACK_IMPORTED_MODULE_33__/* .require2FAForAdmins */ .u)(host) && !LoggedInUser.hasTwoFactorAuth ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(_TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_31__/* .TwoFactorAuthRequiredMessage */ .l, {
      borderWidth: 0,
      noTitle: true
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
      initialValues: initialValues,
      enableReinitialize: true,
      validate: validate,
      onSubmit: async values => {
        if (edit) {
          const order = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_12__/* .omitDeep */ .Cd)(_objectSpread(_objectSpread({
            id: edit.id
          }, lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(values, EDITABLE_FIELDS)), {}, {
            fromAccount: buildAccountReference(values.fromAccount),
            tier: !values.tier ? null : {
              id: values.tier.id
            },
            expectedAt: values.expectedAt ? dayjs__WEBPACK_IMPORTED_MODULE_5___default()(values.expectedAt).format() : null
          }), ['__typename']);
          const result = await editPendingOrder({
            variables: {
              order
            }
          });
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_30__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
            message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "tUgAsm",
              defaultMessage: [{
                "type": 0,
                "value": "Pending order #"
              }, {
                "type": 1,
                "value": "orderId"
              }, {
                "type": 0,
                "value": " updated"
              }],
              values: {
                orderId: result.data.editPendingOrder.legacyId
              }
            })
          });
        } else {
          const order = _objectSpread(_objectSpread({}, values), {}, {
            fromAccount: buildAccountReference(values.fromAccount),
            toAccount: values.childAccount ? buildAccountReference(values.childAccount) : buildAccountReference(values.toAccount),
            childAccount: undefined,
            tier: !values.tier ? null : {
              id: values.tier.id
            },
            expectedAt: values.expectedAt ? dayjs__WEBPACK_IMPORTED_MODULE_5___default()(values.expectedAt).format() : null
          });

          const result = await createPendingOrder({
            variables: {
              order
            }
          });
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_30__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
            message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "JssJhj",
              defaultMessage: [{
                "type": 0,
                "value": "Pending order created with reference #"
              }, {
                "type": 1,
                "value": "orderId"
              }],
              values: {
                orderId: result.data.createPendingOrder.legacyId
              }
            })
          });
        }

        props?.onSuccess?.();
        handleClose();
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx(CreatePendingContributionForm, {
        host: host,
        onClose: handleClose,
        loading: loading,
        error: error,
        edit: edit
      })
    })]
  }));
};

CreatePendingContributionModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreatePendingContributionModal",
  "props": {
    "host": {
      "required": true,
      "tsType": {
        "name": "CreatePendingContributionModalQuery['host']",
        "raw": "CreatePendingContributionModalQuery['host']"
      },
      "description": ""
    },
    "edit": {
      "required": false,
      "tsType": {
        "name": "Partial",
        "elements": [{
          "name": "OrderPageQuery['order']",
          "raw": "OrderPageQuery['order']"
        }],
        "raw": "Partial<OrderPageQuery['order']>"
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
    },
    "onSuccess": {
      "required": false,
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
    },
    "loading": {
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    },
    "error": {
      "required": false,
      "tsType": {
        "name": "any"
      },
      "description": ""
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatePendingContributionModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24317);
/* harmony import */ var _lib_i18n_order_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(732);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["status"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const getTagType = status => {
  if ([_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.ERROR */ .D.ERROR, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.EXPIRED */ .D.EXPIRED, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.CANCELLED */ .D.CANCELLED, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.REJECTED */ .D.REJECTED, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.DISPUTED */ .D.DISPUTED, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.IN_REVIEW */ .D.IN_REVIEW].includes(status)) {
    return 'error';
  } else if ([_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.ACTIVE */ .D.ACTIVE, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.PAID */ .D.PAID].includes(status)) {
    return 'success';
  } else {
    return 'info';
  }
};

const OrderStatusTag = _ref => {
  let {
    status
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    type: getTagType(status),
    fontWeight: "600",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    "data-cy": "order-status-msg",
    fontSize: "10px"
  }, props), {}, {
    children: (0,_lib_i18n_order_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(intl, status)
  }));
};

OrderStatusTag.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrderStatusTag",
  "props": {
    "status": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(ORDER_STATUS)"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderStatusTag);

/***/ }),

/***/ 28374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ hasProcessButtons),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97881);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47988);
/* harmony import */ var _ContributionConfirmationModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13633);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContributionConfirmationModal__WEBPACK_IMPORTED_MODULE_9__, _ToastProvider__WEBPACK_IMPORTED_MODULE_11__]);
([_ContributionConfirmationModal__WEBPACK_IMPORTED_MODULE_9__, _ToastProvider__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const processPendingOrderMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation ProcessPendingOrder($id: String!, $action: ProcessOrderAction!) {
    processPendingOrder(order: { id: $id }, action: $action) {
      id
      status
      permissions {
        id
        canMarkAsPaid
        canMarkAsExpired
      }
    }
  }
`;
const ButtonLabel = styled_components__WEBPACK_IMPORTED_MODULE_5___default().span.withConfig({
  displayName: "ProcessOrderButtons__ButtonLabel",
  componentId: "sc-nmqw8x-0"
})({
  marginLeft: 6
});
const usablePermissions = ['canMarkAsPaid', 'canMarkAsExpired'];
/**
 * A small helper to know if expense process buttons should be displayed
 */

const hasProcessButtons = permissions => {
  return Object.keys(permissions).some(permission => usablePermissions.includes(permission) && Boolean(permissions[permission]));
};
/**
 * All the buttons to process an expense, displayed in a React.Fragment to let the parent
 * in charge of the layout.
 */

const ProcessOrderButtons = ({
  order,
  permissions,
  onSuccess
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .useToasts */ .e1)();
  const [selectedAction, setSelectedAction] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const mutationOptions = {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  };
  const [processOrder, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(processPendingOrderMutation, mutationOptions);
  const [hasConfirm, setConfirm] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [showContributionConfirmationModal, setShowContributionConfirmationModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);

  const triggerAction = async action => {
    // Prevent submitting the action if another one is being submitted at the same time
    if (loading) {
      return;
    }

    setSelectedAction(action);
    setConfirm(false);

    try {
      await processOrder({
        variables: {
          id: order.id,
          action
        }
      });
      onSuccess?.();
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .i18nGraphqlException */ .t2)(intl, e)
      });
    }
  };

  const getButtonProps = action => {
    const isSelectedAction = selectedAction === action;
    return {
      'data-cy': `${action}-button`,
      buttonSize: 'tiny',
      minWidth: 130,
      mx: 2,
      mt: 2,
      py: '9px',
      disabled: loading && !isSelectedAction,
      loading: loading && isSelectedAction,
      onClick: () => {
        setSelectedAction(action);
        setConfirm(true);
      }
    };
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [permissions.canMarkAsPaid && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, getButtonProps('MARK_AS_PAID')), {}, {
      onClick: () => setShowContributionConfirmationModal(true),
      buttonStyle: "successSecondary",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__.Check, {
        size: 12
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ButtonLabel, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "order.markAsCompleted",
          defaultMessage: [{
            "type": 0,
            "value": "Mark as completed"
          }]
        })
      })]
    })), permissions.canMarkAsExpired && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, getButtonProps('MARK_AS_EXPIRED')), {}, {
      buttonStyle: "dangerSecondary",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3__.Times, {
        size: 14
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ButtonLabel, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "order.markAsExpired",
          defaultMessage: [{
            "type": 0,
            "value": "Mark as expired"
          }]
        })
      })]
    })), hasConfirm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      onClose: () => setConfirm(false),
      continueHandler: () => triggerAction(selectedAction),
      isDanger: selectedAction === 'MARK_AS_EXPIRED',
      isSuccess: selectedAction === 'MARK_AS_PAID',
      continueLabel: selectedAction === 'MARK_AS_EXPIRED' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "order.markAsExpired",
        defaultMessage: [{
          "type": 0,
          "value": "Mark as expired"
        }]
      }) : undefined,
      header: selectedAction === 'MARK_AS_PAID' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "Order.MarkPaidConfirm",
        defaultMessage: [{
          "type": 0,
          "value": "Mark this order as paid?"
        }]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "Order.MarkExpiredConfirm",
        defaultMessage: [{
          "type": 0,
          "value": "Mark this order as expired?"
        }]
      }),
      children: [selectedAction === 'MARK_AS_PAID' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "Order.MarkPaidConfirmDetails",
        defaultMessage: [{
          "type": 0,
          "value": "Confirm you have received the funds for this contribution."
        }]
      }), selectedAction === 'MARK_AS_EXPIRED' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "Order.MarkPaidExpiredDetails",
        defaultMessage: [{
          "type": 0,
          "value": "This contribution will be marked as expired removed from Pending Contributions. You can find this page by searching for its ID in the search bar or through the status filter in the Financial Contributions page."
        }]
      })]
    }), showContributionConfirmationModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ContributionConfirmationModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      order: order,
      onClose: () => setShowContributionConfirmationModal(false),
      onSuccess: onSuccess
    })]
  });
};

ProcessOrderButtons.__docgenInfo = {
  "description": "All the buttons to process an expense, displayed in a React.Fragment to let the parent\nin charge of the layout.",
  "methods": [],
  "displayName": "ProcessOrderButtons",
  "props": {
    "permissions": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "canMarkAsExpired": {
            "name": "bool",
            "required": false
          },
          "canMarkAsPaid": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "order": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "legacyId": {
            "name": "number",
            "required": false
          },
          "paymentMethod": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    },
    "onError": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProcessOrderButtons);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ i18nPaymentMethodProviderType)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1808);
 // TODO(paymentMethodType): migrate to service+type


const i18nTypes = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.CREDIT_CARD */ .oy.CREDIT_CARD]: {
    id: "CreditCard",
    defaultMessage: [{
      "type": 0,
      "value": "Credit Card"
    }]
  },
  [_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.BANK_TRANSFER */ .oy.BANK_TRANSFER]: {
    id: "Manual",
    defaultMessage: [{
      "type": 0,
      "value": "Manual (Bank Transfer)"
    }]
  },
  [_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.GIFT_CARD */ .oy.GIFT_CARD]: {
    id: "GiftCard",
    defaultMessage: [{
      "type": 0,
      "value": "Gift Card"
    }]
  },
  [_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.PREPAID_BUDGET */ .oy.PREPAID_BUDGET]: {
    id: "Prepaid",
    defaultMessage: [{
      "type": 0,
      "value": "Prepaid Card"
    }]
  },
  [_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.ACCOUNT_BALANCE */ .oy.ACCOUNT_BALANCE]: {
    id: "ServiceBalance",
    defaultMessage: [{
      "type": 1,
      "value": "service"
    }, {
      "type": 0,
      "value": " balance"
    }]
  },
  [_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.CRYPTO */ .oy.CRYPTO]: {
    id: "Crypto",
    defaultMessage: [{
      "type": 0,
      "value": "Crypto"
    }]
  },
  // PENDING Contributions
  CHECK: {
    id: "Check",
    defaultMessage: [{
      "type": 0,
      "value": "Check"
    }]
  },
  UNKNOWN: {
    id: "Unknown",
    defaultMessage: [{
      "type": 0,
      "value": "Unknown"
    }]
  }
});
/**
 * Similar to ``, but specialized for the GQLV2's `PaymentMethodType`
 * from `paymentMethod.providerType`
 */

const i18nPaymentMethodProviderType = (intl, providerType) => {
  if (providerType === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.PAYPAL */ .oy.PAYPAL) {
    return 'PayPal';
  } else if (i18nTypes[providerType]) {
    return intl.formatMessage(i18nTypes[providerType], {
      service: 'Open Collective'
    });
  } else {
    return providerType;
  }
};

/***/ })

};
;