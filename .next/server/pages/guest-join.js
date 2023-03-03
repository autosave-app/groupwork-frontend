"use strict";
(() => {
var exports = {};
exports.id = 5913;
exports.ids = [5913];
exports.modules = {

/***/ 85978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_boxicons_regular_PaperPlane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53971);
/* harmony import */ var _styled_icons_boxicons_regular_PaperPlane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_PaperPlane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_material_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55262);
/* harmony import */ var _styled_icons_material_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _lib_guest_accounts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37027);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62131);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88705);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53169);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37278);
/* harmony import */ var _components_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(68185);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(84842);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19156);
/* harmony import */ var _components_StyledRadioList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36718);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_16__]);
_components_Page__WEBPACK_IMPORTED_MODULE_16__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
























const STATUS = {
  SUBMITTING: 'SUBMITTING',
  PICK_PROFILE: 'PICK_PROFILE',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  ERROR_NO_EMAIL: 'ERROR_NO_EMAIL'
};
const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  pageTitle: {
    id: "guestJoin.title",
    defaultMessage: [{
      "type": 0,
      "value": "Join "
    }, {
      "type": 1,
      "value": "service"
    }]
  }
});
const confirmGuestAccountMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation SendGuestConfirmationEmail($email: EmailAddress!) {
    sendGuestConfirmationEmail(email: $email)
  }
`;
const EmailRadioEntry = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.attrs({
  'data-cy': 'guest-email-entry'
}).withConfig({
  displayName: "guest-join__EmailRadioEntry",
  componentId: "sc-yaty9a-0"
})(["padding:16px;&:hover,&:focus{background:#f7f8fa;}"]);
const MUTATION_OPTS = {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
};

const JoinAsGuest = () => {
  const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
  const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(STATUS.SUBMITTING);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const guestEmails = (0,_lib_guest_accounts__WEBPACK_IMPORTED_MODULE_8__/* .getAllGuestEmails */ .Lj)();
  const query = router?.query || {};
  const [selectedEmail, setSelectedEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
  const [callSendGuestConfirmationEmail, {
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(confirmGuestAccountMutation, MUTATION_OPTS);
  const submittedEmail = selectedEmail || guestEmails[0];

  const sendGuestConfirmationEmail = async email => {
    setStatus(STATUS.SUBMITTING);

    try {
      await callSendGuestConfirmationEmail({
        variables: {
          email
        }
      });
      setStatus(STATUS.SUCCESS);
    } catch (e) {
      setStatus(STATUS.ERROR);
    }
  }; // Submit on mount if there's only one guest token, else show picker


  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (!guestEmails.length) {
      setStatus(STATUS.ERROR_NO_EMAIL);
    } else if (guestEmails.length === 1) {
      const email = guestEmails[0];
      sendGuestConfirmationEmail(email);
    } else if (guestEmails.length > 1) {
      setStatus(STATUS.PICK_PROFILE);
    }
  }, []);

  switch (status) {
    case STATUS.ERROR_NO_EMAIL:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_components_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        type: "warning",
        withIcon: true,
        maxWidth: 550,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("strong", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "guestJoin.noEmail",
            defaultMessage: [{
              "type": 0,
              "value": "We could not find any contributions attached to this browser."
            }]
          })
        }), query.OrderId && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
          mt: 2,
          fontSize: "14px",
          lineHeight: "20px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "guestJoin.contactSupport",
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
              "value": " to get more info on the procedure to claim your account. Please attach this order id to your request: "
            }, {
              "type": 1,
              "value": "orderId"
            }],
            values: {
              SupportLink: _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_12__/* .I18nSupportLink */ .wl,
              orderId: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("code", {
                children: query.OrderId
              })
            }
          })
        })]
      });

    case STATUS.ERROR:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        error: error
      });

    case STATUS.SUBMITTING:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {});

    case STATUS.PICK_PROFILE:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
          my: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_material_Email__WEBPACK_IMPORTED_MODULE_4__.Email, {
            size: 42,
            color: theme.colors.primary[400]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("strong", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "guestJoin.otherProfilesFound",
            defaultMessage: [{
              "type": 0,
              "value": "We found "
            }, {
              "type": 1,
              "value": "count"
            }, {
              "type": 0,
              "value": " emails that you used to contribute"
            }],
            values: {
              count: guestEmails.length
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
          fontSize: "15px",
          lineHeight: "22px",
          mt: 2,
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "guestJoin.select",
            defaultMessage: [{
              "type": 0,
              "value": "Select the email that you want to use for your account:"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_StyledCard__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          maxWidth: 350,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_StyledRadioList__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
            options: guestEmails,
            onChange: ({
              value
            }) => setSelectedEmail(value),
            value: selectedEmail,
            children: ({
              value,
              radio
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(EmailRadioEntry, {
              children: [radio, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledSpan, {
                ml: 2,
                fontSize: "13px",
                children: value
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          buttonStyle: "primary",
          mt: 4,
          disabled: !selectedEmail,
          onClick: () => sendGuestConfirmationEmail(selectedEmail),
          "data-cy": "send-verification-email-btn",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "SendVerificationEmail",
            defaultMessage: [{
              "type": 0,
              "value": "Send verification email"
            }]
          })
        })]
      });

    case STATUS.SUCCESS:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          mb: 3,
          pb: 3,
          px: 4,
          textAlign: "center",
          boxShadow: "0px 8px 8px -10px rgb(146 146 146 / 40%)",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
            my: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_boxicons_regular_PaperPlane__WEBPACK_IMPORTED_MODULE_3__.PaperPlane, {
              size: 42,
              color: theme.colors.primary[300]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.H4, {
            as: "h1",
            fontWeight: "bold",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "SignIn.LinkSent",
              defaultMessage: [{
                "type": 0,
                "value": "Your magic link is on its way!"
              }]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          p: 2,
          textAlign: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
            fontSize: "16px",
            lineHeight: "24px",
            color: "black.900",
            mt: 4,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "SignIn.SentTo",
              defaultMessage: [{
                "type": 0,
                "value": "We've sent it to "
              }, {
                "type": 1,
                "value": "email"
              }, {
                "type": 0,
                "value": "."
              }],
              values: {
                email: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("strong", {
                  children: submittedEmail
                })
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
            color: "black.700",
            fontSize: "14px",
            lineHeight: "18px",
            my: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "SignIn.SuccessDetails",
              defaultMessage: [{
                "type": 0,
                "value": "You’ll be redirected from the link in the email, you can safely close this tab."
              }]
            })
          })]
        })]
      });

    default:
      return null;
  }
};

const JoinGuestPage = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
    title: intl.formatMessage(MESSAGES.pageTitle, {
      service: 'Open Collective'
    }),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      display: "flex",
      py: [5, 6, 150],
      px: 2,
      flexDirection: "column",
      alignItems: "center",
      background: "linear-gradient(180deg, #EBF4FF, #FFFFFF)",
      children: LoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}) : LoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        type: "warning",
        withIcon: true,
        maxWidth: 550,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "createAccount.alreadyLoggedIn",
          defaultMessage: [{
            "type": 0,
            "value": "It seems like you're already signed in as \""
          }, {
            "type": 1,
            "value": "email"
          }, {
            "type": 0,
            "value": "\". If you want to create a new account, please log out first."
          }],
          values: {
            email: LoggedInUser.email
          }
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(JoinAsGuest, {})
    })
  });
};

JoinGuestPage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "JoinGuestPage"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JoinGuestPage);

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr).withConfig({
  displayName: "guest-join___StyledSpan",
  componentId: "sc-yaty9a-1"
})({
  verticalAlign: 'top'
});
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

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

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

/***/ 53971:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/PaperPlane");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

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

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 55262:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Email");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 69031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 76918:
/***/ ((module) => {

module.exports = require("lodash/find");

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

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

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

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,8185,6718,7027], () => (__webpack_exec__(85978)));
module.exports = __webpack_exports__;

})();