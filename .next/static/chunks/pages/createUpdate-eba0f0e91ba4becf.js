(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9626],{

/***/ 27132:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16678);


var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"].h2.withConfig */ .ZP.h2.withConfig({
  displayName: "SectionTitle",
  componentId: "sc-5q044q-0"
})(["word-break:break-word;", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_0__/* .color */ .$_, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .display */ .jf, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .space */ .Dh, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .typography */ .cp);
SectionTitle.defaultProps = {
  fontSize: '32px',
  lineHeight: '36px',
  fontWeight: 'normal',
  color: 'black.900',
  mb: 3
};
/* harmony default export */ __webpack_exports__["Z"] = (SectionTitle);

/***/ }),

/***/ 66419:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jp": function() { return /* binding */ updatesSectionQuery; },
/* harmony export */   "Rp": function() { return /* binding */ getUpdatesSectionQueryVariables; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41609);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(16608);
/* harmony import */ var _styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(30742);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(74806);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(52015);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74770);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97619);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86702);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(19156);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51082);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(90998);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(36219);
/* harmony import */ var _graphql_fragments__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5824);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(27132);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(85893);










var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
























/** Query to re-fetch updates */



var updatesSectionQuery = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default()(["\n  query UpdatesSection($slug: String!, $onlyPublishedUpdates: Boolean) {\n    Collective(slug: $slug) {\n      id\n      updates(limit: 3, onlyPublishedUpdates: $onlyPublishedUpdates) {\n        id\n        ...UpdatesFields\n      }\n    }\n  }\n\n  ", "\n"])), _graphql_fragments__WEBPACK_IMPORTED_MODULE_25__/* .updatesFieldsFragment */ .Ju);
var PrivateUpdateMesgBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP)(_MessageBox__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z).withConfig({
  displayName: "Updates__PrivateUpdateMesgBox",
  componentId: "sc-1tc073o-0"
})(["height:40px;background:#f0f8ff;border:1px solid #b8deff;box-sizing:border-box;border-radius:6px;margin:10px 0;padding:10px;font-size:12px;color:#71757a;display:flex;align-items:center;"]);
/**
 * Displays collective's updates.
 */

var SectionUpdates = /*#__PURE__*/function (_React$PureComponent) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default()(SectionUpdates, _React$PureComponent);

  var _super = _createSuper(SectionUpdates);

  function SectionUpdates() {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, SectionUpdates);

    return _super.apply(this, arguments);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(SectionUpdates, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      // If user log in/out we need to refresh data as it depends on the current user
      var refetch = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(this.props.data, 'refetch');

      if (oldProps.isLoggedIn !== this.props.isLoggedIn && refetch) {
        refetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          isAdmin = _this$props.isAdmin;

      var updates = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(this.props.data, 'Collective.updates', []); // Nothing to show if updates is empty and user can't add new ones


      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(updates) && !isAdmin) {
        return null;
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        pb: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_SectionTitle__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          fontSize: ['20px', '24px', '32px'],
          color: "black.700",
          mb: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
          mb: 4,
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_StyledP, {
            color: "black.700",
            my: 2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              id: "section.updates.subtitle",
              defaultMessage: [{
                "type": 0,
                "value": "Updates on our activities and progress."
              }]
            })
          }), isAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/updates/new"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              "data-cy": "create-new-update-btn",
              buttonStyle: "primary",
              my: [2, 0],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_23__/* .Span */ .Dr, {
                fontSize: "16px",
                fontWeight: "bold",
                mr: 2,
                children: "+"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                id: "updates.new.title",
                defaultMessage: [{
                  "type": 0,
                  "value": "New update"
                }]
              })]
            })
          })]
        }), lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(updates) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            my: [3, 5],
            type: "info",
            withIcon: true,
            maxWidth: 700,
            fontStyle: "italic",
            fontSize: "14px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              id: "SectionUpdates.PostFirst",
              defaultMessage: [{
                "type": 0,
                "value": "Report your progress and keep your community up to date."
              }]
            })
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          mt: [3, 5],
          mb: [3, 4],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_StyledCard__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            "data-cy": "updatesList",
            children: updates.map(function (update, idx) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                p: 24,
                display: "flex",
                justifyContent: "space-between",
                borderBottom: idx === updates.length - 1 ? undefined : '1px solid #e6e8eb',
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                    mr: 3,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                      collective: update.fromCollective,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
                        collective: update.fromCollective,
                        radius: 40
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                      href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/updates/").concat(update.slug),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_23__.P, {
                        color: "black.900",
                        fontWeight: "600",
                        mb: 2,
                        children: update.title
                      })
                    }), update.userCanSeeUpdate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_HTMLContent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        style: {
                          display: 'inline'
                        },
                        content: update.summary
                      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_StyledLink__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        as: _Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                        fontSize: "12px",
                        href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/updates/").concat(update.slug),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                          id: "ContributeCard.ReadMore",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Read more"
                          }]
                        })
                      })]
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(PrivateUpdateMesgBox, {
                      type: "info",
                      "data-cy": "mesgBox",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
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
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                      color: "black.600",
                      mt: 2,
                      fontSize: "12px",
                      children: [update.isPrivate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        content: function content() {
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                            id: "update.private.lock_text",
                            defaultMessage: [{
                              "type": 0,
                              "value": "This update is for contributors only"
                            }]
                          });
                        },
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                          mr: 1,
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_30__/* .Lock */ .H, {
                            "data-tip": true,
                            "data-for": "privateLockText",
                            "data-cy": "privateIcon",
                            size: 12,
                            cursor: "pointer"
                          })
                        })
                      }), update.publishedAt ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
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
                          date: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatDate */ .p6)(update.publishedAt, {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          }),
                          author: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            collective: update.fromCollective
                          })
                        }
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
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
                          date: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatDate */ .p6)(update.createdAt),
                          author: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            collective: update.fromCollective
                          })
                        }
                      })]
                    })]
                  })]
                })
              }, update.id);
            })
          }), updates.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/updates"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              "data-cy": "view-all-updates-btn",
              mt: 4,
              width: 1,
              buttonSize: "small",
              fontSize: "14px",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
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
  }]);

  return SectionUpdates;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);

var addUpdatesSectionData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_31__/* .graphql */ .B)(updatesSectionQuery, {
  options: function options(props) {
    return {
      variables: getUpdatesSectionQueryVariables(props.collective.slug, props.isAdmin)
    };
  }
});
var getUpdatesSectionQueryVariables = function getUpdatesSectionQueryVariables(slug) {
  var isAdmin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    slug: slug,
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
/* harmony default export */ __webpack_exports__["ZP"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP)(addUpdatesSectionData(SectionUpdates)));

var _StyledP = (0,styled_components__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_23__.P).withConfig({
  displayName: "Updates___StyledP",
  componentId: "sc-1tc073o-1"
})({
  flex: '1 0 50%',
  maxWidth: 700
});

/***/ }),

/***/ 66642:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ createUpdate; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@styled-icons/styled-icon/index.esm.js
var index_esm = __webpack_require__(54142);
;// CONCATENATED MODULE: ./node_modules/@styled-icons/boxicons-regular/ArrowBack/ArrowBack.esm.js



var ArrowBack = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react.createElement(index_esm.StyledIconBase, (0,esm_extends/* default */.Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react.createElement("path", {
    d: "M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
  }));
});
ArrowBack.displayName = 'ArrowBack';
var ArrowBackDimensions = {
  height: 24,
  width: 24
};
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/graphql/queries.js
var queries = __webpack_require__(51719);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Body.js
var Body = __webpack_require__(1259);
// EXTERNAL MODULE: ./components/collective-navbar/index.js + 8 modules
var collective_navbar = __webpack_require__(99656);
// EXTERNAL MODULE: ./components/collective-page/sections/Updates.js
var Updates = __webpack_require__(66419);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/EditUpdateForm.js + 1 modules
var EditUpdateForm = __webpack_require__(4666);
// EXTERNAL MODULE: ./components/ErrorPage.js
var ErrorPage = __webpack_require__(73908);
// EXTERNAL MODULE: ./components/Footer.js + 1 modules
var Footer = __webpack_require__(3518);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Header.js + 9 modules
var Header = __webpack_require__(80146);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledButtonSet.js
var StyledButtonSet = __webpack_require__(16738);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: ./pages/updates.js + 4 modules
var updates = __webpack_require__(3393);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./pages/createUpdate.js










var _templateObject;



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }































var BackButtonWrapper = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "createUpdate__BackButtonWrapper",
  componentId: "sc-10n3977-0"
})(["position:relative;color:#71757a;margin-right:62px;margin-left:20px;@media (max-width:600px){margin-left:0;}"]);
var CreateUpdateWrapper = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "createUpdate__CreateUpdateWrapper",
  componentId: "sc-10n3977-1"
})(["@media (max-width:600px){flex-direction:column;}"]);
var UPDATE_TYPE_MSGS = (0,react_intl_lib.defineMessages)({
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
var UPDATE_TYPES = Object.keys(UPDATE_TYPE_MSGS);

var CreateUpdatePage = /*#__PURE__*/function (_React$Component) {
  inherits_default()(CreateUpdatePage, _React$Component);

  var _super = _createSuper(CreateUpdatePage);

  function CreateUpdatePage(props) {
    var _props$data, _props$data$account;

    var _this;

    classCallCheck_default()(this, CreateUpdatePage);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "createUpdate", /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(update) {
        var data, account, res;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _this.props.data;
                account = data.account;

                _this.setState({
                  error: '',
                  status: 'submitting'
                });

                _context.prev = 3;
                update.account = {
                  id: account.id
                };
                update.isChangelog = _this.isChangelog();

                if (update.isChangelog) {
                  update.isPrivate = false;
                }

                _context.next = 9;
                return _this.props.createUpdate({
                  variables: {
                    update: update
                  },
                  refetchQueries: [{
                    query: updates.updatesQuery,
                    context: helpers/* API_V2_CONTEXT */.T,
                    variables: (0,updates.getUpdatesVariables)(_this.props.slug)
                  }, {
                    query: Updates/* updatesSectionQuery */.Jp,
                    variables: (0,Updates/* getUpdatesSectionQueryVariables */.Rp)(_this.props.slug, true)
                  }]
                });

              case 9:
                res = _context.sent;

                _this.setState({
                  isModified: false
                });

                return _context.abrupt("return", _this.props.router.push("".concat((0,url_helpers/* getCollectivePageRoute */.x0)(account), "/updates/").concat(res.data.createUpdate.slug)));

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);

                _this.setState({
                  status: 'error',
                  error: _context.t0.message
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 14]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChange", function (attr, value) {
      var update = _this.state.update;
      update[attr] = value;

      _this.setState({
        update: update,
        isModified: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "isChangelog", function () {
      return _this.state.updateType === UPDATE_TYPES[1];
    });

    _this.state = {
      update: {},
      status: '',
      error: '',
      updateType: ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : (_props$data$account = _props$data.account) === null || _props$data$account === void 0 ? void 0 : _props$data$account.slug) === 'opencollective' ? UPDATE_TYPES[1] : UPDATE_TYPES[0]
    };
    return _this;
  }

  createClass_default()(CreateUpdatePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          router = _this$props.router,
          data = _this$props.data;
      var account = data === null || data === void 0 ? void 0 : data.account;
      (0,url_helpers/* addParentToURLIfMissing */.Bc)(router, account, '/updates/new');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          LoggedInUser = _this$props2.LoggedInUser,
          loadingLoggedInUser = _this$props2.loadingLoggedInUser,
          intl = _this$props2.intl;

      if (!data.account) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
          data: data
        });
      }

      var collective = data.account;
      var isAdmin = LoggedInUser && LoggedInUser.isAdminOfCollective(collective);
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header/* default */.Z, {
          collective: collective,
          LoggedInUser: LoggedInUser,
          canonicalURL: "".concat((0,url_helpers/* getCollectivePageCanonicalURL */.Bu)(collective), "/updates/new")
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Body/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(collective_navbar/* default */.Z, {
            collective: collective,
            isAdmin: isAdmin
          }), loadingLoggedInUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsxs)(CreateUpdateWrapper, {
            className: "content",
            mt: 4,
            alignItems: "baseline",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BackButtonWrapper, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/".concat(collective.slug, "/updates"),
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
                  display: "flex",
                  color: "#71757A",
                  fontSize: "14px",
                  alignItems: "center",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowBack, {
                    size: 18
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    as: "span",
                    mx: 2,
                    children: "Back"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
              width: 1,
              maxWidth: 680,
              children: [!isAdmin && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "login",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "updates.create.login",
                    defaultMessage: [{
                      "type": 0,
                      "value": "You need to be logged in as an admin of this collective to be able to create an update."
                    }]
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                    buttonStyle: "primary",
                    href: "/signin?next=/".concat(collective.slug, "/updates/new"),
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "signIn",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Sign In"
                      }]
                    })
                  })
                })]
              }), isAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                my: 3,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
                  textAlign: "left",
                  fontSize: "34px",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "updates.new.title",
                    defaultMessage: [{
                      "type": 0,
                      "value": "New update"
                    }]
                  })
                })
              }), collective.slug === 'opencollective' && isAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButtonSet/* default */.Z, {
                size: "medium",
                items: UPDATE_TYPES,
                selected: this.state.updateType,
                onChange: function onChange(value) {
                  return _this2.setState({
                    updateType: value
                  });
                },
                children: function children(_ref2) {
                  var item = _ref2.item;
                  return intl.formatMessage(UPDATE_TYPE_MSGS[item]);
                }
              }), isAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)(EditUpdateForm/* default */.Z, {
                collective: collective,
                onSubmit: this.createUpdate,
                isChangelog: this.isChangelog()
              }), this.state.status === 'error' && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
                type: "error",
                withIcon: true,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Footer/* default */.Z, {})]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref3) {
      var _ref3$query = _ref3.query,
          collectiveSlug = _ref3$query.collectiveSlug,
          action = _ref3$query.action;
      return {
        slug: collectiveSlug,
        action: action
      };
    }
  }]);

  return CreateUpdatePage;
}(react.Component);

var createUpdateMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation CreateUpdate($update: UpdateCreateInput!) {\n    createUpdate(update: $update) {\n      id\n      slug\n      title\n      summary\n      html\n      createdAt\n      publishedAt\n      updatedAt\n      tags\n      isPrivate\n      isChangelog\n      makePublicOn\n      account {\n        id\n        slug\n      }\n      fromAccount {\n        id\n        type\n        name\n        slug\n      }\n    }\n  }\n"])));
var addCreateUpdateMutation = (0,graphql/* graphql */.B)(createUpdateMutation, {
  name: 'createUpdate',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
  }
});
var addGraphql = (0,utils/* compose */.qC)(queries/* addCollectiveNavbarData */.TS, addCreateUpdateMutation);
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
/* harmony default export */ var createUpdate = ((0,UserProvider/* withUser */.ns)(addGraphql((0,router.withRouter)((0,injectIntl/* default */.ZP)(CreateUpdatePage)))));

/***/ }),

/***/ 27445:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/createUpdate",
      function () {
        return __webpack_require__(66642);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [3662,5328,6567,1512,8966,8027,5126,5490,2092,9158,146,5813,4154,1012,1861,7965,4691,7653,6467,4944,9656,9139,827,972,9774,2888,179], function() { return __webpack_exec__(27445); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=createUpdate-eba0f0e91ba4becf.js.map