"use strict";
(() => {
var exports = {};
exports.id = 9733;
exports.ids = [9733];
exports.modules = {

/***/ 87613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle)
});

;// CONCATENATED MODULE: external "url"
const external_url_namespaceObject = require("url");
;// CONCATENATED MODULE: ./pages/api/users/exists.js

async function handle(req, res) {
  const apiUrl = new external_url_namespaceObject.URL(`${"http://localhost:3060"}/users/exists?api_key=${"dvl-1510egmf4a23d80342403fb599qd"}`);
  apiUrl.searchParams.set('email', req.query.email);
  const json = await fetch(apiUrl).then(result => result.json());
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
var __webpack_exports__ = (__webpack_exec__(87613));
module.exports = __webpack_exports__;

})();