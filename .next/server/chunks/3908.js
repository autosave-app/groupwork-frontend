"use strict";
exports.id = 3908;
exports.ids = [3908];
exports.modules = {

/***/ 73908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_Support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60476);
/* harmony import */ var _styled_icons_boxicons_regular_Support__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Support__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_Redo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26201);
/* harmony import */ var _styled_icons_fa_solid_Redo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Redo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1259);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11333);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42352);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92129);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53169);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37278);
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40517);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_9__, _Header__WEBPACK_IMPORTED_MODULE_11__]);
([_Footer__WEBPACK_IMPORTED_MODULE_9__, _Header__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















/**
 * A flexible error page
 */




class ErrorPage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  getErrorComponent() {
    const {
      error,
      data,
      loading,
      log = true
    } = this.props;

    if (log && lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'error')) {
      if (data.error.message !== 'Test error') {
        // That might not be the right place to log the error. Remove?
        // eslint-disable-next-line no-console
        console.error(data.error);
      }
    }

    if (lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'error.networkError')) {
      return this.networkError();
    }

    if (loading || lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'loading')) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {});
    }

    if (error) {
      switch (error.type) {
        case _lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .ERROR.NOT_FOUND */ .pn.NOT_FOUND:
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_NotFound__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            searchTerm: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(error.payload, 'searchTerm')
          });

        case _lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .ERROR.BAD_COLLECTIVE_TYPE */ .pn.BAD_COLLECTIVE_TYPE:
          return this.renderErrorMessage( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "Error.BadCollectiveType",
            defaultMessage: [{
              "type": 0,
              "value": "This profile type is not supported"
            }]
          }));
      }
    } else if (lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'error.message', '').includes('No collective found')) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_NotFound__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        searchTerm: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data, 'variables.slug')
      });
    } // If error message is provided, we display it. This behaviour should be deprecated
    // as we loose the context of the page where the error took place.


    if (this.props.message) {
      return this.renderErrorMessage(this.props.message);
    }

    return this.unknownError();
  }

  renderErrorMessage(message) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      px: 2,
      py: 6,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        type: "error",
        withIcon: true,
        mb: 5,
        children: message
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        buttonSize: "large",
        buttonStyle: "primary",
        onClick: () => this.props.router.back(),
        children: ["\u2190 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "error.goBack",
          defaultMessage: [{
            "type": 0,
            "value": "Go back to the previous page"
          }]
        })]
      })]
    });
  }

  networkError() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      px: 2,
      py: 6,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_18__.H1, {
        fontSize: 30,
        textAlign: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "page.error.networkError",
          defaultMessage: [{
            "type": 0,
            "value": "Open Collective is momentarily unreachable"
          }]
        }), "\xA0 \uD83D\uDE40"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
        mt: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
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

  unknownError() {
    const message = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props, 'data.error.message');

    const stackTrace = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props, 'data.error.stack');

    const expandError = "ci" !== 'production';
    const fontSize = ['ci', 'e2e', 'test'].includes("ci") ? 22 : 13;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      px: 2,
      py: [4, 6],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_18__.H1, {
        fontSize: 30,
        textAlign: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "error.unexpected",
          defaultMessage: [{
            "type": 0,
            "value": "Oops, an unexpected error seems to have occurred"
          }]
        }), "\xA0 \uD83E\uDD15"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
        mt: 5,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          my: 2,
          as: _Link__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
          href: "/contact",
          mx: 2,
          buttonStyle: "standard",
          buttonSize: "large",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_boxicons_regular_Support__WEBPACK_IMPORTED_MODULE_2__.Support, {
            size: "1em"
          }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "error.contactSupport",
            defaultMessage: [{
              "type": 0,
              "value": "Contact support"
            }]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          my: 2,
          mx: 2,
          buttonSize: "large",
          onClick: () => location.reload(),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_fa_solid_Redo__WEBPACK_IMPORTED_MODULE_3__.Redo, {
            size: "0.8em"
          }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "error.reload",
            defaultMessage: [{
              "type": 0,
              "value": "Reload the page"
            }]
          })]
        })]
      }), (stackTrace || message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        mt: 5,
        maxWidth: 1200,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("details", {
          open: expandError,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("summary", {
            style: {
              textAlign: 'center',
              marginBottom: 12
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "error.details",
              defaultMessage: [{
                "type": 0,
                "value": "Error details"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            p: 3,
            children: [message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("strong", {
                children: "Message"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("pre", {
                style: {
                  whiteSpace: 'pre-wrap',
                  fontSize
                },
                children: message
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("br", {})]
            }), stackTrace && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("strong", {
                children: "Trace"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("pre", {
                style: {
                  whiteSpace: 'pre-wrap',
                  fontSize
                },
                children: stackTrace
              })]
            })]
          })]
        })
      })]
    });
  }

  render() {
    const {
      LoggedInUser
    } = this.props;
    const component = this.getErrorComponent();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
      className: "ErrorPage",
      "data-cy": "error-page",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Header__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        LoggedInUser: LoggedInUser
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Body__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          py: [5, 6],
          children: component
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})]
    });
  }

}

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_19__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(ErrorPage)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const NotFound = ({
  searchTerm
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
    "data-cy": "not-found",
    flexDirection: "column",
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.H1, {
      textAlign: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "notFound",
        defaultMessage: [{
          "type": 0,
          "value": "Not found"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
      fontSize: "3.6rem",
      color: "primary.500",
      mt: 4,
      mb: 5,
      children: "\xAF\\_(\u30C4)_/\xAF"
    }), searchTerm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      flexWrap: "wrap",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        m: 2,
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().back(),
        children: ["\u2190 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "error.goBack",
          defaultMessage: [{
            "type": 0,
            "value": "Go back to the previous page"
          }]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        href: {
          pathname: '/search',
          query: {
            q: searchTerm
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          m: 2,
          buttonStyle: "primary",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "notFound.search",
            defaultMessage: [{
              "type": 0,
              "value": "Search for "
            }, {
              "type": 1,
              "value": "term"
            }],
            values: {
              term: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("strong", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ })

};
;