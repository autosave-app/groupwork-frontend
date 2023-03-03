"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1448],{

/***/ 41448:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g8": function() { return /* binding */ SignInOverlayBackground; },
  "ZP": function() { return /* binding */ components_SignInOrJoinFree; }
});

// UNUSED EXPORTS: addSignupMutation

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(48966);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(65985);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/local-storage.ts
var local_storage = __webpack_require__(35427);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Container.tsx
var components_Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/lodash/values.js
var values = __webpack_require__(52628);
var values_default = /*#__PURE__*/__webpack_require__.n(values);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/compact.js
var compact = __webpack_require__(39693);
var compact_default = /*#__PURE__*/__webpack_require__.n(compact);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(56562);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/StyledLinkButton.js
var StyledLinkButton = __webpack_require__(67001);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/CreateProfile.js






var _excluded = ["email", "name", "newsletterOptIn", "tosOptIn", "submitting", "errors", "onEmailChange", "onFieldChange", "onSubmit", "onSecondaryAction", "emailAlreadyExists", "isOAuth", "oAuthAppName", "oAuthAppImage"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



















var messages = (0,lib.defineMessages)({
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

var Tab = function Tab(_ref) {
  var active = _ref.active,
      children = _ref.children,
      setActive = _ref.setActive,
      dataCy = _ref['data-cy'];
  return /*#__PURE__*/_jsx(Container, {
    bg: active ? 'white.full' : 'black.50',
    color: "black.700",
    cursor: "pointer",
    px: 3,
    py: 20,
    textAlign: "center",
    width: 0.5,
    tabIndex: 0,
    onClick: setActive,
    onKeyDown: function onKeyDown(event) {
      return event.key === 'Enter' && setActive(event);
    },
    "data-cy": dataCy,
    children: /*#__PURE__*/_jsx(P, {
      fontWeight: active ? '600' : 'normal',
      children: children
    })
  });
};

var SecondaryAction = function SecondaryAction(_ref2) {
  var children = _ref2.children,
      loading = _ref2.loading,
      onSecondaryAction = _ref2.onSecondaryAction,
      asLink = _ref2.asLink;
  var Button = asLink ? StyledLinkButton/* default */.Z : StyledButton/* default */.Z;
  return typeof onSecondaryAction === 'string' ? /*#__PURE__*/(0,jsx_runtime.jsx)(Button, {
    as: Link/* default */.Z,
    mt: "24px",
    mr: "16px",
    width: "120px",
    href: onSecondaryAction,
    disabled: loading,
    fontSize: "14px",
    children: children
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Button, {
    mt: "24px",
    mr: "16px",
    width: "120px",
    fontSize: "14px",
    onClick: onSecondaryAction,
    disabled: loading,
    children: children
  });
};

var NewsletterCheckBox = function NewsletterCheckBox(_ref3) {
  var _onChange = _ref3.onChange,
      checked = _ref3.checked;
  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
    onChange: function onChange(_ref4) {
      var checked = _ref4.checked,
          name = _ref4.name;
      return _onChange({
        target: {
          name: name,
          value: checked
        }
      });
    },
    checked: checked,
    name: "newsletterOptIn",
    label: intl.formatMessage(messages.newsletter)
  });
};

var TOSCheckBox = function TOSCheckBox(_ref5) {
  var _onChange2 = _ref5.onChange,
      checked = _ref5.checked;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
    onChange: function onChange(_ref6) {
      var checked = _ref6.checked,
          name = _ref6.name;
      return _onChange2({
        target: {
          name: name,
          value: checked
        }
      });
    },
    checked: checked,
    name: "tosOptIn",
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
        TOSLink: (0,I18nFormatters/* getI18nLink */.fw)({
          href: '/tos',
          openInNewTabNoFollow: true,
          onClick: function onClick(e) {
            return e.stopPropagation();
          } // don't check the checkbox when clicking on the link

        })
      }
    })
  });
};

var useForm = function useForm(_ref7) {
  var onEmailChange = _ref7.onEmailChange,
      onFieldChange = _ref7.onFieldChange,
      name = _ref7.name,
      newsletterOptIn = _ref7.newsletterOptIn,
      tosOptIn = _ref7.tosOptIn,
      errors = _ref7.errors;

  var _useState = (0,react.useState)({
    errors: errors,
    name: name,
    newsletterOptIn: newsletterOptIn,
    tosOptIn: tosOptIn
  }),
      state = _useState[0],
      setState = _useState[1];

  return {
    getFieldProps: function getFieldProps(name) {
      return {
        defaultValue: state[name] || '',
        fontSize: '14px',
        lineHeight: '20px',
        type: 'text',
        width: 1,
        onChange: function onChange(_ref8) {
          var _objectSpread3;

          var target = _ref8.target;
          // Email state is not local so any changes should be handled separately
          var value = target.value;

          if (target.name === 'email') {
            value = undefined;
            onEmailChange(target.value);
          } else {
            onFieldChange(target.name, value);
          }

          setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread3 = {}, defineProperty_default()(_objectSpread3, target.name, value), defineProperty_default()(_objectSpread3, "errors", _objectSpread(_objectSpread({}, state.errors), {}, defineProperty_default()({}, target.name, null))), _objectSpread3)));
        },
        onInvalid: function onInvalid(event) {
          event.persist();
          event.preventDefault();
          setState(_objectSpread(_objectSpread({}, state), {}, {
            errors: _objectSpread(_objectSpread({}, state.errors), {}, defineProperty_default()({}, event.target.name, event.target.validationMessage))
          }));
        }
      };
    },
    getFieldError: function getFieldError(name) {
      if (state.errors && state.errors[name]) {
        return state.errors[name];
      }
    },
    state: state
  };
};

var CreateProfile = function CreateProfile(_ref9) {
  var email = _ref9.email,
      name = _ref9.name,
      newsletterOptIn = _ref9.newsletterOptIn,
      tosOptIn = _ref9.tosOptIn,
      submitting = _ref9.submitting,
      errors = _ref9.errors,
      onEmailChange = _ref9.onEmailChange,
      onFieldChange = _ref9.onFieldChange,
      _onSubmit = _ref9.onSubmit,
      onSecondaryAction = _ref9.onSecondaryAction,
      emailAlreadyExists = _ref9.emailAlreadyExists,
      isOAuth = _ref9.isOAuth,
      oAuthAppName = _ref9.oAuthAppName,
      oAuthAppImage = _ref9.oAuthAppImage,
      props = objectWithoutProperties_default()(_ref9, _excluded);

  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  var _useForm = useForm({
    onEmailChange: onEmailChange,
    onFieldChange: onFieldChange,
    name: name,
    newsletterOptIn: newsletterOptIn,
    tosOptIn: tosOptIn,
    errors: errors,
    formatMessage: formatMessage
  }),
      getFieldError = _useForm.getFieldError,
      getFieldProps = _useForm.getFieldProps,
      state = _useForm.state;

  var isValid = isEmpty_default()(compact_default()(values_default()(state.errors)));

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
      textAlign: "center",
      children: [isOAuth ? /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "center",
          mb: 40,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            minWidth: 104,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
              src: "/static/images/oc-logo-oauth.png",
              height: 104,
              width: 104
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            ml: 24,
            mr: 24,
            mt: 32,
            minWidth: 40,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
              src: "/static/images/oauth-flow-connect.png",
              alt: "OAuth Connect",
              height: 40,
              width: 40
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            minWidth: 104,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
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
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
          src: "/static/images/oc-logo-watercolor-256.png",
          height: 96,
          width: 96
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        pt: "48px",
        fontSize: "32px",
        fontWeight: "700",
        color: "black.900",
        lineHeight: "40px",
        children: isOAuth ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "sEP10P",
          defaultMessage: [{
            "type": 0,
            "value": "Create an account in Open Collective"
          }]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "OkoBON",
          defaultMessage: [{
            "type": 0,
            "value": "Create your personal account"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        fontSize: "16px",
        fontWeight: "500",
        color: "black.700",
        lineHeight: "24px",
        pt: "14px",
        children: isOAuth ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "boQlk1",
          defaultMessage: [{
            "type": 0,
            "value": "and connect with "
          }, {
            "type": 1,
            "value": "oAuthAppName"
          }],
          values: {
            oAuthAppName: oAuthAppName
          }
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "2cxNhl",
          defaultMessage: [{
            "type": 0,
            "value": "Set up your personal details to continue"
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      as: "form",
      onSubmit: function onSubmit(event) {
        event.preventDefault();

        var data = pick_default()(state, ['name', 'newsletterOptIn', 'tosOptIn']);

        _onSubmit(_objectSpread(_objectSpread({}, data), {}, {
          email: email
        }));
      },
      method: "POST",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard/* default */.Z, _objectSpread(_objectSpread({
        mt: "16px",
        width: 1,
        maxWidth: 575
      }, props), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          fontSize: "18px",
          fontWeight: "700",
          color: "black.900",
          lineHeight: "26px",
          pt: "31px",
          pl: 4,
          alignItems: "center",
          justifyContent: "space-between",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "CreateProfile.PersonalInfo",
            defaultMessage: [{
              "type": 0,
              "value": "Your personal information"
            }]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            height: "0.5px",
            borderColor: "black.400",
            flex: "1",
            ml: 3,
            mr: 4
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          p: 4,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mb: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              htmlFor: "name",
              labelFontSize: "16px",
              labelFontWeight: 700,
              labelColor: "black.800",
              label: formatMessage(messages.nameLabel),
              error: getFieldError('name'),
              required: true,
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), getFieldProps(inputProps.name)), {}, {
                  value: name,
                  placeholder: "e.g., John Doe"
                }));
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mb: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
              labelColor: "black.800",
              labelFontSize: "16px",
              labelFontWeight: 700,
              htmlFor: "email",
              label: formatMessage(messages.email),
              error: getFieldError('email'),
              children: function children(inputProps) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), getFieldProps(inputProps.name)), {}, {
                  type: "email",
                  placeholder: "e.g., yourname@yourhost.com",
                  value: email,
                  onKeyDown: function onKeyDown(e) {
                    // See https://github.com/facebook/react/issues/6368
                    if (e.key === ' ') {
                      e.preventDefault();
                    }
                  },
                  required: true
                }));
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            height: "2px",
            borderColor: "black.200",
            flex: "1"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mt: "17px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(TOSCheckBox, _objectSpread({
              checked: state.tosOptIn
            }, getFieldProps('tosOptIn')))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mt: "17px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NewsletterCheckBox, _objectSpread({
              checked: state.newsletterOptIn
            }, getFieldProps('newsletterOptIn')))
          })]
        })]
      })), /*#__PURE__*/(0,jsx_runtime.jsxs)(MessageBox/* default */.Z, {
        type: "info",
        mt: "24px",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          fontSize: "13px",
          fontWeight: 700,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "HM2YJg",
            defaultMessage: [{
              "type": 0,
              "value": "Do you want to create an account for your organization?"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mt: "8px",
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "18px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OvoOan",
            defaultMessage: [{
              "type": 0,
              "value": "You are creating your personal account first, once inside, you will be able to create a profile for your company."
            }]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mt: "8px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://docs.opencollective.com/help/financial-contributors/organizations#what-is-an-organization",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "OuFEXI",
                defaultMessage: [{
                  "type": 0,
                  "value": "Read more about organization accounts"
                }]
              })
            })
          })]
        })]
      }), emailAlreadyExists && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
        type: "warning",
        mt: "24px",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "KPHWAS",
            defaultMessage: [{
              "type": 1,
              "value": "email"
            }, {
              "type": 0,
              "value": " is already registered on Open Collective. Would you like to Sign In instead?"
            }],
            values: {
              email: /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                children: email
              })
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mt: "8px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(SecondaryAction, {
              onSecondaryAction: onSecondaryAction,
              loading: submitting,
              asLink: true,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Qmnl+F",
                defaultMessage: [{
                  "type": 0,
                  "value": "Sign me in"
                }]
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        justifyContent: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SecondaryAction, {
          onSecondaryAction: onSecondaryAction,
          loading: submitting,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
            children: ["\u2190", " ", /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              fontWeight: "500",
              fontSize: "14px",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "orvpWh",
                defaultMessage: [{
                  "type": 0,
                  "value": "Go back"
                }]
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          mt: "24px",
          buttonStyle: "primary",
          disabled: !email || !state.name || !isValid || !state.tosOptIn,
          width: "234px",
          type: "submit",
          fontWeight: "500",
          loading: submitting,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
/* harmony default export */ var components_CreateProfile = (CreateProfile);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
;// CONCATENATED MODULE: ./components/SignIn.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }














/**
 * Component for handing user sign-in or redirecting to sign-up.
 */




var SignIn = /*#__PURE__*/function (_React$Component) {
  inherits_default()(SignIn, _React$Component);

  var _super = _createSuper(SignIn);

  function SignIn(props) {
    var _this;

    classCallCheck_default()(this, SignIn);

    _this = _super.call(this, props);
    _this.state = {
      error: null,
      showError: false
    };
    return _this;
  }

  createClass_default()(SignIn, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.unknownEmail !== this.props.unknownEmail) {
        this.setState({
          unknownEmail: this.props.unknownEmail
        });
      }
    }
  }, {
    key: "renderSecondaryAction",
    value: function renderSecondaryAction(message) {
      var _this$props = this.props,
          loading = _this$props.loading,
          onSecondaryAction = _this$props.onSecondaryAction;
      return typeof onSecondaryAction === 'string' ? /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        as: Link/* default */.Z,
        href: onSecondaryAction,
        disabled: loading,
        fontSize: "14px",
        "data-cy": "signin-secondary-action-btn",
        underlineOnHover: true,
        children: message
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLinkButton/* default */.Z, {
        fontSize: "14px",
        onClick: onSecondaryAction,
        disabled: loading,
        "data-cy": "signin-secondary-action-btn",
        underlineOnHover: true,
        children: message
      });
    }
  }, {
    key: "getSignInPageHeading",
    value: function getSignInPageHeading(unknownEmail) {
      if (this.props.isOAuth && unknownEmail) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "sAWx+H",
          defaultMessage: [{
            "type": 0,
            "value": "Sign in to your Open Collective account"
          }]
        });
      } else if (this.props.isOAuth) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "07Y/8I",
          defaultMessage: [{
            "type": 0,
            "value": "Continue with your Open Collective account"
          }]
        });
      } else {
        return this.props.label || /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "6zdt+y",
          defaultMessage: [{
            "type": 0,
            "value": "Continue with your email"
          }]
        });
      }
    }
  }, {
    key: "getSignInPageSubHeading",
    value: function getSignInPageSubHeading(oAuthAppName) {
      if (this.props.isOAuth) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "boQlk1",
          defaultMessage: [{
            "type": 0,
            "value": "and connect with "
          }, {
            "type": 1,
            "value": "oAuthAppName"
          }],
          values: {
            oAuthAppName: oAuthAppName
          }
        });
      } else {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "qxlyPu",
          defaultMessage: [{
            "type": 0,
            "value": "Sign in or create a personal account to continue"
          }]
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _onSubmit = _this$props2.onSubmit,
          loading = _this$props2.loading,
          email = _this$props2.email,
          password = _this$props2.password,
          onEmailChange = _this$props2.onEmailChange,
          onPasswordChange = _this$props2.onPasswordChange,
          label = _this$props2.label;
      var _this$state = this.state,
          error = _this$state.error,
          showError = _this$state.showError;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)((head_default()), {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("title", {
            children: "Sign In - Open Collective"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          maxWidth: 390,
          px: ['20px', 0],
          children: [this.props.isOAuth ? /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              justifyContent: "center",
              mb: 40,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                minWidth: 104,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
                  src: "/static/images/oc-logo-oauth.png",
                  height: 104,
                  width: 104
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                ml: 24,
                mr: 24,
                mt: 32,
                minWidth: 40,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
                  src: "/static/images/oauth-flow-connect.png",
                  height: 40,
                  width: 40
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                minWidth: 104,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
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
          }) : this.props.showOCLogo && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            justifyContent: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
              src: "/static/images/oc-logo-watercolor-256.png",
              height: 128,
              width: 128
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            as: "label",
            fontWeight: 700,
            htmlFor: "email",
            fontSize: label ? '24px' : ['24px', '32px'],
            mb: 12,
            mt: 3,
            textAlign: "center",
            children: label || this.getSignInPageHeading(this.state.unknownEmail)
          }), this.props.showSubHeading && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            fontWeight: 400,
            fontSize: "16px",
            color: "black.700",
            mb: "50px",
            justifyContent: "center",
            children: this.getSignInPageSubHeading(this.props.oAuthAppName)
          }), !this.state.unknownEmail ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
              as: "form",
              method: "POST",
              noValidate: true,
              "data-cy": "signIn-form",
              onSubmit: function onSubmit(event) {
                event.preventDefault();

                if (error) {
                  return;
                }

                _onSubmit();

                _this2.setState({
                  unknownEmail: _this2.props.unknownEmail
                });
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                style: {
                  display: this.props.passwordRequired ? 'none' : 'block'
                },
                labelFontWeight: 600,
                labelFontSize: "13px",
                alignItems: "left",
                width: "100%",
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "Form.yourEmail",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Your email address"
                  }]
                }),
                htmlFor: "email",
                my: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, {
                  error: !!error,
                  fontSize: "14px",
                  id: "email",
                  autoComplete: "email",
                  name: "email",
                  minWidth: 120,
                  onChange: function onChange(_ref) {
                    var target = _ref.target;
                    target.value = target.value.trim();
                    onEmailChange(target.value);

                    _this2.setState({
                      error: target.validationMessage,
                      showError: false
                    });
                  },
                  onKeyDown: function onKeyDown(e) {
                    // See https://github.com/facebook/react/issues/6368
                    if (e.key === ' ') {
                      e.preventDefault();
                    } else if (e.key === 'Enter') {
                      onEmailChange(e.target.value);

                      _this2.setState({
                        error: e.target.validationMessage,
                        showError: true
                      });
                    }
                  },
                  onBlur: function onBlur() {
                    return _this2.setState({
                      showError: true
                    });
                  },
                  onInvalid: function onInvalid(event) {
                    event.preventDefault();

                    _this2.setState({
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
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                style: {
                  display: this.props.passwordRequired ? 'block' : 'none'
                },
                labelFontWeight: 600,
                labelFontSize: "13px",
                alignItems: "left",
                width: "100%",
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "Form.yourPassword",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Your password"
                  }]
                }),
                htmlFor: "password",
                my: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, {
                  fontSize: "14px",
                  id: "password",
                  name: "password",
                  autoComplete: "current-password",
                  type: "password",
                  width: 1,
                  value: password,
                  autoFocus: this.props.passwordRequired ? true : false,
                  required: this.props.passwordRequired ? true : false,
                  onChange: function onChange(_ref2) {
                    var target = _ref2.target;

                    if (!_this2.props.passwordRequired) {
                      return;
                    }

                    onPasswordChange(target.value);

                    _this2.setState({
                      error: target.validationMessage,
                      showError: false
                    });
                  },
                  onKeyDown: function onKeyDown(e) {
                    // See https://github.com/facebook/react/issues/6368
                    if (e.key === ' ') {
                      e.preventDefault();
                    } else if (e.key === 'Enter') {
                      onPasswordChange(e.target.value);

                      _this2.setState({
                        error: e.target.validationMessage,
                        showError: true
                      });
                    }
                  },
                  onBlur: function onBlur() {
                    return _this2.setState({
                      showError: true
                    });
                  },
                  onInvalid: function onInvalid(event) {
                    event.preventDefault();

                    _this2.setState({
                      error: event.target.validationMessage
                    });
                  }
                }, this.props.passwordRequired ? 'required' : 'initial')
              }), error && showError && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                display: "block",
                color: "red.500",
                pt: 2,
                fontSize: "10px",
                lineHeight: "14px",
                "aria-live": "assertive",
                children: error
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                justifyContent: "center",
                mb: "24px",
                mt: "26px",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                  "data-cy": "signin-btn",
                  buttonStyle: "primary",
                  fontWeight: "500",
                  disabled: !email,
                  loading: loading,
                  minWidth: 157,
                  type: "submit",
                  whiteSpace: "nowrap",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "actions.continue",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Continue"
                    }]
                  })
                })
              })]
            }), this.props.showSecondaryAction && !this.props.passwordRequired && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                color: "black.800",
                mr: 1,
                fontSize: "14px",
                justifyContent: "center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "1KQrEf",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Don't have one?"
                  }]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                fontSize: "14px",
                justifyContent: "center",
                mt: 2,
                children: this.renderSecondaryAction( /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "0vL5u1",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create an account"
                  }]
                }))
              })]
            }), this.props.passwordRequired && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                color: "black.800",
                mr: 1,
                fontSize: "14px",
                justifyContent: "center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "4WXVC+",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Want to receive a login link?"
                  }]
                }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLinkButton/* default */.Z, {
                  fontSize: "14px",
                  onClick: function onClick() {
                    return _onSubmit({
                      sendLink: true
                    });
                  },
                  disabled: loading,
                  "data-cy": "signin-secondary-action-btn",
                  underlineOnHover: true,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "bDtPKE",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Send me an email"
                    }]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                color: "black.800",
                mr: 1,
                mt: 2,
                fontSize: "14px",
                justifyContent: "center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "I54CU/",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Lost your password?"
                  }]
                }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLinkButton/* default */.Z, {
                  fontSize: "14px",
                  onClick: function onClick() {
                    return _onSubmit({
                      resetPassword: true
                    });
                  },
                  disabled: loading,
                  "data-cy": "signin-secondary-action-btn",
                  underlineOnHover: true,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "OXLLjP",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Reset my password"
                    }]
                  })
                })]
              })]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
            textAlign: "center",
            display: "block",
            color: "black.800",
            fontSize: "14px",
            lineHeight: "20px",
            "aria-live": "assertive",
            fontWeight: 400,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "lLnwY8",
              defaultMessage: [{
                "type": 1,
                "value": "email"
              }, {
                "type": 0,
                "value": " does not exist on Open Collective. Would you like to create an account with this email?"
              }],
              values: {
                email: /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                  children: email
                })
              }
            }), ' ', /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              mt: "24px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                mr: "40px",
                children: this.renderSecondaryAction( /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "axw0EY",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Yes, create an account"
                  }]
                }))
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                onClick: function onClick() {
                  return _this2.setState({
                    unknownEmail: false
                  });
                },
                underlineOnHover: true,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
  }]);

  return SignIn;
}(react.Component);

defineProperty_default()(SignIn, "defaultProps", {
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
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
;// CONCATENATED MODULE: ./components/SignInOrJoinFree.js












var _templateObject;

function SignInOrJoinFree_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function SignInOrJoinFree_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SignInOrJoinFree_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SignInOrJoinFree_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function SignInOrJoinFree_createSuper(Derived) { var hasNativeReflectConstruct = SignInOrJoinFree_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function SignInOrJoinFree_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






























var SignInOrJoinFree_messages = (0,lib.defineMessages)({
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
var SignInFooterLink = (0,styled_components_browser_esm/* default */.ZP)(Link/* default */.Z).withConfig({
  displayName: "SignInOrJoinFree__SignInFooterLink",
  componentId: "sc-hk5brw-0"
})(["color:#323334;font-size:13px;font-weight:400;&:hover{text-decoration:underline;}"]);
var SignInOverlayBackground = (0,styled_components_browser_esm/* default */.ZP)(components_Container/* default */.Z).withConfig({
  displayName: "SignInOrJoinFree__SignInOverlayBackground",
  componentId: "sc-hk5brw-1"
})(["padding:25px;background:white;border-radius:10px;box-shadow:0px 9px 14px 1px #dedede;"]);
/**
 * Shows a SignIn form by default, with the ability to switch to SignUp form. It
 * also has the API methods binded, so you can use it directly.
 */

var SignInOrJoinFree = /*#__PURE__*/function (_React$Component) {
  inherits_default()(SignInOrJoinFree, _React$Component);

  var _super = SignInOrJoinFree_createSuper(SignInOrJoinFree);

  function SignInOrJoinFree(props) {
    var _this$props$oAuthAppl, _this$props$oAuthAppl2, _this$props$oAuthAppl3;

    var _this;

    classCallCheck_default()(this, SignInOrJoinFree);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "switchForm", function (form) {
      var oAuthDetails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Update local state
      _this.setState({
        form: form,
        isOAuth: oAuthDetails.isOAuth,
        oAuthAppName: oAuthDetails.oAuthAppName,
        oAuthAppImage: oAuthDetails.oAuthAppImage
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "signIn", /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(email) {
        var password,
            _ref2,
            _ref2$sendLink,
            sendLink,
            _ref2$resetPassword,
            resetPassword,
            response,
            user,
            _e$json,
            _e$json2,
            _e$message,
            _args = arguments;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                password = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                _ref2 = _args.length > 2 && _args[2] !== undefined ? _args[2] : {}, _ref2$sendLink = _ref2.sendLink, sendLink = _ref2$sendLink === void 0 ? false : _ref2$sendLink, _ref2$resetPassword = _ref2.resetPassword, resetPassword = _ref2$resetPassword === void 0 ? false : _ref2$resetPassword;

                if (!_this.state.submitting) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", false);

              case 4:
                _this.setState({
                  submitting: true,
                  error: null
                });

                _context.prev = 5;
                _context.next = 8;
                return (0,api/* signin */.xJ)({
                  user: {
                    email: email,
                    password: password
                  },
                  redirect: _this.getRedirectURL(),
                  websiteUrl: (0,utils/* getWebsiteUrl */.ls)(),
                  sendLink: sendLink,
                  resetPassword: resetPassword,
                  createProfile: false
                });

              case 8:
                response = _context.sent;

                if (!response.redirect) {
                  _context.next = 14;
                  break;
                }

                _context.next = 12;
                return _this.props.router.replace(response.redirect);

              case 12:
                _context.next = 28;
                break;

              case 14:
                if (!response.token) {
                  _context.next = 21;
                  break;
                }

                _context.next = 17;
                return _this.props.login(response.token);

              case 17:
                user = _context.sent;

                if (!user) {
                  _this.setState({
                    error: 'Token rejected'
                  });
                }

                _context.next = 28;
                break;

              case 21:
                if (!resetPassword) {
                  _context.next = 26;
                  break;
                }

                _context.next = 24;
                return _this.props.router.push({
                  pathname: '/reset-password/sent',
                  query: {
                    email: email
                  }
                });

              case 24:
                _context.next = 28;
                break;

              case 26:
                _context.next = 28;
                return _this.props.router.push({
                  pathname: '/signin/sent',
                  query: {
                    email: email
                  }
                });

              case 28:
                window.scrollTo(0, 0);
                _context.next = 34;
                break;

              case 31:
                _context.prev = 31;
                _context.t0 = _context["catch"](5);

                if (((_e$json = _context.t0.json) === null || _e$json === void 0 ? void 0 : _e$json.errorCode) === 'EMAIL_DOES_NOT_EXIST') {
                  _this.setState({
                    unknownEmailError: true,
                    submitting: false
                  });
                } else if (((_e$json2 = _context.t0.json) === null || _e$json2 === void 0 ? void 0 : _e$json2.errorCode) === 'PASSWORD_REQUIRED') {
                  _this.setState({
                    passwordRequired: true,
                    submitting: false
                  });
                } else if ((_e$message = _context.t0.message) !== null && _e$message !== void 0 && _e$message.includes('Two-factor authentication is enabled')) {
                  _this.setState({
                    submitting: false
                  });
                } else {
                  _this.props.addToast({
                    type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                    message: _context.t0.message || 'Server error'
                  });

                  _this.setState({
                    submitting: false
                  });
                }

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 31]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "createProfile", /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2(data) {
        var user, organizationData, organization, emailAlreadyExists;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this.state.submitting) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", false);

              case 2:
                user = pick_default()(data, ['email', 'name', 'legalName', 'newsletterOptIn']);
                organizationData = pick_default()(data, ['orgName', 'orgLegalName', 'githubHandle', 'twitterHandle', 'website']);
                organization = Object.keys(organizationData).length > 0 ? organizationData : null;

                if (organization) {
                  organization.name = organization.orgName;
                  organization.legalName = organization.orgLegalName;
                  delete organization.orgName;
                  delete organization.orgLegalName;
                }

                _this.setState({
                  submitting: true,
                  error: null
                });

                _context2.prev = 7;
                _context2.next = 10;
                return _this.props.createUser({
                  variables: {
                    user: user,
                    organization: organization,
                    redirect: _this.getRedirectURL(),
                    websiteUrl: (0,utils/* getWebsiteUrl */.ls)()
                  }
                });

              case 10:
                _context2.next = 12;
                return _this.props.router.push({
                  pathname: '/signin/sent',
                  query: {
                    email: user.email
                  }
                });

              case 12:
                window.scrollTo(0, 0);
                _context2.next = 20;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](7);
                emailAlreadyExists = get_default()(_context2.t0, 'graphQLErrors.0.extensions.code') === 'EMAIL_ALREADY_EXISTS';

                if (!emailAlreadyExists) {
                  _this.props.addToast({
                    type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                    message: (0,errors/* i18nGraphqlException */.t2)(_this.props.intl, _context2.t0)
                  });
                }

                _this.setState({
                  submitting: false,
                  emailAlreadyExists: emailAlreadyExists
                });

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[7, 15]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "renderTwoFactorAuthBoxes", function (useRecoveryCodes) {
      var formKey = useRecoveryCodes ? 'recoveryCode' : 'twoFactorAuthenticatorCode';
      return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
        maxWidth: 480,
        width: 1,
        boxShadow: '0px 9px 14px 1px #dedede',
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          py: 4,
          px: [3, 4],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H5, {
            as: "label",
            fontWeight: "bold",
            htmlFor: formKey,
            mb: 3,
            textAlign: "left",
            display: "block",
            children: useRecoveryCodes ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "TwoFactorAuth.SignIn.RecoveryCodes",
              defaultMessage: [{
                "type": 0,
                "value": "Reset 2FA using a recovery code:"
              }]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "TwoFactorAuth.SignIn",
              defaultMessage: [{
                "type": 0,
                "value": "Verify login using the 2FA code:"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.J9, {
            initialValues: {
              twoFactorAuthenticatorCode: '',
              recoveryCode: ''
            },
            onSubmit: /*#__PURE__*/function () {
              var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee3(values) {
                var twoFactorAuthenticatorCode, recoveryCode, localStorage2FAToken, user, _localStorage2FAToken;

                return regenerator_default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        twoFactorAuthenticatorCode = values.twoFactorAuthenticatorCode, recoveryCode = values.recoveryCode;

                        if (!recoveryCode) {
                          _context3.next = 7;
                          break;
                        }

                        localStorage2FAToken = (0,local_storage/* getFromLocalStorage */.fp)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN);
                        user = _this.props.login(localStorage2FAToken, {
                          recoveryCode: recoveryCode
                        });
                        return _context3.abrupt("return", _this.props.router.replace({
                          pathname: '/[slug]/admin/user-security',
                          query: {
                            slug: user.collective.slug
                          }
                        }));

                      case 7:
                        _localStorage2FAToken = (0,local_storage/* getFromLocalStorage */.fp)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN);
                        return _context3.abrupt("return", _this.props.login(_localStorage2FAToken, {
                          twoFactorAuthenticatorCode: twoFactorAuthenticatorCode
                        }));

                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }(),
            children: function children(formik) {
              var values = formik.values,
                  handleSubmit = formik.handleSubmit,
                  isSubmitting = formik.isSubmitting;
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Form */.l0, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                  name: formKey,
                  htmlFor: formKey,
                  label: useRecoveryCodes ? _this.props.intl.formatMessage(SignInOrJoinFree_messages.recoveryCodeInputLabel) : _this.props.intl.formatMessage(SignInOrJoinFree_messages.twoFactorAuthCodeInputLabel),
                  value: values[formKey],
                  required: true,
                  mt: 2,
                  mb: 3,
                  children: function children(inputProps) {
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, SignInOrJoinFree_objectSpread(SignInOrJoinFree_objectSpread({
                      as: StyledInput/* default */.ZP
                    }, inputProps), {}, {
                      minWidth: 300,
                      minHeight: 75,
                      fontSize: "20px",
                      pattern: useRecoveryCodes ? '[a-zA-Z0-9]{16}' : '[0-9]{6}',
                      inputMode: useRecoveryCodes ? 'none' : 'numeric',
                      autoFocus: true,
                      autoComplete: useRecoveryCodes ? 'on' : 'one-time-code',
                      "data-cy": useRecoveryCodes ? null : 'signin-two-factor-auth-input'
                    }));
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                  justifyContent: ['center', 'left'],
                  mb: 4,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                    fontSize: "13px",
                    minWidth: "148px",
                    minHeight: "36px",
                    buttonStyle: "primary",
                    type: "submit",
                    loading: isSubmitting,
                    onSubmit: handleSubmit,
                    "data-cy": useRecoveryCodes ? null : 'signin-two-factor-auth-button',
                    children: useRecoveryCodes ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "login.twoFactorAuth.reset",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Reset 2FA"
                      }]
                    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            children: useRecoveryCodes ? /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
                  SupportLink: I18nFormatters/* I18nSupportLink */.wl
                }
              })
            }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontWeight: "bold",
                fontSize: 14,
                mb: 1,
                textAlign: "left",
                display: "block",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "login.twoFactorAuth.havingTrouble",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Having trouble?"
                  }]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                type: "button",
                buttonSize: "tiny",
                isBorderless: true,
                buttonStyle: "secondary",
                mb: 3,
                onClick: function onClick() {
                  return _this.setState({
                    useRecoveryCodes: true
                  });
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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

    _this.state = {
      form: _this.props.defaultForm || 'signin',
      error: null,
      submitting: false,
      unknownEmailError: false,
      email: props.email || props.defaultEmail || '',
      useRecoveryCodes: null,
      emailAlreadyExists: false,
      isOAuth: _this.props.isOAuth,
      oAuthAppName: (_this$props$oAuthAppl = _this.props.oAuthApplication) === null || _this$props$oAuthAppl === void 0 ? void 0 : _this$props$oAuthAppl.name,
      oAuthAppImage: (_this$props$oAuthAppl2 = _this.props.oAuthApplication) === null || _this$props$oAuthAppl2 === void 0 ? void 0 : (_this$props$oAuthAppl3 = _this$props$oAuthAppl2.account) === null || _this$props$oAuthAppl3 === void 0 ? void 0 : _this$props$oAuthAppl3.imageUrl
    };
    return _this;
  }

  createClass_default()(SignInOrJoinFree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Auto signin if an email is provided
      if (this.props.email && (0,validator.isEmail)(this.props.email)) {
        this.signIn(this.props.email);
      }
    }
  }, {
    key: "getRedirectURL",
    value: function getRedirectURL() {
      var currentPath = window.location.pathname;

      if (window.location.search) {
        currentPath = currentPath + window.location.search;
      }

      var redirectUrl = this.props.redirect;

      if (currentPath.includes('/create-account') && redirectUrl === '/') {
        redirectUrl = '/welcome';
      }

      return encodeURIComponent(redirectUrl || currentPath || '/');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _this$props$oAuthAppl4,
          _this$props$oAuthAppl5,
          _this$props$oAuthAppl6;

      var _this$state = this.state,
          submitting = _this$state.submitting,
          error = _this$state.error,
          unknownEmailError = _this$state.unknownEmailError,
          passwordRequired = _this$state.passwordRequired,
          email = _this$state.email,
          password = _this$state.password,
          useRecoveryCodes = _this$state.useRecoveryCodes;
      var displayedForm = this.props.form || this.state.form;
      var routes = this.props.routes || {};
      var enforceTwoFactorAuthForLoggedInUser = this.props.enforceTwoFactorAuthForLoggedInUser; // No need to show the form if an email is provided

      var hasError = Boolean(unknownEmailError || error);

      if (this.props.email && !hasError) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {});
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        flexDirection: "column",
        width: 1,
        alignItems: "center",
        children: enforceTwoFactorAuthForLoggedInUser ? this.renderTwoFactorAuthBoxes(useRecoveryCodes) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [displayedForm !== 'create-account' && !error ? /*#__PURE__*/(0,jsx_runtime.jsx)(SignIn, {
            email: email,
            password: password,
            onEmailChange: function onEmailChange(email) {
              return _this2.setState({
                email: email,
                unknownEmailError: false,
                emailAlreadyExists: false
              });
            },
            onPasswordChange: function onPasswordChange(password) {
              return _this2.setState({
                password: password
              });
            },
            onSecondaryAction: routes.join || function () {
              var _this2$props$oAuthApp, _this2$props$oAuthApp2, _this2$props$oAuthApp3;

              return _this2.switchForm('create-account', {
                isOAuth: _this2.props.isOAuth,
                oAuthAppName: (_this2$props$oAuthApp = _this2.props.oAuthApplication) === null || _this2$props$oAuthApp === void 0 ? void 0 : _this2$props$oAuthApp.name,
                oAuthAppImage: (_this2$props$oAuthApp2 = _this2.props.oAuthApplication) === null || _this2$props$oAuthApp2 === void 0 ? void 0 : (_this2$props$oAuthApp3 = _this2$props$oAuthApp2.account) === null || _this2$props$oAuthApp3 === void 0 ? void 0 : _this2$props$oAuthApp3.imageUrl
              });
            },
            onSubmit: function onSubmit(options) {
              return _this2.signIn(email, password, options);
            },
            loading: submitting,
            unknownEmail: unknownEmailError,
            passwordRequired: passwordRequired,
            label: this.props.signInLabel,
            showSubHeading: this.props.showSubHeading,
            showOCLogo: this.props.showOCLogo,
            showSecondaryAction: !this.props.disableSignup,
            isOAuth: this.props.isOAuth,
            oAuthAppName: (_this$props$oAuthAppl4 = this.props.oAuthApplication) === null || _this$props$oAuthAppl4 === void 0 ? void 0 : _this$props$oAuthAppl4.name,
            oAuthAppImage: (_this$props$oAuthAppl5 = this.props.oAuthApplication) === null || _this$props$oAuthAppl5 === void 0 ? void 0 : (_this$props$oAuthAppl6 = _this$props$oAuthAppl5.account) === null || _this$props$oAuthAppl6 === void 0 ? void 0 : _this$props$oAuthAppl6.imageUrl
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            flexDirection: "column",
            width: 1,
            alignItems: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              justifyContent: "center",
              width: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                maxWidth: 535,
                mx: [2, 4],
                width: "100%",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_CreateProfile, {
                  email: email,
                  name: this.state.name,
                  newsletterOptIn: this.state.newsletterOptIn,
                  tosOptIn: this.state.tosOptIn,
                  onEmailChange: function onEmailChange(email) {
                    return _this2.setState({
                      email: email,
                      unknownEmailError: false,
                      emailAlreadyExists: false
                    });
                  },
                  onFieldChange: function onFieldChange(name, value) {
                    return _this2.setState(defineProperty_default()({}, name, value));
                  },
                  onSubmit: this.createProfile,
                  onSecondaryAction: routes.signin || function () {
                    return _this2.switchForm('signin');
                  },
                  submitting: submitting,
                  emailAlreadyExists: this.state.emailAlreadyExists,
                  isOAuth: this.state.isOAuth,
                  oAuthAppName: this.state.oAuthAppName,
                  oAuthAppImage: this.state.oAuthAppImage
                })
              })
            })
          }), !this.props.hideFooter && /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Container/* default */.Z, {
            mt: "128px",
            pl: ['20px', '20px', '144px'],
            pr: ['20px', '20px', '144px'],
            maxWidth: "880px",
            width: 1,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
              borderStyle: "solid",
              borderColor: "black.200",
              mb: "16px"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              justifyContent: "space-between",
              flexDirection: ['column', 'row'],
              alignItems: "center",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(SignInFooterLink, {
                  href: "/privacypolicy",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "8aLrwg",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Read our privacy policy"
                    }]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                mt: ['32px', 0],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(SignInFooterLink, {
                  href: "/contact",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
  }]);

  return SignInOrJoinFree;
}(react.Component);

var signupMutation = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation Signup($user: UserInputType!, $organization: CollectiveInputType, $redirect: String, $websiteUrl: String) {\n    createUser(user: $user, organization: $organization, redirect: $redirect, websiteUrl: $websiteUrl) {\n      user {\n        id\n        email\n        name\n      }\n      organization {\n        id\n        slug\n      }\n    }\n  }\n"])));
var addSignupMutation = (0,graphql/* graphql */.B)(signupMutation, {
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
/* harmony default export */ var components_SignInOrJoinFree = ((0,ToastProvider/* withToasts */.CP)((0,injectIntl/* default */.ZP)(addSignupMutation((0,UserProvider/* withUser */.ns)((0,router.withRouter)(SignInOrJoinFree))))));

/***/ })

}]);
//# sourceMappingURL=1448-8cf03d7e05fca095.js.map