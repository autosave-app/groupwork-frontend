"use strict";
exports.id = 2027;
exports.ids = [2027];
exports.modules = {

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CollectiveThemeProvider)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12154);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50529);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * A special `ThemeProvider` that plugs the custom collective theme, defined by the color
 * from `collective.settings.collectivePage.primaryColor`.
 */


class CollectiveThemeProvider extends (react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      newPrimaryColor: null
    });

    _defineProperty(this, "adjustColorContrast", color => {
      const contrast = (0,polished__WEBPACK_IMPORTED_MODULE_5__.getContrast)(color, '#fff');

      if (contrast >= 7) {
        return color;
      } else {
        const contrastDiff = (7 - contrast) / 21;
        return (0,polished__WEBPACK_IMPORTED_MODULE_5__.darken)(contrastDiff, color);
      }
    });

    _defineProperty(this, "getTheme", memoize_one__WEBPACK_IMPORTED_MODULE_4___default()(primaryColor => {
      if (!primaryColor) {
        return _lib_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z;
      } else if (!(0,validator__WEBPACK_IMPORTED_MODULE_7__.isHexColor)(primaryColor)) {
        // eslint-disable-next-line no-console
        console.warn(`Invalid custom color: ${primaryColor}`);
        return _lib_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z;
      } else {
        const adjustedPrimary = this.adjustColorContrast(primaryColor);
        const luminance = (0,polished__WEBPACK_IMPORTED_MODULE_5__.getLuminance)(adjustedPrimary); // Allow a deviation to up to 20% of the default luminance. Don't apply this to really
        // dark colors (luminance < 0.05)

        const luminanceAdjustment = luminance < 0.05 ? -0.1 : luminance / 5;

        const adjustLuminance = value => (0,polished__WEBPACK_IMPORTED_MODULE_5__.setLightness)(lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(value + luminanceAdjustment, 0, 0.97), adjustedPrimary);

        return (0,_lib_theme__WEBPACK_IMPORTED_MODULE_8__/* .generateTheme */ .I)({
          colors: _objectSpread(_objectSpread({}, _lib_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"].colors */ .Z.colors), {}, {
            primary: {
              900: adjustLuminance(0.1),
              800: adjustLuminance(0.2),
              700: adjustLuminance(0.3),
              600: adjustLuminance(0.42),
              500: adjustLuminance(0.5),
              400: adjustLuminance(0.6),
              300: adjustLuminance(0.65),
              200: adjustLuminance(0.72),
              100: adjustLuminance(0.92),
              50: adjustLuminance(0.97),
              base: primaryColor
            }
          })
        });
      }
    }));

    _defineProperty(this, "onPrimaryColorChange", lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(newPrimaryColor => {
      this.setState({
        newPrimaryColor
      });
    }, 2000));
  }

  render() {
    const {
      collective,
      children
    } = this.props;

    const primaryColor = this.state.newPrimaryColor || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, 'settings.collectivePage.primaryColor');

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
      theme: this.getTheme(primaryColor),
      children: typeof children === 'function' ? children({
        onPrimaryColorChange: this.onPrimaryColorChange
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: children
      })
    });
  }

}
CollectiveThemeProvider.__docgenInfo = {
  "description": "A special `ThemeProvider` that plugs the custom collective theme, defined by the color\nfrom `collective.settings.collectivePage.primaryColor`.",
  "methods": [{
    "name": "adjustColorContrast",
    "docblock": "Ensures that the contrast is at least 7/1, as recommended by the [W3c](https://webaim.org/articles/contrast)",
    "modifiers": [],
    "params": [{
      "name": "color"
    }],
    "returns": null,
    "description": "Ensures that the contrast is at least 7/1, as recommended by the [W3c](https://webaim.org/articles/contrast)"
  }],
  "displayName": "CollectiveThemeProvider",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "node"
        }, {
          "name": "func"
        }]
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "settings": {
            "name": "shape",
            "value": {
              "collectivePage": {
                "name": "shape",
                "value": {
                  "primaryColor": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 45222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ContributorCard)
});

// EXTERNAL MODULE: external "lodash/truncate"
var truncate_ = __webpack_require__(51858);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/constants/roles.js
var roles = __webpack_require__(98216);
// EXTERNAL MODULE: ./lib/i18n/member-role.js
var member_role = __webpack_require__(66465);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: external "@apollo/client/react/components"
var components_ = __webpack_require__(72743);
// EXTERNAL MODULE: external "@styled-icons/fa-solid/Times"
var Times_ = __webpack_require__(97881);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(66405);
// EXTERNAL MODULE: external "react-popper"
var external_react_popper_ = __webpack_require__(42932);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/withViewport.js
var withViewport = __webpack_require__(74387);
// EXTERNAL MODULE: ./components/collective-page/graphql/queries.js
var graphql_queries = __webpack_require__(71611);
// EXTERNAL MODULE: ./components/tier-page/graphql/queries.js
var tier_page_graphql_queries = __webpack_require__(44791);
// EXTERNAL MODULE: ./components/contribute-cards/constants.js
var constants = __webpack_require__(19146);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledKeyframes.js
var StyledKeyframes = __webpack_require__(29925);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/EditPublicMessagePopup.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















/** Pop-up for editing the public message */



const EditPublicMessagePopupContainer = external_styled_components_default().div.withConfig({
  displayName: "EditPublicMessagePopup__EditPublicMessagePopupContainer",
  componentId: "sc-1s1l5yw-0"
})(["position:absolute;padding:8px;border:1px solid #f3f3f3;border-radius:8px;background:white;box-shadow:0px 4px 8px rgba(20,20,20,0.16);animation:", " 0.3s ease-in-out;z-index:1;width:275px;"], StyledKeyframes/* fadeIn */.Ji);
const Arrow = external_styled_components_default()('div').withConfig({
  displayName: "EditPublicMessagePopup__Arrow",
  componentId: "sc-1s1l5yw-1"
})(["position:absolute;width:3em;height:3em;&[data-placement*='bottom']{top:0;left:0;margin-top:-0.9em;width:3em;height:1em;&::before{border-width:0 1.5em 1em 1.5em;border-color:transparent transparent #ffffff transparent;filter:drop-shadow(0px -3px 3px rgba(20,20,20,0.1));}}&[data-placement*='top']{bottom:0;left:0;margin-bottom:-0.9em;width:3em;height:1em;&::before{border-width:1em 1.5em 0 1.5em;border-color:#ffffff transparent transparent transparent;filter:drop-shadow(0px 3px 3px rgba(20,20,20,0.1));}}&[data-placement*='right']{left:0;margin-left:-0.9em;height:3em;width:1em;&::before{border-width:1.5em 1em 1.5em 0;border-color:transparent #ffffff transparent transparent;filter:drop-shadow(-4px 3px 3px rgba(20,20,20,0.1));}}&[data-placement*='left']{right:0;margin-right:-0.9em;height:3em;width:1em;&::before{border-width:1.5em 0 1.5em 1em;border-color:transparent transparent transparent #ffffff;filter:drop-shadow(4px 3px 3px rgba(20,20,20,0.1));}}&::before{content:'';margin:auto;display:block;width:0;height:0;border-style:solid;}"]);
const editPublicMessageMutation = helpers/* gqlV1 */.N
/* GraphQL */
`
  mutation EditPublicMessage($FromCollectiveId: Int!, $CollectiveId: Int!, $message: String) {
    editPublicMessage(FromCollectiveId: $FromCollectiveId, CollectiveId: $CollectiveId, message: $message) {
      id
      publicMessage
      tier {
        id
      }
      collective {
        id
        slug
      }
    }
  }
`;
const messages = (0,external_react_intl_.defineMessages)({
  publicMessagePlaceholder: {
    id: "contribute.publicMessage.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Motivate others to contribute in 140 characters :) ..."
    }]
  }
});
const PUBLIC_MESSAGE_MAX_LENGTH = 140;
const REACT_POPPER_MODIFIERS = [{
  name: 'flip',
  options: {
    fallbackPlacements: ['right', 'bottom', 'top'],
    padding: {
      right: 100
    }
  }
}];

function EditPublicMessagePopup({
  width,
  fromCollectiveId,
  collectiveId,
  cardRef,
  onClose,
  message,
  intl
}) {
  const {
    0: messageDraft,
    1: setMessageDraft
  } = (0,external_react_.useState)(message || ''); // Can't be rendered SSR

  if (true) {
    return null;
  }

  return /*#__PURE__*/(0,external_react_dom_.createPortal)( /*#__PURE__*/jsx_runtime_.jsx(components_.Mutation, {
    mutation: editPublicMessageMutation,
    children: (submitMessage, {
      loading,
      error
    }) => /*#__PURE__*/jsx_runtime_.jsx(external_react_popper_.Popper, {
      referenceElement: cardRef.current,
      placement: width < 780 ? 'bottom' : 'right',
      modifiers: REACT_POPPER_MODIFIERS,
      children: ({
        ref,
        style,
        placement,
        arrowProps
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(EditPublicMessagePopupContainer, {
        "data-cy": "EditPublicMessagePopup",
        ref: ref,
        style: style,
        "data-placement": placement,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
          justifyContent: "flex-end",
          children: /*#__PURE__*/jsx_runtime_.jsx(Times_.Times, {
            size: "1em",
            color: "#a2a2a2",
            cursor: "pointer",
            onClick: onClose
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          p: 2,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
            fontSize: "14px",
            color: "black.600",
            mb: 2,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "contribute.publicMessage",
              defaultMessage: [{
                "type": 0,
                "value": "Leave a public message (optional)"
              }]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(StyledInput/* default */.ZP, {
            name: "publicMessage",
            as: "textarea",
            px: 10,
            py: 10,
            width: "100%",
            height: 112,
            fontSize: "14px",
            style: {
              resize: 'none'
            },
            placeholder: intl.formatMessage(messages.publicMessagePlaceholder),
            value: messageDraft,
            maxLength: PUBLIC_MESSAGE_MAX_LENGTH,
            onChange: e => setMessageDraft(e.target.value),
            disabled: loading
          }), error && /*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
            color: "red.500",
            fontSize: "12px",
            mt: 2,
            children: (0,errors/* formatErrorMessage */.jN)(intl, (0,errors/* getErrorFromGraphqlException */.H1)(error))
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
            m: "0 auto",
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
              "data-cy": "EditPublicMessagePopup_SubmitButton",
              buttonSize: "small",
              fontWeight: "bold",
              px: 4,
              mt: 3,
              loading: loading,
              onClick: async () => {
                await submitMessage({
                  variables: {
                    FromCollectiveId: fromCollectiveId,
                    CollectiveId: collectiveId,
                    message: messageDraft ? messageDraft.trim() : null
                  },

                  // Update cache after mutation
                  refetchQueries({
                    data: {
                      editPublicMessage
                    }
                  }) {
                    const [member] = editPublicMessage;
                    const collectiveSlug = member.collective.slug;
                    const tier = member.tier;
                    const queries = [{
                      query: graphql_queries/* collectivePageQuery */.J,
                      variables: {
                        slug: collectiveSlug,
                        nbContributorsPerContributeCard: constants/* MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */.Dc
                      }
                    }];

                    if (tier) {
                      queries.push({
                        query: tier_page_graphql_queries/* tierPageQuery */.T,
                        variables: {
                          tierId: tier.id
                        }
                      });
                    }

                    return queries;
                  }

                });
                onClose();
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "submit",
                defaultMessage: [{
                  "type": 0,
                  "value": "Submit"
                }]
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Arrow, _objectSpread(_objectSpread({}, arrowProps), {}, {
          "data-placement": placement
        }))]
      })
    })
  }), document.body);
}

EditPublicMessagePopup.defaultProps = {
  message: ''
};
/* harmony default export */ const components_EditPublicMessagePopup = ((0,withViewport/* default */.ZP)(EditPublicMessagePopup, {
  withWidth: true
}));
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/LinkContributor.js
var LinkContributor = __webpack_require__(42388);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledTag.js
var StyledTag = __webpack_require__(36422);
;// CONCATENATED MODULE: ./components/ContributorCard.js

const _excluded = ["intl", "width", "height", "contributor", "currency", "isLoggedUser", "collectiveId", "hideTotalAmountDonated"];

function ContributorCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ContributorCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ContributorCard_ownKeys(Object(source), !0).forEach(function (key) { ContributorCard_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ContributorCard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ContributorCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















/** Main card */



const MainContainer = external_styled_components_default()(StyledCard/* default */.Z).withConfig({
  displayName: "ContributorCard__MainContainer",
  componentId: "sc-12htdks-0"
})(["a{display:block;text-decoration:none;&:hover{opacity:0.9;}}"]);
/** A container to center the logo above an horizontal bar */

const CollectiveLogoContainer = external_styled_components_default().div.withConfig({
  displayName: "ContributorCard__CollectiveLogoContainer",
  componentId: "sc-12htdks-1"
})(["display:flex;justify-content:center;margin-top:44px;border-top:1px solid #e6e8eb;"]);
const publicMessageStyle = (0,external_styled_components_.css)(["margin:4px 0px;font-size:12px;line-height:16px;color:#4e5052;text-align:center;word-break:break-word;"]);
/** User-submitted public message */

const PublicMessage = external_styled_components_default().q.withConfig({
  displayName: "ContributorCard__PublicMessage",
  componentId: "sc-12htdks-2"
})(["display:block;", ""], publicMessageStyle);
/** User-submitted public message edit button */

const PublicMessageEditButton = external_styled_components_default().button.withConfig({
  displayName: "ContributorCard__PublicMessageEditButton",
  componentId: "sc-12htdks-3"
})(["", " appearance:none;border:none;cursor:pointer;outline:0;background:transparent;"], publicMessageStyle);
/** Returns the main role for contributor */

const getMainContributorRole = contributor => {
  // Order of the if / else if makes the priority to decide which role we want to
  // show first. The priority order should be:
  // ADMIN > BACKER > *
  // Everything that comes after follower is considered same priority so we just
  // take the first role in the list.
  if (contributor.isAdmin) {
    return roles/* default.ADMIN */.Z.ADMIN;
  } else if (contributor.isCore) {
    return roles/* default.MEMBER */.Z.MEMBER;
  } else if (contributor.isBacker && contributor.totalAmountDonated < 1) {
    return roles/* default.CONTRIBUTOR */.Z.CONTRIBUTOR;
  } else if (contributor.isBacker) {
    return roles/* default.BACKER */.Z.BACKER;
  } else {
    return contributor.roles[0];
  }
};

const ContributorTag = external_styled_components_default()(StyledTag/* default */.Z).withConfig({
  displayName: "ContributorCard__ContributorTag",
  componentId: "sc-12htdks-4"
})(["margin-bottom:8px;padding:5px;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:12px;"]);
/**
 * A single contributor card, exported as a PureComponent to improve performances.
 * Accept all the props from [StyledCard](/#/Atoms?id=styledcard).
 */

const ContributorCard = _ref => {
  let {
    intl,
    width,
    height,
    contributor,
    currency,
    isLoggedUser,
    collectiveId,
    hideTotalAmountDonated
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    collectiveId: fromCollectiveId,
    publicMessage,
    description
  } = contributor;

  const truncatedPublicMessage = publicMessage && truncate_default()(publicMessage, {
    length: 50
  });

  const truncatedDescription = description && truncate_default()(description, {
    length: 30
  });

  const {
    0: showEditMessagePopup,
    1: setShowEditMessagePopup
  } = (0,external_react_.useState)(false);
  const mainContainerRef = (0,external_react_.useRef)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer, ContributorCard_objectSpread(ContributorCard_objectSpread({
    ref: mainContainerRef,
    width: width,
    height: height
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(CollectiveLogoContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        mt: -32,
        children: /*#__PURE__*/jsx_runtime_.jsx(LinkContributor/* default */.Z, {
          contributor: contributor,
          children: /*#__PURE__*/jsx_runtime_.jsx(Avatar/* ContributorAvatar */.BD, {
            contributor: contributor,
            radius: 64
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "center",
      p: 2,
      pt: 2,
      children: [/*#__PURE__*/jsx_runtime_.jsx(LinkContributor/* default */.Z, {
        contributor: contributor,
        children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          color: "black.900",
          fontSize: "14px",
          fontWeight: "500",
          textAlign: "center",
          lineHeight: "18px",
          title: contributor.name,
          children: truncate_default()(contributor.name, {
            length: 16
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
        mt: 2,
        children: [contributor.isAdmin || contributor.isCore ? /*#__PURE__*/jsx_runtime_.jsx(ContributorTag, {
          children: (0,member_role/* default */.Z)(intl, getMainContributorRole(contributor))
        }) : truncatedDescription ? /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          fontSize: "12px",
          fontWeight: "700",
          title: description,
          mb: 1,
          textAlign: "center",
          children: truncatedDescription
        }) : null, contributor.totalAmountDonated > 0 && !hideTotalAmountDonated && /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          fontSize: "12px",
          fontWeight: "700",
          textAlign: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx(FormattedMoneyAmount/* default */.Z, {
            amount: contributor.totalAmountDonated,
            currency: currency,
            precision: 0
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        mt: 1,
        children: isLoggedUser && !showEditMessagePopup ? /*#__PURE__*/jsx_runtime_.jsx(PublicMessageEditButton, {
          "data-cy": "ContributorCard_EditPublicMessageButton",
          onClick: () => {
            setShowEditMessagePopup(true);
          },
          children: truncatedPublicMessage || /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "contribute.publicMessage",
            defaultMessage: [{
              "type": 0,
              "value": "Leave a public message (optional)"
            }]
          })
        }) : truncatedPublicMessage && /*#__PURE__*/jsx_runtime_.jsx(PublicMessage, {
          title: publicMessage,
          children: truncatedPublicMessage
        })
      })]
    }), showEditMessagePopup && /*#__PURE__*/jsx_runtime_.jsx(components_EditPublicMessagePopup, {
      cardRef: mainContainerRef,
      message: publicMessage,
      onClose: () => setShowEditMessagePopup(false),
      intl: intl,
      fromCollectiveId: fromCollectiveId,
      collectiveId: collectiveId
    })]
  }));
};

ContributorCard.defaultProps = {
  width: 144,
  height: 272,
  currency: 'USD',
  hideTotalAmountDonated: false
};
ContributorCard.__docgenInfo = {
  "description": "A single contributor card, exported as a PureComponent to improve performances.\nAccept all the props from [StyledCard](/#/Atoms?id=styledcard).",
  "methods": [],
  "displayName": "ContributorCard",
  "props": {
    "width": {
      "defaultValue": {
        "value": "144",
        "computed": false
      },
      "description": "",
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
    "height": {
      "defaultValue": {
        "value": "272",
        "computed": false
      },
      "description": "",
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
    "currency": {
      "defaultValue": {
        "value": "'USD'",
        "computed": false
      },
      "description": "The currency used to show the contributions",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "hideTotalAmountDonated": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "True if you want to hide the total amount donated",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "contributor": {
      "description": "The contributor to display",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "collectiveId": {
            "name": "number",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "collectiveSlug": {
            "name": "string",
            "required": false
          },
          "isIncognito": {
            "name": "bool",
            "required": false
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.keys(CollectiveType)",
            "required": false
          },
          "totalAmountDonated": {
            "name": "number",
            "required": false
          },
          "image": {
            "name": "string",
            "required": false
          },
          "publicMessage": {
            "name": "string",
            "required": false
          },
          "roles": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "isAdmin": {
            "name": "bool",
            "required": true
          },
          "isBacker": {
            "name": "bool",
            "required": true
          },
          "isCore": {
            "name": "bool",
            "required": true
          }
        }
      },
      "required": true
    },
    "intl": {
      "description": "@ignore",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "isLoggedUser": {
      "description": "It is the logged user",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "collectiveId": {
      "description": "Collective id",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_ContributorCard = (/*#__PURE__*/external_react_default().memo((0,external_react_intl_.injectIntl)(ContributorCard)));

/***/ }),

/***/ 97866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Zx": () => (/* binding */ CONTRIBUTOR_FILTERS),
/* harmony export */   "_w": () => (/* binding */ filterContributors),
/* harmony export */   "ah": () => (/* binding */ FILTERS_LIST),
/* harmony export */   "pQ": () => (/* binding */ getContributorsFilters)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59049);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["intl", "selected", "onChange", "filters"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const CONTRIBUTOR_FILTERS = {
  ALL: 'ALL',
  CORE: 'CORE',
  FINANCIAL: 'FINANCIAL'
};
const FILTERS_LIST = Object.values(CONTRIBUTOR_FILTERS);
const Translations = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [CONTRIBUTOR_FILTERS.ALL]: {
    id: "ContributorsFilter.All",
    defaultMessage: [{
      "type": 0,
      "value": "All contributors"
    }]
  },
  [CONTRIBUTOR_FILTERS.CORE]: {
    id: "ContributorsFilter.Core",
    defaultMessage: [{
      "type": 0,
      "value": "Team"
    }]
  },
  [CONTRIBUTOR_FILTERS.FINANCIAL]: {
    id: "ContributorsFilter.Financial",
    defaultMessage: [{
      "type": 0,
      "value": "Financial contributors"
    }]
  },
  [CONTRIBUTOR_FILTERS.GITHUB]: {
    id: "ContributorsFilter.Github",
    defaultMessage: [{
      "type": 0,
      "value": "Github contributors"
    }]
  }
});
/**
 * For a given list of contributors, returns all the filters that can be applied
 * to the list.
 */

const getContributorsFilters = contributors => {
  const filters = new Set([CONTRIBUTOR_FILTERS.ALL]); // Helper to add a filter, returns true if the filters list is full because there's
  // no need to traverse the entire list if we already registered all the types

  const addFilter = filter => {
    filters.add(filter);
    return filters.length === FILTERS_LIST.length - 1;
  }; // Add filters to the set based on contributors roles


  for (const c of contributors) {
    if (c.isCore || c.isAdmin) {
      if (addFilter(CONTRIBUTOR_FILTERS.CORE)) {
        break;
      }
    } else if (c.isBacker) {
      if (addFilter(CONTRIBUTOR_FILTERS.FINANCIAL)) {
        break;
      }
    }
  } // Ensure we preserver filters order by sorting them according to the base list


  return Array.from(filters).sort((filter1, filter2) => {
    return FILTERS_LIST.indexOf(filter1) > FILTERS_LIST.indexOf(filter2) ? 1 : -1;
  });
};
/**
 * A helper to filter a contributors list by contributor roles.
 *
 * Please ensure you memoize this one properly is the cost can be pretty depending
 * on the number of contributors.
 */

const filterContributors = (contributors, filter) => {
  if (!contributors) {
    return [];
  }

  if (filter === CONTRIBUTOR_FILTERS.FINANCIAL) {
    return contributors.filter(c => c.isBacker || c.isFundraiser);
  } else if (filter === CONTRIBUTOR_FILTERS.CORE) {
    return contributors.filter(c => c.isCore || c.isAdmin);
  } else {
    // For filters not implemented yet and `ALL`, just return the contributors list
    return contributors;
  }
};
/**
 * A set of filters for contributors types. This file also exports helper functions
 * to deal with the filters, including:
 * - `getContributorsFilters`: For a given list of Contributors, returns all the filters that can be applied to the list.
 * - `filterContributors`: A helper to filter a Contributors list by contributor roles.
 */

const ContributorsFilter = _ref => {
  let {
    intl,
    selected,
    onChange,
    filters
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_StyledFilters__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread({
    filters: filters,
    getLabel: filter => intl.formatMessage(Translations[filter]),
    onChange: onChange,
    selected: selected || CONTRIBUTOR_FILTERS.ALL
  }, props));
};

ContributorsFilter.defaultProps = {
  filters: FILTERS_LIST
};
ContributorsFilter.__docgenInfo = {
  "description": "A set of filters for contributors types. This file also exports helper functions\nto deal with the filters, including:\n- `getContributorsFilters`: For a given list of Contributors, returns all the filters that can be applied to the list.\n- `filterContributors`: A helper to filter a Contributors list by contributor roles.",
  "methods": [],
  "displayName": "ContributorsFilter",
  "props": {
    "filters": {
      "defaultValue": {
        "value": "Object.values(CONTRIBUTOR_FILTERS)",
        "computed": true
      },
      "description": "An optional list of active filters",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "enum",
          "value": [{
            "value": "\"ALL\"",
            "computed": false
          }, {
            "value": "\"CORE\"",
            "computed": false
          }, {
            "value": "\"FINANCIAL\"",
            "computed": false
          }]
        }
      },
      "required": false
    },
    "selected": {
      "description": "Selected filter. Defaults to `ALL`",
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"ALL\"",
          "computed": false
        }, {
          "value": "\"CORE\"",
          "computed": false
        }, {
          "value": "\"FINANCIAL\"",
          "computed": false
        }]
      },
      "required": false
    },
    "onChange": {
      "description": "Called when another filter is selected",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "intl": {
      "description": "@ignore from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ContributorsFilter));

/***/ }),

/***/ 65320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export COLLECTIVE_CARD_MARGIN_X */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80551);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72004);
/* harmony import */ var _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74387);
/* harmony import */ var _ContributorCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45222);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29925);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["style"],
      _excluded2 = ["style"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









 // Define static dimensions


const COLLECTIVE_CARD_MARGIN_X = 32;
const COLLECTIVE_CARD_MARGIN_Y = 26;
const COLLECTIVE_CARD_WIDTH = 144;
const COLLECTIVE_CARD_HEIGHT = 220;
const COLLECTIVE_CARD_FULL_WIDTH = COLLECTIVE_CARD_WIDTH + COLLECTIVE_CARD_MARGIN_X;
/** Adds custom scrollbar for Chrome */

const StyledGridContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ContributorsGrid__StyledGridContainer",
  componentId: "sc-9lyk9m-0"
})(["", " &:not(:hover){&::-webkit-scrollbar-thumb{background:transparent;}&::-webkit-scrollbar-track{background:transparent;}}"], _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_4__/* .CustomScrollbarCSS */ .T);
/**
 * We have to define the outer container here because react-window doesn't
 * let you pass custom props to outer container.
 */

const getGridContainer = (paddingLeft, hasScroll) => {
  // eslint-disable-next-line react/prop-types
  const GridContainer = (_ref, ref) => {
    let {
      style
    } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(StyledGridContainer, _objectSpread({
      "data-cy": "contributors-grid",
      ref: ref,
      style: _objectSpread(_objectSpread({}, style), {}, {
        width: '100%',
        paddingLeft,
        overflowX: hasScroll ? 'auto' : 'hidden'
      })
    }, props));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(GridContainer);
};
/**
 * Add margin to the inner container width
 */


const GridInnerContainer = _ref2 => {
  let {
    style
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", _objectSpread({
    style: _objectSpread(_objectSpread({}, style), {}, {
      position: 'relative',
      width: style.width + COLLECTIVE_CARD_MARGIN_X
    })
  }, props));
};

/** Cards to show individual contributors */
const ContributorCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ContributorsGrid__ContributorCardContainer",
  componentId: "sc-9lyk9m-1"
})(["animation:", " 0.3s;position:absolute;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_7__/* .fadeIn */ .Ji);
/** Get an index in a single dimension array from a matrix coordinate */

const getContributorIdx = (colIndex, rowIndex, nbRows, nbCols, hasScroll) => {
  return hasScroll ? rowIndex + nbRows * colIndex : rowIndex * nbCols + colIndex;
};
/** Get the items repartition, aka the number of columns and rows. */


const getItemsRepartition = (nbItems, width, maxNbRows) => {
  const maxVisibleNbCols = Math.trunc(width / COLLECTIVE_CARD_FULL_WIDTH);
  const maxVisibleItems = maxVisibleNbCols * maxNbRows;

  if (nbItems <= maxVisibleItems) {
    // If all items can fit in the view without scrolling, we arrange the view
    // to fit them all by showing fully filled lines
    const nbCols = Math.min(maxVisibleNbCols, nbItems);
    const nbRows = Math.ceil(nbItems / maxVisibleNbCols);
    return [nbCols, nbRows];
  } else {
    // Otherwise we just place the items equally amongs maxNbRows
    const nbCols = Math.ceil(nbItems / maxNbRows);
    const nbRows = maxNbRows;
    return [nbCols, nbRows];
  }
};
/**
 * Compute the proper padding left to center the content according to max width
 */


const computePaddingLeft = (width, rowWidth, nbRows, maxWidthWhenNotFull) => {
  if (width < maxWidthWhenNotFull) {
    // No need for padding on screens small enough so they don't have padding
    return 0;
  } else if (nbRows > 1) {
    if (rowWidth <= width) {
      // If multiline and possible center contributors cards
      const cardsLeftOffset = COLLECTIVE_CARD_MARGIN_X / 2;
      return (width - rowWidth) / 2 - cardsLeftOffset;
    } else {
      // Otherwise if multiline and the grid is full, just use the full screen
      return 0;
    }
  } else {
    // Otherwise add a normal section padding on the left
    const cardsLeftOffset = COLLECTIVE_CARD_MARGIN_X / 2;
    return (width - Math.max(maxWidthWhenNotFull, rowWidth)) / 2 - cardsLeftOffset;
  }
};
/**
 * A grid to show contributors, with horizontal scroll to search them.
 */


const ContributorsGrid = ({
  contributors,
  width,
  maxNbRowsForViewports,
  viewport,
  maxWidthWhenNotFull,
  currency,
  LoggedInUser,
  collectiveId
}) => {
  const maxNbRows = maxNbRowsForViewports[viewport];
  const [nbCols, nbRows] = getItemsRepartition(contributors.length, width, maxNbRows); // Preload more items when viewport width is unknown to avoid displaying blank spaces on SSR

  const viewWidth = viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN ? width * 3 : width;
  const rowWidth = nbCols * COLLECTIVE_CARD_FULL_WIDTH + COLLECTIVE_CARD_MARGIN_X;
  const paddingLeft = computePaddingLeft(width, rowWidth, nbRows, maxWidthWhenNotFull);
  const hasScroll = rowWidth + paddingLeft > width;
  const loggedUserCollectiveId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(LoggedInUser, 'CollectiveId');
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_window__WEBPACK_IMPORTED_MODULE_2__.FixedSizeGrid, {
    columnCount: nbCols,
    columnWidth: COLLECTIVE_CARD_FULL_WIDTH,
    height: (COLLECTIVE_CARD_HEIGHT + COLLECTIVE_CARD_MARGIN_Y) * nbRows + COLLECTIVE_CARD_MARGIN_Y,
    rowCount: nbRows,
    rowHeight: COLLECTIVE_CARD_HEIGHT + COLLECTIVE_CARD_MARGIN_Y,
    width: viewWidth,
    outerElementType: getGridContainer(paddingLeft, hasScroll),
    innerElementType: GridInnerContainer,
    itemKey: ({
      columnIndex,
      rowIndex
    }) => {
      const idx = getContributorIdx(columnIndex, rowIndex, nbRows, nbCols, hasScroll);
      return idx < contributors.length ? contributors[idx].id : `empty-${idx}`;
    },
    children: ({
      columnIndex,
      rowIndex,
      style
    }) => {
      const idx = getContributorIdx(columnIndex, rowIndex, nbRows, nbCols, hasScroll);
      const contributor = contributors[idx];
      return !contributor ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ContributorCardContainer, {
        style: {
          left: style.left + COLLECTIVE_CARD_MARGIN_X,
          top: style.top + COLLECTIVE_CARD_MARGIN_Y
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_ContributorCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          "data-cy": "ContributorsGrid_ContributorCard",
          width: COLLECTIVE_CARD_WIDTH,
          height: COLLECTIVE_CARD_HEIGHT,
          contributor: contributor,
          currency: currency,
          collectiveId: collectiveId,
          isLoggedUser: contributor.collectiveId && loggedUserCollectiveId === contributor.collectiveId
        })
      }, contributor.id);
    }
  });
};

ContributorsGrid.defaultProps = {
  limit: 30,
  defaultNbRows: 1,
  maxNbRowsForViewports: {
    [_lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN]: 1,
    [_lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL]: 1,
    [_lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.SMALL */ .Pm.SMALL]: 2,
    [_lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.MEDIUM */ .Pm.MEDIUM]: 3,
    [_lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.LARGE */ .Pm.LARGE]: 3
  }
};
ContributorsGrid.__docgenInfo = {
  "description": "A grid to show contributors, with horizontal scroll to search them.",
  "methods": [],
  "displayName": "ContributorsGrid",
  "props": {
    "limit": {
      "defaultValue": {
        "value": "30",
        "computed": false
      },
      "required": false
    },
    "defaultNbRows": {
      "defaultValue": {
        "value": "1",
        "computed": false
      },
      "required": false
    },
    "maxNbRowsForViewports": {
      "defaultValue": {
        "value": "{\n  [VIEWPORTS.UNKNOWN]: 1,\n  [VIEWPORTS.XSMALL]: 1,\n  [VIEWPORTS.SMALL]: 2,\n  [VIEWPORTS.MEDIUM]: 3,\n  [VIEWPORTS.LARGE]: 3,\n}",
        "computed": false
      },
      "description": "Maximum number of rows for different viewports. Will fallback on `defaultNbRows` if not provided",
      "type": {
        "name": "shape",
        "value": {}
      },
      "required": false
    },
    "contributors": {
      "description": "The contributors",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": true
            },
            "collectiveId": {
              "name": "number",
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "currency": {
      "description": "Currency used for contributions",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "viewport": {
      "description": "@ignore from withViewport",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(VIEWPORTS)"
      },
      "required": false
    },
    "width": {
      "description": "@ignore from withViewport",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "maxWidthWhenNotFull": {
      "description": "To center the content when the grid is not full",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "shape",
        "value": {
          "CollectiveId": {
            "name": "number",
            "required": false
          }
        }
      },
      "required": false
    },
    "collectiveId": {
      "description": "Collective id",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)((0,_UserProvider__WEBPACK_IMPORTED_MODULE_8__/* .withUser */ .ns)(ContributorsGrid), {
  withWidth: true
}));

/***/ }),

/***/ 54746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72743);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_fa_solid_PencilAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64934);
/* harmony import */ var _styled_icons_fa_solid_PencilAlt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_PencilAlt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29925);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93150);
/* harmony import */ var _WarnIfUnsavedChanges__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(84906);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













/** Container used to show the description to users than can edit it */



const EditIcon = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_styled_icons_fa_solid_PencilAlt__WEBPACK_IMPORTED_MODULE_4__.PencilAlt).withConfig({
  displayName: "InlineEditField__EditIcon",
  componentId: "sc-1uragm9-0"
})(["cursor:pointer;background-color:white;border:1px solid #aaaeb3;border-radius:25%;padding:15%;color:#aaaeb3;&:hover{color:#8697ad;}"]);
/** Component used for cancel / submit buttons */

const FormButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
  displayName: "InlineEditField__FormButton",
  componentId: "sc-1uragm9-1"
})(["width:35%;font-weight:normal;text-transform:capitalize;margin:4px 8px;animation:", " 0.3s;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_11__/* .fadeIn */ .Ji);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  warnDiscardChanges: {
    id: "warning.discardUnsavedChanges",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to discard your unsaved changes?"
    }]
  }
});
/**
 * A field that can be edited inline. Relies directly on GraphQL to handle errors and
 * loading states properly. By default this component will use `TextAreaAutosize`
 * but you can override this behaviour by passing a custom `children` prop.
 */

class InlineEditField extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isEditing: false,
      draft: '',
      uploading: false
    });

    _defineProperty(this, "enableEditor", () => {
      this.setState({
        isEditing: true,
        draft: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(this.props.values, this.props.field)
      });
    });

    _defineProperty(this, "disableEditor", noWarning => {
      const {
        warnIfUnsavedChanges,
        intl,
        values,
        field
      } = this.props;

      if (!noWarning && warnIfUnsavedChanges) {
        const isDirty = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(values, field) !== this.state.draft;

        if (isDirty && !confirm(intl.formatMessage(messages.warnDiscardChanges))) {
          return;
        }
      }

      this.setState({
        isEditing: false
      });

      if (this.props.disableEditor) {
        this.props.disableEditor();
      }
    });

    _defineProperty(this, "setDraft", draft => {
      this.setState({
        draft
      });
    });
  }

  componentDidUpdate(oldProps) {
    if (oldProps.isEditing !== this.props.isEditing) {
      if (this.props.isEditing) {
        this.setState({
          isEditing: true,
          draft: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(this.props.values, this.props.field)
        });
      } else {
        this.setState({
          isEditing: false
        });
      }
    }
  }

  renderContent(field, canEdit, value, placeholder, children) {
    if (children) {
      return children({
        value,
        isEditing: false,
        enableEditor: this.enableEditor,
        disableEditor: this.disableEditor,
        setValue: this.setDraft
      });
    } else if (!value) {
      return canEdit && placeholder ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        buttonSize: "large",
        onClick: this.enableEditor,
        "data-cy": `InlineEditField-Add-${field}`,
        children: placeholder
      }) : null;
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("span", {
        children: value
      });
    }
  }

  render() {
    const {
      field,
      values,
      mutation,
      canEdit,
      prepareVariables,
      showEditIcon,
      placeholder,
      children,
      topEdit,
      mutationOptions,
      warnIfUnsavedChanges
    } = this.props;
    const {
      draft,
      isEditing
    } = this.state;
    const {
      buttonsMinWidth
    } = this.props;

    const value = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(values, field);

    const touched = draft !== value;
    const isValid = !this.props.required ? touched : touched && Boolean(draft);

    if (!isEditing) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        position: "relative",
        children: [canEdit && showEditIcon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          position: "absolute",
          top: topEdit,
          right: -5,
          zIndex: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(EditIcon, {
            size: 24,
            onClick: this.enableEditor,
            "data-cy": `InlineEditField-Trigger-${field}`
          })
        }), this.renderContent(field, canEdit, value, placeholder, children)]
      });
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_WarnIfUnsavedChanges__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        hasUnsavedChanges: warnIfUnsavedChanges && isValid,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_3__.Mutation, _objectSpread(_objectSpread({
          mutation: mutation
        }, mutationOptions), {}, {
          children: (updateField, {
            loading,
            error
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
            children: [children ? children({
              isEditing: true,
              value: draft,
              maxLength: this.props.maxLength,
              setValue: this.setDraft,
              enableEditor: this.enableEditor,
              disableEditor: this.disableEditor,
              setUploading: uploading => this.setState({
                uploading
              })
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              autoSize: true,
              autoFocus: true,
              width: 1,
              value: draft || '',
              onChange: e => this.setDraft(e.target.value),
              px: 0,
              py: 0,
              border: "0",
              letterSpacing: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
              lineHeight: "inherit",
              maxLength: this.props.maxLength,
              "data-cy": `InlineEditField-Textarea-${field}`,
              withOutline: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
              width: 1,
              children: [error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                type: "error",
                my: 2,
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "normal",
                withIcon: true,
                children: error.message
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                mt: 3,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(FormButton, {
                  "data-cy": "InlineEditField-Btn-Cancel",
                  disabled: loading,
                  minWidth: buttonsMinWidth,
                  onClick: this.disableEditor,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "form.cancel",
                    defaultMessage: [{
                      "type": 0,
                      "value": "cancel"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(FormButton, {
                  buttonStyle: "primary",
                  loading: loading,
                  disabled: !isValid || this.state.uploading,
                  "data-cy": "InlineEditField-Btn-Save",
                  minWidth: buttonsMinWidth,
                  onClick: () => {
                    let variables = null;

                    if (prepareVariables) {
                      variables = prepareVariables(values, draft);
                    } else {
                      variables = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(values, ['id']);
                      variables[field] = draft;
                    }

                    updateField({
                      variables
                    }).then(() => this.disableEditor(true));
                  },
                  children: this.state.uploading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "uploadImage.isUploading",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Uploading image..."
                    }]
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "save",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Save"
                    }]
                  })
                })]
              })]
            })]
          })
        }))
      });
    }
  }

}

_defineProperty(InlineEditField, "defaultProps", {
  showEditIcon: true,
  buttonsMinWidth: 225,
  topEdit: -5
});

InlineEditField.__docgenInfo = {
  "description": "A field that can be edited inline. Relies directly on GraphQL to handle errors and\nloading states properly. By default this component will use `TextAreaAutosize`\nbut you can override this behaviour by passing a custom `children` prop.",
  "methods": [{
    "name": "enableEditor",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "disableEditor",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "noWarning",
      "type": null
    }],
    "returns": null
  }, {
    "name": "setDraft",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "draft",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderContent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "field",
      "type": null
    }, {
      "name": "canEdit",
      "type": null
    }, {
      "name": "value",
      "type": null
    }, {
      "name": "placeholder",
      "type": null
    }, {
      "name": "children",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "InlineEditField",
  "props": {
    "showEditIcon": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Set to false to disable edit icon even if user is allowed to edit",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "buttonsMinWidth": {
      "defaultValue": {
        "value": "225",
        "computed": false
      },
      "description": "To set the min width of Cancel/Save buttons",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false
    },
    "topEdit": {
      "defaultValue": {
        "value": "-5",
        "computed": false
      },
      "description": "Editing the top value.",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "field": {
      "description": "Field name",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "values": {
      "description": "Object that holds the values",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "mutation": {
      "description": "The GraphQL mutation used to update this value",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "mutationOptions": {
      "description": "Passed to Apollo",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "canEdit": {
      "description": "Can user edit the description",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isEditing": {
      "description": "Use this to control the component state",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "warnIfUnsavedChanges": {
      "description": "Add a confirm if trying to leave the form with unsaved changes",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "required": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "maxLength": {
      "description": "Max field length",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "prepareVariables": {
      "description": "Gets passed the item, the new value and must return the mutation variables",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "disableEditor": {
      "description": "For cases when component is controlled",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "children": {
      "description": "If given, this function will be used to render the field",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "placeholder": {
      "description": "A text that will be rendered if user can edit and there's no value available.\nHighly recommended if field is nullable.",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "intl": {
      "description": "@ignore from injectIntl",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_5__.injectIntl)(InlineEditField));

/***/ }),

/***/ 44791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ tierPageQuery)
/* harmony export */ });
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32651);
/* harmony import */ var _collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5824);


const tierPageQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_0__/* .gqlV1 */ .N
/* GraphQL */
`
  query TierPage($tierId: Int!) {
    Tier(id: $tierId) {
      id
      name
      slug
      description
      longDescription
      videoUrl
      goal
      currency
      interval
      endsAt
      button

      stats {
        id
        totalDonated
        totalRecurringDonations
        contributors {
          id
          all
          collectives
          organizations
          users
        }
      }

      collective {
        id
        slug
        type
        name
        backgroundImage
        backgroundImageUrl
        imageUrl
        isHost
        settings
        currency
        isArchived
        path
        host {
          id
        }
        stats {
          id
          updates
          balance
          transactions {
            id
            all
          }
        }
        features {
          id
          ...NavbarFields
        }
        admins: members(role: "ADMIN") {
          id
          role
          collective: member {
            id
            type
            slug
            name
            image
          }
        }
        parentCollective {
          id
          slug
          twitterHandle
          image
          backgroundImageUrl
          imageUrl
        }
      }

      contributors {
        id
        name
        roles
        isAdmin
        isCore
        isBacker
        since
        description
        publicMessage
        collectiveSlug
        totalAmountDonated
        type
        isIncognito
        collectiveId
      }
    }
  }
  ${_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_1__/* .collectiveNavbarFieldsFragment */ .AS}
`;

/***/ })

};
;