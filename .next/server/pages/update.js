"use strict";
(() => {
var exports = {};
exports.id = 8060;
exports.ids = [8060,389];
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

/***/ 50729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75263);
/* harmony import */ var lodash_update__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_update__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5824);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69078);
/* harmony import */ var _components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14193);
/* harmony import */ var _components_conversations_graphql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37436);
/* harmony import */ var _components_conversations_Thread__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4821);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(73908);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16159);
/* harmony import */ var _components_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6845);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(84842);
/* harmony import */ var _components_StyledUpdate__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(60516);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_12__, _components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_16__, _components_conversations_Thread__WEBPACK_IMPORTED_MODULE_18__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__, _components_Page__WEBPACK_IMPORTED_MODULE_22__, _components_StyledUpdate__WEBPACK_IMPORTED_MODULE_23__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_12__, _components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_16__, _components_conversations_Thread__WEBPACK_IMPORTED_MODULE_18__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__, _components_Page__WEBPACK_IMPORTED_MODULE_22__, _components_StyledUpdate__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























class UpdatePage extends (react__WEBPACK_IMPORTED_MODULE_4___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isReloadingData: false
    });

    _defineProperty(this, "onCommentAdded", comment => {
      // Add comment to cache if not already fetched
      const [data, query, variables] = this.clonePageQueryCacheData();

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'update.comments.nodes', comments => lodash_uniqBy__WEBPACK_IMPORTED_MODULE_1___default()([...comments, comment], 'id'));

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'update.comments.totalCount', totalCount => totalCount + 1);

      this.props.client.writeQuery({
        query,
        variables,
        data
      });
    });

    _defineProperty(this, "onCommentDeleted", comment => {
      const [data, query, variables] = this.clonePageQueryCacheData();

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'update.comments.nodes', comments => comments.filter(c => c.id !== comment.id));

      lodash_update__WEBPACK_IMPORTED_MODULE_0___default()(data, 'update.comments.totalCount', totalCount => totalCount - 1);

      this.props.client.writeQuery({
        query,
        variables,
        data
      });
    });

    _defineProperty(this, "fetchMore", async () => {
      const {
        collectiveSlug,
        updateSlug,
        data
      } = this.props; // refetch before fetching more as comments added to the cache can change the offset

      await data.refetch();
      await data.fetchMore({
        variables: {
          collectiveSlug,
          updateSlug,
          offset: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(data, 'update.comments.nodes', []).length
        },
        updateQuery: (prev, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          const newValues = {};
          newValues.update = _objectSpread(_objectSpread({}, prev.update), {}, {
            comments: _objectSpread(_objectSpread({}, fetchMoreResult.update.comments), {}, {
              nodes: [...prev.update.comments.nodes, ...fetchMoreResult.update.comments.nodes]
            })
          });
          return Object.assign({}, prev, newValues);
        }
      });
    });
  }

  static getInitialProps({
    query: {
      collectiveSlug,
      updateSlug
    }
  }) {
    return {
      collectiveSlug,
      updateSlug
    };
  }

  componentDidMount() {
    const {
      router,
      data,
      updateSlug
    } = this.props;
    const account = data?.account;
    (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .addParentToURLIfMissing */ .Bc)(router, account, `/updates/${updateSlug}`);
  }

  async componentDidUpdate(oldProps) {
    // Refetch data when use logs in
    if (oldProps.LoggedInUser !== this.props.LoggedInUser && !this.state.isReloadingData) {
      this.setState({
        isReloadingData: true
      });

      try {
        await this.props.data.refetch();
      } finally {
        this.setState({
          isReloadingData: false
        });
      }
    }
  }

  clonePageQueryCacheData() {
    const {
      client,
      updateSlug,
      collectiveSlug
    } = this.props;
    const variables = {
      collectiveSlug,
      updateSlug
    };

    const data = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default()(client.readQuery({
      query: updateQuery,
      variables
    }));

    return [data, updateQuery, variables];
  }

  render() {
    const {
      data,
      LoggedInUser
    } = this.props;

    if (!data?.account) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        data: data
      });
    } else if (!data.update) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        error: {
          type: _lib_errors__WEBPACK_IMPORTED_MODULE_8__/* .ERROR.NOT_FOUND */ .pn.NOT_FOUND
        }
      });
    }

    const {
      account,
      update
    } = data;

    const comments = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(update, 'comments.nodes', []);

    const totalCommentsCount = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(update, 'comments.totalCount', 0);

    const updateSlug = update?.slug || this.props.updateSlug;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      collective: account,
      title: update.title,
      description: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .stripHTML */ .Cb)(update.summary),
      canonicalURL: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageCanonicalURL */ .Bu)(account)}/updates/${updateSlug}`,
      metaTitle: `${update.title} - ${account.name}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        collective: account,
        isAdmin: LoggedInUser && LoggedInUser.isAdminOfCollective(account),
        selectedCategory: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_13__/* .NAVBAR_CATEGORIES.CONNECT */ .t.CONNECT
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        py: 4,
        maxWidth: 1260,
        m: "0 auto",
        px: [0, null, null, 4],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_StyledUpdate__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          collective: account,
          update: update,
          editable: Boolean(LoggedInUser?.isAdminOfCollective(account)),
          LoggedInUser: LoggedInUser,
          compact: false,
          reactions: update.reactions,
          isReloadingData: this.state.isReloadingData
        }, update.id), update.userCanSeeUpdate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
          pl: [0, 5],
          children: [comments.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            mb: 3,
            pt: 3,
            maxWidth: 700,
            borderTop: "1px solid #eee",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_conversations_Thread__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              collective: account,
              hasMore: comments.length < totalCommentsCount,
              fetchMore: this.fetchMore,
              items: comments,
              onCommentDeleted: this.onCommentDeleted
            })
          }), update.publishedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
            mt: "40px",
            maxWidth: 700,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
              display: ['none', null, 'block'],
              flex: "0 0",
              p: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                size: 24,
                color: "lightgrey"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
              flex: "1 1",
              maxWidth: [null, null, 'calc(100% - 56px)'],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_conversations_CommentForm__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                id: "new-update",
                UpdateId: update.id,
                onSuccess: this.onCommentAdded
              })
            })]
          })]
        })]
      })]
    });
  }

}

const updateQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query Update($collectiveSlug: String, $updateSlug: String!, $offset: Int) {
    account(slug: $collectiveSlug, throwIfMissing: false) {
      id
      legacyId
      slug
      name
      type
      description
      settings
      imageUrl
      isFrozen
      twitterHandle
      ... on AccountWithHost {
        host {
          id
          slug
          name
          features {
            id
            CONTACT_FORM
          }
        }
      }
      features {
        id
        ...NavbarFields
      }
      conversationsTags {
        id
        tag
      }
      ... on Collective {
        isApproved
      }
      type
      ... on AccountWithParent {
        parent {
          id
          slug
        }
      }
    }
    update(slug: $updateSlug, account: { slug: $collectiveSlug }) {
      id
      slug
      title
      createdAt
      publishedAt
      html
      summary
      isPrivate
      isChangelog
      makePublicOn
      userCanSeeUpdate
      userCanPublishUpdate
      reactions
      userReactions
      account {
        id
        slug
        type
        name
        isHost
      }
      fromAccount {
        id
        slug
        type
        name
      }
      comments(limit: 100, offset: $offset) {
        totalCount
        nodes {
          id
          ...CommentFields
        }
      }
    }
  }
  ${_components_conversations_graphql__WEBPACK_IMPORTED_MODULE_17__/* .commentFieldsFragment */ .Y6}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__/* .collectiveNavbarFieldsFragment */ .AS}
`;
const getUpdate = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__.graphql)(updateQuery, {
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T
  }
});
UpdatePage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, updateSlug } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "clonePageQueryCacheData",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onCommentAdded",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "comment",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onCommentDeleted",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "comment",
      "type": null
    }],
    "returns": null
  }, {
    "name": "fetchMore",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }],
  "displayName": "UpdatePage",
  "props": {
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "updateSlug": {
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
    "client": {
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
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "account": {
            "name": "object",
            "required": false
          },
          "update": {
            "name": "object",
            "required": false
          },
          "refetch": {
            "name": "func",
            "required": false
          },
          "fetchMore": {
            "name": "func",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_7__.withRouter)((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_24__/* .withUser */ .ns)(getUpdate((0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__.withApollo)(UpdatePage)))));
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

/***/ 42558:
/***/ ((module) => {

module.exports = require("@opencollective/taxes");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 33244:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillCheck");

/***/ }),

/***/ 7257:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillExclamation");

/***/ }),

/***/ 58847:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Check");

/***/ }),

/***/ 60080:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/CheckCircle");

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

/***/ 10276:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/DotsHorizontalRounded");

/***/ }),

/***/ 93842:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/DotsVerticalRounded");

/***/ }),

/***/ 95019:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Envelope");

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

/***/ 24594:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/MinusCircle");

/***/ }),

/***/ 46529:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Planet");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 43891:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Receipt");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 99232:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Undo");

/***/ }),

/***/ 60270:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Alipay");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 54427:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Paypal");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 81594:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Ban");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 41032:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretDown");

/***/ }),

/***/ 2331:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretUp");

/***/ }),

/***/ 9443:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Check");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 98358:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Cogs");

/***/ }),

/***/ 55457:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CreditCard");

/***/ }),

/***/ 63387:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExchangeAlt");

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

/***/ 89837:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Lock");

/***/ }),

/***/ 87584:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/MoneyCheckAlt");

/***/ }),

/***/ 64934:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/PencilAlt");

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

/***/ 8866:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/University");

/***/ }),

/***/ 66035:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/AlertOctagon");

/***/ }),

/***/ 56758:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/AlertTriangle");

/***/ }),

/***/ 62941:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowLeft");

/***/ }),

/***/ 22198:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowRight");

/***/ }),

/***/ 61975:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Calendar");

/***/ }),

/***/ 89711:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 76841:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 57847:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 91090:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Edit");

/***/ }),

/***/ 40710:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 57153:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Info");

/***/ }),

/***/ 67520:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Maximize2");

/***/ }),

/***/ 75827:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/MessageSquare");

/***/ }),

/***/ 86838:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Plus");

/***/ }),

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 41844:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Share2");

/***/ }),

/***/ 72142:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Trash2");

/***/ }),

/***/ 83565:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/UserCheck");

/***/ }),

/***/ 12402:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/UserMinus");

/***/ }),

/***/ 90809:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/X");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 21522:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/PriceTags");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("@styled-icons/ionicons-solid/Expand");

/***/ }),

/***/ 80950:
/***/ ((module) => {

module.exports = require("@styled-icons/material/AttachMoney");

/***/ }),

/***/ 20384:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Close");

/***/ }),

/***/ 10274:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Edit");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 33651:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Settings");

/***/ }),

/***/ 95830:
/***/ ((module) => {

module.exports = require("@styled-icons/material/ShowChart");

/***/ }),

/***/ 9884:
/***/ ((module) => {

module.exports = require("@styled-icons/material/SyncAlt");

/***/ }),

/***/ 50194:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Update");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 38164:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Stack");

/***/ }),

/***/ 42038:
/***/ ((module) => {

module.exports = require("@styled-system/css");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 68887:
/***/ ((module) => {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 28992:
/***/ ((module) => {

module.exports = require("country-currency-emoji-flags");

/***/ }),

/***/ 69031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 71934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 53291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 28109:
/***/ ((module) => {

module.exports = require("file-saver");

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

/***/ 12154:
/***/ ((module) => {

module.exports = require("lodash/clamp");

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

/***/ 90857:
/***/ ((module) => {

module.exports = require("lodash/endsWith");

/***/ }),

/***/ 76918:
/***/ ((module) => {

module.exports = require("lodash/find");

/***/ }),

/***/ 25359:
/***/ ((module) => {

module.exports = require("lodash/findLastIndex");

/***/ }),

/***/ 22265:
/***/ ((module) => {

module.exports = require("lodash/first");

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

/***/ 41238:
/***/ ((module) => {

module.exports = require("lodash/includes");

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

/***/ 48524:
/***/ ((module) => {

module.exports = require("lodash/isNull");

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

/***/ 36625:
/***/ ((module) => {

module.exports = require("lodash/max");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

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

/***/ 96839:
/***/ ((module) => {

module.exports = require("lodash/padStart");

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

/***/ 47869:
/***/ ((module) => {

module.exports = require("lodash/round");

/***/ }),

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 71156:
/***/ ((module) => {

module.exports = require("lodash/size");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ 35007:
/***/ ((module) => {

module.exports = require("lodash/startCase");

/***/ }),

/***/ 95594:
/***/ ((module) => {

module.exports = require("lodash/sum");

/***/ }),

/***/ 79800:
/***/ ((module) => {

module.exports = require("lodash/sumBy");

/***/ }),

/***/ 75142:
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 75263:
/***/ ((module) => {

module.exports = require("lodash/update");

/***/ }),

/***/ 73022:
/***/ ((module) => {

module.exports = require("lodash/upperCase");

/***/ }),

/***/ 57260:
/***/ ((module) => {

module.exports = require("lodash/values");

/***/ }),

/***/ 22217:
/***/ ((module) => {

module.exports = require("lodash/without");

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

/***/ 37597:
/***/ ((module) => {

module.exports = require("react-text-mask");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,8720,7772,8208,3489], () => (__webpack_exec__(50729)));
module.exports = __webpack_exports__;

})();