"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6467],{

/***/ 47988:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ CONFIRMATION_MODAL_TERMINATE; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86896);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71792);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85893);




var _excluded = ["header", "body", "children", "onClose", "type", "isDanger", "isSuccess", "cancelLabel", "continueLabel", "cancelHandler", "continueHandler", "disableSubmit"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.defineMessages)({
  cancel: {
    id: "actions.cancel",
    defaultMessage: [{
      "type": 0,
      "value": "Cancel"
    }]
  }
});
var confirmBtnMsgs = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.defineMessages)({
  confirm: {
    id: "confirm",
    defaultMessage: [{
      "type": 0,
      "value": "Confirm"
    }]
  },
  "delete": {
    id: "actions.delete",
    defaultMessage: [{
      "type": 0,
      "value": "Delete"
    }]
  },
  remove: {
    id: "Remove",
    defaultMessage: [{
      "type": 0,
      "value": "Remove"
    }]
  }
});
/**
 * A special value to return from the `continueHandler` to terminate the modal. Its loading state
 * will therefore not be updated to false, which will prevent the "Warning: Can't perform a React state update on an unmounted component"
 * issue.
 */

var CONFIRMATION_MODAL_TERMINATE = {
  __CONFIRMATION_MODAL_TERMINATE: true
};
/**
 * ConfirmationModal component. Uses `StyledModal` to create a reusable modal mainly for
 * confirmation purpose.
 */

var ConfirmationModal = function ConfirmationModal(_ref) {
  var header = _ref.header,
      body = _ref.body,
      children = _ref.children,
      onClose = _ref.onClose,
      type = _ref.type,
      isDanger = _ref.isDanger,
      isSuccess = _ref.isSuccess,
      cancelLabel = _ref.cancelLabel,
      continueLabel = _ref.continueLabel,
      cancelHandler = _ref.cancelHandler,
      continueHandler = _ref.continueHandler,
      disableSubmit = _ref.disableSubmit,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3___default()(_ref, _excluded);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState, 2),
      submitting = _React$useState2[0],
      setSubmitting = _React$useState2[1];

  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    role: "alertdialog",
    width: "570px",
    onClose: onClose,
    trapFocus: true
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .ModalHeader */ .xB, {
      onClose: onClose,
      children: header
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .ModalBody */ .fe, {
      pt: 2,
      children: children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
        children: body
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .ModalFooter */ .mz, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        display: "flex",
        justifyContent: ['center', 'flex-end'],
        flexWrap: "Wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          mx: 20,
          my: 1,
          autoFocus: true,
          minWidth: 140,
          onClick: cancelHandler || onClose,
          disabled: submitting,
          "data-cy": "confirmation-modal-cancel",
          children: cancelLabel || formatMessage(messages.cancel)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          my: 1,
          minWidth: 140,
          buttonStyle: isDanger ? 'danger' : isSuccess ? 'success' : 'primary',
          "data-cy": "confirmation-modal-continue",
          loading: submitting,
          disabled: disableSubmit,
          onClick: /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
            var result;
            return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    setSubmitting(true);
                    _context.next = 4;
                    return continueHandler();

                  case 4:
                    result = _context.sent;

                  case 5:
                    _context.prev = 5;

                    if (result !== CONFIRMATION_MODAL_TERMINATE) {
                      setSubmitting(false);
                    }

                    return _context.finish(5);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0,, 5, 8]]);
          })),
          children: continueLabel || formatMessage(confirmBtnMsgs[type])
        })]
      })
    })]
  }));
};

ConfirmationModal.defaultProps = {
  type: 'confirm'
};
/** @component */

ConfirmationModal.__docgenInfo = {
  "description": "ConfirmationModal component. Uses `StyledModal` to create a reusable modal mainly for\nconfirmation purpose.",
  "methods": [],
  "displayName": "ConfirmationModal",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'confirm'",
        "computed": false
      },
      "description": "You can pass a type here to auto-set labels to remove/delete/confirm...etc",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'confirm'",
          "computed": false
        }, {
          "value": "'delete'",
          "computed": false
        }, {
          "value": "'remove'",
          "computed": false
        }]
      },
      "required": false
    },
    "header": {
      "description": "header of the confirmation modal",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "children": {
      "description": "body of the confirmation modal",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "body": {
      "description": "Body of the confirmation modal, used in a paragraph if there's no children",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "onClose": {
      "description": "handles how the modal is closed",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "continueHandler": {
      "description": "handles onClick continue button",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "isDanger": {
      "description": "If true, a danger style button will be used for the main button",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isSuccess": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disableSubmit": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "cancelHandler": {
      "description": "handles onClick cancel button. Defaults to `onClose` prop.",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "continueLabel": {
      "description": "continue button label of the confirmation modal. Defaults to `Confirm`.",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "cancelLabel": {
      "description": "cancel button label of the confirmation modal. Defaults to `Cancel`.",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (ConfirmationModal);

/***/ }),

/***/ 29242:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16678);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29925);




var AnimateBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* .keyframes */ .F4)(["0%{background-position:-100% 0;}100%{background-position:100% 0;}"]);
/**
 * A loading container that will show an animated block instead of a blank space.
 */

var LoadingPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "LoadingPlaceholder",
  componentId: "sc-bny1ps-0"
})(["animation:", " 1s linear infinite,", " 1s linear infinite;background:linear-gradient(to right,#eee 2%,#ddd 18%,#eee 33%);background-size:200%;width:100%;", " ", " ", ""], AnimateBackground, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_1__/* .flicker */ .Uh)({
  minOpacity: 0.8
}), styled_system__WEBPACK_IMPORTED_MODULE_0__/* .border */ .Cg, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .layout */ .bK, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .space */ .Dh);
LoadingPlaceholder.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)])
};
LoadingPlaceholder.defaultProps = {
  height: '100%',
  borderRadius: '2%'
};
/** @component */

/* harmony default export */ __webpack_exports__["Z"] = (LoadingPlaceholder);

/***/ }),

/***/ 68185:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86702);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);


var _excluded = ["error"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/**
 * A `MessageBox` specialized to display GraphQL errors.
 * Accepts all props from `MessageBox`.
 */



var MessageBoxGraphqlError = function MessageBoxGraphqlError(_ref) {
  var error = _ref.error,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_MessageBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    type: "error",
    withIcon: true
  }, props), {}, {
    children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .formatErrorMessage */ .jN)(intl, (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .getErrorFromGraphqlException */ .H1)(error))
  }));
};

MessageBoxGraphqlError.__docgenInfo = {
  "description": "A `MessageBox` specialized to display GraphQL errors.\nAccepts all props from `MessageBox`.",
  "methods": [],
  "displayName": "MessageBoxGraphqlError",
  "props": {
    "error": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (MessageBoxGraphqlError);

/***/ }),

/***/ 16738:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52015);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);


var _excluded = ["size", "items", "children", "selected", "buttonProps", "buttonPropsBuilder", "onChange", "combo", "disabled", "customBorderRadius"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var StyledButtonItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "StyledButtonSet__StyledButtonItem",
  componentId: "sc-6bt6g-0"
})(["border-radius:0;line-height:1.5;flex-grow:1;border-color:", ";transition:color 0.2s,background 0.1s,font-size 30ms;&:active p{color:white;}&:hover,&:focus{z-index:9;}&::-moz-focus-inner{border:0;}&:first-child{border-radius:", ";}&:not(:first-child){margin-left:-1px;}&:last-child{border-radius:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__/* .themeGet */ .R)('colors.black.300'), function (_ref) {
  var customBorderRadius = _ref.customBorderRadius;
  return "".concat(customBorderRadius, " 0 0 ").concat(customBorderRadius);
}, function (_ref2) {
  var combo = _ref2.combo,
      customBorderRadius = _ref2.customBorderRadius;
  return combo ? '0' : "0 ".concat(customBorderRadius, " ").concat(customBorderRadius, " 0");
});
StyledButtonItem.propTypes = {
  combo: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool)
};

var StyledButtonSet = function StyledButtonSet(_ref3) {
  var size = _ref3.size,
      items = _ref3.items,
      children = _ref3.children,
      selected = _ref3.selected,
      buttonProps = _ref3.buttonProps,
      buttonPropsBuilder = _ref3.buttonPropsBuilder,
      onChange = _ref3.onChange,
      combo = _ref3.combo,
      disabled = _ref3.disabled,
      customBorderRadius = _ref3.customBorderRadius,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    display: "flex"
  }, props), {}, {
    children: items.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledButtonItem, _objectSpread(_objectSpread(_objectSpread({
        combo: combo || undefined,
        color: item === selected ? 'white' : 'black.400',
        buttonSize: size,
        buttonStyle: item === selected ? 'primary' : undefined,
        onClick: onChange && function () {
          return onChange(item);
        },
        className: item === selected ? 'selected' : undefined,
        disabled: disabled,
        "aria-pressed": item === selected,
        type: "button",
        py: "8px",
        customBorderRadius: customBorderRadius
      }, buttonProps), buttonPropsBuilder ? buttonPropsBuilder({
        item: item,
        index: index,
        isSelected: item === selected
      }) : {}), {}, {
        children: children({
          item: item,
          isSelected: item === selected
        })
      }), item);
    })
  }));
};

StyledButtonSet.defaultProps = {
  combo: false,
  size: 'medium',
  fontSize: '14px',
  customBorderRadius: '4px'
};
StyledButtonSet.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StyledButtonSet",
  "props": {
    "combo": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Setting to style last item to look good in combination with a text input",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "size": {
      "defaultValue": {
        "value": "'medium'",
        "computed": false
      },
      "description": "Based on the design system theme",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'small'",
          "computed": false
        }, {
          "value": "'medium'",
          "computed": false
        }, {
          "value": "'large'",
          "computed": false
        }, {
          "value": "'tiny'",
          "computed": false
        }]
      },
      "required": false
    },
    "fontSize": {
      "defaultValue": {
        "value": "'14px'",
        "computed": false
      },
      "required": false
    },
    "customBorderRadius": {
      "defaultValue": {
        "value": "'4px'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "items": {
      "description": "A list of elements to build buttons uppon",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "any"
        }
      },
      "required": true
    },
    "children": {
      "description": "Button child content renderer. Get passed an object like { item, isSelected }",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "selected": {
      "description": "Currently selected item",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "onChange": {
      "description": "An optional func called with the new item when option changes",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "disabled": {
      "description": "Disable user input",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "buttonPropsBuilder": {
      "description": "Similar to `buttonProps` but allow props to be added dynamically based on item",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "buttonProps": {
      "description": "Button Props",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledButtonSet);

/***/ }),

/***/ 54029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52353);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14359);
/* harmony import */ var country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86896);
/* harmony import */ var _lib_constants_currency__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38198);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17632);
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78080);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32631);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85893);





var _excluded = ["currency", "currencyDisplay", "min", "max", "precision", "defaultValue", "value", "onBlur", "onChange", "isEmpty", "hasCurrencyPicker", "onCurrencyChange", "availableCurrencies"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var formatCurrencyName = function formatCurrencyName(currency, currencyDisplay) {
  if (currencyDisplay === 'SYMBOL') {
    return (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .getCurrencySymbol */ .jK)(currency);
  } else if (currencyDisplay === 'CODE') {
    return currency;
  } else {
    return "".concat((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .getCurrencySymbol */ .jK)(currency), " ").concat(currency);
  }
};

var parseValueFromEvent = function parseValueFromEvent(e, precision, ignoreComma) {
  if (e.target.value === '') {
    return null;
  } else {
    var parsedNumber = parseFloat(ignoreComma ? e.target.value.replace(',', '') : e.target.value);
    return isNaN(parsedNumber) ? NaN : parsedNumber.toFixed(precision);
  }
};
/** Formats value is valid, fallsback on rawValue otherwise */


var getValue = function getValue(value, rawValue, isEmpty) {
  if (isEmpty) {
    return '';
  }

  return isNaN(value) || value === null ? rawValue : value / 100;
};

var getError = function getError(curVal, minAmount, required) {
  return Boolean(required && lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(curVal) || minAmount && curVal < minAmount);
};

var generateCurrencyOptions = function generateCurrencyOptions(intl, availableCurrencies) {
  var currencyDisplayNames = (0,_lib_i18n__WEBPACK_IMPORTED_MODULE_14__/* .getIntlDisplayNames */ ._)(intl.locale, 'currency');
  return availableCurrencies.map(function (currency) {
    var currencyName = currencyDisplayNames.of(currency);
    var emoji = (0,country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__.getEmojiByCurrencyCode)(currency);
    return {
      value: currency,
      label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "500",
        title: currencyName,
        children: [emoji && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
          children: emoji
        }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
          whiteSpace: "nowrap",
          ml: 1,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
            color: "black.800",
            children: currency
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
            color: "black.500",
            children: ["(", currencyName, ")"]
          })]
        })]
      })
    };
  });
};

var getSelectedCurrency = function getSelectedCurrency(value) {
  var emoji = (0,country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__.getEmojiByCurrencyCode)(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
    children: [emoji && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
      children: emoji
    }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
      color: "black.800",
      children: value
    })]
  });
};

var CurrencyPicker = function CurrencyPicker(_ref) {
  var availableCurrencies = _ref.availableCurrencies,
      value = _ref.value,
      _onChange = _ref.onChange;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
  var currencyOptions = generateCurrencyOptions(intl, availableCurrencies);
  var selectedCurrency = getSelectedCurrency(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
    inputId: "currency-picker",
    "data-cy": "currency-picker",
    placeholder: "----",
    error: !value,
    isSearchable: (availableCurrencies === null || availableCurrencies === void 0 ? void 0 : availableCurrencies.length) > 10,
    options: currencyOptions,
    value: !value ? null : {
      value: value,
      label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
        minWidth: 200,
        children: selectedCurrency
      })
    },
    width: 102,
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return _onChange(value);
    },
    onInputChange: function onInputChange(inputValue) {
      return inputValue.length <= 3 ? inputValue : inputValue.substr(0, 3);
    } // Limit search length to 3 characters
    ,
    styles: {
      control: {
        border: !value ? '' : 'none',
        background: '#F7F8FA'
      },
      menu: {
        width: '260px'
      }
    }
  });
};

/**
 * An input for amount inputs. Accepts all props from [StyledInputGroup](/#!/StyledInputGroup).
 */
var StyledInputAmount = function StyledInputAmount(_ref3) {
  var currency = _ref3.currency,
      currencyDisplay = _ref3.currencyDisplay,
      min = _ref3.min,
      max = _ref3.max,
      precision = _ref3.precision,
      defaultValue = _ref3.defaultValue,
      value = _ref3.value,
      _onBlur = _ref3.onBlur,
      onChange = _ref3.onChange,
      isEmpty = _ref3.isEmpty,
      hasCurrencyPicker = _ref3.hasCurrencyPicker,
      onCurrencyChange = _ref3.onCurrencyChange,
      availableCurrencies = _ref3.availableCurrencies,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, _excluded);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(value || defaultValue || ''),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      rawValue = _React$useState2[0],
      setRawValue = _React$useState2[1];

  var isControlled = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(value);
  var hasMin = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(min);
  var curValue = isControlled ? getValue(value, rawValue, isEmpty) : undefined;
  var minAmount = hasMin ? min / 100 : min;

  var dispatchValue = function dispatchValue(e, parsedValue) {
    if (isControlled) {
      setRawValue(e.target.value);
    }

    if (onChange) {
      var valueWithIgnoredComma = parseValueFromEvent(e, precision, true);

      if (parsedValue === null || isNaN(parsedValue)) {
        onChange(parsedValue, e);
      } else if (!e.target.checkValidity() || parsedValue !== valueWithIgnoredComma) {
        onChange(isNaN(e.target.value) ? NaN : null, e);
      } else {
        onChange((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .floatAmountToCents */ .VH)(parsedValue), e);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    maxWidth: "10em",
    step: "0.01"
  }, props), {}, {
    min: minAmount,
    max: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(max) ? max : max / 100,
    type: "number",
    inputMode: "decimal",
    error: props.error || getError(curValue, minAmount, props.required),
    defaultValue: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(defaultValue) ? undefined : defaultValue / 100,
    value: curValue,
    prependProps: !hasCurrencyPicker ? {
      color: props.disabled ? 'black.400' : 'black.800'
    } : {
      p: 0
    },
    prepend: !hasCurrencyPicker ? formatCurrencyName(currency, currencyDisplay) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      bgColor: "black.50",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(CurrencyPicker, {
        onChange: onCurrencyChange,
        value: currency,
        availableCurrencies: availableCurrencies
      })
    }),
    onWheel: function onWheel(e) {
      e.preventDefault();
      e.target.blur();
    },
    onChange: function onChange(e) {
      e.stopPropagation();
      dispatchValue(e, parseValueFromEvent(e, precision));
    },
    onBlur: function onBlur(e) {
      // Clean number if valid (ie. 41.1 -> 41.10)
      var parsedNumber = parseValueFromEvent(e, precision);
      var valueWithIgnoredComma = parseValueFromEvent(e, precision, true);

      if (e.target.checkValidity() && !isNaN(parsedNumber) && parsedNumber !== null && valueWithIgnoredComma === parsedNumber) {
        e.target.value = parsedNumber.toString();
        dispatchValue(e, parsedNumber);
      }

      if (_onBlur) {
        _onBlur(e);
      }
    }
  }));
};

StyledInputAmount.defaultProps = {
  min: 0,
  max: 1000000000,
  precision: 2,
  currencyDisplay: 'SYMBOL',
  name: 'amount',
  availableCurrencies: _lib_constants_currency__WEBPACK_IMPORTED_MODULE_16__/* .Currency */ .F
};
StyledInputAmount.__docgenInfo = {
  "description": "An input for amount inputs. Accepts all props from [StyledInputGroup](/#!/StyledInputGroup).",
  "methods": [],
  "displayName": "StyledInputAmount",
  "props": {
    "min": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "description": "Minimum amount (in CENTS)",
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
    "max": {
      "defaultValue": {
        "value": "1000000000",
        "computed": false
      },
      "description": "Maximum amount (in CENTS)",
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
    "precision": {
      "defaultValue": {
        "value": "2",
        "computed": false
      },
      "description": "Number of decimals",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "currencyDisplay": {
      "defaultValue": {
        "value": "'SYMBOL'",
        "computed": false
      },
      "description": "Currency style. If hasCurrencyPicker is true, `CODE` will be enforced.",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'SYMBOL'",
          "computed": false
        }, {
          "value": "'CODE'",
          "computed": false
        }, {
          "value": "'FULL'",
          "computed": false
        }]
      },
      "required": false
    },
    "name": {
      "defaultValue": {
        "value": "'amount'",
        "computed": false
      },
      "required": false
    },
    "availableCurrencies": {
      "defaultValue": {
        "value": "Currency",
        "computed": true
      },
      "description": "A list of currencies presented in the currency picker",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "currency": {
      "description": "The currency (eg. `USD`, `EUR`...)",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onCurrencyChange": {
      "description": "Gets passed the new currency. Only when hasCurrencyPicker is true",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onChange": {
      "description": "Gets passed the amount in cents as first param, and the event as second param.",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onBlur": {
      "description": "OnChange function",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "value": {
      "description": "Value",
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
    "isEmpty": {
      "description": "A special prop to force the empty state",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "hasCurrencyPicker": {
      "description": "To enable the currency picker",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  },
  "composes": ["./StyledInputGroup"]
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledInputAmount);

/***/ }),

/***/ 37066:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ TwoFactorAuthRequiredMessage; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44012);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62131);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25896);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56562);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19156);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85893);


var _excluded = ["borderWidth", "noTitle"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }














var TwoFactorAuthRequiredMessage = function TwoFactorAuthRequiredMessage(_ref) {
  var _ref$borderWidth = _ref.borderWidth,
      borderWidth = _ref$borderWidth === void 0 ? '1px' : _ref$borderWidth,
      _ref$noTitle = _ref.noTitle,
      noTitle = _ref$noTitle === void 0 ? false : _ref$noTitle,
      flexProps = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var _useLoggedInUser = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, _objectSpread(_objectSpread({
    justifyContent: "center",
    alignItems: "flex-start"
  }, flexProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      width: "100%",
      maxWidth: 496,
      py: "16px",
      textAlign: "center",
      borderWidth: borderWidth,
      children: [!noTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Strong */ .cK, {
        fontSize: "28px",
        lineHeight: "36px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          id: "ScX/93",
          defaultMessage: [{
            "type": 0,
            "value": "2FA Required"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        my: "21px",
        borderColor: "black.200"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        my: "41px",
        px: "36px",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          flex: "1 0 164px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            src: "/static/images/lock-illustration.png",
            alt: "",
            width: 164,
            height: 164
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          textAlign: "left",
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: "500",
          color: "black.700",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            id: "UoQDcG",
            defaultMessage: [{
              "type": 0,
              "value": "Your organization requires you to have two-factor authentication activated to continue"
            }]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        my: "16px",
        borderColor: "black.400"
      }), LoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        justifyContent: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getSettingsRoute */ .aT)(LoggedInUser.collective, 'user-security'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            buttonStyle: "primary",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              id: "st/dW2",
              defaultMessage: [{
                "type": 0,
                "value": "Activate 2FA"
              }]
            })
          })
        })
      })]
    })
  }));
};
TwoFactorAuthRequiredMessage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TwoFactorAuthRequiredMessage",
  "props": {
    "borderWidth": {
      "defaultValue": {
        "value": "'1px'",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "union",
        "raw": "string | number",
        "elements": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "description": ""
    },
    "noTitle": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    }
  }
};

/***/ }),

/***/ 47483:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _CustomStyledIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);


var _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var CreditCard = function CreditCard(_ref) {
  var size = _ref.size,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CustomStyledIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    width: size || 26,
    height: size || 18,
    viewBox: "0 0 26 18",
    fill: "none"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      id: "Credit Card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("rect", {
        id: "Rectangle",
        width: "26",
        height: "18",
        rx: "3",
        fill: "#0061E0",
        stroke: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("rect", {
        id: "Rectangle_2",
        x: "18",
        y: "12",
        width: "4",
        height: "2",
        rx: "1",
        fill: "#8FC7FF",
        stroke: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("rect", {
        id: "Rectangle_3",
        x: "13",
        y: "12",
        width: "4",
        height: "2",
        rx: "1",
        fill: "#8FC7FF",
        stroke: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("rect", {
        id: "Rectangle_4",
        x: "8",
        y: "12",
        width: "4",
        height: "2",
        rx: "1",
        fill: "#8FC7FF",
        stroke: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("rect", {
        id: "Rectangle_5",
        x: "3",
        y: "12",
        width: "4",
        height: "2",
        rx: "1",
        fill: "#8FC7FF",
        stroke: "none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("rect", {
        id: "Rectangle_6",
        x: "3",
        y: "3",
        width: "8",
        height: "6",
        rx: "2",
        fill: "white",
        stroke: "none"
      })]
    })
  }));
};

CreditCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreditCard",
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
/* harmony default export */ __webpack_exports__["Z"] = (CreditCard);

/***/ }),

/***/ 19740:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43281);
/* harmony import */ var _CustomStyledIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




/* eslint-disable react/no-unknown-property */




var GiftCard = function GiftCard(props) {
  var gradientID = "gradient-".concat(props.color.replace('#', ''));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_CustomStyledIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    width: props.size || 26,
    height: props.size || 18,
    viewBox: "0 0 26 18",
    fill: "none"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
      width: "26",
      height: "18",
      rx: "3",
      fill: "#0061E0"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
      x: "0.5",
      y: "0.5",
      width: "25",
      height: "17",
      rx: "1.5",
      fill: "white",
      stroke: "#DCDEE0"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("mask", {
      id: "mask0",
      "mask-type": "alpha",
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "26",
      height: "18",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect", {
        width: "26",
        height: "18",
        rx: "2",
        fill: "white"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g", {
      mask: "url(#mask1)",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
        d: "M8.07049e-08 1.996C4.1109e-08 0.891429 0.89543 0 2 0H24C25.1046 0 26 0.894228 26 1.9988C26 4.23868 26 7.86701 26 10.2455C10.855 8.46077 15.99 16.7119 0 15.2517C3.66594e-07 11.821 1.98615e-07 5.28523 8.07049e-08 1.996Z",
        fill: "url(#".concat(gradientID, ")")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
        opacity: "0.4",
        d: "M0 14.9949C12.2525 15.2461 9.91251 6.1225 26 9.93096C26 10.0147 26 10.0565 26 10.2239C10.855 8.38248 15.99 16.7527 0 15.2461C5.02799e-07 10.3913 0 15.2042 0 14.9949Z",
        fill: "white",
        fillOpacity: "0.48"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
        opacity: "0.24",
        d: "M0 10.2856C9.58751 10.2856 14.5925 14.7595 26 12.9198C26 12.418 26 15.094 26 15.4285C25.3175 15.4285 2.925 15.4285 0 15.4285C5.02799e-07 10.5783 0 10.4947 0 10.2856Z",
        fill: "white",
        fillOpacity: "0.48"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("linearGradient", {
        id: gradientID,
        x1: "0",
        y1: "0",
        x2: "13.5422",
        y2: "22.8211",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("stop", {
          stopColor: props.color
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("stop", {
          offset: "1",
          stopColor: (0,polished__WEBPACK_IMPORTED_MODULE_4__/* .lighten */ .$n)(0.24, props.color)
        })]
      })
    })]
  }));
};

GiftCard.defaultProps = {
  color: '#145ECC'
};
GiftCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "GiftCard",
  "props": {
    "color": {
      "defaultValue": {
        "value": "'#145ECC'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "size": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (GiftCard);

/***/ }),

/***/ 38198:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ Currency; },
/* harmony export */   "b": function() { return /* binding */ PayPalSupportedCurrencies; }
/* harmony export */ });
var Currency = ['USD', 'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JMD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KRW', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SZL', 'THB', 'TJS', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'UYU', 'UZS', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW'];
/*
 * Supported Currencies by PayPal for use with payments and as currency balances.
 * Reference: https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/
 *
 * TODO: There's few currencies (see above list) which decimal amounts are not supported or for in-country
 *  payouts only. We need to investigate and add support for these if possible.
 *
 */

var PayPalSupportedCurrencies = ['AUD', 'CAD', 'CZK', 'DKK', 'EUR', 'HKD', 'ILS', 'MXN', 'NZD', 'NOK', 'PHP', 'PLN', 'GBP', 'RUB', 'SGD', 'SEK', 'CHF', 'THB', 'USD'];

/***/ }),

/***/ 24317:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ ORDER_STATUS; }
/* harmony export */ });
/*
 * Constants for the order status
 *
 * pending -> paid (one-time)
 * pending -> active (subscription)
 * pending -> active -> cancelled (subscription)
 * pending -> cancelled
 * pending -> expired
 */
var ORDER_STATUS = {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  DISPUTED: 'DISPUTED',
  ERROR: 'ERROR',
  EXPIRED: 'EXPIRED',
  IN_REVIEW: 'IN_REVIEW',
  NEW: 'NEW',
  PAID: 'PAID',
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  PLEDGED: 'PLEDGED',
  REFUNDED: 'REFUNDED',
  REJECTED: 'REJECTED',
  REQUIRE_CLIENT_CONFIRMATION: 'REQUIRE_CLIENT_CONFIRMATION'
};

/***/ }),

/***/ 33054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e9": function() { return /* binding */ TRANSACTION_SETTLEMENT_STATUS; },
/* harmony export */   "em": function() { return /* binding */ TransactionTypes; },
/* harmony export */   "wz": function() { return /* binding */ TransactionKind; }
/* harmony export */ });
/* unused harmony exports OC_FEE_PERCENT, HOST_FEE_PERCENT */
/** @module constants/transactions */

/** Percentage that Open Collective charges per transaction: 5% */
var OC_FEE_PERCENT = 5;
/** Default per transaction host fee percentage */

var HOST_FEE_PERCENT = 5;
/** Types of Transactions */

var TransactionTypes = {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};
var TRANSACTION_SETTLEMENT_STATUS = {
  INVOICED: 'INVOICED',
  SETTLED: 'SETTLED',
  OWED: 'OWED'
};
var TransactionKind = {
  /** Transactions coming from the "Add Funds" */
  ADDED_FUNDS: 'ADDED_FUNDS',

  /** Transactions coming from the "Contribution Flow" */
  CONTRIBUTION: 'CONTRIBUTION',

  /** Transactions coming from the "Expense Flow" */
  EXPENSE: 'EXPENSE',

  /** The host fee going to the Host */
  HOST_FEE: 'HOST_FEE',

  /** Part of the Host fee going from the Host to the Platform */
  HOST_FEE_SHARE: 'HOST_FEE_SHARE',

  /** Amount given by Fiscal Hosts to cover payment processor fee on refunds */
  PAYMENT_PROCESSOR_COVER: 'PAYMENT_PROCESSOR_COVER',

  /** Reserved keyword in case we want to use in the future */
  PAYMENT_PROCESSOR_FEE: 'PAYMENT_PROCESSOR_FEE',

  /** Reserved keyword in case we want to use in the future */
  PLATFORM_FEE: 'PLATFORM_FEE',

  /** Financial contribution to Open Collective added on top of another contribution */
  PLATFORM_TIP: 'PLATFORM_TIP',

  /** For prepaid budgets */
  PREPAID_PAYMENT_METHOD: 'PREPAID_PAYMENT_METHOD',

  /** Debt related to Host Fee Share collection */
  HOST_FEE_SHARE_DEBT: 'HOST_FEE_SHARE_DEBT',

  /** Debt related to Platform Tip collection */
  PLATFORM_TIP_DEBT: 'PLATFORM_TIP_DEBT',

  /** Transfer of the balance between Account and Host or Child and Parent */
  BALANCE_TRANSFER: 'BALANCE_TRANSFER'
};

/***/ }),

/***/ 22642:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ i18nTaxDescription; },
/* harmony export */   "m": function() { return /* binding */ i18nTaxType; }
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59448);

var typeMsg = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  VAT: {
    id: "tax.vat",
    defaultMessage: [{
      "type": 0,
      "value": "Value-added tax (VAT)"
    }]
  },
  GST: {
    id: "tax.gst",
    defaultMessage: [{
      "type": 0,
      "value": "Goods and services tax (GST)"
    }]
  }
});
var typeMsgShort = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  VAT: {
    id: "tax.vatShort",
    defaultMessage: [{
      "type": 0,
      "value": "VAT"
    }]
  }
});
var descriptionMsg = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  VAT: {
    id: "tax.vat.description",
    defaultMessage: [{
      "type": 0,
      "value": "Use this tier type to conform with the legislation on VAT in Europe."
    }]
  },
  GST: {
    id: "tax.gst.description",
    defaultMessage: [{
      "type": 0,
      "value": "Use this tier type to conform with the legislation on GST in New Zealand."
    }]
  }
});
var i18nTaxType = function i18nTaxType(intl, taxType) {
  var version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'long';

  if (version === 'long') {
    return typeMsg[taxType] ? intl.formatMessage(typeMsg[taxType]) : taxType;
  } else {
    return typeMsgShort[taxType] ? intl.formatMessage(typeMsgShort[taxType]) : taxType;
  }
};
var i18nTaxDescription = function i18nTaxDescription(intl, taxType) {
  return descriptionMsg[taxType] ? intl.formatMessage(descriptionMsg[taxType]) : null;
};

/***/ }),

/***/ 43176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": function() { return /* binding */ require2FAForAdmins; }
/* harmony export */ });
/**
 * Returns true if the account requires 2FA for admins. Parent must be preloaded.
 */
var require2FAForAdmins = function require2FAForAdmins(collective) {
  var _accountToCheck$polic;

  if (!collective) {
    return false;
  }

  var parent = collective.parent || collective.parentCollective;
  var accountToCheck = parent || collective;
  return Boolean((_accountToCheck$polic = accountToCheck.policies) === null || _accountToCheck$polic === void 0 ? void 0 : _accountToCheck$polic.REQUIRE_2FA_FOR_ADMINS);
};

/***/ }),

/***/ 9851:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,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");

/***/ })

}]);
//# sourceMappingURL=6467-052b98d8222ddff7.js.map