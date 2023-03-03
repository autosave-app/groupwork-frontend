"use strict";
(() => {
var exports = {};
exports.id = 9626;
exports.ids = [9626,389];
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

/***/ 66419:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ 85209:
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
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_boxicons_regular_ArrowBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34712);
/* harmony import */ var _styled_icons_boxicons_regular_ArrowBack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_ArrowBack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _lib_graphql_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51719);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97079);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1259);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_page_sections_Updates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66419);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69078);
/* harmony import */ var _components_EditUpdateForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61196);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73908);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11333);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(42352);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92129);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53169);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(37278);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledButtonSet__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(16738);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(51927);
/* harmony import */ var _updates__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(56746);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_12__, _components_collective_page_sections_Updates__WEBPACK_IMPORTED_MODULE_13__, _components_EditUpdateForm__WEBPACK_IMPORTED_MODULE_15__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_16__, _components_Footer__WEBPACK_IMPORTED_MODULE_17__, _components_Header__WEBPACK_IMPORTED_MODULE_19__, _updates__WEBPACK_IMPORTED_MODULE_27__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_12__, _components_collective_page_sections_Updates__WEBPACK_IMPORTED_MODULE_13__, _components_EditUpdateForm__WEBPACK_IMPORTED_MODULE_15__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_16__, _components_Footer__WEBPACK_IMPORTED_MODULE_17__, _components_Header__WEBPACK_IMPORTED_MODULE_19__, _updates__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































const BackButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_components_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
  displayName: "createUpdate__BackButtonWrapper",
  componentId: "sc-10n3977-0"
})(["position:relative;color:#71757a;margin-right:62px;margin-left:20px;@media (max-width:600px){margin-left:0;}"]);
const CreateUpdateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_components_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC).withConfig({
  displayName: "createUpdate__CreateUpdateWrapper",
  componentId: "sc-10n3977-1"
})(["@media (max-width:600px){flex-direction:column;}"]);
const UPDATE_TYPE_MSGS = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  normal: {
    id: "update.type.normal",
    defaultMessage: [{
      "type": 0,
      "value": "Normal Update"
    }]
  },
  changelog: {
    id: "update.type.changelog",
    defaultMessage: [{
      "type": 0,
      "value": "Changelog Entry"
    }]
  }
});
const UPDATE_TYPES = Object.keys(UPDATE_TYPE_MSGS);

class CreateUpdatePage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static getInitialProps({
    query: {
      collectiveSlug,
      action
    }
  }) {
    return {
      slug: collectiveSlug,
      action
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "createUpdate", async update => {
      const {
        data
      } = this.props;
      const {
        account
      } = data;
      this.setState({
        error: '',
        status: 'submitting'
      });

      try {
        update.account = {
          id: account.id
        };
        update.isChangelog = this.isChangelog();

        if (update.isChangelog) {
          update.isPrivate = false;
        }

        const res = await this.props.createUpdate({
          variables: {
            update
          },
          refetchQueries: [{
            query: _updates__WEBPACK_IMPORTED_MODULE_27__.updatesQuery,
            context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T,
            variables: (0,_updates__WEBPACK_IMPORTED_MODULE_27__.getUpdatesVariables)(this.props.slug)
          }, {
            query: _components_collective_page_sections_Updates__WEBPACK_IMPORTED_MODULE_13__/* .updatesSectionQuery */ .Jp,
            variables: (0,_components_collective_page_sections_Updates__WEBPACK_IMPORTED_MODULE_13__/* .getUpdatesSectionQueryVariables */ .Rp)(this.props.slug, true)
          }]
        });
        this.setState({
          isModified: false
        });
        return this.props.router.push(`${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_9__/* .getCollectivePageRoute */ .x0)(account)}/updates/${res.data.createUpdate.slug}`);
      } catch (e) {
        this.setState({
          status: 'error',
          error: e.message
        });
      }
    });

    _defineProperty(this, "handleChange", (attr, value) => {
      const update = this.state.update;
      update[attr] = value;
      this.setState({
        update,
        isModified: true
      });
    });

    _defineProperty(this, "isChangelog", () => {
      return this.state.updateType === UPDATE_TYPES[1];
    });

    this.state = {
      update: {},
      status: '',
      error: '',
      updateType: props.data?.account?.slug === 'opencollective' ? UPDATE_TYPES[1] : UPDATE_TYPES[0]
    };
  }

  componentDidMount() {
    const {
      router,
      data
    } = this.props;
    const account = data?.account;
    (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_9__/* .addParentToURLIfMissing */ .Bc)(router, account, '/updates/new');
  }

  render() {
    const {
      data,
      LoggedInUser,
      loadingLoggedInUser,
      intl
    } = this.props;

    if (!data.account) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        data: data
      });
    }

    const collective = data.account;
    const isAdmin = LoggedInUser && LoggedInUser.isAdminOfCollective(collective);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        collective: collective,
        LoggedInUser: LoggedInUser,
        canonicalURL: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_9__/* .getCollectivePageCanonicalURL */ .Bu)(collective)}/updates/new`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_components_Body__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          collective: collective,
          isAdmin: isAdmin
        }), loadingLoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(CreateUpdateWrapper, {
          className: "content",
          mt: 4,
          alignItems: "baseline",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(BackButtonWrapper, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
              href: `/${collective.slug}/updates`,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                display: "flex",
                color: "#71757A",
                fontSize: "14px",
                alignItems: "center",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_styled_icons_boxicons_regular_ArrowBack__WEBPACK_IMPORTED_MODULE_3__.ArrowBack, {
                  size: 18
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
                  as: "span",
                  mx: 2,
                  children: "Back"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            width: 1,
            maxWidth: 680,
            children: [!isAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
              className: "login",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx("p", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "updates.create.login",
                  defaultMessage: [{
                    "type": 0,
                    "value": "You need to be logged in as an admin of this collective to be able to create an update."
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx("p", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                  buttonStyle: "primary",
                  href: `/signin?next=/${collective.slug}/updates/new`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "signIn",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Sign In"
                    }]
                  })
                })
              })]
            }), isAdmin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              my: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_25__.H1, {
                textAlign: "left",
                fontSize: "34px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "updates.new.title",
                  defaultMessage: [{
                    "type": 0,
                    "value": "New update"
                  }]
                })
              })
            }), collective.slug === 'opencollective' && isAdmin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_StyledButtonSet__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
              size: "medium",
              items: UPDATE_TYPES,
              selected: this.state.updateType,
              onChange: value => this.setState({
                updateType: value
              }),
              children: ({
                item
              }) => intl.formatMessage(UPDATE_TYPE_MSGS[item])
            }), isAdmin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_EditUpdateForm__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              collective: collective,
              onSubmit: this.createUpdate,
              isChangelog: this.isChangelog()
            }), this.state.status === 'error' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
              type: "error",
              withIcon: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                id: "updates.new.error",
                defaultMessage: [{
                  "type": 0,
                  "value": "Update failed: "
                }, {
                  "type": 1,
                  "value": "err"
                }],
                values: {
                  err: this.state.error
                }
              })
            })]
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})]
    });
  }

}

const createUpdateMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation CreateUpdate($update: UpdateCreateInput!) {
    createUpdate(update: $update) {
      id
      slug
      title
      summary
      html
      createdAt
      publishedAt
      updatedAt
      tags
      isPrivate
      isChangelog
      makePublicOn
      account {
        id
        slug
      }
      fromAccount {
        id
        type
        name
        slug
      }
    }
  }
`;
const addCreateUpdateMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(createUpdateMutation, {
  name: 'createUpdate',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  }
});
const addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__/* .compose */ .qC)(_lib_graphql_queries__WEBPACK_IMPORTED_MODULE_8__/* .addCollectiveNavbarData */ .TS, addCreateUpdateMutation);
CreateUpdatePage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, action } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "createUpdate",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "update",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "attr",
      "type": null
    }, {
      "name": "value",
      "type": null
    }],
    "returns": null
  }, {
    "name": "isChangelog",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "CreateUpdatePage",
  "props": {
    "slug": {
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
    "createUpdate": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "account": {
            "name": "object",
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
    "loadingLoggedInUser": {
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
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_26__/* .withUser */ .ns)(addGraphql((0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)((0,react_intl__WEBPACK_IMPORTED_MODULE_5__.injectIntl)(CreateUpdatePage)))));
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

/***/ 34712:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ArrowBack");

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

/***/ 89837:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Lock");

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

/***/ 95594:
/***/ ((module) => {

module.exports = require("lodash/sum");

/***/ }),

/***/ 79800:
/***/ ((module) => {

module.exports = require("lodash/sumBy");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208,6746], () => (__webpack_exec__(85209)));
module.exports = __webpack_exports__;

})();