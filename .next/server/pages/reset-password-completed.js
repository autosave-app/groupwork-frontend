"use strict";
(() => {
var exports = {};
exports.id = 9481;
exports.ids = [9481];
exports.modules = {

/***/ 70612:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88705);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56562);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84842);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_5__]);
_components_Page__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const ResetPasswordCompleted = ({
  LoggedInUser,
  loadingLoggedInUser
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    noRobots: true,
    showFooter: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      pt: [4, 5],
      pb: 6,
      px: 3,
      textAlign: "center",
      "data-cy": "reset-password-success-page",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        src: "/static/images/sign-in-illustration.png",
        width: "624px",
        height: "372px"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
        fontSize: "32px",
        lineHeight: "40px",
        color: "black.900",
        fontWeight: 700,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "GAFyW+",
          defaultMessage: [{
            "type": 0,
            "value": "Your password was updated."
          }]
        })
      }), !LoggedInUser && !loadingLoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
          fontSize: "20px",
          lineHeight: "28px",
          color: "black.800",
          fontWeight: 500,
          mt: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "xXgpav",
            defaultMessage: [{
              "type": 0,
              "value": "You can now "
            }, {
              "type": 8,
              "value": "Link",
              "children": [{
                "type": 0,
                "value": "Sign In"
              }]
            }, {
              "type": 0,
              "value": " with it."
            }],
            values: {
              Link: (0,_components_I18nFormatters__WEBPACK_IMPORTED_MODULE_3__/* .getI18nLink */ .fw)({
                href: '/signin'
              })
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
          fontSize: "16px",
          lineHeight: "24px",
          color: "black.800",
          fontWeight: 500,
          my: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "signinLinkSent.",
            defaultMessage: [{
              "type": 8,
              "value": "Link",
              "children": [{
                "type": 0,
                "value": "Learn more"
              }]
            }, {
              "type": 0,
              "value": " about our login system."
            }],
            values: {
              Link: (0,_components_I18nFormatters__WEBPACK_IMPORTED_MODULE_3__/* .getI18nLink */ .fw)({
                href: 'https://docs.opencollective.com/help/product/log-in-system',
                openInNewTab: true
              })
            }
          })
        })]
      })]
    })
  });
};

ResetPasswordCompleted.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ResetPasswordCompleted",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_7__/* .withUser */ .ns)(ResetPasswordCompleted));
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

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

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

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

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

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842], () => (__webpack_exec__(70612)));
module.exports = __webpack_exports__;

})();