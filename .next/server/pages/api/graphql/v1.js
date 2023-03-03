"use strict";
(() => {
var exports = {};
exports.id = 9009;
exports.ids = [9009];
exports.modules = {

/***/ 84159:
/***/ ((module) => {

module.exports = require("lodash/pick");

/***/ }),

/***/ 81770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);

async function handle(req, res) {
  const graphqlUrl = `${"http://localhost:3060"}/graphql/v1?api_key=${"dvl-1510egmf4a23d80342403fb599qd"}`;
  const result = await fetch(graphqlUrl, {
    method: req.method,
    headers: lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(req.headers, ['accept', 'content-type', 'authorization', 'user-agent', 'accept-language', 'x-two-factor-authentication']),
    body: JSON.stringify(req.body)
  });
  const json = await result.json();
  res.setHeader('Content-Type', 'application/json');
  res.json(json);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(81770));
module.exports = __webpack_exports__;

})();