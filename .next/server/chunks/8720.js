"use strict";
exports.id = 8720;
exports.ids = [8720];
exports.modules = {

/***/ 22737:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57260);
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39131);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88705);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56562);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92129);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19156);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41433);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87262);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(67001);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_17__]);
_StyledInputField__WEBPACK_IMPORTED_MODULE_17__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const _excluded = ["email", "name", "newsletterOptIn", "tosOptIn", "submitting", "errors", "onEmailChange", "onFieldChange", "onSubmit", "onSecondaryAction", "emailAlreadyExists", "isOAuth", "oAuthAppName", "oAuthAppImage"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  newsletter: {
    id: "cNkrNr",
    defaultMessage: [{
      "type": 0,
      "value": "Subscribe to our monthly newsletter"
    }]
  },
  nameLabel: {
    id: "vlKhIl",
    defaultMessage: [{
      "type": 0,
      "value": "Your name"
    }]
  },
  email: {
    id: "nONnTw",
    defaultMessage: [{
      "type": 0,
      "value": "Your email"
    }]
  }
});

const Tab = ({
  active,
  children,
  setActive,
  'data-cy': dataCy
}) => /*#__PURE__*/_jsx(Container, {
  bg: active ? 'white.full' : 'black.50',
  color: "black.700",
  cursor: "pointer",
  px: 3,
  py: 20,
  textAlign: "center",
  width: 0.5,
  tabIndex: 0,
  onClick: setActive,
  onKeyDown: event => event.key === 'Enter' && setActive(event),
  "data-cy": dataCy,
  children: /*#__PURE__*/_jsx(P, {
    fontWeight: active ? '600' : 'normal',
    children: children
  })
});

const SecondaryAction = ({
  children,
  loading,
  onSecondaryAction,
  asLink
}) => {
  const Button = asLink ? _StyledLinkButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z : _StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z;
  return typeof onSecondaryAction === 'string' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(Button, {
    as: _Link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    mt: "24px",
    mr: "16px",
    width: "120px",
    href: onSecondaryAction,
    disabled: loading,
    fontSize: "14px",
    children: children
  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(Button, {
    mt: "24px",
    mr: "16px",
    width: "120px",
    fontSize: "14px",
    onClick: onSecondaryAction,
    disabled: loading,
    children: children
  });
};

const NewsletterCheckBox = ({
  onChange,
  checked
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    onChange: ({
      checked,
      name
    }) => onChange({
      target: {
        name,
        value: checked
      }
    }),
    checked: checked,
    name: "newsletterOptIn",
    label: intl.formatMessage(messages.newsletter)
  });
};

const TOSCheckBox = ({
  onChange,
  checked
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
    onChange: ({
      checked,
      name
    }) => onChange({
      target: {
        name,
        value: checked
      }
    }),
    checked: checked,
    name: "tosOptIn",
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      id: "SE0Wpk",
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
        "value": " of Open Collective"
      }],
      values: {
        TOSLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* .getI18nLink */ .fw)({
          href: '/tos',
          openInNewTabNoFollow: true,
          onClick: e => e.stopPropagation() // don't check the checkbox when clicking on the link

        })
      }
    })
  });
};

const useForm = ({
  onEmailChange,
  onFieldChange,
  name,
  newsletterOptIn,
  tosOptIn,
  errors
}) => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    errors,
    name,
    newsletterOptIn,
    tosOptIn
  });
  return {
    getFieldProps: name => ({
      defaultValue: state[name] || '',
      fontSize: '14px',
      lineHeight: '20px',
      type: 'text',
      width: 1,
      onChange: ({
        target
      }) => {
        // Email state is not local so any changes should be handled separately
        let value = target.value;

        if (target.name === 'email') {
          value = undefined;
          onEmailChange(target.value);
        } else {
          onFieldChange(target.name, value);
        }

        setState(_objectSpread(_objectSpread({}, state), {}, {
          [target.name]: value,
          errors: _objectSpread(_objectSpread({}, state.errors), {}, {
            [target.name]: null
          })
        }));
      },
      onInvalid: event => {
        event.persist();
        event.preventDefault();
        setState(_objectSpread(_objectSpread({}, state), {}, {
          errors: _objectSpread(_objectSpread({}, state.errors), {}, {
            [event.target.name]: event.target.validationMessage
          })
        }));
      }
    }),
    getFieldError: name => {
      if (state.errors && state.errors[name]) {
        return state.errors[name];
      }
    },
    state
  };
};

const CreateProfile = _ref => {
  let {
    email,
    name,
    newsletterOptIn,
    tosOptIn,
    submitting,
    errors,
    onEmailChange,
    onFieldChange,
    onSubmit,
    onSecondaryAction,
    emailAlreadyExists,
    isOAuth,
    oAuthAppName,
    oAuthAppImage
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const {
    getFieldError,
    getFieldProps,
    state
  } = useForm({
    onEmailChange,
    onFieldChange,
    name,
    newsletterOptIn,
    tosOptIn,
    errors,
    formatMessage
  });

  const isValid = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(lodash_compact__WEBPACK_IMPORTED_MODULE_3___default()(lodash_values__WEBPACK_IMPORTED_MODULE_0___default()(state.errors)));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      textAlign: "center",
      children: [isOAuth ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          justifyContent: "center",
          mb: 40,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            minWidth: 104,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Image__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              src: "/static/images/oc-logo-oauth.png",
              height: 104,
              width: 104
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            ml: 24,
            mr: 24,
            mt: 32,
            minWidth: 40,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Image__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              src: "/static/images/oauth-flow-connect.png",
              alt: "OAuth Connect",
              height: 40,
              width: 40
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            minWidth: 104,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("img", {
              src: oAuthAppImage,
              alt: "OAuth Logo",
              height: 104,
              width: 104,
              style: {
                borderRadius: 10
              }
            })
          })]
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Image__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          src: "/static/images/oc-logo-watercolor-256.png",
          height: 96,
          width: 96
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        pt: "48px",
        fontSize: "32px",
        fontWeight: "700",
        color: "black.900",
        lineHeight: "40px",
        children: isOAuth ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "sEP10P",
          defaultMessage: [{
            "type": 0,
            "value": "Create an account in Open Collective"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "OkoBON",
          defaultMessage: [{
            "type": 0,
            "value": "Create your personal account"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        fontSize: "16px",
        fontWeight: "500",
        color: "black.700",
        lineHeight: "24px",
        pt: "14px",
        children: isOAuth ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "boQlk1",
          defaultMessage: [{
            "type": 0,
            "value": "and connect with "
          }, {
            "type": 1,
            "value": "oAuthAppName"
          }],
          values: {
            oAuthAppName
          }
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "2cxNhl",
          defaultMessage: [{
            "type": 0,
            "value": "Set up your personal details to continue"
          }]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
      as: "form",
      onSubmit: event => {
        event.preventDefault();

        const data = lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(state, ['name', 'newsletterOptIn', 'tosOptIn']);

        onSubmit(_objectSpread(_objectSpread({}, data), {}, {
          email
        }));
      },
      method: "POST",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        mt: "16px",
        width: 1,
        maxWidth: 575
      }, props), {}, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          fontSize: "18px",
          fontWeight: "700",
          color: "black.900",
          lineHeight: "26px",
          pt: "31px",
          pl: 4,
          alignItems: "center",
          justifyContent: "space-between",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "CreateProfile.PersonalInfo",
            defaultMessage: [{
              "type": 0,
              "value": "Your personal information"
            }]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            height: "0.5px",
            borderColor: "black.400",
            flex: "1",
            ml: 3,
            mr: 4
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          p: 4,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            mb: 24,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              htmlFor: "name",
              labelFontSize: "16px",
              labelFontWeight: 700,
              labelColor: "black.800",
              label: formatMessage(messages.nameLabel),
              error: getFieldError('name'),
              required: true,
              children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), getFieldProps(inputProps.name)), {}, {
                value: name,
                placeholder: "e.g., John Doe"
              }))
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            mb: 24,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              labelColor: "black.800",
              labelFontSize: "16px",
              labelFontWeight: 700,
              htmlFor: "email",
              label: formatMessage(messages.email),
              error: getFieldError('email'),
              children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), getFieldProps(inputProps.name)), {}, {
                type: "email",
                placeholder: "e.g., yourname@yourhost.com",
                value: email,
                onKeyDown: e => {
                  // See https://github.com/facebook/react/issues/6368
                  if (e.key === ' ') {
                    e.preventDefault();
                  }
                },
                required: true
              }))
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            height: "2px",
            borderColor: "black.200",
            flex: "1"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            mt: "17px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(TOSCheckBox, _objectSpread({
              checked: state.tosOptIn
            }, getFieldProps('tosOptIn')))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            mt: "17px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(NewsletterCheckBox, _objectSpread({
              checked: state.newsletterOptIn
            }, getFieldProps('newsletterOptIn')))
          })]
        })]
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        type: "info",
        mt: "24px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          fontSize: "13px",
          fontWeight: 700,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "HM2YJg",
            defaultMessage: [{
              "type": 0,
              "value": "Do you want to create an account for your organization?"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          mt: "8px",
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "18px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "OvoOan",
            defaultMessage: [{
              "type": 0,
              "value": "You are creating your personal account first, once inside, you will be able to create a profile for your company."
            }]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            mt: "8px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://docs.opencollective.com/help/financial-contributors/organizations#what-is-an-organization",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                id: "OuFEXI",
                defaultMessage: [{
                  "type": 0,
                  "value": "Read more about organization accounts"
                }]
              })
            })
          })]
        })]
      }), emailAlreadyExists && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        type: "warning",
        mt: "24px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "KPHWAS",
            defaultMessage: [{
              "type": 1,
              "value": "email"
            }, {
              "type": 0,
              "value": " is already registered on Open Collective. Would you like to Sign In instead?"
            }],
            values: {
              email: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("strong", {
                children: email
              })
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            mt: "8px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(SecondaryAction, {
              onSecondaryAction: onSecondaryAction,
              loading: submitting,
              asLink: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                id: "Qmnl+F",
                defaultMessage: [{
                  "type": 0,
                  "value": "Sign me in"
                }]
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        justifyContent: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(SecondaryAction, {
          onSecondaryAction: onSecondaryAction,
          loading: submitting,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
            children: ["\u2190", ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
              fontWeight: "500",
              fontSize: "14px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                id: "orvpWh",
                defaultMessage: [{
                  "type": 0,
                  "value": "Go back"
                }]
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          mt: "24px",
          buttonStyle: "primary",
          disabled: !email || !state.name || !isValid || !state.tosOptIn,
          width: "234px",
          type: "submit",
          fontWeight: "500",
          loading: submitting,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "v4Ew1a",
            defaultMessage: [{
              "type": 0,
              "value": "Create account and continue"
            }]
          })
        })]
      })]
    })]
  });
};

CreateProfile.defaultProps = {
  errors: {},
  submitting: false
};
CreateProfile.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateProfile",
  "props": {
    "errors": {
      "defaultValue": {
        "value": "{}",
        "computed": false
      },
      "description": "a map of errors to the matching field name, e.g., `{ email: 'Invalid email' }` will display that message until the email field",
      "type": {
        "name": "objectOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "submitting": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Disable submit and show a spinner on button when set to true",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onSubmit": {
      "description": "handles submissions of personal profile form",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "email": {
      "description": "Set the value of email input",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "name": {
      "description": "Set the value of name input",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "newsletterOptIn": {
      "description": "Set the value of newsLetterOptIn input",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "tosOptIn": {
      "description": "Set the value of tosOptIn input",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "onEmailChange": {
      "description": "handles changes in the email input",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onFieldChange": {
      "description": "handles changes in input fields",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "emailAlreadyExists": {
      "description": "specifies whether the email is already registered *",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isOAuth": {
      "description": "Oauth Sign In *",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "oAuthAppName": {
      "description": "Oauth App Name *",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "oAuthAppImage": {
      "description": "Oauth App Image URL *",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  },
  "composes": ["./StyledCard"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateProfile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SignIn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56562);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87262);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51082);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67001);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_9__]);
_StyledInputField__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














/**
 * Component for handing user sign-in or redirecting to sign-up.
 */



class SignIn extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showError: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.unknownEmail !== this.props.unknownEmail) {
      this.setState({
        unknownEmail: this.props.unknownEmail
      });
    }
  }

  renderSecondaryAction(message) {
    const {
      loading,
      onSecondaryAction
    } = this.props;
    return typeof onSecondaryAction === 'string' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      as: _Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
      href: onSecondaryAction,
      disabled: loading,
      fontSize: "14px",
      "data-cy": "signin-secondary-action-btn",
      underlineOnHover: true,
      children: message
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      fontSize: "14px",
      onClick: onSecondaryAction,
      disabled: loading,
      "data-cy": "signin-secondary-action-btn",
      underlineOnHover: true,
      children: message
    });
  }

  getSignInPageHeading(unknownEmail) {
    if (this.props.isOAuth && unknownEmail) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "sAWx+H",
        defaultMessage: [{
          "type": 0,
          "value": "Sign in to your Open Collective account"
        }]
      });
    } else if (this.props.isOAuth) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "07Y/8I",
        defaultMessage: [{
          "type": 0,
          "value": "Continue with your Open Collective account"
        }]
      });
    } else {
      return this.props.label || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "6zdt+y",
        defaultMessage: [{
          "type": 0,
          "value": "Continue with your email"
        }]
      });
    }
  }

  getSignInPageSubHeading(oAuthAppName) {
    if (this.props.isOAuth) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "boQlk1",
        defaultMessage: [{
          "type": 0,
          "value": "and connect with "
        }, {
          "type": 1,
          "value": "oAuthAppName"
        }],
        values: {
          oAuthAppName
        }
      });
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "qxlyPu",
        defaultMessage: [{
          "type": 0,
          "value": "Sign in or create a personal account to continue"
        }]
      });
    }
  }

  render() {
    const {
      onSubmit,
      loading,
      email,
      password,
      onEmailChange,
      onPasswordChange,
      label
    } = this.props;
    const {
      error,
      showError
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("title", {
          children: "Sign In - Open Collective"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        maxWidth: 390,
        px: ['20px', 0],
        children: [this.props.isOAuth ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
            justifyContent: "center",
            mb: 40,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
              minWidth: 104,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: "/static/images/oc-logo-oauth.png",
                height: 104,
                width: 104
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
              ml: 24,
              mr: 24,
              mt: 32,
              minWidth: 40,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: "/static/images/oauth-flow-connect.png",
                height: 40,
                width: 40
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
              minWidth: 104,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("img", {
                src: this.props.oAuthAppImage,
                alt: "",
                height: 104,
                width: 104,
                style: {
                  borderRadius: 10
                }
              })
            })]
          })
        }) : this.props.showOCLogo && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
          justifyContent: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            src: "/static/images/oc-logo-watercolor-256.png",
            height: 128,
            width: 128
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
          as: "label",
          fontWeight: 700,
          htmlFor: "email",
          fontSize: label ? '24px' : ['24px', '32px'],
          mb: 12,
          mt: 3,
          textAlign: "center",
          children: label || this.getSignInPageHeading(this.state.unknownEmail)
        }), this.props.showSubHeading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
          fontWeight: 400,
          fontSize: "16px",
          color: "black.700",
          mb: "50px",
          justifyContent: "center",
          children: this.getSignInPageSubHeading(this.props.oAuthAppName)
        }), !this.state.unknownEmail ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            as: "form",
            method: "POST",
            noValidate: true,
            "data-cy": "signIn-form",
            onSubmit: event => {
              event.preventDefault();

              if (error) {
                return;
              }

              onSubmit();
              this.setState({
                unknownEmail: this.props.unknownEmail
              });
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              style: {
                display: this.props.passwordRequired ? 'none' : 'block'
              },
              labelFontWeight: 600,
              labelFontSize: "13px",
              alignItems: "left",
              width: "100%",
              label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "Form.yourEmail",
                defaultMessage: [{
                  "type": 0,
                  "value": "Your email address"
                }]
              }),
              htmlFor: "email",
              my: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                error: !!error,
                fontSize: "14px",
                id: "email",
                autoComplete: "email",
                name: "email",
                minWidth: 120,
                onChange: ({
                  target
                }) => {
                  target.value = target.value.trim();
                  onEmailChange(target.value);
                  this.setState({
                    error: target.validationMessage,
                    showError: false
                  });
                },
                onKeyDown: e => {
                  // See https://github.com/facebook/react/issues/6368
                  if (e.key === ' ') {
                    e.preventDefault();
                  } else if (e.key === 'Enter') {
                    onEmailChange(e.target.value);
                    this.setState({
                      error: e.target.validationMessage,
                      showError: true
                    });
                  }
                },
                onBlur: () => this.setState({
                  showError: true
                }),
                onInvalid: event => {
                  event.preventDefault();
                  this.setState({
                    error: event.target.validationMessage
                  });
                },
                placeholder: "e.g., yourname@yourhost.com",
                autoFocus: true,
                required: true,
                value: email,
                type: "email",
                width: 1
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              style: {
                display: this.props.passwordRequired ? 'block' : 'none'
              },
              labelFontWeight: 600,
              labelFontSize: "13px",
              alignItems: "left",
              width: "100%",
              label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "Form.yourPassword",
                defaultMessage: [{
                  "type": 0,
                  "value": "Your password"
                }]
              }),
              htmlFor: "password",
              my: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                fontSize: "14px",
                id: "password",
                name: "password",
                autoComplete: "current-password",
                type: "password",
                width: 1,
                value: password,
                autoFocus: this.props.passwordRequired ? true : false,
                required: this.props.passwordRequired ? true : false,
                onChange: ({
                  target
                }) => {
                  if (!this.props.passwordRequired) {
                    return;
                  }

                  onPasswordChange(target.value);
                  this.setState({
                    error: target.validationMessage,
                    showError: false
                  });
                },
                onKeyDown: e => {
                  // See https://github.com/facebook/react/issues/6368
                  if (e.key === ' ') {
                    e.preventDefault();
                  } else if (e.key === 'Enter') {
                    onPasswordChange(e.target.value);
                    this.setState({
                      error: e.target.validationMessage,
                      showError: true
                    });
                  }
                },
                onBlur: () => this.setState({
                  showError: true
                }),
                onInvalid: event => {
                  event.preventDefault();
                  this.setState({
                    error: event.target.validationMessage
                  });
                }
              }, this.props.passwordRequired ? 'required' : 'initial')
            }), error && showError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
              display: "block",
              color: "red.500",
              pt: 2,
              fontSize: "10px",
              lineHeight: "14px",
              "aria-live": "assertive",
              children: error
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              justifyContent: "center",
              mb: "24px",
              mt: "26px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                "data-cy": "signin-btn",
                buttonStyle: "primary",
                fontWeight: "500",
                disabled: !email,
                loading: loading,
                minWidth: 157,
                type: "submit",
                whiteSpace: "nowrap",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "actions.continue",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Continue"
                  }]
                })
              })
            })]
          }), this.props.showSecondaryAction && !this.props.passwordRequired && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              color: "black.800",
              mr: 1,
              fontSize: "14px",
              justifyContent: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "1KQrEf",
                defaultMessage: [{
                  "type": 0,
                  "value": "Don't have one?"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              fontSize: "14px",
              justifyContent: "center",
              mt: 2,
              children: this.renderSecondaryAction( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "0vL5u1",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create an account"
                }]
              }))
            })]
          }), this.props.passwordRequired && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              color: "black.800",
              mr: 1,
              fontSize: "14px",
              justifyContent: "center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "4WXVC+",
                defaultMessage: [{
                  "type": 0,
                  "value": "Want to receive a login link?"
                }]
              }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                fontSize: "14px",
                onClick: () => onSubmit({
                  sendLink: true
                }),
                disabled: loading,
                "data-cy": "signin-secondary-action-btn",
                underlineOnHover: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "bDtPKE",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Send me an email"
                  }]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              color: "black.800",
              mr: 1,
              mt: 2,
              fontSize: "14px",
              justifyContent: "center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "I54CU/",
                defaultMessage: [{
                  "type": 0,
                  "value": "Lost your password?"
                }]
              }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                fontSize: "14px",
                onClick: () => onSubmit({
                  resetPassword: true
                }),
                disabled: loading,
                "data-cy": "signin-secondary-action-btn",
                underlineOnHover: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "OXLLjP",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Reset my password"
                  }]
                })
              })]
            })]
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          textAlign: "center",
          display: "block",
          color: "black.800",
          fontSize: "14px",
          lineHeight: "20px",
          "aria-live": "assertive",
          fontWeight: 400,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "lLnwY8",
            defaultMessage: [{
              "type": 1,
              "value": "email"
            }, {
              "type": 0,
              "value": " does not exist on Open Collective. Would you like to create an account with this email?"
            }],
            values: {
              email: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("strong", {
                children: email
              })
            }
          }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
            mt: "24px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
              mr: "40px",
              children: this.renderSecondaryAction( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "axw0EY",
                defaultMessage: [{
                  "type": 0,
                  "value": "Yes, create an account"
                }]
              }))
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              onClick: () => this.setState({
                unknownEmail: false
              }),
              underlineOnHover: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "uxL7Ai",
                defaultMessage: [{
                  "type": 0,
                  "value": "No, use a different email"
                }]
              })
            })]
          })]
        })]
      })]
    });
  }

}

_defineProperty(SignIn, "defaultProps", {
  showSubHeading: true,
  showOCLogo: true
});

SignIn.__docgenInfo = {
  "description": "Component for handing user sign-in or redirecting to sign-up.",
  "methods": [{
    "name": "renderSecondaryAction",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "message",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getSignInPageHeading",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "unknownEmail",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getSignInPageSubHeading",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "oAuthAppName",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "SignIn",
  "props": {
    "showSubHeading": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Show/hide subheading *",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showOCLogo": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Show/hide Open Collective Logo *",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onSubmit": {
      "description": "handles the email input submission, a.k.a Sign In",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onSecondaryAction": {
      "description": "handles the redirect from sign-in, a.k.a Join Free. Accepts URLs (string) or custom action func",
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "string"
        }]
      },
      "required": true
    },
    "loading": {
      "description": "When set to true, will show a spinner in Sign In button and will disable all actions",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showSecondaryAction": {
      "description": "Whether user can click on \"Join Free\"",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "unknownEmail": {
      "description": "Set this to true to display the unknown email message",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "passwordRequired": {
      "description": "Set this to true to display the password field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "label": {
      "description": "Label, defaults to \"Continue with your email\"",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "email": {
      "description": "Set the value of email input",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "password": {
      "description": "Set the value of password input",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onEmailChange": {
      "description": "handles changes in the email input",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onPasswordChange": {
      "description": "handles changes in the password input",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "isOAuth": {
      "description": "Oauth Sign In *",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "oAuthAppName": {
      "description": "Oauth App Name *",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "oAuthAppImage": {
      "description": "Oauth App Image *",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78720:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "g8": () => (/* binding */ SignInOverlayBackground)
/* harmony export */ });
/* unused harmony export addSignupMutation */
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65985);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32651);
/* harmony import */ var _lib_local_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35427);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69078);
/* harmony import */ var _CreateProfile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22737);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(92129);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(53169);
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(12751);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(19156);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(87262);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(31330);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CreateProfile__WEBPACK_IMPORTED_MODULE_15__, _SignIn__WEBPACK_IMPORTED_MODULE_20__, _StyledInputField__WEBPACK_IMPORTED_MODULE_25__, _ToastProvider__WEBPACK_IMPORTED_MODULE_27__]);
([_CreateProfile__WEBPACK_IMPORTED_MODULE_15__, _SignIn__WEBPACK_IMPORTED_MODULE_20__, _StyledInputField__WEBPACK_IMPORTED_MODULE_25__, _ToastProvider__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






























const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  twoFactorAuthCodeInputLabel: {
    id: "TwoFactorAuth.Setup.Form.InputLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Please enter your 6-digit code without any dashes."
    }]
  },
  recoveryCodeInputLabel: {
    id: "TwoFactorAuth.RecoveryCodes.Form.InputLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Please enter one of your alphanumeric recovery codes."
    }]
  }
});
const SignInFooterLink = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Link__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z).withConfig({
  displayName: "SignInOrJoinFree__SignInFooterLink",
  componentId: "sc-hk5brw-0"
})(["color:#323334;font-size:13px;font-weight:400;&:hover{text-decoration:underline;}"]);
const SignInOverlayBackground = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
  displayName: "SignInOrJoinFree__SignInOverlayBackground",
  componentId: "sc-hk5brw-1"
})(["padding:25px;background:white;border-radius:10px;box-shadow:0px 9px 14px 1px #dedede;"]);
/**
 * Shows a SignIn form by default, with the ability to switch to SignUp form. It
 * also has the API methods binded, so you can use it directly.
 */

class SignInOrJoinFree extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "switchForm", (form, oAuthDetails = {}) => {
      // Update local state
      this.setState({
        form,
        isOAuth: oAuthDetails.isOAuth,
        oAuthAppName: oAuthDetails.oAuthAppName,
        oAuthAppImage: oAuthDetails.oAuthAppImage
      });
    });

    _defineProperty(this, "signIn", async (email, password = null, {
      sendLink = false,
      resetPassword = false
    } = {}) => {
      if (this.state.submitting) {
        return false;
      }

      this.setState({
        submitting: true,
        error: null
      });

      try {
        const response = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .signin */ .xJ)({
          user: {
            email,
            password
          },
          redirect: this.getRedirectURL(),
          websiteUrl: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .getWebsiteUrl */ .ls)(),
          sendLink,
          resetPassword,
          createProfile: false
        }); // In dev/test, API directly returns a redirect URL for emails like
        // test*@opencollective.com.

        if (response.redirect) {
          await this.props.router.replace(response.redirect);
        } else if (response.token) {
          const user = await this.props.login(response.token);

          if (!user) {
            this.setState({
              error: 'Token rejected'
            });
          }
        } else if (resetPassword) {
          await this.props.router.push({
            pathname: '/reset-password/sent',
            query: {
              email
            }
          });
        } else {
          await this.props.router.push({
            pathname: '/signin/sent',
            query: {
              email
            }
          });
        }

        window.scrollTo(0, 0);
      } catch (e) {
        if (e.json?.errorCode === 'EMAIL_DOES_NOT_EXIST') {
          this.setState({
            unknownEmailError: true,
            submitting: false
          });
        } else if (e.json?.errorCode === 'PASSWORD_REQUIRED') {
          this.setState({
            passwordRequired: true,
            submitting: false
          });
        } else if (e.message?.includes('Two-factor authentication is enabled')) {
          this.setState({
            submitting: false
          });
        } else {
          this.props.addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: e.message || 'Server error'
          });
          this.setState({
            submitting: false
          });
        }
      }
    });

    _defineProperty(this, "createProfile", async data => {
      if (this.state.submitting) {
        return false;
      }

      const user = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(data, ['email', 'name', 'legalName', 'newsletterOptIn']);

      const organizationData = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(data, ['orgName', 'orgLegalName', 'githubHandle', 'twitterHandle', 'website']);

      const organization = Object.keys(organizationData).length > 0 ? organizationData : null;

      if (organization) {
        organization.name = organization.orgName;
        organization.legalName = organization.orgLegalName;
        delete organization.orgName;
        delete organization.orgLegalName;
      }

      this.setState({
        submitting: true,
        error: null
      });

      try {
        await this.props.createUser({
          variables: {
            user,
            organization,
            redirect: this.getRedirectURL(),
            websiteUrl: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .getWebsiteUrl */ .ls)()
          }
        });
        await this.props.router.push({
          pathname: '/signin/sent',
          query: {
            email: user.email
          }
        });
        window.scrollTo(0, 0);
      } catch (error) {
        const emailAlreadyExists = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(error, 'graphQLErrors.0.extensions.code') === 'EMAIL_ALREADY_EXISTS';

        if (!emailAlreadyExists) {
          this.props.addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_10__/* .i18nGraphqlException */ .t2)(this.props.intl, error)
          });
        }

        this.setState({
          submitting: false,
          emailAlreadyExists
        });
      }
    });

    _defineProperty(this, "renderTwoFactorAuthBoxes", useRecoveryCodes => {
      const formKey = useRecoveryCodes ? 'recoveryCode' : 'twoFactorAuthenticatorCode';
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
        maxWidth: 480,
        width: 1,
        boxShadow: '0px 9px 14px 1px #dedede',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
          py: 4,
          px: [3, 4],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.H5, {
            as: "label",
            fontWeight: "bold",
            htmlFor: formKey,
            mb: 3,
            textAlign: "left",
            display: "block",
            children: useRecoveryCodes ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "TwoFactorAuth.SignIn.RecoveryCodes",
              defaultMessage: [{
                "type": 0,
                "value": "Reset 2FA using a recovery code:"
              }]
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "TwoFactorAuth.SignIn",
              defaultMessage: [{
                "type": 0,
                "value": "Verify login using the 2FA code:"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
            initialValues: {
              twoFactorAuthenticatorCode: '',
              recoveryCode: ''
            },
            onSubmit: async values => {
              const {
                twoFactorAuthenticatorCode,
                recoveryCode
              } = values;

              if (recoveryCode) {
                const localStorage2FAToken = (0,_lib_local_storage__WEBPACK_IMPORTED_MODULE_12__/* .getFromLocalStorage */ .fp)(_lib_local_storage__WEBPACK_IMPORTED_MODULE_12__/* .LOCAL_STORAGE_KEYS.ACCESS_TOKEN */ .dA.ACCESS_TOKEN);
                const user = this.props.login(localStorage2FAToken, {
                  recoveryCode
                });
                return this.props.router.replace({
                  pathname: '/[slug]/admin/user-security',
                  query: {
                    slug: user.collective.slug
                  }
                });
              } else {
                const localStorage2FAToken = (0,_lib_local_storage__WEBPACK_IMPORTED_MODULE_12__/* .getFromLocalStorage */ .fp)(_lib_local_storage__WEBPACK_IMPORTED_MODULE_12__/* .LOCAL_STORAGE_KEYS.ACCESS_TOKEN */ .dA.ACCESS_TOKEN);
                return this.props.login(localStorage2FAToken, {
                  twoFactorAuthenticatorCode
                });
              }
            },
            children: formik => {
              const {
                values,
                handleSubmit,
                isSubmitting
              } = formik;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                  name: formKey,
                  htmlFor: formKey,
                  label: useRecoveryCodes ? this.props.intl.formatMessage(messages.recoveryCodeInputLabel) : this.props.intl.formatMessage(messages.twoFactorAuthCodeInputLabel),
                  value: values[formKey],
                  required: true,
                  mt: 2,
                  mb: 3,
                  children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Field, _objectSpread(_objectSpread({
                    as: _StyledInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP
                  }, inputProps), {}, {
                    minWidth: 300,
                    minHeight: 75,
                    fontSize: "20px",
                    pattern: useRecoveryCodes ? '[a-zA-Z0-9]{16}' : '[0-9]{6}',
                    inputMode: useRecoveryCodes ? 'none' : 'numeric',
                    autoFocus: true,
                    autoComplete: useRecoveryCodes ? 'on' : 'one-time-code',
                    "data-cy": useRecoveryCodes ? null : 'signin-two-factor-auth-input'
                  }))
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
                  justifyContent: ['center', 'left'],
                  mb: 4,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    fontSize: "13px",
                    minWidth: "148px",
                    minHeight: "36px",
                    buttonStyle: "primary",
                    type: "submit",
                    loading: isSubmitting,
                    onSubmit: handleSubmit,
                    "data-cy": useRecoveryCodes ? null : 'signin-two-factor-auth-button',
                    children: useRecoveryCodes ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "login.twoFactorAuth.reset",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Reset 2FA"
                      }]
                    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "actions.verify",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Verify"
                      }]
                    })
                  })
                })]
              });
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
            children: useRecoveryCodes ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "login.twoFactorAuth.support",
                defaultMessage: [{
                  "type": 0,
                  "value": "If you can't login with 2FA or recovery codes, please contact "
                }, {
                  "type": 8,
                  "value": "SupportLink",
                  "children": [{
                    "type": 0,
                    "value": "support"
                  }]
                }, {
                  "type": 0,
                  "value": "."
                }],
                values: {
                  SupportLink: _I18nFormatters__WEBPACK_IMPORTED_MODULE_17__/* .I18nSupportLink */ .wl
                }
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                fontWeight: "bold",
                fontSize: 14,
                mb: 1,
                textAlign: "left",
                display: "block",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "login.twoFactorAuth.havingTrouble",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Having trouble?"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                type: "button",
                buttonSize: "tiny",
                isBorderless: true,
                buttonStyle: "secondary",
                mb: 3,
                onClick: () => this.setState({
                  useRecoveryCodes: true
                }),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "login.twoFactorAuth.useRecoveryCodes",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Use 2FA recovery codes."
                    }]
                  })
                })
              })]
            })
          })]
        })
      });
    });

    this.state = {
      form: this.props.defaultForm || 'signin',
      error: null,
      submitting: false,
      unknownEmailError: false,
      email: props.email || props.defaultEmail || '',
      useRecoveryCodes: null,
      emailAlreadyExists: false,
      isOAuth: this.props.isOAuth,
      oAuthAppName: this.props.oAuthApplication?.name,
      oAuthAppImage: this.props.oAuthApplication?.account?.imageUrl
    };
  }

  componentDidMount() {
    // Auto signin if an email is provided
    if (this.props.email && (0,validator__WEBPACK_IMPORTED_MODULE_8__.isEmail)(this.props.email)) {
      this.signIn(this.props.email);
    }
  }

  getRedirectURL() {
    let currentPath = window.location.pathname;

    if (window.location.search) {
      currentPath = currentPath + window.location.search;
    }

    let redirectUrl = this.props.redirect;

    if (currentPath.includes('/create-account') && redirectUrl === '/') {
      redirectUrl = '/welcome';
    }

    return encodeURIComponent(redirectUrl || currentPath || '/');
  }

  render() {
    const {
      submitting,
      error,
      unknownEmailError,
      passwordRequired,
      email,
      password,
      useRecoveryCodes
    } = this.state;
    const displayedForm = this.props.form || this.state.form;
    const routes = this.props.routes || {};
    const {
      enforceTwoFactorAuthForLoggedInUser
    } = this.props; // No need to show the form if an email is provided

    const hasError = Boolean(unknownEmailError || error);

    if (this.props.email && !hasError) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {});
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
      flexDirection: "column",
      width: 1,
      alignItems: "center",
      children: enforceTwoFactorAuthForLoggedInUser ? this.renderTwoFactorAuthBoxes(useRecoveryCodes) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [displayedForm !== 'create-account' && !error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_SignIn__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          email: email,
          password: password,
          onEmailChange: email => this.setState({
            email,
            unknownEmailError: false,
            emailAlreadyExists: false
          }),
          onPasswordChange: password => this.setState({
            password
          }),
          onSecondaryAction: routes.join || (() => this.switchForm('create-account', {
            isOAuth: this.props.isOAuth,
            oAuthAppName: this.props.oAuthApplication?.name,
            oAuthAppImage: this.props.oAuthApplication?.account?.imageUrl
          })),
          onSubmit: options => this.signIn(email, password, options),
          loading: submitting,
          unknownEmail: unknownEmailError,
          passwordRequired: passwordRequired,
          label: this.props.signInLabel,
          showSubHeading: this.props.showSubHeading,
          showOCLogo: this.props.showOCLogo,
          showSecondaryAction: !this.props.disableSignup,
          isOAuth: this.props.isOAuth,
          oAuthAppName: this.props.oAuthApplication?.name,
          oAuthAppImage: this.props.oAuthApplication?.account?.imageUrl
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
          flexDirection: "column",
          width: 1,
          alignItems: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
            justifyContent: "center",
            width: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
              maxWidth: 535,
              mx: [2, 4],
              width: "100%",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_CreateProfile__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                email: email,
                name: this.state.name,
                newsletterOptIn: this.state.newsletterOptIn,
                tosOptIn: this.state.tosOptIn,
                onEmailChange: email => this.setState({
                  email,
                  unknownEmailError: false,
                  emailAlreadyExists: false
                }),
                onFieldChange: (name, value) => this.setState({
                  [name]: value
                }),
                onSubmit: this.createProfile,
                onSecondaryAction: routes.signin || (() => this.switchForm('signin')),
                submitting: submitting,
                emailAlreadyExists: this.state.emailAlreadyExists,
                isOAuth: this.state.isOAuth,
                oAuthAppName: this.state.oAuthAppName,
                oAuthAppImage: this.state.oAuthAppImage
              })
            })
          })
        }), !this.props.hideFooter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          mt: "128px",
          pl: ['20px', '20px', '144px'],
          pr: ['20px', '20px', '144px'],
          maxWidth: "880px",
          width: 1,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            borderStyle: "solid",
            borderColor: "black.200",
            mb: "16px"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
            justifyContent: "space-between",
            flexDirection: ['column', 'row'],
            alignItems: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__/* .Span */ .Dr, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(SignInFooterLink, {
                href: "/privacypolicy",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "8aLrwg",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Read our privacy policy"
                  }]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__/* .Span */ .Dr, {
              mt: ['32px', 0],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(SignInFooterLink, {
                href: "/contact",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "error.contactSupport",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Contact support"
                  }]
                })
              })
            })]
          })]
        })]
      })
    });
  }

}

const signupMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_11__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation Signup($user: UserInputType!, $organization: CollectiveInputType, $redirect: String, $websiteUrl: String) {
    createUser(user: $user, organization: $organization, redirect: $redirect, websiteUrl: $websiteUrl) {
      user {
        id
        email
        name
      }
      organization {
        id
        slug
      }
    }
  }
`;
const addSignupMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__.graphql)(signupMutation, {
  name: 'createUser'
});
SignInOrJoinFree.__docgenInfo = {
  "description": "Shows a SignIn form by default, with the ability to switch to SignUp form. It\nalso has the API methods binded, so you can use it directly.",
  "methods": [{
    "name": "switchForm",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "form",
      "type": null
    }, {
      "name": "oAuthDetails",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getRedirectURL",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "signIn",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "email",
      "type": null
    }, {
      "name": "password",
      "type": null
    }, {
      "name": "{ sendLink = false, resetPassword = false }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "createProfile",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "data",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderTwoFactorAuthBoxes",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "useRecoveryCodes",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "SignInOrJoinFree",
  "props": {
    "redirect": {
      "description": "Redirect URL",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "defaultEmail": {
      "description": "To pre-fill the \"email\" field",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "email": {
      "description": "Provide this to automatically sign in the given email",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "createUser": {
      "description": "createUserQuery binding",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "disableSignup": {
      "description": "Whether user can signup from there",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "form": {
      "description": "Use this prop to use this as a controlled component",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'signin'",
          "computed": false
        }, {
          "value": "'create-account'",
          "computed": false
        }]
      },
      "required": false
    },
    "defaultForm": {
      "description": "Set the initial view for the component",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'signin'",
          "computed": false
        }, {
          "value": "'create-account'",
          "computed": false
        }]
      },
      "required": false
    },
    "routes": {
      "description": "If provided, component will use links instead of buttons to make the switch",
      "type": {
        "name": "shape",
        "value": {
          "signin": {
            "name": "string",
            "required": false
          },
          "join": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "signInLabel": {
      "description": "Label for signIn, defaults to \"Continue with your email\"",
      "type": {
        "name": "node"
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
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "addToast": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "hideFooter": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isOAuth": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showSubHeading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showOCLogo": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "oAuthApplication": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          },
          "account": {
            "name": "shape",
            "value": {
              "imageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "login": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "enforceTwoFactorAuthForLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .withToasts */ .CP)((0,react_intl__WEBPACK_IMPORTED_MODULE_6__.injectIntl)(addSignupMutation((0,_UserProvider__WEBPACK_IMPORTED_MODULE_28__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_5__.withRouter)(SignInOrJoinFree))))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;