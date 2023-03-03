"use strict";
exports.id = 5582;
exports.ids = [5582];
exports.modules = {

/***/ 1259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({
  displayName: "Body__Main",
  componentId: "sc-1ucxino-0"
})(["border-top:1px solid rgb(232,233,235);"]);
class Body extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Main, {
      children: children
    });
  }

}
Body.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Body",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 11333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_fa_brands_Github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45933);
/* harmony import */ var _styled_icons_fa_brands_Github__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Github__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_fa_brands_Mastodon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3592);
/* harmony import */ var _styled_icons_fa_brands_Mastodon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Mastodon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_fa_brands_Slack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64374);
/* harmony import */ var _styled_icons_fa_brands_Slack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Slack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14638);
/* harmony import */ var _styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_icons_octicons_Mail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80924);
/* harmony import */ var _styled_icons_octicons_Mail__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_octicons_Mail__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_constants_locales__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28984);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62131);
/* harmony import */ var _icons_TranslateIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(58715);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56562);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(92129);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(95134);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51082);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66943);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_20__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_20__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







 // import { Blog } from '@styled-icons/icomoon/Blog';


















const SocialLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "Footer__SocialLink",
  componentId: "sc-41iijx-0"
})(["align-items:center;border:1px solid #dcdee0;border-radius:50%;display:flex;height:36px;justify-content:center;width:36px;color:#76777a;opacity:1;&:hover,&:focus{opacity:0.8;}"]);
const MenuLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z).withConfig({
  displayName: "Footer__MenuLink",
  componentId: "sc-41iijx-1"
})(["color:#4e5052;display:block;font-size:14px;line-height:17px;font-weight:500;letter-spacing:-0.1px;margin:0;padding:0;"]);
const FlexList = styled_components__WEBPACK_IMPORTED_MODULE_1___default().ul.withConfig({
  displayName: "Footer__FlexList",
  componentId: "sc-41iijx-2"
})([], ..._Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box.componentStyle.rules */ .xu.componentStyle.rules, ..._Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex.componentStyle.rules */ .kC.componentStyle.rules);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  platform: {
    id: "platform",
    defaultMessage: [{
      "type": 0,
      "value": "Platform"
    }]
  },
  'platform.explainerVideo': {
    id: "platform.explainerVideo",
    defaultMessage: [{
      "type": 0,
      "value": "Explainer video"
    }]
  },
  'platform.howItWorks': {
    id: "howItWorks",
    defaultMessage: [{
      "type": 0,
      "value": "How it works"
    }]
  },
  'platform.useCases': {
    id: "platform.useCases",
    defaultMessage: [{
      "type": 0,
      "value": "Use cases"
    }]
  },
  'platform.signup': {
    id: "platform.signup",
    defaultMessage: [{
      "type": 0,
      "value": "Sign up"
    }]
  },
  'platform.login': {
    id: "platform.login",
    defaultMessage: [{
      "type": 0,
      "value": "Log in"
    }]
  },
  join: {
    id: "join",
    defaultMessage: [{
      "type": 0,
      "value": "Join"
    }]
  },
  'join.createACollective': {
    id: "home.create",
    defaultMessage: [{
      "type": 0,
      "value": "Create a Collective"
    }]
  },
  'join.aboutFiscalHosting': {
    id: "join.aboutFiscalHosting",
    defaultMessage: [{
      "type": 0,
      "value": "About Fiscal Hosting"
    }]
  },
  'join.discover': {
    id: "menu.discover",
    defaultMessage: [{
      "type": 0,
      "value": "Discover"
    }]
  },
  'join.findAFiscalHost': {
    id: "join.findAFiscalHost",
    defaultMessage: [{
      "type": 0,
      "value": "Find a Fiscal Host"
    }]
  },
  'join.becomeASponsor': {
    id: "join.becomeASponsor",
    defaultMessage: [{
      "type": 0,
      "value": "Become a sponsor"
    }]
  },
  'join.becomeAHost': {
    id: "join.becomeAHost",
    defaultMessage: [{
      "type": 0,
      "value": "Become a Host"
    }]
  },
  community: {
    id: "community",
    defaultMessage: [{
      "type": 0,
      "value": "Community"
    }]
  },
  'community.openSource': {
    id: "community.openSource",
    defaultMessage: [{
      "type": 0,
      "value": "Open Source"
    }]
  },
  'community.docsAndHelp': {
    id: "menu.docs",
    defaultMessage: [{
      "type": 0,
      "value": "Docs & Help"
    }]
  },
  'community.support': {
    id: "community.support",
    defaultMessage: [{
      "type": 0,
      "value": "Support"
    }]
  },
  company: {
    id: "company",
    defaultMessage: [{
      "type": 0,
      "value": "Company"
    }]
  },
  'company.about': {
    id: "collective.about.title",
    defaultMessage: [{
      "type": 0,
      "value": "About"
    }]
  },
  'company.blog': {
    id: "company.blog",
    defaultMessage: [{
      "type": 0,
      "value": "Blog"
    }]
  },
  'company.hiring': {
    id: "company.hiring",
    defaultMessage: [{
      "type": 0,
      "value": "Hiring"
    }]
  },
  'company.e2c': {
    id: "e2c.title",
    defaultMessage: [{
      "type": 0,
      "value": "Exit to Community #E2C"
    }]
  },
  'company.termsOfService': {
    id: "company.termsOfService",
    defaultMessage: [{
      "type": 0,
      "value": "Terms of service"
    }]
  },
  'company.privacyPolicy': {
    id: "company.privacyPolicy",
    defaultMessage: [{
      "type": 0,
      "value": "Privacy Policy"
    }]
  },
  'company.securityPolicy': {
    id: "company.securityPolicy",
    defaultMessage: [{
      "type": 0,
      "value": "Security Policy"
    }]
  }
});
const navigation = {
  platform: {
    explainerVideo: 'https://www.youtube.com/watch?v=IBU5fSILAe8',
    howItWorks: '/how-it-works',
    useCases: 'https://blog.opencollective.com/tag/case-studies/',
    signup: '/create-account',
    login: '/signin'
  },
  join: {
    createACollective: '/create',
    aboutFiscalHosting: '/fiscal-hosting',
    discover: '/search',
    findAFiscalHost: '/search?isHost=true',
    becomeASponsor: '/become-a-sponsor',
    becomeAHost: '/become-a-host'
  },
  community: {
    openSource: 'https://github.com/opencollective/opencollective/issues',
    Slack: 'https://slack.opencollective.com',
    docsAndHelp: '/help'
  },
  company: {
    about: 'https://docs.opencollective.com/help/about/introduction',
    blog: 'https://blog.opencollective.com/',
    hiring: '/hiring',
    e2c: '/e2c',
    termsOfService: '/tos',
    privacyPolicy: '/privacypolicy',
    securityPolicy: 'https://docs.opencollective.com/help/product/security'
  }
};

const switchLanguage = key => {
  document.cookie = `language=${key};path=/`;
  window.location.reload();
  window.scrollTo(0, 0);
};

const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().footer.attrs({
  id: 'footer'
}).withConfig({
  displayName: "Footer__FooterContainer",
  componentId: "sc-41iijx-3"
})(["display:flex;justify-content:center;background:white;border-top:1px solid #e8e9eb;min-height:7.5rem;width:100%;padding:1rem;"]);

const generateLanguageOptions = () => {
  return Object.keys(_lib_constants_locales__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).map(key => {
    const language = _lib_constants_locales__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z[key];
    return {
      value: key,
      label: `${lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(`${language.name} - ${language.nativeName}`, {
        length: 23
      })} (${language.completion})`
    };
  });
};

const Footer = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.useIntl)();
  const languageOptions = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(generateLanguageOptions);
  const defaultLanguage = languageOptions.find(language => language.value === intl.locale);
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();

  const formatLanguageOptionLabel = ({
    value,
    label
  }, {
    context
  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__/* .Span */ .Dr, {
    fontSize: "12px",
    fontWeight: context === 'menu' && value === intl.locale ? 'bold' : 'normal',
    children: label
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(FooterContainer, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: ['column', null, null, null, 'row'],
      justifyContent: "space-between",
      alignItems: ['center', null, null, null, 'flex-start'],
      width: [1, '650px', null, '671px', '1280px'],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledFlex, {
        justifyContent: "space-between",
        alignItems: ['center', 'flex-start'],
        mx: ['auto', 3],
        flexDirection: ['column', 'row', null, null, 'column'],
        width: [1, null, null, null, '228px'],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          order: [null, null, null, null, '1'],
          display: "flex",
          mt: 3,
          width: [1, 1 / 3, null, null, 1],
          alignItems: ['center', 'flex-start'],
          flexDirection: "column",
          maxWidth: "300px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
            my: "12px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Image__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              src: "/static/images/opencollectivelogo-footer-n.svg",
              alt: "Open Collective",
              height: 28,
              width: 167
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
            textAlign: ['center', 'left'],
            color: "black.800",
            fontSize: "12px",
            lineHeight: "18px",
            letterSpacing: "-0.04px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
              id: "footer.OC.description",
              defaultMessage: [{
                "type": 0,
                "value": "Make your community sustainable."
              }]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          order: [null, null, null, null, '3'],
          color: "#6E747A",
          textAlign: 'left',
          mt: [4, null, null, null, 0],
          display: [null, 'none', null, null, 'block'],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
            as: "div",
            pb: 2,
            pt: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_icons_TranslateIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__/* .Span */ .Dr, {
              mx: 2,
              style: {
                verticalAlign: 'middle'
              },
              fontSize: "10px",
              fontWeight: "600",
              color: "black.800",
              lineHeight: "15px",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                id: "footer.changeLanguage",
                defaultMessage: [{
                  "type": 0,
                  "value": "change language"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
              content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
                id: "Footer.Languages.JoinEffort",
                defaultMessage: [{
                  "type": 0,
                  "value": "No technical skill is required to contribute to translations. You can join the effort on "
                }, {
                  "type": 1,
                  "value": "crowdinLink"
                }, {
                  "type": 0,
                  "value": " 🌐"
                }],
                values: {
                  crowdinLink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    href: "https://crowdin.com/project/opencollective",
                    openInNewTab: true,
                    children: "Crowdin"
                  })
                }
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__.InfoCircle, {
                size: 16
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            width: "230px",
            my: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
              inputId: "language-options",
              options: languageOptions,
              onChange: ({
                value
              }) => switchLanguage(value),
              defaultValue: defaultLanguage,
              borderRadius: "10px",
              menuPlacement: "auto",
              width: 1,
              formatOptionLabel: formatLanguageOptionLabel
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 1,
          my: 4,
          order: ['2', '3', null, null, '2'],
          maxWidth: "230px",
          flexWrap: "wrap",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(SocialLink, {
            href: "https://twitter.com/opencollect",
            rel: "me",
            "aria-label": "Open Collective Twitter link",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_7__.Twitter, {
              size: 16
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(SocialLink, {
            href: "https://mastodon.opencollective.com/@opencollective",
            rel: "me",
            "aria-label": "Open Collective Mastodon link",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_fa_brands_Mastodon__WEBPACK_IMPORTED_MODULE_5__.Mastodon, {
              size: 16
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(SocialLink, {
            href: "https://github.com/opencollective",
            rel: "me",
            "aria-label": "Open Collective Github link",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_fa_brands_Github__WEBPACK_IMPORTED_MODULE_4__.Github, {
              size: 16
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(SocialLink, {
            href: "https://slack.opencollective.com",
            "aria-label": "Open Collective Slack link",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_fa_brands_Slack__WEBPACK_IMPORTED_MODULE_6__.Slack, {
              size: 16
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(SocialLink, {
            as: _Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
            href: "/contact",
            "aria-label": "Contact Open Collective",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_octicons_Mail__WEBPACK_IMPORTED_MODULE_8__.Mail, {
              size: 16
            })
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
        width: [1, null, null, null, '804px'],
        as: "nav",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: 3,
        mx: [null, 3],
        flex: ['1 1 auto', null, null, null, 'none'],
        children: Object.keys(navigation).map(key => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          width: [0.5, 0.25],
          mb: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
            textAlign: ['center', 'left'],
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "16px",
            color: "black.800",
            letterSpacing: "0.8px",
            textTransform: "uppercase",
            mb: 3,
            children: intl.formatMessage(messages[key])
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(FlexList, {
            justifyContent: "center",
            flexDirection: "column",
            pl: 0,
            pr: 2,
            children: Object.keys(navigation[key]).map(item => !LoggedInUser || LoggedInUser && !(item === 'signup' || item === 'login') ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_ListItem__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              textAlign: ['center', 'left'],
              mb: 2,
              children: navigation[key][item][0] === '/' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                href: navigation[key][item],
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(MenuLink, {
                  as: _Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                  children: messages[`${key}.${item}`] ? intl.formatMessage(messages[`${key}.${item}`]) : item
                })
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(MenuLink, {
                href: navigation[key][item],
                children: messages[`${key}.${item}`] ? intl.formatMessage(messages[`${key}.${item}`]) : item
              })
            }, item) : null)
          })]
        }, key))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        width: 1,
        color: "#6E747A",
        textAlign: ['center', 'left'],
        mt: 3,
        mx: 3,
        display: ['none', 'block', null, null, 'none'],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
          as: "div",
          pb: 2,
          pt: 2,
          textTransform: "uppercase",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_icons_TranslateIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__/* .Span */ .Dr, {
            mx: 2,
            style: {
              verticalAlign: 'middle'
            },
            fontSize: "10px",
            fontWeight: "600",
            color: "black.800",
            lineHeight: "15px",
            letterSpacing: "0.8px",
            textTransform: "uppercase",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
              id: "footer.changeLanguage",
              defaultMessage: [{
                "type": 0,
                "value": "change language"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
              id: "Footer.Languages.JoinEffort",
              defaultMessage: [{
                "type": 0,
                "value": "No technical skill is required to contribute to translations. You can join the effort on "
              }, {
                "type": 1,
                "value": "crowdinLink"
              }, {
                "type": 0,
                "value": " 🌐"
              }],
              values: {
                crowdinLink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                  href: "https://crowdin.com/project/opencollective",
                  openInNewTab: true,
                  children: "Crowdin"
                })
              }
            }),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__.InfoCircle, {
              size: 16
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          width: ['230px'],
          my: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
            inputId: "language-switcher",
            "data-cy": "language-switcher",
            options: languageOptions,
            onChange: ({
              value
            }) => switchLanguage(value),
            defaultValue: defaultLanguage,
            menuPlacement: "auto",
            formatOptionLabel: formatLanguageOptionLabel
          })
        })]
      })]
    })
  });
};

Footer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Footer"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC).withConfig({
  displayName: "Footer___StyledFlex",
  componentId: "sc-41iijx-4"
})(["max-width:1300px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tO": () => (/* binding */ makeStyledSelect)
/* harmony export */ });
/* unused harmony exports customComponents, searchableCustomComponents */
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45284);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84091);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(173);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71792);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);



const _excluded = ["innerProps"],
      _excluded2 = ["innerProps"],
      _excluded3 = ["children", "removeProps"],
      _excluded4 = ["children"],
      _excluded5 = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const Messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  loading: {
    id: "Select.Loading",
    defaultMessage: [{
      "type": 0,
      "value": "Loading..."
    }]
  },
  noOptions: {
    id: "Select.NoOptions",
    defaultMessage: [{
      "type": 0,
      "value": "Nothing found"
    }]
  },
  placeholder: {
    id: "Select.Placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "No selection"
    }]
  }
});
/* eslint-disable react/prop-types */

const Option = _ref => {
  let {
    innerProps
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_select__WEBPACK_IMPORTED_MODULE_7__.components.Option, _objectSpread(_objectSpread({}, props), {}, {
    innerProps: _objectSpread(_objectSpread({}, innerProps), {}, {
      'data-cy': 'select-option',
      title: props.data['title']
    })
  }));
};

const SelectContainer = _ref2 => {
  let {
    innerProps
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_select__WEBPACK_IMPORTED_MODULE_7__.components.SelectContainer, _objectSpread(_objectSpread({}, props), {}, {
    innerProps: _objectSpread(_objectSpread({}, innerProps), {}, {
      'data-cy': props.selectProps['data-cy'] || 'select'
    })
  }));
};

const MultiValue = _ref3 => {
  let {
    children,
    removeProps
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded3);

  let title;

  if (typeof children === 'string') {
    title = children;
    children = lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(children, {
      length: 32
    });
  }

  if (props.selectProps.useCompactMode) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      m: "4px",
      variant: "rounded",
      maxHeight: "24px",
      closeButtonProps: removeProps,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        maxWidth: 16,
        overflow: "hidden",
        title: props.data.label || title,
        children: children
      })
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      m: "4px",
      variant: "rounded-right",
      maxHeight: "none",
      closeButtonProps: removeProps,
      title: title,
      children: children
    });
  }
};

const ValueContainer = _ref4 => {
  let {
    children
  } = _ref4,
      rest = _objectWithoutProperties(_ref4, _excluded4);

  const selectedCount = rest.getValue().length;
  const truncationThreshold = rest.selectProps['truncationThreshold'] || 3;
  const isTruncate = selectedCount > truncationThreshold;
  let firstChild = [];
  let elementNames;

  if (isTruncate) {
    firstChild = [children[0][0], children[1]];
    elementNames = children[0].slice(1).map(child => child.props.data.label).join(', ');
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_select__WEBPACK_IMPORTED_MODULE_7__.components.ValueContainer, _objectSpread(_objectSpread({}, rest), {}, {
    children: [!isTruncate ? children : firstChild, isTruncate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
      title: elementNames,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("u", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "vpMxUJ",
          defaultMessage: [{
            "type": 0,
            "value": "and "
          }, {
            "type": 1,
            "value": "selectedCount"
          }, {
            "type": 0,
            "value": " others"
          }],
          values: {
            selectedCount: selectedCount - 1
          }
        })
      })
    })]
  }));
};
/* eslint-enable react/prop-types */


const STYLES_DISPLAY_NONE = {
  display: 'none'
};
/**
 * Override the default "Caret Down" indicator to use a search icon instead
 */

const DropdownSearchIndicator = props => {
  return props.isDisabled ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_select__WEBPACK_IMPORTED_MODULE_7__.components.DropdownIndicator, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_SearchIcon__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      size: 16,
      fill: "#aaaaaa"
    })
  }));
};

const GroupHeading = _ref5 => {
  let {
    children
  } = _ref5,
      props = _objectWithoutProperties(_ref5, _excluded5);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_select__WEBPACK_IMPORTED_MODULE_7__.components.GroupHeading, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      justifyContent: "space-between",
      alignItems: "center",
      mr: 2,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.P, {
        fontWeight: "600",
        fontSize: "9px",
        lineHeight: "14px",
        textTransform: "uppercase",
        letterSpacing: "0.6px",
        whiteSpace: "nowrap",
        pr: 3,
        children: children
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        flex: "1",
        borderStyle: "solid",
        borderColor: "black.300"
      })]
    })
  }));
};
/**
 * A map to override the default components of react-select
 */


const customComponents = {
  SelectContainer,
  Option,
  MultiValue,
  GroupHeading,
  ValueContainer
};
const searchableCustomComponents = _objectSpread(_objectSpread({}, customComponents), {}, {
  DropdownIndicator: DropdownSearchIndicator
});

const getComponents = (components, useSearchIcon) => {
  const baseComponents = useSearchIcon ? searchableCustomComponents : customComponents;

  if (!components) {
    return baseComponents;
  } else {
    return lodash_omitBy__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread(_objectSpread({}, baseComponents), components), (lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default()));
  }
};
/**
 * Binds our custom theme and wordings to a regular `react-select`'s `Select`.
 * See https://react-select.com for more documentation.
 */


const makeStyledSelect = SelectComponent => styled_components__WEBPACK_IMPORTED_MODULE_8___default()(SelectComponent).attrs(({
  theme,
  intl,
  placeholder,
  disabled,
  inputId,
  instanceId,
  isDisabled,
  useSearchIcon,
  hideDropdownIndicator,
  hideMenu,
  error,
  styles,
  components,
  isSearchable,
  menuPortalTarget,
  selectTheme,
  noOptionsMessage = () => intl.formatMessage(Messages.noOptions),
  options
}) => {
  isSearchable = isSearchable ?? options?.length > 8; // If a StyledSelect is rendered within a modal, make sure we use the modal as the portal target

  const modalRef = react__WEBPACK_IMPORTED_MODULE_3___default().useContext(_StyledModal__WEBPACK_IMPORTED_MODULE_14__/* .ModalReferenceContext */ .L8);
  return {
    isSearchable,
    menuPortalTarget: menuPortalTarget === null || typeof document === 'undefined' ? undefined : modalRef?.current || document.body,
    isDisabled: disabled || isDisabled,
    placeholder: placeholder || intl.formatMessage(Messages.placeholder),
    loadingMessage: () => intl.formatMessage(Messages.loading),
    noOptionsMessage,
    components: getComponents(components, useSearchIcon),
    instanceId: instanceId ? instanceId : inputId,
    theme: selectTheme,
    styles: {
      control: (baseStyles, state) => {
        const customStyles = {
          borderColor: theme.colors.black[300]
        };

        if (error) {
          customStyles.borderColor = theme.colors.red[500];
          customStyles['&:hover'] = {
            borderColor: theme.colors.red[300]
          };
        } else if (!state.isFocused) {
          customStyles['&:hover'] = {
            borderColor: theme.colors.primary[300]
          };
        } else if (state.isDisabled) {
          customStyles.boxShadow = 'none';
        } else {
          customStyles.borderColor = theme.colors.primary[500];
          customStyles.boxShadow = `inset 0px 2px 2px ${theme.colors.primary[50]}`;
        }

        if (isSearchable !== false) {
          customStyles.cursor = 'text';
        } else {
          customStyles.cursor = 'pointer';
        }

        if (typeof styles?.control === 'function') {
          return styles.control(_objectSpread(_objectSpread({}, baseStyles), customStyles), state);
        } else {
          return _objectSpread(_objectSpread(_objectSpread({}, baseStyles), customStyles), styles?.control);
        }
      },
      option: (baseStyles, state) => {
        const customStyles = {
          cursor: 'pointer'
        };

        if (state.data.__background__) {
          // Ability to force background by setting a special option prop
          customStyles.background = state.data.__background__;
        } else if (state.isSelected) {
          customStyles.backgroundColor = theme.colors.primary[200];
          customStyles.color = undefined;
        } else if (state.isFocused) {
          customStyles.backgroundColor = theme.colors.primary[100];
        } else {
          customStyles['&:hover'] = {
            backgroundColor: theme.colors.primary[100]
          };
        }

        return _objectSpread(_objectSpread(_objectSpread({}, baseStyles), customStyles), styles?.option);
      },
      singleValue: baseStyles => _objectSpread(_objectSpread({}, baseStyles), {}, {
        width: '100%'
      }),
      menu: baseStyles => {
        return hideMenu ? STYLES_DISPLAY_NONE : _objectSpread(_objectSpread(_objectSpread({}, baseStyles), styles?.menu), {}, {
          overflow: 'hidden',
          // for children border-radius to apply
          zIndex: 10
        });
      },
      menuList: baseStyles => _objectSpread(_objectSpread(_objectSpread({}, baseStyles), styles?.menuList), {}, {
        paddingTop: 0,
        paddingBottom: 0
      }),
      indicatorSeparator: () => ({
        display: 'none'
      }),
      clearIndicator: baseStyles => _objectSpread(_objectSpread({}, baseStyles), {}, {
        cursor: 'pointer'
      }),
      dropdownIndicator: baseStyles => {
        if (hideDropdownIndicator) {
          return STYLES_DISPLAY_NONE;
        } else if (styles?.dropdownIndicator) {
          return _objectSpread(_objectSpread({}, baseStyles), styles.dropdownIndicator);
        } else {
          return baseStyles;
        }
      },
      menuPortal: baseStyles => _objectSpread(_objectSpread({}, baseStyles), {}, {
        zIndex: 99999
      })
    }
  };
}).withConfig({
  displayName: "StyledSelect__makeStyledSelect",
  componentId: "sc-1gm0irv-0"
})(["", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_9__.typography, styled_system__WEBPACK_IMPORTED_MODULE_9__.layout, styled_system__WEBPACK_IMPORTED_MODULE_9__.space);
const StyledSelect = makeStyledSelect((react_select__WEBPACK_IMPORTED_MODULE_7___default()));
StyledSelect['propTypes'] = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_5___default().typography)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_5___default().layout)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_5___default().space)), {}, {
  /** The id of the search input */
  inputId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),

  /** Define an id prefix for the select components e.g., {your-id}-value */
  instanceId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /** Placeholder for the select value */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /** Whether the component is disabled */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /** Alias for `disabled` */
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /** Rendered when there's no option to show */
  noOptionsMessage: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /** If true, a search icon will be used instead of the default caret down */
  useSearchIcon: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /** If true, DropDown indicator (caret) will not be displayed */
  hideDropdownIndicator: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /** If true, options list will not be displayed */
  hideMenu: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /** Default placement of the menu in relation to the control */
  menuPlacement: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['bottom', 'top', 'auto']),

  /** Displays a red border when truthy */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),

  /** @ignore from injectIntl */
  intl: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /** Default option */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)]),
  styles: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /** To render menu in a portal */
  menuPortalTarget: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),

  /** Compact mode for rending multiple selections correctly **/
  useCompactMode: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
});
StyledSelect['defaultProps'] = {
  fontSize: '14px',
  styles: {},
  useCompactMode: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_6__.injectIntl)(StyledSelect));

/***/ }),

/***/ 50333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16010);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const StyledSVG = styled_components__WEBPACK_IMPORTED_MODULE_1___default().svg.withConfig({
  displayName: "CustomStyledIcon__StyledSVG",
  componentId: "sc-ewc84p-0"
})(["display:inline-block;vertical-align:middle;overflow:hidden;", ";", ";", ";", ";", ";", ";"], styled_system__WEBPACK_IMPORTED_MODULE_2__.alignSelf, styled_system__WEBPACK_IMPORTED_MODULE_2__.height, styled_system__WEBPACK_IMPORTED_MODULE_2__.width, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_3__/* .cursor */ .oc, styled_system__WEBPACK_IMPORTED_MODULE_2__.verticalAlign, styled_system__WEBPACK_IMPORTED_MODULE_2__.margin);
/**
 * A simple wrapper to export custom icons as styled icons. It mostly mimics the
 * behaviour of styled-icon library, which is working on making a similar component
 * accessible directly from the library (see https://github.com/jacobwgillespie/@styled-icons/issues/477).
 * As soon as it is released, we should transition to styled-icons component
 * to ensure consistency with third-party imported icons.
 */

const CustomStyledIcon = _ref => {
  let {
    size
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledSVG, _objectSpread({
    stroke: "currentColor",
    height: size,
    width: size
  }, props));
};

CustomStyledIcon.defaultProps = {
  focusable: 'false',
  'aria-hidden': 'true',
  role: 'img',
  xmlns: 'http://www.w3.org/2000/svg'
};
CustomStyledIcon.__docgenInfo = {
  "description": "A simple wrapper to export custom icons as styled icons. It mostly mimics the\nbehaviour of styled-icon library, which is working on making a similar component\naccessible directly from the library (see https://github.com/jacobwgillespie/@styled-icons/issues/477).\nAs soon as it is released, we should transition to styled-icons component\nto ensure consistency with third-party imported icons.",
  "methods": [],
  "displayName": "CustomStyledIcon",
  "props": {
    "focusable": {
      "defaultValue": {
        "value": "'false'",
        "computed": false
      },
      "required": false
    },
    "aria-hidden": {
      "defaultValue": {
        "value": "'true'",
        "computed": false
      },
      "required": false
    },
    "role": {
      "defaultValue": {
        "value": "'img'",
        "computed": false
      },
      "required": false
    },
    "xmlns": {
      "defaultValue": {
        "value": "'http://www.w3.org/2000/svg'",
        "computed": false
      },
      "required": false
    },
    "size": {
      "description": "Size of the icon",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "cursor": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomStyledIcon);

/***/ }),

/***/ 58715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomStyledIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const TranslateIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_CustomStyledIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none"
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.37487 6.66669C3.31203 7.70835 2.37454 8.37485 2.29153 8.41636L2.2915 8.4164C2.16698 8.50022 2.02132 8.54172 1.87483 8.56288C1.625 8.56288 1.39551 8.43754 1.24984 8.22921C1.02034 7.87521 1.1245 7.41704 1.45817 7.18754C1.45959 7.18612 1.47087 7.17801 1.49105 7.16349C1.77295 6.9607 3.79191 5.50836 4.95837 3.584H1.58358C1.16692 3.584 0.833252 3.25033 0.833252 2.83367C0.833252 2.417 1.16692 2.08333 1.58358 2.08333H3.83296V0.750334C3.83296 0.333667 4.16662 0 4.58329 0C4.99996 0 5.33362 0.333667 5.33362 0.750334V2.08333L7.60487 2.08252C8.02154 2.08252 8.35521 2.41619 8.35521 2.83285C8.35521 3.24952 8.02154 3.58319 7.60487 3.58319H6.64621C6.31254 4.31235 5.87554 4.97885 5.39621 5.56235L7.20854 7.27052C7.5007 7.56269 7.52103 8.04202 7.2297 8.33335C7.0832 8.47985 6.89603 8.56286 6.6877 8.56286C6.50053 8.56286 6.31254 8.50019 6.16687 8.35452L4.37487 6.66669ZM16.5209 12.5001L19.1463 18.7501L19.1462 18.7501C19.313 19.1253 19.125 19.5623 18.7482 19.7291C18.6441 19.7706 18.561 19.7918 18.4569 19.7918C18.1647 19.7918 17.8945 19.6249 17.7692 19.3336L17.3737 18.3749H14.2902L13.8947 19.3336C13.7278 19.7079 13.2908 19.8959 12.9157 19.7291C12.5413 19.5623 12.3533 19.1253 12.5202 18.7501L15.1456 12.5001C15.3751 11.9378 16.2914 11.9378 16.5209 12.5001ZM15.8333 14.7089L14.917 16.8751H16.7496L15.8333 14.7089ZM15.0838 7.74989V7.81255L14.3335 7.06221C14.0422 6.77088 13.5628 6.77088 13.2707 7.06221C12.9793 7.35355 12.9793 7.83288 13.2707 8.12505L15.2913 10.1457C15.437 10.2914 15.625 10.3752 15.8122 10.3752C16.0205 10.3752 16.2077 10.2922 16.333 10.1457L18.3537 8.12505C18.645 7.83371 18.645 7.35438 18.3537 7.06221C18.0623 6.77088 17.583 6.77088 17.2908 7.06221L16.5625 7.81255V7.72954C16.5625 4.68746 14.0837 2.20871 11.0416 2.20871C10.625 2.20871 10.2913 2.54238 10.2913 2.95904C10.2913 3.37571 10.625 3.70937 11.0416 3.70937C13.2714 3.70856 15.0837 5.52089 15.0837 7.75L15.0838 7.74989ZM9.18779 16.8337H10.1253L10.1253 16.8336C10.542 16.8336 10.896 17.1665 10.8968 17.5831C10.8968 17.9998 10.5631 18.3335 10.1464 18.3335H9.18777C6.14568 18.3335 3.66693 15.8547 3.66693 12.8126L3.66775 12.3748L2.91741 13.1251C2.62525 13.4165 2.14591 13.4165 1.85458 13.1251C1.56325 12.833 1.56325 12.3536 1.85458 12.0623L3.87525 10.0416C4.16741 9.77062 4.66708 9.77062 4.93808 10.0416L6.95875 12.0623C7.25008 12.3545 7.25008 12.8338 6.95875 13.1251C6.81308 13.2716 6.62509 13.3546 6.43791 13.3546C6.25075 13.3546 6.06275 13.2708 5.91708 13.1251L5.16675 12.3748V12.8126C5.16675 15.0213 6.95883 16.8337 9.18779 16.8337Z",
      fill: "#4E5052"
    })
  }));
};

TranslateIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TranslateIcon"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranslateIcon);

/***/ }),

/***/ 28984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Define the languages that can be activated by users on Open Collective based
 * on https://crowdin.com/project/opencollective.
 *
 * Only languages completed with 20%+ are currently activated.
 *
 * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes for a list of language
 * codes with their native names.
 */
// Please keep English at the top, and sort other entries by `name`.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  en: {
    name: 'English',
    nativeName: 'English',
    completion: '100%'
  },
  'pt-BR': {
    name: 'Brazilian Portuguese',
    nativeName: 'Português brasileiro',
    completion: '55%'
  },
  ca: {
    name: 'Catalan',
    nativeName: 'Català',
    completion: '10%'
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文',
    completion: '34%'
  },
  cs: {
    name: 'Czech',
    nativeName: 'čeština',
    completion: '10%'
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands',
    completion: '10%'
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    completion: '61%'
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    completion: '37%'
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
    completion: '29%'
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    completion: '36%'
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
    completion: '11%'
  },
  pl: {
    name: 'Polish',
    nativeName: 'Polski',
    completion: '100%'
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
    completion: '22%'
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    completion: '38%'
  },
  'sk-SK': {
    name: 'Slovak',
    nativeName: 'Slovensky',
    completion: '88%'
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    completion: '98%'
  },
  'sv-SE': {
    name: 'Swedish',
    nativeName: 'Svenska',
    completion: '93%'
  },
  uk: {
    name: 'Ukrainian',
    nativeName: 'Українська',
    completion: '45%'
  }
});

/***/ })

};
;