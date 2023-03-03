(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7639],{

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

/***/ 78482:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ become_a_host; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/marketing/Text.js
var Text = __webpack_require__(65106);
// EXTERNAL MODULE: ./components/StyledCarousel.js + 1 modules
var StyledCarousel = __webpack_require__(98738);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/Text.ts
var components_Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/become-a-host/CaseStudiesSection.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













var CollectiveNameLink = (0,styled_components_browser_esm/* default */.ZP)(StyledLink/* default */.Z).withConfig({
  displayName: "CaseStudiesSection__CollectiveNameLink",
  componentId: "sc-1vch5iz-0"
})(["&:hover{text-decoration:underline !important;color:#313233;}"]);
var messages = (0,lib.defineMessages)({
  'becomeAHost.caseStudies.wwcode': {
    id: "becomeAHost.caseStudies.wwcode",
    defaultMessage: [{
      "type": 0,
      "value": "Whenever we start a new meetup chapter, we pair it with an Open Collective so they have the means to raise money under our umbrella."
    }]
  },
  'becomeAHost.caseStudies.socialchangenestcollective': {
    id: "becomeAHost.caseStudies.socialchangenestcollective",
    defaultMessage: [{
      "type": 0,
      "value": "We have been able to support over 150 Mutual Aid groups to get going quickly by providing them with fiscal hosting back office support."
    }]
  },
  'becomeAHost.caseStudies.foundation': {
    id: "becomeAHost.caseStudies.foundation",
    defaultMessage: [{
      "type": 0,
      "value": "The Open Collective Platform provides the tools to more effectively manage group finances. They can offer their donors tax-deductible status without needing to incorporate a legal entity."
    }]
  },
  'becomeAHost.caseStudies.opensource': {
    id: "becomeAHost.caseStudies.opensource",
    defaultMessage: [{
      "type": 0,
      "value": "We provide financial and legal infrastructure for thousands of open source projects. We’re an API between the world of distributed collaboration and the world of accounting and invoices."
    }]
  },
  'becomeAHost.caseStudies.allforclimate-collective': {
    id: "becomeAHost.caseStudies.allforclimate-collective",
    defaultMessage: [{
      "type": 0,
      "value": "A fiscal sponsor for your local climate justice group, we act as a shared administrative back office so that local groups can focus on their actions."
    }]
  }
});
var caseStudies = [{
  id: 'wwcode',
  name: 'Women Who Code',
  collectivePath: '/wwcode',
  learnMorePath: 'https://opencollective.com/wwcodeinc',
  bgImage: 'wwc',
  logo: '/static/images/become-a-host/wwc-logo.png'
}, {
  id: 'socialchangenestcollective',
  name: 'Social Change Nest',
  collectivePath: '/socialchangenestcollective',
  learnMorePath: 'https://opencollective.com/the-social-change-nest',
  bgImage: 'socialchangenest',
  logo: '/static/images/become-a-host/socialchangenest-logo.png'
}, {
  id: 'foundation',
  name: 'Open Collective Foundation',
  collectivePath: '/foundation',
  learnMorePath: 'https://opencollective.foundation/',
  bgImage: 'ocf',
  logo: '/static/images/become-a-host/ocf-logo.png'
}, {
  id: 'opensource',
  name: 'Open Source Collective',
  collectivePath: '/opensource',
  learnMorePath: 'https://oscollective.org/',
  bgImage: 'osc',
  logo: '/static/images/become-a-host/osc-logo.png'
}, {
  id: 'allforclimate-collective',
  name: 'All for Climate',
  collectivePath: '/allforclimate-collective',
  learnMorePath: 'https://opencollective.com/allforclimate',
  bgImage: 'allforclimate-collective',
  logo: '/static/images/become-a-host/climate-logo.png'
}];

var CaseStudy = function CaseStudy(_ref) {
  var bgImage = _ref.bgImage,
      name = _ref.name,
      id = _ref.id,
      logo = _ref.logo,
      learnMorePath = _ref.learnMorePath;
  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mr: [null, 3, null, null, '36px'],
    my: [null, 3, null, null, 4],
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      width: [1, '205px', '306px', null, '360px'],
      height: ['210px', '218px', null, null, '256px'],
      background: ["url(\"/static/images/become-a-host/".concat(bgImage, ".png\") no-repeat"), "url(\"/static/images/become-a-host/".concat(bgImage, "-sm.png\") no-repeat"), "url(\"/static/images/become-a-host/".concat(bgImage, ".png\") no-repeat")],
      backgroundSize: ['contain', 'cover', 'contain'],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
        radius: "96px",
        src: logo,
        name: name,
        type: "ORGANIZATION"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      mt: ['12px', 3, '24px'],
      width: [1, '206px', '306px', null, '360px'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveNameLink, {
        href: learnMorePath,
        fontWeight: "700",
        fontSize: ['18px', '24px'],
        lineHeight: ['26px', '32px'],
        color: "black.800",
        letterSpacing: [null, '-0.008em'],
        children: name
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Text.P, {
        fontSize: ['15px', '16px', null, null, '18px'],
        lineHeight: ['22px', '24px', null, null, '26px'],
        color: "black.700",
        fontWeight: ['500', '400'],
        mt: "12px",
        children: ["\u201C", intl.formatMessage(messages["becomeAHost.caseStudies.".concat(id)]), "\u201C"]
      })]
    })]
  });
};

var CaseStudies = function CaseStudies() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    my: [4, null, null, null, '118px'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: ['288px', '648px', null, null, '1152px'],
      mb: "8px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "vnfbPl",
          defaultMessage: [{
            "type": 0,
            "value": "Who is using Open Collective?"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mb: [4, 3],
      width: ['288px', '648px'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionDescription */.TI, {
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "home.OCUsersSection.subtitle",
          defaultMessage: [{
            "type": 0,
            "value": "Communities around the world are using Open Collective. Find out more about them!"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCarousel/* default */.Z, {
      width: "288px",
      options: caseStudies,
      display: [null, 'none'],
      children: caseStudies.map(function (caseStudy) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(CaseStudy, _objectSpread({}, caseStudy), caseStudy.id);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      display: ['none', 'flex'],
      flexWrap: "wrap",
      justifyContent: "center",
      children: caseStudies.map(function (caseStudy) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(CaseStudy, _objectSpread({}, caseStudy), caseStudy.id);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mt: 4,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        buttonStyle: "marketingSecondary",
        buttonSize: "medium",
        href: "/search?isHost=true",
        fontWeight: "500",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "becomeAHost.discoverMore",
          defaultMessage: [{
            "type": 0,
            "value": "Discover more hosts"
          }]
        })
      })
    })]
  });
};

CaseStudies.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CaseStudies"
};
/* harmony default export */ var CaseStudiesSection = (CaseStudies);
// EXTERNAL MODULE: ./components/collectives/HomeNextIllustration.js
var HomeNextIllustration = __webpack_require__(47667);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
;// CONCATENATED MODULE: ./components/become-a-host/FiscalSponsorshipSection.js












var FiscalSponsorship = function FiscalSponsorship() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: ['column', null, 'row-reverse'],
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    mt: 4,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mt: [3, 0],
      mb: [3, null, null, null, '24px'],
      width: ['288px', '601px', '438px', null, '555px'],
      display: [null, null, 'none'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* MainTitle */.U3, {
        textAlign: ['center', null, 'left'],
        whiteSpace: [null, null, 'pre-line'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "becomeAHost.title",
          defaultMessage: [{
            "type": 0,
            "value": "Fiscal sponsorship has never been easier"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      ml: [null, '6px', '40px', null, '84px'],
      width: ['288px', '324px', '478px', null, '558px'],
      my: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
        alt: "Fiscal sponsorship illustration",
        src: "/static/images/become-a-host/fiscalSponsorship-illustration.png",
        width: 558,
        height: 414
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: ['center', null, 'flex-start'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mt: [3, 0],
        mb: ['24px', null, null, null, '24px'],
        width: ['288px', '306px', '438px', null, '555px'],
        display: ['none', null, 'block'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* MainTitle */.U3, {
          textAlign: ['center', null, 'left'],
          whiteSpace: [null, null, 'pre-line'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "becomeAHost.title",
            defaultMessage: [{
              "type": 0,
              "value": "Fiscal sponsorship has never been easier"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '676px', '458px', null, '558px'],
        mb: ['24px', null, null, null, '24px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* MainDescription */.WC, {
          textAlign: ['center', null, 'left'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "becomeAHost.description",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective is purpose-built to streamline your processes, reduce overhead, increase transparency, and enable your organization to hold and manage funds for more projects in less time. "
            }, {
              "type": 8,
              "value": "learnMoreLink",
              "children": [{
                "type": 0,
                "value": "Learn more"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              learnMoreLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://docs.opencollective.com/help/fiscal-hosts/become-a-fiscal-host',
                openInNewTab: true
              })
            }
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: "/organizations/new",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          minWidth: [283, 165, null, null, 183],
          buttonStyle: "marketing",
          whiteSpace: "nowrap",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Y0G9KM",
            defaultMessage: [{
              "type": 0,
              "value": "Join as a Fiscal Host"
            }]
          })
        })
      })]
    })]
  });
};

FiscalSponsorship.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FiscalSponsorship"
};
/* harmony default export */ var FiscalSponsorshipSection = (FiscalSponsorship);
// EXTERNAL MODULE: ./components/collectives/HomeIllustration.js + 1 modules
var HomeIllustration = __webpack_require__(42815);
;// CONCATENATED MODULE: ./components/become-a-host/WhatAreTheBenefitsSection.js











var ScreenShotWrapper = (0,styled_components_browser_esm/* default */.ZP)(HomeIllustration/* default */.Z).withConfig({
  displayName: "WhatAreTheBenefitsSection__ScreenShotWrapper",
  componentId: "sc-1mp4isl-0"
})(["max-height:none;"]);

var WhatAreTheBenefits = function WhatAreTheBenefits() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    mt: ['96px', '80px', null, null, '104px'],
    mb: "80px",
    flexDirection: "column",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mx: 3,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mb: [2, 3],
        width: ['288px', 1],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "becomeAHost.whatAreTheBenefits",
            defaultMessage: [{
              "type": 0,
              "value": "What are the benefits to host with us?"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '548px', null, null, '755px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionDescription */.TI, {
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "becomeAHost.whatAreTheBenefits.description",
            defaultMessage: [{
              "type": 0,
              "value": "Accept donations and sponsorship, celebrate your supporters, pay expenses, and keep everyone up to date — all in one place."
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      mx: 3,
      flexDirection: ['column', null, 'row'],
      justifyContent: "center",
      alignItems: ['center', null, 'baseline'],
      mt: ['24px', '48px', null, null, '80px'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: ['column', 'row', 'column'],
        alignItems: ['flex-start', 'center', 'flex-start'],
        mb: 4,
        mr: [null, null, '40px', null, '103px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: ['132px', null, null, null, '208px'],
          height: ['132px', null, null, null, '208px'],
          mb: [2, null, '17px', null, '51px'],
          mr: [null, 4, 0],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
            src: "/static/images/become-a-host/reduceOverhead-icon.png",
            alt: "Reduce Overhead Icon",
            width: 208,
            height: 208
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: ['288px', '472px', '250px', null, '289px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
            fontSize: ['20px', null, null, null, '24px'],
            lineHeight: ['28px', null, null, null, '32px'],
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: [2, 3],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.reduceOverhead",
              defaultMessage: [{
                "type": 0,
                "value": "Reduce overhead"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: ['15px', '18px'],
            lineHeight: ['22px', '26px'],
            color: "black.700",
            fontWeight: "400",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.reduceOverhead.description",
              defaultMessage: [{
                "type": 0,
                "value": "When you’re managing funds for multiple projects or groups, it's easy to get overwhelmed by complex spreadsheets and countless email threads. Open Collective automates budget tracking, reporting, expense processing, and payments, making your job a lot easier."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: ['column', 'row', 'column'],
        alignItems: ['flex-start', 'center', 'flex-start'],
        mb: 4,
        mr: [null, null, '40px', null, '103px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: ['132px', null, null, null, '208px'],
          height: ['132px', null, null, null, '208px'],
          mb: [2, null, '17px', null, '51px'],
          mr: [null, 4, 0],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
            src: "/static/images/become-a-host/increaseCapacity-icon.png",
            alt: "Increase Capacity Icon",
            width: 208,
            height: 208
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: ['288px', '472px', '250px', null, '289px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
            fontSize: ['20px', null, null, null, '24px'],
            lineHeight: ['28px', null, null, null, '32px'],
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: [2, 3],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.increaseCapacity",
              defaultMessage: [{
                "type": 0,
                "value": "Increase capacity"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: ['15px', '18px'],
            lineHeight: ['22px', '26px'],
            color: "black.700",
            fontWeight: "400",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.increaseCapacity.description",
              defaultMessage: [{
                "type": 0,
                "value": "Open Collective makes it possible for you to offer more services to more projects in less time. Large numbers of transactions won’t overwhelm you, because the platform automates most of the work, and also collects any fund holding fees you set."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: ['column', 'row', 'column'],
        alignItems: ['flex-start', 'center', 'flex-start'],
        mb: 4,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: ['132px', null, null, null, '208px'],
          height: ['132px', null, null, null, '208px'],
          mb: [2, null, '17px', null, '51px'],
          mr: [null, 4, 0],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
            src: "/static/images/become-a-host/ABetterExperience-icon.png",
            alt: "A Better Experience Icon",
            width: 208,
            height: 208
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: ['288px', '472px', '250px', null, '289px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
            fontSize: ['20px', null, null, null, '24px'],
            lineHeight: ['28px', null, null, null, '32px'],
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: [2, 3],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.aBetterExperience",
              defaultMessage: [{
                "type": 0,
                "value": "A better experience"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: ['15px', '18px'],
            lineHeight: ['22px', '26px'],
            color: "black.700",
            fontWeight: "400",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.aBetterExperience.description",
              defaultMessage: [{
                "type": 0,
                "value": "Reporting is automatic and real-time, so everyone can see the up to date budget at any time. Projects can have more direct control over their funds, while fiscal sponsors can ensure everything is done according to their policies."
              }]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      mx: 2,
      mt: [2, '48px', null, null, '80px'],
      flexDirection: "column",
      alignItems: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: ['column', 'row-reverse'],
        alignItems: "center",
        position: "relative",
        mr: [null, null, null, null, '178px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          width: ['83px', '79px', '115px', null, '147px'],
          height: ['68px', '65px', '94px', null, '120px'],
          position: "absolute",
          top: [null, 0, '265px', null, '290px'],
          left: ['0', '215px', '330px', null, '350px'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
            src: "/static/images/become-a-host/keepTrackBird.png",
            alt: "Bird illustration",
            width: 147,
            height: 120
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "304px",
          mb: "24px",
          display: [null, 'none'],
          mt: "27px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            textAlign: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.keepTrack",
              defaultMessage: [{
                "type": 0,
                "value": "Keep track "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " of all the budgets"
              }],
              values: {
                lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
              }
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mb: ['24px', 0],
          overflow: "auto",
          maxWidth: ['304px', '324px', '478px', null, '558px'],
          maxHeight: ['229px', '281px', '355px', null, '420px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Keep track of all budgets Illustration",
            src: "/static/images/become-a-host/keepTrackOfBudget-xs.png",
            display: [null, 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Keep track of all budgets Illustration",
            src: "/static/images/become-a-host/keepTrackOfBudget-sm.png",
            display: ['none', 'block', 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Keep track of all budgets Illustration",
            src: "/static/images/become-a-host/keepTrackOfBudget-md.png",
            display: ['none', null, 'block', null, 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Keep track of all budgets Illustration",
            src: "/static/images/become-a-host/keepTrackOfBudget-lg.png",
            display: ['none', null, null, null, 'block']
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: ['304px', '288px', '437px', null, '408px'],
          mr: [null, '24px', '41px', null, '134px'],
          textAlign: ['center', 'left'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(components_Text.H2, {
            fontSize: ['24px', null, null, null, '30px'],
            lineHeight: ['32px', null, null, null, '40px'],
            letterSpacing: "-0.008em",
            color: "primary.900",
            display: ['none', 'block'],
            mb: 3,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.keepTrack",
              defaultMessage: [{
                "type": 0,
                "value": "Keep track "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " of all the budgets"
              }],
              values: {
                lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
              }
            }), ' ']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: ['16px', null, null, null, '18px'],
            lineHeight: ['24px', null, null, null, '26px'],
            color: "black.800",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.keepTrack.description",
              defaultMessage: [{
                "type": 0,
                "value": "Create Collectives for as many projects as you need, in a few clicks, at no extra cost. Each has its own page for fundraising, budget tracking, and community engagement. Incoming payments are added to the balance of the right Collective. No spreadsheets required!"
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        mt: ['64px', '48px', '58px', null, '94px'],
        display: "flex",
        flexDirection: ['column', 'row'],
        alignItems: ['center', 'flex-start', 'center'],
        position: "relative",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          width: ['71px', '85px', '115px', null, '126px'],
          height: ['44px', '52px', '71px', null, '78px'],
          position: "absolute",
          right: ['0', null, '124px', null, '28px'],
          top: [null, null, '65px'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
            src: "/static/images/become-a-host/easyExpenseBird.png",
            alt: "Bird illustration",
            width: 126,
            height: 78
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "304px",
          mb: "24px",
          display: [null, 'none'],
          mr: ['10px', 0],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            textAlign: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.easyExpense",
              defaultMessage: [{
                "type": 0,
                "value": "Easy expense "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " management"
              }],
              values: {
                lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
              }
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mb: ['24px', 0],
          overflow: "auto",
          maxWidth: ['304px', '324px', '478px', null, '558px'],
          maxHeight: ['229px', '281px', '355px', null, '420px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Easy expense management Illustration",
            src: "/static/images/become-a-host/easyExpense-xs.png",
            display: [null, 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Easy expense management Illustration",
            src: "/static/images/become-a-host/easyExpense-sm.png",
            display: ['none', 'block', 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Easy expense management Illustration",
            src: "/static/images/become-a-host/easyExpense-md.png",
            display: ['none', null, 'block', null, 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Easy expense management Illustration",
            src: "/static/images/become-a-host/easyExpense-lg.png",
            display: ['none', null, null, null, 'block']
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: ['304px', '288px', '437px', null, '408px'],
          ml: [null, '24px', '41px', null, '96px'],
          textAlign: ['center', 'left'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
            fontSize: ['24px', null, null, null, '30px'],
            lineHeight: ['32px', null, null, null, '40px'],
            letterSpacing: "-0.008em",
            color: "primary.900",
            display: ['none', 'block'],
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.easyExpense",
              defaultMessage: [{
                "type": 0,
                "value": "Easy expense "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " management"
              }],
              values: {
                lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: ['16px', null, null, null, '18px'],
            lineHeight: ['24px', null, null, null, '26px'],
            color: "black.800",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.easyExpense.description",
              defaultMessage: [{
                "type": 0,
                "value": "To withdraw funds, payees submit expenses through the platform, with associated invoices and receipts. Easily view and approve expenses through your admin dashboard—payment via bank transfer or Paypal is built-in, so you can pay in a single click."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        mt: ['35px', '48px', '58px', null, '94px'],
        display: "flex",
        flexDirection: ['column', 'row-reverse'],
        alignItems: "center",
        position: "relative",
        mr: [null, null, null, null, '178px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          width: ['88px', '105px', '122px', null, '156px'],
          height: ['44px', '52px', '61px', null, '78px'],
          position: "absolute",
          left: ['0', '150px', '200px'],
          top: [null, '-10px', '35px'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
            src: "/static/images/become-a-host/combineFundingBird.png",
            alt: "Bird illustration",
            width: 156,
            height: 78
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "304px",
          mb: "24px",
          display: [null, 'none'],
          mt: ['27px', 0],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            textAlign: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.combineFunding",
              defaultMessage: [{
                "type": 0,
                "value": "Combine "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " funding sources"
              }],
              values: {
                lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
              }
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mb: ['24px', 0],
          overflow: "auto",
          maxWidth: ['304px', '324px', '478px', null, '558px'],
          maxHeight: ['229px', '281px', '355px', null, '420px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Combine Funding sources Illustration",
            src: "/static/images/become-a-host/combineFunding-xs.png",
            display: [null, 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Combine Funding sources Illustration",
            src: "/static/images/become-a-host/combineFunding-sm.png",
            display: ['none', 'block', 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Combine Funding sources Illustration",
            src: "/static/images/become-a-host/combineFunding-md.png",
            display: ['none', null, 'block', null, 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "Combine Funding sources Illustration",
            src: "/static/images/become-a-host/combineFunding-lg.png",
            display: ['none', null, null, null, 'block']
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: ['304px', '288px', '437px', null, '408px'],
          mr: [null, '24px', '41px', null, '134px'],
          textAlign: ['center', 'left'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
            fontSize: ['24px', null, null, null, '30px'],
            lineHeight: ['32px', null, null, null, '40px'],
            letterSpacing: "-0.008em",
            color: "primary.900",
            display: ['none', 'block'],
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.combineFunding",
              defaultMessage: [{
                "type": 0,
                "value": "Combine "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " funding sources"
              }],
              values: {
                lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: ['16px', null, null, null, '18px'],
            lineHeight: ['24px', null, null, null, '26px'],
            color: "black.800",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.combineFunding.description",
              defaultMessage: [{
                "type": 0,
                "value": "Collectives can seek support through diverse channels while tracking everything in one budget. Crowdfunding, credit card payments, and event ticket sales are built-in, and you can easily credit funds coming in by any other means to the right budget."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        mt: ['35px', '48px', '58px', null, '94px'],
        display: "flex",
        flexDirection: ['column', 'row'],
        alignItems: "center",
        position: "relative",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          width: ['77px', '91px', '106px', null, '136px'],
          height: ['31px', '37px', '43px', null, '55px'],
          position: "absolute",
          left: ['49px', '380px', '550px', null, '660px'],
          bottom: "0",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
            src: "/static/images/become-a-host/indepthReportBird1.png",
            alt: "Bird illustration",
            width: 136,
            height: 55
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          width: ['78px', '93px', '108px', null, '138px'],
          height: ['38px', '47px', '53px', null, '68px'],
          position: "absolute",
          right: ['42px', 0, '98px', null, 0],
          bottom: "0",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
            src: "/static/images/become-a-host/indepthReportBird2.png",
            alt: "Bird illustration",
            width: 138,
            height: 68
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "304px",
          mb: "24px",
          display: [null, 'none'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            textAlign: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.inDepthReports",
              defaultMessage: [{
                "type": 0,
                "value": "In-depth reports"
              }]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mb: ['24px', 0],
          overflow: "auto",
          maxWidth: ['304px', '324px', '478px', null, '558px'],
          maxHeight: ['229px', '281px', '355px', null, '420px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "In-depth Reports Illustration",
            src: "/static/images/become-a-host/indepth-report-xs.png",
            display: [null, 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "In-depth Reports Illustration",
            src: "/static/images/become-a-host/indepth-report-sm.png",
            display: ['none', 'block', 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "In-depth Reports Illustration",
            src: "/static/images/become-a-host/indepth-report-md.png",
            display: ['none', null, 'block', null, 'none']
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScreenShotWrapper, {
            alt: "In-depth Reports Illustration",
            src: "/static/images/become-a-host/indepth-report-lg.png",
            display: ['none', null, null, null, 'block']
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: ['304px', '288px', '437px', null, '408px'],
          ml: [null, '24px', '41px', null, '96px'],
          textAlign: ['center', 'left'],
          mb: ['50px', null, 0],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H2, {
            fontSize: ['24px', null, null, null, '30px'],
            lineHeight: ['32px', null, null, null, '40px'],
            letterSpacing: "-0.008em",
            color: "primary.900",
            display: ['none', 'block'],
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.inDepthReports",
              defaultMessage: [{
                "type": 0,
                "value": "In-depth reports"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: ['16px', null, null, null, '18px'],
            lineHeight: ['24px', null, null, null, '26px'],
            color: "black.800",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "becomeAHost.benefit.inDepthReports.description",
              defaultMessage: [{
                "type": 0,
                "value": "No need to spend time creating reports for funders—it’s all documented automatically and transparently as you go. In addition, you'll receive a consolidated report every month with all transactions and documentation included. Your accountant will thank you!"
              }]
            })
          })]
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
;// CONCATENATED MODULE: ./components/become-a-host/WhoAreFiscalHostsSection.js












var IconWrapper = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "WhoAreFiscalHostsSection__IconWrapper",
  componentId: "sc-si34bf-0"
})(["display:flex;justify-content:center;align-items:center;width:80px;height:80px;@media screen and (min-width:40em){width:88px;height:88px;}@media screen and (min-width:88em){width:99px;height:104px;}"]);
var features = [{
  id: 'nonprofits'
}, {
  id: 'networks'
}, {
  id: 'grantMakers'
}, {
  id: 'entity'
}, {
  id: 'fiscalSponsorshipService'
}];
var WhoAreFiscalHostsSection_messages = (0,lib.defineMessages)({
  'becomeAHost.networks': {
    id: "becomeAHost.networks",
    defaultMessage: [{
      "type": 0,
      "value": "Networks of groups or chapters"
    }]
  },
  'becomeAHost.networks.description': {
    id: "becomeAHost.networks.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who want to enable local fundraising while operating a single common legal entity, such as meetups and social movements."
    }]
  },
  'becomeAHost.nonprofits': {
    id: "becomeAHost.nonprofits",
    defaultMessage: [{
      "type": 0,
      "value": "Nonprofits and charities"
    }]
  },
  'becomeAHost.nonprofits.description': {
    id: "becomeAHost.nonprofits.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who want to enable unincorporated projects that further their mission areas to receive grants and donations under their umbrella."
    }]
  },
  'becomeAHost.entity': {
    id: "becomeAHost.entity",
    defaultMessage: [{
      "type": 0,
      "value": "Any entity with a bank account"
    }]
  },
  'becomeAHost.entity.description': {
    id: "becomeAHost.entity.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who runs multiple projects and wants to use the Open Collective platform features for transparent budget tracking, combining revenue streams, expense payment management, and community engagement."
    }]
  },
  'becomeAHost.grantMakers': {
    id: "becomeAHost.grantMakers",
    defaultMessage: [{
      "type": 0,
      "value": "Grantmakers and funding institutions"
    }]
  },
  'becomeAHost.grantMakers.description': {
    id: "becomeAHost.grantMakers.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who want to lower the barriers for unincorporated projects and informal initiatives, while ensuring robust oversight."
    }]
  },
  'becomeAHost.fiscalSponsorshipService': {
    id: "becomeAHost.fiscalSponsorshipService",
    defaultMessage: [{
      "type": 0,
      "value": "Fiscal sponsorship service providers"
    }]
  },
  'becomeAHost.fiscalSponsorshipService.description': {
    id: "becomeAHost.fiscalSponsorshipService.description",
    defaultMessage: [{
      "type": 0,
      "value": "In their chosen geography or industry area."
    }]
  }
});

var WhoAreFiscalHosts = function WhoAreFiscalHosts() {
  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    alignItems: "center",
    px: "16px",
    mt: "80px",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      flexDirection: ['column-reverse', 'row'],
      justifyContent: "center",
      alignItems: "center",
      textAlign: ['center', 'left'],
      mb: [4, null, null, null, '69px'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '392px', '396px', null, '448px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "becomeAHost.whoAreFiscalHosts",
            defaultMessage: [{
              "type": 0,
              "value": "Who are Fiscal Hosts?"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        ml: [0, '17px', '86px', null, '77px'],
        mb: "23px",
        width: ['222.74px', null, null, null, '330px'],
        height: ['142.48px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          src: "/static/images/become-a-host/whoAreFiscalHost-illustration.png",
          alt: "Who are Fiscal Hosts illustration",
          width: 222.73,
          height: 142.33
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      flexWrap: "wrap",
      justifyContent: ['space-between', null, null, null, 'center'],
      width: [null, '648px', '704px', null, '1150px'],
      flexDirection: ['column', 'row'],
      children: features.map(function (feature) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          my: 3,
          mx: [null, '12px', 3, null, 4],
          ml: [null, feature.id === 'entity' || feature.id === 'networks' ? '12px' : 0, feature.id === 'entity' || feature.id === 'networks' ? '46px' : 0, null, feature.id === 'grantMakers' || feature.id === 'fiscalSponsorshipService' || feature.id === 'networks' ? '103px' : 0],
          mr: [null, feature.id === 'nonprofits' || feature.id === 'grantMakers' ? '12px' : 0, feature.id === 'nonprofits' || feature.id === 'grantMakers' ? '46px' : 0, null, 0],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(IconWrapper, {
            my: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
              src: "/static/images/become-a-host/".concat(feature.id, "-illustration.png"),
              alt: "".concat(feature.id, " illustration"),
              width: 1150,
              height: 1150
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: ['288px', '306px', null, null, '297px'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
              color: "black.800",
              fontSize: "20px",
              lineHeight: "28px",
              letterSpacing: "-0.008em",
              children: intl.formatMessage(WhoAreFiscalHostsSection_messages["becomeAHost.".concat(feature.id)])
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mt: 2,
            width: ['288px', '306px', null, null, '289px'],
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Text.P, {
              color: "black.700",
              fontSize: ['16px', '18px'],
              lineHeight: ['24px', '26px'],
              fontWeight: "400",
              letterSpacing: "normal",
              children: [intl.formatMessage(WhoAreFiscalHostsSection_messages["becomeAHost.".concat(feature.id, ".description")]), " ", feature.id === 'fiscalSponsorshipService' && intl.formatMessage({
                id: "Wd/w9L",
                defaultMessage: [{
                  "type": 0,
                  "value": "Learn more about "
                }, {
                  "type": 8,
                  "value": "fiscalHostingLink",
                  "children": [{
                    "type": 0,
                    "value": "fiscal hosting"
                  }]
                }, {
                  "type": 0,
                  "value": "."
                }]
              }, {
                fiscalHostingLink: (0,I18nFormatters/* getI18nLink */.fw)({
                  as: Link/* default */.Z,
                  href: '/fiscal-hosting'
                })
              })]
            })
          })]
        }, feature.id);
      })
    })]
  });
};

WhoAreFiscalHosts.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhoAreFiscalHosts"
};
/* harmony default export */ var WhoAreFiscalHostsSection = (WhoAreFiscalHosts);
// EXTERNAL MODULE: ./components/collectives/sections/JoinUs.js
var JoinUs = __webpack_require__(78355);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
;// CONCATENATED MODULE: ./pages/become-a-host.js










var become_a_host_messages = (0,lib.defineMessages)({
  defaultTitle: {
    id: "OC.tagline",
    defaultMessage: [{
      "type": 0,
      "value": "Make your community sustainable. Collect and spend money transparently."
    }]
  }
});

var BecomeAHost = function BecomeAHost() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, {
    description: formatMessage(become_a_host_messages.defaultTitle),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FiscalSponsorshipSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(WhoAreFiscalHostsSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(WhatAreTheBenefitsSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(CaseStudiesSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(JoinUs/* default */.ZP, {
      page: "becomeAHost"
    })]
  });
};

BecomeAHost.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BecomeAHost"
};
/* harmony default export */ var become_a_host = (BecomeAHost);

/***/ }),

/***/ 34725:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/become-a-host",
      function () {
        return __webpack_require__(78482);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,146,5813,4842,9870,9774,2888,179], function() { return __webpack_exec__(34725); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=become-a-host-52df418ace6cfc3d.js.map