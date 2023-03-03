"use strict";
exports.id = 4842;
exports.ids = [4842];
exports.modules = {

/***/ 84842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1259);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73908);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11333);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42352);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__, _components_Footer__WEBPACK_IMPORTED_MODULE_3__, _components_Header__WEBPACK_IMPORTED_MODULE_4__]);
([_components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__, _components_Footer__WEBPACK_IMPORTED_MODULE_3__, _components_Header__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Page = ({
  children,
  data = {},
  description,
  image,
  loadingLoggedInUser,
  LoggedInUser,
  title,
  metaTitle,
  noRobots,
  twitterHandle,
  showSearch,
  canonicalURL,
  collective,
  menuItems,
  showFooter = true,
  showProfileAndChangelogMenu = true
}) => {
  if (data.error) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      data: data,
      LoggedInUser: LoggedInUser
    });
  }

  const childProps = {
    LoggedInUser,
    loadingLoggedInUser
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Body__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      children: typeof children === 'function' ? children(childProps) : children
    }), showFooter && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_5__/* .withUser */ .ns)(Page));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;