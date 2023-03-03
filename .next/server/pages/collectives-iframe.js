"use strict";
(() => {
var exports = {};
exports.id = 7856;
exports.ids = [7856];
exports.modules = {

/***/ 85621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ collectives_iframe)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(40968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@apollo/client/react/hoc"
var hoc_ = __webpack_require__(95159);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Error.js
var Error = __webpack_require__(12665);
// EXTERNAL MODULE: ./components/CollectiveCard.js
var CollectiveCard = __webpack_require__(68654);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/Membership.js





class Membership extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      memberships,
      LoggedInUser
    } = this.props;
    const {
      collective
    } = memberships[0];

    if (!collective) {
      // eslint-disable-next-line no-console
      console.warn('Membership -> no collective attached', memberships[0]);
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    }

    const name = (collective.name && collective.name.match(/^null/) ? null : collective.name) || collective.slug;

    if (!name) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    }

    return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        float: "left",
        margin: "1rem",
        children: /*#__PURE__*/jsx_runtime_.jsx(CollectiveCard/* default */.Z, {
          memberships: memberships,
          collective: collective,
          LoggedInUser: LoggedInUser
        })
      })
    });
  }

}

Membership.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Membership",
  "props": {
    "memberships": {
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
/* harmony default export */ const components_Membership = (Membership);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
;// CONCATENATED MODULE: ./components/MembershipsWithData.js










const MEMBERSHIPS_PER_PAGE = 10;

class MembershipsWithData extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.fetchMore = this.fetchMore.bind(this);
    this.refetch = this.refetch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      role: null,
      loading: false
    };
  }

  componentDidMount() {
    this.onChange();
  }

  onChange() {
    const {
      onChange
    } = this.props;
    onChange && this.node && onChange({
      height: this.node.offsetHeight
    });
  }

  fetchMore(e) {
    e.target.blur();
    this.setState({
      loading: true
    });
    this.props.fetchMore().then(() => {
      this.setState({
        loading: false
      });
      this.onChange();
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
      data,
      LoggedInUser
    } = this.props;

    if (data.error) {
      return /*#__PURE__*/jsx_runtime_.jsx(Error/* default */.Z, {
        message: data.error.message
      });
    }

    if (!data.allMembers) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    }

    const memberships = [...data.allMembers];

    if (memberships.length === 0) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    }

    const collectiveIds = [];
    const groupedMemberships = memberships.reduce((_memberships, m) => {
      (_memberships[m.collective.id] = _memberships[m.collective.id] || []).push(m);

      if (collectiveIds.length === 0 || collectiveIds[collectiveIds.length - 1] !== m.collective.id) {
        collectiveIds.push(m.collective.id);
      }

      return _memberships;
    }, {});
    const limit = this.props.limit || MEMBERSHIPS_PER_PAGE * 2;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      ref: node => this.node = node,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        className: "cardsList",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        overflow: "hidden",
        margin: "1rem 0",
        children: collectiveIds.map(id => /*#__PURE__*/jsx_runtime_.jsx(components_Membership, {
          memberships: groupedMemberships[id],
          LoggedInUser: LoggedInUser
        }, id))
      }), memberships.length % 10 === 0 && memberships.length >= limit && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        textAlign: "center",
        margin: "1rem",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledButton/* default */.Z, {
          buttonSize: "small",
          onClick: this.fetchMore,
          children: [this.state.loading && /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "loading",
            defaultMessage: [{
              "type": 0,
              "value": "loading"
            }]
          }), !this.state.loading && /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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

const membershipsQuery = helpers/* gqlV1 */.N
/* GraphQL */
`
  query Memberships($memberCollectiveSlug: String, $role: String, $limit: Int, $offset: Int, $orderBy: String) {
    allMembers(
      memberCollectiveSlug: $memberCollectiveSlug
      role: $role
      limit: $limit
      offset: $offset
      orderBy: $orderBy
    ) {
      id
      role
      createdAt
      stats {
        id
        totalDonations
      }
      tier {
        id
        name
      }
      collective {
        id
        type
        name
        currency
        description
        slug
        imageUrl
        backgroundImage
        stats {
          id
          backers {
            id
            all
          }
          yearlyBudget
        }
        parentCollective {
          id
          slug
        }
      }
    }
  }
`;
const addMembershipsData = (0,hoc_.graphql)(membershipsQuery, {
  options: props => ({
    variables: {
      memberCollectiveSlug: props.memberCollectiveSlug,
      offset: 0,
      role: props.role,
      orderBy: props.orderBy || 'totalDonations',
      limit: props.limit || MEMBERSHIPS_PER_PAGE * 2
    }
  }),
  props: ({
    data
  }) => ({
    data,
    fetchMore: () => {
      return data.fetchMore({
        variables: {
          offset: data.allMembers.length,
          limit: MEMBERSHIPS_PER_PAGE
        },
        updateQuery: (previousResult, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }

          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allMembers: [...previousResult.allMembers, ...fetchMoreResult.allMembers]
          });
        }
      });
    }
  })
});
MembershipsWithData.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
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
  "displayName": "MembershipsWithData",
  "props": {
    "memberCollectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "orderBy": {
      "description": "",
      "type": {
        "name": "string"
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
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
/* harmony default export */ const components_MembershipsWithData = (addMembershipsData(MembershipsWithData));
;// CONCATENATED MODULE: ./pages/collectives-iframe.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const CollectivesIframeContainer = external_styled_components_default().div.withConfig({
  displayName: "collectives-iframe__CollectivesIframeContainer",
  componentId: "sc-17eg8ct-0"
})(["body{width:100%;height:100%;padding:0;margin:0;font-weight:300;font-size:1rem;line-height:1.5;overflow-x:hidden;}a{text-decoration:none;}.title{display:flex;align-items:baseline;}.title .action{font-size:0.8rem;}h2{font-size:20px;margin-right:1rem;margin-bottom:0;}ul{list-style:none;padding:0;}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px;}.btn-default{color:#333;background-color:#fff;border-color:#ccc;}.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad;text-decoration:none;outline:0;}"]);

class CollectivesIframe extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChange", change => {
      if (!change) {
        return;
      }

      this.height = change.height;
      this.sendMessageToParentWindow();
    });

    _defineProperty(this, "sendMessageToParentWindow", () => {
      if (!window.parent) {
        return;
      }

      if (!this.height) {
        return;
      }

      const message = `oc-${JSON.stringify({
        id: this.props.id,
        height: this.height
      })}`;
      window.parent.postMessage(message, '*');
    });
  }

  static getInitialProps({
    query: {
      collectiveSlug,
      id,
      role,
      orderBy,
      limit
    },
    res
  }) {
    // Allow to be embedded as Iframe everywhere
    if (res) {
      res.removeHeader('X-Frame-Options');
    }

    return {
      collectiveSlug,
      id,
      role,
      orderBy,
      limit: Number(limit)
    };
  }

  render() {
    const {
      collectiveSlug,
      role,
      limit
    } = this.props;
    const orderBy = this.props.orderBy || role === 'HOST' ? 'balance' : 'totalDonations';
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CollectivesIframeContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }), /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: `${this.props.collectiveSlug} collectives`
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_MembershipsWithData, {
        onChange: this.onChange,
        memberCollectiveSlug: collectiveSlug,
        role: role,
        orderBy: orderBy,
        orderDirection: "DESC",
        limit: limit || 20
      })]
    });
  }

}

CollectivesIframe.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, id, role, orderBy, limit }, res }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "change",
      "type": null
    }],
    "returns": null
  }, {
    "name": "sendMessageToParentWindow",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "CollectivesIframe",
  "props": {
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "id": {
      "description": "",
      "type": {
        "name": "number"
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
    "limit": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "orderBy": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const collectives_iframe = (CollectivesIframe);

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 95159:
/***/ ((module) => {

module.exports = require("@apollo/client/react/hoc");

/***/ }),

/***/ 99812:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 71934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 52626:
/***/ ((module) => {

module.exports = require("lodash/invert");

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

/***/ 84159:
/***/ ((module) => {

module.exports = require("lodash/pick");

/***/ }),

/***/ 47869:
/***/ ((module) => {

module.exports = require("lodash/round");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 13126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 35073:
/***/ ((module) => {

module.exports = require("react-scrollchor");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7079,2328,7632,3129,7897], () => (__webpack_exec__(85621)));
module.exports = __webpack_exports__;

})();