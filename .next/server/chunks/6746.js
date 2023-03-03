"use strict";
exports.id = 6746;
exports.ids = [6746,9139];
exports.modules = {

/***/ 61196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15078);
/* harmony import */ var _lib_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14063);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59139);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41433);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87262);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RichTextEditor__WEBPACK_IMPORTED_MODULE_9__, _StyledInputField__WEBPACK_IMPORTED_MODULE_13__]);
([_RichTextEditor__WEBPACK_IMPORTED_MODULE_9__, _StyledInputField__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const UpdateFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
  displayName: "EditUpdateForm__UpdateFormWrapper",
  componentId: "sc-r2hx3c-0"
})(["width:100%;"]);
const ActionButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
  displayName: "EditUpdateForm__ActionButtonWrapper",
  componentId: "sc-r2hx3c-1"
})(["@media (max-width:600px){justify-content:center;}"]);

class EditUpdateForm extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.tryUpdateDate = this.tryUpdateDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      modified: false,
      update: props.update ? lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(props.update, 'title', 'html', 'isPrivate', 'makePublicOn') : {},
      loading: false,
      error: '',
      uploading: false
    };
    this.storageKey = `EditUpdateForm#${lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(this.props, 'update.id') || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(this.props, 'collective.slug')}`;
  }

  componentDidMount() {
    const savedState = _lib_storage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].get */ .Z.get(this.storageKey);

    if (savedState && !this.props.update) {
      this.setState(savedState);
    }

    this._isMounted = true;
    this.forceUpdate();
  }

  tryUpdateDate(attr, value) {
    if (!value) {
      this.handleChange(attr, null);
    } else {
      const d = new Date(value).toISOString();
      this.handleChange(attr, d);
    }
  }

  handleChange(attr, value) {
    const update = _objectSpread(_objectSpread({}, this.state.update), {}, {
      [attr]: value
    });

    const newState = {
      modified: true,
      update
    };
    _lib_storage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].set */ .Z.set(this.storageKey, newState);
    this.setState(newState);
    this.props.onChange && this.props.onChange(update);
  }

  async onSubmit(e) {
    this.setState({
      loading: true,
      error: ''
    });

    if (e) {
      e.preventDefault();
    }

    try {
      await this.props.onSubmit(this.state.update);
      this.setState({
        modified: false,
        loading: false
      });
      _lib_storage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].set */ .Z.set(this.storageKey, null);
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message
      });
    }

    return false;
  }

  render() {
    const {
      collective
    } = this.props;
    const {
      update
    } = this.state;

    if (!this._isMounted) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {});
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(UpdateFormWrapper, {
      className: `EditUpdateForm ${this.props.mode}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("form", {
        "data-cy": "edit-update-form",
        onSubmit: this.onSubmit,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          margin: "auto 0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            width: 1,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              mb: 2,
              mt: 2,
              fontWeight: "500",
              fontSize: "1.6rem",
              lineHeight: "1.7",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
                as: "span",
                children: "Title"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              htmlFor: "title",
              children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
                type: "text",
                value: update.title,
                onChange: e => this.handleChange('title', e.target.value),
                width: "100%",
                maxWidth: "40em",
                placeHolder: "Normal",
                maxLength: 250,
                "data-cy": "titleInput",
                required: true
              }))
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          width: 1,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            fontWeight: "500",
            mb: 2,
            mt: 3,
            fontSize: "1.6rem",
            lineHeight: "1.7",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
              as: "span",
              children: "Message"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_RichTextEditor__WEBPACK_IMPORTED_MODULE_9__["default"], {
            kind: "UPDATE",
            onChange: e => this.handleChange('html', e.target.value),
            defaultValue: update.html,
            editorMinHeight: 300,
            editorMaxHeight: 600,
            withBorders: true,
            "data-cy": "update-content-editor",
            videoEmbedEnabled: true,
            setUploading: uploading => this.setState({
              uploading
            })
          })]
        }), (!collective.isHost || update.isPrivate) && !this.props.isChangelog && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 75,
          flexWrap: ['wrap', 'nowrap'],
          px: 2,
          children: [!collective.isHost && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
            mt: 3,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              defaultChecked: update.isPrivate,
              name: "private",
              size: "16px",
              label: "Private update",
              onChange: isPrivate => this.handleChange('isPrivate', isPrivate.checked)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              ml: "25px",
              fontSize: "12px",
              color: "#71757A",
              mt: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "YG0Ra/",
                defaultMessage: [{
                  "type": 0,
                  "value": "Check this to limit access to the content of this update to contributors only"
                }]
              })
            })]
          }), update.isPrivate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
            mt: 3,
            ml: 2,
            minWidth: 280,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              as: "label",
              htmlFor: "makePublicOn",
              fontWeight: "normal",
              fontSize: "14px",
              color: "black.900",
              mb: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "update.makePublicOn.label",
                defaultMessage: [{
                  "type": 0,
                  "value": "Automatically make public on this date"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              htmlFor: "makePublicOn",
              children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
                type: "date",
                defaultValue: update.makePublicOn ? (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_5__/* .toIsoDateStr */ .fM)(new Date(update.makePublicOn)) : '',
                onChange: e => this.tryUpdateDate('makePublicOn', e.target.value),
                width: "100%",
                maxWidth: "40em"
              }))
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(ActionButtonWrapper, {
          mx: 2,
          my: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            "data-cy": "edit-update-submit-btn",
            className: "bluewhite",
            buttonSize: "large",
            buttonStyle: "primary",
            type: "submit",
            disabled: this.state.loading || this.state.uploading || !this.state.update.title || !this.state.update.html,
            children: this.state.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "form.processing",
              defaultMessage: [{
                "type": 0,
                "value": "processing"
              }]
            }) : this.state.uploading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "uploadImage.isUploading",
              defaultMessage: [{
                "type": 0,
                "value": "Uploading image..."
              }]
            }) : this.props.update?.publishedAt ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "save",
              defaultMessage: [{
                "type": 0,
                "value": "Save"
              }]
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "update.new.preview",
              defaultMessage: [{
                "type": 0,
                "value": "Preview Update"
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          margin: "auto 0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            width: 1,
            children: this.state.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              style: {
                color: 'red'
              },
              children: this.state.error
            })
          })
        })]
      })
    });
  }

}

EditUpdateForm.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "tryUpdateDate",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "attr",
      "type": null
    }, {
      "name": "value",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "attr",
      "type": null
    }, {
      "name": "value",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onSubmit",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EditUpdateForm",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "update": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "isChangelog": {
      "description": "",
      "type": {
        "name": "bool"
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
    "onSubmit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "mode": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditUpdateForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _updates_UpdateAudienceBreakdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31406);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47988);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87268);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_14__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















const publishUpdateMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation PublishUpdate($id: String!, $audience: UpdateAudience) {
    publishUpdate(id: $id, notificationAudience: $audience) {
      id
      publishedAt
      notificationAudience
      userCanPublishUpdate
    }
  }
`;
const updateQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query Update($id: String!, $audience: UpdateAudience) {
    update(id: $id) {
      id
      userCanPublishUpdate
      publishedAt
      isPrivate
      makePublicOn
      audienceStats(audience: $audience) {
        id
        total
        hosted
        individuals
        organizations
        collectives
        coreContributors
      }
      account {
        id
        isHost
      }
    }
  }
`;
const Notice = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "PublishUpdateBtnWithData__Notice",
  componentId: "sc-1uaftca-0"
})(["color:", ";font-size:13px;margin-top:8px;"], props => props.theme.colors.black[700]);
const StyledPublishUpdateBtn = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "PublishUpdateBtnWithData__StyledPublishUpdateBtn",
  componentId: "sc-1uaftca-1"
})(["display:flex;align-items:center;border-top:1px solid #e8e9eb;margin-top:32px;"]);
const selectOptions = [{
  label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
    id: "Update.notify.everyone",
    defaultMessage: [{
      "type": 0,
      "value": "Everyone"
    }]
  }),
  value: 'ALL'
}, {
  label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
    id: "ContributorsFilter.Financial",
    defaultMessage: [{
      "type": 0,
      "value": "Financial contributors"
    }]
  }),
  value: 'FINANCIAL_CONTRIBUTORS'
}, {
  label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
    id: "Update.notify.hostedCollectiveAdmins",
    defaultMessage: [{
      "type": 0,
      "value": "Hosted collective's admins"
    }]
  }),
  value: 'COLLECTIVE_ADMINS'
}, {
  label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
    id: "tcxpLX",
    defaultMessage: [{
      "type": 0,
      "value": "No one"
    }]
  }),
  value: 'NO_ONE'
}];

const PublishUpdateBtn = ({
  id,
  isHost,
  isChangelog
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const [audience, setAudience] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('ALL');
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .useToasts */ .e1)();
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(updateQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T,
    variables: {
      id,
      audience
    }
  });
  const [callPublishUpdate, {
    loading: isSubmitting
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(publishUpdateMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T
  });

  const update = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'update');

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(StyledPublishUpdateBtn, {
    "data-cy": "PublishUpdateBtn",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      mt: "4",
      mb: "5",
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      width: "100%",
      maxWidth: 400,
      children: [(isHost || lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(update, 'account.isHost')) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
        mb: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Label */ .__, {
          htmlFor: "whoToNotify",
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "update.publish.notify.selection",
            defaultMessage: [{
              "type": 0,
              "value": "Select who should be notified"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
          inputId: "whoToNotify",
          options: selectOptions,
          value: selectOptions.find(({
            value
          }) => value === audience),
          onChange: ({
            value
          }) => setAudience(value),
          isSearchable: false,
          maxWidth: 300
        })]
      }), !isChangelog && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(Notice, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_updates_UpdateAudienceBreakdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          audienceStats: update?.audienceStats,
          isLoading: loading
        })
      }), showModal ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        onClose: () => setShowModal(false),
        continueLabel: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "update.publish.btn",
          defaultMessage: [{
            "type": 0,
            "value": "Publish"
          }]
        }),
        header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "update.publish.modal.header",
          defaultMessage: [{
            "type": 0,
            "value": "Publish update"
          }]
        }),
        body: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_updates_UpdateAudienceBreakdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          audienceStats: update?.audienceStats,
          isLoading: loading
        }),
        continueHandler: async () => {
          try {
            await callPublishUpdate({
              variables: {
                id,
                audience
              }
            });
          } catch (e) {
            addToast({
              type: _ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
              message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .i18nGraphqlException */ .t2)(intl, e)
            });
          } finally {
            setShowModal(false);
          }
        }
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        mt: "3",
        display: "flex",
        alignItems: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          buttonStyle: "primary",
          onClick: () => isChangelog ? callPublishUpdate({
            variables: {
              id,
              audience: null
            }
          }) : setShowModal(true),
          disabled: loading,
          loading: isSubmitting,
          minWidth: 100,
          "data-cy": "btn-publish",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "update.publish.btn",
            defaultMessage: [{
              "type": 0,
              "value": "Publish"
            }]
          })
        })
      })]
    })
  });
};

PublishUpdateBtn.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PublishUpdateBtn",
  "props": {
    "id": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "isHost": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isChangelog": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublishUpdateBtn);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RichTextEditor)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42038);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46555);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65985);
/* harmony import */ var _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72004);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74770);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37278);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__]);
uuid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const TrixEditorContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "RichTextEditor__TrixEditorContainer",
  componentId: "sc-2bze4a-0"
})(["", " trix-editor{border:none;padding:0;margin-top:8px;padding-top:8px;outline-offset:0.5em;", " &::-webkit-scrollbar{width:8px;}", " ", " &:empty:not(:focus)::before{color:", ";}figcaption{display:none;}", "}trix-toolbar{min-height:40px;background:", ";", " z-index:2;margin-bottom:8px;", " .trix-button-group{border-radius:6px;border-color:#c4c7cc;margin-bottom:0;background:white;}.trix-button{border-bottom:none;display:inline-block;height:auto;&:hover{background:", ";}&.trix-active{background:", ";}&::before,&.trix-active::before{margin:4px;}}", " @media (max-width:500px){.trix-button--icon-strike,.trix-button--icon-number-list,.trix-button--icon-decrease-nesting-level,.trix-button--icon-increase-nesting-level{display:none;}}", " .trix-button--icon-attach::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21 15 16 10 5 21'/%3E%3C/svg%3E\");}.trix-button--video-attach::before{top:8%;bottom:4%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-video'%3E%3Cpolygon points='23 7 16 12 23 17 23 7'%3E%3C/polygon%3E%3Crect x='1' y='5' width='15' height='14' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E\");}}", ""], props => props.withBorders && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  border: '1px solid',
  borderColor: !props.error ? 'black.300' : 'red.300',
  borderRadius: 10,
  padding: 3
}), _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_7__/* .CustomScrollbarCSS */ .T, props => Boolean(props.editorMaxHeight) && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  overflowY: 'scroll'
}), props => !props.withBorders && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  outline: !props.error ? 'none' : `1px dashed ${props.theme.colors.red[300]}`,
  '&:focus': {
    outline: `1px dashed ${props.theme.colors.black[200]}`
  }
}), props => props.theme.colors.black[400], props => (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  minHeight: props.editorMinHeight,
  maxHeight: props.editorMaxHeight
}), props => props.toolbarBackgroundColor, props => !props.withBorders && `box-shadow: 0px 5px 3px -3px rgba(0, 0, 0, 0.1);`, props => props.withBorders && `min-height: 0px; margin-bottom: 0;`, props => props.theme.colors.blue[100], props => props.theme.colors.blue[200], props => props.version === 'simplified' && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  '.trix-button-group--file-tools': {
    display: 'none'
  },
  '.trix-button-group--block-tools .trix-button:not(.trix-button--icon-number-list):not(.trix-button--icon-bullet-list)': {
    display: 'none'
  },
  '.trix-button--icon-bullet-list': {
    borderLeft: 'none'
  }
}), props => props.withStickyToolbar && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  position: 'sticky',
  top: props.toolbarTop || 0,
  marginTop: props.toolbarOffsetY,
  p: '10px'
}), props => props.isDisabled && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  pointerEvents: 'none',
  cursor: 'not-allowed',
  background: '#f3f3f3',
  'trix-toolbar,.trix-button-group': {
    background: '#f3f3f3 !important'
  }
}));
const SUPPORTED_SERVICE_URLS = {
  youTube: 'https://www.youtube-nocookie.com/embed/',
  anchorFm: 'https://anchor.fm/'
};
/**
 * A React wrapper around the Trix library to edit rich text.
 * Produces HTML and clear text.
 */

class RichTextEditor extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "initialize", () => {
      if (this.Trix && this.editorRef.current) {
        // Listen for changes
        this.editorRef.current.addEventListener('trix-change', this.handleChange, false);
        this.editorRef.current.addEventListener('trix-attachment-add', this.handleUpload);
        this.editorRef.current.addEventListener('trix-file-accept', this.handleFileAccept);
        this.editorRef.current.addEventListener('trix-action-invoke', this.trixActionInvoke);
        this.editorRef.current.addEventListener('trix-initialize', event => {
          if (this.props.videoEmbedEnabled) {
            this.replaceEmbeddedIFrames(this.props.value || this.props.defaultValue);
            this.trixEmbed(event);
          } // Some special handling for links


          if (this.mainContainerRef.current) {
            // We must listen when the user presses the 'Enter' key and when the user clicks the 'Link' button as well
            const linkInput = this.mainContainerRef.current.querySelector("[data-trix-input][name='href']");
            linkInput?.addEventListener('keydown', e => {
              if (e.key === 'Enter') {
                this.handleLink();
              }
            });
            const addLinkBtn = this.mainContainerRef.current.querySelector("[data-trix-method='setAttribute']");
            addLinkBtn?.addEventListener('click', this.handleLink);
          }
        }); // Component ready!

        this.isReady = true;
      }
    });

    _defineProperty(this, "replaceEmbeddedIFrames", value => {
      const iframeRegex = new RegExp(`<iframe.+?iframe>`, 'ig');
      let match;
      let lastIndex = 0;

      while (match = iframeRegex.exec(value)) {
        if (lastIndex === 0) {
          this.getEditor().loadHTML('');
        }

        const iframe = match[0];
        const position = match.index;
        const preText = value.substring(lastIndex, position);
        this.getEditor().setSelectedRange([lastIndex, position]);
        this.getEditor().insertHTML(preText);
        const attachment = new this.Trix.Attachment({
          content: iframe
        });
        this.getEditor().insertAttachment(attachment);
        lastIndex = match.index + iframe.length;
        const postText = value.substring(lastIndex, value.length);
        this.getEditor().insertHTML(postText);
      }
    });

    _defineProperty(this, "trixEmbed", e => {
      const videoEmbedButton = `<button type="button" tabindex="-1" data-trix-action="x-video-dialog-open" title="Attach Video" class="trix-button trix-button--icon trix-button--video-attach">Attach Video</button>`;
      const videoEmbedDialog = `
            <div class="trix-dialog" data-trix-dialog="video-url" data-trix-dialog-attribute="video">
              <div class="trix-dialog__link-fields">
                <input type="url" name="video-url" class="trix-input trix-input--dialog trix-input--dialog-embed" placeholder="Enter Video URL…" aria-label="Video URL" data-trix-input="">
                <div class="trix-button-group">
                  <input type="button" class="trix-button trix-button--dialog" value="Add Video" data-trix-action="x-add-embed">
                </div>
              </div>
              <strong>Note: Only YouTube and Anchor.fm links are supported.</strong>
            </div>`;
      const {
        toolbarElement
      } = e.target;
      const attachFilesButton = toolbarElement.querySelector('[data-trix-action=attachFiles]');
      attachFilesButton.insertAdjacentHTML('afterend', videoEmbedButton);
      const trixDialog = toolbarElement.querySelector('.trix-dialog--link');
      trixDialog.insertAdjacentHTML('afterend', videoEmbedDialog);
    });

    _defineProperty(this, "trixActionInvoke", e => {
      const {
        toolbarElement
      } = e.target;

      if (e.actionName === 'x-video-dialog-open') {
        const attachVideoDialog = toolbarElement.querySelector('[data-trix-dialog=video-url]');
        const attachVideoDialogInput = toolbarElement.querySelector('.trix-input--dialog-embed');

        if (attachVideoDialog.getAttribute('data-trix-active') === '') {
          attachVideoDialog.removeAttribute('data-trix-active');
        } else {
          attachVideoDialog.setAttribute('data-trix-active', '');
          attachVideoDialogInput.removeAttribute('disabled');
        }
      } else if (e.actionName === 'x-add-embed') {
        const embedLink = toolbarElement.querySelector('.trix-input--dialog-embed').value?.trim();

        if (embedLink) {
          this.embedIframe(embedLink);
        }
      }
    });

    _defineProperty(this, "constructVideoEmbedURL", (service, id) => {
      if (service === 'youtube') {
        return `${SUPPORTED_SERVICE_URLS.youTube}${id}`;
      }
      /* else if (service === 'vimeo') {
      return `https://player.vimeo.com/video/${id}`;
      } */
      else if (service === 'anchorFm') {
        return `${SUPPORTED_SERVICE_URLS.anchorFm}${id}`;
      } else {
        return null;
      }
    });

    _defineProperty(this, "parseServiceLink", videoLink => {
      const regexps = {
        youtube: new RegExp('(?:https?://)?(?:www\\.)?youtu(?:\\.be/|be\\.com/\\S*(?:watch|embed)(?:(?:(?=/[^&\\s?]+(?!\\S))/)|(?:\\S*v=|v/)))([^&\\s?]+)', 'i'),
        vimeo: new RegExp('(http|https)?://(www\\.)?vimeo\\.com/(?:channels/(?:\\w+/)?|groups/([^/]*)/videos/|)(\\d+)(?:|/?)'),
        anchorFm: /^(http|https)?:\/\/(www\.)?anchor\.fm\/([^/]+)(\/embed)?(\/episodes\/)?([^/]+)?\/?$/
      };

      for (const service in regexps) {
        const matches = regexps[service].exec(videoLink);

        if (matches) {
          if (service === 'anchorFm') {
            const podcastName = matches[3];
            const episodeId = matches[6];
            const podcastUrl = `${podcastName}/embed`;
            return {
              service,
              id: episodeId ? `${podcastUrl}/episodes/${episodeId}` : podcastUrl
            };
          } else {
            return {
              service,
              id: matches[matches.length - 1]
            };
          }
        }
      }

      return {};
    });

    _defineProperty(this, "embedIframe", videoLink => {
      const {
        id,
        service
      } = this.parseServiceLink(videoLink);
      const embedLink = this.constructVideoEmbedURL(service, id);

      if (embedLink) {
        const sanitizedLink = embedLink.replace(/["\\]/g, ''); // Small security enhancement, prevents going out of `src`

        const videoServices = ['youtube', 'vimeo'];
        let attachmentData;

        if (videoServices.includes(service)) {
          attachmentData = {
            contentType: '--embed-iframe-video',
            content: `<iframe src="${sanitizedLink}/?showinfo=0" width="100%" height="394" frameborder="0" allowfullscreen/>`
          };
        } else {
          attachmentData = {
            contentType: `--embed-iframe-${service}`,
            content: `<iframe src="${sanitizedLink}" width="100%" frameborder="0"/>`
          };
        }

        this.getEditor().insertAttachment(new this.Trix.Attachment(attachmentData));
      }
    });

    _defineProperty(this, "handleChange", e => {
      // Trigger content formatters
      this.autolink(); // Notify parent function

      if (this.props.onChange) {
        this.props.onChange(e);
      } // Reset errors


      if (this.state.error) {
        this.setState({
          error: null
        });
      }
    });

    _defineProperty(this, "handleFileAccept", e => {
      if (!/^image\//.test(e.file.type)) {
        alert('You can only upload images.');
        e.preventDefault();
      } else if (e.file.size > 4000000) {
        // Prevent attaching files > 4MB
        alert('This file is too big (max: 4mb).');
        e.preventDefault();
      }
    });

    _defineProperty(this, "handleUpload", e => {
      const {
        attachment
      } = e;

      const attachmentContent = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(attachment, 'attachment.attributes.values.content');

      const isVideoAttachment = attachmentContent?.includes(`<iframe src="${SUPPORTED_SERVICE_URLS.youTube}`) || attachmentContent?.includes(`<iframe src="${SUPPORTED_SERVICE_URLS.anchorFm}`);

      if (isVideoAttachment) {
        return;
      } else if (!attachment.file) {
        attachment.remove(); // Remove unknown stuff, for example when copy-pasting HTML

        return;
      }

      this.props.setUploading?.(true);

      const onProgress = progress => attachment.setUploadProgress(progress);

      const onSuccess = fileURL => {
        this.props.setUploading?.(false);
        attachment.setAttributes({
          url: fileURL,
          href: fileURL
        });
      };

      const onFailure = () => {
        this.props.setUploading?.(false);
        this.setState({
          error: 'File upload failed'
        });
        attachment.remove();
      };

      (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .uploadImageWithXHR */ .Z4)(attachment.file, this.props.kind, {
        onProgress,
        onSuccess,
        onFailure
      });
      return e;
    });

    _defineProperty(this, "handleLink", () => {
      const urlInput = this.mainContainerRef.current?.querySelector("[data-trix-input][name='href']");
      const urlInputValue = urlInput?.value?.trim(); // Ignore missing input or empty values

      if (!urlInputValue) {
        return;
      } // Automatically add 'https://' to the url
      // eslint-disable-next-line camelcase


      if ((0,validator__WEBPACK_IMPORTED_MODULE_5__.isURL)(urlInputValue, {
        require_protocol: false
      }) && !(0,validator__WEBPACK_IMPORTED_MODULE_5__.isURL)(urlInputValue, {
        require_protocol: true
      })) {
        urlInput.value = `https://${urlInputValue}`;
      }
    });

    _defineProperty(this, "autolinkDelimiter", url => {
      let lastCharacterPosition = url.length;

      while (lastCharacterPosition > 0) {
        const lastCharacterIndex = lastCharacterPosition - 1;
        const closingPair = url[lastCharacterIndex];
        let openingPair;

        if (closingPair === ')') {
          openingPair = '(';
        } else if (closingPair === ']') {
          openingPair = '[';
        } else if (closingPair === '}') {
          openingPair = '{';
        } else if (closingPair === '"') {
          openingPair = '"';
        } else if (closingPair === "'") {
          openingPair = "'";
        } // Ensure single punctuations marks at the end of the URL are not included as part of link


        if ('?!.,:;*_~'.includes(url[lastCharacterIndex])) {
          lastCharacterPosition--;
        } else if (openingPair) {
          let opening = 0,
              closing = 0;
          /** Check to ensure that when a URL is enclosed within pair punctuations,
           * we do not include the closing punctuation as part of the link.
           * We only want to accept a closing punctuation at the end of the link,
           * if there is a corresponding opening punctuation within the URL.
           */

          for (let i = 0; i < lastCharacterPosition; i++) {
            if (url[i] === openingPair) {
              opening++;
            } else if (url[i] === closingPair) {
              closing++;
            }
          }

          if (opening >= closing) {
            break;
          }

          lastCharacterPosition--;
        } else {
          break;
        }
      }

      return lastCharacterPosition;
    });

    this.editorRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    this.mainContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    this.state = {
      id: props.id,
      error: null
    };
    this.isReady = false;

    if (false) {}
  }

  componentDidMount() {
    if (!this.state.id) {
      this.setState({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)()
      });
    } else if (!this.isReady) {
      this.initialize();
    }
  }

  componentDidUpdate(oldProps) {
    if (!this.isReady) {
      this.initialize();
    } else if (oldProps.reset !== this.props.reset) {
      this.editorRef.current.editor.loadHTML('');
    }
  }

  componentWillUnmount() {
    if (this.isReady) {
      this.editorRef.current.removeEventListener('trix-change', this.handleChange);
      this.editorRef.current.removeEventListener('trix-attachment-add', this.handleUpload);
      this.editorRef.current.removeEventListener('trix-attachment-add', this.handleFileAccept);
      this.editorRef.current.removeEventListener('trix-action-invoke', this.trixActionInvoke);
    }
  }

  getEditor() {
    return this.editorRef.current.editor;
  }

  /** Automatically create anchors with hrefs for links */
  autolink() {
    const linkRegex = new RegExp(`(https?://\\S+\\.\\S+)\\s`, 'ig');
    const editor = this.getEditor();
    const content = editor.getDocument().toString();
    let match;

    while (match = linkRegex.exec(content)) {
      const url = match[1];

      if ((0,validator__WEBPACK_IMPORTED_MODULE_5__.isURL)(url)) {
        const position = match.index;
        const urlLength = this.autolinkDelimiter(url);
        const range = [position, position + urlLength];
        const hrefAtRange = editor.getDocument().getCommonAttributesAtRange(range).href;
        const newURL = url.slice(0, urlLength);

        if (hrefAtRange !== newURL) {
          this.updateInRange(editor, range, 0, () => {
            if (editor.canActivateAttribute('href')) {
              editor.activateAttribute('href', newURL);
            }
          });
        }
      }
    }
  }
  /** A helper used by autolink to find where the url actually ends
   * Credits:
   * https://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37
   * https://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58
   */


  /** A trix helper that will apply func in range then restore base range when it's done */
  updateInRange(editor, range, offset = 0, updateFunc) {
    const baseRange = editor.getSelectedRange();
    editor.setSelectedRange(range);
    updateFunc();
    editor.setSelectedRange([baseRange[0] + offset, baseRange[1] + offset]);
  }
  /** ---- Render ---- */


  render() {
    const {
      defaultValue,
      withStickyToolbar,
      toolbarTop,
      toolbarOffsetY,
      toolbarBackgroundColor,
      autoFocus,
      placeholder,
      editorMinHeight,
      withBorders,
      inputName,
      disabled,
      error,
      fontSize,
      value,
      version,
      showCount,
      maxLength,
      editorMaxHeight
    } = this.props;
    return !this.state.id ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      maxHeight: editorMaxHeight ? editorMaxHeight + 56 : undefined,
      height: editorMinHeight ? editorMinHeight + 56 : 200
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(TrixEditorContainer, {
      withStickyToolbar: withStickyToolbar,
      toolbarTop: toolbarTop,
      toolbarOffsetY: toolbarOffsetY,
      toolbarBackgroundColor: toolbarBackgroundColor,
      editorMinHeight: editorMinHeight,
      editorMaxHeight: editorMaxHeight,
      withBorders: withBorders,
      version: version,
      isDisabled: disabled,
      error: error,
      "data-cy": this.props['data-cy'],
      ref: this.mainContainerRef,
      children: [this.state.error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        type: "error",
        mb: "36px",
        withIcon: true,
        children: this.state.error.toString()
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("input", {
        id: this.state.id,
        value: value || defaultValue,
        type: "hidden",
        name: inputName
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        fontSize: fontSize,
        children: !showCount ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("trix-editor", {
          ref: this.editorRef,
          input: this.state.id,
          autofocus: autoFocus ? true : undefined,
          placeholder: placeholder
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          position: "relative",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("trix-editor", {
            ref: this.editorRef,
            input: this.state.id,
            autofocus: autoFocus ? true : undefined,
            placeholder: placeholder
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            position: "absolute",
            bottom: "1em",
            right: "1em",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              textTransform: "uppercase",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("span", {
                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__/* .stripHTML */ .Cb)(value || defaultValue).length
              }), maxLength && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span", {
                children: [" / ", maxLength]
              })]
            })
          })]
        })
      })]
    });
  }

}

_defineProperty(RichTextEditor, "defaultProps", {
  withStickyToolbar: false,
  toolbarTop: 0,
  toolbarOffsetY: -62,
  // Default Trix toolbar height
  inputName: 'content',
  toolbarBackgroundColor: 'white',
  version: 'default',
  'data-cy': 'RichTextEditor',
  videoEmbedEnabled: false
});

RichTextEditor.__docgenInfo = {
  "description": "A React wrapper around the Trix library to edit rich text.\nProduces HTML and clear text.",
  "methods": [{
    "name": "getEditor",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "initialize",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "replaceEmbeddedIFrames",
    "docblock": "---- Trix handlers ----",
    "modifiers": [],
    "params": [{
      "name": "value"
    }],
    "returns": null,
    "description": "---- Trix handlers ----"
  }, {
    "name": "trixEmbed",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "trixActionInvoke",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "constructVideoEmbedURL",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "service",
      "type": null
    }, {
      "name": "id",
      "type": null
    }],
    "returns": null
  }, {
    "name": "parseServiceLink",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "videoLink",
      "type": null
    }],
    "returns": null
  }, {
    "name": "embedIframe",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "videoLink",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleFileAccept",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleUpload",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleLink",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "autolink",
    "docblock": "Automatically create anchors with hrefs for links",
    "modifiers": [],
    "params": [],
    "returns": null,
    "description": "Automatically create anchors with hrefs for links"
  }, {
    "name": "autolinkDelimiter",
    "docblock": "A helper used by autolink to find where the url actually ends\nCredits:\nhttps://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37\nhttps://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58",
    "modifiers": [],
    "params": [{
      "name": "url"
    }],
    "returns": null,
    "description": "A helper used by autolink to find where the url actually ends\nCredits:\nhttps://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37\nhttps://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58"
  }, {
    "name": "updateInRange",
    "docblock": "A trix helper that will apply func in range then restore base range when it's done",
    "modifiers": [],
    "params": [{
      "name": "editor"
    }, {
      "name": "range"
    }, {
      "name": "offset"
    }, {
      "name": "updateFunc"
    }],
    "returns": null,
    "description": "A trix helper that will apply func in range then restore base range when it's done"
  }],
  "displayName": "RichTextEditor",
  "props": {
    "withStickyToolbar": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Whether the toolbar should stick to the top",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "toolbarTop": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "description": "If position is sticky, this prop defines the `top` property. Support responsive arrays",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "toolbarOffsetY": {
      "defaultValue": {
        "value": "-62",
        "computed": false
      },
      "description": "Useful to compensate the height of the toolbar when editing inline",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "inputName": {
      "defaultValue": {
        "value": "'content'",
        "computed": false
      },
      "description": "A name for the input",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "toolbarBackgroundColor": {
      "defaultValue": {
        "value": "'white'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "version": {
      "defaultValue": {
        "value": "'default'",
        "computed": false
      },
      "description": "This component is borderless by default. Set this to `true` to change that.",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'default'",
          "computed": false
        }, {
          "value": "'simplified'",
          "computed": false
        }]
      },
      "required": false
    },
    "data-cy": {
      "defaultValue": {
        "value": "'RichTextEditor'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "videoEmbedEnabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "id": {
      "description": "If not provided, an id will be automatically generated which will require a component update",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "placeholder": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "kind": {
      "description": "A unique identified for the category of uploaded files. Required if version is not \"simplified\"",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "fontSize": {
      "description": "Font size for the text",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "autoFocus": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onChange": {
      "description": "Called when text is changed with html content as first param and text content as second param",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "reset": {
      "description": "Change this prop to reset the value",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "showCount": {
      "description": "If true, max text length will be displayed at the bottom right",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "maxLength": {
      "description": "max length which is allowed",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "withBorders": {
      "description": "This component is borderless by default. Set this to `true` to change that.",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disabled": {
      "description": "Whether the field should be disabled",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "editorMinHeight": {
      "description": "Min height for the full component",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "editorMaxHeight": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "error": {
      "description": "If truthy, will display a red outline",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "setUploading": {
      "description": "Called when an image is being uploaded to set a boolean",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72427);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["onSubmit", "defaultValue", "placeholder"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  searchPlaceholder: {
    id: "search.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Search..."
    }]
  }
});
/**
 * A wrapper around `SearchForm` that holds state and interacts with parent
 * through `onSubmit`, rather than `onChange`.
 */

const SearchBar = _ref => {
  let {
    onSubmit,
    defaultValue,
    placeholder
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(defaultValue || '');
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)(); // Reset value when `defaultValue` change, to handle reset filters

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setValue(defaultValue || '');
  }, [defaultValue]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SearchForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread({
    placeholder: placeholder || intl.formatMessage(messages.searchPlaceholder),
    value: value,
    onChange: setValue,
    onSubmit: event => {
      event.preventDefault();
      const searchInput = event.target.elements.q;
      onSubmit(searchInput.value || null);
    }
  }, props));
};

SearchBar.__docgenInfo = {
  "description": "A wrapper around `SearchForm` that holds state and interacts with parent\nthrough `onSubmit`, rather than `onChange`.",
  "methods": [],
  "displayName": "SearchBar",
  "props": {
    "onSubmit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "placeholder": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ 60516:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89837);
/* harmony import */ var _styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99708);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97079);
/* harmony import */ var _conversations_EmojiReactionPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23737);
/* harmony import */ var _conversations_EmojiReactions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(953);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69078);
/* harmony import */ var _EditUpdateForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(61196);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(74770);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(37278);
/* harmony import */ var _PublishUpdateBtnWithData__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(41116);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(173);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(36422);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EditUpdateForm__WEBPACK_IMPORTED_MODULE_17__, _PublishUpdateBtnWithData__WEBPACK_IMPORTED_MODULE_25__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_29__]);
([_EditUpdateForm__WEBPACK_IMPORTED_MODULE_17__, _PublishUpdateBtnWithData__WEBPACK_IMPORTED_MODULE_25__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_29__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const _excluded = ["update", "intl", "collective", "compact", "LoggedInUser"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

































const UpdateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC).withConfig({
  displayName: "StyledUpdate__UpdateWrapper",
  componentId: "sc-1ciw1fp-0"
})(["max-width:100%;min-height:100px;padding:20px;", " img{max-width:100%;}@media (max-width:600px){max-width:100%;}"], styled_system__WEBPACK_IMPORTED_MODULE_8__.borders);
const PrivateUpdateMesgBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_MessageBox__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z).withConfig({
  displayName: "StyledUpdate__PrivateUpdateMesgBox",
  componentId: "sc-1ciw1fp-1"
})(["height:40px;background:#f0f8ff;border:1px solid #b8deff;box-sizing:border-box;border-radius:6px;margin-top:10px;padding:10px;font-size:12px;color:#71757a;display:flex;align-items:center;"]);

class StyledUpdate extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "cancelEdit", () => {
      this.setState({
        modified: false,
        mode: 'details'
      });
    });

    _defineProperty(this, "edit", () => {
      this.setState({
        modified: false,
        mode: 'edit'
      });
    });

    _defineProperty(this, "toggleEdit", () => {
      this.state.mode === 'edit' ? this.cancelEdit() : this.edit();
    });

    _defineProperty(this, "deleteUpdate", async () => {
      if (!confirm('😱 Are you really sure you want to delete this update?')) {
        return;
      }

      try {
        await this.props.deleteUpdate({
          variables: {
            id: this.props.update.id
          }
        });
        this.props.router.push(`/${this.props.collective.slug}`);
      } catch (err) {
        // TODO: this should be reported to the user
        // eslint-disable-next-line no-console
        console.error('Update -> deleteUpdate -> error: ', err);
      }
    });

    _defineProperty(this, "save", async update => {
      update.id = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props, 'update.id');
      await this.props.editUpdate({
        variables: {
          update
        }
      });
      this.setState({
        modified: false,
        mode: 'details'
      });
    });

    this.state = {
      modified: false,
      update: {},
      mode: props.compact ? 'summary' : 'details'
    };
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
      edit: {
        id: "Edit",
        defaultMessage: [{
          "type": 0,
          "value": "Edit"
        }]
      },
      cancelEdit: {
        id: "CancelEdit",
        defaultMessage: [{
          "type": 0,
          "value": "Cancel edit"
        }]
      },
      viewLatestUpdates: {
        id: "update.viewLatestUpdates",
        defaultMessage: [{
          "type": 0,
          "value": "View latest updates"
        }]
      }
    });
  }

  renderUpdateMeta(update, isAdmin, editable, isEditing) {
    const {
      intl
    } = this.props;
    const {
      mode
    } = this.state;
    const fromAccount = update.fromCollective || update.fromAccount;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "Baseline",
      color: "black.700",
      "data-cy": "meta",
      flexWrap: "wrap",
      children: [!isEditing && isAdmin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
        fontSize: "11px",
        mr: 2,
        children: update.isPrivate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
          id: "privateLockText",
          content: () => update.makePublicOn && !update.publishedAt ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "3/51OL",
            defaultMessage: [{
              "type": 0,
              "value": "Will be made public on "
            }, {
              "type": 3,
              "value": "date",
              "style": "short"
            }],
            values: {
              date: new Date(update.makePublicOn)
            }
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "update.private.lock_text",
            defaultMessage: [{
              "type": 0,
              "value": "This update is for contributors only"
            }]
          }),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
            alignItems: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
              mr: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_fa_solid_Lock__WEBPACK_IMPORTED_MODULE_5__.Lock, {
                "data-tip": true,
                "data-for": "privateLockText",
                "data-cy": "privateIcon",
                size: 10,
                cursor: "pointer"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "yYP4Lw",
              defaultMessage: [{
                "type": 0,
                "value": "Private update"
              }]
            })]
          }), ' ']
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "BSPPvm",
          defaultMessage: [{
            "type": 0,
            "value": "Public update"
          }]
        })
      }), update.publishedAt ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
        as: "span",
        mr: 1,
        fontSize: "12px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "update.publishedAtBy",
          defaultMessage: [{
            "type": 0,
            "value": "Published on "
          }, {
            "type": 1,
            "value": "date"
          }, {
            "type": 0,
            "value": " by "
          }, {
            "type": 1,
            "value": "author"
          }],
          values: {
            date: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_12__/* .formatDate */ .p6)(update.publishedAt, {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            author: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
              as: "span",
              mr: 2,
              fontSize: "12px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                collective: fromAccount
              })
            })
          }
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
        as: "span",
        mr: 1,
        fontSize: "12px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "update.createdAtBy",
          defaultMessage: [{
            "type": 0,
            "value": "Created on "
          }, {
            "type": 1,
            "value": "date"
          }, {
            "type": 0,
            "value": " (draft) by "
          }, {
            "type": 1,
            "value": "author"
          }],
          values: {
            date: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_12__/* .formatDate */ .p6)(update.createdAt),
            author: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
              as: "span",
              mr: 2,
              fontSize: "12px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                collective: fromAccount
              })
            })
          }
        })
      }), editable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
          ml: 2,
          mr: 2,
          fontSize: "12px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            buttonSize: "tiny",
            onClick: this.toggleEdit,
            "data-cy": "toggleEditUpdate",
            children: intl.formatMessage(this.messages[`${mode === 'edit' ? 'cancelEdit' : 'edit'}`])
          })
        }), !isEditing && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
          mr: 2,
          fontSize: "12px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            buttonSize: "tiny",
            onClick: this.deleteUpdate,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "actions.delete",
              defaultMessage: [{
                "type": 0,
                "value": "Delete"
              }]
            })
          })
        })]
      })]
    });
  }

  renderUpdateTitle() {
    const {
      update,
      collective
    } = this.props;
    const {
      mode
    } = this.state;

    if (mode === 'summary') {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Link__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getCollectivePageRoute */ .x0)(collective)}/updates/${update.slug}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Text__WEBPACK_IMPORTED_MODULE_30__.H5, {
          "data-cy": "updateTitle",
          children: update.title
        })
      });
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Text__WEBPACK_IMPORTED_MODULE_30__.H5, {
        "data-cy": "updateTitle",
        mb: 2,
        children: update.title
      });
    }
  }

  renderSummary(update) {
    const {
      collective,
      isReloadingData
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [update.userCanSeeUpdate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledContainer, {
        mb: 2,
        pl: [0, 60],
        fontSize: "14px",
        color: "#4B4E52",
        dangerouslySetInnerHTML: {
          __html: update.summary
        }
      }), !update.userCanSeeUpdate && !isReloadingData && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(PrivateUpdateMesgBox, {
        type: "info",
        "data-cy": "mesgBox",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "update.private.cannot_view_message",
          defaultMessage: [{
            "type": 0,
            "value": "Contribute to "
          }, {
            "type": 1,
            "value": "collective"
          }, {
            "type": 0,
            "value": " to see this Update"
          }],
          values: {
            collective: collective.name
          }
        })
      })]
    });
  }

  renderFullContent() {
    const {
      update,
      collective,
      isReloadingData,
      reactions,
      LoggedInUser
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_StyledContainer2, {
      pl: [0, 60],
      maxWidth: 718,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
        mt: 3,
        mb: 4,
        borderColor: "black.100"
      }), update.html ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          content: update.html
        }), update.publishedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
          mt: 3,
          flexWrap: "wrap",
          "data-cy": "update-reactions",
          children: [reactions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_conversations_EmojiReactions__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            reactions: reactions
          }), LoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_conversations_EmojiReactionPicker__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            update: update
          })]
        })]
      }) : !update.userCanSeeUpdate && !isReloadingData ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(PrivateUpdateMesgBox, {
        type: "info",
        "data-cy": "mesgBox",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "update.private.cannot_view_message",
          defaultMessage: [{
            "type": 0,
            "value": "Contribute to "
          }, {
            "type": 1,
            "value": "collective"
          }, {
            "type": 0,
            "value": " to see this Update"
          }],
          values: {
            collective: collective.name
          }
        })
      }) : isReloadingData ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        height: 300
      }) : null, collective.isFrozen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        withIcon: true,
        type: "warning",
        mt: 3,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "qstjb6",
          defaultMessage: [{
            "type": 0,
            "value": "This account is currently frozen and cannot be used to publish updates."
          }]
        }), ' ', (0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .isFeatureEnabled */ .cr)(collective.host, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.CONTACT_FORM */ .h6.CONTACT_FORM) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
          id: "KxBiJC",
          defaultMessage: [{
            "type": 0,
            "value": "Please "
          }, {
            "type": 8,
            "value": "ContactLink",
            "children": [{
              "type": 0,
              "value": "contact"
            }]
          }, {
            "type": 0,
            "value": " your fiscal host for more details."
          }],
          values: {
            ContactLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_20__/* .getI18nLink */ .fw)({
              href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getCollectivePageRoute */ .x0)(collective.host)}/contact`
            })
          }
        })]
      }) : update.userCanPublishUpdate ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_PublishUpdateBtnWithData__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        id: update.id,
        isHost: Boolean(update.account?.isHost),
        isChangelog: update.isChangelog,
        isPrivate: update.isPrivate
      }) : null]
    });
  }

  renderEditUpdateForm() {
    const {
      collective,
      update
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      flex: "1 1",
      maxWidth: 700,
      flexWrap: "wrap",
      children: [this.renderUpdateMeta(update, true, true, true), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_EditUpdateForm__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        collective: collective,
        update: update,
        onSubmit: this.save,
        isChangelog: update.isChangelog
      })]
    });
  }

  render() {
    const _this$props = this.props,
          {
      update,
      intl,
      collective,
      compact,
      LoggedInUser
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    const {
      mode
    } = this.state;
    const canEditUpdate = LoggedInUser && LoggedInUser.canEditUpdate(update);
    const editable = !compact && props.editable && canEditUpdate;
    const fromAccount = update.fromCollective || update.fromAccount;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(UpdateWrapper, _objectSpread(_objectSpread({}, props), {}, {
        children: [mode !== 'edit' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          width: "100%",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
            mb: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              mr: 20,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                collective: fromAccount,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, {
                  collective: fromAccount,
                  radius: 40
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
              children: [this.renderUpdateTitle(), this.renderUpdateMeta(update, canEditUpdate, editable)]
            })]
          }), mode === 'summary' && this.renderSummary(update), mode === 'details' && this.renderFullContent()]
        }), mode === 'edit' && this.renderEditUpdateForm()]
      })), update.publishedAt && mode === 'details' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
        my: 3,
        justifyContent: ['center', 'flex-start'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Link__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
          href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getCollectivePageRoute */ .x0)(collective)}/updates`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
            ml: [0, 5],
            children: intl.formatMessage(this.messages['viewLatestUpdates'])
          })
        })
      })]
    });
  }

}

const editUpdateMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation EditUpdate($update: UpdateUpdateInput!) {
    editUpdate(update: $update) {
      id
      updatedAt
      title
      html
      isPrivate
      isChangelog
      makePublicOn
      userCanPublishUpdate
    }
  }
`;
const deleteUpdateMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation DeleteUpdate($id: String!) {
    deleteUpdate(id: $id) {
      id
    }
  }
`;
const addEditUpdateMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(editUpdateMutation, {
  name: 'editUpdate',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T
  }
});
const addDeleteUpdateMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(deleteUpdateMutation, {
  name: 'deleteUpdate',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T
  }
});
const addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_12__/* .compose */ .qC)(addEditUpdateMutation, addDeleteUpdateMutation);
StyledUpdate.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "cancelEdit",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "edit",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "toggleEdit",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "deleteUpdate",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "save",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "update",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderUpdateMeta",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "update",
      "type": null
    }, {
      "name": "isAdmin",
      "type": null
    }, {
      "name": "editable",
      "type": null
    }, {
      "name": "isEditing",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderUpdateTitle",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderSummary",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "update",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderFullContent",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderEditUpdateForm",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "StyledUpdate",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "update": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "compact": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "editable": {
      "description": "",
      "type": {
        "name": "bool"
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
    "isReloadingData": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "editUpdate": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "deleteUpdate": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "reactions": {
      "description": "Reactions associated with this update *",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_7__.injectIntl)(addGraphql((0,next_router__WEBPACK_IMPORTED_MODULE_6__.withRouter)(StyledUpdate))));

var _StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).withConfig({
  displayName: "StyledUpdate___StyledContainer",
  componentId: "sc-1ciw1fp-2"
})({
  wordBreak: 'break-word'
});

var _StyledContainer2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).withConfig({
  displayName: "StyledUpdate___StyledContainer2",
  componentId: "sc-1ciw1fp-3"
})({
  wordBreak: 'break-word'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87805:
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
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87268);
/* harmony import */ var _StyledUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60516);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledUpdate__WEBPACK_IMPORTED_MODULE_5__]);
_StyledUpdate__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Updates__LoadingContainer",
  componentId: "sc-1rntou2-0"
})(["color:#797d7f;position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgba(255,255,255,0.85);text-transform:uppercase;letter-spacing:3px;font-weight:bold;z-index:10;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(5px);"]);

class Updates extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.fetchMore = this.fetchMore.bind(this);
    this.state = {
      loading: false,
      isPayActionLocked: false
    };
  }

  fetchMore(e) {
    e.target.blur();
    this.setState({
      loading: true
    });
    this.props.fetchMore().then(() => {
      this.setState({
        loading: false
      });
    });
  }

  setPayActionLock(val) {
    this.setState({
      isPayActionLocked: val
    });
  }

  render() {
    const {
      collective,
      updates
    } = this.props;
    const showLoadMore = updates?.nodes.length < updates?.totalCount;

    if (!updates) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {});
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "Updates",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        position: "relative",
        border: "1px solid #e6e8eb",
        borderRadius: 5,
        children: [this.state.loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LoadingContainer, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "loading",
            defaultMessage: [{
              "type": 0,
              "value": "loading"
            }]
          })
        }), updates.nodes.map((update, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          padding: "0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledUpdate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            update: update,
            collective: collective,
            compact: true,
            borderTop: index !== 0 ? '1px solid #e6e8eb' : 'none'
          })
        }, update.id)), updates.nodes.length === 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          color: "black.700",
          p: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "updates.empty",
            defaultMessage: [{
              "type": 0,
              "value": "No Updates"
            }]
          })
        })]
      }), showLoadMore && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        margin: "1rem",
        textAlign: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          onClick: this.fetchMore,
          textTransform: "capitalize",
          children: [this.state.loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "loading",
            defaultMessage: [{
              "type": 0,
              "value": "loading"
            }]
          }), !this.state.loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "loadMore",
            defaultMessage: [{
              "type": 0,
              "value": "load more"
            }]
          })]
        })
      })]
    });
  }

}

Updates.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "fetchMore",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "setPayActionLock",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "val",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "Updates",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "updates": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "fetchMore": {
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Updates);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ conversations_EmojiReactionPicker)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(29114);
// EXTERNAL MODULE: external "react-popper"
var external_react_popper_ = __webpack_require__(42932);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/hooks/useGlobalBlur.js
var useGlobalBlur = __webpack_require__(55348);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/icons/CustomStyledIcon.js
var CustomStyledIcon = __webpack_require__(50333);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/icons/AddReactionIcon.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const AddReactionIcon = props => /*#__PURE__*/jsx_runtime_.jsx(CustomStyledIcon/* default */.Z, _objectSpread(_objectSpread({
  fill: "none",
  width: "17",
  height: "16",
  viewBox: "0 0 17 16"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    fill: "#9D9FA3",
    fillRule: "evenodd",
    d: "M13.136 3.81v2.285h1.546V3.81H17V2.286h-2.318V0h-1.546v2.286h-2.318V3.81h2.318zM0 8.762c0-3.996 3.281-7.238 7.334-7.238.94 0 1.84.174 2.666.491v1.668a5.84 5.84 0 00-2.66-.635c-3.201 0-5.795 2.557-5.795 5.714 0 3.157 2.594 5.714 5.796 5.714 3.202 0 5.795-2.557 5.795-5.714A5.64 5.64 0 0012.856 7h1.607c.143.564.219 1.154.219 1.762 0 3.995-3.289 7.238-7.348 7.238C3.28 16 0 12.757 0 8.762zm9.66-.381c.64 0 1.158-.51 1.158-1.143A1.15 1.15 0 009.66 6.095c-.641 0-1.159.51-1.159 1.143a1.15 1.15 0 001.16 1.143zM6.181 7.238a1.15 1.15 0 01-1.16 1.143 1.15 1.15 0 01-1.158-1.143 1.15 1.15 0 011.159-1.143c.641 0 1.159.51 1.159 1.143zm1.159 5.714c1.585 0 2.933-.953 3.477-2.285H3.864c.544 1.332 1.891 2.285 3.477 2.285z",
    clipRule: "evenodd",
    strokeWidth: "0.1"
  })
}));

AddReactionIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AddReactionIcon",
  "props": {
    "size": {
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
    }
  }
};
/* harmony default export */ const icons_AddReactionIcon = (AddReactionIcon);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
;// CONCATENATED MODULE: ./components/conversations/EmojiReactionPicker.js
function EmojiReactionPicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EmojiReactionPicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EmojiReactionPicker_ownKeys(Object(source), !0).forEach(function (key) { EmojiReactionPicker_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EmojiReactionPicker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function EmojiReactionPicker_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const addReactionMutation = client_.gql`
  mutation AddEmojiReaction($emoji: String!, $update: UpdateReferenceInput, $comment: CommentReferenceInput) {
    addEmojiReaction(emoji: $emoji, update: $update, comment: $comment) {
      update {
        id
        reactions
        userReactions
      }
      comment {
        id
        reactions
        userReactions
      }
    }
  }
`;
const removeReactionMutation = client_.gql`
  mutation RemoveEmojiReaction($emoji: String!, $update: UpdateReferenceInput, $comment: CommentReferenceInput) {
    removeEmojiReaction(emoji: $emoji, update: $update, comment: $comment) {
      update {
        id
        reactions
        userReactions
      }
      comment {
        id
        reactions
        userReactions
      }
    }
  }
`;
const Emoji = external_styled_components_default().div.withConfig({
  displayName: "EmojiReactionPicker__Emoji",
  componentId: "sc-4zqity-0"
})(["font-size:15px;"]);
const ReactionButton = external_styled_components_default()(StyledRoundButton/* default */.Z).attrs({
  isBorderless: true,
  buttonSize: 'small'
}).withConfig({
  displayName: "EmojiReactionPicker__ReactionButton",
  componentId: "sc-4zqity-1"
})(["margin:4px;background:white !important;", "{transition:transform 0.15s cubic-bezier(0.2,0,0.13,2);}&:hover{", "{transform:scale(1.3);}}", ""], Emoji, Emoji, props => props.isSelected && (0,external_styled_components_.css)(["background:", " !important;"], props.theme.colors.primary[200]));

const getOptimisticResponse = (entity, emoji, isAdding) => {
  const userReactions = entity.userReactions || [];
  const {
    __typename
  } = entity;
  const fieldName = __typename === 'Update' ? 'update' : 'comment';
  const fieldNameOpposite = __typename === 'Update' ? 'comment' : 'update';

  if (isAdding) {
    const newCount = (entity.reactions[emoji] || 0) + 1;
    return {
      __typename: 'Mutation',
      addEmojiReaction: {
        __typename: 'EmojiReactionsResponse',
        [fieldName]: {
          __typename,
          id: entity.id,
          reactions: EmojiReactionPicker_objectSpread(EmojiReactionPicker_objectSpread({}, entity.reactions), {}, {
            [emoji]: newCount
          }),
          userReactions: [...userReactions, emoji]
        },
        [fieldNameOpposite]: null
      }
    };
  } else {
    const newCount = (entity.reactions[emoji] || 0) - 1;

    const reactions = EmojiReactionPicker_objectSpread(EmojiReactionPicker_objectSpread({}, entity.reactions), {}, {
      [emoji]: newCount
    });

    if (!reactions[emoji]) {
      delete reactions[emoji];
    }

    return {
      __typename: 'Mutation',
      removeEmojiReaction: {
        __typename: 'EmojiReactionsResponse',
        [fieldName]: {
          __typename,
          id: entity.id,
          reactions,
          userReactions: userReactions.filter(userEmoji => userEmoji !== emoji)
        },
        [fieldNameOpposite]: null
      }
    };
  }
};

const mutationOptions = {
  context: helpers/* API_V2_CONTEXT */.T
};
/**
 * A component to render the reaction picker on comments.
 */

const EmojiReactionPicker = ({
  comment,
  update
}) => {
  const emojiFirstRow = ['👍️', '👎', '😀', '🎉'];
  const emojiSecondRow = ['😕', '❤️', '🚀', '👀'];
  const [open, setOpen] = external_react_default().useState(false);
  const wrapperRef = external_react_default().useRef();
  const [addReaction] = (0,client_.useMutation)(addReactionMutation, mutationOptions);
  const [removeReaction] = (0,client_.useMutation)(removeReactionMutation, mutationOptions);
  (0,useGlobalBlur/* default */.Z)(wrapperRef, outside => {
    if (outside) {
      setOpen(false);
    }
  });

  const getReactionBtnProps = emoji => {
    let isSelected;

    if (comment) {
      isSelected = comment.userReactions?.includes(emoji);
    } else if (update) {
      isSelected = update.userReactions?.includes(emoji);
    }

    return {
      children: /*#__PURE__*/jsx_runtime_.jsx(Emoji, {
        children: emoji
      }),
      isSelected,
      onClick: () => {
        setOpen(false);
        const action = isSelected ? removeReaction : addReaction;

        if (comment) {
          return action({
            variables: {
              emoji: emoji,
              comment: {
                id: comment.id
              }
            },
            optimisticResponse: getOptimisticResponse(comment, emoji, !isSelected, true)
          });
        } else if (update) {
          return action({
            variables: {
              emoji: emoji,
              update: {
                id: update.id
              }
            },
            optimisticResponse: getOptimisticResponse(update, emoji, !isSelected, false)
          });
        }
      }
    };
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_popper_.Manager, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      ref: wrapperRef,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_popper_.Reference, {
        children: ({
          ref
        }) => /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
          buttonSize: "tiny",
          display: "inline-block",
          whiteSpace: "nowrap",
          onClick: () => setOpen(true),
          ref: ref,
          margin: "4px 8px 4px 0",
          "data-cy": "comment-reaction-picker-trigger",
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_AddReactionIcon, {})
        })
      }), open && /*#__PURE__*/jsx_runtime_.jsx(external_react_popper_.Popper, {
        placement: "bottom",
        children: ({
          placement,
          ref,
          style
        }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledCard/* default */.Z, {
          boxShadow: "-2px -1px 3px 0px #e8e8e8",
          zIndex: 9999,
          "data-placement": placement,
          ref: ref,
          style: style,
          "data-cy": "comment-reaction-picker-popper",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
            children: emojiFirstRow.map(emoji => /*#__PURE__*/jsx_runtime_.jsx(ReactionButton, EmojiReactionPicker_objectSpread({}, getReactionBtnProps(emoji)), emoji))
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
            children: emojiSecondRow.map(emoji => /*#__PURE__*/jsx_runtime_.jsx(ReactionButton, EmojiReactionPicker_objectSpread({}, getReactionBtnProps(emoji)), emoji))
          })]
        })
      })]
    })
  });
};

EmojiReactionPicker.__docgenInfo = {
  "description": "A component to render the reaction picker on comments.",
  "methods": [],
  "displayName": "EmojiReactionPicker",
  "props": {
    "comment": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "html": {
            "name": "string",
            "required": false
          },
          "createdAt": {
            "name": "string",
            "required": false
          },
          "userReactions": {
            "name": "array",
            "required": false
          }
        }
      },
      "required": false
    },
    "update": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "html": {
            "name": "string",
            "required": false
          },
          "createdAt": {
            "name": "string",
            "required": false
          },
          "fromAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "name": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "userReactions": {
            "name": "array",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const conversations_EmojiReactionPicker = (EmojiReactionPicker);

/***/ }),

/***/ 953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const EmojiLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_2__/* .Span */ .Dr).withConfig({
  displayName: "EmojiReactions__EmojiLabel",
  componentId: "sc-os32es-0"
})(["outline:0;border:1px solid #dadada;border-style:solid;border-width:1px;border-radius:100px;text-align:center;padding:5px 14px 5px 14px;font-size:12px;line-height:14px;margin:4px 8px 4px 0;"]);

const EmojiReactions = ({
  reactions
}) => {
  return Object.keys(reactions).sort().map(emoji => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(EmojiLabel, {
      children: [emoji, "\xA0\xA0", reactions[emoji]]
    }, emoji);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(EmojiReactions));

/***/ }),

/***/ 31406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95594);
/* harmony import */ var lodash_sum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sum__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20808);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29242);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const translatedTypes = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  individuals: {
    id: "AudienceBreakdown.individuals",
    defaultMessage: [{
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " "
    }, {
      "type": 6,
      "value": "count",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "individual"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "individuals"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }]
  },
  organizations: {
    id: "AudienceBreakdown.organizationAdmins",
    defaultMessage: [{
      "type": 0,
      "value": "The admins of "
    }, {
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " "
    }, {
      "type": 6,
      "value": "count",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "organization"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "organizations"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }]
  },
  collectives: {
    id: "AudienceBreakdown.collectiveAdmins",
    defaultMessage: [{
      "type": 0,
      "value": "The admins of "
    }, {
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " "
    }, {
      "type": 6,
      "value": "count",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "collective"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "collectives"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }]
  },
  hosted: {
    id: "AudienceBreakdown.hostedAdmins",
    defaultMessage: [{
      "type": 0,
      "value": "The admins of "
    }, {
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " "
    }, {
      "type": 6,
      "value": "count",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "hosted account"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "hosted accounts"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }]
  },
  coreContributors: {
    id: "AudienceBreakdown.coreContributors",
    defaultMessage: [{
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " "
    }, {
      "type": 6,
      "value": "count",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "core contributor"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "core contributors"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }]
  }
});

const UpdateAudienceBreakdown = ({
  audienceStats,
  isLoading
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      height: 50
    });
  } else if (!audienceStats || audienceStats?.id.includes('NO_ONE')) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "qzsw+D",
      defaultMessage: [{
        "type": 0,
        "value": "Your Update will not be sent to anyone."
      }]
    });
  }

  const typesWithStats = Object.keys(translatedTypes);

  const stats = lodash_pickBy__WEBPACK_IMPORTED_MODULE_1___default()(audienceStats, (value, key) => value && typesWithStats.includes(key));

  const hasOnlyTotal = !lodash_sum__WEBPACK_IMPORTED_MODULE_0___default()(Object.values(lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(audienceStats, ['collectives', 'hosted', 'individuals', 'organizations', 'coreContributors'])));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    "data-cy": "update-audience-breakdown",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "UpdateAudienceBreakdown.Total",
      defaultMessage: [{
        "type": 0,
        "value": "Your Update will be sent to a total of "
      }, {
        "type": 1,
        "value": "count"
      }, {
        "type": 0,
        "value": " emails"
      }],
      values: {
        count: audienceStats.total
      }
    }), hasOnlyTotal ? '.' : ':', !hasOnlyTotal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
      children: Object.entries(stats).map(([key, count]) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
        children: intl.formatMessage(translatedTypes[key], {
          count
        })
      }, key))
    })]
  });
};

UpdateAudienceBreakdown.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdateAudienceBreakdown",
  "props": {
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "audienceStats": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "total": {
            "name": "number",
            "required": false
          },
          "hosted": {
            "name": "number",
            "required": false
          },
          "individuals": {
            "name": "number",
            "required": false
          },
          "organizations": {
            "name": "number",
            "required": false
          },
          "collectives": {
            "name": "number",
            "required": false
          },
          "coreContributors": {
            "name": "number",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateAudienceBreakdown);

/***/ }),

/***/ 62589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ updates_UpdateFilters)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/StyledSelectFilter.js
var StyledSelectFilter = __webpack_require__(52847);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/updates/filters/UpdateOrderByFilter.js
const _excluded = ["value", "onChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const FilterLabel = external_styled_components_default().label.withConfig({
  displayName: "UpdateOrderByFilter__FilterLabel",
  componentId: "sc-s44mm1-0"
})(["font-weight:500;font-size:12px;line-height:16px;letter-spacing:0.06em;text-transform:uppercase;color:#4e5052;margin-bottom:10px;"]);
const labels = (0,external_react_intl_.defineMessages)({
  'most-recent': {
    id: "Collectives.MostRecent",
    defaultMessage: [{
      "type": 0,
      "value": "Most recent"
    }]
  },
  oldest: {
    id: "Collectives.Oldest",
    defaultMessage: [{
      "type": 0,
      "value": "Oldest"
    }]
  }
});

const UpdateOrderByFilter = _ref => {
  let {
    value,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,external_react_intl_.useIntl)();

  const getOption = value => ({
    label: intl.formatMessage(labels[value]),
    value
  });

  const options = [getOption('most-recent'), getOption('oldest')];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(FilterLabel, {
      htmlFor: "update-filter-sort-by",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "Update.SortBy",
        defaultMessage: [{
          "type": 0,
          "value": "Sort By"
        }]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(StyledSelectFilter/* StyledSelectFilter */.V, _objectSpread({
      inputId: "update-filter-sort-by",
      value: labels[value] ? getOption(value) : options[0],
      onChange: ({
        value
      }) => onChange(value),
      options: options
    }, props))]
  });
};

UpdateOrderByFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdateOrderByFilter",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const filters_UpdateOrderByFilter = (/*#__PURE__*/external_react_default().memo(UpdateOrderByFilter));
// EXTERNAL MODULE: ./components/SearchBar.js
var SearchBar = __webpack_require__(32606);
;// CONCATENATED MODULE: ./components/updates/filters/UpdateSearchFilter.js








const UpdateSearchFilter_FilterLabel = external_styled_components_default().label.withConfig({
  displayName: "UpdateSearchFilter__FilterLabel",
  componentId: "sc-fz2wlq-0"
})(["font-weight:500;font-size:12px;line-height:16px;letter-spacing:0.06em;text-transform:uppercase;color:#4e5052;margin-bottom:10px;"]);
const SearchFormContainer = external_styled_components_default()(Grid/* Box */.xu).withConfig({
  displayName: "UpdateSearchFilter__SearchFormContainer",
  componentId: "sc-fz2wlq-1"
})(["width:100%;min-width:10rem;"]);
const messages = (0,external_react_intl_.defineMessages)({
  searchFilterPlaceholder: {
    id: "UpdateSearchFilter.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Search by user, title, content..."
    }]
  }
});

const UpdateSearchFilter = ({
  searchTerm,
  onChange
}) => {
  const {
    formatMessage
  } = (0,external_react_intl_.useIntl)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(UpdateSearchFilter_FilterLabel, {
      htmlFor: "update-filter-search",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "Search",
        defaultMessage: [{
          "type": 0,
          "value": "Search"
        }]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SearchFormContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(SearchBar/* default */.Z, {
        id: "update-filter-search",
        placeholder: formatMessage(messages.searchFilterPlaceholder),
        height: "38px",
        defaultValue: searchTerm,
        onSubmit: onChange
      })
    })]
  });
};

UpdateSearchFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdateSearchFilter",
  "props": {
    "searchTerm": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const filters_UpdateSearchFilter = (/*#__PURE__*/external_react_default().memo(UpdateSearchFilter));
;// CONCATENATED MODULE: ./components/updates/UpdateFilters.js
function UpdateFilters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function UpdateFilters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? UpdateFilters_ownKeys(Object(source), !0).forEach(function (key) { UpdateFilters_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : UpdateFilters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function UpdateFilters_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const UpdateFilters = ({
  values,
  onChange
}) => {
  const getFilterProps = name => ({
    inputId: `updates-filter-${name}`,
    value: values?.[name],
    onChange: value => {
      onChange(UpdateFilters_objectSpread(UpdateFilters_objectSpread({}, values), {}, {
        [name]: value === 'ALL' ? null : value
      }));
    }
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
    flexWrap: "wrap",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
      width: [1, 1, 2 / 12],
      mr: ['none', '15px'],
      children: /*#__PURE__*/jsx_runtime_.jsx(filters_UpdateOrderByFilter, UpdateFilters_objectSpread({}, getFilterProps('orderBy')))
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
      width: [1, 1, '82%'],
      children: /*#__PURE__*/jsx_runtime_.jsx(filters_UpdateSearchFilter, UpdateFilters_objectSpread({}, getFilterProps('searchTerm')))
    })]
  });
};

UpdateFilters.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdateFilters",
  "props": {
    "values": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const updates_UpdateFilters = (/*#__PURE__*/external_react_default().memo(UpdateFilters));

/***/ }),

/***/ 14063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35427);


function set(key, value, ttl = 1000 * 60 * 60) {
  if (!value) {
    return (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__/* .removeFromLocalStorage */ .bZ)(key);
  }

  const expire = new Date(Date.now() + ttl).getTime();
  (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__/* .setLocalStorage */ .qQ)(key, JSON.stringify({
    timestamp: new Date().getTime(),
    expire,
    value
  }));
}

function get(key) {
  const entry = (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__/* .getFromLocalStorage */ .fp)(key);

  if (!entry) {
    return;
  }

  try {
    const obj = JSON.parse(entry);

    if (Number(obj.expire) < Date.now()) {
      // eslint-disable-next-line no-console
      console.error('>>> entry for ', key, 'has expired');
      return;
    }

    return obj.value;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('>>> unable to parse entry for ', key, 'entry: ', entry);
    return;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  set,
  get
});

/***/ }),

/***/ 72004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CustomScrollbarCSS)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A custom scrollbar for Chrome, more prettier than the system one.
 */

const CustomScrollbarCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media (pointer:fine){&::-webkit-scrollbar{height:8px;margin:0 16px;}&::-webkit-scrollbar-thumb{background:#d1d1d3;border-radius:16px;&:hover{background:#aaa;}}&::-webkit-scrollbar-track{background:#f2f3f4;border-radius:20px;}&::-webkit-scrollbar-button{color:white;}}"]);

/***/ }),

/***/ 56746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UPDATES_PER_PAGE": () => (/* binding */ UPDATES_PER_PAGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getUpdatesVariables": () => (/* binding */ getUpdatesVariables),
/* harmony export */   "updatesQuery": () => (/* binding */ updatesQuery)
/* harmony export */ });
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25896);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1259);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5824);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69078);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73908);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11333);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(42352);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(92129);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(53169);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(87268);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90998);
/* harmony import */ var _components_Updates__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(87805);
/* harmony import */ var _components_updates_UpdateFilters__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(62589);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_11__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_15__, _components_Footer__WEBPACK_IMPORTED_MODULE_16__, _components_Header__WEBPACK_IMPORTED_MODULE_18__, _components_Updates__WEBPACK_IMPORTED_MODULE_23__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_11__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_15__, _components_Footer__WEBPACK_IMPORTED_MODULE_16__, _components_Header__WEBPACK_IMPORTED_MODULE_18__, _components_Updates__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const ROUTE_PARAMS = ['collectiveSlug', 'offset'];

class UpdatesPage extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "updateQuery", (router, newParams) => {
      const query = lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, router.query), newParams), (value, key) => !value || ROUTE_PARAMS.includes(key));

      const pathname = router.asPath.split('?')[0];
      return router.push({
        pathname,
        query
      });
    });
  }

  static getInitialProps({
    query: {
      collectiveSlug,
      orderBy,
      searchTerm
    }
  }) {
    return {
      slug: collectiveSlug,
      orderBy,
      searchTerm
    };
  }

  componentDidMount() {
    const {
      router,
      data
    } = this.props;
    const account = data?.account;
    (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_9__/* .addParentToURLIfMissing */ .Bc)(router, account, '/updates');
  }

  componentDidUpdate(prevProps) {
    const {
      data,
      LoggedInUser
    } = this.props;
    const collective = data.account;

    if (!prevProps.LoggedInUser && LoggedInUser && LoggedInUser.isAdminOfCollective(collective)) {
      // We refetch the data to get the updates that are not published yet
      data.refetch({
        options: {
          fetchPolicy: 'network-only'
        }
      });
    }
  }

  render() {
    const {
      data,
      LoggedInUser,
      router
    } = this.props;

    if (!data.account) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        data: data
      });
    }

    const collective = data.account;
    const updates = collective?.updates;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("div", {
      className: "UpdatesPage",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        collective: collective,
        LoggedInUser: LoggedInUser,
        canonicalURL: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_9__/* .getCollectivePageCanonicalURL */ .Bu)(collective)}/updates`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_components_Body__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          collective: collective,
          isAdmin: LoggedInUser && LoggedInUser.isAdminOfCollective(collective),
          selectedCategory: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_12__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("div", {
          className: "content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
            flexWrap: "wrap",
            alignItems: "center",
            pr: 2,
            justifyContent: "space-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              padding: "0.8rem 0",
              my: 4,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_22__.H1, {
                fontSize: "40px",
                fontWeight: "normal",
                textAlign: "left",
                mb: 2,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "updates",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Updates"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledP, {
                color: "black.700",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "section.updates.subtitle",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Updates on our activities and progress."
                  }]
                })
              })]
            }), LoggedInUser?.isAdminOfCollective(collective) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_9__/* .getCollectivePageRoute */ .x0)(collective)}/updates/new`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                buttonStyle: "primary",
                m: 2,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                  id: "sections.update.new",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create an Update"
                  }]
                })
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_updates_UpdateFilters__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            values: router.query,
            onChange: queryParams => this.updateQuery(router, _objectSpread(_objectSpread({}, queryParams), {}, {
              offset: null
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
            mt: 4,
            mb: 5,
            children: data.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_Updates__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              collective: collective,
              updates: updates,
              fetchMore: this.props.fetchMore,
              LoggedInUser: LoggedInUser
            })
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})]
    });
  }

}

const updatesQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query Updates(
    $collectiveSlug: String!
    $limit: Int
    $offset: Int
    $searchTerm: String
    $orderBy: UpdateChronologicalOrderInput
  ) {
    account(slug: $collectiveSlug, throwIfMissing: false) {
      id
      legacyId
      name
      slug
      type
      ... on Event {
        parent {
          id
          slug
        }
      }
      ... on Project {
        parent {
          id
          slug
        }
      }
      features {
        id
        ...NavbarFields
      }
      updates(limit: $limit, offset: $offset, searchTerm: $searchTerm, orderBy: $orderBy) {
        totalCount
        nodes {
          id
          slug
          title
          summary
          createdAt
          publishedAt
          updatedAt
          userCanSeeUpdate
          tags
          isPrivate
          isChangelog
          makePublicOn
          fromAccount {
            id
            type
            name
            slug
            imageUrl
          }
        }
      }
    }
  }
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_13__/* .collectiveNavbarFieldsFragment */ .AS}
`;
const getUpdatesVariables = (slug, orderBy = null, searchTerm = null) => {
  return {
    collectiveSlug: slug,
    offset: 0,
    limit: UPDATES_PER_PAGE * 2,
    orderBy: {
      field: 'PUBLISHED_AT',
      direction: orderBy === 'oldest' ? 'ASC' : 'DESC'
    },
    searchTerm: searchTerm
  };
};
const UPDATES_PER_PAGE = 10;
const addUpdatesData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__.graphql)(updatesQuery, {
  options: props => ({
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .API_V2_CONTEXT */ .T,
    variables: getUpdatesVariables(props.slug, props.orderBy, props.searchTerm)
  }),
  props: ({
    data
  }) => ({
    data,
    fetchMore: () => {
      return data.fetchMore({
        variables: {
          offset: data.account.updates.nodes.length,
          limit: UPDATES_PER_PAGE
        },
        updateQuery: (previousResult, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }

          const previousResultNodes = Object.assign({}, previousResult.account.updates, {
            // Append the new posts results to the old one
            nodes: [...previousResult.account.updates.nodes, ...fetchMoreResult.account.updates.nodes]
          });

          const previousResultClone = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(previousResult);

          previousResultClone.account.updates.nodes = previousResultNodes.nodes;
          return previousResultClone;
        }
      });
    }
  })
});
UpdatesPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, orderBy, searchTerm } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "updateQuery",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "router",
      "type": null
    }, {
      "name": "newParams",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "UpdatesPage",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
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
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "fetchMore": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "account": {
            "name": "object",
            "required": false
          },
          "loading": {
            "name": "bool",
            "required": false
          },
          "refetch": {
            "name": "func",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_25__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_6__.withRouter)(addUpdatesData(UpdatesPage))));

var _StyledP = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_Text__WEBPACK_IMPORTED_MODULE_22__.P).withConfig({
  displayName: "updates___StyledP",
  componentId: "sc-1yw23z0-0"
})({
  flex: '0 1 70%'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;