"use strict";
(() => {
var exports = {};
exports.id = 933;
exports.ids = [933];
exports.modules = {

/***/ 77887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













const ExamplesLink = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "CollectiveCategoryPicker__ExamplesLink",
  componentId: "sc-5giak9-0"
})(["color:", ";font-size:12px;&:hover{color:#dc5f7d;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.blue.500'));
const Image = styled_components__WEBPACK_IMPORTED_MODULE_4___default().img.withConfig({
  displayName: "CollectiveCategoryPicker__Image",
  componentId: "sc-5giak9-1"
})(["@media screen and (min-width:52em){height:256px;width:256px;}@media screen and (max-width:40em){height:192px;width:192px;}@media screen and (min-width:40em) and (max-width:52em){height:208px;width:208px;}"]);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
  community: {
    id: "createCollective.category.community",
    defaultMessage: [{
      "type": 0,
      "value": "For any community"
    }]
  },
  opensource: {
    id: "OSC.description",
    defaultMessage: [{
      "type": 0,
      "value": "For open source projects"
    }]
  },
  climate: {
    id: "createCollective.category.climate",
    defaultMessage: [{
      "type": 0,
      "value": "For climate initiatives"
    }]
  }
});

const CollectiveCategoryPicker = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const {
    hostCollectiveSlug,
    verb
  } = router.query;
  const baseRoute = `/${[hostCollectiveSlug, verb].filter(Boolean).join('/')}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      mb: 4,
      mt: 5,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H1, {
        fontSize: ['20px', '32px'],
        lineHeight: ['24px', '36px'],
        fontWeight: "bold",
        color: "black.900",
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "home.create",
          defaultMessage: [{
            "type": 0,
            "value": "Create a Collective"
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: ['column', 'row'],
      mb: [5, 6],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        alignItems: "center",
        width: [null, 280, 312],
        mb: [4, 0],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Image, {
            src: "/static/images/create-collective/openSourceIllustration.png",
            alt: formatMessage(messages.opensource)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            href: `/opensource/apply/intro`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              fontSize: "13px",
              buttonStyle: "primary",
              minHeight: "36px",
              mt: [2, 3],
              mb: 3,
              px: 3,
              children: formatMessage(messages.opensource)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ExamplesLink, {
            href: "/search?tag=opensource",
            openInNewTab: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "createCollective.examples",
              defaultMessage: [{
                "type": 0,
                "value": "See examples"
              }]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        borderLeft: ['none', '1px solid #E6E8EB'],
        borderTop: ['1px solid #E6E8EB', 'none'],
        alignItems: "center",
        width: [null, 280, 312],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Image, {
            src: "/static/images/create-collective/communityIllustration.png",
            alt: formatMessage(messages.community)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            href: `${baseRoute}/community`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              fontSize: "13px",
              buttonStyle: "primary",
              minHeight: "36px",
              mt: [2, 3],
              mb: 3,
              px: 3,
              "data-cy": "ccf-category-picker-button-community",
              children: formatMessage(messages.community)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ExamplesLink, {
            href: "/search?tag=community",
            openInNewTab: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "createCollective.examples",
              defaultMessage: [{
                "type": 0,
                "value": "See examples"
              }]
            })
          })]
        })
      })]
    })]
  });
};

CollectiveCategoryPicker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollectiveCategoryPicker"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectiveCategoryPicker);

/***/ }),

/***/ 16856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x": () => (/* binding */ BackButton)
/* harmony export */ });
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75142);
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5700);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40986);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1009);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11194);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5993);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47667);
/* harmony import */ var _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52903);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88705);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37278);
/* harmony import */ var _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14574);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(41433);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(32631);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(51082);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_12__, _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_14__, _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_19__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_24__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_12__, _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_14__, _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_19__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






























const BackButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z).withConfig({
  displayName: "CreateCollectiveForm__BackButton",
  componentId: "sc-5agbul-0"
})(["color:", ";font-size:14px;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.600'));
const ContainerWithImage = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).withConfig({
  displayName: "CreateCollectiveForm__ContainerWithImage",
  componentId: "sc-5agbul-1"
})(["width:100%;@media screen and (min-width:40em){background:url('/static/images/create-collective/formIllustration.png');background-repeat:no-repeat;background-size:40%;background-position:right 17px bottom;}"]);
const placeholders = {
  name: 'Agora Collective',
  slug: 'agora'
};
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  nameLabel: {
    id: "createCollective.form.nameLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Collective name"
    }]
  },
  slugLabel: {
    id: "createCollective.form.slugLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Set your URL"
    }]
  },
  suggestedLabel: {
    id: "createCollective.form.suggestedLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Suggested"
    }]
  },
  descriptionLabel: {
    id: "createCollective.form.descriptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What does your Collective do?"
    }]
  },
  tagsLabel: {
    id: "Tags",
    defaultMessage: [{
      "type": 0,
      "value": "Tags"
    }]
  },
  descriptionHint: {
    id: "createCollective.form.descriptionHint",
    defaultMessage: [{
      "type": 0,
      "value": "Write a short description (150 characters max)"
    }]
  },
  descriptionPlaceholder: {
    id: "create.collective.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Making the world a better place"
    }]
  },
  errorSlugHyphen: {
    id: "createCollective.form.error.slug.hyphen",
    defaultMessage: [{
      "type": 0,
      "value": "Collective slug URL cannot start or end with a hyphen"
    }]
  }
});
const LABEL_STYLES = {
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '17px'
};

class CreateCollectiveForm extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  hasHostTerms() {
    if (!this.props.host) {
      return false;
    } else {
      return Boolean(this.props.host.termsUrl);
    }
  }

  render() {
    const {
      intl,
      error,
      host,
      loading,
      popularTags,
      loggedInUser
    } = this.props;
    const hasHostTerms = this.hasHostTerms();
    const initialValues = {
      name: '',
      description: '',
      slug: '',
      message: '',
      tos: false,
      hostTos: false,
      inviteMembers: []
    };

    const validate = values => {
      const errors = (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_9__/* .requireFields */ .ay)(values, ['name', 'slug', 'description']);

      if (values.slug !== lodash_trim__WEBPACK_IMPORTED_MODULE_0___default()(values.slug, '-')) {
        errors.slug = intl.formatMessage(messages.errorSlugHyphen);
      }

      (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_9__/* .verifyFieldLength */ .zy)(intl, errors, values, 'name', 1, 50);
      (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_9__/* .verifyFieldLength */ .zy)(intl, errors, values, 'slug', 1, 30);
      (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_9__/* .verifyFieldLength */ .zy)(intl, errors, values, 'description', 1, 160);
      (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_9__/* .verifyFieldLength */ .zy)(intl, errors, values, 'message', 0, 3000);
      (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_9__/* .verifyChecked */ .Yy)(errors, values, 'tos');

      if (hasHostTerms) {
        (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_9__/* .verifyChecked */ .Yy)(errors, values, 'hostTos');
      }

      return errors;
    };

    const submit = values => {
      const {
        description,
        name,
        slug,
        message,
        tags,
        inviteMembers
      } = values;
      this.props.onSubmit({
        collective: {
          name,
          description,
          slug,
          tags
        },
        message,
        inviteMembers
      });
    };

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Grid */ .rj, {
      gridTemplateColumns: ['1fr', null, null, '1fr 576px 1fr'],
      pt: 48,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        display: ['none', null, null, 'flex'],
        minHeight: "32px",
        justifyContent: "center",
        alignItems: "flex-start",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(BackButton, {
          asLink: true,
          onClick: () => window && window.history.back(),
          children: ["\u2190\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "Back",
            defaultMessage: [{
              "type": 0,
              "value": "Back"
            }]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
          flexDirection: "column",
          mb: [2, 4, 48],
          px: 2,
          pt: 2,
          children: host ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
            justifyContent: "center",
            alignItems: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
              mr: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
                radius: 96,
                collective: host
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
              maxWidth: 345,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.H1, {
                fontSize: ['20px', '32px'],
                lineHeight: ['24px', '40px'],
                fontWeight: "500",
                textAlign: "left",
                color: "black.900",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "host.applyTo",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Apply to "
                  }, {
                    "type": 1,
                    "value": "hostName"
                  }],
                  values: {
                    hostName: host.name
                  }
                })
              })
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
              mb: [2, 3],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.H1, {
                fontSize: ['20px', '32px'],
                lineHeight: ['24px', '36px'],
                fontWeight: "bold",
                textAlign: "center",
                color: "black.900",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "home.create",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create a Collective"
                  }]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.P, {
              fontSize: "16px",
              color: "black.600",
              textAlign: "center",
              mb: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "createCollective.subtitle.introduce",
                defaultMessage: [{
                  "type": 0,
                  "value": "Introduce your Collective to the community."
                }]
              })
            })]
          })
        }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            type: "error",
            withIcon: true,
            mb: [1, 3],
            "data-cy": "ccf-error-message",
            children: error
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(ContainerWithImage, {
            mb: [1, 5],
            border: [null, '1px solid #E6E8EB'],
            borderRadius: [0, '8px'],
            maxWidth: 576,
            px: [2, 4],
            pb: [0, 90],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
              validate: validate,
              initialValues: initialValues,
              onSubmit: submit,
              validateOnChange: true,
              children: formik => {
                const {
                  values,
                  handleSubmit,
                  touched,
                  setFieldValue
                } = formik;

                const handleSlugChange = e => {
                  if (!touched.slug) {
                    setFieldValue('slug', (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_8__/* .suggestSlug */ .e4)(e.target.value));
                  }
                };

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
                  "data-cy": "ccf-form",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    name: "name",
                    htmlFor: "collective-name-input",
                    labelProps: LABEL_STYLES,
                    label: intl.formatMessage(messages.nameLabel),
                    onChange: handleSlugChange,
                    required: true,
                    mt: 4,
                    mb: 3,
                    "data-cy": "ccf-form-name",
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
                      placeholder: placeholders.name
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    name: "slug",
                    htmlFor: "collective-slug-input",
                    labelProps: LABEL_STYLES,
                    label: intl.formatMessage(messages.slugLabel),
                    value: values.slug,
                    required: true,
                    mt: 3,
                    mb: 2,
                    "data-cy": "ccf-form-slug",
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                      onChange: e => setFieldValue('slug', e.target.value)
                    }, field), {}, {
                      prepend: "opencollective.com/",
                      placeholder: placeholders.slug
                    }))
                  }), values.name.length > 0 && !touched.slug && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.P, {
                    fontSize: "10px",
                    color: "black.600",
                    fontStyle: "italic",
                    children: intl.formatMessage(messages.suggestedLabel)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    name: "description",
                    htmlFor: "description",
                    labelProps: LABEL_STYLES,
                    label: intl.formatMessage(messages.descriptionLabel),
                    value: values.description,
                    required: true,
                    mt: 3,
                    mb: 2,
                    "data-cy": "ccf-form-description",
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
                      placeholder: intl.formatMessage(messages.descriptionPlaceholder)
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.P, {
                    fontSize: "11px",
                    color: "black.600",
                    children: intl.formatMessage(messages.descriptionHint)
                  }), host && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
                    mt: 3,
                    mb: 2,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.P, _objectSpread(_objectSpread({}, LABEL_STYLES), {}, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "onboarding.admins.header",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Add administrators"
                        }]
                      })
                    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                      mt: 1,
                      width: "100%",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_28__.P, {
                        my: 2,
                        fontSize: "9px",
                        textTransform: "uppercase",
                        color: "black.700",
                        letterSpacing: "0.06em",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                          id: "AddedAdministrators",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Added Administrators"
                          }]
                        }), host?.policies?.COLLECTIVE_MINIMUM_ADMINS && ` (${1 + values.inviteMembers.length}/${host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins})`]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                        flexGrow: 1,
                        alignItems: "center",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                          width: "100%",
                          ml: 2,
                          borderColor: "black.300"
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                      width: "100%",
                      flexWrap: "wrap",
                      "data-cy": "profile-card",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        collective: loggedInUser.collective
                      }, loggedInUser.collective.id), values.inviteMembers?.map(invite => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        collective: invite.memberAccount,
                        removeAdmin: () => setFieldValue('inviteMembers', values.inviteMembers.filter(i => i.memberAccount.id !== invite.memberAccount.id))
                      }, invite.memberAccount.id))]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                      mt: 1,
                      width: "100%",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.P, {
                        my: 2,
                        fontSize: "9px",
                        textTransform: "uppercase",
                        color: "black.700",
                        letterSpacing: "0.06em",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                          id: "InviteAdministrators",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Invite Administrators"
                          }]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                        flexGrow: 1,
                        alignItems: "center",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                          width: "100%",
                          ml: 2,
                          borderColor: "black.300"
                        })
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        inputId: "onboarding-admin-picker",
                        creatable: true,
                        collective: null,
                        types: ['USER'],
                        "data-cy": "admin-picker",
                        filterResults: collectives => collectives.filter(collective => !values.inviteMembers.some(invite => invite.memberAccount.id === collective.id)),
                        onChange: option => {
                          setFieldValue('inviteMembers', [...values.inviteMembers, {
                            role: 'ADMIN',
                            memberAccount: option.value
                          }]);
                        }
                      })
                    }), host?.policies?.COLLECTIVE_MINIMUM_ADMINS && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                      type: "info",
                      mt: 3,
                      fontSize: "13px",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "GTK0Wf",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Your selected Fiscal Host requires you to add a minimum of "
                        }, {
                          "type": 6,
                          "value": "numberOfAdmins",
                          "options": {
                            "one": {
                              "value": [{
                                "type": 7
                              }, {
                                "type": 0,
                                "value": " admin"
                              }]
                            },
                            "other": {
                              "value": [{
                                "type": 7
                              }, {
                                "type": 0,
                                "value": " admins"
                              }]
                            }
                          },
                          "offset": 0,
                          "pluralType": "cardinal"
                        }, {
                          "type": 0,
                          "value": ". You can manage your admins from the Collective Settings."
                        }],
                        values: host.policies.COLLECTIVE_MINIMUM_ADMINS
                      })
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    name: "tags",
                    htmlFor: "tags",
                    labelProps: LABEL_STYLES,
                    label: intl.formatMessage(messages.tagsLabel),
                    value: values.tags,
                    required: true,
                    mt: 3,
                    mb: 2,
                    "data-cy": "ccf-form-tags",
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                      onChange: tags => {
                        formik.setFieldValue('tags', tags.map(t => t.value.toLowerCase()));
                      },
                      suggestedTags: popularTags
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    type: "info",
                    mt: 3,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "collective.tags.info",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Tags help you improve your group’s discoverability and connect with similar initiatives across the world."
                      }]
                    })
                  }), host && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    name: "message",
                    htmlFor: "apply-create-message",
                    labelProps: LABEL_STYLES,
                    required: false,
                    mt: 24,
                    label: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(host, 'settings.applyMessage') || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "ApplyToHost.WriteMessage",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Message to the Fiscal Host"
                      }]
                    }),
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                      width: "100%",
                      minHeight: 76,
                      maxLength: 3000,
                      showCount: true
                    }))
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
                    mx: 1,
                    my: 3,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                      name: "tos",
                      required: true,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        name: field.name,
                        required: field.required,
                        checked: field.value,
                        onChange: ({
                          checked
                        }) => setFieldValue(field.name, checked),
                        error: field.error,
                        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                          id: "createcollective.tos.label",
                          defaultMessage: [{
                            "type": 0,
                            "value": "I agree with the "
                          }, {
                            "type": 1,
                            "value": "toslink"
                          }, {
                            "type": 0,
                            "value": " of Open Collective."
                          }],
                          values: {
                            toslink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                              href: "/tos",
                              openInNewTab: true,
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                                id: "tos",
                                defaultMessage: [{
                                  "type": 0,
                                  "value": "terms of service"
                                }]
                              })
                            })
                          }
                        })
                      })
                    }), hasHostTerms && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                      name: "hostTos",
                      required: true,
                      mt: 2,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        name: field.name,
                        required: field.required,
                        checked: field.value,
                        onChange: ({
                          checked
                        }) => setFieldValue(field.name, checked),
                        error: field.error,
                        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                          id: "Host.TOSCheckbox",
                          defaultMessage: [{
                            "type": 0,
                            "value": "I agree with the "
                          }, {
                            "type": 8,
                            "value": "TOSLink",
                            "children": [{
                              "type": 0,
                              "value": "terms of service"
                            }]
                          }, {
                            "type": 0,
                            "value": " of "
                          }, {
                            "type": 1,
                            "value": "hostName"
                          }],
                          values: {
                            hostName: host.name,
                            TOSLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_17__/* .getI18nLink */ .fw)({
                              href: host.termsUrl,
                              openInNewTabNoFollow: true,
                              onClick: e => e.stopPropagation() // don't check the checkbox when clicking on the link

                            })
                          }
                        })
                      })
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                    justifyContent: ['center', 'left'],
                    mb: 4,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                      fontSize: "13px",
                      minWidth: "148px",
                      minHeight: "36px",
                      buttonStyle: "primary",
                      type: "submit",
                      loading: loading,
                      onSubmit: handleSubmit,
                      "data-cy": "ccf-form-submit",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "collective.create",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Create Collective"
                        }]
                      })
                    })
                  })]
                });
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              justifyContent: "center",
              mb: 4,
              display: ['flex', 'none'],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                src: "/static/images/create-collective/mobileForm.png",
                width: "320px",
                height: "200px"
              })
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx("div", {})]
    });
  }

}

CreateCollectiveForm.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "hasHostTerms",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "CreateCollectiveForm",
  "props": {
    "error": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onSubmit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "loggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "popularTags": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_6__.injectIntl)((0,_lib_withData__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)((0,next_router__WEBPACK_IMPORTED_MODULE_5__.withRouter)(CreateCollectiveForm))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82525);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37278);
/* harmony import */ var _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78720);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51927);
/* harmony import */ var _CollectiveCategoryPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77887);
/* harmony import */ var _CreateCollectiveForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16856);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_10__, _CreateCollectiveForm__WEBPACK_IMPORTED_MODULE_14__]);
([_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_10__, _CreateCollectiveForm__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















class CreateCollective extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      creating: false
    };
    this.createCollective = this.createCollective.bind(this);
  }

  async createCollective({
    collective,
    message,
    inviteMembers
  }) {
    // set state to loading
    this.setState({
      creating: true
    }); // prepare object

    collective.tags = collective.tags ? [...collective.tags, this.props.router.query.category] : [this.props.router.query.category]; // try mutation

    try {
      const res = await this.props.createCollective({
        variables: {
          collective,
          host: this.props.host ? {
            slug: this.props.host.slug
          } : null,
          message,
          inviteMembers: inviteMembers.map(invite => _objectSpread(_objectSpread({}, invite), {}, {
            memberAccount: {
              legacyId: invite.memberAccount.id
            }
          }))
        }
      });
      const newCollective = res.data.createCollective;
      await this.props.refetchLoggedInUser();
      this.props.router.push({
        pathname: `/${newCollective.slug}/onboarding`,
        query: {
          CollectiveId: newCollective.legacyId
        }
      }).then(() => window.scrollTo(0, 0));
    } catch (err) {
      const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .i18nGraphqlException */ .t2)(this.props.intl, err);
      this.setState({
        error: errorMsg,
        creating: false
      });
    }
  }

  render() {
    const {
      LoggedInUser,
      host,
      router,
      data
    } = this.props;
    const {
      error
    } = this.state;
    const {
      category
    } = router.query;
    const tags = data?.tagStats?.nodes?.filter(node => !_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .IGNORED_TAGS.includes */ .bR.includes(node.tag));
    const popularTags = tags?.map(value => value.tag);

    if (host && !host.isOpenToApplications) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        mb: 5,
        p: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
          flexDirection: "column",
          p: 4,
          mt: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
            mb: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.H1, {
              fontSize: "32px",
              lineHeight: "36px",
              fontWeight: "bold",
              textAlign: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "home.create",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create a Collective"
                }]
              })
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            type: "warning",
            withIcon: true,
            mb: [1, 3],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "collectives.create.error.HostNotOpenToApplications",
              defaultMessage: [{
                "type": 0,
                "value": "This Fiscal Host is not open to applications"
              }]
            })
          })
        })]
      });
    }

    if (!LoggedInUser) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        mb: 5,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          m: 4,
          type: "warning",
          withIcon: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "mustBeLoggedIn",
            defaultMessage: [{
              "type": 0,
              "value": "You must be logged in to see this page"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
          createProfileTabs: ['personal']
        })]
      });
    }

    if (!host && !category) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_CollectiveCategoryPicker__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {});
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_CreateCollectiveForm__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      host: host,
      onSubmit: this.createCollective,
      onChange: this.handleChange,
      loading: this.state.creating,
      error: error,
      popularTags: popularTags,
      loggedInUser: LoggedInUser
    });
  }

}

const createCollectiveMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation CreateCollective(
    $collective: CollectiveCreateInput!
    $host: AccountReferenceInput
    $message: String
    $inviteMembers: [InviteMemberInput]
  ) {
    createCollective(collective: $collective, host: $host, message: $message, inviteMembers: $inviteMembers) {
      id
      name
      slug
      tags
      description
      githubHandle
      repositoryUrl
      legacyId
    }
  }
`;
const tagStatsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query TagStatsQuery($host: AccountReferenceInput) {
    tagStats(limit: 6, host: $host) {
      nodes {
        id
        tag
      }
    }
  }
`;
const addCreateCollectiveMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(createCollectiveMutation, {
  name: 'createCollective',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  }
});
const addTagStatsQuery = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(tagStatsQuery, {
  options: props => {
    return {
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T,
      variables: {
        host: props.host ? {
          slug: props.host.slug
        } : undefined
      }
    };
  }
});
CreateCollective.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "createCollective",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "{ collective, message, inviteMembers }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateCollective",
  "props": {
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "createCollective": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "tagStats": {
            "name": "shape",
            "value": {
              "nodes": {
                "name": "arrayOf",
                "value": {
                  "name": "shape",
                  "value": {
                    "tag": {
                      "name": "string",
                      "required": false
                    }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,_UserProvider__WEBPACK_IMPORTED_MODULE_12__/* .withUser */ .ns)(addCreateCollectiveMutation(addTagStatsQuery((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)(CreateCollective))))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _components_StyledTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36422);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Admin = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_StyledTag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).attrs({
  variant: 'rounded-right'
}).withConfig({
  displayName: "OnboardingProfileCard__Admin",
  componentId: "sc-shs4i4-0"
})([""]);

class OnboardingProfileCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      collective,
      removeAdmin,
      isPending
    } = this.props;
    const {
      name
    } = collective;

    const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Admin, {
      closeButtonProps: removeAdmin ? {
        onClick: () => {
          removeAdmin(collective);
        }
      } : null,
      "data-cy": "remove-user",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
          radius: 16,
          collective: collective
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          fontSize: "12px",
          ml: 2,
          "data-cy": "name-of-admins",
          children: name
        })]
      })
    });

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      my: 1,
      mr: 2,
      children: isPending ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "onboarding.admins.pending",
          defaultMessage: [{
            "type": 0,
            "value": "Pending approval"
          }]
        }),
        children: content
      }) : content
    });
  }

}

OnboardingProfileCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OnboardingProfileCard",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "adminCollective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "removeAdmin": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isPending": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingProfileCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _components_create_collective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91288);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73908);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84842);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_create_collective__WEBPACK_IMPORTED_MODULE_5__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_6__, _components_Page__WEBPACK_IMPORTED_MODULE_7__]);
([_components_create_collective__WEBPACK_IMPORTED_MODULE_5__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_6__, _components_Page__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const createCollectiveHostQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query CreateCollectiveHost($slug: String!) {
    host(slug: $slug) {
      id
      legacyId
      type
      slug
      name
      currency
      isOpenToApplications
      termsUrl
      policies {
        COLLECTIVE_MINIMUM_ADMINS {
          numberOfAdmins
        }
      }
    }
  }
`;

const CreateCollectivePage = ({
  loadingLoggedInUser,
  LoggedInUser
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const slug = router.query.hostCollectiveSlug || (router.query.category === 'opensource' ? 'opensource' : undefined);
  const skipQuery = !LoggedInUser || !slug;
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(createCollectiveHostQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T,
    skip: skipQuery,
    variables: {
      slug
    }
  });

  if (loading || loadingLoggedInUser) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      loading: true
    });
  }

  if (!skipQuery && (!data || !data.host)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .generateNotFoundError */ .mN)(slug),
      data: {
        error
      },
      log: false
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    showFooter: Boolean(LoggedInUser),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_create_collective__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      host: data && data.host
    })
  });
};

CreateCollectivePage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateCollectivePage",
  "props": {
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_8__/* .withUser */ .ns)(CreateCollectivePage));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 97812:
/***/ ((module) => {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 79114:
/***/ ((module) => {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 72743:
/***/ ((module) => {

module.exports = require("@apollo/client/react/components");

/***/ }),

/***/ 95159:
/***/ ((module) => {

module.exports = require("@apollo/client/react/hoc");

/***/ }),

/***/ 91836:
/***/ ((module) => {

module.exports = require("@apollo/client/react/ssr");

/***/ }),

/***/ 13831:
/***/ ((module) => {

module.exports = require("@dnd-kit/core");

/***/ }),

/***/ 99565:
/***/ ((module) => {

module.exports = require("@dnd-kit/sortable");

/***/ }),

/***/ 92813:
/***/ ((module) => {

module.exports = require("@dnd-kit/utilities");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 18022:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronDown");

/***/ }),

/***/ 28054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronRight");

/***/ }),

/***/ 52160:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronUp");

/***/ }),

/***/ 51104:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Exit");

/***/ }),

/***/ 10054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/InfoCircle");

/***/ }),

/***/ 99812:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 83514:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationCircle");

/***/ }),

/***/ 25730:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationTriangle");

/***/ }),

/***/ 86954:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/InfoCircle");

/***/ }),

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 28992:
/***/ ((module) => {

module.exports = require("country-currency-emoji-flags");

/***/ }),

/***/ 69031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 99226:
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 39131:
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 58579:
/***/ ((module) => {

module.exports = require("lodash/flatten");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 98210:
/***/ ((module) => {

module.exports = require("lodash/has");

/***/ }),

/***/ 53493:
/***/ ((module) => {

module.exports = require("lodash/intersection");

/***/ }),

/***/ 52626:
/***/ ((module) => {

module.exports = require("lodash/invert");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 77876:
/***/ ((module) => {

module.exports = require("lodash/isError");

/***/ }),

/***/ 86069:
/***/ ((module) => {

module.exports = require("lodash/isNil");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 83824:
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ 63901:
/***/ ((module) => {

module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 32027:
/***/ ((module) => {

module.exports = require("lodash/partition");

/***/ }),

/***/ 84159:
/***/ ((module) => {

module.exports = require("lodash/pick");

/***/ }),

/***/ 20808:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ 75142:
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 57260:
/***/ ((module) => {

module.exports = require("lodash/values");

/***/ }),

/***/ 17809:
/***/ ((module) => {

module.exports = require("memoize-one");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 74809:
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ 42042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 13126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 35073:
/***/ ((module) => {

module.exports = require("react-scrollchor");

/***/ }),

/***/ 61929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 31325:
/***/ ((module) => {

module.exports = require("react-select/creatable");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 71564:
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ 85598:
/***/ ((module) => {

module.exports = import("react-animate-height");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,2143,986,242,5993,8720,7667,2903,1009], () => (__webpack_exec__(65939)));
module.exports = __webpack_exports__;

})();