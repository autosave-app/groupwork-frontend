(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 44617:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const crypto = __webpack_require__(6113);

const fs = __webpack_require__(57147);

const path = __webpack_require__(71017);

const debug = __webpack_require__(96974);

const dotenv = __webpack_require__(25142);

const lodash = __webpack_require__(46517); // Load extra env file on demand
// e.g. `npm run dev production` -> `.env.production`


const extraEnv = process.env.EXTRA_ENV || lodash.last(process.argv);
const extraEnvPath = path.join(__dirname, `.env.${extraEnv}`);

if (fs.existsSync(extraEnvPath)) {
  dotenv.config({
    path: extraEnvPath
  });
}

dotenv.config();
debug.enable(process.env.DEBUG);
const defaults = {
  PORT: 3000,
  NODE_ENV: 'development',
  API_KEY: '09u624Pc9F47zoGLlkg1TBSbOl2ydSAq',
  API_URL: 'https://api-staging.opencollective.com',
  IMAGES_URL: 'https://images-staging.opencollective.com',
  WEBSITE_URL: 'http://localhost:3000',
  REST_URL: 'https://rest-staging.opencollective.com',
  PDF_SERVICE_URL: 'https://pdf-staging.opencollective.com',
  PAYPAL_ENVIRONMENT: 'sandbox',
  STRIPE_KEY: 'pk_test_VgSB4VSg2wb5LdAkz7p38Gw8',
  GOOGLE_MAPS_API_KEY: 'AIzaSyAZJnIxtBw5bxnu2QoCUiLCjV1nk84Vnk0',
  RECAPTCHA_SITE_KEY: '6LcyeXoUAAAAAFtdHDZfsxncFUkD9NqydqbIFcCK',
  HCAPTCHA_SITEKEY: '10000000-ffff-ffff-ffff-000000000001',
  CAPTCHA_ENABLED: false,
  CAPTCHA_PROVIDER: 'HCAPTCHA',
  CLIENT_ANALYTICS_ENABLED: false,
  TW_API_COLLECTIVE_SLUG: 'opencollective-host',
  OC_APPLICATION: 'frontend',
  OC_ENV: "production" || 0,
  OC_SECRET: crypto.randomBytes(16).toString('hex'),
  WISE_ENVIRONMENT:  false ? 0 : 'sandbox',
  API_PROXY: 'true'
};

if (['production', 'staging'].includes("ci")) {
  defaults.TW_API_COLLECTIVE_SLUG = 'opencollective';
}

if (['e2e'].includes("ci")) {
  defaults.API_URL = 'http://localhost:3060';
  defaults.API_KEY = 'dvl-1510egmf4a23d80342403fb599qd';
}

for (const key in defaults) {
  if (process.env[key] === undefined) {
    process.env[key] = defaults[key];
  }
}

/***/ }),

/***/ 3396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IntlDocument)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44617);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_env__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56859);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46555);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97079);
/* harmony import */ var _server_content_security_policy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81028);
/* harmony import */ var _server_content_security_policy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_server_content_security_policy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_5__]);
uuid__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const cspHeader = (0,_server_content_security_policy__WEBPACK_IMPORTED_MODULE_7__.getCSPHeader)(); // The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.

class IntlDocument extends next_document__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static async getInitialProps(ctx) {
    const {
      locale,
      localeDataScript
    } = ctx.req;
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_4__.ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const clientAnalytics = {
      enabled: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .parseToBoolean */ .DD)(process.env.CLIENT_ANALYTICS_ENABLED)
    }; // On server-side, add a CSP header

    let requestNonce;

    if (ctx.res && cspHeader) {
      requestNonce = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();
      ctx.res.setHeader(cspHeader.key, cspHeader.value.replace('__OC_REQUEST_NONCE__', requestNonce));
    }

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(App, _objectSpread({}, props)))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_3__["default"].getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        locale,
        localeDataScript,
        clientAnalytics,
        cspNonce: requestNonce,
        styles: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
          children: [initialProps.styles, sheet.getStyleElement()]
        })
      });
    } finally {
      sheet.seal();
    }
  }

  constructor(props) {
    super(props);

    if (props.cspNonce) {
      props.__NEXT_DATA__.cspNonce = props.cspNonce;
    } // We pick the environment variables that we want to access from the client
    // They can later be read with getEnvVar()
    // Please, NEVER SECRETS!


    props.__NEXT_DATA__.env = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(process.env, ['IMAGES_URL', 'PAYPAL_ENVIRONMENT', 'STRIPE_KEY', 'SENTRY_DSN', 'SENTRY_RELEASE', 'WEBSITE_URL', 'GOOGLE_MAPS_API_KEY', 'RECAPTCHA_SITE_KEY', 'RECAPTCHA_ENABLED', 'WISE_ENVIRONMENT', 'HCAPTCHA_SITEKEY', 'CAPTCHA_ENABLED', 'CAPTCHA_PROVIDER']);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_3__.Html, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_document__WEBPACK_IMPORTED_MODULE_3__.Head, {
        nonce: this.props.cspNonce
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_document__WEBPACK_IMPORTED_MODULE_3__.Main, {
          nonce: this.props.cspNonce
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("script", {
          nonce: this.props.cspNonce,
          dangerouslySetInnerHTML: {
            __html: this.props.localeDataScript
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_document__WEBPACK_IMPORTED_MODULE_3__.NextScript, {
          nonce: this.props.cspNonce
        }), this.props.clientAnalytics.enabled && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("script", {
          nonce: this.props.cspNonce,
          defer: true,
          "data-domain": "opencollective.com",
          src: "https://plausible.io/js/script.js"
        })]
      })]
    });
  }

}
IntlDocument.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static", "async"],
    "params": [{
      "name": "ctx",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "IntlDocument"
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81028:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mergeWith = __webpack_require__(89640);

const {
  kebabCase,
  omit
} = __webpack_require__(46517);

const env = "ci";
const SELF = "'self'";
const UNSAFE_INLINE = "'unsafe-inline'";
const UNSAFE_EVAL = "'unsafe-eval'";
const COMMON_DIRECTIVES = {
  blockAllMixedContent: [],
  defaultSrc: [SELF],
  imgSrc: [SELF, process.env.IMAGES_URL, null, 'data:', '*.paypal.com', 'opencollective.com', // for widgets on /admin/export
  'blog.opencollective.com', // used to easily link images in static pages
  'blob:' // For upload images previews
  ].filter(Boolean),
  workerSrc: [SELF, 'blob:' // For confettis worker. TODO: Limit for nonce
  ],
  styleSrc: [SELF, UNSAFE_INLINE, // For styled-components. TODO: Limit for nonce
  'https://hcaptcha.com', 'https://*.hcaptcha.com'],
  connectSrc: [SELF, "http://localhost:3060", "https://pdf-staging.opencollective.com", "https://rest-staging.opencollective.com", 'wtfismyip.com', '*.paypal.com', '*.paypalobjects.com', 'sentry.io', '*.sentry.io', 'atlas.shopifycloud.com', 'atlas.shopifysvc.com', 'country-service.shopifycloud.com', 'maps.googleapis.com', 'https://wise.com', 'https://transferwise.com', 'https://sandbox.transferwise.tech', 'https://hcaptcha.com', 'https://*.hcaptcha.com', 'https://www.google.com', 'https://api.cryptonator.com', 'https://plausible.io'],
  scriptSrc: [SELF, UNSAFE_INLINE, // Required by current PayPal integration. https://developer.paypal.com/docs/checkout/troubleshoot/support/#browser-features-and-polyfills provides a way to deal with that through nonces.
  "'nonce-__OC_REQUEST_NONCE__'", 'maps.googleapis.com', 'js.stripe.com', '*.paypal.com', '*.paypalobjects.com', 'https://hcaptcha.com', 'https://js.hcaptcha.com', 'https://*.hcaptcha.com', 'https://www.google.com', 'https://plausible.io'],
  frameSrc: ['blob:', // For expense invoice previews in the modal, as they're rendered in a blob
  'www.youtube.com', 'www.youtube-nocookie.com', 'opencollective.com', 'anchor.fm', 'js.stripe.com', '*.paypal.com', '*.openstreetmap.org', 'https://wise.com', 'https://transferwise.com', 'https://sandbox.transferwise.tech', 'https://hcaptcha.com', 'https://*.hcaptcha.com', 'https://www.google.com'],
  objectSrc: ['opencollective.com']
};

const generateDirectives = customValues => {
  const toRemove = [];
  const result = mergeWith(COMMON_DIRECTIVES, customValues, (objValue, srcValue, key) => {
    if (typeof srcValue === 'boolean') {
      if (!srcValue) {
        toRemove.push(key);
      }

      return srcValue;
    } else if (Array.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  });
  return omit(result, toRemove);
};
/**
 * A adapter inspired by  https://github.com/helmetjs/helmet/blob/master/middlewares/content-security-policy/index.ts
 * to generate the header string. Useful for plugging to Vercel.
 */


const getHeaderValueFromDirectives = directives => {
  return Object.entries(directives).map(([rawDirectiveName, rawDirectiveValue]) => {
    const directiveName = kebabCase(rawDirectiveName);
    let directiveValue;

    if (typeof rawDirectiveValue === 'string') {
      directiveValue = ` ${rawDirectiveValue}`;
    } else if (Array.isArray(rawDirectiveValue)) {
      directiveValue = rawDirectiveValue.join(' ');
    } else if (typeof rawDirectiveValue === 'boolean' && !rawDirectiveValue) {
      return '';
    }

    if (!directiveValue) {
      return directiveName;
    }

    return `${directiveName} ${directiveValue}`;
  }).filter(Boolean).join('; ');
};
/**
 * Get a config compatible with Helmet's format
 */


const getContentSecurityPolicyConfig = () => {
  if (env === 'development' || env === 'e2e') {
    return {
      reportOnly: true,
      directives: generateDirectives({
        blockAllMixedContent: false,
        scriptSrc: [UNSAFE_INLINE, UNSAFE_EVAL] // For NextJS scripts

      })
    };
  } else if (env === 'staging') {
    return {
      reportOnly: false,
      directives: generateDirectives({
        imgSrc: ['opencollective-staging.s3.us-west-1.amazonaws.com', 'opencollective-staging.s3-us-west-1.amazonaws.com']
      }),
      reportUri: ['https://o105108.ingest.sentry.io/api/1736806/security/?sentry_key=2ab0f7da3f56423d940f36370df8d625']
    };
  } else if (env === 'production') {
    return {
      reportOnly: false,
      directives: generateDirectives({
        imgSrc: ['opencollective-production.s3.us-west-1.amazonaws.com', 'opencollective-production.s3-us-west-1.amazonaws.com']
      }),
      reportUri: ['https://o105108.ingest.sentry.io/api/1736806/security/?sentry_key=2ab0f7da3f56423d940f36370df8d625']
    };
  } else if (env === 'test' || env === 'ci') {
    // Disabled
    return false;
  } else {
    // Third party deploy, or Zeit deploy preview
    return {
      reportOnly: true,
      directives: generateDirectives()
    };
  }
};

module.exports = {
  getContentSecurityPolicyConfig,
  getCSPHeader: () => {
    const config = getContentSecurityPolicyConfig();

    if (config) {
      return {
        key: config.reportOnly ? 'Content-Security-Policy-Report-Only' : 'Content-Security-Policy',
        value: getHeaderValueFromDirectives(config.directives)
      };
    }
  }
};

/***/ }),

/***/ 96974:
/***/ ((module) => {

"use strict";
module.exports = require("debug");

/***/ }),

/***/ 25142:
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ 70154:
/***/ ((module) => {

"use strict";
module.exports = require("load-script");

/***/ }),

/***/ 46517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 75795:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject");

/***/ }),

/***/ 89640:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/mergeWith");

/***/ }),

/***/ 63901:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omit");

/***/ }),

/***/ 84159:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/pick");

/***/ }),

/***/ 94140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

"use strict";
module.exports = require("sanitize-html");

/***/ }),

/***/ 57518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 46555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,6859,7079], () => (__webpack_exec__(3396)));
module.exports = __webpack_exports__;

})();