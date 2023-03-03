"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4842],{

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

/***/ 84842:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1259);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73908);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3518);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80146);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);









var Page = function Page(_ref) {
  var children = _ref.children,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      description = _ref.description,
      image = _ref.image,
      loadingLoggedInUser = _ref.loadingLoggedInUser,
      LoggedInUser = _ref.LoggedInUser,
      title = _ref.title,
      metaTitle = _ref.metaTitle,
      noRobots = _ref.noRobots,
      twitterHandle = _ref.twitterHandle,
      showSearch = _ref.showSearch,
      canonicalURL = _ref.canonicalURL,
      collective = _ref.collective,
      menuItems = _ref.menuItems,
      _ref$showFooter = _ref.showFooter,
      showFooter = _ref$showFooter === void 0 ? true : _ref$showFooter,
      _ref$showProfileAndCh = _ref.showProfileAndChangelogMenu,
      showProfileAndChangelogMenu = _ref$showProfileAndCh === void 0 ? true : _ref$showProfileAndCh;

  if (data.error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      data: data,
      LoggedInUser: LoggedInUser
    });
  }

  var childProps = {
    LoggedInUser: LoggedInUser,
    loadingLoggedInUser: loadingLoggedInUser
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      showSearch: showSearch,
      title: title,
      noRobots: noRobots,
      twitterHandle: twitterHandle,
      description: description,
      image: image,
      metaTitle: metaTitle,
      canonicalURL: canonicalURL,
      collective: collective,
      menuItems: menuItems,
      LoggedInUser: LoggedInUser,
      showProfileAndChangelogMenu: showProfileAndChangelogMenu
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Body__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      children: typeof children === 'function' ? children(childProps) : children
    }), showFooter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
  });
};

Page.displayName = 'Page';
Page.defaultProps = {
  showSearch: true
};
Page.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Page",
  "props": {
    "data": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "error": {
            "name": "shape",
            "value": {},
            "required": false
          }
        }
      },
      "required": false
    },
    "showFooter": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showProfileAndChangelogMenu": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showSearch": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "node"
        }, {
          "name": "func"
        }]
      },
      "required": false
    },
    "description": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "canonicalURL": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "image": {
      "description": "",
      "type": {
        "name": "string"
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
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": false
    },
    "noRobots": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "title": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "metaTitle": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "twitterHandle": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "menuItems": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_5__/* .withUser */ .ns)(Page));

/***/ })

}]);
//# sourceMappingURL=4842-81b133c250ecf9d8.js.map