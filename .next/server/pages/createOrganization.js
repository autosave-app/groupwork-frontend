"use strict";
(() => {
var exports = {};
exports.id = 2169;
exports.ids = [2169];
exports.modules = {

/***/ 47492:
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
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97079);
/* harmony import */ var _onboarding_modal_OnboardingModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58021);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _CreateOrganizationForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78019);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78720);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_onboarding_modal_OnboardingModal__WEBPACK_IMPORTED_MODULE_8__, _CreateOrganizationForm__WEBPACK_IMPORTED_MODULE_10__, _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_12__]);
([_onboarding_modal_OnboardingModal__WEBPACK_IMPORTED_MODULE_8__, _CreateOrganizationForm__WEBPACK_IMPORTED_MODULE_10__, _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















class CreateOrganization extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateAdmins", admins => {
      this.setState({
        admins
      });
    });

    this.state = {
      collective: {
        type: 'ORGANIZATION'
      },
      result: {},
      admins: []
    };
    this.createOrganization = this.createOrganization.bind(this);
    this.error = this.error.bind(this);
    this.resetError = this.resetError.bind(this);
  }

  error(msg) {
    this.setState({
      result: {
        error: msg
      }
    });
  }

  resetError() {
    this.error();
  }

  async createOrganization(organization) {
    if (!organization.authorization) {
      this.setState({
        result: {
          error: 'Verify that you are an authorized organization representative'
        }
      });
      return;
    }

    this.setState({
      status: 'loading'
    });
    delete organization.authorization;

    try {
      const response = await this.props.createOrganization({
        variables: {
          organization
        }
      });

      if (response) {
        await this.props.refetchLoggedInUser();
        const member = await this.props.LoggedInUser.memberOf.filter(member => member.collective.id === response.data.createOrganization.legacyId);
        const adminList = this.state.admins.filter(admin => {
          if (admin.member.id !== this.props.LoggedInUser.collective.id) {
            return admin;
          }
        });
        this.setState({
          admins: [...adminList, {
            role: 'ADMIN',
            member: this.props.LoggedInUser.collective,
            id: member[0].id
          }]
        });
        await this.props.editCollectiveMembers({
          variables: {
            collectiveId: response.data.createOrganization.legacyId,
            members: this.state.admins.map(member => ({
              id: member.id,
              role: member.role,
              member: {
                id: member.member.id,
                name: member.member.name
              }
            }))
          }
        });
      }

      await this.props.refetchLoggedInUser();
      this.props.router.push({
        pathname: `/${response.data.createOrganization.slug}`,
        query: {
          status: 'collectiveCreated'
        }
      }).then(() => window.scrollTo(0, 0));
    } catch (err) {
      const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .getErrorFromGraphqlException */ .H1)(err).message;
      this.setState({
        result: {
          error: errorMsg
        },
        status: 'error'
      });
      throw new Error(errorMsg);
    }
  }

  render() {
    const {
      LoggedInUser
    } = this.props;
    const {
      result,
      collective,
      status
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      children: [!LoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        mb: 5,
        p: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          flexDirection: "column",
          p: 4,
          mt: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
            mb: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.H1, {
              fontSize: "32px",
              lineHeight: "36px",
              fontWeight: "bold",
              textAlign: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "collective.create.join",
                defaultMessage: [{
                  "type": 0,
                  "value": "Join Open Collective"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
              fontSize: "14px",
              color: "black.600",
              mb: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "organization.create.createOrSignIn",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create an account (or sign in) to create an organization."
                }]
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {})]
      }), LoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_CreateOrganizationForm__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        collective: collective,
        onSubmit: this.createOrganization,
        onChange: this.resetError,
        error: result.error,
        updateAdmins: this.updateAdmins,
        loading: status === 'loading'
      })]
    });
  }

}

const createOrganizationMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation CreateOrganization($organization: OrganizationCreateInput!) {
    createOrganization(organization: $organization) {
      id
      name
      slug
      description
      website
      legacyId
    }
  }
`;
const addCreateOrganizationMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(createOrganizationMutation, {
  name: 'createOrganization',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T
  }
});
const addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .compose */ .qC)(addCreateOrganizationMutation, _onboarding_modal_OnboardingModal__WEBPACK_IMPORTED_MODULE_8__.addEditCollectiveMembersMutation);
CreateOrganization.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "error",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "msg",
      "type": null
    }],
    "returns": null
  }, {
    "name": "resetError",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "updateAdmins",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "admins",
      "type": null
    }],
    "returns": null
  }, {
    "name": "createOrganization",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "organization",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateOrganization",
  "props": {
    "createOrganization": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "editCollectiveMembers": {
      "description": "",
      "type": {
        "name": "func"
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
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addGraphql((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(CreateOrganization)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75142);
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _create_collective_CreateCollectiveForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16856);
/* harmony import */ var _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14574);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5993);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41433);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(32631);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_create_collective_CreateCollectiveForm__WEBPACK_IMPORTED_MODULE_7__, _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_9__, _StyledInputField__WEBPACK_IMPORTED_MODULE_17__]);
([_create_collective_CreateCollectiveForm__WEBPACK_IMPORTED_MODULE_7__, _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_9__, _StyledInputField__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const orgMessages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  nameLabel: {
    id: "Organization.Name",
    defaultMessage: [{
      "type": 0,
      "value": "Organization name"
    }]
  },
  legalNameLabel: {
    id: "LegalName",
    defaultMessage: [{
      "type": 0,
      "value": "Legal Name"
    }]
  },
  slugLabel: {
    id: "createCollective.form.slugLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Set your URL"
    }]
  },
  descriptionPlaceholder: {
    id: "create.collective.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Making the world a better place"
    }]
  },
  websiteLabel: {
    id: "createOrg.form.websiteLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Organization website"
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
    id: "ExpenseForm.inviteeOrgDescriptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What does your organization do?"
    }]
  },
  descriptionHint: {
    id: "createCollective.form.descriptionHint",
    defaultMessage: [{
      "type": 0,
      "value": "Write a short description (150 characters max)"
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
  },
  errorSlugHyphen: {
    id: "createOrg.form.error.slug.hyphen",
    defaultMessage: [{
      "type": 0,
      "value": "Organization URL slug cannot start or end with a hyphen (-)"
    }]
  },
  errorWebsite: {
    id: "createOrg.form.error.website",
    defaultMessage: [{
      "type": 0,
      "value": "Enter a valid website, e.g., www.example.com or example.org"
    }]
  }
});
const placeholders = {
  name: {
    id: 'placeholder.name',
    defaultMessage: 'e.g., Salesforce, Airbnb'
  },
  examples: {
    id: 'examples',
    defaultMessage: 'e.g., {examples}'
  },
  slug: {
    id: 'placeholder.slug',
    defaultMessage: 'Airbnb'
  },
  description: {
    id: 'placeholderdescription',
    defaultMessage: 'Making a world a better place'
  },
  website: {
    id: 'placeholder.website',
    defaultMessage: 'www.example.com'
  },
  username: {
    id: 'placeholder.username',
    defaultMessage: 'User name'
  }
};

const CreateOrganizationForm = props => {
  const {
    intl,
    error,
    loading,
    LoggedInUser,
    onSubmit,
    updateAdmins
  } = props;
  const {
    0: authorization,
    1: setAuthorization
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: admins,
    1: setAdmins
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const initialValues = {
    name: '',
    legalName: '',
    slug: '',
    description: '',
    website: '',
    coAdmin: ''
  };

  const validate = values => {
    const errors = {};

    if (values.name.length > 50) {
      errors.name = intl.formatMessage(orgMessages.errorName);
    }

    if (values.legalName.length > 255) {
      errors.legalName = intl.formatMessage(orgMessages.errorName);
    }

    if (values.slug.length > 30) {
      errors.slug = intl.formatMessage(orgMessages.errorSlug);
    }

    if (values.slug !== lodash_trim__WEBPACK_IMPORTED_MODULE_0___default()(values.slug, '-')) {
      errors.slug = intl.formatMessage(orgMessages.errorSlugHyphen);
    }

    if (values.description.length > 150) {
      errors.description = intl.formatMessage(orgMessages.errorDescription);
    }

    if (values.website) {
      // Prepend https:// before validation if the URL doesn't start with a protocol
      const websiteUrl = values.website.match(/^\w+:\/\/.*/) ? values.website : `https://${values.website}`;

      if (!(0,validator__WEBPACK_IMPORTED_MODULE_6__.isURL)(websiteUrl)) {
        errors.website = intl.formatMessage(orgMessages.errorWebsite);
      }
    }

    return errors;
  };

  const submit = values => {
    const {
      name,
      legalName,
      slug,
      description,
      website
    } = values;
    onSubmit({
      name,
      legalName,
      slug,
      description,
      website,
      authorization
    });
  };

  const removeAdmin = collective => {
    const filteredAdmins = admins.filter(admin => admin.member.id !== collective.id);
    setAdmins(filteredAdmins);
    updateAdmins(admins);
  }; // Update admins whenever there is a change


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (admins.length) {
      updateAdmins(admins);
    }
  }, [admins]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
    flexDirection: "column",
    justifyContent: "center",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
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

        const suggestedSlug = value => {
          const slugOptions = {
            replacement: '-',
            lower: true,
            strict: true
          };
          return lodash_trim__WEBPACK_IMPORTED_MODULE_0___default()(slugify__WEBPACK_IMPORTED_MODULE_5___default()(value, slugOptions), '-');
        };

        const handleSlugChange = e => {
          if (!touched.slug) {
            setFieldValue('slug', suggestedSlug(e.target.value));
          }
        };

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
            flexDirection: "column",
            alignItems: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
              mx: 2,
              maxWidth: "992px",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                flexDirection: "column",
                my: [0, 2],
                mb: [24, 28, 28, 58],
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_create_collective_CreateCollectiveForm__WEBPACK_IMPORTED_MODULE_7__/* .BackButton */ .x, {
                    asLink: true,
                    onClick: () => window && window.history.back(),
                    px: [0, 2],
                    children: ["\u2190\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                      id: "Back",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Back"
                      }]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
                  alignItems: "center",
                  px: [0, 2],
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.H1, {
                    fontSize: "28px",
                    lineHeight: "36px",
                    fontWeight: "500",
                    textAlign: ['left', 'left', 'left', 'center'],
                    color: "black.900",
                    letterSpacing: "1px",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                      id: "organization.create",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Create Organization"
                      }]
                    })
                  })
                }), error && !loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                  alignItems: "center",
                  justifyContent: "center",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    type: "error",
                    withIcon: true,
                    mt: [1, 3],
                    "data-cy": "cof-error-message",
                    children: error
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                display: "flex",
                flexDirection: ['column', 'row', 'row'],
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                  flexDirection: "column",
                  mx: [1, 10, 10],
                  maxWidth: [320, 350, 472],
                  justifyContent: "space-around",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.H4, {
                    color: "black.900",
                    fontSize: "18px",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                      id: "CreateProfile.OrgInfo",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Organization info"
                      }]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    name: "name",
                    htmlFor: "name",
                    error: touched.name && errors.name,
                    label: intl.formatMessage(orgMessages.nameLabel),
                    labelFontSize: "13px",
                    labelColor: "black.700",
                    labelFontWeight: "600",
                    fontSize: "18px",
                    value: values.name,
                    onChange: handleSlugChange,
                    required: true,
                    mt: 3,
                    "data-cy": "cof-form-name",
                    children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, _objectSpread(_objectSpread({
                      as: _StyledInput__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP
                    }, inputProps), {}, {
                      placeholder: intl.formatMessage(placeholders.name)
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    name: "legalName",
                    htmlFor: "legalName",
                    label: intl.formatMessage(orgMessages.legalNameLabel),
                    labelFontSize: "13px",
                    labelColor: "black.700",
                    labelFontWeight: "600",
                    fontSize: "18px",
                    value: values.legalName,
                    required: false,
                    mt: 3,
                    isPrivate: true,
                    "data-cy": "cof-form-legalName",
                    hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                      id: "editCollective.legalName.description",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Legal names are private and used in receipts, tax forms, payment details on expenses, and other non-public contexts. Legal names are only visible to admins."
                      }]
                    }),
                    children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, _objectSpread(_objectSpread({
                      as: _StyledInput__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP
                    }, inputProps), {}, {
                      placeholder: intl.formatMessage(placeholders.examples, {
                        examples: 'Salesforce, Inc., Airbnb, Inc.'
                      })
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    name: "slug",
                    htmlFor: "slug",
                    error: touched.slug && errors.slug,
                    label: intl.formatMessage(orgMessages.slugLabel),
                    labelFontSize: "13px",
                    labelColor: "black.700",
                    labelFontWeight: "600",
                    fontSize: "19px",
                    value: values.slug,
                    required: true,
                    mt: 3,
                    "data-cy": "cof-form-slug",
                    children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, _objectSpread(_objectSpread({
                      onChange: e => {
                        setFieldValue('slug', e.target.value);
                      },
                      as: _StyledInputGroup__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z
                    }, inputProps), {}, {
                      prepend: "opencollective.com/",
                      placeholder: intl.formatMessage(placeholders.slug)
                    }))
                  }), values.name.length > 0 && !touched.slug && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                    fontSize: "11px",
                    mt: 2,
                    mb: 2,
                    children: intl.formatMessage(orgMessages.suggestedLabel)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    htmlFor: "description",
                    error: touched.description && errors.description,
                    label: intl.formatMessage(orgMessages.descriptionLabel),
                    labelFontSize: "13px",
                    labelColor: "black.700",
                    labelFontWeight: "600",
                    fontSize: "13px",
                    required: true,
                    mt: 3,
                    "data-cy": "cof-org-description",
                    children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, _objectSpread(_objectSpread({
                      as: _StyledTextarea__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
                      onChange: e => {
                        setFieldValue('description', e.target.value);
                      }
                    }, inputProps), {}, {
                      name: "description",
                      minHeight: 80,
                      maxHeight: 80,
                      minLength: 5,
                      maxLength: 150,
                      width: "100%",
                      value: values.description,
                      placeholder: intl.formatMessage(orgMessages.descriptionPlaceholder)
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                    fontSize: "11px",
                    mt: 2,
                    mb: 2,
                    children: intl.formatMessage(orgMessages.descriptionHint)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    name: "website",
                    htmlFor: "website",
                    error: touched.website && errors.website,
                    label: intl.formatMessage(orgMessages.websiteLabel),
                    labelFontSize: "13px",
                    labelColor: "black.700",
                    labelFontWeight: "600",
                    value: values.website,
                    required: false,
                    mt: 3,
                    mb: 2,
                    "data-cy": "cof-org-website",
                    children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, _objectSpread(_objectSpread({
                      onChange: e => {
                        setFieldValue('website', e.target.value);
                      },
                      as: _StyledInputGroup__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z
                    }, inputProps), {}, {
                      prepend: "https://",
                      placeholder: intl.formatMessage(placeholders.website)
                    }))
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                  flexDirection: "column",
                  maxWidth: [320, 350, 472],
                  mt: [3, 0],
                  mx: [1, 10, 10],
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.H4, {
                    color: "black.900",
                    fontSize: "18px",
                    mb: [3, 1],
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                      id: "administrators",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Administrators"
                      }]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                    fontSize: "14px",
                    mb: 3,
                    mt: 2,
                    lineHeight: "21px",
                    color: "black.700",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                      id: "coAdminsDescription",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Organization admins can make changes and represent this organization on the platform."
                      }]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    border: "1px solid #E6E8EB",
                    borderRadius: "16px",
                    p: 3,
                    height: "auto",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                        mr: 2,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                          fontSize: "9px",
                          color: "black.700",
                          fontWeight: "500",
                          textTransform: "uppercase",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                            id: "Admins",
                            defaultMessage: [{
                              "type": 0,
                              "value": "Admins"
                            }]
                          })
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        flex: "1",
                        borderStyle: "solid",
                        borderColor: "black.300",
                        width: [100, 110, 120]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                      "data-cy": "org-profile-card",
                      mt: 2,
                      children: admins.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                        width: "100%",
                        flexWrap: "wrap",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                          collective: LoggedInUser.collective
                        }, LoggedInUser.collective.id), admins.map(admin => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                          collective: admin.member,
                          removeAdmin: removeAdmin
                        }, admin.member.id))]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      mt: 4,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                        mr: 2,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                          fontSize: "9px",
                          color: "black.700",
                          fontWeight: "500",
                          textTransform: "uppercase",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                            id: "inviteAdmin",
                            defaultMessage: [{
                              "type": 0,
                              "value": "Invite co-admin"
                            }]
                          })
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        flex: "1",
                        borderStyle: "solid",
                        borderColor: "black.300",
                        width: [100, 110, 120]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                      inputId: "admin-picker-org",
                      mt: 2,
                      creatable: true,
                      collective: null,
                      types: ['USER'],
                      "data-cy": "admin-picker-org",
                      value: "pp",
                      onChange: option => {
                        const duplicates = admins.filter(admin => admin.member.id === option.value.id);
                        setAdmins(duplicates.length ? admins : [...admins, {
                          role: 'ADMIN',
                          member: option.value
                        }]);
                      },
                      placeholder: intl.formatMessage(placeholders.username)
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                flexDirection: "column",
                my: 4,
                mx: 2,
                maxWidth: [320, 350, 450],
                color: "black.800",
                letterSpacing: "0.2px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                  name: "authorization",
                  required: true,
                  fontSize: "12px",
                  label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                    id: "U+G/IY",
                    defaultMessage: [{
                      "type": 0,
                      "value": "I certify that I am authorized to represent this organization"
                    }]
                  }),
                  onChange: ({
                    checked
                  }) => {
                    setAuthorization(checked);
                  }
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                  justifyContent: ['center', 'left'],
                  my: 4,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    fontSize: "13px",
                    minWidth: "148px",
                    minHeight: "36px",
                    buttonStyle: "primary",
                    type: "submit",
                    loading: loading,
                    onSubmit: handleSubmit,
                    "data-cy": "cof-form-submit",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                      id: "organization.create",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Create Organization"
                      }]
                    })
                  })
                })]
              })]
            })
          })
        });
      }
    })
  });
};

CreateOrganizationForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateOrganizationForm",
  "props": {
    "collective": {
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
    "loading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "error": {
      "description": "",
      "type": {
        "name": "string"
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
    "updateAdmins": {
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,_UserProvider__WEBPACK_IMPORTED_MODULE_21__/* .withUser */ .ns)(CreateOrganizationForm))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74387);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40486);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Circle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "StepsProgress__Circle",
  componentId: "sc-1xgfvkb-0"
})(["circle{fill:", ";stroke:#c4c7cc;stroke-width:1px;", " ", " ", "}text{font-size:14px;", "}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.white.full'), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["stroke:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600')), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["cursor:pointer;stroke-width:2px;&:hover{fill:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.100')), props => props.checked && (props.disabled ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["fill:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.500')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["fill:", ";&:hover{fill:", ";})"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.400'))), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["fill:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600')));
const Bubble = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__Bubble",
  componentId: "sc-1xgfvkb-1"
})(["justify-content:center;align-items:center;flex:0 0 34px;height:34px;width:34px;border-radius:16px;cursor:default;color:#c4c7cc;background:", ";transition:box-shadow 0.3s,background 0.3s;z-index:2;", " ", " ", " ", ""], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.white.full'), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600')), props => !props.disabled && props.onClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["cursor:pointer;&:hover{background:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.100')), props => props.checked && (props.disabled ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.500')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:", ";&:hover{background:", ";})"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.400'))), props => props.focus && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["box-shadow:0 0 0 4px ", ";"], props => props.theme.colors.primary[100]));
/**
 * Border generated with https://gigacore.github.io/demos/svg-stroke-dasharray-generator/
 * to have a consistent result across browsers.
 */

const SeparatorLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, _objectSpread(_objectSpread({
  alignItems: "center"
}, props), {}, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("svg", {
    width: "100%",
    height: "2",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("line", {
      strokeDasharray: "5%",
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "0"
    })
  })
}))).withConfig({
  displayName: "StepsProgress__SeparatorLine",
  componentId: "sc-1xgfvkb-2"
})(["height:100%;z-index:1;flex-grow:1;flex-shrink:1;line{stroke-width:1;stroke:#c4c7cc;transition:stroke 0.3s;}", " ", ""], props => props.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["line{stroke:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.400')), props => props.transparent && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["visibility:hidden;"]));
const StepMobile = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepMobile",
  componentId: "sc-1xgfvkb-3"
})(["width:100%;align-items:center;"]);
const StepsOuter = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepsOuter",
  componentId: "sc-1xgfvkb-4"
})(["padding:12px 16px;@media (max-width:640px){background:#f5f7fa;}"]);
const StepsMobileLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__StepsMobileLeft",
  componentId: "sc-1xgfvkb-5"
})(["flex-grow:2;flex-direction:column;"]);
const StepsMobileRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepsMobileRight",
  componentId: "sc-1xgfvkb-6"
})(["margin-left:auto;width:56px;height:56px;align-items:center;justify-content:center;flex-shrink:0;position:relative;"]);
const PieProgressWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "StepsProgress__PieProgressWrapper",
  componentId: "sc-1xgfvkb-7"
})(["left:0;position:absolute;top:0;width:100%;height:100%;z-index:0;"]);
const PieProgress = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieProgress",
  componentId: "sc-1xgfvkb-8"
})(["left:0;position:absolute;top:0;width:100%;height:100%;border-radius:50%;overflow:hidden;", " ", ""], props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["clip:rect(0,", "px,", "px,", "px);"], props.pieSize, props.pieSize, props.pieSize / 2), props => props.progress && props.progress > 50 && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["clip:rect(auto,auto,auto,auto);"]));
const PieShadow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieShadow",
  componentId: "sc-1xgfvkb-9"
})(["width:100%;height:100%;", " border-radius:50%;"], props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border:", "px solid ", ";"], props.pieSize / 10, props.bgColor));
const PieHalfCircle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieHalfCircle",
  componentId: "sc-1xgfvkb-10"
})(["width:100%;height:100%;position:absolute;left:0;top:0;", " border-radius:50%;", ""], props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border:", "px solid #3498db;clip:rect(0,", "px,", "px,0);"], props.pieSize / 10, props.pieSize / 2, props.pieSize), props => props.progress && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.500')));
const PieHalfCircleLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PieHalfCircle).withConfig({
  displayName: "StepsProgress__PieHalfCircleLeft",
  componentId: "sc-1xgfvkb-11"
})(["", ""], props => props.progress && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["transform:rotate(", "deg);"], props.progress * 3.6));
const PieHalfCircleRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PieHalfCircle).withConfig({
  displayName: "StepsProgress__PieHalfCircleRight",
  componentId: "sc-1xgfvkb-12"
})(["", ""], props => props.progress && props.progress > 50 ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["transform:rotate(180deg);"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:none;"]));

const getBubbleContent = (idx, checked, disabled, focused, loading) => {
  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      color: checked ? '#FFFFFF' : 'primary.700',
      size: 14
    });
  } else if (checked) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__.Check, {
      color: "white",
      size: 14
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Circle, {
    disabled: disabled,
    checked: checked,
    focus: focused,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("circle", {
      cx: "50%",
      cy: "50%",
      r: "16px"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("text", {
      x: "50%",
      y: "51%",
      dominantBaseline: "middle",
      textAnchor: "middle",
      children: idx + 1
    })]
  });
};
/**
 * Shows numerated steps circles that can be clicked.
 */


const StepsProgress = ({
  steps,
  disabledStepNames,
  children,
  focus,
  loadingStep,
  onStepSelect,
  allCompleted,
  stepWidth,
  viewport
}) => {
  const focusIdx = focus ? steps.findIndex(step => step.name === focus.name) : -1;
  const mobileStepIdx = allCompleted ? steps.length - 1 : focusIdx > -1 ? focusIdx : 0;
  const mobileNextStepName = mobileStepIdx < steps.length - 1 ? steps[mobileStepIdx + 1].name : null;
  const mobileNextStepIdx = mobileNextStepName ? steps.findIndex(step => step.name === mobileNextStepName) : -1;
  const mobileNextStep = mobileNextStepIdx !== -1 && steps[mobileNextStepIdx];
  const progress = allCompleted ? 100 : 100 / steps.length * (mobileStepIdx + 1);
  const bgColor = '#D9DBDD';
  const pieSize = '56';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepsOuter, {
    "data-cy": "steps-progress",
    children: [(viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL || viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      display: ['block', null, 'none'],
      width: "100%",
      "data-cy": "progress-destkop",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepMobile, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepsMobileLeft, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            color: "black.900",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "26px",
            mb: 1,
            children: steps[mobileStepIdx].label || steps[mobileStepIdx].name
          }), mobileNextStep && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            color: "black.700",
            fontSize: "12px",
            lineHeight: "18px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "StepsProgress.mobile.next",
              defaultMessage: [{
                "type": 0,
                "value": "Next: "
              }, {
                "type": 1,
                "value": "stepName"
              }],
              values: {
                stepName: mobileNextStep.label || mobileNextStep.name
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepsMobileRight, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PieProgressWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PieProgress, {
              progress: progress,
              pieSize: pieSize,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PieHalfCircleLeft, {
                progress: progress,
                pieSize: pieSize
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PieHalfCircleRight, {
                progress: progress,
                pieSize: pieSize
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PieShadow, {
              pieSize: pieSize,
              bgColor: bgColor
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            color: "black.700",
            fontSize: "12px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "StepsProgress.mobile.status",
              defaultMessage: [{
                "type": 1,
                "value": "from"
              }, {
                "type": 0,
                "value": " of "
              }, {
                "type": 1,
                "value": "to"
              }],
              values: {
                from: mobileStepIdx + 1,
                to: steps.length
              }
            })
          })]
        })]
      })
    }), (viewport !== _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL || viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      display: ['none', null, 'flex'],
      "data-cy": "progress-destkop",
      children: steps.map((step, idx) => {
        const stepName = step.name;
        const checked = idx < focusIdx || allCompleted;
        const focused = idx === focusIdx;
        const disabled = disabledStepNames.includes(stepName);
        const loading = loadingStep && stepName === loadingStep.name;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledFlex, {
          "data-cy": `progress-step-${stepName}`,
          flexDirection: "column",
          alignItems: "center",
          "data-disabled": disabled,
          $_css: stepWidth,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledFlex2, {
            alignItems: "center",
            mb: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SeparatorLine, {
              active: checked || focused,
              transparent: idx === 0
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Bubble, {
              disabled: disabled,
              onClick: disabled ? undefined : onStepSelect && (() => onStepSelect(step)),
              checked: checked,
              focus: focused,
              children: getBubbleContent(idx, checked, disabled, focused, loading)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SeparatorLine, {
              active: checked,
              transparent: idx === steps.length - 1
            })]
          }), children && children({
            step,
            checked,
            focused
          })]
        }, stepName);
      })
    })]
  });
};

StepsProgress.defaultProps = {
  focused: null,
  loadingStep: null,
  disabledStepNames: [],
  stepWidth: '100%'
};
StepsProgress.__docgenInfo = {
  "description": "Shows numerated steps circles that can be clicked.",
  "methods": [],
  "displayName": "StepsProgress",
  "props": {
    "focused": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "required": false
    },
    "loadingStep": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "description": "Step will show a loading spinner",
      "type": {
        "name": "custom",
        "raw": "stepType"
      },
      "required": false
    },
    "disabledStepNames": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "description": "A list of steps that will be disabled (unclickable). Steps must exist in `steps`",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "stepWidth": {
      "defaultValue": {
        "value": "'100%'",
        "computed": false
      },
      "description": "Base step width",
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
    "steps": {
      "description": "The list of steps. Each step **must** be unique",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "stepType"
        }
      },
      "required": true
    },
    "children": {
      "description": "A renderer func. Gets passed an object like `{step, checked, focused}`",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "focus": {
      "description": "The currently focused step, or null if none focused yet",
      "type": {
        "name": "custom",
        "raw": "stepType"
      },
      "required": false
    },
    "onStepSelect": {
      "description": "Called when a step is clicked",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "allCompleted": {
      "description": "If true, all steps will be marked as completed",
      "type": {
        "name": "bool"
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(StepsProgress));

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress___StyledFlex",
  componentId: "sc-1xgfvkb-13"
})(p => ({
  flexGrow: 1,
  flexBasis: p.$_css
}));

var _StyledFlex2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress___StyledFlex2",
  componentId: "sc-1xgfvkb-14"
})({
  width: '100%'
});

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

/***/ 74387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pm": () => (/* binding */ VIEWPORTS),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports BREAKPOINTS_NAMES, BREAKPOINTS_WIDTHS, BREAKPOINTS, viewportIsAbove, isDesktopOrAbove, getViewportFromWidth */
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86646);
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25359);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74200);
/* harmony import */ var _theme_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13875);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Defines all the breakpoints names as passed by `withViewport`
 */


const VIEWPORTS = {
  XSMALL: 'XSMALL',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  UNKNOWN: 'UNKNOWN'
}; // Please keep the same length for these two arrays

const BREAKPOINTS_NAMES = [VIEWPORTS.XSMALL, VIEWPORTS.SMALL, VIEWPORTS.MEDIUM, VIEWPORTS.LARGE];
const BREAKPOINTS_WIDTHS = BREAKPOINTS_NAMES.map((_, idx) => (0,_theme_helpers__WEBPACK_IMPORTED_MODULE_6__/* .emToPx */ .x8)(_theme_breakpoints__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[idx]));
const BREAKPOINTS = lodash_zipObject__WEBPACK_IMPORTED_MODULE_0___default()(BREAKPOINTS_NAMES, BREAKPOINTS_WIDTHS);
/**
 * Helper to check if a viewport is superior or equal to another one.
 * Always returns false for `UNKNOWN`
 *
 * @param {VIEWPORTS} viewport
 * @param {VIEWPORTS} breakpointName
 */

const viewportIsAbove = (viewport, breakpointName) => {
  return BREAKPOINTS_NAMES.indexOf(viewport) >= BREAKPOINTS_NAMES.indexOf(breakpointName);
};
/**
 * Returns true if viewport is not `UNKNOWN` and is >= desktop.
 *
 * @param {VIEWPORTS} viewport
 */

const isDesktopOrAbove = viewport => {
  return BREAKPOINTS_NAMES.indexOf(viewport) >= BREAKPOINTS_NAMES.indexOf(VIEWPORTS.MEDIUM);
};
/** Returns the name of the viewport (see `BREAKPOINTS_NAMES`) */

const getViewportFromWidth = width => {
  const breakpointIdx = lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2___default()(BREAKPOINTS_WIDTHS, b => width >= b);

  return breakpointIdx === -1 ? BREAKPOINTS_NAMES[0] : BREAKPOINTS_NAMES[breakpointIdx];
};
/** Function to build component's state */

const getStateBuilder = (withWidth, withHeight) => {
  if (withWidth && withHeight) {
    return (width, height, viewport) => ({
      width,
      height,
      viewport
    });
  } else if (withWidth) {
    return (width, height, viewport) => ({
      width,
      viewport
    });
  } else if (withHeight) {
    return (width, height, viewport) => ({
      height,
      viewport
    });
  } else {
    return (width, height, viewport) => ({
      viewport
    });
  }
};
/**
 * Watch window resize and provide info about the screen size. Has default to
 * properly render on SSR (customizable with `defaultViewport`).
 *
 * @param {ReactNode} ChildComponent
 * @param {object} options
 *  - `withWidth` (default: false) - pass the width of the window
 *  - `withHeight` (default: false) - pass the height of the window
 *  - `defaultViewport` (default: UNKNOWN) - if detection fails, fallback on this screen size
 */


const withViewport = (ChildComponent, options) => {
  const {
    withWidth,
    withHeight,
    defaultViewport = VIEWPORTS.UNKNOWN
  } = options || {};
  const buildState = getStateBuilder(withWidth || false, withHeight || false);
  return class Viewport extends (react__WEBPACK_IMPORTED_MODULE_4___default().Component) {
    // Default height usually doesn't matters much, so we use the width as default
    constructor(props) {
      super(props); // Always initialize without `window`, to make sure SSR and client render are the same
      // Could trigger "DOM not matching" errors otherwise

      _defineProperty(this, "doResize", () => {
        const viewport = getViewportFromWidth(window.innerWidth);
        const state = buildState(window.innerWidth, window.innerHeight, viewport);

        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(this.state, state)) {
          this.setState(state);
        }
      });

      this.state = buildState(BREAKPOINTS[defaultViewport] || BREAKPOINTS_WIDTHS[0], BREAKPOINTS[defaultViewport] || BREAKPOINTS_WIDTHS[0], defaultViewport);
    }

    componentDidMount() {
      this.doResize();
      this.onResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.doResize, 500, {
        maxWait: 300
      });
      window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }

    render() {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ChildComponent, _objectSpread(_objectSpread({}, this.state), this.props));
    }

  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withViewport);

/***/ }),

/***/ 49541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateOrganization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47492);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73908);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84842);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CreateOrganization__WEBPACK_IMPORTED_MODULE_1__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__, _components_Page__WEBPACK_IMPORTED_MODULE_3__]);
([_components_CreateOrganization__WEBPACK_IMPORTED_MODULE_1__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__, _components_Page__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







class CreateOrganizationPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      LoggedInUser,
      loadingLoggedInUser,
      refetchLoggedInUser
    } = this.props;

    if (loadingLoggedInUser) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        loading: true
      });
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_CreateOrganization__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        LoggedInUser: LoggedInUser,
        refetchLoggedInUser: refetchLoggedInUser
      })
    });
  }

}

CreateOrganizationPage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateOrganizationPage",
  "props": {
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_4__/* .withUser */ .ns)(CreateOrganizationPage));
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

/***/ 9443:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Check");

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

/***/ 77192:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Plus");

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

/***/ 68765:
/***/ ((module) => {

module.exports = require("@styled-icons/material/DragIndicator");

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

/***/ 45245:
/***/ ((module) => {

module.exports = require("canvas-confetti");

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

/***/ 25359:
/***/ ((module) => {

module.exports = require("lodash/findLastIndex");

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

/***/ 53707:
/***/ ((module) => {

module.exports = require("lodash/map");

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

/***/ 86646:
/***/ ((module) => {

module.exports = require("lodash/zipObject");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,2143,986,242,5993,7965,8720,7667,2903,1009,5489], () => (__webpack_exec__(49541)));
module.exports = __webpack_exports__;

})();