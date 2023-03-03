"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[972],{

/***/ 73908:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_boxicons_regular_Support__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(68597);
/* harmony import */ var _styled_icons_fa_solid_Redo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(46422);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(44012);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12136);
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1259);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3518);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16159);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80146);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92129);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53169);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86702);
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40517);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(85893);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




















/**
 * A flexible error page
 */




var ErrorPage = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default()(ErrorPage, _React$Component);

  var _super = _createSuper(ErrorPage);

  function ErrorPage() {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, ErrorPage);

    return _super.apply(this, arguments);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(ErrorPage, [{
    key: "getErrorComponent",
    value: function getErrorComponent() {
      var _this$props = this.props,
          error = _this$props.error,
          data = _this$props.data,
          loading = _this$props.loading,
          _this$props$log = _this$props.log,
          log = _this$props$log === void 0 ? true : _this$props$log;

      if (log && lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(data, 'error')) {
        if (data.error.message !== 'Test error') {
          // That might not be the right place to log the error. Remove?
          // eslint-disable-next-line no-console
          console.error(data.error);
        }
      }

      if (lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(data, 'error.networkError')) {
        return this.networkError();
      }

      if (loading || lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(data, 'loading')) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Loading__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {});
      }

      if (error) {
        switch (error.type) {
          case _lib_errors__WEBPACK_IMPORTED_MODULE_8__/* .ERROR.NOT_FOUND */ .pn.NOT_FOUND:
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_NotFound__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              searchTerm: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(error.payload, 'searchTerm')
            });

          case _lib_errors__WEBPACK_IMPORTED_MODULE_8__/* .ERROR.BAD_COLLECTIVE_TYPE */ .pn.BAD_COLLECTIVE_TYPE:
            return this.renderErrorMessage( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              id: "Error.BadCollectiveType",
              defaultMessage: [{
                "type": 0,
                "value": "This profile type is not supported"
              }]
            }));
        }
      } else if (lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(data, 'error.message', '').includes('No collective found')) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_NotFound__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          searchTerm: lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(this.props.data, 'variables.slug')
        });
      } // If error message is provided, we display it. This behaviour should be deprecated
      // as we loose the context of the page where the error took place.


      if (this.props.message) {
        return this.renderErrorMessage(this.props.message);
      }

      return this.unknownError();
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage(message) {
      var _this = this;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        py: 6,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          type: "error",
          withIcon: true,
          mb: 5,
          children: message
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          buttonSize: "large",
          buttonStyle: "primary",
          onClick: function onClick() {
            return _this.props.router.back();
          },
          children: ["\u2190 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            id: "error.goBack",
            defaultMessage: [{
              "type": 0,
              "value": "Go back to the previous page"
            }]
          })]
        })]
      });
    }
  }, {
    key: "networkError",
    value: function networkError() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        py: 6,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_20__.H1, {
          fontSize: 30,
          textAlign: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            id: "page.error.networkError",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective is momentarily unreachable"
            }]
          }), "\xA0 \uD83D\uDE40"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
          mt: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
            textAlign: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              id: "page.error.networkError.description",
              defaultMessage: [{
                "type": 0,
                "value": "Don't worry! One of our engineers is probably already on it 👩🏻‍💻👨🏿‍💻. Please try again later. Thank you for your patience 🙏 (and sorry for the inconvenience!)"
              }]
            })
          })
        })]
      });
    }
  }, {
    key: "unknownError",
    value: function unknownError() {
      var message = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(this.props, 'data.error.message');

      var stackTrace = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(this.props, 'data.error.stack');

      var expandError = "ci" !== 'production';
      var fontSize = ['ci', 'e2e', 'test'].includes("ci") ? 22 : 13;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        py: [4, 6],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_20__.H1, {
          fontSize: 30,
          textAlign: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            id: "error.unexpected",
            defaultMessage: [{
              "type": 0,
              "value": "Oops, an unexpected error seems to have occurred"
            }]
          }), "\xA0 \uD83E\uDD15"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
          mt: 5,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            my: 2,
            as: _Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
            href: "/contact",
            mx: 2,
            buttonStyle: "standard",
            buttonSize: "large",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_styled_icons_boxicons_regular_Support__WEBPACK_IMPORTED_MODULE_24__/* .Support */ .R, {
              size: "1em"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              id: "error.contactSupport",
              defaultMessage: [{
                "type": 0,
                "value": "Contact support"
              }]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            my: 2,
            mx: 2,
            buttonSize: "large",
            onClick: function onClick() {
              return location.reload();
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_styled_icons_fa_solid_Redo__WEBPACK_IMPORTED_MODULE_25__/* .Redo */ .J, {
              size: "0.8em"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              id: "error.reload",
              defaultMessage: [{
                "type": 0,
                "value": "Reload the page"
              }]
            })]
          })]
        }), (stackTrace || message) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          mt: 5,
          maxWidth: 1200,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("details", {
            open: expandError,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("summary", {
              style: {
                textAlign: 'center',
                marginBottom: 12
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                id: "error.details",
                defaultMessage: [{
                  "type": 0,
                  "value": "Error details"
                }]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              p: 3,
              children: [message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("strong", {
                  children: "Message"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("pre", {
                  style: {
                    whiteSpace: 'pre-wrap',
                    fontSize: fontSize
                  },
                  children: message
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("br", {})]
              }), stackTrace && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("strong", {
                  children: "Trace"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("pre", {
                  style: {
                    whiteSpace: 'pre-wrap',
                    fontSize: fontSize
                  },
                  children: stackTrace
                })]
              })]
            })]
          })
        })]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var LoggedInUser = this.props.LoggedInUser;
      var component = this.getErrorComponent();
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        className: "ErrorPage",
        "data-cy": "error-page",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          LoggedInUser: LoggedInUser
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Body__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            py: [5, 6],
            children: component
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})]
      });
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

ErrorPage.__docgenInfo = {
  "description": "A flexible error page",
  "methods": [{
    "name": "getErrorComponent",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderErrorMessage",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "message",
      "type": null
    }],
    "returns": null
  }, {
    "name": "networkError",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "unknownError",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "ErrorPage",
  "props": {
    "error": {
      "description": "Customize the error type. Check `createError.*` functions for more info",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(ERROR)",
            "required": false
          },
          "payload": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "loading": {
      "description": "If true, a loading indicator will be displayed instead of an error",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "log": {
      "description": "Define if error should be logged to console. Default: true",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "message": {
      "description": "@deprecated please generate errors with the `createError` helper",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "data": {
      "description": "@deprecated please generate errors with the `createError` helper",
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
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_21__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_7__.withRouter)(ErrorPage)));

/***/ }),

/***/ 40517:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44012);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);










var NotFound = function NotFound(_ref) {
  var searchTerm = _ref.searchTerm;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
    "data-cy": "not-found",
    flexDirection: "column",
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__.H1, {
      textAlign: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        id: "notFound",
        defaultMessage: [{
          "type": 0,
          "value": "Not found"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
      fontSize: "3.6rem",
      color: "primary.500",
      mt: 4,
      mb: 5,
      children: "\xAF\\_(\u30C4)_/\xAF"
    }), searchTerm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
      flexWrap: "wrap",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        m: 2,
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default().back();
        },
        children: ["\u2190 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          id: "error.goBack",
          defaultMessage: [{
            "type": 0,
            "value": "Go back to the previous page"
          }]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: {
          pathname: '/search',
          query: {
            q: searchTerm
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          m: 2,
          buttonStyle: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            id: "notFound.search",
            defaultMessage: [{
              "type": 0,
              "value": "Search for "
            }, {
              "type": 1,
              "value": "term"
            }],
            values: {
              term: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                children: searchTerm
              })
            }
          })
        })
      })]
    })]
  });
};

NotFound.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NotFound",
  "props": {
    "searchTerm": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (NotFound);

/***/ }),

/***/ 32606:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86896);
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72427);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);



var _excluded = ["onSubmit", "defaultValue", "placeholder"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  searchPlaceholder: {
    id: "search.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Search..."
    }]
  }
});
/**
 * A wrapper around `SearchForm` that holds state and interacts with parent
 * through `onSubmit`, rather than `onChange`.
 */

var SearchBar = function SearchBar(_ref) {
  var _onSubmit = _ref.onSubmit,
      defaultValue = _ref.defaultValue,
      placeholder = _ref.placeholder,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(defaultValue || ''),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(); // Reset value when `defaultValue` change, to handle reset filters

  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    setValue(defaultValue || '');
  }, [defaultValue]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SearchForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread({
    placeholder: placeholder || intl.formatMessage(messages.searchPlaceholder),
    value: value,
    onChange: setValue,
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      var searchInput = event.target.elements.q;

      _onSubmit(searchInput.value || null);
    }
  }, props));
};

SearchBar.__docgenInfo = {
  "description": "A wrapper around `SearchForm` that holds state and interacts with parent\nthrough `onSubmit`, rather than `onChange`.",
  "methods": [],
  "displayName": "SearchBar",
  "props": {
    "onSubmit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "placeholder": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (SearchBar);

/***/ }),

/***/ 23737:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ conversations_EmojiReactionPicker; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Manager.js
var Manager = __webpack_require__(81385);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Reference.js
var Reference = __webpack_require__(63351);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Popper.js
var Popper = __webpack_require__(74688);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/hooks/useGlobalBlur.js
var useGlobalBlur = __webpack_require__(55348);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/icons/CustomStyledIcon.js
var CustomStyledIcon = __webpack_require__(50333);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/icons/AddReactionIcon.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var AddReactionIcon = function AddReactionIcon(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CustomStyledIcon/* default */.Z, _objectSpread(_objectSpread({
    fill: "none",
    width: "17",
    height: "16",
    viewBox: "0 0 17 16"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fill: "#9D9FA3",
      fillRule: "evenodd",
      d: "M13.136 3.81v2.285h1.546V3.81H17V2.286h-2.318V0h-1.546v2.286h-2.318V3.81h2.318zM0 8.762c0-3.996 3.281-7.238 7.334-7.238.94 0 1.84.174 2.666.491v1.668a5.84 5.84 0 00-2.66-.635c-3.201 0-5.795 2.557-5.795 5.714 0 3.157 2.594 5.714 5.796 5.714 3.202 0 5.795-2.557 5.795-5.714A5.64 5.64 0 0012.856 7h1.607c.143.564.219 1.154.219 1.762 0 3.995-3.289 7.238-7.348 7.238C3.28 16 0 12.757 0 8.762zm9.66-.381c.64 0 1.158-.51 1.158-1.143A1.15 1.15 0 009.66 6.095c-.641 0-1.159.51-1.159 1.143a1.15 1.15 0 001.16 1.143zM6.181 7.238a1.15 1.15 0 01-1.16 1.143 1.15 1.15 0 01-1.158-1.143 1.15 1.15 0 011.159-1.143c.641 0 1.159.51 1.159 1.143zm1.159 5.714c1.585 0 2.933-.953 3.477-2.285H3.864c.544 1.332 1.891 2.285 3.477 2.285z",
      clipRule: "evenodd",
      strokeWidth: "0.1"
    })
  }));
};

AddReactionIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AddReactionIcon",
  "props": {
    "size": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    }
  }
};
/* harmony default export */ var icons_AddReactionIcon = (AddReactionIcon);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
;// CONCATENATED MODULE: ./components/conversations/EmojiReactionPicker.js





var _templateObject, _templateObject2;

function EmojiReactionPicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EmojiReactionPicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EmojiReactionPicker_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EmojiReactionPicker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }














var addReactionMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation AddEmojiReaction($emoji: String!, $update: UpdateReferenceInput, $comment: CommentReferenceInput) {\n    addEmojiReaction(emoji: $emoji, update: $update, comment: $comment) {\n      update {\n        id\n        reactions\n        userReactions\n      }\n      comment {\n        id\n        reactions\n        userReactions\n      }\n    }\n  }\n"])));
var removeReactionMutation = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  mutation RemoveEmojiReaction($emoji: String!, $update: UpdateReferenceInput, $comment: CommentReferenceInput) {\n    removeEmojiReaction(emoji: $emoji, update: $update, comment: $comment) {\n      update {\n        id\n        reactions\n        userReactions\n      }\n      comment {\n        id\n        reactions\n        userReactions\n      }\n    }\n  }\n"])));
var Emoji = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "EmojiReactionPicker__Emoji",
  componentId: "sc-4zqity-0"
})(["font-size:15px;"]);
var ReactionButton = (0,styled_components_browser_esm/* default */.ZP)(StyledRoundButton/* default */.Z).attrs({
  isBorderless: true,
  buttonSize: 'small'
}).withConfig({
  displayName: "EmojiReactionPicker__ReactionButton",
  componentId: "sc-4zqity-1"
})(["margin:4px;background:white !important;", "{transition:transform 0.15s cubic-bezier(0.2,0,0.13,2);}&:hover{", "{transform:scale(1.3);}}", ""], Emoji, Emoji, function (props) {
  return props.isSelected && (0,styled_components_browser_esm/* css */.iv)(["background:", " !important;"], props.theme.colors.primary[200]);
});

var getOptimisticResponse = function getOptimisticResponse(entity, emoji, isAdding) {
  var userReactions = entity.userReactions || [];
  var __typename = entity.__typename;
  var fieldName = __typename === 'Update' ? 'update' : 'comment';
  var fieldNameOpposite = __typename === 'Update' ? 'comment' : 'update';

  if (isAdding) {
    var _addEmojiReaction;

    var newCount = (entity.reactions[emoji] || 0) + 1;
    return {
      __typename: 'Mutation',
      addEmojiReaction: (_addEmojiReaction = {
        __typename: 'EmojiReactionsResponse'
      }, defineProperty_default()(_addEmojiReaction, fieldName, {
        __typename: __typename,
        id: entity.id,
        reactions: EmojiReactionPicker_objectSpread(EmojiReactionPicker_objectSpread({}, entity.reactions), {}, defineProperty_default()({}, emoji, newCount)),
        userReactions: [].concat(toConsumableArray_default()(userReactions), [emoji])
      }), defineProperty_default()(_addEmojiReaction, fieldNameOpposite, null), _addEmojiReaction)
    };
  } else {
    var _removeEmojiReaction;

    var _newCount = (entity.reactions[emoji] || 0) - 1;

    var reactions = EmojiReactionPicker_objectSpread(EmojiReactionPicker_objectSpread({}, entity.reactions), {}, defineProperty_default()({}, emoji, _newCount));

    if (!reactions[emoji]) {
      delete reactions[emoji];
    }

    return {
      __typename: 'Mutation',
      removeEmojiReaction: (_removeEmojiReaction = {
        __typename: 'EmojiReactionsResponse'
      }, defineProperty_default()(_removeEmojiReaction, fieldName, {
        __typename: __typename,
        id: entity.id,
        reactions: reactions,
        userReactions: userReactions.filter(function (userEmoji) {
          return userEmoji !== emoji;
        })
      }), defineProperty_default()(_removeEmojiReaction, fieldNameOpposite, null), _removeEmojiReaction)
    };
  }
};

var mutationOptions = {
  context: helpers/* API_V2_CONTEXT */.T
};
/**
 * A component to render the reaction picker on comments.
 */

var EmojiReactionPicker = function EmojiReactionPicker(_ref) {
  var comment = _ref.comment,
      update = _ref.update;
  var emojiFirstRow = ['👍️', '👎', '😀', '🎉'];
  var emojiSecondRow = ['😕', '❤️', '🚀', '👀'];

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var wrapperRef = react.useRef();

  var _useMutation = (0,client.useMutation)(addReactionMutation, mutationOptions),
      _useMutation2 = slicedToArray_default()(_useMutation, 1),
      addReaction = _useMutation2[0];

  var _useMutation3 = (0,client.useMutation)(removeReactionMutation, mutationOptions),
      _useMutation4 = slicedToArray_default()(_useMutation3, 1),
      removeReaction = _useMutation4[0];

  (0,useGlobalBlur/* default */.Z)(wrapperRef, function (outside) {
    if (outside) {
      setOpen(false);
    }
  });

  var getReactionBtnProps = function getReactionBtnProps(emoji) {
    var isSelected;

    if (comment) {
      var _comment$userReaction;

      isSelected = (_comment$userReaction = comment.userReactions) === null || _comment$userReaction === void 0 ? void 0 : _comment$userReaction.includes(emoji);
    } else if (update) {
      var _update$userReactions;

      isSelected = (_update$userReactions = update.userReactions) === null || _update$userReactions === void 0 ? void 0 : _update$userReactions.includes(emoji);
    }

    return {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Emoji, {
        children: emoji
      }),
      isSelected: isSelected,
      onClick: function onClick() {
        setOpen(false);
        var action = isSelected ? removeReaction : addReaction;

        if (comment) {
          return action({
            variables: {
              emoji: emoji,
              comment: {
                id: comment.id
              }
            },
            optimisticResponse: getOptimisticResponse(comment, emoji, !isSelected, true)
          });
        } else if (update) {
          return action({
            variables: {
              emoji: emoji,
              update: {
                id: update.id
              }
            },
            optimisticResponse: getOptimisticResponse(update, emoji, !isSelected, false)
          });
        }
      }
    };
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Manager/* Manager */.dK, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      ref: wrapperRef,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Reference/* Reference */.s, {
        children: function children(_ref2) {
          var ref = _ref2.ref;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            buttonSize: "tiny",
            display: "inline-block",
            whiteSpace: "nowrap",
            onClick: function onClick() {
              return setOpen(true);
            },
            ref: ref,
            margin: "4px 8px 4px 0",
            "data-cy": "comment-reaction-picker-trigger",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_AddReactionIcon, {})
          });
        }
      }), open && /*#__PURE__*/(0,jsx_runtime.jsx)(Popper/* Popper */.r, {
        placement: "bottom",
        children: function children(_ref3) {
          var placement = _ref3.placement,
              ref = _ref3.ref,
              style = _ref3.style;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard/* default */.Z, {
            boxShadow: "-2px -1px 3px 0px #e8e8e8",
            zIndex: 9999,
            "data-placement": placement,
            ref: ref,
            style: style,
            "data-cy": "comment-reaction-picker-popper",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              children: emojiFirstRow.map(function (emoji) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(ReactionButton, EmojiReactionPicker_objectSpread({}, getReactionBtnProps(emoji)), emoji);
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              children: emojiSecondRow.map(function (emoji) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(ReactionButton, EmojiReactionPicker_objectSpread({}, getReactionBtnProps(emoji)), emoji);
              })
            })]
          });
        }
      })]
    })
  });
};

EmojiReactionPicker.__docgenInfo = {
  "description": "A component to render the reaction picker on comments.",
  "methods": [],
  "displayName": "EmojiReactionPicker",
  "props": {
    "comment": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "html": {
            "name": "string",
            "required": false
          },
          "createdAt": {
            "name": "string",
            "required": false
          },
          "userReactions": {
            "name": "array",
            "required": false
          }
        }
      },
      "required": false
    },
    "update": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "html": {
            "name": "string",
            "required": false
          },
          "createdAt": {
            "name": "string",
            "required": false
          },
          "fromAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "name": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "userReactions": {
            "name": "array",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var conversations_EmojiReactionPicker = (EmojiReactionPicker);

/***/ }),

/***/ 953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52015);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);




var EmojiLabel = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_1__/* .Span */ .Dr).withConfig({
  displayName: "EmojiReactions__EmojiLabel",
  componentId: "sc-os32es-0"
})(["outline:0;border:1px solid #dadada;border-style:solid;border-width:1px;border-radius:100px;text-align:center;padding:5px 14px 5px 14px;font-size:12px;line-height:14px;margin:4px 8px 4px 0;"]);

var EmojiReactions = function EmojiReactions(_ref) {
  var reactions = _ref.reactions;
  return Object.keys(reactions).sort().map(function (emoji) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(EmojiLabel, {
      children: [emoji, "\xA0\xA0", reactions[emoji]]
    }, emoji);
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(EmojiReactions));

/***/ }),

/***/ 72004:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ CustomScrollbarCSS; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52015);

/**
 * A custom scrollbar for Chrome, more prettier than the system one.
 */

var CustomScrollbarCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)(["@media (pointer:fine){&::-webkit-scrollbar{height:8px;margin:0 16px;}&::-webkit-scrollbar-thumb{background:#d1d1d3;border-radius:16px;&:hover{background:#aaa;}}&::-webkit-scrollbar-track{background:#f2f3f4;border-radius:20px;}&::-webkit-scrollbar-button{color:white;}}"]);

/***/ }),

/***/ 3393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UPDATES_PER_PAGE": function() { return /* binding */ UPDATES_PER_PAGE; },
  "default": function() { return /* binding */ updates; },
  "getUpdatesVariables": function() { return /* binding */ getUpdatesVariables; },
  "updatesQuery": function() { return /* binding */ updatesQuery; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
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
// EXTERNAL MODULE: ./node_modules/lodash/omitBy.js
var omitBy = __webpack_require__(14176);
var omitBy_default = /*#__PURE__*/__webpack_require__.n(omitBy);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./components/Body.js
var Body = __webpack_require__(1259);
// EXTERNAL MODULE: ./components/collective-navbar/index.js + 8 modules
var collective_navbar = __webpack_require__(99656);
// EXTERNAL MODULE: ./components/collective-navbar/constants.js
var constants = __webpack_require__(97585);
// EXTERNAL MODULE: ./components/collective-page/graphql/fragments.js
var fragments = __webpack_require__(5824);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
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
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/StyledUpdate.js + 2 modules
var StyledUpdate = __webpack_require__(37169);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Updates.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var LoadingContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Updates__LoadingContainer",
  componentId: "sc-1rntou2-0"
})(["color:#797d7f;position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgba(255,255,255,0.85);text-transform:uppercase;letter-spacing:3px;font-weight:bold;z-index:10;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(5px);"]);

var Updates = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Updates, _React$Component);

  var _super = _createSuper(Updates);

  function Updates(props) {
    var _this;

    classCallCheck_default()(this, Updates);

    _this = _super.call(this, props);
    _this.fetchMore = _this.fetchMore.bind(assertThisInitialized_default()(_this));
    _this.state = {
      loading: false,
      isPayActionLocked: false
    };
    return _this;
  }

  createClass_default()(Updates, [{
    key: "fetchMore",
    value: function fetchMore(e) {
      var _this2 = this;

      e.target.blur();
      this.setState({
        loading: true
      });
      this.props.fetchMore().then(function () {
        _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "setPayActionLock",
    value: function setPayActionLock(val) {
      this.setState({
        isPayActionLocked: val
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          updates = _this$props.updates;
      var showLoadMore = (updates === null || updates === void 0 ? void 0 : updates.nodes.length) < (updates === null || updates === void 0 ? void 0 : updates.totalCount);

      if (!updates) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "Updates",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          position: "relative",
          border: "1px solid #e6e8eb",
          borderRadius: 5,
          children: [this.state.loading && /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingContainer, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "loading",
              defaultMessage: [{
                "type": 0,
                "value": "loading"
              }]
            })
          }), updates.nodes.map(function (update, index) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
              padding: "0",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledUpdate/* default */.Z, {
                update: update,
                collective: collective,
                compact: true,
                borderTop: index !== 0 ? '1px solid #e6e8eb' : 'none'
              })
            }, update.id);
          }), updates.nodes.length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            color: "black.700",
            p: 4,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "updates.empty",
              defaultMessage: [{
                "type": 0,
                "value": "No Updates"
              }]
            })
          })]
        }), showLoadMore && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          margin: "1rem",
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
            onClick: this.fetchMore,
            textTransform: "capitalize",
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

  return Updates;
}(react.Component);

Updates.__docgenInfo = {
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
    "name": "setPayActionLock",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "val",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "Updates",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "updates": {
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
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_Updates = (Updates);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./components/StyledSelectFilter.js
var StyledSelectFilter = __webpack_require__(52847);
;// CONCATENATED MODULE: ./components/updates/filters/UpdateOrderByFilter.js


var _excluded = ["value", "onChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var FilterLabel = styled_components_browser_esm/* default.label.withConfig */.ZP.label.withConfig({
  displayName: "UpdateOrderByFilter__FilterLabel",
  componentId: "sc-s44mm1-0"
})(["font-weight:500;font-size:12px;line-height:16px;letter-spacing:0.06em;text-transform:uppercase;color:#4e5052;margin-bottom:10px;"]);
var labels = (0,react_intl_lib.defineMessages)({
  'most-recent': {
    id: "Collectives.MostRecent",
    defaultMessage: [{
      "type": 0,
      "value": "Most recent"
    }]
  },
  oldest: {
    id: "Collectives.Oldest",
    defaultMessage: [{
      "type": 0,
      "value": "Oldest"
    }]
  }
});

var UpdateOrderByFilter = function UpdateOrderByFilter(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var intl = (0,useIntl/* default */.Z)();

  var getOption = function getOption(value) {
    return {
      label: intl.formatMessage(labels[value]),
      value: value
    };
  };

  var options = [getOption('most-recent'), getOption('oldest')];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FilterLabel, {
      htmlFor: "update-filter-sort-by",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "Update.SortBy",
        defaultMessage: [{
          "type": 0,
          "value": "Sort By"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelectFilter/* StyledSelectFilter */.V, _objectSpread({
      inputId: "update-filter-sort-by",
      value: labels[value] ? getOption(value) : options[0],
      onChange: function onChange(_ref2) {
        var value = _ref2.value;
        return _onChange(value);
      },
      options: options
    }, props))]
  });
};

UpdateOrderByFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdateOrderByFilter",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var filters_UpdateOrderByFilter = (/*#__PURE__*/react.memo(UpdateOrderByFilter));
// EXTERNAL MODULE: ./components/SearchBar.js
var SearchBar = __webpack_require__(32606);
;// CONCATENATED MODULE: ./components/updates/filters/UpdateSearchFilter.js








var UpdateSearchFilter_FilterLabel = styled_components_browser_esm/* default.label.withConfig */.ZP.label.withConfig({
  displayName: "UpdateSearchFilter__FilterLabel",
  componentId: "sc-fz2wlq-0"
})(["font-weight:500;font-size:12px;line-height:16px;letter-spacing:0.06em;text-transform:uppercase;color:#4e5052;margin-bottom:10px;"]);
var SearchFormContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "UpdateSearchFilter__SearchFormContainer",
  componentId: "sc-fz2wlq-1"
})(["width:100%;min-width:10rem;"]);
var messages = (0,react_intl_lib.defineMessages)({
  searchFilterPlaceholder: {
    id: "UpdateSearchFilter.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Search by user, title, content..."
    }]
  }
});

var UpdateSearchFilter = function UpdateSearchFilter(_ref) {
  var searchTerm = _ref.searchTerm,
      onChange = _ref.onChange;

  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UpdateSearchFilter_FilterLabel, {
      htmlFor: "update-filter-search",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "Search",
        defaultMessage: [{
          "type": 0,
          "value": "Search"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(SearchFormContainer, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(SearchBar/* default */.Z, {
        id: "update-filter-search",
        placeholder: formatMessage(messages.searchFilterPlaceholder),
        height: "38px",
        defaultValue: searchTerm,
        onSubmit: onChange
      })
    })]
  });
};

UpdateSearchFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdateSearchFilter",
  "props": {
    "searchTerm": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var filters_UpdateSearchFilter = (/*#__PURE__*/react.memo(UpdateSearchFilter));
;// CONCATENATED MODULE: ./components/updates/UpdateFilters.js


function UpdateFilters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function UpdateFilters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? UpdateFilters_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : UpdateFilters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var UpdateFilters = function UpdateFilters(_ref) {
  var values = _ref.values,
      _onChange = _ref.onChange;

  var getFilterProps = function getFilterProps(name) {
    return {
      inputId: "updates-filter-".concat(name),
      value: values === null || values === void 0 ? void 0 : values[name],
      onChange: function onChange(value) {
        _onChange(UpdateFilters_objectSpread(UpdateFilters_objectSpread({}, values), {}, defineProperty_default()({}, name, value === 'ALL' ? null : value)));
      }
    };
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexWrap: "wrap",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: [1, 1, 2 / 12],
      mr: ['none', '15px'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(filters_UpdateOrderByFilter, UpdateFilters_objectSpread({}, getFilterProps('orderBy')))
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: [1, 1, '82%'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(filters_UpdateSearchFilter, UpdateFilters_objectSpread({}, getFilterProps('searchTerm')))
    })]
  });
};

UpdateFilters.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdateFilters",
  "props": {
    "values": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var updates_UpdateFilters = (/*#__PURE__*/react.memo(UpdateFilters));
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
;// CONCATENATED MODULE: ./pages/updates.js













var _templateObject;

function updates_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function updates_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? updates_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : updates_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function updates_createSuper(Derived) { var hasNativeReflectConstruct = updates_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function updates_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


























var ROUTE_PARAMS = ['collectiveSlug', 'offset'];

var UpdatesPage = /*#__PURE__*/function (_React$Component) {
  inherits_default()(UpdatesPage, _React$Component);

  var _super = updates_createSuper(UpdatesPage);

  function UpdatesPage() {
    var _this;

    classCallCheck_default()(this, UpdatesPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "updateQuery", function (router, newParams) {
      var query = omitBy_default()(updates_objectSpread(updates_objectSpread({}, router.query), newParams), function (value, key) {
        return !value || ROUTE_PARAMS.includes(key);
      });

      var pathname = router.asPath.split('?')[0];
      return router.push({
        pathname: pathname,
        query: query
      });
    });

    return _this;
  }

  createClass_default()(UpdatesPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          router = _this$props.router,
          data = _this$props.data;
      var account = data === null || data === void 0 ? void 0 : data.account;
      (0,url_helpers/* addParentToURLIfMissing */.Bc)(router, account, '/updates');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          data = _this$props2.data,
          LoggedInUser = _this$props2.LoggedInUser;
      var collective = data.account;

      if (!prevProps.LoggedInUser && LoggedInUser && LoggedInUser.isAdminOfCollective(collective)) {
        // We refetch the data to get the updates that are not published yet
        data.refetch({
          options: {
            fetchPolicy: 'network-only'
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          data = _this$props3.data,
          LoggedInUser = _this$props3.LoggedInUser,
          router = _this$props3.router;

      if (!data.account) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
          data: data
        });
      }

      var collective = data.account;
      var updates = collective === null || collective === void 0 ? void 0 : collective.updates;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "UpdatesPage",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header/* default */.Z, {
          collective: collective,
          LoggedInUser: LoggedInUser,
          canonicalURL: "".concat((0,url_helpers/* getCollectivePageCanonicalURL */.Bu)(collective), "/updates")
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Body/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(collective_navbar/* default */.Z, {
            collective: collective,
            isAdmin: LoggedInUser && LoggedInUser.isAdminOfCollective(collective),
            selectedCategory: constants/* NAVBAR_CATEGORIES.CONNECT */.t.CONNECT
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexWrap: "wrap",
              alignItems: "center",
              pr: 2,
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
                padding: "0.8rem 0",
                my: 4,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
                  fontSize: "40px",
                  fontWeight: "normal",
                  textAlign: "left",
                  mb: 2,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "updates",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Updates"
                    }]
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledP, {
                  color: "black.700",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "section.updates.subtitle",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Updates on our activities and progress."
                    }]
                  })
                })]
              }), (LoggedInUser === null || LoggedInUser === void 0 ? void 0 : LoggedInUser.isAdminOfCollective(collective)) && /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(collective), "/updates/new"),
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                  buttonStyle: "primary",
                  m: 2,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "sections.update.new",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Create an Update"
                    }]
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(updates_UpdateFilters, {
              values: router.query,
              onChange: function onChange(queryParams) {
                return _this2.updateQuery(router, updates_objectSpread(updates_objectSpread({}, queryParams), {}, {
                  offset: null
                }));
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mt: 4,
              mb: 5,
              children: data.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_Updates, {
                collective: collective,
                updates: updates,
                fetchMore: this.props.fetchMore,
                LoggedInUser: LoggedInUser
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Footer/* default */.Z, {})]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var _ref$query = _ref.query,
          collectiveSlug = _ref$query.collectiveSlug,
          orderBy = _ref$query.orderBy,
          searchTerm = _ref$query.searchTerm;
      return {
        slug: collectiveSlug,
        orderBy: orderBy,
        searchTerm: searchTerm
      };
    }
  }]);

  return UpdatesPage;
}(react.Component);

var updatesQuery = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  query Updates(\n    $collectiveSlug: String!\n    $limit: Int\n    $offset: Int\n    $searchTerm: String\n    $orderBy: UpdateChronologicalOrderInput\n  ) {\n    account(slug: $collectiveSlug, throwIfMissing: false) {\n      id\n      legacyId\n      name\n      slug\n      type\n      ... on Event {\n        parent {\n          id\n          slug\n        }\n      }\n      ... on Project {\n        parent {\n          id\n          slug\n        }\n      }\n      features {\n        id\n        ...NavbarFields\n      }\n      updates(limit: $limit, offset: $offset, searchTerm: $searchTerm, orderBy: $orderBy) {\n        totalCount\n        nodes {\n          id\n          slug\n          title\n          summary\n          createdAt\n          publishedAt\n          updatedAt\n          userCanSeeUpdate\n          tags\n          isPrivate\n          isChangelog\n          makePublicOn\n          fromAccount {\n            id\n            type\n            name\n            slug\n            imageUrl\n          }\n        }\n      }\n    }\n  }\n  ", "\n"])), fragments/* collectiveNavbarFieldsFragment */.AS);
var getUpdatesVariables = function getUpdatesVariables(slug) {
  var orderBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var searchTerm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    collectiveSlug: slug,
    offset: 0,
    limit: UPDATES_PER_PAGE * 2,
    orderBy: {
      field: 'PUBLISHED_AT',
      direction: orderBy === 'oldest' ? 'ASC' : 'DESC'
    },
    searchTerm: searchTerm
  };
};
var UPDATES_PER_PAGE = 10;
var addUpdatesData = (0,graphql/* graphql */.B)(updatesQuery, {
  options: function options(props) {
    return {
      context: helpers/* API_V2_CONTEXT */.T,
      variables: getUpdatesVariables(props.slug, props.orderBy, props.searchTerm)
    };
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      fetchMore: function fetchMore() {
        return data.fetchMore({
          variables: {
            offset: data.account.updates.nodes.length,
            limit: UPDATES_PER_PAGE
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }

            var previousResultNodes = Object.assign({}, previousResult.account.updates, {
              // Append the new posts results to the old one
              nodes: [].concat(toConsumableArray_default()(previousResult.account.updates.nodes), toConsumableArray_default()(fetchMoreResult.account.updates.nodes))
            });

            var previousResultClone = cloneDeep_default()(previousResult);

            previousResultClone.account.updates.nodes = previousResultNodes.nodes;
            return previousResultClone;
          }
        });
      }
    };
  }
});
UpdatesPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, orderBy, searchTerm } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "updateQuery",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "router",
      "type": null
    }, {
      "name": "newParams",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "UpdatesPage",
  "props": {
    "slug": {
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
    "router": {
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
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "account": {
            "name": "object",
            "required": false
          },
          "loading": {
            "name": "bool",
            "required": false
          },
          "refetch": {
            "name": "func",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ var updates = ((0,UserProvider/* withUser */.ns)((0,router.withRouter)(addUpdatesData(UpdatesPage))));

var _StyledP = (0,styled_components_browser_esm/* default */.ZP)(Text.P).withConfig({
  displayName: "updates___StyledP",
  componentId: "sc-1yw23z0-0"
})({
  flex: '0 1 70%'
});

/***/ })

}]);
//# sourceMappingURL=972-1cd8a921e6e0542b.js.map