(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[493],{

/***/ 42388:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44012);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);



/**
 * `Contributor` type is meant to surface all types of contributors, even the one that
 * may not be registered yet on Open Collective -- for example, Github contributors.
 * The component will automatically fallback on displaying a `span` if the contributor
 * cannot be linked to on Open Collective.
 *
 * In the future it may also link to external profiles like Github.
 */



var LinkContributor = function LinkContributor(_ref) {
  var contributor = _ref.contributor,
      children = _ref.children;

  if (contributor.isGuest) {
    return children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      id: "profile.guest",
      defaultMessage: [{
        "type": 0,
        "value": "Guest"
      }]
    });
  } else if (contributor.isIncognito) {
    return children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      id: "profile.incognito",
      defaultMessage: [{
        "type": 0,
        "value": "Incognito"
      }]
    });
  } else if (contributor.collectiveSlug) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      href: "/".concat(contributor.collectiveSlug),
      children: children || contributor.name
    });
  } else {
    return children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: contributor.name
    });
  }
};

LinkContributor.__docgenInfo = {
  "description": "`Contributor` type is meant to surface all types of contributors, even the one that\nmay not be registered yet on Open Collective -- for example, Github contributors.\nThe component will automatically fallback on displaying a `span` if the contributor\ncannot be linked to on Open Collective.\n\nIn the future it may also link to external profiles like Github.",
  "methods": [],
  "displayName": "LinkContributor",
  "props": {
    "contributor": {
      "description": "The contributor to link to",
      "type": {
        "name": "shape",
        "value": {
          "collectiveSlug": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "isIncognito": {
            "name": "bool",
            "required": false
          },
          "isGuest": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "children": {
      "description": "By default we show the name in the link. Use this prop to override this",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (LinkContributor);

/***/ }),

/***/ 68185:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86702);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);


var _excluded = ["error"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/**
 * A `MessageBox` specialized to display GraphQL errors.
 * Accepts all props from `MessageBox`.
 */



var MessageBoxGraphqlError = function MessageBoxGraphqlError(_ref) {
  var error = _ref.error,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    type: "error",
    withIcon: true
  }, props), {}, {
    children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .formatErrorMessage */ .jN)(intl, (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .getErrorFromGraphqlException */ .H1)(error))
  }));
};

MessageBoxGraphqlError.__docgenInfo = {
  "description": "A `MessageBox` specialized to display GraphQL errors.\nAccepts all props from `MessageBox`.",
  "methods": [],
  "displayName": "MessageBoxGraphqlError",
  "props": {
    "error": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (MessageBoxGraphqlError);

/***/ }),

/***/ 1948:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84238);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59448);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52015);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82525);
/* harmony import */ var _lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66465);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11194);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _LinkContributor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42388);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);













var ContributorsList = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC).withConfig({
  displayName: "TopContributors__ContributorsList",
  componentId: "sc-b7r4y1-0"
})(["flex-wrap:wrap;margin-bottom:16px;flex-direction:row;@media (max-width:64em){& > *:nth-child(1n + 6){display:none;}}@media (max-width:88em){& > *:nth-child(1n + 11){display:none;}}"]);
var ContributorItem = styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "TopContributors__ContributorItem",
  componentId: "sc-b7r4y1-1"
})(["display:flex;margin:0 24px 16px 0;width:200px;"]);
var AvatarWithRank = styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "TopContributors__AvatarWithRank",
  componentId: "sc-b7r4y1-2"
})(["width:63px;min-width:63px;height:32px;margin-right:8px;background:white;display:flex;justify-content:space-between;align-items:center;padding-left:14px;font-size:10px;border-radius:32px;"]);
var ContributorName = styled_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "TopContributors__ContributorName",
  componentId: "sc-b7r4y1-3"
})(["font-size:12px;line-height:18px;font-weight:700;color:", ";letter-spacing:-0.4px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:100%;"], function (props) {
  return props.theme.colors.black[800];
});
/**
 * Returns the flex-basis as a string in `px` based on the percentage of
 * contributors that belongs in this column.
 */

var getFlexBasisForCol = function getFlexBasisForCol(nbContributors, totalContributors) {
  var baseSpaceBetween = 0.1;
  var maxPercentage = 0.75;
  var percentageNbContributors = nbContributors / totalContributors;
  var width = Math.min(percentageNbContributors - baseSpaceBetween, maxPercentage); // If one of the two blocks has less contributors but still two columns, we
  // force the size two make sure both columns are displayed

  if (percentageNbContributors <= 0.45 && nbContributors > 5) {
    return '40%';
  }

  return "".concat(Math.trunc(width * 100), "%");
};
/**
 * Shows a list of contributors with the section title. Auto-size based on number
 * of contributors.
 */


var ContributorsBlock = function ContributorsBlock(_ref) {
  var title = _ref.title,
      contributors = _ref.contributors,
      totalNbContributors = _ref.totalNbContributors,
      currency = _ref.currency,
      showTitle = _ref.showTitle;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
  var isFillingFullscreen = contributors.length === totalNbContributors && contributors.length === 20;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
    flex: "50% 1 3",
    style: {
      flexBasis: getFlexBasisForCol(contributors.length, totalNbContributors)
    },
    children: [showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "500",
      color: "black.700",
      mb: "20px",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ContributorsList, {
      justifyContent: isFillingFullscreen ? [null, null, null, null, 'space-between'] : 'flex-start',
      children: contributors.map(function (contributor, idx) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ContributorItem, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(AvatarWithRank, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: idx + 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LinkContributor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              contributor: contributor,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* .ContributorAvatar */ .BD, {
                contributor: contributor,
                radius: 32
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            flex: "1 1",
            maxWidth: "calc(100% - 63px)",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LinkContributor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              contributor: contributor,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ContributorName, {
                children: contributor.isIncognito ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  id: "profile.incognito",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Incognito"
                  }]
                }) : contributor.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
              color: "black.700",
              fontSize: "10px",
              lineHeight: "14px",
              children: contributor.totalAmountDonated ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
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
                  date: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedDate, {
                    value: contributor.since,
                    month: "short",
                    year: "numeric"
                  }),
                  totalDonated: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    amountStyles: null,
                    amount: contributor.totalAmountDonated,
                    currency: currency,
                    precision: 0,
                    formatWithSeparators: true
                  })
                }
              }) : contributor.isAdmin ? (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(intl, 'ADMIN') : contributor.isCore ? (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(intl, 'MEMBER') : (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(intl, contributor.roles[0])
            })]
          })]
        }, contributor.id);
      })
    })]
  });
};

/**
 * Shows two columns as leaderboards for organizations and individuals
 * financial contributions.
 */
var TopContributors = function TopContributors(_ref2) {
  var organizations = _ref2.organizations,
      individuals = _ref2.individuals,
      currency = _ref2.currency;

  var nbOrgs = lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(organizations);

  var nbIndividuals = lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(individuals);

  var totalNbContributors = nbOrgs + nbIndividuals;
  var hasBothTypes = Boolean(nbOrgs && nbIndividuals); // Nothing to render if there's no one to show

  if (!totalNbContributors) {
    return null;
  } // Build the individual blocks in variables so we can sort them later


  var BlockIndividuals = nbIndividuals > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ContributorsBlock, {
    currency: currency,
    contributors: individuals,
    totalNbContributors: totalNbContributors,
    title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      id: "TopContributors.Individuals",
      defaultMessage: [{
        "type": 0,
        "value": "Individuals"
      }]
    }),
    showTitle: hasBothTypes
  });

  var BlockOrgs = nbOrgs > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ContributorsBlock, {
    currency: currency,
    contributors: organizations,
    totalNbContributors: totalNbContributors,
    title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      id: "TopContributors.Organizations",
      defaultMessage: [{
        "type": 0,
        "value": "Organizations"
      }]
    }),
    showTitle: hasBothTypes
  }); // Put the blocks with the most contributors first. If equals, default is to show orgs first.


  var Blocks = nbIndividuals > nbOrgs ? [BlockIndividuals, BlockOrgs] : [BlockOrgs, BlockIndividuals];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
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
/* harmony default export */ __webpack_exports__["Z"] = (TopContributors);

/***/ }),

/***/ 66465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59448);
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98216);


var _defineMessages;



var RolesTranslations = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].HOST */ .Z.HOST, {
  id: "Member.Role.HOST",
  defaultMessage: [{
    "type": 0,
    "value": "Host"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ADMIN */ .Z.ADMIN, {
  id: "Member.Role.ADMIN",
  defaultMessage: [{
    "type": 0,
    "value": "Admin"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MEMBER */ .Z.MEMBER, {
  id: "Member.Role.MEMBER",
  defaultMessage: [{
    "type": 0,
    "value": "Core Contributor"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONTRIBUTOR */ .Z.CONTRIBUTOR, {
  id: "Member.Role.CONTRIBUTOR",
  defaultMessage: [{
    "type": 0,
    "value": "Contributor"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].BACKER */ .Z.BACKER, {
  id: "Member.Role.BACKER",
  defaultMessage: [{
    "type": 0,
    "value": "Financial Contributor"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ATTENDEE */ .Z.ATTENDEE, {
  id: "Member.Role.ATTENDEE",
  defaultMessage: [{
    "type": 0,
    "value": "Attendee"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].FOLLOWER */ .Z.FOLLOWER, {
  id: "Member.Role.FOLLOWER",
  defaultMessage: [{
    "type": 0,
    "value": "Follower"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT, {
  id: "Member.Role.ACCOUNTANT",
  defaultMessage: [{
    "type": 0,
    "value": "Accountant"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_COLLECTIVE */ .Z.CONNECTED_COLLECTIVE, {
  id: "Member.Role.ConnectedAccount",
  defaultMessage: [{
    "type": 0,
    "value": "Connected"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_ACCOUNT */ .Z.CONNECTED_ACCOUNT, {
  id: "Member.Role.ConnectedAccount",
  defaultMessage: [{
    "type": 0,
    "value": "Connected"
  }]
}), _defineMessages));
/**
 * Translate a member role
 *
 * @param {func} `formatMessage` - see `injectIntl` or `useIntl`
 * @param {string} `role` - see `roles`
 */

var formatMemberRole = function formatMemberRole(intl, role) {
  var i18nMsg = RolesTranslations[role];
  return i18nMsg ? intl.formatMessage(i18nMsg) : role;
};

/* harmony default export */ __webpack_exports__["Z"] = (formatMemberRole);

/***/ }),

/***/ 56157:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addCollectiveBannerIframeData": function() { return /* binding */ addCollectiveBannerIframeData; },
  "default": function() { return /* binding */ banner_iframe; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/lodash/partition.js
var partition = __webpack_require__(43174);
var partition_default = /*#__PURE__*/__webpack_require__.n(partition);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/components/Query.js
var Query = __webpack_require__(75412);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/collective-page/TopContributors.js
var TopContributors = __webpack_require__(1948);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__(45578);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Error.js
var Error = __webpack_require__(12665);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./lib/currency-utils.js
var currency_utils = __webpack_require__(17632);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/CollectiveCard.js
var CollectiveCard = __webpack_require__(68654);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Member.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var MemberContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Member__MemberContainer",
  componentId: "sc-1odvszo-0"
})(["max-width:300px;float:left;position:relative;.USER{margin:0.5rem 0.25rem;}.small{width:48px;}.small .avatar{margin:0;}.ORGANIZATION,.COLLECTIVE{width:200px;margin:1rem;}"]);

var Member = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Member, _React$Component);

  var _super = _createSuper(Member);

  function Member(props) {
    var _this;

    classCallCheck_default()(this, Member);

    _this = _super.call(this, props);
    _this.messages = (0,react_intl_lib.defineMessages)({
      'membership.since': {
        id: "membership.since",
        defaultMessage: [{
          "type": 0,
          "value": "since "
        }, {
          "type": 1,
          "value": "date"
        }]
      },
      ADMIN: {
        id: "Member.Role.ADMIN",
        defaultMessage: [{
          "type": 0,
          "value": "Admin"
        }]
      },
      MEMBER: {
        id: "Member.Role.MEMBER",
        defaultMessage: [{
          "type": 0,
          "value": "Core Contributor"
        }]
      },
      BACKER: {
        id: "Member.Role.BACKER",
        defaultMessage: [{
          "type": 0,
          "value": "Financial Contributor"
        }]
      },
      'membership.totalDonations': {
        id: "membership.totalDonations",
        defaultMessage: [{
          "type": 0,
          "value": "Total amount contributed"
        }]
      }
    });
    return _this;
  }

  createClass_default()(Member, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          intl = _this$props.intl;

      var membership = _objectSpread({}, this.props.member);

      membership.collective = collective;
      var member = membership.member,
          description = membership.description;
      var viewMode = this.props.viewMode || (get_default()(member, 'type') === 'USER' ? 'USER' : 'ORGANIZATION');
      var user = member.user || {};
      var name = (member.name && member.name.match(/^null/) ? null : member.name) || member.slug || user.email && user.email.substr(0, user.email.indexOf('@'));

      if (!name) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      var tierName = membership.tier ? (0,utils/* singular */.hP)(membership.tier.name) : this.messages[membership.role] ? intl.formatMessage(this.messages[membership.role]) : membership.role;
      var memberSinceStr = '';

      if (tierName) {
        memberSinceStr += (0,utils/* capitalize */.kC)(tierName);
      }

      memberSinceStr += " ".concat(intl.formatMessage(this.messages['membership.since'], {
        date: (0,utils/* formatDate */.p6)(membership.createdAt),
        tierName: tierName ? (0,utils/* capitalize */.kC)(tierName) : ''
      }));
      var className = this.props.className || '';
      var totalDonationsStr = membership.stats ? "".concat(intl.formatMessage(this.messages['membership.totalDonations']), ": ").concat((0,currency_utils/* formatCurrency */.xG)(membership.stats.totalDonations, collective.currency, {
        precision: 0,
        locale: intl.locale
      })) : '';
      var title = member.name;

      if (member.company) {
        title += "\n".concat(member.company);
      }

      if (member.description) {
        title += "\n".concat(member.description);
      }

      if (className.match(/small/)) {
        title += "\n\n".concat(memberSinceStr, "\n").concat(totalDonationsStr);
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(MemberContainer, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          className: "".concat(className, " ").concat(member.type, " viewMode-").concat(viewMode),
          children: [viewMode === 'USER' && /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
            collective: this.props.member.member,
            target: "_top",
            title: title,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              mt: 2,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
                collective: member,
                radius: 45,
                className: "noFrame"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
                padding: "1rem",
                paddingTop: "0",
                textAlign: "left",
                overflow: "hidden",
                display: "none",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  fontSize: "1.7rem",
                  children: name
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  fontSize: "1.4rem",
                  color: "black.600",
                  children: (0,utils/* firstSentence */.u5)(description || member.description, 64)
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  className: "since",
                  fontSize: "1.4rem",
                  children: memberSinceStr
                }), totalDonationsStr && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  className: "totalDonations",
                  fontSize: "1.4rem",
                  color: "black.600",
                  children: totalDonationsStr
                })]
              })]
            })
          }), viewMode === 'ORGANIZATION' && /*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveCard/* default */.Z, {
            collective: member,
            membership: membership
          })]
        })
      });
    }
  }]);

  return Member;
}(react.Component);

Member.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Member",
  "props": {
    "member": {
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
    },
    "viewMode": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "className": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_Member = ((0,injectIntl/* default */.ZP)(Member));
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
;// CONCATENATED MODULE: ./components/MembersWithData.js











var _templateObject;

function MembersWithData_createSuper(Derived) { var hasNativeReflectConstruct = MembersWithData_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function MembersWithData_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var MEMBERS_PER_PAGE = 10;
var MembersContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "MembersWithData__MembersContainer",
  componentId: "sc-imktpv-0"
})([".filterBtnGroup{width:100%;}.filterBtn{width:33%;}"]);

var MembersWithData = /*#__PURE__*/function (_React$Component) {
  inherits_default()(MembersWithData, _React$Component);

  var _super = MembersWithData_createSuper(MembersWithData);

  function MembersWithData(props) {
    var _this;

    classCallCheck_default()(this, MembersWithData);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "onChange", function () {
      var onChange = _this.props.onChange;
      onChange && _this.node && onChange({
        height: _this.node.offsetHeight
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "fetchMore", function (e) {
      e.target.blur();

      _this.setState({
        loading: true
      });

      _this.props.fetchMore().then(function () {
        _this.setState({
          loading: false
        });

        _this.onChange();
      });
    });

    _this.state = {
      role: null,
      loading: false
    };
    return _this;
  }

  createClass_default()(MembersWithData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          LoggedInUser = _this$props.LoggedInUser,
          collective = _this$props.collective,
          tier = _this$props.tier,
          type = _this$props.type;

      if (data.error) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Error/* default */.Z, {
          message: data.error.message
        });
      }

      if (!data.allMembers) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      var members = toConsumableArray_default()(data.allMembers);

      if (members.length === 0) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      } // sort by totalDonations, then createdAt date, then alphabetically
      // it's important to have a consistent sorting across environments and browsers


      members.sort(function (a, b) {
        if (b.stats.totalDonations !== a.stats.totalDonations) {
          return b.stats.totalDonations - a.stats.totalDonations;
        } else if (a.createdAt !== b.createdAt) {
          return new Date(a.createdAt) - new Date(b.createdAt);
        } else {
          return a.collective.name.localeCompare(b.collective.name);
        }
      }); // Make sure we display unique members
      // that should ultimately be addressed on the API side

      members = uniqBy_default()(members, function (member) {
        return member.member.id;
      });
      var size = members.length > 50 ? 'small' : 'large';
      var viewMode = type && type.split(',')[0] || 'USER';

      if (tier && tier.name.match(/sponsor/i)) {
        viewMode = 'ORGANIZATION';
      }

      var limit = this.props.limit || MEMBERS_PER_PAGE * 2;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(MembersContainer, {
        ref: function ref(node) {
          return _this2.node = node;
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          className: "cardsList",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          overflow: "hidden",
          margin: "1rem 0",
          children: members.map(function (member) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Member, {
              member: member,
              className: classnames_default()(_this2.props.className, size),
              collective: collective,
              viewMode: viewMode,
              LoggedInUser: LoggedInUser
            }, member.id);
          })
        }), members.length % 10 === 0 && members.length >= limit && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          margin: "1rem",
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
            onClick: this.fetchMore,
            children: [this.state.loading && /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "loading",
              defaultMessage: [{
                "type": 0,
                "value": "loading"
              }]
            }), !this.state.loading && /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
  }]);

  return MembersWithData;
}(react.Component);

var membersQuery = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  query Members(\n    $collectiveSlug: String!\n    $TierId: Int\n    $role: String\n    $type: String\n    $limit: Int\n    $offset: Int\n    $orderBy: String\n  ) {\n    allMembers(\n      collectiveSlug: $collectiveSlug\n      TierId: $TierId\n      role: $role\n      type: $type\n      limit: $limit\n      offset: $offset\n      orderBy: $orderBy\n    ) {\n      id\n      role\n      createdAt\n      collective {\n        id\n        name\n      }\n      stats {\n        id\n        totalDonations\n      }\n      tier {\n        id\n        name\n      }\n      member {\n        id\n        type\n        name\n        company\n        description\n        slug\n        website\n        imageUrl\n        backgroundImage\n        isIncognito\n      }\n    }\n  }\n"])));
var addMembersData = (0,graphql/* graphql */.B)(membersQuery, {
  options: function options(props) {
    return {
      variables: {
        collectiveSlug: props.collective.slug,
        TierId: props.tier && props.tier.id,
        offset: 0,
        type: props.type,
        role: props.memberRole,
        orderBy: props.orderBy,
        limit: props.limit || MEMBERS_PER_PAGE * 2
      }
    };
  },
  props: function props(_ref) {
    var data = _ref.data;
    return {
      data: data,
      fetchMore: function fetchMore() {
        return data.fetchMore({
          variables: {
            offset: data.allMembers.length,
            limit: MEMBERS_PER_PAGE
          },
          updateQuery: function updateQuery(previousResult, _ref2) {
            var fetchMoreResult = _ref2.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }

            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              allMembers: [].concat(toConsumableArray_default()(previousResult.allMembers), toConsumableArray_default()(fetchMoreResult.allMembers))
            });
          }
        });
      }
    };
  }
});
MembersWithData.__docgenInfo = {
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
  }],
  "displayName": "MembersWithData",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "tier": {
      "description": "",
      "type": {
        "name": "object"
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
      "required": true
    },
    "className": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "memberRole": {
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
    }
  }
};
/* harmony default export */ var components_MembersWithData = (addMembersData(MembersWithData));
// EXTERNAL MODULE: ./components/MessageBoxGraphqlError.js
var MessageBoxGraphqlError = __webpack_require__(68185);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./pages/banner-iframe.js











var banner_iframe_templateObject, _templateObject2;

function banner_iframe_createSuper(Derived) { var hasNativeReflectConstruct = banner_iframe_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function banner_iframe_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



















var topContributorsQuery = (0,lib/* default */.ZP)(banner_iframe_templateObject || (banner_iframe_templateObject = taggedTemplateLiteral_default()(["\n  query BannerTopContributors($collectiveSlug: String!) {\n    account(slug: $collectiveSlug, throwIfMissing: false) {\n      id\n      currency\n      slug\n      ... on AccountWithContributions {\n        contributors(limit: 150) {\n          totalCount\n          nodes {\n            id\n            name\n            roles\n            isAdmin\n            isCore\n            isBacker\n            since\n            image\n            description\n            collectiveSlug\n            totalAmountDonated\n            type\n            publicMessage\n            isIncognito\n          }\n        }\n      }\n    }\n  }\n"])));
var ContributeButton = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "banner-iframe__ContributeButton",
  componentId: "sc-1csshx4-0"
})(["width:338px;height:50px;overflow:hidden;margin:0;padding:0;background-repeat:no-repeat;float:left;border:none;background-color:transparent;cursor:pointer;background-image:url(/static/images/buttons/contribute-button-blue.svg);:hover{background-position:0 -50px;}:active{background-position:0 -100px;}:focus{outline:0;}"]);
var IFrameContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "banner-iframe__IFrameContainer",
  componentId: "sc-1csshx4-1"
})(["overflow:hidden;@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url('/static/fonts/inter/Inter-Regular.woff2') format('woff2'),url('/static/fonts/inter/Inter-Regular.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:400;font-display:swap;src:url('/static/fonts/inter/Inter-Italic.woff2') format('woff2'),url('/static/fonts/inter/Inter-Italic.woff') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url('/static/fonts/inter/Inter-Medium.woff2') format('woff2'),url('/static/fonts/inter/Inter-Medium.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:500;font-display:swap;src:url('/static/fonts/inter/Inter-MediumItalic.woff2') format('woff2'),url('/static/fonts/inter/Inter-MediumItalic.woff') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url('/static/fonts/inter/Inter-SemiBold.woff2') format('woff2'),url('/static/fonts/inter/Inter-SemiBold.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:600;font-display:swap;src:url('/static/fonts/inter/Inter-SemiBoldItalic.woff2') format('woff2'),url('/static/fonts/inter/Inter-SemiBoldItalic.woff') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:url('/static/fonts/inter/Inter-Bold.woff2') format('woff2'),url('/static/fonts/inter/Inter-Bold.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:700;font-display:swap;src:url('/static/fonts/inter/Inter-BoldItalic.woff2') format('woff2'),url('/static/fonts/inter/Inter-BoldItalic.woff') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:swap;src:url('/static/fonts/inter/Inter-ExtraBold.woff2') format('woff2'),url('/static/fonts/inter/Inter-ExtraBold.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:800;font-display:swap;src:url('/static/fonts/inter/Inter-ExtraBoldItalic.woff2') format('woff2'),url('/static/fonts/inter/Inter-ExtraBoldItalic.woff') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:swap;src:url('/static/fonts/inter/Inter-Black.woff2') format('woff2'),url('/static/fonts/inter/Inter-Black.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:900;font-display:swap;src:url('/static/fonts/inter/Inter-BlackItalic.woff2') format('woff2'),url('/static/fonts/inter/Inter-BlackItalic.woff') format('woff');}a{text-decoration:none;color:", " cursor:pointer;font-size:14px;}.actions{text-align:center;}h2{font-size:16px;margin-bottom:0;font-weight:300;text-align:center;}ul{list-style:none;padding:0;}"], function (style) {
  return style.a && style.a.color || '#46b0ed';
});

var BannerIframe = /*#__PURE__*/function (_React$Component) {
  inherits_default()(BannerIframe, _React$Component);

  var _super = banner_iframe_createSuper(BannerIframe);

  function BannerIframe(props) {
    var _this;

    classCallCheck_default()(this, BannerIframe);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "onChange", function () {
      _this.height = _this.node && _this.node.offsetHeight;

      _this.sendMessageToParentWindow();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "sendMessageToParentWindow", function () {
      if (!window.parent) {
        return;
      }

      if (!_this.height) {
        return;
      }

      var message = "oc-".concat(JSON.stringify({
        id: _this.props.id,
        height: _this.height
      }));
      window.parent.postMessage(message, '*');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderTopContributors", function (collective) {
      var _partition2 = partition_default()(collective.contributors.nodes, function (c) {
        return c.type !== collectives/* CollectiveType.USER */.eV.USER;
      }),
          _partition3 = slicedToArray_default()(_partition2, 2),
          orgs = _partition3[0],
          individuals = _partition3[1];

      return /*#__PURE__*/(0,jsx_runtime.jsx)(TopContributors/* default */.Z, {
        organizations: orgs,
        individuals: individuals,
        currency: collective.currency
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderNewFormat", function () {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Query/* Query */.A, {
        query: topContributorsQuery,
        variables: {
          collectiveSlug: _this.props.collectiveSlug
        },
        context: helpers/* API_V2_CONTEXT */.T,
        children: function children(_ref) {
          var data = _ref.data,
              error = _ref.error,
              loading = _ref.loading;
          return loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {}) : error ? /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBoxGraphqlError/* default */.Z, {
            error: error
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
                fontSize: "18px",
                lineHeight: "28px",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "NewContributionFlow.Join",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Join "
                  }, {
                    "type": 1,
                    "value": "numberOfContributors"
                  }, {
                    "type": 0,
                    "value": " other fellow contributors"
                  }],
                  values: {
                    numberOfContributors: data.account.contributors.totalCount
                  }
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                openInNewTab: true,
                href: "https://opencollective.com/".concat(_this.props.collectiveSlug),
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "widget.contributeOnOpenCollective",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Contribute on Open Collective"
                  }]
                })
              })]
            }), _this.renderTopContributors(data.account)]
          });
        }
      });
    });

    _this.onChange = _this.onChange.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(BannerIframe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          collectiveSlug = _this$props.collectiveSlug,
          data = _this$props.data,
          useNewFormat = _this$props.useNewFormat;

      if (useNewFormat) {
        return this.renderNewFormat();
      }

      var style;

      try {
        style = JSON.parse(this.props.style || '{}');
      } catch (e) {
        style = {};
      }

      if (data.loading) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          ref: function ref(node) {
            return _this2.node = node;
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "loading",
            defaultMessage: [{
              "type": 0,
              "value": "loading"
            }]
          })
        });
      }

      var collective = data.Collective;

      if (!collective) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          ref: function ref(node) {
            return _this2.node = node;
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "notFound",
            defaultMessage: [{
              "type": 0,
              "value": "Not found"
            }]
          })
        });
      }

      var backers = collective.stats.backers;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(IFrameContainer, {
        linkColor: style,
        ref: function ref(node) {
          return _this2.node = node;
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)((head_default()), {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Lato:400,700,900"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("title", {
            children: "".concat(collectiveSlug, " collectives")
          })]
        }), backers.organizations + backers.collectives + backers.users === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://opencollective.com/".concat(collectiveSlug),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContributeButton, {})
        }), backers.organizations + backers.collectives > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
          id: "organizations",
          className: "tier",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
            style: style.h2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "collective.section.backers.organizations.title",
              values: {
                n: backers.organizations + backers.collectives,
                collective: collective.name
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
                      "value": "organization is"
                    }]
                  },
                  "other": {
                    "value": [{
                      "type": 0,
                      "value": "organizations are"
                    }]
                  }
                },
                "offset": 0,
                "pluralType": "cardinal"
              }, {
                "type": 0,
                "value": " supporting "
              }, {
                "type": 1,
                "value": "collective"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "actions",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              href: "https://opencollective.com/".concat(collectiveSlug),
              target: "_blank",
              rel: "noopener noreferrer",
              style: style.a,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "widget.contributeOnOpenCollective",
                defaultMessage: [{
                  "type": 0,
                  "value": "Contribute on Open Collective"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_MembersWithData, {
            collective: collective,
            onChange: this.onChange,
            type: "ORGANIZATION,COLLECTIVE",
            memberRole: "BACKER",
            limit: 100,
            orderBy: "totalDonations"
          })]
        }), backers.users > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
          id: "backers",
          className: "tier",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
            style: style.h2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "collective.section.backers.users.title",
              values: {
                n: backers.users,
                collective: collective.name
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
                      "value": "individual is"
                    }]
                  },
                  "other": {
                    "value": [{
                      "type": 0,
                      "value": "individuals are"
                    }]
                  }
                },
                "offset": 0,
                "pluralType": "cardinal"
              }, {
                "type": 0,
                "value": " supporting "
              }, {
                "type": 1,
                "value": "collective"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "actions",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              href: "https://opencollective.com/".concat(collectiveSlug),
              target: "_blank",
              rel: "noopener noreferrer",
              style: style.a,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "widget.contributeOnOpenCollective",
                defaultMessage: [{
                  "type": 0,
                  "value": "Contribute on Open Collective"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_MembersWithData, {
            collective: collective,
            onChange: this.onChange,
            type: "USER",
            memberRole: "BACKER",
            limit: 100,
            orderBy: "totalDonations"
          })]
        })]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref2) {
      var _ref2$query = _ref2.query,
          collectiveSlug = _ref2$query.collectiveSlug,
          id = _ref2$query.id,
          style = _ref2$query.style,
          useNewFormat = _ref2$query.useNewFormat,
          req = _ref2.req,
          res = _ref2.res;

      // Allow to be embedded as Iframe everywhere
      if (res) {
        res.removeHeader('X-Frame-Options');

        if (req && (req.language || req.locale === 'en')) {
          res.set('Cache-Control', 'public, s-maxage=7200');
        }
      }

      return {
        collectiveSlug: collectiveSlug,
        id: id,
        style: style,
        useNewFormat: Boolean(useNewFormat)
      };
    }
  }]);

  return BannerIframe;
}(react.Component);

var collectiveBannerIframeQuery = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query CollectiveBannerIframe($collectiveSlug: String) {\n    Collective(slug: $collectiveSlug) {\n      id\n      name\n      slug\n      currency\n      stats {\n        id\n        backers {\n          id\n          users\n          organizations\n          collectives\n        }\n      }\n    }\n  }\n"])));
var addCollectiveBannerIframeData = (0,graphql/* graphql */.B)(collectiveBannerIframeQuery);
BannerIframe.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, id, style, useNewFormat }, req, res }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "sendMessageToParentWindow",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderTopContributors",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "collective",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderNewFormat",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "BannerIframe",
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
        "name": "string"
      },
      "required": false
    },
    "style": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "useNewFormat": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var banner_iframe = (addCollectiveBannerIframeData(BannerIframe));

/***/ }),

/***/ 24198:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/banner-iframe",
      function () {
        return __webpack_require__(56157);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [5955,7653,7897,9774,2888,179], function() { return __webpack_exec__(24198); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=banner-iframe-5391340b1e9a597f.js.map