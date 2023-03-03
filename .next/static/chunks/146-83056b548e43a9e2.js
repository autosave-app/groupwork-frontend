"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[146],{

/***/ 90175:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Details */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22733);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54590);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16678);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);


var _excluded = ["children", "title", "buttonSize", "defaultIsOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var Details = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).attrs({
  as: 'details'
}).withConfig({
  displayName: "Collapse__Details",
  componentId: "sc-44ft2f-0"
})(["summary{list-style-type:none;> div{display:flex;cursor:pointer;justify-content:space-between;align-items:center;font-size:13px;font-weight:500;margin-bottom:8px;color:", ";list-style:none;&:hover{color:", ";}}[data-item='chevron-up']{display:none;}[data-item='chevron-down']{display:inline-block;margin-top:5%;}}&[open]{summary{[data-item='chevron-up']{display:inline-block;margin-top:-5%;}[data-item='chevron-down']{display:none;}}}summary:focus{outline:1px dashed ", ";outline-offset:", "px;}summary::-webkit-details-marker{display:none;}summary::marker{display:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__/* .themeGet */ .R)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__/* .themeGet */ .R)('colors.black.700'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__/* .themeGet */ .R)('colors.black.200'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__/* .themeGet */ .R)('space.1'));
var CollapseBtn = styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "Collapse__CollapseBtn",
  componentId: "sc-44ft2f-1"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid #dcdee0;svg{stroke-width:1.5;}[data-item='chevron-up']{margin-top:-5%;}[data-item='chevron-down']{margin-top:5%;}", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_4__/* .size */ .dp, styled_system__WEBPACK_IMPORTED_MODULE_4__/* .space */ .Dh);
/**
 * A stylized version of the `details` HTML element to hide & show content when clicked.
 */

var Collapse = function Collapse(_ref) {
  var children = _ref.children,
      title = _ref.title,
      buttonSize = _ref.buttonSize,
      defaultIsOpen = _ref.defaultIsOpen,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Details, _objectSpread(_objectSpread({
    open: defaultIsOpen
  }, props), {}, {
    children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("summary", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(CollapseBtn, {
          size: buttonSize,
          ml: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_8__/* .ChevronUp */ .Kh, {
            size: "80%",
            "data-item": "chevron-up"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_9__/* .ChevronDown */ ._M, {
            size: "80%",
            "data-item": "chevron-down"
          })]
        })]
      })
    }), children]
  }));
};

Collapse.defaultProps = {
  buttonSize: 18
};
Collapse.__docgenInfo = {
  "description": "A stylized version of the `details` HTML element to hide & show content when clicked.",
  "methods": [],
  "displayName": "Collapse",
  "props": {
    "buttonSize": {
      "defaultValue": {
        "value": "18",
        "computed": false
      },
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
    },
    "title": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "defaultIsOpen": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (Collapse);

/***/ }),

/***/ 94858:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46829);
/* harmony import */ var _lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31801);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _lib_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35427);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51927);





var _templateObject, _templateObject2;








var accountSettingsQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  query AccountSettings {\n    loggedInAccount {\n      id\n      settings\n    }\n  }\n"])));
var dismissMessageMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  mutation DismissMessage($account: AccountReferenceInput!, $key: AccountSettingsKey!) {\n    editAccountSetting(account: $account, key: $key, value: true) {\n      id\n      settings\n    }\n  }\n"])));
/**
 * A message that can be dismissed by the user. Saves a flag into user settings to make
 * sure it won't be displayed again in the future.
 *
 * Messages will never be displayed if user is not logged in.
 */

var DismissibleMessage = function DismissibleMessage(_ref) {
  var children = _ref.children,
      dismissedComponent = _ref.dismissedComponent,
      displayForLoggedOutUser = _ref.displayForLoggedOutUser,
      loadingLoggedInUser = _ref.loadingLoggedInUser,
      LoggedInUser = _ref.LoggedInUser,
      messageId = _ref.messageId;
  var settingsKey = "".concat(_lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_5__/* .DISMISSABLE_HELP_MESSAGE_KEY */ .E_, ".").concat(messageId);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState((0,_lib_local_storage__WEBPACK_IMPORTED_MODULE_7__/* .getFromLocalStorage */ .fp)(settingsKey)),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      isDismissedLocally = _React$useState2[0],
      setDismissedLocally = _React$useState2[1];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation)(dismissMessageMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T
  }),
      _useMutation2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useMutation, 1),
      dismissMessage = _useMutation2[0];

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery)(accountSettingsQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T,
    skip: !LoggedInUser,
    fetchPolicy: 'network-only'
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var loggedInAccount = (data === null || data === void 0 ? void 0 : data.loggedInAccount) || (LoggedInUser === null || LoggedInUser === void 0 ? void 0 : LoggedInUser.collective); // Hide it if SSR or still loading user

  if ( false || loading || loadingLoggedInUser) {
    return null;
  } else if (isDismissedLocally || !loggedInAccount && !displayForLoggedOutUser || lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(loggedInAccount, "settings.".concat(settingsKey))) {
    // Don't show message if user is not logged in or if dismissed
    return dismissedComponent ? dismissedComponent : null;
  }

  return children({
    dismiss: function dismiss() {
      setDismissedLocally(true);
      (0,_lib_local_storage__WEBPACK_IMPORTED_MODULE_7__/* .setLocalStorage */ .qQ)(settingsKey, 'true');
      return loggedInAccount && dismissMessage({
        variables: {
          account: {
            id: loggedInAccount.id
          },
          key: settingsKey
        }
      });
    }
  });
};

DismissibleMessage.propTypes = {
  messageId: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf([].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(Object.values(_lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_5__/* .HELP_MESSAGE */ .Zh)), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(Object.values(_lib_constants_dismissable_help_message__WEBPACK_IMPORTED_MODULE_5__/* .BANNER */ .Mk)))).isRequired,
  displayForLoggedOutUser: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  loadingLoggedInUser: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /** A function to render the actual message */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func.isRequired),

  /** A component we can display if the message was already dismissed once */
  dismissedComponent: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /** @ignore from withUser */
  LoggedInUser: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_8__/* .withUser */ .ns)(DismissibleMessage));

/***/ }),

/***/ 80146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Header; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
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
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./lib/image-utils.js
var image_utils = __webpack_require__(89314);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/hooks/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(62131);
// EXTERNAL MODULE: ./components/host-dashboard/FreezeAccountModal.js
var FreezeAccountModal = __webpack_require__(37670);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/GlobalWarnings.js












var GlobalWarningContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "GlobalWarnings__GlobalWarningContainer",
  componentId: "sc-1yr3f2-0"
})(["width:100;background:#ffffc2;font-weight:400;font-size:14px;line-height:20px;text-align:center;padding:14px;border-top:1px solid #eaeaec;color:#0c2d66;"]);
/**
 * Displays warnings related to the user account.
 */

var GlobalWarnings = function GlobalWarnings(_ref) {
  var collective = _ref.collective;

  var _useLoggedInUser = (0,useLoggedInUser/* default */.Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      hasFreezeModal = _React$useState2[0],
      setHasFreezeModal = _React$useState2[1];

  if (collective !== null && collective !== void 0 && collective.isFrozen) {
    var isLoggedInUserHostAdmin = Boolean(LoggedInUser === null || LoggedInUser === void 0 ? void 0 : LoggedInUser.isHostAdmin(collective)); // Frozen collectives

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(GlobalWarningContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontWeight: "700",
        lineHeight: "20px",
        mb: "6px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "KUZzwz",
          defaultMessage: [{
            "type": 0,
            "value": "Some actions are temporarily limited"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "3tJstK",
          defaultMessage: [{
            "type": 0,
            "value": "Contributions to this page cannot be accepted at this time"
          }]
        })
      }), isLoggedInUserHostAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        buttonStyle: "warningSecondary",
        mt: 2,
        onClick: function onClick() {
          setHasFreezeModal(true);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledSpan, {
          ml: 3,
          fontSize: "14px",
          lineHeight: "20px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "gX79wf",
            defaultMessage: [{
              "type": 0,
              "value": "Unfreeze Collective"
            }]
          })
        })
      }), hasFreezeModal && /*#__PURE__*/(0,jsx_runtime.jsx)(FreezeAccountModal/* default */.Z, {
        collective: collective,
        onClose: function onClose() {
          return setHasFreezeModal(false);
        }
      })]
    });
  } else if (LoggedInUser && LoggedInUser.isLimited) {
    // Limited user accounts
    return /*#__PURE__*/(0,jsx_runtime.jsx)(GlobalWarningContainer, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "warning.limitedAccount",
        defaultMessage: [{
          "type": 0,
          "value": "Your account is currently limited. If you think this is a mistake, please "
        }, {
          "type": 8,
          "value": "SupportLink",
          "children": [{
            "type": 0,
            "value": "contact support"
          }]
        }, {
          "type": 0,
          "value": "."
        }],
        values: I18nFormatters/* default */.ZP
      })
    });
  }

  return null;
};

GlobalWarnings.__docgenInfo = {
  "description": "Displays warnings related to the user account.",
  "methods": [],
  "displayName": "GlobalWarnings",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "host": {
            "name": "object",
            "required": false
          },
          "isFrozen": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_GlobalWarnings = (GlobalWarnings);

var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "GlobalWarnings___StyledSpan",
  componentId: "sc-1yr3f2-1"
})({
  verticalAlign: 'middle'
});
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/ChevronDown/ChevronDown.esm.js
var ChevronDown_esm = __webpack_require__(26955);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/ChevronUp/ChevronUp.esm.js
var ChevronUp_esm = __webpack_require__(64885);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Bars/Bars.esm.js
var Bars_esm = __webpack_require__(20249);
// EXTERNAL MODULE: ./lib/theme/index.ts + 1 modules
var theme = __webpack_require__(50529);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var graphql_tag_lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/withApollo.js + 1 modules
var withApollo = __webpack_require__(14573);
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./lib/constants/dismissable-help-message.js
var dismissable_help_message = __webpack_require__(31801);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/DismissibleMessage.js
var DismissibleMessage = __webpack_require__(94858);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/NewsAndUpdatesProvider.js
var NewsAndUpdatesProvider = __webpack_require__(77777);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Times/Times.esm.js
var Times_esm = __webpack_require__(74684);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(56562);
// EXTERNAL MODULE: ./components/StyledDropdown.js
var StyledDropdown = __webpack_require__(206);
// EXTERNAL MODULE: ./components/StyledLinkButton.js
var StyledLinkButton = __webpack_require__(67001);
;// CONCATENATED MODULE: ./components/changelog/ChangelogNotificationDropdown.js











var ChangeLogNotificationDropdownArrow = (0,styled_components_browser_esm/* default */.ZP)(StyledDropdown/* DropdownArrow */.Wi).withConfig({
  displayName: "ChangelogNotificationDropdown__ChangeLogNotificationDropdownArrow",
  componentId: "sc-11lwrsl-0"
})(["display:block;right:105px;margin-top:3px;&::before{border-color:transparent transparent #ffffc2 transparent;}@media screen and (max-width:40em){right:90px;top:55px;}"]);
var ChangeLogNotificationDropdownContent = (0,styled_components_browser_esm/* default */.ZP)(StyledDropdown/* DropdownContent */.Nv).withConfig({
  displayName: "ChangelogNotificationDropdown__ChangeLogNotificationDropdownContent",
  componentId: "sc-11lwrsl-1"
})(["display:block;right:100px;margin-top:10px;background:#ffffc2;@media screen and (max-width:40em){right:75px;top:55px;}"]);
var CloseIcon = (0,styled_components_browser_esm/* default */.ZP)(Times_esm/* Times */.u).withConfig({
  displayName: "ChangelogNotificationDropdown__CloseIcon",
  componentId: "sc-11lwrsl-2"
})(["font-size:12px;width:15px;height:15px;color:#76777a;cursor:pointer;"]);

var ChangelogNotificationDropdown = function ChangelogNotificationDropdown(_ref) {
  var onClose = _ref.onClose;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ChangeLogNotificationDropdownArrow, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(ChangeLogNotificationDropdownContent, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        as: "ul",
        p: 20,
        m: 0,
        minWidth: 184,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "14px",
            fontWeight: "700",
            color: "black.800",
            mb: 3,
            mr: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ChangelogNotification.firstLine",
              defaultMessage: [{
                "type": 0,
                "value": "We have new stuff for you!"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLinkButton/* default */.Z, {
            onClick: onClose,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseIcon, {
              onClick: onClose
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "14px",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "ChangelogNotification.secondLine",
            defaultMessage: [{
              "type": 0,
              "value": "Click on the "
            }, {
              "type": 1,
              "value": "image"
            }, {
              "type": 0,
              "value": " to take a look"
            }],
            values: {
              image: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
                src: "/static/images/flame-red.svg",
                width: 10.55,
                height: 15,
                alt: "Flame Image"
              })
            }
          })
        })]
      })
    })]
  });
};

ChangelogNotificationDropdown.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChangelogNotificationDropdown",
  "props": {
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var changelog_ChangelogNotificationDropdown = (ChangelogNotificationDropdown);
;// CONCATENATED MODULE: ./components/changelog/ChangelogTrigger.js



var _templateObject, _templateObject2;


















var FlameIcon = (0,styled_components_browser_esm/* default */.ZP)(StyledRoundButton/* default */.Z).withConfig({
  displayName: "ChangelogTrigger__FlameIcon",
  componentId: "sc-1qbynwp-0"
})(["border-radius:50%;height:", ";width:", ";margin-left:2px;&,&:active{background:", ";background-image:", ";background-repeat:no-repeat;background-position:center center;}&:active{background-color:transparent;}"], function (props) {
  return props.height || '40px';
}, function (props) {
  return props.width || '40px';
}, function (props) {
  return (0,index_esm/* themeGet */.R)(props.backgroundColor);
}, function (props) {
  return "url(".concat(props.url, ")");
});

var ChangelogTrigger = function ChangelogTrigger(props) {
  var height = props.height,
      width = props.width,
      backgroundSize = props.backgroundSize,
      setShowNewsAndUpdates = props.setShowNewsAndUpdates,
      setChangelogViewDate = props.setChangelogViewDate;

  var _useQuery = (0,client.useQuery)(loggedInUserQuery, {
    fetchPolicy: 'cache-only'
  }),
      data = _useQuery.data;

  var LoggedInUser = data === null || data === void 0 ? void 0 : data.LoggedInUser;
  var hasSeenNewUpdates = LoggedInUser === null || LoggedInUser === void 0 ? void 0 : LoggedInUser.hasSeenLatestChangelogEntry;

  var handleShowNewUpdates = function handleShowNewUpdates() {
    setShowNewsAndUpdates(true);
    setChangelogViewDate({
      variables: {
        changelogViewDate: new Date()
      },
      update: function update(store) {
        var data = cloneDeep_default()(store.readQuery({
          query: loggedInUserQuery
        }));

        data.LoggedInUser.hasSeenLatestChangelogEntry = true;
        store.writeQuery({
          query: loggedInUserQuery,
          data: data
        });
      }
    });
  };

  var TooltipContent = /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
    id: "ChangelogTrigger.tooltip.content",
    defaultMessage: [{
      "type": 0,
      "value": "What's new with Open Collective"
    }]
  });

  if (!LoggedInUser) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
    children: hasSeenNewUpdates ? /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
      content: TooltipContent,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(FlameIcon, {
        height: height,
        width: width,
        onClick: handleShowNewUpdates,
        backgroundColor: "black.100",
        backgroundSize: backgroundSize,
        url: "/static/images/flame-default.svg"
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FlameIcon, {
        height: height,
        width: width,
        onClick: handleShowNewUpdates,
        backgroundColor: "yellow.100",
        backgroundSize: backgroundSize,
        url: "/static/images/flame-red.svg"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(DismissibleMessage/* default */.Z, {
        messageId: dismissable_help_message/* HELP_MESSAGE.CHANGELOG_NOTIFICATION_DROPDOWN */.Zh.CHANGELOG_NOTIFICATION_DROPDOWN,
        children: function children(_ref) {
          var dismiss = _ref.dismiss;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(changelog_ChangelogNotificationDropdown, {
            onClose: dismiss
          });
        }
      })]
    })
  });
};

var setChangelogViewDateMutation = (0,graphql_tag_lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation SetChangelogViewDateMutation($changelogViewDate: DateTime!) {\n    setChangelogViewDate(changelogViewDate: $changelogViewDate) {\n      id\n      hasSeenLatestChangelogEntry\n    }\n  }\n"])));
var loggedInUserQuery = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query LoggedInUser {\n    LoggedInUser {\n      id\n      hasSeenLatestChangelogEntry\n    }\n  }\n"])));
var setChangelogViewDate = (0,graphql/* graphql */.B)(setChangelogViewDateMutation, {
  name: 'setChangelogViewDate',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
  }
});
ChangelogTrigger.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChangelogTrigger",
  "props": {
    "height": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "width": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "backgroundSize": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "setShowNewsAndUpdates": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "setChangelogViewDate": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "client": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "showDropdown": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var changelog_ChangelogTrigger = ((0,NewsAndUpdatesProvider/* withNewsAndUpdates */.kY)(setChangelogViewDate((0,withApollo/* withApollo */.C)(ChangelogTrigger))));
// EXTERNAL MODULE: ./components/Hide.js
var Hide = __webpack_require__(84582);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/PopupMenu.js
var PopupMenu = __webpack_require__(66152);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./components/SearchForm.js
var SearchForm = __webpack_require__(72427);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
;// CONCATENATED MODULE: ./components/Search.js









/*
 * A modal that appears on top of the page containing a search field.
 */




var SearchModal = function SearchModal(_ref) {
  var onClose = _ref.onClose;
  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* default */.ZP, {
    position: "absolute",
    top: 0,
    style: {
      borderRadius: 0
    },
    maxWidth: "100%",
    width: "100%",
    height: "128px",
    onClose: onClose,
    overflow: "hidden",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalBody */.fe, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        height: "48px",
        alignItems: "center",
        flexDirection: "column",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SearchForm/* default */.Z, {
            autoFocus: true,
            width: ['180px', '248px', '536px'],
            borderRadius: "100px",
            fontSize: "12px",
            placeholder: intl.formatMessage({
              id: "LOtm7B",
              defaultMessage: [{
                "type": 0,
                "value": "Search for Collectives, organizations, and more..."
              }]
            }),
            showSearchButton: true,
            searchButtonStyles: {
              width: '32px',
              height: '32px'
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
            mt: "12px",
            ml: ['10px', '25px'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLinkButton/* default */.Z, {
              onClick: onClose,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* CloseIcon */.Tw, {
                style: {
                  width: '14px',
                  height: '14px'
                }
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          pt: "16px",
          fontSize: "13px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
            as: Link/* default */.Z,
            href: "/search",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "home.discoverCollectives",
              defaultMessage: [{
                "type": 0,
                "value": "Discover Collectives"
              }]
            })
          })
        })]
      })
    })
  });
};

SearchModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SearchModal",
  "props": {
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var Search = (SearchModal);
// EXTERNAL MODULE: ./components/SearchIcon.js
var SearchIcon = __webpack_require__(84091);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Github/Github.esm.js
var Github_esm = __webpack_require__(44498);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Slack/Slack.esm.js
var Slack_esm = __webpack_require__(87222);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Twitter/Twitter.esm.js
var Twitter_esm = __webpack_require__(29139);
// EXTERNAL MODULE: ./node_modules/@styled-icons/icomoon/Blog/Blog.esm.js
var Blog_esm = __webpack_require__(75634);
// EXTERNAL MODULE: ./node_modules/@styled-icons/material/Mail/Mail.esm.js
var Mail_esm = __webpack_require__(91125);
// EXTERNAL MODULE: ./lib/hooks/useGlobalBlur.js
var useGlobalBlur = __webpack_require__(55348);
;// CONCATENATED MODULE: ./components/HideGlobalScroll.js

var HideGlobalScroll = (0,styled_components_browser_esm/* createGlobalStyle */.vJ)(["@media(max-width:40em){body{overflow:hidden;}}"]);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
;// CONCATENATED MODULE: ./components/TopBarMobileMenu.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var ListItem = styled_components_browser_esm/* default.li.withConfig */.ZP.li.withConfig({
  displayName: "TopBarMobileMenu__ListItem",
  componentId: "sc-patm22-0"
})(["list-style:none;font-family:Inter;font-style:normal;font-weight:500;font-size:15px;line-height:18px;padding-top:10px;cursor:pointer;a:not(:hover){color:#313233;}"]);
var SubListItem = (0,styled_components_browser_esm/* default */.ZP)(ListItem).withConfig({
  displayName: "TopBarMobileMenu__SubListItem",
  componentId: "sc-patm22-1"
})(["padding-bottom:10px;"]);

var TopBarMobileMenu = function TopBarMobileMenu(props) {
  var _React$useState = react.useState({
    viewSolutionsMenu: false,
    viewProductsMenu: false,
    viewCompanyMenu: false
  }),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var closeMenu = props.closeMenu;
  var innerRef = react.useRef();
  (0,useGlobalBlur/* default */.Z)(innerRef, function (isOutside) {
    if (isOutside) {
      closeMenu();
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(HideGlobalScroll, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      ref: innerRef,
      bg: "white.full",
      width: "100%",
      position: "absolute",
      right: [0, 0, 16],
      top: [69, 69, 75],
      p: 3,
      zIndex: 3000,
      borderRadius: "0px 0px 16px 16px",
      boxShadow: "0px 8px 12px rgba(20, 20, 20, 0.16)",
      "data-cy": "user-menu",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        as: "ul",
        my: 2,
        pl: 0,
        pb: "36px",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ListItem, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            justifyContent: "space-between",
            onClick: function onClick() {
              return setState(_objectSpread(_objectSpread({}, state), {}, {
                viewSolutionsMenu: !state.viewSolutionsMenu
              }));
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "asqGnV",
              defaultMessage: [{
                "type": 0,
                "value": "Solutions"
              }]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown_esm/* ChevronDown */._, {
              size: 20
            })]
          }), state.viewSolutionsMenu && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            as: "ul",
            my: 2,
            pl: "12px",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SubListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/collectives",
                onClick: closeMenu,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "pricing.forCollective",
                  defaultMessage: [{
                    "type": 0,
                    "value": "For Collectives"
                  }]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(SubListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/become-a-sponsor",
                onClick: closeMenu,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "CPlDGt",
                  defaultMessage: [{
                    "type": 0,
                    "value": "For Contributors"
                  }]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(SubListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/become-a-host",
                onClick: closeMenu,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "pricing.fiscalHost",
                  defaultMessage: [{
                    "type": 0,
                    "value": "For Fiscal Hosts"
                  }]
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(ListItem, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            justifyContent: "space-between",
            onClick: function onClick() {
              return setState(_objectSpread(_objectSpread({}, state), {}, {
                viewProductsMenu: !state.viewProductsMenu
              }));
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "ContributionType.Product",
              defaultMessage: [{
                "type": 0,
                "value": "Product"
              }]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown_esm/* ChevronDown */._, {
              size: 20
            })]
          }), state.viewProductsMenu && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            as: "ul",
            my: 2,
            pl: "12px",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SubListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/pricing",
                onClick: closeMenu,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "menu.pricing",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Pricing"
                  }]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(SubListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/how-it-works",
                onClick: closeMenu,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "menu.howItWorks",
                  defaultMessage: [{
                    "type": 0,
                    "value": "How it Works"
                  }]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(SubListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/fiscal-hosting",
                onClick: closeMenu,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "editCollective.fiscalHosting",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Fiscal Hosting"
                  }]
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(ListItem, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            justifyContent: "space-between",
            onClick: function onClick() {
              return setState(_objectSpread(_objectSpread({}, state), {}, {
                viewCompanyMenu: !state.viewCompanyMenu
              }));
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "company",
              defaultMessage: [{
                "type": 0,
                "value": "Company"
              }]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown_esm/* ChevronDown */._, {
              size: 20
            })]
          }), state.viewCompanyMenu && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            as: "ul",
            my: 2,
            pl: "12px",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SubListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                href: "https://blog.opencollective.com/",
                onClick: closeMenu,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "company.blog",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Blog"
                  }]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(SubListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/e2c",
                onClick: closeMenu,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "OC.e2c",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Exit to Community"
                  }]
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/help",
            onClick: closeMenu,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Uf3+S6",
              defaultMessage: [{
                "type": 0,
                "value": "Help & Support"
              }]
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        alignItems: "center",
        width: 1,
        p: 2,
        order: ['2', null, '3'],
        borderRadius: 16,
        background: "#F7F8FA",
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
          href: "https://blog.opencollective.com/",
          openInNewTab: true,
          onClick: closeMenu,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
            size: 40,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Blog_esm/* Blog */.l, {
              size: 17,
              color: "#9D9FA3"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
          href: "https://twitter.com/opencollect",
          openInNewTab: true,
          onClick: closeMenu,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
            size: 40,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Twitter_esm/* Twitter */.t, {
              size: 17,
              color: "#9D9FA3"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
          href: "https://github.com/opencollective",
          openInNewTab: true,
          onClick: closeMenu,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
            size: 40,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Github_esm/* Github */.E, {
              size: 17,
              color: "#9D9FA3"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
          href: "https://slack.opencollective.com",
          openInNewTab: true,
          onClick: closeMenu,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
            size: 40,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Slack_esm/* Slack */.j, {
              size: 17,
              color: "#9D9FA3"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
          href: "mailto:info@opencollective.com",
          openInNewTab: true,
          onClick: closeMenu,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
            size: 40,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Mail_esm/* Mail */.M, {
              size: 19,
              color: "#9D9FA3"
            })
          })
        })]
      })]
    })]
  });
};

TopBarMobileMenu.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TopBarMobileMenu",
  "props": {
    "showMobileMenu": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "closeMenu": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_TopBarMobileMenu = ((0,injectIntl/* default */.ZP)((0,UserProvider/* withUser */.ns)(TopBarMobileMenu)));
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/components/Query.js
var Query = __webpack_require__(75412);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/ChevronRight/ChevronRight.esm.js
var ChevronRight_esm = __webpack_require__(69602);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/Exit/Exit.esm.js
var Exit_esm = __webpack_require__(15688);
// EXTERNAL MODULE: ./lib/local-storage.ts
var local_storage = __webpack_require__(35427);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/ListItem.js
var components_ListItem = __webpack_require__(95134);
// EXTERNAL MODULE: ./components/LoginBtn.js
var LoginBtn = __webpack_require__(22777);
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__(45578);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(7739);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/Plus/Plus.esm.js
var Plus_esm = __webpack_require__(67273);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Settings/Settings.esm.js
var Settings_esm = __webpack_require__(22236);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/events.js
var events = __webpack_require__(47162);
// EXTERNAL MODULE: ./components/Collapse.tsx
var Collapse = __webpack_require__(90175);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
;// CONCATENATED MODULE: ./components/ProfileMenuMemberships.js





var _MENU_SECTIONS;






















var CollectiveListItem = (0,styled_components_browser_esm/* default */.ZP)(components_ListItem/* default */.Z).withConfig({
  displayName: "ProfileMenuMemberships__CollectiveListItem",
  componentId: "sc-1mg7c3f-0"
})(["@media (hover:hover){:hover svg{opacity:1;}}@media (hover:none){svg{opacity:1;}}"]);

var MembershipLine = function MembershipLine(_ref) {
  var user = _ref.user,
      membership = _ref.membership;
  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(CollectiveListItem, {
    py: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
      href: "/".concat(membership.collective.slug),
      title: membership.collective.name,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
          collective: membership.collective,
          radius: "32px",
          mr: "12px"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          maxWidth: "150px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
            color: "black.800",
            truncateOverflow: true,
            children: membership.collective.name
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
            fontSize: "12px",
            lineHeight: "18px",
            truncateOverflow: true,
            color: "black.700",
            children: ["@", membership.collective.slug]
          })]
        })]
      })
    }), Boolean(user === null || user === void 0 ? void 0 : user.canSeeAdminPanel(membership.collective)) && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
      as: Link/* default */.Z,
      href: (0,url_helpers/* getSettingsRoute */.aT)(membership.collective),
      ml: 1,
      color: "black.500",
      title: intl.formatMessage({
        id: "AdminPanel.button",
        defaultMessage: [{
          "type": 0,
          "value": "Admin"
        }]
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Settings_esm/* Settings */.Z, {
        opacity: "0",
        size: "1.2em"
      })
    })]
  });
};

var sortMemberships = function sortMemberships(memberships) {
  if (!(memberships !== null && memberships !== void 0 && memberships.length)) {
    return [];
  } else {
    return memberships.sort(function (a, b) {
      return a.collective.slug.localeCompare(b.collective.slug);
    });
  }
};

var filterArchivedMemberships = function filterArchivedMemberships(memberships) {
  var archivedMemberships = memberships.filter(function (m) {
    if (m.role !== 'BACKER' && m.collective.isArchived && !(m.collective.type === 'EVENT' && (0,events/* isPastEvent */.Up)(m.collective))) {
      return true;
    } else {
      return false;
    }
  });
  return uniqBy_default()(archivedMemberships, function (m) {
    return m.collective.id;
  });
};

var filterMemberships = function filterMemberships(memberships) {
  var filteredMemberships = memberships.filter(function (m) {
    if (m.role === 'BACKER' || m.collective.isArchived) {
      return false;
    } else if (m.collective.type === 'EVENT' && (0,events/* isPastEvent */.Up)(m.collective)) {
      return false;
    } else {
      return Boolean(m.collective);
    }
  });
  return uniqBy_default()(filteredMemberships, function (m) {
    return m.collective.id;
  });
};

var MembershipsList = function MembershipsList(_ref2) {
  var user = _ref2.user,
      memberships = _ref2.memberships;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
    as: "ul",
    p: 0,
    my: 2,
    children: sortMemberships(memberships).map(function (member) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(MembershipLine, {
        membership: member,
        user: user
      }, member.id);
    })
  });
};

/**
 * Keys must be collective types, as they're used to filter the `groupedMemberships`.
 * The order of the keys in this object defines order in the menu.
 *
 * Properties:
 * - title: i18n string for the title
 * - emptyMessage: (optional) i18n string for the message when there are no memberships. If not provided, the section will not be shown.
 * - plusButton: (optional) properties to display a (+) button next to the title
 *  - href: link to the page to open when the button is clicked
 *  - text: i18n alt string for the button (accessibility)
 */
var MENU_SECTIONS = (_MENU_SECTIONS = {}, defineProperty_default()(_MENU_SECTIONS, collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE, {
  title: (0,lib.defineMessage)({
    id: "collective",
    defaultMessage: [{
      "type": 0,
      "value": "My Collectives"
    }]
  }),
  emptyMessage: (0,lib.defineMessage)({
    id: "MZB6HL",
    defaultMessage: [{
      "type": 0,
      "value": "Create a collective to collect and spend money transparently"
    }]
  }),
  plusButton: {
    text: (0,lib.defineMessage)({
      id: "home.create",
      defaultMessage: [{
        "type": 0,
        "value": "Create a Collective"
      }]
    }),
    href: '/create'
  }
}), defineProperty_default()(_MENU_SECTIONS, collectives/* CollectiveType.EVENT */.eV.EVENT, {
  title: (0,lib.defineMessage)({
    id: "events",
    defaultMessage: [{
      "type": 0,
      "value": "My Events"
    }]
  })
}), defineProperty_default()(_MENU_SECTIONS, collectives/* CollectiveType.FUND */.eV.FUND, {
  title: (0,lib.defineMessage)({
    id: "funds",
    defaultMessage: [{
      "type": 0,
      "value": "My Funds"
    }]
  }),
  plusButton: {
    text: (0,lib.defineMessage)({
      id: "createFund.create",
      defaultMessage: [{
        "type": 0,
        "value": "Create a Fund"
      }]
    }),
    href: '/fund/create'
  }
}), defineProperty_default()(_MENU_SECTIONS, collectives/* CollectiveType.ORGANIZATION */.eV.ORGANIZATION, {
  title: (0,lib.defineMessage)({
    id: "organization",
    defaultMessage: [{
      "type": 0,
      "value": "My Organizations"
    }]
  }),
  emptyMessage: (0,lib.defineMessage)({
    id: "CBITv6",
    defaultMessage: [{
      "type": 0,
      "value": "A profile representing a company or organization instead of an individual"
    }]
  }),
  plusButton: {
    text: (0,lib.defineMessage)({
      id: "host.organization.create",
      defaultMessage: [{
        "type": 0,
        "value": "Create an Organization"
      }]
    }),
    href: '/organizations/new'
  }
}), defineProperty_default()(_MENU_SECTIONS, "ARCHIVED", {
  title: (0,lib.defineMessage)({
    id: "Archived",
    defaultMessage: [{
      "type": 0,
      "value": "Archived"
    }]
  })
}), _MENU_SECTIONS);

var MenuSectionHeader = function MenuSectionHeader(_ref3) {
  var section = _ref3.section,
      hidePlusIcon = _ref3.hidePlusIcon;
  var intl = (0,useIntl/* default */.Z)();
  var _MENU_SECTIONS$sectio = MENU_SECTIONS[section],
      title = _MENU_SECTIONS$sectio.title,
      plusButton = _MENU_SECTIONS$sectio.plusButton;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    alignItems: "center",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      color: "black.700",
      fontSize: "12px",
      fontWeight: "500",
      letterSpacing: "0.06em",
      pr: 2,
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      children: intl.formatMessage(title)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
      flex: "1",
      borderStyle: "solid",
      borderColor: "#DCDEE0"
    }), Boolean(!hidePlusIcon && plusButton) && /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
      href: plusButton.href,
      title: intl.formatMessage(plusButton.text),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledRoundButton/* default */.Z, {
        ml: 2,
        size: 24,
        color: "#C4C7CC",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Plus_esm/* Plus */.v, {
          size: 12,
          color: "#76777A"
        })
      })
    })]
  });
};

var ProfileMenuMemberships = function ProfileMenuMemberships(_ref4) {
  var user = _ref4.user;
  var intl = (0,useIntl/* default */.Z)();
  var memberships = filterMemberships(user.memberOf);
  var archivedMemberships = filterArchivedMemberships(user.memberOf);

  var groupedMemberships = groupBy_default()(memberships, function (m) {
    return m.collective.type;
  });

  groupedMemberships.ARCHIVED = archivedMemberships;

  var hasNoMemberships = isEmpty_default()(memberships);

  var shouldDisplaySection = function shouldDisplaySection(section) {
    return MENU_SECTIONS[section].emptyMessage || !isEmpty_default()(groupedMemberships[section]);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [hasNoMemberships && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      color: "blue.900",
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "bold",
      mt: "8px",
      mb: "12px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "ProfileMenuMemberships.Empty",
        defaultMessage: [{
          "type": 0,
          "value": "Make the most out of Open Collective"
        }]
      })
    }), Object.keys(MENU_SECTIONS).filter(shouldDisplaySection).map(function (accountType) {
      var memberships = groupedMemberships[accountType];

      var sectionIsEmpty = isEmpty_default()(memberships);

      var sectionData = MENU_SECTIONS[accountType];
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        mb: 3,
        children: [accountType !== 'ARCHIVED' && /*#__PURE__*/(0,jsx_runtime.jsx)(MenuSectionHeader, {
          section: accountType,
          hidePlusIcon: sectionIsEmpty
        }), sectionIsEmpty ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          my: 2,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "12px",
            lineHeight: "18px",
            color: "black.700",
            children: intl.formatMessage(sectionData.emptyMessage)
          }), Boolean(sectionData.plusButton) && /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: sectionData.plusButton.href,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              mt: "12px",
              mb: "16px",
              borderRadius: "8px",
              width: "100%",
              fontSize: "12px",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                alignItems: "center",
                justifyContent: "center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  border: "1px solid #C4C7CC",
                  mr: "16px",
                  size: "24px",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Plus_esm/* Plus */.v, {
                    size: 12
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: intl.formatMessage(sectionData.plusButton.text)
                })]
              })
            })
          })]
        }) : accountType === 'ARCHIVED' ? /*#__PURE__*/(0,jsx_runtime.jsx)(Collapse/* default */.Z, {
          defaultIsOpen: false,
          title: /*#__PURE__*/(0,jsx_runtime.jsx)(MenuSectionHeader, {
            section: accountType,
            hidePlusIcon: sectionIsEmpty
          }),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(MembershipsList, {
            memberships: memberships,
            user: user
          })
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(MembershipsList, {
          memberships: memberships,
          user: user
        })]
      }, accountType);
    }), hasNoMemberships && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      textAlign: "center",
      mb: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        as: Link/* default */.Z,
        href: "/search",
        color: "blue.900",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "WM71Ho",
          defaultMessage: [{
            "type": 0,
            "value": "Discover Collectives to Support"
          }]
        })
      })
    })]
  });
};

ProfileMenuMemberships.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ProfileMenuMemberships",
  "props": {
    "user": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "memberOf": {
            "name": "arrayOf",
            "value": {
              "name": "object"
            },
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_ProfileMenuMemberships = (/*#__PURE__*/react.memo(ProfileMenuMemberships));
;// CONCATENATED MODULE: ./components/TopBarProfileMenu.js












var TopBarProfileMenu_templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function TopBarProfileMenu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function TopBarProfileMenu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TopBarProfileMenu_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TopBarProfileMenu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






























var memberInvitationsCountQuery = (0,graphql_tag_lib/* default */.ZP)(TopBarProfileMenu_templateObject || (TopBarProfileMenu_templateObject = taggedTemplateLiteral_default()(["\n  query MemberInvitationsCount($memberAccount: AccountReferenceInput!) {\n    memberInvitations(memberAccount: $memberAccount) {\n      id\n    }\n  }\n"])));
var ViewProfileLink = (0,styled_components_browser_esm/* default */.ZP)(StyledLink/* default */.Z).withConfig({
  displayName: "TopBarProfileMenu__ViewProfileLink",
  componentId: "sc-1qfcvou-0"
})(["&:hover{background-color:white;border-color:black;color:black;}"]);
var StyledProfileButton = (0,styled_components_browser_esm/* default */.ZP)(StyledButton/* default */.Z).withConfig({
  displayName: "TopBarProfileMenu__StyledProfileButton",
  componentId: "sc-1qfcvou-1"
})(["padding:0;background-color:white !important;"]);

var UserMenuLinkEntry = function UserMenuLinkEntry(props) {
  var isMobileMenuLink = props.isMobileMenuLink;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_ListItem/* default */.Z, {
    mb: "6px",
    py: isMobileMenuLink ? '2' : '0',
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, TopBarProfileMenu_objectSpread({
      as: Link/* default */.Z,
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      color: "black.800"
    }, props)), isMobileMenuLink && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
      mt: 2,
      borderStyle: "solid",
      borderColor: "rgba(49, 50, 51, 0.1)"
    })]
  });
};

var UserAccountLinks = function UserAccountLinks(_ref) {
  var setShowNewsAndUpdates = _ref.setShowNewsAndUpdates,
      LoggedInUser = _ref.LoggedInUser,
      isMobileView = _ref.isMobileView,
      logOutHandler = _ref.logOutHandler;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserMenuLinkEntry, {
      as: Text/* Span */.Dr,
      isMobileMenuLink: isMobileView,
      onClick: function onClick() {
        return setShowNewsAndUpdates(true);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "menu.newsAndUpdates",
        defaultMessage: [{
          "type": 0,
          "value": "News and Updates"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Query/* Query */.A, {
      query: memberInvitationsCountQuery,
      variables: {
        memberAccount: {
          slug: LoggedInUser.collective.slug
        }
      },
      context: helpers/* API_V2_CONTEXT */.T,
      children: function children(_ref2) {
        var data = _ref2.data,
            loading = _ref2.loading;
        return loading === false && data && data.memberInvitations && data.memberInvitations.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(UserMenuLinkEntry, {
          isMobileMenuLink: isMobileView,
          href: "/member-invitations",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "menu.pendingInvitations",
            defaultMessage: [{
              "type": 0,
              "value": "Pending Invitations ("
            }, {
              "type": 1,
              "value": "numberOfInvitations"
            }, {
              "type": 0,
              "value": ")"
            }],
            values: {
              numberOfInvitations: data.memberInvitations.length
            }
          })
        }) : null;
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: (0,url_helpers/* getSettingsRoute */.aT)(LoggedInUser.collective),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "Settings",
        defaultMessage: [{
          "type": 0,
          "value": "Settings"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: "/".concat(LoggedInUser.collective.slug, "/manage-contributions"),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "menu.subscriptions",
        defaultMessage: [{
          "type": 0,
          "value": "Manage Contributions"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: "/".concat(LoggedInUser.collective.slug, "/submitted-expenses"),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "home.feature.manageExpenses",
        defaultMessage: [{
          "type": 0,
          "value": "Manage Expenses"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: "/".concat(LoggedInUser.collective.slug, "/transactions"),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "menu.transactions",
        defaultMessage: [{
          "type": 0,
          "value": "Transactions"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: "/applications",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "menu.applications",
        defaultMessage: [{
          "type": 0,
          "value": "Applications"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      as: "a",
      href: "/help",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "menu.help",
        defaultMessage: [{
          "type": 0,
          "value": "Help"
        }]
      })
    }), LoggedInUser.isRoot && /*#__PURE__*/(0,jsx_runtime.jsx)(UserMenuLinkEntry, {
      isMobileMenuLink: isMobileView,
      href: "/opencollective/root-actions",
      children: "Root Actions"
    }), isMobileView ? /*#__PURE__*/(0,jsx_runtime.jsx)(UserMenuLinkEntry, {
      profileMenuLink: true,
      as: "a",
      "data-cy": "logout",
      onClick: logOutHandler,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          color: "#7A0F2B",
          fontWeight: "500",
          pr: 2,
          whiteSpace: "nowrap",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "menu.logout",
            defaultMessage: [{
              "type": 0,
              "value": "Log out"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Exit_esm/* Exit */.n, {
          size: 13,
          color: "#7A0F2B"
        })]
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(UserMenuLinkEntry, {
      as: "a",
      "data-cy": "logout",
      onClick: logOutHandler,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "menu.logout",
        defaultMessage: [{
          "type": 0,
          "value": "Log out"
        }]
      }), " \u2192"]
    })]
  });
};

var TopBarProfileMenu = /*#__PURE__*/function (_React$Component) {
  inherits_default()(TopBarProfileMenu, _React$Component);

  var _super = _createSuper(TopBarProfileMenu);

  function TopBarProfileMenu(props) {
    var _this;

    classCallCheck_default()(this, TopBarProfileMenu);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "handleKeyPress", function (event) {
      var key = event.key,
          keyCode = event.keyCode;

      if (key === 'Escape' || key === 'Esc' || keyCode === 27) {
        _this.setState({
          showProfileMenu: false,
          showUserAccount: false
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "logout", function () {
      _this.setState({
        showProfileMenu: false,
        showUserAccount: false,
        status: 'loggingout'
      });

      _this.props.logout();

      _this.setState({
        status: 'loggedout'
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onClickOutside", function () {
      _this.setState({
        showProfileMenu: false,
        showUserAccount: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleProfileMenu", function (e) {
      _this.setState(function (state) {
        return {
          showProfileMenu: !state.showProfileMenu,
          showUserAccount: false
        };
      }); // don't propagate to onClickOutside


      e.nativeEvent.stopImmediatePropagation();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleAccountInfo", function (e) {
      _this.setState(function (state) {
        return {
          showUserAccount: !state.showUserAccount
        };
      });

      e.stopPropagation();
    });

    _this.state = {
      showProfileMenu: false,
      loading: true,
      showUserAccount: false
    };
    return _this;
  }

  createClass_default()(TopBarProfileMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var main = document.querySelector('main');
      main.addEventListener('keydown', this.handleKeyPress);
      main.addEventListener('click', this.onClickOutside);

      if (!(0,local_storage/* getFromLocalStorage */.fp)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN)) {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.LoggedInUser && this.props.LoggedInUser) {
        this.setState({
          status: 'loggedin'
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var main = document.querySelector('main');
      main.removeEventListener('click', this.onClickOutside);
      main.removeEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "renderProfileMenu",
    value: function renderProfileMenu() {
      var _this$props = this.props,
          LoggedInUser = _this$props.LoggedInUser,
          setShowNewsAndUpdates = _this$props.setShowNewsAndUpdates;
      var showUserAccount = this.state.showUserAccount;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledContainer, {
        bg: "white.full",
        border: ['none', '1px solid rgba(18,19,20,0.12)'],
        borderRadius: [0, 12],
        boxShadow: "0 4px 8px 0 rgba(61,82,102,0.08)",
        minWidth: "170px",
        maxWidth: "560px",
        width: "100%",
        position: "absolute",
        right: [0, 16],
        top: [69, 75],
        zIndex: 3000,
        "data-cy": "user-menu",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: ['column', 'row'],
          maxHeight: ['calc(100vh - 68px)', '100%'],
          children: [showUserAccount && /*#__PURE__*/(0,jsx_runtime.jsx)(Hide/* default */.ZP, {
            lg: true,
            md: true,
            sm: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              px: 3,
              mx: 2,
              mb: 0,
              mt: 3,
              onClick: this.toggleAccountInfo,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                alignItems: "center",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
                  color: "black.700",
                  fontSize: "12px",
                  fontWeight: "500",
                  letterSpacing: "0.06em",
                  pr: 2,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  onClick: this.toggleAccountInfo,
                  children: ["\u2190 ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Back",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Back"
                    }]
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                py: 3,
                mt: 1,
                alignItems: "center",
                justifyContent: "space-between",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
                    collective: LoggedInUser.collective,
                    radius: 40,
                    mr: 2
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                      color: "black.800",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "20px",
                      children: LoggedInUser.collective.name
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                      mt: "2px",
                      wordBreak: "break-all",
                      color: "black.700",
                      fontSize: "13px",
                      children: LoggedInUser.email
                    })]
                  })]
                })
              })]
            })
          }), !showUserAccount ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              order: [2, 1],
              flex: "10 1 50%",
              width: [1, 1, 1 / 2],
              p: 3,
              display: ['none', 'flex'],
              bg: "#F7F8FA",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Hide/* default */.ZP, {
                xs: true,
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.Z, {
                  href: "/".concat(LoggedInUser.collective.slug),
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
                    collective: LoggedInUser.collective,
                    radius: 56,
                    mr: 2
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                    mt: 2,
                    color: "black.800",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    children: LoggedInUser.collective.name
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                  mt: "2px",
                  wordBreak: "break-all",
                  color: "black.700",
                  fontSize: "13px",
                  children: LoggedInUser.email
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                  mb: 4,
                  mt: 3,
                  color: "black.800",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(ViewProfileLink, {
                    as: Link/* default */.Z,
                    buttonSize: "tiny",
                    buttonStyle: "standard",
                    href: "/".concat(LoggedInUser.collective.slug),
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TopBarProfileMenu_StyledSpan, {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "Jkxa7F",
                        defaultMessage: [{
                          "type": 0,
                          "value": "View Profile"
                        }]
                      })
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                  color: "black.900",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "menu.myAccount",
                    defaultMessage: [{
                      "type": 0,
                      "value": "My account"
                    }]
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  as: "ul",
                  p: 0,
                  my: 2,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(UserAccountLinks, {
                    isMobileView: false,
                    LoggedInUser: LoggedInUser,
                    setShowNewsAndUpdates: setShowNewsAndUpdates,
                    logOutHandler: this.logout
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              order: [1, 2],
              flex: "1 1 50%",
              minWidth: "296px",
              width: [1, 1, 1 / 2],
              p: [1, 3],
              maxHeight: ['100%', '450px'],
              overflowY: ['hidden', 'auto'],
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Hide/* default */.ZP, {
                lg: true,
                md: true,
                sm: true,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                  height: "90vh",
                  p: 3,
                  overflowY: "auto",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                    alignItems: "center",
                    children: showUserAccount ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
                      color: "black.700",
                      fontSize: "12px",
                      fontWeight: "500",
                      letterSpacing: "0.06em",
                      pr: 2,
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      onClick: this.toggleAccountInfo,
                      children: ["\u2190 ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "Back",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Back"
                        }]
                      })]
                    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                        color: "black.700",
                        fontSize: "12px",
                        fontWeight: "500",
                        letterSpacing: "0.06em",
                        pr: 2,
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "menu.myAccount",
                          defaultMessage: [{
                            "type": 0,
                            "value": "My account"
                          }]
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
                        flex: "1",
                        borderStyle: "solid",
                        borderColor: "#DCDEE0"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                    py: 3,
                    pb: 2,
                    my: 3,
                    alignItems: "center",
                    justifyContent: "space-between",
                    onClick: this.toggleAccountInfo,
                    style: {
                      cursor: 'pointer'
                    },
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                      position: "relative",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
                        collective: LoggedInUser.collective,
                        radius: 40,
                        mr: 2
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                          color: "black.800",
                          fontWeight: "500",
                          fontSize: "14px",
                          lineHeight: "20px",
                          children: LoggedInUser.collective.name
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                          mt: "2px",
                          wordBreak: "break-all",
                          color: "black.700",
                          fontSize: "13px",
                          children: LoggedInUser.email
                        })]
                      })]
                    }), !showUserAccount ? /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronRight_esm/* ChevronRight */._, {
                      size: 20,
                      color: "#76777A"
                    }) : '']
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_ProfileMenuMemberships, {
                    user: LoggedInUser
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Hide/* default */.ZP, {
                xs: true,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_ProfileMenuMemberships, {
                  user: LoggedInUser
                })
              })]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Hide/* default */.ZP, {
            sm: true,
            md: true,
            lg: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              height: "100vh",
              mt: 0,
              mx: 3,
              as: "ul",
              px: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(UserAccountLinks, {
                isMobileView: true,
                LoggedInUser: LoggedInUser,
                setShowNewsAndUpdates: setShowNewsAndUpdates,
                logOutHandler: this.logout
              })
            })
          })]
        })
      });
    }
  }, {
    key: "renderLoggedInUser",
    value: function renderLoggedInUser() {
      var showProfileMenu = this.state.showProfileMenu;
      var LoggedInUser = this.props.LoggedInUser;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledProfileButton, {
          isBorderless: true,
          onClick: this.toggleProfileMenu,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            "data-cy": "user-menu-trigger",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
              collective: get_default()(LoggedInUser, 'collective'),
              radius: "40px",
              mr: 2
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Hide/* default */.ZP, {
              xs: true,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown_esm/* ChevronDown */._, {
                color: "#4E5052",
                size: "1.5em",
                cursor: "pointer"
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Hide/* default */.ZP, {
          sm: true,
          md: true,
          lg: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            position: "absolute",
            mx: 27,
            my: -47,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(changelog_ChangelogTrigger, {
              height: "24px",
              width: "24px",
              backgroundSize: "9.49px 13.5px"
            })
          })
        }), showProfileMenu && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(HideGlobalScroll, {}), this.renderProfileMenu()]
        })]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      var _this$props2 = this.props,
          LoggedInUser = _this$props2.LoggedInUser,
          loadingLoggedInUser = _this$props2.loadingLoggedInUser;
      var status;

      if (this.state.status) {
        status = this.state.status;
      } else if ((loading || loadingLoggedInUser) && typeof LoggedInUser === 'undefined') {
        status = 'loading';
      } else if (!LoggedInUser) {
        status = 'loggedout';
      } else {
        status = 'loggedin';
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "LoginTopBarProfileButton",
        children: [status === 'loading' && /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
          color: "#D5DAE0",
          fontSize: "1.4rem",
          px: 3,
          py: 2,
          display: "inline-block",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "loading",
            defaultMessage: [{
              "type": 0,
              "value": "loading"
            }]
          }), "\u2026"]
        }), status === 'loggingout' && /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
          color: "#D5DAE0",
          fontSize: "1.4rem",
          px: 3,
          py: 2,
          display: "inline-block",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "loggingout",
            defaultMessage: [{
              "type": 0,
              "value": "logging out"
            }]
          }), "\u2026"]
        }), status === 'loggedout' && /*#__PURE__*/(0,jsx_runtime.jsx)(LoginBtn/* default */.Z, {}), status === 'loggedin' && this.renderLoggedInUser()]
      });
    }
  }]);

  return TopBarProfileMenu;
}(react.Component);

TopBarProfileMenu.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleKeyPress",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }, {
    "name": "logout",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onClickOutside",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "toggleProfileMenu",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "toggleAccountInfo",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderProfileMenu",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderLoggedInUser",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "TopBarProfileMenu",
  "props": {
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "logout": {
      "description": "",
      "type": {
        "name": "func"
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
    "setShowNewsAndUpdates": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_TopBarProfileMenu = ((0,NewsAndUpdatesProvider/* withNewsAndUpdates */.kY)((0,UserProvider/* withUser */.ns)(TopBarProfileMenu)));

var _StyledContainer = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "TopBarProfileMenu___StyledContainer",
  componentId: "sc-1qfcvou-2"
})({
  overflow: 'hidden'
});

var TopBarProfileMenu_StyledSpan = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "TopBarProfileMenu___StyledSpan",
  componentId: "sc-1qfcvou-3"
})({
  verticalAlign: 'middle'
});
;// CONCATENATED MODULE: ./components/TopBar.js


























var NavList = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "TopBar__NavList",
  componentId: "sc-zm70wo-0"
})(["list-style:none;min-width:20rem;text-align:right;align-items:center;"]);

var _StyledNavList = (0,styled_components_browser_esm/* default */.ZP)(NavList).withConfig({
  displayName: "TopBar___StyledNavList",
  componentId: "sc-zm70wo-1"
})(["margin:0;"]);

var NavLinkContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "TopBar__NavLinkContainer",
  componentId: "sc-zm70wo-2"
})(["text-align:center;width:140px;"]);
var NavButton = (0,styled_components_browser_esm/* default */.ZP)(StyledButton/* default */.Z).withConfig({
  displayName: "TopBar__NavButton",
  componentId: "sc-zm70wo-3"
})(["color:#323334;font-weight:500;font-size:16px;padding:10px;cursor:pointer;@media (hover:hover){:hover{background-color:white !important;}}:focus{background-color:white;border-radius:1px;}:active{color:black;}"]);
var NavItem = (0,styled_components_browser_esm/* default */.ZP)(StyledLink/* default */.Z).withConfig({
  displayName: "TopBar__NavItem",
  componentId: "sc-zm70wo-4"
})(["color:#323334;font-weight:500;font-size:14px;@media (hover:hover){:hover{text-decoration:underline;}}"]);

var TopBar = function TopBar(_ref) {
  var showSearch = _ref.showSearch,
      menuItems = _ref.menuItems,
      showProfileAndChangelogMenu = _ref.showProfileAndChangelogMenu;

  var _useState = (0,react.useState)(false),
      showMobileMenu = _useState[0],
      setShowMobileMenu = _useState[1];

  var _useState2 = (0,react.useState)(false),
      showSearchModal = _useState2[0],
      setShowSearchModal = _useState2[1];

  var ref = (0,react.useRef)(); // We debounce this function to avoid conflicts between the menu button and TopBarMobileMenu useGlobalBlur hook.

  var debouncedSetShowMobileMenu = debounce_default()(setShowMobileMenu);

  var toggleMobileMenu = function toggleMobileMenu() {
    debouncedSetShowMobileMenu(function (state) {
      return !state;
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(_StyledFlex, {
    px: 3,
    py: showSearch ? 2 : 3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    ref: ref,
    $_css: theme/* default.sizes.navbarHeight */.Z.sizes.navbarHeight,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
      href: "/",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
          width: "36",
          height: "36",
          src: "/static/images/opencollective-icon.png",
          alt: "Open Collective"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Hide/* default */.ZP, {
          xs: true,
          sm: true,
          md: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mx: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
              height: 21,
              width: 141,
              src: "/static/images/logotype.svg",
              alt: "Open Collective"
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      alignItems: "center",
      justifyContent: ['flex-end', 'flex-end', 'center'],
      flex: "1 1 auto",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Hide/* default */.ZP, {
        xs: true,
        sm: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(_StyledNavList, {
          as: "ul",
          p: 0,
          m: 0,
          justifyContent: "space-around",
          children: [menuItems.solutions && /*#__PURE__*/(0,jsx_runtime.jsx)(PopupMenu/* default */.Z, {
            zIndex: 2000,
            closingEvents: ['focusin', 'mouseover'],
            Button: function Button(_ref2) {
              var onMouseOver = _ref2.onMouseOver,
                  onClick = _ref2.onClick,
                  popupOpen = _ref2.popupOpen,
                  onFocus = _ref2.onFocus;
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(NavButton, {
                isBorderless: true,
                onMouseOver: onMouseOver,
                onFocus: onFocus,
                onClick: onClick,
                whiteSpace: "nowrap",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "asqGnV",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Solutions"
                  }]
                }), popupOpen ? /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronUp_esm/* ChevronUp */.K, {
                  size: 20
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown_esm/* ChevronDown */._, {
                  size: 20
                })]
              });
            },
            placement: "bottom",
            popupMarginTop: "-10px",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLinkContainer, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/collectives",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem, {
                  as: Container/* default */.Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "pricing.forCollective",
                    defaultMessage: [{
                      "type": 0,
                      "value": "For Collectives"
                    }]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/become-a-sponsor",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem, {
                  as: Container/* default */.Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "1rESHf",
                    defaultMessage: [{
                      "type": 0,
                      "value": "For Sponsors"
                    }]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/become-a-host",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem, {
                  as: Container/* default */.Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "pricing.fiscalHost",
                    defaultMessage: [{
                      "type": 0,
                      "value": "For Fiscal Hosts"
                    }]
                  })
                })
              })]
            })
          }), menuItems.product && /*#__PURE__*/(0,jsx_runtime.jsx)(PopupMenu/* default */.Z, {
            zIndex: 2000,
            closingEvents: ['focusin', 'mouseover'],
            Button: function Button(_ref3) {
              var onClick = _ref3.onClick,
                  onMouseOver = _ref3.onMouseOver,
                  popupOpen = _ref3.popupOpen,
                  onFocus = _ref3.onFocus;
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(NavButton, {
                isBorderless: true,
                onMouseOver: onMouseOver,
                onFocus: onFocus,
                onClick: onClick,
                whiteSpace: "nowrap",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "ContributionType.Product",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Product"
                  }]
                }), popupOpen ? /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronUp_esm/* ChevronUp */.K, {
                  size: 20
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown_esm/* ChevronDown */._, {
                  size: 20
                })]
              });
            },
            placement: "bottom",
            popupMarginTop: "-10px",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLinkContainer, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/pricing",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem, {
                  as: Container/* default */.Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "menu.pricing",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Pricing"
                    }]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/how-it-works",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem, {
                  as: Container/* default */.Z,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "menu.howItWorks",
                    defaultMessage: [{
                      "type": 0,
                      "value": "How it Works"
                    }]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/fiscal-hosting",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem, {
                  as: Container/* default */.Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "editCollective.fiscalHosting",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Fiscal Hosting"
                    }]
                  })
                })
              })]
            })
          }), menuItems.company && /*#__PURE__*/(0,jsx_runtime.jsx)(PopupMenu/* default */.Z, {
            zIndex: 2000,
            closingEvents: ['focusin', 'mouseover'],
            Button: function Button(_ref4) {
              var onClick = _ref4.onClick,
                  onMouseOver = _ref4.onMouseOver,
                  popupOpen = _ref4.popupOpen,
                  onFocus = _ref4.onFocus;
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(NavButton, {
                isBorderless: true,
                onMouseOver: onMouseOver,
                onFocus: onFocus,
                onClick: onClick,
                whiteSpace: "nowrap",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "company",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Company"
                  }]
                }), popupOpen ? /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronUp_esm/* ChevronUp */.K, {
                  size: 20
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown_esm/* ChevronDown */._, {
                  size: 20
                })]
              });
            },
            placement: "bottom",
            popupMarginTop: "-10px",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLinkContainer, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                href: "https://blog.opencollective.com/",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem, {
                  as: Container/* default */.Z,
                  mt: 16,
                  mb: 16,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "company.blog",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Blog"
                    }]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: "/e2c",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem, {
                  as: Container/* default */.Z,
                  mb: 16,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "OC.e2c",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Exit to Community"
                    }]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                href: "https://docs.opencollective.com/help/about/introduction",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavItem, {
                  as: Container/* default */.Z,
                  mb: 16,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "collective.about.title",
                    defaultMessage: [{
                      "type": 0,
                      "value": "About"
                    }]
                  })
                })
              })]
            })
          }), menuItems.docs && /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/help",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavButton, {
              as: Container/* default */.Z,
              whiteSpace: "nowrap",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Uf3+S6",
                defaultMessage: [{
                  "type": 0,
                  "value": "Help & Support"
                }]
              })
            })
          }), showSearch && menuItems.docs && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            borderRight: "2px solid #DCDDE0",
            height: "20px",
            padding: "5px"
          })]
        })
      }), showSearch && /*#__PURE__*/(0,jsx_runtime.jsx)(NavButton, {
        isBorderless: true,
        onClick: function onClick() {
          return setShowSearchModal(true);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SearchIcon/* default */.Z, {
            fill: "#75777A",
            size: 18
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Hide/* default */.ZP, {
            xs: true,
            sm: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              ml: "5px",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Search",
                defaultMessage: [{
                  "type": 0,
                  "value": "Search"
                }]
              })
            })
          })]
        })
      }), showSearchModal && /*#__PURE__*/(0,jsx_runtime.jsx)(Search, {
        onClose: function onClose() {
          return setShowSearchModal(false);
        }
      })]
    }), showProfileAndChangelogMenu && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        mr: 3,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Hide/* default */.ZP, {
          xs: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(changelog_ChangelogTrigger, {})
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_TopBarProfileMenu, {})]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Hide/* default */.ZP, {
      md: true,
      lg: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mx: 3,
        onClick: toggleMobileMenu,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          as: "a",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Bars_esm/* Bars */.L, {
            color: "#aaaaaa",
            size: 24
          })
        })
      }), showMobileMenu && /*#__PURE__*/(0,jsx_runtime.jsx)(components_TopBarMobileMenu, {
        closeMenu: toggleMobileMenu
      })]
    })]
  });
};

TopBar.defaultProps = {
  showSearch: true,
  showProfileAndChangelogMenu: true,
  menuItems: {
    solutions: true,
    product: true,
    company: true,
    docs: true
  }
};
TopBar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TopBar",
  "props": {
    "showSearch": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showProfileAndChangelogMenu": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "menuItems": {
      "defaultValue": {
        "value": "{ solutions: true, product: true, company: true, docs: true }",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_TopBar = (TopBar);

var _StyledFlex = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "TopBar___StyledFlex",
  componentId: "sc-zm70wo-5"
})(function (p) {
  return {
    height: p.$_css,
    background: 'white'
  };
});
;// CONCATENATED MODULE: ./components/Header.js








function Header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Header_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Header_createSuper(Derived) { var hasNativeReflectConstruct = Header_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Header_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var messages = (0,lib.defineMessages)({
  defaultTitle: {
    id: "OC.tagline",
    defaultMessage: [{
      "type": 0,
      "value": "Make your community sustainable. Collect and spend money transparently."
    }]
  }
});

var Header = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Header, _React$Component);

  var _super = Header_createSuper(Header);

  function Header() {
    classCallCheck_default()(this, Header);

    return _super.apply(this, arguments);
  }

  createClass_default()(Header, [{
    key: "getTitle",
    value: function getTitle() {
      var title = this.props.title;

      if (!title) {
        if (this.props.collective) {
          title = this.props.collective.name;
        } else {
          title = "Open Collective - ".concat(this.props.intl.formatMessage(messages.defaultTitle));
        }
      }

      if (!title.match(/open collective/i)) {
        title = "".concat(title, " - Open Collective");
      }

      return title;
    }
  }, {
    key: "getTwitterHandle",
    value: function getTwitterHandle() {
      var collective = this.props.collective;
      var parentCollective = collective === null || collective === void 0 ? void 0 : collective.parentCollective;

      var handle = this.props.twitterHandle || (collective === null || collective === void 0 ? void 0 : collective.twitterHandle) || get_default()(parentCollective, 'twitterHandle');

      return handle ? "@".concat(handle) : '';
    }
  }, {
    key: "getMetas",
    value: function getMetas() {
      var _this$props = this.props,
          noRobots = _this$props.noRobots,
          collective = _this$props.collective;
      var title = this.props.title || collective && collective.name;
      var image = this.props.image || collective && (0,image_utils/* getCollectiveImage */.$T)(collective);
      var description = this.props.description || (collective === null || collective === void 0 ? void 0 : collective.description) || (collective === null || collective === void 0 ? void 0 : collective.longDescription);
      var metaTitle = this.props.metaTitle || (title ? "".concat(title, " - Open Collective") : 'Open Collective');
      var defaultImage = "https://opencollective.com/static/images/opencollective-og.png";
      var metas = [{
        property: 'twitter:site',
        content: '@opencollect'
      }, {
        property: 'twitter:creator',
        content: this.getTwitterHandle()
      }, {
        property: 'fb:app_id',
        content: '266835577107099'
      }, {
        property: 'og:image',
        content: image || defaultImage
      }, {
        property: 'og:description',
        name: 'description',
        content: (0,utils/* truncate */.$G)(description, 256)
      }, {
        property: 'twitter:card',
        content: 'summary_large_image'
      }, {
        property: 'twitter:title',
        content: metaTitle
      }, {
        property: 'twitter:description',
        content: (0,utils/* truncate */.$G)(description, 256)
      }, {
        property: 'twitter:image',
        content: image || defaultImage
      }, {
        property: 'og:title',
        content: metaTitle
      }];

      if (noRobots || collective && collective.isIncognito) {
        metas.push({
          name: 'robots',
          content: 'none'
        });
      }

      return metas;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          css = _this$props2.css,
          canonicalURL = _this$props2.canonicalURL,
          withTopBar = _this$props2.withTopBar;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)((head_default()), {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
            httpEquiv: "X-UA-Compatible",
            content: "IE=edge"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
            property: "og:logo",
            content: "/static/images/opencollectiveicon240x240",
            size: "240x240"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
            property: "og:logo",
            content: "/static/images/opencollectiveicon48x48",
            size: "48x48"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
            property: "og:logo",
            content: "/static/images/opencollectivelogo480x80",
            size: "480x80"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
            property: "og:logo",
            content: "/static/images/opencollectivelogo480x80@2x",
            size: "960x160"
          }), css && /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
            rel: "stylesheet",
            href: css
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("title", {
            children: this.getTitle()
          }), this.getMetas().map(function (props, idx) {
            return (
              /*#__PURE__*/
              // We use index in this `key` because their can be multiple meta for the same property (eg. og:image)
              // eslint-disable-next-line react/no-array-index-key
              (0,jsx_runtime.jsx)("meta", Header_objectSpread({}, props), "".concat(props.property || props.name, "-").concat(idx))
            );
          }), canonicalURL && /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
            rel: "canonical",
            href: canonicalURL
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          id: "top"
        }), withTopBar && /*#__PURE__*/(0,jsx_runtime.jsx)(components_TopBar, {
          showSearch: this.props.showSearch,
          menuItems: this.props.menuItems,
          showProfileAndChangelogMenu: this.props.showProfileAndChangelogMenu
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_GlobalWarnings, {
          collective: this.props.collective
        })]
      });
    }
  }]);

  return Header;
}(react.Component);

defineProperty_default()(Header, "defaultProps", {
  withTopBar: true
});

Header.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getTitle",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getTwitterHandle",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getMetas",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "Header",
  "props": {
    "withTopBar": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "canonicalURL": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "description": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "image": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "twitterHandle": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "css": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "className": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "title": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "metaTitle": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "showSearch": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showProfileAndChangelogMenu": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "menuItems": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "noRobots": {
      "description": "If true, a no-robots meta will be added to the page",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "intl": {
      "description": "@ignore from injectIntl",
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
    }
  }
};
/* harmony default export */ var components_Header = ((0,injectIntl/* default */.ZP)(Header));

/***/ }),

/***/ 84582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports breakpoints, hidden, xs, sm, md, lg */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16678);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16010);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var breakpoints = {
  xs: '@media screen and (max-width: 40em)',
  sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
  md: '@media screen and (min-width: 52em) and (max-width: 64em)',
  lg: '@media screen and (min-width: 64em)'
}; // eslint-disable-next-line react/display-name

var hidden = function hidden(key) {
  return function (props) {
    return props[key] ? _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()({}, breakpoints[key], {
      display: 'none'
    }) : null;
  };
};
var xs = hidden('xs');
var sm = hidden('sm');
var md = hidden('md');
var lg = hidden('lg');
var Hide = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu).withConfig({
  displayName: "Hide",
  componentId: "sc-1hxk6z5-0"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], xs, sm, md, lg, styled_system__WEBPACK_IMPORTED_MODULE_1__/* .bottom */ .I, styled_system__WEBPACK_IMPORTED_MODULE_1__/* .height */ .Cb, styled_system__WEBPACK_IMPORTED_MODULE_1__/* .left */ .t$, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_2__/* .pointerEvents */ .kk, styled_system__WEBPACK_IMPORTED_MODULE_1__/* .position */ .FK, styled_system__WEBPACK_IMPORTED_MODULE_1__/* .right */ .F2, styled_system__WEBPACK_IMPORTED_MODULE_1__/* .top */ .we, styled_system__WEBPACK_IMPORTED_MODULE_1__/* .flex */ .fU);
Hide.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  xs: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  sm: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  md: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  lg: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
}, styled_system__WEBPACK_IMPORTED_MODULE_1__/* .bottom.propTypes */ .I.propTypes), styled_system__WEBPACK_IMPORTED_MODULE_1__/* .height.propTypes */ .Cb.propTypes), styled_system__WEBPACK_IMPORTED_MODULE_1__/* .left.propTypes */ .t$.propTypes), styled_system__WEBPACK_IMPORTED_MODULE_1__/* .position.propTypes */ .FK.propTypes), styled_system__WEBPACK_IMPORTED_MODULE_1__/* .right.propTypes */ .F2.propTypes), styled_system__WEBPACK_IMPORTED_MODULE_1__/* .top.propTypes */ .we.propTypes);
/* harmony default export */ __webpack_exports__["ZP"] = (Hide);

/***/ }),

/***/ 95134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16678);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16010);



var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"].li.withConfig */ .ZP.li.withConfig({
  displayName: "ListItem",
  componentId: "sc-he0y2y-0"
})(["list-style:none;", " ", " ", " ", " ", " ", " ", ""], _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_1__/* .listStyle */ .VX, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .space */ .Dh, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .textAlign */ .yd, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .width */ .bf, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .display */ .jf, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .flexbox */ .GQ, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .typography */ .cp);
/* harmony default export */ __webpack_exports__["Z"] = (ListItem);

/***/ }),

/***/ 22777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44012);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51082);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(771);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85893);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








/**
 * A user login button with proper redirect function.
 * If user is currently loggin in, button will be disabled and will show a spinner.
 */



var LoginBtn = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default()(LoginBtn, _React$Component);

  var _super = _createSuper(LoginBtn);

  function LoginBtn(props) {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, LoginBtn);

    _this = _super.call(this, props);
    _this.redirectAfterSignin = '/';
    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(LoginBtn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (true) {
        this.redirectAfterSignin = window.location.href.replace(/^https?:\/\/[^/]+/, '');
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      if (this.props.loadingLoggedInUser) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledSpinner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          size: "1em"
        });
      }

      return this.props.children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        id: "signIn",
        defaultMessage: [{
          "type": 0,
          "value": "Sign In"
        }]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var buttonProps = this.props.asLink ? {
        display: 'inline'
      } : {
        border: '1px solid #D5DAE0',
        borderRadius: '20px',
        color: 'primary.700',
        display: 'inline-block',
        fontSize: '1.4rem',
        px: 3,
        py: 2
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        href: {
          pathname: '/signin',
          query: {
            next: this.redirectAfterSignin
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread(_objectSpread({
          as: _Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
        }, buttonProps), {}, {
          children: this.renderContent()
        }))
      });
    }
  }]);

  return LoginBtn;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default()(LoginBtn, "defaultProps", {
  children: null
});

LoginBtn.__docgenInfo = {
  "description": "A user login button with proper redirect function.\nIf user is currently loggin in, button will be disabled and will show a spinner.",
  "methods": [{
    "name": "renderContent",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "LoginBtn",
  "props": {
    "children": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "description": "Login button label. Default: \"Sign In\"",
      "type": {
        "name": "node"
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
    "asLink": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_11__/* .withUser */ .ns)(LoginBtn));

/***/ }),

/***/ 66152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74688);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52015);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55348);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);








var Popup = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu).withConfig({
  displayName: "PopupMenu__Popup",
  componentId: "sc-10npih3-0"
})(["position:absolute;padding:8px;border:1px solid #f3f3f3;border-radius:8px;background:white;box-shadow:0px 4px 8px rgba(20,20,20,0.16);z-index:", ";"], function (props) {
  var _props$zIndex;

  return (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : 1000;
});

var PopupMenu = function PopupMenu(_ref) {
  var Button = _ref.Button,
      _children = _ref.children,
      placement = _ref.placement,
      onClose = _ref.onClose,
      closingEvents = _ref.closingEvents,
      zIndex = _ref.zIndex,
      popupMarginTop = _ref.popupMarginTop;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      isOpen = _React$useState2[0],
      setOpen = _React$useState2[1];

  var ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ref, function (outside) {
    if (isOpen && outside) {
      setOpen(false);
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, closingEvents);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
    ref: ref,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Button, {
      onMouseOver: function onMouseOver() {
        return setOpen(true);
      },
      onClick: function onClick() {
        return setOpen(!isOpen);
      },
      onFocus: function onFocus() {
        return setOpen(true);
      },
      popupOpen: isOpen
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_6__/* .Popper */ .r, {
      placement: placement || 'bottom',
      referenceElement: ref === null || ref === void 0 ? void 0 : ref.current,
      modifiers: [{
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      }],
      children: function children(_ref2) {
        var style = _ref2.style,
            ref = _ref2.ref;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popup, {
          mt: popupMarginTop,
          zIndex: zIndex,
          style: style,
          ref: ref,
          children: typeof _children === 'function' ? _children({
            setOpen: setOpen
          }) : _children
        });
      }
    })]
  });
};

PopupMenu.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PopupMenu",
  "props": {
    "Button": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "children": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "node"
        }, {
          "name": "func"
        }]
      },
      "required": true
    },
    "placement": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "zIndex": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "closingEvents": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "popupMarginTop": {
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
/* harmony default export */ __webpack_exports__["Z"] = (PopupMenu);

/***/ }),

/***/ 72427:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16678);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84091);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97274);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90012);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(771);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85893);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var SearchInputContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC).withConfig({
  displayName: "SearchForm__SearchInputContainer",
  componentId: "sc-1118lp-0"
})(["border:solid 1px var(--silver-four);", ";", ";background-color:white;"], styled_system__WEBPACK_IMPORTED_MODULE_9__/* .borderRadius */ .E0, styled_system__WEBPACK_IMPORTED_MODULE_9__/* .height */ .Cb);
var SearchInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu).withConfig({
  displayName: "SearchForm__SearchInput",
  componentId: "sc-1118lp-1"
})(["&&{appearance:none;background-color:transparent;border:none;font-size:1.2rem;letter-spacing:0.1rem;font-style:italic;", ";::placeholder{color:#9d9fa3;}}"], styled_system__WEBPACK_IMPORTED_MODULE_9__/* .fontSize */ .JB);
var SearchButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC).withConfig({
  displayName: "SearchForm__SearchButton",
  componentId: "sc-1118lp-2"
})(["&&{appearance:none;background-color:transparent;border:none;}"]);

var SearchForm = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(SearchForm, _React$Component);

  var _super = _createSuper(SearchForm);

  function SearchForm(props) {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, SearchForm);

    _this = _super.call(this, props);

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleSubmit", function (event) {
      event.preventDefault();
      var searchInput = event.target.elements.q;

      _this.setState({
        isLoading: true
      });

      _this.props.router.push({
        pathname: '/search',
        query: {
          q: searchInput.value
        }
      });
    });

    _this.state = {
      isLoading: false
    };
    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(SearchForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fontSize = _this$props.fontSize,
          _this$props$onSubmit = _this$props.onSubmit,
          onSubmit = _this$props$onSubmit === void 0 ? this.handleSubmit : _this$props$onSubmit,
          _this$props$placehold = _this$props.placeholder,
          placeholder = _this$props$placehold === void 0 ? 'Search...' : _this$props$placehold,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? 1 : _this$props$width,
          autoFocus = _this$props.autoFocus,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          onChange = _this$props.onChange,
          _this$props$borderRad = _this$props.borderRadius,
          borderRadius = _this$props$borderRad === void 0 ? '20px' : _this$props$borderRad,
          _this$props$height = _this$props.height,
          height = _this$props$height === void 0 ? '46px' : _this$props$height,
          disabled = _this$props.disabled;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("form", {
        action: "/search",
        method: "GET",
        onSubmit: onSubmit,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(SearchInputContainer, {
          borderRadius: borderRadius,
          height: height,
          alignItems: "center",
          justifyContent: "space-between",
          p: this.props.py || 1,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(SearchButton, {
            as: "button",
            ml: 1,
            p: 1,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_SearchIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              size: 16,
              fill: "#aaaaaa"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(SearchInput, {
            as: _StyledInput__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP,
            type: "search",
            name: "q",
            autoFocus: autoFocus,
            placeholder: placeholder,
            py: 1,
            pl: 3,
            width: width,
            fontSize: fontSize,
            "aria-label": "Open Collective search input",
            defaultValue: defaultValue,
            value: value,
            onChange: onChange && function (e) {
              return onChange(e.target.value);
            },
            disabled: disabled
          }), this.props.showSearchButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            style: _objectSpread({
              backgroundColor: '#F9FAFB',
              color: '#323334'
            }, this.props.searchButtonStyles),
            isBorderless: true,
            mr: "20px",
            children: this.state.isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledSpinner__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              size: "20px"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_15__/* .Span */ .Dr, {
              children: "\u2192"
            })
          })]
        })
      });
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

SearchForm.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleSubmit",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "SearchForm",
  "props": {
    "fontSize": {
      "description": "",
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
    "py": {
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
    "onSubmit": {
      "description": "",
      "type": {
        "name": "func"
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
    "backgroundColor": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "width": {
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "borderRadius": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "height": {
      "description": "",
      "type": {
        "name": "string"
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
    "disabled": {
      "description": "",
      "type": {
        "name": "bool"
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
    "showSearchButton": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "searchButtonStyles": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,next_router__WEBPACK_IMPORTED_MODULE_8__.withRouter)(SearchForm));

/***/ }),

/***/ 84091:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);


var _excluded = ["size", "fill"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var SearchIcon = function SearchIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 48 : _ref$size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#FFFFFF' : _ref$fill,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", _objectSpread(_objectSpread({
    width: size,
    height: size,
    viewBox: "10 10 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title", {
      children: "Search"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
      d: "M28.5404814,30.1903972 C26.7995948,31.5736628 24.5962981,32.4 22.2,32.4 C16.5666956,32.4 12,27.8333044 12,22.2 C12,16.5666956 16.5666956,12 22.2,12 C27.8333044,12 32.4,16.5666956 32.4,22.2 C32.4,24.5962981 31.5736628,26.7995948 30.1903972,28.5404814 L35.6582912,34.0083754 C36.1139029,34.4639871 36.1139029,35.2026796 35.6582912,35.6582912 C35.2026796,36.1139029 34.4639871,36.1139029 34.0083754,35.6582912 L28.5404814,30.1903972 Z M22.2,30 C26.507821,30 30,26.507821 30,22.2 C30,17.892179 26.507821,14.4 22.2,14.4 C17.892179,14.4 14.4,17.892179 14.4,22.2 C14.4,26.507821 17.892179,30 22.2,30 Z",
      fill: fill,
      fillRule: "nonzero"
    })]
  }));
};

SearchIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SearchIcon",
  "props": {
    "size": {
      "defaultValue": {
        "value": "48",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "fill": {
      "defaultValue": {
        "value": "'#FFFFFF'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (SearchIcon);

/***/ }),

/***/ 206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lt": function() { return /* binding */ Dropdown; },
/* harmony export */   "Nv": function() { return /* binding */ DropdownContent; },
/* harmony export */   "Wi": function() { return /* binding */ DropdownArrow; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52015);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55348);
/* harmony import */ var _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34487);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);



var _excluded = ["children", "trigger"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var DropdownContent = styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "StyledDropdown__DropdownContent",
  componentId: "sc-c40cmc-0"
})(["display:none;position:absolute;z-index:1;max-width:320px;z-index:1000000;border-radius:4px;font-size:12px;text-transform:initial;white-space:normal;color:white;background:white;box-shadow:0px 4px 8px rgba(20,20,20,0.16);border:1px solid #e2e2e2;"]);
var DropdownArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)('div').withConfig({
  displayName: "StyledDropdown__DropdownArrow",
  componentId: "sc-c40cmc-1"
})(["position:absolute;font-size:8px;width:3em;height:3em;width:3em;height:1em;z-index:1000001;margin-left:50px;margin-top:-7px;display:none;&::before{border-width:0 1.5em 1em 1.5em;border-color:transparent transparent white transparent;filter:drop-shadow(0 0 0 grey);content:'';margin:auto;display:block;width:0;height:0;border-style:solid;}"]);
/**
 * Accessible, CSS-first dropdown.
 *
 * When using `click` as a `trigger` you must pass a function as `children` and
 * make sure you pass down the `triggerProps` and `dropdownProps`.
 * The ref must be on the wrapping div in order to work in Firefox (Mac) and Safari.
 */

var Dropdown = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(function (_ref) {
  var children = _ref.children,
      trigger = _ref.trigger,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  var dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      isDisplayed = _React$useState2[0],
      setDisplayed = _React$useState2[1];

  var closeDropdown = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function () {
    if (isDisplayed) {
      setDisplayed(false);
    }
  }, [isDisplayed]);
  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(dropdownRef, function (outside) {
    if (outside && isDisplayed) {
      setTimeout(function () {
        setDisplayed(false);
      }, 50);
    }
  }); // Closes the modal upon the `ESC` key press.

  (0,_lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)({
    callback: closeDropdown,
    keyMatch: _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_5__/* .ESCAPE_KEY */ .O_
  });

  if (typeof children === 'function' && trigger === 'click') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", _objectSpread(_objectSpread({
      ref: dropdownRef
    }, props), {}, {
      "data-expanded": isDisplayed,
      children: children({
        isDisplayed: isDisplayed,
        triggerProps: {
          onClick: function onClick() {
            setDisplayed(!isDisplayed);
          }
        },
        dropdownProps: {
          onClick: function onClick() {
            return setTimeout(closeDropdown, 50);
          },
          onBlur: function onBlur() {
            return setTimeout(function () {
              var _dropdownRef$current;

              if (!document.activeElement || !((_dropdownRef$current = dropdownRef.current) !== null && _dropdownRef$current !== void 0 && _dropdownRef$current.contains(document.activeElement))) {
                closeDropdown();
              }
            }, 50);
          }
        }
      })
    }));
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", _objectSpread(_objectSpread({
      role: "button",
      tabIndex: 0 // eslint-disable-next-line react/no-unknown-property
      ,
      trigger: trigger
    }, props), {}, {
      onFocus: function onFocus() {
        return setTimeout(function () {
          return setDisplayed(true);
        }, 50);
      },
      onBlur: function onBlur() {
        return setTimeout(closeDropdown, 50);
      },
      onClick: function onClick(e) {
        if (isDisplayed) {
          var _document$activeEleme;

          if ((_document$activeEleme = document.activeElement) !== null && _document$activeEleme !== void 0 && _document$activeEleme.contains(e.target)) {
            document.activeElement.blur();
          } else {
            e.target.blur();
          }
        }
      },
      children: children
    }))
  );
}).withConfig({
  displayName: "StyledDropdown__Dropdown",
  componentId: "sc-c40cmc-2"
})(["", ""], function (props) {
  return props.trigger === 'hover' ? (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* .css */ .iv)(["&:hover,&:active,&:focus-within{", ",", "{display:block;}}"], DropdownContent, DropdownArrow) : (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* .css */ .iv)(["&[data-expanded='true']{", ",", "{display:block;}}"], DropdownContent, DropdownArrow);
});

/***/ }),

/***/ 173:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76004);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16678);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






/**
 * An horizontal line. Control the color and size using border properties.
 */
var StyledHr = styled_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"].hr.withConfig */ .ZP.hr.withConfig({
  displayName: "StyledHr",
  componentId: "sc-107rk1k-0"
})(["border:0;border-top:1px solid ", ";margin:0;height:1px;", " ", " ", " ", " ", " ", ""], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.black.400'), styled_system__WEBPACK_IMPORTED_MODULE_3__/* .space */ .Dh, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .flex */ .fU, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .layout */ .bK, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .shadow */ .AF, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .border */ .Cg, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .display */ .jf);
StyledHr.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].space */ .ZP.space), _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].flex */ .ZP.flex), _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].layout */ .ZP.layout), _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].shadow */ .ZP.shadow), _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].border */ .ZP.border), _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1__/* ["default"].display */ .ZP.display);
/** @component */

/* harmony default export */ __webpack_exports__["Z"] = (StyledHr);

/***/ }),

/***/ 36422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74684);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16678);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16010);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);


var _excluded = ["closeButtonProps", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var defaultRoundedStyleProps = {
  backgroundColor: 'black.100',
  maxHeight: '24px',
  display: 'inline-flex',
  alignItems: 'center',
  color: 'black.700',
  fontSize: '12px',
  lineHeight: '18px'
};
var TAG_TYPE_VARIANTS = {
  white: {
    backgroundColor: 'white.full',
    borderColor: 'black.200'
  },
  dark: {
    backgroundColor: 'black.800',
    borderColor: 'black.900',
    color: 'white.full'
  },
  grey: {
    backgroundColor: 'black.300',
    borderColor: 'black.300',
    color: 'black.900'
  },
  info: {
    backgroundColor: 'blue.100',
    borderColor: 'blue.400',
    color: 'blue.600'
  },
  success: {
    backgroundColor: 'green.100',
    borderColor: 'green.500',
    color: 'green.800'
  },
  warning: {
    backgroundColor: 'yellow.300',
    borderColor: 'yellow.500',
    color: 'yellow.900'
  },
  error: {
    backgroundColor: 'red.100',
    borderColor: 'red.500',
    color: 'red.500'
  }
};
var StyledTagBase = styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "StyledTag__StyledTagBase",
  componentId: "sc-189xre2-0"
})(["text-align:center;white-space:nowrap;letter-spacing:0.06em;position:relative;overflow:hidden;", " & > *{vertical-align:middle;}", " ", " ", " ", " ", " ", " ", " ", " ", ""], (0,styled_system__WEBPACK_IMPORTED_MODULE_3__/* .variant */ .bU)({
  prop: 'variant',
  variants: {
    squared: {
      color: 'black.700',
      background: '#F0F2F5',
      borderRadius: '4px',
      padding: '6px 8px',
      fontSize: '9px',
      lineHeight: '12px'
    },
    'rounded-right': _objectSpread(_objectSpread({}, defaultRoundedStyleProps), {}, {
      borderRadius: '2px 12px 12px 2px',
      padding: '3px 10px 3px 6px'
    }),
    'rounded-left': _objectSpread(_objectSpread({}, defaultRoundedStyleProps), {}, {
      borderRadius: '12px 2px 2px 12px',
      padding: '3px 6px 3px 10px'
    }),
    rounded: _objectSpread(_objectSpread({}, defaultRoundedStyleProps), {}, {
      borderRadius: '12px 12px 12px 12px',
      padding: '3px 6px 3px 10px'
    })
  }
}), (0,styled_system__WEBPACK_IMPORTED_MODULE_3__/* .variant */ .bU)({
  prop: 'type',
  variants: TAG_TYPE_VARIANTS
}), styled_system__WEBPACK_IMPORTED_MODULE_3__/* .background */ .Oq, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .color */ .$_, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .space */ .Dh, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .border */ .Cg, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .typography */ .cp, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .layout */ .bK, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .position */ .FK, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_4__/* .textTransform */ .Qx);
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"].button.attrs */ .ZP.button.attrs({
  type: 'button',
  'data-cy': 'remove-btn'
}).withConfig({
  displayName: "StyledTag__CloseButton",
  componentId: "sc-189xre2-1"
})(["cursor:pointer;text-align:center;padding:0 2px 0 0;width:20px;height:100%;position:absolute;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;transition:colors 0.1s;border:none;line-height:inherit;color:", ";background-color:", ";&:hover,&:focus{color:", ";background-color:", ";}&:disabled{cursor:not-allowed;opacity:0.5;}"], function (props) {
  return props.isFocused ? props.theme.colors.black[900] : props.theme.colors.black[500];
}, function (props) {
  return props.isFocused ? props.theme.colors.black[300] : 'transparent';
}, function (props) {
  return props.theme.colors.black[900];
}, function (props) {
  return props.theme.colors.black[300];
});
/** Simple tag to display a short string */

var StyledTag = function StyledTag(_ref) {
  var closeButtonProps = _ref.closeButtonProps,
      children = _ref.children,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _excluded);

  return !closeButtonProps ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledTagBase, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledTagBase, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
      mr: "12px",
      letterSpacing: "inherit",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CloseButton, _objectSpread(_objectSpread({}, closeButtonProps), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_8__/* .Times */ .u, {
        size: "12px"
      })
    }))]
  }));
};

StyledTag.defaultProps = {
  variant: 'squared'
};
StyledTag.__docgenInfo = {
  "description": "Simple tag to display a short string",
  "methods": [],
  "displayName": "StyledTag",
  "props": {
    "variant": {
      "defaultValue": {
        "value": "'squared'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'squared'",
          "computed": false
        }, {
          "value": "'rounded-right'",
          "computed": false
        }, {
          "value": "'rounded-left'",
          "computed": false
        }, {
          "value": "'rounded'",
          "computed": false
        }]
      },
      "required": false
    },
    "closeButtonProps": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "object"
        }, {
          "name": "bool"
        }]
      },
      "required": false
    },
    "onClose": {
      "description": "If defined, a close button will be displayed on the tag",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "backgroundColor": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "type": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"white\"",
          "computed": false
        }, {
          "value": "\"dark\"",
          "computed": false
        }, {
          "value": "\"grey\"",
          "computed": false
        }, {
          "value": "\"info\"",
          "computed": false
        }, {
          "value": "\"success\"",
          "computed": false
        }, {
          "value": "\"warning\"",
          "computed": false
        }, {
          "value": "\"error\"",
          "computed": false
        }]
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledTag);

/***/ }),

/***/ 93150:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ StyledTextarea; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92191);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67294);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16678);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16010);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69078);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85893);








var _excluded = ["autoSize", "showCount", "resize"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"].textarea.withConfig */ .ZP.textarea.withConfig({
  displayName: "StyledTextarea__TextArea",
  componentId: "sc-pc1pul-0"
})(["outline:none;", " ", " ", " ", " ", " ", " ", " ", " &:disabled{background-color:", ";cursor:not-allowed;}&:focus,&:hover:not(:disabled){border-color:", ";}&::placeholder{color:", ";}"], styled_system__WEBPACK_IMPORTED_MODULE_10__/* .space */ .Dh, styled_system__WEBPACK_IMPORTED_MODULE_10__/* .layout */ .bK, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_11__/* .resize */ .SI, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_11__/* .overflow */ .tx, styled_system__WEBPACK_IMPORTED_MODULE_10__/* .border */ .Cg, styled_system__WEBPACK_IMPORTED_MODULE_10__/* .color */ .$_, styled_system__WEBPACK_IMPORTED_MODULE_10__/* .typography */ .cp, function (props) {
  if (props.withOutline) {
    return props.error ? (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* .css */ .iv)(["outline:1px dashed ", ";outline-offset:0.25em;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_9__/* .themeGet */ .R)('colors.red.300')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* .css */ .iv)(["&:focus{outline:1px dashed ", ";outline-offset:0.25em;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_9__/* .themeGet */ .R)('colors.black.200'));
  } else if (props.error) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* .css */ .iv)(["border-color:", ";"], props.theme.colors.red[500]);
  }
}, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_9__/* .themeGet */ .R)('colors.black.50'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_9__/* .themeGet */ .R)('colors.primary.300'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_9__/* .themeGet */ .R)('colors.black.400'));
/**
 * A styled textarea that can grows with its content.
 */

var StyledTextarea = /*#__PURE__*/function (_React$PureComponent) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_4___default()(StyledTextarea, _React$PureComponent);

  var _super = _createSuper(StyledTextarea);

  function StyledTextarea(props) {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1___default()(this, StyledTextarea);

    _this = _super.call(this, props);

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onChange", function (e) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          autoSize = _this$props.autoSize;

      if (onChange) {
        onChange(e);
      }

      if (autoSize) {
        _this._adjustHeight(e.target);
      }
    });

    _this.textareaRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createRef();
    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_2___default()(StyledTextarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoSize) {
        this._adjustHeight(this.textareaRef.current);
      }
    }
  }, {
    key: "_adjustHeight",
    value: function _adjustHeight(target) {
      // Reset height to 0 so component will auto-size
      target.style.height = 0; // Use the scroll height to define size

      target.style.height = "".concat(target.scrollHeight, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          autoSize = _this$props2.autoSize,
          showCount = _this$props2.showCount,
          resize = _this$props2.resize,
          props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default()(_this$props2, _excluded);

      var value = props.value || props.defaultValue || '';

      var textarea = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(TextArea, _objectSpread(_objectSpread({
        ref: this.textareaRef,
        as: "textarea",
        resize: resize || (autoSize ? 'none' : 'vertical')
      }, props), {}, {
        onChange: this.onChange
      }));

      return !showCount ? textarea : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        position: "relative",
        children: [textarea, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          position: "absolute",
          bottom: "1.25em",
          right: "1.5em",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            textTransform: "uppercase",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
              children: value.length
            }), props.maxLength && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span", {
              children: [" / ", props.maxLength]
            })]
          })
        })]
      });
    }
  }]);

  return StyledTextarea;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);

_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_7___default()(StyledTextarea, "defaultProps", {
  border: '1px solid',
  borderColor: 'black.300',
  borderRadius: '6px',
  fontSize: 'inherit',
  px: 12,
  py: 12
});


StyledTextarea.__docgenInfo = {
  "description": "A styled textarea that can grows with its content.",
  "methods": [{
    "name": "_adjustHeight",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "target",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "StyledTextarea",
  "props": {
    "border": {
      "defaultValue": {
        "value": "'1px solid'",
        "computed": false
      },
      "description": "styled-system prop: accepts any css 'border' value",
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
    "borderColor": {
      "defaultValue": {
        "value": "'black.300'",
        "computed": false
      },
      "description": "styled-system prop: accepts any css 'border-color' value",
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
    "borderRadius": {
      "defaultValue": {
        "value": "'6px'",
        "computed": false
      },
      "description": "styled-system prop: accepts any css 'border-radius' value",
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
    "fontSize": {
      "defaultValue": {
        "value": "'inherit'",
        "computed": false
      },
      "required": false
    },
    "px": {
      "defaultValue": {
        "value": "12",
        "computed": false
      },
      "description": "@ignore",
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
    "py": {
      "defaultValue": {
        "value": "12",
        "computed": false
      },
      "description": "@ignore",
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "autoSize": {
      "description": "If true, the component will update its size based on its content",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "resize": {
      "description": "If not provided, the value will be set to `none` if `autoSize` is true, `vertical` otherwise",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'vertical'",
          "computed": false
        }, {
          "value": "'horizontal'",
          "computed": false
        }, {
          "value": "'both'",
          "computed": false
        }, {
          "value": "'none'",
          "computed": false
        }]
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
    "withOutline": {
      "description": "if true, a default outline will be displayed when focused",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "error": {
      "description": "If truthy, the outline will be red",
      "type": {
        "name": "any"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 88609:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73935);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74688);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81385);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63351);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16678);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(57632);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16010);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85893);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var StyledTooltipContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)("div").withConfig({
  displayName: "StyledTooltip__StyledTooltipContainer",
  componentId: "sc-vgr5wu-0"
})(["max-width:320px;z-index:1000000;opacity:0.96 !important;border-radius:4px;box-shadow:0px 3px 6px 1px rgba(20,20,20,0.08);padding:12px 16px;font-size:12px;text-transform:initial;white-space:normal;color:white;background:#141414;box-shadow:0px 4px 8px rgba(20,20,20,0.16);"]);
var Arrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)('div').withConfig({
  displayName: "StyledTooltip__Arrow",
  componentId: "sc-vgr5wu-1"
})(["position:absolute;font-size:8px;width:3em;height:3em;&[data-placement*='bottom']{top:0;left:0;margin-top:-0.9em;width:3em;height:1em;&::before{border-width:0 1.5em 1em 1.5em;border-color:transparent transparent #141414 transparent;filter:drop-shadow(0px -3px 3px rgba(20,20,20,0.1));}}&[data-placement*='top']{bottom:0;left:0;margin-bottom:-0.9em;width:3em;height:1em;&::before{border-width:1em 1.5em 0 1.5em;border-color:#141414 transparent transparent transparent;filter:drop-shadow(0px 3px 3px rgba(20,20,20,0.1));}}&[data-placement*='right']{left:0;margin-left:-0.9em;height:3em;width:1em;&::before{border-width:1.5em 1em 1.5em 0;border-color:transparent #141414 transparent transparent;filter:drop-shadow(-4px 3px 3px rgba(20,20,20,0.1));}}&[data-placement*='left']{right:0;margin-right:-0.9em;height:3em;width:1em;&::before{border-width:1.5em 0 1.5em 1em;border-color:transparent transparent transparent #141414;filter:drop-shadow(4px 3px 3px rgba(20,20,20,0.1));}}&::before{content:'';margin:auto;display:block;width:0;height:0;border-style:solid;}"]);
var ChildrenContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "StyledTooltip__ChildrenContainer",
  componentId: "sc-vgr5wu-2"
})(["display:", ";", " ", " ", " button:disabled{pointer-events:none;}"], function (props) {
  return props.display;
}, styled_system__WEBPACK_IMPORTED_MODULE_9__/* .verticalAlign */ .Lo, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_10__/* .cursor */ .oc, styled_system__WEBPACK_IMPORTED_MODULE_9__/* .lineHeight */ .Nv);
var REACT_POPPER_MODIFIERS = [{
  name: 'flip',
  options: {
    fallbackPlacements: ['right', 'bottom', 'top'],
    padding: {
      right: 100
    }
  }
}, {
  name: 'offset',
  options: {
    offset: function offset(_ref) {
      var placement = _ref.placement;

      switch (placement) {
        case 'top':
        case 'bottom':
          return [0, 3];

        default:
          return [];
      }
    }
  }
}];

var TooltipContent = function TooltipContent(_ref2) {
  var place = _ref2.place,
      content = _ref2.content,
      onMouseEnter = _ref2.onMouseEnter,
      onMouseLeave = _ref2.onMouseLeave;
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_8__.createPortal( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_13__/* .Popper */ .r, {
    placement: place,
    modifiers: REACT_POPPER_MODIFIERS,
    children: function children(_ref3) {
      var ref = _ref3.ref,
          style = _ref3.style,
          placement = _ref3.placement,
          arrowProps = _ref3.arrowProps;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(StyledTooltipContainer, {
        ref: ref,
        style: style,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: [typeof content === 'function' ? content() : content, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Arrow, {
          ref: arrowProps.ref,
          "data-placement": placement,
          style: arrowProps.style
        })]
      });
    }
  }), document.body);
};
/**
 * A tooltip to show overlays on hover.
 *
 * Relies on [react-tooltip](https://react-tooltip.netlify.com/) and accepts any
 * of its properties.
 */


var StyledTooltip = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_3___default()(StyledTooltip, _React$Component);

  var _super = _createSuper(StyledTooltip);

  function StyledTooltip() {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, StyledTooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      id: null,
      isHovered: false,
      showPopup: false
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onMouseEnter", function () {
      _this.setState({
        isHovered: true
      });
    });

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onMouseLeave", function () {
      _this.setState({
        isHovered: false
      });
    });

    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(StyledTooltip, [{
    key: "componentDidMount",
    value: // We only set `id` on the client to avoid mismatches with SSR
    function componentDidMount() {
      this.setState({
        id: "tooltip-".concat((0,uuid__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)())
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, oldState) {
      var _this2 = this;

      if (!oldState.isHovered && this.state.isHovered) {
        if (this.closeTimeout) {
          clearTimeout(this.closeTimeout);
          this.closeTimeout = null;
        }

        this.setState({
          showPopup: true
        });
      } else if (oldState.isHovered && !this.state.isHovered) {
        this.closeTimeout = setTimeout(function () {
          return _this2.setState({
            showPopup: false
          });
        }, this.props.delayHide);
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ref) {
      return typeof this.props.children === 'function' ? this.props.children({
        ref: ref,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ChildrenContainer, {
        ref: ref,
        as: this.props.childrenContainer,
        display: this.props.display,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        verticalAlign: this.props.containerVerticalAlign,
        lineHeight: this.props.containerLineHeight,
        cursor: this.props.containerCursor,
        children: this.props.children
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.noTooltip) {
        return this.renderChildren();
      }

      var isMounted = Boolean(this.state.id);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_15__/* .Manager */ .dK, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_16__/* .Reference */ .s, {
            children: function children(_ref4) {
              var ref = _ref4.ref;
              return _this3.renderChildren(ref);
            }
          }), isMounted && this.state.showPopup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(TooltipContent, {
            place: this.props.place,
            content: this.props.content,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
          })]
        })
      });
    }
  }]);

  return StyledTooltip;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_6___default()(StyledTooltip, "defaultProps", {
  type: 'dark',
  place: 'top',
  delayHide: 500,
  display: 'inline-block',
  containerCursor: 'help'
});

StyledTooltip.__docgenInfo = {
  "description": "A tooltip to show overlays on hover.\n\nRelies on [react-tooltip](https://react-tooltip.netlify.com/) and accepts any\nof its properties.",
  "methods": [{
    "name": "onMouseEnter",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onMouseLeave",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderChildren",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "ref",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "StyledTooltip",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'dark'",
        "computed": false
      },
      "required": false
    },
    "place": {
      "defaultValue": {
        "value": "'top'",
        "computed": false
      },
      "description": "Tooltip place",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'top'",
          "computed": false
        }, {
          "value": "'right'",
          "computed": false
        }, {
          "value": "'bottom'",
          "computed": false
        }, {
          "value": "'left'",
          "computed": false
        }]
      },
      "required": false
    },
    "delayHide": {
      "defaultValue": {
        "value": "500",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "display": {
      "defaultValue": {
        "value": "'inline-block'",
        "computed": false
      },
      "description": "If using a node children, this defines the parent display type",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "containerCursor": {
      "defaultValue": {
        "value": "'help'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "content": {
      "description": "The popup content",
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "node"
        }]
      },
      "required": false
    },
    "containerVerticalAlign": {
      "description": "Vertical alignment of the container",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "containerLineHeight": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "noTooltip": {
      "description": "If true, children will be rendered directly, without any tooltip. Useful to build conditional tooltips",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "childrenContainer": {
      "description": "The component that will be used as a container for the children",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "children": {
      "description": "The trigger. Either:\n - A render func, that gets passed props to set on the trigger\n - A React node, rendered inside an div",
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "node"
        }]
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledTooltip);

/***/ }),

/***/ 71611:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ collectivePageQuery; },
/* harmony export */   "L": function() { return /* binding */ getCollectivePageQueryVariables; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32651);
/* harmony import */ var _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19146);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5824);


var _templateObject;



 // We have to disable the linter because it's not able to detect that `nbContributorsPerContributeCard` is used in fragments

/* eslint-disable graphql/template-strings */

var collectivePageQuery = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query CollectivePage($slug: String!, $nbContributorsPerContributeCard: Int) {\n    Collective(slug: $slug, throwIfMissing: false) {\n      id\n      slug\n      path\n      name\n      description\n      longDescription\n      backgroundImage\n      backgroundImageUrl\n      twitterHandle\n      repositoryUrl\n      website\n      socialLinks {\n        type\n        url\n      }\n      tags\n      company\n      type\n      currency\n      settings\n      isActive\n      isPledged\n      isApproved\n      isArchived\n      isFrozen\n      isHost\n      isIncognito\n      isGuest\n      hostFeePercent\n      platformFeePercent\n      image\n      imageUrl(height: 256)\n      canApply\n      canContact\n      supportedExpenseTypes\n      features {\n        id\n        ...NavbarFields\n      }\n      ordersFromCollective(subscriptionsOnly: true) {\n        id\n        isSubscriptionActive\n      }\n      memberOf(onlyActiveCollectives: true, limit: 1) {\n        id\n      }\n      stats {\n        id\n        balance\n        balanceWithBlockedFunds\n        yearlyBudget\n        updates\n        activeRecurringContributions\n        totalAmountReceived(periodInMonths: 12)\n        totalAmountRaised: totalAmountReceived\n        totalNetAmountRaised: totalNetAmountReceived\n        backers {\n          id\n          all\n          users\n          organizations\n        }\n        transactions {\n          id\n          all\n        }\n      }\n      connectedTo: memberOf(role: \"CONNECTED_COLLECTIVE\", limit: 1) {\n        id\n        collective {\n          id\n          name\n          type\n          slug\n        }\n      }\n      parentCollective {\n        id\n        name\n        slug\n        image\n        backgroundImageUrl\n        twitterHandle\n        type\n        coreContributors: contributors(roles: [ADMIN, MEMBER]) {\n          id\n          ...ContributorsFields\n        }\n      }\n      host {\n        id\n        name\n        slug\n        type\n        settings\n        plan {\n          id\n          hostFees\n          hostFeeSharePercent\n        }\n        features {\n          id\n          VIRTUAL_CARDS\n        }\n        policies {\n          COLLECTIVE_MINIMUM_ADMINS {\n            freeze\n            numberOfAdmins\n          }\n        }\n      }\n      coreContributors: contributors(roles: [ADMIN, MEMBER]) {\n        id\n        ...ContributorsFields\n      }\n      financialContributors: contributors(roles: [BACKER], limit: 150) {\n        id\n        ...ContributorsFields\n      }\n      tiers {\n        id\n        ...ContributeCardTierFields\n      }\n      events(includePastEvents: true, includeInactive: true) {\n        id\n        ...ContributeCardEventFields\n      }\n      projects {\n        id\n        ...ContributeCardProjectFields\n      }\n      admins: members(role: \"ADMIN\") {\n        id\n      }\n      connectedCollectives: members(role: \"CONNECTED_COLLECTIVE\") {\n        id\n        collective: member {\n          id\n          slug\n          name\n          type\n          description\n          backgroundImageUrl(height: 208)\n          stats {\n            id\n            backers {\n              id\n              all\n              users\n              organizations\n            }\n          }\n          contributors(limit: $nbContributorsPerContributeCard) {\n            id\n            ...ContributeCardContributorFields\n          }\n        }\n      }\n      updates(limit: 3, onlyPublishedUpdates: true) {\n        id\n        ...UpdatesFields\n      }\n      plan {\n        id\n        hostedCollectives\n      }\n\n      ... on Event {\n        timezone\n        startsAt\n        endsAt\n        location {\n          id\n          name\n          address\n          country\n          lat\n          long\n        }\n        privateInstructions\n        orders {\n          id\n          createdAt\n          quantity\n          publicMessage\n          fromCollective {\n            id\n            type\n            name\n            company\n            image\n            isIncognito\n            imageUrl\n            slug\n            twitterHandle\n            description\n            ... on User {\n              email\n            }\n          }\n          tier {\n            id\n            name\n            type\n          }\n        }\n      }\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _fragments__WEBPACK_IMPORTED_MODULE_2__/* .updatesFieldsFragment */ .Ju, _fragments__WEBPACK_IMPORTED_MODULE_2__/* .contributorsFieldsFragment */ .wF, _fragments__WEBPACK_IMPORTED_MODULE_2__/* .collectiveNavbarFieldsFragment */ .AS, _fragments__WEBPACK_IMPORTED_MODULE_2__/* .contributeCardTierFieldsFragment */ .d8, _fragments__WEBPACK_IMPORTED_MODULE_2__/* .contributeCardEventFieldsFragment */ .bt, _fragments__WEBPACK_IMPORTED_MODULE_2__/* .contributeCardProjectFieldsFragment */ .Sm);
/* eslint-enable graphql/template-strings */

var getCollectivePageQueryVariables = function getCollectivePageQueryVariables(slug) {
  return {
    slug: slug,
    nbContributorsPerContributeCard: _contribute_cards_constants__WEBPACK_IMPORTED_MODULE_3__/* .MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD */ .Dc
  };
};

/***/ }),

/***/ 19146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dc": function() { return /* binding */ MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD; },
/* harmony export */   "TJ": function() { return /* binding */ CONTRIBUTE_CARD_WIDTH; },
/* harmony export */   "zx": function() { return /* binding */ CONTRIBUTE_CARD_BORDER_RADIUS; }
/* harmony export */ });
/** Max number of contributors on each tier card */
var MAX_CONTRIBUTORS_PER_CONTRIBUTE_CARD = 4;
var CONTRIBUTE_CARD_WIDTH = 280;
var CONTRIBUTE_CARD_BORDER_RADIUS = 16;

/***/ }),

/***/ 37670:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(46829);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(44012);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32651);
/* harmony import */ var _collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71611);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87268);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71792);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85893);





var _excluded = ["collective"];

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















var editAccountFreezeStatusMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4___default()(["\n  mutation EditAccountFreezeStatus($account: AccountReferenceInput!, $action: AccountFreezeAction!, $message: String) {\n    editAccountFreezeStatus(account: $account, message: $message, action: $action) {\n      id\n      isFrozen\n      childrenAccounts {\n        nodes {\n          id\n          isFrozen\n        }\n      }\n    }\n  }\n"])));

var FreezeAccountModal = function FreezeAccountModal(_ref) {
  var collective = _ref.collective,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3___default()(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();

  var _useToasts = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_15__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      message = _useState[0],
      setMessage = _useState[1];

  var isUnfreezing = collective.isFrozen;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_19__.useMutation)(editAccountFreezeStatusMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .API_V2_CONTEXT */ .T
  }),
      _useMutation2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useMutation, 2),
      editAccountFreezeStatus = _useMutation2[0],
      loading = _useMutation2[1].loading;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    maxWidth: 432,
    trapFocus: true
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_12__/* .CollectiveModalHeader */ .I4, {
      collective: collective,
      mb: 3
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_12__/* .ModalBody */ .fe, {
      children: collective.isFrozen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "red.900",
          mb: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "OX8+5o",
            defaultMessage: [{
              "type": 0,
              "value": "Are you sure want to unfreeze this collective?"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
          fontSize: "14px",
          lineHeight: "20px",
          color: "black.700",
          mb: "10px",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "nhEmNV",
            defaultMessage: [{
              "type": 0,
              "value": "Unfreezing the collective means they will now have full access to the platform."
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "1Whmi8",
            defaultMessage: [{
              "type": 0,
              "value": "This collective (and all its related Projects & Events) will now have access to accept funds, pay out expenses, post updates, create new Events or Projects."
            }]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_14__/* .Label */ .__, {
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "black.800.900",
          mb: "6px",
          htmlFor: "freeze-account-message",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "GLo1nw",
            defaultMessage: [{
              "type": 0,
              "value": "Include a message to the Collective admins (Optional)"
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_14__/* .Span */ .Dr, {
            fontSize: "13px",
            fontWeight: "400",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
              id: "rzknYs",
              defaultMessage: [{
                "type": 0,
                "value": "They will also be notified of this unfreeze via auto-email."
              }]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledTextarea__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          id: "freeze-account-message",
          width: "100%",
          minHeight: 126,
          maxHeight: 300,
          onChange: function onChange(e) {
            return setMessage(e.target.value);
          },
          value: message
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "red.900",
          mb: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "GC33m/",
            defaultMessage: [{
              "type": 0,
              "value": "Are you sure want to freeze this collective?"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
          fontSize: "14px",
          lineHeight: "20px",
          color: "black.700",
          mb: "10px",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "IVw0RN",
            defaultMessage: [{
              "type": 0,
              "value": "Freezing this collective means temporarily limiting what a collective (and their connected Projects & Events) can and cannot do on the platform."
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "oh+bk9",
            defaultMessage: [{
              "type": 0,
              "value": "They will not be able to accept funds, pay out expenses, post updates, create new Events or Projects, add new Team members under this collective. However, they will still continue to receive recurring donations that were started before this freeze."
            }]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_14__/* .Label */ .__, {
          htmlFor: "freeze-account-message",
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "black.800.900",
          mb: "6px",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "GLo1nw",
            defaultMessage: [{
              "type": 0,
              "value": "Include a message to the Collective admins (Optional)"
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_14__/* .Span */ .Dr, {
            fontSize: "13px",
            fontWeight: "400",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
              id: "gdP2KJ",
              defaultMessage: [{
                "type": 0,
                "value": "They will also be notified of this freeze via auto-email notification."
              }]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledTextarea__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          id: "freeze-account-message",
          width: "100%",
          minHeight: 126,
          maxHeight: 300,
          onChange: function onChange(e) {
            return setMessage(e.target.value);
          },
          value: message,
          fontSize: "13px"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
          fontSize: "13px",
          color: "black.700",
          mt: "6px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "uwFEIP",
            defaultMessage: [{
              "type": 0,
              "value": "Make sure to let the admins know if action is required"
            }]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_12__/* .ModalFooter */ .mz, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
        justifyContent: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          buttonStyle: isUnfreezing ? 'primary' : 'danger',
          minWidth: 90,
          loading: loading,
          onClick: /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
            var action, accountInput, variables, successMsgArgs;
            return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    action = isUnfreezing ? 'UNFREEZE' : 'FREEZE';
                    accountInput = typeof collective.id === 'number' ? {
                      legacyId: collective.id
                    } : {
                      id: collective.id
                    };
                    variables = {
                      account: accountInput,
                      message: message,
                      action: action
                    };
                    _context.next = 6;
                    return editAccountFreezeStatus({
                      variables: variables,
                      refetchQueries: [{
                        query: _collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_9__/* .collectivePageQuery */ .J,
                        variables: {
                          slug: collective.slug
                        }
                      }],
                      awaitRefetchQueries: true
                    });

                  case 6:
                    successMsgArgs = {
                      accountName: collective.name,
                      accountSlug: collective.slug
                    };
                    addToast({
                      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_15__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
                      message: isUnfreezing ? intl.formatMessage({
                        id: "4ePoy6",
                        defaultMessage: [{
                          "type": 1,
                          "value": "accountName"
                        }, {
                          "type": 0,
                          "value": " (@"
                        }, {
                          "type": 1,
                          "value": "accountSlug"
                        }, {
                          "type": 0,
                          "value": ") has been unfrozen"
                        }]
                      }, successMsgArgs) : intl.formatMessage({
                        id: "Dnbu8Y",
                        defaultMessage: [{
                          "type": 1,
                          "value": "accountName"
                        }, {
                          "type": 0,
                          "value": " (@"
                        }, {
                          "type": 1,
                          "value": "accountSlug"
                        }, {
                          "type": 0,
                          "value": ") has been frozen"
                        }]
                      }, successMsgArgs)
                    });
                    props === null || props === void 0 ? void 0 : props.onClose();
                    _context.next = 14;
                    break;

                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](0);
                    addToast({
                      type: _ToastProvider__WEBPACK_IMPORTED_MODULE_15__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                      variant: 'light',
                      message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .i18nGraphqlException */ .t2)(intl, _context.t0)
                    });

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 11]]);
          })),
          children: isUnfreezing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "5SBeLS",
            defaultMessage: [{
              "type": 0,
              "value": "Unfreeze"
            }]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "ILjcbM",
            defaultMessage: [{
              "type": 0,
              "value": "Freeze Collective"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          ml: 3,
          minWidth: 120,
          onClick: props.onClose,
          disabled: loading,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        })]
      })
    })]
  }));
};

FreezeAccountModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FreezeAccountModal",
  "props": {
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "hostFeePercent": {
            "name": "number",
            "required": false
          },
          "isFrozen": {
            "name": "bool",
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "parent": {
            "name": "object",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (FreezeAccountModal);

/***/ }),

/***/ 31801:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E_": function() { return /* binding */ DISMISSABLE_HELP_MESSAGE_KEY; },
/* harmony export */   "Mk": function() { return /* binding */ BANNER; },
/* harmony export */   "Zh": function() { return /* binding */ HELP_MESSAGE; }
/* harmony export */ });
var DISMISSABLE_HELP_MESSAGE_KEY = 'dismissedHelpMessages';
/** Defines IDs for dismissable help messages */

var HELP_MESSAGE = {
  EXPENSE_CREATE_INFO: 'EXPENSE_CREATE_INFO',
  CHANGELOG_NOTIFICATION_DROPDOWN: 'CHANGELOG_NOTIFICATION_DROPDOWN'
};
var BANNER = {
  COVID: 'COVID'
};

/***/ }),

/***/ 47162:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Up": function() { return /* binding */ isPastEvent; },
/* harmony export */   "dj": function() { return /* binding */ moneyCanMoveFromEvent; },
/* harmony export */   "qP": function() { return /* binding */ sortEvents; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43174);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75472);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Returns true if the event is passed
 */
var isPastEvent = function isPastEvent(event) {
  if (!event.endsAt) {
    return false;
  } else {
    var oneDay = 24 * 60 * 60 * 1000;
    var isOverSince = new Date().getTime() - new Date(event.endsAt).getTime();
    return isOverSince > oneDay;
  }
};
/**
 * Can only withraw the money from event if it's over.
 */

var moneyCanMoveFromEvent = function moneyCanMoveFromEvent(event) {
  if (lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(event, 'stats.balance', 0) <= 0) {
    return false;
  }

  return new Date().getTime() >= new Date(event.endsAt).getTime();
};
var sortEvents = function sortEvents(events) {
  // eslint-disable-next-line react/display-name
  var getDate = function getDate(column) {
    return function (event) {
      return !event[column] ? null : new Date(event[column]);
    };
  };

  var _partition2 = lodash_partition__WEBPACK_IMPORTED_MODULE_2___default()(events, isPastEvent),
      _partition3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_partition2, 2),
      pastEvents = _partition3[0],
      presentEvents = _partition3[1];

  var iteratees = [getDate('startsAt'), getDate('endsAt'), 'id'];
  return [].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(presentEvents, iteratees, ['asc', 'asc', 'asc'])), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(pastEvents, iteratees, ['desc', 'desc', 'desc'])));
};

/***/ }),

/***/ 55348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


var useGlobalBlur = function useGlobalBlur(ref, callback) {
  var closingEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['mousedown'];

  var wasOutside = function wasOutside(e) {
    var currentRef = ref instanceof HTMLElement ? ref : ref === null || ref === void 0 ? void 0 : ref.current;
    callback(!(currentRef !== null && currentRef !== void 0 && currentRef.contains(e.target)));
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    closingEvents.forEach(function (closingEvent) {
      return document.addEventListener(closingEvent, wasOutside, false);
    });
    return function () {
      return closingEvents.forEach(function (closingEvent) {
        return document.removeEventListener(closingEvent, wasOutside, false);
      });
    };
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (useGlobalBlur);

/***/ })

}]);
//# sourceMappingURL=146-83056b548e43a9e2.js.map