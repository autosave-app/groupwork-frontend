(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6210],{

/***/ 42815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ HomeIllustration; }
});

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var index_esm = __webpack_require__(16678);
;// CONCATENATED MODULE: ./lib/constants/animations.js

var rotate = (0,styled_components_browser_esm/* keyframes */.F4)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
var fadeIn = (0,styled_components_browser_esm/* keyframes */.F4)(["0%{opacity:0;}100%{opacity:1;}"]);
var rotateMixin = (0,styled_components_browser_esm/* css */.iv)(["animation:", " 0.8s infinite linear;"], rotate);
;// CONCATENATED MODULE: ./components/collectives/HomeIllustration.js



var Illustration = styled_components_browser_esm/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "HomeIllustration__Illustration",
  componentId: "sc-xcwqm6-0"
})(["max-width:100%;max-height:100%;", " ", " ", ";"], index_esm/* space */.Dh, index_esm/* display */.jf, function (_ref) {
  var animate = _ref.animate;
  return animate ? rotateMixin : null;
});
/* harmony default export */ var HomeIllustration = (Illustration);

/***/ }),

/***/ 84072:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H3": function() { return /* binding */ ApplyToHostMobileCarousel; },
/* harmony export */   "a5": function() { return /* binding */ ApplyToHostGrid; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52015);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65106);
/* harmony import */ var _StyledCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98738);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36374);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















var ApplyLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP)(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "ApplyToFiscalHostSection__ApplyLink",
  componentId: "sc-4cjc06-0"
})(["border-radius:16px;&:hover{background:rgba(255,255,255,0.2);}"]);
var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__.defineMessages)({
  'fiscalHosting.hosts.OCF': {
    id: "fiscalHosting.hosts.OCF",
    defaultMessage: [{
      "type": 0,
      "value": "A US 501(c)(3) nonprofit entity with a broad mission covering most charitable activities in the United States."
    }]
  },
  'fiscalHosting.hosts.OSC': {
    id: "fiscalHosting.hosts.OSC",
    defaultMessage: [{
      "type": 0,
      "value": "A US 501(c)(6) nonprofit entity serving as fiscal host to open source projects and related communities around the world."
    }]
  },
  'fiscalHosting.hosts.socialchangenestcollective': {
    id: "fiscalHosting.hosts.socialchangenestcollective",
    defaultMessage: [{
      "type": 0,
      "value": "A UK host for mutual aid groups and social movements, providing tools, strategy, and back office support to scale up and get on with changing the world."
    }]
  },
  'fiscalHosting.hosts.allForClimate': {
    id: "fiscalHosting.hosts.allForClimate",
    defaultMessage: [{
      "type": 0,
      "value": "Dedicated to movements for climate and social justice, host to many local Extinction Rebellion chapters and related communities."
    }]
  },
  'fiscalHosting.hosts.OCE': {
    id: "fiscalHosting.hosts.OCE",
    defaultMessage: [{
      "type": 0,
      "value": "A Brussels-based nonprofit hosting groups across Europe, including open source projects and community social action."
    }]
  },
  'fiscalHosting.hosts.OCN': {
    id: "fiscalHosting.hosts.OCN",
    defaultMessage: [{
      "type": 0,
      "value": "Offering kiwi impact projects fundholding options through a charity or a company structure."
    }]
  }
});

var groupHostsIntoSections = function groupHostsIntoSections(hosts) {
  return hosts.reduce(function (rows, key, index) {
    return (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
  }, []);
};

var Host = function Host(_ref) {
  var id = _ref.id,
      name = _ref.name,
      logo = _ref.logo,
      bgImage = _ref.bgImage,
      location = _ref.location,
      color = _ref.color,
      collectivePath = _ref.collectivePath;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ApplyLink, {
    as: _Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    href: collectivePath,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mx: [null, 2, null, null, 3],
      my: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        width: ['288px', '205px', '270px', null, '360px'],
        height: ['210px', '218px', '218px', null, '256px'],
        background: "url(\"/static/images/become-a-host/".concat(bgImage, ".png\") no-repeat"),
        backgroundSize: ['contain', 'cover', '100% 100%'],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
          radius: "96px",
          src: logo,
          name: name,
          type: "ORGANIZATION"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: ['288px', '205px', '270px', null, '360px'],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          fontSize: ['15px', '18px'],
          lineHeight: ['23px', '27px'],
          color: color || 'black.600',
          lineSpacing: ['-0.12px', '-0.2px'],
          fontWeight: "normal",
          mt: "16px",
          mb: "12px",
          children: location
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          mb: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
            fontSize: ['15px', '24px'],
            lineHeight: ['23px', '32px'],
            color: color || 'black.800',
            letterSpacing: ['-0.12px', '-0.8px'],
            fontWeight: "bold",
            wordWrap: "break-word",
            textAlign: "left",
            children: name
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          my: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
            fontSize: ['15px', '16px', null, null, '18px'],
            textAlign: "left",
            lineHeight: ['25px', '24px', null, null, '27px'],
            letterSpacing: ['-0.016em', '-0.16px', null, null, '-0.2px'],
            color: color || 'black.600',
            children: intl.formatMessage(messages["fiscalHosting.hosts.".concat(id)])
          })
        })]
      })]
    })
  });
};

var ApplyToHostDesktopCarousel = function ApplyToHostDesktopCarousel(_ref2) {
  var display = _ref2.display,
      controllerPosition = _ref2.controllerPosition;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledCarousel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    controllerPosition: controllerPosition,
    width: 1,
    display: display,
    children: groupHostsIntoSections(_constants__WEBPACK_IMPORTED_MODULE_11__/* .HOSTS */ .Z8).map(function (groupedHost, index) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          display: ['none', 'flex'],
          justifyContent: "center",
          width: 1,
          children: groupedHost.map(function (host) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Host, _objectSpread({}, host))
            }, host.id);
          })
        }, index.toString())
      );
    })
  });
};

var ApplyToHostMobileCarousel = function ApplyToHostMobileCarousel(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledCarousel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    display: [null, 'none'],
    width: 1,
    children: _constants__WEBPACK_IMPORTED_MODULE_11__/* .HOSTS.map */ .Z8.map(function (host) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Host, _objectSpread({
        color: color
      }, host), host.id);
    })
  });
};
var ApplyToHostGrid = function ApplyToHostGrid(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .rj, {
    gridGap: [1, null, null, null, '48px'],
    gridTemplateColumns: 'repeat(3, 1fr)',
    children: _constants__WEBPACK_IMPORTED_MODULE_11__/* .HOSTS.map */ .Z8.map(function (host) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Host, _objectSpread({
        color: color
      }, host), host.id);
    })
  });
};

var ApplyToFiscalHosts = function ApplyToFiscalHosts() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    my: 4,
    flexDirection: "column",
    mx: [3, 4],
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionTitle */ .NZ, {
      textAlign: "center",
      mb: "8px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        id: "fiscalHosting.applyToFiscalHost",
        defaultMessage: [{
          "type": 0,
          "value": "Apply to one of our Fiscal Hosts"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      width: ['286px', '648px', '705px', null, '936px'],
      textAlign: "center",
      mb: 4,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionDescription */ .TI, {
        textAlign: "center",
        my: "0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          id: "fiscalHosting.applyToFiscalHost.description",
          defaultMessage: [{
            "type": 8,
            "value": "orgsAroundTheWorldLink",
            "children": [{
              "type": 0,
              "value": "Organizations around the world"
            }]
          }, {
            "type": 0,
            "value": " are using Open Collective to host multiple projects, groups and communities. Find out more about them! Or you can "
          }, {
            "type": 8,
            "value": "createYourOwnFiscalHostLink",
            "children": [{
              "type": 0,
              "value": "create your own fiscal host"
            }]
          }, {
            "type": 0,
            "value": "."
          }],
          values: {
            orgsAroundTheWorldLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_5__/* .getI18nLink */ .fw)({
              as: _Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
              href: '/search?isHost=true'
            }),
            createYourOwnFiscalHostLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_5__/* .getI18nLink */ .fw)({
              as: _Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
              href: '/become-a-host'
            })
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ApplyToHostMobileCarousel, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      mt: 2,
      width: 1,
      maxWidth: "1200px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ApplyToHostDesktopCarousel, {
        display: ['none', 'block', 'none'],
        controllerPosition: "bottom"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ApplyToHostDesktopCarousel, {
        display: ['none', null, 'block'],
        controllerPosition: "side"
      })]
    })]
  });
};

ApplyToFiscalHosts.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplyToFiscalHosts"
};
/* harmony default export */ __webpack_exports__["ZP"] = (ApplyToFiscalHosts);
ApplyToHostMobileCarousel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplyToHostMobileCarousel",
  "props": {
    "color": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
ApplyToHostGrid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplyToHostGrid",
  "props": {
    "color": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 36374:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XV": function() { return /* binding */ HOST_CONSIDERATIONS; },
/* harmony export */   "Z8": function() { return /* binding */ HOSTS; },
/* harmony export */   "Zt": function() { return /* binding */ WHO_IS_FISCAL_HOSTING_FOR; }
/* harmony export */ });
var WHO_IS_FISCAL_HOSTING_FOR = {
  firstCategories: [{
    id: 'community'
  }, {
    id: 'grantRecipients'
  }, {
    id: 'timeLimited'
  }, {
    id: 'unincorporatedGroup'
  }, {
    id: 'crowdFunding'
  }, {
    id: 'youngActivists'
  }],
  secondCategories: [{
    id: 'newlyFormingCharity'
  }, {
    id: 'distributeCollaboration'
  }, {
    id: 'founderCoalition'
  }, {
    id: 'companiesGivingBack'
  }, {
    id: 'grantMakingInstitution'
  }]
};
var HOSTS = [{
  id: 'OCF',
  name: 'Open Collective Foundation',
  location: '🇺🇸 United States',
  collectivePath: '/foundation/apply',
  bgImage: 'ocf',
  logo: '/static/images/become-a-host/ocf-logo.png'
}, {
  id: 'OSC',
  name: 'Open Source Collective',
  location: '🇺🇸 United States',
  collectivePath: '/opensource/apply',
  bgImage: 'osc',
  logo: '/static/images/become-a-host/osc-logo.png'
}, {
  id: 'OCE',
  name: 'Open Collective Europe',
  location: ' 🇪🇺 Europe',
  collectivePath: '/europe/apply',
  bgImage: 'oce-bg',
  logo: '/static/images/fiscal-hosting/oce.png'
}, {
  id: 'OCN',
  name: 'Open Collective NZ',
  location: '🇳🇿 New Zealand',
  collectivePath: '/ocnz/apply',
  bgImage: 'ocn-bg',
  logo: '/static/images/fiscal-hosting/ocn.png'
}, {
  id: 'socialchangenestcollective',
  name: 'Social Change Nest',
  location: '🇬🇧 United Kingdom',
  collectivePath: '/the-social-change-nest/apply',
  bgImage: 'socialchangenest',
  logo: '/static/images/become-a-host/socialchangenest-logo.png'
}, {
  id: 'allForClimate',
  name: 'All for climate',
  location: ' 🇪🇺 Europe',
  collectivePath: '/allforclimate/apply',
  bgImage: 'allforclimate-collective-bg',
  logo: '/static/images/fiscal-hosting/allforclimate-collective-logo.png'
}];
var HOST_CONSIDERATIONS = ['missionAlignment', 'location', 'legalStructure', 'serviceOffered', 'fees', 'operations'];

/***/ }),

/***/ 3306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ fiscal_hosting; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./components/collectives/sections/JoinUs.js
var JoinUs = __webpack_require__(78355);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./components/collectives/HomeIllustration.js + 1 modules
var HomeIllustration = __webpack_require__(42815);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/marketing/Text.js
var Text = __webpack_require__(65106);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/fiscal-hosting/APlaceToGrowAndThriveSection.js











var APlaceToGrowAndThrive = function APlaceToGrowAndThrive() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: ['column', null, 'row-reverse'],
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    mt: 4,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mt: [3, 0],
      mb: [3, null, null, null, '24px'],
      width: ['288px', '601px', '458px', null, '555px'],
      display: [null, null, 'none'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* MainTitle */.U3, {
        textAlign: ['center', null, 'left'],
        whiteSpace: [null, null, 'pre-line'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "fiscalHosting.title",
          defaultMessage: [{
            "type": 0,
            "value": "A place to grow and thrive"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      ml: [null, '50px', '36px', '40px', '84px'],
      width: ['288px', null, '458px', null, '558px'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeIllustration/* default */.Z, {
        alt: "A place to grow and thrive illustration",
        src: "/static/images/fiscal-hosting/a-place-to-grow-illustration.png"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: ['center', null, 'flex-start'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mt: [3, 0],
        mb: [3, null, null, null, '24px'],
        width: ['288px', '344px', '458px', null, '555px'],
        display: ['none', null, 'block'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* MainTitle */.U3, {
          textAlign: ['center', null, 'left'],
          whiteSpace: [null, null, 'pre-line'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.title",
            defaultMessage: [{
              "type": 0,
              "value": "A place to grow and thrive"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '676px', '458px', null, '558px'],
        mb: [3, null, null, null, '24px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* MainDescription */.WC, {
          textAlign: ['center', null, 'left'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.description",
            defaultMessage: [{
              "type": 0,
              "value": "Think of your community, project, or initiative as a plant, and a fiscal host as a lovingly tended garden. The host maintains an environment where your unique bush, vine, or tree can get watered, grow, and bloom."
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: "/create",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          minWidth: [283, 165, null, null, 183],
          buttonStyle: "marketing",
          whiteSpace: "nowrap",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "home.create",
            defaultMessage: [{
              "type": 0,
              "value": "Create a Collective"
            }]
          })
        })
      })]
    })]
  });
};

APlaceToGrowAndThrive.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "APlaceToGrowAndThrive"
};
/* harmony default export */ var APlaceToGrowAndThriveSection = (APlaceToGrowAndThrive);
// EXTERNAL MODULE: ./components/fiscal-hosting/ApplyToFiscalHostSection.js
var ApplyToFiscalHostSection = __webpack_require__(84072);
// EXTERNAL MODULE: ./components/StyledCarousel.js + 1 modules
var StyledCarousel = __webpack_require__(98738);
// EXTERNAL MODULE: ./components/Text.ts
var components_Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/fiscal-hosting/constants.js
var constants = __webpack_require__(36374);
;// CONCATENATED MODULE: ./components/fiscal-hosting/FindTheRightFiscalHostSection.js











var messages = (0,lib.defineMessages)({
  'fiscalHosting.missionAlignment': {
    id: "fiscalHosting.missionAlignment",
    defaultMessage: [{
      "type": 0,
      "value": "Mission alignment"
    }]
  },
  'fiscalHosting.missionAlignment.description': {
    id: "fiscalHosting.missionAlignment.description",
    defaultMessage: [{
      "type": 0,
      "value": "Fiscal hosts usually have specific topics or areas they are designed to serve. When it comes to the application process, their acceptance criteria will fit in that scope."
    }]
  },
  'fiscalHosting.location': {
    id: "SectionLocation.Title",
    defaultMessage: [{
      "type": 0,
      "value": "Location"
    }]
  },
  'fiscalHosting.location.description': {
    id: "fiscalHosting.location.description",
    defaultMessage: [{
      "type": 0,
      "value": "Which country a fiscal host is based in will determine the currency you your money will be accounted in, and where you are located in a legal sense, e.g., if you are applying for an EU grant, you might need a fiscal host based in the EU."
    }]
  },
  'fiscalHosting.legalStructure': {
    id: "fiscalHosting.legalStructure",
    defaultMessage: [{
      "type": 0,
      "value": "Legal structure"
    }]
  },
  'fiscalHosting.legalStructure.description': {
    id: "fiscalHosting.legalStructure.description",
    defaultMessage: [{
      "type": 0,
      "value": "Do you want your host to be a charity, a company, a cooperative, or something else? E.g. a charity structure can enable tax-deductible donations, but may also have more restrictions on allowed activities."
    }]
  },
  'fiscalHosting.serviceOffered': {
    id: "fiscalHosting.serviceOffered",
    defaultMessage: [{
      "type": 0,
      "value": "Services offered"
    }]
  },
  'fiscalHosting.serviceOffered.description': {
    id: "AeQQjn",
    defaultMessage: [{
      "type": 0,
      "value": "Some Fiscal Hosts are very light-touch, while others provide significant support or programming and options like employment and insurance. Fiscal Hosts with a specific focus, such as open source projects or climate movement groups, may offer services specifically tailored to that community."
    }]
  },
  'fiscalHosting.fees': {
    id: "fiscalHosting.fees",
    defaultMessage: [{
      "type": 0,
      "value": "Fees"
    }]
  },
  'fiscalHosting.fees.description': {
    id: "fiscalHosting.fees.description",
    defaultMessage: [{
      "type": 0,
      "value": "Fiscal hosts often charge a fee for the service they provide. Some hosts keep fees low and offer a lightweight service, while others have higher fees and provide more support. Some fiscal hosts don’t charge fees at all."
    }]
  },
  'fiscalHosting.operations': {
    id: "fiscalHosting.operations",
    defaultMessage: [{
      "type": 0,
      "value": "Operations"
    }]
  },
  'fiscalHosting.operations.description': {
    id: "fiscalHosting.operations.description",
    defaultMessage: [{
      "type": 0,
      "value": "There are a few different models of fiscal sponsorship (depending on country as well). Check to see that you are using the one that is best for your project. Also look into the sponsor’s company culture & history of expertise in the field to ensure your fiscal sponsorship relationship aligns with your needs."
    }]
  }
});

var Consideration = function Consideration(_ref) {
  var consideration = _ref.consideration;
  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    display: "flex",
    flexDirection: ['column', 'row', 'column'],
    alignItems: ['center', null, null, null, 'flex-start'],
    textAlign: ['center', 'left', 'center', null, 'left'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: "140px",
      height: "140px",
      mb: [2, 0, '24px'],
      mr: [null, 4, 0],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeIllustration/* default */.Z, {
        src: "/static/images/fiscal-hosting/".concat(consideration, ".png"),
        alt: "Icon"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      width: ['288px', '472px', '250px', null, '289px'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
        fontSize: ['20px', null, null, null, '24px'],
        lineHeight: ['28px', null, null, null, '32px'],
        letterSpacing: "-0.008em",
        color: "black.800",
        mb: [2, 3],
        children: intl.formatMessage(messages["fiscalHosting.".concat(consideration)])
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
        fontSize: ['15px', '18px'],
        lineHeight: ['22px', '26px'],
        color: "black.700",
        fontWeight: "400",
        children: intl.formatMessage(messages["fiscalHosting.".concat(consideration, ".description")])
      })]
    })]
  }, consideration);
};

var FindTheRightFiscalHost = function FindTheRightFiscalHost() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    mt: ['96px', '80px', null, null, '104px'],
    mb: "80px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mx: 3,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mb: 2,
        width: ['288px', 1],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.findingRightFiscalHost",
            defaultMessage: [{
              "type": 0,
              "value": "Finding the right fiscal host for you"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '548px', null, null, '755px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionDescription */.TI, {
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.findingRightFiscalHost.description",
            defaultMessage: [{
              "type": 0,
              "value": "Some key things to consider when looking for the right fit"
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      width: 1,
      display: ['display', 'none'],
      justifyContent: "center",
      alignItems: "center",
      mt: "56px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCarousel/* default */.Z, {
        display: [null, 'none'],
        width: 1,
        children: constants/* HOST_CONSIDERATIONS.map */.XV.map(function (consideration) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Consideration, {
            consideration: consideration
          }, consideration);
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Grid */.rj, {
      mx: 3,
      gridTemplateColumns: [null, null, 'repeat(3, 1fr)'],
      gridGap: [null, '32px', '56px 48px', null, '56px 96px'],
      placeSelf: "center",
      alignItems: ['center', null, null, 'flex-start'],
      mt: "56px",
      display: ['none', 'grid'],
      maxWidth: "1200px",
      children: constants/* HOST_CONSIDERATIONS.map */.XV.map(function (consideration) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Consideration, {
          consideration: consideration
        }, consideration);
      })
    })]
  });
};

FindTheRightFiscalHost.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FindTheRightFiscalHost"
};
/* harmony default export */ var FindTheRightFiscalHostSection = (FindTheRightFiscalHost);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/collectives/HomeNextIllustration.js
var HomeNextIllustration = __webpack_require__(47667);
;// CONCATENATED MODULE: ./components/fiscal-hosting/HowCanAFiscalHostHelpSection.js


var _excluded = ["id", "intl", "activeFeature"],
    _excluded2 = ["intl", "id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













var SelectFeatureButton = styled_components_browser_esm/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "HowCanAFiscalHostHelpSection__SelectFeatureButton",
  componentId: "sc-cx9hvy-0"
})(["width:100%;cursor:pointer;color:#1869f5;border:none;outline:none;background:#fff;padding:0;@media screen and (min-width:40em){color:", ";width:272px;padding:3px;", " &:hover{color:#1869f5;}}@media screen and (min-width:64em){width:270px;}@media screen and (min-width:88em){width:320px;}"], (0,index_esm/* themeGet */.R)('colors.black.700'), function (props) {
  return props.active && (0,styled_components_browser_esm/* css */.iv)(["color:#dc5f7d;border:1px solid #e6f3ff;border-radius:8px;background:#ffffff;outline:none;padding:8px;box-shadow:0px 4px 8px rgba(20,20,20,0.16);"]);
});
var FeatureListWrapper = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "HowCanAFiscalHostHelpSection__FeatureListWrapper",
  componentId: "sc-cx9hvy-1"
})(["margin:0;padding:0;flex-direction:column;align-items:center;justify-content:center;"]);
var FeatureList = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "HowCanAFiscalHostHelpSection__FeatureList",
  componentId: "sc-cx9hvy-2"
})(["list-style:none;display:flex;flex-direction:column;width:100%;margin:14px 0;"]);
var features = [{
  id: 'acceptAndSpendFunds',
  learnMoreLink: '#'
}, {
  id: 'sustainabilityDesign',
  learnMoreLink: '#'
}, {
  id: 'networkingAndSolidarity',
  learnMoreLink: '#'
}, {
  id: 'automaticReporting',
  learnMoreLink: '#'
}, {
  id: 'organizeFinance',
  learnMoreLink: '#'
}];
var HowCanAFiscalHostHelpSection_messages = (0,lib.defineMessages)({
  'fiscalHosting.feature.acceptAndSpendFunds': {
    id: "fiscalHosting.feature.acceptAndSpendFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Accept and spend funds immediately"
    }]
  },
  'fiscalHosting.feature.acceptAndSpendFunds.tabName': {
    id: "fiscalHosting.feature.acceptAndSpendFunds.tabName",
    defaultMessage: [{
      "type": 0,
      "value": "Accept and spend funds"
    }]
  },
  'fiscalHosting.feature.acceptAndSpendFunds.description': {
    id: "fiscalHosting.feature.acceptAndSpendFunds.description",
    defaultMessage: [{
      "type": 0,
      "value": "You can often get approved very quickly, even instantly, ready to receive and disburse funds and get operational. Compared with traditional fiscal sponsorship or setting up your own entity, activating with a fiscal host is super streamlined."
    }]
  },
  'fiscalHosting.feature.sustainabilityDesign': {
    id: "fiscalHosting.feature.sustainabilityDesign",
    defaultMessage: [{
      "type": 0,
      "value": "Designed for ongoing sustainability"
    }]
  },
  'fiscalHosting.feature.sustainabilityDesign.tabName': {
    id: "fiscalHosting.feature.sustainabilityDesign.tabName",
    defaultMessage: [{
      "type": 0,
      "value": "Ongoing sustainability"
    }]
  },
  'fiscalHosting.feature.sustainabilityDesign.description': {
    id: "fiscalHosting.feature.sustainabilityDesign.description",
    defaultMessage: [{
      "type": 0,
      "value": "If your project doesn’t have an expiration date, neither should your funding. A standard crowdfunding campaign is over once it’s over. A single grant is spent once it’s spent. But fiscal hosting helps you combine different income streams and form ongoing relationships with funders."
    }]
  },
  'fiscalHosting.feature.networkingAndSolidarity': {
    id: "fiscalHosting.feature.networkingAndSolidarity",
    defaultMessage: [{
      "type": 0,
      "value": "Networking & solidarity"
    }]
  },
  'fiscalHosting.feature.networkingAndSolidarity.tabName': {
    id: "fiscalHosting.feature.networkingAndSolidarity",
    defaultMessage: [{
      "type": 0,
      "value": "Networking & solidarity"
    }]
  },
  'fiscalHosting.feature.networkingAndSolidarity.description': {
    id: "fiscalHosting.feature.networkingAndSolidarity.description",
    defaultMessage: [{
      "type": 0,
      "value": "A fiscal host is by definition a community of projects with something in common. They can provide services to their community as a whole, and enable connections between projects. Whether it’s about joining budgets or joining voices, join a host that’s more than the sum of its parts."
    }]
  },
  'fiscalHosting.feature.automaticReporting': {
    id: "fiscalHosting.feature.automaticReporting",
    defaultMessage: [{
      "type": 0,
      "value": "Automatic reporting & transparency"
    }]
  },
  'fiscalHosting.feature.automaticReporting.tabName': {
    id: "fiscalHosting.feature.automaticReporting.tabName",
    defaultMessage: [{
      "type": 0,
      "value": "Reporting & transparency"
    }]
  },
  'fiscalHosting.feature.automaticReporting.description': {
    id: "fiscalHosting.feature.automaticReporting.description",
    defaultMessage: [{
      "type": 0,
      "value": "No need to spend hours creating reports for funders. The Open Collective platform has automated quantitative reporting built in. Just sent the funder a link to your page! There are great tools for qualitative reporting too, like posting blogs and newsletters, which also serve to keep your wider community engaged and up to date."
    }]
  },
  'fiscalHosting.feature.organizeFinance': {
    id: "fiscalHosting.feature.organizeFinance",
    defaultMessage: [{
      "type": 0,
      "value": "Organize your finances, all in one place"
    }]
  },
  'fiscalHosting.feature.organizeFinance.tabName': {
    id: "fiscalHosting.feature.organizeFinance.tabName",
    defaultMessage: [{
      "type": 0,
      "value": "Your finances in one place"
    }]
  },
  'fiscalHosting.feature.organizeFinance.description': {
    id: "fiscalHosting.feature.organizeFinance.description",
    defaultMessage: [{
      "type": 0,
      "value": "No more messy spreadsheets! Income from credit card transactions, bank transfers, PayPal, even ticket sales, grants, and sponsorships are all tracked automatically in one transparent budget. With a robust yet user-friendly system for submitting and approving expenses, tracking outgoing funds is a breeze, too."
    }]
  }
});

var FeatureTitle = function FeatureTitle(_ref) {
  var id = _ref.id,
      intl = _ref.intl,
      activeFeature = _ref.activeFeature,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var iconUrl = activeFeature === id ? "/static/images/fiscal-hosting/".concat(id, "-icon-pink.png") : "/static/images/fiscal-hosting/".concat(id, "-icon.png");
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, _objectSpread(_objectSpread({
    alignItems: "center",
    justifyContent: ['center', 'space-between'],
    width: 1
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: [null, '48px'],
        height: [null, '48px'],
        mr: [3, 2],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          width: 50,
          height: 50,
          src: iconUrl,
          alt: "".concat(id, " icon"),
          preload: "true"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text/* Span */.Dr, {
        color: ['black.800', 'black.900'],
        active: id === activeFeature,
        fontWeight: "500",
        textAlign: ['center', 'left'],
        fontSize: ['20px', '16px', null, null, '18px'],
        lineHeight: ['28px', '24px', null, null, '27px'],
        letterSpacing: ['-0.6px', '-0.16px', null, null, '-0.2px'],
        children: intl.formatMessage(HowCanAFiscalHostHelpSection_messages["fiscalHosting.feature.".concat(id, ".tabName")])
      })]
    })
  }));
};

var FeatureDescription = function FeatureDescription(_ref2) {
  var intl = _ref2.intl,
      id = _ref2.id,
      props = objectWithoutProperties_default()(_ref2, _excluded2);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Text.P, {
      fontSize: ['16px', null, null, null, '18px'],
      lineHeight: ['24px', null, null, null, '27px'],
      color: ['black.600', 'black.700'],
      letterSpacing: ['-0.04px', '-0.16px'],
      textAlign: ['center', 'left'],
      children: [intl.formatMessage(HowCanAFiscalHostHelpSection_messages["fiscalHosting.feature.".concat(id, ".description")]), ' ']
    })
  }));
};

var Feature = function Feature(_ref3) {
  var id = _ref3.id,
      learnMoreLink = _ref3.learnMoreLink,
      intl = _ref3.intl;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    width: 1,
    display: "flex",
    mr: 2,
    flexDirection: "column",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FeatureTitle, {
      intl: intl,
      id: id,
      activeFeature: id,
      display: ['flex', 'none']
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      mb: [2, 3, 5],
      ml: [null, null, 4],
      width: [null, null, '400px', null, '624px'],
      textAlign: "left",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H4, {
        display: ['none', 'block'],
        letterSpacing: "-0.4px",
        fontWeight: "bold",
        color: "black.800",
        my: 3,
        children: intl.formatMessage(HowCanAFiscalHostHelpSection_messages["fiscalHosting.feature.".concat(id)])
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FeatureDescription, {
        learnMoreLink: learnMoreLink,
        intl: intl,
        id: id,
        display: ['none', 'block']
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      mt: ['14px', 0],
      width: [null, '392px', '466px', null, '756px'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
        loading: "eager",
        width: 756,
        height: 502,
        layout: "intrinsic",
        preload: "true",
        src: "/static/images/fiscal-hosting/".concat(id, "-screenshot.png"),
        alt: intl.formatMessage(HowCanAFiscalHostHelpSection_messages["fiscalHosting.feature.".concat(id)])
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(FeatureDescription, {
      intl: intl,
      id: id,
      learnMoreLink: learnMoreLink,
      display: ['block', 'none'],
      mt: 2
    })]
  });
};

var HowToUseOpenCollective = function HowToUseOpenCollective() {
  var _useState = (0,react.useState)(features[0]),
      activeFeature = _useState[0],
      setActiveFeature = _useState[1];

  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    mx: [3, 4],
    flexDirection: "column",
    textAlign: "center",
    my: [4, null, 0, null, '112px'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
      mb: "0",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "fiscalHosting.howCanAFiscalHostHelp",
        defaultMessage: [{
          "type": 0,
          "value": "How can a fiscal host help?"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row-reverse'],
      alignItems: [null, 'flex-start'],
      mt: [3, null, 4],
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FeatureListWrapper, {
        as: "ul",
        display: ['none', 'flex'],
        children: features.map(function (feature) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(FeatureList, {
            ml: [null, 4, null, 6],
            mr: [null, null, null, null, 2],
            as: "li",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(SelectFeatureButton, {
              width: 1,
              onClick: function onClick() {
                return setActiveFeature(feature);
              },
              active: activeFeature.id === feature.id,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(FeatureTitle, {
                intl: intl,
                id: feature.id,
                activeFeature: activeFeature.id,
                display: ['none', 'flex']
              })
            })
          }, feature.id);
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCarousel/* default */.Z, {
        display: [null, 'none'],
        width: 1,
        children: features.map(function (feature) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Feature, {
              id: feature.id,
              learnMoreLink: feature.learnMoreLink,
              intl: intl
            })
          }, feature.id);
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        display: ['none', 'block'],
        height: "672px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Feature, {
          id: activeFeature.id,
          learnMoreLink: activeFeature.learnMoreLink,
          intl: intl
        })
      })]
    })]
  });
};

HowToUseOpenCollective.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HowToUseOpenCollective"
};
/* harmony default export */ var HowCanAFiscalHostHelpSection = (HowToUseOpenCollective);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var dist_index_esm = __webpack_require__(16678);
;// CONCATENATED MODULE: ./components/fiscal-hosting/WhatAreTheBenefitsSection.js











var Title = (0,styled_components_browser_esm/* default */.ZP)(components_Text.H3).withConfig({
  displayName: "WhatAreTheBenefitsSection__Title",
  componentId: "sc-1gcguhi-0"
})(["font-size:20px;line-height:28px;letter-spacing:-0.6px;font-weight:bold;margin-bottom:16px;margin-top:16px;color:", ";", " @media screen and (min-width:40em){font-size:24px;line-height:32px;letter-spacing:-0.8px;}"], (0,index_esm/* themeGet */.R)('colors.primary.900'), dist_index_esm/* display */.jf);
var Description = (0,styled_components_browser_esm/* default */.ZP)(components_Text.P).withConfig({
  displayName: "WhatAreTheBenefitsSection__Description",
  componentId: "sc-1gcguhi-1"
})(["font-size:15px;line-height:23px;letter-spacing:-0.12px;color:", ";font-weight:500;margin-top:10px;", " @media screen and (min-width:40em){font-size:16px;line-height:24px;letter-spacing:-0.16px;}@media screen and (min-width:88em){font-size:18px;line-height:27px;letter-spacing:-0.2px;}"], (0,index_esm/* themeGet */.R)('colors.black.700'), dist_index_esm/* display */.jf);

var WhatAreTheBenefits = function WhatAreTheBenefits() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    mx: [3, 4],
    my: 4,
    mt: ['56px', null, '120px'],
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "fiscalHosting.whatAreTheBenefits.title",
        defaultMessage: [{
          "type": 0,
          "value": "What are the benefits?"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: ['288px', '548px', '708px', null, '755px'],
      textAlign: "center",
      mb: ['40px', null, 0],
      mt: [2, 3],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionDescription */.TI, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "fiscalHosting.whatAreTheBenefits.subTitle",
          defaultMessage: [{
            "type": 0,
            "value": "Organizing takes work. Fiscal hosts are here to help."
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      my: "32px",
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: [null, '390px', '488px', null, '558px'],
        mr: [null, null, 3, null, 5],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          width: 558,
          height: 418,
          src: "/static/images/fiscal-hosting/tax-exempt.png",
          alt: "Collect money"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: [null, '264px', '344px', null, '408px'],
        textAlign: ['center', 'left'],
        ml: [null, 2, null, 5],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.whatAreTheBenefits.taxExempt",
            defaultMessage: [{
              "type": 0,
              "value": "Tax-exempt or charity status"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Description, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.whatAreTheBenefits.taxExempt.description",
            defaultMessage: [{
              "type": 0,
              "value": "Some fiscal hosts are registered charities or nonprofits, who are able to provide tax benefits to donors and qualify for philanthropic grants. Signing up with a fiscal host who already has this status in your country gives you immediate access."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      my: "32px",
      flexDirection: ['column', 'row-reverse'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: [null, '390px', '488px', null, '558px'],
        ml: [null, null, 3, null, 5],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          width: 558,
          height: 429,
          src: "/static/images/fiscal-hosting/mission-focus.png",
          alt: "Focus on your mission illustration"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: [null, '264px', '344px', null, '408px'],
        textAlign: ['center', 'left'],
        mr: [null, 2, null, 5],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.whatAreTheBenefits.missionFocus",
            defaultMessage: [{
              "type": 0,
              "value": "Focus on your mission"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Description, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.whatAreTheBenefits.missionFocus.description",
            defaultMessage: [{
              "type": 0,
              "value": "Fiscal hosts take care of a lot of the tedious and painful administrative tasks involved in running an organization. The host becomes your legal entity, handling taxes, invoicing, and accounting—so you can spend your time engaging supporters, building your community, and achieving your main mission."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      my: "32px",
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        display: [null, 'none'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          width: 288,
          height: 238,
          layout: "fixed",
          src: '/static/images/fiscal-hosting/money-management-xs.png',
          alt: "Money management"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        display: ['none', 'block'],
        width: ['288px', '390px', '488px', null, '558px'],
        height: [null, '323px'],
        mr: [null, null, 3, null, 5],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          width: 555,
          height: 452,
          src: '/static/images/fiscal-hosting/money-management.png',
          alt: "Money management"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: [null, '264px', '344px', null, '408px'],
        textAlign: ['center', 'left'],
        ml: [null, 4, 0, 5],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.whatAreTheBenefits.moneyManagement",
            defaultMessage: [{
              "type": 0,
              "value": "Money management"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Description, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.whatAreTheBenefits.moneyManagement.description",
            defaultMessage: [{
              "type": 0,
              "value": "Using your personal bank account can complicate your taxes, and it locks out other team members. A fiscal host holds money on your behalf in its bank account, tracking everything transparently on Open Collective. Everyone can have access to see the budget and to tools for fundraising and requesting payouts."
            }]
          })
        })]
      })]
    })]
  });
};

WhatAreTheBenefits.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhatAreTheBenefits"
};
/* harmony default export */ var WhatAreTheBenefitsSection = (WhatAreTheBenefits);
;// CONCATENATED MODULE: ./components/fiscal-hosting/WhatIsFiscalHostSection.js








var WhatIsFiscalHost = function WhatIsFiscalHost() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
    flexDirection: ['column', 'row'],
    alignItems: "center",
    px: 3,
    mt: "68px",
    justifyContent: "center",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      textAlign: ['center', 'left'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['330px', '306px', '268px', null, '458px'],
        mr: [null, '40px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeIllustration/* default */.Z, {
          src: "/static/images/fiscal-hosting/what-is-a-fiscalhost-illustration.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: ['266px', '326px', '472px', null, '518px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
          fontSize: ['24px', null, null, null, '30px'],
          lineHeight: ['32px', null, null, null, '48px'],
          letterSpacing: ['-1.2px', '-1.6px'],
          color: "primary.900",
          mb: ['16px', 3],
          mt: "52px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.whatIsFiscalHost",
            defaultMessage: [{
              "type": 0,
              "value": "What is a fiscal host?"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
          fontSize: ['15px', '16px', '18px'],
          lineHeight: ['22px', '24px', '26px'],
          color: "black.800",
          fontWeight: "500",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "fiscalHosting.whatIsFiscalHost.description",
            defaultMessage: [{
              "type": 0,
              "value": "A fiscal host is an organization that welcomes others to operate through their structure, so projects can use the host’s legal entity and bank account instead of setting up their own. The host provides administrative services, oversight, and support. "
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 0,
              "value": " *Fiscal hosting is also called fiscal sponsorship, fund-holding, or auspicing in different places around the world."
            }],
            values: {
              lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
            }
          })
        })]
      })]
    })
  });
};

WhatIsFiscalHost.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhatIsFiscalHost"
};
/* harmony default export */ var WhatIsFiscalHostSection = (WhatIsFiscalHost);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
;// CONCATENATED MODULE: ./components/fiscal-hosting/WhoIsFiscalHostingForSection.js













var IconWrapper = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "WhoIsFiscalHostingForSection__IconWrapper",
  componentId: "sc-1vpdm4f-0"
})(["display:flex;justify-content:center;align-items:center;width:56px;height:56px;@media screen and (min-width:88em){width:56px;height:56px;}"]);
var Wrapper = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Grid */.rj).withConfig({
  displayName: "WhoIsFiscalHostingForSection__Wrapper",
  componentId: "sc-1vpdm4f-1"
})(["justify-items:center;"]);
var CarouselWrapper = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "WhoIsFiscalHostingForSection__CarouselWrapper",
  componentId: "sc-1vpdm4f-2"
})(["@media screen and (min-width:40em){margin-right:0;margin-left:0;}@media screen and (min-width:48em){margin-right:32px;margin-left:32px;}"]);
var PotentialUserContainer = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "WhoIsFiscalHostingForSection__PotentialUserContainer",
  componentId: "sc-1vpdm4f-3"
})(["width:288px;@media screen and (min-width:40em){width:250px;}@media screen and (min-width:48em){width:288px;}"]);
var WhoIsFiscalHostingForSection_messages = (0,lib.defineMessages)({
  'fiscalHosting.community': {
    id: "fiscalHosting.community",
    defaultMessage: [{
      "type": 0,
      "value": "Emergent community responses"
    }]
  },
  'fiscalHosting.community.description': {
    id: "fiscalHosting.community.description",
    defaultMessage: [{
      "type": 0,
      "value": "To current events, like a pandemic, who need to get operational immediately."
    }]
  },
  'fiscalHosting.grantRecipients': {
    id: "fiscalHosting.grantRecipients",
    defaultMessage: [{
      "type": 0,
      "value": "Grant recipients or applicants"
    }]
  },
  'fiscalHosting.grantRecipients.description': {
    id: "fiscalHosting.grantRecipients.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who need a place to receive the funds and hold them as they are spent down."
    }]
  },
  'fiscalHosting.timeLimited': {
    id: "fiscalHosting.timeLimited",
    defaultMessage: [{
      "type": 0,
      "value": "Time-limited projects"
    }]
  },
  'fiscalHosting.timeLimited.description': {
    id: "fiscalHosting.timeLimited.description",
    defaultMessage: [{
      "type": 0,
      "value": "Where it doesn't make sense to set up a whole new organization only to wind it up six months later."
    }]
  },
  'fiscalHosting.unincorporatedGroup': {
    id: "fiscalHosting.unincorporatedGroup",
    defaultMessage: [{
      "type": 0,
      "value": "An unincorporated group"
    }]
  },
  'fiscalHosting.unincorporatedGroup.description': {
    id: "fiscalHosting.unincorporatedGroup.description",
    defaultMessage: [{
      "type": 0,
      "value": "Like a meetup, needing to fundraise, collect membership dues, or sign a contract with a venue or sponsor."
    }]
  },
  'fiscalHosting.crowdFunding': {
    id: "fiscalHosting.crowdFunding",
    defaultMessage: [{
      "type": 0,
      "value": "A crowdfunding campaign"
    }]
  },
  'fiscalHosting.crowdFunding.description': {
    id: "fiscalHosting.crowdFunding.description",
    defaultMessage: [{
      "type": 0,
      "value": "Seeking a place to hold the money and a way to offer accountability to their backers."
    }]
  },
  'fiscalHosting.youngActivists': {
    id: "fiscalHosting.youngActivists",
    defaultMessage: [{
      "type": 0,
      "value": "Young activists and change-makers"
    }]
  },
  'fiscalHosting.youngActivists.description': {
    id: "fiscalHosting.youngActivists.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who may lack the experience to manage their own legal entity."
    }]
  },
  'fiscalHosting.newlyFormingCharity': {
    id: "fiscalHosting.newlyFormingCharity",
    defaultMessage: [{
      "type": 0,
      "value": "A newly-forming charity"
    }]
  },
  'fiscalHosting.newlyFormingCharity.description': {
    id: "fiscalHosting.newlyFormingCharity.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who wants to enable tax-deductible donations and philanthropic grants, without waiting to get charity status themselves."
    }]
  },
  'fiscalHosting.distributeCollaboration': {
    id: "fiscalHosting.distributeCollaboration",
    defaultMessage: [{
      "type": 0,
      "value": "A distributed collaboration"
    }]
  },
  'fiscalHosting.distributeCollaboration.description': {
    id: "fiscalHosting.distributeCollaboration.description",
    defaultMessage: [{
      "type": 0,
      "value": "Like an open source software project, which isn’t owned by anyone and wants resources held in common."
    }]
  },
  'fiscalHosting.founderCoalition': {
    id: "fiscalHosting.founderCoalition",
    defaultMessage: [{
      "type": 0,
      "value": "Funder coalitions"
    }]
  },
  'fiscalHosting.founderCoalition.description': {
    id: "fiscalHosting.distributeCollaboration.description",
    defaultMessage: [{
      "type": 0,
      "value": "Like an open source software project, which isn’t owned by anyone and wants resources held in common."
    }]
  },
  'fiscalHosting.companiesGivingBack': {
    id: "fiscalHosting.companiesGivingBack",
    defaultMessage: [{
      "type": 0,
      "value": "Companies giving back"
    }]
  },
  'fiscalHosting.companiesGivingBack.description': {
    id: "fiscalHosting.companiesGivingBack.description",
    defaultMessage: [{
      "type": 0,
      "value": "Can work with a nonprofit fiscal host to separate funds from the commercial side and coordinate grants and sponsorships."
    }]
  },
  'fiscalHosting.grantMakingInstitution': {
    id: "fiscalHosting.companiesGivingBack",
    defaultMessage: [{
      "type": 0,
      "value": "Companies giving back"
    }]
  },
  'fiscalHosting.grantMakingInstitution.description': {
    id: "fiscalHosting.grantMakingInstitution.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who may be restricted to funding registered charities, seeking to partner with a fiscal host in order reach less formal communities."
    }]
  }
});

var PotentialUser = function PotentialUser(_ref) {
  var id = _ref.id;
  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PotentialUserContainer, {
    display: "flex",
    flexDirection: "column",
    alignItems: ['center', 'flex-start'],
    my: [0, null, null, null, 4],
    width: "288px",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['row', 'column'],
      width: 1,
      alignItems: ['center', 'flex-start'],
      mb: [3, 0],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(IconWrapper, {
        my: [0, 2],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          width: 60,
          height: 60,
          src: "/static/images/fiscal-hosting/".concat(id, ".png"),
          alt: "".concat(id, " illustration")
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
        ml: ['16px', 0],
        fontSize: "20px",
        lineHeight: "28px",
        letterSpacing: "-0.6px",
        mb: 2,
        color: "black.800",
        children: intl.formatMessage(WhoIsFiscalHostingForSection_messages["fiscalHosting.".concat(id)])
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: 1,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
        color: ['black.700', 'black.600', 'black.700'],
        fontSize: ['18px', '16px', null, null, '18px'],
        lineHeight: ['26px', '24px', null, null, '27px'],
        letterSpacing: ['-0.12px', '-0.16px'],
        mb: [0, 3],
        fontWeight: ['500', 'normal'],
        children: intl.formatMessage(WhoIsFiscalHostingForSection_messages["fiscalHosting.".concat(id, ".description")])
      })
    })]
  });
};

var PotentialUsers = function PotentialUsers(_ref2) {
  var users = _ref2.users;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Wrapper, {
    gridTemplateColumns: ['100%', 'repeat(2, 1fr)', null, null, 'repeat(3, 1fr)'],
    placeItems: "center",
    alignItems: "flex-start",
    children: users.map(function (user) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(PotentialUser, {
        id: user.id
      }, user.id);
    })
  });
};

var WhoIsFiscalHosting = function WhoIsFiscalHosting() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      display: "flex",
      mt: [null, null, '120px', null, '240px'],
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      mx: [3, 4],
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: ['column', 'row-reverse'],
        alignItems: "center",
        justifyContent: "center",
        mr: [null, 2, 0, null, 5],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          my: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
            width: 224,
            height: 144,
            src: "/static/images/fiscal-hosting/who-is-fiscalHosting-illustration.png",
            alt: "Who is fiscal hosting for illustration"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: ['288px', '392px', '528px', null, '657px'],
          mr: [null, '29px', 0, null, '93px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            textAlign: ['center', 'left'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "fiscalHosting.whoIsFiscalHostingFor.title",
                defaultMessage: [{
                  "type": 0,
                  "value": "Who is fiscal hosting for?"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            my: 2,
            textAlign: ['center', 'left'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionDescription */.TI, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "fiscalHosting.whoIsFiscalHostingFor.subtitle",
                defaultMessage: [{
                  "type": 0,
                  "value": "There are multiple cases where fiscal hosting can be valuable for a project."
                }]
              })
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(CarouselWrapper, {
      my: 4,
      display: [null, 'flex'],
      flexDirection: [null, 'column'],
      justifyContent: "center",
      alignItems: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledCarousel/* default */.Z, {
        display: ['block', 'none'],
        width: "100%",
        maxWidth: "1200px",
        children: [].concat(toConsumableArray_default()(constants/* WHO_IS_FISCAL_HOSTING_FOR.firstCategories */.Zt.firstCategories), toConsumableArray_default()(constants/* WHO_IS_FISCAL_HOSTING_FOR.secondCategories */.Zt.secondCategories)).map(function (user) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(PotentialUser, {
            id: user.id
          }, user.id);
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCarousel/* default */.Z, {
        display: ['none', 'block'],
        width: "100%",
        maxWidth: "1200px",
        controllerPosition: "side",
        children: Object.keys(constants/* WHO_IS_FISCAL_HOSTING_FOR */.Zt).map(function (categories, index) {
          return (
            /*#__PURE__*/
            // eslint-disable-next-line react/no-array-index-key
            (0,jsx_runtime.jsx)(PotentialUsers, {
              users: constants/* WHO_IS_FISCAL_HOSTING_FOR */.Zt[categories]
            }, index.toString())
          );
        })
      })]
    })]
  });
};

WhoIsFiscalHosting.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhoIsFiscalHosting"
};
/* harmony default export */ var WhoIsFiscalHostingForSection = (WhoIsFiscalHosting);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
;// CONCATENATED MODULE: ./pages/fiscal-hosting.js













var fiscal_hosting_messages = (0,lib.defineMessages)({
  defaultTitle: {
    id: "OC.tagline",
    defaultMessage: [{
      "type": 0,
      "value": "Make your community sustainable. Collect and spend money transparently."
    }]
  }
});

var FiscalHosting = function FiscalHosting() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, {
    description: formatMessage(fiscal_hosting_messages.defaultTitle),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(APlaceToGrowAndThriveSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(WhatIsFiscalHostSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(WhatAreTheBenefitsSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(HowCanAFiscalHostHelpSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(WhoIsFiscalHostingForSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(ApplyToFiscalHostSection/* default */.ZP, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(FindTheRightFiscalHostSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(JoinUs/* default */.ZP, {
      page: "fiscalHosting"
    })]
  });
};

FiscalHosting.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FiscalHosting"
};
/* harmony default export */ var fiscal_hosting = (FiscalHosting);

/***/ }),

/***/ 53109:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/fiscal-hosting",
      function () {
        return __webpack_require__(3306);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,146,5813,4842,9870,9774,2888,179], function() { return __webpack_exec__(53109); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=fiscal-hosting-22da2faf0502c1b0.js.map