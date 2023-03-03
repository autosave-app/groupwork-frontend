"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[984,9139],{

/***/ 3798:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);



var _excluded = ["backgroundType", "backgroundOpacity"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/**
 * A specialization of `Container` that displays itself above the content, in position
 * absolute, with a dark background and content centered.
 *
 * Accepts all the props from `Container`.
 */



var ContainerOverlay = function ContainerOverlay(_ref) {
  var backgroundType = _ref.backgroundType,
      backgroundOpacity = _ref.backgroundOpacity,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var isDark = backgroundType === 'dark';
  var defaultOpacity = isDark ? 0.5 : 0.75;
  var opacity = !lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default()(backgroundOpacity) ? backgroundOpacity : defaultOpacity;
  var lightness = isDark ? '30' : '255';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(".concat(lightness, ", ").concat(lightness, ", ").concat(lightness, ", ").concat(opacity, ")"),
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
/* harmony default export */ __webpack_exports__["Z"] = (ContainerOverlay);

/***/ }),

/***/ 54746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92191);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78718);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(32493);
/* harmony import */ var _styled_icons_fa_solid_PencilAlt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(44783);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(74806);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(52015);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86702);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87268);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29925);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93150);
/* harmony import */ var _WarnIfUnsavedChanges__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(84906);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85893);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













/** Container used to show the description to users than can edit it */



var EditIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP)(_styled_icons_fa_solid_PencilAlt__WEBPACK_IMPORTED_MODULE_19__/* .PencilAlt */ .f).withConfig({
  displayName: "InlineEditField__EditIcon",
  componentId: "sc-1uragm9-0"
})(["cursor:pointer;background-color:white;border:1px solid #aaaeb3;border-radius:25%;padding:15%;color:#aaaeb3;&:hover{color:#8697ad;}"]);
/** Component used for cancel / submit buttons */

var FormButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP)(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z).withConfig({
  displayName: "InlineEditField__FormButton",
  componentId: "sc-1uragm9-1"
})(["width:35%;font-weight:normal;text-transform:capitalize;margin:4px 8px;animation:", " 0.3s;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_14__/* .fadeIn */ .Ji);
var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_20__.defineMessages)({
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

var InlineEditField = /*#__PURE__*/function (_Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(InlineEditField, _Component);

  var _super = _createSuper(InlineEditField);

  function InlineEditField() {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, InlineEditField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      isEditing: false,
      draft: '',
      uploading: false
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "enableEditor", function () {
      _this.setState({
        isEditing: true,
        draft: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(_this.props.values, _this.props.field)
      });
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "disableEditor", function (noWarning) {
      var _this$props = _this.props,
          warnIfUnsavedChanges = _this$props.warnIfUnsavedChanges,
          intl = _this$props.intl,
          values = _this$props.values,
          field = _this$props.field;

      if (!noWarning && warnIfUnsavedChanges) {
        var isDirty = lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(values, field) !== _this.state.draft;

        if (isDirty && !confirm(intl.formatMessage(messages.warnDiscardChanges))) {
          return;
        }
      }

      _this.setState({
        isEditing: false
      });

      if (_this.props.disableEditor) {
        _this.props.disableEditor();
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setDraft", function (draft) {
      _this.setState({
        draft: draft
      });
    });

    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(InlineEditField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.isEditing !== this.props.isEditing) {
        if (this.props.isEditing) {
          this.setState({
            isEditing: true,
            draft: lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(this.props.values, this.props.field)
          });
        } else {
          this.setState({
            isEditing: false
          });
        }
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent(field, canEdit, value, placeholder, children) {
      if (children) {
        return children({
          value: value,
          isEditing: false,
          enableEditor: this.enableEditor,
          disableEditor: this.disableEditor,
          setValue: this.setDraft
        });
      } else if (!value) {
        return canEdit && placeholder ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          buttonSize: "large",
          onClick: this.enableEditor,
          "data-cy": "InlineEditField-Add-".concat(field),
          children: placeholder
        }) : null;
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
          children: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          field = _this$props2.field,
          values = _this$props2.values,
          mutation = _this$props2.mutation,
          canEdit = _this$props2.canEdit,
          prepareVariables = _this$props2.prepareVariables,
          showEditIcon = _this$props2.showEditIcon,
          placeholder = _this$props2.placeholder,
          _children = _this$props2.children,
          topEdit = _this$props2.topEdit,
          mutationOptions = _this$props2.mutationOptions,
          warnIfUnsavedChanges = _this$props2.warnIfUnsavedChanges;
      var _this$state = this.state,
          draft = _this$state.draft,
          isEditing = _this$state.isEditing;
      var buttonsMinWidth = this.props.buttonsMinWidth;

      var value = lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(values, field);

      var touched = draft !== value;
      var isValid = !this.props.required ? touched : touched && Boolean(draft);

      if (!isEditing) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          position: "relative",
          children: [canEdit && showEditIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            position: "absolute",
            top: topEdit,
            right: -5,
            zIndex: 2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(EditIcon, {
              size: 24,
              onClick: this.enableEditor,
              "data-cy": "InlineEditField-Trigger-".concat(field)
            })
          }), this.renderContent(field, canEdit, value, placeholder, _children)]
        });
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_WarnIfUnsavedChanges__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          hasUnsavedChanges: warnIfUnsavedChanges && isValid,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_21__/* .Mutation */ .m, _objectSpread(_objectSpread({
            mutation: mutation
          }, mutationOptions), {}, {
            children: function children(updateField, _ref) {
              var loading = _ref.loading,
                  error = _ref.error;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
                children: [_children ? _children({
                  isEditing: true,
                  value: draft,
                  maxLength: _this2.props.maxLength,
                  setValue: _this2.setDraft,
                  enableEditor: _this2.enableEditor,
                  disableEditor: _this2.disableEditor,
                  setUploading: function setUploading(uploading) {
                    return _this2.setState({
                      uploading: uploading
                    });
                  }
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_StyledTextarea__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                  autoSize: true,
                  autoFocus: true,
                  width: 1,
                  value: draft || '',
                  onChange: function onChange(e) {
                    return _this2.setDraft(e.target.value);
                  },
                  px: 0,
                  py: 0,
                  border: "0",
                  letterSpacing: "inherit",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  maxLength: _this2.props.maxLength,
                  "data-cy": "InlineEditField-Textarea-".concat(field),
                  withOutline: true
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
                  width: 1,
                  children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    type: "error",
                    my: 2,
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "normal",
                    withIcon: true,
                    children: error.message
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    mt: 3,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(FormButton, {
                      "data-cy": "InlineEditField-Btn-Cancel",
                      disabled: loading,
                      minWidth: buttonsMinWidth,
                      onClick: _this2.disableEditor,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        id: "form.cancel",
                        defaultMessage: [{
                          "type": 0,
                          "value": "cancel"
                        }]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(FormButton, {
                      buttonStyle: "primary",
                      loading: loading,
                      disabled: !isValid || _this2.state.uploading,
                      "data-cy": "InlineEditField-Btn-Save",
                      minWidth: buttonsMinWidth,
                      onClick: function onClick() {
                        var variables = null;

                        if (prepareVariables) {
                          variables = prepareVariables(values, draft);
                        } else {
                          variables = lodash_pick__WEBPACK_IMPORTED_MODULE_7___default()(values, ['id']);
                          variables[field] = draft;
                        }

                        updateField({
                          variables: variables
                        }).then(function () {
                          return _this2.disableEditor(true);
                        });
                      },
                      children: _this2.state.uploading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        id: "uploadImage.isUploading",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Uploading image..."
                        }]
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        id: "save",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Save"
                        }]
                      })
                    })]
                  })]
                })]
              });
            }
          }))
        });
      }
    }
  }]);

  return InlineEditField;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(InlineEditField, "defaultProps", {
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
/* harmony default export */ __webpack_exports__["Z"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP)(InlineEditField));

/***/ }),

/***/ 59139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RichTextEditor; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92191);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67294);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(37947);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(52015);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(57632);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48966);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65985);
/* harmony import */ var _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72004);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69078);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74770);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86702);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85893);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
















var TrixEditorContainer = styled_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "RichTextEditor__TrixEditorContainer",
  componentId: "sc-2bze4a-0"
})(["", " trix-editor{border:none;padding:0;margin-top:8px;padding-top:8px;outline-offset:0.5em;", " &::-webkit-scrollbar{width:8px;}", " ", " &:empty:not(:focus)::before{color:", ";}figcaption{display:none;}", "}trix-toolbar{min-height:40px;background:", ";", " z-index:2;margin-bottom:8px;", " .trix-button-group{border-radius:6px;border-color:#c4c7cc;margin-bottom:0;background:white;}.trix-button{border-bottom:none;display:inline-block;height:auto;&:hover{background:", ";}&.trix-active{background:", ";}&::before,&.trix-active::before{margin:4px;}}", " @media (max-width:500px){.trix-button--icon-strike,.trix-button--icon-number-list,.trix-button--icon-decrease-nesting-level,.trix-button--icon-increase-nesting-level{display:none;}}", " .trix-button--icon-attach::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21 15 16 10 5 21'/%3E%3C/svg%3E\");}.trix-button--video-attach::before{top:8%;bottom:4%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-video'%3E%3Cpolygon points='23 7 16 12 23 17 23 7'%3E%3C/polygon%3E%3Crect x='1' y='5' width='15' height='14' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E\");}}", ""], function (props) {
  return props.withBorders && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    border: '1px solid',
    borderColor: !props.error ? 'black.300' : 'red.300',
    borderRadius: 10,
    padding: 3
  });
}, _lib_styled_components_shared_styles__WEBPACK_IMPORTED_MODULE_10__/* .CustomScrollbarCSS */ .T, function (props) {
  return Boolean(props.editorMaxHeight) && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    overflowY: 'scroll'
  });
}, function (props) {
  return !props.withBorders && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    outline: !props.error ? 'none' : "1px dashed ".concat(props.theme.colors.red[300]),
    '&:focus': {
      outline: "1px dashed ".concat(props.theme.colors.black[200])
    }
  });
}, function (props) {
  return props.theme.colors.black[400];
}, function (props) {
  return (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    minHeight: props.editorMinHeight,
    maxHeight: props.editorMaxHeight
  });
}, function (props) {
  return props.toolbarBackgroundColor;
}, function (props) {
  return !props.withBorders && "box-shadow: 0px 5px 3px -3px rgba(0, 0, 0, 0.1);";
}, function (props) {
  return props.withBorders && "min-height: 0px; margin-bottom: 0;";
}, function (props) {
  return props.theme.colors.blue[100];
}, function (props) {
  return props.theme.colors.blue[200];
}, function (props) {
  return props.version === 'simplified' && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    '.trix-button-group--file-tools': {
      display: 'none'
    },
    '.trix-button-group--block-tools .trix-button:not(.trix-button--icon-number-list):not(.trix-button--icon-bullet-list)': {
      display: 'none'
    },
    '.trix-button--icon-bullet-list': {
      borderLeft: 'none'
    }
  });
}, function (props) {
  return props.withStickyToolbar && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    position: 'sticky',
    top: props.toolbarTop || 0,
    marginTop: props.toolbarOffsetY,
    p: '10px'
  });
}, function (props) {
  return props.isDisabled && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_19__/* .css */ .iv)({
    pointerEvents: 'none',
    cursor: 'not-allowed',
    background: '#f3f3f3',
    'trix-toolbar,.trix-button-group': {
      background: '#f3f3f3 !important'
    }
  });
});
var SUPPORTED_SERVICE_URLS = {
  youTube: 'https://www.youtube-nocookie.com/embed/',
  anchorFm: 'https://anchor.fm/'
};
/**
 * A React wrapper around the Trix library to edit rich text.
 * Produces HTML and clear text.
 */

var RichTextEditor = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(RichTextEditor, _React$Component);

  var _super = _createSuper(RichTextEditor);

  function RichTextEditor(props) {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, RichTextEditor);

    _this = _super.call(this, props);

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "initialize", function () {
      if (_this.Trix && _this.editorRef.current) {
        // Listen for changes
        _this.editorRef.current.addEventListener('trix-change', _this.handleChange, false);

        _this.editorRef.current.addEventListener('trix-attachment-add', _this.handleUpload);

        _this.editorRef.current.addEventListener('trix-file-accept', _this.handleFileAccept);

        _this.editorRef.current.addEventListener('trix-action-invoke', _this.trixActionInvoke);

        _this.editorRef.current.addEventListener('trix-initialize', function (event) {
          if (_this.props.videoEmbedEnabled) {
            _this.replaceEmbeddedIFrames(_this.props.value || _this.props.defaultValue);

            _this.trixEmbed(event);
          } // Some special handling for links


          if (_this.mainContainerRef.current) {
            // We must listen when the user presses the 'Enter' key and when the user clicks the 'Link' button as well
            var linkInput = _this.mainContainerRef.current.querySelector("[data-trix-input][name='href']");

            linkInput === null || linkInput === void 0 ? void 0 : linkInput.addEventListener('keydown', function (e) {
              if (e.key === 'Enter') {
                _this.handleLink();
              }
            });

            var addLinkBtn = _this.mainContainerRef.current.querySelector("[data-trix-method='setAttribute']");

            addLinkBtn === null || addLinkBtn === void 0 ? void 0 : addLinkBtn.addEventListener('click', _this.handleLink);
          }
        }); // Component ready!


        _this.isReady = true;
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "replaceEmbeddedIFrames", function (value) {
      var iframeRegex = new RegExp("<iframe.+?iframe>", 'ig');
      var match;
      var lastIndex = 0;

      while (match = iframeRegex.exec(value)) {
        if (lastIndex === 0) {
          _this.getEditor().loadHTML('');
        }

        var iframe = match[0];
        var position = match.index;
        var preText = value.substring(lastIndex, position);

        _this.getEditor().setSelectedRange([lastIndex, position]);

        _this.getEditor().insertHTML(preText);

        var attachment = new _this.Trix.Attachment({
          content: iframe
        });

        _this.getEditor().insertAttachment(attachment);

        lastIndex = match.index + iframe.length;
        var postText = value.substring(lastIndex, value.length);

        _this.getEditor().insertHTML(postText);
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "trixEmbed", function (e) {
      var videoEmbedButton = "<button type=\"button\" tabindex=\"-1\" data-trix-action=\"x-video-dialog-open\" title=\"Attach Video\" class=\"trix-button trix-button--icon trix-button--video-attach\">Attach Video</button>";
      var videoEmbedDialog = "\n            <div class=\"trix-dialog\" data-trix-dialog=\"video-url\" data-trix-dialog-attribute=\"video\">\n              <div class=\"trix-dialog__link-fields\">\n                <input type=\"url\" name=\"video-url\" class=\"trix-input trix-input--dialog trix-input--dialog-embed\" placeholder=\"Enter Video URL\u2026\" aria-label=\"Video URL\" data-trix-input=\"\">\n                <div class=\"trix-button-group\">\n                  <input type=\"button\" class=\"trix-button trix-button--dialog\" value=\"Add Video\" data-trix-action=\"x-add-embed\">\n                </div>\n              </div>\n              <strong>Note: Only YouTube and Anchor.fm links are supported.</strong>\n            </div>";
      var toolbarElement = e.target.toolbarElement;
      var attachFilesButton = toolbarElement.querySelector('[data-trix-action=attachFiles]');
      attachFilesButton.insertAdjacentHTML('afterend', videoEmbedButton);
      var trixDialog = toolbarElement.querySelector('.trix-dialog--link');
      trixDialog.insertAdjacentHTML('afterend', videoEmbedDialog);
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "trixActionInvoke", function (e) {
      var toolbarElement = e.target.toolbarElement;

      if (e.actionName === 'x-video-dialog-open') {
        var attachVideoDialog = toolbarElement.querySelector('[data-trix-dialog=video-url]');
        var attachVideoDialogInput = toolbarElement.querySelector('.trix-input--dialog-embed');

        if (attachVideoDialog.getAttribute('data-trix-active') === '') {
          attachVideoDialog.removeAttribute('data-trix-active');
        } else {
          attachVideoDialog.setAttribute('data-trix-active', '');
          attachVideoDialogInput.removeAttribute('disabled');
        }
      } else if (e.actionName === 'x-add-embed') {
        var _toolbarElement$query;

        var embedLink = (_toolbarElement$query = toolbarElement.querySelector('.trix-input--dialog-embed').value) === null || _toolbarElement$query === void 0 ? void 0 : _toolbarElement$query.trim();

        if (embedLink) {
          _this.embedIframe(embedLink);
        }
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "constructVideoEmbedURL", function (service, id) {
      if (service === 'youtube') {
        return "".concat(SUPPORTED_SERVICE_URLS.youTube).concat(id);
      }
      /* else if (service === 'vimeo') {
      return `https://player.vimeo.com/video/${id}`;
      } */
      else if (service === 'anchorFm') {
        return "".concat(SUPPORTED_SERVICE_URLS.anchorFm).concat(id);
      } else {
        return null;
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "parseServiceLink", function (videoLink) {
      var regexps = {
        youtube: new RegExp('(?:https?://)?(?:www\\.)?youtu(?:\\.be/|be\\.com/\\S*(?:watch|embed)(?:(?:(?=/[^&\\s?]+(?!\\S))/)|(?:\\S*v=|v/)))([^&\\s?]+)', 'i'),
        vimeo: new RegExp('(http|https)?://(www\\.)?vimeo\\.com/(?:channels/(?:\\w+/)?|groups/([^/]*)/videos/|)(\\d+)(?:|/?)'),
        anchorFm: /^(http|https)?:\/\/(www\.)?anchor\.fm\/([^/]+)(\/embed)?(\/episodes\/)?([^/]+)?\/?$/
      };

      for (var service in regexps) {
        var matches = regexps[service].exec(videoLink);

        if (matches) {
          if (service === 'anchorFm') {
            var podcastName = matches[3];
            var episodeId = matches[6];
            var podcastUrl = "".concat(podcastName, "/embed");
            return {
              service: service,
              id: episodeId ? "".concat(podcastUrl, "/episodes/").concat(episodeId) : podcastUrl
            };
          } else {
            return {
              service: service,
              id: matches[matches.length - 1]
            };
          }
        }
      }

      return {};
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "embedIframe", function (videoLink) {
      var _this$parseServiceLin = _this.parseServiceLink(videoLink),
          id = _this$parseServiceLin.id,
          service = _this$parseServiceLin.service;

      var embedLink = _this.constructVideoEmbedURL(service, id);

      if (embedLink) {
        var sanitizedLink = embedLink.replace(/["\\]/g, ''); // Small security enhancement, prevents going out of `src`

        var videoServices = ['youtube', 'vimeo'];
        var attachmentData;

        if (videoServices.includes(service)) {
          attachmentData = {
            contentType: '--embed-iframe-video',
            content: "<iframe src=\"".concat(sanitizedLink, "/?showinfo=0\" width=\"100%\" height=\"394\" frameborder=\"0\" allowfullscreen/>")
          };
        } else {
          attachmentData = {
            contentType: "--embed-iframe-".concat(service),
            content: "<iframe src=\"".concat(sanitizedLink, "\" width=\"100%\" frameborder=\"0\"/>")
          };
        }

        _this.getEditor().insertAttachment(new _this.Trix.Attachment(attachmentData));
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleChange", function (e) {
      // Trigger content formatters
      _this.autolink(); // Notify parent function


      if (_this.props.onChange) {
        _this.props.onChange(e);
      } // Reset errors


      if (_this.state.error) {
        _this.setState({
          error: null
        });
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleFileAccept", function (e) {
      if (!/^image\//.test(e.file.type)) {
        alert('You can only upload images.');
        e.preventDefault();
      } else if (e.file.size > 4000000) {
        // Prevent attaching files > 4MB
        alert('This file is too big (max: 4mb).');
        e.preventDefault();
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleUpload", function (e) {
      var _this$props$setUpload, _this$props;

      var attachment = e.attachment;

      var attachmentContent = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(attachment, 'attachment.attributes.values.content');

      var isVideoAttachment = (attachmentContent === null || attachmentContent === void 0 ? void 0 : attachmentContent.includes("<iframe src=\"".concat(SUPPORTED_SERVICE_URLS.youTube))) || (attachmentContent === null || attachmentContent === void 0 ? void 0 : attachmentContent.includes("<iframe src=\"".concat(SUPPORTED_SERVICE_URLS.anchorFm)));

      if (isVideoAttachment) {
        return;
      } else if (!attachment.file) {
        attachment.remove(); // Remove unknown stuff, for example when copy-pasting HTML

        return;
      }

      (_this$props$setUpload = (_this$props = _this.props).setUploading) === null || _this$props$setUpload === void 0 ? void 0 : _this$props$setUpload.call(_this$props, true);

      var onProgress = function onProgress(progress) {
        return attachment.setUploadProgress(progress);
      };

      var onSuccess = function onSuccess(fileURL) {
        var _this$props$setUpload2, _this$props2;

        (_this$props$setUpload2 = (_this$props2 = _this.props).setUploading) === null || _this$props$setUpload2 === void 0 ? void 0 : _this$props$setUpload2.call(_this$props2, false);
        attachment.setAttributes({
          url: fileURL,
          href: fileURL
        });
      };

      var onFailure = function onFailure() {
        var _this$props$setUpload3, _this$props3;

        (_this$props$setUpload3 = (_this$props3 = _this.props).setUploading) === null || _this$props$setUpload3 === void 0 ? void 0 : _this$props$setUpload3.call(_this$props3, false);

        _this.setState({
          error: 'File upload failed'
        });

        attachment.remove();
      };

      (0,_lib_api__WEBPACK_IMPORTED_MODULE_9__/* .uploadImageWithXHR */ .Z4)(attachment.file, _this.props.kind, {
        onProgress: onProgress,
        onSuccess: onSuccess,
        onFailure: onFailure
      });
      return e;
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleLink", function () {
      var _this$mainContainerRe, _urlInput$value;

      var urlInput = (_this$mainContainerRe = _this.mainContainerRef.current) === null || _this$mainContainerRe === void 0 ? void 0 : _this$mainContainerRe.querySelector("[data-trix-input][name='href']");
      var urlInputValue = urlInput === null || urlInput === void 0 ? void 0 : (_urlInput$value = urlInput.value) === null || _urlInput$value === void 0 ? void 0 : _urlInput$value.trim(); // Ignore missing input or empty values

      if (!urlInputValue) {
        return;
      } // Automatically add 'https://' to the url
      // eslint-disable-next-line camelcase


      if ((0,validator__WEBPACK_IMPORTED_MODULE_20__.isURL)(urlInputValue, {
        require_protocol: false
      }) && !(0,validator__WEBPACK_IMPORTED_MODULE_20__.isURL)(urlInputValue, {
        require_protocol: true
      })) {
        urlInput.value = "https://".concat(urlInputValue);
      }
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "autolinkDelimiter", function (url) {
      var lastCharacterPosition = url.length;

      while (lastCharacterPosition > 0) {
        var lastCharacterIndex = lastCharacterPosition - 1;
        var closingPair = url[lastCharacterIndex];
        var openingPair = void 0;

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
          var opening = 0,
              closing = 0;
          /** Check to ensure that when a URL is enclosed within pair punctuations,
           * we do not include the closing punctuation as part of the link.
           * We only want to accept a closing punctuation at the end of the link,
           * if there is a corresponding opening punctuation within the URL.
           */

          for (var i = 0; i < lastCharacterPosition; i++) {
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

    _this.editorRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createRef();
    _this.mainContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createRef();
    _this.state = {
      id: props.id,
      error: null
    };
    _this.isReady = false;

    if (true) {
      _this.Trix = __webpack_require__(36250);
      _this.Trix.config.blockAttributes.heading1 = {
        tagName: 'h3'
      };
      _this.Trix.config.attachments.preview.caption = {
        name: false,
        size: false
      };
    }

    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(RichTextEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.id) {
        this.setState({
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)()
        });
      } else if (!this.isReady) {
        this.initialize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (!this.isReady) {
        this.initialize();
      } else if (oldProps.reset !== this.props.reset) {
        this.editorRef.current.editor.loadHTML('');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isReady) {
        this.editorRef.current.removeEventListener('trix-change', this.handleChange);
        this.editorRef.current.removeEventListener('trix-attachment-add', this.handleUpload);
        this.editorRef.current.removeEventListener('trix-attachment-add', this.handleFileAccept);
        this.editorRef.current.removeEventListener('trix-action-invoke', this.trixActionInvoke);
      }
    }
  }, {
    key: "getEditor",
    value: function getEditor() {
      return this.editorRef.current.editor;
    }
  }, {
    key: "autolink",
    value:
    /** Automatically create anchors with hrefs for links */
    function autolink() {
      var _this2 = this;

      var linkRegex = new RegExp("(https?://\\S+\\.\\S+)\\s", 'ig');
      var editor = this.getEditor();
      var content = editor.getDocument().toString();
      var match;

      while (match = linkRegex.exec(content)) {
        var url = match[1];

        if ((0,validator__WEBPACK_IMPORTED_MODULE_20__.isURL)(url)) {
          (function () {
            var position = match.index;

            var urlLength = _this2.autolinkDelimiter(url);

            var range = [position, position + urlLength];
            var hrefAtRange = editor.getDocument().getCommonAttributesAtRange(range).href;
            var newURL = url.slice(0, urlLength);

            if (hrefAtRange !== newURL) {
              _this2.updateInRange(editor, range, 0, function () {
                if (editor.canActivateAttribute('href')) {
                  editor.activateAttribute('href', newURL);
                }
              });
            }
          })();
        }
      }
    }
    /** A helper used by autolink to find where the url actually ends
     * Credits:
     * https://github.com/github/cmark-gfm/blob/36c1553d2a1f04dc1628e76b18490edeff78b8d0/extensions/autolink.c#L37
     * https://github.com/vmg/redcarpet/blob/92a7b3ae2241b862e9bf45e0af3cf53ebdfb0afb/ext/redcarpet/autolink.c#L58
     */

  }, {
    key: "updateInRange",
    value:
    /** A trix helper that will apply func in range then restore base range when it's done */
    function updateInRange(editor, range) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var updateFunc = arguments.length > 3 ? arguments[3] : undefined;
      var baseRange = editor.getSelectedRange();
      editor.setSelectedRange(range);
      updateFunc();
      editor.setSelectedRange([baseRange[0] + offset, baseRange[1] + offset]);
    }
    /** ---- Render ---- */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          defaultValue = _this$props4.defaultValue,
          withStickyToolbar = _this$props4.withStickyToolbar,
          toolbarTop = _this$props4.toolbarTop,
          toolbarOffsetY = _this$props4.toolbarOffsetY,
          toolbarBackgroundColor = _this$props4.toolbarBackgroundColor,
          autoFocus = _this$props4.autoFocus,
          placeholder = _this$props4.placeholder,
          editorMinHeight = _this$props4.editorMinHeight,
          withBorders = _this$props4.withBorders,
          inputName = _this$props4.inputName,
          disabled = _this$props4.disabled,
          error = _this$props4.error,
          fontSize = _this$props4.fontSize,
          value = _this$props4.value,
          version = _this$props4.version,
          showCount = _this$props4.showCount,
          maxLength = _this$props4.maxLength,
          editorMaxHeight = _this$props4.editorMaxHeight;
      return !this.state.id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        maxHeight: editorMaxHeight ? editorMaxHeight + 56 : undefined,
        height: editorMinHeight ? editorMinHeight + 56 : 200
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(TrixEditorContainer, {
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
        children: [this.state.error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          type: "error",
          mb: "36px",
          withIcon: true,
          children: this.state.error.toString()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
          id: this.state.id,
          value: value || defaultValue,
          type: "hidden",
          name: inputName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_HTMLContent__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          fontSize: fontSize,
          children: !showCount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("trix-editor", {
            ref: this.editorRef,
            input: this.state.id,
            autofocus: autoFocus ? true : undefined,
            placeholder: placeholder
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            position: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("trix-editor", {
              ref: this.editorRef,
              input: this.state.id,
              autofocus: autoFocus ? true : undefined,
              placeholder: placeholder
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              position: "absolute",
              bottom: "1em",
              right: "1em",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                textTransform: "uppercase",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .stripHTML */ .Cb)(value || defaultValue).length
                }), maxLength && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                  children: [" / ", maxLength]
                })]
              })
            })]
          })
        })]
      });
    }
  }]);

  return RichTextEditor;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(RichTextEditor, "defaultProps", {
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

/***/ }),

/***/ 16477:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ conversations_Comment; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/HTMLContent.js
var HTMLContent = __webpack_require__(74770);
// EXTERNAL MODULE: ./components/InlineEditField.js
var InlineEditField = __webpack_require__(54746);
// EXTERNAL MODULE: ./components/RichTextEditor.js
var RichTextEditor = __webpack_require__(59139);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/DotsHorizontalRounded/DotsHorizontalRounded.esm.js
var DotsHorizontalRounded_esm = __webpack_require__(15856);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Share2/Share2.esm.js
var Share2_esm = __webpack_require__(6575);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/X/X.esm.js
var X_esm = __webpack_require__(35031);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/Edit/Edit.esm.js
var Edit_esm = __webpack_require__(35208);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/usePopper.js + 54 modules
var usePopper = __webpack_require__(46440);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/hooks/useClipboard.js
var useClipboard = __webpack_require__(60225);
// EXTERNAL MODULE: ./lib/hooks/useGlobalBlur.js
var useGlobalBlur = __webpack_require__(55348);
// EXTERNAL MODULE: ./components/ConfirmationModal.js
var ConfirmationModal = __webpack_require__(47988);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/conversations/CommentMetadata.js








var CommentMetadata = function CommentMetadata(_ref) {
  var comment = _ref.comment;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mr: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
        collective: comment.fromAccount,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
          collective: comment.fromAccount,
          radius: 40
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
        collective: comment.fromAccount,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          color: "black.800",
          fontWeight: "500",
          lineHeight: "22px",
          truncateOverflow: true,
          children: comment.fromAccount.name
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "12px",
        color: "black.600",
        truncateOverflow: true,
        title: comment.createdAt,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
;// CONCATENATED MODULE: ./components/conversations/CommentActions.js





var _templateObject;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

























var AdminActionsPopupContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "CommentActions__AdminActionsPopupContainer",
  componentId: "sc-184odms-0"
})(["flex-direction:column;background:#ffffff;border:1px solid rgba(49,50,51,0.1);border-radius:8px;box-shadow:0px 4px 8px rgba(20,20,20,0.16);width:184px;padding:16px;z-index:1;"]);
var CommentBtn = (0,styled_components_browser_esm/* default */.ZP)(StyledButton/* default */.Z).attrs({
  buttonSize: 'small'
}).withConfig({
  displayName: "CommentActions__CommentBtn",
  componentId: "sc-184odms-1"
})(["padding:3px 5px;margin:5px 0;width:100%;text-align:left;border:none;span{margin-left:12px;font-weight:500;font-size:14px;line-height:21px;letter-spacing:-0.1px;vertical-align:middle;}"]);
/**
 * Action buttons for the comment owner. Styles change between mobile and desktop.
 */

var AdminActionButtons = function AdminActionButtons(_ref) {
  var canEdit = _ref.canEdit,
      canDelete = _ref.canDelete,
      openDeleteConfirmation = _ref.openDeleteConfirmation,
      onEdit = _ref.onEdit,
      copyLinkToClipboard = _ref.copyLinkToClipboard,
      closePopup = _ref.closePopup;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(CommentBtn, {
      "data-cy": "share-comment-btn",
      onClick: function onClick() {
        closePopup();
        copyLinkToClipboard();
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Share2_esm/* Share2 */.C, {
        size: "1em",
        mr: 2
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        tagName: "span",
        id: "Share",
        defaultMessage: [{
          "type": 0,
          "value": "Share"
        }]
      })]
    }), canEdit && /*#__PURE__*/(0,jsx_runtime.jsxs)(CommentBtn, {
      "data-cy": "edit-comment-btn",
      onClick: function onClick() {
        closePopup();
        onEdit();
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Edit_esm/* Edit */.I, {
        size: "1em",
        mr: 2
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        tagName: "span",
        id: "Edit",
        defaultMessage: [{
          "type": 0,
          "value": "Edit"
        }]
      })]
    }), canDelete && /*#__PURE__*/(0,jsx_runtime.jsxs)(CommentBtn, {
      "data-cy": "delete-comment-btn",
      onClick: function onClick() {
        closePopup();
        openDeleteConfirmation();
      },
      color: "red.600",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(X_esm.X, {
        size: "1em",
        mr: 2
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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

var deleteCommentMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation DeleteComment($id: String!) {\n    deleteComment(id: $id) {\n      id\n    }\n  }\n"])));
var REACT_POPPER_MODIFIERS = [{
  name: 'offset',
  options: {
    offset: [0, 8]
  }
}];
var mutationOptions = {
  context: helpers/* API_V2_CONTEXT */.T
};

var CommentActions = function CommentActions(_ref2) {
  var comment = _ref2.comment,
      anchorHash = _ref2.anchorHash,
      isConversationRoot = _ref2.isConversationRoot,
      canEdit = _ref2.canEdit,
      canDelete = _ref2.canDelete,
      onDelete = _ref2.onDelete,
      onEditClick = _ref2.onEditClick;
  var intl = (0,useIntl/* default */.Z)();

  var _useClipboard = (0,useClipboard/* default */.Z)(),
      copy = _useClipboard.copy;

  var _React$useState = react.useState(null),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isDeleting = _React$useState2[0],
      setDeleting = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      showAdminActions = _React$useState4[0],
      setShowAdminActions = _React$useState4[1];

  var _React$useState5 = react.useState(null),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      refElement = _React$useState6[0],
      setRefElement = _React$useState6[1];

  var _React$useState7 = react.useState(null),
      _React$useState8 = slicedToArray_default()(_React$useState7, 2),
      popperElement = _React$useState8[0],
      setPopperElement = _React$useState8[1];

  var _useMutation = (0,client.useMutation)(deleteCommentMutation, mutationOptions),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      deleteComment = _useMutation2[0],
      deleteError = _useMutation2[1].error;

  var _usePopper = (0,usePopper/* usePopper */.D)(refElement, popperElement, {
    placement: 'bottom-end',
    modifiers: REACT_POPPER_MODIFIERS
  }),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      state = _usePopper.state;

  var copyLinkToClipboard = function copyLinkToClipboard() {
    var _window$location$href = window.location.href.split('#'),
        _window$location$href2 = slicedToArray_default()(_window$location$href, 1),
        baseLink = _window$location$href2[0];

    var linkWithAnchorHash = "".concat(baseLink, "#").concat(anchorHash);
    copy(linkWithAnchorHash);
  };

  (0,useGlobalBlur/* default */.Z)(state === null || state === void 0 ? void 0 : state.elements.popper, function (outside) {
    if (outside && showAdminActions) {
      setShowAdminActions(false);
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        ref: setRefElement,
        buttonSize: "tiny",
        "data-cy": "commnent-actions-trigger",
        onClick: function onClick() {
          return setShowAdminActions(!showAdminActions);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(DotsHorizontalRounded_esm/* DotsHorizontalRounded */.Z, {
          size: "16"
        })
      })
    }), showAdminActions && /*#__PURE__*/(0,jsx_runtime.jsxs)(AdminActionsPopupContainer, _objectSpread(_objectSpread({
      ref: setPopperElement,
      style: styles.popper
    }, attributes.popper), {}, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontWeight: "600",
          fontSize: "9px",
          lineHeight: "14px",
          textTransform: "uppercase",
          letterSpacing: "0.6px",
          whiteSpace: "nowrap",
          pr: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "comment.actions",
            defaultMessage: [{
              "type": 0,
              "value": "Comment Actions"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          flex: "1",
          borderStyle: "solid",
          borderColor: "black.300"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        flexDirection: "column",
        alignItems: "flex-start",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(AdminActionButtons, {
          comment: comment,
          isConversationRoot: isConversationRoot,
          openDeleteConfirmation: function openDeleteConfirmation() {
            return setDeleting(true);
          },
          onEdit: onEditClick,
          canEdit: canEdit,
          canDelete: canDelete,
          copyLinkToClipboard: copyLinkToClipboard,
          closePopup: function closePopup() {
            return setShowAdminActions(false);
          }
        })
      })]
    })), isDeleting && /*#__PURE__*/(0,jsx_runtime.jsxs)(ConfirmationModal/* default */.Z, {
      isDanger: true,
      type: "delete",
      onClose: function onClose() {
        return setDeleting(false);
      },
      continueHandler: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return deleteComment({
                  variables: {
                    id: comment.id
                  }
                });

              case 2:
                if (!onDelete) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return onDelete(comment);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })),
      header: isConversationRoot ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "conversation.deleteModalTitle",
        defaultMessage: [{
          "type": 0,
          "value": "Delete this Conversation?"
        }]
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "Comment.DeleteConfirmTitle",
        defaultMessage: [{
          "type": 0,
          "value": "Delete this comment?"
        }]
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
        mb: 4,
        borderColor: "#e1e4e6"
      }), isConversationRoot && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
        type: "warning",
        withIcon: true,
        mb: 3,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "conversation.deleteMessage",
          defaultMessage: [{
            "type": 0,
            "value": "The message and all its replies will be permanently deleted."
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        padding: 2,
        borderRadius: 8,
        border: "1px solid #e1e4e6",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CommentMetadata, {
          comment: comment
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          mt: 3,
          maxHeight: 150,
          overflowY: "auto",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HTMLContent/* default */.Z, {
            content: comment.html,
            fontSize: "12px",
            "data-cy": "comment-body"
          })
        })]
      }), deleteError && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
        type: "error",
        withIcon: true,
        mt: 3,
        children: (0,errors/* i18nGraphqlException */.t2)(intl, deleteError)
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
/* harmony default export */ var conversations_CommentActions = (CommentActions);
// EXTERNAL MODULE: ./components/conversations/EmojiReactionPicker.js + 1 modules
var EmojiReactionPicker = __webpack_require__(23737);
// EXTERNAL MODULE: ./components/conversations/EmojiReactions.js
var EmojiReactions = __webpack_require__(953);
// EXTERNAL MODULE: ./components/conversations/graphql.js
var graphql = __webpack_require__(37436);
;// CONCATENATED MODULE: ./components/conversations/Comment.js




var Comment_templateObject;
















var editCommentMutation = (0,lib/* default */.ZP)(Comment_templateObject || (Comment_templateObject = taggedTemplateLiteral_default()(["\n  mutation EditComment($comment: CommentUpdateInput!) {\n    editComment(comment: $comment) {\n      id\n      ...CommentFields\n    }\n  }\n  ", "\n"])), graphql/* commentFieldsFragment */.Y6);
var Comment_mutationOptions = {
  context: helpers/* API_V2_CONTEXT */.T
};
/**
 * Render a comment.
 *
 * /!\ Can only be used with data from API V2.
 */

var Comment = function Comment(_ref) {
  var comment = _ref.comment,
      canEdit = _ref.canEdit,
      canDelete = _ref.canDelete,
      maxCommentHeight = _ref.maxCommentHeight,
      isConversationRoot = _ref.isConversationRoot,
      onDelete = _ref.onDelete,
      reactions = _ref.reactions,
      canReply = _ref.canReply;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isEditing = _React$useState2[0],
      setEditing = _React$useState2[1];

  var hasActions = !isEditing;
  var anchorHash = "comment-".concat(new Date(comment.createdAt).getTime());
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    width: "100%",
    "data-cy": "comment",
    id: anchorHash,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      mb: 3,
      justifyContent: "space-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CommentMetadata, {
        comment: comment
      }), hasActions && /*#__PURE__*/(0,jsx_runtime.jsx)(conversations_CommentActions, {
        comment: comment,
        anchorHash: anchorHash,
        isConversationRoot: isConversationRoot,
        canEdit: canEdit,
        canDelete: canDelete,
        onDelete: onDelete,
        onEditClick: function onEditClick() {
          return setEditing(true);
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(_StyledBox, {
      position: "relative",
      maxHeight: maxCommentHeight,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InlineEditField/* default */.Z, {
        mutation: editCommentMutation,
        mutationOptions: Comment_mutationOptions,
        values: comment,
        field: "html",
        canEdit: canEdit,
        canDelete: canDelete,
        isEditing: isEditing,
        showEditIcon: false,
        prepareVariables: function prepareVariables(comment, html) {
          return {
            comment: {
              id: comment.id,
              html: html
            }
          };
        },
        disableEditor: function disableEditor() {
          return setEditing(false);
        },
        warnIfUnsavedChanges: true,
        required: true,
        children: function children(_ref2) {
          var isEditing = _ref2.isEditing,
              setValue = _ref2.setValue,
              setUploading = _ref2.setUploading;
          return !isEditing ? /*#__PURE__*/(0,jsx_runtime.jsx)(HTMLContent/* default */.Z, {
            content: comment.html,
            fontSize: "13px",
            "data-cy": "comment-body"
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(RichTextEditor["default"], {
            kind: "COMMENT",
            defaultValue: comment.html,
            onChange: function onChange(e) {
              return setValue(e.target.value);
            },
            fontSize: "13px",
            autoFocus: true,
            setUploading: setUploading
          });
        }
      }), (reactions || canReply) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        mt: 3,
        flexWrap: "wrap",
        "data-cy": "comment-reactions",
        children: [reactions && /*#__PURE__*/(0,jsx_runtime.jsx)(EmojiReactions/* default */.Z, {
          reactions: reactions
        }), canReply && /*#__PURE__*/(0,jsx_runtime.jsx)(EmojiReactionPicker/* default */.Z, {
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
/* harmony default export */ var conversations_Comment = (Comment);

var _StyledBox = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "Comment___StyledBox",
  componentId: "sc-1ca0zpr-0"
})({
  overflowY: 'auto'
});

/***/ }),

/***/ 14193:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(46829);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(86896);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _ContainerOverlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3798);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86702);
/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59139);
/* harmony import */ var _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41448);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51927);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(37436);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85893);





var _templateObject;






















var createCommentMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  mutation CreateComment($comment: CommentCreateInput!) {\n    createComment(comment: $comment) {\n      id\n      ...CommentFields\n    }\n  }\n  ", "\n"])), _graphql__WEBPACK_IMPORTED_MODULE_20__/* .commentFieldsFragment */ .Y6);
var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_23__.defineMessages)({
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

var getRedirectUrl = function getRedirectUrl(router, id) {
  var anchor = id ? "#".concat(id) : '';
  return "/create-account?next=".concat(encodeURIComponent(router.asPath + anchor));
};

var isAutoFocused = function isAutoFocused(id) {
  return id && true && lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(window, 'location.hash') === "#".concat(id);
};

var mutationOptions = {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T
};
/** A small helper to make the form work with params from both API V1 & V2 */

var prepareCommentParams = function prepareCommentParams(html, conversationId, expenseId, updateId) {
  var comment = {
    html: html
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


var CommentForm = function CommentForm(_ref) {
  var id = _ref.id,
      ConversationId = _ref.ConversationId,
      ExpenseId = _ref.ExpenseId,
      UpdateId = _ref.UpdateId,
      onSuccess = _ref.onSuccess,
      router = _ref.router,
      loadingLoggedInUser = _ref.loadingLoggedInUser,
      LoggedInUser = _ref.LoggedInUser,
      isDisabled = _ref.isDisabled;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_24__.useMutation)(createCommentMutation, mutationOptions),
      _useMutation2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useMutation, 2),
      createComment = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      html = _useState[0],
      setHtml = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),
      resetValue = _useState2[0],
      setResetValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),
      validationError = _useState3[0],
      setValidationError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      uploading = _useState4[0],
      setUploading = _useState4[1];

  var formatMessage = intl.formatMessage;

  var submitForm = /*#__PURE__*/function () {
    var _ref2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(event) {
      var comment, response;
      return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              event.stopPropagation();

              if (html) {
                _context.next = 6;
                break;
              }

              setValidationError((0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED));
              _context.next = 13;
              break;

            case 6:
              comment = prepareCommentParams(html, ConversationId, ExpenseId, UpdateId);
              _context.next = 9;
              return createComment({
                variables: {
                  comment: comment
                }
              });

            case 9:
              response = _context.sent;
              setResetValue(response.data.createComment.id);

              if (!onSuccess) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", onSuccess(response.data.createComment));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submitForm(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    id: id,
    position: "relative",
    children: [!loadingLoggedInUser && !LoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ContainerOverlay__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      backgroundType: "white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_16__/* .SignInOverlayBackground */ .g8, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
          routes: {
            join: getRedirectUrl(router, id)
          },
          signInLabel: formatMessage(messages.signInLabel),
          hideFooter: true,
          showSubHeading: false,
          showOCLogo: false
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("form", {
      onSubmit: submitForm,
      "data-cy": "comment-form",
      children: [loadingLoggedInUser ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        height: 232
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_RichTextEditor__WEBPACK_IMPORTED_MODULE_15__["default"], {
        kind: "COMMENT",
        withBorders: true,
        inputName: "html",
        editorMinHeight: 150,
        placeholder: formatMessage(messages.placeholder),
        autoFocus: isAutoFocused(id),
        disabled: isDisabled || !LoggedInUser || loading,
        reset: resetValue,
        fontSize: "13px",
        onChange: function onChange(e) {
          setHtml(e.target.value);
          setValidationError(null);
        },
        setUploading: setUploading
      }), validationError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
        color: "red.500",
        mt: 3,
        children: (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatFormErrorMessage */ .$m)(intl, validationError)
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        type: "error",
        withIcon: true,
        mt: 2,
        children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .formatErrorMessage */ .jN)(intl, (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .getErrorFromGraphqlException */ .H1)(error))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
        mt: 3,
        alignItems: "center",
        gap: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
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
/* harmony default export */ __webpack_exports__["Z"] = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_19__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_6__.withRouter)(CommentForm)));

/***/ }),

/***/ 23737:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ conversations_EmojiReactionPicker; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Manager.js
var Manager = __webpack_require__(81385);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Reference.js
var Reference = __webpack_require__(63351);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Popper.js
var Popper = __webpack_require__(74688);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/hooks/useGlobalBlur.js
var useGlobalBlur = __webpack_require__(55348);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/icons/CustomStyledIcon.js
var CustomStyledIcon = __webpack_require__(50333);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/icons/AddReactionIcon.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var AddReactionIcon = function AddReactionIcon(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CustomStyledIcon/* default */.Z, _objectSpread(_objectSpread({
    fill: "none",
    width: "17",
    height: "16",
    viewBox: "0 0 17 16"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fill: "#9D9FA3",
      fillRule: "evenodd",
      d: "M13.136 3.81v2.285h1.546V3.81H17V2.286h-2.318V0h-1.546v2.286h-2.318V3.81h2.318zM0 8.762c0-3.996 3.281-7.238 7.334-7.238.94 0 1.84.174 2.666.491v1.668a5.84 5.84 0 00-2.66-.635c-3.201 0-5.795 2.557-5.795 5.714 0 3.157 2.594 5.714 5.796 5.714 3.202 0 5.795-2.557 5.795-5.714A5.64 5.64 0 0012.856 7h1.607c.143.564.219 1.154.219 1.762 0 3.995-3.289 7.238-7.348 7.238C3.28 16 0 12.757 0 8.762zm9.66-.381c.64 0 1.158-.51 1.158-1.143A1.15 1.15 0 009.66 6.095c-.641 0-1.159.51-1.159 1.143a1.15 1.15 0 001.16 1.143zM6.181 7.238a1.15 1.15 0 01-1.16 1.143 1.15 1.15 0 01-1.158-1.143 1.15 1.15 0 011.159-1.143c.641 0 1.159.51 1.159 1.143zm1.159 5.714c1.585 0 2.933-.953 3.477-2.285H3.864c.544 1.332 1.891 2.285 3.477 2.285z",
      clipRule: "evenodd",
      strokeWidth: "0.1"
    })
  }));
};

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
/* harmony default export */ var icons_AddReactionIcon = (AddReactionIcon);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
;// CONCATENATED MODULE: ./components/conversations/EmojiReactionPicker.js





var _templateObject, _templateObject2;

function EmojiReactionPicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EmojiReactionPicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EmojiReactionPicker_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EmojiReactionPicker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }














var addReactionMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation AddEmojiReaction($emoji: String!, $update: UpdateReferenceInput, $comment: CommentReferenceInput) {\n    addEmojiReaction(emoji: $emoji, update: $update, comment: $comment) {\n      update {\n        id\n        reactions\n        userReactions\n      }\n      comment {\n        id\n        reactions\n        userReactions\n      }\n    }\n  }\n"])));
var removeReactionMutation = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  mutation RemoveEmojiReaction($emoji: String!, $update: UpdateReferenceInput, $comment: CommentReferenceInput) {\n    removeEmojiReaction(emoji: $emoji, update: $update, comment: $comment) {\n      update {\n        id\n        reactions\n        userReactions\n      }\n      comment {\n        id\n        reactions\n        userReactions\n      }\n    }\n  }\n"])));
var Emoji = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "EmojiReactionPicker__Emoji",
  componentId: "sc-4zqity-0"
})(["font-size:15px;"]);
var ReactionButton = (0,styled_components_browser_esm/* default */.ZP)(StyledRoundButton/* default */.Z).attrs({
  isBorderless: true,
  buttonSize: 'small'
}).withConfig({
  displayName: "EmojiReactionPicker__ReactionButton",
  componentId: "sc-4zqity-1"
})(["margin:4px;background:white !important;", "{transition:transform 0.15s cubic-bezier(0.2,0,0.13,2);}&:hover{", "{transform:scale(1.3);}}", ""], Emoji, Emoji, function (props) {
  return props.isSelected && (0,styled_components_browser_esm/* css */.iv)(["background:", " !important;"], props.theme.colors.primary[200]);
});

var getOptimisticResponse = function getOptimisticResponse(entity, emoji, isAdding) {
  var userReactions = entity.userReactions || [];
  var __typename = entity.__typename;
  var fieldName = __typename === 'Update' ? 'update' : 'comment';
  var fieldNameOpposite = __typename === 'Update' ? 'comment' : 'update';

  if (isAdding) {
    var _addEmojiReaction;

    var newCount = (entity.reactions[emoji] || 0) + 1;
    return {
      __typename: 'Mutation',
      addEmojiReaction: (_addEmojiReaction = {
        __typename: 'EmojiReactionsResponse'
      }, defineProperty_default()(_addEmojiReaction, fieldName, {
        __typename: __typename,
        id: entity.id,
        reactions: EmojiReactionPicker_objectSpread(EmojiReactionPicker_objectSpread({}, entity.reactions), {}, defineProperty_default()({}, emoji, newCount)),
        userReactions: [].concat(toConsumableArray_default()(userReactions), [emoji])
      }), defineProperty_default()(_addEmojiReaction, fieldNameOpposite, null), _addEmojiReaction)
    };
  } else {
    var _removeEmojiReaction;

    var _newCount = (entity.reactions[emoji] || 0) - 1;

    var reactions = EmojiReactionPicker_objectSpread(EmojiReactionPicker_objectSpread({}, entity.reactions), {}, defineProperty_default()({}, emoji, _newCount));

    if (!reactions[emoji]) {
      delete reactions[emoji];
    }

    return {
      __typename: 'Mutation',
      removeEmojiReaction: (_removeEmojiReaction = {
        __typename: 'EmojiReactionsResponse'
      }, defineProperty_default()(_removeEmojiReaction, fieldName, {
        __typename: __typename,
        id: entity.id,
        reactions: reactions,
        userReactions: userReactions.filter(function (userEmoji) {
          return userEmoji !== emoji;
        })
      }), defineProperty_default()(_removeEmojiReaction, fieldNameOpposite, null), _removeEmojiReaction)
    };
  }
};

var mutationOptions = {
  context: helpers/* API_V2_CONTEXT */.T
};
/**
 * A component to render the reaction picker on comments.
 */

var EmojiReactionPicker = function EmojiReactionPicker(_ref) {
  var comment = _ref.comment,
      update = _ref.update;
  var emojiFirstRow = ['👍️', '👎', '😀', '🎉'];
  var emojiSecondRow = ['😕', '❤️', '🚀', '👀'];

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var wrapperRef = react.useRef();

  var _useMutation = (0,client.useMutation)(addReactionMutation, mutationOptions),
      _useMutation2 = slicedToArray_default()(_useMutation, 1),
      addReaction = _useMutation2[0];

  var _useMutation3 = (0,client.useMutation)(removeReactionMutation, mutationOptions),
      _useMutation4 = slicedToArray_default()(_useMutation3, 1),
      removeReaction = _useMutation4[0];

  (0,useGlobalBlur/* default */.Z)(wrapperRef, function (outside) {
    if (outside) {
      setOpen(false);
    }
  });

  var getReactionBtnProps = function getReactionBtnProps(emoji) {
    var isSelected;

    if (comment) {
      var _comment$userReaction;

      isSelected = (_comment$userReaction = comment.userReactions) === null || _comment$userReaction === void 0 ? void 0 : _comment$userReaction.includes(emoji);
    } else if (update) {
      var _update$userReactions;

      isSelected = (_update$userReactions = update.userReactions) === null || _update$userReactions === void 0 ? void 0 : _update$userReactions.includes(emoji);
    }

    return {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Emoji, {
        children: emoji
      }),
      isSelected: isSelected,
      onClick: function onClick() {
        setOpen(false);
        var action = isSelected ? removeReaction : addReaction;

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

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Manager/* Manager */.dK, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      ref: wrapperRef,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Reference/* Reference */.s, {
        children: function children(_ref2) {
          var ref = _ref2.ref;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            buttonSize: "tiny",
            display: "inline-block",
            whiteSpace: "nowrap",
            onClick: function onClick() {
              return setOpen(true);
            },
            ref: ref,
            margin: "4px 8px 4px 0",
            "data-cy": "comment-reaction-picker-trigger",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_AddReactionIcon, {})
          });
        }
      }), open && /*#__PURE__*/(0,jsx_runtime.jsx)(Popper/* Popper */.r, {
        placement: "bottom",
        children: function children(_ref3) {
          var placement = _ref3.placement,
              ref = _ref3.ref,
              style = _ref3.style;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard/* default */.Z, {
            boxShadow: "-2px -1px 3px 0px #e8e8e8",
            zIndex: 9999,
            "data-placement": placement,
            ref: ref,
            style: style,
            "data-cy": "comment-reaction-picker-popper",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              children: emojiFirstRow.map(function (emoji) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(ReactionButton, EmojiReactionPicker_objectSpread({}, getReactionBtnProps(emoji)), emoji);
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              children: emojiSecondRow.map(function (emoji) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(ReactionButton, EmojiReactionPicker_objectSpread({}, getReactionBtnProps(emoji)), emoji);
              })
            })]
          });
        }
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
/* harmony default export */ var conversations_EmojiReactionPicker = (EmojiReactionPicker);

/***/ }),

/***/ 953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52015);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);




var EmojiLabel = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_1__/* .Span */ .Dr).withConfig({
  displayName: "EmojiReactions__EmojiLabel",
  componentId: "sc-os32es-0"
})(["outline:0;border:1px solid #dadada;border-style:solid;border-width:1px;border-radius:100px;text-align:center;padding:5px 14px 5px 14px;font-size:12px;line-height:14px;margin:4px 8px 4px 0;"]);

var EmojiReactions = function EmojiReactions(_ref) {
  var reactions = _ref.reactions;
  return Object.keys(reactions).sort().map(function (emoji) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(EmojiLabel, {
      children: [emoji, "\xA0\xA0", reactions[emoji]]
    }, emoji);
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(EmojiReactions));

/***/ }),

/***/ 71133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ conversations_Thread; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/icons/CommentIcon.js
var CommentIcon = __webpack_require__(6845);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: ./components/conversations/Comment.js + 2 modules
var Comment = __webpack_require__(16477);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/CheckCircle/CheckCircle.esm.js
var CheckCircle_esm = __webpack_require__(49020);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Ban/Ban.esm.js
var Ban_esm = __webpack_require__(80654);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Cogs/Cogs.esm.js
var Cogs_esm = __webpack_require__(18275);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/AlertOctagon/AlertOctagon.esm.js
var AlertOctagon_esm = __webpack_require__(95060);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Edit/Edit.esm.js
var Edit_esm = __webpack_require__(40932);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/FileText/FileText.esm.js
var FileText_esm = __webpack_require__(89441);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Plus/Plus.esm.js
var Plus_esm = __webpack_require__(33216);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/UserCheck/UserCheck.esm.js
var UserCheck_esm = __webpack_require__(92453);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/UserMinus/UserMinus.esm.js
var UserMinus_esm = __webpack_require__(85253);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/SyncAlt/SyncAlt.esm.js
var SyncAlt_esm = __webpack_require__(73062);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/Update/Update.esm.js
var Update_esm = __webpack_require__(83823);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/DateTime.js
var DateTime = __webpack_require__(95370);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/conversations/ThreadActivity.js




















/**
 * Defines activities display metadata.
 * **All** keys must have a matching entry in `MESSAGES` below.
 */



var ACTIVITIES_INFO = {
  COLLECTIVE_EXPENSE_CREATED: {
    type: 'info',
    icon: Plus_esm/* Plus */.v,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.Created",
      defaultMessage: [{
        "type": 0,
        "value": "Expense created"
      }]
    })
  },
  COLLECTIVE_EXPENSE_APPROVED: {
    type: 'info',
    icon: UserCheck_esm/* UserCheck */.u,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.Approved",
      defaultMessage: [{
        "type": 0,
        "value": "Expense approved"
      }]
    })
  },
  COLLECTIVE_EXPENSE_MOVED: {
    type: 'info',
    icon: SyncAlt_esm/* SyncAlt */.x,
    message: (0,lib.defineMessage)({
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
    icon: UserMinus_esm/* UserMinus */.K,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.Unapproved",
      defaultMessage: [{
        "type": 0,
        "value": "Expense unapproved"
      }]
    })
  },
  COLLECTIVE_EXPENSE_UPDATED: {
    type: 'info',
    icon: Edit_esm/* Edit */.I,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.Updated",
      defaultMessage: [{
        "type": 0,
        "value": "Expense updated"
      }]
    })
  },
  COLLECTIVE_EXPENSE_MARKED_AS_UNPAID: {
    type: 'info',
    icon: Update_esm/* Update */.B,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.MarkedAsUnpaid",
      defaultMessage: [{
        "type": 0,
        "value": "Expense marked as unpaid"
      }]
    })
  },
  COLLECTIVE_EXPENSE_REJECTED: {
    type: 'error',
    icon: Ban_esm/* Ban */.K,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.Rejected",
      defaultMessage: [{
        "type": 0,
        "value": "Expense rejected"
      }]
    })
  },
  COLLECTIVE_EXPENSE_INVITE_DRAFTED: {
    type: 'info',
    icon: FileText_esm/* FileText */.a,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.Invite.Drafted",
      defaultMessage: [{
        "type": 0,
        "value": "Expense invited"
      }]
    })
  },
  COLLECTIVE_EXPENSE_PAID: {
    type: 'success',
    icon: CheckCircle_esm/* CheckCircle */.f,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.Paid",
      defaultMessage: [{
        "type": 0,
        "value": "Expense paid"
      }]
    })
  },
  COLLECTIVE_EXPENSE_PROCESSING: {
    type: 'info',
    icon: Cogs_esm/* Cogs */.i,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.Processing",
      defaultMessage: [{
        "type": 0,
        "value": "Expense processing"
      }]
    })
  },
  COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT: {
    type: 'info',
    icon: Cogs_esm/* Cogs */.i,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.ScheduledForPayment",
      defaultMessage: [{
        "type": 0,
        "value": "Expense scheduled for payment"
      }]
    })
  },
  COLLECTIVE_EXPENSE_ERROR: {
    type: 'error',
    icon: AlertOctagon_esm/* AlertOctagon */.e,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.Error",
      defaultMessage: [{
        "type": 0,
        "value": "Expense error"
      }]
    })
  },
  COLLECTIVE_EXPENSE_MARKED_AS_SPAM: {
    type: 'error',
    icon: Ban_esm/* Ban */.K,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.MarkedAsSpam",
      defaultMessage: [{
        "type": 0,
        "value": "Expense marked as spam"
      }]
    })
  },
  COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE: {
    type: 'warning',
    icon: UserMinus_esm/* UserMinus */.K,
    message: (0,lib.defineMessage)({
      id: "Expense.Activity.MarkedAsIncomplete",
      defaultMessage: [{
        "type": 0,
        "value": "Expense marked as incomplete"
      }]
    })
  }
};

var getActivityColor = function getActivityColor(activityType, theme) {
  var _ACTIVITIES_INFO$acti;

  switch ((_ACTIVITIES_INFO$acti = ACTIVITIES_INFO[activityType]) === null || _ACTIVITIES_INFO$acti === void 0 ? void 0 : _ACTIVITIES_INFO$acti.type) {
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

var getActivityIcon = function getActivityIcon(activity, theme) {
  var _ACTIVITIES_INFO$acti2;

  var IconComponent = ((_ACTIVITIES_INFO$acti2 = ACTIVITIES_INFO[activity.type]) === null || _ACTIVITIES_INFO$acti2 === void 0 ? void 0 : _ACTIVITIES_INFO$acti2.icon) || Update_esm/* Update */.B;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent, {
    size: 18,
    color: getActivityColor(activity.type, theme)
  });
};
var isSupportedActivity = function isSupportedActivity(activity) {
  return Object.prototype.hasOwnProperty.call(ACTIVITIES_INFO, activity.type);
};
var ActivityParagraph = (0,styled_components_browser_esm/* default */.ZP)(Text.P).withConfig({
  displayName: "ThreadActivity__ActivityParagraph",
  componentId: "sc-kglu55-0"
})(["padding:10px 12px;border-left:4px solid ", ";border-radius:0;"], function (props) {
  return props.activityColor;
});
var ActivityMessage = styled_components_browser_esm/* default.span.withConfig */.ZP.span.withConfig({
  displayName: "ThreadActivity__ActivityMessage",
  componentId: "sc-kglu55-1"
})(["font-size:10px;font-weight:600;background:white;color:", ";"], function (props) {
  return props.color;
});

var ThreadActivity = function ThreadActivity(_ref) {
  var _ACTIVITIES_INFO$acti3, _activity$data, _activity$data2, _activity$data2$error, _activity$data3, _activity$data3$moved;

  var activity = _ref.activity;

  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  var theme = (0,styled_components_browser_esm/* useTheme */.Fg)();
  var activityColor = getActivityColor(activity.type, theme);
  var message = (_ACTIVITIES_INFO$acti3 = ACTIVITIES_INFO[activity.type]) === null || _ACTIVITIES_INFO$acti3 === void 0 ? void 0 : _ACTIVITIES_INFO$acti3.message;
  var details = ((_activity$data = activity.data) === null || _activity$data === void 0 ? void 0 : _activity$data.message) || ((_activity$data2 = activity.data) === null || _activity$data2 === void 0 ? void 0 : (_activity$data2$error = _activity$data2.error) === null || _activity$data2$error === void 0 ? void 0 : _activity$data2$error.message);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [activity.individual && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
        collective: activity.individual,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
          radius: 40,
          collective: activity.individual
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexDirection: "column",
        justifyContent: "center",
        ml: 3,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          color: "black.600",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "ByUser",
            defaultMessage: [{
              "type": 0,
              "value": "By "
            }, {
              "type": 1,
              "value": "userName"
            }],
            values: {
              userName: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                as: LinkCollective/* default */.Z,
                color: "black.800",
                collective: activity.individual
              })
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          color: "black.600",
          fontSize: "12px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "mzGohi",
            defaultMessage: [{
              "type": 0,
              "value": "on "
            }, {
              "type": 1,
              "value": "date"
            }],
            values: {
              date: /*#__PURE__*/(0,jsx_runtime.jsx)(DateTime/* default */.Z, {
                value: activity.createdAt
              })
            }
          })
        })]
      })]
    }), message && /*#__PURE__*/(0,jsx_runtime.jsxs)(ActivityParagraph, {
      activityColor: activityColor,
      mt: 1,
      fontSize: "12px",
      whiteSpace: "pre-line",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ActivityMessage, {
        color: activityColor,
        children: formatMessage(message, {
          movedFromCollective: ((_activity$data3 = activity.data) === null || _activity$data3 === void 0 ? void 0 : (_activity$data3$moved = _activity$data3.movedFromCollective) === null || _activity$data3$moved === void 0 ? void 0 : _activity$data3$moved.name) || 'collective'
        })
      }), details && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), details]
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
/* harmony default export */ var conversations_ThreadActivity = (ThreadActivity);
getActivityIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "getActivityIcon"
};
;// CONCATENATED MODULE: ./components/conversations/Thread.js















var Thread_CommentIcon = (0,styled_components_browser_esm/* default */.ZP)(CommentIcon/* default */.Z).attrs({
  size: 16,
  color: '#9a9a9a'
}).withConfig({
  displayName: "Thread__CommentIcon",
  componentId: "sc-r19paz-0"
})([""]);
var ItemContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Thread__ItemContainer",
  componentId: "sc-r19paz-1"
})(["width:100%;", ""], function (props) {
  return !props.isLast && (0,styled_components_browser_esm/* css */.iv)(["padding-bottom:16px;margin-bottom:16px;border-bottom:1px dashed #d3d6da;"]);
});
/**
 * A thread is meant to display comments and activities in a chronological order.
 */

var Thread = function Thread(_ref) {
  var collective = _ref.collective,
      items = _ref.items,
      onCommentDeleted = _ref.onCommentDeleted,
      LoggedInUser = _ref.LoggedInUser,
      theme = _ref.theme,
      hasMore = _ref.hasMore,
      fetchMore = _ref.fetchMore;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  if (!items || items.length === 0) {
    return null;
  }

  var isAdmin = LoggedInUser && LoggedInUser.isAdminOfCollective(collective);

  var handleLoadMore = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return fetchMore();

            case 3:
              setLoading(false);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLoadMore() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    "data-cy": "thread",
    children: [items.map(function (item, idx) {
      switch (item.__typename) {
        case 'Comment':
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexDirection: "column",
                alignItems: "center",
                width: "40px",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  my: 2,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Thread_CommentIcon, {})
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  width: "1px",
                  height: "100%",
                  background: "#E8E9EB"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(ItemContainer, {
                isLast: idx + 1 === items.length,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Comment/* default */.Z, {
                  comment: item,
                  canDelete: isAdmin || Boolean(LoggedInUser && LoggedInUser.canEditComment(item)),
                  canEdit: Boolean(LoggedInUser && LoggedInUser.canEditComment(item)),
                  canReply: Boolean(LoggedInUser),
                  onDelete: onCommentDeleted,
                  reactions: item.reactions
                })
              })]
            })
          }, "comment-".concat(item.id));

        case 'Activity':
          return !isSupportedActivity(item) ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                flexDirection: "column",
                alignItems: "center",
                width: "40px",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  my: 2,
                  children: getActivityIcon(item, theme)
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  width: "1px",
                  height: "100%",
                  background: "#E8E9EB"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(ItemContainer, {
                isLast: idx + 1 === items.length,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(conversations_ThreadActivity, {
                  activity: item
                }, item.id)
              })]
            })
          }, "activity-".concat(item.id));

        default:
          return null;
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), hasMore && fetchMore && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      margin: "1rem",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
        onClick: handleLoadMore,
        loading: loading,
        textTransform: "capitalize",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
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
/* harmony default export */ var conversations_Thread = (/*#__PURE__*/react.memo((0,UserProvider/* withUser */.ns)((0,styled_components_browser_esm/* withTheme */.Zz)(Thread))));

/***/ }),

/***/ 37436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hm": function() { return /* binding */ isUserFollowingConversationQuery; },
/* harmony export */   "Y6": function() { return /* binding */ commentFieldsFragment; },
/* harmony export */   "mM": function() { return /* binding */ conversationListFragment; }
/* harmony export */ });
/* unused harmony export updateListFragment */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15020);


var _templateObject, _templateObject2, _templateObject3, _templateObject4;


var commentFieldsFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment CommentFields on Comment {\n    id\n    createdAt\n    html\n    reactions\n    userReactions\n    fromAccount {\n      id\n      type\n      name\n      slug\n      imageUrl\n    }\n  }\n"])));
var conversationListFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment ConversationListFragment on ConversationCollection {\n    totalCount\n    offset\n    limit\n    nodes {\n      id\n      title\n      summary\n      slug\n      createdAt\n      tags\n      fromAccount {\n        id\n        name\n        type\n        slug\n        imageUrl\n      }\n      followers(limit: 5) {\n        totalCount\n        nodes {\n          id\n          slug\n          type\n          name\n          imageUrl(height: 64)\n        }\n      }\n      stats {\n        id\n        commentsCount\n      }\n    }\n  }\n"])));
var isUserFollowingConversationQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_templateObject3 || (_templateObject3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query IsUserFollowingConversation($id: String!) {\n    loggedInAccount {\n      id\n      slug\n      imageUrl\n      type\n      name\n      ... on Individual {\n        isFollowingConversation(id: $id)\n      }\n    }\n  }\n"])));
var updateListFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_templateObject4 || (_templateObject4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment UpdateListFragment on UpdateCollection {\n    totalCount\n    offset\n    limit\n    nodes {\n      id\n      slug\n      title\n      summary\n      createdAt\n      publishedAt\n      isPrivate\n      userCanSeeUpdate\n      fromAccount {\n        id\n        type\n        name\n        slug\n        imageUrl\n      }\n    }\n  }\n"])));

/***/ }),

/***/ 6845:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82818);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52015);


/* harmony default export */ __webpack_exports__["Z"] = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_1__/* .MessageSquare */ .t).withConfig({
  displayName: "CommentIcon",
  componentId: "sc-hzbk8p-0"
})(["transform:scaleX(-1);"]));

/***/ }),

/***/ 60225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20640);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);



/**
 * A custom react hook to copy values to the clipboard
 *
 * @param timeout: time before the isCopied flag is reset
 */

var useClipboard = function useClipboard() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 3000 : _ref$timeout;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      isCopied = _React$useState2[0],
      setCopied = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState(),
      _React$useState4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),
      updateCopyBtnTimeout = _React$useState4[0],
      setUpdateCopyBtnTimeout = _React$useState4[1];

  return {
    isCopied: isCopied,
    copy: function copy(value) {
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(value);

      setCopied(true);

      if (updateCopyBtnTimeout) {
        clearTimeout(updateCopyBtnTimeout);
      }

      var timeoutFn = setTimeout(function () {
        setCopied(false);
      }, timeout);
      setUpdateCopyBtnTimeout(timeoutFn);
    }
  };
};

/* harmony default export */ __webpack_exports__["Z"] = (useClipboard);

/***/ }),

/***/ 72004:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ CustomScrollbarCSS; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52015);

/**
 * A custom scrollbar for Chrome, more prettier than the system one.
 */

var CustomScrollbarCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)(["@media (pointer:fine){&::-webkit-scrollbar{height:8px;margin:0 16px;}&::-webkit-scrollbar-thumb{background:#d1d1d3;border-radius:16px;&:hover{background:#aaa;}}&::-webkit-scrollbar-track{background:#f2f3f4;border-radius:20px;}&::-webkit-scrollbar-button{color:white;}}"]);

/***/ })

}]);
//# sourceMappingURL=984-c7be0834682aa2a5.js.map