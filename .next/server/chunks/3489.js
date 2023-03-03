"use strict";
exports.id = 3489;
exports.ids = [3489,9139];
exports.modules = {

/***/ 3798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);

const _excluded = ["backgroundType", "backgroundOpacity"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * A specialization of `Container` that displays itself above the content, in position
 * absolute, with a dark background and content centered.
 *
 * Accepts all the props from `Container`.
 */



const ContainerOverlay = _ref => {
  let {
    backgroundType,
    backgroundOpacity
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isDark = backgroundType === 'dark';
  const defaultOpacity = isDark ? 0.5 : 0.75;
  const opacity = !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(backgroundOpacity) ? backgroundOpacity : defaultOpacity;
  const lightness = isDark ? '30' : '255';
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `rgba(${lightness}, ${lightness}, ${lightness}, ${opacity})`,
    width: "100%",
    height: "100%",
    zIndex: 9999
  }, props));
};

ContainerOverlay.defaultProps = {
  backgroundType: 'white'
};
ContainerOverlay.__docgenInfo = {
  "description": "A specialization of `Container` that displays itself above the content, in position\nabsolute, with a dark background and content centered.\n\nAccepts all the props from `Container`.",
  "methods": [],
  "displayName": "ContainerOverlay",
  "props": {
    "backgroundType": {
      "defaultValue": {
        "value": "'white'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'dark'",
          "computed": false
        }, {
          "value": "'white'",
          "computed": false
        }]
      },
      "required": false
    },
    "backgroundOpacity": {
      "description": "If omitted, will use 0.5 for dark and 0.75 for black",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerOverlay);

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

/***/ 53327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32651);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74770);
/* harmony import */ var _InlineEditField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54746);
/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59139);
/* harmony import */ var _CommentActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12627);
/* harmony import */ var _CommentMetadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38855);
/* harmony import */ var _EmojiReactionPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23737);
/* harmony import */ var _EmojiReactions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(953);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37436);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RichTextEditor__WEBPACK_IMPORTED_MODULE_8__]);
_RichTextEditor__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const editCommentMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation EditComment($comment: CommentUpdateInput!) {
    editComment(comment: $comment) {
      id
      ...CommentFields
    }
  }
  ${_graphql__WEBPACK_IMPORTED_MODULE_13__/* .commentFieldsFragment */ .Y6}
`;
const mutationOptions = {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_3__/* .API_V2_CONTEXT */ .T
};
/**
 * Render a comment.
 *
 * /!\ Can only be used with data from API V2.
 */

const Comment = ({
  comment,
  canEdit,
  canDelete,
  maxCommentHeight,
  isConversationRoot,
  onDelete,
  reactions,
  canReply
}) => {
  const [isEditing, setEditing] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const hasActions = !isEditing;
  const anchorHash = `comment-${new Date(comment.createdAt).getTime()}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    width: "100%",
    "data-cy": "comment",
    id: anchorHash,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      mb: 3,
      justifyContent: "space-between",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_CommentMetadata__WEBPACK_IMPORTED_MODULE_10__/* .CommentMetadata */ .N, {
        comment: comment
      }), hasActions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_CommentActions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        comment: comment,
        anchorHash: anchorHash,
        isConversationRoot: isConversationRoot,
        canEdit: canEdit,
        canDelete: canDelete,
        onDelete: onDelete,
        onEditClick: () => setEditing(true)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledBox, {
      position: "relative",
      maxHeight: maxCommentHeight,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_InlineEditField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        mutation: editCommentMutation,
        mutationOptions: mutationOptions,
        values: comment,
        field: "html",
        canEdit: canEdit,
        canDelete: canDelete,
        isEditing: isEditing,
        showEditIcon: false,
        prepareVariables: (comment, html) => ({
          comment: {
            id: comment.id,
            html
          }
        }),
        disableEditor: () => setEditing(false),
        warnIfUnsavedChanges: true,
        required: true,
        children: ({
          isEditing,
          setValue,
          setUploading
        }) => !isEditing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          content: comment.html,
          fontSize: "13px",
          "data-cy": "comment-body"
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_RichTextEditor__WEBPACK_IMPORTED_MODULE_8__["default"], {
          kind: "COMMENT",
          defaultValue: comment.html,
          onChange: e => setValue(e.target.value),
          fontSize: "13px",
          autoFocus: true,
          setUploading: setUploading
        })
      }), (reactions || canReply) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        mt: 3,
        flexWrap: "wrap",
        "data-cy": "comment-reactions",
        children: [reactions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_EmojiReactions__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          reactions: reactions
        }), canReply && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_EmojiReactionPicker__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          comment: comment,
          reactions: reactions
        })]
      })]
    })]
  });
};

Comment.__docgenInfo = {
  "description": "Render a comment.\n\n/!\\ Can only be used with data from API V2.",
  "methods": [],
  "displayName": "Comment",
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
          }
        }
      },
      "required": true
    },
    "reactions": {
      "description": "Reactions associated with this comment?",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "canEdit": {
      "description": "Can current user edit this comment?",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "canDelete": {
      "description": "Can current user delete this comment?",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "canReply": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isConversationRoot": {
      "description": "Set this to true if the comment is the root comment of a conversation",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "withoutActions": {
      "description": "Set this to true to disable actions",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "maxCommentHeight": {
      "description": "If set, comment will be scrollable over this height",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "onDelete": {
      "description": "Called when comment gets deleted",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

var _StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu).withConfig({
  displayName: "Comment___StyledBox",
  componentId: "sc-1ca0zpr-0"
})({
  overflowY: 'auto'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_DotsHorizontalRounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10276);
/* harmony import */ var _styled_icons_boxicons_regular_DotsHorizontalRounded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_DotsHorizontalRounded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_feather_Share2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41844);
/* harmony import */ var _styled_icons_feather_Share2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Share2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_X__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90809);
/* harmony import */ var _styled_icons_feather_X__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_X__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10274);
/* harmony import */ var _styled_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32651);
/* harmony import */ var _lib_hooks_useClipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60225);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55348);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47988);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(74770);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _CommentMetadata__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(38855);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























const AdminActionsPopupContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC).withConfig({
  displayName: "CommentActions__AdminActionsPopupContainer",
  componentId: "sc-184odms-0"
})(["flex-direction:column;background:#ffffff;border:1px solid rgba(49,50,51,0.1);border-radius:8px;box-shadow:0px 4px 8px rgba(20,20,20,0.16);width:184px;padding:16px;z-index:1;"]);
const CommentBtn = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z).attrs({
  buttonSize: 'small'
}).withConfig({
  displayName: "CommentActions__CommentBtn",
  componentId: "sc-184odms-1"
})(["padding:3px 5px;margin:5px 0;width:100%;text-align:left;border:none;span{margin-left:12px;font-weight:500;font-size:14px;line-height:21px;letter-spacing:-0.1px;vertical-align:middle;}"]);
/**
 * Action buttons for the comment owner. Styles change between mobile and desktop.
 */

const AdminActionButtons = ({
  canEdit,
  canDelete,
  openDeleteConfirmation,
  onEdit,
  copyLinkToClipboard,
  closePopup
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(CommentBtn, {
      "data-cy": "share-comment-btn",
      onClick: () => {
        closePopup();
        copyLinkToClipboard();
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_feather_Share2__WEBPACK_IMPORTED_MODULE_3__.Share2, {
        size: "1em",
        mr: 2
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        tagName: "span",
        id: "Share",
        defaultMessage: [{
          "type": 0,
          "value": "Share"
        }]
      })]
    }), canEdit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(CommentBtn, {
      "data-cy": "edit-comment-btn",
      onClick: () => {
        closePopup();
        onEdit();
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__.Edit, {
        size: "1em",
        mr: 2
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        tagName: "span",
        id: "Edit",
        defaultMessage: [{
          "type": 0,
          "value": "Edit"
        }]
      })]
    }), canDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(CommentBtn, {
      "data-cy": "delete-comment-btn",
      onClick: () => {
        closePopup();
        openDeleteConfirmation();
      },
      color: "red.600",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_feather_X__WEBPACK_IMPORTED_MODULE_4__.X, {
        size: "1em",
        mr: 2
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        tagName: "span",
        id: "actions.delete",
        defaultMessage: [{
          "type": 0,
          "value": "Delete"
        }]
      })]
    })]
  });
};

const deleteCommentMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation DeleteComment($id: String!) {
    deleteComment(id: $id) {
      id
    }
  }
`;
const REACT_POPPER_MODIFIERS = [{
  name: 'offset',
  options: {
    offset: [0, 8]
  }
}];
const mutationOptions = {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T
};

const CommentActions = ({
  comment,
  anchorHash,
  isConversationRoot,
  canEdit,
  canDelete,
  onDelete,
  onEditClick
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const {
    copy
  } = (0,_lib_hooks_useClipboard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
  const [isDeleting, setDeleting] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [showAdminActions, setShowAdminActions] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [refElement, setRefElement] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [popperElement, setPopperElement] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [deleteComment, {
    error: deleteError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(deleteCommentMutation, mutationOptions);
  const {
    styles,
    attributes,
    state
  } = (0,react_popper__WEBPACK_IMPORTED_MODULE_7__.usePopper)(refElement, popperElement, {
    placement: 'bottom-end',
    modifiers: REACT_POPPER_MODIFIERS
  });

  const copyLinkToClipboard = () => {
    const [baseLink] = window.location.href.split('#');
    const linkWithAnchorHash = `${baseLink}#${anchorHash}`;
    copy(linkWithAnchorHash);
  };

  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(state?.elements.popper, outside => {
    if (outside && showAdminActions) {
      setShowAdminActions(false);
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        ref: setRefElement,
        buttonSize: "tiny",
        "data-cy": "commnent-actions-trigger",
        onClick: () => setShowAdminActions(!showAdminActions),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_boxicons_regular_DotsHorizontalRounded__WEBPACK_IMPORTED_MODULE_2__.DotsHorizontalRounded, {
          size: "16"
        })
      })
    }), showAdminActions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(AdminActionsPopupContainer, _objectSpread(_objectSpread({
      ref: setPopperElement,
      style: styles.popper
    }, attributes.popper), {}, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
          fontWeight: "600",
          fontSize: "9px",
          lineHeight: "14px",
          textTransform: "uppercase",
          letterSpacing: "0.6px",
          whiteSpace: "nowrap",
          pr: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "comment.actions",
            defaultMessage: [{
              "type": 0,
              "value": "Comment Actions"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          flex: "1",
          borderStyle: "solid",
          borderColor: "black.300"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "flex-start",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(AdminActionButtons, {
          comment: comment,
          isConversationRoot: isConversationRoot,
          openDeleteConfirmation: () => setDeleting(true),
          onEdit: onEditClick,
          canEdit: canEdit,
          canDelete: canDelete,
          copyLinkToClipboard: copyLinkToClipboard,
          closePopup: () => setShowAdminActions(false)
        })
      })]
    })), isDeleting && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      isDanger: true,
      type: "delete",
      onClose: () => setDeleting(false),
      continueHandler: async () => {
        await deleteComment({
          variables: {
            id: comment.id
          }
        });

        if (onDelete) {
          await onDelete(comment);
        }
      },
      header: isConversationRoot ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "conversation.deleteModalTitle",
        defaultMessage: [{
          "type": 0,
          "value": "Delete this Conversation?"
        }]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "Comment.DeleteConfirmTitle",
        defaultMessage: [{
          "type": 0,
          "value": "Delete this comment?"
        }]
      }),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        mb: 4,
        borderColor: "#e1e4e6"
      }), isConversationRoot && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        type: "warning",
        withIcon: true,
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "conversation.deleteMessage",
          defaultMessage: [{
            "type": 0,
            "value": "The message and all its replies will be permanently deleted."
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        padding: 2,
        borderRadius: 8,
        border: "1px solid #e1e4e6",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_CommentMetadata__WEBPACK_IMPORTED_MODULE_21__/* .CommentMetadata */ .N, {
          comment: comment
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          mt: 3,
          maxHeight: 150,
          overflowY: "auto",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            content: comment.html,
            fontSize: "12px",
            "data-cy": "comment-body"
          })
        })]
      }), deleteError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        type: "error",
        withIcon: true,
        mt: 3,
        children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .i18nGraphqlException */ .t2)(intl, deleteError)
      })]
    })]
  });
};

CommentActions.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CommentActions",
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
          }
        }
      },
      "required": true
    },
    "anchorHash": {
      "description": "needed to copy the comment link",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "canEdit": {
      "description": "Can current user edit this comment?",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "canDelete": {
      "description": "Can current user delete this comment?",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isConversationRoot": {
      "description": "Set this to true if the comment is the root comment of a conversation",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onDelete": {
      "description": "Called when comment gets deleted",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onEditClick": {
      "description": "Called when comment gets deleted",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentActions);

/***/ }),

/***/ 14193:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _ContainerOverlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3798);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37278);
/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59139);
/* harmony import */ var _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78720);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51927);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37436);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RichTextEditor__WEBPACK_IMPORTED_MODULE_13__, _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_14__]);
([_RichTextEditor__WEBPACK_IMPORTED_MODULE_13__, _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const createCommentMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation CreateComment($comment: CommentCreateInput!) {
    createComment(comment: $comment) {
      id
      ...CommentFields
    }
  }
  ${_graphql__WEBPACK_IMPORTED_MODULE_18__/* .commentFieldsFragment */ .Y6}
`;
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  placeholder: {
    id: "CommentForm.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Type your message..."
    }]
  },
  postReply: {
    id: "CommentForm.PostReply",
    defaultMessage: [{
      "type": 0,
      "value": "Post reply"
    }]
  },
  signInLabel: {
    id: "CommentForm.SignIn",
    defaultMessage: [{
      "type": 0,
      "value": "Please sign in to comment:"
    }]
  },
  uploadingImage: {
    id: "uploadImage.isUploading",
    defaultMessage: [{
      "type": 0,
      "value": "Uploading image..."
    }]
  }
});

const getRedirectUrl = (router, id) => {
  const anchor = id ? `#${id}` : '';
  return `/create-account?next=${encodeURIComponent(router.asPath + anchor)}`;
};

const isAutoFocused = id => {
  return id && false && 0;
};

const mutationOptions = {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
};
/** A small helper to make the form work with params from both API V1 & V2 */

const prepareCommentParams = (html, conversationId, expenseId, updateId) => {
  const comment = {
    html
  };

  if (conversationId) {
    comment.ConversationId = conversationId;
  } else if (expenseId) {
    comment.expense = {};

    if (typeof expenseId === 'string') {
      comment.expense.id = expenseId;
    } else {
      comment.expense.legacyId = expenseId;
    }
  } else if (updateId) {
    comment.update = {};

    if (typeof updateId === 'string') {
      comment.update.id = updateId;
    } else {
      comment.update.legacyId = updateId;
    }
  }

  return comment;
};
/**
 * Form for users to post comments on either expenses, conversations or updates.
 * If user is not logged in, the form will default to a sign in/up form.
 */


const CommentForm = ({
  id,
  ConversationId,
  ExpenseId,
  UpdateId,
  onSuccess,
  router,
  loadingLoggedInUser,
  LoggedInUser,
  isDisabled
}) => {
  const [createComment, {
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(createCommentMutation, mutationOptions);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const {
    0: html,
    1: setHtml
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: resetValue,
    1: setResetValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: validationError,
    1: setValidationError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: uploading,
    1: setUploading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    formatMessage
  } = intl;

  const submitForm = async event => {
    event.preventDefault();
    event.stopPropagation();

    if (!html) {
      setValidationError((0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED));
    } else {
      const comment = prepareCommentParams(html, ConversationId, ExpenseId, UpdateId);
      const response = await createComment({
        variables: {
          comment
        }
      });
      setResetValue(response.data.createComment.id);

      if (onSuccess) {
        return onSuccess(response.data.createComment);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    id: id,
    position: "relative",
    children: [!loadingLoggedInUser && !LoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_ContainerOverlay__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      backgroundType: "white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_14__/* .SignInOverlayBackground */ .g8, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
          routes: {
            join: getRedirectUrl(router, id)
          },
          signInLabel: formatMessage(messages.signInLabel),
          hideFooter: true,
          showSubHeading: false,
          showOCLogo: false
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("form", {
      onSubmit: submitForm,
      "data-cy": "comment-form",
      children: [loadingLoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        height: 232
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_RichTextEditor__WEBPACK_IMPORTED_MODULE_13__["default"], {
        kind: "COMMENT",
        withBorders: true,
        inputName: "html",
        editorMinHeight: 150,
        placeholder: formatMessage(messages.placeholder),
        autoFocus: isAutoFocused(id),
        disabled: isDisabled || !LoggedInUser || loading,
        reset: resetValue,
        fontSize: "13px",
        onChange: e => {
          setHtml(e.target.value);
          setValidationError(null);
        },
        setUploading: setUploading
      }), validationError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.P, {
        color: "red.500",
        mt: 3,
        children: (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatFormErrorMessage */ .$m)(intl, validationError)
      }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        type: "error",
        withIcon: true,
        mt: 2,
        children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .formatErrorMessage */ .jN)(intl, (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .getErrorFromGraphqlException */ .H1)(error))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
        mt: 3,
        alignItems: "center",
        gap: 12,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          type: "submit",
          minWidth: 150,
          buttonStyle: "primary",
          disabled: isDisabled || !LoggedInUser || uploading,
          loading: loading,
          "data-cy": "submit-comment-btn",
          children: formatMessage(uploading ? messages.uploadingImage : messages.postReply)
        })
      })]
    })]
  });
};

CommentForm.__docgenInfo = {
  "description": "Form for users to post comments on either expenses, conversations or updates.\nIf user is not logged in, the form will default to a sign in/up form.",
  "methods": [],
  "displayName": "CommentForm",
  "props": {
    "id": {
      "description": "An optional id for the container, useful for the redirection link",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "ConversationId": {
      "description": "If commenting on a conversation",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "ExpenseId": {
      "description": "If commenting on an expense",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "UpdateId": {
      "description": "If commenting on an update",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onSuccess": {
      "description": "Called when the comment is created successfully",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isDisabled": {
      "description": "disable the inputs",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "loadingLoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "router": {
      "description": "@ignore from withRouter",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_17__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(CommentForm)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ CommentMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11194);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97619);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const CommentMetadata = ({
  comment
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      mr: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        collective: comment.fromAccount,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
          collective: comment.fromAccount,
          radius: 40
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      flexDirection: "column",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        collective: comment.fromAccount,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
          color: "black.800",
          fontWeight: "500",
          lineHeight: "22px",
          truncateOverflow: true,
          children: comment.fromAccount.name
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
        fontSize: "12px",
        color: "black.600",
        truncateOverflow: true,
        title: comment.createdAt,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Comment.PostedOn",
          defaultMessage: [{
            "type": 0,
            "value": "Posted on "
          }, {
            "type": 3,
            "value": "createdAt",
            "style": "long"
          }],
          values: {
            createdAt: new Date(comment.createdAt)
          }
        })
      })]
    })]
  });
};
CommentMetadata.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CommentMetadata",
  "props": {
    "comment": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "fromAccount": {
            "name": "shape",
            "value": {
              "name": {
                "name": "string",
                "required": true
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "type": {
                "name": "string",
                "required": true
              }
            },
            "required": true
          },
          "createdAt": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": true
    }
  }
};

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

/***/ 4821:
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
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _icons_CommentIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6845);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87268);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51927);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53327);
/* harmony import */ var _ThreadActivity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20242);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Comment__WEBPACK_IMPORTED_MODULE_8__]);
_Comment__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const CommentIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).attrs({
  size: 16,
  color: '#9a9a9a'
}).withConfig({
  displayName: "Thread__CommentIcon",
  componentId: "sc-r19paz-0"
})([""]);
const ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Thread__ItemContainer",
  componentId: "sc-r19paz-1"
})(["width:100%;", ""], props => !props.isLast && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["padding-bottom:16px;margin-bottom:16px;border-bottom:1px dashed #d3d6da;"]));
/**
 * A thread is meant to display comments and activities in a chronological order.
 */

const Thread = ({
  collective,
  items,
  onCommentDeleted,
  LoggedInUser,
  theme,
  hasMore,
  fetchMore
}) => {
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);

  if (!items || items.length === 0) {
    return null;
  }

  const isAdmin = LoggedInUser && LoggedInUser.isAdminOfCollective(collective);

  const handleLoadMore = async () => {
    setLoading(true);
    await fetchMore();
    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    "data-cy": "thread",
    children: [items.map((item, idx) => {
      switch (item.__typename) {
        case 'Comment':
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
                flexDirection: "column",
                alignItems: "center",
                width: "40px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                  my: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(CommentIcon, {})
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                  width: "1px",
                  height: "100%",
                  background: "#E8E9EB"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ItemContainer, {
                isLast: idx + 1 === items.length,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Comment__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                  comment: item,
                  canDelete: isAdmin || Boolean(LoggedInUser && LoggedInUser.canEditComment(item)),
                  canEdit: Boolean(LoggedInUser && LoggedInUser.canEditComment(item)),
                  canReply: Boolean(LoggedInUser),
                  onDelete: onCommentDeleted,
                  reactions: item.reactions
                })
              })]
            })
          }, `comment-${item.id}`);

        case 'Activity':
          return !(0,_ThreadActivity__WEBPACK_IMPORTED_MODULE_9__/* .isSupportedActivity */ .Gu)(item) ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
                flexDirection: "column",
                alignItems: "center",
                width: "40px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                  my: 2,
                  children: (0,_ThreadActivity__WEBPACK_IMPORTED_MODULE_9__/* .getActivityIcon */ .hW)(item, theme)
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                  width: "1px",
                  height: "100%",
                  background: "#E8E9EB"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ItemContainer, {
                isLast: idx + 1 === items.length,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ThreadActivity__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
                  activity: item
                }, item.id)
              })]
            })
          }, `activity-${item.id}`);

        default:
          return null;
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("hr", {}), hasMore && fetchMore && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      margin: "1rem",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        onClick: handleLoadMore,
        loading: loading,
        textTransform: "capitalize",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "loadMore",
          defaultMessage: [{
            "type": 0,
            "value": "load more"
          }]
        }), " \u2193"]
      })
    })]
  });
};

Thread.__docgenInfo = {
  "description": "A thread is meant to display comments and activities in a chronological order.",
  "methods": [],
  "displayName": "Thread",
  "props": {
    "items": {
      "description": "The list of items to display, sorted by chronoligal order",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "__typename": {
              "name": "enum",
              "value": [{
                "value": "'Comment'",
                "computed": false
              }, {
                "value": "'Activity'",
                "computed": false
              }],
              "required": false
            },
            "id": {
              "name": "string",
              "required": true
            }
          }
        }
      },
      "required": false
    },
    "onCommentDeleted": {
      "description": "Called when a comment get deleted",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "collective": {
      "description": "Collective where the thread is created",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "hasMore": {
      "description": "Indicate whether there are more comments to fetch",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "fetchMore": {
      "description": "function to fetch more comments",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "theme": {
      "description": "@ignore from withTheme",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo((0,_UserProvider__WEBPACK_IMPORTED_MODULE_7__/* .withUser */ .ns)((0,styled_components__WEBPACK_IMPORTED_MODULE_2__.withTheme)(Thread))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gu": () => (/* binding */ isSupportedActivity),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "hW": () => (/* binding */ getActivityIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_CheckCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60080);
/* harmony import */ var _styled_icons_boxicons_regular_CheckCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_CheckCircle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81594);
/* harmony import */ var _styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_Cogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98358);
/* harmony import */ var _styled_icons_fa_solid_Cogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Cogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_AlertOctagon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66035);
/* harmony import */ var _styled_icons_feather_AlertOctagon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_AlertOctagon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_feather_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91090);
/* harmony import */ var _styled_icons_feather_Edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Edit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40710);
/* harmony import */ var _styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_feather_Plus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86838);
/* harmony import */ var _styled_icons_feather_Plus__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Plus__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_icons_feather_UserCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83565);
/* harmony import */ var _styled_icons_feather_UserCheck__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_UserCheck__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled_icons_feather_UserMinus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12402);
/* harmony import */ var _styled_icons_feather_UserMinus__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_UserMinus__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_icons_material_SyncAlt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9884);
/* harmony import */ var _styled_icons_material_SyncAlt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_SyncAlt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styled_icons_material_Update__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50194);
/* harmony import */ var _styled_icons_material_Update__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Update__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11194);
/* harmony import */ var _DateTime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(95370);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97619);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);




















/**
 * Defines activities display metadata.
 * **All** keys must have a matching entry in `MESSAGES` below.
 */



const ACTIVITIES_INFO = {
  COLLECTIVE_EXPENSE_CREATED: {
    type: 'info',
    icon: _styled_icons_feather_Plus__WEBPACK_IMPORTED_MODULE_7__.Plus,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.Created",
      defaultMessage: [{
        "type": 0,
        "value": "Expense created"
      }]
    })
  },
  COLLECTIVE_EXPENSE_APPROVED: {
    type: 'info',
    icon: _styled_icons_feather_UserCheck__WEBPACK_IMPORTED_MODULE_8__.UserCheck,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.Approved",
      defaultMessage: [{
        "type": 0,
        "value": "Expense approved"
      }]
    })
  },
  COLLECTIVE_EXPENSE_MOVED: {
    type: 'info',
    icon: _styled_icons_material_SyncAlt__WEBPACK_IMPORTED_MODULE_10__.SyncAlt,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "6EnwoZ",
      defaultMessage: [{
        "type": 0,
        "value": "Expense moved from "
      }, {
        "type": 1,
        "value": "movedFromCollective"
      }]
    })
  },
  COLLECTIVE_EXPENSE_UNAPPROVED: {
    type: 'warning',
    icon: _styled_icons_feather_UserMinus__WEBPACK_IMPORTED_MODULE_9__.UserMinus,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.Unapproved",
      defaultMessage: [{
        "type": 0,
        "value": "Expense unapproved"
      }]
    })
  },
  COLLECTIVE_EXPENSE_UPDATED: {
    type: 'info',
    icon: _styled_icons_feather_Edit__WEBPACK_IMPORTED_MODULE_5__.Edit,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.Updated",
      defaultMessage: [{
        "type": 0,
        "value": "Expense updated"
      }]
    })
  },
  COLLECTIVE_EXPENSE_MARKED_AS_UNPAID: {
    type: 'info',
    icon: _styled_icons_material_Update__WEBPACK_IMPORTED_MODULE_11__.Update,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.MarkedAsUnpaid",
      defaultMessage: [{
        "type": 0,
        "value": "Expense marked as unpaid"
      }]
    })
  },
  COLLECTIVE_EXPENSE_REJECTED: {
    type: 'error',
    icon: _styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2__.Ban,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.Rejected",
      defaultMessage: [{
        "type": 0,
        "value": "Expense rejected"
      }]
    })
  },
  COLLECTIVE_EXPENSE_INVITE_DRAFTED: {
    type: 'info',
    icon: _styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_6__.FileText,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.Invite.Drafted",
      defaultMessage: [{
        "type": 0,
        "value": "Expense invited"
      }]
    })
  },
  COLLECTIVE_EXPENSE_PAID: {
    type: 'success',
    icon: _styled_icons_boxicons_regular_CheckCircle__WEBPACK_IMPORTED_MODULE_1__.CheckCircle,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.Paid",
      defaultMessage: [{
        "type": 0,
        "value": "Expense paid"
      }]
    })
  },
  COLLECTIVE_EXPENSE_PROCESSING: {
    type: 'info',
    icon: _styled_icons_fa_solid_Cogs__WEBPACK_IMPORTED_MODULE_3__.Cogs,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.Processing",
      defaultMessage: [{
        "type": 0,
        "value": "Expense processing"
      }]
    })
  },
  COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT: {
    type: 'info',
    icon: _styled_icons_fa_solid_Cogs__WEBPACK_IMPORTED_MODULE_3__.Cogs,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.ScheduledForPayment",
      defaultMessage: [{
        "type": 0,
        "value": "Expense scheduled for payment"
      }]
    })
  },
  COLLECTIVE_EXPENSE_ERROR: {
    type: 'error',
    icon: _styled_icons_feather_AlertOctagon__WEBPACK_IMPORTED_MODULE_4__.AlertOctagon,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.Error",
      defaultMessage: [{
        "type": 0,
        "value": "Expense error"
      }]
    })
  },
  COLLECTIVE_EXPENSE_MARKED_AS_SPAM: {
    type: 'error',
    icon: _styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_2__.Ban,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.MarkedAsSpam",
      defaultMessage: [{
        "type": 0,
        "value": "Expense marked as spam"
      }]
    })
  },
  COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE: {
    type: 'warning',
    icon: _styled_icons_feather_UserMinus__WEBPACK_IMPORTED_MODULE_9__.UserMinus,
    message: (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessage)({
      id: "Expense.Activity.MarkedAsIncomplete",
      defaultMessage: [{
        "type": 0,
        "value": "Expense marked as incomplete"
      }]
    })
  }
};

const getActivityColor = (activityType, theme) => {
  switch (ACTIVITIES_INFO[activityType]?.type) {
    case 'info':
      return theme.colors.blue[500];

    case 'success':
      return theme.colors.green[500];

    case 'error':
      return theme.colors.red[500];

    default:
      return theme.colors.black[400];
  }
};

const getActivityIcon = (activity, theme) => {
  const IconComponent = ACTIVITIES_INFO[activity.type]?.icon || _styled_icons_material_Update__WEBPACK_IMPORTED_MODULE_11__.Update;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(IconComponent, {
    size: 18,
    color: getActivityColor(activity.type, theme)
  });
};
const isSupportedActivity = activity => {
  return Object.prototype.hasOwnProperty.call(ACTIVITIES_INFO, activity.type);
};
const ActivityParagraph = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(_Text__WEBPACK_IMPORTED_MODULE_19__.P).withConfig({
  displayName: "ThreadActivity__ActivityParagraph",
  componentId: "sc-kglu55-0"
})(["padding:10px 12px;border-left:4px solid ", ";border-radius:0;"], props => props.activityColor);
const ActivityMessage = styled_components__WEBPACK_IMPORTED_MODULE_13___default().span.withConfig({
  displayName: "ThreadActivity__ActivityMessage",
  componentId: "sc-kglu55-1"
})(["font-size:10px;font-weight:600;background:white;color:", ";"], props => props.color);

const ThreadActivity = ({
  activity
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__.useIntl)();
  const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__.useTheme)();
  const activityColor = getActivityColor(activity.type, theme);
  const message = ACTIVITIES_INFO[activity.type]?.message;
  const details = activity.data?.message || activity.data?.error?.message;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
    children: [activity.individual && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        collective: activity.individual,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
          radius: 40,
          collective: activity.individual
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
        flexDirection: "column",
        justifyContent: "center",
        ml: 3,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
          color: "black.600",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
            id: "ByUser",
            defaultMessage: [{
              "type": 0,
              "value": "By "
            }, {
              "type": 1,
              "value": "userName"
            }],
            values: {
              userName: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                as: _LinkCollective__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
                color: "black.800",
                collective: activity.individual
              })
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
          color: "black.600",
          fontSize: "12px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_12__.FormattedMessage, {
            id: "mzGohi",
            defaultMessage: [{
              "type": 0,
              "value": "on "
            }, {
              "type": 1,
              "value": "date"
            }],
            values: {
              date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_DateTime__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                value: activity.createdAt
              })
            }
          })
        })]
      })]
    }), message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(ActivityParagraph, {
      activityColor: activityColor,
      mt: 1,
      fontSize: "12px",
      whiteSpace: "pre-line",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ActivityMessage, {
        color: activityColor,
        children: formatMessage(message, {
          movedFromCollective: activity.data?.movedFromCollective?.name || 'collective'
        })
      }), details && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("br", {}), details]
      })]
    })]
  });
};

ThreadActivity.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ThreadActivity",
  "props": {
    "activity": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "enum",
            "value": [{
              "value": "\"COLLECTIVE_EXPENSE_CREATED\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_APPROVED\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_MOVED\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_UNAPPROVED\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_UPDATED\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_MARKED_AS_UNPAID\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_REJECTED\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_INVITE_DRAFTED\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_PAID\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_PROCESSING\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_ERROR\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_MARKED_AS_SPAM\"",
              "computed": false
            }, {
              "value": "\"COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE\"",
              "computed": false
            }],
            "required": true
          },
          "createdAt": {
            "name": "string",
            "required": true
          },
          "data": {
            "name": "shape",
            "value": {
              "error": {
                "name": "shape",
                "value": {
                  "message": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              },
              "message": {
                "name": "string",
                "required": false
              },
              "movedFromCollective": {
                "name": "object",
                "required": false
              }
            },
            "required": false
          },
          "individual": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreadActivity);
getActivityIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "getActivityIcon"
};

/***/ }),

/***/ 37436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hm": () => (/* binding */ isUserFollowingConversationQuery),
/* harmony export */   "Y6": () => (/* binding */ commentFieldsFragment),
/* harmony export */   "mM": () => (/* binding */ conversationListFragment)
/* harmony export */ });
/* unused harmony export updateListFragment */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const commentFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment CommentFields on Comment {
    id
    createdAt
    html
    reactions
    userReactions
    fromAccount {
      id
      type
      name
      slug
      imageUrl
    }
  }
`;
const conversationListFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ConversationListFragment on ConversationCollection {
    totalCount
    offset
    limit
    nodes {
      id
      title
      summary
      slug
      createdAt
      tags
      fromAccount {
        id
        name
        type
        slug
        imageUrl
      }
      followers(limit: 5) {
        totalCount
        nodes {
          id
          slug
          type
          name
          imageUrl(height: 64)
        }
      }
      stats {
        id
        commentsCount
      }
    }
  }
`;
const isUserFollowingConversationQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query IsUserFollowingConversation($id: String!) {
    loggedInAccount {
      id
      slug
      imageUrl
      type
      name
      ... on Individual {
        isFollowingConversation(id: $id)
      }
    }
  }
`;
const updateListFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment UpdateListFragment on UpdateCollection {
    totalCount
    offset
    limit
    nodes {
      id
      slug
      title
      summary
      createdAt
      publishedAt
      isPrivate
      userCanSeeUpdate
      fromAccount {
        id
        type
        name
        slug
        imageUrl
      }
    }
  }
`;

/***/ }),

/***/ 6845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75827);
/* harmony import */ var _styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_0__.MessageSquare).withConfig({
  displayName: "CommentIcon",
  componentId: "sc-hzbk8p-0"
})(["transform:scaleX(-1);"]));

/***/ }),

/***/ 60225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A custom react hook to copy values to the clipboard
 *
 * @param timeout: time before the isCopied flag is reset
 */

const useClipboard = ({
  timeout = 3000
} = {}) => {
  const [isCopied, setCopied] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [updateCopyBtnTimeout, setUpdateCopyBtnTimeout] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  return {
    isCopied,
    copy: value => {
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(value);
      setCopied(true);

      if (updateCopyBtnTimeout) {
        clearTimeout(updateCopyBtnTimeout);
      }

      const timeoutFn = setTimeout(() => {
        setCopied(false);
      }, timeout);
      setUpdateCopyBtnTimeout(timeoutFn);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClipboard);

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

/***/ })

};
;