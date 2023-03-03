(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3681],{

/***/ 88481:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46829);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32651);


var _templateObject;





var hostTermsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query HostTermsQuery($hostCollectiveSlug: String!) {\n    host(slug: $hostCollectiveSlug) {\n      id\n      termsUrl\n      isTrustedHost\n    }\n  }\n"])));

var TermsOfFiscalSponsorship = function TermsOfFiscalSponsorship(_ref) {
  var _data$host, _data$host2;

  var hostCollectiveSlug = _ref.hostCollectiveSlug;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(hostTermsQuery, {
    variables: {
      hostCollectiveSlug: hostCollectiveSlug
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_2__/* .API_V2_CONTEXT */ .T,
    skip: !hostCollectiveSlug
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var termsOfService = data === null || data === void 0 ? void 0 : (_data$host = data.host) === null || _data$host === void 0 ? void 0 : _data$host.termsUrl;
  var isTrustedHost = data === null || data === void 0 ? void 0 : (_data$host2 = data.host) === null || _data$host2 === void 0 ? void 0 : _data$host2.isTrustedHost;

  if (!loading && termsOfService) {
    if (isTrustedHost) {
      router.push(termsOfService);
    } else {
      router.push({
        pathname: '/external-redirect',
        query: {
          url: termsOfService
        }
      });
    }
  }

  return null;
};

TermsOfFiscalSponsorship.propTypes = {
  hostCollectiveSlug: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (TermsOfFiscalSponsorship);

/***/ }),

/***/ 61703:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/terms-of-fiscal-sponsorship",
      function () {
        return __webpack_require__(88481);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9774,2888,179], function() { return __webpack_exec__(61703); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=terms-of-fiscal-sponsorship-890e8361ca4e0fa4.js.map