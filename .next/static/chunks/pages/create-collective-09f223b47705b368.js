(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[933],{

/***/ 47415:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(29932);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ 39693:
/***/ (function(module) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),

/***/ 52628:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseValues = __webpack_require__(47415),
    keys = __webpack_require__(3674);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ 79308:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_create_collective; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/SignInOrJoinFree.js + 2 modules
var SignInOrJoinFree = __webpack_require__(41448);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/create-collective/CollectiveCategoryPicker.js













var ExamplesLink = (0,styled_components_browser_esm/* default */.ZP)(StyledLink/* default */.Z).withConfig({
  displayName: "CollectiveCategoryPicker__ExamplesLink",
  componentId: "sc-5giak9-0"
})(["color:", ";font-size:12px;&:hover{color:#dc5f7d;}"], (0,index_esm/* themeGet */.R)('colors.blue.500'));
var Image = styled_components_browser_esm/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "CollectiveCategoryPicker__Image",
  componentId: "sc-5giak9-1"
})(["@media screen and (min-width:52em){height:256px;width:256px;}@media screen and (max-width:40em){height:192px;width:192px;}@media screen and (min-width:40em) and (max-width:52em){height:208px;width:208px;}"]);
var messages = (0,react_intl_lib.defineMessages)({
  community: {
    id: "createCollective.category.community",
    defaultMessage: [{
      "type": 0,
      "value": "For any community"
    }]
  },
  opensource: {
    id: "OSC.description",
    defaultMessage: [{
      "type": 0,
      "value": "For open source projects"
    }]
  },
  climate: {
    id: "createCollective.category.climate",
    defaultMessage: [{
      "type": 0,
      "value": "For climate initiatives"
    }]
  }
});

var CollectiveCategoryPicker = function CollectiveCategoryPicker() {
  var router = (0,next_router.useRouter)();

  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  var _router$query = router.query,
      hostCollectiveSlug = _router$query.hostCollectiveSlug,
      verb = _router$query.verb;
  var baseRoute = "/".concat([hostCollectiveSlug, verb].filter(Boolean).join('/'));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mb: 4,
      mt: 5,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
        fontSize: ['20px', '32px'],
        lineHeight: ['24px', '36px'],
        fontWeight: "bold",
        color: "black.900",
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "home.create",
          defaultMessage: [{
            "type": 0,
            "value": "Create a Collective"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: ['column', 'row'],
      mb: [5, 6],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        alignItems: "center",
        width: [null, 280, 312],
        mb: [4, 0],
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image, {
            src: "/static/images/create-collective/openSourceIllustration.png",
            alt: formatMessage(messages.opensource)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/opensource/apply/intro",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              fontSize: "13px",
              buttonStyle: "primary",
              minHeight: "36px",
              mt: [2, 3],
              mb: 3,
              px: 3,
              children: formatMessage(messages.opensource)
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExamplesLink, {
            href: "/search?tag=opensource",
            openInNewTab: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "createCollective.examples",
              defaultMessage: [{
                "type": 0,
                "value": "See examples"
              }]
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        borderLeft: ['none', '1px solid #E6E8EB'],
        borderTop: ['1px solid #E6E8EB', 'none'],
        alignItems: "center",
        width: [null, 280, 312],
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image, {
            src: "/static/images/create-collective/communityIllustration.png",
            alt: formatMessage(messages.community)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "".concat(baseRoute, "/community"),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              fontSize: "13px",
              buttonStyle: "primary",
              minHeight: "36px",
              mt: [2, 3],
              mb: 3,
              px: 3,
              "data-cy": "ccf-category-picker-button-community",
              children: formatMessage(messages.community)
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExamplesLink, {
            href: "/search?tag=community",
            openInNewTab: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "createCollective.examples",
              defaultMessage: [{
                "type": 0,
                "value": "See examples"
              }]
            })
          })]
        })
      })]
    })]
  });
};

CollectiveCategoryPicker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollectiveCategoryPicker"
};
/* harmony default export */ var create_collective_CollectiveCategoryPicker = (CollectiveCategoryPicker);
// EXTERNAL MODULE: ./components/create-collective/CreateCollectiveForm.js
var CreateCollectiveForm = __webpack_require__(16856);
;// CONCATENATED MODULE: ./components/create-collective/index.js











var _templateObject, _templateObject2;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



















var CreateCollective = /*#__PURE__*/function (_Component) {
  inherits_default()(CreateCollective, _Component);

  var _super = _createSuper(CreateCollective);

  function CreateCollective(props) {
    var _this;

    classCallCheck_default()(this, CreateCollective);

    _this = _super.call(this, props);
    _this.state = {
      error: null,
      creating: false
    };
    _this.createCollective = _this.createCollective.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(CreateCollective, [{
    key: "createCollective",
    value: function () {
      var _createCollective = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(_ref) {
        var collective, message, inviteMembers, res, newCollective, errorMsg;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                collective = _ref.collective, message = _ref.message, inviteMembers = _ref.inviteMembers;
                // set state to loading
                this.setState({
                  creating: true
                }); // prepare object

                collective.tags = collective.tags ? [].concat(toConsumableArray_default()(collective.tags), [this.props.router.query.category]) : [this.props.router.query.category]; // try mutation

                _context.prev = 3;
                _context.next = 6;
                return this.props.createCollective({
                  variables: {
                    collective: collective,
                    host: this.props.host ? {
                      slug: this.props.host.slug
                    } : null,
                    message: message,
                    inviteMembers: inviteMembers.map(function (invite) {
                      return _objectSpread(_objectSpread({}, invite), {}, {
                        memberAccount: {
                          legacyId: invite.memberAccount.id
                        }
                      });
                    })
                  }
                });

              case 6:
                res = _context.sent;
                newCollective = res.data.createCollective;
                _context.next = 10;
                return this.props.refetchLoggedInUser();

              case 10:
                this.props.router.push({
                  pathname: "/".concat(newCollective.slug, "/onboarding"),
                  query: {
                    CollectiveId: newCollective.legacyId
                  }
                }).then(function () {
                  return window.scrollTo(0, 0);
                });
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);
                errorMsg = (0,errors/* i18nGraphqlException */.t2)(this.props.intl, _context.t0);
                this.setState({
                  error: errorMsg,
                  creating: false
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 13]]);
      }));

      function createCollective(_x) {
        return _createCollective.apply(this, arguments);
      }

      return createCollective;
    }()
  }, {
    key: "render",
    value: function render() {
      var _data$tagStats, _data$tagStats$nodes;

      var _this$props = this.props,
          LoggedInUser = _this$props.LoggedInUser,
          host = _this$props.host,
          router = _this$props.router,
          data = _this$props.data;
      var error = this.state.error;
      var category = router.query.category;
      var tags = data === null || data === void 0 ? void 0 : (_data$tagStats = data.tagStats) === null || _data$tagStats === void 0 ? void 0 : (_data$tagStats$nodes = _data$tagStats.nodes) === null || _data$tagStats$nodes === void 0 ? void 0 : _data$tagStats$nodes.filter(function (node) {
        return !collectives/* IGNORED_TAGS.includes */.bR.includes(node.tag);
      });
      var popularTags = tags === null || tags === void 0 ? void 0 : tags.map(function (value) {
        return value.tag;
      });

      if (host && !host.isOpenToApplications) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          alignItems: "center",
          mb: 5,
          p: 2,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            flexDirection: "column",
            p: 4,
            mt: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mb: 3,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
                fontSize: "32px",
                lineHeight: "36px",
                fontWeight: "bold",
                textAlign: "center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "home.create",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create a Collective"
                  }]
                })
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            alignItems: "center",
            justifyContent: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
              type: "warning",
              withIcon: true,
              mb: [1, 3],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "collectives.create.error.HostNotOpenToApplications",
                defaultMessage: [{
                  "type": 0,
                  "value": "This Fiscal Host is not open to applications"
                }]
              })
            })
          })]
        });
      }

      if (!LoggedInUser) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
          mb: 5,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
            m: 4,
            type: "warning",
            withIcon: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "mustBeLoggedIn",
              defaultMessage: [{
                "type": 0,
                "value": "You must be logged in to see this page"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SignInOrJoinFree/* default */.ZP, {
            createProfileTabs: ['personal']
          })]
        });
      }

      if (!host && !category) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(create_collective_CollectiveCategoryPicker, {});
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(CreateCollectiveForm/* default */.Z, {
        host: host,
        onSubmit: this.createCollective,
        onChange: this.handleChange,
        loading: this.state.creating,
        error: error,
        popularTags: popularTags,
        loggedInUser: LoggedInUser
      });
    }
  }]);

  return CreateCollective;
}(react.Component);

var createCollectiveMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation CreateCollective(\n    $collective: CollectiveCreateInput!\n    $host: AccountReferenceInput\n    $message: String\n    $inviteMembers: [InviteMemberInput]\n  ) {\n    createCollective(collective: $collective, host: $host, message: $message, inviteMembers: $inviteMembers) {\n      id\n      name\n      slug\n      tags\n      description\n      githubHandle\n      repositoryUrl\n      legacyId\n    }\n  }\n"])));
var tagStatsQuery = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query TagStatsQuery($host: AccountReferenceInput) {\n    tagStats(limit: 6, host: $host) {\n      nodes {\n        id\n        tag\n      }\n    }\n  }\n"])));
var addCreateCollectiveMutation = (0,graphql/* graphql */.B)(createCollectiveMutation, {
  name: 'createCollective',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
  }
});
var addTagStatsQuery = (0,graphql/* graphql */.B)(tagStatsQuery, {
  options: function options(props) {
    return {
      context: helpers/* API_V2_CONTEXT */.T,
      variables: {
        host: props.host ? {
          slug: props.host.slug
        } : undefined
      }
    };
  }
});
CreateCollective.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "createCollective",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "{ collective, message, inviteMembers }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateCollective",
  "props": {
    "host": {
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
      "required": false
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "createCollective": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "tagStats": {
            "name": "shape",
            "value": {
              "nodes": {
                "name": "arrayOf",
                "value": {
                  "name": "shape",
                  "value": {
                    "tag": {
                      "name": "string",
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
/* harmony default export */ var create_collective = ((0,next_router.withRouter)((0,UserProvider/* withUser */.ns)(addCreateCollectiveMutation(addTagStatsQuery((0,injectIntl/* default */.ZP)(CreateCollective))))));
// EXTERNAL MODULE: ./components/ErrorPage.js
var ErrorPage = __webpack_require__(73908);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
;// CONCATENATED MODULE: ./pages/create-collective.js


var create_collective_templateObject;











var createCollectiveHostQuery = (0,lib/* default */.ZP)(create_collective_templateObject || (create_collective_templateObject = taggedTemplateLiteral_default()(["\n  query CreateCollectiveHost($slug: String!) {\n    host(slug: $slug) {\n      id\n      legacyId\n      type\n      slug\n      name\n      currency\n      isOpenToApplications\n      termsUrl\n      policies {\n        COLLECTIVE_MINIMUM_ADMINS {\n          numberOfAdmins\n        }\n      }\n    }\n  }\n"])));

var CreateCollectivePage = function CreateCollectivePage(_ref) {
  var loadingLoggedInUser = _ref.loadingLoggedInUser,
      LoggedInUser = _ref.LoggedInUser;
  var router = (0,next_router.useRouter)();
  var slug = router.query.hostCollectiveSlug || (router.query.category === 'opensource' ? 'opensource' : undefined);
  var skipQuery = !LoggedInUser || !slug;

  var _useQuery = (0,client.useQuery)(createCollectiveHostQuery, {
    context: helpers/* API_V2_CONTEXT */.T,
    skip: skipQuery,
    variables: {
      slug: slug
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading || loadingLoggedInUser) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
      loading: true
    });
  }

  if (!skipQuery && (!data || !data.host)) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
      error: (0,errors/* generateNotFoundError */.mN)(slug),
      data: {
        error: error
      },
      log: false
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
    showFooter: Boolean(LoggedInUser),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(create_collective, {
      host: data && data.host
    })
  });
};

CreateCollectivePage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateCollectivePage",
  "props": {
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
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
/* harmony default export */ var pages_create_collective = ((0,UserProvider/* withUser */.ns)(CreateCollectivePage));

/***/ }),

/***/ 3610:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/create-collective",
      function () {
        return __webpack_require__(79308);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,8966,8027,5126,295,146,5813,4842,4154,1012,1861,4691,1448,6856,9774,2888,179], function() { return __webpack_exec__(3610); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=create-collective-09f223b47705b368.js.map