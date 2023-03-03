"use strict";
(() => {
var exports = {};
exports.id = 3681;
exports.ids = [3681];
exports.modules = {

/***/ 32651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ gqlV1),
/* harmony export */   "T": () => (/* binding */ API_V2_CONTEXT)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/** A wrapper arround `gql` to ensure linter applies API v1 schema */

const gqlV1 = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql;
/** To pass as a context to your query/mutation to use API v2 */

const API_V2_CONTEXT = {
  apiVersion: '2'
};

/***/ }),

/***/ 88481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32651);




const hostTermsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query HostTermsQuery($hostCollectiveSlug: String!) {
    host(slug: $hostCollectiveSlug) {
      id
      termsUrl
      isTrustedHost
    }
  }
`;

const TermsOfFiscalSponsorship = ({
  hostCollectiveSlug
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(hostTermsQuery, {
    variables: {
      hostCollectiveSlug
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__/* .API_V2_CONTEXT */ .T,
    skip: !hostCollectiveSlug
  });
  const termsOfService = data?.host?.termsUrl;
  const isTrustedHost = data?.host?.isTrustedHost;

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

const getServerSideProps = async ({
  query
}) => {
  return {
    props: {
      hostCollectiveSlug: query.hostCollectiveSlug
    }
  };
};
TermsOfFiscalSponsorship.propTypes = {
  hostCollectiveSlug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermsOfFiscalSponsorship);

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(88481));
module.exports = __webpack_exports__;

})();