"use strict";
(() => {
var exports = {};
exports.id = 8116;
exports.ids = [8116];
exports.modules = {

/***/ 83077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const Image = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "CategoryPicker__Image",
  componentId: "sc-39o4d9-0"
})(["@media screen and (min-width:52em){height:256px;width:256px;}@media screen and (max-width:40em){height:192px;width:192px;}@media screen and (min-width:40em) and (max-width:52em){height:208px;width:208px;}"]);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  foundation: {
    id: "createFund.category.foundation",
    defaultMessage: [{
      "type": 0,
      "value": "For non-profit initiatives in the USA"
    }]
  },
  europe: {
    id: "createFund.category.europe",
    defaultMessage: [{
      "type": 0,
      "value": "For non-profit initiatives in Europe"
    }]
  },
  opensource: {
    id: "createFund.category.opensource",
    defaultMessage: [{
      "type": 0,
      "value": "For open source initiatives"
    }]
  },
  fund: {
    id: "createFund.category.fund",
    defaultMessage: [{
      "type": 0,
      "value": "For other initiatives"
    }]
  }
});

const CreateFundCategoryPicker = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      mb: 4,
      mt: 5,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H1, {
        fontSize: ['20px', '32px'],
        lineHeight: ['24px', '36px'],
        fontWeight: "bold",
        color: "black.900",
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "createFund.create",
          defaultMessage: [{
            "type": 0,
            "value": "Create a Fund"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      mb: [5, 6],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        alignItems: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            borderTop: ['1px solid #E6E8EB', 'none'],
            alignItems: "center",
            width: [null, 280, 312],
            mb: [4, 0],
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Image, {
                src: "/static/images/create-collective/climateIllustration.png",
                alt: formatMessage(messages.foundation)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                href: {
                  pathname: `/fund/${router.query.verb}`,
                  query: {
                    category: 'foundation'
                  }
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                  fontSize: "13px",
                  buttonStyle: "primary",
                  minHeight: "36px",
                  mt: [2, 3],
                  mb: 3,
                  px: 3,
                  children: formatMessage(messages.foundation)
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
                textAlign: "center",
                children: ["It will be hosted by", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {}), "Open Collective Foundation 501(c)(3)."]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            borderLeft: ['none', '1px solid #E6E8EB'],
            borderTop: ['1px solid #E6E8EB', 'none'],
            alignItems: "center",
            width: [null, 280, 312],
            mb: [4, 0],
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Image, {
                src: "/static/images/create-collective/climateIllustration.png",
                alt: formatMessage(messages.europe)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                href: {
                  pathname: `/fund/${router.query.verb}`,
                  query: {
                    category: 'europe'
                  }
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                  fontSize: "13px",
                  buttonStyle: "primary",
                  minHeight: "36px",
                  mt: [2, 3],
                  mb: 3,
                  px: 3,
                  children: formatMessage(messages.europe)
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
                textAlign: "center",
                children: ["It will be hosted by", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {}), "Open Collective Europe ASBL"]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            borderLeft: ['none', '1px solid #E6E8EB'],
            borderTop: ['1px solid #E6E8EB', 'none'],
            alignItems: "center",
            width: [null, 280, 312],
            mb: [4, 0],
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Image, {
                src: "/static/images/create-collective/openSourceIllustration.png",
                alt: formatMessage(messages.opensource)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                href: {
                  pathname: `/fund/${router.query.verb}`,
                  query: {
                    category: 'opensource'
                  }
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                  fontSize: "13px",
                  buttonStyle: "primary",
                  minHeight: "36px",
                  mt: [2, 3],
                  mb: 3,
                  px: 3,
                  children: formatMessage(messages.opensource)
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
                textAlign: "center",
                children: ["It will be hosted by", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {}), "Open Source Collective 501(c)(6)."]
              })]
            })
          })]
        })
      })
    })]
  });
};

CreateFundCategoryPicker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateFundCategoryPicker"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateFundCategoryPicker);

/***/ }),

/***/ 83125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5700);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47667);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32631);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_12__]);
_StyledInputField__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const ContainerWithImage = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
  displayName: "Form__ContainerWithImage",
  componentId: "sc-1gys8uc-0"
})(["@media screen and (min-width:40em){background:url('/static/images/create-collective/formIllustration.png');background-repeat:no-repeat;background-size:40%;background-position:right bottom;}"]);
const placeholders = {
  name: 'Agora Fund',
  slug: 'agora'
};
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
  nameLabel: {
    id: "createFund.form.nameLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What's the name of your fund?"
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
    id: "createFund.form.descriptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What does your fund do?"
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
  errorName: {
    id: "createCollective.form.error.name",
    defaultMessage: [{
      "type": 0,
      "value": "Please use fewer than 50 characters"
    }]
  },
  errorDescription: {
    id: "createCollective.form.error.description",
    defaultMessage: [{
      "type": 0,
      "value": "Please use fewer than 160 characters"
    }]
  },
  errorSlug: {
    id: "createCollective.form.error.slug",
    defaultMessage: [{
      "type": 0,
      "value": "Please use fewer than 30 characters"
    }]
  }
});

class CreateFundForm extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      intl,
      error,
      host,
      loading
    } = this.props;
    const initialValues = {
      name: '',
      description: '',
      slug: ''
    };

    const validate = values => {
      const errors = {};

      if (values.name.length > 50) {
        errors.name = intl.formatMessage(messages.errorName);
      }

      if (values.slug.length > 30) {
        errors.slug = intl.formatMessage(messages.errorSlug);
      }

      if (values.description.length > 160) {
        errors.description = intl.formatMessage(messages.errorDescription);
      }

      return errors;
    };

    const submit = values => {
      const {
        description,
        name,
        slug
      } = values;
      this.props.onSubmit({
        name,
        description,
        slug
      });
    };

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
      flexDirection: "column",
      m: [3, 0],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        flexDirection: "column",
        my: [2, 4],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
          mb: [2, 3],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.H1, {
            fontSize: ['20px', '32px'],
            lineHeight: ['24px', '36px'],
            fontWeight: "bold",
            textAlign: "center",
            color: "black.900",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "createFund.create",
              defaultMessage: [{
                "type": 0,
                "value": "Create a Fund"
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
          textAlign: "center",
          minHeight: "24px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
            fontSize: "16px",
            color: "black.600",
            mb: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "createFund.subtitle.introduce",
              defaultMessage: [{
                "type": 0,
                "value": "Apply for Fiscal Sponsorship below. We will review your application shortly. "
              }, {
                "type": 1,
                "value": "faqLink"
              }],
              values: {
                faqLink: host && host.faqUrl ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                  href: host.faqUrl,
                  openInNewTab: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                    id: "createFund.subtitle.faq",
                    defaultMessage: [{
                      "type": 0,
                      "value": "FAQ here."
                    }]
                  })
                }) : null
              }
            })
          })
        })]
      }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          type: "error",
          withIcon: true,
          mb: [1, 3],
          "data-cy": "ccf-error-message",
          children: error
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(ContainerWithImage, {
          mb: [1, 5],
          width: [320, 512, 576],
          border: ['none', '1px solid #E6E8EB'],
          borderRadius: ['none', '8px'],
          px: [1, 4],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
            validate: validate,
            initialValues: initialValues,
            onSubmit: submit,
            validateOnChange: true,
            children: formik => {
              const {
                values,
                handleSubmit,
                errors,
                touched,
                setFieldValue
              } = formik;

              const handleSlugChange = e => {
                if (!touched.slug) {
                  setFieldValue('slug', (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__/* .suggestSlug */ .e4)(e.target.value));
                }
              };

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  name: "name",
                  htmlFor: "name",
                  error: touched.name && errors.name,
                  label: intl.formatMessage(messages.nameLabel),
                  value: values.name,
                  onChange: handleSlugChange,
                  required: true,
                  mt: 4,
                  mb: 3,
                  "data-cy": "ccf-form-name",
                  children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Field, _objectSpread(_objectSpread({
                    as: _StyledInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP
                  }, inputProps), {}, {
                    placeholder: placeholders.name
                  }))
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  name: "slug",
                  htmlFor: "slug",
                  error: touched.slug && errors.slug,
                  label: intl.formatMessage(messages.slugLabel),
                  value: values.slug,
                  required: true,
                  mt: 3,
                  mb: 2,
                  "data-cy": "ccf-form-slug",
                  children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Field, _objectSpread(_objectSpread({
                    onChange: e => {
                      setFieldValue('slug', e.target.value);
                    },
                    as: _StyledInputGroup__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z
                  }, inputProps), {}, {
                    prepend: "opencollective.com/",
                    placeholder: placeholders.slug
                  }))
                }), values.name.length > 0 && !touched.slug && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
                  fontSize: "10px",
                  children: intl.formatMessage(messages.suggestedLabel)
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  name: "description",
                  htmlFor: "description",
                  error: touched.description && errors.description,
                  label: intl.formatMessage(messages.descriptionLabel),
                  value: values.description,
                  required: true,
                  mt: 3,
                  mb: 2,
                  "data-cy": "ccf-form-description",
                  children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Field, _objectSpread(_objectSpread({
                    as: _StyledInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP
                  }, inputProps), {}, {
                    placeholder: intl.formatMessage(messages.descriptionPlaceholder)
                  }))
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
                  fontSize: "11px",
                  children: intl.formatMessage(messages.descriptionHint)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
                  flexDirection: "column",
                  mx: 1,
                  my: 4,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
                    fontSize: "13px",
                    mb: 2,
                    children: ["-", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                      id: "createFund.tos.label",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Read the "
                      }, {
                        "type": 1,
                        "value": "toslink"
                      }, {
                        "type": 0,
                        "value": " of Open Collective."
                      }],
                      values: {
                        toslink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                          href: "/tos",
                          openInNewTab: true,
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                            id: "tos",
                            defaultMessage: [{
                              "type": 0,
                              "value": "terms of service"
                            }]
                          })
                        })
                      }
                    })]
                  }), host && host.termsUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
                    fontSize: "13px",
                    children: ["-", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                      id: "createFund.hosttos.label",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Read the "
                      }, {
                        "type": 1,
                        "value": "hosttoslink"
                      }, {
                        "type": 0,
                        "value": " of the "
                      }, {
                        "type": 1,
                        "value": "hostName"
                      }, {
                        "type": 0,
                        "value": "."
                      }],
                      values: {
                        hostName: host.name,
                        hosttoslink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                          href: host.termsUrl,
                          openInNewTab: true,
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                            id: "fiscaltos",
                            defaultMessage: [{
                              "type": 0,
                              "value": "terms of fiscal sponsorship"
                            }]
                          })
                        })
                      }
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
                  justifyContent: ['center', 'left'],
                  mb: 4,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    fontSize: "13px",
                    minWidth: "148px",
                    minHeight: "36px",
                    buttonStyle: "primary",
                    type: "submit",
                    loading: loading,
                    onSubmit: handleSubmit,
                    "data-cy": "ccf-form-submit",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                      id: "createFund.button",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Create Fund"
                      }]
                    })
                  })
                })]
              });
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
            justifyContent: "center",
            mb: 4,
            display: ['flex', 'none'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              display: ['block', 'none'],
              src: "/static/images/create-collective/mobileForm.png",
              width: "320px",
              height: "200px"
            })
          })]
        })
      })]
    });
  }

}

CreateFundForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateFundForm",
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
    "github": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_3__.injectIntl)((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(CreateFundForm)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46399:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32651);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78720);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51927);
/* harmony import */ var _CategoryPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83077);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(83125);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_10__, _Form__WEBPACK_IMPORTED_MODULE_14__]);
([_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_10__, _Form__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















class CreateFund extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      creating: false
    };
    this.createFund = this.createFund.bind(this);
  }

  getHost() {
    if (this.props.router.query.category === 'foundation') {
      return {
        slug: 'foundation',
        name: 'Open Collective Foundation',
        termsUrl: 'https://docs.google.com/document/u/2/d/e/2PACX-1vQ_fs7IOojAHaMBKYtaJetlTXJZLnJ7flIWkwxUSQtTkWUMtwFYC2ssb-ooBnT-Ldl6wbVhNQiCkSms/pub',
        faqUrl: 'https://docs.opencollective.foundation/'
      };
    }

    if (this.props.router.query.category === 'opensource') {
      return {
        slug: 'opensource',
        name: 'Open Source Collective',
        termsUrl: 'https://docs.google.com/document/u/1/d/e/2PACX-1vQbiyK2Fe0jLdh4vb9BfHY4bJ1LCo4Qvy0jg9P29ZkiC8y_vKJ_1fNgIbV0p6UdvbcT8Ql1gVto8bf9/pub'
      };
    }

    if (this.props.router.query.category === 'europe') {
      return {
        slug: 'europe',
        name: 'Open Collective Europe',
        termsUrl: 'https://docs.opencollective.com/oceurope/getting-started/our-terms-and-conditions'
      };
    }
  }

  async createFund(fund) {
    const host = this.getHost(); // set state to loading

    this.setState({
      creating: true
    }); // try mutation

    try {
      const res = await this.props.createFund({
        variables: {
          fund: lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(fund, ['tos', 'hostTos']),
          host: lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(host, ['slug'])
        }
      });
      await this.props.refetchLoggedInUser();
      this.props.router.push({
        pathname: `/${res.data.createFund.slug}`,
        query: {
          status: 'fundCreated'
        }
      }).then(() => window.scrollTo(0, 0));
    } catch (err) {
      const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .i18nGraphqlException */ .t2)(this.props.intl, err);
      this.setState({
        error: errorMsg,
        creating: false
      });
    }
  }

  render() {
    const {
      LoggedInUser,
      router
    } = this.props;
    const {
      creating,
      error
    } = this.state;
    const {
      category
    } = router.query;

    if (!LoggedInUser) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        mb: 5,
        p: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          flexDirection: "column",
          p: 4,
          mt: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
            mb: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.H1, {
              fontSize: "32px",
              lineHeight: "36px",
              fontWeight: "bold",
              textAlign: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "collective.create.join",
                defaultMessage: [{
                  "type": 0,
                  "value": "Join Open Collective"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
              fontSize: "14px",
              color: "black.600",
              mb: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "collective.create.createOrSignIn",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create an account (or sign in) to start a collective."
                }]
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {})]
      });
    }

    if (!category) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_CategoryPicker__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {});
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Form__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      host: this.getHost(),
      onSubmit: this.createFund,
      loading: creating,
      error: error
    });
  }

}

const createFundMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation CreateFund($fund: FundCreateInput!, $host: AccountReferenceInput) {
    createFund(fund: $fund, host: $host) {
      id
      name
      slug
      tags
      description
    }
  }
`;
const addCreateFundMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(createFundMutation, {
  name: 'createFund',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .API_V2_CONTEXT */ .T
  }
});
CreateFund.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getHost",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "createFund",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "fund",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateFund",
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
    "createFund": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_5__.withRouter)((0,_UserProvider__WEBPACK_IMPORTED_MODULE_12__/* .withUser */ .ns)(addCreateFundMutation((0,react_intl__WEBPACK_IMPORTED_MODULE_6__.injectIntl)(CreateFund)))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_create_fund__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46399);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73908);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84842);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_create_fund__WEBPACK_IMPORTED_MODULE_1__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__, _components_Page__WEBPACK_IMPORTED_MODULE_3__]);
([_components_create_fund__WEBPACK_IMPORTED_MODULE_1__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__, _components_Page__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CreateFundPage = ({
  loadingLoggedInUser
}) => {
  if (loadingLoggedInUser) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      loading: true
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_create_fund__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
  });
};

CreateFundPage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateFundPage",
  "props": {
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_4__/* .withUser */ .ns)(CreateFundPage));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 72743:
/***/ ((module) => {

module.exports = require("@apollo/client/react/components");

/***/ }),

/***/ 95159:
/***/ ((module) => {

module.exports = require("@apollo/client/react/hoc");

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

/***/ 46555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,8720,7667], () => (__webpack_exec__(20802)));
module.exports = __webpack_exports__;

})();