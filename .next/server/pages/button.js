"use strict";
(() => {
var exports = {};
exports.id = 6421;
exports.ids = [6421];
exports.modules = {

/***/ 79768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const CollectButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "button__CollectButton",
  componentId: "sc-1nnqnvf-0"
})(["background-color:transparent;background-image:", ";background-repeat:no-repeat;cursor:pointer;display:block;float:left;height:50px;margin:0;overflow:hidden;padding:0;width:", ";&:hover{background-position:0 -50px;}&:active{background-position:0 -100px;}&:focus{outline:0;}"], ({
  color,
  verb
}) => `url(/static/images/buttons/${verb}-button-${color}.svg)`, ({
  verb
}) => verb === 'contribute' ? '338px' : '300px');

class ButtonPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static getInitialProps({
    query: {
      color,
      collectiveSlug,
      verb
    },
    res
  }) {
    // Allow to be embedded as Iframe everywhere
    if (res) {
      res.removeHeader('X-Frame-Options');
    }

    return {
      color,
      collectiveSlug,
      verb
    };
  }

  render() {
    const {
      color = 'white',
      collectiveSlug,
      verb = 'donate'
    } = this.props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://opencollective.com/${collectiveSlug}/${verb}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(CollectButton, {
        color: color,
        verb: verb
      })
    });
  }

}

ButtonPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { color, collectiveSlug, verb }, res }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "ButtonPage",
  "props": {
    "color": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "verb": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonPage);

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(79768));
module.exports = __webpack_exports__;

})();