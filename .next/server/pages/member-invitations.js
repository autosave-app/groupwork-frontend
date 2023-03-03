"use strict";
(() => {
var exports = {};
exports.id = 1022;
exports.ids = [1022];
exports.modules = {

/***/ 85139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MemberInvitationsList)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 1 modules
var MessageBox = __webpack_require__(37278);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(29114);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./lib/constants/roles.js
var roles = __webpack_require__(98216);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/i18n/member-role.js
var member_role = __webpack_require__(66465);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/MemberRoleDescription.js
var MemberRoleDescription = __webpack_require__(10878);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/StyledTag.js
var StyledTag = __webpack_require__(36422);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/ReplyToMemberInvitationCard.js























const messages = (0,external_react_intl_.defineMessages)({
  emailDetails: {
    id: "MemberInvitation.detailsEmail",
    defaultMessage: [{
      "type": 0,
      "value": "If you accept, your email address will be visible to other admins."
    }]
  },
  decline: {
    id: "Decline",
    defaultMessage: [{
      "type": 0,
      "value": "Decline"
    }]
  },
  accept: {
    id: "Accept",
    defaultMessage: [{
      "type": 0,
      "value": "Accept"
    }]
  },
  accepted: {
    id: "Invitation.Accepted",
    defaultMessage: [{
      "type": 0,
      "value": "Accepted"
    }]
  },
  declined: {
    id: "Invitation.Declined",
    defaultMessage: [{
      "type": 0,
      "value": "Declined"
    }]
  }
});
const replyToMemberInvitationMutation = client_.gql`
  mutation ReplyToMemberInvitation($invitation: MemberInvitationReferenceInput!, $accept: Boolean!) {
    replyToMemberInvitation(invitation: $invitation, accept: $accept)
  }
`;
/**
 * A card with actions for users to accept or decline an invitation to join the members
 * of a collective.
 */

const ReplyToMemberInvitationCard = ({
  invitation,
  isSelected,
  refetchLoggedInUser,
  redirectOnAccept
}) => {
  const intl = (0,external_react_intl_.useIntl)();
  const {
    formatMessage
  } = intl;
  const router = (0,router_.useRouter)();
  const hostTermsUrl = invitation.account.host?.termsUrl;
  const [acceptedTOS, setAcceptedTOS] = external_react_default().useState(!hostTermsUrl); // Automatically accepts the TOS if there is no TOS URL

  const [accepted, setAccepted] = external_react_default().useState();
  const [isSubmitting, setSubmitting] = external_react_default().useState(false);
  const [sendReplyToInvitation, {
    error,
    data
  }] = (0,client_.useMutation)(replyToMemberInvitationMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  });
  const isDisabled = isSubmitting;
  const hasReplied = data && typeof data.replyToMemberInvitation !== 'undefined';

  const buildReplyToInvitation = accept => async () => {
    setSubmitting(true);
    setAccepted(accept);
    await sendReplyToInvitation({
      variables: {
        invitation: {
          id: invitation.id
        },
        accept
      }
    });
    await refetchLoggedInUser();

    if (accept && redirectOnAccept) {
      await router.push(`/${invitation.account.slug}`);
    }

    setSubmitting(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledCard/* default */.Z, {
    id: `invitation-${invitation.id}`,
    p: 3,
    width: "100%",
    maxWidth: 400,
    borderColor: isSelected ? 'primary.300' : undefined,
    "data-cy": "member-invitation-card",
    children: [/*#__PURE__*/jsx_runtime_.jsx(LinkCollective/* default */.Z, {
      collective: invitation.account,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
        flexDirection: "column",
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Avatar/* default */.ZP, {
          collective: invitation.account
        }), /*#__PURE__*/jsx_runtime_.jsx(Text.H3, {
          textAlign: "center",
          children: invitation.account.name
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "center",
      children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
        textAlign: "center",
        children: invitation.inviter ? /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "MemberInvitation.detailsInviter",
          defaultMessage: [{
            "type": 0,
            "value": "Invited by "
          }, {
            "type": 1,
            "value": "inviter"
          }, {
            "type": 0,
            "value": " on "
          }, {
            "type": 1,
            "value": "date"
          }],
          values: {
            inviter: /*#__PURE__*/jsx_runtime_.jsx(LinkCollective/* default */.Z, {
              collective: invitation.inviter
            }),
            date: (0,utils/* formatDate */.p6)(invitation.createdAt, {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })
          }
        }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "MemberInvitation.detailsDate",
          defaultMessage: [{
            "type": 0,
            "value": "Invited on "
          }, {
            "type": 1,
            "value": "date"
          }],
          values: {
            date: (0,utils/* formatDate */.p6)(invitation.createdAt, {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })
          }
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx(StyledTag/* default */.Z, {
      textTransform: "uppercase",
      children: (0,member_role/* default */.Z)(intl, invitation.role)
    }), (0,MemberRoleDescription/* hasRoleDescription */.T)(invitation.role) && /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
      my: 3,
      px: 2,
      color: "black.600",
      lineHeight: "18px",
      children: /*#__PURE__*/jsx_runtime_.jsx(MemberRoleDescription/* default */.Z, {
        role: invitation.role
      })
    }), hasReplied && !isSubmitting ? /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
      mt: 4,
      color: accepted ? 'green.500' : 'red.500',
      textAlign: "center",
      mb: 2,
      fontWeight: "bold",
      children: accepted ? `✔️ ${formatMessage(messages.accepted)}` : `❌️ ${formatMessage(messages.declined)}`
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(MessageBox/* default */.Z, {
        my: 3,
        type: "info",
        withIcon: true,
        children: formatMessage(messages.emailDetails)
      }), Boolean(hostTermsUrl) && /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        mb: 3,
        mt: 4,
        children: /*#__PURE__*/jsx_runtime_.jsx(StyledCheckbox/* default */.Z, {
          onChange: ({
            checked
          }) => setAcceptedTOS(checked),
          label: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "OCFHostApplication.tosCheckBoxLabel",
            defaultMessage: [{
              "type": 0,
              "value": "I agree with the "
            }, {
              "type": 8,
              "value": "TOSLink",
              "children": [{
                "type": 0,
                "value": "terms of fiscal sponsorship"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              TOSLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: invitation.account.host.termsUrl,
                openInNewTabNoFollow: true,
                onClick: e => e.stopPropagation() // don't check the checkbox when clicking on the link

              })
            }
          })
        })
      }), error && /*#__PURE__*/jsx_runtime_.jsx(MessageBox/* default */.Z, {
        type: "error",
        withIcon: true,
        my: 3,
        children: (0,errors/* i18nGraphqlException */.t2)(intl, error)
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
        mt: 4,
        justifyContent: "space-evenly",
        children: [/*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
          mx: 2,
          minWidth: 150,
          disabled: isDisabled,
          loading: isSubmitting && accepted === false,
          onClick: buildReplyToInvitation(false),
          "data-cy": "member-invitation-decline-btn",
          children: formatMessage(messages.decline)
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
          mx: 2,
          minWidth: 150,
          buttonStyle: "primary",
          disabled: isDisabled || !acceptedTOS,
          loading: isSubmitting && accepted === true,
          onClick: buildReplyToInvitation(true),
          "data-cy": "member-invitation-accept-btn",
          children: formatMessage(messages.accept)
        })]
      })]
    })]
  });
};

ReplyToMemberInvitationCard.__docgenInfo = {
  "description": "A card with actions for users to accept or decline an invitation to join the members\nof a collective.",
  "methods": [],
  "displayName": "ReplyToMemberInvitationCard",
  "props": {
    "isSelected": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "invitation": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "role": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(roles)",
            "required": false
          },
          "account": {
            "name": "shape",
            "value": {
              "name": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": false
              },
              "host": {
                "name": "shape",
                "value": {
                  "name": {
                    "name": "string",
                    "required": false
                  },
                  "termsUrl": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "inviter": {
            "name": "shape",
            "value": {
              "name": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "createdAt": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "refetchLoggedInUser": {
      "description": "@ignore form withUser",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "redirectOnAccept": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_ReplyToMemberInvitationCard = ((0,UserProvider/* withUser */.ns)(ReplyToMemberInvitationCard));
;// CONCATENATED MODULE: ./components/MemberInvitationsList.js





/**
 * Displays a `ReplyToMemberInvitationCard` list, scrolling to the given selected
 * element on mount.
 */



const MemberInvitationsList = ({
  invitations,
  selectedInvitationId
}) => {
  external_react_default().useEffect(() => {
    if (selectedInvitationId) {
      const elem = document.getElementById(`invitation-${selectedInvitationId}`);

      if (elem) {
        const elemTop = elem.getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: elemTop - 100,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  if (invitations.length === 0) {
    return /*#__PURE__*/jsx_runtime_.jsx(MessageBox/* default */.Z, {
      type: "info",
      withIcon: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "MemberInvitations.none",
        defaultMessage: [{
          "type": 0,
          "value": "No pending invitations"
        }]
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
    flexDirection: "column",
    alignItems: "center",
    children: invitations.map(invitation => /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
      mb: 5,
      children: /*#__PURE__*/jsx_runtime_.jsx(components_ReplyToMemberInvitationCard, {
        invitation: invitation,
        isSelected: invitation.id === selectedInvitationId,
        redirectOnAccept: invitations.length === 1
      })
    }, invitation.id))
  });
};

MemberInvitationsList.__docgenInfo = {
  "description": "Displays a `ReplyToMemberInvitationCard` list, scrolling to the given selected\nelement on mount.",
  "methods": [],
  "displayName": "MemberInvitationsList",
  "props": {
    "invitations": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "selectedInvitationId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_MemberInvitationsList = (MemberInvitationsList);

/***/ }),

/***/ 10878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ hasRoleDescription),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98216);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88705);




const ROLES_DETAILS = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [_lib_constants_roles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].ADMIN */ .Z.ADMIN]: {
    id: "+Qi39W",
    defaultMessage: [{
      "type": 8,
      "value": "strong",
      "children": [{
        "type": 0,
        "value": "Admins"
      }]
    }, {
      "type": 0,
      "value": " can edit settings, approve expenses, and receive activity notifications (such as when a new expense is submitted). They are the active managers of a Collective."
    }]
  },
  [_lib_constants_roles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].MEMBER */ .Z.MEMBER]: {
    id: "O8duLC",
    defaultMessage: [{
      "type": 8,
      "value": "strong",
      "children": [{
        "type": 0,
        "value": "Core Contributors"
      }]
    }, {
      "type": 0,
      "value": " are shown as part of the team on your page but do not have admin access or get notifications. They do not play an active role on the platform."
    }]
  },
  [_lib_constants_roles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT]: {
    id: "OdjT4O",
    defaultMessage: [{
      "type": 8,
      "value": "strong",
      "children": [{
        "type": 0,
        "value": "Accountants"
      }]
    }, {
      "type": 0,
      "value": " have read-only access to non-public data, uploaded files, and reports for record-keeping purposes. They cannot make changes and are not shown on your page."
    }]
  }
});
const hasRoleDescription = role => {
  return Boolean(ROLES_DETAILS[role]);
};

const MemberRoleDescription = ({
  role
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return hasRoleDescription(role) ? intl.formatMessage(ROLES_DETAILS[role], _I18nFormatters__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP) : null;
};

MemberRoleDescription.propTypes = {
  role: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(Object.values(_lib_constants_roles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberRoleDescription);

/***/ }),

/***/ 85523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72743);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54812);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53169);
/* harmony import */ var _components_MemberInvitationsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85139);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37278);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_6__]);
_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const memberInvitationsPageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query MemberInvitationsPage($memberAccount: AccountReferenceInput!) {
    memberInvitations(memberAccount: $memberAccount) {
      id
      inviter {
        id
        slug
        name
        type
      }
      createdAt
      role
      description
      account {
        id
        slug
        name
        type
        imageUrl
        isHost
        ... on AccountWithHost {
          host {
            id
            name
            termsUrl
          }
        }
      }
    }
  }
`;
/**
 * The main page to display collectives. Wrap route parameters and GraphQL query
 * to render `components/collective-page` with everything needed.
 */

class MemberInvitationsPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  getSelectedInvitationIdFromRoute() {
    try {
      const hash = window.location.hash;
      const regex = /invitation-(\d+)/;
      const idStr = regex.exec(hash)[1];
      const idInt = parseInt(idStr);
      return idInt || null;
    } catch {
      return null;
    }
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      title: "Pending invitations",
      disableSignup: true,
      children: LoggedInUser => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_2__.Query, {
        query: memberInvitationsPageQuery,
        variables: {
          memberAccount: {
            slug: LoggedInUser.collective.slug
          }
        },
        fetchPolicy: "network-only",
        context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T,
        children: ({
          data,
          error,
          loading
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          background: "linear-gradient(180deg, #EBF4FF, #FFFFFF)",
          py: [4, 5, 6],
          px: [2, 3, 4],
          children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_11__.H1, {
              mb: 5,
              textAlign: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "MemberInvitations.title",
                defaultMessage: [{
                  "type": 0,
                  "value": "Pending invitations"
                }]
              })
            }), !data || !data.memberInvitations || error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              type: "error",
              withIcon: true,
              children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_4__/* .getErrorFromGraphqlException */ .H1)(error).message
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_MemberInvitationsList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              invitations: data.memberInvitations,
              selectedInvitationId: this.getSelectedInvitationIdFromRoute()
            })]
          })
        })
      })
    });
  }

}

MemberInvitationsPage.__docgenInfo = {
  "description": "The main page to display collectives. Wrap route parameters and GraphQL query\nto render `components/collective-page` with everything needed.",
  "methods": [{
    "name": "getSelectedInvitationIdFromRoute",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "MemberInvitationsPage"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberInvitationsPage);
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

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

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

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 57260:
/***/ ((module) => {

module.exports = require("lodash/values");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,7619,8720,4812,6465], () => (__webpack_exec__(85523)));
module.exports = __webpack_exports__;

})();