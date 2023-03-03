"use strict";
(() => {
var exports = {};
exports.id = 6684;
exports.ids = [6684];
exports.modules = {

/***/ 29255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export addCollectivesData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32651);
/* harmony import */ var _CollectiveCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68654);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12665);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const COLLECTIVE_CARDS_PER_PAGE = 10;

class CollectivesWithData extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.fetchMore = this.fetchMore.bind(this);
    this.refetch = this.refetch.bind(this);
    this.state = {
      role: null,
      loading: false
    };
  }

  componentDidMount() {
    const {
      onChange
    } = this.props;
    onChange && this.node && onChange({
      height: this.node.offsetHeight
    });
  }

  fetchMore(e) {
    const {
      onChange
    } = this.props;
    e.target.blur();
    this.setState({
      loading: true
    });
    this.props.fetchMore().then(() => {
      this.setState({
        loading: false
      });
      onChange && onChange({
        height: this.node.offsetHeight
      });
    });
  }

  refetch(role) {
    this.setState({
      role
    });
    this.props.refetch({
      role
    });
  }

  render() {
    const {
      data
    } = this.props;

    if (data.error) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        message: data.error.message
      });
    }

    if (!data.allCollectives || !data.allCollectives.collectives) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {});
    }

    const collectives = [...data.allCollectives.collectives];

    if (collectives.length === 0) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {});
    }

    const limit = this.props.limit || COLLECTIVE_CARDS_PER_PAGE * 2;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      ref: node => this.node = node,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        overflow: "hidden",
        margin: "1rem 0",
        children: collectives.map(collective => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_CollectiveCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          m: 1,
          collective: collective
        }, collective.id))
      }), collectives.length % 10 === 0 && collectives.length >= limit && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        margin: "1rem",
        textAlign: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          onClick: this.fetchMore,
          children: [this.state.loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "loading",
            defaultMessage: [{
              "type": 0,
              "value": "loading"
            }]
          }), !this.state.loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "loadMore",
            defaultMessage: [{
              "type": 0,
              "value": "load more"
            }]
          })]
        })
      })]
    });
  }

}

const collectivesQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__/* .gqlV1 */ .N
/* GraphQL */
`
  query Collectives(
    $HostCollectiveId: Int
    $hostCollectiveSlug: String
    $ParentCollectiveId: Int
    $tags: [String]
    $memberOfCollectiveSlug: String
    $role: String
    $type: TypeOfCollective
    $limit: Int
    $offset: Int
    $orderBy: CollectiveOrderField
    $orderDirection: OrderDirection
    $slugs: [String]
  ) {
    allCollectives(
      HostCollectiveId: $HostCollectiveId
      hostCollectiveSlug: $hostCollectiveSlug
      memberOfCollectiveSlug: $memberOfCollectiveSlug
      role: $role
      type: $type
      ParentCollectiveId: $ParentCollectiveId
      tags: $tags
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      orderDirection: $orderDirection
      slugs: $slugs
    ) {
      id
      total
      collectives {
        id
        type
        createdAt
        slug
        name
        description
        longDescription
        currency
        imageUrl
        backgroundImage
        stats {
          id
          yearlyBudget
          backers {
            id
            all
          }
        }
      }
    }
  }
`;
const addCollectivesData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__.graphql)(collectivesQuery, {
  options: props => ({
    variables: {
      ParentCollectiveId: props.ParentCollectiveId,
      tags: props.tags,
      HostCollectiveId: props.HostCollectiveId,
      hostCollectiveSlug: props.hostCollectiveSlug,
      memberOfCollectiveSlug: props.memberOfCollectiveSlug,
      slugs: props.slugs,
      role: props.role,
      type: props.type,
      orderBy: props.orderBy,
      orderDirection: props.orderDirection,
      offset: 0,
      limit: props.limit || COLLECTIVE_CARDS_PER_PAGE * 2
    }
  }),
  props: ({
    data,
    ownProps
  }) => ({
    data,
    fetchMore: () => data.fetchMore({
      variables: {
        offset: data.allCollectives.collectives.length,
        limit: ownProps.limit || COLLECTIVE_CARDS_PER_PAGE
      },
      updateQuery: (previousResult, {
        fetchMoreResult
      }) => {
        if (!fetchMoreResult) {
          return previousResult;
        } // Update the results object with new entries


        const {
          __typename,
          total,
          collectives
        } = previousResult.allCollectives;
        const all = collectives.concat(fetchMoreResult.allCollectives.collectives);
        return Object.assign({}, previousResult, {
          allCollectives: {
            __typename,
            total,
            collectives: all
          }
        });
      }
    })
  })
});
CollectivesWithData.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "fetchMore",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "refetch",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "role",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CollectivesWithData",
  "props": {
    "HostCollectiveId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "hostCollectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "memberOfCollectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "slugs": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "role": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "type": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "ParentCollectiveId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "tags": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "limit": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "fetchMore": {
      "description": "",
      "type": {
        "name": "func"
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
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCollectivesData(CollectivesWithData));

/***/ }),

/***/ 95100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94997);
/* harmony import */ var _styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _gift_cards_CollectiveCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67645);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93129);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92129);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














const WhiteLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "GiftCard__WhiteLink",
  componentId: "sc-1io6amk-0"
})(["color:white;text-decoration:underline !important;&&:hover{color:#eee;}&&:active{color:#ddd;}"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu).withConfig({
  displayName: "GiftCard__Card",
  componentId: "sc-1io6amk-1"
})(["", ";", ";position:relative;border-radius:16px;overflow:hidden;background-image:url('/static/images/oc-gift-card-front.svg');background-size:100%;background-repeat:no-repeat;background-color:transparent;"], styled_system__WEBPACK_IMPORTED_MODULE_4__.width, styled_system__WEBPACK_IMPORTED_MODULE_4__.height);
const ShadowCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Card).withConfig({
  displayName: "GiftCard__ShadowCard",
  componentId: "sc-1io6amk-2"
})(["box-shadow:0px 8px 16px rgba(20,20,20,0.12);"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GiftCard__Text",
  componentId: "sc-1io6amk-3"
})(["color:white;text-align:left;font-size:14px;margin:6px 0;", ";"], styled_system__WEBPACK_IMPORTED_MODULE_4__.fontSize);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Text).withConfig({
  displayName: "GiftCard__Title",
  componentId: "sc-1io6amk-4"
})(["font-size:24px;font-weight:bold;margin-top:0;margin-bottom:2px;", ";"], styled_system__WEBPACK_IMPORTED_MODULE_4__.fontSize);

class GiftCard extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  render() {
    const {
      amount,
      currency,
      collective,
      emitter,
      expiryDate
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ShadowCard, {
      maxWidth: ['320px', '450px'],
      width: "100%",
      minHeight: ['200px', '260px'],
      m: "0 auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        p: ['18px', '24px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Title, {
          fontSize: ['18px', '24px'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "giftcard.user.name",
            defaultMessage: [{
              "type": 0,
              "value": "Hello again, "
            }, {
              "type": 1,
              "value": "name"
            }, {
              "type": 0,
              "value": "!"
            }],
            values: {
              name: collective.name
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Text, {
          fontSize: ['12px', '14px'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "giftcard.user.text",
            defaultMessage: [{
              "type": 0,
              "value": "Contribute on Open Collective with this Gift Card, courtesy of "
            }, {
              "type": 1,
              "value": "emitter"
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              emitter: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(WhiteLink, {
                href: `/${emitter.slug}`,
                children: emitter.name
              })
            }
          })
        }), emitter?.imageUrl ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          mt: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_gift_cards_CollectiveCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            m: "0px",
            collective: emitter,
            mb: 3,
            size: [48, 64],
            avatarSize: [24, 32],
            fontSize: "14px",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.24) inset",
            borderColor: "blue.200",
            p: 2
          })
        }) : null]
      }), expiryDate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        position: "absolute",
        left: ['8px', '12px'],
        bottom: ['8px', '12px'],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          mt: 2,
          fontSize: "12px",
          color: "black.700",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_styled_icons_feather_Clock__WEBPACK_IMPORTED_MODULE_2__.Clock, {
            size: "1.2em"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledSpan, {
            ml: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "ContributePayment.expiresOn",
              defaultMessage: [{
                "type": 0,
                "value": "Expires on "
              }, {
                "type": 1,
                "value": "expiryDate"
              }],
              values: {
                expiryDate: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("strong", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {
                    value: expiryDate
                  })
                })
              }
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        position: "absolute",
        right: ['8px', '12px'],
        bottom: ['8px', '12px'],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
          alignItems: "top",
          className: "AmountCurrency",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            fontWeight: "bold",
            fontSize: "4rem",
            lineHeight: "4rem",
            color: "#313233",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              value: amount,
              currency: currency,
              precision: 0
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
            ml: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
              color: "#9D9FA3",
              fontSize: "1.6rem",
              className: "currency",
              children: currency
            })
          })]
        })
      })]
    });
  }

}

GiftCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "GiftCard",
  "props": {
    "amount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": false
    },
    "emitter": {
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
          "imageUrl": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "expiryDate": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GiftCard);

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr).withConfig({
  displayName: "GiftCard___StyledSpan",
  componentId: "sc-1io6amk-5"
})({
  verticalAlign: 'middle'
});

/***/ }),

/***/ 97679:
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
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1009);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1259);
/* harmony import */ var _components_CollectivesWithData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29255);
/* harmony import */ var _components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(325);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69078);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11333);
/* harmony import */ var _components_gift_cards_HappyBackground__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26886);
/* harmony import */ var _components_GiftCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95100);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(42352);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(29242);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37278);
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72427);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_12__, _components_Header__WEBPACK_IMPORTED_MODULE_16__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_12__, _components_Header__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























const redeemedPaymentMethodQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .gqlV1 */ .N
/* GraphQL */
`
  query RedeemedPaymentMethod($code: String) {
    PaymentMethod(code: $code) {
      id
      initialBalance
      monthlyLimitPerMember
      currency
      name
      expiryDate
      collective {
        id
        name
        slug
      }
      emitter {
        id
        name
        slug
        imageUrl
        settings
      }
    }
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_components_Text__WEBPACK_IMPORTED_MODULE_20__.H1).withConfig({
  displayName: "redeemed__Title",
  componentId: "sc-jlwhrz-0"
})(["color:white;text-align:center;", ";"], styled_system__WEBPACK_IMPORTED_MODULE_5__.fontSize);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_components_Text__WEBPACK_IMPORTED_MODULE_20__.H5).withConfig({
  displayName: "redeemed__Subtitle",
  componentId: "sc-jlwhrz-1"
})(["color:white;margin:0 auto;text-align:center;", ";", ";"], styled_system__WEBPACK_IMPORTED_MODULE_5__.fontSize, styled_system__WEBPACK_IMPORTED_MODULE_5__.maxWidth);
const SearchFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu).withConfig({
  displayName: "redeemed__SearchFormContainer",
  componentId: "sc-jlwhrz-2"
})(["margin:64px auto 32px;text-align:center;"]);

class RedeemedPage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  static getInitialProps({
    query: {
      code,
      amount,
      name,
      emitterSlug,
      emitterName,
      collectiveSlug
    }
  }) {
    return {
      code,
      collectiveSlug,
      amount: amount && Number(amount),
      name: name?.trim(),
      emitterSlug: emitterSlug?.trim(),
      emitterName: emitterName?.trim()
    };
  }

  constructor(props) {
    super(props);

    if (!props.code) {
      this.state = {
        amount: props.amount,
        collective: {
          name: props.name
        },
        emitter: {
          slug: props.emitterSlug,
          name: props.emitterName
        }
      };
    } else {
      this.state = {
        loading: true
      };
    }
  }

  async componentDidMount() {
    const {
      client,
      code
    } = this.props;

    if (code) {
      client.query({
        query: redeemedPaymentMethodQuery,
        variables: {
          code
        }
      }).then(result => {
        const {
          PaymentMethod
        } = result.data;

        if (PaymentMethod) {
          this.setState({
            amount: PaymentMethod.initialBalance || PaymentMethod.monthlyLimitPerMember,
            name: PaymentMethod.collective.name,
            collective: PaymentMethod.collective,
            emitter: PaymentMethod.emitter,
            currency: PaymentMethod.currency,
            expiryDate: PaymentMethod.expiryDate,
            loading: false
          });
        }
      });
    }
  }

  renderHeroContent(loading, error) {
    if (loading) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        height: 104,
        with: "100%",
        maxWidth: 400,
        m: "0 auto",
        borderRadius: 16
      });
    } else if (error) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        type: "error",
        withIcon: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "redeemed.mismatch",
          defaultMessage: [{
            "type": 0,
            "value": "Accounts mismatch"
          }]
        })
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(Title, {
          fontSize: ['3rem', null, '4rem'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "redeemed.success",
            defaultMessage: [{
              "type": 0,
              "value": "Gift Card Redeemed!"
            }]
          }), " \uD83C\uDF89"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
          flexWrap: "wrap",
          maxWidth: 750,
          m: "0 auto",
          alignItems: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(Subtitle, {
            fontSize: ['1.5rem', null, '2rem'],
            maxWidth: ['90%', '640px'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "redeemed.subtitle.line1",
                defaultMessage: [{
                  "type": 0,
                  "value": "The card has been added to your account."
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "redeemed.subtitle.line2",
                defaultMessage: [{
                  "type": 0,
                  "value": "You can now contribute to the Collective(s) of your choice."
                }]
              })
            })]
          })
        })]
      });
    }
  }

  getError() {
    const {
      LoggedInUser
    } = this.props;
    const {
      collective
    } = this.state;

    if (LoggedInUser && collective && lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(LoggedInUser, 'collective.id') !== lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'id')) {
      return 'account mismatch';
    }
  }

  render() {
    const {
      LoggedInUser,
      data
    } = this.props;
    const {
      amount,
      collective,
      currency,
      expiryDate,
      loading
    } = this.state;
    const error = this.getError();
    const emitter = this.state.emitter || data && data.Collective;

    const recommendedCollectives = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(emitter, 'settings.recommendedCollectives');

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
      className: "RedeemedPage",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        title: "Gift Card Redeemed",
        description: "Use your gift card to support open source projects that you are contributing to.",
        LoggedInUser: LoggedInUser
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        collective: emitter,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Body__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
            alignItems: "center",
            flexDirection: "column",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_gift_cards_HappyBackground__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              collective: emitter,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
                mt: 5,
                children: this.renderHeroContent(loading, error)
              })
            }), !error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              mt: -125,
              children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                width: ['300px', '400px'],
                height: ['168px', '224px'],
                borderRadius: 16
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                position: "relative",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_GiftCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                  amount: amount,
                  currency: currency || 'USD',
                  emitter: emitter,
                  collective: collective,
                  expiryDate: expiryDate
                })
              })
            }), recommendedCollectives && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
              my: 5,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.H5, {
                textAlign: 'center',
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "redeemed.collective-recommendations",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Collectives recommended by "
                  }, {
                    "type": 1,
                    "value": "emitter"
                  }],
                  values: {
                    emitter: emitter.name
                  }
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                maxWidth: "1200px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_CollectivesWithData__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                  slugs: recommendedCollectives,
                  orderBy: "name",
                  orderDirection: "ASC",
                  limit: 12
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
              width: ['320px', '640px'],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(SearchFormContainer, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
                  mb: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.H5, {
                    textAlign: "center",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                      id: "redeemed.findCollectives",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Find open collectives to support."
                      }]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_SearchForm__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                  fontSize: "1.4rem"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
              width: ['320px', '640px'],
              my: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                color: "#76777A",
                textAlign: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "redeemed.backyourstack",
                  defaultMessage: [{
                    "type": 0,
                    "value": "or discover the open source projects that your organization is depending on and that need funding on "
                  }, {
                    "type": 1,
                    "value": "link"
                  }],
                  values: {
                    link: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx("a", {
                      href: "https://backyourstack.com",
                      children: "BackYourStack.com"
                    })
                  }
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
              color: "#76777A",
              textAlign: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "redeemed.suggestions",
                defaultMessage: [{
                  "type": 0,
                  "value": "or you can choose from these awesome collectives that are doing great work:"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
              mb: 5,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                maxWidth: "1200px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_CollectivesWithData__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                  HostCollectiveId: 11004 // hard-coded to only show open source projects
                  ,
                  orderBy: "balance",
                  orderDirection: "DESC",
                  limit: 12
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})]
    });
  }

}

const redeemedPageQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .gqlV1 */ .N
/* GraphQL */
`
  query RedeemedPage($collectiveSlug: String!) {
    Collective(slug: $collectiveSlug) {
      id
      name
      type
      slug
      imageUrl
      backgroundImageUrl
      description
      settings
    }
  }
`;
const addRedeemedPageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(redeemedPageQuery, {
  skip: props => !props.collectiveSlug
});
RedeemedPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { code, amount, name, emitterSlug, emitterName, collectiveSlug } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderHeroContent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "loading",
      "type": null
    }, {
      "name": "error",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getError",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "RedeemedPage",
  "props": {
    "client": {
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
    "code": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "emitterSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "emitterName": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "amount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_21__/* .withUser */ .ns)((0,_lib_withData__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(addRedeemedPageData(RedeemedPage))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 97812:
/***/ ((module) => {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 79114:
/***/ ((module) => {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 72743:
/***/ ((module) => {

module.exports = require("@apollo/client/react/components");

/***/ }),

/***/ 95159:
/***/ ((module) => {

module.exports = require("@apollo/client/react/hoc");

/***/ }),

/***/ 91836:
/***/ ((module) => {

module.exports = require("@apollo/client/react/ssr");

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

/***/ 94997:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Clock");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

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

/***/ 71934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

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

/***/ 12154:
/***/ ((module) => {

module.exports = require("lodash/clamp");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

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

/***/ 47869:
/***/ ((module) => {

module.exports = require("lodash/round");

/***/ }),

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

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

/***/ 74809:
/***/ ((module) => {

module.exports = require("node-fetch");

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

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,7619,7632,3129,1009,7897,6886,672], () => (__webpack_exec__(97679)));
module.exports = __webpack_exports__;

})();