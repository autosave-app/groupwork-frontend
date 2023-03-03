"use strict";
(() => {
var exports = {};
exports.id = 9818;
exports.ids = [9818];
exports.modules = {

/***/ 47702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
async function handle(req, res) {
  const apiUrl = `${"http://localhost:3060"}/users/signin?api_key=${"dvl-1510egmf4a23d80342403fb599qd"}`;
  const result = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });
  const json = await result.json();
  const statusCode = result.status;
  res.setHeader('Content-Type', 'application/json');
  res.status(statusCode).json(json);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(47702));
module.exports = __webpack_exports__;

})();