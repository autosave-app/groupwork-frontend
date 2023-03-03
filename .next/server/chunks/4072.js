"use strict";
exports.id = 4072;
exports.ids = [4072];
exports.modules = {

/***/ 84072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H3": () => (/* binding */ ApplyToHostMobileCarousel),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a5": () => (/* binding */ ApplyToHostGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65106);
/* harmony import */ var _StyledCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38104);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36374);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const ApplyLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
  displayName: "ApplyToFiscalHostSection__ApplyLink",
  componentId: "sc-4cjc06-0"
})(["border-radius:16px;&:hover{background:rgba(255,255,255,0.2);}"]);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
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

const groupHostsIntoSections = hosts => hosts.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);

const Host = ({
  id,
  name,
  logo,
  bgImage,
  location,
  color,
  collectivePath
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(ApplyLink, {
    as: _Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    href: collectivePath,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mx: [null, 2, null, null, 3],
      my: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        width: ['288px', '205px', '270px', null, '360px'],
        height: ['210px', '218px', '218px', null, '256px'],
        background: `url("/static/images/become-a-host/${bgImage}.png") no-repeat`,
        backgroundSize: ['contain', 'cover', '100% 100%'],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
          radius: "96px",
          src: logo,
          name: name,
          type: "ORGANIZATION"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: ['288px', '205px', '270px', null, '360px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          fontSize: ['15px', '18px'],
          lineHeight: ['23px', '27px'],
          color: color || 'black.600',
          lineSpacing: ['-0.12px', '-0.2px'],
          fontWeight: "normal",
          mt: "16px",
          mb: "12px",
          children: location
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
            fontSize: ['15px', '24px'],
            lineHeight: ['23px', '32px'],
            color: color || 'black.800',
            letterSpacing: ['-0.12px', '-0.8px'],
            fontWeight: "bold",
            wordWrap: "break-word",
            textAlign: "left",
            children: name
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          my: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
            fontSize: ['15px', '16px', null, null, '18px'],
            textAlign: "left",
            lineHeight: ['25px', '24px', null, null, '27px'],
            letterSpacing: ['-0.016em', '-0.16px', null, null, '-0.2px'],
            color: color || 'black.600',
            children: intl.formatMessage(messages[`fiscalHosting.hosts.${id}`])
          })
        })]
      })]
    })
  });
};

const ApplyToHostDesktopCarousel = ({
  display,
  controllerPosition
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
  controllerPosition: controllerPosition,
  width: 1,
  display: display,
  children: groupHostsIntoSections(_constants__WEBPACK_IMPORTED_MODULE_12__/* .HOSTS */ .Z8).map((groupedHost, index) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    display: ['none', 'flex'],
    justifyContent: "center",
    width: 1,
    children: groupedHost.map(host => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(Host, _objectSpread({}, host))
    }, host.id))
  }, index.toString()))
});

const ApplyToHostMobileCarousel = ({
  color
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
  display: [null, 'none'],
  width: 1,
  children: _constants__WEBPACK_IMPORTED_MODULE_12__/* .HOSTS.map */ .Z8.map(host => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(Host, _objectSpread({
    color: color
  }, host), host.id))
});
const ApplyToHostGrid = ({
  color
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .rj, {
  gridGap: [1, null, null, null, '48px'],
  gridTemplateColumns: 'repeat(3, 1fr)',
  children: _constants__WEBPACK_IMPORTED_MODULE_12__/* .HOSTS.map */ .Z8.map(host => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(Host, _objectSpread({
    color: color
  }, host), host.id))
});

const ApplyToFiscalHosts = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
  my: 4,
  flexDirection: "column",
  mx: [3, 4],
  alignItems: "center",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_8__/* .SectionTitle */ .NZ, {
    textAlign: "center",
    mb: "8px",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "fiscalHosting.applyToFiscalHost",
      defaultMessage: [{
        "type": 0,
        "value": "Apply to one of our Fiscal Hosts"
      }]
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    width: ['286px', '648px', '705px', null, '936px'],
    textAlign: "center",
    mb: 4,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_8__/* .SectionDescription */ .TI, {
      textAlign: "center",
      my: "0",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
          orgsAroundTheWorldLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_6__/* .getI18nLink */ .fw)({
            as: _Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            href: '/search?isHost=true'
          }),
          createYourOwnFiscalHostLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_6__/* .getI18nLink */ .fw)({
            as: _Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            href: '/become-a-host'
          })
        }
      })
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(ApplyToHostMobileCarousel, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    mt: 2,
    width: 1,
    maxWidth: "1200px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(ApplyToHostDesktopCarousel, {
      display: ['none', 'block', 'none'],
      controllerPosition: "bottom"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(ApplyToHostDesktopCarousel, {
      display: ['none', null, 'block'],
      controllerPosition: "side"
    })]
  })]
});

ApplyToFiscalHosts.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplyToFiscalHosts"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplyToFiscalHosts);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XV": () => (/* binding */ HOST_CONSIDERATIONS),
/* harmony export */   "Z8": () => (/* binding */ HOSTS),
/* harmony export */   "Zt": () => (/* binding */ WHO_IS_FISCAL_HOSTING_FOR)
/* harmony export */ });
const WHO_IS_FISCAL_HOSTING_FOR = {
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
const HOSTS = [{
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
const HOST_CONSIDERATIONS = ['missionAlignment', 'location', 'legalStructure', 'serviceOffered', 'fees', 'operations'];

/***/ })

};
;