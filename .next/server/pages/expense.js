(() => {
var exports = {};
exports.id = 7491;
exports.ids = [7491];
exports.modules = {

/***/ 29032:
/***/ ((module) => {

module.exports = "/_next/static/images/pidgeon-0ed27f24287e8bd6972c57353f79abd7.png";

/***/ }),

/***/ 48544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65985);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46233);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97079);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19156);
/* harmony import */ var _components_StyledLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51082);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var _public_static_images_pidgeon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29032);
/* harmony import */ var _public_static_images_pidgeon_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_pidgeon_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__]);
_lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















const resendDraftExpenseInviteMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation ResendDraftExpenseInvite($expense: ExpenseReferenceInput!) {
    resendDraftExpenseInvite(expense: $expense) {
      id
    }
  }
`;
const PidgeonIllustration = styled_components__WEBPACK_IMPORTED_MODULE_4___default().img.attrs({
  src: (_public_static_images_pidgeon_png__WEBPACK_IMPORTED_MODULE_14___default())
}).withConfig({
  displayName: "ExpenseInviteNotificationBanner__PidgeonIllustration",
  componentId: "sc-i0jwit-0"
})(["width:132px;height:132px;"]);

const ResendDraftInviteButton = ({
  expense
}) => {
  const [resendDraftInvite, {
    loading,
    error,
    data
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(resendDraftExpenseInviteMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T
  });
  const success = !error && data?.resendDraftExpenseInvite?.id;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    buttonStyle: success ? 'successSecondary' : 'primary',
    buttonSize: "tiny",
    mr: 1,
    loading: loading,
    disabled: success,
    onClick: () => resendDraftInvite({
      variables: {
        expense: lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(expense, ['id', 'legacyId'])
      }
    }),
    children: success ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "ResendInviteSuccessful",
      defaultMessage: [{
        "type": 0,
        "value": "Invite sent"
      }]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "ResendInvite",
      defaultMessage: [{
        "type": 0,
        "value": "Resend invite"
      }]
    })
  });
};

const ResendSignInEmailButton = ({
  createdUser
}) => {
  const {
    loading,
    call,
    error,
    data
  } = (0,_lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__/* .useAsyncCall */ .N)(async () => {
    const userExists = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__/* .checkUserExistence */ .Tl)(createdUser.email);

    if (userExists) {
      const redirect = window.location.pathname + window.location.search;
      return await (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__/* .signin */ .xJ)({
        user: {
          email: createdUser.email
        },
        redirect,
        websiteUrl: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__/* .getWebsiteUrl */ .ls)()
      });
    } else {
      throw Error('User does not exist.');
    }
  });
  const success = !error && data?.success;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    buttonStyle: success ? 'successSecondary' : 'primary',
    buttonSize: "tiny",
    mr: 1,
    loading: loading,
    disabled: success,
    onClick: call,
    children: success ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "ResendEmailSuccessful",
      defaultMessage: [{
        "type": 0,
        "value": "Check your inbox!"
      }]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "ResendEmail",
      defaultMessage: [{
        "type": 0,
        "value": "Resend email"
      }]
    })
  });
};

const ExpenseInviteNotificationBanner = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_StyledCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    py: 3,
    px: "26px",
    mb: 4,
    borderStyle: 'solid',
    "data-cy": "expense-draft-banner",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(PidgeonIllustration, {
        alt: ""
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        ml: [0, 2],
        maxWidth: "448px",
        flexDirection: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_13__.H4, {
          mb: "10px",
          fontWeight: "500",
          children: props.createdUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "VerifyEmailAddress",
            defaultMessage: [{
              "type": 0,
              "value": "Verify your email address"
            }]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "InviteOnItsWay",
            defaultMessage: [{
              "type": 0,
              "value": "Your invite is on its way"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
          lineHeight: "20px",
          children: props.createdUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "VerifyEmailInstructions",
            defaultMessage: [{
              "type": 0,
              "value": "A verification email has been sent to "
            }, {
              "type": 1,
              "value": "email"
            }, {
              "type": 0,
              "value": ". Click the link to complete submitting this expense. If you have not received the email, please check your spam."
            }],
            values: {
              email: props.createdUser?.email || props.expense.draft?.payee?.name
            }
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Expense.InviteIsOnItsWay.Description",
            defaultMessage: [{
              "type": 0,
              "value": "An invitation to submit this expense has been sent to "
            }, {
              "type": 1,
              "value": "email"
            }, {
              "type": 0,
              "value": ". Once they confirm and finish the process, it will appear on the expenses list."
            }],
            values: {
              email: props.expense.draft?.payee?.email || props.expense.draft?.payee?.name
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
          mt: "10px",
          children: [props.createdUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(ResendSignInEmailButton, {
            createdUser: props.createdUser
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(ResendDraftInviteButton, {
            expense: props.expense
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_StyledLink__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            href: "/help",
            buttonStyle: "standard",
            buttonSize: "tiny",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "error.contactSupport",
              defaultMessage: [{
                "type": 0,
                "value": "Contact support"
              }]
            })
          })]
        })]
      })]
    })
  });
};

ExpenseInviteNotificationBanner.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseInviteNotificationBanner",
  "props": {
    "createdUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "expense": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseInviteNotificationBanner);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37278);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87268);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const ExpenseMissingReceiptNotificationBanner = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    py: 3,
    px: "26px",
    mb: 4,
    type: "warning",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
        ml: [0, 2],
        flexDirection: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_5__.H4, {
          mb: "10px",
          fontWeight: "500",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "AttachReceipt",
            defaultMessage: [{
              "type": 0,
              "value": "Submit receipt"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
          lineHeight: "20px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "AttachReceiptInstructions",
            defaultMessage: [{
              "type": 0,
              "value": "This expense was automatically created by charging a linked credit card. To complete the process, add a description and upload the receipt. All charges must have receipts."
            }]
          })
        }), props.onEdit && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
          mt: "10px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            buttonSize: "tiny",
            mr: 1,
            onClick: props.onEdit,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "Expense.edit",
              defaultMessage: [{
                "type": 0,
                "value": "Edit expense"
              }]
            })
          })
        })]
      })
    })
  });
};

ExpenseMissingReceiptNotificationBanner.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseMissingReceiptNotificationBanner",
  "props": {
    "onEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseMissingReceiptNotificationBanner);

/***/ }),

/***/ 64827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ expenses_PrivateCommentsMessage)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 1 modules
var MessageBox = __webpack_require__(37278);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./components/icons/PrivateLockIcon.png
/* harmony default export */ const PrivateLockIcon = ("data:image/png;base64,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");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/expenses/PrivateCommentsMessage.js
const _excluded = ["isAllowed", "isLoading"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const PrivateCommentsMessage_PrivateLockIcon = external_styled_components_default().img.attrs({
  src: PrivateLockIcon
}).withConfig({
  displayName: "PrivateCommentsMessage__PrivateLockIcon",
  componentId: "sc-j2cs7v-0"
})(["width:32px;height:32px;margin-left:8px;"]);

const PrivateCommentsMessage = _ref => {
  let {
    isAllowed,
    isLoading
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if (isLoading) {
    return /*#__PURE__*/jsx_runtime_.jsx(LoadingPlaceholder/* default */.Z, {
      height: 76,
      borderRadius: 8
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(MessageBox/* default */.Z, _objectSpread(_objectSpread({
    type: "info"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      alignItems: "center",
      my: 1,
      children: [/*#__PURE__*/jsx_runtime_.jsx(PrivateCommentsMessage_PrivateLockIcon, {
        alt: ""
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
        ml: 3,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          fontWeight: "bold",
          fontSize: "12px",
          lineHeight: "20px",
          children: isAllowed ? /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "PrivateCommentsMessage.Allowed",
            defaultMessage: [{
              "type": 0,
              "value": "Your comments are private."
            }]
          }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "PrivateCommentsMessage.NotAllowed",
            defaultMessage: [{
              "type": 0,
              "value": "Comments are private."
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          children: isAllowed ? /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "PrivateCommentsMessage.AllowedDetails",
            defaultMessage: [{
              "type": 0,
              "value": "Expenses comments are private, because they sometimes contain confidential information such as payment details. Only the expense submitter and the admins can see them."
            }]
          }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "PrivateCommentsMessage.NotAllowedDetails",
            defaultMessage: [{
              "type": 0,
              "value": "You must be signed in as an admin or the expense submitter to read comments on an expense."
            }]
          })
        })]
      })]
    })
  }));
};

PrivateCommentsMessage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PrivateCommentsMessage",
  "props": {
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isAllowed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const expenses_PrivateCommentsMessage = (PrivateCommentsMessage);

/***/ }),

/***/ 27408:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75263);
/* harmony import */ var lodash_update__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_update__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23672);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41238);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(38083);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19878);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12136);
/* harmony import */ var _lib_expenses__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(45624);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(25896);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(97585);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(69078);
/* harmony import */ var _components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(14193);
/* harmony import */ var _components_conversations_graphql__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(37436);
/* harmony import */ var _components_conversations_Thread__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(4821);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(73908);
/* harmony import */ var _components_expenses_ExpenseAttachedFiles__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(99754);
/* harmony import */ var _components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(52497);
/* harmony import */ var _components_expenses_ExpenseInfoSidebar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(24018);
/* harmony import */ var _components_expenses_ExpenseInviteNotificationBanner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(48544);
/* harmony import */ var _components_expenses_ExpenseMissingReceiptNotificationBanner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(24061);
/* harmony import */ var _components_expenses_ExpenseNotesForm__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(12426);
/* harmony import */ var _components_expenses_ExpenseRecurringBanner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(7852);
/* harmony import */ var _components_expenses_ExpenseSummary__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(25990);
/* harmony import */ var _components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(17738);
/* harmony import */ var _components_expenses_MobileCollectiveInfoStickyBar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(74448);
/* harmony import */ var _components_expenses_PrivateCommentsMessage__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(64827);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(16159);
/* harmony import */ var _components_HTMLContent__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(74770);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(88705);
/* harmony import */ var _components_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(6845);
/* harmony import */ var _components_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(40777);
/* harmony import */ var _components_LinkCollective__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(97619);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(29242);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(37278);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(84842);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledCard__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(19156);
/* harmony import */ var _components_StyledCheckbox__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(41433);
/* harmony import */ var _components_StyledLink__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(51082);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(90998);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(31330);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_21__, _components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_24__, _components_conversations_Thread__WEBPACK_IMPORTED_MODULE_26__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__, _components_expenses_ExpenseAttachedFiles__WEBPACK_IMPORTED_MODULE_28__, _components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_29__, _components_expenses_ExpenseInviteNotificationBanner__WEBPACK_IMPORTED_MODULE_31__, _components_expenses_ExpenseNotesForm__WEBPACK_IMPORTED_MODULE_33__, _components_expenses_ExpenseRecurringBanner__WEBPACK_IMPORTED_MODULE_34__, _components_expenses_ExpenseSummary__WEBPACK_IMPORTED_MODULE_35__, _components_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_43__, _components_Page__WEBPACK_IMPORTED_MODULE_47__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_53__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_21__, _components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_24__, _components_conversations_Thread__WEBPACK_IMPORTED_MODULE_26__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__, _components_expenses_ExpenseAttachedFiles__WEBPACK_IMPORTED_MODULE_28__, _components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_29__, _components_expenses_ExpenseInviteNotificationBanner__WEBPACK_IMPORTED_MODULE_31__, _components_expenses_ExpenseNotesForm__WEBPACK_IMPORTED_MODULE_33__, _components_expenses_ExpenseRecurringBanner__WEBPACK_IMPORTED_MODULE_34__, _components_expenses_ExpenseSummary__WEBPACK_IMPORTED_MODULE_35__, _components_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_43__, _components_Page__WEBPACK_IMPORTED_MODULE_47__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_53__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable graphql/template-strings */



















































const getVariableFromProps = props => {
  const firstOfCurrentYear = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(new Date(new Date().getFullYear(), 0, 1)).utc(true).toISOString();
  return {
    legacyExpenseId: props.legacyExpenseId,
    draftKey: props.draftKey,
    totalPaidExpensesDateFrom: firstOfCurrentYear
  };
};

const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__.defineMessages)({
  title: {
    id: "ExpensePage.title",
    defaultMessage: [{
      "type": 1,
      "value": "title"
    }, {
      "type": 0,
      "value": " · Expense #"
    }, {
      "type": 1,
      "value": "id"
    }]
  }
});
const expensePageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql`
  query ExpensePage($legacyExpenseId: Int!, $draftKey: String, $offset: Int, $totalPaidExpensesDateFrom: DateTime) {
    expense(expense: { legacyId: $legacyExpenseId }, draftKey: $draftKey) {
      id
      ...ExpensePageExpenseFields
      comments(limit: 100, offset: $offset) {
        totalCount
        nodes {
          id
          ...CommentFields
        }
      }
    }

    # As it uses a dedicated variable this needs to be separated from the ExpensePageExpenseFields fragment
    expensePayeeStats: expense(expense: { legacyId: $legacyExpenseId }) {
      id
      payee {
        id
        stats {
          id
          totalPaidInvoices: totalPaidExpenses(expenseType: [INVOICE], dateFrom: $totalPaidExpensesDateFrom) {
            valueInCents
            currency
          }
          totalPaidReceipts: totalPaidExpenses(expenseType: [RECEIPT], dateFrom: $totalPaidExpensesDateFrom) {
            valueInCents
            currency
          }
          totalPaidGrants: totalPaidExpenses(expenseType: [GRANT], dateFrom: $totalPaidExpensesDateFrom) {
            valueInCents
            currency
          }
        }
      }
    }

    loggedInAccount {
      id
      ...LoggedInAccountExpensePayoutFields
    }
  }

  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_36__/* .loggedInAccountExpensePayoutFieldsFragment */ .sU}
  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_36__/* .expensePageExpenseFieldsFragment */ .Wg}
  ${_components_conversations_graphql__WEBPACK_IMPORTED_MODULE_25__/* .commentFieldsFragment */ .Y6}
`;
const editExpenseMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql`
  mutation EditExpense($expense: ExpenseUpdateInput!, $draftKey: String) {
    editExpense(expense: $expense, draftKey: $draftKey) {
      id
      ...ExpensePageExpenseFields
    }
  }

  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_36__/* .expensePageExpenseFieldsFragment */ .Wg}
`;
const verifyExpenseMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql`
  mutation VerifyExpense($expense: ExpenseReferenceInput!, $draftKey: String) {
    verifyExpense(expense: $expense, draftKey: $draftKey) {
      id
      ...ExpensePageExpenseFields
    }
  }

  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_36__/* .expensePageExpenseFieldsFragment */ .Wg}
`;

const PrivateNoteLabel = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_52__/* .Span */ .Dr, {
    fontSize: "12px",
    color: "black.700",
    fontWeight: "bold",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
      id: "Expense.PrivateNote",
      defaultMessage: [{
        "type": 0,
        "value": "Private note"
      }]
    }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
      color: "#969BA3"
    })]
  });
};

const PAGE_STATUS = {
  VIEW: 1,
  EDIT: 2,
  EDIT_SUMMARY: 3
};
const SIDE_MARGIN_WIDTH = 'calc((100% - 1200px) / 2)';

class ExpensePage extends (react__WEBPACK_IMPORTED_MODULE_7___default().Component) {
  static getInitialProps({
    query: {
      parentCollectiveSlug,
      collectiveSlug,
      ExpenseId,
      key,
      edit
    }
  }) {
    return {
      parentCollectiveSlug,
      collectiveSlug,
      edit,
      draftKey: key,
      legacyExpenseId: parseInt(ExpenseId)
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "onSummarySubmit", async () => {
      try {
        this.setState({
          isSubmitting: true,
          error: null
        });
        const {
          editedExpense
        } = this.state;

        if (!editedExpense.payee.id && this.state.newsletterOptIn) {
          editedExpense.payee.newsletterOptIn = this.state.newsletterOptIn;
        }

        await this.props.editExpense({
          variables: {
            expense: (0,_components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_29__/* .prepareExpenseForSubmit */ .dm)(editedExpense),
            draftKey: this.props.data.expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_15__/* ["default"].DRAFT */ .Z.DRAFT ? this.props.draftKey : null
          }
        });

        if (this.props.data.expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_16__/* ["default"].CHARGE */ .Z.CHARGE) {
          await this.props.data.refetch();
        }

        const createdUser = editedExpense?.payee;
        this.setState({
          status: PAGE_STATUS.VIEW,
          isSubmitting: false,
          editedExpense: undefined,
          error: null,
          createdUser
        });
      } catch (e) {
        this.setState({
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_17__/* .getErrorFromGraphqlException */ .H1)(e),
          isSubmitting: false
        });
        this.scrollToExpenseTop();
      }
    });

    _defineProperty(this, "onNotesChanges", e => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState(state => ({
        editedExpense: _objectSpread(_objectSpread({}, state.editedExpense), {}, {
          [name]: value
        })
      }));
    });

    _defineProperty(this, "getSuggestedTags", memoize_one__WEBPACK_IMPORTED_MODULE_11___default()(_lib_collective_lib__WEBPACK_IMPORTED_MODULE_14__/* .getSuggestedTags */ .P5));

    _defineProperty(this, "onCommentAdded", comment => {
      // Add comment to cache if not already fetched
      const [data, query, variables] = this.clonePageQueryCacheData();

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'expense.comments.nodes', comments => lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1___default()([...comments, comment], 'id'));

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'expense.comments.totalCount', totalCount => totalCount + 1);

      this.props.client.writeQuery({
        query,
        variables,
        data
      });
    });

    _defineProperty(this, "onCommentDeleted", comment => {
      const [data, query, variables] = this.clonePageQueryCacheData();

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'expense.comments.nodes', comments => comments.filter(c => c.id !== comment.id));

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'expense.comments.totalCount', totalCount => totalCount - 1);

      this.props.client.writeQuery({
        query,
        variables,
        data
      });
    });

    _defineProperty(this, "fetchMore", async () => {
      const {
        legacyExpenseId,
        draftKey,
        data
      } = this.props; // refetch before fetching more as comments added to the cache can change the offset

      await data.refetch();
      await data.fetchMore({
        variables: {
          legacyExpenseId,
          draftKey,
          offset: lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(data, 'expense.comments.nodes', []).length
        },
        updateQuery: (prev, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          const newValues = {};
          newValues.expense = _objectSpread(_objectSpread({}, prev.expense), {}, {
            comments: _objectSpread(_objectSpread({}, fetchMoreResult.expense.comments), {}, {
              nodes: [...prev.expense.comments.nodes, ...fetchMoreResult.expense.comments.nodes]
            })
          });
          return Object.assign({}, prev, newValues);
        }
      });
    });

    _defineProperty(this, "getThreadItems", memoize_one__WEBPACK_IMPORTED_MODULE_11___default()((comments, activities) => {
      return lodash_sortBy__WEBPACK_IMPORTED_MODULE_2___default()([...(comments || []), ...activities], 'createdAt');
    }));

    _defineProperty(this, "onEditBtnClick", async () => {
      return this.setState(() => ({
        status: PAGE_STATUS.EDIT,
        editedExpense: this.props.data.expense
      }));
    });

    _defineProperty(this, "onDelete", async expense => {
      const collective = expense.account;
      const parentCollectiveSlugRoute = collective.parent?.slug ? `${collective.parent?.slug}/` : '';
      const collectiveType = collective.parent ? (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_14__/* .getCollectiveTypeForUrl */ .rf)(collective) : undefined;
      const collectiveTypeRoute = collectiveType ? `${collectiveType}/` : '';
      return this.props.router.replace(`${parentCollectiveSlugRoute}${collectiveTypeRoute}${collective.slug}/expenses`);
    });

    this.expenseTopRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createRef();
    this.state = {
      hasRefetchedDataForUser: Boolean(props.LoggedInUser),
      // If the page is loaded directly with a logged in user, we can consider the query was already authenticated
      error: null,
      status: this.props.draftKey && this.props.data.expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_15__/* ["default"].DRAFT */ .Z.DRAFT ? PAGE_STATUS.EDIT : PAGE_STATUS.VIEW,
      editedExpense: null,
      isSubmitting: false,
      isPoolingEnabled: true,
      tos: false,
      newsletterOptIn: false,
      createdUser: null
    };
    this.pollingInterval = 60;
    this.pollingTimeout = null;
    this.pollingStarted = false;
    this.pollingPaused = false;
    this.handlePolling = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(this.handlePolling.bind(this), 100);
  }

  componentDidMount() {
    const {
      router,
      data,
      legacyExpenseId
    } = this.props;
    const account = data?.account;
    (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_20__/* .addParentToURLIfMissing */ .Bc)(router, account, `/expenses/${legacyExpenseId}`);
    const shouldEditDraft = this.props.data.expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_15__/* ["default"].DRAFT */ .Z.DRAFT && this.props.draftKey;

    if (shouldEditDraft) {
      this.setState(() => ({
        status: PAGE_STATUS.EDIT,
        editedExpense: this.props.data.expense,
        isPoolingEnabled: false
      }));
    }

    const expense = data?.expense;

    if (expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_15__/* ["default"].UNVERIFIED */ .Z.UNVERIFIED && expense?.permissions?.canEdit && this.props.LoggedInUser && expense?.createdByAccount?.slug === this.props.LoggedInUser?.collective?.slug) {
      this.handleExpenseVerification();
    }

    this.handlePolling();
    document.addEventListener('mousemove', this.handlePolling);
  }

  componentDidUpdate(oldProps, oldState) {
    // Refetch data when users are logged in to make sure they can see the private info
    if (!oldProps.LoggedInUser && this.props.LoggedInUser) {
      this.refetchDataForUser();
    } // Automatically edit expense if missing receipt


    const expense = this.props.data?.expense;
    const isMissingReceipt = expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_15__/* ["default"].PAID */ .Z.PAID && expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_16__/* ["default"].CHARGE */ .Z.CHARGE && expense?.permissions?.canEdit && expense?.items?.every(item => !item.url);

    if (this.props.edit && isMissingReceipt && this.state.status !== PAGE_STATUS.EDIT) {
      this.onEditBtnClick();
      this.props.router.replace(document.location.pathname);
    } // Scroll to expense's top when changing status


    if (oldState.status !== this.state.status) {
      this.scrollToExpenseTop();
    }
  }

  componentWillUnmount() {
    if (this.props.data?.stopPolling) {
      this.props.data.stopPolling();
    }

    document.removeEventListener('mousemove', this.handlePolling);
  }

  handlePolling() {
    if (this.state.isPoolingEnabled) {
      if (!this.pollingStarted) {
        if (this.pollingPaused) {
          // The polling was paused, so we immediately refetch
          if (this.props.data?.refetch) {
            this.props.data.refetch();
          }

          this.pollingPaused = false;
        }

        if (this.props.data?.startPolling(this.pollingInterval * 1000)) {
          this.props.data.stopPolling();
        }

        this.pollingStarted = true;
      }

      clearTimeout(this.pollingTimeout);
      this.pollingTimeout = setTimeout(() => {
        // No mouse movement was detected since 60sec, we stop polling
        if (this.props.data?.stopPolling) {
          this.props.data.stopPolling();
        }

        this.pollingStarted = false;
        this.pollingPaused = true;
      }, this.pollingInterval * 1000);
    }
  }

  async refetchDataForUser() {
    try {
      this.setState({
        hasRefetchedDataForUser: false
      });
      await this.props.data.refetch();
    } finally {
      this.setState({
        hasRefetchedDataForUser: true
      });
    }
  }

  async handleExpenseVerification() {
    const expense = this.props.data?.expense;
    await this.props.verifyExpense({
      variables: {
        expense: {
          id: expense.id
        }
      }
    });
    const {
      parentCollectiveSlug,
      collectiveSlug,
      legacyExpenseId,
      data
    } = this.props;
    const parentCollectiveSlugRoute = parentCollectiveSlug ? `${parentCollectiveSlug}/` : '';
    const collectiveType = parentCollectiveSlug ? (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_14__/* .getCollectiveTypeForUrl */ .rf)(data?.account) : undefined;
    const collectiveTypeRoute = collectiveType ? `${collectiveType}/` : '';
    await this.props.router.push(`${parentCollectiveSlugRoute}${collectiveTypeRoute}${collectiveSlug}/expenses/${legacyExpenseId}`);
    this.props.data.refetch();
    this.props.addToast({
      type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_53__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
      title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
        id: "Expense.Submitted",
        defaultMessage: [{
          "type": 0,
          "value": "Expense submitted"
        }]
      }),
      message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
        id: "Expense.SuccessPage",
        defaultMessage: [{
          "type": 0,
          "value": "You can edit or review updates on this page."
        }]
      })
    });
    window.scrollTo(0, 0);
  }

  scrollToExpenseTop() {
    if (this.expenseTopRef.current) {
      this.expenseTopRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  getPageMetaData(expense) {
    const {
      intl,
      legacyExpenseId
    } = this.props;
    const baseMetadata = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_14__/* .getCollectivePageMetadata */ .Xq)(expense?.account);

    if (expense?.description) {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: intl.formatMessage(messages.title, {
          id: legacyExpenseId,
          title: expense.description
        })
      });
    } else {
      return baseMetadata;
    }
  }

  clonePageQueryCacheData() {
    const {
      client
    } = this.props;
    const query = expensePageQuery;
    const variables = getVariableFromProps(this.props);

    const data = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6___default()(client.readQuery({
      query,
      variables
    }));

    return [data, query, variables];
  }

  render() {
    const {
      collectiveSlug,
      data,
      LoggedInUser,
      loadingLoggedInUser,
      intl
    } = this.props;
    const {
      hasRefetchedDataForUser,
      error,
      status,
      editedExpense
    } = this.state;
    const isRefetchingDataForUser = LoggedInUser && !hasRefetchedDataForUser;

    if (!data.loading && !isRefetchingDataForUser) {
      if (!data || data.error) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          data: data
        });
      } else if (!data.expense) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_17__/* .generateNotFoundError */ .mN)(null),
          log: false
        });
      } else if (!data.expense.account || this.props.collectiveSlug !== data.expense.account.slug) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_17__/* .generateNotFoundError */ .mN)(collectiveSlug),
          log: false
        });
      }
    }

    const expense = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6___default()(data.expense);

    if (expense && data.expensePayeeStats?.payee?.stats) {
      expense.payee.stats = data.expensePayeeStats?.payee?.stats;
    }

    const loggedInAccount = data.loggedInAccount;
    const collective = expense?.account;
    const host = collective?.host;
    const canSeeInvoiceInfo = expense?.permissions.canSeeInvoiceInfo;
    const isInvoiceOrSettlement = [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_16__/* ["default"].INVOICE */ .Z.INVOICE, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_16__/* ["default"].SETTLEMENT */ .Z.SETTLEMENT].includes(expense?.type);
    const isDraft = expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_15__/* ["default"].DRAFT */ .Z.DRAFT;
    const hasAttachedFiles = isInvoiceOrSettlement && canSeeInvoiceInfo || expense?.attachedFiles?.length > 0;

    const showTaxFormMsg = lodash_includes__WEBPACK_IMPORTED_MODULE_3___default()(expense?.requiredLegalDocuments, 'US_TAX_FORM');

    const isMissingReceipt = expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_15__/* ["default"].PAID */ .Z.PAID && expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_16__/* ["default"].CHARGE */ .Z.CHARGE && expense?.permissions?.canEdit && expense?.items?.every(item => !item.url);
    const isRecurring = expense?.recurringExpense;
    const skipSummary = isMissingReceipt && status === PAGE_STATUS.EDIT;
    const payoutProfiles = (0,_lib_expenses__WEBPACK_IMPORTED_MODULE_18__/* .getPayoutProfiles */ .rX)(loggedInAccount);
    let threadItems;

    if (expense) {
      threadItems = this.getThreadItems(expense.comments?.nodes, expense.activities);
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      collective: collective,
      canonicalURL: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_20__/* .getCollectivePageCanonicalURL */ .Bu)(collective)}/expense`
    }, this.getPageMetaData(expense)), {}, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
        collective: collective,
        isLoading: !collective,
        selectedCategory: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_22__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET,
        callsToAction: {
          hasSubmitExpense: status === PAGE_STATUS.VIEW
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Flex */ .kC, {
        flexDirection: ['column', 'row'],
        px: [2, 3, 4],
        py: [0, 5],
        mt: 3,
        "data-cy": "expense-page-content",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
          width: SIDE_MARGIN_WIDTH
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
          flex: "1 1 650px",
          minWidth: 300,
          maxWidth: [null, null, null, 792],
          mr: [null, 2, 3, 4],
          px: 2,
          ref: this.expenseTopRef,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_ExpenseSummary__WEBPACK_IMPORTED_MODULE_35__/* .SummaryHeader */ .w, {
            fontSize: "24px",
            lineHeight: "32px",
            mb: 24,
            py: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
              id: "ExpenseSummaryTitle",
              defaultMessage: [{
                "type": 5,
                "value": "type",
                "options": {
                  "CHARGE": {
                    "value": [{
                      "type": 0,
                      "value": "Charge"
                    }]
                  },
                  "INVOICE": {
                    "value": [{
                      "type": 0,
                      "value": "Invoice"
                    }]
                  },
                  "RECEIPT": {
                    "value": [{
                      "type": 0,
                      "value": "Receipt"
                    }]
                  },
                  "GRANT": {
                    "value": [{
                      "type": 0,
                      "value": "Grant"
                    }]
                  },
                  "SETTLEMENT": {
                    "value": [{
                      "type": 0,
                      "value": "Settlement"
                    }]
                  },
                  "other": {
                    "value": [{
                      "type": 0,
                      "value": "Expense"
                    }]
                  }
                }
              }, {
                "type": 0,
                "value": " Summary to "
              }, {
                "type": 8,
                "value": "LinkCollective",
                "children": [{
                  "type": 1,
                  "value": "collectiveName"
                }]
              }],
              values: {
                type: (editedExpense || expense)?.type,
                collectiveName: collective?.name,
                LinkCollective: text => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_LinkCollective__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  collective: collective,
                  children: text
                })
              }
            })
          }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .Z, {
            type: "error",
            withIcon: true,
            mb: 4,
            children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_17__/* .formatErrorMessage */ .jN)(intl, error)
          }), showTaxFormMsg && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .Z, {
            type: "warning",
            withIcon: true,
            mb: 4,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
              id: "expenseNeedsTaxFormMessage.msg",
              defaultMessage: [{
                "type": 0,
                "value": "We need your tax information before we can pay you. You will receive an email with a link to fill out a form. If you have not received the email within 24 hours, check your spam, then contact "
              }, {
                "type": 8,
                "value": "I18nSupportLink",
                "children": [{
                  "type": 0,
                  "value": "support"
                }]
              }, {
                "type": 0,
                "value": ". Questions? See "
              }, {
                "type": 8,
                "value": "Link",
                "children": [{
                  "type": 0,
                  "value": "help docs about taxes"
                }]
              }, {
                "type": 0,
                "value": "."
              }],
              values: {
                I18nSupportLink: _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_41__/* .I18nSupportLink */ .wl,
                Link: (0,_components_I18nFormatters__WEBPACK_IMPORTED_MODULE_41__/* .getI18nLink */ .fw)({
                  href: 'https://docs.opencollective.com/help/expenses-and-getting-paid/tax-information',
                  openInNewTab: true
                })
              }
            })
          }), status === PAGE_STATUS.VIEW && (expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_15__/* ["default"].UNVERIFIED */ .Z.UNVERIFIED && this.state.createdUser || isDraft && !isRecurring) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_ExpenseInviteNotificationBanner__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
            expense: expense,
            createdUser: this.state.createdUser
          }), isMissingReceipt && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_ExpenseMissingReceiptNotificationBanner__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
            onEdit: status !== PAGE_STATUS.EDIT && this.onEditBtnClick
          }), status !== PAGE_STATUS.EDIT && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
            mb: 3,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_ExpenseSummary__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
              expense: status === PAGE_STATUS.EDIT_SUMMARY ? editedExpense : expense,
              host: host,
              isLoading: !expense,
              isEditing: status === PAGE_STATUS.EDIT_SUMMARY,
              isLoadingLoggedInUser: loadingLoggedInUser || isRefetchingDataForUser,
              collective: collective,
              onEdit: this.onEditBtnClick,
              onDelete: this.onDelete,
              suggestedTags: this.getSuggestedTags(collective),
              canEditTags: lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(expense, 'permissions.canEditTags', false),
              showProcessButtons: true
            }), status !== PAGE_STATUS.EDIT_SUMMARY && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)((react__WEBPACK_IMPORTED_MODULE_7___default().Fragment), {
              children: [hasAttachedFiles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_StyledCard__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                mt: "32px",
                p: "32px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_52__.H5, {
                  fontSize: "16px",
                  fontWeight: "700",
                  mb: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
                    id: "Downloads",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Downloads"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_ExpenseAttachedFiles__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                  files: expense.attachedFiles,
                  collective: collective,
                  expense: expense,
                  showInvoice: canSeeInvoiceInfo
                })]
              }), expense?.privateMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                mt: 4,
                pb: 4,
                borderBottom: "1px solid #DCDEE0",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_52__.H5, {
                  fontSize: "16px",
                  mb: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
                    id: "expense.notes",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Notes"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(PrivateNoteLabel, {
                  mb: 2
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_HTMLContent__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z, {
                  color: "black.700",
                  mt: 1,
                  fontSize: "13px",
                  content: expense.privateMessage
                })]
              })]
            }), status === PAGE_STATUS.EDIT_SUMMARY && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
              mt: 24,
              children: [isDraft && !loggedInAccount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .Z, {
                  type: "info",
                  fontSize: "12px",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
                    id: "Expense.SignUpInfoBox",
                    defaultMessage: [{
                      "type": 0,
                      "value": "You need to create an account to receive a payment from "
                    }, {
                      "type": 1,
                      "value": "collectiveName"
                    }, {
                      "type": 0,
                      "value": ", by clicking 'Join and Submit' you agree to create an account on Open Collective."
                    }],
                    values: {
                      collectiveName: collective.name
                    }
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
                  mt: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_StyledCheckbox__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                    name: "tos",
                    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
                      id: "TOSAndPrivacyPolicyAgreement",
                      defaultMessage: [{
                        "type": 0,
                        "value": "I agree with the "
                      }, {
                        "type": 1,
                        "value": "toslink"
                      }, {
                        "type": 0,
                        "value": " and "
                      }, {
                        "type": 1,
                        "value": "privacylink"
                      }, {
                        "type": 0,
                        "value": " of Open Collective."
                      }],
                      values: {
                        toslink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_StyledLink__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
                          href: "/tos",
                          openInNewTab: true,
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
                            id: "tos",
                            defaultMessage: [{
                              "type": 0,
                              "value": "terms of service"
                            }]
                          })
                        }),
                        privacylink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_StyledLink__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
                          href: "/privacypolicy",
                          openInNewTab: true,
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
                            id: "privacypolicy",
                            defaultMessage: [{
                              "type": 0,
                              "value": "privacy policy"
                            }]
                          })
                        })
                      }
                    }),
                    required: true,
                    onChange: ({
                      checked
                    }) => {
                      this.setState({
                        tos: checked
                      });
                    }
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
                  mt: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_StyledCheckbox__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
                    name: "newsletterOptIn",
                    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)("span", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
                        id: "cNkrNr",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Subscribe to our monthly newsletter"
                        }]
                      }), "."]
                    }),
                    required: true,
                    onChange: ({
                      checked
                    }) => {
                      this.setState({
                        newsletterOptIn: checked
                      });
                    }
                  })
                })]
              }), !isDraft && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_ExpenseNotesForm__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                onChange: this.onNotesChanges,
                defaultValue: expense.privateMessage
              }), isRecurring && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_ExpenseRecurringBanner__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                expense: expense
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Flex */ .kC, {
                flexWrap: "wrap",
                mt: 4,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_StyledButton__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .Z, {
                  mt: 2,
                  minWidth: 175,
                  width: ['100%', 'auto'],
                  mx: [2, 0],
                  mr: [null, 3],
                  whiteSpace: "nowrap",
                  "data-cy": "edit-expense-btn",
                  onClick: () => this.setState({
                    status: PAGE_STATUS.EDIT
                  }),
                  disabled: this.state.isSubmitting,
                  children: ["\u2190 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
                    id: "Expense.edit",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Edit expense"
                    }]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .Z, {
                  buttonStyle: "primary",
                  mt: 2,
                  minWidth: 175,
                  width: ['100%', 'auto'],
                  mx: [2, 0],
                  mr: [null, 3],
                  whiteSpace: "nowrap",
                  "data-cy": "save-expense-btn",
                  onClick: this.onSummarySubmit,
                  loading: this.state.isSubmitting,
                  disabled: isDraft ? !loggedInAccount && !this.state.tos : false,
                  children: isDraft && !loggedInAccount ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
                    id: "Expense.JoinAndSubmit",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Join and Submit"
                    }]
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedMessage, {
                    id: "SaveChanges",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Save changes"
                    }]
                  })
                })]
              })]
            })]
          }), status === PAGE_STATUS.EDIT && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
            mb: 3,
            children: data.loading || loadingLoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z, {
              width: "100%",
              height: 400
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_ExpenseForm__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP, {
              collective: collective,
              loading: data.loading || loadingLoggedInUser || isRefetchingDataForUser,
              expense: editedExpense || expense,
              originalExpense: expense,
              expensesTags: this.getSuggestedTags(collective),
              payoutProfiles: payoutProfiles,
              loggedInAccount: loggedInAccount,
              onCancel: () => this.setState({
                status: PAGE_STATUS.VIEW,
                editedExpense: null
              }),
              onSubmit: editedExpense => {
                if (skipSummary) {
                  this.setState({
                    editedExpense
                  });
                  return this.onSummarySubmit();
                } else {
                  this.setState({
                    editedExpense,
                    status: PAGE_STATUS.EDIT_SUMMARY
                  });
                }
              },
              validateOnChange: true,
              disableSubmitIfUntouched: true
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
            my: 4,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_PrivateCommentsMessage__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
              isAllowed: expense?.permissions.canComment,
              isLoading: loadingLoggedInUser || isRefetchingDataForUser
            })
          }), expense && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
            mb: 3,
            pt: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_conversations_Thread__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
              collective: collective,
              hasMore: expense.comments?.totalCount > threadItems.length,
              items: threadItems,
              fetchMore: this.fetchMore,
              onCommentDeleted: this.onCommentDeleted
            })
          }), expense?.permissions.canComment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Flex */ .kC, {
            mt: "40px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
              display: ['none', null, 'block'],
              flex: "0 0",
              p: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z, {
                size: 24,
                color: "lightgrey"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
              flex: "1 1",
              maxWidth: [null, null, 'calc(100% - 56px)'],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                id: "new-comment-on-expense",
                ExpenseId: expense && expense.id,
                disabled: !expense,
                onSuccess: this.onCommentAdded
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Flex */ .kC, {
          flex: "1 1",
          justifyContent: ['center', null, 'flex-start', 'flex-end'],
          pt: 80,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
            minWidth: 270,
            width: ['100%', null, null, 275],
            px: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_ExpenseInfoSidebar__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
              isLoading: data.loading || loadingLoggedInUser || isRefetchingDataForUser,
              collective: collective,
              host: host
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_39__/* .Box */ .xu, {
          width: SIDE_MARGIN_WIDTH
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_55__.jsx(_components_expenses_MobileCollectiveInfoStickyBar__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
        isLoading: data.loading || loadingLoggedInUser || isRefetchingDataForUser,
        collective: collective,
        host: host
      })]
    }));
  }

}

const addExpensePageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_9__.graphql)(expensePageQuery, {
  options(props) {
    return {
      variables: getVariableFromProps(props),
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_19__/* .API_V2_CONTEXT */ .T
    };
  }

});
const addEditExpenseMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_9__.graphql)(editExpenseMutation, {
  name: 'editExpense',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_19__/* .API_V2_CONTEXT */ .T
  }
});
const addVerifyExpenseMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_9__.graphql)(verifyExpenseMutation, {
  name: 'verifyExpense',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_19__/* .API_V2_CONTEXT */ .T
  }
});
ExpensePage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { parentCollectiveSlug, collectiveSlug, ExpenseId, key, edit } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handlePolling",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "refetchDataForUser",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "handleExpenseVerification",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "onSummarySubmit",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "onNotesChanges",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "scrollToExpenseTop",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getPageMetaData",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "expense",
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
    "name": "onCommentDeleted",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "comment",
      "type": null
    }],
    "returns": null
  }, {
    "name": "fetchMore",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "onEditBtnClick",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "onDelete",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "expense",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "ExpensePage",
  "props": {
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "parentCollectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "legacyExpenseId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "draftKey": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "edit": {
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
    "client": {
      "description": "@ignore from withApollo",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "data": {
      "description": "from withData",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "editExpense": {
      "description": "from addEditExpenseMutation",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "verifyExpense": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "addToast": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "intl": {
      "description": "from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "expensesTags": {
      "description": "",
      "type": {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_13__.injectIntl)((0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_53__/* .withToasts */ .CP)(addVerifyExpenseMutation(addExpensePageData((0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_9__.withApollo)((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_54__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_12__.withRouter)(addEditExpenseMutation(ExpensePage)))))))));
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

/***/ 10276:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/DotsHorizontalRounded");

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

/***/ 24594:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/MinusCircle");

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

/***/ 99232:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Undo");

/***/ }),

/***/ 60270:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Alipay");

/***/ }),

/***/ 45933:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Github");

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

/***/ 98358:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Cogs");

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

/***/ 86954:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/InfoCircle");

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

/***/ 81551:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Undo");

/***/ }),

/***/ 8866:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/University");

/***/ }),

/***/ 66035:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/AlertOctagon");

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

/***/ 55904:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Check");

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

/***/ 57847:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 91090:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Edit");

/***/ }),

/***/ 40710:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 42948:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Flag");

/***/ }),

/***/ 57153:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Info");

/***/ }),

/***/ 5889:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Link");

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

/***/ 86838:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Plus");

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

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Share2");

/***/ }),

/***/ 72142:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Trash2");

/***/ }),

/***/ 83565:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/UserCheck");

/***/ }),

/***/ 12402:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/UserMinus");

/***/ }),

/***/ 90809:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/X");

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

/***/ 80950:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/AttachMoney");

/***/ }),

/***/ 20384:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Close");

/***/ }),

/***/ 10274:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Edit");

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

/***/ 9884:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/SyncAlt");

/***/ }),

/***/ 50194:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Update");

/***/ }),

/***/ 80924:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/octicons/Mail");

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

/***/ 68887:
/***/ ((module) => {

"use strict";
module.exports = require("copy-to-clipboard");

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

/***/ 93908:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/debounce");

/***/ }),

/***/ 90857:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/endsWith");

/***/ }),

/***/ 92349:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/escape");

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

/***/ 51546:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/kebabCase");

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

/***/ 36625:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/max");

/***/ }),

/***/ 61831:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

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

/***/ 98013:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/unescape");

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

/***/ 75263:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/update");

/***/ }),

/***/ 73022:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/upperCase");

/***/ }),

/***/ 57260:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/values");

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

/***/ 56358:
/***/ ((module) => {

"use strict";
module.exports = require("react-dropzone");

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

/***/ 37597:
/***/ ((module) => {

"use strict";
module.exports = require("react-text-mask");

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

/***/ 2707:
/***/ ((module) => {

"use strict";
module.exports = import("@shopify/address");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,8720,7772,8208,3489,283], () => (__webpack_exec__(27408)));
module.exports = __webpack_exports__;

})();